'use client';

const navItems = [
  { href: '/tutor/dashboard', icon: '📊', label: 'Dashboard' },
  { href: '/tutor/courses/1', icon: '📚', label: 'My Courses' },
  { href: '/tutor/content/upload-video', icon: '⬆️', label: 'Upload Content' },
  { href: '/tutor/live-classes/schedule', icon: '📹', label: 'Live Classes' },
  { href: '/tutor/doubts', icon: '❓', label: 'Student Doubts' },
  { href: '/tutor/assignments', icon: '📝', label: 'Assignments' },
  { href: '/tutor/students', icon: '📈', label: 'Student Progress' },
];

export default function TutorSidebar({ active }: { active?: string }) {
  return (
    <div style={{ width: 260, minHeight: '100vh', background: 'var(--sidebar-bg)', display: 'flex', flexDirection: 'column', padding: '20px 16px', position: 'fixed', top: 0, left: 0, zIndex: 100 }}>
      <div style={{ padding: '4px 6px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 22 }}>⚖️</span>
          <span style={{ fontSize: 17, fontWeight: 800, color: '#fff' }}>LexEd</span>
        </div>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 600, letterSpacing: 0.5, marginBottom: 6 }}>TUTOR PORTAL</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>Sharma Law Academy</div>
      </div>
      <nav style={{ flex: 1 }}>
        {navItems.map(item => (
          <a key={item.href} href={item.href} className={`sidebar-link${active === item.href ? ' active' : ''}`}>
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#00CFE8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13 }}>AK</div>
        <div>
          <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Anil Kumar</div>
          <div style={{ color: 'var(--sidebar-text)', fontSize: 11 }}>Criminal Law Tutor</div>
        </div>
        <a href="/tutor/login" style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.4)', fontSize: 16 }} title="Logout">🚪</a>
      </div>
    </div>
  );
}
