'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const submissions = [
  { student: 'Arjun Mehta', initials: 'AM', assignment: 'Write a Charge Sheet for a Murder Case', course: 'Criminal Law', submitted: 'Today, 11:42 AM', status: 'Pending', total: 25, color: 'primary' },
  { student: 'Sunita Kapoor', initials: 'SK', assignment: 'Draft a Bail Application — Anticipatory Bail', course: 'Criminal Law', submitted: 'Yesterday, 4:18 PM', status: 'Pending', total: 30, color: 'success' },
  { student: 'Vikram Joshi', initials: 'VJ', assignment: 'Write a Charge Sheet for a Murder Case', course: 'Criminal Law', submitted: 'Yesterday, 8:00 AM', status: 'Pending', total: 25, color: 'warning' },
  { student: 'Deepa Nair', initials: 'DN', assignment: 'Evidence Analysis — Mock FIR Scenario', course: 'Criminal Law', submitted: 'Mar 27, 3:00 PM', status: 'Pending', total: 20, color: 'info' },
  { student: 'Rahul Sharma', initials: 'RS', assignment: 'Draft a Bail Application — Anticipatory Bail', course: 'Criminal Law', submitted: 'Mar 26, 9:30 AM', status: 'Reviewed', total: 30, marks: 27, color: 'danger' },
];

export default function AssignmentsPage() {
  const [expanded, setExpanded] = useState(0);

  return (
    <TutorLayout active="/tutor/assignments" title="Assignment Review" breadcrumb="Home / Assignments">
      <div className="row g-6 mb-6">
        {[
          { icon: 'tabler-file-report',  label: 'Pending Review',     value: '5',   change: 'Action', pos: false, sub: 'Needs grading',  color: 'bg-label-warning', iconColor: '#FF9F43' },
          { icon: 'tabler-circle-check', label: 'Reviewed This Week', value: '18',  change: '+22%',   pos: true,  sub: 'Response rate',  color: 'bg-label-success', iconColor: '#28C76F' },
          { icon: 'tabler-chart-bar',    label: 'Avg Score This Week', value: '84%', change: '+6%',   pos: true,  sub: 'Class average',  color: 'bg-label-primary', iconColor: '#7367F0' },
        ].map((s) => (
          <div key={s.label} className="col-sm-6 col-xl-4">
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

      <div className="row g-3 mb-4 align-items-center">
        <div className="col-md-4">
          <select className="form-select"><option>All Courses</option></select>
        </div>
        <div className="col-md-4">
          <select className="form-select"><option>All Status</option><option>Pending Review</option><option>Reviewed</option></select>
        </div>
        <div className="col-md-4">
          <input type="date" className="form-control" defaultValue="2025-03-01" />
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        {submissions.map((s, i) => (
          <div key={i} className={`card ${expanded === i ? 'border-primary shadow-sm' : ''}`}>
            <div className="card-body cursor-pointer py-4" onClick={() => setExpanded(i === expanded ? -1 : i)}>
              <div className="d-flex gap-3 align-items-center">
                <div className="avatar avatar-md flex-shrink-0">
                  <span className={`avatar-initial rounded-circle fw-bold bg-label-${s.color}`}>{s.initials}</span>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                    <h6 className="mb-0 fw-bold">{s.student}</h6>
                    <span className={`badge bg-label-${s.status === 'Pending' ? 'warning' : 'success'} small`}>
                      {s.status === 'Pending' ? 'Pending Review' : 'Reviewed'}
                    </span>
                    {s.status === 'Reviewed' && (
                      <span className="badge bg-success text-white small fw-bold">
                        {s.marks} / {s.total}
                      </span>
                    )}
                  </div>
                  <div className="text-heading small mb-1 fw-semibold">{s.assignment}</div>
                  <small className="text-body-secondary">
                    <i className="ti tabler-book me-1 small"></i>{s.course} · <i className="ti tabler-calendar me-1 small"></i>Submitted {s.submitted}
                  </small>
                </div>
                <i className={`ti tabler-chevron-${expanded === i ? 'up' : 'down'} text-primary`}></i>
              </div>
            </div>

            {expanded === i && (
              <div className="border-top p-4" style={{ background: '#fff', borderTop: '3px solid #7367F0' }}>
                <div className="row g-4 text-wrap">
                  <div className="col-lg-6">

                    {/* Assignment Brief */}
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="badge bg-label-primary rounded p-1_5">
                        <i className="ti tabler-list-check icon-md"></i>
                      </div>
                      <span className="fw-bold small text-uppercase text-body-secondary">Assignment Brief</span>
                    </div>
                    <div className="rounded p-3 mb-4 small text-body shadow-sm lh-base" style={{ background: '#fff', borderLeft: '4px solid #7367F0' }}>
                      Write a formal charge sheet for the following scenario: A is accused of committing murder (Section 302 IPC) against B. Include: jurisdiction, facts, specific IPC sections invoked, and prayer for trial.
                      <div className="mt-2 pt-2 border-top">
                        <strong>Marks: {s.total} | Rubric:</strong> Structure (8), Legal accuracy (10), Drafting quality (7)
                      </div>
                    </div>

                    {/* Student Submission */}
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="badge bg-label-info rounded p-1_5">
                        <i className="ti tabler-file-report icon-md"></i>
                      </div>
                      <span className="fw-bold small text-uppercase text-body-secondary">Student's Submission</span>
                    </div>
                    <div className="rounded p-3 small text-heading shadow-sm" style={{ background: '#fff', borderLeft: '4px solid #00CFE8', maxHeight: 250, overflowY: 'auto' }}>
                      <pre className="m-0 text-wrap font-monospace" style={{ fontSize: 12 }}>
                        IN THE HON'BLE COURT OF THE CHIEF JUDICIAL MAGISTRATE{'\n'}
                        DISTRICT: NEW DELHI{'\n'}{'\n'}
                        Charge Sheet No. ___ of 2025{'\n'}
                        State vs. Ram Kumar{'\n'}{'\n'}
                        OFFENCE: Murder under Section 302 IPC{'\n'}{'\n'}
                        The following facts are submitted to this Hon'ble Court for taking cognizance and trial of the accused...
                      </pre>
                    </div>

                  </div>
                  <div className="col-lg-6">

                    {/* Your Review */}
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="badge bg-label-success rounded p-1_5">
                        <i className="ti tabler-edit icon-md"></i>
                      </div>
                      <span className="fw-bold small text-uppercase text-body-secondary">Your Review</span>
                    </div>

                    <div className="mb-3 bg-white rounded p-3 shadow-sm" style={{ border: '1px solid #e0deff' }}>
                      <label className="form-label small fw-bold">Marks Awarded</label>
                      <div className="d-flex align-items-center gap-2">
                        <input className="form-control w-px-75" type="number" defaultValue={18} />
                        <span className="text-body-secondary fw-semibold">/ {s.total}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label small fw-bold">Written Feedback</label>
                      <div className="rounded overflow-hidden shadow-sm" style={{ border: '1px solid #e0deff' }}>
                        <div className="d-flex gap-1 p-2 border-bottom" style={{ background: '#f8f8fb' }}>
                          {['tabler-bold', 'tabler-italic', 'tabler-underline'].map(icon => (
                            <button key={icon} className="btn btn-sm btn-icon btn-text-secondary rounded">
                              <i className={`ti ${icon} fs-5`}></i>
                            </button>
                          ))}
                        </div>
                        <textarea className="form-control border-0 rounded-0 p-3 small bg-white" rows={5} defaultValue="Good structure overall. The jurisdictional facts are well-stated. However, the section invoking Section 302 needs to be more precisely linked to the facts. The prayer clause is missing — always include it. Good first attempt!" />
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <button className="btn btn-primary flex-grow-1 d-flex align-items-center justify-content-center gap-2">
                        <i className="ti tabler-send fs-5"></i>Return to Student
                      </button>
                      <button className="btn btn-outline-secondary">
                        <i className="ti tabler-device-floppy me-1"></i>Save Draft
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
