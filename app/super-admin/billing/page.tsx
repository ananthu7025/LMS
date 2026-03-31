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

const statusBadge: Record<string, string> = { 
  Paid: 'bg-label-success', Pending: 'bg-label-warning', Failed: 'bg-label-danger', Refunded: 'bg-label-secondary' 
};

export default function BillingPage() {
  return (
    <SuperAdminLayout active="/super-admin/billing" title="Billing Overview" breadcrumb="Home / Billing">
      
      {/* Summary cards */}
      <div className="row g-4 mb-4">
        {[
          { icon: 'tabler-currency-rupee', bg: 'bg-label-success', label: 'Total Revenue Collected', value: '₹48,60,400', sub: 'All time (248 institutes)' },
          { icon: 'tabler-clock',          bg: 'bg-label-warning', label: 'Pending Payments',      value: '₹3,18,200', sub: '17 invoices outstanding' },
          { icon: 'tabler-alert-circle',  bg: 'bg-label-danger',  label: 'Failed This Month',     value: '₹89,400',   sub: '4 failed transactions' },
        ].map(s => (
          <div key={s.label} className="col-xl-4 col-md-6">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center gap-3">
                <div className={`avatar avatar-lg ${s.bg} rounded`}>
                  <span className="avatar-initial rounded">
                    <i className={`ti ${s.icon} icon-26px`}></i>
                  </span>
                </div>
                <div className="ms-1">
                  <h4 className="mb-0 fw-bold">{s.value}</h4>
                  <small className="text-body-secondary">{s.label}</small>
                  <div className="text-muted small mt-1">{s.sub}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        {/* Transactions */}
        <div className="col-xl-8">
          <div className="card h-100">
            <div className="card-header border-bottom d-flex align-items-center justify-content-between py-3">
              <h6 className="m-0 fw-bold">Recent Transactions</h6>
              <div className="d-flex gap-2">
                <select className="form-select form-select-sm w-auto"><option>All Status</option><option>Paid</option></select>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ti tabler-download me-1"></i>Export
                </button>
              </div>
            </div>
            <div className="table-responsive text-nowrap">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Institute</th><th>Plan</th><th>Amount</th><th>Date</th><th>Status</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {txns.map((t, i) => (
                    <tr key={i}>
                      <td className="fw-semibold">{t.institute}</td>
                      <td><span className="badge bg-label-primary">{t.plan}</span></td>
                      <td className="fw-bold">{t.amount}</td>
                      <td className="text-body-secondary">{t.date}</td>
                      <td><span className={`badge ${statusBadge[t.status]}`}>{t.status}</span></td>
                      <td>
                        <div className="d-flex gap-1">
                          <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill">
                            <i className="ti tabler-file-text"></i>
                          </button>
                          {t.status === 'Failed' && (
                            <button className="btn btn-sm btn-icon btn-text-success rounded-pill">
                              <i className="ti tabler-refresh"></i>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Renewals & Failed Actions */}
        <div className="col-xl-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="fw-bold mb-4">
                    <i className="ti tabler-calendar-event me-2 text-primary"></i>Upcoming Renewals
                  </h6>
                  <div className="d-flex flex-column gap-3">
                    {renewals.map(r => (
                      <div key={r.institute} className="d-flex justify-content-between align-items-center pb-3 border-bottom last-child-border-0">
                        <div>
                          <div className="small fw-semibold">{r.institute}</div>
                          <small className="text-body-secondary">{r.plan} — {r.amount}</small>
                        </div>
                        <span className="badge bg-label-warning">{r.due}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="card border border-danger">
                <div className="card-body">
                  <h6 className="fw-bold mb-4 text-danger">
                    <i className="ti tabler-alert-triangle me-2"></i>Failed Payment Actions
                  </h6>
                  <div className="d-flex flex-column gap-4">
                    {['TestPrep Legal', 'Moot Court Hub'].map(name => (
                      <div key={name} className="pb-1">
                        <div className="small fw-bold mb-2">{name}</div>
                        <div className="d-flex gap-2 flex-wrap">
                          <button className="btn btn-xs btn-label-success">Retry</button>
                          <button className="btn btn-xs btn-label-info">Notify</button>
                          <button className="btn btn-xs btn-label-warning">Grace +7d</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
}
