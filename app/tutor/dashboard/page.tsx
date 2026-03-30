'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

export default function TutorDashboard() {
  return (
    <TutorLayout active="/tutor/dashboard" title="Dashboard" breadcrumb="Home / Dashboard">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
        <div>
          {/* My Courses */}
          <div className="card" style={{ padding: 20, marginBottom: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>📚 My Courses</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { title: 'Criminal Law Fundamentals', students: 342, completion: 68, next: 'Apr 1 @ 10 AM', color: '#7367F0' },
                { title: 'Constitutional Law Mastery', students: 218, completion: 54, next: 'Apr 2 @ 2 PM', color: '#00CFE8' },
              ].map(c => (
                <a key={c.title} href="/tutor/courses/1" style={{ textDecoration: 'none' }}>
                  <div style={{ border: '1px solid var(--border)', borderRadius: 10, padding: 16, cursor: 'pointer', transition: 'border-color 0.15s' }}>
                    <div style={{ height: 6, borderRadius: 4, background: `linear-gradient(90deg, ${c.color}, ${c.color}88)`, marginBottom: 12 }} />
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, lineHeight: 1.3 }}>{c.title}</div>
                    <div style={{ display: 'flex', gap: 12, fontSize: 12, color: 'var(--text-muted)', marginBottom: 10 }}>
                      <span>👥 {c.students} students</span>
                      <span>✅ {c.completion}% complete</span>
                    </div>
                    <div style={{ fontSize: 12, color: c.color, fontWeight: 600 }}>📹 Next: {c.next}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="card" style={{ padding: 20, marginBottom: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>📅 Today's Schedule</div>
            {[
              { time: '10:00 AM', topic: 'Section 302 & Murder — Case Studies', course: 'Criminal Law Fundamentals', students: 124 },
              { time: '05:30 PM', topic: 'CLAT Mock Test Discussion', course: 'Criminal Law Fundamentals', students: 89 },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: i === 0 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ textAlign: 'center', flexShrink: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--primary)' }}>{c.time}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Today</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5 }}>{c.topic}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{c.course} · {c.students} students joining</div>
                </div>
                <a href="/tutor/live-classes/1"><button className="btn-primary" style={{ fontSize: 12, padding: '6px 14px' }}>📹 Start</button></a>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>⚡ Recent Student Activity</div>
            {[
              ['✅', 'Arjun Mehta completed Lesson: Section 299 IPC', '8 min ago'],
              ['📋', 'Sunita Kapoor submitted Assignment 3: Bail Application', '42 min ago'],
              ['❓', 'Vikram Joshi asked a doubt in Evidence Act — Section 45', '1 hr ago'],
              ['📝', 'Deepa Nair attempted Quiz: Module 2 (scored 16/20)', '2 hrs ago'],
            ].map(([icon, text, time], i) => (
              <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ fontSize: 16 }}>{icon}</span>
                <div><div style={{ fontSize: 13 }}>{text}</div><div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{time}</div></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Pending items */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>⏰ Pending Items</div>
            <a href="/tutor/doubts">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, background: '#fff5e6', marginBottom: 10, cursor: 'pointer' }}>
                <span style={{ fontSize: 22 }}>❓</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--warning)', fontSize: 15 }}>3 Unanswered Doubts</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Oldest: 2 hours ago</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--warning)', fontWeight: 700 }}>→</span>
              </div>
            </a>
            <a href="/tutor/assignments">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, background: '#fde8e8', cursor: 'pointer' }}>
                <span style={{ fontSize: 22 }}>📋</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--error)', fontSize: 15 }}>5 Unreviewed Assignments</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Oldest submitted: yesterday</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--error)', fontWeight: 700 }}>→</span>
              </div>
            </a>
          </div>

          {/* Quick Actions */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>⚡ Quick Actions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                ['/tutor/content/upload-video', '🎥', 'Upload Video Lesson'],
                ['/tutor/live-classes/schedule', '📅', 'Schedule Live Class'],
                ['/tutor/doubts', '❓', 'View Student Doubts'],
                ['/tutor/content/create-quiz', '📝', 'Create a Quiz'],
              ].map(([href, icon, label]) => (
                <a key={href as string} href={href as string}>
                  <button className="btn-outline" style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                    <span>{icon as string}</span> {label as string}
                  </button>
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>📊 My Stats This Month</div>
            {[['Students Taught', '560'], ['Lessons Uploaded', '4'], ['Live Classes', '8'], ['Doubts Answered', '47'], ['Assignments Reviewed', '38']].map(([label, val]) => (
              <div key={label as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>{label as string}</span>
                <span style={{ fontWeight: 700 }}>{val as string}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}
