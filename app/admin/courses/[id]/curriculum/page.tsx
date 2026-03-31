'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

const curriculum = [
  { title: 'Module 1: Introduction to Criminal Law', lessons: [
    { type: 'tabler-video',    title: 'Overview of Criminal Law in India',           duration: '18 min',       published: true },
    { type: 'tabler-file',     title: 'IPC Structure and History — PDF Notes',        duration: '12 pages',     published: true },
    { type: 'tabler-notes',    title: 'Quiz: Basics of IPC',                          duration: '10 Qs',        published: true },
  ]},
  { title: 'Module 2: Offences Against the Person', lessons: [
    { type: 'tabler-video',    title: 'Section 299–304: Culpable Homicide & Murder',  duration: '42 min',       published: true },
    { type: 'tabler-video',    title: 'Section 320–326: Grievous Hurt & Assault',     duration: '28 min',       published: true },
    { type: 'tabler-broadcast',title: 'Live Class: Case Study — State v. Ram Chandra',duration: 'Apr 2 @ 10 AM',published: true },
    { type: 'tabler-clipboard',title: 'Assignment: Write a charge sheet for a given scenario', duration: '25 marks', published: false },
  ]},
  { title: 'Module 3: Property Offences', lessons: [
    { type: 'tabler-video',    title: 'Theft, Robbery & Dacoity: Sections 378–402',  duration: '35 min',       published: true },
    { type: 'tabler-video',    title: 'Cheating & Criminal Breach of Trust',          duration: '30 min',       published: false },
    { type: 'tabler-notes',    title: 'Quiz: Property Offences MCQ (20 questions)',   duration: '20 Qs',        published: true },
  ]},
];

export default function CurriculumBuilderPage() {
  return (
    <AdminLayout title="Curriculum Builder" breadcrumb="Home / Courses / Criminal Law Fundamentals / Curriculum">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-2">
          <a href="/admin/courses/1" className="btn btn-outline-secondary btn-sm">
            <i className="ti tabler-arrow-left me-1"></i>Back to Course
          </a>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="ti tabler-eye me-1"></i>Preview as Student
          </button>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            <i className="ti tabler-device-floppy me-1"></i>Save Draft
          </button>
          <button className="btn btn-primary">
            <i className="ti tabler-rocket me-1"></i>Publish Course
          </button>
        </div>
      </div>

      <div className="row g-4">
        {/* Modules */}
        <div className="col-xl-8">
          {curriculum.map((section, si) => (
            <div key={si} className="card mb-3">
              <div className="card-header d-flex align-items-center gap-2 bg-light">
                <i className="ti tabler-grip-vertical text-body-secondary" style={{ cursor: 'grab' }}></i>
                <input className="form-control border-0 bg-transparent fw-bold p-0 flex-grow-1" defaultValue={section.title} />
                <small className="text-body-secondary">{section.lessons.length} lessons</small>
                <button className="btn btn-icon btn-text-secondary btn-sm">
                  <i className="ti tabler-chevron-down"></i>
                </button>
                <button className="btn btn-icon btn-text-danger btn-sm">
                  <i className="ti tabler-trash"></i>
                </button>
              </div>
              <div className="card-body p-0">
                {section.lessons.map((lesson, li) => (
                  <div key={li} className="d-flex align-items-center gap-2 px-4 py-3 border-bottom">
                    <i className="ti tabler-grip-vertical text-body-secondary" style={{ cursor: 'grab', fontSize: 12 }}></i>
                    <i className={`ti ${lesson.type} text-body-secondary`}></i>
                    <input className="form-control border-0 p-0 flex-grow-1 small" defaultValue={lesson.title} />
                    <small className="text-body-secondary text-nowrap">{lesson.duration}</small>
                    <div className="form-check form-switch mb-0">
                      <input className="form-check-input" type="checkbox" defaultChecked={lesson.published} />
                    </div>
                    <button className="btn btn-icon btn-text-danger btn-sm">
                      <i className="ti tabler-trash"></i>
                    </button>
                  </div>
                ))}
                <div className="px-4 py-2">
                  <div className="dropdown">
                    <button className="btn btn-sm btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown">
                      <i className="ti tabler-plus me-1"></i>Add Lesson
                    </button>
                    <ul className="dropdown-menu">
                      {[['tabler-video','Video Lesson'],['tabler-file','PDF Notes'],['tabler-broadcast','Live Class'],['tabler-notes','Quiz'],['tabler-clipboard','Assignment']].map(([icon, label]) => (
                        <li key={label as string}>
                          <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                            <i className={`ti ${icon as string}`}></i>{label as string}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="btn btn-outline-secondary w-100 border-dashed">
            <i className="ti tabler-plus me-1"></i>Add New Section / Module
          </button>
        </div>

        {/* Sidebar */}
        <div className="col-xl-4">
          <div className="card mb-4">
            <div className="card-body">
              <h6 className="fw-bold mb-3">
                <i className="ti tabler-chart-bar me-2 text-primary"></i>Course Summary
              </h6>
              {[['Modules','3'],['Total Lessons','10'],['Video Lessons','6'],['Quizzes','2'],['Assignments','1'],['Live Classes','1'],['Published','8 / 10']].map(([k, v]) => (
                <div key={k as string} className="d-flex justify-content-between py-2 border-bottom small">
                  <span className="text-body-secondary">{k as string}</span>
                  <span className="fw-semibold">{v as string}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h6 className="fw-bold mb-3">
                <i className="ti tabler-bulb me-2 text-primary"></i>Tips
              </h6>
              <ul className="small text-body-secondary ps-3 mb-0" style={{ lineHeight: 2 }}>
                <li>Drag lessons to reorder</li>
                <li>Toggle to publish/unpublish</li>
                <li>Add a quiz after each module</li>
                <li>First lesson should be free preview</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
