'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

const perms = [
  { label: 'Upload video lessons',                   checked: true },
  { label: 'Upload PDF notes',                       checked: true },
  { label: 'Create quizzes',                         checked: true },
  { label: 'Schedule and conduct live classes',       checked: true },
  { label: 'View student progress',                  checked: true },
  { label: 'Reply to student doubts',                checked: true },
  { label: 'Review and grade assignments',           checked: false },
];

export default function InviteTutorPage() {
  return (
    <AdminLayout title="Invite Tutor" breadcrumb="Home / Tutors / Invite">
      <div style={{ maxWidth: 720 }}>
        <div className="card">
          <div className="card-body">
            <h5 className="fw-bold mb-4">
              <i className="ti tabler-mail me-2 text-primary"></i>Tutor Details
            </h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input className="form-control" placeholder="e.g. Dr. Anita Desai" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email Address</label>
                <input className="form-control" type="email" placeholder="tutor@email.com" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Subject Specialization</label>
                <select className="form-select">
                  <option>Criminal Law</option><option>Constitutional Law</option><option>Civil Law</option>
                  <option>Evidence Law</option><option>Family Law</option><option>Contract Law</option><option>Corporate Law</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Assign to Course (Optional)</label>
                <select className="form-select">
                  <option>— Select Course —</option>
                  <option>Criminal Law Fundamentals</option>
                  <option>Constitutional Law Mastery</option>
                  <option>CLAT 2025 Preparation</option>
                </select>
              </div>
            </div>

            <div className="border-top pt-4">
              <h6 className="fw-bold mb-3">
                <i className="ti tabler-lock me-2 text-primary"></i>Permissions
              </h6>
              <div className="row g-3">
                {perms.map(p => (
                  <div key={p.label} className="col-md-6">
                    <div className={`d-flex align-items-center gap-3 p-3 rounded border${p.checked ? ' border-primary bg-label-primary' : ''}`}>
                      <input type="checkbox" className="form-check-input mt-0" defaultChecked={p.checked} />
                      <span className="small fw-medium">{p.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="alert alert-secondary mt-4">
              <strong>What happens next:</strong> The tutor will receive an email with a link to set up their account and password. They can log in at <strong>sharma-law.lexed.in</strong>
            </div>

            <div className="d-flex gap-2 mt-3">
              <button className="btn btn-primary">
                <i className="ti tabler-mail me-1"></i>Send Invitation
              </button>
              <a href="/admin/tutors" className="btn btn-outline-secondary">Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
