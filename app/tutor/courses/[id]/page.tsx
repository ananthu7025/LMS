'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

const curriculum = [
  { title: 'Module 1: Introduction to Criminal Law', lessons: [
    { type: 'tabler-video',          title: 'Overview of Criminal Law in India',         duration: '18 min',         published: true  },
    { type: 'tabler-file-text',      title: 'IPC Structure and History — PDF Notes',     duration: '12 pages',       published: true  },
    { type: 'tabler-file-analytics', title: 'Quiz: Basics of IPC',                       duration: '10 Qs',          published: true  },
  ]},
  { title: 'Module 2: Offences Against the Person', lessons: [
    { type: 'tabler-video',          title: 'Section 299–304: Culpable Homicide & Murder', duration: '42 min',       published: true  },
    { type: 'tabler-video',          title: 'Section 320–326: Grievous Hurt & Assault',    duration: '28 min',       published: true  },
    { type: 'tabler-broadcast',      title: 'Live Class: State v. Ram Chandra Case Study', duration: 'Apr 1 @ 10 AM',published: true  },
    { type: 'tabler-file-report',    title: 'Assignment: Write a Charge Sheet',            duration: '25 marks',     published: false },
  ]},
  { title: 'Module 3: Property Offences', lessons: [
    { type: 'tabler-video',          title: 'Theft, Robbery & Dacoity: Sections 378–402', duration: '35 min',       published: true  },
    { type: 'tabler-video',          title: 'Cheating & Criminal Breach of Trust',         duration: '30 min',       published: false },
    { type: 'tabler-file-analytics', title: 'Quiz: Property Offences (20 questions)',      duration: '20 Qs',        published: true  },
  ]},
];

const lessonTypeColor: Record<string, string> = {
  'tabler-video':          'primary',
  'tabler-file-text':      'info',
  'tabler-file-analytics': 'warning',
  'tabler-broadcast':      'success',
  'tabler-file-report':    'danger',
};

export default function TutorCourseView() {
  return (
    <TutorLayout active="/tutor/courses/1" title="Criminal Law Fundamentals" breadcrumb="Home / My Courses / Criminal Law Fundamentals">

      {/* ── Course Hero ───────────────────────────────────────────── */}
      <div className="card p-0 mb-6">
        <div
          className="card-body p-6"
          style={{ background: 'linear-gradient(135deg, #7367F0 0%, #9E95F5 100%)', borderRadius: 12, position: 'relative', overflow: 'hidden' }}
        >
          <div className="row align-items-center">
            <div className="col-md-8 text-white">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="badge rounded-pill px-3 py-2" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                  <i className="ti tabler-gavel me-1"></i>Criminal Law
                </span>
                <span className="badge rounded-pill px-3 py-2 bg-label-success">Published</span>
              </div>
              <h4 className="text-white mb-2">Criminal Law Fundamentals</h4>
              <p style={{ opacity: 0.82, color: '#fff' }} className="mb-4">
                Comprehensive study of IPC, criminal procedure, and landmark judgements for law students.
              </p>
              <div className="d-flex flex-wrap gap-4">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti tabler-users" style={{ color: '#fff', opacity: 0.8 }}></i>
                  <small style={{ color: '#fff', opacity: 0.85 }}>342 students</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="ti tabler-clock" style={{ color: '#fff', opacity: 0.8 }}></i>
                  <small style={{ color: '#fff', opacity: 0.85 }}>24 hours · 10 lessons</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="ti tabler-star-filled" style={{ color: '#FFD700', opacity: 0.9 }}></i>
                  <small style={{ color: '#fff', opacity: 0.85 }}>4.8 (124 reviews)</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-flex justify-content-end">
              <div style={{
                width: 120, height: 120, borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i className="ti tabler-book" style={{ fontSize: 56, color: '#fff' }}></i>
              </div>
            </div>
          </div>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', bottom: -50, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ position: 'absolute', bottom: -10, right: 100, width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,0.09)' }} />
        </div>
      </div>

      {/* ── Stat Cards ────────────────────────────────────────────── */}
      <div className="row g-4 mb-6">
        {[
          { icon: 'tabler-users',        bg: 'bg-label-primary', val: '342',  label: 'Students Enrolled', sub: '+18 this month' },
          { icon: 'tabler-circle-check', bg: 'bg-label-success', val: '68%',  label: 'Avg. Completion',   sub: '↑ 4% vs last month' },
          { icon: 'tabler-layout-list',  bg: 'bg-label-info',    val: '10',   label: 'Total Lessons',     sub: '3 modules' },
          { icon: 'tabler-video',        bg: 'bg-label-warning', val: '2',    label: 'Upcoming Classes',  sub: 'Next: Apr 1 @ 10 AM' },
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

      {/* ── Curriculum Header ─────────────────────────────────────── */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div>
          <h5 className="mb-0 fw-bold">Course Curriculum</h5>
          <p className="mb-0 text-body-secondary small">
            {curriculum.length} modules · {curriculum.reduce((acc, m) => acc + m.lessons.length, 0)} lessons total
          </p>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <a href="/tutor/content/upload-video" className="btn btn-outline-secondary">
            <i className="ti tabler-video-plus me-1"></i>Upload Video
          </a>
          <a href="/tutor/content/upload-pdf" className="btn btn-outline-secondary">
            <i className="ti tabler-file-plus me-1"></i>Upload PDF
          </a>
          <a href="/tutor/content/create-quiz" className="btn btn-outline-secondary">
            <i className="ti tabler-list-check me-1"></i>Add Quiz
          </a>
          <button className="btn btn-primary">
            <i className="ti tabler-plus me-1"></i>Add Section
          </button>
        </div>
      </div>

      {/* ── Curriculum Modules ────────────────────────────────────── */}
      <div className="d-flex flex-column gap-4">
        {curriculum.map((section, si) => (
          <div key={si} className="card shadow-none border">
            {/* Section header */}
            <div
              className="card-header d-flex align-items-center justify-content-between py-3 px-4"
              style={{ background: 'linear-gradient(135deg, #7367F010, #9E95F520)' }}
            >
              <div className="d-flex align-items-center gap-3">
                <i className="ti tabler-grid-dots text-body-secondary" style={{ cursor: 'move' }}></i>
                <div className={`badge rounded bg-label-primary p-1_5`}>
                  <i className="icon-base ti tabler-layout-list icon-md"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">{section.title}</h6>
                  <small className="text-body-secondary">{section.lessons.length} lessons</small>
                </div>
              </div>
              <div className="d-flex gap-1">
                <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill">
                  <i className="ti tabler-chevron-down"></i>
                </button>
                <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill">
                  <i className="ti tabler-edit"></i>
                </button>
                <button className="btn btn-sm btn-icon btn-text-danger rounded-pill">
                  <i className="ti tabler-trash"></i>
                </button>
              </div>
            </div>

            {/* Lessons */}
            <div className="card-body p-0">
              {section.lessons.map((lesson, li) => {
                const lColor = lessonTypeColor[lesson.type] ?? 'secondary';
                return (
                  <div
                    key={li}
                    className={`d-flex align-items-center gap-3 py-3 px-4${li < section.lessons.length - 1 ? ' border-bottom' : ''}`}
                  >
                    <i className="ti tabler-grid-dots text-body-secondary small" style={{ cursor: 'move' }}></i>
                    <div className={`avatar avatar-sm bg-label-${lColor} rounded`}>
                      <span className="avatar-initial rounded">
                        <i className={`ti ${lesson.type}`} style={{ fontSize: 16 }}></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-semibold small text-heading">{lesson.title}</div>
                      <small className="text-body-secondary">{lesson.duration}</small>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="form-check form-switch mb-0">
                        <input className="form-check-input" type="checkbox" defaultChecked={lesson.published} />
                      </div>
                      <span className={`badge bg-label-${lesson.published ? 'success' : 'secondary'} small text-uppercase`}>
                        {lesson.published ? 'Published' : 'Draft'}
                      </span>
                      <div className="dropdown">
                        <button
                          className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti tabler-dots-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">
                            <i className="ti tabler-edit me-2"></i>Edit Lesson
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ti tabler-eye me-2"></i>Preview
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item text-danger" href="#">
                            <i className="ti tabler-trash me-2"></i>Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Add Lesson footer */}
            <div className="card-footer py-2 px-4 border-top" style={{ background: 'rgba(115,103,240,0.04)' }}>
              <button className="btn btn-sm btn-label-primary">
                <i className="ti tabler-plus me-1"></i>Add Lesson
              </button>
            </div>
          </div>
        ))}
      </div>

    </TutorLayout>
  );
}
