'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const classes = [
  { course: 'Criminal Law Fundamentals',  topic: 'Section 302 & Murder — Case Studies',    tutor: 'Anil Kumar',  date: 'Apr 1, 2025',  time: '10:00 AM', duration: '90 min',  students: 124, status: 'Upcoming' },
  { course: 'Constitutional Law',          topic: 'Fundamental Rights — Art. 14 to 21',     tutor: 'Priya Nair',  date: 'Apr 2, 2025',  time: '02:00 PM', duration: '60 min',  students: 98,  status: 'Upcoming' },
  { course: 'CLAT Preparation',            topic: 'Mock Test Review: March Batch',           tutor: 'Priya Nair',  date: 'Apr 3, 2025',  time: '05:30 PM', duration: '120 min', students: 201, status: 'Upcoming' },
  { course: 'Criminal Law Fundamentals',  topic: 'Evidence Act: Sections 45–51',            tutor: 'Anil Kumar',  date: 'Mar 28, 2025', time: '10:00 AM', duration: '90 min',  students: 108, status: 'Completed' },
  { course: 'Constitutional Law',          topic: 'Directive Principles & Fundamental Duties',tutor: 'Priya Nair',  date: 'Mar 25, 2025', time: '02:00 PM', duration: '60 min',  students: 91,  status: 'Completed' },
];

export default function LiveClassesPage() {
  const [view, setView] = useState<'calendar'|'list'>('list');
  return (
    <AdminLayout title="Live Classes" breadcrumb="Home / Live Classes">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="btn-group">
          <button className={`btn btn-outline-secondary${view === 'calendar' ? ' active' : ''}`} onClick={() => setView('calendar')}>
            <i className="ti tabler-calendar me-1"></i>Calendar
          </button>
          <button className={`btn btn-outline-secondary${view === 'list' ? ' active' : ''}`} onClick={() => setView('list')}>
            <i className="ti tabler-list me-1"></i>List
          </button>
        </div>
        <a href="/admin/live-classes/schedule" className="btn btn-primary">
          <i className="ti tabler-plus me-1"></i>Schedule Class
        </a>
      </div>

      {view === 'calendar' && (
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">April 2025</h5>
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ti tabler-chevron-left"></i>Prev
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                  Next<i className="ti tabler-chevron-right ms-1"></i>
                </button>
              </div>
            </div>
            <div className="row g-1">
              {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                <div key={d} className="col text-center">
                  <small className="fw-bold text-body-secondary">{d}</small>
                </div>
              ))}
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={`e${i}`} className="col" style={{ height: 70 }}></div>
              ))}
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className={`col rounded border p-1${[1,2,3].includes(i) ? ' border-primary bg-label-primary' : ''}`} style={{ height: 70 }}>
                  <small className={`fw-bold d-block${[1,2,3].includes(i) ? ' text-primary' : ' text-body-secondary'}`}>{i + 1}</small>
                  {i === 1 && <div className="badge bg-primary w-100 text-truncate d-block" style={{ fontSize: 9 }}>10AM Criminal</div>}
                  {i === 2 && <div className="badge bg-info w-100 text-truncate d-block" style={{ fontSize: 9 }}>2PM Constitutional</div>}
                  {i === 3 && <div className="badge bg-success w-100 text-truncate d-block" style={{ fontSize: 9 }}>5:30PM CLAT</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {view === 'list' && (
        <div className="card">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr><th>Course &amp; Topic</th><th>Tutor</th><th>Date &amp; Time</th><th>Duration</th><th>Students</th><th>Status</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {classes.map((c, i) => (
                  <tr key={i}>
                    <td>
                      <div className="fw-semibold">{c.topic}</div>
                      <small className="text-body-secondary">{c.course}</small>
                    </td>
                    <td>{c.tutor}</td>
                    <td>
                      <div className="fw-semibold">{c.date}</div>
                      <small className="text-body-secondary">{c.time}</small>
                    </td>
                    <td>{c.duration}</td>
                    <td className="fw-semibold">{c.students}</td>
                    <td><span className={`badge ${c.status === 'Upcoming' ? 'bg-label-info' : 'bg-label-secondary'}`}>{c.status}</span></td>
                    <td>
                      <div className="d-flex gap-2">
                        {c.status === 'Upcoming' && <button className="btn btn-sm btn-primary">Join</button>}
                        <button className="btn btn-sm btn-outline-secondary">Edit</button>
                        {c.status === 'Upcoming' && <button className="btn btn-sm btn-outline-danger">Cancel</button>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
