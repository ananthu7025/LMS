'use client';
import { useState } from 'react';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

type Tab = 'branding' | 'email' | 'features' | 'security';

const emailTemplates = [
  { id: 0, label: 'Welcome (Institute)', icon: 'tabler-building'     },
  { id: 1, label: 'Welcome (Student)',   icon: 'tabler-user'         },
  { id: 2, label: 'Payment Confirmed',   icon: 'tabler-circle-check' },
  { id: 3, label: 'Password Reset',      icon: 'tabler-key'          },
  { id: 4, label: 'Enrollment Confirm',  icon: 'tabler-school'       },
];

const featureFlags = [
  { label: 'AI Tutor & IRAC Checker',  desc: 'Enables AI chat, PDF analysis and quiz generation for all institutes', on: true,  color: 'primary' },
  { label: 'Legal Practice Lab',        desc: 'Case Drafting, Moot Court and Client Interview simulation modules',   on: true,  color: 'info'    },
  { label: 'Live Classes',              desc: 'Zoom integration and built-in live streaming rooms',                  on: true,  color: 'success' },
  { label: 'Custom Branding per Inst.', desc: 'Allow institutes to upload their own logo, colors and domain',        on: false, color: 'warning' },
  { label: 'Maintenance Mode',          desc: 'Shows maintenance page to ALL users — use with caution',             on: false, color: 'danger'  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function SettingsPage() {
  const [tab, setTab]         = useState<Tab>('branding');
  const [emailTab, setEmailTab] = useState(0);

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: 'branding',  label: 'Branding',        icon: 'tabler-palette'   },
    { key: 'email',     label: 'Email Templates',  icon: 'tabler-mail'      },
    { key: 'features',  label: 'Feature Flags',    icon: 'tabler-flag'      },
    { key: 'security',  label: 'Security',         icon: 'tabler-lock'      },
  ];

  return (
    <SuperAdminLayout title="Platform Settings" breadcrumb="Home / Settings">

      {/* ── Nav Pills ──────────────────────────────────────────────── */}
      <div className="nav-align-top mb-6">
        <ul className="nav nav-pills flex-column flex-md-row flex-wrap row-gap-2">
          {tabs.map(t => (
            <li key={t.key} className="nav-item">
              <button
                className={`nav-link${tab === t.key ? ' active' : ''}`}
                onClick={() => setTab(t.key)}
              >
                <i className={`icon-base ti ${t.icon} icon-sm me-1_5`}></i>
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Branding ───────────────────────────────────────────────── */}
      {tab === 'branding' && (
        <div className="row g-6">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-header border-bottom">
                <div className="card-title mb-0">
                  <h5 className="mb-1">Platform Branding</h5>
                  <p className="card-subtitle">Customise the look and feel of your SaaS platform</p>
                </div>
              </div>
              <div className="card-body">
                <div className="row g-5">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Platform Name</label>
                    <input className="form-control" defaultValue="LexEd" />
                    <small className="text-body-secondary">Shown in emails, page titles and the sidebar</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Support Email</label>
                    <input className="form-control" defaultValue="support@lexed.in" type="email" />
                    <small className="text-body-secondary">Used in automated emails as reply-to</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Primary Colour</label>
                    <div className="input-group">
                      <input
                        type="color"
                        className="form-control form-control-color"
                        defaultValue="#7367F0"
                        style={{ maxWidth: 50 }}
                      />
                      <input className="form-control" defaultValue="#7367F0" />
                    </div>
                    <small className="text-body-secondary">Used for buttons, links and accents</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Platform Tagline</label>
                    <input className="form-control" defaultValue="Law Coaching, Reimagined." />
                    <small className="text-body-secondary">Shown on the login and landing pages</small>
                  </div>

                  <div className="col-12">
                    <div className="row g-4">
                      {[
                        { label: 'Platform Logo', hint: 'PNG or SVG · 200×50px · max 2 MB', icon: 'tabler-upload' },
                        { label: 'Favicon',       hint: 'ICO or PNG · 32×32px',              icon: 'tabler-photo-plus' },
                      ].map(u => (
                        <div key={u.label} className="col-md-6">
                          <label className="form-label fw-semibold">{u.label}</label>
                          <div
                            className="border border-dashed rounded-3 p-5 text-center"
                            style={{ cursor: 'pointer', background: 'var(--bs-body-bg)' }}
                          >
                            <i className={`ti ${u.icon} text-body-secondary mb-2 d-block`} style={{ fontSize: 28 }}></i>
                            <div className="small fw-medium mb-1">Click or drag to upload</div>
                            <small className="text-body-secondary">{u.hint}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-3 mt-6 pt-2 border-top">
                  <button className="btn btn-primary">
                    <i className="ti tabler-device-floppy me-1"></i>Save Branding
                  </button>
                  <button className="btn btn-outline-secondary">
                    <i className="ti tabler-eye me-1"></i>Preview
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preview panel */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header border-bottom">
                <h5 className="card-title mb-0">Live Preview</h5>
              </div>
              <div className="card-body">
                <div className="border rounded-3 p-4 text-center mb-4" style={{ background: '#f8f8ff' }}>
                  <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: '#7367F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="ti tabler-scale text-white" style={{ fontSize: 16 }}></i>
                    </div>
                    <span className="fw-bold" style={{ color: '#7367F0', fontSize: 18 }}>LexEd</span>
                  </div>
                  <p className="text-body-secondary small mb-0">Law Coaching, Reimagined.</p>
                </div>
                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-primary w-100" style={{ background: '#7367F0', borderColor: '#7367F0' }}>Primary Button</button>
                  <button className="btn btn-outline-primary w-100" style={{ color: '#7367F0', borderColor: '#7367F0' }}>Outline Button</button>
                  <a href="#" className="text-center small" style={{ color: '#7367F0' }}>Branded link colour</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Email Templates ─────────────────────────────────────────── */}
      {tab === 'email' && (
        <div className="card">
          <div className="card-header border-bottom">
            <div className="card-title mb-0">
              <h5 className="mb-1">Email Templates</h5>
              <p className="card-subtitle">Customise automated emails sent to institutes and students</p>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="row g-0">
              {/* Template list sidebar */}
              <div className="col-md-3 border-end">
                <div className="p-4">
                  <p className="text-uppercase text-body-secondary small fw-bold mb-3" style={{ letterSpacing: 0.8 }}>Templates</p>
                  <div className="nav nav-pills flex-column gap-1">
                    {emailTemplates.map(t => (
                      <button
                        key={t.id}
                        className={`nav-link text-start d-flex align-items-center gap-2 ${emailTab === t.id ? 'active' : ''}`}
                        onClick={() => setEmailTab(t.id)}
                      >
                        <i className={`ti ${t.icon} icon-sm`}></i>
                        <span className="small">{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Template editor */}
              <div className="col-md-9 p-6">
                <div className="d-flex align-items-center justify-content-between mb-5">
                  <h6 className="mb-0 fw-bold">{emailTemplates[emailTab].label}</h6>
                  <button className="btn btn-sm btn-outline-secondary">
                    <i className="ti tabler-eye me-1"></i>Preview Email
                  </button>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Subject Line</label>
                  <input className="form-control" defaultValue="Welcome to LexEd — Your Institute is Ready! 🎉" />
                </div>

                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <label className="form-label fw-semibold mb-0">Email Body</label>
                    <div className="d-flex gap-1">
                      {['{{institute_name}}', '{{owner_name}}', '{{login_url}}'].map(tag => (
                        <button key={tag} className="btn btn-xs btn-label-secondary" style={{ fontSize: 11 }}>{tag}</button>
                      ))}
                    </div>
                  </div>
                  <textarea
                    className="form-control"
                    rows={10}
                    style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}
                    defaultValue={`Hi {{owner_name}},\n\nCongratulations! Your institute "{{institute_name}}" has been approved and is now live on LexEd.\n\n🔗 Dashboard: {{login_url}}\n📧 Login: {{admin_email}}\n🔑 Temp password: {{temp_password}}\n\nWarm regards,\nThe LexEd Team`}
                  />
                  <small className="text-body-secondary">Use merge tags above to personalise the email</small>
                </div>

                <div className="d-flex gap-3">
                  <button className="btn btn-primary">
                    <i className="ti tabler-device-floppy me-1"></i>Save Template
                  </button>
                  <button className="btn btn-outline-info">
                    <i className="ti tabler-send me-1"></i>Send Test Email
                  </button>
                  <button className="btn btn-outline-secondary">Reset to Default</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Feature Flags ──────────────────────────────────────────── */}
      {tab === 'features' && (
        <div className="card">
          <div className="card-header border-bottom">
            <div className="card-title mb-0">
              <h5 className="mb-1">Feature Flags</h5>
              <p className="card-subtitle">Enable or disable platform-wide features globally. Changes apply instantly.</p>
            </div>
          </div>
          <div className="card-body p-0">
            <ul className="list-group list-group-flush">
              {featureFlags.map((f, i) => (
                <li key={i} className="list-group-item py-4 px-6">
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <div className="d-flex align-items-start gap-3 flex-grow-1">
                      <div className={`badge rounded bg-label-${f.color} p-2 mt-1`} style={{ flexShrink: 0 }}>
                        <i className={`icon-base ti ${
                          f.color === 'primary' ? 'tabler-brain' :
                          f.color === 'info'    ? 'tabler-gavel' :
                          f.color === 'success' ? 'tabler-video' :
                          f.color === 'warning' ? 'tabler-palette' :
                          'tabler-tools'
                        } icon-md`}></i>
                      </div>
                      <div>
                        <div className="fw-semibold mb-1">{f.label}</div>
                        <small className="text-body-secondary">{f.desc}</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 flex-shrink-0">
                      <span className={`badge ${f.on ? 'bg-label-success' : 'bg-label-secondary'} small`}>
                        {f.on ? 'Enabled' : 'Disabled'}
                      </span>
                      <div className="form-check form-switch mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked={f.on}
                          style={{ cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-footer border-top d-flex justify-content-end">
            <button className="btn btn-primary">
              <i className="ti tabler-device-floppy me-1"></i>Save Feature Flags
            </button>
          </div>
        </div>
      )}

      {/* ── Security ───────────────────────────────────────────────── */}
      {tab === 'security' && (
        <div className="row g-6">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-header border-bottom">
                <div className="card-title mb-0">
                  <h5 className="mb-1">Security Settings</h5>
                  <p className="card-subtitle">Configure authentication and access control for the platform</p>
                </div>
              </div>
              <div className="card-body">
                <div className="row g-5 mb-6">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Session Timeout (minutes)</label>
                    <input className="form-control" type="number" defaultValue={60} />
                    <small className="text-body-secondary">Users are logged out after this period of inactivity</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Max Login Attempts</label>
                    <input className="form-control" type="number" defaultValue={5} />
                    <small className="text-body-secondary">Account is locked after this many failed attempts</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Lockout Duration (minutes)</label>
                    <input className="form-control" type="number" defaultValue={30} />
                    <small className="text-body-secondary">How long accounts stay locked after max attempts</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Password Min Length</label>
                    <input className="form-control" type="number" defaultValue={8} />
                    <small className="text-body-secondary">Minimum characters for all user passwords</small>
                  </div>
                </div>

                <div className="border rounded-3 p-1">
                  {[
                    { label: 'Two-Factor Authentication (2FA)',   desc: 'Mandatory 2FA for all platform administrators',          on: true  },
                    { label: 'CAPTCHA on Login',                  desc: 'ReCaptcha after 3 failed login attempts',               on: true  },
                    { label: 'IP Allowlist for Super Admin',       desc: 'Restrict super-admin access to whitelisted IPs only',   on: false },
                    { label: 'Force HTTPS',                       desc: 'Redirect all HTTP traffic to HTTPS automatically',       on: true  },
                  ].map((s, i, arr) => (
                    <div
                      key={s.label}
                      className={`d-flex align-items-center justify-content-between p-4 ${i < arr.length - 1 ? 'border-bottom' : ''}`}
                    >
                      <div>
                        <div className="fw-semibold small mb-1">{s.label}</div>
                        <small className="text-body-secondary">{s.desc}</small>
                      </div>
                      <div className="d-flex align-items-center gap-3 ms-4 flex-shrink-0">
                        <span className={`badge ${s.on ? 'bg-label-success' : 'bg-label-secondary'}`}>
                          {s.on ? 'On' : 'Off'}
                        </span>
                        <div className="form-check form-switch mb-0">
                          <input className="form-check-input" type="checkbox" defaultChecked={s.on} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex gap-3 mt-6 pt-2 border-top">
                  <button className="btn btn-primary">
                    <i className="ti tabler-shield-check me-1"></i>Save Security Settings
                  </button>
                  <button className="btn btn-outline-danger">
                    <i className="ti tabler-logout me-1"></i>Force Logout All Users
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Security tips sidebar */}
          <div className="col-xl-4">
            <div className="card border border-warning" style={{ boxShadow: '0 4px 16px rgba(255,159,67,0.1)' }}>
              <div className="card-header border-bottom">
                <h5 className="card-title mb-0 text-warning">
                  <i className="ti tabler-shield-lock me-2"></i>Security Checklist
                </h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {[
                    { done: true,  text: '2FA enabled for admins'               },
                    { done: true,  text: 'CAPTCHA active on login page'         },
                    { done: true,  text: 'HTTPS enforced sitewide'              },
                    { done: false, text: 'IP allowlist configured'              },
                    { done: true,  text: 'Session timeout ≤ 60 min'            },
                    { done: false, text: 'Security audit run last 30 days'     },
                  ].map((c, i) => (
                    <li key={i} className={`d-flex align-items-center gap-3 ${i < 5 ? 'mb-3' : ''}`}>
                      <i className={`ti ${c.done ? 'tabler-circle-check text-success' : 'tabler-circle-x text-danger'} icon-md`}></i>
                      <span className={`small ${c.done ? '' : 'text-body-secondary'}`}>{c.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-top">
                  <div className="d-flex justify-content-between mb-1">
                    <small className="fw-semibold">Security Score</small>
                    <small className="text-warning fw-bold">67%</small>
                  </div>
                  <div className="progress" style={{ height: 8 }}>
                    <div className="progress-bar bg-warning" style={{ width: '67%' }}></div>
                  </div>
                  <small className="text-body-secondary mt-1 d-block">Enable IP allowlist and run an audit to reach 100%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </SuperAdminLayout>
  );
}
