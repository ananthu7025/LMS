'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const students = [
  { name: 'Arjun Mehta',   email: 'arjun@email.com',  phone: '9876543210', courses: 3, batch: 'Batch A', payment: 'Paid',    active: 'Today',     progress: 68 },
  { name: 'Sunita Kapoor', email: 'sunita@email.com', phone: '9988776655', courses: 2, batch: 'Batch A', payment: 'Paid',    active: 'Yesterday', progress: 92 },
  { name: 'Vikram Joshi',  email: 'vikram@email.com', phone: '9123456789', courses: 1, batch: 'Batch B', payment: 'Pending', active: 'Mar 25',    progress: 45 },
  { name: 'Deepa Nair',    email: 'deepa@email.com',  phone: '9234567890', courses: 2, batch: 'Batch B', payment: 'Paid',    active: 'Mar 27',    progress: 30 },
  { name: 'Rahul Sharma',  email: 'rahul@email.com',  phone: '9345678901', courses: 4, batch: 'Batch A', payment: 'Paid',    active: 'Mar 28',    progress: 100 },
  { name: 'Meera Iyer',    email: 'meera@email.com',  phone: '9456789012', courses: 1, batch: 'Batch C', payment: 'Paid',    active: 'Mar 26',    progress: 55 },
  { name: 'Karan Singh',   email: 'karan@email.com',  phone: '9567890123', courses: 2, batch: 'Batch B', payment: 'Failed',  active: 'Mar 20',    progress: 12 },
  { name: 'Pooja Verma',   email: 'pooja@email.com',  phone: '9678901234', courses: 3, batch: 'Batch A', payment: 'Paid',    active: 'Today',     progress: 78 },
];

const payBadge: Record<string, string> = { Paid: 'bg-label-success', Pending: 'bg-label-warning', Failed: 'bg-label-danger' };

export default function StudentsPage() {
  const [showAdd, setShowAdd] = useState(false);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  return (
    <AdminLayout title="Students" breadcrumb="Home / Students">

      {/* Filters + Add */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div className="d-flex flex-wrap gap-2">
          <input className="form-control" style={{ maxWidth: 240 }} placeholder="Search name, email, phone..." />
          <select className="form-select" style={{ maxWidth: 160 }}><option>All Courses</option><option>Criminal Law</option><option>Constitutional Law</option></select>
          <select className="form-select" style={{ maxWidth: 120 }}><option>All Batches</option><option>Batch A</option><option>Batch B</option><option>Batch C</option></select>
          <select className="form-select" style={{ maxWidth: 130 }}><option>All Payments</option><option>Paid</option><option>Pending</option><option>Failed</option></select>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
          <i className="ti tabler-plus me-1"></i>Add Student
        </button>
      </div>

      {/* Bulk action bar */}
      {selected.size > 0 && (
        <div className="alert alert-primary d-flex align-items-center gap-3 mb-3">
          <span className="fw-semibold">{selected.size} selected</span>
          {[['tabler-mail','Send Message'],['tabler-download','Export CSV'],['tabler-check','Mark Paid'],['tabler-package','Assign Batch']].map(([icon, label]) => (
            <button key={label as string} className="btn btn-sm btn-outline-primary">
              <i className={`ti ${icon as string} me-1`}></i>{label as string}
            </button>
          ))}
        </div>
      )}

      {/* Table */}
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th><input type="checkbox" className="form-check-input" onChange={e => setSelected(e.target.checked ? new Set(students.map((_, i) => i)) : new Set())} /></th>
                <th>Student</th><th>Courses</th><th>Batch</th><th>Payment</th><th>Last Active</th><th>Progress</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i}>
                  <td><input type="checkbox" className="form-check-input" checked={selected.has(i)} onChange={e => { const ns = new Set(selected); e.target.checked ? ns.add(i) : ns.delete(i); setSelected(ns); }} /></td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar avatar-sm bg-label-primary rounded-circle">
                        <span className="avatar-initial rounded-circle">{s.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <div className="fw-semibold">{s.name}</div>
                        <small className="text-body-secondary">{s.email}</small>
                      </div>
                    </div>
                  </td>
                  <td className="fw-semibold">{s.courses}</td>
                  <td><span className="badge bg-label-primary">{s.batch}</span></td>
                  <td><span className={`badge ${payBadge[s.payment]}`}>{s.payment}</span></td>
                  <td className="text-body-secondary">{s.active}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress progress-sm flex-grow-1" style={{ minWidth: 60 }}>
                        <div className="progress-bar bg-primary" style={{ width: `${s.progress}%` }}></div>
                      </div>
                      <small className="fw-semibold">{s.progress}%</small>
                    </div>
                  </td>
                  <td>
                    <a href="/admin/students/1" className="btn btn-sm btn-outline-primary">View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-body-secondary">Showing 1–8 of 1,247 students</small>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              {['‹','1','2','3','...','156','›'].map((p, i) => (
                <li key={i} className={`page-item${p === '1' ? ' active' : ''}`}>
                  <a className="page-link" href="#">{p}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Add Student Modal */}
      {showAdd && (
        <div className="modal show d-block" tabIndex={-1} style={{ background: 'rgba(0,0,0,0.4)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Student Manually</h5>
                <button type="button" className="btn-close" onClick={() => setShowAdd(false)}></button>
              </div>
              <div className="modal-body">
                {[['Full Name','text','Rahul Kumar'],['Email','email','rahul@email.com'],['Phone','tel','9876543210'],['City','text','New Delhi']].map(([label, type, placeholder]) => (
                  <div key={label as string} className="mb-3">
                    <label className="form-label">{label as string}</label>
                    <input className="form-control" type={type as string} placeholder={placeholder as string} />
                  </div>
                ))}
                <div className="mb-3">
                  <label className="form-label">Enroll in Course</label>
                  <select className="form-select">
                    <option>Criminal Law Fundamentals</option>
                    <option>Constitutional Law Mastery</option>
                    <option>CLAT 2025 Preparation</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-secondary" onClick={() => setShowAdd(false)}>Cancel</button>
                <button className="btn btn-primary">Add &amp; Enroll</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}
