'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const courses = [
  { name: 'Criminal Law Fundamentals',   progress: 68,  enrolled: 'Mar 1',  quiz: '82%', status: 'Active',    color: 'primary' },
  { name: 'Constitutional Law Mastery',  progress: 45,  enrolled: 'Feb 20', quiz: '74%', status: 'Active',    color: 'info'    },
  { name: 'CLAT 2025 Preparation',       progress: 92,  enrolled: 'Jan 15', quiz: '91%', status: 'Completed', color: 'success' },
];

const payments = [
  { course: 'Criminal Law Fundamentals',  amount: '₹4,999', date: 'Mar 1',  txn: 'TXN-8821', status: 'Paid' },
  { course: 'Constitutional Law Mastery', amount: '₹2,999', date: 'Feb 20', txn: 'TXN-7743', status: 'Paid' },
  { course: 'CLAT 2025 Preparation',      amount: '₹3,499', date: 'Jan 15', txn: 'TXN-6612', status: 'Paid' },
];

const timeline = [
  { point: 'primary', title: 'Completed Lesson: Section 302 IPC — Murder',                   time: 'Today, 9:42 AM',     icon: 'tabler-circle-check'     },
  { point: 'success', title: 'Quiz: Module 2 — Scored 18/20 (90%)',                          time: 'Today, 9:18 AM',     icon: 'tabler-notes'            },
  { point: 'info',    title: 'Posted a doubt: "Difference between Sec 299 and 300 IPC?"',    time: 'Yesterday, 4:30 PM', icon: 'tabler-message-question' },
  { point: 'warning', title: 'Submitted Assignment: Write a Bail Application',                time: 'Mar 26, 11:00 AM',   icon: 'tabler-clipboard'        },
  { point: 'info',    title: 'Enrolled in Constitutional Law Mastery',                        time: 'Mar 20, 2:00 PM',    icon: 'tabler-school'           },
  { point: 'primary', title: 'Started Criminal Law Fundamentals',                             time: 'Mar 1, 10:00 AM',    icon: 'tabler-book'             },
];

const details = [
  ['Full Name',  'Arjun Mehta'],
  ['Email',      'arjun.mehta@gmail.com'],
  ['Phone',      '+91 98765 43210'],
  ['City',       'New Delhi'],
  ['Batch',      'Batch A'],
  ['Joined',     'March 1, 2025'],
  ['Status',     'Active'],
] as const;

export default function StudentProfilePage() {
  const [tab, setTab] = useState<'overview' | 'courses' | 'payments' | 'activity' | 'notes'>('overview');

  return (
    <AdminLayout title="Student Profile" breadcrumb="Home / Students / Arjun Mehta">

      {/* ── Horizontal Profile Card ──────────────────────────────────── */}
      <div className="card mb-6">
        <div className="card-body p-5">
          <div className="row align-items-center g-5">

            {/* Avatar + Name */}
            <div className="col-12 col-md-auto text-center text-md-start">
              <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                <div className="avatar" style={{ width: 72, height: 72, flexShrink: 0 }}>
                  <span className="avatar-initial rounded-circle bg-label-primary" style={{ fontSize: 26, fontWeight: 700, width: 72, height: 72 }}>AM</span>
                </div>
                <div>
                  <h5 className="mb-1 fw-bold">Arjun Mehta</h5>
                  <span className="badge bg-label-primary">Student</span>
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
                    <span className="avatar-initial rounded bg-label-success">
                      <i className="icon-base ti tabler-circle-check icon-lg"></i>
                    </span>
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold">68%</h5>
                    <small className="text-body-secondary">Avg. Progress</small>
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
                      <span className="fw-semibold text-heading text-nowrap" style={{ minWidth: 68, fontSize: 13 }}>{label}:</span>
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
                <i className="ti tabler-ban me-1"></i>Suspend
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── Nav Pills Tabs ───────────────────────────────────────────── */}
      <div className="nav-align-top mb-6">
        <ul className="nav nav-pills flex-column flex-md-row flex-wrap row-gap-2">
          {([
            ['overview',  'tabler-user-check',    'Overview'],
            ['courses',   'tabler-book',           'Courses'],
            ['payments',  'tabler-currency-rupee', 'Payments'],
            ['activity',  'tabler-activity',       'Activity'],
            ['notes',     'tabler-notes',           'Notes'],
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
              { icon: 'tabler-book',           color: 'primary', val: '3',      label: 'Courses Enrolled' },
              { icon: 'tabler-circle-check',   color: 'success', val: '68%',    label: 'Avg. Completion'  },
              { icon: 'tabler-notes',          color: 'warning', val: '82%',    label: 'Avg. Quiz Score'  },
              { icon: 'tabler-currency-rupee', color: 'info',    val: '₹11.5K', label: 'Total Paid'       },
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
                  <h5 className="card-title mb-0">Enrolled Courses</h5>
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="ti tabler-plus me-1"></i>Enrol in Course
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="border-top">
                      <tr>
                        <th>Course</th>
                        <th>Enrolled</th>
                        <th>Progress</th>
                        <th>Quiz Avg</th>
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
                          <td className="text-body-secondary">{c.enrolled}</td>
                          <td style={{ minWidth: 140 }}>
                            <div className="d-flex align-items-center gap-2">
                              <div className="progress flex-grow-1" style={{ height: 6 }}>
                                <div className={`progress-bar bg-${c.color}`} style={{ width: `${c.progress}%` }}></div>
                              </div>
                              <small className="fw-semibold">{c.progress}%</small>
                            </div>
                          </td>
                          <td>
                            <span className={`badge bg-label-${parseInt(c.quiz) >= 85 ? 'success' : parseInt(c.quiz) >= 70 ? 'warning' : 'danger'}`}>
                              {c.quiz}
                            </span>
                          </td>
                          <td>
                            <span className={`badge bg-label-${c.status === 'Completed' ? 'success' : 'primary'}`}>{c.status}</span>
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
            <h5 className="card-title mb-0">All Enrolled Courses</h5>
            <button className="btn btn-sm btn-primary">
              <i className="ti tabler-plus me-1"></i>Enrol in Course
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="border-top">
                <tr>
                  <th>Course</th>
                  <th>Enrolled</th>
                  <th>Progress</th>
                  <th>Quiz Avg</th>
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
                    <td className="text-body-secondary">{c.enrolled}</td>
                    <td style={{ minWidth: 140 }}>
                      <div className="d-flex align-items-center gap-2">
                        <div className="progress flex-grow-1" style={{ height: 6 }}>
                          <div className={`progress-bar bg-${c.color}`} style={{ width: `${c.progress}%` }}></div>
                        </div>
                        <small className="fw-semibold">{c.progress}%</small>
                      </div>
                    </td>
                    <td>
                      <span className={`badge bg-label-${parseInt(c.quiz) >= 85 ? 'success' : parseInt(c.quiz) >= 70 ? 'warning' : 'danger'}`}>
                        {c.quiz}
                      </span>
                    </td>
                    <td>
                      <span className={`badge bg-label-${c.status === 'Completed' ? 'success' : 'primary'}`}>{c.status}</span>
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
                            <i className="ti tabler-x me-2"></i>Unenrol
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

      {/* ── Payments tab ─────────────────────────────────────────────── */}
      {tab === 'payments' && (
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title mb-0">Payment History</h5>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ti tabler-download me-1"></i>Export
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="border-top">
                <tr>
                  <th>Course</th>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map(p => (
                  <tr key={p.txn}>
                    <td className="fw-semibold text-heading">{p.course}</td>
                    <td><code className="text-body-secondary">{p.txn}</code></td>
                    <td className="text-body-secondary">{p.date}</td>
                    <td className="fw-bold">{p.amount}</td>
                    <td><span className="badge bg-label-success">{p.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Total paid: <strong>₹11,497</strong></small>
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
              defaultValue="Student is very active and shows high potential. Consider offering a scholarship for the next batch. Excellent quiz performance — may be suitable for advanced courses."
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
                <i className="ti tabler-refresh"></i>Re-send Welcome Email
              </button>
              <button className="btn btn-outline-danger d-flex align-items-center gap-2">
                <i className="ti tabler-ban"></i>Revoke Access
              </button>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}
