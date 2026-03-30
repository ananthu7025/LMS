'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

const tutors = [
  { name: 'Anil Kumar', email: 'anil@sharmalaw.in', spec: 'Criminal Law', courses: 3, students: 466, status: 'Active' },
  { name: 'Priya Nair', email: 'priya@sharmalaw.in', spec: 'Constitutional Law', courses: 2, students: 340, status: 'Active' },
  { name: 'Meera Sharma', email: 'meera@gmail.com', spec: 'Family Law', courses: 1, students: 0, status: 'Invited' },
  { name: 'Rajiv Bose', email: 'rajiv@gmail.com', spec: 'Evidence Law', courses: 1, students: 124, status: 'Active' },
  { name: 'Kiran Patel', email: 'kiran@gmail.com', spec: 'Contract Law', courses: 0, students: 0, status: 'Inactive' },
];

const statusStyle: Record<string, string> = { Active: 'badge-success', Invited: 'badge-warning', Inactive: 'badge-secondary' };

export default function TutorsPage() {
  return (
    <AdminLayout active="/admin/tutors" title="Tutors" breadcrumb="Home / Tutors">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <input className="form-input" style={{ maxWidth: 280 }} placeholder="🔍 Search tutors..." />
        <a href="/admin/tutors/invite"><button className="btn-primary">＋ Invite Tutor</button></a>
      </div>
      <div className="card" style={{ overflow: 'hidden' }}>
        <table>
          <thead><tr><th>Tutor</th><th>Specialization</th><th>Courses</th><th>Students</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {tutors.map(t => (
              <tr key={t.name}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13 }}>{t.name.split(' ').map(n => n[0]).join('')}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13.5 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{t.email}</div>
                    </div>
                  </div>
                </td>
                <td><span className="badge badge-info">{t.spec}</span></td>
                <td style={{ fontWeight: 600 }}>{t.courses}</td>
                <td style={{ fontWeight: 600 }}>{t.students}</td>
                <td><span className={`badge ${statusStyle[t.status]}`}>{t.status}</span></td>
                <td>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button className="btn-outline" style={{ fontSize: 12, padding: '5px 10px' }}>Edit Permissions</button>
                    <button className="btn-outline" style={{ fontSize: 12, padding: '5px 10px' }}>Assign Course</button>
                    {t.status === 'Active' && <button style={{ background: '#fde8e8', border: 'none', color: 'var(--error)', borderRadius: 6, padding: '5px 10px', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>Deactivate</button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
