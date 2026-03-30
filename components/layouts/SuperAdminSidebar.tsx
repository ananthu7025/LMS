'use client';

const navItems = [
  { href: '/super-admin/dashboard', icon: '📊', label: 'Dashboard' },
  { href: '/super-admin/institutes', icon: '🏛️', label: 'Institutes' },
  { href: '/super-admin/plans', icon: '💎', label: 'Plans & Pricing' },
  { href: '/super-admin/billing', icon: '💳', label: 'Billing' },
  { href: '/super-admin/settings', icon: '⚙️', label: 'Settings' },
];

export default function SuperAdminSidebar({ active }: { active?: string }) {
  return (
    <div style={{
      width: 260, minHeight: '100vh', background: 'var(--sidebar-bg)',
      display: 'flex', flexDirection: 'column', padding: '20px 16px',
      position: 'fixed', top: 0, left: 0, zIndex: 100
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 6px 28px' }}>
        <span style={{ fontSize: 22 }}>⚖️</span>
        <span style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>LexEd</span>
        <span style={{ fontSize: 10, background: 'rgba(255,255,255,0.15)', color: '#fff', borderRadius: 4, padding: '2px 6px', marginLeft: 2, fontWeight: 600 }}>ADMIN</span>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: 1, marginBottom: 8, paddingLeft: 6 }}>PLATFORM</div>
        {navItems.map(item => (
          <a key={item.href} href={item.href} className={`sidebar-link${active === item.href ? ' active' : ''}`}>
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      {/* User */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14 }}>SA</div>
        <div>
          <div style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Super Admin</div>
          <div style={{ color: 'var(--sidebar-text)', fontSize: 12 }}>superadmin@lexed.in</div>
        </div>
        <a href="/login" style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.4)', fontSize: 16, cursor: 'pointer' }} title="Logout">🚪</a>
      </div>
    </div>
  );
}
