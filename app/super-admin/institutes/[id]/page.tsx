'use client';
import { useState } from 'react';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

// ── Mock data ──────────────────────────────────────────────────────────────

const institute = {
  name:    'Sharma Law Academy',
  initial: 'S',
  slug:    'sharma-law.lexed.in',
  status:  'Active',
  plan:    'Pro',
  owner:   'Rajesh Sharma',
  email:   'rajesh@sharmalaw.in',
  phone:   '+91 98765 43210',
  address: 'B-42, Connaught Place, New Delhi',
  joined:  'January 12, 2024',
  type:    'Coaching Centre',
  region:  'Delhi',
  students:    892,
  tutors:      14,
  courses:     23,
  storageGB:   28,
  // plan limits
  maxStudents: 1500,
  maxTutors:   50,
  maxCourses:  100,
  maxStorage:  50,
  // billing
  price:       '₹12,999',
  renewal:     'April 12, 2025',
  daysUsed:    22,
  daysTotal:   30,
  lifetimePaid:'₹1,55,988',
  paymentMethod:'Razorpay — HDFC ****4521',
  revenueMonth:'₹94,200',
  revenueAll:  '₹18,84,000',
};

const planFeatures = [
  '1,500 Students',
  '50 Tutors',
  '100 Courses',
  '50 GB Storage',
  'AI Proctoring',
  'Priority Support',
];

const invoices = [
  { id: 'INV-001', status: 'Paid',    amount: '₹12,999', date: 'Mar 1, 2025'  },
  { id: 'INV-002', status: 'Paid',    amount: '₹12,999', date: 'Feb 1, 2025'  },
  { id: 'INV-003', status: 'Paid',    amount: '₹12,999', date: 'Jan 1, 2025'  },
  { id: 'INV-004', status: 'Paid',    amount: '₹12,999', date: 'Dec 1, 2024'  },
  { id: 'INV-005', status: 'Overdue', amount: '₹12,999', date: 'Nov 1, 2024'  },
];

const activityLog = [
  { color: 'primary', icon: 'tabler-check',          title: 'Plan renewed to Pro',               sub: 'Payment of ₹12,999 received via Razorpay', time: '2 days ago'  },
  { color: 'success', icon: 'tabler-user-plus',       title: '45 new students enrolled',          sub: 'Batch: CLAT 2026 Intensive',               time: '5 days ago'  },
  { color: 'info',    icon: 'tabler-book',            title: 'New course published',              sub: 'Constitutional Law — Advanced Module',     time: '1 week ago'  },
  { color: 'warning', icon: 'tabler-alert-triangle',  title: 'Storage at 56% capacity',           sub: 'Consider upgrading or clearing old files', time: '2 weeks ago' },
  { color: 'success', icon: 'tabler-building-check',  title: 'Institute activated',               sub: 'Onboarding completed by admin',            time: 'Jan 12, 2024'},
];

type Tab = 'overview' | 'billing' | 'activity';

// ── Component ──────────────────────────────────────────────────────────────

export default function InstituteDetailPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const daysRemPct = Math.round((institute.daysUsed / institute.daysTotal) * 100);

  return (
    <SuperAdminLayout
      title="Institute Detail"
      breadcrumb={`Home / Institutes / ${institute.name}`}
    >
      <div className="row">

        {/* ── Left Sidebar ─────────────────────────────────────── col-xl-4 */}
        <div className="col-xl-4 col-lg-5 order-1 order-md-0">

          {/* Profile Card */}
          <div className="card mb-6">
            <div className="card-body pt-12">

              {/* Avatar + name + badges */}
              <div className="d-flex align-items-center flex-column mb-6">
                <div
                  className="avatar mb-4"
                  style={{ width: 120, height: 120 }}
                >
                  <span
                    className="avatar-initial rounded bg-label-primary fw-bold"
                    style={{ width: 120, height: 120, fontSize: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}
                  >
                    {institute.initial}
                  </span>
                </div>
                <div className="text-center">
                  <h5 className="mb-2">{institute.name}</h5>
                  <div className="d-flex gap-2 justify-content-center flex-wrap">
                    <span className="badge bg-label-success">{institute.status}</span>
                    <span className="badge bg-label-primary">{institute.plan}</span>
                    <span className="badge bg-label-secondary">{institute.type}</span>
                  </div>
                </div>
              </div>

              {/* Key stats pills */}
              <div className="d-flex justify-content-around flex-wrap my-4 gap-0 gap-md-3 border-top border-bottom py-4">
                {[
                  { icon: 'tabler-users',  label: 'Students', value: institute.students.toLocaleString() },
                  { icon: 'tabler-book',   label: 'Courses',  value: institute.courses },
                  { icon: 'tabler-currency-rupee', label: 'Rev / Mo', value: '₹94K' },
                ].map(s => (
                  <div key={s.label} className="d-flex align-items-center gap-3">
                    <div className="avatar">
                      <div className="avatar-initial bg-label-primary rounded">
                        <i className={`icon-base ti ${s.icon} icon-lg`}></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-0">{s.value}</h5>
                      <span className="text-body-secondary small">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Details list */}
              <h5 className="pb-3 border-bottom mb-4">Details</h5>
              <div className="info-container">
                <ul className="list-unstyled mb-6">
                  {[
                    { label: 'Subdomain',  value: institute.slug,   icon: 'tabler-link'           },
                    { label: 'Owner',      value: institute.owner,  icon: 'tabler-user'           },
                    { label: 'Email',      value: institute.email,  icon: 'tabler-mail'           },
                    { label: 'Phone',      value: institute.phone,  icon: 'tabler-phone'          },
                    { label: 'Location',   value: institute.address,icon: 'tabler-map-pin'        },
                    { label: 'Joined',     value: institute.joined, icon: 'tabler-calendar'       },
                    { label: 'Region',     value: institute.region, icon: 'tabler-building'       },
                  ].map(d => (
                    <li key={d.label} className="mb-3 d-flex align-items-start gap-2">
                      <i className={`ti ${d.icon} text-body-secondary mt-1`} style={{ fontSize: 15, flexShrink: 0 }}></i>
                      <div>
                        <span className="text-body-secondary small d-block" style={{ lineHeight: 1.2 }}>{d.label}</span>
                        <span className="fw-medium small">{d.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Action buttons */}
                <div className="d-flex justify-content-center gap-3">
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#editInstituteModal"
                  >
                    <i className="ti tabler-pencil me-1"></i>Edit
                  </button>
                  <button className="btn btn-label-warning">
                    <i className="ti tabler-player-pause me-1"></i>Suspend
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Card */}
          <div className="card mb-6 border border-2 border-primary" style={{ boxShadow: '0 4px 24px rgba(115,103,240,0.15)' }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <span className="badge bg-label-primary fs-6 px-3 py-2">{institute.plan}</span>
                <div className="d-flex align-items-end">
                  <sub className="h5 text-primary mb-auto mt-1">₹</sub>
                  <h1 className="mb-0 text-primary">12,999</h1>
                  <sub className="h6 fw-normal mb-2 ms-1 text-body-secondary">/mo</sub>
                </div>
              </div>

              <ul className="list-unstyled mb-5">
                {planFeatures.map(f => (
                  <li key={f} className="mb-2 d-flex align-items-center gap-2">
                    <i className="icon-base ti tabler-circle-filled icon-10px text-primary"></i>
                    <span className="small">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="small fw-semibold">Billing Cycle</span>
                <span className="small fw-semibold">{institute.daysUsed} of {institute.daysTotal} days</span>
              </div>
              <div className="progress mb-1 bg-label-primary" style={{ height: 6 }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${daysRemPct}%` }}
                />
              </div>
              <small className="text-body-secondary">
                {institute.daysTotal - institute.daysUsed} days remaining · Renews {institute.renewal}
              </small>

              <div className="d-grid w-100 mt-5">
                <button className="btn btn-primary">
                  <i className="ti tabler-rocket me-1"></i>Upgrade Plan
                </button>
              </div>
            </div>
          </div>

        </div>
        {/* ── /Left Sidebar */}

        {/* ── Right Content ────────────────────────────────────── col-xl-8 */}
        <div className="col-xl-8 col-lg-7 order-0 order-md-1">

          {/* Nav Pills */}
          <div className="nav-align-top mb-6">
            <ul className="nav nav-pills flex-column flex-md-row flex-wrap row-gap-2">
              {([
                { key: 'overview',  icon: 'tabler-chart-bar',   label: 'Overview'  },
                { key: 'billing',   icon: 'tabler-credit-card', label: 'Billing'   },
                { key: 'activity',  icon: 'tabler-activity',    label: 'Activity'  },
              ] as { key: Tab; icon: string; label: string }[]).map(t => (
                <li key={t.key} className="nav-item">
                  <button
                    className={`nav-link${activeTab === t.key ? ' active' : ''}`}
                    onClick={() => setActiveTab(t.key)}
                  >
                    <i className={`icon-base ti ${t.icon} icon-sm me-1_5`}></i>
                    {t.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Overview Tab ── */}
          {activeTab === 'overview' && (
            <>
              {/* Usage stat cards */}
              <div className="row g-4 mb-6">
                {[
                  { label: 'Students',  used: institute.students,  max: institute.maxStudents, unit: '',    icon: 'tabler-users',          color: 'primary' },
                  { label: 'Tutors',    used: institute.tutors,    max: institute.maxTutors,   unit: '',    icon: 'tabler-chalkboard',     color: 'info'    },
                  { label: 'Courses',   used: institute.courses,   max: institute.maxCourses,  unit: '',    icon: 'tabler-book',           color: 'success' },
                  { label: 'Storage',   used: institute.storageGB, max: institute.maxStorage,  unit: ' GB', icon: 'tabler-database',       color: 'warning' },
                ].map(s => {
                  const pct = Math.round((s.used / s.max) * 100);
                  const barColor = pct > 80 ? 'bg-danger' : pct > 60 ? 'bg-warning' : `bg-${s.color}`;
                  return (
                    <div key={s.label} className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-start justify-content-between mb-3">
                            <div className="content-left">
                              <span className="text-heading fw-semibold">{s.label}</span>
                              <div className="d-flex align-items-baseline gap-2 my-1">
                                <h4 className="mb-0">{s.used.toLocaleString()}{s.unit}</h4>
                                <span className="text-body-secondary small">/ {s.max.toLocaleString()}{s.unit}</span>
                              </div>
                              <span className={`badge bg-label-${pct > 80 ? 'danger' : pct > 60 ? 'warning' : s.color} small`}>
                                {pct}% used
                              </span>
                            </div>
                            <div className="avatar">
                              <span className={`avatar-initial rounded bg-label-${s.color}`}>
                                <i className={`icon-base ti ${s.icon} icon-26px`}></i>
                              </span>
                            </div>
                          </div>
                          <div className="progress" style={{ height: 6 }}>
                            <div
                              className={`progress-bar ${barColor}`}
                              role="progressbar"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Revenue summary */}
              <div className="card mb-6">
                <div className="card-header border-bottom">
                  <h5 className="card-title mb-0">Revenue Summary</h5>
                </div>
                <div className="card-body">
                  <div className="row g-4">
                    {[
                      { label: 'This Month',        value: institute.revenueMonth,  icon: 'tabler-trending-up',    color: 'success' },
                      { label: 'All Time Revenue',  value: institute.revenueAll,    icon: 'tabler-currency-rupee', color: 'primary' },
                      { label: 'Platform Fee (10%)',value: '₹1,88,400',            icon: 'tabler-receipt',        color: 'info'    },
                      { label: 'Net to Institute',  value: '₹16,95,600',           icon: 'tabler-wallet',         color: 'warning' },
                    ].map(r => (
                      <div key={r.label} className="col-sm-6">
                        <div className="d-flex align-items-center gap-3">
                          <div className="avatar">
                            <span className={`avatar-initial rounded bg-label-${r.color}`}>
                              <i className={`icon-base ti ${r.icon} icon-22px`}></i>
                            </span>
                          </div>
                          <div>
                            <small className="text-body-secondary d-block">{r.label}</small>
                            <h5 className="mb-0 fw-bold">{r.value}</h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="card">
                <div className="card-header border-bottom">
                  <h5 className="card-title mb-0">Quick Actions</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    {[
                      { label: 'Reset Password',   icon: 'tabler-key',            color: 'btn-outline-secondary' },
                      { label: 'Send Email',        icon: 'tabler-mail',           color: 'btn-outline-info'      },
                      { label: 'View Invoices',     icon: 'tabler-file-invoice',   color: 'btn-outline-primary'   },
                      { label: 'Manage Plan',       icon: 'tabler-diamond',        color: 'btn-outline-success'   },
                      { label: 'Suspend',           icon: 'tabler-player-pause',   color: 'btn-outline-warning'   },
                      { label: 'Delete Institute',  icon: 'tabler-trash',          color: 'btn-outline-danger'    },
                    ].map(a => (
                      <div key={a.label} className="col-6 col-md-4">
                        <button className={`btn ${a.color} w-100 d-flex align-items-center justify-content-center gap-2`}>
                          <i className={`ti ${a.icon}`}></i>
                          <span className="small">{a.label}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ── Billing Tab ── */}
          {activeTab === 'billing' && (
            <>
              {/* Billing details card */}
              <div className="card mb-6">
                <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Billing Details</h5>
                  <button className="btn btn-sm btn-primary">
                    <i className="ti tabler-plus me-1"></i>Record Payment
                  </button>
                </div>
                <div className="card-body">
                  <div className="row g-4">
                    {[
                      { label: 'Current Plan',    value: `Pro (${institute.price}/mo)` },
                      { label: 'Next Renewal',    value: institute.renewal             },
                      { label: 'Lifetime Paid',   value: institute.lifetimePaid        },
                      { label: 'Payment Method',  value: institute.paymentMethod       },
                    ].map(b => (
                      <div key={b.label} className="col-sm-6">
                        <div className="border rounded p-3">
                          <small className="text-body-secondary d-block mb-1">{b.label}</small>
                          <span className="fw-semibold">{b.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Invoice table */}
              <div className="card">
                <div className="card-header border-bottom">
                  <h5 className="card-title mb-0">Invoice History</h5>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="border-top">
                      <tr>
                        <th>#Invoice</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {invoices.map(inv => (
                        <tr key={inv.id}>
                          <td className="fw-semibold text-primary">{inv.id}</td>
                          <td>
                            <span className={`badge ${inv.status === 'Paid' ? 'bg-label-success' : 'bg-label-danger'} rounded-pill`}>
                              <span
                                style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', marginRight: 5, background: inv.status === 'Paid' ? '#28c76f' : '#ea5455' }}
                              />
                              {inv.status}
                            </span>
                          </td>
                          <td className="fw-semibold">{inv.amount}</td>
                          <td className="text-body-secondary">{inv.date}</td>
                          <td>
                            <div className="d-flex gap-1">
                              <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill" title="Download">
                                <i className="ti tabler-download icon-md"></i>
                              </button>
                              <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill" title="Send">
                                <i className="ti tabler-send icon-md"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* ── Activity Tab ── */}
          {activeTab === 'activity' && (
            <div className="card">
              <h5 className="card-header">Institute Activity Timeline</h5>
              <div className="card-body pt-1">
                <ul className="timeline mb-0">
                  {activityLog.map((a, i) => (
                    <li
                      key={i}
                      className={`timeline-item${i < activityLog.length - 1 ? ' timeline-item-transparent' : ''}`}
                    >
                      <span className={`timeline-point timeline-point-${a.color}`}></span>
                      <div className="timeline-event">
                        <div className="timeline-header mb-2">
                          <h6 className="mb-0">{a.title}</h6>
                          <small className="text-body-secondary">{a.time}</small>
                        </div>
                        <p className="mb-0 text-body-secondary small">{a.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>
        {/* ── /Right Content */}

      </div>

      {/* ── Edit Institute Modal ──────────────────────────────────────── */}
      <div className="modal fade" id="editInstituteModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-lg modal-simple">
          <div className="modal-content">
            <div className="modal-body p-6">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="text-center mb-6">
                <h4 className="mb-1">Edit Institute</h4>
                <p className="text-body-secondary small">Update institute details below</p>
              </div>
              <form className="row g-5" onSubmit={e => e.preventDefault()}>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Institute Name</label>
                  <input type="text" className="form-control" defaultValue={institute.name} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Owner Name</label>
                  <input type="text" className="form-control" defaultValue={institute.owner} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Email</label>
                  <input type="email" className="form-control" defaultValue={institute.email} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Phone</label>
                  <input type="tel" className="form-control" defaultValue={institute.phone} />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Address</label>
                  <input type="text" className="form-control" defaultValue={institute.address} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Region</label>
                  <select className="form-select" defaultValue={institute.region}>
                    {['Delhi','Mumbai','Bangalore','Chennai','Hyderabad','Pune','Kolkata'].map(r => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold">Status</label>
                  <select className="form-select" defaultValue={institute.status}>
                    <option>Active</option>
                    <option>Trial</option>
                    <option>Suspended</option>
                  </select>
                </div>
                <div className="col-12 d-flex gap-3 justify-content-center pt-2">
                  <button type="submit" className="btn btn-primary px-5">Save Changes</button>
                  <button type="reset" className="btn btn-label-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </SuperAdminLayout>
  );
}
