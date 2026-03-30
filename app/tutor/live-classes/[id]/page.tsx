'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

const attendance = [
  { name: 'Arjun Mehta', joined: '10:02 AM', present: true },
  { name: 'Sunita Kapoor', joined: '10:00 AM', present: true },
  { name: 'Vikram Joshi', joined: '10:08 AM', present: true },
  { name: 'Deepa Nair', joined: '—', present: false },
  { name: 'Rahul Sharma', joined: '10:01 AM', present: true },
  { name: 'Pooja Verma', joined: '10:05 AM', present: true },
  { name: 'Karan Singh', joined: '—', present: false },
  { name: 'Meera Iyer', joined: '10:03 AM', present: true },
];

export default function LiveClassRoomPage() {
  return (
    <TutorLayout active="/tutor/live-classes/schedule" title="Live Class" breadcrumb="Home / Live Classes / Section 302 — Case Studies">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Class Details */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>📋 Class Details</div>
            {[['Topic', 'Section 302 & Murder — Case Studies'], ['Course', 'Criminal Law Fundamentals'], ['Module', 'Module 2: Offences Against Person'], ['Scheduled Time', 'April 1, 2025 at 10:00 AM'], ['Duration', '90 minutes']].map(([k, v]) => (
              <div key={k as string} style={{ display: 'flex', gap: 12, padding: '7px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', width: 140, flexShrink: 0 }}>{k as string}</span>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{v as string}</span>
              </div>
            ))}
          </div>

          {/* Live Status Banner */}
          <div style={{ background: 'linear-gradient(135deg, #EA545510, #EA545520)', border: '2px solid var(--error)', borderRadius: 12, padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--error)', animation: 'pulse 1.5s infinite' }} />
              <span style={{ color: 'var(--error)', fontWeight: 800, fontSize: 18 }}>Class is Live Now</span>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-primary)' }}>34</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Students joined</div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn-primary" style={{ padding: '10px 24px', fontSize: 15, background: 'var(--success)', display: 'flex', alignItems: 'center', gap: 8 }}>📹 Start Class Room</button>
              <button className="btn-outline" style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>🔗 Share Join Link</button>
              <button style={{ background: '#fde8e8', border: '1px solid var(--error)', color: 'var(--error)', borderRadius: 8, padding: '10px 20px', cursor: 'pointer', fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>⏹️ End Class</button>
            </div>
          </div>

          {/* Attendance */}
          <div className="card" style={{ overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>👥 Attendance Sheet <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 400 }}>({attendance.filter(a => a.present).length}/{attendance.length} present)</span></div>
              <button className="btn-primary" style={{ fontSize: 12, padding: '6px 14px' }}>💾 Save Attendance</button>
            </div>
            <table>
              <thead><tr><th>Student</th><th>Joined At</th><th>Present</th></tr></thead>
              <tbody>
                {attendance.map((a, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{a.name}</td>
                    <td style={{ color: a.joined === '—' ? 'var(--text-muted)' : 'var(--text-primary)', fontSize: 13 }}>{a.joined}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div className={`toggle ${a.present ? '' : 'off'}`} />
                        <span style={{ fontSize: 12, color: a.present ? 'var(--success)' : 'var(--text-muted)' }}>{a.present ? 'Present' : 'Absent'}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>⏱️ Class Timer</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 40, fontWeight: 800, color: 'var(--primary)', letterSpacing: 2 }}>01:14:32</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Running / 90 min scheduled</div>
              <div className="progress-bar" style={{ marginTop: 10 }}>
                <div className="progress-fill" style={{ width: '49%' }} />
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>📊 Live Stats</div>
            {[['Currently Watching', '34'], ['Total Enrolled', '342'], ['Chat Messages', '18'], ['Raised Hands', '3']].map(([k, v]) => (
              <div key={k as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>{k as string}</span>
                <span style={{ fontWeight: 700 }}>{v as string}</span>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>⚡ Quick Actions</div>
            {[['📋', 'Post Quiz Now'], ['📢', 'Send Announcement'], ['📁', 'Share Resource']].map(([icon, label]) => (
              <button key={label as string} className="btn-outline" style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 13 }}>
                {icon as string} {label as string}
              </button>
            ))}
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}
