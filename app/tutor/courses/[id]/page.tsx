'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

const curriculum = [
  { title: 'Module 1: Introduction to Criminal Law', lessons: [
    { type: 'tabler-video', title: 'Overview of Criminal Law in India', duration: '18 min', published: true },
    { type: 'tabler-file-text', title: 'IPC Structure and History — PDF Notes', duration: '12 pages', published: true },
    { type: 'tabler-file-analytics', title: 'Quiz: Basics of IPC', duration: '10 Qs', published: true },
  ]},
  { title: 'Module 2: Offences Against the Person', lessons: [
    { type: 'tabler-video', title: 'Section 299–304: Culpable Homicide & Murder', duration: '42 min', published: true },
    { type: 'tabler-video', title: 'Section 320–326: Grievous Hurt & Assault', duration: '28 min', published: true },
    { type: 'tabler-broadcast', title: 'Live Class: State v. Ram Chandra Case Study', duration: 'Apr 1 @ 10 AM', published: true },
    { type: 'tabler-file-report', title: 'Assignment: Write a Charge Sheet', duration: '25 marks', published: false },
  ]},
  { title: 'Module 3: Property Offences', lessons: [
    { type: 'tabler-video', title: 'Theft, Robbery & Dacoity: Sections 378–402', duration: '35 min', published: true },
    { type: 'tabler-video', title: 'Cheating & Criminal Breach of Trust', duration: '30 min', published: false },
    { type: 'tabler-file-analytics', title: 'Quiz: Property Offences (20 questions)', duration: '20 Qs', published: true },
  ]},
];

export default function TutorCourseView() {
  return (
    <TutorLayout active="/tutor/courses/1" title="Criminal Law Fundamentals" breadcrumb="Home / My Courses / Criminal Law Fundamentals">
      {/* Course header stats */}
      <div className="row g-4 mb-4">
        {[
          { icon: 'tabler-users', bg: 'bg-label-primary', val: '342', label: 'Students Enrolled' },
          { icon: 'tabler-circle-check', bg: 'bg-label-success', val: '68%', label: 'Completion Rate' },
          { icon: 'tabler-book', bg: 'bg-label-info', val: '10', label: 'Total Lessons' },
          { icon: 'tabler-video', bg: 'bg-label-warning', val: '2', label: 'Upcoming Classes' },
        ].map((s) => (
          <div key={s.label} className="col-xl-3 col-md-6">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center gap-3">
                <div className={`avatar avatar-lg ${s.bg} rounded`}>
                  <span className="avatar-initial rounded"><i className={`ti ${s.icon} fs-2`}></i></span>
                </div>
                <div>
                  <h4 className="mb-0 fw-bold">{s.val}</h4>
                  <small className="text-body-secondary">{s.label}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <h5 className="mb-0 fw-bold">
          <i className="ti tabler-list-details me-2 text-primary"></i>Course Curriculum
        </h5>
        <div className="d-flex gap-2">
          <a href="/tutor/content/upload-video" className="btn btn-outline-secondary">
            <i className="ti tabler-video-plus me-1"></i>Upload Video
          </a>
          <button className="btn btn-primary">
            <i className="ti tabler-plus me-1"></i>Add Section
          </button>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {curriculum.map((section, si) => (
          <div key={si} className="card">
            {/* Section header */}
            <div className="card-header bg-light d-flex align-items-center justify-content-between py-3 px-4">
              <div className="d-flex align-items-center gap-2">
                <i className="ti tabler-grid-dots text-body-secondary cursor-move"></i>
                <h6 className="mb-0 fw-bold">{section.title}</h6>
                <span className="badge bg-label-secondary ms-2 small">{section.lessons.length} Lessons</span>
              </div>
              <div className="d-flex gap-1">
                <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill"><i className="ti tabler-chevron-down"></i></button>
                <button className="btn btn-sm btn-icon btn-text-danger rounded-pill"><i className="ti tabler-trash"></i></button>
              </div>
            </div>
            {/* Lessons */}
            <div className="card-body p-0">
              {section.lessons.map((lesson, li) => (
                <div key={li} className={`d-flex align-items-center gap-3 py-3 px-4 ${li < section.lessons.length - 1 ? 'border-bottom' : ''} hover-bg-light transition-all`}>
                  <i className="ti tabler-grid-dots text-body-secondary small cursor-move"></i>
                  <div className={`avatar avatar-sm bg-label-secondary rounded`}>
                    <span className="avatar-initial rounded"><i className={`ti ${lesson.type} fs-5`}></i></span>
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold text-heading small">{lesson.title}</div>
                    <small className="text-body-secondary mt-1 d-block">{lesson.duration}</small>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="form-check form-switch mb-0">
                      <input className="form-check-input" type="checkbox" defaultChecked={lesson.published} />
                    </div>
                    <span className={`badge ${lesson.published ? 'bg-label-success' : 'bg-label-secondary'} small text-uppercase`}>
                      {lesson.published ? 'Published' : 'Draft'}
                    </span>
                    <div className="dropdown">
                      <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="ti tabler-dots-vertical"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="javascript:void(0);"><i className="ti tabler-edit me-2"></i>Edit Lesson</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-danger" href="javascript:void(0);"><i className="ti tabler-trash me-2"></i>Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Add Lesson */}
            <div className="card-footer bg-light py-2 px-4 border-top">
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
