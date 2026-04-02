'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';
import Link from 'next/link';

const MY_SCENARIOS = [
  {
    id: 'sc-001',
    moduleId: 'client-interview',
    moduleTitle: 'Client Interview Room',
    moduleColor: 'success',
    moduleIcon: 'tabler-briefcase',
    clientName: 'Priya Sharma',
    caseType: 'Domestic Violence',
    caseColor: 'danger',
    caseId: 'CASE-882-P',
    status: 'Published',
    statusColor: 'success',
    attempts: 89,
    avgScore: 82,
    createdAt: '12 Mar 2026',
  },
  {
    id: 'sc-002',
    moduleId: 'client-interview',
    moduleTitle: 'Client Interview Room',
    moduleColor: 'success',
    moduleIcon: 'tabler-briefcase',
    clientName: 'Anita Singh',
    caseType: 'Wrongful Termination',
    caseColor: 'warning',
    caseId: 'CASE-241-L',
    status: 'Published',
    statusColor: 'success',
    attempts: 54,
    avgScore: 77,
    createdAt: '15 Mar 2026',
  },
  {
    id: 'sc-005',
    moduleId: 'client-interview',
    moduleTitle: 'Client Interview Room',
    moduleColor: 'success',
    moduleIcon: 'tabler-briefcase',
    clientName: 'Sunita Rao',
    caseType: 'Will Dispute',
    caseColor: 'secondary',
    caseId: 'CASE-441-W',
    status: 'Draft',
    statusColor: 'secondary',
    attempts: 0,
    avgScore: 0,
    createdAt: '28 Mar 2026',
  },
];

const RECENT_ATTEMPTS = [
  { student: 'Arjun Mehta',   init: 'AM', color: 'primary',   scenario: 'Priya Sharma – DV',       module: 'Client Interview', score: 82, xp: '+340',  date: 'Today, 2:14 PM'   },
  { student: 'Pooja Verma',   init: 'PV', color: 'info',      scenario: 'Anita Singh – Termination', module: 'Client Interview', score: 91, xp: '+380',  date: 'Today, 11:30 AM'  },
  { student: 'Rahul Sharma',  init: 'RS', color: 'warning',   scenario: 'Priya Sharma – DV',       module: 'Client Interview', score: 67, xp: '+210',  date: 'Yesterday'         },
  { student: 'Deepa Nair',    init: 'DN', color: 'success',   scenario: 'Anita Singh – Termination', module: 'Client Interview', score: 74, xp: '+290',  date: 'Yesterday'         },
  { student: 'Sunita Kapoor', init: 'SK', color: 'secondary', scenario: 'Priya Sharma – DV',       module: 'Client Interview', score: 88, xp: '+360',  date: '30 Mar 2026'       },
];

const MODULES_AVAILABLE = [
  { id: 'client-interview',    title: 'Client Interview Room',      color: 'success',   icon: 'tabler-briefcase'     },
  { id: 'case-drafting',       title: 'Case Drafting Studio',       color: 'primary',   icon: 'tabler-scroll'        },
  { id: 'contract-drafting',   title: 'Contract Drafting Desk',     color: 'warning',   icon: 'tabler-clipboard-text'},
];

export default function TutorPracticeLabPage() {
  const [activeTab, setActiveTab] = useState<'scenarios' | 'activity'>('scenarios');

  const published  = MY_SCENARIOS.filter(s => s.status === 'Published').length;
  const totalAttempts = MY_SCENARIOS.reduce((s, m) => s + m.attempts, 0);
  const avgScore = Math.round(
    MY_SCENARIOS.filter(s => s.avgScore > 0).reduce((sum, s) => sum + s.avgScore, 0) /
    (MY_SCENARIOS.filter(s => s.avgScore > 0).length || 1)
  );

  return (
    <TutorLayout active="/tutor/practice-lab" title="Practice Lab" breadcrumb="Home / Practice Lab">

      {/* ── Hero ── */}
      <div className="card p-0 mb-6">
        <div className="card-body d-flex flex-column flex-md-row justify-content-between p-0 pt-6">
          <div className="d-none d-md-flex align-items-end ps-6 pb-0" style={{ minWidth: 90 }}>
            <img src="/img/illustrations/bulb-light.png" alt="" height={90} style={{ objectFit: 'contain' }} />
          </div>
          <div className="flex-grow-1 d-flex align-items-center flex-column text-md-center px-6 py-6">
            <h4 className="mb-2 text-heading lh-lg">
              Practice Lab — Author & Manage<br />
              <span className="text-primary text-nowrap">Your Scenarios.</span>
            </h4>
            <p className="mb-4 text-body">
              Create new client interview or case drafting scenarios, track student attempt scores and XP earned.
            </p>
            <div className="d-flex gap-3">
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="ti tabler-plus me-1"></i>Author New Scenario
                </button>
                <ul className="dropdown-menu">
                  {MODULES_AVAILABLE.map(m => (
                    <li key={m.id}>
                      <Link className="dropdown-item d-flex align-items-center gap-2" href={`/tutor/practice-lab/${m.id}/scenarios/new`}>
                        <i className={`ti ${m.icon} text-${m.color}`}></i>
                        {m.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="d-none d-md-flex align-items-end justify-content-end pe-0" style={{ minWidth: 120 }}>
            <img src="/img/illustrations/pencil-rocket.png" alt="" height={188} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="row g-6 mb-6">
        {[
          { icon: 'tabler-file-text',     label: 'My Scenarios',    value: MY_SCENARIOS.length, sub: `${published} published`,  color: 'bg-label-primary', iconColor: '#7367F0' },
          { icon: 'tabler-check',         label: 'Published',       value: published,            sub: `${MY_SCENARIOS.length - published} drafts`,         color: 'bg-label-success', iconColor: '#28C76F' },
          { icon: 'tabler-users',         label: 'Total Attempts',  value: totalAttempts,        sub: 'By your students',        color: 'bg-label-warning', iconColor: '#FF9F43' },
          { icon: 'tabler-chart-bar',     label: 'Avg Score',       value: `${avgScore}%`,       sub: 'On published scenarios',  color: 'bg-label-info',    iconColor: '#00CFE8' },
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

      {/* ── Tabs: My Scenarios | Student Activity ── */}
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-pills gap-1">
            {(['scenarios', 'activity'] as const).map(tab => (
              <li key={tab} className="nav-item">
                <button
                  className={`nav-link${activeTab === tab ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  <i className={`ti ${tab === 'scenarios' ? 'tabler-file-text' : 'tabler-activity'} me-2`}></i>
                  {tab === 'scenarios' ? 'My Scenarios' : 'Student Activity'}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ── My Scenarios tab ── */}
        {activeTab === 'scenarios' && (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="border-top">
                <tr>
                  <th>Scenario</th>
                  <th>Module</th>
                  <th>Case Type</th>
                  <th>Attempts</th>
                  <th>Avg Score</th>
                  <th>Created</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {MY_SCENARIOS.map(s => (
                  <tr key={s.id}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar">
                          <span className={`avatar-initial rounded-circle bg-label-${s.caseColor}`} style={{ fontSize: 12, fontWeight: 700 }}>
                            {s.clientName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <span className="fw-semibold text-heading d-block">{s.clientName}</span>
                          <small className="text-body-secondary">{s.caseId}</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="avatar avatar-xs">
                          <span className={`avatar-initial rounded bg-label-${s.moduleColor}`}>
                            <i className={`icon-base ti ${s.moduleIcon} icon-12px`} style={{ color: `var(--bs-${s.moduleColor})` }}></i>
                          </span>
                        </div>
                        <small>{s.moduleTitle}</small>
                      </div>
                    </td>
                    <td><span className={`badge bg-label-${s.caseColor}`}>{s.caseType}</span></td>
                    <td>
                      {s.attempts > 0
                        ? <><span className="fw-semibold">{s.attempts}</span><small className="text-body-secondary ms-1">students</small></>
                        : <span className="text-body-secondary small">—</span>
                      }
                    </td>
                    <td>
                      {s.avgScore > 0
                        ? <span className={`fw-semibold ${s.avgScore >= 75 ? 'text-success' : 'text-warning'}`}>{s.avgScore}%</span>
                        : <span className="text-body-secondary small">—</span>
                      }
                    </td>
                    <td><small className="text-body-secondary">{s.createdAt}</small></td>
                    <td><span className={`badge bg-label-${s.statusColor}`}>{s.status}</span></td>
                    <td>
                      <div className="d-flex gap-1">
                        <Link
                          href={`/tutor/practice-lab/${s.moduleId}/scenarios/${s.id}`}
                          className="btn btn-sm btn-icon btn-label-primary rounded-pill"
                          title="Edit"
                        >
                          <i className="ti tabler-edit"></i>
                        </Link>
                        <button
                          className="btn btn-sm btn-icon btn-label-secondary rounded-pill"
                          title="View results"
                        >
                          <i className="ti tabler-chart-bar"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── Student Activity tab ── */}
        {activeTab === 'activity' && (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="border-top">
                <tr>
                  <th>Student</th>
                  <th>Scenario</th>
                  <th>Module</th>
                  <th>Score</th>
                  <th>XP Earned</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_ATTEMPTS.map((a, i) => (
                  <tr key={i}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar">
                          <span className={`avatar-initial rounded-circle bg-label-${a.color}`}>{a.init}</span>
                        </div>
                        <span className="fw-semibold text-heading">{a.student}</span>
                      </div>
                    </td>
                    <td>
                      <small className="text-body-secondary">{a.scenario}</small>
                    </td>
                    <td>
                      <span className="badge bg-label-success" style={{ fontSize: 10 }}>{a.module}</span>
                    </td>
                    <td>
                      <span className={`fw-semibold ${a.score >= 80 ? 'text-success' : a.score >= 65 ? 'text-warning' : 'text-danger'}`}>
                        {a.score}%
                      </span>
                    </td>
                    <td>
                      <span className="badge bg-label-warning">{a.xp}</span>
                    </td>
                    <td><small className="text-body-secondary">{a.date}</small></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </TutorLayout>
  );
}
