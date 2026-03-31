'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

export default function TutorDashboard() {
  return (
    <TutorLayout active="/tutor/dashboard" title="Dashboard" breadcrumb="Home / Dashboard">
      <div className="row g-4">
        <div className="col-xl-8">
          {/* My Courses */}
          <div className="card mb-4">
            <div className="card-header border-bottom py-3">
              <h6 className="m-0 fw-bold">
                <i className="ti tabler-book me-2 text-primary"></i>My Courses
              </h6>
            </div>
            <div className="card-body pt-4">
              <div className="row g-3">
                {[
                  { title: 'Criminal Law Fundamentals', students: 342, completion: 68, next: 'Apr 1 @ 10 AM', color: 'primary' },
                  { title: 'Constitutional Law Mastery', students: 218, completion: 54, next: 'Apr 2 @ 2 PM', color: 'info' },
                ].map(c => (
                  <div key={c.title} className="col-md-6">
                    <a href="/tutor/courses/1" className="text-decoration-none">
                      <div className="border rounded p-3 h-100 hover-shadow-sm transition-all">
                        <div className={`progress mb-3`} style={{ height: 6 }}>
                          <div className={`progress-bar bg-${c.color}`} role="progressbar" style={{ width: `${c.completion}%` }}></div>
                        </div>
                        <h6 className="fw-bold mb-2 text-heading">{c.title}</h6>
                        <div className="d-flex align-items-center gap-3 mb-3 small text-body-secondary">
                          <span className="d-flex align-items-center"><i className="ti tabler-users me-1"></i>{c.students} Students</span>
                          <span className="d-flex align-items-center"><i className="ti tabler-circle-check me-1"></i>{c.completion}% Complete</span>
                        </div>
                        <div className={`text-${c.color} small fw-bold d-flex align-items-center`}>
                          <i className="ti tabler-video me-1"></i>Next: {c.next}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="card mb-4">
            <div className="card-header border-bottom py-3">
              <h6 className="m-0 fw-bold">
                <i className="ti tabler-calendar-event me-2 text-primary"></i>Today's Schedule
              </h6>
            </div>
            <div className="card-body">
              {[
                { time: '10:00 AM', topic: 'Section 302 & Murder — Case Studies', course: 'Criminal Law Fundamentals', students: 124 },
                { time: '05:30 PM', topic: 'CLAT Mock Test Discussion', course: 'Criminal Law Fundamentals', students: 89 },
              ].map((c, i) => (
                <div key={i} className={`d-flex align-items-center gap-3 py-3 ${i === 0 ? 'border-bottom' : ''}`}>
                  <div className="text-center" style={{ minWidth: 80 }}>
                    <div className="fw-bold text-primary h5 mb-1">{c.time}</div>
                    <small className="text-body-secondary text-uppercase fw-semibold">Today</small>
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <h6 className="mb-1 text-heading fw-semibold">{c.topic}</h6>
                    <small className="text-body-secondary">
                      <i className="ti tabler-book-2 me-1 small"></i>{c.course} · <i className="ti tabler-users me-1 small"></i>{c.students} students joining
                    </small>
                  </div>
                  <a href="/tutor/live-classes/1" className="btn btn-primary btn-sm px-3">
                    <i className="ti tabler-video me-1"></i>Start
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <div className="card-header border-bottom py-3">
              <h6 className="m-0 fw-bold">
                <i className="ti tabler-bolt me-2 text-primary"></i>Recent Student Activity
              </h6>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {[
                  { icon: 'tabler-circle-check', color: 'success', text: 'Arjun Mehta completed Lesson: Section 299 IPC', time: '8 min ago' },
                  { icon: 'tabler-file-text',    color: 'primary', text: 'Sunita Kapoor submitted Assignment 3: Bail Application', time: '42 min ago' },
                  { icon: 'tabler-help-circle',  color: 'warning', text: 'Vikram Joshi asked a doubt in Evidence Act — Section 45', time: '1 hr ago' },
                  { icon: 'tabler-edit',         color: 'info',    text: 'Deepa Nair attempted Quiz: Module 2 (scored 16/20)', time: '2 hrs ago' },
                ].map((act, i) => (
                  <li key={i} className="list-group-item px-0 py-3 border-0 d-flex gap-3 align-items-start">
                    <div className={`avatar avatar-sm bg-label-${act.color} rounded`}>
                      <span className="avatar-initial rounded"><i className={`ti ${act.icon}`}></i></span>
                    </div>
                    <div>
                      <div className="text-heading small mb-1">{act.text}</div>
                      <small className="text-body-secondary">{act.time}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-xl-4">
          <div className="d-flex flex-column gap-4">
            {/* Pending items */}
            <div className="card">
              <div className="card-body d-flex flex-column gap-3">
                <h6 className="fw-bold mb-1">
                  <i className="ti tabler-clock me-2 text-primary"></i>Pending Items
                </h6>
                <a href="/tutor/doubts" className="text-decoration-none">
                  <div className="d-flex align-items-center gap-3 p-3 bg-label-warning rounded border border-warning border-opacity-10 cursor-pointer">
                    <div className="avatar bg-warning text-white rounded">
                      <i className="ti tabler-help-circle fs-3"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold text-warning">3 Unanswered Doubts</h6>
                      <small className="text-body-secondary">Oldest: 2 hours ago</small>
                    </div>
                    <i className="ti tabler-chevron-right ms-auto text-warning"></i>
                  </div>
                </a>
                <a href="/tutor/assignments" className="text-decoration-none">
                  <div className="d-flex align-items-center gap-3 p-3 bg-label-danger rounded border border-danger border-opacity-10 cursor-pointer">
                    <div className="avatar bg-danger text-white rounded">
                      <i className="ti tabler-file-report fs-3"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold text-danger">5 Unreviewed Assignments</h6>
                      <small className="text-body-secondary">Oldest submitted: yesterday</small>
                    </div>
                    <i className="ti tabler-chevron-right ms-auto text-danger"></i>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold mb-3">
                  <i className="ti tabler-zap me-2 text-primary"></i>Quick Actions
                </h6>
                <div className="d-grid gap-2">
                  {[
                    ['/tutor/content/upload-video',  'tabler-video-plus',  'Upload Video Lesson'],
                    ['/tutor/live-classes/schedule', 'tabler-calendar-plus', 'Schedule Live Class'],
                    ['/tutor/doubts',                'tabler-messages',     'View Student Doubts'],
                    ['/tutor/content/create-quiz',   'tabler-file-analytics', 'Create a Quiz'],
                  ].map(([href, icon, label]) => (
                    <a key={href} href={href} className="btn btn-outline-secondary text-start d-flex align-items-center gap-2">
                      <i className={`ti ${icon} fs-5`}></i> {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold mb-3">
                  <i className="ti tabler-chart-pie-2 me-2 text-primary"></i>My Stats This Month
                </h6>
                <div className="d-flex flex-column gap-1">
                  {[
                    { label: 'Students Taught', val: '560', icon: 'tabler-users' },
                    { label: 'Lessons Uploaded', val: '4',   icon: 'tabler-movie' },
                    { label: 'Live Classes',    val: '8',   icon: 'tabler-broadcast' },
                    { label: 'Doubts Answered', val: '47',  icon: 'tabler-message-check' },
                    { label: 'Reviewed',        val: '38',  icon: 'tabler-checkbox' },
                  ].map((s, i) => (
                    <div key={i} className="d-flex align-items-center justify-content-between py-2 border-bottom last-child-border-0">
                      <div className="d-flex align-items-center gap-2">
                        <i className={`ti ${s.icon} text-body-secondary small`}></i>
                        <span className="text-body-secondary small">{s.label}</span>
                      </div>
                      <span className="fw-bold text-heading">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}
