'use client';
import { useState } from 'react';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

export default function ApproveInstitutePage() {
  const [action, setAction] = useState<'approve' | 'reject' | 'info' | null>(null);

  return (
    <SuperAdminLayout active="/super-admin/institutes" title="Approve New Institute" breadcrumb="Home / Institutes / Approve">
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Progress indicator */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {['Krishna Law Academy', 'Delhi Moot Society', 'LegalPro Academy', '4 more...'].map((name, i) => (
            <div key={i} style={{ flex: i === 0 ? 2 : 1, padding: '8px 12px', borderRadius: 8, background: i === 0 ? 'var(--primary-light)' : '#f3f3f5', border: i === 0 ? '1px solid var(--primary)' : '1px solid var(--border)', fontSize: 12, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? 'var(--primary)' : 'var(--text-muted)', textAlign: 'center', cursor: 'pointer' }}>
              {i === 0 ? '👁️ Reviewing: ' : ''}{name}
            </div>
          ))}
        </div>

        {/* Application card */}
        <div className="card" style={{ padding: 28, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>🏛️</div>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Krishna Law Academy</h2>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Application received: March 27, 2025 at 3:14 PM</div>
            </div>
            <span className="badge badge-warning" style={{ marginLeft: 'auto', fontSize: 13, padding: '4px 14px' }}>Pending Review</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>📋 Application Details</div>
              {[
                ['Institute Name', 'Krishna Law Academy'],
                ['Type', 'Coaching Centre'],
                ['Owner Name', 'Sunita Verma'],
                ['Email', 'sunita@krishnalaw.in'],
                ['Phone', '+91 99887 65432'],
                ['City', 'Hyderabad, Telangana'],
                ['Expected Students', '~200 (first year)'],
                ['Plan Selected', 'Growth (₹4,999/mo)'],
              ].map(([k, v]) => (
                <div key={k as string} style={{ display: 'flex', marginBottom: 10 }}>
                  <span style={{ width: 160, fontSize: 12, color: 'var(--text-muted)', flexShrink: 0 }}>{k as string}</span>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{v as string}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>🔍 Verification Info</div>
              {[
                ['GST Number', '36AAXPV1234F1ZX ✓'],
                ['Website', 'krishnalaw.in'],
                ['Social Link', 'instagram.com/krishnalaw'],
              ].map(([k, v]) => (
                <div key={k as string} style={{ display: 'flex', marginBottom: 10 }}>
                  <span style={{ width: 140, fontSize: 12, color: 'var(--text-muted)', flexShrink: 0 }}>{k as string}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--success)' }}>{v as string}</span>
                </div>
              ))}

              <div style={{ marginTop: 24, padding: 16, background: '#f8f7fa', borderRadius: 10 }}>
                <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8 }}>Admin Notes (internal)</div>
                <textarea className="form-input" style={{ height: 80, resize: 'none', background: '#fff', fontSize: 13 }} placeholder="Add internal notes about this application..." defaultValue="GST verified. Social presence looks legitimate. Founder has 8 years coaching experience." />
              </div>
            </div>
          </div>
        </div>

        {/* Action Panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
          <div className="card" style={{ padding: 20, border: action === 'approve' ? '2px solid var(--success)' : '1px solid var(--border)', cursor: 'pointer' }} onClick={() => setAction('approve')}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>✅</div>
            <div style={{ fontWeight: 700, color: 'var(--success)', marginBottom: 6 }}>Approve</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>Send welcome email with login credentials. Activate institute immediately.</div>
          </div>
          <div className="card" style={{ padding: 20, border: action === 'reject' ? '2px solid var(--error)' : '1px solid var(--border)', cursor: 'pointer' }} onClick={() => setAction('reject')}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>❌</div>
            <div style={{ fontWeight: 700, color: 'var(--error)', marginBottom: 6 }}>Reject</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>Send rejection email with reason. Applicant can re-apply after 30 days.</div>
          </div>
          <div className="card" style={{ padding: 20, border: action === 'info' ? '2px solid var(--info)' : '1px solid var(--border)', cursor: 'pointer' }} onClick={() => setAction('info')}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>💬</div>
            <div style={{ fontWeight: 700, color: 'var(--info)', marginBottom: 6 }}>Request Info</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>Send a custom message asking for additional documents or clarification.</div>
          </div>
        </div>

        {action === 'reject' && (
          <div className="card" style={{ padding: 20, marginBottom: 16, border: '1px solid var(--error)' }}>
            <label className="form-label">Rejection Reason (required — will be sent to applicant)</label>
            <textarea className="form-input" style={{ height: 80, resize: 'none' }} placeholder="e.g. Unable to verify GST number. Please re-apply with valid registration documents." />
          </div>
        )}
        {action === 'info' && (
          <div className="card" style={{ padding: 20, marginBottom: 16, border: '1px solid var(--info)' }}>
            <label className="form-label">Custom Message to Applicant</label>
            <textarea className="form-input" style={{ height: 80, resize: 'none' }} defaultValue="Hi Sunita, thank you for applying to LexEd. Could you please share a copy of your GST certificate and any faculty credentials for verification?" />
          </div>
        )}

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <a href="/super-admin/institutes"><button className="btn-outline">← Back to List</button></a>
          {action === 'approve' && <button className="btn-primary" style={{ background: 'var(--success)', display: 'flex', alignItems: 'center', gap: 6 }}>✅ Confirm Approval & Send Email</button>}
          {action === 'reject' && <button className="btn-primary" style={{ background: 'var(--error)', display: 'flex', alignItems: 'center', gap: 6 }}>❌ Send Rejection Email</button>}
          {action === 'info' && <button className="btn-primary" style={{ background: 'var(--info)', display: 'flex', alignItems: 'center', gap: 6 }}>💬 Send Message</button>}
          <button className="btn-outline" style={{ color: 'var(--text-muted)' }}>Skip → Next Pending</button>
        </div>
      </div>
    </SuperAdminLayout>
  );
}
