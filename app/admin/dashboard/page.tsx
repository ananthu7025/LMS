'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

const stats = [
  { icon: '👥', bg: '#ede9fd', label: 'Total Students', value: '1,247', sub: '+42 this week' },
  { icon: '📚', bg: '#e0f9fc', label: 'Active Courses', value: '12', sub: '3 in draft' },
  { icon: '💰', bg: '#e8faf0', label: 'Revenue This Month', value: '₹2.84L', sub: '↑ 18% vs last month' },
  { icon: '⏳', bg: '#fff5e6', label: 'Pending Enrollments', value: '23', sub: 'Awaiting confirmation' },
];

const schedule = [
  { time: '10:00 AM', course: 'Criminal Law Fundamentals', tutor: 'Anil Kumar', topic: 'Section 302 & 304 IPC' },
  { time: '02:00 PM', course: 'Constitutional Law', tutor: 'Admin (Direct)', topic: 'Fundamental Rights — Art. 21' },
  { time: '05:30 PM', course: 'CLAT Preparation', tutor: 'Priya Nair', topic: 'Mock Test Discussion' },
];

const activity = [
  { icon: '📝', text: 'Arjun Mehta enrolled in Criminal Law Fundamentals', time: '5 min ago' },
  { icon: '✅', text: 'Sunita Kapoor completed Lesson 8: Evidence Act', time: '22 min ago' },
  { icon: '📤', text: 'Vikram submitted Assignment 3: Bail Application Draft', time: '1 hr ago' },
  { icon: '❓', text: 'Deepa Nair asked a doubt in Constitutional Law — Art. 19', time: '2 hrs ago' },
  { icon: '🎓', text: 'Rahul Sharma completed Criminal Law Fundamentals course', time: '3 hrs ago' },
];

export default function AdminDashboard() {
  return (
    <AdminLayout active="/admin/dashboard" title="Dashboard" breadcrumb="Home / Dashboard">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 28 }}>
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div style={{ width: 52, height: 52, borderRadius: 12, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'var(--success)', marginTop: 2 }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Student Enrollments</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 14 }}>Last 6 months</div>
          <div style={{ height: 140, background: 'linear-gradient(180deg, rgba(115,103,240,0.1) 0%, transparent 100%)', borderRadius: 8, position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 300 140" preserveAspectRatio="none">
              <polyline points="0,120 60,100 120,80 180,70 240,50 300,30" fill="none" stroke="#7367F0" strokeWidth="2.5" />
              <polyline points="0,120 60,100 120,80 180,70 240,50 300,30 300,140 0,140" fill="rgba(115,103,240,0.08)" />
            </svg>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 6 }}>
            {['Oct','Nov','Dec','Jan','Feb','Mar'].map(m => <span key={m} style={{ fontSize: 11, color: 'var(--text-muted)' }}>{m}</span>)}
          </div>
        </div>
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Revenue by Course</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 14 }}>Top 5 courses</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['Criminal Law Fundamentals', 82], ['Constitutional Law', 68], ['CLAT Preparation', 55], ['Evidence Act Deep Dive', 40], ['Contract Law Basics', 28]].map(([name, pct]) => (
              <div key={name as string}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12 }}>{name as string}</span>
                  <span style={{ fontSize: 12, fontWeight: 600 }}>{pct as number}%</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Today's schedule */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>📅 Today's Schedule</div>
            {schedule.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: i < schedule.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: 56, textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--primary)' }}>{s.time}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600 }}>{s.topic}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.course} · {s.tutor}</div>
                </div>
                <button className="btn-primary" style={{ padding: '6px 14px', fontSize: 12 }}>Join 📹</button>
              </div>
            ))}
          </div>
          {/* Activity */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>⚡ Recent Activity</div>
            {activity.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: i < activity.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ fontSize: 16 }}>{a.icon}</span>
                <div>
                  <div style={{ fontSize: 13 }}>{a.text}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="card" style={{ padding: 20, height: 'fit-content' }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>⚡ Quick Actions</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { href: '/admin/courses/create', icon: '📚', label: 'Create New Course' },
              { href: '/admin/students', icon: '👤', label: 'Add Student Manually' },
              { href: '/admin/live-classes/schedule', icon: '📹', label: 'Schedule Live Class' },
              { href: '/admin/announcements', icon: '📢', label: 'Send Announcement' },
            ].map(a => (
              <a key={a.href} href={a.href}>
                <button className="btn-outline" style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>{a.icon}</span> {a.label}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
