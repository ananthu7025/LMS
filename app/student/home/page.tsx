'use client';
import Link from 'next/link';
import StudentLayout from '@/components/layouts/StudentLayout';

const topics = [
  { label: 'Criminal Law',       pct: 42, color: 'primary'   },
  { label: 'Constitutional Law', pct: 28, color: 'info'      },
  { label: 'CLAT / Judiciary',   pct: 18, color: 'success'   },
  { label: 'Evidence Act',       pct: 7,  color: 'warning'   },
  { label: 'Civil Law',          pct: 5,  color: 'danger'    },
];

const tutors = [
  { init: 'AK', color: 'primary', name: 'Anil Kumar',    subject: 'Criminal Law',       courses: 4 },
  { init: 'PM', color: 'info',    name: 'Priya Menon',   subject: 'Constitutional Law',  courses: 3 },
  { init: 'MS', color: 'success', name: 'Meera Sharma',  subject: 'Family Law',          courses: 2 },
  { init: 'SK', color: 'warning', name: 'Suresh Kapoor', subject: 'Corporate Law',       courses: 2 },
];

const topCourses = [
  { icon: 'tabler-gavel',       label: 'Criminal Law Fundamentals',  views: '1.2k', color: 'primary' },
  { icon: 'tabler-book',        label: 'Constitutional Law Mastery', views: '980',  color: 'info'    },
  { icon: 'tabler-certificate', label: 'CLAT 2025 Preparation',      views: '3.7k', color: 'success' },
  { icon: 'tabler-scale',       label: 'Evidence Act Deep Dive',     views: '720',  color: 'warning' },
  { icon: 'tabler-briefcase',   label: 'Contract Law Basics',        views: '548',  color: 'danger'  },
];

const assignments = [
  { label: 'Criminal Law — Mock Test 1', tasks: 12, pct: 72, color: '#7367F0' },
  { label: 'Constitutional Law Quiz',    tasks: 8,  pct: 48, color: '#28C76F' },
  { label: 'Evidence Act Assignment',    tasks: 20, pct: 15, color: '#EA5455' },
  { label: 'CLAT Practice Paper',        tasks: 30, pct: 60, color: '#00CFE8' },
];

const continueLearning = [
  {
    image: '/img/courses/criminal_law.png',
    title: 'Criminal Law Fundamentals',
    category: 'Criminal Law',
    categoryColor: 'primary',
    tutor: 'Anil Kumar',
    duration: '24h',
    completion: 68,
    status: 'In Progress',
    statusColor: 'warning',
    href: '/student/learn/1',
  },
  {
    image: '/img/courses/constitutional_law.png',
    title: 'Constitutional Law Mastery',
    category: 'Constitutional Law',
    categoryColor: 'info',
    tutor: 'Priya Menon',
    duration: '18h',
    completion: 32,
    status: 'In Progress',
    statusColor: 'warning',
    href: '/student/learn/2',
  },
  {
    image: '/img/courses/exam_prep.png',
    title: 'CLAT 2025 Preparation',
    category: 'Exam Prep',
    categoryColor: 'success',
    tutor: 'Priya Nair',
    duration: '32h',
    completion: 100,
    status: 'Completed',
    statusColor: 'success',
    href: '/student/learn/3',
  },
];

export default function StudentHomePage() {
  return (
    <StudentLayout activePath="/student/home">

      {/* ── Welcome / Hour Chart ── */}
      <div className="card bg-transparent shadow-none mb-6 border-0">
        <div className="card-body row p-0 pb-6 g-6">

          {/* Left — welcome + 3 stats */}
          <div className="col-12 col-lg-8 card-separator">
            <h5 className="mb-2">Welcome back, <span className="h4">Rahul</span></h5>
            <div className="col-12 col-lg-8">
              <p>Your progress this week is Awesome. Keep it up and earn more reward points!</p>
            </div>

            <div className="d-flex justify-content-between flex-wrap gap-4 me-12">

              {/* Hours Spent */}
              <div className="d-flex align-items-center gap-4 me-6 me-sm-0">
                <div className="avatar avatar-lg">
                  <div className="avatar-initial bg-label-primary rounded">
                    <div className="text-primary">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" opacity="0.2" fill="currentColor"/>
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-right">
                  <p className="mb-0 fw-medium">Hours Spent</p>
                  <h4 className="text-primary mb-0">28h</h4>
                </div>
              </div>

              {/* Test Results */}
              <div className="d-flex align-items-center gap-4">
                <div className="avatar avatar-lg">
                  <div className="avatar-initial bg-label-info rounded">
                    <div className="text-info">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2" fill="currentColor"/>
                        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-right">
                  <p className="mb-0 fw-medium">Test Results</p>
                  <h4 className="text-info mb-0">76%</h4>
                </div>
              </div>

              {/* Course Completed */}
              <div className="d-flex align-items-center gap-4">
                <div className="avatar avatar-lg">
                  <div className="avatar-initial bg-label-warning rounded">
                    <div className="text-warning">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15l-2-5L2 9l7-2 1-7 2 7 7 1-7 2-2 5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity="0.2" fill="currentColor"/>
                        <path d="M12 15l-2-5L2 9l7-2 1-7 2 7 7 1-7 2-2 5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-right">
                  <p className="mb-0 fw-medium">Course Completed</p>
                  <h4 className="text-warning mb-0">3</h4>
                </div>
              </div>

            </div>
          </div>

          {/* Right — Time Spendings */}
          <div className="col-12 col-lg-4 ps-md-4 ps-lg-6">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5 className="mb-1">Time Spendings</h5>
                <p className="mb-6 text-body-secondary">Weekly report</p>
                <div>
                  <h4 className="mb-2">42<span className="text-body fw-normal">h</span> 30<span className="text-body fw-normal">m</span></h4>
                  <span className="badge bg-label-success">+14.2%</span>
                </div>
              </div>
              {/* Mini bar chart visual */}
              <div className="d-flex align-items-end gap-1" style={{ height: 80 }}>
                {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="rounded-top"
                    style={{
                      width: 10,
                      height: `${h}%`,
                      background: i === 5 ? '#7367F0' : '#7367F020',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Topics + Instructors ── */}
      <div className="row mb-6 g-6">

        {/* Topics you are interested in */}
        <div className="col-12 col-xl-8">
          <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="card-title m-0 me-2">Topic you are interested in</h5>
              <div className="dropdown">
                <button className="btn p-0" type="button" data-bs-toggle="dropdown">
                  <i className="icon-base ti tabler-dots-vertical icon-22px text-body-secondary"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Highest Views</a>
                  <a className="dropdown-item" href="#">See All</a>
                </div>
              </div>
            </div>
            <div className="card-body row g-3">

              {/* Progress bars */}
              <div className="col-md-8">
                {topics.map(t => (
                  <div key={t.label} className="mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span className="small text-heading">{t.label}</span>
                      <span className="small fw-semibold">{t.pct}%</span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div
                        className={`progress-bar bg-${t.color}`}
                        role="progressbar"
                        style={{ width: `${t.pct}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend — two columns like the HTML reference */}
              <div className="col-md-4 d-flex justify-content-around align-items-center">
                <div>
                  {topics.slice(0, 3).map(t => (
                    <div key={t.label} className={`d-flex align-items-baseline${t !== topics[0] ? ' mt-6' : ''}`}>
                      <span className={`text-${t.color} me-2`}>
                        <i className="icon-base ti tabler-circle-filled icon-12px"></i>
                      </span>
                      <div>
                        <p className="mb-0">{t.label}</p>
                        <h5>{t.pct}%</h5>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  {topics.slice(3).map(t => (
                    <div key={t.label} className="d-flex align-items-baseline mt-6">
                      <span className={`text-${t.color} me-2`}>
                        <i className="icon-base ti tabler-circle-filled icon-12px"></i>
                      </span>
                      <div>
                        <p className="mb-0">{t.label}</p>
                        <h5>{t.pct}%</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Popular Instructors */}
        <div className="col-12 col-xl-4 col-md-6">
          <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between">
              <div className="card-title mb-0">
                <h5 className="m-0 me-2">Popular Instructors</h5>
              </div>
              <div className="dropdown">
                <button className="btn text-body-secondary p-0" type="button" data-bs-toggle="dropdown">
                  <i className="icon-base ti tabler-dots-vertical icon-22px"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Select All</a>
                  <a className="dropdown-item" href="#">Refresh</a>
                </div>
              </div>
            </div>
            <div className="px-5 py-4 border border-start-0 border-end-0">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 text-uppercase small">Instructors</p>
                <p className="mb-0 text-uppercase small">courses</p>
              </div>
            </div>
            <div className="card-body">
              {tutors.map((t, i) => (
                <div key={t.name} className={`d-flex justify-content-between align-items-center${i < tutors.length - 1 ? ' mb-6' : ''}`}>
                  <div className="d-flex align-items-center">
                    <div className="avatar me-4">
                      <span className={`avatar-initial rounded-circle bg-label-${t.color}`}>{t.init}</span>
                    </div>
                    <div>
                      <h6 className="mb-0 text-truncate">{t.name}</h6>
                      <small className="text-truncate text-body">{t.subject}</small>
                    </div>
                  </div>
                  <div className="text-end">
                    <h6 className="mb-0">{t.courses}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Courses */}
        <div className="col-12 col-xl-4 col-md-6">
          <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="card-title m-0 me-2">Top Courses</h5>
              <div className="dropdown">
                <button className="btn text-body-secondary p-0" type="button" data-bs-toggle="dropdown">
                  <i className="icon-base ti tabler-dots-vertical icon-lg"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Refresh</a>
                  <a className="dropdown-item" href="#">View All</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-unstyled mb-0">
                {topCourses.map((c, i) => (
                  <li key={c.label} className={`d-flex align-items-center${i < topCourses.length - 1 ? ' mb-6' : ''}`}>
                    <div className="avatar flex-shrink-0 me-4">
                      <span className={`avatar-initial rounded bg-label-${c.color}`}>
                        <i className={`icon-base ti ${c.icon} icon-lg`}></i>
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-sm-8 col-md-12 col-xxl-8 mb-1 mb-sm-0 mb-md-1 mb-xxl-0">
                        <h6 className="mb-0">{c.label}</h6>
                      </div>
                      <div className="col-sm-4 col-md-12 col-xxl-4 d-flex justify-content-xxl-end">
                        <div className="badge bg-label-secondary">{c.views} Views</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Upcoming Live Class — girl with laptop */}
        <div className="col-12 col-xl-4 col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="bg-label-primary rounded-3 text-center mb-4 pt-6">
                <img
                  className="img-fluid"
                  src="/img/illustrations/girl-with-laptop-light.png"
                  alt="Upcoming class"
                  width={140}
                />
              </div>
              <h5 className="mb-2">Upcoming Live Class</h5>
              <p className="small">
                Criminal Law — IPC Sections 302–304 with landmark case discussions by Adv. Anil Kumar.
              </p>
              <div className="row mb-4 g-3">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-primary">
                        <i className="icon-base ti tabler-calendar-event icon-28px"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0 text-nowrap">5 Apr 2026</h6>
                      <small>Date</small>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="avatar flex-shrink-0 me-3">
                      <span className="avatar-initial rounded bg-label-primary">
                        <i className="icon-base ti tabler-clock icon-28px"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0 text-nowrap">60 minutes</h6>
                      <small>Duration</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center">
                <Link href="/student/learn/1/live/1" className="btn btn-primary w-100 d-grid">
                  Join the class
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Assignment Progress */}
        <div className="col-12 col-xl-4 col-md-6">
          <div className="card h-100">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="card-title m-0 me-2">Assignment Progress</h5>
              <div className="dropdown">
                <button className="btn text-body-secondary p-0" type="button" data-bs-toggle="dropdown">
                  <i className="icon-base ti tabler-dots-vertical icon-lg"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Refresh</a>
                  <a className="dropdown-item" href="#">View All</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="p-0 m-0 list-unstyled">
                {assignments.map((a, i) => (
                  <li key={a.label} className={`d-flex${i < assignments.length - 1 ? ' mb-4 pb-1' : ''}`}>
                    {/* Circular progress */}
                    <div className="me-4 flex-shrink-0 position-relative" style={{ width: 48, height: 48 }}>
                      <svg viewBox="0 0 36 36" width="48" height="48">
                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f0f0f0" strokeWidth="3" />
                        <circle
                          cx="18" cy="18" r="15.9" fill="none"
                          stroke={a.color} strokeWidth="3"
                          strokeDasharray={`${a.pct} ${100 - a.pct}`}
                          strokeDashoffset="25"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span
                        className="position-absolute top-50 start-50 translate-middle"
                        style={{ fontSize: 9, fontWeight: 700, color: a.color, whiteSpace: 'nowrap' }}
                      >
                        {a.pct}%
                      </span>
                    </div>
                    <div className="row w-100 align-items-center">
                      <div className="col-9">
                        <div className="me-2">
                          <h6 className="mb-1 small">{a.label}</h6>
                          <p className="mb-0 small text-body-secondary">{a.tasks} Tasks</p>
                        </div>
                      </div>
                      <div className="col-3 text-end">
                        <button type="button" className="btn btn-sm btn-icon btn-label-secondary">
                          <i className="icon-base ti tabler-chevron-right icon-20px"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* ── Continue Learning table ── */}
      <div className="card mb-6">
        <div className="card-header d-flex align-items-center justify-content-between">
          <h5 className="card-title m-0">Continue Learning</h5>
          <Link href="/student/learn" className="btn btn-sm btn-label-primary">View All</Link>
        </div>
        <div className="table-responsive">
          <table className="table table-hover border-top mb-0">
            <thead>
              <tr>
                <th>Course</th>
                <th>Category</th>
                <th>Tutor</th>
                <th>Duration</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {continueLearning.map(c => (
                <tr key={c.title}>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="avatar rounded overflow-hidden" style={{ width: 40, height: 40 }}>
                        <img src={c.image} alt={c.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                      </div>
                      <a href={c.href} className="fw-semibold text-heading">{c.title}</a>
                    </div>
                  </td>
                  <td><span className={`badge bg-label-${c.categoryColor}`}>{c.category}</span></td>
                  <td className="text-body-secondary small">{c.tutor}</td>
                  <td className="small text-body-secondary">{c.duration}</td>
                  <td style={{ minWidth: 130 }}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress flex-grow-1" style={{ height: 6 }}>
                        <div className="progress-bar" role="progressbar" style={{ width: `${c.completion}%` }}></div>
                      </div>
                      <small className="fw-semibold">{c.completion}%</small>
                    </div>
                  </td>
                  <td><span className={`badge bg-label-${c.statusColor}`}>{c.status}</span></td>
                  <td>
                    <Link href={c.href} className="btn btn-sm btn-label-primary">
                      {c.completion === 100 ? 'Review' : 'Resume'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </StudentLayout>
  );
}
