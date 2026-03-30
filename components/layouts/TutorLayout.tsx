'use client';
import TutorSidebar from './TutorSidebar';

export default function TutorLayout({ children, active, title, breadcrumb }: { children: React.ReactNode; active?: string; title?: string; breadcrumb?: string; }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--page-bg)' }}>
      <TutorSidebar active={active} />
      <div style={{ flex: 1, marginLeft: 260, display: 'flex', flexDirection: 'column' }}>
        <header style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 50 }}>
          <div>
            {title && <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>{title}</h1>}
            {breadcrumb && <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{breadcrumb}</div>}
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, position: 'relative' }}>🔔<span style={{ position: 'absolute', top: -2, right: -2, width: 8, height: 8, background: 'var(--error)', borderRadius: '50%' }} /></button>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#00CFE8', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>AK</div>
          </div>
        </header>
        <main style={{ flex: 1, padding: 28 }}>{children}</main>
      </div>
    </div>
  );
}
