'use client';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

const stats = [
  { icon: '🏛️', color: '#ede9fd', label: 'Total Institutes', value: '248', sub: '+12 this month', trend: '↑' },
  { icon: '👥', color: '#e0f9fc', label: 'Active Students', value: '18,452', sub: '+843 this week', trend: '↑' },
  { icon: '💰', color: '#e8faf0', label: 'Platform Revenue', value: '₹12.4L', sub: 'This month', trend: '↑' },
  { icon: '⏳', color: '#fff5e6', label: 'Pending Approvals', value: '7', sub: 'Awaiting review', trend: '!' },
];

const activity = [
  { time: '2 min ago', icon: '🏛️', text: 'New institute signed up: Krishna Law Academy', color: 'var(--primary)' },
  { time: '18 min ago', icon: '⬆️', text: 'Sharma Law Academy upgraded to Pro plan', color: 'var(--success)' },
  { time: '1 hr ago', icon: '❌', text: 'Payment failed for Delhi Bar Coaching (₹8,499)', color: 'var(--error)' },
  { time: '3 hrs ago', icon: '✅', text: 'LawEdge Institute activated — onboarding complete', color: 'var(--success)' },
  { time: '5 hrs ago', icon: '⏸️', text: 'TestPrep Legal suspended — payment overdue (45 days)', color: 'var(--warning)' },
];

export default function SuperAdminDashboard() {
  return (
    <SuperAdminLayout active="/super-admin/dashboard" title="Dashboard" breadcrumb="Home / Dashboard">
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 28 }}>
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div style={{ width: 52, height: 52, borderRadius: 12, background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'var(--success)', marginTop: 2 }}>{s.trend} {s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
        <div className="card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Institute Signups</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Last 12 months</div>
            </div>
            <select style={{ border: '1px solid var(--border)', borderRadius: 6, padding: '4px 10px', fontSize: 12, color: 'var(--text-muted)' }}><option>2025</option></select>
          </div>
          {/* Chart placeholder */}
          <div style={{ height: 180, background: 'linear-gradient(180deg, rgba(115,103,240,0.1) 0%, rgba(115,103,240,0.02) 100%)', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
            <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="none">
              <polyline points="0,160 33,140 66,120 100,100 133,90 166,70 200,75 233,55 266,45 300,35 333,40 400,20" fill="none" stroke="#7367F0" strokeWidth="2.5" />
              <polyline points="0,160 33,140 66,120 100,100 133,90 166,70 200,75 233,55 266,45 300,35 333,40 400,20 400,180 0,180" fill="rgba(115,103,240,0.1)" />
            </svg>
            <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, display: 'flex', justifyContent: 'space-around' }}>
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                <span key={m} style={{ fontSize: 10, color: 'var(--text-muted)' }}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Monthly Revenue</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Platform earnings (₹)</div>
            </div>
            <select style={{ border: '1px solid var(--border)', borderRadius: 6, padding: '4px 10px', fontSize: 12, color: 'var(--text-muted)' }}><option>2025</option></select>
          </div>
          <div style={{ height: 180, display: 'flex', alignItems: 'flex-end', gap: 6, padding: '0 8px' }}>
            {[65, 72, 80, 68, 90, 95, 88, 100, 85, 92, 78, 110].map((h, i) => (
              <div key={i} style={{ flex: 1, background: i === 11 ? 'var(--primary)' : 'var(--primary-light)', borderRadius: '4px 4px 0 0', height: `${h}%`, transition: 'background 0.2s' }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 4 }}>
            {['J','F','M','A','M','J','J','A','S','O','N','D'].map(m => (
              <span key={m} style={{ fontSize: 10, color: 'var(--text-muted)' }}>{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Activity + Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
        {/* Activity Feed */}
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 16 }}>Live Activity Feed</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {activity.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '12px 0', borderBottom: i < activity.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${a.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>{a.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, color: 'var(--text-primary)', lineHeight: 1.4 }}>{a.text}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Quick Actions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="/super-admin/institutes/approve">
                <button className="btn-primary" style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>✅</span> Approve Pending (7)
                </button>
              </a>
              <a href="/super-admin/billing">
                <button className="btn-outline" style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>❌</span> View Failed Payments
                </button>
              </a>
              <a href="/super-admin/settings">
                <button className="btn-outline" style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>⚙️</span> Platform Settings
                </button>
              </a>
            </div>
          </div>

          {/* Plan Distribution */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>Plan Distribution</div>
            {[['Starter', 98, '#7367F0', '39.5%'], ['Growth', 102, '#00CFE8', '41.1%'], ['Pro', 48, '#28C76F', '19.4%']].map(([name, count, color, pct]) => (
              <div key={name as string} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{name as string}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{count as number} ({pct as string})</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: pct as string, background: color as string }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
}
