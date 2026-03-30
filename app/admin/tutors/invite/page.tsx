'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

const perms = [
  { label: 'Upload video lessons', checked: true },
  { label: 'Upload PDF notes', checked: true },
  { label: 'Create quizzes', checked: true },
  { label: 'Schedule and conduct live classes', checked: true },
  { label: 'View student progress', checked: true },
  { label: 'Reply to student doubts', checked: true },
  { label: 'Review and grade assignments', checked: false },
];

export default function InviteTutorPage() {
  return (
    <AdminLayout active="/admin/tutors" title="Invite Tutor" breadcrumb="Home / Tutors / Invite">
      <div style={{ maxWidth: 720 }}>
        <div className="card" style={{ padding: 28 }}>
          <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>📧 Tutor Details</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div><label className="form-label">Full Name</label><input className="form-input" placeholder="e.g. Dr. Anita Desai" /></div>
            <div><label className="form-label">Email Address</label><input className="form-input" type="email" placeholder="tutor@email.com" /></div>
            <div>
              <label className="form-label">Subject Specialization</label>
              <select className="form-input"><option>Criminal Law</option><option>Constitutional Law</option><option>Civil Law</option><option>Evidence Law</option><option>Family Law</option><option>Contract Law</option><option>Corporate Law</option></select>
            </div>
            <div>
              <label className="form-label">Assign to Course (Optional)</label>
              <select className="form-input"><option>— Select Course —</option><option>Criminal Law Fundamentals</option><option>Constitutional Law Mastery</option><option>CLAT 2025 Preparation</option></select>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>🔒 Permissions</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {perms.map(p => (
                <label key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', padding: '10px 14px', borderRadius: 8, border: '1px solid var(--border)', background: p.checked ? 'var(--primary-light)' : '#fff' }}>
                  <input type="checkbox" defaultChecked={p.checked} style={{ width: 16, height: 16, accentColor: 'var(--primary)' }} />
                  <span style={{ fontSize: 13.5, fontWeight: 500 }}>{p.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 24, padding: 16, background: '#fafafa', borderRadius: 10, fontSize: 13, color: 'var(--text-muted)' }}>
            <strong>📨 What happens next:</strong> The tutor will receive an email with a link to set up their account and password. They can log in to your institute subdomain at <strong>sharma-law.lexed.in</strong>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            <button className="btn-primary">📨 Send Invitation</button>
            <a href="/admin/tutors"><button className="btn-outline">Cancel</button></a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
