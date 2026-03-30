'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function AnnouncementsPage() {
  const [audience, setAudience] = useState<'all' | 'course' | 'batch'>('all');
  const [showModal, setShowModal] = useState(true);
  const [scheduled, setScheduled] = useState(false);

  return (
    <AdminLayout active="/admin/announcements" title="Announcements" breadcrumb="Home / Announcements">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
        {/* Compose */}
        <div className="card" style={{ padding: 24 }}>
          <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>📢 Send Announcement</h3>

          <div style={{ marginBottom: 18 }}>
            <label className="form-label">Audience</label>
            <div style={{ display: 'flex', gap: 10 }}>
              {([['all','🏫 All Students (1,247)'],['course','📚 Specific Course'],['batch','📦 Specific Batch']] as const).map(([val, label]) => (
                <label key={val} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', border: `2px solid ${audience === val ? 'var(--primary)' : 'var(--border)'}`, borderRadius: 8, cursor: 'pointer', background: audience === val ? 'var(--primary-light)' : '#fff', flex: 1, fontSize: 13, fontWeight: audience === val ? 600 : 400 }}>
                  <input type="radio" name="audience" value={val} checked={audience === val} onChange={() => setAudience(val)} style={{ accentColor: 'var(--primary)' }} />
                  {label}
                </label>
              ))}
            </div>
            {audience === 'course' && (
              <select className="form-input" style={{ marginTop: 10 }}>
                <option>Criminal Law Fundamentals (342 students)</option>
                <option>Constitutional Law Mastery (218 students)</option>
                <option>CLAT 2025 Preparation (290 students)</option>
              </select>
            )}
            {audience === 'batch' && (
              <select className="form-input" style={{ marginTop: 10 }}>
                <option>Batch A (412 students)</option>
                <option>Batch B (389 students)</option>
                <option>Batch C (214 students)</option>
              </select>
            )}
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="form-label">Message Title</label>
            <input className="form-input" defaultValue="Important: April Live Class Schedule Updated" />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="form-label">Message Body</label>
            {/* Toolbar */}
            <div style={{ display: 'flex', gap: 4, padding: '8px 10px', border: '1px solid var(--border)', borderRadius: '8px 8px 0 0', background: '#fafafa', borderBottom: 'none', flexWrap: 'wrap' }}>
              {['B', 'I', 'U', '—', '≡', '⊞', '—', '🔗', '📷'].map((btn, i) => (
                btn === '—' ? <div key={i} style={{ width: 1, background: 'var(--border)', margin: '0 4px' }} /> :
                <button key={i} style={{ padding: '4px 8px', border: '1px solid var(--border)', borderRadius: 4, background: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>{btn}</button>
              ))}
            </div>
            <textarea className="form-input" style={{ borderRadius: '0 0 8px 8px', height: 120, resize: 'vertical' }} defaultValue="Dear Students,&#10;&#10;Please note that the live classes for April have been rescheduled. The Criminal Law session has been moved to April 2nd at 10 AM.&#10;&#10;Please check the Live Classes section for the updated schedule.&#10;&#10;Regards,&#10;Sharma Law Academy" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, padding: '12px 0', borderTop: '1px solid var(--border)' }}>
            <div className="toggle off" />
            <span style={{ fontSize: 13 }}>📎 Attach File (PDF)</span>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label className="form-label">Delivery Channels</label>
            <div style={{ display: 'flex', gap: 12 }}>
              {[['📲 In-app Notification', true], ['📧 Email', true], ['Both', false]].map(([label, checked]) => (
                <label key={label as string} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', border: `2px solid ${checked ? 'var(--primary)' : 'var(--border)'}`, borderRadius: 8, cursor: 'pointer', background: checked ? 'var(--primary-light)' : '#fff', fontSize: 13 }}>
                  <input type="checkbox" defaultChecked={checked as boolean} style={{ accentColor: 'var(--primary)' }} />
                  {label as string}
                </label>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderTop: '1px solid var(--border)', marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>🕐 Schedule for Later</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Send at a specific date and time</div>
            </div>
            <div className={`toggle ${scheduled ? '' : 'off'}`} onClick={() => setScheduled(s => !s)} />
          </div>
          {scheduled && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div><label className="form-label">Date</label><input className="form-input" type="date" defaultValue="2025-04-01" /></div>
              <div><label className="form-label">Time</label><input className="form-input" type="time" defaultValue="09:00" /></div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn-outline">👁️ Preview</button>
            <button className="btn-primary" onClick={() => setShowModal(true)} style={{ flex: 1 }}>{scheduled ? '📅 Schedule Send' : '📢 Send Now'}</button>
          </div>
        </div>

        {/* Sent History */}
        <div className="card" style={{ padding: 20, height: 'fit-content' }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>📋 Recent Announcements</div>
          {[
            { title: 'Mock Test Results Published', time: 'Mar 28', audience: 'All', delivery: 'Email + App' },
            { title: 'April Live Class Schedule', time: 'Mar 25', audience: 'All', delivery: 'Email + App' },
            { title: 'New Study Material Added', time: 'Mar 20', audience: 'Criminal Law', delivery: 'App' },
            { title: 'Holiday Notice — Holi', time: 'Mar 10', audience: 'All', delivery: 'Email + App' },
          ].map((a, i) => (
            <div key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{a.title}</div>
              <div style={{ display: 'flex', gap: 8, fontSize: 11, color: 'var(--text-muted)' }}>
                <span>📅 {a.time}</span>
                <span>👥 {a.audience}</span>
                <span>📡 {a.delivery}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="card" style={{ width: 440, padding: 28 }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ fontSize: 40, marginBottom: 10 }}>📢</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Confirm Announcement</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>You are about to send this announcement to:</p>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--primary)', margin: '12px 0' }}>1,247 students</div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>via Email + In-app Notification</p>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn-outline" style={{ flex: 1 }} onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn-primary" style={{ flex: 1 }} onClick={() => setShowModal(false)}>✅ Confirm & Send</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
