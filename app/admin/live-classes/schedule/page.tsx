'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function ScheduleClassPage() {
  const [platform, setPlatform] = useState<'link' | 'builtin'>('link');
  const [recurring, setRecurring] = useState(false);

  return (
    <AdminLayout active="/admin/live-classes" title="Schedule Live Class" breadcrumb="Home / Live Classes / Schedule">
      <div style={{ maxWidth: 680 }}>
        <div className="card" style={{ padding: 28 }}>
          <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>📹 Class Details</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
            <div>
              <label className="form-label">Course *</label>
              <select className="form-input"><option>Criminal Law Fundamentals</option><option>Constitutional Law Mastery</option><option>CLAT 2025 Preparation</option></select>
            </div>
            <div>
              <label className="form-label">Module / Section</label>
              <select className="form-input"><option>Module 2: Offences Against Person</option><option>Module 1: Introduction</option><option>Module 3: Property Offences</option></select>
            </div>
          </div>
          <div style={{ marginBottom: 18 }}>
            <label className="form-label">Class Topic *</label>
            <input className="form-input" placeholder="e.g. Section 302 & Murder — Case Studies" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 18 }}>
            <div>
              <label className="form-label">Date *</label>
              <input className="form-input" type="date" defaultValue="2025-04-01" />
            </div>
            <div>
              <label className="form-label">Start Time *</label>
              <input className="form-input" type="time" defaultValue="10:00" />
            </div>
            <div>
              <label className="form-label">Duration</label>
              <select className="form-input"><option>30 min</option><option>45 min</option><option>60 min</option><option selected>90 min</option><option>120 min</option></select>
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <label className="form-label">Platform</label>
            <div style={{ display: 'flex', gap: 12 }}>
              {[['link', '🔗 Paste External Link', 'Zoom, Google Meet, etc.'], ['builtin', '🖥️ Use Built-in Room', 'LexEd integrated room']].map(([val, label, sub]) => (
                <label key={val as string} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', border: `2px solid ${platform === val ? 'var(--primary)' : 'var(--border)'}`, borderRadius: 10, cursor: 'pointer', background: platform === val ? 'var(--primary-light)' : '#fff' }}>
                  <input type="radio" name="platform" value={val as string} checked={platform === val} onChange={() => setPlatform(val as 'link' | 'builtin')} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{label as string}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{sub as string}</div>
                  </div>
                </label>
              ))}
            </div>
            {platform === 'link' && <input className="form-input" style={{ marginTop: 10 }} placeholder="https://zoom.us/j/..." />}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderTop: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>📨 Notify Enrolled Students</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Send email + in-app notification to 342 enrolled students</div>
              </div>
              <div className="toggle" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderTop: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>🔁 Recurring Class</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Repeat this class on a schedule</div>
              </div>
              <div className={`toggle ${recurring ? '' : 'off'}`} onClick={() => setRecurring(r => !r)} />
            </div>
            {recurring && (
              <div style={{ marginTop: 4, padding: 14, background: '#fafafa', borderRadius: 8 }}>
                <label className="form-label">Repeat Frequency</label>
                <select className="form-input" style={{ maxWidth: 200 }}><option>Every week</option><option>Every 2 weeks</option><option>Daily</option></select>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>✅ Save & Schedule</button>
            <a href="/admin/live-classes"><button className="btn-outline">Cancel</button></a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
