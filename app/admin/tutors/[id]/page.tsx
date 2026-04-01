'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const courses = [
  { name: 'Criminal Law Fundamentals',  lessons: 42, students: 248, rating: '4.9', status: 'Active',   color: 'primary' },
  { name: 'Evidence Act Deep Dive',     lessons: 28, students: 134, rating: '4.7', status: 'Active',   color: 'info'    },
  { name: 'CLAT 2025 Preparation',      lessons: 54, students: 84,  rating: '4.8', status: 'Archived', color: 'success' },
];

const students = [
  { name: 'Arjun Mehta',   email: 'arjun@email.com',  course: 'Criminal Law Fundamentals', progress: 68,  status: 'Active'   },
  { name: 'Sunita Kapoor', email: 'sunita@email.com', course: 'Criminal Law Fundamentals', progress: 92,  status: 'Active'   },
  { name: 'Vikram Joshi',  email: 'vikram@email.com', course: 'Evidence Act Deep Dive',    progress: 45,  status: 'Active'   },
  { name: 'Deepa Nair',    email: 'deepa@email.com',  course: 'CLAT 2025 Preparation',     progress: 30,  status: 'Inactive' },
  { name: 'Rahul Sharma',  email: 'rahul@email.com',  course: 'Criminal Law Fundamentals', progress: 100, status: 'Active'   },
];

const timeline = [
  { point: 'primary', title: 'Uploaded new lesson: "Section 302 IPC — Sentencing Guidelines"', time: 'Today, 10:15 AM'     },
  { point: 'success', title: 'Quiz published: Module 4 — Evidence Appreciation',               time: 'Today, 9:00 AM'      },
  { point: 'info',    title: 'Responded to 3 student doubts in Criminal Law Fundamentals',      time: 'Yesterday, 5:45 PM'  },
  { point: 'warning', title: 'Assignment reviewed: Bail Application — 14 submissions graded',  time: 'Mar 26, 2:00 PM'     },
  { point: 'info',    title: 'New course assigned: Evidence Act Deep Dive',                     time: 'Mar 20, 11:00 AM'    },
  { point: 'primary', title: 'Joined as Tutor — Criminal Law Fundamentals started',             time: 'Feb 1, 10:00 AM'     },
];

const details = [
  ['Full Name',      'Anil Kumar'],
  ['Email',          'anil@sharmalaw.in'],
  ['Phone',          '+91 98765 43210'],
  ['Specialization', 'Criminal Law'],
  ['Joined',         'February 1, 2025'],
  ['Status',         'Active'],
] as const;

const initials = (name: string) => name.split(' ').map(n => n[0]).join('');

export default function TutorProfilePage() {
  const [tab, setTab] = useState<'overview' | 'courses' | 'students' | 'activity' | 'notes'>('overview');

  return (
    <AdminLayout title="Tutor Profile" breadcrumb="Home / Tutors / Anil Kumar">

      {/* ── Horizontal Profile Card ──────────────────────────────────── */}
      <div className="card mb-6">
        <div className="card-body p-5">
          <div className="row align-items-center g-5">

            {/* Avatar + Name */}
            <div className="col-12 col-md-auto text-center text-md-start">
              <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                <div className="avatar" style={{ width: 72, height: 72, flexShrink: 0 }}>
                  <span className="avatar-initial rounded-circle bg-label-primary" style={{ fontSize: 26, fontWeight: 700, width: 72, height: 72 }}>AK</span>
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Anil Kumar</h5>
                  <span className="badge bg-label-success">Tutor</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="col-12 col-md-auto" style={{ borderLeft: '1px solid var(--bs-border-color)', paddingLeft: '2rem' }}>
              <div className="d-flex gap-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar">
                    <span className="avatar-initial rounded bg-label-primary">
                      <i className="icon-base ti tabler-book icon-lg"></i>
                    </span>
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold">3</h5>
                    <small className="text-body-secondary">Courses</small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar">
                    <span className="avatar-initial rounded bg-label-info">
                      <i className="icon-base ti tabler-users icon-lg"></i>
                    </span>
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold">466</h5>
                    <small className="text-body-secondary">Students</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Details — 2-column grid */}
            <div className="col-12 col-md" style={{ borderLeft: '1px solid var(--bs-border-color)', paddingLeft: '2rem' }}>
              <div className="row row-cols-1 row-cols-sm-2 g-2">
                {details.map(([label, value]) => (
                  <div key={label} className="col">
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-semibold text-heading text-nowrap" style={{ minWidth: 90, fontSize: 13 }}>{label}:</span>
                      {label === 'Status' ? (
                        <span className="badge bg-label-success">{value}</span>
                      ) : (
                        <span className="text-body-secondary text-truncate" style={{ fontSize: 13 }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="col-12 col-md-auto d-flex flex-row flex-md-column gap-2 justify-content-center justify-content-md-start">
              <button className="btn btn-primary">
                <i className="ti tabler-edit me-1"></i>Edit
              </button>
              <button className="btn btn-label-danger">
                <i className="ti tabler-user-off me-1"></i>Deactivate
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── Nav Pills Tabs ───────────────────────────────────────────── */}
      <div className="nav-align-top mb-6">
        <ul className="nav nav-pills flex-column flex-md-row flex-wrap row-gap-2">
          {([
            ['overview',  'tabler-user-check', 'Overview'],
            ['courses',   'tabler-book',        'Courses'],
            ['students',  'tabler-users',       'Students'],
            ['activity',  'tabler-activity',    'Activity'],
            ['notes',     'tabler-notes',       'Notes'],
          ] as const).map(([key, icon, label]) => (
            <li key={key} className="nav-item">
              <button
                className={`nav-link${tab === key ? ' active' : ''}`}
                onClick={() => setTab(key)}
              >
                <i className={`icon-base ti ${icon} icon-sm me-1_5`}></i>{label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Overview tab ─────────────────────────────────────────────── */}
      {tab === 'overview' && (
        <>
          <div className="row g-4 mb-6">
            {[
              { icon: 'tabler-book',      color: 'primary', val: '3',    label: 'Courses Assigned' },
              { icon: 'tabler-users',     color: 'info',    val: '466',  label: 'Total Students'   },
              { icon: 'tabler-star',      color: 'warning', val: '4.8',  label: 'Avg. Rating'      },
              { icon: 'tabler-video',     color: 'success', val: '124',  label: 'Total Lessons'    },
            ].map(s => (
              <div key={s.label} className="col-sm-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between">
                      <div>
                        <span className="text-heading d-block small">{s.label}</span>
                        <h4 className="mb-0 mt-1">{s.val}</h4>
                      </div>
                      <div className="avatar">
                        <span className={`avatar-initial rounded bg-label-${s.color}`}>
                          <i className={`icon-base ti ${s.icon} icon-26px`}></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-6">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Assigned Courses</h5>
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ti tabler-plus me-1"></i>Assign Course
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="border-top">
                      <tr>
                        <th>Course</th>
                        <th>Lessons</th>
                        <th>Students</th>
                        <th>Rating</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map(c => (
                        <tr key={c.name}>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <div className="avatar">
                                <span className={`avatar-initial rounded bg-label-${c.color}`}>
                                  <i className="icon-base ti tabler-book icon-lg"></i>
                                </span>
                              </div>
                              <span className="fw-semibold text-heading">{c.name}</span>
                            </div>
                          </td>
                          <td className="text-body-secondary">{c.lessons}</td>
                          <td className="text-body-secondary">{c.students}</td>
                          <td>
                            <span className={`badge bg-label-${parseFloat(c.rating) >= 4.8 ? 'success' : parseFloat(c.rating) >= 4.5 ? 'warning' : 'danger'}`}>
                              <i className="ti tabler-star me-1" style={{ fontSize: 10 }}></i>{c.rating}
                            </span>
                          </td>
                          <td>
                            <span className={`badge bg-label-${c.status === 'Active' ? 'primary' : 'secondary'}`}>{c.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card h-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Recent Activity</h5>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => setTab('activity')}>View All</button>
                </div>
                <div className="card-body pt-2">
                  <ul className="timeline mb-0">
                    {timeline.slice(0, 4).map((t, i) => (
                      <li key={i} className={`timeline-item${i < 3 ? ' timeline-item-transparent' : ''}`}>
                        <span className={`timeline-point timeline-point-${t.point}`}></span>
                        <div className="timeline-event">
                          <div className="timeline-header mb-1">
                            <h6 className="mb-0" style={{ fontSize: 13 }}>{t.title}</h6>
                            <small className="text-body-secondary">{t.time}</small>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Courses tab ──────────────────────────────────────────────── */}
      {tab === 'courses' && (
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">All Assigned Courses</h5>
            <button className="btn btn-sm btn-primary">
              <i className="ti tabler-plus me-1"></i>Assign Course
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="border-top">
                <tr>
                  <th>Course</th>
                  <th>Lessons</th>
                  <th>Students</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(c => (
                  <tr key={c.name}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar">
                          <span className={`avatar-initial rounded bg-label-${c.color}`}>
                            <i className="icon-base ti tabler-book icon-lg"></i>
                          </span>
                        </div>
                        <span className="fw-semibold text-heading">{c.name}</span>
                      </div>
                    </td>
                    <td className="text-body-secondary">{c.lessons}</td>
                    <td className="text-body-secondary">{c.students}</td>
                    <td>
                      <span className={`badge bg-label-${parseFloat(c.rating) >= 4.8 ? 'success' : parseFloat(c.rating) >= 4.5 ? 'warning' : 'danger'}`}>
                        <i className="ti tabler-star me-1" style={{ fontSize: 10 }}></i>{c.rating}
                      </span>
                    </td>
                    <td>
                      <span className={`badge bg-label-${c.status === 'Active' ? 'primary' : 'secondary'}`}>{c.status}</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="ti tabler-dots-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="/admin/courses/1">
                            <i className="ti tabler-eye me-2"></i>View Course
                          </a>
                          <a className="dropdown-item text-danger" href="#">
                            <i className="ti tabler-x me-2"></i>Unassign
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Students tab ─────────────────────────────────────────────── */}
      {tab === 'students' && (
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Students Under This Tutor</h5>
            <div className="input-group input-group-sm" style={{ width: 220 }}>
              <span className="input-group-text"><i className="ti tabler-search"></i></span>
              <input type="search" className="form-control" placeholder="Search student..." />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="border-top">
                <tr>
                  <th>Student</th>
                  <th>Course</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, i) => (
                  <tr key={i}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar">
                          <span className="avatar-initial rounded-circle bg-label-primary">{initials(s.name)}</span>
                        </div>
                        <div>
                          <a href="/admin/students/1" className="fw-semibold text-heading d-block">{s.name}</a>
                          <small className="text-body-secondary">{s.email}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-label-info">{s.course}</span>
                    </td>
                    <td style={{ minWidth: 140 }}>
                      <div className="d-flex align-items-center gap-2">
                        <div className="progress flex-grow-1" style={{ height: 6 }}>
                          <div
                            className={`progress-bar ${s.progress === 100 ? 'bg-success' : 'bg-primary'}`}
                            style={{ width: `${s.progress}%` }}
                          ></div>
                        </div>
                        <small className="fw-semibold text-nowrap">{s.progress}%</small>
                      </div>
                    </td>
                    <td>
                      <span className={`badge bg-label-${s.status === 'Active' ? 'success' : 'secondary'}`}>{s.status}</span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="ti tabler-dots-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="/admin/students/1">
                            <i className="ti tabler-eye me-2"></i>View Profile
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ti tabler-mail me-2"></i>Send Message
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Showing {students.length} of 466 students</small>
          </div>
        </div>
      )}

      {/* ── Activity tab ─────────────────────────────────────────────── */}
      {tab === 'activity' && (
        <div className="card">
          <h5 className="card-header">Activity Timeline</h5>
          <div className="card-body pt-2">
            <ul className="timeline mb-0">
              {timeline.map((t, i) => (
                <li key={i} className={`timeline-item${i < timeline.length - 1 ? ' timeline-item-transparent' : ''}`}>
                  <span className={`timeline-point timeline-point-${t.point}`}></span>
                  <div className="timeline-event">
                    <div className="timeline-header mb-1">
                      <h6 className="mb-0">{t.title}</h6>
                      <small className="text-body-secondary">{t.time}</small>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── Notes tab ────────────────────────────────────────────────── */}
      {tab === 'notes' && (
        <div className="card">
          <h5 className="card-header">Admin Notes <small className="text-body-secondary fw-normal fs-6">(private)</small></h5>
          <div className="card-body">
            <textarea
              className="form-control mb-4"
              rows={6}
              defaultValue="Highly experienced tutor. Consistently receives top ratings from students. Consider featuring his courses in the homepage banner. May be suitable for mentoring new tutors onboarding to the platform."
            />
            <div className="d-flex gap-3">
              <button className="btn btn-primary">
                <i className="ti tabler-device-floppy me-1"></i>Save Note
              </button>
              <button className="btn btn-outline-secondary">
                <i className="ti tabler-rotate me-1"></i>Reset
              </button>
            </div>

            <hr className="my-5" />

            <h6 className="fw-semibold mb-3">Quick Actions</h6>
            <div className="d-flex flex-column gap-2" style={{ maxWidth: 300 }}>
              <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                <i className="ti tabler-mail"></i>Send Direct Message
              </button>
              <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                <i className="ti tabler-key"></i>Reset Password
              </button>
              <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                <i className="ti tabler-lock"></i>Edit Permissions
              </button>
              <button className="btn btn-outline-danger d-flex align-items-center gap-2">
                <i className="ti tabler-user-off"></i>Deactivate Account
              </button>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}
