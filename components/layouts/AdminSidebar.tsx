'use client';

const navItems = [
  { href: '/admin/dashboard', icon: '📊', label: 'Dashboard' },
  { href: '/admin/courses', icon: '📚', label: 'Courses' },
  { href: '/admin/students', icon: '👥', label: 'Students' },
  { href: '/admin/tutors', icon: '👨‍🏫', label: 'Tutors' },
  { href: '/admin/live-classes', icon: '📹', label: 'Live Classes' },
  { href: '/admin/revenue', icon: '💰', label: 'Revenue' },
  { href: '/admin/coupons', icon: '🎟️', label: 'Coupons' },
  { href: '/admin/announcements', icon: '📢', label: 'Announcements' },
  { href: '/admin/reports', icon: '📈', label: 'Reports' },
];

export default function AdminSidebar({ active }: { active?: string }) {
  return (
    <div style={{
      width: 260, minHeight: '100vh', background: 'var(--sidebar-bg)',
      display: 'flex', flexDirection: 'column', padding: '20px 16px',
      position: 'fixed', top: 0, left: 0, zIndex: 100
    }}>
      <div style={{ padding: '4px 6px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ fontSize: 22 }}>⚖️</span>
          <span style={{ fontSize: 17, fontWeight: 800, color: '#fff' }}>LexEd</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#fff' }}>SL</div>
          <div>
            <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Sharma Law Academy</div>
            <div style={{ color: 'var(--sidebar-text)', fontSize: 11 }}>sharma-law.lexed.in</div>
          </div>
        </div>
      </div>
      <nav style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: 1, marginBottom: 8, paddingLeft: 6 }}>INSTITUTE</div>
        {navItems.map(item => (
          <a key={item.href} href={item.href} className={`sidebar-link${active === item.href ? ' active' : ''}`}>
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13 }}>RS</div>
        <div>
          <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Rajesh Sharma</div>
          <div style={{ color: 'var(--sidebar-text)', fontSize: 11 }}>rajesh@sharmalaw.in</div>
        </div>
        <a href="/login" style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.4)', fontSize: 16, cursor: 'pointer' }} title="Logout">🚪</a>
      </div>
    </div>
  );
}
