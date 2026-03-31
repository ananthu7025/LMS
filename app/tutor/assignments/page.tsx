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
      <div className="row g-4 mb-4">
        {[
          { icon: 'tabler-file-report',  bg: 'bg-label-warning', val: '5',   label: 'Pending Review' },
          { icon: 'tabler-circle-check', bg: 'bg-label-success', val: '18',  label: 'Reviewed This Week' },
          { icon: 'tabler-chart-bar',    bg: 'bg-label-primary', val: '84%', label: 'Avg Score This Week' },
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
                <div className={`avatar avatar-md bg-label-${s.status === 'Reviewed' ? 'success' : 'primary'} rounded-circle flex-shrink-0`}>
                  <span className="avatar-initial rounded-circle fw-bold">{s.initials}</span>
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
              <div className="card-footer bg-light border-top p-4">
                <div className="row g-4 text-wrap">
                  <div className="col-lg-6 border-end">
                    <h6 className="fw-bold mb-3 small text-uppercase text-body-secondary">
                      <i className="ti tabler-list-check me-2"></i>Assignment Brief
                    </h6>
                    <div className="bg-white border rounded p-3 mb-4 small text-body shadow-none lh-base">
                      Write a formal charge sheet for the following scenario: A is accused of committing murder (Section 302 IPC) against B. Include: jurisdiction, facts, specific IPC sections invoked, and prayer for trial.
                      <div className="mt-2 pt-2 border-top">
                        <strong>Marks: 25 | Rubric:</strong> Structure (8), Legal accuracy (10), Drafting quality (7)
                      </div>
                    </div>
                    <h6 className="fw-bold mb-3 small text-uppercase text-body-secondary">
                      <i className="ti tabler-file-report me-2"></i>Student's Submission
                    </h6>
                    <div className="bg-white border rounded p-3 small text-heading shadow-none" style={{ maxHeight: 250, overflowY: 'auto' }}>
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
                    <h6 className="fw-bold mb-3 small text-uppercase text-body-secondary">
                      <i className="ti tabler-edit me-2"></i>Your Review
                    </h6>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Marks Awarded</label>
                      <div className="d-flex align-items-center gap-2">
                        <input className="form-control w-px-75" type="number" defaultValue={18} />
                        <span className="text-body-secondary">/ {s.total}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label small fw-bold">Written Feedback</label>
                      <div className="bg-white border rounded overflow-hidden">
                        <div className="bg-light p-2 border-bottom d-flex gap-1">
                          {['tabler-bold', 'tabler-italic', 'tabler-underline'].map(icon => (
                            <button key={icon} className="btn btn-sm btn-icon btn-text-secondary rounded"><i className={`ti ${icon} fs-5`}></i></button>
                          ))}
                        </div>
                        <textarea className="form-control border-0 rounded-0 p-3 small" rows={5} defaultValue="Good structure overall. The jurisdictional facts are well-stated. However, the section invoking Section 302 needs to be more precisely linked to the facts. The prayer clause is missing — always include it. Good first attempt!" />
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
