'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

export default function TutorScheduleClassPage() {
  return (
    <TutorLayout active="/tutor/live-classes/schedule" title="Schedule Live Class" breadcrumb="Home / Live Classes / Schedule">
      <div style={{ maxWidth: 620 }}>
        <div className="card" style={{ padding: 28 }}>
          <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>📅 Schedule a Class</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <label className="form-label">Course</label>
              <select className="form-input"><option>Criminal Law Fundamentals</option><option>Constitutional Law Mastery</option></select>
            </div>
            <div>
              <label className="form-label">Module / Section</label>
              <select className="form-input"><option>Module 2: Offences Against Person</option><option>Module 1: Introduction</option></select>
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label className="form-label">Class Topic *</label>
            <input className="form-input" placeholder="e.g. Section 302 & Murder Case Studies" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div><label className="form-label">Date *</label><input className="form-input" type="date" defaultValue="2025-04-01" /></div>
            <div><label className="form-label">Start Time</label><input className="form-input" type="time" defaultValue="10:00" /></div>
            <div><label className="form-label">Duration</label><select className="form-input"><option>60 min</option><option>90 min</option><option>120 min</option></select></div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label className="form-label">Platform</label>
            <div style={{ display: 'flex', gap: 12 }}>
              <label style={{ flex: 1, display: 'flex', gap: 8, padding: '10px 14px', border: '2px solid var(--primary)', borderRadius: 8, cursor: 'pointer', background: 'var(--primary-light)', alignItems: 'center' }}>
                <input type="radio" name="platform" defaultChecked style={{ accentColor: 'var(--primary)' }} />
                <span style={{ fontSize: 13, fontWeight: 600 }}>🔗 Paste Meeting Link</span>
              </label>
              <label style={{ flex: 1, display: 'flex', gap: 8, padding: '10px 14px', border: '1px solid var(--border)', borderRadius: 8, cursor: 'pointer', alignItems: 'center' }}>
                <input type="radio" name="platform" style={{ accentColor: 'var(--primary)' }} />
                <span style={{ fontSize: 13 }}>🖥️ Built-in Room</span>
              </label>
            </div>
            <input className="form-input" style={{ marginTop: 10 }} placeholder="https://zoom.us/j/..." />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderTop: '1px solid var(--border)', marginBottom: 8 }}>
            <div><div style={{ fontSize: 14, fontWeight: 600 }}>📨 Notify Students</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Email + in-app notification to 342 enrolled students</div></div>
            <div className="toggle" />
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            <button className="btn-primary">✅ Save & Schedule</button>
            <a href="/tutor/dashboard"><button className="btn-outline">Cancel</button></a>
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}
