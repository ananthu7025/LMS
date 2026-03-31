'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const courses = [
  { title: 'Criminal Law Fundamentals',        category: 'Criminal Law',      students: 342, tutor: 'Anil Kumar',   status: 'Published', revenue: '₹68,400', color: '#7367F0' },
  { title: 'Constitutional Law Mastery',        category: 'Constitutional Law', students: 218, tutor: 'Admin Direct', status: 'Published', revenue: '₹43,600', color: '#00CFE8' },
  { title: 'CLAT 2025 Preparation',             category: 'Exam Prep',          students: 290, tutor: 'Priya Nair',   status: 'Published', revenue: '₹52,200', color: '#28C76F' },
  { title: 'Evidence Act Deep Dive',            category: 'Evidence Law',       students: 124, tutor: 'Anil Kumar',   status: 'Published', revenue: '₹24,800', color: '#FF9F43' },
  { title: 'Contract Law Basics',               category: 'Civil Law',          students: 89,  tutor: 'Admin Direct', status: 'Draft',     revenue: '—',       color: '#EA5455' },
  { title: 'Family Law & Matrimonial Disputes', category: 'Family Law',         students: 0,   tutor: 'Meera Sharma', status: 'Draft',     revenue: '—',       color: '#667085' },
];

const statusBadge: Record<string, string> = {
  Published: 'bg-label-success',
  Draft:     'bg-label-secondary',
  Archived:  'bg-label-warning',
};

export default function CoursesPage() {
  const [view, setView] = useState<'card' | 'table'>('card');

  return (
    <AdminLayout title="Courses" breadcrumb="Home / Courses">

      {/* Filters + actions */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div className="d-flex flex-wrap gap-2">
          <input className="form-control" style={{ maxWidth: 240 }} placeholder="Search courses..." />
          <select className="form-select" style={{ maxWidth: 140 }}>
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
            <option>Archived</option>
          </select>
          <select className="form-select" style={{ maxWidth: 170 }}>
            <option>All Subjects</option>
            <option>Criminal Law</option>
            <option>Civil Law</option>
            <option>Constitutional Law</option>
          </select>
        </div>

        <div className="d-flex align-items-center gap-2">
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-icon btn-outline-secondary${view === 'card' ? ' active' : ''}`}
              onClick={() => setView('card')}
              title="Card view"
            >
              <i className="ti tabler-layout-grid"></i>
            </button>
            <button
              type="button"
              className={`btn btn-icon btn-outline-secondary${view === 'table' ? ' active' : ''}`}
              onClick={() => setView('table')}
              title="Table view"
            >
              <i className="ti tabler-list"></i>
            </button>
          </div>
          <a href="/admin/courses/create" className="btn btn-primary">
            <i className="ti tabler-plus me-1"></i> Create Course
          </a>
        </div>
      </div>

      {/* Card view */}
      {view === 'card' && (
        <div className="row g-4">
          {courses.map(c => (
            <div key={c.title} className="col-xl-4 col-md-6">
              <div className="card h-100">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ height: 120, background: `linear-gradient(135deg, ${c.color}22, ${c.color}55)` }}
                >
                  <i className="ti tabler-book icon-48px" style={{ color: c.color, fontSize: 48 }}></i>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-label-primary">{c.category}</span>
                    <span className={`badge ${statusBadge[c.status]}`}>{c.status}</span>
                  </div>
                  <h6 className="mb-1">{c.title}</h6>
                  <p className="text-body-secondary small mb-3">
                    <i className="ti tabler-user me-1"></i>{c.tutor}&nbsp;&middot;&nbsp;
                    <i className="ti tabler-users me-1"></i>{c.students} students&nbsp;&middot;&nbsp;{c.revenue}
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <a href="/admin/courses/1" className="btn btn-sm btn-outline-primary">
                      <i className="ti tabler-edit me-1"></i>Edit
                    </a>
                    <button className="btn btn-sm btn-outline-secondary">
                      <i className="ti tabler-users me-1"></i>Students
                    </button>
                    <button className="btn btn-sm btn-icon btn-outline-secondary">
                      <i className="ti tabler-dots-vertical"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table view */}
      {view === 'table' && (
        <div className="card">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Category</th>
                  <th>Students</th>
                  <th>Tutor</th>
                  <th>Revenue</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(c => (
                  <tr key={c.title}>
                    <td className="fw-semibold">{c.title}</td>
                    <td><span className="badge bg-label-primary">{c.category}</span></td>
                    <td>{c.students}</td>
                    <td className="text-body-secondary">{c.tutor}</td>
                    <td className="fw-bold">{c.revenue}</td>
                    <td><span className={`badge ${statusBadge[c.status]}`}>{c.status}</span></td>
                    <td>
                      <div className="d-flex gap-2">
                        <a href="/admin/courses/1" className="btn btn-sm btn-outline-primary">Edit</a>
                        <button className="btn btn-sm btn-outline-secondary">Archive</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}
