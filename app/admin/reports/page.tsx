'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const tabs = ['Student Performance', 'Revenue', 'Course Completion', 'Attendance', 'Practice Lab'];

export default function ReportsPage() {
  const [tab, setTab] = useState(0);
  return (
    <AdminLayout title="Reports" breadcrumb="Home / Reports">

      {/* Tab nav + export controls */}
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 gap-2">
        <ul className="nav nav-tabs mb-0">
          {tabs.map((t, i) => (
            <li key={t} className="nav-item">
              <button className={`nav-link${tab === i ? ' active' : ''}`} onClick={() => setTab(i)}>{t}</button>
            </li>
          ))}
        </ul>
        <div className="d-flex gap-2">
          <input type="date" className="form-control form-control-sm" defaultValue="2025-01-01" />
          <input type="date" className="form-control form-control-sm" defaultValue="2025-03-31" />
          <button className="btn btn-sm btn-outline-secondary"><i className="ti tabler-file-type-pdf me-1"></i>Export PDF</button>
          <button className="btn btn-sm btn-outline-secondary"><i className="ti tabler-download me-1"></i>Export CSV</button>
        </div>
      </div>

      {/* Tab 0: Student Performance */}
      {tab === 0 && (
        <div>
          <div className="row g-4 mb-4">
            {[['tabler-chart-pie','bg-label-primary','72%','Avg Completion Rate'],['tabler-notes','bg-label-info','74%','Avg Quiz Score'],['tabler-zzz','bg-label-warning','184','Inactive (7+ days)'],['tabler-trophy','bg-label-success','89','Certificates Issued']].map(([icon, bg, val, label]) => (
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
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h6 className="fw-bold mb-0">Student Performance Report</h6>
              <div className="d-flex gap-2">
                <select className="form-select form-select-sm" style={{ width: 'auto' }}><option>All Courses</option></select>
                <select className="form-select form-select-sm" style={{ width: 'auto' }}><option>All Batches</option></select>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead><tr><th>Student</th><th>Courses</th><th>Avg Progress</th><th>Quizzes</th><th>Quiz Avg</th><th>Last Active</th><th>Status</th></tr></thead>
                <tbody>
                  {[['Arjun Mehta',3,68,7,'82%','Today','Active'],['Sunita Kapoor',2,92,12,'91%','Yesterday','Active'],['Vikram Joshi',1,45,3,'64%','Mar 25','Active'],['Rahul Sharma',4,100,18,'88%','Mar 28','Completed'],['Karan Singh',2,12,1,'40%','Mar 20','Inactive']].map(([name, courses, progress, quizzes, avg, active, status]) => (
                    <tr key={name as string}>
                      <td className="fw-semibold">{name as string}</td>
                      <td>{courses as number}</td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="progress progress-sm flex-grow-1" style={{ minWidth: 60 }}>
                            <div className="progress-bar bg-primary" style={{ width: `${progress}%` }}></div>
                          </div>
                          <small>{progress as number}%</small>
                        </div>
                      </td>
                      <td>{quizzes as number}</td>
                      <td className="fw-semibold">{avg as string}</td>
                      <td className="text-body-secondary">{active as string}</td>
                      <td><span className={`badge ${status === 'Active' ? 'bg-label-success' : status === 'Completed' ? 'bg-label-primary' : 'bg-label-secondary'}`}>{status as string}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 1: Revenue */}
      {tab === 1 && (
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold mb-4">Monthly Revenue Trend</h6>
                <div className="d-flex align-items-flex-end gap-1" style={{ height: 160, alignItems: 'flex-end' }}>
                  {[55,68,72,80,65,90,88,95,82,100,92,110].map((h, i) => (
                    <div key={i} className={`flex-grow-1 rounded-top ${i === 11 ? 'bg-primary' : 'bg-label-primary'}`} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="d-flex justify-content-around mt-2">
                  {['J','F','M','A','M','J','J','A','S','O','N','D'].map(m => <small key={m} className="text-body-secondary">{m}</small>)}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold mb-4">Revenue by Course</h6>
                {[['Criminal Law Fund.','₹68,400',82],['Constitutional Law','₹43,600',58],['CLAT 2025','₹52,200',70],['Evidence Act','₹24,800',35]].map(([name, rev, pct]) => (
                  <div key={name as string} className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <small>{name as string}</small>
                      <small className="fw-bold">{rev as string}</small>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-primary" style={{ width: `${pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Completion */}
      {tab === 2 && (
        <div className="card">
          <div className="card-body">
            <h6 className="fw-bold mb-4">Course Completion Funnel</h6>
            {[['Enrolled',1247,100],['Started (>0%)',1089,87],['50%+ complete',724,58],['80%+ complete',487,39],['100% complete',312,25],['Certificate earned',289,23]].map(([stage, count, pct]) => (
              <div key={stage as string} className="d-flex align-items-center gap-3 mb-3">
                <span className="small" style={{ width: 180, flexShrink: 0 }}>{stage as string}</span>
                <div className="progress progress-sm flex-grow-1">
                  <div className="progress-bar bg-primary" style={{ width: `${pct}%` }}></div>
                </div>
                <small className="fw-bold" style={{ width: 100, textAlign: 'right' }}>{(count as number).toLocaleString()} ({pct as number}%)</small>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Attendance */}
      {tab === 3 && (
        <div className="card">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead><tr><th>Student</th><th>Criminal Law (Apr 1)</th><th>Constitutional (Apr 2)</th><th>CLAT Mock (Apr 3)</th><th>Total</th><th>Attendance %</th></tr></thead>
              <tbody>
                {[['Arjun Mehta','✅','✅','✅','3/3','100%'],['Sunita Kapoor','✅','✅','—','2/3','67%'],['Vikram Joshi','—','✅','✅','2/3','67%'],['Rahul Sharma','✅','—','✅','2/3','67%'],['Deepa Nair','✅','✅','✅','3/3','100%']].map(([name, ...rest]) => (
                  <tr key={name as string}>
                    <td className="fw-semibold">{name as string}</td>
                    {rest.slice(0,3).map((v, i) => <td key={i} className={`text-center ${v === '✅' ? 'text-success' : 'text-body-secondary'}`}>{v as string}</td>)}
                    <td className="fw-semibold text-center">{rest[3] as string}</td>
                    <td className="text-center"><span className={`badge ${rest[4] === '100%' ? 'bg-label-success' : 'bg-label-warning'}`}>{rest[4] as string}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Practice Lab */}
      {tab === 4 && (
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold mb-4">Practice Lab Activity</h6>
                {[['Case Drafting Studio',234,78],['Moot Court Simulator',156,52],['Contract Drafting',189,63],['Legal Research Arena',142,47],['Client Interview Room',98,33]].map(([name, students, pct]) => (
                  <div key={name as string} className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <small>{name as string}</small>
                      <small className="fw-bold">{students as number} students ({pct as number}%)</small>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-info" style={{ width: `${pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold mb-4">Top Practice Lab Students</h6>
                {[['Rahul Sharma','4,280 XP','Level 8'],['Arjun Mehta','3,940 XP','Level 7'],['Sunita Kapoor','3,620 XP','Level 7'],['Deepa Nair','2,890 XP','Level 6'],['Pooja Verma','2,340 XP','Level 5']].map(([name, xp, level], i) => (
                  <div key={i} className="d-flex align-items-center gap-3 py-2 border-bottom">
                    <div className={`avatar avatar-sm rounded-circle fw-bold ${i === 0 ? 'bg-warning' : i === 1 ? 'bg-secondary' : i === 2 ? 'bg-danger' : 'bg-light'}`}>
                      <span className="avatar-initial rounded-circle">#{i+1}</span>
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-semibold small">{name as string}</div>
                      <small className="text-body-secondary">{level as string}</small>
                    </div>
                    <span className="fw-bold text-primary small">{xp as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scheduled report banner */}
      <div className="card mt-4">
        <div className="card-body d-flex align-items-center justify-content-between">
          <div>
            <div className="fw-semibold">
              <i className="ti tabler-mail me-2 text-primary"></i>Weekly Summary Report
            </div>
            <small className="text-body-secondary">Auto-email every Monday at 9 AM to rajesh@sharmalaw.in</small>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="badge bg-label-success">Active</span>
            <div className="form-check form-switch mb-0">
              <input className="form-check-input" type="checkbox" defaultChecked />
            </div>
          </div>
        </div>
      </div>

    </AdminLayout>
  );
}
