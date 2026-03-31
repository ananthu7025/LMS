'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

const stats = [
  { icon: 'tabler-users',          bg: 'bg-label-primary', label: 'Total Students',       value: '1,247', sub: '+42 this week' },
  { icon: 'tabler-book',           bg: 'bg-label-info',    label: 'Active Courses',        value: '12',    sub: '3 in draft' },
  { icon: 'tabler-currency-rupee', bg: 'bg-label-success', label: 'Revenue This Month',    value: '₹2.84L',sub: '↑ 18% vs last month' },
  { icon: 'tabler-clock',          bg: 'bg-label-warning', label: 'Pending Enrollments',   value: '23',    sub: 'Awaiting confirmation' },
];

const schedule = [
  { time: '10:00 AM', course: 'Criminal Law Fundamentals',  tutor: 'Anil Kumar',    topic: 'Section 302 & 304 IPC' },
  { time: '02:00 PM', course: 'Constitutional Law',          tutor: 'Admin (Direct)', topic: 'Fundamental Rights — Art. 21' },
  { time: '05:30 PM', course: 'CLAT Preparation',            tutor: 'Priya Nair',    topic: 'Mock Test Discussion' },
];

const activity = [
  { icon: 'tabler-notes',   text: 'Arjun Mehta enrolled in Criminal Law Fundamentals',         time: '5 min ago' },
  { icon: 'tabler-check',   text: 'Sunita Kapoor completed Lesson 8: Evidence Act',             time: '22 min ago' },
  { icon: 'tabler-upload',  text: 'Vikram submitted Assignment 3: Bail Application Draft',      time: '1 hr ago' },
  { icon: 'tabler-help',    text: 'Deepa Nair asked a doubt in Constitutional Law — Art. 19',  time: '2 hrs ago' },
  { icon: 'tabler-school',  text: 'Rahul Sharma completed Criminal Law Fundamentals course',   time: '3 hrs ago' },
];

const quickActions = [
  { href: '/admin/courses/create',        icon: 'tabler-book',        label: 'Create New Course' },
  { href: '/admin/students',              icon: 'tabler-user-plus',   label: 'Add Student Manually' },
  { href: '/admin/live-classes/schedule', icon: 'tabler-video',       label: 'Schedule Live Class' },
  { href: '/admin/announcements',         icon: 'tabler-speakerphone',label: 'Send Announcement' },
];

export default function AdminDashboard() {
  return (
    <AdminLayout title="Dashboard" breadcrumb="Home / Dashboard">

      {/* Stat cards */}
      <div className="row g-4 mb-4">
        {stats.map(s => (
          <div key={s.label} className="col-xl-3 col-md-6">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center gap-4">
                <div className={`avatar avatar-lg ${s.bg} rounded`}>
                  <span className="avatar-initial rounded">
                    <i className={`ti ${s.icon} icon-26px`}></i>
                  </span>
                </div>
                <div>
                  <h4 className="mb-0 fw-bold">{s.value}</h4>
                  <small className="text-body-secondary">{s.label}</small>
                  <div className="text-success small mt-1">{s.sub}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="fw-bold mb-1">Student Enrollments</h6>
              <small className="text-body-secondary">Last 6 months</small>
              <div className="mt-3" style={{ height: 140, background: 'linear-gradient(180deg,rgba(115,103,240,.1) 0%,transparent 100%)', borderRadius: 8 }}>
                <svg width="100%" height="100%" viewBox="0 0 300 140" preserveAspectRatio="none">
                  <polyline points="0,120 60,100 120,80 180,70 240,50 300,30" fill="none" stroke="#7367F0" strokeWidth="2.5" />
                  <polyline points="0,120 60,100 120,80 180,70 240,50 300,30 300,140 0,140" fill="rgba(115,103,240,.08)" />
                </svg>
              </div>
              <div className="d-flex justify-content-around mt-2">
                {['Oct','Nov','Dec','Jan','Feb','Mar'].map(m => <small key={m} className="text-body-secondary">{m}</small>)}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="fw-bold mb-1">Revenue by Course</h6>
              <small className="text-body-secondary">Top 5 courses</small>
              <div className="mt-3 d-flex flex-column gap-2">
                {[['Criminal Law Fundamentals',82],['Constitutional Law',68],['CLAT Preparation',55],['Evidence Act Deep Dive',40],['Contract Law Basics',28]].map(([name, pct]) => (
                  <div key={name as string}>
                    <div className="d-flex justify-content-between mb-1">
                      <small>{name as string}</small>
                      <small className="fw-semibold">{pct as number}%</small>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-primary" style={{ width: `${pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule + Activity + Quick Actions */}
      <div className="row g-4">
        <div className="col-xl-8">
          <div className="row g-4">
            {/* Today's Schedule */}
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="fw-bold mb-4">
                    <i className="ti tabler-calendar me-2 text-primary"></i>Today's Schedule
                  </h6>
                  {schedule.map((s, i) => (
                    <div key={i} className={`d-flex align-items-center gap-3 py-3${i < schedule.length - 1 ? ' border-bottom' : ''}`}>
                      <div style={{ width: 64, flexShrink: 0 }}>
                        <small className="fw-bold text-primary">{s.time}</small>
                      </div>
                      <div className="flex-grow-1">
                        <div className="fw-semibold">{s.topic}</div>
                        <small className="text-body-secondary">{s.course} · {s.tutor}</small>
                      </div>
                      <button className="btn btn-sm btn-primary">
                        <i className="ti tabler-video me-1"></i>Join
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Recent Activity */}
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="fw-bold mb-4">
                    <i className="ti tabler-bolt me-2 text-primary"></i>Recent Activity
                  </h6>
                  {activity.map((a, i) => (
                    <div key={i} className={`d-flex gap-3 py-2${i < activity.length - 1 ? ' border-bottom' : ''}`}>
                      <div className="avatar avatar-sm bg-label-primary rounded-circle flex-shrink-0">
                        <span className="avatar-initial rounded-circle">
                          <i className={`ti ${a.icon}`}></i>
                        </span>
                      </div>
                      <div>
                        <div className="small">{a.text}</div>
                        <small className="text-body-secondary">{a.time}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body">
              <h6 className="fw-bold mb-4">
                <i className="ti tabler-bolt me-2 text-primary"></i>Quick Actions
              </h6>
              <div className="d-flex flex-column gap-2">
                {quickActions.map(a => (
                  <a key={a.href} href={a.href} className="btn btn-outline-secondary d-flex align-items-center gap-2 text-start">
                    <i className={`ti ${a.icon}`}></i>
                    {a.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </AdminLayout>
  );
}
