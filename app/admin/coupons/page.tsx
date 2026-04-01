'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const coupons = [
  { code: 'WELCOME30', type: '%',  value: 30,  expiry: 'Apr 30, 2025', usedCount: 42,  maxUses: 100,  minCart: 0,    courses: 'All Courses',           status: 'Active',  color: 'primary', hex: '#7367F0' },
  { code: 'SAVE500',   type: '₹',  value: 500, expiry: 'Mar 31, 2025', usedCount: 18,  maxUses: 50,   minCart: 2000, courses: 'All Courses',           status: 'Active',  color: 'success', hex: '#28C76F' },
  { code: 'STUDENT20', type: '%',  value: 20,  expiry: 'Jun 30, 2025', usedCount: 234, maxUses: null, minCart: 0,    courses: 'All Courses',           status: 'Active',  color: 'info',    hex: '#00BAD1' },
  { code: 'CLAT2025',  type: '%',  value: 15,  expiry: 'Dec 31, 2025', usedCount: 89,  maxUses: 200,  minCart: 0,    courses: 'CLAT 2025 Preparation', status: 'Active',  color: 'warning', hex: '#FF9F43' },
  { code: 'LAUNCH50',  type: '%',  value: 50,  expiry: 'Jan 31, 2025', usedCount: 500, maxUses: 500,  minCart: 0,    courses: 'All Courses',           status: 'Expired', color: 'secondary', hex: '#808390' },
  { code: 'FLAT250',   type: '₹',  value: 250, expiry: 'Feb 28, 2025', usedCount: 73,  maxUses: 100,  minCart: 1500, courses: 'Constitutional Law',    status: 'Expired', color: 'secondary', hex: '#808390' },
];

export default function CouponsPage() {
  const [showCanvas, setShowCanvas]     = useState(false);
  const [discountType, setDiscountType] = useState<'%' | '₹'>('%');
  const [selected, setSelected]         = useState<Set<number>>(new Set());
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter]     = useState('All');
  const [search, setSearch]             = useState('');
  const [copied, setCopied]             = useState<string | null>(null);

  const filtered = coupons.filter(c => {
    if (statusFilter !== 'All' && c.status !== statusFilter) return false;
    if (typeFilter   !== 'All' && c.type   !== typeFilter)   return false;
    if (search && !c.code.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const allChecked = filtered.length > 0 && filtered.every((_, i) => selected.has(i));

  const copyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <AdminLayout title="Coupons & Discounts" breadcrumb="Home / Coupons">

      {/* ── Stat Cards ─────────────────────────────────────────────── */}
      <div className="row g-6 mb-6">
        {[
          { label: 'Total Coupons',     val: '6',    change: '+2',   sub: 'Created all time',    icon: 'tabler-tag',          color: 'primary', changeColor: 'success' },
          { label: 'Active',            val: '4',    change: '+1',   sub: 'Currently live',      icon: 'tabler-circle-check', color: 'success', changeColor: 'success' },
          { label: 'Total Redemptions', val: '956',  change: '+84',  sub: 'This month',          icon: 'tabler-repeat',       color: 'info',    changeColor: 'success' },
          { label: 'Revenue Saved',     val: '₹38k', change: '+12%', sub: 'Est. discount given', icon: 'tabler-discount',     color: 'warning', changeColor: 'warning' },
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

      {/* ── Table Card ─────────────────────────────────────────────── */}
      <div className="card">

        {/* Filters */}
        <div className="card-header border-bottom">
          <h5 className="card-title mb-0">Filters</h5>
          <div className="d-flex justify-content-between align-items-center row pt-4 gap-4 gap-md-0">
            <div className="col-md-6">
              <select className="form-select" onChange={e => setStatusFilter(e.target.value)}>
                <option value="All">Select Status</option>
                <option>Active</option>
                <option>Expired</option>
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-select" onChange={e => setTypeFilter(e.target.value)}>
                <option value="All">Select Discount Type</option>
                <option value="%">Percentage (%)</option>
                <option value="₹">Fixed Amount (₹)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3 border-bottom py-4">
          <div className="d-flex align-items-center gap-2">
            <label className="mb-0 text-nowrap small">Show</label>
            <select className="form-select form-select-sm" style={{ width: 70 }}>
              <option>10</option><option>25</option><option>50</option>
            </select>
            <label className="mb-0 text-nowrap small">entries</label>
          </div>
          <div className="d-flex align-items-center flex-wrap gap-2">
            <div className="input-group input-group-sm" style={{ width: 220 }}>
              <span className="input-group-text"><i className="ti tabler-search"></i></span>
              <input
                type="search"
                className="form-control"
                placeholder="Search coupon code..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ti tabler-download me-1"></i>Export
            </button>
            <button className="btn btn-sm btn-primary" onClick={() => setShowCanvas(true)}>
              <i className="ti tabler-plus me-1"></i>Create Coupon
            </button>
          </div>
        </div>

        {/* Bulk action bar */}
        {selected.size > 0 && (
          <div className="px-4 py-2 bg-label-primary d-flex align-items-center gap-3 flex-wrap border-bottom">
            <span className="fw-semibold small">{selected.size} selected</span>
            {[
              ['tabler-player-pause', 'Disable Selected'],
              ['tabler-download',     'Export CSV'],
              ['tabler-trash',        'Delete'],
            ].map(([icon, label]) => (
              <button key={label} className="btn btn-sm btn-outline-primary bg-white">
                <i className={`ti ${icon} me-1`}></i>{label}
              </button>
            ))}
          </div>
        )}

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="border-top">
              <tr>
                <th>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={allChecked}
                    onChange={e => setSelected(e.target.checked ? new Set(filtered.map((_, i) => i)) : new Set())}
                  />
                </th>
                <th>Coupon Code</th>
                <th>Discount</th>
                <th>Applicable To</th>
                <th>Usage</th>
                <th>Min Cart</th>
                <th>Expiry</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => {
                const usagePct = c.maxUses ? Math.round((c.usedCount / c.maxUses) * 100) : null;
                return (
                  <tr key={i}>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={selected.has(i)}
                        onChange={e => {
                          const ns = new Set(selected);
                          e.target.checked ? ns.add(i) : ns.delete(i);
                          setSelected(ns);
                        }}
                      />
                    </td>

                    {/* Code */}
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="d-flex align-items-center gap-2 px-3 py-1 rounded-2"
                          style={{ background: `${c.hex}12`, border: `1.5px dashed ${c.hex}50` }}
                        >
                          <span style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: 13, letterSpacing: 1.5, color: c.hex }}>
                            {c.code}
                          </span>
                        </div>
                        <button
                          className="btn btn-sm btn-icon p-0 text-body-secondary"
                          style={{ background: 'transparent', border: 'none' }}
                          onClick={() => copyCode(c.code)}
                          title="Copy code"
                        >
                          <i className={`ti ${copied === c.code ? 'tabler-check text-success' : 'tabler-copy'}`} style={{ fontSize: 14 }}></i>
                        </button>
                      </div>
                    </td>

                    {/* Discount */}
                    <td>
                      <span className="fw-bold" style={{ color: c.status === 'Expired' ? '#808390' : c.hex, fontSize: 15 }}>
                        {c.type === '%' ? `${c.value}%` : `₹${c.value}`}
                      </span>
                      <small className="text-body-secondary ms-1">off</small>
                    </td>

                    {/* Applicable */}
                    <td>
                      <span className={`badge bg-label-${c.status === 'Expired' ? 'secondary' : c.color}`} style={{ fontSize: 11 }}>
                        {c.courses.length > 18 ? c.courses.slice(0, 16) + '…' : c.courses}
                      </span>
                    </td>

                    {/* Usage */}
                    <td style={{ minWidth: 140 }}>
                      {usagePct !== null ? (
                        <>
                          <div className="d-flex align-items-center gap-2 mb-1">
                            <div className="progress flex-grow-1" style={{ height: 5 }}>
                              <div
                                className={`progress-bar bg-${c.color}`}
                                style={{ width: `${usagePct}%` }}
                              ></div>
                            </div>
                            <small className="fw-semibold text-nowrap">{usagePct}%</small>
                          </div>
                          <small className="text-body-secondary">{c.usedCount} / {c.maxUses} used</small>
                        </>
                      ) : (
                        <>
                          <small className="fw-semibold text-heading">{c.usedCount}</small>
                          <small className="text-body-secondary ms-1">used ·</small>
                          <small className="text-success ms-1">Unlimited</small>
                        </>
                      )}
                    </td>

                    {/* Min cart */}
                    <td className="text-body-secondary">
                      {c.minCart > 0 ? `₹${c.minCart.toLocaleString('en-IN')}` : <span className="text-body-secondary">—</span>}
                    </td>

                    {/* Expiry */}
                    <td className="text-body-secondary">{c.expiry}</td>

                    {/* Status */}
                    <td>
                      <span className={`badge ${c.status === 'Active' ? 'bg-label-success' : 'bg-label-secondary'}`}>
                        {c.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti tabler-dots-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#"><i className="ti tabler-edit me-2"></i>Edit</a>
                          <a className="dropdown-item" href="#"><i className="ti tabler-copy me-2"></i>Duplicate</a>
                          {c.status === 'Active' ? (
                            <a className="dropdown-item text-warning" href="#"><i className="ti tabler-player-pause me-2"></i>Disable</a>
                          ) : (
                            <a className="dropdown-item text-success" href="#"><i className="ti tabler-refresh me-2"></i>Reactivate</a>
                          )}
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item text-danger" href="#"><i className="ti tabler-trash me-2"></i>Delete</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="card-footer d-flex flex-wrap justify-content-between align-items-center gap-3 py-3">
          <small className="text-body-secondary">
            Showing {filtered.length > 0 ? 1 : 0}–{filtered.length} of {coupons.length} coupons
          </small>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              {['‹', '1', '›'].map((p, i) => (
                <li key={i} className={`page-item${p === '1' ? ' active' : ''}`}>
                  <a className="page-link" href="#">{p}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ── Create Coupon Offcanvas ──────────────────────────────────── */}
      {showCanvas && (
        <div className="offcanvas offcanvas-end show" style={{ visibility: 'visible', width: 420 }}>
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">
              <i className="ti tabler-tag me-2 text-primary"></i>Create New Coupon
            </h5>
            <button type="button" className="btn-close" onClick={() => setShowCanvas(false)}></button>
          </div>
          <div className="offcanvas-body">
            <p className="text-body-secondary mb-5">Set up a discount coupon for your students.</p>

            <div className="mb-4">
              <label className="form-label fw-medium">Coupon Code</label>
              <div className="input-group">
                <input
                  className="form-control"
                  placeholder="e.g. SUMMER25"
                  style={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: 1 }}
                />
                <button className="btn btn-outline-secondary">
                  <i className="ti tabler-refresh me-1"></i>Auto
                </button>
              </div>
              <small className="text-body-secondary">Letters and numbers only, no spaces.</small>
            </div>

            <div className="mb-4">
              <label className="form-label fw-medium">Discount Type</label>
              <div className="d-flex gap-2">
                {(['%', '₹'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setDiscountType(t)}
                    className={`btn flex-grow-1 ${discountType === t ? 'btn-primary' : 'btn-outline-secondary'}`}
                  >
                    <i className={`ti ${t === '%' ? 'tabler-percentage' : 'tabler-currency-rupee'} me-1`}></i>
                    {t === '%' ? 'Percentage' : 'Fixed Amount'}
                  </button>
                ))}
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-6">
                <label className="form-label fw-medium">
                  {discountType === '%' ? 'Percentage (%)' : 'Amount (₹)'}
                </label>
                <input className="form-control" type="number" placeholder={discountType === '%' ? '20' : '500'} />
              </div>
              <div className="col-6">
                <label className="form-label fw-medium">Min Cart Value (₹)</label>
                <input className="form-control" type="number" placeholder="0 = no minimum" />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-medium">Applicable To</label>
              {['All Courses', 'Criminal Law Fundamentals', 'Constitutional Law', 'CLAT 2025 Preparation', 'Evidence Act Deep Dive'].map((course, i) => (
                <div key={course} className="form-check mb-1">
                  <input className="form-check-input" type="checkbox" defaultChecked={i === 0} id={`course-${i}`} />
                  <label className="form-check-label small" htmlFor={`course-${i}`}>{course}</label>
                </div>
              ))}
            </div>

            <div className="row g-3 mb-4">
              <div className="col-6">
                <label className="form-label fw-medium">Expiry Date</label>
                <input className="form-control" type="date" defaultValue="2025-06-30" />
              </div>
              <div className="col-6">
                <label className="form-label fw-medium">Usage Limit</label>
                <input className="form-control" type="number" placeholder="Unlimited" />
              </div>
            </div>

            <div className="mb-6">
              <label className="form-label fw-medium">Per Student Limit</label>
              <select className="form-select">
                <option value="1">1 use per student</option>
                <option value="2">2 uses per student</option>
                <option value="0">Unlimited</option>
              </select>
            </div>

            <div className="d-flex gap-3">
              <button className="btn btn-primary flex-grow-1">
                <i className="ti tabler-tag me-1"></i>Save Coupon
              </button>
              <button className="btn btn-outline-secondary" onClick={() => setShowCanvas(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showCanvas && (
        <div className="offcanvas-backdrop fade show" onClick={() => setShowCanvas(false)}></div>
      )}

    </AdminLayout>
  );
}
