'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const tabs = ['Overview', 'Curriculum', 'Students', 'Analytics', 'Settings'];

export default function CourseDetailPage() {
  const [tab, setTab] = useState(0);
  return (
    <AdminLayout active="/admin/courses" title="Criminal Law Fundamentals" breadcrumb="Home / Courses / Criminal Law Fundamentals">
      {/* Tab bar */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 24, borderBottom: '2px solid var(--border)' }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} style={{ padding: '10px 22px', border: 'none', borderBottom: tab === i ? '2px solid var(--primary)' : '2px solid transparent', background: 'transparent', color: tab === i ? 'var(--primary)' : 'var(--text-muted)', fontWeight: tab === i ? 700 : 500, fontSize: 14, cursor: 'pointer', marginBottom: -2 }}>{t}</button>
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, paddingBottom: 8 }}>
          <a href="/admin/courses/1/curriculum"><button className="btn-outline" style={{ fontSize: 13 }}>📋 Edit Curriculum</button></a>
          <button className="btn-primary" style={{ fontSize: 13 }}>⚙️ Course Settings</button>
        </div>
      </div>

      {tab === 0 && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
            {[['👥', '#ede9fd', '342', 'Students Enrolled'],['✅','#e8faf0','68%','Completion Rate'],['📝','#fff5e6','74%','Avg Quiz Score'],['💰','#e0f9fc','₹68,400','Revenue Earned']].map(([icon, bg, val, label]) => (
              <div key={label as string} className="stat-card">
                <div style={{ width: 44, height: 44, borderRadius: 10, background: bg as string, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{icon as string}</div>
                <div><div style={{ fontSize: 20, fontWeight: 700 }}>{val as string}</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{label as string}</div></div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ fontWeight: 700, marginBottom: 14 }}>Enrollment Trend</div>
              <div style={{ height: 140, background: 'linear-gradient(180deg, rgba(115,103,240,0.1) 0%, transparent 100%)', borderRadius: 8 }}>
                <svg width="100%" height="100%" viewBox="0 0 300 140" preserveAspectRatio="none">
                  <polyline points="0,130 50,110 100,90 150,70 200,60 250,40 300,25" fill="none" stroke="#7367F0" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
            <div className="card" style={{ padding: 20 }}>
              <div style={{ fontWeight: 700, marginBottom: 14 }}>Lesson Completion Drop-off</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 140 }}>
                {[100, 95, 88, 82, 75, 68, 60, 54, 48, 43].map((h, i) => (
                  <div key={i} style={{ flex: 1, background: `rgba(115,103,240,${0.3 + (i * 0.07)})`, borderRadius: '4px 4px 0 0', height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 1 && (
        <div className="card" style={{ padding: 20 }}>
          {[['Module 1: Introduction', 3], ['Module 2: Offences Against Person', 4], ['Module 3: Property Offences', 3]].map(([name, count]) => (
            <div key={name as string} style={{ marginBottom: 16, borderBottom: '1px solid var(--border)', paddingBottom: 16 }}>
              <div style={{ fontWeight: 700, marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
                <span>{name as string}</span><span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{count as number} lessons</span>
              </div>
              {Array.from({ length: count as number }).map((_, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', fontSize: 13, color: 'var(--text-muted)' }}>
                  <span>{'🎥📄📝📋🔴'[i % 5]}</span>
                  <span style={{ flex: 1 }}>Lesson {i + 1}: [Title here]</span>
                  <span className="badge badge-success" style={{ fontSize: 11 }}>Published</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {tab === 2 && (
        <div className="card" style={{ overflow: 'hidden' }}>
          <table>
            <thead><tr><th>Student</th><th>Enrolled</th><th>Progress</th><th>Last Active</th><th>Quiz Avg</th></tr></thead>
            <tbody>
              {[['Arjun Mehta', 'Mar 1', 68, 'Today', '82%'],['Sunita Kapoor', 'Feb 15', 92, 'Yesterday', '91%'],['Vikram Joshi', 'Feb 20', 45, 'Mar 25', '64%'],['Deepa Nair', 'Mar 5', 30, 'Mar 27', '71%'],['Rahul Sharma', 'Jan 20', 100, 'Mar 28', '88%']].map(([name, date, pct, active, quiz]) => (
                <tr key={name as string}>
                  <td style={{ fontWeight: 600 }}>{name as string}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{date as string}</td>
                  <td><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><div className="progress-bar" style={{ width: 80 }}><div className="progress-fill" style={{ width: `${pct}%` }} /></div><span style={{ fontSize: 12 }}>{pct}%</span></div></td>
                  <td style={{ color: 'var(--text-muted)' }}>{active as string}</td>
                  <td style={{ fontWeight: 600 }}>{quiz as string}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 3 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 14 }}>Most Rewatched Lessons</div>
            {[['Sec 302 & Murder — Part 1', 47],['Fundamental Rights Overview', 38],['IPC Introduction', 29],['Bail Applications — Live', 24]].map(([n, c]) => (
              <div key={n as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
                <span>{n as string}</span><span style={{ fontWeight: 700, color: 'var(--primary)' }}>{c as number} views</span>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 14 }}>Avg Time Spent per Lesson</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 130 }}>
              {[65, 82, 48, 91, 55, 70, 60, 44, 78].map((h, i) => (
                <div key={i} style={{ flex: 1, background: 'var(--primary-light)', borderRadius: '3px 3px 0 0', height: `${h}%`, border: '1px solid var(--primary)', borderBottom: 'none', opacity: 0.8 }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 4 && (
        <div className="card" style={{ padding: 24, maxWidth: 640 }}>
          <h3 style={{ fontWeight: 700, marginBottom: 18 }}>Course Settings</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div><label className="form-label">Price (₹)</label><input className="form-input" defaultValue={4999} /></div>
            <div><label className="form-label">Assign Tutor</label><select className="form-input"><option>Anil Kumar</option><option>Priya Nair</option><option>Admin Direct</option></select></div>
          </div>
          <div><label className="form-label">Certificate Template</label><select className="form-input"><option>LexEd Standard Certificate</option><option>Gold Certificate</option><option>Custom Template</option></select></div>
          <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
            <button className="btn-primary">Save Settings</button>
            <button className="btn-outline" style={{ color: 'var(--warning)', borderColor: 'var(--warning)' }}>Unpublish Course</button>
            <button style={{ background: '#fde8e8', border: '1px solid var(--error)', color: 'var(--error)', borderRadius: 8, padding: '8px 16px', cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>Archive Course</button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
