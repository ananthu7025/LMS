'use client';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

// ── Data ──────────────────────────────────────────────────────────────────────

const txns = [
  { id: 'TXN-2031', institute: 'Sharma Law Academy',     plan: 'Pro',     amount: '₹12,999', date: 'Mar 25, 2025', status: 'Paid'     },
  { id: 'TXN-2030', institute: 'Constitutional Law Hub', plan: 'Pro',     amount: '₹12,999', date: 'Mar 22, 2025', status: 'Paid'     },
  { id: 'TXN-2029', institute: 'Delhi Bar Coaching',     plan: 'Growth',  amount: '₹4,999',  date: 'Mar 20, 2025', status: 'Paid'     },
  { id: 'TXN-2028', institute: 'Juris Academy',          plan: 'Growth',  amount: '₹4,999',  date: 'Mar 18, 2025', status: 'Pending'  },
  { id: 'TXN-2027', institute: 'LawEdge Institute',      plan: 'Starter', amount: '₹1,999',  date: 'Mar 15, 2025', status: 'Paid'     },
  { id: 'TXN-2026', institute: 'TestPrep Legal',         plan: 'Starter', amount: '₹1,999',  date: 'Mar 10, 2025', status: 'Failed'   },
  { id: 'TXN-2025', institute: 'CLAT Prep Studio',       plan: 'Starter', amount: '₹1,999',  date: 'Mar 8, 2025',  status: 'Refunded' },
  { id: 'TXN-2024', institute: 'Moot Court Hub',         plan: 'Growth',  amount: '₹4,999',  date: 'Mar 5, 2025',  status: 'Failed'   },
];

const renewals = [
  { institute: 'Sharma Law Academy', plan: 'Pro',     amount: '₹12,999', due: 'Apr 1',  days: 2  },
  { institute: 'Juris Academy',      plan: 'Growth',  amount: '₹4,999',  due: 'Apr 3',  days: 4  },
  { institute: 'CLAT Prep Studio',   plan: 'Starter', amount: '₹1,999',  due: 'Apr 5',  days: 6  },
  { institute: 'LawEdge Institute',  plan: 'Starter', amount: '₹1,999',  due: 'Apr 10', days: 11 },
];

const failed = [
  { institute: 'TestPrep Legal', amount: '₹1,999', since: '5 days', email: 'amit@testprep.in'     },
  { institute: 'Moot Court Hub', amount: '₹4,999', since: '12 days', email: 'admin@mootcourt.in' },
];

const statusMeta: Record<string, { badge: string; dot: string }> = {
  Paid:     { badge: 'bg-label-success',   dot: '#28c76f' },
  Pending:  { badge: 'bg-label-warning',   dot: '#ff9f43' },
  Failed:   { badge: 'bg-label-danger',    dot: '#ea5455' },
  Refunded: { badge: 'bg-label-secondary', dot: '#8592a3' },
};

const planBadge: Record<string, string> = {
  Starter: 'bg-label-secondary',
  Growth:  'bg-label-info',
  Pro:     'bg-label-primary',
};

const avatarColors = ['bg-label-primary','bg-label-success','bg-label-info','bg-label-warning','bg-label-danger','bg-label-secondary'];

// ── Component ─────────────────────────────────────────────────────────────────

export default function BillingPage() {
  return (
    <SuperAdminLayout title="Billing Overview" breadcrumb="Home / Billing">

      {/* ── Stat Cards ─────────────────────────────────────────────── */}
      <div className="row g-6 mb-6">
        {[
          { label: 'Total Revenue',    value: '₹48.6L', change: '+8.2%',  pos: true,  sub: 'All time (248 institutes)', icon: 'tabler-currency-rupee', color: 'bg-label-success' },
          { label: 'This Month',       value: '₹12.3L', change: '+7.2%',  pos: true,  sub: 'March 2025',               icon: 'tabler-trending-up',    color: 'bg-label-primary' },
          { label: 'Pending',          value: '₹3.18L', change: '17 inv', pos: false, sub: 'Outstanding invoices',     icon: 'tabler-clock',          color: 'bg-label-warning' },
          { label: 'Failed',           value: '₹89,400',change: '4 txns', pos: false, sub: 'This month',               icon: 'tabler-alert-circle',   color: 'bg-label-danger'  },
        ].map(s => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span className="text-heading">{s.label}</span>
                    <div className="d-flex align-items-center my-1">
                      <h4 className="mb-0 me-2">{s.value}</h4>
                      <p className={`mb-0 ${s.pos ? 'text-success' : 'text-danger'}`}>({s.change})</p>
                    </div>
                    <small className="mb-0">{s.sub}</small>
                  </div>
                  <div className="avatar">
                    <span className={`avatar-initial rounded ${s.color}`}>
                      <i className={`icon-base ti ${s.icon} icon-26px`}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-6">

        {/* ── Transactions Table ──────────────────────────── col-xl-8 */}
        <div className="col-xl-8">
          <div className="card h-100">
            <div className="card-header border-bottom">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="card-title mb-0">
                  <h5 className="mb-1">Recent Transactions</h5>
                  <p className="card-subtitle">All subscription payments</p>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                  <select className="form-select form-select-sm w-auto">
                    <option value="">All Statuses</option>
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Failed</option>
                    <option>Refunded</option>
                  </select>
                  <select className="form-select form-select-sm w-auto">
                    <option>March 2025</option>
                    <option>February 2025</option>
                    <option>January 2025</option>
                  </select>
                  <button className="btn btn-sm btn-outline-secondary">
                    <i className="ti tabler-download me-1"></i>Export
                  </button>
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="border-top">
                  <tr>
                    <th>#</th>
                    <th>Institute</th>
                    <th>Plan</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {txns.map((t, idx) => (
                    <tr key={t.id}>
                      <td>
                        <span className="text-body-secondary small fw-medium">{t.id}</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar avatar-sm">
                            <span className={`avatar-initial rounded-circle ${avatarColors[idx % avatarColors.length]}`}>
                              {t.institute[0]}
                            </span>
                          </div>
                          <span className="fw-semibold small">{t.institute}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`badge ${planBadge[t.plan]} rounded-pill`}>{t.plan}</span>
                      </td>
                      <td className="fw-bold">{t.amount}</td>
                      <td className="text-body-secondary small">{t.date}</td>
                      <td>
                        <span className={`badge ${statusMeta[t.status].badge} rounded-pill`}>
                          <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background: statusMeta[t.status].dot, marginRight:5 }} />
                          {t.status}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-1">
                          <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill" title="View invoice">
                            <i className="ti tabler-file-invoice icon-md"></i>
                          </button>
                          {t.status === 'Failed' && (
                            <button className="btn btn-sm btn-icon btn-text-success rounded-pill" title="Retry payment">
                              <i className="ti tabler-refresh icon-md"></i>
                            </button>
                          )}
                          <div className="dropdown">
                            <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="ti tabler-dots-vertical icon-md"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">View Invoice</a>
                              <a className="dropdown-item" href="#">Send Receipt</a>
                              {t.status === 'Failed' && <a className="dropdown-item text-success" href="#">Retry Payment</a>}
                              {t.status === 'Paid' && <a className="dropdown-item text-warning" href="#">Refund</a>}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card-footer d-flex flex-wrap align-items-center justify-content-between gap-3">
              <small className="text-body-secondary">Showing 1–8 of 142 transactions</small>
              <nav>
                <ul className="pagination pagination-sm mb-0 gap-1">
                  {['‹','1','2','3','…','18','›'].map((p, i) => (
                    <li key={i} className={`page-item${p === '1' ? ' active' : ''}${p === '…' ? ' disabled' : ''}`}>
                      <a className="page-link rounded" href="#">{p}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* ── Sidebar ─────────────────────────────────────── col-xl-4 */}
        <div className="col-xl-4">
          <div className="row g-6">

            {/* Upcoming Renewals */}
            <div className="col-12">
              <div className="card">
                <div className="card-header border-bottom">
                  <div className="card-title mb-0">
                    <h5 className="mb-1">Upcoming Renewals</h5>
                    <p className="card-subtitle">Next 14 days</p>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {renewals.map((r, i) => (
                      <li key={r.institute} className={`d-flex align-items-center justify-content-between ${i < renewals.length - 1 ? 'mb-4 pb-4 border-bottom' : ''}`}>
                        <div className="d-flex align-items-center gap-3">
                          <div className="avatar avatar-sm">
                            <span className={`avatar-initial rounded-circle ${avatarColors[i % avatarColors.length]}`}>
                              {r.institute[0]}
                            </span>
                          </div>
                          <div>
                            <div className="fw-semibold small" style={{ lineHeight: 1.3 }}>{r.institute}</div>
                            <small className="text-body-secondary">{r.plan} · {r.amount}</small>
                          </div>
                        </div>
                        <span className={`badge ${r.days <= 3 ? 'bg-label-danger' : r.days <= 7 ? 'bg-label-warning' : 'bg-label-info'} ms-2`}>
                          {r.due}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Failed Payments */}
            <div className="col-12">
              <div className="card border border-danger" style={{ boxShadow: '0 4px 16px rgba(234,84,85,0.12)' }}>
                <div className="card-header border-bottom">
                  <div className="card-title mb-0">
                    <h5 className="mb-1 text-danger">
                      <i className="ti tabler-alert-triangle me-2"></i>Failed Payments
                    </h5>
                    <p className="card-subtitle">Require immediate action</p>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    {failed.map((f, i) => (
                      <li key={f.institute} className={i < failed.length - 1 ? 'mb-5 pb-4 border-bottom' : ''}>
                        <div className="d-flex align-items-start justify-content-between mb-3">
                          <div>
                            <div className="fw-semibold small">{f.institute}</div>
                            <small className="text-body-secondary">{f.amount} · overdue {f.since}</small>
                          </div>
                          <span className="badge bg-label-danger">Failed</span>
                        </div>
                        <div className="d-flex gap-2 flex-wrap">
                          <button className="btn btn-sm btn-success flex-grow-1">
                            <i className="ti tabler-refresh me-1"></i>Retry
                          </button>
                          <button className="btn btn-sm btn-outline-info">
                            <i className="ti tabler-mail me-1"></i>Notify
                          </button>
                          <button className="btn btn-sm btn-outline-warning">
                            <i className="ti tabler-clock me-1"></i>+7d
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </SuperAdminLayout>
  );
}
