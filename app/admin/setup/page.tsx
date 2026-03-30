'use client';
import { useState } from 'react';

export default function SetupWizardPage() {
  const [step, setStep] = useState(1);
  const steps = ['Brand Setup', 'Add First Course', 'Payment Setup'];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--page-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
        <span style={{ fontSize: 26 }}>⚖️</span>
        <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--primary)' }}>LexEd</span>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 4 }}>Setup Wizard</span>
      </div>

      {/* Progress Steps */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 36, width: '100%', maxWidth: 560 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: i + 1 < step ? 'var(--success)' : i + 1 === step ? 'var(--primary)' : 'var(--border)',
                color: i + 1 <= step ? '#fff' : 'var(--text-muted)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, marginBottom: 6
              }}>{i + 1 < step ? '✓' : i + 1}</div>
              <div style={{ fontSize: 12, fontWeight: i + 1 === step ? 700 : 400, color: i + 1 === step ? 'var(--primary)' : 'var(--text-muted)', textAlign: 'center' }}>{s}</div>
            </div>
            {i < steps.length - 1 && <div style={{ height: 2, flex: 1, background: i + 1 < step ? 'var(--success)' : 'var(--border)', margin: '0 8px', marginBottom: 20 }} />}
          </div>
        ))}
      </div>

      {/* Step Cards */}
      <div className="card" style={{ width: '100%', maxWidth: 560, padding: 32 }}>
        {step === 1 && (
          <>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>🎨 Step 1: Brand Setup</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>Set up your institute's identity on LexEd</p>
            <div style={{ marginBottom: 18 }}>
              <label className="form-label">Upload Institute Logo</label>
              <div style={{ border: '2px dashed var(--primary)', borderRadius: 10, padding: '28px', textAlign: 'center', cursor: 'pointer', background: 'var(--primary-light)' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>🏛️</div>
                <div style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 500 }}>Drop your logo here or <span style={{ textDecoration: 'underline' }}>browse</span></div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>PNG or JPG, max 2MB</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
              <div>
                <label className="form-label">Institute Full Name</label>
                <input className="form-input" defaultValue="Sharma Law Academy" />
              </div>
              <div>
                <label className="form-label">Display Name (shown to students)</label>
                <input className="form-input" defaultValue="Sharma Law" />
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label className="form-label">Choose Your Subdomain</label>
              <div style={{ display: 'flex', gap: 10 }}>
                <input className="form-input" defaultValue="sharma-law" />
                <span style={{ alignSelf: 'center', color: 'var(--text-muted)', fontSize: 13, whiteSpace: 'nowrap' }}>.lexed.in</span>
                <button style={{ background: '#e8faf0', border: 'none', color: 'var(--success)', borderRadius: 8, padding: '8px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>✓ Available</button>
              </div>
              <div style={{ fontSize: 12, color: 'var(--success)', marginTop: 6 }}>✓ sharma-law.lexed.in is available</div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>📚 Step 2: Add Your First Course</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>Get started with your content — you can always add more later</p>
            <div style={{ display: 'flex', gap: 14, marginBottom: 24 }}>
              <a href="/admin/courses/create" style={{ flex: 1 }}>
                <div style={{ border: '2px solid var(--primary)', borderRadius: 12, padding: 20, textAlign: 'center', cursor: 'pointer', background: 'var(--primary-light)' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>📝</div>
                  <div style={{ fontWeight: 700, color: 'var(--primary)' }}>Create a Course Now</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Build your curriculum step by step</div>
                </div>
              </a>
              <div style={{ flex: 1, border: '1px solid var(--border)', borderRadius: 12, padding: 20, textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>⏭️</div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Skip for Now</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>I'll add courses later</div>
              </div>
            </div>
            <div style={{ padding: 16, background: '#f8f7fa', borderRadius: 10, marginBottom: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>📬 Invite Tutors (Optional)</div>
              <input className="form-input" placeholder="Enter tutor email addresses, separated by comma" style={{ marginBottom: 8 }} />
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Note: Tutors are optional — you can sell courses directly without a tutor.</div>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>💳 Step 3: Payment Setup</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>Connect a payment gateway to start collecting fees</p>
            <div style={{ marginBottom: 16 }}>
              <label className="form-label">Select Payment Gateway</label>
              <div style={{ display: 'flex', gap: 12 }}>
                {['Razorpay', 'Stripe'].map(gw => (
                  <div key={gw} style={{ flex: 1, border: gw === 'Razorpay' ? '2px solid var(--primary)' : '1px solid var(--border)', borderRadius: 10, padding: '14px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, background: gw === 'Razorpay' ? 'var(--primary-light)' : '#fff' }}>
                    <span style={{ fontSize: 20 }}>{gw === 'Razorpay' ? '🇮🇳' : '🌐'}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13.5 }}>{gw}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{gw === 'Razorpay' ? 'INR payments' : 'International'}</div>
                    </div>
                    {gw === 'Razorpay' && <span style={{ marginLeft: 'auto', color: 'var(--primary)', fontSize: 16 }}>✓</span>}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div><label className="form-label">API Key</label><input className="form-input" placeholder="rzp_live_..." /></div>
              <div><label className="form-label">API Secret</label><input className="form-input" type="password" placeholder="••••••••••••" /></div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label className="form-label">Default Currency</label>
              <select className="form-input"><option>INR — Indian Rupee</option><option>USD — US Dollar</option><option>AED — UAE Dirham</option><option>CAD — Canadian Dollar</option></select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderTop: '1px solid var(--border)', marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Test Mode</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Use test credentials before going live</div>
              </div>
              <div className="toggle" />
            </div>
          </>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
          <button className="btn-outline" onClick={() => setStep(s => Math.max(1, s - 1))} style={{ opacity: step === 1 ? 0.4 : 1 }} disabled={step === 1}>← Back</button>
          {step < 3
            ? <button className="btn-primary" onClick={() => setStep(s => s + 1)}>Next Step →</button>
            : <a href="/admin/dashboard"><button className="btn-primary" style={{ background: 'var(--success)' }}>🎉 Finish Setup</button></a>
          }
        </div>
      </div>
    </div>
  );
}
