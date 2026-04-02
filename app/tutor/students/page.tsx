'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const students = [
  { name: 'Arjun Mehta',   initials: 'AM', course: 'Criminal Law Fundamentals', done: 24, total: 35, progress: 68, quizAvg: 82, lastActive: 'Today',     color: 'primary' },
  { name: 'Sunita Kapoor', initials: 'SK', course: 'Criminal Law Fundamentals', done: 32, total: 35, progress: 92, quizAvg: 91, lastActive: 'Yesterday', color: 'success' },
  { name: 'Vikram Joshi',  initials: 'VJ', course: 'Criminal Law Fundamentals', done: 16, total: 35, progress: 45, quizAvg: 64, lastActive: 'Mar 25',    color: 'warning' },
  { name: 'Deepa Nair',    initials: 'DN', course: 'Criminal Law Fundamentals', done: 10, total: 35, progress: 30, quizAvg: 71, lastActive: 'Mar 27',    color: 'info'    },
  { name: 'Rahul Sharma',  initials: 'RS', course: 'Criminal Law Fundamentals', done: 35, total: 35, progress: 100,quizAvg: 88, lastActive: 'Mar 28',    color: 'danger'  },
  { name: 'Pooja Verma',   initials: 'PV', course: 'Criminal Law Fundamentals', done: 19, total: 35, progress: 55, quizAvg: 76, lastActive: 'Today',     color: 'primary' },
  { name: 'Karan Singh',   initials: 'KS', course: 'Criminal Law Fundamentals', done: 4,  total: 35, progress: 12, quizAvg: 40, lastActive: 'Mar 20',    color: 'warning' },
  { name: 'Meera Iyer',    initials: 'MI', course: 'Criminal Law Fundamentals', done: 20, total: 35, progress: 58, quizAvg: 79, lastActive: 'Mar 26',    color: 'info'    },
];

const progressBands = [
  { label: '90–100%', count: 2, pct: 90, color: 'bg-success'  },
  { label: '75–89%',  count: 1, pct: 65, color: 'bg-primary'  },
  { label: '50–74%',  count: 3, pct: 50, color: 'bg-info'     },
  { label: '25–49%',  count: 1, pct: 30, color: 'bg-warning'  },
  { label: '0–24%',   count: 1, pct: 15, color: 'bg-danger'   },
];

export default function StudentProgressPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <TutorLayout active="/tutor/students" title="Student Progress" breadcrumb="Home / Student Progress">

      {/* ── Stat Cards ── */}
      <div className="row g-6 mb-6">
        {[
          { icon: 'tabler-users',         label: 'Total Students',  value: '560',  change: '+24',  pos: true,  sub: '+24 this week',   color: 'bg-label-primary', iconColor: '#7367F0' },
          { icon: 'tabler-chart-bar',     label: 'Avg Progress',    value: '57%',  change: '+4%',  pos: true,  sub: 'Across all students', color: 'bg-label-info',    iconColor: '#00CFE8' },
          { icon: 'tabler-file-analytics',label: 'Avg Quiz Score',  value: '74%',  change: '+6%',  pos: true,  sub: 'This week',       color: 'bg-label-success', iconColor: '#28C76F' },
          { icon: 'tabler-alert-circle',  label: 'At Risk',         value: '2',    change: 'Action',pos: false, sub: 'Below 25% progress',color: 'bg-label-warning', iconColor: '#FF9F43' },
        ].map((s) => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span className="text-heading">{s.label}</span>
                    <div className="d-flex align-items-center my-1">
                      <h4 className="mb-0 me-2">{s.value}</h4>
                      <p className={`mb-0 ${s.pos ? 'text-success' : 'text-warning'}`}>({s.change})</p>
                    </div>
                    <small className="mb-0">{s.sub}</small>
                  </div>
                  <div className="avatar">
                    <span className={`avatar-initial rounded ${s.color}`}>
                      <i className={`icon-base ti ${s.icon} icon-26px`} style={{ color: s.iconColor }}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Widget Row (reviews-style) ── */}
      <div className="row mb-6 g-6">

        {/* Left — Completion Overview (mirrors star-rating widget) */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body row widget-separator g-0">
              <div className="col-sm-5 border-end pe-sm-6">
                <h3 className="text-primary d-flex align-items-center gap-2 mb-2">
                  57%<i className="icon-base ti tabler-chart-bar icon-32px"></i>
                </h3>
                <p className="h6 mb-2">Avg. Completion</p>
                <p className="pe-2 mb-2">Across 8 enrolled students in Criminal Law</p>
                <span className="badge bg-label-primary mb-4 mb-sm-0">+4% this week</span>
                <hr className="d-sm-none" />
              </div>
              <div className="col-sm-7 gap-2 text-nowrap d-flex flex-column justify-content-between ps-sm-6 pt-2 py-sm-2">
                {progressBands.map(b => (
                  <div key={b.label} className="d-flex align-items-center gap-2">
                    <small className="w-px-50">{b.label}</small>
                    <div className="progress w-100 bg-label-primary" style={{ height: 8 }}>
                      <div className={`progress-bar ${b.color}`} role="progressbar" style={{ width: `${b.pct}%` }}></div>
                    </div>
                    <small className="w-px-20 text-end">{b.count}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right — Progress Statistics */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body row">
              <div className="col-sm-6">
                <div className="mb-6">
                  <h5 className="mb-2 text-nowrap">Progress Statistics</h5>
                  <p className="mb-0">
                    <span className="me-2">6 Active this week</span>
                    <span className="badge bg-label-success">+8.4%</span>
                  </p>
                </div>
                <div>
                  <h6 className="mb-2 fw-normal">
                    <span className="text-success me-1">75%</span>On track
                  </h6>
                  <small className="text-body-secondary">Weekly Report</small>
                </div>
              </div>
              <div className="col-sm-6 d-flex flex-column justify-content-between ps-sm-4 border-start">
                {[
                  { label: 'Completed',   count: 1,  color: 'success', icon: 'tabler-circle-check'  },
                  { label: 'On Track',    count: 5,  color: 'primary', icon: 'tabler-trending-up'   },
                  { label: 'Falling Behind', count: 1, color: 'warning', icon: 'tabler-clock'       },
                  { label: 'At Risk',     count: 1,  color: 'danger',  icon: 'tabler-alert-triangle' },
                ].map(r => (
                  <div key={r.label} className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <div className={`badge bg-label-${r.color} rounded p-1`}>
                        <i className={`icon-base ti ${r.icon} icon-sm`}></i>
                      </div>
                      <small>{r.label}</small>
                    </div>
                    <h6 className="mb-0 fw-bold">{r.count}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Student Table ── */}
      <div className="card">

        {/* Toolbar */}
        <div className="card-body border-bottom py-3">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex flex-wrap gap-3">
              <select className="form-select w-auto">
                <option>Criminal Law Fundamentals</option>
                <option>Constitutional Law Mastery</option>
              </select>
              <select className="form-select w-auto">
                <option>Sort by Progress</option>
                <option>Sort by Last Active</option>
                <option>Sort by Quiz Score</option>
              </select>
            </div>
            <div className="position-relative" style={{ minWidth: 240 }}>
              <span className="position-absolute top-50 start-0 translate-middle-y ps-3" style={{ pointerEvents: 'none' }}>
                <i className="ti tabler-search text-body-secondary"></i>
              </span>
              <input className="form-control ps-5" placeholder="Search students..." />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="card-datatable table-responsive">
          <table className="table border-top table-hover">
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Lessons</th>
                <th>Progress</th>
                <th>Quiz Avg</th>
                <th>Last Active</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {students.map((s, i) => (
                <>
                  <tr key={i} className="cursor-pointer" onClick={() => setExpanded(expanded === i ? null : i)}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar avatar-sm">
                          <span className={`avatar-initial rounded-circle fw-bold bg-label-${s.color}`}>{s.initials}</span>
                        </div>
                        <div>
                          <span className="fw-semibold text-heading d-block">{s.name}</span>
                          <small className="text-body-secondary">{s.course}</small>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge bg-label-primary rounded-pill">{s.course.split(' ').slice(0,2).join(' ')}</span></td>
                    <td><span className="fw-medium">{s.done} / {s.total}</span></td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="progress w-px-100" style={{ height: 6 }}>
                          <div
                            className={`progress-bar ${s.progress === 100 ? 'bg-success' : s.progress >= 50 ? 'bg-primary' : 'bg-warning'}`}
                            role="progressbar"
                            style={{ width: `${s.progress}%` }}
                          ></div>
                        </div>
                        <small className="fw-bold">{s.progress}%</small>
                      </div>
                    </td>
                    <td>
                      <span className={`badge bg-label-${s.quizAvg >= 75 ? 'success' : s.quizAvg >= 50 ? 'warning' : 'danger'} rounded-pill`}>
                        {s.quizAvg}%
                      </span>
                    </td>
                    <td><small className="text-body-secondary">{s.lastActive}</small></td>
                    <td className="text-end">
                      <i className={`ti tabler-chevron-${expanded === i ? 'up' : 'down'} text-primary`}></i>
                    </td>
                  </tr>

                  {/* Expanded row — same gradient accordion style */}
                  {expanded === i && (
                    <tr key={`expand-${i}`}>
                      <td colSpan={7} className="p-0 border-bottom">
                        <div className="p-4" style={{ background: '#fff', borderTop: '3px solid #7367F0' }}>
                          <div className="row g-4 text-wrap">

                            {/* Lesson Completion */}
                            <div className="col-md-4">
                              <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="badge bg-label-primary rounded p-1_5">
                                  <i className="ti tabler-book icon-md"></i>
                                </div>
                                <span className="fw-bold small text-uppercase text-body-secondary">Lesson Completion</span>
                              </div>
                              <div className="bg-white rounded p-3 shadow-sm d-flex flex-column gap-2">
                                {[
                                  { title: 'Introduction to IPC',  icon: 'tabler-circle-check', color: 'success'   },
                                  { title: 'Section 299–302',      icon: 'tabler-circle-check', color: 'success'   },
                                  { title: 'Section 320–326',      icon: 'tabler-circle-check', color: 'success'   },
                                  { title: 'Property Offences',    icon: 'tabler-circle-check', color: 'success'   },
                                  { title: 'Evidence Act',         icon: 'tabler-clock',        color: 'warning'   },
                                  { title: 'Bail Application',     icon: 'tabler-lock',         color: 'secondary' },
                                ].map(l => (
                                  <div key={l.title} className={`d-flex align-items-center gap-2 small py-1 border-bottom text-${l.color}`}>
                                    <i className={`ti ${l.icon} fs-6`}></i>
                                    <span>{l.title}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Quiz History */}
                            <div className="col-md-4">
                              <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="badge bg-label-info rounded p-1_5">
                                  <i className="ti tabler-file-analytics icon-md"></i>
                                </div>
                                <span className="fw-bold small text-uppercase text-body-secondary">Quiz History</span>
                              </div>
                              <div className="bg-white rounded p-3 shadow-sm d-flex flex-column gap-3">
                                {[
                                  { quiz: 'Module 1 Quiz', score: '18/20', pct: 90 },
                                  { quiz: 'Module 2 Quiz', score: '16/20', pct: 80 },
                                  { quiz: 'Property Quiz', score: '15/20', pct: 75 },
                                ].map((q, idx) => (
                                  <div key={idx}>
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                      <small className="fw-semibold">{q.quiz}</small>
                                      <span className="badge bg-label-success rounded-pill">{q.score}</span>
                                    </div>
                                    <div className="progress" style={{ height: 6 }}>
                                      <div className="progress-bar bg-primary" style={{ width: `${q.pct}%` }}></div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tutor Notes */}
                            <div className="col-md-4">
                              <div className="d-flex align-items-center gap-2 mb-3">
                                <div className="badge bg-label-success rounded p-1_5">
                                  <i className="ti tabler-notes icon-md"></i>
                                </div>
                                <span className="fw-bold small text-uppercase text-body-secondary">Tutor Notes</span>
                              </div>
                              <div className="rounded overflow-hidden shadow-sm" style={{ border: '1px solid #e0deff' }}>
                                <div className="p-2 border-bottom" style={{ background: '#f5f3ff' }}>
                                  <small className="text-body-secondary">Private — only visible to you</small>
                                </div>
                                <textarea
                                  className="form-control border-0 rounded-0 p-3 small bg-white"
                                  rows={5}
                                  placeholder="Add a private note about this student..."
                                />
                              </div>
                              <button className="btn btn-primary btn-sm w-100 mt-2">
                                <i className="ti tabler-device-floppy me-1"></i>Save Note
                              </button>
                            </div>

                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer pagination */}
        <div className="card-footer">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-2">
              <span className="text-body-secondary small">Show</span>
              <select className="form-select form-select-sm w-auto">
                <option>8</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span className="text-body-secondary small">entries</span>
              <span className="text-body-secondary small ms-3">Showing 1–8 of 560 students</span>
            </div>
            <nav>
              <ul className="pagination pagination-sm mb-0 gap-1">
                {[{ label: '‹' }, { label: '1', active: true }, { label: '2' }, { label: '3' }, { label: '…' }, { label: '70' }, { label: '›' }].map((p, i) => (
                  <li key={i} className={`page-item${p.active ? ' active' : ''}${p.label === '…' ? ' disabled' : ''}`}>
                    <a className="page-link rounded" href="#">{p.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

      </div>

    </TutorLayout>
  );
}
