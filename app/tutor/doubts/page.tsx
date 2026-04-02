'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const doubts = [
  {
    student: 'Arjun Mehta', initials: 'AM', color: 'danger',
    course: 'Criminal Law', lesson: 'Section 300 IPC',
    question: 'What is the key distinction between culpable homicide under Section 299 and murder under Section 300? The elements seem overlapping to me.',
    detail: "I've read both sections multiple times but the \"intention\" vs \"knowledge\" element still confuses me. Is there a case law that explains the practical difference clearly?",
    time: '2 hrs ago', status: 'Unanswered',
  },
  {
    student: 'Sunita Kapoor', initials: 'SK', color: 'success',
    course: 'Criminal Law', lesson: 'Evidence Act — Sec 45',
    question: 'Can an expert witness opinion be given by someone who is not officially qualified but has practical experience? What does Section 45 say?',
    detail: 'For example, can a retired police officer testify as an expert on ballistics without a formal forensic science degree?',
    time: '4 hrs ago', status: 'Unanswered',
  },
  {
    student: 'Deepa Nair', initials: 'DN', color: 'info',
    course: 'Criminal Law', lesson: 'Bail Applications',
    question: 'Is there a difference between regular bail and anticipatory bail? Which court has jurisdiction for anticipatory bail?',
    detail: "I'm preparing my bail application draft and I want to make sure I'm filing it in the right court. Does it depend on the severity of the offence?",
    time: '6 hrs ago', status: 'Unanswered',
  },
  {
    student: 'Vikram Joshi', initials: 'VJ', color: 'warning',
    course: 'Criminal Law', lesson: 'Section 420 IPC',
    question: 'How does cheating under Section 420 differ from criminal breach of trust under Section 405?',
    detail: 'Both seem to involve dishonest intent. Is the difference about who holds the property originally?',
    time: '1 day ago', status: 'Answered',
  },
  {
    student: 'Pooja Verma', initials: 'PV', color: 'primary',
    course: 'Criminal Law', lesson: 'FIR & Police Powers',
    question: 'What are the legal consequences of a false FIR? Can the complainant be held liable?',
    detail: 'Specifically asking about Section 182 IPC and whether civil liability can also arise alongside criminal liability.',
    time: '2 days ago', status: 'Answered',
  },
];

export default function DoubtsPage() {
  const [expanded, setExpanded] = useState(0);

  return (
    <TutorLayout active="/tutor/doubts" title="Student Doubts" breadcrumb="Home / Student Doubts">

      {/* Stats */}
      <div className="row g-6 mb-6">
        {[
          { icon: 'tabler-help-circle',  label: 'Pending Doubts',     value: '3',       change: 'Action',   pos: false, sub: 'Needs reply',   color: 'bg-label-warning', iconColor: '#FF9F43' },
          { icon: 'tabler-circle-check', label: 'Answered This Week', value: '48',      change: '+12%',     pos: true,  sub: 'Response rate', color: 'bg-label-success', iconColor: '#28C76F' },
          { icon: 'tabler-clock',        label: 'Avg Response Time',  value: '2.4 hrs', change: '-0.3 hrs', pos: true,  sub: 'This week',     color: 'bg-label-info',    iconColor: '#00CFE8' },
          { icon: 'tabler-messages',     label: 'Total This Month',   value: '124',     change: '+18',      pos: true,  sub: 'All time',      color: 'bg-label-primary', iconColor: '#7367F0' },
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

      {/* Filters */}
      <div className="row g-3 mb-4 align-items-center">
        <div className="col-md-3">
          <select className="form-select">
            <option>All Courses</option>
            <option>Criminal Law</option>
            <option>Constitutional Law</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>All Lessons</option>
            <option>Section 300 IPC</option>
            <option>Bail Applications</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>All Status</option>
            <option>Unanswered</option>
            <option>Answered</option>
          </select>
        </div>
        <div className="col-md-4">
          <div className="input-group input-group-merge">
            <span className="input-group-text"><i className="ti tabler-search"></i></span>
            <input className="form-control" placeholder="Search doubts..." />
          </div>
        </div>
      </div>

      {/* Doubt cards */}
      <div className="d-flex flex-column gap-3">
        {doubts.map((d, i) => (
          <div key={i} className={`card ${expanded === i ? 'border-primary shadow-sm' : ''}`}>

            {/* Doubt header row */}
            <div
              className="card-body cursor-pointer py-4"
              onClick={() => setExpanded(i === expanded ? -1 : i)}
            >
              <div className="d-flex gap-3 align-items-center">
                <div className="avatar avatar-md flex-shrink-0">
                  <span className={`avatar-initial rounded-circle fw-bold bg-label-${d.color}`}>{d.initials}</span>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center flex-wrap gap-2 mb-1">
                    <h6 className="mb-0 fw-bold">{d.student}</h6>
                    <span className={`badge bg-label-${d.status === 'Unanswered' ? 'warning' : 'success'} small`}>
                      {d.status}
                    </span>
                  </div>
                  <p className="text-heading small mb-1 fw-semibold lh-base">{d.question}</p>
                  <small className="text-body-secondary">
                    <i className="ti tabler-book me-1 small"></i>{d.course} · {d.lesson}
                    <span className="mx-2">·</span>
                    <i className="ti tabler-calendar-event me-1 small"></i>{d.time}
                  </small>
                </div>
                <i className={`ti tabler-chevron-${expanded === i ? 'up' : 'down'} text-primary flex-shrink-0`}></i>
              </div>
            </div>

            {/* Expanded panel */}
            {expanded === i && (
              <div className="border-top p-4" style={{ background: '#fff', borderTop: '3px solid #7367F0' }}>
                <div className="row g-4 text-wrap">

                  {/* Left — full question */}
                  <div className="col-lg-5">
                    {/* Section label */}
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="badge bg-label-primary rounded p-1_5">
                        <i className="ti tabler-help-circle icon-md"></i>
                      </div>
                      <span className="fw-bold small text-uppercase text-body-secondary">Student's Question</span>
                    </div>

                    {/* Student identity row */}
                    <div className="d-flex align-items-center gap-3 mb-3 bg-white rounded p-3 shadow-sm">
                      <div className="avatar avatar-md flex-shrink-0">
                        <span className={`avatar-initial rounded-circle fw-bold bg-label-${d.color}`}>{d.initials}</span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-0 fw-bold">{d.student}</h6>
                        <small className="text-body-secondary">
                          <i className="ti tabler-book me-1"></i>{d.course}
                        </small>
                      </div>
                      <span className={`badge bg-label-${d.status === 'Unanswered' ? 'warning' : 'success'}`}>
                        {d.status}
                      </span>
                    </div>

                    {/* Question block */}
                    <div className="rounded p-3 mb-3 small lh-base shadow-sm" style={{ background: '#fff', borderLeft: '4px solid #7367F0' }}>
                      <i className="ti tabler-quote fs-3 text-primary d-block mb-2" style={{ opacity: 0.4 }}></i>
                      <p className="mb-2 fw-semibold text-heading">{d.question}</p>
                      <p className="mb-0" style={{ color: '#6e7b8d' }}>{d.detail}</p>
                    </div>

                    {/* Meta chips */}
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-label-info rounded-pill">
                        <i className="ti tabler-book-2 me-1"></i>{d.lesson}
                      </span>
                      <span className="badge bg-label-warning rounded-pill">
                        <i className="ti tabler-clock me-1"></i>{d.time}
                      </span>
                    </div>
                  </div>

                  {/* Right — reply */}
                  <div className="col-lg-7">
                    {/* Section label */}
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="badge bg-label-success rounded p-1_5">
                        <i className="ti tabler-message-2 icon-md"></i>
                      </div>
                      <span className="fw-bold small text-uppercase text-body-secondary">Your Reply</span>
                    </div>

                    <div className="rounded overflow-hidden mb-3 shadow-sm" style={{ border: '1px solid #e0deff' }}>
                      <div className="d-flex gap-1 p-2 border-bottom" style={{ background: '#f8f8fb' }}>
                        {['tabler-bold', 'tabler-italic', 'tabler-underline', 'tabler-link', 'tabler-photo'].map(icon => (
                          <button key={icon} className="btn btn-sm btn-icon btn-text-secondary rounded">
                            <i className={`ti ${icon} fs-5`}></i>
                          </button>
                        ))}
                      </div>
                      <textarea
                        className="form-control border-0 rounded-0 p-3 small bg-white"
                        rows={6}
                        placeholder="Type your answer here... You can reference specific IPC sections or case laws."
                      />
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-primary flex-grow-1 d-flex align-items-center justify-content-center gap-2">
                        <i className="ti tabler-send fs-5"></i>Submit Reply
                      </button>
                      <button className="btn btn-label-success d-flex align-items-center gap-2">
                        <i className="ti tabler-circle-check fs-5"></i>Mark Resolved
                      </button>
                      <button className="btn btn-outline-secondary">
                        <i className="ti tabler-device-floppy"></i>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </TutorLayout>
  );
}
