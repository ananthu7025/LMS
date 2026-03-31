'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const students = [
  { name: 'Arjun Mehta', initials: 'AM', course: 'Criminal Law Fundamentals', done: 24, total: 35, progress: 68, quizAvg: 82, lastActive: 'Today', color: 'primary' },
  { name: 'Sunita Kapoor', initials: 'SK', course: 'Criminal Law Fundamentals', done: 32, total: 35, progress: 92, quizAvg: 91, lastActive: 'Yesterday', color: 'success' },
  { name: 'Vikram Joshi', initials: 'VJ', course: 'Criminal Law Fundamentals', done: 16, total: 35, progress: 45, quizAvg: 64, lastActive: 'Mar 25', color: 'warning' },
  { name: 'Deepa Nair', initials: 'DN', course: 'Criminal Law Fundamentals', done: 10, total: 35, progress: 30, quizAvg: 71, lastActive: 'Mar 27', color: 'info' },
  { name: 'Rahul Sharma', initials: 'RS', course: 'Criminal Law Fundamentals', done: 35, total: 35, progress: 100, quizAvg: 88, lastActive: 'Mar 28', color: 'danger' },
  { name: 'Pooja Verma', initials: 'PV', course: 'Criminal Law Fundamentals', done: 19, total: 35, progress: 55, quizAvg: 76, lastActive: 'Today', color: 'secondary' },
  { name: 'Karan Singh', initials: 'KS', course: 'Criminal Law Fundamentals', done: 4, total: 35, progress: 12, quizAvg: 40, lastActive: 'Mar 20', color: 'dark' },
  { name: 'Meera Iyer', initials: 'MI', course: 'Criminal Law Fundamentals', done: 20, total: 35, progress: 58, quizAvg: 79, lastActive: 'Mar 26', color: 'primary' },
];

export default function StudentProgressPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <TutorLayout active="/tutor/students" title="Student Progress" breadcrumb="Home / Student Progress">
      <div className="row g-3 mb-4 align-items-center">
        <div className="col-md-4">
          <select className="form-select">
            <option>Criminal Law Fundamentals</option>
            <option>Constitutional Law Mastery</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>Sort by Progress</option>
            <option>Sort by Last Active</option>
            <option>Sort by Quiz Score</option>
          </select>
        </div>
        <div className="col-md-5">
          <div className="input-group input-group-merge">
            <span className="input-group-text"><i className="ti tabler-search"></i></span>
            <input className="form-control" placeholder="Search students..." />
          </div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="table-responsive text-nowrap">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Lessons</th>
                <th>Progress</th>
                <th>Quiz Avg</th>
                <th>Last Active</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {students.map((s, i) => (
                <>
                  <tr key={i} className="cursor-pointer" onClick={() => setExpanded(expanded === i ? null : i)}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className={`avatar avatar-sm bg-label-${s.color} rounded-circle`}>
                          <span className="avatar-initial rounded-circle fw-bold">{s.initials}</span>
                        </div>
                        <span className="fw-semibold text-heading">{s.name}</span>
                      </div>
                    </td>
                    <td><small className="text-body-secondary">{s.course}</small></td>
                    <td><span className="fw-medium">{s.done} / {s.total}</span></td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="progress w-px-100" style={{ height: 6 }}>
                          <div className={`progress-bar bg-${s.progress === 100 ? 'success' : 'primary'}`} role="progressbar" style={{ width: `${s.progress}%` }}></div>
                        </div>
                        <small className="fw-bold">{s.progress}%</small>
                      </div>
                    </td>
                    <td>
                      <span className={`badge bg-label-${s.quizAvg >= 75 ? 'success' : s.quizAvg >= 50 ? 'warning' : 'danger'}`}>
                        {s.quizAvg}%
                      </span>
                    </td>
                    <td><small className="text-body-secondary">{s.lastActive}</small></td>
                    <td className="text-end">
                      <i className={`ti tabler-chevron-${expanded === i ? 'up' : 'down'} text-primary`}></i>
                    </td>
                  </tr>
                  {expanded === i && (
                    <tr key={`expand-${i}`} className="bg-light">
                      <td colSpan={7} className="p-4 border-bottom">
                        <div className="row g-4 text-wrap">
                          <div className="col-md-4">
                            <h6 className="fw-bold mb-3 small text-uppercase text-body-secondary">
                              <i className="ti tabler-book me-2"></i>Lesson Completion
                            </h6>
                            <div className="d-flex flex-column gap-2">
                              {[
                                { title: 'Introduction to IPC', icon: 'tabler-circle-check', color: 'success' },
                                { title: 'Section 299–302',     icon: 'tabler-circle-check', color: 'success' },
                                { title: 'Section 320–326',     icon: 'tabler-circle-check', color: 'success' },
                                { title: 'Property Offences',   icon: 'tabler-circle-check', color: 'success' },
                                { title: 'Evidence Act',        icon: 'tabler-clock',        color: 'warning' },
                                { title: 'Bail Application',    icon: 'tabler-lock',         color: 'secondary' }
                              ].map(l => (
                                <div key={l.title} className={`d-flex align-items-center gap-2 small py-1 border-bottom last-child-border-0 text-${l.color}`}>
                                  <i className={`ti ${l.icon} fs-6`}></i>
                                  <span>{l.title}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="col-md-4">
                            <h6 className="fw-bold mb-3 small text-uppercase text-body-secondary">
                              <i className="ti tabler-file-analytics me-2"></i>Quiz History
                            </h6>
                            <div className="d-flex flex-column gap-2">
                              {[
                                { quiz: 'Module 1 Quiz', score: '18/20', pct: '90%' },
                                { quiz: 'Module 2 Quiz', score: '16/20', pct: '80%' },
                                { quiz: 'Property Quiz', score: '15/20', pct: '75%' }
                              ].map((q, idx) => (
                                <div key={idx} className="d-flex justify-content-between align-items-center small py-1 border-bottom last-child-border-0">
                                  <span>{q.quiz}</span>
                                  <span className="fw-bold">{q.score} ({q.pct})</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="col-md-4">
                            <h6 className="fw-bold mb-3 small text-uppercase text-body-secondary">
                              <i className="ti tabler-notes me-2"></i>Tutor Notes (Private)
                            </h6>
                            <textarea className="form-control mb-2 small" rows={3} placeholder="Add a private note about this student..." />
                            <button className="btn btn-primary btn-sm w-100">Save Note</button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </TutorLayout>
  );
}
