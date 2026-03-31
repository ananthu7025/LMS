'use client';
import { useState } from 'react';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

export default function ApproveInstitutePage() {
  const [action, setAction] = useState<'approve' | 'reject' | 'info' | null>(null);

  return (
    <SuperAdminLayout active="/super-admin/institutes" title="Approve New Institute" breadcrumb="Home / Institutes / Approve">
      <div className="container-xxl p-0" style={{ maxWidth: 900 }}>
        
        {/* Progress / Selection strip */}
        <div className="d-flex flex-nowrap overflow-auto gap-2 mb-4 pb-2">
          {['Krishna Law Academy', 'Delhi Moot Society', 'LegalPro Academy', '4 more...'].map((name, i) => (
            <div 
              key={i} 
              className={`flex-shrink-0 px-3 py-2 rounded border cursor-pointer small ${i === 0 ? 'bg-label-primary border-primary fw-bold' : 'bg-card border-secondary opacity-75'}`}
              style={{ minWidth: 160 }}
            >
              {i === 0 ? <i className="ti tabler-eye me-1"></i> : ''}{name}
            </div>
          ))}
        </div>

        {/* Application details card */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="d-flex align-items-center gap-3 mb-4 border-bottom pb-4">
              <div className="avatar avatar-xl bg-label-primary rounded">
                <span className="avatar-initial rounded">
                  <i className="ti tabler-building fs-1"></i>
                </span>
              </div>
              <div className="flex-grow-1">
                <h4 className="fw-bold mb-1">Krishna Law Academy</h4>
                <div className="text-body-secondary small">
                  <i className="ti tabler-calendar me-1"></i>Applied: March 27, 2025 at 3:14 PM
                </div>
              </div>
              <span className="badge bg-label-warning text-uppercase">Pending Review</span>
            </div>

            <div className="row g-4">
              <div className="col-md-7">
                <h6 className="fw-bold mb-3">
                  <i className="ti tabler-list-details me-2 text-primary"></i>Application Details
                </h6>
                <div className="row g-2">
                  {[
                    ['Institute Name', 'Krishna Law Academy'],
                    ['Institute Type', 'Coaching Centre'],
                    ['Founder Name', 'Sunita Verma'],
                    ['Official Email', 'sunita@krishnalaw.in'],
                    ['Contact Phone', '+91 99887 65432'],
                    ['Location', 'Hyderabad, Telangana'],
                    ['Approx. Students', '~200 (first year)'],
                    ['Target Plan', 'Growth (₹4,999/mo)'],
                  ].map(([k, v]) => (
                    <div key={k as string} className="col-12 d-flex">
                      <span className="text-body-secondary small w-px-150">{k as string}</span>
                      <span className="fw-medium small">{v as string}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-5">
                <h6 className="fw-bold mb-3">
                  <i className="ti tabler-shield-check me-2 text-success"></i>Verification Data
                </h6>
                <div className="mb-4">
                  {[
                    ['GST Number', '36AAXPV1234F1ZX', true],
                    ['Official Website', 'krishnalaw.in', true],
                    ['Social Link', 'instagram.com/krishnalaw', true],
                  ].map(([k, v, verified]) => (
                    <div key={k as string} className="d-flex justify-content-between mb-2">
                      <span className="text-body-secondary small">{k as string}</span>
                      <span className={`small fw-bold ${verified ? 'text-success' : ''}`}>
                        {v as string} {verified && <i className="ti tabler-check"></i>}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-label-secondary rounded p-3">
                  <label className="form-label fw-bold small text-dark mb-2">Internal Admin Notes</label>
                  <textarea 
                    className="form-control form-control-sm bg-white border-0" 
                    rows={3} 
                    placeholder="Notes for internal team..."
                    defaultValue="GST verified. Social presence looks legitimate. Founder has 8 years coaching experience."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="row g-3 mb-4">
          {[
            { id: 'approve', icon: 'tabler-circle-check', color: 'success', label: 'Approve', desc: 'Activate institute and send credentials.' },
            { id: 'reject',  icon: 'tabler-circle-x',     color: 'danger',  label: 'Reject',  desc: 'Deny application and send reason.' },
            { id: 'info',    icon: 'tabler-message-dots', color: 'info',    label: 'Request Info', desc: 'Ask for more docs or clarification.' },
          ].map((a) => (
            <div key={a.id} className="col-md-4">
              <div 
                className={`card cursor-pointer border-2 transition-all ${action === a.id ? `border-${a.color} shadow-sm` : 'border-transparent'}`} 
                onClick={() => setAction(a.id as any)}
              >
                <div className="card-body text-center py-4">
                  <div className={`avatar avatar-md bg-label-${a.color} mx-auto mb-3`}>
                    <span className="avatar-initial rounded">
                      <i className={`ti ${a.icon} fs-3`}></i>
                    </span>
                  </div>
                  <h6 className={`fw-bold text-${a.color} mb-2`}>{a.label}</h6>
                  <p className="text-body-secondary small mb-0 px-2">{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Action Content */}
        {action && (
          <div className="card mb-4 border border-light">
            <div className="card-body">
              {action === 'reject' && (
                <div className="mb-0">
                  <label className="form-label fw-bold text-danger">Reason for Rejection (required)</label>
                  <textarea className="form-control" rows={3} placeholder="Please explain why the application is being rejected..." />
                </div>
              )}
              {action === 'info' && (
                <div className="mb-0">
                  <label className="form-label fw-bold text-info">Inquiry Message</label>
                  <textarea className="form-control" rows={3} defaultValue="Hi Sunita, thank you for applying to LexEd. Could you please share a copy of your GST certificate and any faculty credentials for verification?" />
                </div>
              )}
              {action === 'approve' && (
                <div className="mb-0">
                  <div className="alert bg-label-success d-flex align-items-center mb-0">
                    <i className="ti tabler-circle-check me-2 fs-4"></i>
                    <div>
                      Approving will immediately create the institute account and send an email with login credentials to <strong>sunita@krishnalaw.in</strong>.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="d-flex justify-content-between align-items-center">
          <a href="/super-admin/institutes" className="btn btn-outline-secondary">
            <i className="ti tabler-arrow-left me-1"></i>Back to List
          </a>
          <div className="d-flex gap-2">
            <button className="btn btn-text-secondary">Skip → Next Pending</button>
            {action && (
              <button className={`btn btn-${action === 'approve' ? 'success' : action === 'reject' ? 'danger' : 'info'}`}>
                {action === 'approve' ? 'Confirm Approval' : action === 'reject' ? 'Send Rejection' : 'Request Info'}
              </button>
            )}
          </div>
        </div>

      </div>
    </SuperAdminLayout>
  );
}
