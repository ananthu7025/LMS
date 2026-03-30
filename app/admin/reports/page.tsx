'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const tabs = ['Student Performance', 'Revenue', 'Course Completion', 'Attendance', 'Practice Lab'];

export default function ReportsPage() {
  const [tab, setTab] = useState(0);
  return (
    <AdminLayout active="/admin/reports" title="Reports" breadcrumb="Home / Reports">
      <div style={{ display: 'flex', gap: 0, marginBottom: 24, borderBottom: '2px solid var(--border)' }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} style={{ padding: '10px 18px', border: 'none', borderBottom: tab === i ? '2px solid var(--primary)' : '2px solid transparent', background: 'transparent', color: tab === i ? 'var(--primary)' : 'var(--text-muted)', fontWeight: tab === i ? 700 : 500, fontSize: 13.5, cursor: 'pointer', marginBottom: -2, whiteSpace: 'nowrap' }}>{t}</button>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, paddingBottom: 8 }}>
          <input type="date" className="form-input" style={{ fontSize: 12, padding: '5px 10px' }} defaultValue="2025-01-01" />
          <input type="date" className="form-input" style={{ fontSize: 12, padding: '5px 10px' }} defaultValue="2025-03-31" />
          <button className="btn-outline" style={{ fontSize: 12 }}>📄 Export PDF</button>
          <button className="btn-outline" style={{ fontSize: 12 }}>📥 Export CSV</button>
        </div>
      </div>

      {tab === 0 && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 20 }}>
            {[['📊','#ede9fd','72%','Avg Completion Rate'],['📝','#e0f9fc','74%','Avg Quiz Score'],['😴','#fff5e6','184','Inactive (7+ days)'],['🏆','#e8faf0','89','Certificates Issued']].map(([icon, bg, val, label]) => (
              <div key={label as string} className="stat-card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: bg as string, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{icon as string}</div>
                <div><div style={{ fontSize: 20, fontWeight: 700 }}>{val as string}</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{label as string}</div></div>
              </div>
            ))}
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700 }}>Student Performance Report</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <select className="form-input" style={{ fontSize: 12, padding: '5px 10px' }}><option>All Courses</option></select>
                <select className="form-input" style={{ fontSize: 12, padding: '5px 10px' }}><option>All Batches</option></select>
              </div>
            </div>
            <table>
              <thead><tr><th>Student</th><th>Courses Enrolled</th><th>Avg Progress</th><th>Quizzes Taken</th><th>Quiz Avg</th><th>Last Active</th><th>Status</th></tr></thead>
              <tbody>
                {[['Arjun Mehta', 3, 68, 7, '82%', 'Today', 'Active'],['Sunita Kapoor', 2, 92, 12, '91%', 'Yesterday', 'Active'],['Vikram Joshi', 1, 45, 3, '64%', 'Mar 25', 'Active'],['Rahul Sharma', 4, 100, 18, '88%', 'Mar 28', 'Completed'],['Karan Singh', 2, 12, 1, '40%', 'Mar 20', 'Inactive']].map(([name, courses, progress, quizzes, avg, active, status]) => (
                  <tr key={name as string}>
                    <td style={{ fontWeight: 600 }}>{name as string}</td>
                    <td>{courses as number}</td>
                    <td><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><div className="progress-bar" style={{ width: 60 }}><div className="progress-fill" style={{ width: `${progress}%` }} /></div><span style={{ fontSize: 12 }}>{progress as number}%</span></div></td>
                    <td>{quizzes as number}</td>
                    <td style={{ fontWeight: 600 }}>{avg as string}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: 13 }}>{active as string}</td>
                    <td><span className={`badge ${status === 'Active' ? 'badge-success' : status === 'Completed' ? 'badge-primary' : 'badge-secondary'}`}>{status as string}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 1 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 14 }}>Monthly Revenue Trend</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 160 }}>
              {[55, 68, 72, 80, 65, 90, 88, 95, 82, 100, 92, 110].map((h, i) => (
                <div key={i} style={{ flex: 1, background: i === 11 ? 'var(--primary)' : 'var(--primary-light)', borderRadius: '3px 3px 0 0', height: `${h}%` }} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 4 }}>
              {['J','F','M','A','M','J','J','A','S','O','N','D'].map(m => <span key={m} style={{ fontSize: 10, color: 'var(--text-muted)' }}>{m}</span>)}
            </div>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 14 }}>Revenue by Course</div>
            {[['Criminal Law Fund.','₹68,400',82],['Constitutional Law','₹43,600',58],['CLAT 2025','₹52,200',70],['Evidence Act','₹24,800',35]].map(([name, rev, pct]) => (
              <div key={name as string} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13 }}>{name as string}</span>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{rev as string}</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 2 && (
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, marginBottom: 14 }}>Course Completion Funnel</div>
          {[['Enrolled', 1247, 100], ['Started (>0%)', 1089, 87], ['50%+ complete', 724, 58], ['80%+ complete', 487, 39], ['100% complete', 312, 25], ['Certificate earned', 289, 23]].map(([stage, count, pct]) => (
            <div key={stage as string} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
              <span style={{ fontSize: 13, width: 180, flexShrink: 0 }}>{stage as string}</span>
              <div className="progress-bar" style={{ flex: 1 }}><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
              <span style={{ fontSize: 13, fontWeight: 700, width: 80, textAlign: 'right' }}>{(count as number).toLocaleString()} ({pct as number}%)</span>
            </div>
          ))}
        </div>
      )}

      {tab === 3 && (
        <div className="card" style={{ overflow: 'hidden' }}>
          <table>
            <thead><tr><th>Student</th><th>Criminal Law (Apr 1)</th><th>Constitutional (Apr 2)</th><th>CLAT Mock (Apr 3)</th><th>Total Attended</th><th>Attendance %</th></tr></thead>
            <tbody>
              {[['Arjun Mehta','✅','✅','✅','3/3','100%'],['Sunita Kapoor','✅','✅','—','2/3','67%'],['Vikram Joshi','—','✅','✅','2/3','67%'],['Rahul Sharma','✅','—','✅','2/3','67%'],['Deepa Nair','✅','✅','✅','3/3','100%']].map(([name, ...rest]) => (
                <tr key={name as string}>
                  <td style={{ fontWeight: 600 }}>{name as string}</td>
                  {rest.slice(0, 3).map((v, i) => <td key={i} style={{ textAlign: 'center', color: v === '✅' ? 'var(--success)' : 'var(--text-muted)', fontSize: 16 }}>{v as string}</td>)}
                  <td style={{ fontWeight: 600, textAlign: 'center' }}>{rest[3] as string}</td>
                  <td style={{ textAlign: 'center' }}><span className={`badge ${rest[4] === '100%' ? 'badge-success' : 'badge-warning'}`}>{rest[4] as string}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 4 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 14 }}>Practice Lab Activity</div>
            {[['Case Drafting Studio', 234, 78],['Moot Court Simulator', 156, 52],['Contract Drafting', 189, 63],['Legal Research Arena', 142, 47],['Client Interview Room', 98, 33]].map(([name, students, pct]) => (
              <div key={name as string} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13 }}>{name as string}</span>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{students as number} students ({pct as number}%)</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%`, background: '#00CFE8' }} /></div>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 14 }}>Top Practice Lab Students</div>
            {[['Rahul Sharma', '4,280 XP', 'Level 8'],['Arjun Mehta', '3,940 XP', 'Level 7'],['Sunita Kapoor', '3,620 XP', 'Level 7'],['Deepa Nair', '2,890 XP', 'Level 6'],['Pooja Verma', '2,340 XP', 'Level 5']].map(([name, xp, level], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: i === 0 ? '#FFD700' : i === 1 ? '#C0C0C0' : i === 2 ? '#CD7F32' : 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: i < 3 ? '#fff' : 'var(--text-muted)' }}>#{i + 1}</div>
                <div style={{ flex: 1 }}><div style={{ fontWeight: 600, fontSize: 13 }}>{name as string}</div><div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{level as string}</div></div>
                <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: 13 }}>{xp as string}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scheduled reports */}
      <div className="card" style={{ marginTop: 20, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>📧 Weekly Summary Report</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Auto-email this report every Monday at 9 AM to rajesh@sharmalaw.in</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="badge badge-success">Active</span>
          <div className="toggle" />
        </div>
      </div>
    </AdminLayout>
  );
}
