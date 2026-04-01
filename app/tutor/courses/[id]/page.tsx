'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const curriculum = [
  {
    id: 'mod1',
    title: 'Module 1: Introduction to Criminal Law',
    progress: '3 / 3',
    lessons: [
      { icon: 'tabler-video',          title: 'Overview of Criminal Law in India',     duration: '18 min',   done: true  },
      { icon: 'tabler-file-text',      title: 'IPC Structure and History — PDF Notes', duration: '12 pages', done: true  },
      { icon: 'tabler-file-analytics', title: 'Quiz: Basics of IPC',                   duration: '10 Qs',    done: true  },
    ],
  },
  {
    id: 'mod2',
    title: 'Module 2: Offences Against the Person',
    progress: '2 / 4',
    lessons: [
      { icon: 'tabler-video',       title: 'Sec 299–304: Culpable Homicide & Murder', duration: '42 min',        done: true  },
      { icon: 'tabler-video',       title: 'Sec 320–326: Grievous Hurt & Assault',    duration: '28 min',        done: true  },
      { icon: 'tabler-broadcast',   title: 'Live Class: State v. Ram Chandra',        duration: 'Apr 1 @ 10 AM', done: false },
      { icon: 'tabler-file-report', title: 'Assignment: Write a Charge Sheet',        duration: '25 marks',      done: false },
    ],
  },
  {
    id: 'mod3',
    title: 'Module 3: Property Offences',
    progress: '1 / 3',
    lessons: [
      { icon: 'tabler-video',          title: 'Theft, Robbery & Dacoity: Sec 378–402', duration: '35 min', done: true  },
      { icon: 'tabler-video',          title: 'Cheating & Criminal Breach of Trust',    duration: '30 min', done: false },
      { icon: 'tabler-file-analytics', title: 'Quiz: Property Offences (20 Qs)',        duration: '20 Qs',  done: false },
    ],
  },
];

const students = [
  { name: 'Arjun Mehta',   enrolled: 'Mar 1',  progress: 68,  lastActive: 'Today',     quiz: '82%' },
  { name: 'Sunita Kapoor', enrolled: 'Feb 15', progress: 92,  lastActive: 'Yesterday', quiz: '91%' },
  { name: 'Vikram Joshi',  enrolled: 'Feb 20', progress: 45,  lastActive: 'Mar 25',    quiz: '64%' },
  { name: 'Deepa Nair',    enrolled: 'Mar 5',  progress: 30,  lastActive: 'Mar 27',    quiz: '71%' },
  { name: 'Rahul Sharma',  enrolled: 'Jan 20', progress: 100, lastActive: 'Mar 28',    quiz: '88%' },
];

const rewatched = [
  { title: 'Sec 302 & Murder — Part 1',   views: 47 },
  { title: 'Fundamental Rights Overview', views: 38 },
  { title: 'IPC Introduction',            views: 29 },
  { title: 'Bail Applications — Live',    views: 24 },
];

export default function TutorCourseDetailPage() {
  const [tab, setTab]         = useState<'students' | 'analytics' | 'settings'>('students');
  const [openMod, setOpenMod] = useState('mod1');

  return (
    <TutorLayout active="/tutor/courses" title="Criminal Law Fundamentals" breadcrumb="Home / Courses / Criminal Law Fundamentals">
      <div className="row g-6">

        {/* ── Main Content (col-lg-8) ─────────────────────────────── */}
        <div className="col-lg-8">

          {/* Course header card */}
          <div className="card mb-6">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
                <div>
                  <h5 className="mb-1 text-heading">Criminal Law Fundamentals</h5>
                  <p className="mb-0 text-body">
                    Taught by <span className="fw-medium text-heading">Anil Kumar</span>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="badge bg-label-primary">Criminal Law</span>
                  <span className="badge bg-label-success">Published</span>
                  <i className="ti tabler-share icon-lg text-body-secondary" style={{ cursor: 'pointer' }}></i>
                  <i className="ti tabler-bookmarks icon-lg text-body-secondary" style={{ cursor: 'pointer' }}></i>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="card shadow-none border mb-0">
                <div className="p-2">
                  <div className="rounded-2 overflow-hidden position-relative" style={{ height: 280 }}>
                    <img
                      src="/img/courses/criminal_law.png"
                      alt="Criminal Law Fundamentals"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      className="position-absolute bottom-0 start-0 end-0 px-4 py-3"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)' }}
                    >
                      <h5 className="text-white mb-1">Criminal Law Fundamentals</h5>
                      <p className="text-white mb-0 small" style={{ opacity: 0.85 }}>24 hours · 10 lessons · 3 modules</p>
                    </div>
                  </div>
                </div>

                <div className="card-body pt-4">
                  <h5 className="mb-2">About this course</h5>
                  <p className="mb-0 text-body">
                    A comprehensive study of the Indian Penal Code, criminal procedure, evidence law, and landmark
                    Supreme Court and High Court judgements. Designed for law students preparing for judiciary exams,
                    CLAT, or professional practice.
                  </p>

                  <hr className="my-5" />

                  <h5 className="mb-3">By the numbers</h5>
                  <div className="d-flex flex-wrap row-gap-2 gap-8">
                    <div>
                      <p className="mb-2 text-nowrap"><i className="ti tabler-users me-2"></i>Students: <strong>342</strong></p>
                      <p className="mb-2 text-nowrap"><i className="ti tabler-circle-check me-2"></i>Avg. completion: <strong>68%</strong></p>
                      <p className="mb-2 text-nowrap"><i className="ti tabler-notes me-2"></i>Avg. quiz score: <strong>74%</strong></p>
                      <p className="mb-0 text-nowrap"><i className="ti tabler-star-filled me-2 text-warning"></i>Rating: <strong>4.8</strong> (124 reviews)</p>
                    </div>
                    <div>
                      <p className="mb-2 text-nowrap"><i className="ti tabler-video me-2"></i>Lessons: <strong>10</strong></p>
                      <p className="mb-2 text-nowrap"><i className="ti tabler-clock me-2"></i>Duration: <strong>24 hours</strong></p>
                      <p className="mb-2 text-nowrap"><i className="ti tabler-currency-rupee me-2"></i>Earnings: <strong>₹34,200</strong></p>
                      <p className="mb-0 text-nowrap"><i className="ti tabler-check me-2"></i>Level: <strong>All Levels</strong></p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  <h5 className="mb-3">Description</h5>
                  <p className="text-body mb-3">
                    This course covers the entire syllabus for criminal law as prescribed by the Bar Council and major
                    law university syllabi. Each module builds on the previous one, taking students from foundational
                    concepts to complex case analysis.
                  </p>
                  <p className="text-body mb-0">
                    "Extremely well-structured and detailed. The case studies really help put theory into context."
                    — <em>Arjun Mehta</em>
                  </p>

                  <hr className="my-5" />

                  <h5 className="mb-3">Instructor</h5>
                  <div className="d-flex align-items-center gap-3">
                    <span
                      className="badge rounded bg-label-primary fw-bold fs-4 d-inline-flex align-items-center justify-content-center"
                      style={{ width: 48, height: 48 }}
                    >AK</span>
                    <div>
                      <h6 className="mb-0">Anil Kumar</h6>
                      <small className="text-body-secondary">Senior Advocate, Criminal &amp; Constitutional Law</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Tabs ── */}
          <div className="card">
            <div className="card-header d-flex flex-wrap justify-content-between align-items-center gap-3">
              <ul className="nav nav-tabs card-header-tabs mb-0">
                {([
                  ['students',  'tabler-users',     'Students'],
                  ['analytics', 'tabler-chart-bar', 'Analytics'],
                  ['settings',  'tabler-settings',  'Settings'],
                ] as const).map(([key, icon, label]) => (
                  <li key={key} className="nav-item">
                    <button
                      className={`nav-link d-flex align-items-center gap-2${tab === key ? ' active' : ''}`}
                      onClick={() => setTab(key)}
                    >
                      <i className={`ti ${icon}`}></i>{label}
                    </button>
                  </li>
                ))}
              </ul>
              {tab === 'students' && (
                <a href="/tutor/students" className="btn btn-sm btn-outline-primary">
                  <i className="ti tabler-external-link me-1"></i>View All Students
                </a>
              )}
            </div>

            {/* Students */}
            {tab === 'students' && (
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="border-top">
                    <tr>
                      <th>Student</th>
                      <th>Enrolled</th>
                      <th>Progress</th>
                      <th>Last Active</th>
                      <th>Quiz Avg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(s => (
                      <tr key={s.name}>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <div className="avatar">
                              <span className="avatar-initial rounded-circle bg-label-primary">{s.name[0]}</span>
                            </div>
                            <span className="fw-semibold">{s.name}</span>
                          </div>
                        </td>
                        <td className="text-body-secondary">{s.enrolled}</td>
                        <td>
                          <div className="d-flex align-items-center gap-2" style={{ minWidth: 120 }}>
                            <div className="progress flex-grow-1" style={{ height: 6 }}>
                              <div
                                className={`progress-bar ${s.progress === 100 ? 'bg-success' : 'bg-primary'}`}
                                style={{ width: `${s.progress}%` }}
                              ></div>
                            </div>
                            <small className="fw-semibold">{s.progress}%</small>
                          </div>
                        </td>
                        <td className="text-body-secondary">{s.lastActive}</td>
                        <td>
                          <span className={`badge bg-label-${parseInt(s.quiz) >= 80 ? 'success' : parseInt(s.quiz) >= 65 ? 'warning' : 'danger'}`}>
                            {s.quiz}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Analytics */}
            {tab === 'analytics' && (
              <div className="card-body">
                <div className="row g-4 mb-4">
                  {[
                    { label: 'Enrolled',  val: '342',    icon: 'tabler-users',          color: 'primary' },
                    { label: 'Completed', val: '233',    icon: 'tabler-circle-check',   color: 'success' },
                    { label: 'Avg Score', val: '74%',    icon: 'tabler-notes',          color: 'warning' },
                    { label: 'Earnings',  val: '₹34.2K', icon: 'tabler-currency-rupee', color: 'info'    },
                  ].map(s => (
                    <div key={s.label} className="col-sm-6 col-lg-3">
                      <div className="border rounded p-3 text-center">
                        <div
                          className={`badge rounded bg-label-${s.color} mx-auto mb-2 d-flex align-items-center justify-content-center`}
                          style={{ width: 52, height: 52, fontSize: 0 }}
                        >
                          <i className={`icon-base ti ${s.icon} icon-lg`}></i>
                        </div>
                        <h4 className="mb-0 fw-bold">{s.val}</h4>
                        <small className="text-body-secondary">{s.label}</small>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row g-4">
                  <div className="col-md-6">
                    <h6 className="fw-semibold mb-3">Most Rewatched Lessons</h6>
                    <ul className="list-unstyled m-0 p-0">
                      {rewatched.map((r, i) => (
                        <li key={i} className={`d-flex align-items-center justify-content-between py-3${i < rewatched.length - 1 ? ' border-bottom' : ''}`}>
                          <div className="d-flex align-items-center gap-3">
                            <span className="badge rounded bg-label-primary p-1_5">
                              <i className="icon-base ti tabler-video icon-md"></i>
                            </span>
                            <small className="text-heading">{r.title}</small>
                          </div>
                          <span className="badge bg-label-primary rounded-pill">{r.views} views</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="fw-semibold mb-3">Lesson Completion Drop-off</h6>
                    <div className="d-flex align-items-end gap-2" style={{ height: 140 }}>
                      {[100, 95, 88, 82, 75, 68, 60, 54, 48, 43].map((h, i) => (
                        <div
                          key={i}
                          className="flex-grow-1 rounded-top"
                          style={{ height: `${h}%`, background: `rgba(115,103,240,${0.3 + i * 0.07})` }}
                        ></div>
                      ))}
                    </div>
                    <div className="d-flex justify-content-between mt-1">
                      <small className="text-body-secondary">L1</small>
                      <small className="text-body-secondary">L10</small>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings */}
            {tab === 'settings' && (
              <div className="card-body">
                <h5 className="mb-3">Course Performance</h5>
                <div className="d-flex flex-wrap row-gap-2 gap-8 mb-2">
                  <div>
                    <p className="text-nowrap mb-2"><i className="ti tabler-users me-2"></i>Students enrolled: <strong>342</strong></p>
                    <p className="text-nowrap mb-2"><i className="ti tabler-circle-check me-2"></i>Avg. completion rate: <strong>68%</strong></p>
                    <p className="text-nowrap mb-0"><i className="ti tabler-notes me-2"></i>Avg. quiz score: <strong>74%</strong></p>
                  </div>
                  <div>
                    <p className="text-nowrap mb-2"><i className="ti tabler-star-filled me-2 text-warning"></i>Rating: <strong>4.8</strong> <span className="text-body-secondary fw-normal">(124 reviews)</span></p>
                    <p className="text-nowrap mb-2"><i className="ti tabler-currency-rupee me-2"></i>Earnings: <strong>₹34,200</strong></p>
                    <p className="text-nowrap mb-0"><i className="ti tabler-trending-up me-2 text-success"></i>Completion trend: <strong className="text-success">↑ 4% this month</strong></p>
                  </div>
                </div>

                <hr className="my-5" />

                <h5 className="mb-4">Course Actions</h5>
                <div className="row g-3">
                  {[
                    { icon: 'tabler-clipboard-list', label: 'Edit Curriculum',    sub: 'Manage lessons & modules', href: '/tutor/courses/1/curriculum',  color: 'primary' },
                    { icon: 'tabler-video-plus',     label: 'Schedule Live Class', sub: 'Set a new live session',   href: '/tutor/live-classes/schedule', color: 'info'    },
                    { icon: 'tabler-users',          label: 'View Students',       sub: '342 students enrolled',    href: '/tutor/students',              color: 'success' },
                    { icon: 'tabler-help-circle',    label: 'Answer Doubts',       sub: '3 pending doubts',         href: '/tutor/doubts',                color: 'warning' },
                  ].map(a => (
                    <div key={a.label} className="col-sm-6">
                      <a
                        href={a.href}
                        className="card shadow-none border d-flex flex-row align-items-center gap-3 p-3 h-100 text-decoration-none"
                        style={{ borderRadius: 10 }}
                      >
                        <div className="avatar flex-shrink-0">
                          <span className={`avatar-initial rounded bg-label-${a.color}`}>
                            <i className={`icon-base ti ${a.icon} icon-26px`}></i>
                          </span>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <div className="fw-semibold text-heading text-truncate">{a.label}</div>
                          <small className="text-body-secondary text-truncate d-block">{a.sub}</small>
                        </div>
                        <i className="ti tabler-chevron-right text-body-secondary flex-shrink-0"></i>
                      </a>
                    </div>
                  ))}
                </div>

                <hr className="my-5" />

                <h5 className="mb-4">Configuration</h5>
                <div className="row g-4 mb-5" style={{ maxWidth: 560 }}>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Certificate Template</label>
                    <select className="form-select">
                      <option>LexEd Standard Certificate</option>
                      <option>Gold Certificate</option>
                      <option>Custom Template</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Visibility</label>
                    <select className="form-select">
                      <option>Public — All enrolled students</option>
                      <option>Private — Invite only</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-3">
                  <button className="btn btn-primary"><i className="ti tabler-device-floppy me-1"></i>Save Settings</button>
                  <button className="btn btn-outline-warning"><i className="ti tabler-eye-off me-1"></i>Unpublish</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Sidebar (col-lg-4) ──────────────────────────────────── */}
        <div className="col-lg-4">
          <div className="accordion stick-top accordion-custom-button" id="courseContent">
            {curriculum.map(mod => (
              <div key={mod.id} className="accordion-item">
                <div className="accordion-header">
                  <button
                    type="button"
                    className={`accordion-button${openMod !== mod.id ? ' collapsed' : ''}`}
                    onClick={() => setOpenMod(openMod === mod.id ? '' : mod.id)}
                  >
                    <span className="d-flex flex-column">
                      <span className="h5 mb-0">{mod.title}</span>
                      <span className="text-body fw-normal">{mod.progress} | {mod.lessons.length} lessons</span>
                    </span>
                  </button>
                </div>
                {openMod === mod.id && (
                  <div className="accordion-collapse">
                    <div className="accordion-body py-4">
                      {mod.lessons.map((lesson, li) => (
                        <div key={li} className={`form-check${li < mod.lessons.length - 1 ? ' mb-4' : ''}`}>
                          <input
                            className="form-check-input mt-3"
                            type="checkbox"
                            defaultChecked={lesson.done}
                            id={`${mod.id}-lesson-${li}`}
                          />
                          <label className="form-check-label ms-4" htmlFor={`${mod.id}-lesson-${li}`}>
                            <span className="mb-0 h6 d-flex align-items-center gap-2">
                              <i className={`ti ${lesson.icon} text-body-secondary`} style={{ fontSize: 14 }}></i>
                              {lesson.title}
                            </span>
                            <small className="text-body d-block">{lesson.duration}</small>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </TutorLayout>
  );
}
