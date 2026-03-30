'use client';
import { useState } from 'react';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

const tabs = ['Branding', 'Email Templates', 'Feature Flags', 'Security'];
const emailTemplates = ['Welcome (Institute)', 'Welcome (Student)', 'Payment Confirmation', 'Password Reset', 'Enrollment Confirmation'];

export default function SettingsPage() {
  const [tab, setTab] = useState(0);
  const [emailTab, setEmailTab] = useState(0);

  return (
    <SuperAdminLayout active="/super-admin/settings" title="Platform Settings" breadcrumb="Home / Settings">
      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 24, background: '#fff', padding: 6, borderRadius: 10, border: '1px solid var(--border)', width: 'fit-content' }}>
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setTab(i)} style={{ padding: '8px 20px', borderRadius: 8, border: 'none', background: tab === i ? 'var(--primary)' : 'transparent', color: tab === i ? '#fff' : 'var(--text-muted)', fontWeight: 600, fontSize: 13.5, cursor: 'pointer', transition: 'all 0.15s' }}>{t}</button>
        ))}
      </div>

      {tab === 0 && (
        <div className="card" style={{ padding: 28, maxWidth: 720 }}>
          <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>🎨 Branding Settings</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div>
              <label className="form-label">Platform Name</label>
              <input className="form-input" defaultValue="LexEd" />
            </div>
            <div>
              <label className="form-label">Primary Color</label>
              <div style={{ display: 'flex', gap: 10 }}>
                <input type="color" defaultValue="#7367F0" style={{ width: 48, height: 42, border: '1px solid var(--border)', borderRadius: 8, padding: 4, cursor: 'pointer' }} />
                <input className="form-input" defaultValue="#7367F0" />
              </div>
            </div>
            <div>
              <label className="form-label">Platform Logo</label>
              <div style={{ border: '2px dashed var(--border)', borderRadius: 10, padding: '20px', textAlign: 'center', cursor: 'pointer', background: '#fafafa' }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>⚖️</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Drop file or <span style={{ color: 'var(--primary)' }}>browse</span><br />PNG or SVG, max 2MB</div>
              </div>
            </div>
            <div>
              <label className="form-label">Favicon</label>
              <div style={{ border: '2px dashed var(--border)', borderRadius: 10, padding: '20px', textAlign: 'center', cursor: 'pointer', background: '#fafafa' }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>🖼️</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Drop file or <span style={{ color: 'var(--primary)' }}>browse</span><br />ICO or PNG 32×32</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 24, display: 'flex', gap: 10 }}>
            <button className="btn-primary">Save Changes</button>
            <button className="btn-outline">Preview</button>
          </div>
        </div>
      )}

      {tab === 1 && (
        <div className="card" style={{ padding: 28, maxWidth: 860 }}>
          <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 16 }}>📧 Email Templates</h3>
          <div style={{ display: 'flex', gap: 20 }}>
            <div style={{ width: 220, flexShrink: 0 }}>
              {emailTemplates.map((t, i) => (
                <div key={t} onClick={() => setEmailTab(i)} style={{ padding: '10px 14px', borderRadius: 8, marginBottom: 4, cursor: 'pointer', background: emailTab === i ? 'var(--primary-light)' : 'transparent', color: emailTab === i ? 'var(--primary)' : 'var(--text-muted)', fontWeight: emailTab === i ? 600 : 400, fontSize: 13, borderLeft: emailTab === i ? '3px solid var(--primary)' : '3px solid transparent' }}>
                  {t}
                </div>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 16 }}>
                <label className="form-label">Subject Line</label>
                <input className="form-input" defaultValue={`Welcome to LexEd — Your Institute is Ready! 🎉`} />
              </div>
              <div>
                <label className="form-label">Email Body <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(Merge tags: {'{{institute_name}}'}, {'{{owner_name}}'}, {'{{login_url}}'})</span></label>
                <textarea className="form-input" style={{ height: 220, resize: 'vertical', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.6 }} defaultValue={`Hi {{owner_name}},\n\nCongratulations! Your institute "{{institute_name}}" has been approved and is now live on LexEd.\n\n🔗 Your dashboard: {{login_url}}\n📧 Login email: {{admin_email}}\n🔑 Temporary password: {{temp_password}}\n\nWe recommend completing the setup wizard to publish your first course.\n\nWarm regards,\nThe LexEd Team`} />
              </div>
              <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
                <button className="btn-primary">Save Template</button>
                <button className="btn-outline">📬 Send Test Email</button>
                <button className="btn-outline">Reset to Default</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === 2 && (
        <div className="card" style={{ padding: 28, maxWidth: 640 }}>
          <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>🚩 Feature Flags</h3>
          {[
            { label: 'AI Features (AI Tutor, IRAC Checker)', desc: 'Enables AI chat, PDF analysis, and quiz generation for all institutes', on: true },
            { label: 'Legal Practice Lab', desc: 'Case Drafting, Moot Court, Client Interview modules', on: true },
            { label: 'Live Classes', desc: 'Zoom integration and built-in live class rooms', on: true },
            { label: '🔴 Maintenance Mode', desc: 'Shows maintenance page to all users. Use carefully.', on: false },
          ].map(f => (
            <div key={f.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 3 }}>{f.label}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{f.desc}</div>
              </div>
              <div className={`toggle ${f.on ? '' : 'off'}`} style={{ flexShrink: 0 }} />
            </div>
          ))}
        </div>
      )}

      {tab === 3 && (
        <div className="card" style={{ padding: 28, maxWidth: 640 }}>
          <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>🔒 Security Settings</h3>
          <div style={{ display: 'grid', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <label className="form-label">Session Timeout (minutes)</label>
                <input className="form-input" type="number" defaultValue={60} />
              </div>
              <div>
                <label className="form-label">Max Login Attempts Before Lockout</label>
                <input className="form-input" type="number" defaultValue={5} />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 3 }}>Force 2FA for Institute Admins</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>All institute admins must set up two-factor authentication</div>
              </div>
              <div className="toggle" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 3 }}>CAPTCHA on Login After 3 Failed Attempts</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Applies to all user types (Super Admin, Admin, Tutor, Student)</div>
              </div>
              <div className="toggle" />
            </div>
          </div>
          <button className="btn-primary" style={{ marginTop: 20 }}>Save Security Settings</button>
        </div>
      )}
    </SuperAdminLayout>
  );
}
