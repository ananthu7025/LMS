'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

const curriculumSections = [
  {
    title: 'Module 1: Introduction to Criminal Law',
    lessons: 6,
    duration: '2h 15m',
    items: [
      { type: 'video', title: 'What is Criminal Law? — Overview', dur: '18:42', done: true },
      { type: 'video', title: 'Sources & Development of IPC', dur: '22:10', done: true },
      { type: 'pdf', title: 'IPC Reference Notes (PDF)', dur: '15 min read', done: false },
      { type: 'quiz', title: 'Quick Check — Module 1', dur: '10 min', done: false },
      { type: 'live', title: 'Live Doubt Session', dur: '60 min', done: false },
      { type: 'assignment', title: 'Assignment 1: Draft a Case Brief', dur: '45 min', done: false },
    ],
  },
  {
    title: 'Module 2: General Exceptions (Sec 76–106)',
    lessons: 7,
    duration: '3h 00m',
    items: [
      { type: 'video', title: 'Mistake of Fact — Section 76 & 79', dur: '28:30', done: false },
      { type: 'video', title: 'Unsoundness of Mind — Section 84', dur: '24:15', done: false },
      { type: 'pdf', title: 'General Exceptions Summary Chart', dur: '10 min read', done: false },
    ],
  },
  {
    title: 'Module 3: Offences Against Human Body (Sec 299–377)',
    lessons: 8,
    duration: '3h 45m',
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

export default function CourseLandingPage() {
  return (
    <StudentLayout activePath="/student/courses">
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        {/* Hero */}
        <div className="row g-4 mb-4">
          {/* Left — course info */}
          <div className="col-lg-8">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-3">
              <ol className="breadcrumb extra-small">
                <li className="breadcrumb-item"><a href="/student/courses">Course Catalog</a></li>
                <li className="breadcrumb-item active">Criminal Law</li>
              </ol>
            </nav>

            <span className="badge bg-label-primary small mb-3">Criminal Law</span>
            <h4 className="fw-bold text-heading lh-sm mb-2">
              Criminal Law &amp; Procedure<br />
              <span className="text-primary">(IPC, CrPC &amp; Evidence Act)</span>
            </h4>
            <p className="text-body-secondary mb-4">
              A comprehensive course covering the Indian Penal Code, Code of Criminal Procedure, and Evidence Act — designed for Judicial Services aspirants, law graduates, and legal professionals seeking mastery of criminal law.
            </p>

            {/* Rating */}
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="d-flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <i key={s} className="ti tabler-star-filled fs-6 text-warning"></i>
                ))}
              </div>
              <span className="fw-bold text-heading">4.8</span>
              <span className="text-body-secondary small">(234 ratings) · 1,847 students enrolled</span>
            </div>

            {/* Tutor + last updated */}
            <div className="d-flex flex-wrap align-items-center gap-2 small text-body-secondary">
              <span>Created by <a href="#" className="text-primary fw-medium text-decoration-none">Adv. Ravi Shankar</a></span>
              <span>·</span>
              <span>Last updated: March 2025</span>
              <span>·</span>
              <span>Hindi + English</span>
            </div>

            {/* Stats bar */}
            <div className="d-flex flex-wrap gap-3 mt-4 pt-4 border-top">
              {[
                { label: '24 Lessons', icon: 'ti tabler-book-2' },
                { label: '12.5 Hours', icon: 'ti tabler-clock' },
                { label: '1,847 Enrolled', icon: 'ti tabler-users' },
                { label: 'Lifetime Access', icon: 'ti tabler-infinity' },
                { label: 'Certificate', icon: 'ti tabler-certificate' },
              ].map(s => (
                <div key={s.label} className="d-flex align-items-center gap-2 small text-heading">
                  <i className={`${s.icon} text-primary`}></i>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — sticky sidebar */}
          <div className="col-lg-4">
            <div className="card shadow-sm overflow-hidden position-sticky" style={{ top: 80 }}>
              {/* Thumbnail */}
              <div className="bg-primary d-flex align-items-center justify-content-center position-relative" style={{ height: 176 }}>
                <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 64, height: 64, background: 'rgba(255,255,255,0.2)' }}>
                  <i className="ti tabler-player-play text-white fs-2"></i>
                </div>
                <span className="position-absolute bottom-0 end-0 m-2 badge bg-dark bg-opacity-75 text-white small">Preview</span>
              </div>

              <div className="card-body p-4">
                <div className="d-flex align-items-end gap-3 mb-1">
                  <span className="fs-3 fw-bold text-heading">₹5,999</span>
                  <span className="fs-6 text-body-secondary text-decoration-line-through mb-1">₹9,999</span>
                  <span className="small fw-bold text-success mb-1">40% off</span>
                </div>
                <p className="extra-small text-danger fw-medium mb-4">
                  <i className="ti tabler-clock-hour-3 me-1"></i>2 days left at this price!
                </p>

                {/* Coupon */}
                <div className="input-group mb-3">
                  <input type="text" placeholder="Coupon code" className="form-control shadow-none small" />
                  <button className="btn btn-outline-primary small fw-bold">Apply</button>
                </div>

                <a href="/student/checkout" className="btn btn-primary w-100 py-3 fw-bold mb-2">
                  Enroll Now
                </a>
                <button className="btn btn-outline-primary w-100 small">
                  Try Free Preview
                </button>
                <p className="text-center extra-small text-body-secondary mt-3 mb-0">30-day money-back guarantee</p>

                {/* What's included */}
                <div className="mt-4 pt-4 border-top">
                  <p className="extra-small fw-bold text-heading mb-2">What&apos;s included</p>
                  {[
                    '24 video lessons (12.5 hrs)',
                    '6 downloadable PDFs',
                    '3 live Q&A sessions',
                    '4 quizzes + 2 assignments',
                    'AI Tutor access',
                    'Certificate of completion',
                    'Lifetime access',
                  ].map(item => (
                    <div key={item} className="d-flex align-items-center gap-2 extra-small text-heading mb-1">
                      <i className="ti tabler-check text-success"></i>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What you'll learn */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h6 className="fw-bold text-heading mb-3">What You&apos;ll Learn</h6>
            <div className="row g-2">
              {[
                'Understand the structure and scope of the Indian Penal Code (IPC)',
                'Apply general exceptions and defences in criminal matters',
                'Analyze offences against the human body — culpable homicide vs murder',
                'Navigate the Code of Criminal Procedure — bail, trial, sentencing',
                'Evaluate evidentiary rules under the Indian Evidence Act',
                'Draft criminal pleadings, bail applications, and case briefs',
              ].map(point => (
                <div key={point} className="col-sm-6">
                  <div className="d-flex align-items-start gap-2 small text-heading">
                    <i className="ti tabler-check text-success mt-1 flex-shrink-0"></i>
                    {point}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-bold text-heading mb-0">Course Curriculum</h6>
              <span className="small text-body-secondary">3 sections • 21 lessons • 8h 00m</span>
            </div>

            <div className="d-flex flex-column gap-3">
              {curriculumSections.map((section, si) => (
                <div key={si} className="border rounded overflow-hidden">
                  <div className="d-flex align-items-center justify-content-between px-4 py-3 bg-label-secondary cursor-pointer">
                    <div className="d-flex align-items-center gap-2">
                      <i className="ti tabler-chevron-down small text-body-secondary"></i>
                      <span className="fw-bold small text-heading">{section.title}</span>
                    </div>
                    <span className="extra-small text-body-secondary">{section.lessons} lessons · {section.duration}</span>
                  </div>
                  {si === 0 && (
                    <div>
                      {section.items.map((item, ii) => {
                        const iconInfo = typeIconMap[item.type] || typeIconMap.video
                        return (
                          <div key={ii} className="d-flex align-items-center gap-3 px-4 py-2 border-bottom">
                            <div className={`avatar avatar-xs rounded bg-label-${iconInfo.color} d-flex align-items-center justify-content-center flex-shrink-0`}>
                              <i className={`${iconInfo.icon} extra-small`}></i>
                            </div>
                            <span className="flex-grow-1 small text-heading">{item.title}</span>
                            <span className="extra-small text-body-secondary">{item.dur}</span>
                            {item.done ? (
                              <i className="ti tabler-check text-success small"></i>
                            ) : (
                              <i className="ti tabler-lock text-body-tertiary small"></i>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tutor */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h6 className="fw-bold text-heading mb-3">Your Instructor</h6>
            <div className="d-flex align-items-start gap-3">
              <div className="avatar avatar-lg flex-shrink-0">
                <span className="avatar-initial rounded-circle bg-primary fw-bold">R</span>
              </div>
              <div className="flex-grow-1">
                <h6 className="fw-bold text-heading mb-0">Adv. Ravi Shankar</h6>
                <p className="small text-body-secondary mb-2">Senior Criminal Advocate, Delhi High Court | 18+ Years</p>
                <div className="d-flex gap-3 extra-small text-body-secondary mb-3">
                  <span><i className="ti tabler-star-filled text-warning me-1"></i>4.9 rating</span>
                  <span><i className="ti tabler-users me-1"></i>3,200+ students</span>
                  <span><i className="ti tabler-book-2 me-1"></i>4 courses</span>
                </div>
                <p className="small text-heading lh-base mb-0">
                  Adv. Ravi Shankar has been practicing criminal law at the Delhi High Court for over 18 years, handling landmark cases in criminal appellate jurisdiction. He specializes in making complex IPC provisions accessible through real case studies and practical examples, having mentored 200+ judicial services aspirants who have cleared state PSC exams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h6 className="fw-bold text-heading mb-4">Student Reviews</h6>
            <div className="d-flex flex-column flex-md-row gap-4 mb-4">
              {/* Overall */}
              <div className="text-center">
                <p className="display-5 fw-bold text-heading mb-0">4.8</p>
                <div className="d-flex gap-1 justify-content-center mt-1">
                  {[1,2,3,4,5].map(s => (
                    <i key={s} className="ti tabler-star-filled small text-warning"></i>
                  ))}
                </div>
                <p className="extra-small text-body-secondary mt-1 mb-0">Course Rating</p>
              </div>

              {/* Bar chart */}
              <div className="flex-grow-1">
                {[
                  { stars: 5, pct: 72 },
                  { stars: 4, pct: 18 },
                  { stars: 3, pct: 7 },
                  { stars: 2, pct: 2 },
                  { stars: 1, pct: 1 },
                ].map(r => (
                  <div key={r.stars} className="d-flex align-items-center gap-2 extra-small mb-1">
                    <div className="d-flex gap-1">
                      {[1,2,3,4,5].map(s => (
                        <i key={s} className={`ti tabler-star-filled ${s <= r.stars ? 'text-warning' : 'text-body-tertiary opacity-25'}`} style={{ fontSize: 10 }}></i>
                      ))}
                    </div>
                    <div className="progress rounded-pill flex-grow-1" style={{ height: 6 }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${r.pct}%` }}></div>
                    </div>
                    <span className="text-body-secondary" style={{ width: 32, textAlign: 'right' }}>{r.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review cards */}
            <div className="row g-3">
              {[
                { name: 'Priya K.', initials: 'P', rating: 5, date: 'Feb 2025', text: 'Excellent course! Adv. Shankar explains each section with real case examples. The IPC module on culpable homicide vs murder was incredibly clear. Highly recommend for Judiciary prep.' },
                { name: 'Rahul M.', initials: 'R', rating: 5, date: 'Jan 2025', text: 'Cleared UP Judiciary mains with flying colors. The live sessions were very interactive. Notes PDFs are concise and cover the syllabus perfectly. Worth every rupee.' },
                { name: 'Anjali S.', initials: 'A', rating: 4, date: 'Mar 2025', text: 'Very good content and structured well. Would love more practice questions per module. The AI tutor integration is a great bonus feature for self-study.' },
              ].map(r => (
                <div key={r.name} className="col-md-4">
                  <div className="border rounded p-3 h-100">
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="avatar avatar-sm flex-shrink-0">
                        <span className="avatar-initial rounded-circle bg-primary">{r.initials}</span>
                      </div>
                      <div>
                        <p className="small fw-bold text-heading mb-0">{r.name}</p>
                        <p className="extra-small text-body-secondary mb-0">{r.date}</p>
                      </div>
                      <div className="ms-auto d-flex gap-1">
                        {[1,2,3,4,5].map(s => (
                          <i key={s} className={`ti tabler-star-filled ${s <= r.rating ? 'text-warning' : 'text-body-tertiary opacity-25'}`} style={{ fontSize: 10 }}></i>
                        ))}
                      </div>
                    </div>
                    <p className="small text-heading lh-base mb-0">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
