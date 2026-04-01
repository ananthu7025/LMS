'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const courses = [
  {
    title: 'Criminal Law Fundamentals',
    category: 'Criminal Law',
    categoryColor: 'primary',
    students: 342,
    status: 'Published',
    statusColor: 'success',
    duration: '24 hours',
    lessons: 10,
    rating: 4.8,
    reviews: 124,
    completion: 68,
    nextClass: 'Apr 1 @ 10 AM',
    earnings: '₹34,200',
    desc: 'Comprehensive study of IPC, criminal procedure and landmark judgements.',
    color: '#7367F0',
    image: '/img/courses/criminal_law.png',
  },
  {
    title: 'Constitutional Law Mastery',
    category: 'Constitutional Law',
    categoryColor: 'info',
    students: 218,
    status: 'Published',
    statusColor: 'success',
    duration: '18 hours',
    lessons: 8,
    rating: 4.5,
    reviews: 89,
    completion: 54,
    nextClass: 'Apr 2 @ 2 PM',
    earnings: '₹21,800',
    desc: 'Deep dive into fundamental rights, directive principles and constitutional amendments.',
    color: '#00CFE8',
    image: '/img/courses/constitutional_law.png',
  },
  {
    title: 'Evidence Act Deep Dive',
    category: 'Evidence Law',
    categoryColor: 'warning',
    students: 124,
    status: 'Published',
    statusColor: 'success',
    duration: '14 hours',
    lessons: 6,
    rating: 4.3,
    reviews: 47,
    completion: 41,
    nextClass: 'Apr 3 @ 5 PM',
    earnings: '₹12,400',
    desc: 'Sections 1–167 of the Indian Evidence Act with case-based explanation.',
    color: '#FF9F43',
    image: '/img/courses/criminal_law.png',
  },
  {
    title: 'Contract Law Basics',
    category: 'Civil Law',
    categoryColor: 'danger',
    students: 0,
    status: 'Draft',
    statusColor: 'secondary',
    duration: '10 hours',
    lessons: 4,
    rating: 0,
    reviews: 0,
    completion: 0,
    nextClass: '—',
    earnings: '—',
    desc: 'Fundamentals of offer, acceptance, consideration and breach of contract.',
    color: '#EA5455',
    image: '/img/courses/corporate_law.png',
  },
];

const colorHex: Record<string, string> = {
  primary: '#7367F0', info: '#00CFE8', success: '#28C76F',
  warning: '#FF9F43', danger: '#EA5455', secondary: '#667085',
};

export default function TutorCoursesPage() {
  const [view, setView] = useState<'card' | 'table'>('card');
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? courses : courses.filter(c => c.status === filter);

  return (
    <TutorLayout active="/tutor/courses" title="My Courses" breadcrumb="Home / My Courses">

      {/* ── Hero Banner ──────────────────────────────────────────────── */}
      <div className="card p-0 mb-6">
        <div
          className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center p-6 gap-4"
          style={{ background: 'linear-gradient(135deg, #7367F020, #9E95F530)', borderRadius: 12 }}
        >
          <div className="flex-grow-1">
            <h4 className="mb-1 text-heading">My Courses</h4>
            <p className="mb-4 text-body">
              Manage your curriculum, track student progress and schedule live sessions.
            </p>
            <div className="d-flex align-items-center gap-3" style={{ maxWidth: 480 }}>
              <input type="search" placeholder="Search your courses..." className="form-control" />
              <button type="button" className="btn btn-primary btn-icon">
                <i className="ti tabler-search icon-22px"></i>
              </button>
            </div>
          </div>
          <div className="d-none d-md-flex align-items-center justify-content-center">
            <div style={{
              width: 100, height: 100, borderRadius: '50%',
              background: 'linear-gradient(135deg, #7367F0, #9E95F5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <i className="ti tabler-chalkboard" style={{ fontSize: 48, color: '#fff' }}></i>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Row ────────────────────────────────────────────────── */}
      <div className="row g-4 mb-6">
        {[
          { icon: 'tabler-users',        bg: 'bg-label-primary', val: '684',    label: 'Total Students',   sub: '+24 this week' },
          { icon: 'tabler-book',         bg: 'bg-label-info',    val: '4',      label: 'Active Courses',   sub: '1 in draft' },
          { icon: 'tabler-star',         bg: 'bg-label-warning', val: '4.6',    label: 'Avg. Rating',      sub: 'Across all courses' },
          { icon: 'tabler-currency-rupee', bg: 'bg-label-success', val: '₹68.4K', label: 'Total Earnings', sub: '↑ 12% this month' },
        ].map(s => (
          <div key={s.label} className="col-xl-3 col-sm-6">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center gap-4">
                <div className={`avatar avatar-lg ${s.bg} rounded`}>
                  <span className="avatar-initial rounded">
                    <i className={`ti ${s.icon} icon-26px`}></i>
                  </span>
                </div>
                <div>
                  <h4 className="mb-0 fw-bold">{s.val}</h4>
                  <small className="text-body-secondary">{s.label}</small>
                  <div className="text-success small mt-1">{s.sub}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Filters + View Toggle ─────────────────────────────────────── */}
      <div className="card">
        <div className="card-header d-flex flex-wrap justify-content-between gap-4">
          <div className="card-title mb-0">
            <h5 className="mb-0">Course List</h5>
            <p className="mb-0 text-body">Total {courses.length} courses assigned to you</p>
          </div>
          <div className="d-flex align-items-center flex-sm-nowrap flex-wrap gap-3">
            <select className="form-select" style={{ maxWidth: 160 }} onChange={e => setFilter(e.target.value)}>
              <option value="All">All Courses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
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
                title="List view"
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
                const bg = colorHex[c.categoryColor] ?? '#7367F0';
                return (
                  <div key={c.title} className="col-sm-6 col-lg-4 col-xxl-3">
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
                            <span className="text-body-secondary small">No ratings</span>
                          )}
                        </div>

                        {/* Title + desc */}
                        <a href={`/tutor/courses/1`} className="h5 text-heading d-block mb-1">{c.title}</a>
                        <p className="text-body-secondary small mt-1 mb-2">{c.desc}</p>

                        {/* Meta */}
                        <div className="d-flex align-items-center gap-3 mb-1 small text-body-secondary">
                          <span><i className="ti tabler-clock me-1"></i>{c.duration}</span>
                          <span><i className="ti tabler-layout-list me-1"></i>{c.lessons} lessons</span>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-3 small text-body-secondary">
                          <span><i className="ti tabler-users me-1"></i>{c.students} students</span>
                          {c.earnings !== '—' && (
                            <span className="fw-semibold text-success">{c.earnings}</span>
                          )}
                        </div>

                        {/* Completion */}
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

                        {/* Next class */}
                        {c.nextClass !== '—' && (
                          <p className="small text-body-secondary mb-3">
                            <i className="ti tabler-calendar-event me-1 text-primary"></i>
                            Next: <span className="fw-semibold">{c.nextClass}</span>
                          </p>
                        )}

                        {/* Actions */}
                        <div className="d-flex gap-4">
                          <a
                            href={`/tutor/courses/1`}
                            className="w-100 btn btn-label-secondary d-flex align-items-center justify-content-center"
                          >
                            <i className="ti tabler-users icon-xs me-2"></i>Students
                          </a>
                          <a
                            href={`/tutor/courses/1`}
                            className="w-100 btn btn-label-primary d-flex align-items-center justify-content-center"
                          >
                            <span className="me-2">Manage</span>
                            <i className="ti tabler-chevron-right icon-xs"></i>
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

        {/* ── Table / List view ──────────────────────────────────── */}
        {view === 'table' && (
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="border-top">
                <tr>
                  <th>Course</th>
                  <th>Category</th>
                  <th>Students</th>
                  <th>Rating</th>
                  <th>Completion</th>
                  <th>Next Class</th>
                  <th>Earnings</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(c => {
                  const bg = colorHex[c.categoryColor] ?? '#7367F0';
                  return (
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
                            <a href="/tutor/courses/1" className="fw-semibold text-heading d-block">{c.title}</a>
                            <small className="text-body-secondary">{c.duration} · {c.lessons} lessons</small>
                          </div>
                        </div>
                      </td>
                      <td><span className={`badge bg-label-${c.categoryColor}`}>{c.category}</span></td>
                      <td><i className="ti tabler-users text-primary me-1"></i>{c.students}</td>
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
                      <td>
                        {c.completion > 0 ? (
                          <div style={{ minWidth: 80 }}>
                            <div className="d-flex justify-content-between mb-1">
                              <small className="fw-semibold">{c.completion}%</small>
                            </div>
                            <div className="progress" style={{ height: 6 }}>
                              <div className="progress-bar" style={{ width: `${c.completion}%` }}></div>
                            </div>
                          </div>
                        ) : (
                          <span className="text-body-secondary small">—</span>
                        )}
                      </td>
                      <td>
                        {c.nextClass !== '—' ? (
                          <small className="text-body-secondary">
                            <i className="ti tabler-calendar-event me-1 text-primary"></i>{c.nextClass}
                          </small>
                        ) : (
                          <span className="text-body-secondary small">—</span>
                        )}
                      </td>
                      <td className="fw-semibold">{c.earnings}</td>
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
                            <a className="dropdown-item" href="/tutor/courses/1">
                              <i className="ti tabler-edit me-2"></i>Edit Curriculum
                            </a>
                            <a className="dropdown-item" href="/tutor/students">
                              <i className="ti tabler-users me-2"></i>View Students
                            </a>
                            <a className="dropdown-item" href="/tutor/live-classes/schedule">
                              <i className="ti tabler-video me-2"></i>Schedule Class
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </TutorLayout>
  );
}
