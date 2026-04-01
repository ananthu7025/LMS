'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const announcements = [
  { id: 1, title: 'Mock Test Results Published',         audience: 'All Students',     audienceColor: 'primary', reach: 1247, channels: ['Email', 'App'], status: 'Sent',      sentAt: 'Mar 28, 2025', openRate: 78 },
  { id: 2, title: 'April Live Class Schedule Updated',   audience: 'All Students',     audienceColor: 'primary', reach: 1247, channels: ['Email', 'App'], status: 'Sent',      sentAt: 'Mar 25, 2025', openRate: 82 },
  { id: 3, title: 'New Study Material — Evidence Act',   audience: 'Criminal Law',     audienceColor: 'info',    reach: 342,  channels: ['App'],           status: 'Sent',      sentAt: 'Mar 20, 2025', openRate: 65 },
  { id: 4, title: 'Holiday Notice — Holi 2025',          audience: 'All Students',     audienceColor: 'primary', reach: 1247, channels: ['Email', 'App'], status: 'Sent',      sentAt: 'Mar 10, 2025', openRate: 91 },
  { id: 5, title: 'Fee Reminder — Pending Payments',     audience: 'Batch B',          audienceColor: 'warning', reach: 389,  channels: ['Email'],         status: 'Sent',      sentAt: 'Mar 5, 2025',  openRate: 58 },
  { id: 6, title: 'CLAT Mock Test — April 10th',         audience: 'CLAT Preparation', audienceColor: 'success', reach: 290,  channels: ['Email', 'App'], status: 'Scheduled', sentAt: 'Apr 8, 2025',  openRate: 0  },
  { id: 7, title: 'Welcome Message — New Batch C',       audience: 'Batch C',          audienceColor: 'danger',  reach: 214,  channels: ['Email', 'App'], status: 'Draft',     sentAt: '—',            openRate: 0  },
];

const statusBadge: Record<string, string> = {
  Sent: 'bg-label-success', Scheduled: 'bg-label-info', Draft: 'bg-label-secondary',
};

const channelIcon: Record<string, string> = {
  Email: 'tabler-mail', App: 'tabler-bell', SMS: 'tabler-message',
};
const channelColor: Record<string, string> = {
  Email: 'primary', App: 'info', SMS: 'success',
};

export default function AnnouncementsPage() {
  const [selected, setSelected]         = useState<Set<number>>(new Set());
  const [statusFilter, setStatusFilter] = useState('All');
  const [audFilter, setAudFilter]       = useState('All');
  const [search, setSearch]             = useState('');
  const [showModal, setShowModal]       = useState(false);
  const [showCanvas, setShowCanvas]     = useState(false);

  // Compose state
  const [audience, setAudience]     = useState<'all' | 'course' | 'batch'>('all');
  const [scheduled, setScheduled]   = useState(false);
  const [channels, setChannels]     = useState({ email: true, app: true });

  const filtered = announcements.filter(a => {
    if (statusFilter !== 'All' && a.status   !== statusFilter) return false;
    if (audFilter    !== 'All' && a.audience !== audFilter)    return false;
    if (search && !a.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const allChecked = filtered.length > 0 && filtered.every((_, i) => selected.has(i));

  const audienceCount: Record<string, number> = { all: 1247, course: 342, batch: 412 };

  return (
    <AdminLayout title="Announcements" breadcrumb="Home / Announcements">

      {/* ── Stat Cards ─────────────────────────────────────────────── */}
      <div className="row g-6 mb-6">
        {[
          { label: 'Sent This Month', val: '5',    change: '+2',  sub: 'vs last month',     icon: 'tabler-speakerphone', color: 'primary', changeColor: 'success' },
          { label: 'Total Reach',     val: '3,525',change: '+18%',sub: 'Students notified', icon: 'tabler-users',        color: 'info',    changeColor: 'success' },
          { label: 'Avg. Open Rate',  val: '74.8%',change: '+5%', sub: 'Email + App',       icon: 'tabler-eye',          color: 'success', changeColor: 'success' },
          { label: 'Scheduled',       val: '1',    change: '',    sub: 'Pending send',      icon: 'tabler-clock',        color: 'warning', changeColor: 'secondary'},
        ].map(s => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span className="text-heading">{s.label}</span>
                    <div className="d-flex align-items-center my-1">
                      <h4 className="mb-0 me-2">{s.val}</h4>
                      {s.change && <p className={`text-${s.changeColor} mb-0`}>({s.change})</p>}
                    </div>
                    <small className="mb-0">{s.sub}</small>
                  </div>
                  <div className="avatar">
                    <span className={`avatar-initial rounded bg-label-${s.color}`}>
                      <i className={`icon-base ti ${s.icon} icon-26px`}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Table Card ─────────────────────────────────────────────── */}
      <div className="card">

            {/* Filters */}
            <div className="card-header border-bottom">
              <h5 className="card-title mb-0">Filters</h5>
              <div className="d-flex justify-content-between align-items-center row pt-4 gap-4 gap-md-0">
                <div className="col-md-6">
                  <select className="form-select" onChange={e => setStatusFilter(e.target.value)}>
                    <option value="All">Select Status</option>
                    <option>Sent</option>
                    <option>Scheduled</option>
                    <option>Draft</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select className="form-select" onChange={e => setAudFilter(e.target.value)}>
                    <option value="All">Select Audience</option>
                    <option>All Students</option>
                    <option>Criminal Law</option>
                    <option>CLAT Preparation</option>
                    <option>Batch B</option>
                    <option>Batch C</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Toolbar */}
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3 border-bottom py-4">
              <div className="d-flex align-items-center gap-2">
                <label className="mb-0 text-nowrap small">Show</label>
                <select className="form-select form-select-sm" style={{ width: 70 }}>
                  <option>10</option><option>25</option><option>50</option>
                </select>
                <label className="mb-0 text-nowrap small">entries</label>
              </div>
              <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="input-group input-group-sm" style={{ width: 210 }}>
                  <span className="input-group-text"><i className="ti tabler-search"></i></span>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search announcement..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ti tabler-download me-1"></i>Export
                </button>
                <button className="btn btn-sm btn-primary" onClick={() => setShowCanvas(true)}>
                  <i className="ti tabler-plus me-1"></i>New Announcement
                </button>
              </div>
            </div>

            {/* Bulk action bar */}
            {selected.size > 0 && (
              <div className="px-4 py-2 bg-label-primary d-flex align-items-center gap-3 flex-wrap border-bottom">
                <span className="fw-semibold small">{selected.size} selected</span>
                {[
                  ['tabler-send',     'Resend'],
                  ['tabler-download', 'Export'],
                  ['tabler-trash',    'Delete'],
                ].map(([icon, label]) => (
                  <button key={label} className="btn btn-sm btn-outline-primary bg-white">
                    <i className={`ti ${icon} me-1`}></i>{label}
                  </button>
                ))}
              </div>
            )}

            {/* Table */}
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="border-top">
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={allChecked}
                        onChange={e => setSelected(e.target.checked ? new Set(filtered.map((_, i) => i)) : new Set())}
                      />
                    </th>
                    <th>Announcement</th>
                    <th>Channels</th>
                    <th>Reach</th>
                    <th>Open Rate</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((a, i) => (
                    <tr key={i}>
                      <td>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={selected.has(i)}
                          onChange={e => {
                            const ns = new Set(selected);
                            e.target.checked ? ns.add(i) : ns.delete(i);
                            setSelected(ns);
                          }}
                        />
                      </td>

                      {/* Title + audience */}
                      <td>
                        <div className="fw-semibold text-heading mb-1" style={{ maxWidth: 260 }}>{a.title}</div>
                        <div className="d-flex align-items-center gap-2">
                          <span className={`badge bg-label-${a.audienceColor}`} style={{ fontSize: 11 }}>
                            <i className="ti tabler-users me-1" style={{ fontSize: 10 }}></i>{a.audience}
                          </span>
                          <small className="text-body-secondary">{a.sentAt}</small>
                        </div>
                      </td>

                      {/* Channels */}
                      <td>
                        <div className="d-flex gap-1">
                          {a.channels.map(ch => (
                            <span key={ch} className={`badge bg-label-${channelColor[ch]} d-flex align-items-center gap-1`} style={{ fontSize: 11 }}>
                              <i className={`ti ${channelIcon[ch]}`} style={{ fontSize: 10 }}></i>{ch}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Reach */}
                      <td>
                        <div className="d-flex align-items-center gap-1">
                          <i className="ti tabler-users text-primary" style={{ fontSize: 13 }}></i>
                          <span className="fw-semibold text-heading">{a.reach.toLocaleString('en-IN')}</span>
                        </div>
                      </td>

                      {/* Open rate */}
                      <td style={{ minWidth: 120 }}>
                        {a.status === 'Sent' ? (
                          <>
                            <div className="d-flex align-items-center gap-2 mb-1">
                              <div className="progress flex-grow-1" style={{ height: 5 }}>
                                <div
                                  className={`progress-bar ${a.openRate >= 75 ? 'bg-success' : a.openRate >= 50 ? 'bg-warning' : 'bg-danger'}`}
                                  style={{ width: `${a.openRate}%` }}
                                ></div>
                              </div>
                              <small className="fw-semibold text-nowrap">{a.openRate}%</small>
                            </div>
                          </>
                        ) : (
                          <small className="text-body-secondary">—</small>
                        )}
                      </td>

                      {/* Status */}
                      <td>
                        <span className={`badge ${statusBadge[a.status]}`}>{a.status}</span>
                      </td>

                      {/* Actions */}
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti tabler-dots-vertical"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#"><i className="ti tabler-eye me-2"></i>View</a>
                            {a.status !== 'Sent' && (
                              <a className="dropdown-item" href="#"><i className="ti tabler-edit me-2"></i>Edit</a>
                            )}
                            {a.status === 'Sent' && (
                              <a className="dropdown-item" href="#"><i className="ti tabler-send me-2"></i>Resend</a>
                            )}
                            {a.status === 'Draft' && (
                              <a className="dropdown-item text-primary" href="#"><i className="ti tabler-speakerphone me-2"></i>Send Now</a>
                            )}
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#"><i className="ti tabler-trash me-2"></i>Delete</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="card-footer d-flex flex-wrap justify-content-between align-items-center gap-3 py-3">
              <small className="text-body-secondary">
                Showing {filtered.length > 0 ? 1 : 0}–{filtered.length} of {announcements.length} announcements
              </small>
              <nav>
                <ul className="pagination pagination-sm mb-0">
                  {['‹', '1', '›'].map((p, i) => (
                    <li key={i} className={`page-item${p === '1' ? ' active' : ''}`}>
                      <a className="page-link" href="#">{p}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

      {/* ── New Announcement Offcanvas ───────────────────────────────── */}
      {showCanvas && (
        <div className="offcanvas offcanvas-end show" style={{ visibility: 'visible', width: 440 }}>
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">
              <i className="ti tabler-speakerphone me-2 text-primary"></i>New Announcement
            </h5>
            <button type="button" className="btn-close" onClick={() => setShowCanvas(false)}></button>
          </div>
          <div className="offcanvas-body">
            <p className="text-body-secondary mb-5">Compose and send an announcement to your students.</p>

            {/* Audience */}
            <div className="mb-4">
              <label className="form-label fw-medium">Audience</label>
              <div className="d-flex flex-column gap-2">
                {([
                  ['all',    'tabler-users',      'All Students',    '1,247 students'],
                  ['course', 'tabler-book',        'Specific Course', 'Select below'],
                  ['batch',  'tabler-layout-grid', 'Specific Batch',  'Select below'],
                ] as const).map(([val, icon, label, sub]) => (
                  <label
                    key={val}
                    className={`d-flex align-items-center gap-3 p-3 rounded border${audience === val ? ' border-primary bg-label-primary' : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <input
                      type="radio"
                      className="form-check-input mt-0 flex-shrink-0"
                      name="audience"
                      value={val}
                      checked={audience === val}
                      onChange={() => setAudience(val)}
                    />
                    <div className="avatar avatar-sm flex-shrink-0">
                      <span className={`avatar-initial rounded bg-label-${audience === val ? 'primary' : 'secondary'}`}>
                        <i className={`ti ${icon}`} style={{ fontSize: 14 }}></i>
                      </span>
                    </div>
                    <div>
                      <div className={`small fw-semibold${audience === val ? ' text-primary' : ' text-heading'}`}>{label}</div>
                      <small className="text-body-secondary">{sub}</small>
                    </div>
                  </label>
                ))}
              </div>
              {audience === 'course' && (
                <select className="form-select mt-2">
                  <option>Criminal Law Fundamentals (342 students)</option>
                  <option>Constitutional Law Mastery (218 students)</option>
                  <option>CLAT 2025 Preparation (290 students)</option>
                  <option>Evidence Act Deep Dive (124 students)</option>
                </select>
              )}
              {audience === 'batch' && (
                <select className="form-select mt-2">
                  <option>Batch A (412 students)</option>
                  <option>Batch B (389 students)</option>
                  <option>Batch C (214 students)</option>
                </select>
              )}
            </div>

            {/* Title */}
            <div className="mb-4">
              <label className="form-label fw-medium">Title</label>
              <input className="form-control" placeholder="e.g. April Live Class Update" />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="form-label fw-medium">Message</label>
              <textarea className="form-control" rows={5} placeholder="Write your announcement here..." />
            </div>

            {/* Delivery channels */}
            <div className="mb-4">
              <label className="form-label fw-medium">Delivery Channels</label>
              <div className="d-flex gap-2">
                {([
                  ['email', 'tabler-mail', 'Email',  'primary'],
                  ['app',   'tabler-bell', 'In-App', 'info'],
                ] as const).map(([key, icon, label, color]) => (
                  <label
                    key={key}
                    className={`d-flex align-items-center gap-2 px-3 py-2 rounded border flex-grow-1${channels[key] ? ` border-${color} bg-label-${color}` : ''}`}
                    style={{ cursor: 'pointer' }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input mt-0"
                      checked={channels[key]}
                      onChange={e => setChannels(prev => ({ ...prev, [key]: e.target.checked }))}
                    />
                    <i className={`ti ${icon} text-${color}`} style={{ fontSize: 15 }}></i>
                    <small className="fw-medium">{label}</small>
                  </label>
                ))}
              </div>
            </div>

            {/* Schedule toggle */}
            <div className="d-flex align-items-center justify-content-between py-3 border-top border-bottom mb-4">
              <div>
                <div className="fw-semibold small">Schedule for Later</div>
                <small className="text-body-secondary">Send at a specific date and time</small>
              </div>
              <div className="form-check form-switch mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={scheduled}
                  onChange={e => setScheduled(e.target.checked)}
                />
              </div>
            </div>
            {scheduled && (
              <div className="row g-3 mb-4">
                <div className="col-6">
                  <label className="form-label fw-medium">Date</label>
                  <input className="form-control" type="date" defaultValue="2025-04-10" />
                </div>
                <div className="col-6">
                  <label className="form-label fw-medium">Time</label>
                  <input className="form-control" type="time" defaultValue="09:00" />
                </div>
              </div>
            )}

            <div className="d-flex gap-3">
              <button className="btn btn-outline-secondary">
                <i className="ti tabler-device-floppy me-1"></i>Save Draft
              </button>
              <button
                className="btn btn-primary flex-grow-1"
                onClick={() => { setShowCanvas(false); setShowModal(true); }}
              >
                <i className={`ti ${scheduled ? 'tabler-calendar' : 'tabler-speakerphone'} me-1`}></i>
                {scheduled ? 'Schedule' : 'Send Now'}
              </button>
            </div>
          </div>
        </div>
      )}
      {showCanvas && (
        <div className="offcanvas-backdrop fade show" onClick={() => setShowCanvas(false)}></div>
      )}

      {/* ── Confirm Modal ─────────────────────────────────────────────── */}
      {showModal && (
        <>
          <div className="modal show d-block" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center p-6">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4"
                    style={{ width: 72, height: 72, background: '#7367F015' }}
                  >
                    <i className="ti tabler-speakerphone" style={{ fontSize: 34, color: '#7367F0' }}></i>
                  </div>
                  <h4 className="fw-bold mb-2">Confirm Announcement</h4>
                  <p className="text-body-secondary mb-3">You are about to send this announcement to:</p>
                  <h2 className="fw-bold text-primary mb-1">
                    {audienceCount[audience].toLocaleString('en-IN')} students
                  </h2>
                  <div className="d-flex justify-content-center gap-2 mb-2">
                    {channels.email && (
                      <span className="badge bg-label-primary d-flex align-items-center gap-1">
                        <i className="ti tabler-mail" style={{ fontSize: 11 }}></i>Email
                      </span>
                    )}
                    {channels.app && (
                      <span className="badge bg-label-info d-flex align-items-center gap-1">
                        <i className="ti tabler-bell" style={{ fontSize: 11 }}></i>In-App
                      </span>
                    )}
                  </div>
                  <small className="text-body-secondary">This action cannot be undone once sent.</small>
                </div>
                <div className="modal-footer gap-2">
                  <button className="btn btn-outline-secondary flex-grow-1" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-primary flex-grow-1" onClick={() => setShowModal(false)}>
                    <i className="ti tabler-check me-1"></i>
                    {scheduled ? 'Confirm Schedule' : 'Confirm & Send'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}

    </AdminLayout>
  );
}
