'use client';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

export default function InstituteDetailPage() {
  return (
    <SuperAdminLayout active="/super-admin/institutes" title="Institute Detail" breadcrumb="Home / Institutes / Sharma Law Academy">
      {/* Profile + Actions header */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 24 }}>
        {/* Profile Card */}
        <div className="card" style={{ flex: 1, padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
            <div style={{ width: 72, height: 72, borderRadius: 14, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>🏛️</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <h2 style={{ fontSize: 20, fontWeight: 700 }}>Sharma Law Academy</h2>
                <span className="badge badge-success">Active</span>
                <span className="badge badge-primary">Pro</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>🔗 sharma-law.lexed.in</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[
                  ['👤 Owner', 'Rajesh Sharma'],
                  ['📧 Email', 'rajesh@sharmalaw.in'],
                  ['📱 Phone', '+91 98765 43210'],
                  ['📍 Address', 'B-42, Connaught Place, New Delhi'],
                  ['📅 Onboarded', 'January 12, 2024'],
                  ['🏷️ Type', 'Coaching Centre'],
                ].map(([k, v]) => (
                  <div key={k as string}>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{k as string}</span>
                    <div style={{ fontSize: 13.5, fontWeight: 500, marginTop: 2 }}>{v as string}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ width: 220, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>✏️ Edit Profile</button>
          <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>⬆️ Upgrade Plan</button>
          <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>🔑 Reset Password</button>
          <button style={{ background: '#fff5e6', border: '1px solid #FF9F43', color: 'var(--warning)', borderRadius: 8, padding: '9px 16px', cursor: 'pointer', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>⏸️ Suspend Institute</button>
          <button style={{ background: '#fde8e8', border: '1px solid #EA5455', color: 'var(--error)', borderRadius: 8, padding: '9px 16px', cursor: 'pointer', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>🗑️ Delete Institute</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginBottom: 20 }}>
        {/* Plan & Billing */}
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>💳 Plan & Billing</div>
          {[
            ['Current Plan', 'Pro (₹12,999/mo)'],
            ['Renewal Date', 'April 12, 2025'],
            ['Amount Paid', '₹1,55,988 (lifetime)'],
            ['Payment Method', 'Razorpay — HDFC ****4521'],
          ].map(([k, v]) => (
            <div key={k as string} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{k as string}</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{v as string}</span>
            </div>
          ))}
        </div>

        {/* Usage Stats */}
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>📊 Usage Stats</div>
          {[
            ['Students', 892, 1000, '#7367F0'],
            ['Tutors', 14, 50, '#00CFE8'],
            ['Courses', 23, 100, '#28C76F'],
            ['Storage', 28, 100, '#FF9F43'],
            ['AI Tokens', 68000, 100000, '#EA5455'],
          ].map(([label, used, max, color]) => (
            <div key={label as string} style={{ marginBottom: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{label as string}</span>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{(used as number).toLocaleString()} / {(max as number).toLocaleString()}{label === 'Storage' ? ' GB' : ''}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${Math.round((used as number / (max as number)) * 100)}%`, background: color as string }} />
              </div>
            </div>
          ))}
        </div>

        {/* Revenue */}
        <div className="card" style={{ padding: 20 }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>💰 Revenue</div>
          {[
            ['This Month', '₹94,200'],
            ['All Time', '₹18,84,000'],
            ['Platform Fee (10%)', '₹1,88,400'],
            ['Net to Institute', '₹16,95,600'],
          ].map(([k, v]) => (
            <div key={k as string} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{k as string}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{v as string}</span>
            </div>
          ))}
        </div>
      </div>
    </SuperAdminLayout>
  );
}
