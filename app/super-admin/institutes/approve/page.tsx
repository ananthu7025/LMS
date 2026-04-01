'use client';
import { useState } from 'react';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

// ── Data ──────────────────────────────────────────────────────────────────────

const queue = [
  {
    id: 0, name: 'Krishna Law Academy', owner: 'Sunita Verma',   email: 'sunita@krishnalaw.in',  applied: 'March 27, 2025 · 3:14 PM',
    type: 'Coaching Centre', phone: '+91 99887 65432', location: 'Hyderabad, Telangana',
    students: '~200 (first year)', plan: 'Growth (₹4,999/mo)',
    gst: '36AAXPV1234F1ZX', website: 'krishnalaw.in', social: 'instagram.com/krishnalaw',
    notes: 'GST verified. Social presence looks legitimate. Founder has 8 years coaching experience.',
  },
  {
    id: 1, name: 'Delhi Moot Society',  owner: 'Arun Chandra',   email: 'arun@delhimoot.in',     applied: 'March 28, 2025 · 11:00 AM',
    type: 'University Society', phone: '+91 98110 00234', location: 'New Delhi',
    students: '~50 (current batch)', plan: 'Starter (₹1,999/mo)',
    gst: 'Not provided', website: 'delhimootsociety.org', social: 'linkedin.com/company/delhimoot',
    notes: '',
  },
  {
    id: 2, name: 'LegalPro Academy',    owner: 'Kavita Rao',     email: 'kavita@legalpro.in',    applied: 'March 29, 2025 · 9:45 AM',
    type: 'Online Academy', phone: '+91 97000 11223', location: 'Bangalore, Karnataka',
    students: '~500', plan: 'Pro (₹12,999/mo)',
    gst: '29AABCK9876H1Z2', website: 'legalpro.in', social: 'twitter.com/legalproacademy',
    notes: 'Strong online presence. Instagram has 12k followers.',
  },
  { id: 3, name: '4 more pending…', owner: '', email: '', applied: '', type: '', phone: '', location: '', students: '', plan: '', gst: '', website: '', social: '', notes: '' },
];

type Action = 'approve' | 'reject' | 'info' | null;

// ── Component ─────────────────────────────────────────────────────────────────

export default function ApproveInstitutePage() {
  const [current, setCurrent] = useState(0);
  const [action, setAction]   = useState<Action>(null);

  const inst = queue[current];
  const realQueue = queue.slice(0, 3);

  return (
    <SuperAdminLayout title="Approve Institutes" breadcrumb="Home / Institutes / Approve">

      {/* ── Header strip ──────────────────────────────────────────── */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-6">
        <div>
          <h5 className="mb-1">Pending Applications</h5>
          <p className="text-body-secondary mb-0 small">
            <span className="badge bg-label-warning me-2">7 pending</span>
            Review each application and approve, reject, or request more information.
          </p>
        </div>
        <a href="/super-admin/institutes" className="btn btn-outline-secondary">
          <i className="ti tabler-arrow-left me-1"></i>Back to Institutes
        </a>
      </div>

      {/* ── Queue tabs ────────────────────────────────────────────── */}
      <div className="d-flex flex-nowrap overflow-auto gap-2 mb-6 pb-1">
        {queue.map((q, i) => (
          <button
            key={q.id}
            onClick={() => { if (i < 3) { setCurrent(i); setAction(null); } }}
            disabled={i === 3}
            className={`btn flex-shrink-0 d-flex align-items-center gap-2 ${
              i === current
                ? 'btn-primary'
                : i === 3
                  ? 'btn-label-secondary opacity-50'
                  : 'btn-outline-secondary'
            }`}
            style={{ minWidth: 180 }}
          >
            {i === current && <i className="ti tabler-eye icon-sm"></i>}
            <span className="small fw-semibold text-truncate" style={{ maxWidth: 140 }}>{q.name}</span>
          </button>
        ))}
      </div>

      <div className="row g-6">

        {/* ── Application Card ─────────────────────────────── col-xl-8 */}
        <div className="col-xl-8">
          <div className="card mb-6">
            {/* Card header */}
            <div className="card-header border-bottom">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="d-flex align-items-center gap-4">
                  <div className="avatar" style={{ width: 56, height: 56 }}>
                    <span
                      className="avatar-initial rounded bg-label-primary fw-bold"
                      style={{ width: 56, height: 56, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12 }}
                    >
                      {inst.name[0]}
                    </span>
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">{inst.name}</h5>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <small className="text-body-secondary">
                        <i className="ti tabler-calendar me-1"></i>{inst.applied}
                      </small>
                      {inst.type && (
                        <span className="badge bg-label-secondary">{inst.type}</span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="badge bg-label-warning rounded-pill px-3 py-2">Pending Review</span>
              </div>
            </div>

            <div className="card-body">
              <div className="row g-6">
                {/* Application details */}
                <div className="col-md-7">
                  <h6 className="fw-bold mb-4 d-flex align-items-center gap-2">
                    <i className="ti tabler-list-details text-primary"></i>Application Details
                  </h6>
                  <div className="row g-3">
                    {[
                      { label: 'Institute Name',  value: inst.name,     icon: 'tabler-building'       },
                      { label: 'Type',            value: inst.type,     icon: 'tabler-tag'             },
                      { label: 'Owner / Founder', value: inst.owner,    icon: 'tabler-user'            },
                      { label: 'Email',           value: inst.email,    icon: 'tabler-mail'            },
                      { label: 'Phone',           value: inst.phone,    icon: 'tabler-phone'           },
                      { label: 'Location',        value: inst.location, icon: 'tabler-map-pin'         },
                      { label: 'Est. Students',   value: inst.students, icon: 'tabler-users'           },
                      { label: 'Requested Plan',  value: inst.plan,     icon: 'tabler-diamond'         },
                    ].map(d => (
                      <div key={d.label} className="col-12">
                        <div className="d-flex align-items-start gap-3">
                          <i className={`ti ${d.icon} text-body-secondary mt-1`} style={{ fontSize: 14, flexShrink: 0 }}></i>
                          <div className="d-flex w-100 gap-2">
                            <span className="text-body-secondary small" style={{ minWidth: 130 }}>{d.label}</span>
                            <span className="fw-medium small">{d.value}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Verification */}
                <div className="col-md-5">
                  <h6 className="fw-bold mb-4 d-flex align-items-center gap-2">
                    <i className="ti tabler-shield-check text-success"></i>Verification Data
                  </h6>
                  <div className="mb-4">
                    {[
                      { label: 'GST Number',    value: inst.gst,     verified: !!inst.gst && inst.gst !== 'Not provided' },
                      { label: 'Website',       value: inst.website, verified: true },
                      { label: 'Social Media',  value: inst.social,  verified: true },
                    ].map(v => (
                      <div key={v.label} className="d-flex align-items-start justify-content-between mb-3 pb-3 border-bottom">
                        <div>
                          <div className="small text-body-secondary">{v.label}</div>
                          <div className="small fw-semibold">{v.value}</div>
                        </div>
                        <span className={`badge ${v.verified ? 'bg-label-success' : 'bg-label-danger'} ms-3`}>
                          <i className={`ti ${v.verified ? 'tabler-check' : 'tabler-x'} icon-sm me-1`}></i>
                          {v.verified ? 'Verified' : 'Missing'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Admin notes */}
                  <div className="bg-label-secondary rounded-3 p-4">
                    <label className="form-label fw-semibold small text-heading mb-2">
                      <i className="ti tabler-notes me-1"></i>Internal Notes
                    </label>
                    <textarea
                      className="form-control form-control-sm border-0"
                      rows={4}
                      style={{ background: 'transparent', resize: 'none' }}
                      placeholder="Add notes for your team…"
                      defaultValue={inst.notes}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Dynamic action content ── */}
          {action && (
            <div className={`card mb-6 border border-${action === 'approve' ? 'success' : action === 'reject' ? 'danger' : 'info'}`}>
              <div className="card-body">
                {action === 'approve' && (
                  <div className="alert bg-label-success border-0 d-flex align-items-start gap-3 mb-0">
                    <i className="ti tabler-circle-check text-success mt-1" style={{ fontSize: 22, flexShrink: 0 }}></i>
                    <div>
                      <div className="fw-semibold mb-1">Ready to Approve</div>
                      <div className="small text-body-secondary">
                        This will immediately create an institute account and send login credentials to{' '}
                        <strong className="text-heading">{inst.email}</strong>.
                        The institute will be activated on the <strong>{inst.plan}</strong> plan.
                      </div>
                    </div>
                  </div>
                )}
                {action === 'reject' && (
                  <div>
                    <label className="form-label fw-semibold text-danger">
                      <i className="ti tabler-message-x me-1"></i>Reason for Rejection <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Explain why the application is being rejected (sent to the applicant)…"
                    />
                    <small className="text-body-secondary mt-1 d-block">This message will be emailed to {inst.email}</small>
                  </div>
                )}
                {action === 'info' && (
                  <div>
                    <label className="form-label fw-semibold text-info">
                      <i className="ti tabler-message-question me-1"></i>Request for Information
                    </label>
                    <textarea
                      className="form-control"
                      rows={4}
                      defaultValue={`Hi ${inst.owner},\n\nThank you for applying to LexEd. Could you please share a copy of your GST certificate and any faculty credentials for our verification process?\n\nBest,\nLexEd Team`}
                    />
                    <small className="text-body-secondary mt-1 d-block">This message will be emailed to {inst.email}</small>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ── Action Panel ─────────────────────────────────── col-xl-4 */}
        <div className="col-xl-4">

          {/* Action selection cards */}
          <div className="card mb-6">
            <div className="card-header border-bottom">
              <h5 className="card-title mb-0">Take Action</h5>
            </div>
            <div className="card-body">
              <div className="d-flex flex-column gap-3">
                {[
                  { id: 'approve' as Action, icon: 'tabler-circle-check', color: 'success', label: 'Approve',       desc: 'Activate and send credentials'   },
                  { id: 'reject'  as Action, icon: 'tabler-circle-x',     color: 'danger',  label: 'Reject',        desc: 'Deny with reason email'           },
                  { id: 'info'    as Action, icon: 'tabler-message-dots', color: 'info',    label: 'Request Info',  desc: 'Ask for additional documents'     },
                ].map(a => (
                  <div
                    key={a.id!}
                    className={`d-flex align-items-center gap-3 p-3 rounded-3 border-2 cursor-pointer ${
                      action === a.id ? `border border-${a.color} bg-label-${a.color}` : 'border'
                    }`}
                    style={{ cursor: 'pointer', transition: 'all 0.15s' }}
                    onClick={() => setAction(prev => prev === a.id ? null : a.id)}
                  >
                    <div className={`avatar`}>
                      <span className={`avatar-initial rounded bg-label-${a.color}`}>
                        <i className={`icon-base ti ${a.icon} icon-md`}></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <div className={`fw-semibold small text-${a.color}`}>{a.label}</div>
                      <small className="text-body-secondary">{a.desc}</small>
                    </div>
                    {action === a.id && (
                      <i className={`ti tabler-circle-check text-${a.color} icon-md`}></i>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit + navigation */}
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
                  } me-1`}></i>
                  {action === 'approve' ? 'Confirm Approval' : action === 'reject' ? 'Send Rejection' : 'Send Request'}
                </button>
              )}

              <div className="d-flex gap-2">
                <button
                  className="btn btn-outline-secondary flex-grow-1"
                  disabled={current === 0}
                  onClick={() => { setCurrent(p => p - 1); setAction(null); }}
                >
                  <i className="ti tabler-chevron-left me-1"></i>Prev
                </button>
                <button
                  className="btn btn-outline-secondary flex-grow-1"
                  disabled={current >= realQueue.length - 1}
                  onClick={() => { setCurrent(p => p + 1); setAction(null); }}
                >
                  Next<i className="ti tabler-chevron-right ms-1"></i>
                </button>
              </div>

              <div className="text-center">
                <small className="text-body-secondary">
                  {current + 1} of {realQueue.length} shown · 7 total pending
                </small>
              </div>
            </div>
          </div>

          {/* Queue summary */}
          <div className="card mt-6">
            <div className="card-header border-bottom">
              <h6 className="card-title mb-0">Queue Summary</h6>
            </div>
            <div className="card-body">
              {[
                { label: 'Awaiting Review', count: 7,  color: 'warning' },
                { label: 'Approved Today',  count: 3,  color: 'success' },
                { label: 'Rejected Today',  count: 1,  color: 'danger'  },
              ].map(s => (
                <div key={s.label} className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className={`badge bg-label-${s.color} p-1 rounded`} style={{ width: 8, height: 8 }}></span>
                    <small className="text-body-secondary">{s.label}</small>
                  </div>
                  <span className={`fw-bold text-${s.color}`}>{s.count}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </SuperAdminLayout>
  );
}
