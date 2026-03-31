'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

const tutors = [
  { name: 'Anil Kumar',    email: 'anil@sharmalaw.in',  spec: 'Criminal Law',      courses: 3, students: 466, status: 'Active' },
  { name: 'Priya Nair',    email: 'priya@sharmalaw.in', spec: 'Constitutional Law', courses: 2, students: 340, status: 'Active' },
  { name: 'Meera Sharma',  email: 'meera@gmail.com',    spec: 'Family Law',         courses: 1, students: 0,   status: 'Invited' },
  { name: 'Rajiv Bose',    email: 'rajiv@gmail.com',    spec: 'Evidence Law',       courses: 1, students: 124, status: 'Active' },
  { name: 'Kiran Patel',   email: 'kiran@gmail.com',    spec: 'Contract Law',       courses: 0, students: 0,   status: 'Inactive' },
];

const statusBadge: Record<string, string> = { Active: 'bg-label-success', Invited: 'bg-label-warning', Inactive: 'bg-label-secondary' };

export default function TutorsPage() {
  return (
    <AdminLayout title="Tutors" breadcrumb="Home / Tutors">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <input className="form-control" style={{ maxWidth: 280 }} placeholder="Search tutors..." />
        <a href="/admin/tutors/invite" className="btn btn-primary">
          <i className="ti tabler-plus me-1"></i>Invite Tutor
        </a>
      </div>
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr><th>Tutor</th><th>Specialization</th><th>Courses</th><th>Students</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {tutors.map(t => (
                <tr key={t.name}>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar bg-label-primary rounded-circle">
                        <span className="avatar-initial rounded-circle">{t.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <div className="fw-semibold">{t.name}</div>
                        <small className="text-body-secondary">{t.email}</small>
                      </div>
                    </div>
                  </td>
                  <td><span className="badge bg-label-info">{t.spec}</span></td>
                  <td className="fw-semibold">{t.courses}</td>
                  <td className="fw-semibold">{t.students}</td>
                  <td><span className={`badge ${statusBadge[t.status]}`}>{t.status}</span></td>
                  <td>
                    <div className="d-flex gap-2">
                      <button className="btn btn-sm btn-outline-secondary">Edit Permissions</button>
                      <button className="btn btn-sm btn-outline-secondary">Assign Course</button>
                      {t.status === 'Active' && (
                        <button className="btn btn-sm btn-outline-danger">Deactivate</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
