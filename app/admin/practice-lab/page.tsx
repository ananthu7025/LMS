'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import Link from 'next/link';

const LAB_MODULES = [
  {
    id: 'client-interview',
    icon: 'tabler-briefcase',
    color: 'success',
    title: 'Client Interview Room',
    type: 'Skill',
    typeColor: 'success',
    difficulty: 'Beginner',
    diffColor: 'success',
    xp: 150,
    time: '20–30 min',
    scenarios: 4,
    attempts: 189,
    avgScore: 79,
    enabled: true,
  },
  {
    id: 'case-drafting',
    icon: 'tabler-scroll',
    color: 'primary',
    title: 'Case Drafting Studio',
    type: 'Drafting',
    typeColor: 'primary',
    difficulty: 'Intermediate',
    diffColor: 'warning',
    xp: 200,
    time: '45–60 min',
    scenarios: 4,
    attempts: 214,
    avgScore: 74,
    enabled: true,
  },
  {
    id: 'contract-drafting',
    icon: 'tabler-clipboard-text',
    color: 'warning',
    title: 'Contract Drafting Desk',
    type: 'Drafting',
    typeColor: 'warning',
    difficulty: 'Intermediate',
    diffColor: 'warning',
    xp: 250,
    time: '40–60 min',
    scenarios: 2,
    attempts: 67,
    avgScore: 71,
    enabled: true,
  },
  {
    id: 'moot-court',
    icon: 'tabler-microphone',
    color: 'danger',
    title: 'Moot Court Simulator',
    type: 'Advocacy',
    typeColor: 'danger',
    difficulty: 'Advanced',
    diffColor: 'danger',
    xp: 350,
    time: '30–45 min',
    scenarios: 0,
    attempts: 0,
    avgScore: 0,
    enabled: false,
  },
  {
    id: 'legal-research',
    icon: 'tabler-search',
    color: 'info',
    title: 'Legal Research Arena',
    type: 'Research',
    typeColor: 'info',
    difficulty: 'Intermediate',
    diffColor: 'warning',
    xp: 180,
    time: '25–35 min',
    scenarios: 0,
    attempts: 0,
    avgScore: 0,
    enabled: false,
  },
  {
    id: 'courtroom-argument',
    icon: 'tabler-scale',
    color: 'secondary',
    title: 'Courtroom Argument Builder',
    type: 'Advocacy',
    typeColor: 'secondary',
    difficulty: 'Advanced',
    diffColor: 'danger',
    xp: 300,
    time: '35–50 min',
    scenarios: 0,
    attempts: 0,
    avgScore: 0,
    enabled: false,
  },
];

export default function AdminPracticeLabPage() {
  const [modules, setModules] = useState(LAB_MODULES);
  const [view, setView] = useState<'card' | 'table'>('table');

  const toggleEnabled = (id: string) => {
    setModules(prev => prev.map(m => m.id === id ? { ...m, enabled: !m.enabled } : m));
  };

  const enabledCount  = modules.filter(m => m.enabled).length;
  const totalAttempts = modules.reduce((s, m) => s + m.attempts, 0);
  const totalScenarios = modules.reduce((s, m) => s + m.scenarios, 0);
  const avgScore = Math.round(
    modules.filter(m => m.avgScore > 0).reduce((s, m) => s + m.avgScore, 0) /
    (modules.filter(m => m.avgScore > 0).length || 1)
  );

  return (
    <AdminLayout title="Practice Lab" breadcrumb="Home / Practice Lab">

      {/* ── Hero ── */}
      <div className="card p-0 mb-6">
        <div className="card-body d-flex flex-column flex-md-row justify-content-between p-0 pt-6">
          <div className="d-none d-md-flex align-items-end ps-6 pb-0" style={{ minWidth: 90 }}>
            <img src="/img/illustrations/bulb-light.png" alt="" height={90} style={{ objectFit: 'contain' }} />
          </div>
          <div className="flex-grow-1 d-flex align-items-center flex-column text-md-center px-6 py-6">
            <h4 className="mb-2 text-heading lh-lg">
              Manage Practice Lab<br />
              <span className="text-primary text-nowrap">Modules & Scenarios.</span>
            </h4>
            <p className="mb-4 text-body">
              Enable or disable lab modules, configure XP and difficulty, and oversee scenario authoring by tutors.
            </p>
          </div>
          <div className="d-none d-md-flex align-items-end justify-content-end pe-0" style={{ minWidth: 120 }}>
            <img src="/img/illustrations/pencil-rocket.png" alt="" height={188} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="row g-6 mb-6">
        {[
          { icon: 'tabler-layout-grid',   label: 'Total Modules',    value: modules.length,  sub: `${enabledCount} enabled`,     color: 'bg-label-primary', iconColor: '#7367F0' },
          { icon: 'tabler-file-text',     label: 'Total Scenarios',  value: totalScenarios,  sub: 'Across all modules',          color: 'bg-label-success', iconColor: '#28C76F' },
          { icon: 'tabler-users',         label: 'Total Attempts',   value: totalAttempts,   sub: 'By all students',             color: 'bg-label-warning', iconColor: '#FF9F43' },
          { icon: 'tabler-chart-bar',     label: 'Avg Score',        value: `${avgScore}%`,  sub: 'Across active modules',       color: 'bg-label-info',    iconColor: '#00CFE8' },
        ].map(s => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <span className="text-heading">{s.label}</span>
                    <div className="d-flex align-items-center my-1">
                      <h4 className="mb-0 me-2">{s.value}</h4>
                    </div>
                    <small className="text-body-secondary">{s.sub}</small>
                  </div>
                  <div className="avatar">
                    <span className={`avatar-initial rounded ${s.color}`}>
                      <i className={`icon-base ti ${s.icon} icon-26px`} style={{ color: s.iconColor }}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Modules Table ── */}
      <div className="card">
        <div className="card-header d-flex flex-wrap justify-content-between align-items-center gap-4">
          <div className="card-title mb-0">
            <h5 className="mb-0">Lab Modules</h5>
            <p className="mb-0 text-body">{modules.length} modules configured</p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="btn-group">
              <button
                className={`btn btn-icon btn-outline-secondary${view === 'table' ? ' active' : ''}`}
                onClick={() => setView('table')}
                title="Table view"
              >
                <i className="ti tabler-list"></i>
              </button>
              <button
                className={`btn btn-icon btn-outline-secondary${view === 'card' ? ' active' : ''}`}
                onClick={() => setView('card')}
                title="Card view"
              >
                <i className="ti tabler-layout-grid"></i>
              </button>
            </div>
          </div>
        </div>

        {/* ── Table view ── */}
        {view === 'table' && (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="border-top">
                <tr>
                  <th>Module</th>
                  <th>Type</th>
                  <th>Difficulty</th>
                  <th>XP / Time</th>
                  <th>Scenarios</th>
                  <th>Attempts</th>
                  <th>Avg Score</th>
                  <th>Enabled</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {modules.map(m => (
                  <tr key={m.id}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar">
                          <span className={`avatar-initial rounded bg-label-${m.color}`}>
                            <i className={`icon-base ti ${m.icon} icon-20px`} style={{ color: `var(--bs-${m.color})` }}></i>
                          </span>
                        </div>
                        <div>
                          <span className="fw-semibold text-heading d-block">{m.title}</span>
                          <small className="text-body-secondary">{m.time}</small>
                        </div>
                      </div>
                    </td>
                    <td><span className={`badge bg-label-${m.typeColor}`}>{m.type}</span></td>
                    <td><span className={`badge bg-label-${m.diffColor}`}>{m.difficulty}</span></td>
                    <td>
                      <span className="fw-semibold text-warning me-2">+{m.xp} XP</span>
                      <small className="text-body-secondary">{m.time}</small>
                    </td>
                    <td>
                      <span className="fw-semibold">{m.scenarios}</span>
                      <small className="text-body-secondary ms-1">scenarios</small>
                    </td>
                    <td>
                      {m.attempts > 0
                        ? <><span className="fw-semibold">{m.attempts}</span><small className="text-body-secondary ms-1">attempts</small></>
                        : <span className="text-body-secondary small">—</span>
                      }
                    </td>
                    <td>
                      {m.avgScore > 0
                        ? <span className={`fw-semibold ${m.avgScore >= 75 ? 'text-success' : 'text-warning'}`}>{m.avgScore}%</span>
                        : <span className="text-body-secondary small">—</span>
                      }
                    </td>
                    <td>
                      <div className="form-check form-switch mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          checked={m.enabled}
                          onChange={() => toggleEnabled(m.id)}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti tabler-dots-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link className="dropdown-item" href={`/admin/practice-lab/${m.id}/scenarios`}>
                            <i className="ti tabler-file-text me-2"></i>Manage Scenarios
                          </Link>
                          <a className="dropdown-item" href="#">
                            <i className="ti tabler-settings me-2"></i>Configure Module
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item text-danger" href="#">
                            <i className="ti tabler-eye-off me-2"></i>
                            {m.enabled ? 'Disable Module' : 'Enable Module'}
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── Card view ── */}
        {view === 'card' && (
          <div className="card-body">
            <div className="row gy-6">
              {modules.map(m => (
                <div key={m.id} className="col-sm-6 col-xl-4">
                  <div className={`card h-100 shadow-none border${!m.enabled ? ' opacity-60' : ''}`}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="avatar">
                          <span className={`avatar-initial rounded bg-label-${m.color}`}>
                            <i className={`icon-base ti ${m.icon} icon-20px`} style={{ color: `var(--bs-${m.color})` }}></i>
                          </span>
                        </div>
                        <div className="form-check form-switch mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            checked={m.enabled}
                            onChange={() => toggleEnabled(m.id)}
                          />
                        </div>
                      </div>
                      <h6 className="fw-semibold text-heading mb-1">{m.title}</h6>
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        <span className={`badge bg-label-${m.typeColor}`} style={{ fontSize: 10 }}>{m.type}</span>
                        <span className={`badge bg-label-${m.diffColor}`} style={{ fontSize: 10 }}>{m.difficulty}</span>
                        <span className="badge bg-label-warning" style={{ fontSize: 10 }}>+{m.xp} XP</span>
                      </div>
                      <div className="row g-2 mb-4">
                        {[
                          { label: 'Scenarios', value: m.scenarios },
                          { label: 'Attempts',  value: m.attempts  },
                          { label: 'Avg Score', value: m.avgScore > 0 ? `${m.avgScore}%` : '—' },
                        ].map(s => (
                          <div key={s.label} className="col-4 text-center">
                            <h6 className="mb-0 fw-semibold">{s.value}</h6>
                            <small className="text-body-secondary" style={{ fontSize: 10 }}>{s.label}</small>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/admin/practice-lab/${m.id}/scenarios`}
                        className="btn btn-label-primary w-100 d-flex align-items-center justify-content-center gap-1"
                      >
                        <i className="ti tabler-file-text icon-xs me-1"></i>Manage Scenarios
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </AdminLayout>
  );
}
