'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const students = [
  { name: 'Arjun Mehta', email: 'arjun@email.com', phone: '9876543210', courses: 3, batch: 'Batch A', payment: 'Paid', active: 'Today', progress: 68 },
  { name: 'Sunita Kapoor', email: 'sunita@email.com', phone: '9988776655', courses: 2, batch: 'Batch A', payment: 'Paid', active: 'Yesterday', progress: 92 },
  { name: 'Vikram Joshi', email: 'vikram@email.com', phone: '9123456789', courses: 1, batch: 'Batch B', payment: 'Pending', active: 'Mar 25', progress: 45 },
  { name: 'Deepa Nair', email: 'deepa@email.com', phone: '9234567890', courses: 2, batch: 'Batch B', payment: 'Paid', active: 'Mar 27', progress: 30 },
  { name: 'Rahul Sharma', email: 'rahul@email.com', phone: '9345678901', courses: 4, batch: 'Batch A', payment: 'Paid', active: 'Mar 28', progress: 100 },
  { name: 'Meera Iyer', email: 'meera@email.com', phone: '9456789012', courses: 1, batch: 'Batch C', payment: 'Paid', active: 'Mar 26', progress: 55 },
  { name: 'Karan Singh', email: 'karan@email.com', phone: '9567890123', courses: 2, batch: 'Batch B', payment: 'Failed', active: 'Mar 20', progress: 12 },
  { name: 'Pooja Verma', email: 'pooja@email.com', phone: '9678901234', courses: 3, batch: 'Batch A', payment: 'Paid', active: 'Today', progress: 78 },
];

const payStyle: Record<string, string> = { Paid: 'badge-success', Pending: 'badge-warning', Failed: 'badge-error' };

export default function StudentsPage() {
  const [showAdd, setShowAdd] = useState(false);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  return (
    <AdminLayout active="/admin/students" title="Students" breadcrumb="Home / Students">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <input className="form-input" style={{ maxWidth: 240 }} placeholder="🔍 Search name, email, phone..." />
          <select className="form-input" style={{ maxWidth: 160 }}><option>All Courses</option><option>Criminal Law</option><option>Constitutional Law</option></select>
          <select className="form-input" style={{ maxWidth: 120 }}><option>All Batches</option><option>Batch A</option><option>Batch B</option><option>Batch C</option></select>
          <select className="form-input" style={{ maxWidth: 130 }}><option>All Payments</option><option>Paid</option><option>Pending</option><option>Failed</option></select>
        </div>
        <button className="btn-primary" onClick={() => setShowAdd(true)}>＋ Add Student</button>
      </div>

      {selected.size > 0 && (
        <div style={{ display: 'flex', gap: 10, marginBottom: 14, padding: '10px 16px', background: 'var(--primary-light)', borderRadius: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--primary)' }}>{selected.size} selected</span>
          {[['📨 Send Message', 'var(--primary)'], ['📥 Export CSV', 'var(--success)'], ['✅ Mark Paid', 'var(--success)'], ['📦 Assign Batch', 'var(--info)']].map(([label, color]) => (
            <button key={label as string} style={{ background: '#fff', border: `1px solid ${color as string}`, color: color as string, borderRadius: 6, padding: '5px 12px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{label as string}</button>
          ))}
        </div>
      )}

      <div className="card" style={{ overflow: 'hidden' }}>
        <table>
          <thead><tr>
            <th><input type="checkbox" onChange={e => setSelected(e.target.checked ? new Set(students.map((_, i) => i)) : new Set())} /></th>
            <th>Student</th><th>Courses</th><th>Batch</th><th>Payment</th><th>Last Active</th><th>Progress</th><th>Actions</th>
          </tr></thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td><input type="checkbox" checked={selected.has(i)} onChange={e => { const ns = new Set(selected); e.target.checked ? ns.add(i) : ns.delete(i); setSelected(ns); }} /></td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: 'var(--primary)' }}>{s.name.split(' ').map(n => n[0]).join('')}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13.5 }}>{s.name}</div>
                      <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>{s.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{ fontWeight: 600 }}>{s.courses}</td>
                <td><span className="badge badge-primary">{s.batch}</span></td>
                <td><span className={`badge ${payStyle[s.payment]}`}>{s.payment}</span></td>
                <td style={{ color: 'var(--text-muted)', fontSize: 13 }}>{s.active}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div className="progress-bar" style={{ width: 60 }}><div className="progress-fill" style={{ width: `${s.progress}%` }} /></div>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{s.progress}%</span>
                  </div>
                </td>
                <td>
                  <a href="/admin/students/1"><button className="btn-outline" style={{ fontSize: 12, padding: '5px 10px' }}>View</button></a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px', borderTop: '1px solid var(--border)' }}>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Showing 1–8 of 1,247 students</span>
          <div style={{ display: 'flex', gap: 6 }}>
            {['‹','1','2','3','...','156','›'].map((p, i) => <button key={i} style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid var(--border)', background: p === '1' ? 'var(--primary)' : '#fff', color: p === '1' ? '#fff' : 'var(--text-primary)', cursor: 'pointer', fontSize: 12 }}>{p}</button>)}
          </div>
        </div>
      </div>

      {/* Add Student Modal */}
      {showAdd && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="card" style={{ width: 480, padding: 28, maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
              <h3 style={{ fontWeight: 700, fontSize: 16 }}>Add Student Manually</h3>
              <button onClick={() => setShowAdd(false)} style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: 'var(--text-muted)' }}>✕</button>
            </div>
            {[['Full Name', 'text', 'Rahul Kumar'],['Email', 'email', 'rahul@email.com'],['Phone', 'tel', '9876543210'],['City', 'text', 'New Delhi']].map(([label, type, placeholder]) => (
              <div key={label as string} style={{ marginBottom: 14 }}>
                <label className="form-label">{label as string}</label>
                <input className="form-input" type={type as string} placeholder={placeholder as string} />
              </div>
            ))}
            <div style={{ marginBottom: 14 }}>
              <label className="form-label">Enroll in Course</label>
              <select className="form-input"><option>Criminal Law Fundamentals</option><option>Constitutional Law Mastery</option><option>CLAT 2025 Preparation</option></select>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              <button className="btn-primary" style={{ flex: 1 }}>Add & Enroll</button>
              <button className="btn-outline" onClick={() => setShowAdd(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
