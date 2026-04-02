'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import Link from 'next/link';

/* ── Mock data: scenarios for "Client Interview Room"
   In production this would be fetched based on params.moduleId ── */
const MODULE = {
  id: 'client-interview',
  title: 'Client Interview Room',
  icon: 'tabler-briefcase',
  color: 'success',
  type: 'Skill',
};

const SCENARIOS = [
  {
    id: 'sc-001',
    clientName: 'Priya Sharma',
    caseType: 'Domestic Violence',
    caseColor: 'danger',
    caseId: 'CASE-882-P',
    facts: 8,
    provisions: 4,
    status: 'Published',
    statusColor: 'success',
    authoredBy: 'Meera Sharma',
    attempts: 89,
    avgScore: 82,
    createdAt: '12 Mar 2026',
  },
  {
    id: 'sc-002',
    clientName: 'Anita Singh',
    caseType: 'Wrongful Termination',
    caseColor: 'warning',
    caseId: 'CASE-241-L',
    facts: 8,
    provisions: 4,
    status: 'Published',
    statusColor: 'success',
    authoredBy: 'Meera Sharma',
    attempts: 54,
    avgScore: 77,
    createdAt: '15 Mar 2026',
  },
  {
    id: 'sc-003',
    clientName: 'Rajesh Kumar',
    caseType: 'Tenant Eviction',
    caseColor: 'info',
    caseId: 'CASE-557-P',
    facts: 8,
    provisions: 4,
    status: 'Published',
    statusColor: 'success',
    authoredBy: 'Anil Kumar',
    attempts: 32,
    avgScore: 74,
    createdAt: '18 Mar 2026',
  },
  {
    id: 'sc-004',
    clientName: 'Mohammed Irfan',
    caseType: 'Cheque Bounce / Fraud',
    caseColor: 'primary',
    caseId: 'CASE-330-C',
    facts: 8,
    provisions: 4,
    status: 'Published',
    statusColor: 'success',
    authoredBy: 'Anil Kumar',
    attempts: 14,
    avgScore: 69,
    createdAt: '22 Mar 2026',
  },
  {
    id: 'sc-005',
    clientName: 'Sunita Rao',
    caseType: 'Will Dispute',
    caseColor: 'secondary',
    caseId: 'CASE-441-W',
    facts: 0,
    provisions: 0,
    status: 'Draft',
    statusColor: 'secondary',
    authoredBy: 'Priya Nair',
    attempts: 0,
    avgScore: 0,
    createdAt: '28 Mar 2026',
  },
];

export default function AdminScenariosPage() {
  const [scenarios, setScenarios] = useState(SCENARIOS);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? scenarios
    : scenarios.filter(s => s.status === filter);

  const published = scenarios.filter(s => s.status === 'Published').length;
  const totalAttempts = scenarios.reduce((sum, s) => sum + s.attempts, 0);
  const avgScore = Math.round(
    scenarios.filter(s => s.avgScore > 0).reduce((sum, s) => sum + s.avgScore, 0) /
    (scenarios.filter(s => s.avgScore > 0).length || 1)
  );

  return (
    <AdminLayout
      title="Scenarios"
      breadcrumb={`Home / Practice Lab / ${MODULE.title}`}
    >

      {/* ── Breadcrumb ── */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <Link href="/admin/practice-lab" className="text-body-secondary text-decoration-none d-flex align-items-center gap-1">
          <i className="ti tabler-arrow-left" style={{ fontSize: 14 }}></i>
          <span className="small">Practice Lab</span>
        </Link>
        <i className="ti tabler-chevron-right text-body-secondary" style={{ fontSize: 12 }}></i>
        <div className="d-flex align-items-center gap-2">
          <div className="avatar avatar-xs">
            <span className={`avatar-initial rounded bg-label-${MODULE.color}`}>
              <i className={`icon-base ti ${MODULE.icon} icon-12px`} style={{ color: `var(--bs-${MODULE.color})` }}></i>
            </span>
          </div>
          <span className="small fw-semibold text-heading">{MODULE.title}</span>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="row g-6 mb-6">
        {[
          { icon: 'tabler-file-text',  label: 'Total Scenarios',  value: scenarios.length, sub: `${published} published`,      color: 'bg-label-primary', iconColor: '#7367F0' },
          { icon: 'tabler-check',      label: 'Published',        value: published,         sub: `${scenarios.length - published} in draft`,    color: 'bg-label-success', iconColor: '#28C76F' },
          { icon: 'tabler-users',      label: 'Total Attempts',   value: totalAttempts,     sub: 'Across all scenarios',        color: 'bg-label-warning', iconColor: '#FF9F43' },
          { icon: 'tabler-chart-bar',  label: 'Avg Score',        value: `${avgScore}%`,    sub: 'On published scenarios',      color: 'bg-label-info',    iconColor: '#00CFE8' },
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

      {/* ── Scenario Table ── */}
      <div className="card">
        <div className="card-header d-flex flex-wrap justify-content-between align-items-center gap-4">
          <div className="card-title mb-0">
            <h5 className="mb-0">Scenarios — {MODULE.title}</h5>
            <p className="mb-0 text-body">{scenarios.length} scenarios in this module</p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <select
              className="form-select"
              style={{ maxWidth: 160 }}
              onChange={e => setFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
            <Link
              href={`/tutor/practice-lab/client-interview/scenarios/new`}
              className="btn btn-primary d-flex align-items-center gap-2"
            >
              <i className="ti tabler-plus"></i>
              Add Scenario
            </Link>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="border-top">
              <tr>
                <th>Client / Scenario</th>
                <th>Case Type</th>
                <th>Facts</th>
                <th>Provisions</th>
                <th>Authored By</th>
                <th>Attempts</th>
                <th>Avg Score</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
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
                  <td><span className={`badge bg-label-${s.caseColor}`}>{s.caseType}</span></td>
                  <td>
                    {s.facts > 0
                      ? <span className="fw-semibold">{s.facts} <small className="text-body-secondary fw-normal">facts</small></span>
                      : <span className="text-body-secondary small">—</span>
                    }
                  </td>
                  <td>
                    {s.provisions > 0
                      ? <span className="fw-semibold">{s.provisions} <small className="text-body-secondary fw-normal">provisions</small></span>
                      : <span className="text-body-secondary small">—</span>
                    }
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar avatar-xs">
                        <span className="avatar-initial rounded-circle bg-label-primary" style={{ fontSize: 10 }}>
                          {s.authoredBy.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <small>{s.authoredBy}</small>
                    </div>
                  </td>
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
                  <td>
                    <span className={`badge bg-label-${s.statusColor}`}>{s.status}</span>
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
                        <Link
                          className="dropdown-item"
                          href={`/tutor/practice-lab/client-interview/scenarios/${s.id}`}
                        >
                          <i className="ti tabler-edit me-2"></i>Edit Scenario
                        </Link>
                        <a className="dropdown-item" href="#">
                          <i className="ti tabler-chart-bar me-2"></i>View Results
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti tabler-copy me-2"></i>Duplicate
                        </a>
                        <div className="dropdown-divider"></div>
                        <a
                          className="dropdown-item text-danger"
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            setScenarios(prev => prev.filter(x => x.id !== s.id));
                          }}
                        >
                          <i className="ti tabler-trash me-2"></i>Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </AdminLayout>
  );
}
