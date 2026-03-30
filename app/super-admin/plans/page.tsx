'use client';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

const plans = [
  {
    name: 'Starter', price: '₹1,999', annual: '₹19,990', color: '#00CFE8', bg: '#e0f9fc',
    limits: [['Max Students', '200'], ['Max Courses', '10'], ['Max Tutors', '3'], ['AI Tokens/mo', '10,000'], ['Storage', '10 GB']],
    features: [['Live Classes', false], ['Practice Lab', false], ['Custom Branding', false], ['API Access', false]],
    institutes: 98,
  },
  {
    name: 'Growth', price: '₹4,999', annual: '₹49,990', color: '#7367F0', bg: 'var(--primary-light)',
    limits: [['Max Students', '1,000'], ['Max Courses', '50'], ['Max Tutors', '15'], ['AI Tokens/mo', '50,000'], ['Storage', '50 GB']],
    features: [['Live Classes', true], ['Practice Lab', true], ['Custom Branding', false], ['API Access', false]],
    institutes: 102, popular: true,
  },
  {
    name: 'Pro', price: '₹12,999', annual: '₹1,29,990', color: '#28C76F', bg: '#e8faf0',
    limits: [['Max Students', 'Unlimited'], ['Max Courses', 'Unlimited'], ['Max Tutors', 'Unlimited'], ['AI Tokens/mo', '2,00,000'], ['Storage', '200 GB']],
    features: [['Live Classes', true], ['Practice Lab', true], ['Custom Branding', true], ['API Access', true]],
    institutes: 48,
  },
];

export default function PlansPage() {
  return (
    <SuperAdminLayout active="/super-admin/plans" title="Plans & Pricing" breadcrumb="Home / Plans & Pricing">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Manage subscription plans available to institutes on the LexEd platform.</p>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>＋ Create New Plan</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {plans.map(plan => (
          <div key={plan.name} className="card" style={{ padding: 0, overflow: 'hidden', position: 'relative', border: plan.popular ? `2px solid ${plan.color}` : '1px solid var(--border)' }}>
            {plan.popular && (
              <div style={{ position: 'absolute', top: 16, right: 16, background: plan.color, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>MOST POPULAR</div>
            )}
            <div style={{ padding: 24, background: plan.bg, borderBottom: '1px solid var(--border)' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: plan.color, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{plan.name}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 2 }}>{plan.price}<span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-muted)' }}>/month</span></div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{plan.annual}/year (save 17%)</div>
              <div style={{ marginTop: 12, fontSize: 12, color: plan.color, fontWeight: 600 }}>🏛️ {plan.institutes} active institutes</div>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>Limits</div>
              {plan.limits.map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{k}</span>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{v}</span>
                </div>
              ))}
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', margin: '16px 0 10px', textTransform: 'uppercase', letterSpacing: 0.5 }}>Features</div>
              {plan.features.map(([k, v]) => (
                <div key={k as string} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{k as string}</span>
                  <span style={{ fontSize: 16 }}>{v ? '✅' : '❌'}</span>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <button className="btn-primary" style={{ flex: 1, background: plan.color }}>Edit Plan</button>
                <button style={{ background: '#fde8e8', border: 'none', color: 'var(--error)', borderRadius: 8, padding: '8px 14px', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>Archive</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SuperAdminLayout>
  );
}
