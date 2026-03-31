'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

const txns = [
  { student: 'Arjun Mehta',   course: 'Criminal Law Fundamentals', amount: '₹4,499', method: 'UPI',        date: 'Mar 28', status: 'Paid' },
  { student: 'Sunita Kapoor', course: 'Constitutional Law',         amount: '₹2,999', method: 'Card',       date: 'Mar 26', status: 'Paid' },
  { student: 'Vikram Joshi',  course: 'CLAT 2025',                 amount: '₹3,499', method: 'Net Banking', date: 'Mar 25', status: 'Pending' },
  { student: 'Deepa Nair',    course: 'Criminal Law Fundamentals', amount: '₹4,499', method: 'UPI',        date: 'Mar 22', status: 'Paid' },
  { student: 'Karan Singh',   course: 'Evidence Act',              amount: '₹1,999', method: 'Wallet',     date: 'Mar 20', status: 'Failed' },
  { student: 'Pooja Verma',   course: 'Constitutional Law',         amount: '₹2,999', method: 'Card',       date: 'Mar 18', status: 'Refunded' },
];

const statusBadge: Record<string, string>  = { Paid: 'bg-label-success', Pending: 'bg-label-warning', Failed: 'bg-label-danger', Refunded: 'bg-label-secondary' };
const methodBadge: Record<string, string>  = { UPI: 'bg-label-success', Card: 'bg-label-primary', 'Net Banking': 'bg-label-info', Wallet: 'bg-label-warning' };

const statsData = [
  { icon: 'tabler-currency-rupee', bg: 'bg-label-success', val: '₹18.4L', label: 'All Time Revenue' },
  { icon: 'tabler-trending-up',    bg: 'bg-label-primary', val: '₹2.84L', label: 'This Month' },
  { icon: 'tabler-clock',          bg: 'bg-label-warning', val: '₹42k',   label: 'Pending' },
  { icon: 'tabler-corner-down-left',bg: 'bg-label-danger', val: '₹12k',   label: 'Refunds Issued' },
];

export default function RevenuePage() {
  return (
    <AdminLayout title="Revenue" breadcrumb="Home / Revenue">

      {/* Stat cards */}
      <div className="row g-4 mb-4">
        {statsData.map(s => (
          <div key={s.label} className="col-xl-3 col-md-6">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center gap-4">
                <div className={`avatar avatar-lg ${s.bg} rounded`}>
                  <span className="avatar-initial rounded">
                    <i className={`ti ${s.icon} icon-26px`}></i>
                  </span>
                </div>
                <div>
                  <h4 className="fw-bold mb-0">{s.val}</h4>
                  <small className="text-body-secondary">{s.label}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        {/* Transactions table */}
        <div className="col-xl-8">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h6 className="fw-bold mb-0">Transactions</h6>
              <div className="d-flex gap-2">
                <select className="form-select form-select-sm" style={{ width: 'auto' }}><option>All Status</option></select>
                <input type="date" className="form-control form-control-sm" />
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ti tabler-download me-1"></i>Export CSV
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr><th>Student</th><th>Course</th><th>Amount</th><th>Method</th><th>Date</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {txns.map((t, i) => (
                    <tr key={i}>
                      <td className="fw-semibold">{t.student}</td>
                      <td className="text-body-secondary">{t.course}</td>
                      <td className="fw-bold">{t.amount}</td>
                      <td><span className={`badge ${methodBadge[t.method]}`}>{t.method}</span></td>
                      <td className="text-body-secondary">{t.date}</td>
                      <td><span className={`badge ${statusBadge[t.status]}`}>{t.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-xl-4">
          <div className="card mb-4">
            <div className="card-body">
              <h6 className="fw-bold mb-4">Revenue by Course</h6>
              {[['Criminal Law Fundamentals','₹68,400',82],['Constitutional Law','₹43,600',58],['CLAT 2025 Preparation','₹52,200',70],['Evidence Act Deep Dive','₹24,800',35],['Contract Law Basics','₹12,100',20]].map(([name, rev, pct]) => (
                <div key={name as string} className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <small>{name as string}</small>
                    <small className="fw-bold">{rev as string}</small>
                  </div>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-primary" style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h6 className="fw-bold mb-2">Payout Summary</h6>
              <h2 className="fw-bold text-success mb-1">₹2,14,800</h2>
              <small className="text-body-secondary d-block mb-4">Available balance (after 10% platform fee)</small>
              <button className="btn btn-primary w-100 mb-2">Request Payout to Bank</button>
              <small className="text-body-secondary d-block text-center">Payouts processed within 3–5 business days</small>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
