'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

const curriculum = [
  {
    title: 'Module 1: Introduction to Criminal Law',
    lessons: 6,
    duration: '2h 15m',
    completed: 6,
    expanded: true,
    items: [
      { type: 'video', title: 'What is Criminal Law? — Overview', dur: '18:42', done: true },
      { type: 'video', title: 'Sources & Development of IPC', dur: '22:10', done: true },
      { type: 'pdf', title: 'IPC Reference Notes (PDF)', dur: '15 min', done: true },
      { type: 'quiz', title: 'Quick Check — Module 1', dur: '10 min', done: true },
      { type: 'live', title: 'Live Doubt Session', dur: '60 min', done: true },
      { type: 'assignment', title: 'Assignment 1: Draft a Case Brief', dur: '45 min', done: true },
    ],
  },
  {
    title: 'Module 2: General Exceptions (Sec 76–106)',
    lessons: 7,
    duration: '3h 00m',
    completed: 4,
    expanded: true,
    items: [
      { type: 'video', title: 'Mistake of Fact — Section 76 & 79', dur: '28:30', done: true },
      { type: 'video', title: 'Unsoundness of Mind — Section 84', dur: '24:15', done: true },
      { type: 'pdf', title: 'General Exceptions Summary Chart', dur: '10 min', done: true },
      { type: 'video', title: 'Consent & Necessity — Sec 87–92', dur: '20:00', done: true },
      { type: 'video', title: 'Private Defence — Sec 96–106', dur: '32:00', done: false },
      { type: 'quiz', title: 'Module 2 Quiz', dur: '15 min', done: false },
      { type: 'assignment', title: 'Case Analysis Assignment', dur: '60 min', done: false },
    ],
  },
  {
    title: 'Module 3: Offences Against Human Body (Sec 299–377)',
    lessons: 8,
    duration: '3h 45m',
    completed: 0,
    expanded: false,
    items: [
      { type: 'video', title: 'Culpable Homicide vs Murder — Sec 299 & 300', dur: '35:00', done: false },
      { type: 'video', title: 'Grievous Hurt & Assault', dur: '27:20', done: false },
    ],
  },
]

const typeIconMap: Record<string, { icon: string; color: string }> = {
  video: { icon: 'ti tabler-player-play', color: 'primary' },
  pdf: { icon: 'ti tabler-file-text', color: 'danger' },
  quiz: { icon: 'ti tabler-clipboard-check', color: 'warning' },
  live: { icon: 'ti tabler-video', color: 'success' },
  assignment: { icon: 'ti tabler-edit', color: 'info' },
}

export default function CourseHomePage() {
  const totalLessons = curriculum.reduce((a, s) => a + s.lessons, 0)
  const completedLessons = curriculum.reduce((a, s) => a + s.completed, 0)
  const progress = Math.round((completedLessons / totalLessons) * 100)

  return (
    <StudentLayout activePath="/student/learn">
      <div className="mx-auto" style={{ maxWidth: 960 }}>
        {/* Course header */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="d-flex flex-column flex-md-row align-items-md-center gap-3">
              <div className="flex-grow-1">
                <span className="badge bg-label-primary small mb-2">Criminal Law</span>
                <h5 className="fw-bold text-heading mb-1">Criminal Law &amp; Procedure (IPC, CrPC &amp; Evidence Act)</h5>
                <p className="small text-body-secondary mb-0">By Adv. Ravi Shankar · Last accessed today</p>
              </div>
              <a
                href="/student/learn/1/lesson/5"
                className="btn btn-primary d-flex align-items-center gap-2 px-4 flex-shrink-0"
              >
                <i className="ti tabler-player-play"></i>
                Continue Learning
              </a>
            </div>

            {/* Progress */}
            <div className="mt-4 pt-4 border-top">
              <div className="d-flex align-items-center justify-content-between small mb-2">
                <span className="text-heading fw-medium">Overall Progress</span>
                <span className="text-primary fw-bold">{progress}%</span>
              </div>
              <div className="progress rounded-pill" style={{ height: 8 }}>
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <div className="d-flex align-items-center gap-3 mt-2 extra-small text-body-secondary">
                <span>{completedLessons} / {totalLessons} lessons completed</span>
                <span>·</span>
                <span>Est. 5h 30m remaining</span>
                <span>·</span>
                <span className="text-success fw-medium">On track</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="d-inline-flex gap-1 bg-white rounded border shadow-sm p-1 mb-4">
          {['Curriculum', 'Resources', 'Announcements'].map((tab, i) => (
            <button
              key={tab}
              className={`btn btn-sm px-3 py-1 small fw-medium ${
                i === 0
                  ? 'btn-primary shadow-sm'
                  : 'btn-text-secondary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Curriculum tree */}
        <div className="d-flex flex-column gap-3">
          {curriculum.map((section, si) => (
            <div key={si} className="card shadow-sm overflow-hidden">
              {/* Section header */}
              <div className="card-header bg-label-secondary d-flex align-items-center justify-content-between py-3 px-4 cursor-pointer">
                <div className="d-flex align-items-center gap-3">
                  <i className={`ti tabler-chevron-down small text-body-secondary ${!section.expanded ? 'rotate-n90' : ''}`}></i>
                  <div>
                    <p className="fw-bold small text-heading mb-0">{section.title}</p>
                    <div className="d-flex align-items-center gap-3 mt-1">
                      <span className="extra-small text-body-secondary">{section.lessons} lessons · {section.duration}</span>
                      <span className="extra-small text-success fw-medium">{section.completed}/{section.lessons} done</span>
                    </div>
                  </div>
                </div>
                {/* Section progress mini */}
                <div className="d-none d-sm-flex align-items-center gap-2">
                  <div className="progress rounded-pill" style={{ width: 96, height: 4 }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: `${(section.completed / section.lessons) * 100}%` }}
                    ></div>
                  </div>
                  <span className="extra-small text-body-secondary">{Math.round((section.completed / section.lessons) * 100)}%</span>
                </div>
              </div>

              {/* Lessons */}
              {section.expanded && (
                <div className="card-body p-0">
                  {section.items.map((item, ii) => {
                    const iconInfo = typeIconMap[item.type] || typeIconMap.video
                    return (
                      <a
                        key={ii}
                        href={`/student/learn/1/${item.type === 'video' ? 'lesson' : item.type}/${ii + 1}`}
                        className="d-flex align-items-center gap-3 px-4 py-3 border-bottom text-decoration-none"
                      >
                        <div className={`avatar avatar-xs rounded bg-label-${iconInfo.color} d-flex align-items-center justify-content-center flex-shrink-0`}>
                          <i className={`${iconInfo.icon} extra-small`}></i>
                        </div>
                        <span className={`flex-grow-1 small ${item.done ? 'text-body-secondary text-decoration-line-through' : 'text-heading'}`}>
                          {item.title}
                        </span>
                        <span className="extra-small text-body-secondary">{item.dur}</span>
                        {item.done ? (
                          <div className="avatar avatar-xs rounded-circle bg-label-success d-flex align-items-center justify-content-center">
                            <i className="ti tabler-check extra-small text-success"></i>
                          </div>
                        ) : (
                          <div className="rounded-circle border border-2" style={{ width: 20, height: 20 }}></div>
                        )}
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </StudentLayout>
  )
}
