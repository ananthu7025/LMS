'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const tabs = ['Overview', 'Curriculum', 'Students', 'Analytics', 'Settings'];

export default function CourseDetailPage() {
  const [tab, setTab] = useState(0);
  return (
    <AdminLayout title="Criminal Law Fundamentals" breadcrumb="Home / Courses / Criminal Law Fundamentals">

      {/* Tab bar */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <ul className="nav nav-tabs mb-0">
          {tabs.map((t, i) => (
            <li key={t} className="nav-item">
              <button className={`nav-link${tab === i ? ' active' : ''}`} onClick={() => setTab(i)}>{t}</button>
            </li>
          ))}
        </ul>
        <div className="d-flex gap-2">
          <a href="/admin/courses/1/curriculum" className="btn btn-outline-secondary btn-sm">
            <i className="ti tabler-clipboard me-1"></i>Edit Curriculum
          </a>
          <button className="btn btn-primary btn-sm">
            <i className="ti tabler-settings me-1"></i>Course Settings
          </button>
        </div>
      </div>

      {/* Overview */}
      {tab === 0 && (
        <div>
          <div className="row g-4 mb-4">
            {[['tabler-users','bg-label-primary','342','Students Enrolled'],['tabler-check','bg-label-success','68%','Completion Rate'],['tabler-notes','bg-label-warning','74%','Avg Quiz Score'],['tabler-currency-rupee','bg-label-info','₹68,400','Revenue Earned']].map(([icon, bg, val, label]) => (
              <div key={label as string} className="col-xl-3 col-md-6">
                <div className="card h-100">
                  <div className="card-body d-flex align-items-center gap-3">
                    <div className={`avatar ${bg as string} rounded`}>
                      <span className="avatar-initial rounded"><i className={`ti ${icon as string}`}></i></span>
                    </div>
                    <div>
                      <h4 className="fw-bold mb-0">{val as string}</h4>
                      <small className="text-body-secondary">{label as string}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Enrollment Trend</h6>
                  <div style={{ height: 140, background: 'linear-gradient(180deg,rgba(115,103,240,.1) 0%,transparent 100%)', borderRadius: 8 }}>
                    <svg width="100%" height="100%" viewBox="0 0 300 140" preserveAspectRatio="none">
                      <polyline points="0,130 50,110 100,90 150,70 200,60 250,40 300,25" fill="none" stroke="#7367F0" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Lesson Completion Drop-off</h6>
                  <div className="d-flex align-items-end gap-1" style={{ height: 140 }}>
                    {[100,95,88,82,75,68,60,54,48,43].map((h, i) => (
                      <div key={i} className="flex-grow-1 rounded-top bg-primary" style={{ height: `${h}%`, opacity: 0.4 + i * 0.06 }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Curriculum preview */}
      {tab === 1 && (
        <div className="card">
          <div className="card-body">
            {[['Module 1: Introduction',3],['Module 2: Offences Against Person',4],['Module 3: Property Offences',3]].map(([name, count]) => (
              <div key={name as string} className="mb-4 pb-4 border-bottom">
                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-bold">{name as string}</span>
                  <small className="text-body-secondary">{count as number} lessons</small>
                </div>
                {Array.from({ length: count as number }).map((_, i) => (
                  <div key={i} className="d-flex align-items-center gap-2 py-2 text-body-secondary small border-bottom">
                    <i className={`ti ${['tabler-video','tabler-file','tabler-notes','tabler-clipboard','tabler-broadcast'][i % 5]}`}></i>
                    <span className="flex-grow-1">Lesson {i + 1}: [Title here]</span>
                    <span className="badge bg-label-success">Published</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Students */}
      {tab === 2 && (
        <div className="card">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead><tr><th>Student</th><th>Enrolled</th><th>Progress</th><th>Last Active</th><th>Quiz Avg</th></tr></thead>
              <tbody>
                {[['Arjun Mehta','Mar 1',68,'Today','82%'],['Sunita Kapoor','Feb 15',92,'Yesterday','91%'],['Vikram Joshi','Feb 20',45,'Mar 25','64%'],['Deepa Nair','Mar 5',30,'Mar 27','71%'],['Rahul Sharma','Jan 20',100,'Mar 28','88%']].map(([name, date, pct, active, quiz]) => (
                  <tr key={name as string}>
                    <td className="fw-semibold">{name as string}</td>
                    <td className="text-body-secondary">{date as string}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="progress progress-sm flex-grow-1">
                          <div className="progress-bar bg-primary" style={{ width: `${pct}%` }}></div>
                        </div>
                        <small>{pct}%</small>
                      </div>
                    </td>
                    <td className="text-body-secondary">{active as string}</td>
                    <td className="fw-semibold">{quiz as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Analytics */}
      {tab === 3 && (
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold mb-4">Most Rewatched Lessons</h6>
                {[['Sec 302 & Murder — Part 1',47],['Fundamental Rights Overview',38],['IPC Introduction',29],['Bail Applications — Live',24]].map(([n, c]) => (
                  <div key={n as string} className="d-flex justify-content-between py-2 border-bottom small">
                    <span>{n as string}</span>
                    <span className="fw-bold text-primary">{c as number} views</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold mb-4">Avg Time Spent per Lesson</h6>
                <div className="d-flex align-items-end gap-1" style={{ height: 130 }}>
                  {[65,82,48,91,55,70,60,44,78].map((h, i) => (
                    <div key={i} className="flex-grow-1 rounded-top bg-label-primary border border-primary" style={{ height: `${h}%`, borderBottom: 'none' }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings */}
      {tab === 4 && (
        <div className="card" style={{ maxWidth: 640 }}>
          <div className="card-body">
            <h5 className="fw-bold mb-4">Course Settings</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Price (₹)</label>
                <input className="form-control" defaultValue={4999} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Assign Tutor</label>
                <select className="form-select">
                  <option>Anil Kumar</option><option>Priya Nair</option><option>Admin Direct</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label">Certificate Template</label>
                <select className="form-select">
                  <option>LexEd Standard Certificate</option><option>Gold Certificate</option><option>Custom Template</option>
                </select>
              </div>
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-primary">Save Settings</button>
              <button className="btn btn-outline-warning">Unpublish Course</button>
              <button className="btn btn-outline-danger">Archive Course</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
