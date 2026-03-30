'use client';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

const txns = [
  { institute: 'Sharma Law Academy', plan: 'Pro', amount: '₹12,999', date: 'Mar 25, 2025', status: 'Paid' },
  { institute: 'Constitutional Law Hub', plan: 'Pro', amount: '₹12,999', date: 'Mar 22, 2025', status: 'Paid' },
  { institute: 'Delhi Bar Coaching', plan: 'Growth', amount: '₹4,999', date: 'Mar 20, 2025', status: 'Paid' },
  { institute: 'Juris Academy', plan: 'Growth', amount: '₹4,999', date: 'Mar 18, 2025', status: 'Pending' },
  { institute: 'LawEdge Institute', plan: 'Starter', amount: '₹1,999', date: 'Mar 15, 2025', status: 'Paid' },
  { institute: 'TestPrep Legal', plan: 'Starter', amount: '₹1,999', date: 'Mar 10, 2025', status: 'Failed' },
  { institute: 'CLAT Prep Studio', plan: 'Starter', amount: '₹1,999', date: 'Mar 8, 2025', status: 'Refunded' },
];

const renewals = [
  { institute: 'Sharma Law Academy', plan: 'Pro', amount: '₹12,999', due: 'Apr 1 (2 days)' },
  { institute: 'Juris Academy', plan: 'Growth', amount: '₹4,999', due: 'Apr 3 (4 days)' },
  { institute: 'CLAT Prep Studio', plan: 'Starter', amount: '₹1,999', due: 'Apr 5 (6 days)' },
];

const statusStyle: Record<string, string> = { Paid: 'badge-success', Pending: 'badge-warning', Failed: 'badge-error', Refunded: 'badge-secondary' };

export default function BillingPage() {
  return (
    <SuperAdminLayout active="/super-admin/billing" title="Billing Overview" breadcrumb="Home / Billing">
      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 28 }}>
        {[
          { icon: '💰', bg: '#e8faf0', label: 'Total Revenue Collected', value: '₹48,60,400', sub: 'All time (248 institutes)' },
          { icon: '⏳', bg: '#fff5e6', label: 'Pending Payments', value: '₹3,18,200', sub: '17 invoices outstanding' },
          { icon: '❌', bg: '#fde8e8', label: 'Failed This Month', value: '₹89,400', sub: '4 failed transactions' },
        ].map(s => (
          <div key={s.label} className="stat-card">
            <div style={{ width: 52, height: 52, borderRadius: 12, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 1 }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
        {/* Transactions */}
        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Transactions</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <select className="form-input" style={{ padding: '6px 10px', fontSize: 12 }}><option>All Status</option><option>Paid</option><option>Pending</option><option>Failed</option><option>Refunded</option></select>
              <input type="date" className="form-input" style={{ padding: '6px 10px', fontSize: 12 }} />
              <button className="btn-outline" style={{ fontSize: 12, padding: '6px 12px' }}>📥 Export</button>
            </div>
          </div>
          <table>
            <thead><tr><th>Institute</th><th>Plan</th><th>Amount</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {txns.map(t => (
                <tr key={t.institute + t.date}>
                  <td style={{ fontWeight: 600, fontSize: 13.5 }}>{t.institute}</td>
                  <td><span className="badge badge-primary">{t.plan}</span></td>
                  <td style={{ fontWeight: 700 }}>{t.amount}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{t.date}</td>
                  <td><span className={`badge ${statusStyle[t.status]}`}>{t.status}</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn-outline" style={{ fontSize: 11, padding: '4px 10px' }}>📄 Invoice</button>
                      {t.status === 'Failed' && <button style={{ background: '#e8faf0', border: 'none', color: 'var(--success)', borderRadius: 6, padding: '4px 10px', fontSize: 11, cursor: 'pointer', fontWeight: 600 }}>Retry</button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Renewals */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>📅 Upcoming Renewals (7 days)</div>
            {renewals.map(r => (
              <div key={r.institute} style={{ padding: '10px 0', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{r.institute}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r.plan} — {r.amount}</div>
                </div>
                <span className="badge badge-warning">{r.due}</span>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>⚡ Failed Payment Actions</div>
            {['TestPrep Legal', 'Moot Court Hub'].map(name => (
              <div key={name} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid var(--border)' }}>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{name}</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <button style={{ background: '#e8faf0', border: 'none', color: 'var(--success)', borderRadius: 6, padding: '5px 10px', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>↩ Retry</button>
                  <button style={{ background: '#e0f9fc', border: 'none', color: 'var(--info)', borderRadius: 6, padding: '5px 10px', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>📧 Notify</button>
                  <button style={{ background: '#fff5e6', border: 'none', color: 'var(--warning)', borderRadius: 6, padding: '5px 10px', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>⏱️ Grace +7d</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
}
