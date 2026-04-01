'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const txns = [
  { id: 'TXN-8821', student: 'Arjun Mehta',   email: 'arjun@email.com',   course: 'Criminal Law Fundamentals', amount: '₹4,499', method: 'UPI',         date: 'Mar 28, 2025', status: 'Paid'     },
  { id: 'TXN-7743', student: 'Sunita Kapoor', email: 'sunita@email.com',  course: 'Constitutional Law',         amount: '₹2,999', method: 'Card',         date: 'Mar 26, 2025', status: 'Paid'     },
  { id: 'TXN-7612', student: 'Vikram Joshi',  email: 'vikram@email.com',  course: 'CLAT 2025 Preparation',      amount: '₹3,499', method: 'Net Banking',  date: 'Mar 25, 2025', status: 'Pending'  },
  { id: 'TXN-7401', student: 'Deepa Nair',    email: 'deepa@email.com',   course: 'Criminal Law Fundamentals', amount: '₹4,499', method: 'UPI',         date: 'Mar 22, 2025', status: 'Paid'     },
  { id: 'TXN-7290', student: 'Karan Singh',   email: 'karan@email.com',   course: 'Evidence Act Deep Dive',     amount: '₹1,999', method: 'Wallet',       date: 'Mar 20, 2025', status: 'Failed'   },
  { id: 'TXN-7155', student: 'Pooja Verma',   email: 'pooja@email.com',   course: 'Constitutional Law',         amount: '₹2,999', method: 'Card',         date: 'Mar 18, 2025', status: 'Refunded' },
  { id: 'TXN-7044', student: 'Rahul Sharma',  email: 'rahul@email.com',   course: 'CLAT 2025 Preparation',      amount: '₹3,499', method: 'UPI',         date: 'Mar 15, 2025', status: 'Paid'     },
  { id: 'TXN-6901', student: 'Meera Iyer',    email: 'meera@email.com',   course: 'Contract Law Basics',        amount: '₹1,999', method: 'Wallet',       date: 'Mar 12, 2025', status: 'Paid'     },
];

const courseRevenue = [
  { name: 'Criminal Law Fundamentals', short: 'Criminal Law',     rev: '₹68,400', pct: 82, color: 'primary', hex: '#7367F0' },
  { name: 'Constitutional Law',         short: 'Constitutional',   rev: '₹43,600', pct: 52, color: 'info',    hex: '#00BAD1' },
  { name: 'CLAT 2025 Preparation',      short: 'CLAT Prep',        rev: '₹52,200', pct: 63, color: 'success', hex: '#28C76F' },
  { name: 'Evidence Act Deep Dive',     short: 'Evidence Act',     rev: '₹24,800', pct: 30, color: 'warning', hex: '#FF9F43' },
  { name: 'Contract Law Basics',        short: 'Contract Law',     rev: '₹12,100', pct: 15, color: 'danger',  hex: '#FF4C51' },
];

const monthlyTrend = [
  { month: 'Oct', pct: 38 },
  { month: 'Nov', pct: 54 },
  { month: 'Dec', pct: 67 },
  { month: 'Jan', pct: 44 },
  { month: 'Feb', pct: 76 },
  { month: 'Mar', pct: 100 },
];

const statusBadge: Record<string, string> = {
  Paid: 'bg-label-success', Pending: 'bg-label-warning', Failed: 'bg-label-danger', Refunded: 'bg-label-secondary',
};
const methodIcon: Record<string, string> = {
  UPI: 'tabler-device-mobile', Card: 'tabler-credit-card', 'Net Banking': 'tabler-building-bank', Wallet: 'tabler-wallet',
};
const methodColor: Record<string, string> = {
  UPI: 'success', Card: 'primary', 'Net Banking': 'info', Wallet: 'warning',
};

const initials = (name: string) => name.split(' ').map(n => n[0]).join('');

const avatarColors = ['primary', 'success', 'info', 'warning', 'danger'];
const avatarColor  = (name: string) => avatarColors[name.charCodeAt(0) % avatarColors.length];

export default function RevenuePage() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [search, setSearch]             = useState('');

  const filtered = txns.filter(t => {
    if (statusFilter !== 'All' && t.status !== statusFilter) return false;
    if (search && !t.student.toLowerCase().includes(search.toLowerCase()) && !t.course.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <AdminLayout title="Revenue" breadcrumb="Home / Revenue">

      {/* ── Hero Card ─────────────────────────────────────────────────── */}
      <div className="card p-0 mb-6 overflow-hidden">
        <div
          className="card-body p-5"
          style={{ background: 'linear-gradient(135deg, #7367F0 0%, #9E95F5 100%)', position: 'relative', overflow: 'hidden' }}
        >
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: -70, right: 120, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', top: '50%', right: 340, width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none', transform: 'translateY(-50%)' }}></div>

          <div className="row align-items-center g-4 position-relative">
            {/* Left — headline */}
            <div className="col-12 col-md">
              <p className="mb-1 fw-semibold" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, letterSpacing: '0.5px', textTransform: 'uppercase' }}>All Time Revenue</p>
              <h2 className="fw-bold mb-1" style={{ color: '#fff', fontSize: 40, lineHeight: 1.1 }}>₹18.4L</h2>
              <p className="mb-4 d-flex align-items-center gap-1" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
                <i className="ti tabler-trending-up" style={{ fontSize: 14 }}></i>+18% compared to last month
              </p>
              <div className="d-flex flex-wrap gap-3">
                {[
                  { label: 'This Month', val: '₹2.84L' },
                  { label: 'Transactions', val: '1,247' },
                  { label: 'Pending',    val: '₹42k'   },
                ].map(q => (
                  <div
                    key={q.label}
                    className="rounded-3 px-3 py-2"
                    style={{ background: 'rgba(255,255,255,0.15)' }}
                  >
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>{q.val}</div>
                    <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11 }}>{q.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — mini bar chart */}
            <div className="col-12 col-md-auto d-none d-md-block">
              <p className="mb-2" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11, textAlign: 'right' }}>Last 6 months</p>
              <div className="d-flex align-items-end gap-2" style={{ height: 80 }}>
                {monthlyTrend.map((m, i) => (
                  <div key={m.month} className="d-flex flex-column align-items-center gap-1" style={{ width: 28 }}>
                    <div
                      style={{
                        height: `${Math.round(m.pct * 0.72)}px`,
                        minHeight: 6,
                        width: '100%',
                        borderRadius: '4px 4px 0 0',
                        background: i === monthlyTrend.length - 1 ? '#fff' : 'rgba(255,255,255,0.3)',
                        transition: 'height .3s',
                      }}
                    ></div>
                    <small style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9 }}>{m.month}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stat Cards ────────────────────────────────────────────────── */}
      <div className="row g-6 mb-6">
        {[
          { label: 'This Month',    val: '₹2.84L', change: '+18%', sub: 'vs last month',    icon: 'tabler-trending-up',        color: 'primary', changeColor: 'success' },
          { label: 'Paid',          val: '1,184',  change: '+12%', sub: 'Transactions',      icon: 'tabler-circle-check',       color: 'success', changeColor: 'success' },
          { label: 'Pending',       val: '₹42k',   change: '+3',   sub: 'Awaiting payment',  icon: 'tabler-clock',              color: 'warning', changeColor: 'warning' },
          { label: 'Refunds',       val: '₹12k',   change: '-2%',  sub: 'Issued this month', icon: 'tabler-corner-down-left',   color: 'danger',  changeColor: 'danger'  },
        ].map(s => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span className="text-heading">{s.label}</span>
                    <div className="d-flex align-items-center my-1">
                      <h4 className="mb-0 me-2">{s.val}</h4>
                      <p className={`text-${s.changeColor} mb-0`}>({s.change})</p>
                    </div>
                    <small className="mb-0">{s.sub}</small>
                  </div>
                  <div className="avatar">
                    <span className={`avatar-initial rounded bg-label-${s.color}`}>
                      <i className={`icon-base ti ${s.icon} icon-26px`}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Main 2-col Layout ─────────────────────────────────────────── */}
      <div className="row g-6">

        {/* ── Transactions ── col-xl-8 ─────────────────────────────── */}
        <div className="col-xl-8">
          <div className="card h-100">

            {/* Header */}
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3 border-bottom py-4">
              <div>
                <h5 className="card-title mb-0">Transactions</h5>
                <small className="text-body-secondary">{filtered.length} records</small>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <select
                  className="form-select form-select-sm"
                  style={{ width: 130 }}
                  onChange={e => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option>Paid</option>
                  <option>Pending</option>
                  <option>Failed</option>
                  <option>Refunded</option>
                </select>
                <div className="input-group input-group-sm" style={{ width: 200 }}>
                  <span className="input-group-text"><i className="ti tabler-search"></i></span>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ti tabler-download me-1"></i>Export
                </button>
              </div>
            </div>

            {/* Transaction list */}
            <div className="card-body p-0">
              {filtered.map((t, i) => (
                <div
                  key={i}
                  className={`d-flex align-items-center gap-3 px-5 py-3${i < filtered.length - 1 ? ' border-bottom' : ''}`}
                >
                  {/* Avatar */}
                  <div className="avatar flex-shrink-0">
                    <span className={`avatar-initial rounded-circle bg-label-${avatarColor(t.student)}`}>
                      {initials(t.student)}
                    </span>
                  </div>

                  {/* Name + course */}
                  <div className="flex-grow-1 min-w-0">
                    <div className="fw-semibold text-heading text-truncate">{t.student}</div>
                    <small className="text-body-secondary text-truncate d-block">{t.course}</small>
                  </div>

                  {/* Method */}
                  <div className="d-none d-sm-flex align-items-center gap-1 flex-shrink-0">
                    <span className={`badge bg-label-${methodColor[t.method]} d-flex align-items-center gap-1`} style={{ fontSize: 11 }}>
                      <i className={`ti ${methodIcon[t.method]}`} style={{ fontSize: 11 }}></i>
                      {t.method}
                    </span>
                  </div>

                  {/* Date */}
                  <small className="text-body-secondary text-nowrap d-none d-md-block flex-shrink-0">{t.date}</small>

                  {/* Amount + status */}
                  <div className="text-end flex-shrink-0">
                    <div className="fw-bold text-heading">{t.amount}</div>
                    <span className={`badge ${statusBadge[t.status]}`} style={{ fontSize: 10 }}>{t.status}</span>
                  </div>

                  {/* Action */}
                  <div className="flex-shrink-0">
                    <div className="dropdown">
                      <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                        <i className="ti tabler-dots-vertical"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href={`/admin/revenue/${t.id}`}>
                          <i className="ti tabler-eye me-2"></i>View Receipt
                        </a>
                        <a className="dropdown-item" href={`/admin/revenue/${t.id}`}>
                          <i className="ti tabler-download me-2"></i>Download
                        </a>
                        {t.status === 'Pending' && (
                          <a className="dropdown-item" href="#">
                            <i className="ti tabler-send me-2"></i>Send Reminder
                          </a>
                        )}
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-danger" href="#">
                          <i className="ti tabler-corner-down-left me-2"></i>Refund
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div className="text-center py-6">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                    style={{ width: 64, height: 64, background: '#7367F015' }}
                  >
                    <i className="ti tabler-receipt-off" style={{ fontSize: 28, color: '#7367F0' }}></i>
                  </div>
                  <p className="text-body-secondary">No transactions found.</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="card-footer d-flex flex-wrap justify-content-between align-items-center gap-3 py-3">
              <small className="text-body-secondary">Showing {filtered.length} of {txns.length} transactions</small>
              <nav>
                <ul className="pagination pagination-sm mb-0">
                  {['‹', '1', '2', '3', '›'].map((p, i) => (
                    <li key={i} className={`page-item${p === '1' ? ' active' : ''}`}>
                      <a className="page-link" href="#">{p}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* ── Sidebar ── col-xl-4 ──────────────────────────────────── */}
        <div className="col-xl-4">

          {/* Revenue by Course */}
          <div className="card mb-6">
            <div className="card-header border-bottom py-4">
              <h5 className="card-title mb-0">Revenue by Course</h5>
            </div>
            <div className="card-body py-4">
              {courseRevenue.map((c, i) => (
                <div key={c.name} className={i < courseRevenue.length - 1 ? 'mb-4' : ''}>
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <div className="d-flex align-items-center gap-2">
                      <span
                        className="rounded-circle flex-shrink-0"
                        style={{ width: 8, height: 8, background: c.hex, display: 'inline-block' }}
                      ></span>
                      <small className="text-heading fw-medium">{c.short}</small>
                    </div>
                    <small className="fw-bold text-heading">{c.rev}</small>
                  </div>
                  <div className="progress" style={{ height: 6 }}>
                    <div
                      className={`progress-bar bg-${c.color}`}
                      style={{ width: `${c.pct}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payout Summary */}
          <div className="card p-0 overflow-hidden">
            <div
              className="card-body p-5"
              style={{ background: 'linear-gradient(135deg, #28C76F 0%, #48DA89 100%)', position: 'relative', overflow: 'hidden' }}
            >
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', bottom: -50, left: -20, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }}></div>

              <div className="position-relative">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.2)' }}
                  >
                    <i className="ti tabler-building-bank" style={{ fontSize: 18, color: '#fff' }}></i>
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 600 }}>Payout Summary</span>
                </div>

                <h2 className="fw-bold mb-1" style={{ color: '#fff', fontSize: 32 }}>₹2,14,800</h2>
                <p className="mb-4" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                  Available after 10% platform fee
                </p>

                <div className="d-flex gap-3 mb-4">
                  {[
                    { label: 'Gross',    val: '₹2.38L' },
                    { label: 'Platform', val: '₹23.8k'  },
                  ].map(q => (
                    <div key={q.label} className="rounded-3 px-3 py-2" style={{ background: 'rgba(255,255,255,0.15)' }}>
                      <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{q.val}</div>
                      <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11 }}>{q.label}</div>
                    </div>
                  ))}
                </div>

                <button
                  className="btn w-100 fw-semibold"
                  style={{ background: '#fff', color: '#28C76F' }}
                >
                  <i className="ti tabler-send me-1"></i>Request Payout
                </button>
                <p className="text-center mb-0 mt-2" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11 }}>
                  Processed within 3–5 business days
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </AdminLayout>
  );
}
