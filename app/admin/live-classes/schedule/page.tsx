'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function ScheduleClassPage() {
  const [platform, setPlatform] = useState<'link'|'builtin'>('link');
  const [recurring, setRecurring] = useState(false);

  return (
    <AdminLayout title="Schedule Live Class" breadcrumb="Home / Live Classes / Schedule">
      <div style={{ maxWidth: 680 }}>
        <div className="card">
          <div className="card-body">
            <h5 className="fw-bold mb-4">
              <i className="ti tabler-video me-2 text-primary"></i>Class Details
            </h5>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label">Course *</label>
                <select className="form-select">
                  <option>Criminal Law Fundamentals</option>
                  <option>Constitutional Law Mastery</option>
                  <option>CLAT 2025 Preparation</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Module / Section</label>
                <select className="form-select">
                  <option>Module 2: Offences Against Person</option>
                  <option>Module 1: Introduction</option>
                  <option>Module 3: Property Offences</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Class Topic *</label>
              <input className="form-control" placeholder="e.g. Section 302 & Murder — Case Studies" />
            </div>
            <div className="row g-3 mb-3">
              <div className="col-md-4">
                <label className="form-label">Date *</label>
                <input className="form-control" type="date" defaultValue="2025-04-01" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Start Time *</label>
                <input className="form-control" type="time" defaultValue="10:00" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Duration</label>
                <select className="form-select">
                  <option>30 min</option><option>45 min</option><option>60 min</option>
                  <option>90 min</option><option>120 min</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Platform</label>
              <div className="row g-3">
                {([['link','tabler-link','Paste External Link','Zoom, Google Meet, etc.'],['builtin','tabler-device-desktop','Use Built-in Room','LexEd integrated room']] as const).map(([val, icon, label, sub]) => (
                  <div key={val} className="col-md-6">
                    <label className={`d-flex align-items-center gap-3 p-3 rounded border cursor-pointer${platform === val ? ' border-primary bg-label-primary' : ''}`} style={{ cursor: 'pointer' }}>
                      <input type="radio" className="form-check-input mt-0" name="platform" value={val} checked={platform === val} onChange={() => setPlatform(val)} />
                      <i className={`ti ${icon} fs-4`}></i>
                      <div>
                        <div className="fw-semibold small">{label}</div>
                        <small className="text-body-secondary">{sub}</small>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              {platform === 'link' && (
                <input className="form-control mt-3" placeholder="https://zoom.us/j/..." />
              )}
            </div>

            <div className="border-top pt-3 mb-3">
              <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                <div>
                  <div className="fw-semibold small">Notify Enrolled Students</div>
                  <small className="text-body-secondary">Send email + in-app notification to 342 enrolled students</small>
                </div>
                <div className="form-check form-switch mb-0">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3">
                <div>
                  <div className="fw-semibold small">Recurring Class</div>
                  <small className="text-body-secondary">Repeat this class on a schedule</small>
                </div>
                <div className="form-check form-switch mb-0">
                  <input className="form-check-input" type="checkbox" checked={recurring} onChange={e => setRecurring(e.target.checked)} />
                </div>
              </div>
              {recurring && (
                <div className="mt-2">
                  <label className="form-label">Repeat Frequency</label>
                  <select className="form-select" style={{ maxWidth: 200 }}>
                    <option>Every week</option><option>Every 2 weeks</option><option>Daily</option>
                  </select>
                </div>
              )}
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-primary">
                <i className="ti tabler-check me-1"></i>Save &amp; Schedule
              </button>
              <a href="/admin/live-classes" className="btn btn-outline-secondary">Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
