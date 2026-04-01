'use client';
import { useState } from 'react';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

// ── Data ──────────────────────────────────────────────────────────────────────

const queue = [
  {
    id: 0,
    name: 'Krishna Law Academy',
    owner: 'Sunita Verma',
    email: 'sunita@krishnalaw.in',
    applied: 'March 27, 2025 · 3:14 PM',
    appliedRelative: '5 days ago',
    type: 'Coaching Centre',
    phone: '+91 99887 65432',
    location: 'Hyderabad, Telangana',
    students: '~200 (first year)',
    plan: 'Growth',
    planColor: 'primary',
    gst: '36AAXPV1234F1ZX',
    website: 'krishnalaw.in',
    social: 'instagram.com/krishnalaw',
    notes: 'GST verified. Social presence looks legitimate. Founder has 8 years coaching experience.',
    avatarColor: '#7367F0',
  },
  {
    id: 1,
    name: 'Delhi Moot Society',
    owner: 'Arun Chandra',
    email: 'arun@delhimoot.in',
    applied: 'March 28, 2025 · 11:00 AM',
    appliedRelative: '4 days ago',
    type: 'University Society',
    phone: '+91 98110 00234',
    location: 'New Delhi',
    students: '~50 (current batch)',
    plan: 'Starter',
    planColor: 'info',
    gst: '',
    website: 'delhimootsociety.org',
    social: 'linkedin.com/company/delhimoot',
    notes: '',
    avatarColor: '#00CFE8',
  },
  {
    id: 2,
    name: 'LegalPro Academy',
    owner: 'Kavita Rao',
    email: 'kavita@legalpro.in',
    applied: 'March 29, 2025 · 9:45 AM',
    appliedRelative: '3 days ago',
    type: 'Online Academy',
    phone: '+91 97000 11223',
    location: 'Bangalore, Karnataka',
    students: '~500',
    plan: 'Pro',
    planColor: 'success',
    gst: '29AABCK9876H1Z2',
    website: 'legalpro.in',
    social: 'twitter.com/legalproacademy',
    notes: 'Strong online presence. Instagram has 12k followers.',
    avatarColor: '#28C76F',
  },
];

type Action = 'approve' | 'reject' | 'info' | null;

// ── Component ─────────────────────────────────────────────────────────────────

export default function ApproveInstitutePage() {
  const [current, setCurrent] = useState(0);
  const [action, setAction]   = useState<Action>(null);

  const inst = queue[current];

  function selectInst(i: number) {
    setCurrent(i);
    setAction(null);
  }

  return (
    <SuperAdminLayout title="Approve Institutes" breadcrumb="Home / Institutes / Approve">

      {/* ── Top stats strip ───────────────────────────────────────── */}
      <div className="row g-4 mb-6">
        {[
          { label: 'Awaiting Review', value: '7',  icon: 'tabler-clock',        color: 'bg-label-warning', text: 'text-warning' },
          { label: 'Approved Today',  value: '3',  icon: 'tabler-circle-check', color: 'bg-label-success', text: 'text-success' },
          { label: 'Rejected Today',  value: '1',  icon: 'tabler-circle-x',     color: 'bg-label-danger',  text: 'text-danger'  },
          { label: 'Avg. Response',   value: '4h', icon: 'tabler-bolt',         color: 'bg-label-info',    text: 'text-info'    },
        ].map(s => (
          <div key={s.label} className="col-6 col-xl-3">
            <div className="card">
              <div className="card-body py-4">
                <div className="d-flex align-items-center gap-3">
                  <div className={`avatar flex-shrink-0`}>
                    <span className={`avatar-initial rounded ${s.color}`}>
                      <i className={`icon-base ti ${s.icon} icon-22px`}></i>
                    </span>
                  </div>
                  <div>
                    <div className={`h4 mb-0 fw-bold ${s.text}`}>{s.value}</div>
                    <small className="text-body-secondary">{s.label}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-6">

        {/* ══════════════════════════════════════════ LEFT COL (col-xl-4) */}
        <div className="col-xl-4">

          {/* ── Application Queue ──────────────────────────────────── */}
          <div className="card mb-6">
            <div className="card-header border-bottom d-flex align-items-center justify-content-between">
              <div>
                <h5 className="card-title mb-0">Application Queue</h5>
                <p className="card-subtitle mt-1 mb-0">Select to review</p>
              </div>
              <span className="badge bg-label-warning rounded-pill px-3 py-2 fw-bold">7 pending</span>
            </div>
            <div className="card-body p-0">
              <ul className="list-group list-group-flush">
                {queue.map((q, i) => (
                  <li
                    key={q.id}
                    onClick={() => selectInst(i)}
                    className={`list-group-item list-group-item-action px-4 py-3 ${i === current ? 'active' : ''}`}
                    style={{
                      cursor: 'pointer',
                      borderLeft: i === current ? '3px solid #7367F0' : '3px solid transparent',
                      background: i === current ? 'rgba(115,103,240,0.08)' : undefined,
                      transition: 'all 0.15s',
                    }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      {/* Avatar */}
                      <div
                        style={{
                          width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                          background: q.avatarColor,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#fff', fontWeight: 700, fontSize: 16,
                        }}
                      >
                        {q.name[0]}
                      </div>
                      {/* Info */}
                      <div className="flex-grow-1 min-w-0">
                        <div className={`fw-semibold small text-truncate ${i === current ? 'text-primary' : 'text-heading'}`}>
                          {q.name}
                        </div>
                        <div className="d-flex align-items-center gap-2 mt-1">
                          <span className="badge bg-label-secondary" style={{ fontSize: 10 }}>{q.type}</span>
                          <small className="text-body-secondary">{q.appliedRelative}</small>
                        </div>
                      </div>
                      {/* Indicator */}
                      <span
                        className="badge rounded-pill"
                        style={{
                          width: 8, height: 8, padding: 0,
                          background: i === current ? '#7367F0' : '#FF9F43',
                          flexShrink: 0,
                        }}
                      />
                    </div>
                  </li>
                ))}
                {/* Placeholder for remaining */}
                <li className="list-group-item px-4 py-3 text-center">
                  <small className="text-body-secondary">
                    <i className="ti tabler-dots me-1"></i>4 more applications not shown
                  </small>
                  <div className="mt-1">
                    <a href="/super-admin/institutes" className="small text-primary">View all in Institutes →</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Take Action ────────────────────────────────────────── */}
          <div className="card mb-6">
            <div className="card-header border-bottom">
              <h5 className="card-title mb-0">Take Action</h5>
              <p className="card-subtitle mt-1 mb-0">Choose a decision for this application</p>
            </div>
            <div className="card-body d-flex flex-column gap-3">
              {[
                { id: 'approve' as Action, icon: 'tabler-circle-check', color: 'success', label: 'Approve',      desc: 'Activate account & send credentials' },
                { id: 'reject'  as Action, icon: 'tabler-circle-x',     color: 'danger',  label: 'Reject',       desc: 'Deny with a reason email'            },
                { id: 'info'    as Action, icon: 'tabler-message-dots', color: 'info',    label: 'Request Info', desc: 'Ask for additional documents'        },
              ].map(a => (
                <div
                  key={a.id!}
                  onClick={() => setAction(prev => prev === a.id ? null : a.id)}
                  className={`d-flex align-items-center gap-3 p-3 rounded-3 border ${
                    action === a.id ? `border-${a.color} bg-label-${a.color}` : 'border-transparent'
                  }`}
                  style={{ cursor: 'pointer', transition: 'all 0.15s', background: action === a.id ? undefined : 'rgba(var(--bs-secondary-rgb),0.05)' }}
                >
                  <div className={`avatar flex-shrink-0`}>
                    <span className={`avatar-initial rounded bg-label-${a.color}`}>
                      <i className={`icon-base ti ${a.icon} icon-md`}></i>
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <div className={`fw-semibold small text-${a.color}`}>{a.label}</div>
                    <small className="text-body-secondary">{a.desc}</small>
                  </div>
                  {action === a.id && (
                    <i className={`ti tabler-circle-check-filled text-${a.color} icon-md flex-shrink-0`}></i>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Submit + Navigation ────────────────────────────────── */}
          <div className="card">
            <div className="card-body d-flex flex-column gap-3">
              {action && (
                <button
                  className={`btn btn-${action === 'approve' ? 'success' : action === 'reject' ? 'danger' : 'info'} w-100`}
                >
                  <i className={`ti ${
                    action === 'approve' ? 'tabler-circle-check' :
                    action === 'reject'  ? 'tabler-send'         :
                    'tabler-message-forward'
                  } me-2`}></i>
                  {action === 'approve' ? 'Confirm Approval' : action === 'reject' ? 'Send Rejection' : 'Send Info Request'}
                </button>
              )}
              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-secondary flex-grow-1"
                  disabled={current === 0}
                  onClick={() => selectInst(current - 1)}
                >
                  <i className="ti tabler-chevron-left me-1"></i>Prev
                </button>
                <button
                  className="btn btn-outline-secondary flex-grow-1"
                  disabled={current >= queue.length - 1}
                  onClick={() => selectInst(current + 1)}
                >
                  Next<i className="ti tabler-chevron-right ms-1"></i>
                </button>
              </div>
              <div className="text-center">
                <small className="text-body-secondary">
                  Reviewing <strong>{current + 1}</strong> of <strong>{queue.length}</strong> shown &nbsp;·&nbsp; 7 total pending
                </small>
              </div>
            </div>
          </div>

        </div>
        {/* ── end left col ─────────────────────────────────────────── */}

        {/* ══════════════════════════════════════════ RIGHT COL (col-xl-8) */}
        <div className="col-xl-8">

          {/* ── Application Profile Header ─────────────────────────── */}
          <div className="card mb-6">
            {/* Colored top band */}
            <div
              style={{
                height: 6, borderRadius: '0.375rem 0.375rem 0 0',
                background: `linear-gradient(90deg, ${inst.avatarColor}, ${inst.avatarColor}88)`,
              }}
            />
            <div className="card-body">
              <div className="d-flex flex-wrap align-items-start justify-content-between gap-4">
                {/* Avatar + name */}
                <div className="d-flex align-items-center gap-4">
                  <div
                    style={{
                      width: 80, height: 80, borderRadius: 16, flexShrink: 0,
                      background: inst.avatarColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 800, fontSize: 30,
                      boxShadow: `0 8px 24px ${inst.avatarColor}55`,
                    }}
                  >
                    {inst.name[0]}
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1">{inst.name}</h4>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <span className="badge bg-label-secondary">{inst.type}</span>
                      <span className={`badge bg-label-${inst.planColor}`}>{inst.plan} Plan</span>
                      <span className="text-body-secondary small">
                        <i className="ti tabler-map-pin me-1"></i>{inst.location}
                      </span>
                    </div>
                    <div className="mt-2 d-flex align-items-center gap-3 flex-wrap">
                      <small className="text-body-secondary">
                        <i className="ti tabler-calendar me-1"></i>Applied {inst.applied}
                      </small>
                      <small className="text-body-secondary">
                        <i className="ti tabler-user me-1"></i>{inst.owner}
                      </small>
                    </div>
                  </div>
                </div>
                {/* Status badge */}
                <span className="badge bg-label-warning rounded-pill px-3 py-2 fw-semibold" style={{ fontSize: 12 }}>
                  <span style={{ display:'inline-block', width:7, height:7, borderRadius:'50%', background:'#FF9F43', marginRight:6 }}></span>
                  Pending Review
                </span>
              </div>
            </div>
          </div>

          {/* ── Details + Verification ─────────────────────────────── */}
          <div className="row g-6 mb-6">

            {/* Application Details */}
            <div className="col-md-7">
              <div className="card h-100">
                <div className="card-header border-bottom">
                  <h6 className="card-title mb-0 d-flex align-items-center gap-2">
                    <span className="avatar avatar-xs">
                      <span className="avatar-initial rounded bg-label-primary">
                        <i className="icon-base ti tabler-list-details icon-sm"></i>
                      </span>
                    </span>
                    Application Details
                  </h6>
                </div>
                <div className="card-body">
                  <div className="row g-4">
                    {[
                      { label: 'Owner / Founder', value: inst.owner,    icon: 'tabler-user'            },
                      { label: 'Email',            value: inst.email,    icon: 'tabler-mail'            },
                      { label: 'Phone',            value: inst.phone,    icon: 'tabler-phone'           },
                      { label: 'Location',         value: inst.location, icon: 'tabler-map-pin'         },
                      { label: 'Est. Students',    value: inst.students, icon: 'tabler-users'           },
                      { label: 'Requested Plan',   value: inst.plan,     icon: 'tabler-diamond'         },
                    ].map(d => (
                      <div key={d.label} className="col-12">
                        <div className="d-flex align-items-start gap-3">
                          <div className="avatar avatar-xs flex-shrink-0 mt-1">
                            <span className="avatar-initial rounded bg-label-secondary">
                              <i className={`icon-base ti ${d.icon}`} style={{ fontSize: 12 }}></i>
                            </span>
                          </div>
                          <div className="d-flex w-100 justify-content-between align-items-start">
                            <span className="text-body-secondary small" style={{ minWidth: 130 }}>{d.label}</span>
                            <span className="fw-medium small text-end">{d.value}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Verification + Notes */}
            <div className="col-md-5">
              <div className="card h-100">
                <div className="card-header border-bottom">
                  <h6 className="card-title mb-0 d-flex align-items-center gap-2">
                    <span className="avatar avatar-xs">
                      <span className="avatar-initial rounded bg-label-success">
                        <i className="icon-base ti tabler-shield-check icon-sm"></i>
                      </span>
                    </span>
                    Verification
                  </h6>
                </div>
                <div className="card-body d-flex flex-column gap-0">
                  {[
                    { label: 'GST Number',   value: inst.gst     || 'Not provided', verified: !!inst.gst     },
                    { label: 'Website',      value: inst.website || 'Not provided', verified: !!inst.website },
                    { label: 'Social Media', value: inst.social  || 'Not provided', verified: !!inst.social  },
                  ].map((v, i, arr) => (
                    <div
                      key={v.label}
                      className={`d-flex align-items-start justify-content-between py-3 ${i < arr.length - 1 ? 'border-bottom' : ''}`}
                    >
                      <div>
                        <div className="small text-body-secondary mb-1">{v.label}</div>
                        <div className="small fw-semibold text-truncate" style={{ maxWidth: 140 }}>{v.value}</div>
                      </div>
                      <span className={`badge ${v.verified ? 'bg-label-success text-success' : 'bg-label-danger text-danger'} ms-3 flex-shrink-0`}>
                        <i className={`ti ${v.verified ? 'tabler-check' : 'tabler-x'} icon-xs me-1`}></i>
                        {v.verified ? 'OK' : 'Missing'}
                      </span>
                    </div>
                  ))}

                  {/* Internal notes */}
                  <div className="mt-4 pt-3 border-top flex-grow-1">
                    <label className="form-label small fw-semibold text-heading mb-2">
                      <i className="ti tabler-notes me-1 text-body-secondary"></i>Internal Notes
                    </label>
                    <textarea
                      className="form-control form-control-sm"
                      rows={3}
                      style={{ resize: 'none', fontSize: 12 }}
                      placeholder="Add notes for your team…"
                      defaultValue={inst.notes}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Dynamic action panel ───────────────────────────────── */}
          {action && (
            <div className={`card border border-${action === 'approve' ? 'success' : action === 'reject' ? 'danger' : 'info'}`}
              style={{ boxShadow: `0 4px 20px rgba(${action === 'approve' ? '40,199,111' : action === 'reject' ? '234,84,85' : '0,207,232'},0.12)` }}
            >
              <div className="card-body">
                {action === 'approve' && (
                  <div className="d-flex align-items-start gap-4">
                    <div className="avatar flex-shrink-0">
                      <span className="avatar-initial rounded bg-label-success">
                        <i className="icon-base ti tabler-circle-check icon-md"></i>
                      </span>
                    </div>
                    <div>
                      <div className="fw-semibold text-success mb-1">Ready to Approve</div>
                      <div className="small text-body-secondary">
                        This will immediately create an institute account and send login credentials to{' '}
                        <strong className="text-heading">{inst.email}</strong>.
                        The institute will be activated on the{' '}
                        <span className={`badge bg-label-${inst.planColor}`}>{inst.plan} Plan</span>.
                      </div>
                    </div>
                  </div>
                )}
                {action === 'reject' && (
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="avatar avatar-sm flex-shrink-0">
                        <span className="avatar-initial rounded bg-label-danger">
                          <i className="icon-base ti tabler-circle-x icon-md"></i>
                        </span>
                      </div>
                      <div>
                        <div className="fw-semibold text-danger">Reason for Rejection</div>
                        <small className="text-body-secondary">This message will be emailed to {inst.email}</small>
                      </div>
                    </div>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Explain why the application is being rejected…"
                    />
                  </div>
                )}
                {action === 'info' && (
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div className="avatar avatar-sm flex-shrink-0">
                        <span className="avatar-initial rounded bg-label-info">
                          <i className="icon-base ti tabler-message-dots icon-md"></i>
                        </span>
                      </div>
                      <div>
                        <div className="fw-semibold text-info">Request for Information</div>
                        <small className="text-body-secondary">This message will be emailed to {inst.email}</small>
                      </div>
                    </div>
                    <textarea
                      className="form-control"
                      rows={5}
                      defaultValue={`Hi ${inst.owner},\n\nThank you for applying to LexEd. Could you please share a copy of your GST certificate and any faculty credentials for our verification process?\n\nBest regards,\nLexEd Team`}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
        {/* ── end right col ────────────────────────────────────────── */}

      </div>
    </SuperAdminLayout>
  );
}
