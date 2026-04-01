'use client';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

// ── Data ─────────────────────────────────────────────────────────────────────

const institutes = [
  { id: 1, name: 'Sharma Law Academy',     owner: 'Rajesh Sharma',  email: 'rajesh@sharmalaw.in',   plan: 'Pro',     students: 892,  maxStudents: 1500, revenue: '₹94,200',   date: 'Jan 12, 2024', status: 'Active'    },
  { id: 2, name: 'Delhi Bar Coaching',     owner: 'Priya Mehta',    email: 'priya@delhibar.in',     plan: 'Growth',  students: 445,  maxStudents: 800,  revenue: '₹38,800',   date: 'Mar 5, 2024',  status: 'Active'    },
  { id: 3, name: 'LawEdge Institute',      owner: 'Arjun Kumar',    email: 'arjun@lawedge.in',      plan: 'Starter', students: 120,  maxStudents: 300,  revenue: '₹11,200',   date: 'Jun 20, 2024', status: 'Trial'     },
  { id: 4, name: 'Krishna Law Academy',    owner: 'Sunita Verma',   email: 'sunita@krishnalaw.in',  plan: 'Growth',  students: 0,    maxStudents: 800,  revenue: '—',         date: 'Mar 27, 2025', status: 'Pending'   },
  { id: 5, name: 'TestPrep Legal',         owner: 'Amit Joshi',     email: 'amit@testprep.in',      plan: 'Starter', students: 78,   maxStudents: 300,  revenue: '₹6,600',    date: 'Sep 8, 2023',  status: 'Suspended' },
  { id: 6, name: 'Constitutional Law Hub', owner: 'Deepika Nair',   email: 'deepika@constilaw.in',  plan: 'Pro',     students: 1240, maxStudents: 1500, revenue: '₹1,28,400', date: 'Nov 2, 2023',  status: 'Active'    },
  { id: 7, name: 'Juris Academy',          owner: 'Vikram Singh',   email: 'vikram@jurisacademy.in',plan: 'Growth',  students: 310,  maxStudents: 800,  revenue: '₹29,400',   date: 'Feb 14, 2024', status: 'Active'    },
  { id: 8, name: 'CLAT Prep Studio',       owner: 'Meera Iyer',     email: 'meera@clatprep.in',     plan: 'Starter', students: 56,   maxStudents: 300,  revenue: '₹4,800',    date: 'Jul 3, 2024',  status: 'Trial'     },
];

const statusMeta: Record<string, { badge: string; dot: string }> = {
  Active:    { badge: 'bg-label-success', dot: 'bg-success' },
  Trial:     { badge: 'bg-label-info',    dot: 'bg-info'    },
  Pending:   { badge: 'bg-label-warning', dot: 'bg-warning' },
  Suspended: { badge: 'bg-label-danger',  dot: 'bg-danger'  },
};

const planMeta: Record<string, { badge: string; color: string }> = {
  Starter: { badge: 'bg-label-secondary', color: '#8592a3' },
  Growth:  { badge: 'bg-label-info',      color: '#00CFE8' },
  Pro:     { badge: 'bg-label-primary',   color: '#7367F0' },
};

// Avatar background cycle for institute initials
const avatarColors = [
  'bg-label-primary', 'bg-label-success', 'bg-label-info',
  'bg-label-warning', 'bg-label-danger',  'bg-label-secondary',
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function InstitutesListPage() {
  return (
    <SuperAdminLayout title="Institutes" breadcrumb="Home / Institutes">

      {/* ── Stat Cards ───────────────────────────────────────────────── */}
      <div className="row g-6 mb-6">
        {[
          { label: 'Total Institutes', value: '248', change: '+5.1%', pos: true,  sub: 'All time',        icon: 'tabler-building',       color: 'bg-label-primary' },
          { label: 'Active',           value: '199', change: '+12%',  pos: true,  sub: 'Currently live',  icon: 'tabler-building-check', color: 'bg-label-success' },
          { label: 'New This Month',   value: '12',  change: '+42%',  pos: true,  sub: 'March 2025',      icon: 'tabler-building-plus',  color: 'bg-label-info'    },
          { label: 'Pending Review',   value: '7',   change: 'Action',pos: false, sub: 'Awaiting approval',icon: 'tabler-clock',         color: 'bg-label-warning' },
        ].map(s => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span className="text-heading">{s.label}</span>
                    <div className="d-flex align-items-center my-1">
                      <h4 className="mb-0 me-2">{s.value}</h4>
                      <p className={`mb-0 ${s.pos ? 'text-success' : 'text-warning'}`}>({s.change})</p>
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

      {/* ── Main Card ────────────────────────────────────────────────── */}
      <div className="card">

        {/* Card header — filters */}
        <div className="card-header border-bottom">
          <h5 className="card-title mb-0">Search Filters</h5>
          <div className="d-flex justify-content-between align-items-center row pt-4 gap-4 gap-md-0">
            <div className="col-md-4">
              <select className="form-select" defaultValue="">
                <option value="">All Plans</option>
                <option>Starter</option>
                <option>Growth</option>
                <option>Pro</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-select" defaultValue="">
                <option value="">All Statuses</option>
                <option>Active</option>
                <option>Trial</option>
                <option>Pending</option>
                <option>Suspended</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-select" defaultValue="">
                <option value="">All Regions</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
              </select>
            </div>
          </div>
        </div>

        {/* Toolbar — search + actions */}
        <div className="card-body border-bottom py-3">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            {/* Search */}
            <div className="position-relative" style={{ minWidth: 240 }}>
              <span className="position-absolute top-50 start-0 translate-middle-y ps-3" style={{ pointerEvents: 'none' }}>
                <i className="ti tabler-search text-body-secondary"></i>
              </span>
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Search institute or owner…"
                style={{ minWidth: 240 }}
              />
            </div>
            {/* Actions */}
            <div className="d-flex gap-2 flex-wrap">
              <button className="btn btn-outline-secondary">
                <i className="ti tabler-download me-1"></i>Export CSV
              </button>
              <a href="/super-admin/institutes/approve" className="btn btn-outline-warning">
                <i className="ti tabler-clock me-1"></i>Pending (7)
              </a>
              {/* Offcanvas trigger */}
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasInviteInstitute"
              >
                <i className="ti tabler-plus me-1"></i>Invite Institute
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive text-nowrap">
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{ width: 40 }}>
                  <input type="checkbox" className="form-check-input" />
                </th>
                <th>Institute</th>
                <th>Plan</th>
                <th>Students</th>
                <th>Revenue (Mo.)</th>
                <th>Joined</th>
                <th>Status</th>
                <th style={{ width: 100 }}>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {institutes.map((inst, idx) => {
                const pct = inst.maxStudents > 0
                  ? Math.round((inst.students / inst.maxStudents) * 100)
                  : 0;
                const barColor = pct > 80 ? 'bg-danger' : pct > 50 ? 'bg-warning' : 'bg-success';
                const avatarBg = avatarColors[idx % avatarColors.length];

                return (
                  <tr key={inst.id}>
                    {/* Checkbox */}
                    <td><input type="checkbox" className="form-check-input" /></td>

                    {/* Institute */}
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar">
                          <span className={`avatar-initial rounded-circle ${avatarBg} fw-bold`}>
                            {inst.name[0]}
                          </span>
                        </div>
                        <div>
                          <a
                            href={`/super-admin/institutes/${inst.id}`}
                            className="fw-semibold text-heading text-decoration-none d-block"
                            style={{ lineHeight: 1.3 }}
                          >
                            {inst.name}
                          </a>
                          <small className="text-body-secondary">{inst.owner}</small>
                        </div>
                      </div>
                    </td>

                    {/* Plan */}
                    <td>
                      <span className={`badge ${planMeta[inst.plan].badge} rounded-pill`}>
                        {inst.plan}
                      </span>
                    </td>

                    {/* Students + progress */}
                    <td>
                      <div style={{ minWidth: 110 }}>
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-semibold small">{inst.students.toLocaleString()}</span>
                          <span className="text-body-secondary small">{pct}%</span>
                        </div>
                        <div className="progress" style={{ height: 5 }}>
                          <div
                            className={`progress-bar ${barColor}`}
                            style={{ width: `${pct}%` }}
                            role="progressbar"
                          />
                        </div>
                      </div>
                    </td>

                    {/* Revenue */}
                    <td>
                      <span className="fw-semibold">{inst.revenue}</span>
                    </td>

                    {/* Joined */}
                    <td>
                      <span className="text-body-secondary">{inst.date}</span>
                    </td>

                    {/* Status */}
                    <td>
                      <span className={`badge ${statusMeta[inst.status].badge} rounded-pill`}>
                        <span
                          className={`badge-dot ${statusMeta[inst.status].dot} me-1`}
                          style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%' }}
                        />
                        {inst.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <a
                          href={`/super-admin/institutes/${inst.id}`}
                          className="btn btn-sm btn-icon btn-text-secondary rounded-pill"
                          title="View details"
                        >
                          <i className="ti tabler-eye icon-md"></i>
                        </a>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti tabler-dots-vertical icon-md"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href={`/super-admin/institutes/${inst.id}`}>
                              <i className="ti tabler-eye me-2 text-body-secondary"></i>View Details
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ti tabler-pencil me-2 text-body-secondary"></i>Edit Details
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ti tabler-diamond me-2 text-body-secondary"></i>Manage Plan
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="ti tabler-credit-card me-2 text-body-secondary"></i>View Billing
                            </a>
                            <div className="dropdown-divider"></div>
                            {inst.status === 'Active' || inst.status === 'Trial' ? (
                              <a className="dropdown-item text-warning" href="#">
                                <i className="ti tabler-player-pause me-2"></i>Suspend
                              </a>
                            ) : inst.status === 'Pending' ? (
                              <a className="dropdown-item text-success" href="#">
                                <i className="ti tabler-check me-2"></i>Approve
                              </a>
                            ) : (
                              <a className="dropdown-item text-success" href="#">
                                <i className="ti tabler-player-play me-2"></i>Reactivate
                              </a>
                            )}
                            <a className="dropdown-item text-danger" href="#">
                              <i className="ti tabler-trash me-2"></i>Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Card footer — pagination */}
        <div className="card-footer">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-2">
              <span className="text-body-secondary small">Show</span>
              <select className="form-select form-select-sm w-auto">
                <option>8</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-body-secondary small">entries</span>
              <span className="text-body-secondary small ms-3">Showing 1–8 of 248 institutes</span>
            </div>
            <nav>
              <ul className="pagination pagination-sm mb-0 gap-1">
                {[
                  { label: '‹', title: 'Previous' },
                  { label: '1', active: true },
                  { label: '2' },
                  { label: '3' },
                  { label: '…' },
                  { label: '31' },
                  { label: '›', title: 'Next' },
                ].map((p, i) => (
                  <li key={i} className={`page-item${p.active ? ' active' : ''}${p.label === '…' ? ' disabled' : ''}`}>
                    <a className="page-link rounded" href="#">{p.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* ── Offcanvas — Invite Institute ──────────────────────────────── */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasInviteInstitute"
        aria-labelledby="offcanvasInviteInstituteLabel"
        style={{ width: 400 }}
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="offcanvasInviteInstituteLabel">
            Invite Institute
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body p-6">
          <p className="text-body-secondary mb-6 small">
            Send an invitation to onboard a new institute. They will receive setup instructions via email.
          </p>

          <form onSubmit={e => e.preventDefault()}>

            <div className="mb-5">
              <label className="form-label fw-semibold" htmlFor="inst-name">Institute Name</label>
              <input
                id="inst-name"
                type="text"
                className="form-control"
                placeholder="e.g. Supreme Law Academy"
              />
            </div>

            <div className="mb-5">
              <label className="form-label fw-semibold" htmlFor="inst-owner">Owner / Admin Name</label>
              <input
                id="inst-owner"
                type="text"
                className="form-control"
                placeholder="e.g. Rajesh Sharma"
              />
            </div>

            <div className="mb-5">
              <label className="form-label fw-semibold" htmlFor="inst-email">Owner Email</label>
              <input
                id="inst-email"
                type="email"
                className="form-control"
                placeholder="e.g. rajesh@supremelaw.in"
              />
            </div>

            <div className="mb-5">
              <label className="form-label fw-semibold" htmlFor="inst-phone">Phone Number</label>
              <input
                id="inst-phone"
                type="tel"
                className="form-control"
                placeholder="+91 98000 00000"
              />
            </div>

            <div className="mb-5">
              <label className="form-label fw-semibold" htmlFor="inst-plan">Assign Plan</label>
              <select id="inst-plan" className="form-select">
                <option value="">Select a plan…</option>
                <option value="starter">Starter — ₹4,999/mo</option>
                <option value="growth">Growth — ₹9,999/mo</option>
                <option value="pro">Pro — ₹19,999/mo</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="form-label fw-semibold" htmlFor="inst-region">Region / City</label>
              <select id="inst-region" className="form-select">
                <option value="">Select region…</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
                <option>Pune</option>
                <option>Kolkata</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mb-6">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="inst-trial" defaultChecked />
                <label className="form-check-label" htmlFor="inst-trial">
                  Start on 14-day free trial
                </label>
              </div>
            </div>

            <div className="d-flex gap-3">
              <button type="submit" className="btn btn-primary flex-grow-1">
                <i className="ti tabler-send me-1"></i>Send Invite
              </button>
              <button
                type="reset"
                className="btn btn-label-secondary"
                data-bs-dismiss="offcanvas"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>

    </SuperAdminLayout>
  );
}
