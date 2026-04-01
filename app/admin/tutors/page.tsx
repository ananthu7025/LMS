'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const tutors = [
  { name: 'Anil Kumar',   email: 'anil@sharmalaw.in',  spec: 'Criminal Law',      courses: 3, students: 466, status: 'Active'   },
  { name: 'Priya Nair',   email: 'priya@sharmalaw.in', spec: 'Constitutional Law', courses: 2, students: 340, status: 'Active'   },
  { name: 'Meera Sharma', email: 'meera@gmail.com',    spec: 'Family Law',         courses: 1, students: 0,   status: 'Invited'  },
  { name: 'Rajiv Bose',   email: 'rajiv@gmail.com',    spec: 'Evidence Law',       courses: 1, students: 124, status: 'Active'   },
  { name: 'Kiran Patel',  email: 'kiran@gmail.com',    spec: 'Contract Law',       courses: 0, students: 0,   status: 'Inactive' },
];

const statusBadge: Record<string, string> = {
  Active: 'bg-label-success', Invited: 'bg-label-warning', Inactive: 'bg-label-secondary',
};

const initials = (name: string) => name.split(' ').map(n => n[0]).join('');

export default function TutorsPage() {
  const [showCanvas, setShowCanvas]       = useState(false);
  const [selected, setSelected]           = useState<Set<number>>(new Set());
  const [specFilter, setSpecFilter]       = useState('All');
  const [statusFilter, setStatusFilter]   = useState('All');
  const [search, setSearch]               = useState('');

  const filtered = tutors.filter(t => {
    if (specFilter   !== 'All' && t.spec   !== specFilter)   return false;
    if (statusFilter !== 'All' && t.status !== statusFilter) return false;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.email.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const allChecked = filtered.length > 0 && filtered.every((_, i) => selected.has(i));

  return (
    <AdminLayout title="Tutors" breadcrumb="Home / Tutors">

      {/* ── Stat Cards ────────────────────────────────────────────── */}
      <div className="row g-6 mb-6">
        {[
          { label: 'Total Tutors',   val: '5',   change: '+2',   sub: 'vs last month',   icon: 'tabler-users',            color: 'primary', changeColor: 'success' },
          { label: 'Active Tutors',  val: '3',   change: '+1',   sub: 'Currently active', icon: 'tabler-user-check',      color: 'success', changeColor: 'success' },
          { label: 'Invited',        val: '1',   change: '0',    sub: 'Pending acceptance', icon: 'tabler-mail-forward',  color: 'warning', changeColor: 'secondary' },
          { label: 'Inactive',       val: '1',   change: '-1',   sub: 'Deactivated',      icon: 'tabler-user-off',        color: 'danger',  changeColor: 'danger'  },
        ].map(s => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span className="text-heading">{s.label}</span>
                    <div className="d-flex align-items-center my-1">
                      <h4 className="mb-0 me-2">{s.val}</h4>
                      <p className={`text-${s.changeColor} mb-0`}>({s.change})</p>
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

      {/* ── Filters Card ──────────────────────────────────────────── */}
      <div className="card mb-6">
        <div className="card-header border-bottom">
          <h5 className="card-title mb-0">Filters</h5>
          <div className="d-flex justify-content-between align-items-center row pt-4 gap-4 gap-md-0">
            <div className="col-md-6">
              <select className="form-select" onChange={e => setSpecFilter(e.target.value)}>
                <option value="All">Select Specialization</option>
                <option>Criminal Law</option>
                <option>Constitutional Law</option>
                <option>Family Law</option>
                <option>Evidence Law</option>
                <option>Contract Law</option>
              </select>
            </div>
            <div className="col-md-6">
              <select className="form-select" onChange={e => setStatusFilter(e.target.value)}>
                <option value="All">Select Status</option>
                <option>Active</option>
                <option>Invited</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* ── Table toolbar ─────────────────────────────────────── */}
        <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3 border-bottom py-4">
          <div className="d-flex align-items-center gap-2">
            <label className="mb-0 text-nowrap small">Show</label>
            <select className="form-select form-select-sm" style={{ width: 70 }}>
              <option>10</option><option>25</option><option>50</option>
            </select>
            <label className="mb-0 text-nowrap small">entries</label>
          </div>
          <div className="d-flex align-items-center flex-wrap gap-2">
            <div className="input-group input-group-sm" style={{ width: 220 }}>
              <span className="input-group-text"><i className="ti tabler-search"></i></span>
              <input
                type="search"
                className="form-control"
                placeholder="Search tutor..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ti tabler-download me-1"></i>Export
            </button>
            <button className="btn btn-sm btn-primary" onClick={() => setShowCanvas(true)}>
              <i className="ti tabler-plus me-1"></i>Invite Tutor
            </button>
          </div>
        </div>

        {/* ── Bulk action bar ───────────────────────────────────── */}
        {selected.size > 0 && (
          <div className="px-4 py-2 bg-label-primary d-flex align-items-center gap-3 flex-wrap border-bottom">
            <span className="fw-semibold small">{selected.size} selected</span>
            {[
              ['tabler-mail',    'Send Message'],
              ['tabler-download','Export CSV'],
              ['tabler-book',    'Assign Course'],
              ['tabler-user-off','Deactivate'],
            ].map(([icon, label]) => (
              <button key={label} className="btn btn-sm btn-outline-primary bg-white">
                <i className={`ti ${icon} me-1`}></i>{label}
              </button>
            ))}
          </div>
        )}

        {/* ── Table ─────────────────────────────────────────────── */}
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
                <th>Tutor</th>
                <th>Specialization</th>
                <th>Courses</th>
                <th>Students</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t, i) => (
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
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle bg-label-primary">
                          {initials(t.name)}
                        </span>
                      </div>
                      <div>
                        <a href="/admin/tutors/1" className="fw-semibold text-heading d-block">{t.name}</a>
                        <small className="text-body-secondary">{t.email}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-label-info">{t.spec}</span>
                  </td>
                  <td>
                    <span className="badge bg-label-primary rounded-pill">{t.courses}</span>
                  </td>
                  <td className="text-body-secondary">{t.students}</td>
                  <td>
                    <span className={`badge ${statusBadge[t.status]}`}>{t.status}</span>
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
                        <a className="dropdown-item" href="/admin/tutors/1">
                          <i className="ti tabler-eye me-2"></i>View Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti tabler-mail me-2"></i>Send Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti tabler-book me-2"></i>Assign Course
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti tabler-lock me-2"></i>Edit Permissions
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-danger" href="#">
                          <i className="ti tabler-user-off me-2"></i>Deactivate
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Pagination ────────────────────────────────────────── */}
        <div className="card-footer d-flex flex-wrap justify-content-between align-items-center gap-3 py-3">
          <small className="text-body-secondary">
            Showing {filtered.length > 0 ? 1 : 0}–{filtered.length} of {tutors.length} tutors
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

      {/* ── Invite Tutor Offcanvas ────────────────────────────────── */}
      {showCanvas && (
        <div
          className="offcanvas offcanvas-end show"
          style={{ visibility: 'visible', width: 400 }}
        >
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Invite New Tutor</h5>
            <button type="button" className="btn-close" onClick={() => setShowCanvas(false)}></button>
          </div>
          <div className="offcanvas-body">
            <p className="text-body-secondary mb-4">Fill in the details to invite a tutor to your institute.</p>
            {[
              ['Full Name',  'text',  'e.g. Dr. Anil Kumar'],
              ['Email',      'email', 'tutor@email.com'],
              ['Phone',      'tel',   '9876543210'],
            ].map(([label, type, ph]) => (
              <div key={label} className="mb-4">
                <label className="form-label fw-medium">{label}</label>
                <input className="form-control" type={type} placeholder={ph} />
              </div>
            ))}
            <div className="mb-4">
              <label className="form-label fw-medium">Specialization</label>
              <select className="form-select">
                <option>Criminal Law</option>
                <option>Constitutional Law</option>
                <option>Family Law</option>
                <option>Evidence Law</option>
                <option>Contract Law</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="form-label fw-medium">Assign Course</label>
              <select className="form-select">
                <option>Criminal Law Fundamentals</option>
                <option>Constitutional Law Mastery</option>
                <option>CLAT 2025 Preparation</option>
                <option>Evidence Act Deep Dive</option>
                <option>Contract Law Basics</option>
              </select>
            </div>
            <div className="d-flex gap-3">
              <button className="btn btn-primary flex-grow-1">
                <i className="ti tabler-mail-forward me-1"></i>Send Invite
              </button>
              <button className="btn btn-outline-secondary" onClick={() => setShowCanvas(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showCanvas && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={() => setShowCanvas(false)}
        ></div>
      )}

    </AdminLayout>
  );
}
