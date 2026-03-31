'use client';
import { useState } from 'react';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

const tabs = [
  { id: 0, label: 'Branding',       icon: 'tabler-palette' },
  { id: 1, label: 'Email Templates', icon: 'tabler-mail' },
  { id: 2, label: 'Feature Flags',   icon: 'tabler-flag' },
  { id: 3, label: 'Security',        icon: 'tabler-lock' },
];

const emailTemplates = ['Welcome (Institute)', 'Welcome (Student)', 'Payment Confirmation', 'Password Reset', 'Enrollment Confirmation'];

export default function SettingsPage() {
  const [tab, setTab] = useState(0);
  const [emailTab, setEmailTab] = useState(0);

  return (
    <SuperAdminLayout active="/super-admin/settings" title="Platform Settings" breadcrumb="Home / Settings">
      
      {/* Tabs */}
      <div className="nav-align-top mb-4">
        <ul className="nav nav-pills mb-3" role="tablist">
          {tabs.map((t) => (
            <li key={t.id} className="nav-item">
              <button
                type="button"
                className={`nav-link ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                <i className={`ti ${t.icon} me-1`}></i> {t.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content p-0 bg-transparent border-0 shadow-none">
          {tab === 0 && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-4">
                  <i className="ti tabler-palette me-2 text-primary"></i>Platform Branding
                </h5>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Platform Name</label>
                    <input className="form-control" defaultValue="LexEd" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Primary Theme Color</label>
                    <div className="input-group">
                      <input type="color" className="form-control form-control-color" defaultValue="#7367F0" style={{ maxWidth: 60 }} />
                      <input className="form-control" defaultValue="#7367F0" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Platform Logo</label>
                    <div className="border border-dashed rounded-3 p-4 text-center bg-light" style={{ cursor: 'pointer' }}>
                      <i className="ti tabler-upload text-body-secondary fs-2 mb-2"></i>
                      <div className="small fw-medium">Upload PNG or SVG (max 2MB)</div>
                      <small className="text-body-secondary">Recommended: 200x50px</small>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Favicon</label>
                    <div className="border border-dashed rounded-3 p-4 text-center bg-light" style={{ cursor: 'pointer' }}>
                      <i className="ti tabler-photo-plus text-body-secondary fs-2 mb-2"></i>
                      <div className="small fw-medium">Upload ICO or PNG</div>
                      <small className="text-body-secondary">32x32px or 16x16px</small>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2 d-flex gap-2">
                  <button className="btn btn-primary">Save Branding</button>
                  <button className="btn btn-outline-secondary">Preview Changes</button>
                </div>
              </div>
            </div>
          )}

          {tab === 1 && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-4">
                  <i className="ti tabler-mail me-2 text-primary"></i>Email Templates
                </h5>
                <div className="row g-4">
                  <div className="col-md-4 col-xl-3 border-end">
                    <div className="nav nav-pills flex-column gap-2">
                      {emailTemplates.map((t, i) => (
                        <button
                          key={t}
                          className={`nav-link text-start ${emailTab === i ? 'active' : 'bg-label-primary'}`}
                          onClick={() => setEmailTab(i)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="mb-4">
                      <label className="form-label">Subject Line</label>
                      <input className="form-control" defaultValue="Welcome to LexEd — Your Institute is Ready! 🎉" />
                    </div>
                    <div className="mb-4">
                      <label className="form-label d-flex justify-content-between">
                        Email Body
                        <small className="text-body-secondary fw-normal">Merge tags: {'{{institute_name}}'}, {'{{owner_name}}'}</small>
                      </label>
                      <textarea
                        className="form-control"
                        style={{ height: 220, fontFamily: 'monospace', fontSize: '0.875rem' }}
                        defaultValue={`Hi {{owner_name}},\n\nCongratulations! Your institute "{{institute_name}}" has been approved and is now live on LexEd.\n\n🔗 Your dashboard: {{login_url}}\n📧 Login email: {{admin_email}}\n🔑 Temporary password: {{temp_password}}\n\nWarm regards,\nThe LexEd Team`}
                      />
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn btn-primary">Save Template</button>
                      <button className="btn btn-outline-secondary">
                        <i className="ti tabler-send me-1"></i>Send Test
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 2 && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">
                  <i className="ti tabler-flag me-2 text-primary"></i>Feature Flags
                </h5>
                <p className="text-body-secondary mb-4">Enable or disable high-level platform features globally.</p>
                <div className="list-group list-group-flush">
                  {[
                    { label: 'AI Features (AI Tutor, IRAC Checker)', desc: 'Enables AI chat, PDF analysis, and quiz generation', on: true },
                    { label: 'Legal Practice Lab', desc: 'Case Drafting, Moot Court, Client Interview modules', on: true },
                    { label: 'Live Classes', desc: 'Zoom integration and built-in live rooms', on: true },
                    { label: '🔴 Maintenance Mode', desc: 'Shows maintenance page to all users globally', on: false },
                  ].map((f, i) => (
                    <div key={i} className="list-group-item d-flex align-items-center justify-content-between px-0 py-3">
                      <div>
                        <div className="fw-semibold mb-1">{f.label}</div>
                        <small className="text-body-secondary">{f.desc}</small>
                      </div>
                      <div className="form-check form-switch ms-3">
                        <input className="form-check-input" type="checkbox" defaultChecked={f.on} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === 3 && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-4">
                  <i className="ti tabler-lock me-2 text-primary"></i>Security Settings
                </h5>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label">Session Timeout (minutes)</label>
                    <input className="form-control" type="number" defaultValue={60} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Max Login Attempts</label>
                    <input className="form-control" type="number" defaultValue={5} />
                  </div>
                  <div className="col-12 py-2 border-bottom">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="fw-semibold">Two-Factor Authentication (2FA)</div>
                        <small className="text-body-secondary">Mandatory 2FA for all platform administrators</small>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" defaultChecked />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 py-2 border-bottom">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <div className="fw-semibold">CAPTCHA Protection</div>
                        <small className="text-body-secondary">Enable ReCaptcha after 3 failed login attempts</small>
                      </div>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <button className="btn btn-primary text-nowrap">Update Security</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SuperAdminLayout>
  );
}
