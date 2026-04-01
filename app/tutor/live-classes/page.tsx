'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const classes = [
  { course: 'Criminal Law Fundamentals', topic: 'Section 302 & Murder — Case Studies',      date: 'Apr 1, 2025',  time: '10:00 AM', duration: '90 min',  students: 124, status: 'Live'      },
  { course: 'Criminal Law Fundamentals', topic: 'Mens Rea & Actus Reus — Deep Dive',         date: 'Apr 4, 2025',  time: '10:00 AM', duration: '60 min',  students: 98,  status: 'Upcoming'  },
  { course: 'CLAT Preparation',           topic: 'Mock Test Review: March Batch',              date: 'Apr 6, 2025',  time: '05:30 PM', duration: '120 min', students: 201, status: 'Upcoming'  },
  { course: 'Contract Law',               topic: 'Offer & Acceptance — Core Principles',        date: 'Apr 9, 2025',  time: '03:00 PM', duration: '45 min',  students: 54,  status: 'Upcoming'  },
  { course: 'Criminal Law Fundamentals', topic: 'Evidence Act: Sections 45–51',               date: 'Mar 28, 2025', time: '10:00 AM', duration: '90 min',  students: 108, status: 'Completed' },
  { course: 'CLAT Preparation',           topic: 'Current Affairs: March 2025 Digest',         date: 'Mar 24, 2025', time: '05:00 PM', duration: '45 min',  students: 187, status: 'Completed' },
  { course: 'Contract Law',               topic: 'Consideration & Void Agreements',             date: 'Mar 20, 2025', time: '03:00 PM', duration: '60 min',  students: 61,  status: 'Completed' },
];

const courseMap: Record<string, { color: string; hex: string }> = {
  'Criminal Law Fundamentals': { color: 'primary', hex: '#7367F0' },
  'CLAT Preparation':           { color: 'success', hex: '#28C76F' },
  'Contract Law':               { color: 'danger',  hex: '#FF4C51' },
};

const initials = (name: string) => name.split(' ').map(n => n[0]).join('');

const CAL_OFFSET = 2;
const CAL_DAYS   = 30;
const calEvents: Record<number, { label: string; color: string }[]> = {
  1: [{ label: '10AM Criminal Law',  color: 'primary' }],
  4: [{ label: '10AM Criminal Law',  color: 'primary' }],
  6: [{ label: '5:30PM CLAT',        color: 'success' }],
  9: [{ label: '3PM Contract Law',   color: 'danger'  }],
};

export default function TutorLiveClassesPage() {
  const [view, setView]                 = useState<'cards' | 'calendar'>('cards');
  const [courseFilter, setCourseFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [search, setSearch]             = useState('');

  const filtered = classes.filter(c => {
    if (courseFilter !== 'All' && c.course !== courseFilter) return false;
    if (statusFilter !== 'All' && c.status !== statusFilter) return false;
    if (search && !c.topic.toLowerCase().includes(search.toLowerCase()) && !c.course.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const live      = filtered.filter(c => c.status === 'Live');
  const upcoming  = filtered.filter(c => c.status === 'Upcoming');
  const completed = filtered.filter(c => c.status === 'Completed');

  return (
    <TutorLayout title="Live Classes" breadcrumb="Home / Live Classes">

      {/* ── Stat Cards ────────────────────────────────────────────────── */}
      <div className="row g-6 mb-6">
        {[
          { label: 'Scheduled This Month', val: '7',  sub: 'April 2025',  icon: 'tabler-calendar',     color: 'primary', change: '+2', changeColor: 'success'   },
          { label: 'Live Now',             val: '1',  sub: 'In progress', icon: 'tabler-radio',        color: 'danger',  change: '',   changeColor: 'secondary' },
          { label: 'Upcoming',             val: '3',  sub: 'Next 7 days', icon: 'tabler-clock',        color: 'info',    change: '',   changeColor: 'secondary' },
          { label: 'Completed',            val: '3',  sub: 'This month',  icon: 'tabler-circle-check', color: 'success', change: '+1', changeColor: 'success'   },
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

      {/* ── Toolbar ───────────────────────────────────────────────────── */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-5">
        <div className="d-flex flex-wrap gap-2">
          <select className="form-select form-select-sm" style={{ width: 200 }} onChange={e => setCourseFilter(e.target.value)}>
            <option value="All">All Courses</option>
            <option>Criminal Law Fundamentals</option>
            <option>CLAT Preparation</option>
            <option>Contract Law</option>
          </select>
          <select className="form-select form-select-sm" style={{ width: 140 }} onChange={e => setStatusFilter(e.target.value)}>
            <option value="All">All Status</option>
            <option>Live</option>
            <option>Upcoming</option>
            <option>Completed</option>
          </select>
          <div className="input-group input-group-sm" style={{ width: 210 }}>
            <span className="input-group-text"><i className="ti tabler-search"></i></span>
            <input type="search" className="form-control" placeholder="Search class..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="btn-group btn-group-sm">
            <button className={`btn btn-icon btn-outline-secondary${view === 'cards' ? ' active' : ''}`} onClick={() => setView('cards')} title="Cards">
              <i className="ti tabler-layout-grid"></i>
            </button>
            <button className={`btn btn-icon btn-outline-secondary${view === 'calendar' ? ' active' : ''}`} onClick={() => setView('calendar')} title="Calendar">
              <i className="ti tabler-calendar"></i>
            </button>
          </div>
          <a href="/tutor/live-classes/schedule" className="btn btn-sm btn-primary">
            <i className="ti tabler-plus me-1"></i>Schedule Class
          </a>
        </div>
      </div>

      {/* ═══════════════════ CARDS VIEW ═══════════════════════════════ */}
      {view === 'cards' && (
        <>

          {/* ── Live Now ──────────────────────────────────────────────── */}
          {live.length > 0 && (
            <div className="mb-6">
              <div className="d-flex align-items-center gap-2 mb-4">
                <span className="live-dot rounded-circle bg-danger d-inline-block"></span>
                <h6 className="fw-bold mb-0">Live Now</h6>
                <span className="badge bg-label-danger">{live.length}</span>
              </div>

              {live.map((c, i) => {
                const cm = courseMap[c.course] ?? { color: 'primary', hex: '#7367F0' };
                return (
                  <div key={i} className="card p-0 mb-4 overflow-hidden">
                    <div
                      className="card-body p-5"
                      style={{
                        background: 'linear-gradient(135deg, #7367F0 0%, #9E95F5 100%)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }}></div>
                      <div style={{ position: 'absolute', bottom: -60, right: 100, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }}></div>
                      <div style={{ position: 'absolute', top: '50%', right: 280, width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none', transform: 'translateY(-50%)' }}></div>

                      <div className="row align-items-center g-4 position-relative">
                        <div className="col-12 col-md">
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <span className="live-dot rounded-circle bg-white d-inline-block"></span>
                            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Live Now</span>
                          </div>
                          <h4 className="fw-bold mb-1" style={{ color: '#fff' }}>{c.topic}</h4>
                          <p className="mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>{c.course}</p>

                          <div className="d-flex flex-wrap gap-2 mb-4">
                            {[
                              ['tabler-calendar', c.date],
                              ['tabler-clock',    c.time],
                              ['tabler-hourglass',c.duration],
                            ].map(([icon, val]) => (
                              <span
                                key={val}
                                className="d-flex align-items-center gap-1 rounded-pill px-3 py-1 small fw-medium"
                                style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: 12 }}
                              >
                                <i className={`ti ${icon}`} style={{ fontSize: 12 }}></i>{val}
                              </span>
                            ))}
                          </div>

                          <div className="d-flex align-items-center gap-2">
                            <div
                              className="d-flex align-items-center justify-content-center rounded-circle fw-bold"
                              style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: 12, flexShrink: 0 }}
                            >
                              AK
                            </div>
                            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>Anil Kumar</span>
                          </div>
                        </div>

                        <div className="col-12 col-md-auto d-flex flex-row flex-md-column align-items-center align-items-md-end gap-3">
                          <div
                            className="rounded-3 text-center"
                            style={{ background: 'rgba(255,255,255,0.15)', padding: '12px 24px', minWidth: 100 }}
                          >
                            <div style={{ color: '#fff', fontWeight: 700, fontSize: 28, lineHeight: 1 }}>{c.students}</div>
                            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11, marginTop: 4 }}>Students</div>
                          </div>
                          <button
                            className="btn fw-semibold d-flex align-items-center gap-2"
                            style={{ background: '#fff', color: '#7367F0', minWidth: 130, justifyContent: 'center' }}
                          >
                            <i className="ti tabler-player-play"></i>Start Class
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Upcoming ──────────────────────────────────────────────── */}
          {upcoming.length > 0 && (
            <div className="mb-6">
              <div className="d-flex align-items-center gap-2 mb-4">
                <i className="ti tabler-clock text-info"></i>
                <h6 className="fw-bold mb-0">Upcoming</h6>
                <span className="badge bg-label-info">{upcoming.length}</span>
              </div>

              <div className="row gy-6">
                {upcoming.map((c, i) => {
                  const cm = courseMap[c.course] ?? { color: 'primary', hex: '#7367F0' };
                  return (
                    <div key={i} className="col-sm-6 col-xl-3">
                      <div className="card p-2 h-100 shadow-none border">

                        <div
                          className="rounded-2 d-flex align-items-center justify-content-center overflow-hidden position-relative mb-3"
                          style={{ height: 110, background: `${cm.hex}12` }}
                        >
                          <div
                            className="d-flex align-items-center justify-content-center rounded-3"
                            style={{ width: 52, height: 52, background: `${cm.hex}22` }}
                          >
                            <i className="ti tabler-video" style={{ fontSize: 26, color: cm.hex }}></i>
                          </div>
                          <span
                            className={`badge bg-label-${cm.color} position-absolute`}
                            style={{ top: 10, right: 10, fontSize: 11 }}
                          >
                            {c.course}
                          </span>
                        </div>

                        <div className="card-body p-2 pt-0">
                          <h6 className="fw-bold mb-3 text-heading" style={{ lineHeight: 1.4 }}>{c.topic}</h6>

                          <div className="d-flex flex-wrap gap-1 mb-3">
                            {[
                              ['tabler-calendar', c.date],
                              ['tabler-clock',    c.time],
                              ['tabler-hourglass',c.duration],
                            ].map(([icon, val]) => (
                              <span key={val} className="badge bg-label-secondary d-flex align-items-center gap-1" style={{ fontSize: 11 }}>
                                <i className={`ti ${icon}`} style={{ fontSize: 10 }}></i>{val}
                              </span>
                            ))}
                          </div>

                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                              <div className="avatar avatar-sm">
                                <span className="avatar-initial rounded-circle bg-label-primary" style={{ fontSize: 10 }}>AK</span>
                              </div>
                              <small className="text-body-secondary">Anil Kumar</small>
                            </div>
                            <small className="text-body-secondary d-flex align-items-center gap-1">
                              <i className="ti tabler-users" style={{ fontSize: 12 }}></i>{c.students}
                            </small>
                          </div>
                        </div>

                        <div className="card-footer border-top p-2 d-flex gap-2">
                          <button className={`btn btn-sm btn-label-${cm.color} flex-grow-1`}>
                            <i className="ti tabler-edit icon-xs me-1"></i>Edit
                          </button>
                          <button className="btn btn-sm btn-label-secondary">
                            <i className="ti tabler-mail icon-xs"></i>
                          </button>
                          <div className="dropdown">
                            <button className="btn btn-sm btn-label-secondary dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                              <i className="ti tabler-dots-vertical icon-xs"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#"><i className="ti tabler-player-play me-2"></i>Start Early</a>
                              <a className="dropdown-item" href="#"><i className="ti tabler-mail me-2"></i>Notify Students</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item text-danger" href="#"><i className="ti tabler-x me-2"></i>Cancel Class</a>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── Completed ─────────────────────────────────────────────── */}
          {completed.length > 0 && (
            <div>
              <div className="d-flex align-items-center gap-2 mb-4">
                <i className="ti tabler-circle-check text-success"></i>
                <h6 className="fw-bold mb-0">Completed</h6>
                <span className="badge bg-label-success">{completed.length}</span>
              </div>

              <div className="row gy-4">
                {completed.map((c, i) => {
                  const cm = courseMap[c.course] ?? { color: 'primary', hex: '#7367F0' };
                  return (
                    <div key={i} className="col-sm-6 col-xl-3">
                      <div className="card p-2 h-100 shadow-none border overflow-hidden">

                        <div style={{
                          height: 3,
                          background: `linear-gradient(90deg, ${cm.hex}, ${cm.hex}55)`,
                          borderRadius: '4px 4px 0 0',
                          margin: '-8px -8px 12px -8px',
                        }}></div>

                        <div className="card-body p-2">
                          <div className="d-flex align-items-start justify-content-between mb-2">
                            <span className={`badge bg-label-${cm.color}`} style={{ fontSize: 11 }}>{c.course}</span>
                            <div className="dropdown">
                              <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ti tabler-dots-vertical"></i>
                              </button>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#"><i className="ti tabler-video me-2"></i>View Recording</a>
                                <a className="dropdown-item" href="#"><i className="ti tabler-eye me-2"></i>View Details</a>
                                <a className="dropdown-item" href="#"><i className="ti tabler-copy me-2"></i>Duplicate</a>
                              </div>
                            </div>
                          </div>

                          <h6 className="fw-semibold text-heading mb-2" style={{ fontSize: 13, lineHeight: 1.4 }}>{c.topic}</h6>

                          <div className="d-flex align-items-center gap-2 mb-3 text-body-secondary" style={{ fontSize: 12 }}>
                            <i className="ti tabler-calendar" style={{ fontSize: 12 }}></i>
                            <span>{c.date}</span>
                            <span>·</span>
                            <i className="ti tabler-users" style={{ fontSize: 12 }}></i>
                            <span>{c.students} attended</span>
                          </div>

                          <div className="d-flex align-items-center gap-2">
                            <div className="avatar avatar-sm">
                              <span className="avatar-initial rounded-circle bg-label-secondary" style={{ fontSize: 10 }}>AK</span>
                            </div>
                            <small className="text-body-secondary">Anil Kumar</small>
                          </div>
                        </div>

                        <div className="card-footer border-top p-2">
                          <button className="btn btn-sm btn-label-secondary w-100">
                            <i className="ti tabler-video icon-xs me-1"></i>View Recording
                          </button>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-6">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                style={{ width: 72, height: 72, background: '#7367F015' }}
              >
                <i className="ti tabler-video-off" style={{ fontSize: 32, color: '#7367F0' }}></i>
              </div>
              <p className="text-body-secondary">No classes found for the selected filters.</p>
            </div>
          )}

        </>
      )}

      {/* ═══════════════════ CALENDAR VIEW ════════════════════════════ */}
      {view === 'calendar' && (
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-sm btn-icon btn-outline-secondary"><i className="ti tabler-chevron-left"></i></button>
                <h5 className="fw-bold mb-0">April 2025</h5>
                <button className="btn btn-sm btn-icon btn-outline-secondary"><i className="ti tabler-chevron-right"></i></button>
              </div>
              <button className="btn btn-sm btn-outline-primary">Today</button>
            </div>

            <div className="row g-1 mb-1">
              {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
                <div key={d} className="col text-center py-2">
                  <small className="fw-bold text-body-secondary text-uppercase">{d}</small>
                </div>
              ))}
            </div>

            <div className="row g-1">
              {Array.from({ length: CAL_OFFSET }).map((_, i) => (
                <div key={`pre${i}`} className="col" style={{ minHeight: 90 }}></div>
              ))}
              {Array.from({ length: CAL_DAYS }).map((_, i) => {
                const day    = i + 1;
                const events = calEvents[day] ?? [];
                const isToday = day === 1;
                return (
                  <div
                    key={day}
                    className={`col rounded border p-1${events.length ? ' border-primary' : ''}`}
                    style={{ minHeight: 90, background: isToday ? '#7367F010' : undefined }}
                  >
                    <small className={`fw-bold d-block mb-1${isToday ? ' text-primary' : ' text-body-secondary'}`}>{day}</small>
                    {events.map((ev, j) => (
                      <div
                        key={j}
                        className={`badge bg-label-${ev.color} w-100 text-truncate d-block mb-1`}
                        style={{ fontSize: 9 }}
                        title={ev.label}
                      >
                        {ev.label}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="d-flex flex-wrap gap-3 mt-4 pt-3 border-top">
              {[
                ['bg-label-danger',  'Live Now'],
                ['bg-label-primary', 'Criminal Law'],
                ['bg-label-success', 'CLAT Prep'],
                ['bg-label-danger',  'Contract Law'],
              ].map(([cls, label]) => (
                <div key={label} className="d-flex align-items-center gap-2">
                  <span className={`badge ${cls} rounded-pill`} style={{ width: 10, height: 10, padding: 0 }}></span>
                  <small className="text-body-secondary">{label}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .live-dot {
          width: 8px; height: 8px; flex-shrink: 0;
          animation: livePulse 1.4s ease-in-out infinite;
        }
        @keyframes livePulse {
          0%, 100% { opacity: 1;  transform: scale(1);   }
          50%       { opacity: .4; transform: scale(1.6); }
        }
      `}</style>

    </TutorLayout>
  );
}
