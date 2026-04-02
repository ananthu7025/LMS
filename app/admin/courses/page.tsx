'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const courses = [
  {
    title: 'Criminal Law Fundamentals',
    category: 'Criminal Law',
    categoryColor: 'primary',
    students: 342,
    tutor: 'Anil Kumar',
    status: 'Published',
    statusColor: 'success',
    revenue: '₹68,400',
    duration: '24 hours',
    rating: 4.8,
    reviews: 124,
    completion: 68,
    desc: 'Comprehensive study of IPC, criminal procedure, and landmark judgements.',
    color: '#7367F0',
    image: '/img/courses/criminal_law.png',
  },
  {
    title: 'Constitutional Law Mastery',
    category: 'Constitutional Law',
    categoryColor: 'info',
    students: 218,
    tutor: 'Admin Direct',
    status: 'Published',
    statusColor: 'success',
    revenue: '₹43,600',
    duration: '18 hours',
    rating: 4.5,
    reviews: 89,
    completion: 54,
    desc: 'Deep dive into fundamental rights, directive principles, and constitutional amendments.',
    color: '#00CFE8',
    image: '/img/courses/constitutional_law.png',
  },
  {
    title: 'CLAT 2025 Preparation',
    category: 'Exam Prep',
    categoryColor: 'success',
    students: 290,
    tutor: 'Priya Nair',
    status: 'Published',
    statusColor: 'success',
    revenue: '₹52,200',
    duration: '32 hours',
    rating: 4.9,
    reviews: 210,
    completion: 72,
    desc: 'Full-length mocks, sectional tests, and strategy sessions for CLAT 2025.',
    color: '#28C76F',
    image: '/img/courses/exam_prep.png',
  },
  {
    title: 'Evidence Act Deep Dive',
    category: 'Evidence Law',
    categoryColor: 'warning',
    students: 124,
    tutor: 'Anil Kumar',
    status: 'Published',
    statusColor: 'success',
    revenue: '₹24,800',
    duration: '14 hours',
    rating: 4.3,
    reviews: 47,
    completion: 41,
    desc: 'Sections 1–167 of the Indian Evidence Act with case-based explanation.',
    color: '#FF9F43',
    image: '/img/courses/criminal_law.png',
  },
  {
    title: 'Contract Law Basics',
    category: 'Civil Law',
    categoryColor: 'danger',
    students: 89,
    tutor: 'Admin Direct',
    status: 'Draft',
    statusColor: 'secondary',
    revenue: '—',
    duration: '10 hours',
    rating: 0,
    reviews: 0,
    completion: 0,
    desc: 'Fundamentals of offer, acceptance, consideration and breach of contract.',
    color: '#EA5455',
    image: '/img/courses/corporate_law.png',
  },
  {
    title: 'Family Law & Matrimonial Disputes',
    category: 'Family Law',
    categoryColor: 'secondary',
    students: 0,
    tutor: 'Meera Sharma',
    status: 'Draft',
    statusColor: 'secondary',
    revenue: '—',
    duration: '12 hours',
    rating: 0,
    reviews: 0,
    completion: 0,
    desc: 'Hindu Marriage Act, Special Marriage Act, and personal law disputes.',
    color: '#667085',
    image: '/img/courses/constitutional_law.png',
  },
];

const categoryColors: Record<string, string> = {
  primary: '#7367F0', info: '#00CFE8', success: '#28C76F',
  warning: '#FF9F43', danger: '#EA5455', secondary: '#667085',
};

export default function AdminCoursesPage() {
  const [view, setView] = useState<'card' | 'table'>('card');
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? courses : courses.filter(c => c.status === filter);

  return (
    <AdminLayout title="Courses" breadcrumb="Home / Courses">

      {/* ── Hero Banner ── */}
      <div className="card p-0 mb-6">
        <div className="card-body d-flex flex-column flex-md-row justify-content-between p-0 pt-6">
          {/* Left — bulb illustration */}
          <div className="d-none d-md-flex align-items-end ps-6 pb-0" style={{ minWidth: 90 }}>
            <img src="/img/illustrations/bulb-light.png" alt="" height={90} style={{ objectFit: 'contain' }} />
          </div>
          {/* Center — text + search */}
          <div className="flex-grow-1 d-flex align-items-center flex-column text-md-center px-6 py-6">
            <h4 className="mb-2 text-heading lh-lg">
              Manage Your Courses<br />
              <span className="text-primary text-nowrap">All in one place.</span>
            </h4>
            <p className="mb-4 text-body">Build, publish, and track all law courses for your institute — schedule classes, view progress and more.</p>
            <div className="d-flex align-items-center gap-3 w-100" style={{ maxWidth: 480 }}>
              <input type="search" placeholder="Search courses..." className="form-control" />
              <a href="/admin/courses/create" className="btn btn-primary text-nowrap">
                <i className="ti tabler-plus me-1"></i>New Course
              </a>
            </div>
          </div>
          {/* Right — pencil rocket illustration */}
          <div className="d-none d-md-flex align-items-end justify-content-end pe-0" style={{ minWidth: 120 }}>
            <img src="/img/illustrations/pencil-rocket.png" alt="" height={188} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* ── Filters + View Toggle ─────────────────────────────────────── */}
      <div className="card mb-6">
        <div className="card-header d-flex flex-wrap justify-content-between gap-4">
          <div className="card-title mb-0">
            <h5 className="mb-0">My Courses</h5>
            <p className="mb-0 text-body">{courses.length} courses in your institute</p>
          </div>
          <div className="d-flex align-items-center flex-md-nowrap flex-wrap gap-3">
            <select className="form-select" style={{ maxWidth: 160 }} onChange={e => setFilter(e.target.value)}>
              <option value="All">All Courses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
              <option value="Archived">Archived</option>
            </select>
            <select className="form-select" style={{ maxWidth: 180 }}>
              <option>All Subjects</option>
              <option>Criminal Law</option>
              <option>Civil Law</option>
              <option>Constitutional Law</option>
              <option>Exam Prep</option>
            </select>
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
          </div>
        </div>

        {/* ── Card view ──────────────────────────────────────────── */}
        {view === 'card' && (
          <div className="card-body">
            <div className="row gy-6">
              {filtered.map(c => {
                const bg = categoryColors[c.categoryColor] ?? '#7367F0';
                return (
                  <div key={c.title} className="col-sm-6 col-lg-4">
                    <div className="card p-2 h-100 shadow-none border">
                      {/* Thumbnail */}
                      <div
                        className="rounded-2 d-flex align-items-center justify-content-center mb-4 overflow-hidden"
                        style={{ height: 160, position: 'relative', background: `${bg}10` }}
                      >
                        <img 
                          src={c.image as string} 
                          alt={c.title} 
                          className="w-100 h-100" 
                          style={{ objectFit: 'cover' }} 
                        />
                        <span
                          className={`badge bg-label-${c.statusColor} position-absolute`}
                          style={{ top: 10, right: 10, fontSize: 11 }}
                        >
                          {c.status}
                        </span>
                      </div>

                      <div className="card-body p-4 pt-2">
                        {/* Category + Rating */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <span className={`badge bg-label-${c.categoryColor}`}>{c.category}</span>
                          {c.rating > 0 ? (
                            <p className="d-flex align-items-center gap-1 mb-0 fw-medium">
                              {c.rating}
                              <span className="text-warning">
                                <i className="icon-base ti tabler-star-filled icon-lg me-1 mb-1_5"></i>
                              </span>
                              <span className="fw-normal text-body-secondary">({c.reviews})</span>
                            </p>
                          ) : (
                            <span className="text-body-secondary small">No ratings yet</span>
                          )}
                        </div>

                        {/* Title + desc */}
                        <a href="/admin/courses/1" className="h5 text-heading d-block mb-1">{c.title}</a>
                        <p className="text-body-secondary small mt-1 mb-2">{c.desc}</p>

                        {/* Meta */}
                        <div className="d-flex align-items-center gap-3 mb-2 small text-body-secondary">
                          <span><i className="ti tabler-clock me-1"></i>{c.duration}</span>
                          <span><i className="ti tabler-user me-1"></i>{c.tutor}</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-3 small text-body-secondary">
                          <span><i className="ti tabler-users me-1"></i>{c.students} students</span>
                          <span className="fw-semibold text-success">{c.revenue}</span>
                        </div>

                        {/* Progress */}
                        {c.completion > 0 && (
                          <>
                            <div className="d-flex justify-content-between mb-1">
                              <small className="text-body-secondary">Avg. completion</small>
                              <small className="fw-semibold">{c.completion}%</small>
                            </div>
                            <div className="progress mb-4" style={{ height: 8 }}>
                              <div className="progress-bar" role="progressbar" style={{ width: `${c.completion}%` }}></div>
                            </div>
                          </>
                        )}
                        {c.completion === 0 && <div className="mb-4"></div>}

                        {/* Actions */}
                        <div className="d-flex gap-4 flex-wrap">
                          <a
                            href="/admin/courses/1"
                            className="w-100 btn btn-label-secondary d-flex align-items-center justify-content-center"
                          >
                            <i className="ti tabler-users icon-xs me-2"></i>Students
                          </a>
                          <a
                            href="/admin/courses/1"
                            className="w-100 btn btn-label-primary d-flex align-items-center justify-content-center"
                          >
                            <i className="ti tabler-edit icon-xs me-2"></i>Edit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Table view ─────────────────────────────────────────── */}
        {view === 'table' && (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="border-top">
                <tr>
                  <th>Course</th>
                  <th>Category</th>
                  <th>Tutor</th>
                  <th>Students</th>
                  <th>Revenue</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(c => (
                  <tr key={c.title}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="avatar rounded overflow-hidden"
                          style={{ width: 40, height: 40 }}
                        >
                          <img 
                            src={c.image as string} 
                            alt={c.title} 
                            className="w-100 h-100" 
                            style={{ objectFit: 'cover' }} 
                          />
                        </div>
                        <div>
                          <a href="/admin/courses/1" className="fw-semibold text-heading d-block">{c.title}</a>
                          <small className="text-body-secondary">{c.duration}</small>
                        </div>
                      </div>
                    </td>
                    <td><span className={`badge bg-label-${c.categoryColor}`}>{c.category}</span></td>
                    <td className="text-body-secondary">{c.tutor}</td>
                    <td><i className="ti tabler-users text-primary me-1"></i>{c.students}</td>
                    <td className="fw-semibold">{c.revenue}</td>
                    <td>
                      {c.rating > 0 ? (
                        <span className="d-flex align-items-center gap-1">
                          <i className="ti tabler-star-filled text-warning"></i>
                          <span className="fw-semibold">{c.rating}</span>
                          <small className="text-body-secondary">({c.reviews})</small>
                        </span>
                      ) : (
                        <span className="text-body-secondary small">—</span>
                      )}
                    </td>
                    <td><span className={`badge bg-label-${c.statusColor}`}>{c.status}</span></td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti tabler-dots-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="/admin/courses/1">
                            <i className="ti tabler-edit me-2"></i>Edit Course
                          </a>
                          <a className="dropdown-item" href="/admin/students">
                            <i className="ti tabler-users me-2"></i>View Students
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item text-danger" href="#">
                            <i className="ti tabler-archive me-2"></i>Archive
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </AdminLayout>
  );
}
