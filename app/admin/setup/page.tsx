'use client';
import { useState } from 'react';

const steps = ['Brand Setup', 'Add First Course', 'Payment Setup'];

export default function SetupWizardPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center p-4" style={{ background: 'var(--bs-body-bg)' }}>

      {/* Logo */}
      <div className="d-flex align-items-center gap-2 mb-5">
        <span className="text-primary">
          <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="currentColor" />
          </svg>
        </span>
        <span className="fw-bold fs-4">LexEd</span>
        <span className="text-body-secondary small ms-1">Setup Wizard</span>
      </div>

      {/* Step indicators */}
      <div className="d-flex align-items-center w-100 mb-5" style={{ maxWidth: 560 }}>
        {steps.map((s, i) => (
          <div key={i} className="d-flex align-items-center flex-grow-1">
            <div className="d-flex flex-column align-items-center" style={{ minWidth: 80 }}>
              <div className={`avatar rounded-circle fw-bold mb-1 ${i + 1 < step ? 'bg-success' : i + 1 === step ? 'bg-primary' : 'bg-secondary bg-opacity-25'}`}>
                <span className={`avatar-initial rounded-circle ${i + 1 <= step ? 'text-white' : 'text-body-secondary'}`}>
                  {i + 1 < step ? <i className="ti tabler-check"></i> : i + 1}
                </span>
              </div>
              <small className={`text-center ${i + 1 === step ? 'fw-bold text-primary' : 'text-body-secondary'}`}>{s}</small>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-grow-1 mb-4" style={{ height: 2, background: i + 1 < step ? 'var(--bs-success)' : 'var(--bs-border-color)' }}></div>
            )}
          </div>
        ))}
      </div>

      {/* Step card */}
      <div className="card w-100" style={{ maxWidth: 560 }}>
        <div className="card-body p-5">

          {/* Step 1: Brand Setup */}
          {step === 1 && (
            <>
              <h4 className="fw-bold mb-1">
                <i className="ti tabler-palette me-2 text-primary"></i>Step 1: Brand Setup
              </h4>
              <p className="text-body-secondary mb-4">Set up your institute's identity on LexEd</p>
              <div className="mb-4">
                <label className="form-label">Upload Institute Logo</label>
                <div className="border border-dashed border-primary rounded p-4 text-center bg-label-primary" style={{ cursor: 'pointer' }}>
                  <i className="ti tabler-building text-primary mb-2" style={{ fontSize: 36 }}></i>
                  <div className="small text-primary fw-medium">Drop your logo here or <span className="text-decoration-underline">browse</span></div>
                  <small className="text-body-secondary">PNG or JPG, max 2MB</small>
                </div>
              </div>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label">Institute Full Name</label>
                  <input className="form-control" defaultValue="Sharma Law Academy" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Display Name</label>
                  <input className="form-control" defaultValue="Sharma Law" />
                </div>
              </div>
              <div className="mb-2">
                <label className="form-label">Choose Your Subdomain</label>
                <div className="input-group">
                  <input className="form-control" defaultValue="sharma-law" />
                  <span className="input-group-text text-body-secondary">.lexed.in</span>
                  <button className="btn btn-outline-success">Available</button>
                </div>
                <small className="text-success mt-1 d-block">
                  <i className="ti tabler-check me-1"></i>sharma-law.lexed.in is available
                </small>
              </div>
            </>
          )}

          {/* Step 2: Add First Course */}
          {step === 2 && (
            <>
              <h4 className="fw-bold mb-1">
                <i className="ti tabler-book me-2 text-primary"></i>Step 2: Add Your First Course
              </h4>
              <p className="text-body-secondary mb-4">Get started with your content — you can always add more later</p>
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <a href="/admin/courses/create" className="text-decoration-none">
                    <div className="border border-primary rounded p-4 text-center bg-label-primary" style={{ cursor: 'pointer' }}>
                      <i className="ti tabler-notes text-primary mb-2" style={{ fontSize: 32 }}></i>
                      <div className="fw-bold text-primary">Create a Course Now</div>
                      <small className="text-body-secondary">Build your curriculum step by step</small>
                    </div>
                  </a>
                </div>
                <div className="col-6">
                  <div className="border rounded p-4 text-center" style={{ cursor: 'pointer' }}>
                    <i className="ti tabler-arrow-right text-body-secondary mb-2" style={{ fontSize: 32 }}></i>
                    <div className="fw-semibold">Skip for Now</div>
                    <small className="text-body-secondary">I'll add courses later</small>
                  </div>
                </div>
              </div>
              <div className="bg-light rounded p-3">
                <div className="fw-semibold small mb-2">
                  <i className="ti tabler-mail me-1 text-primary"></i>Invite Tutors (Optional)
                </div>
                <input className="form-control form-control-sm mb-1" placeholder="Enter tutor email addresses, separated by comma" />
                <small className="text-body-secondary">Note: Tutors are optional — you can sell courses directly without a tutor.</small>
              </div>
            </>
          )}

          {/* Step 3: Payment Setup */}
          {step === 3 && (
            <>
              <h4 className="fw-bold mb-1">
                <i className="ti tabler-credit-card me-2 text-primary"></i>Step 3: Payment Setup
              </h4>
              <p className="text-body-secondary mb-4">Connect a payment gateway to start collecting fees</p>
              <div className="mb-4">
                <label className="form-label">Select Payment Gateway</label>
                <div className="row g-3">
                  {[['Razorpay','tabler-brand-razorpay','INR payments',true],['Stripe','tabler-credit-card','International',false]].map(([gw, icon, sub, active]) => (
                    <div key={gw as string} className="col-6">
                      <div className={`border rounded p-3 d-flex align-items-center gap-2 ${active ? 'border-primary bg-label-primary' : ''}`} style={{ cursor: 'pointer' }}>
                        <i className={`ti ${icon as string} fs-4 ${active ? 'text-primary' : 'text-body-secondary'}`}></i>
                        <div>
                          <div className="fw-semibold small">{gw as string}</div>
                          <small className="text-body-secondary">{sub as string}</small>
                        </div>
                        {active && <i className="ti tabler-check text-primary ms-auto"></i>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label">API Key</label>
                  <input className="form-control" placeholder="rzp_live_..." />
                </div>
                <div className="col-md-6">
                  <label className="form-label">API Secret</label>
                  <input className="form-control" type="password" placeholder="••••••••••••" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Default Currency</label>
                <select className="form-select">
                  <option>INR — Indian Rupee</option><option>USD — US Dollar</option>
                  <option>AED — UAE Dirham</option><option>CAD — Canadian Dollar</option>
                </select>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3 border-top">
                <div>
                  <div className="fw-semibold small">Test Mode</div>
                  <small className="text-body-secondary">Use test credentials before going live</small>
                </div>
                <div className="form-check form-switch mb-0">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>
            </>
          )}

          {/* Navigation */}
          <div className="d-flex justify-content-between mt-4 pt-3 border-top">
            <button className="btn btn-outline-secondary" onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1}>
              <i className="ti tabler-arrow-left me-1"></i>Back
            </button>
            {step < 3
              ? <button className="btn btn-primary" onClick={() => setStep(s => s + 1)}>
                  Next Step<i className="ti tabler-arrow-right ms-1"></i>
                </button>
              : <a href="/admin/dashboard" className="btn btn-success">
                  <i className="ti tabler-check me-1"></i>Finish Setup
                </a>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
