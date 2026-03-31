'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const doubts = [
  { student: 'Arjun Mehta', initials: 'AM', course: 'Criminal Law', lesson: 'Section 300 IPC', question: 'What is the key distinction between culpable homicide under Section 299 and murder under Section 300? The elements seem overlapping to me.', time: '2 hrs ago', status: 'Unanswered', color: 'primary' },
  { student: 'Sunita Kapoor', initials: 'SK', course: 'Criminal Law', lesson: 'Evidence Act — Sec 45', question: 'Can an expert witness opinion be given by someone who is not officially qualified but has practical experience? What does Section 45 say?', time: '4 hrs ago', status: 'Unanswered', color: 'success' },
  { student: 'Deepa Nair', initials: 'DN', course: 'Criminal Law', lesson: 'Bail Applications', question: 'Is there a difference between regular bail and anticipatory bail? Which court has jurisdiction for anticipatory bail?', time: '6 hrs ago', status: 'Unanswered', color: 'info' },
  { student: 'Vikram Joshi', initials: 'VJ', course: 'Criminal Law', lesson: 'Section 420 IPC', question: 'How does cheating under Section 420 differ from criminal breach of trust under Section 405?', time: '1 day ago', status: 'Answered', color: 'warning' },
  { student: 'Pooja Verma', initials: 'PV', course: 'Criminal Law', lesson: 'FIR & Police Powers', question: 'What are the legal consequences of a false FIR? Can the complainant be held liable?', time: '2 days ago', status: 'Answered', color: 'secondary' },
];

export default function DoubtsPage() {
  const [expanded, setExpanded] = useState(0);

  return (
    <TutorLayout active="/tutor/doubts" title="Student Doubts" breadcrumb="Home / Student Doubts">
      {/* Stats bar */}
      <div className="row g-4 mb-4">
        {[
          { icon: 'tabler-help-circle', bg: 'bg-label-warning', val: '3', label: 'Pending Doubts' },
          { icon: 'tabler-circle-check', bg: 'bg-label-success', val: '48', label: 'Answered This Week' },
          { icon: 'tabler-clock',        bg: 'bg-label-primary', val: '2.4 hrs', label: 'Avg Response Time' },
        ].map((s) => (
          <div key={s.label} className="col-md-4">
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

      {/* Filters */}
      <div className="row g-3 mb-4 align-items-center">
        <div className="col-md-3">
          <select className="form-select"><option>All Courses</option><option>Criminal Law</option><option>Constitutional Law</option></select>
        </div>
        <div className="col-md-3">
          <select className="form-select"><option>All Lessons</option></select>
        </div>
        <div className="col-md-2">
          <select className="form-select"><option>All Status</option><option>Unanswered</option><option>Answered</option></select>
        </div>
        <div className="col-md-4">
          <div className="input-group input-group-merge">
            <span className="input-group-text"><i className="ti tabler-search"></i></span>
            <input className="form-control" placeholder="Search doubts..." />
          </div>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {doubts.map((d, i) => (
          <div key={i} className={`card ${expanded === i ? 'border-primary shadow-sm' : ''}`}>
            {/* Doubt header */}
            <div className="card-body cursor-pointer py-4" onClick={() => setExpanded(i === expanded ? -1 : i)}>
              <div className="d-flex gap-3 align-items-start">
                <div className={`avatar avatar-md bg-label-${d.color} rounded-circle flex-shrink-0`}>
                  <span className="avatar-initial rounded-circle fw-bold">{d.initials}</span>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                    <h6 className="mb-0 fw-bold">{d.student}</h6>
                    <span className="badge bg-label-secondary small pe-none">
                      <i className="ti tabler-book me-1 small"></i>{d.course} › {d.lesson}
                    </span>
                    <span className={`badge bg-label-${d.status === 'Unanswered' ? 'warning' : 'success'} ms-auto`}>
                      {d.status}
                    </span>
                  </div>
                  <p className="text-heading mb-2 lh-base">{d.question}</p>
                  <small className="text-body-secondary"><i className="ti tabler-calendar-event me-1 small"></i>{d.time}</small>
                </div>
              </div>
            </div>

            {/* Reply panel */}
            {expanded === i && (
              <div className="card-footer bg-light border-top p-4">
                <h6 className="fw-bold mb-3 small text-uppercase text-body-secondary">
                  <i className="ti tabler-message-2 me-2"></i>Your Reply
                </h6>
                <div className="bg-white border rounded overflow-hidden mb-3">
                  <div className="d-flex gap-1 p-2 bg-light border-bottom">
                    {['tabler-bold', 'tabler-italic', 'tabler-underline', 'tabler-link', 'tabler-photo'].map(icon => (
                      <button key={icon} className="btn btn-sm btn-icon btn-text-secondary rounded"><i className={`ti ${icon} fs-5`}></i></button>
                    ))}
                  </div>
                  <textarea className="form-control border-0 rounded-0" rows={4} placeholder="Type your answer here... You can reference specific IPC sections or case laws." />
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary d-flex align-items-center gap-2">
                    <i className="ti tabler-send fs-5"></i>Submit Reply
                  </button>
                  <button className="btn btn-label-success d-flex align-items-center gap-2">
                    <i className="ti tabler-circle-check fs-5"></i>Mark Resolved
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </TutorLayout>
  );
}
