'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function AnnouncementsPage() {
  const [audience, setAudience] = useState<'all'|'course'|'batch'>('all');
  const [showModal, setShowModal] = useState(true);
  const [scheduled, setScheduled] = useState(false);

  return (
    <AdminLayout title="Announcements" breadcrumb="Home / Announcements">
      <div className="row g-4">

        {/* Compose */}
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <h5 className="fw-bold mb-4">
                <i className="ti tabler-speakerphone me-2 text-primary"></i>Send Announcement
              </h5>

              {/* Audience */}
              <div className="mb-4">
                <label className="form-label">Audience</label>
                <div className="row g-2">
                  {([['all','All Students (1,247)'],['course','Specific Course'],['batch','Specific Batch']] as const).map(([val, label]) => (
                    <div key={val} className="col-md-4">
                      <label className={`d-flex align-items-center gap-2 p-3 rounded border cursor-pointer${audience === val ? ' border-primary bg-label-primary' : ''}`} style={{ cursor: 'pointer' }}>
                        <input type="radio" className="form-check-input mt-0" name="audience" value={val} checked={audience === val} onChange={() => setAudience(val)} />
                        <span className={`small${audience === val ? ' fw-semibold' : ''}`}>{label}</span>
                      </label>
                    </div>
                  ))}
                </div>
                {audience === 'course' && (
                  <select className="form-select mt-2">
                    <option>Criminal Law Fundamentals (342 students)</option>
                    <option>Constitutional Law Mastery (218 students)</option>
                    <option>CLAT 2025 Preparation (290 students)</option>
                  </select>
                )}
                {audience === 'batch' && (
                  <select className="form-select mt-2">
                    <option>Batch A (412 students)</option>
                    <option>Batch B (389 students)</option>
                    <option>Batch C (214 students)</option>
                  </select>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Message Title</label>
                <input className="form-control" defaultValue="Important: April Live Class Schedule Updated" />
              </div>

              <div className="mb-4">
                <label className="form-label">Message Body</label>
                <div className="border rounded-top px-2 py-2 bg-light border-bottom-0 d-flex gap-1 flex-wrap">
                  {['B','I','U','|','≡','⊞','|','Link','Image'].map((btn, i) => (
                    btn === '|' ? <div key={i} className="vr mx-1"></div> :
                    <button key={i} className="btn btn-sm btn-outline-secondary fw-bold py-0">{btn}</button>
                  ))}
                </div>
                <textarea className="form-control rounded-top-0" rows={5} defaultValue={`Dear Students,\n\nPlease note that the live classes for April have been rescheduled. The Criminal Law session has been moved to April 2nd at 10 AM.\n\nRegards,\nSharma Law Academy`} />
              </div>

              {/* Delivery channels */}
              <div className="mb-4">
                <label className="form-label">Delivery Channels</label>
                <div className="d-flex gap-3">
                  {[['In-app Notification',true],['Email',true]].map(([label, checked]) => (
                    <div key={label as string} className={`d-flex align-items-center gap-2 px-3 py-2 rounded border${checked ? ' border-primary bg-label-primary' : ''}`}>
                      <input type="checkbox" className="form-check-input mt-0" defaultChecked={checked as boolean} />
                      <small>{label as string}</small>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule toggle */}
              <div className="d-flex align-items-center justify-content-between py-3 border-top mb-3">
                <div>
                  <div className="fw-semibold small">Schedule for Later</div>
                  <small className="text-body-secondary">Send at a specific date and time</small>
                </div>
                <div className="form-check form-switch mb-0">
                  <input className="form-check-input" type="checkbox" checked={scheduled} onChange={e => setScheduled(e.target.checked)} />
                </div>
              </div>
              {scheduled && (
                <div className="row g-3 mb-3">
                  <div className="col-md-6"><label className="form-label">Date</label><input className="form-control" type="date" defaultValue="2025-04-01" /></div>
                  <div className="col-md-6"><label className="form-label">Time</label><input className="form-control" type="time" defaultValue="09:00" /></div>
                </div>
              )}

              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary"><i className="ti tabler-eye me-1"></i>Preview</button>
                <button className="btn btn-primary flex-grow-1" onClick={() => setShowModal(true)}>
                  <i className={`ti ${scheduled ? 'tabler-calendar' : 'tabler-speakerphone'} me-1`}></i>
                  {scheduled ? 'Schedule Send' : 'Send Now'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body">
              <h6 className="fw-bold mb-4">
                <i className="ti tabler-list me-2 text-primary"></i>Recent Announcements
              </h6>
              {[
                { title: 'Mock Test Results Published',    time: 'Mar 28', audience: 'All', delivery: 'Email + App' },
                { title: 'April Live Class Schedule',      time: 'Mar 25', audience: 'All', delivery: 'Email + App' },
                { title: 'New Study Material Added',       time: 'Mar 20', audience: 'Criminal Law', delivery: 'App' },
                { title: 'Holiday Notice — Holi',          time: 'Mar 10', audience: 'All', delivery: 'Email + App' },
              ].map((a, i) => (
                <div key={i} className="py-3 border-bottom">
                  <div className="fw-semibold small mb-1">{a.title}</div>
                  <div className="d-flex gap-2">
                    <small className="text-body-secondary"><i className="ti tabler-calendar me-1"></i>{a.time}</small>
                    <small className="text-body-secondary"><i className="ti tabler-users me-1"></i>{a.audience}</small>
                    <small className="text-body-secondary"><i className="ti tabler-broadcast me-1"></i>{a.delivery}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex={-1} style={{ background: 'rgba(0,0,0,0.4)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center p-5">
                <i className="ti tabler-speakerphone text-primary mb-3" style={{ fontSize: 48 }}></i>
                <h4 className="fw-bold mb-2">Confirm Announcement</h4>
                <p className="text-body-secondary">You are about to send this announcement to:</p>
                <h2 className="fw-bold text-primary my-3">1,247 students</h2>
                <p className="text-body-secondary small">via Email + In-app Notification</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-secondary flex-grow-1" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="btn btn-primary flex-grow-1" onClick={() => setShowModal(false)}>
                  <i className="ti tabler-check me-1"></i>Confirm &amp; Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
