'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

const txns = [
  { student: 'Arjun Mehta', course: 'Criminal Law Fundamentals', amount: '₹4,499', method: 'UPI', date: 'Mar 28', status: 'Paid' },
  { student: 'Sunita Kapoor', course: 'Constitutional Law', amount: '₹2,999', method: 'Card', date: 'Mar 26', status: 'Paid' },
  { student: 'Vikram Joshi', course: 'CLAT 2025', amount: '₹3,499', method: 'Net Banking', date: 'Mar 25', status: 'Pending' },
  { student: 'Deepa Nair', course: 'Criminal Law Fundamentals', amount: '₹4,499', method: 'UPI', date: 'Mar 22', status: 'Paid' },
  { student: 'Karan Singh', course: 'Evidence Act', amount: '₹1,999', method: 'Wallet', date: 'Mar 20', status: 'Failed' },
  { student: 'Pooja Verma', course: 'Constitutional Law', amount: '₹2,999', method: 'Card', date: 'Mar 18', status: 'Refunded' },
];

const statusStyle: Record<string, string> = { Paid: 'badge-success', Pending: 'badge-warning', Failed: 'badge-error', Refunded: 'badge-secondary' };
const methodStyle: Record<string, string> = { UPI: 'badge-success', Card: 'badge-primary', 'Net Banking': 'badge-info', Wallet: 'badge-warning' };

export default function RevenuePage() {
  return (
    <AdminLayout active="/admin/revenue" title="Revenue" breadcrumb="Home / Revenue">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 28 }}>
        {[['💰','#e8faf0','₹18.4L','All Time Revenue'],['📈','#ede9fd','₹2.84L','This Month'],['⏳','#fff5e6','₹42k','Pending'],['↩️','#fde8e8','₹12k','Refunds Issued']].map(([icon, bg, val, label]) => (
          <div key={label as string} className="stat-card">
            <div style={{ width: 52, height: 52, borderRadius: 12, background: bg as string, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{icon as string}</div>
            <div><div style={{ fontSize: 22, fontWeight: 700 }}>{val as string}</div><div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{label as string}</div></div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Transactions</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <select className="form-input" style={{ fontSize: 12, padding: '5px 10px' }}><option>All Status</option></select>
              <input type="date" className="form-input" style={{ fontSize: 12, padding: '5px 10px' }} />
              <button className="btn-outline" style={{ fontSize: 12, padding: '5px 12px' }}>📥 Export CSV</button>
            </div>
          </div>
          <table>
            <thead><tr><th>Student</th><th>Course</th><th>Amount</th><th>Method</th><th>Date</th><th>Status</th></tr></thead>
            <tbody>
              {txns.map((t, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600, fontSize: 13.5 }}>{t.student}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 13 }}>{t.course}</td>
                  <td style={{ fontWeight: 700 }}>{t.amount}</td>
                  <td><span className={`badge ${methodStyle[t.method]}`}>{t.method}</span></td>
                  <td style={{ color: 'var(--text-muted)' }}>{t.date}</td>
                  <td><span className={`badge ${statusStyle[t.status]}`}>{t.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>📊 Revenue by Course</div>
            {[['Criminal Law Fundamentals', 82, '₹68,400'],['Constitutional Law', 58, '₹43,600'],['CLAT 2025 Preparation', 70, '₹52,200'],['Evidence Act Deep Dive', 35, '₹24,800'],['Contract Law Basics', 20, '₹12,100']].map(([name, pct, rev]) => (
              <div key={name as string} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12 }}>{name as string}</span>
                  <span style={{ fontSize: 12, fontWeight: 700 }}>{rev as string}</span>
                </div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
              </div>
            ))}
          </div>

          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>💵 Payout Summary</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--success)', marginBottom: 4 }}>₹2,14,800</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 16 }}>Available balance (after 10% platform fee)</div>
            <button className="btn-primary" style={{ width: '100%' }}>Request Payout to Bank</button>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 10, textAlign: 'center' }}>Payouts processed within 3–5 business days</div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
