'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const students = [
  { name: 'Arjun Mehta',   email: 'arjun@email.com',  phone: '9876543210', courses: 3, batch: 'Batch A', payment: 'Paid',    active: 'Today',     progress: 68  },
  { name: 'Sunita Kapoor', email: 'sunita@email.com', phone: '9988776655', courses: 2, batch: 'Batch A', payment: 'Paid',    active: 'Yesterday', progress: 92  },
  { name: 'Vikram Joshi',  email: 'vikram@email.com', phone: '9123456789', courses: 1, batch: 'Batch B', payment: 'Pending', active: 'Mar 25',    progress: 45  },
  { name: 'Deepa Nair',    email: 'deepa@email.com',  phone: '9234567890', courses: 2, batch: 'Batch B', payment: 'Paid',    active: 'Mar 27',    progress: 30  },
  { name: 'Rahul Sharma',  email: 'rahul@email.com',  phone: '9345678901', courses: 4, batch: 'Batch A', payment: 'Paid',    active: 'Mar 28',    progress: 100 },
  { name: 'Meera Iyer',    email: 'meera@email.com',  phone: '9456789012', courses: 1, batch: 'Batch C', payment: 'Paid',    active: 'Mar 26',    progress: 55  },
  { name: 'Karan Singh',   email: 'karan@email.com',  phone: '9567890123', courses: 2, batch: 'Batch B', payment: 'Failed',  active: 'Mar 20',    progress: 12  },
  { name: 'Pooja Verma',   email: 'pooja@email.com',  phone: '9678901234', courses: 3, batch: 'Batch A', payment: 'Paid',    active: 'Today',     progress: 78  },
];

const payBadge: Record<string, string> = {
  Paid: 'bg-label-success', Pending: 'bg-label-warning', Failed: 'bg-label-danger',
};

const initials = (name: string) => name.split(' ').map(n => n[0]).join('');

export default function StudentsPage() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [courseFilter, setCourseFilter]     = useState('All');
  const [batchFilter, setBatchFilter]       = useState('All');
  const [paymentFilter, setPaymentFilter]   = useState('All');
  const [search, setSearch]                 = useState('');

  const filtered = students.filter((s, i) => {
    if (courseFilter !== 'All' && !['Criminal Law', 'Constitutional Law', 'CLAT Prep', 'Evidence Act', 'Contract Law'].includes(courseFilter)) return true;
    if (batchFilter  !== 'All' && s.batch   !== batchFilter)   return false;
    if (paymentFilter !== 'All' && s.payment !== paymentFilter) return false;
    if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.email.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const allChecked = filtered.length > 0 && filtered.every((_, i) => selected.has(i));

  return (
    <AdminLayout title="Students" breadcrumb="Home / Students">

      {/* ── Stat Cards ────────────────────────────────────────────── */}
      <div className="row g-6 mb-6">
        {[
          { label: 'Total Students', val: '1,247', change: '+12%', sub: 'vs last month',     icon: 'tabler-users',       color: 'primary', changeColor: 'success' },
          { label: 'Paid Students',  val: '1,089', change: '+8%',  sub: 'Last month',         icon: 'tabler-user-check',  color: 'success', changeColor: 'success' },
          { label: 'Active Today',   val: '284',   change: '+21%', sub: 'Active in last 24h', icon: 'tabler-user-bolt',   color: 'info',    changeColor: 'success' },
          { label: 'Pending Payment',val: '158',   change: '-3%',  sub: 'Awaiting payment',   icon: 'tabler-user-exclamation', color: 'warning', changeColor: 'danger' },
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
            <div className="col-md-4">
              <select className="form-select" onChange={e => setCourseFilter(e.target.value)}>
                <option value="All">Select Course</option>
                <option>Criminal Law Fundamentals</option>
                <option>Constitutional Law Mastery</option>
                <option>CLAT 2025 Preparation</option>
                <option>Evidence Act Deep Dive</option>
                <option>Contract Law Basics</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-select" onChange={e => setBatchFilter(e.target.value)}>
                <option value="All">Select Batch</option>
                <option>Batch A</option>
                <option>Batch B</option>
                <option>Batch C</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-select" onChange={e => setPaymentFilter(e.target.value)}>
                <option value="All">Select Payment Status</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Failed</option>
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
                placeholder="Search student..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ti tabler-download me-1"></i>Export
            </button>
            <button className="btn btn-sm btn-primary" onClick={() => setShowCanvas(true)}>
              <i className="ti tabler-plus me-1"></i>Add Student
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
              ['tabler-check',   'Mark Paid'],
              ['tabler-package', 'Assign Batch'],
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
                <th>Student</th>
                <th>Phone</th>
                <th>Courses</th>
                <th>Batch</th>
                <th>Payment</th>
                <th>Progress</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
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
                          {initials(s.name)}
                        </span>
                      </div>
                      <div>
                        <a href="/admin/students/1" className="fw-semibold text-heading d-block">{s.name}</a>
                        <small className="text-body-secondary">{s.email}</small>
                      </div>
                    </div>
                  </td>
                  <td className="text-body-secondary">{s.phone}</td>
                  <td>
                    <span className="badge bg-label-primary rounded-pill">{s.courses}</span>
                  </td>
                  <td>
                    <span className="badge bg-label-info">{s.batch}</span>
                  </td>
                  <td>
                    <span className={`badge ${payBadge[s.payment]}`}>{s.payment}</span>
                  </td>
                  <td style={{ minWidth: 140 }}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress flex-grow-1" style={{ height: 6 }}>
                        <div
                          className={`progress-bar ${s.progress === 100 ? 'bg-success' : 'bg-primary'}`}
                          style={{ width: `${s.progress}%` }}
                        ></div>
                      </div>
                      <small className="fw-semibold text-nowrap">{s.progress}%</small>
                    </div>
                  </td>
                  <td className="text-body-secondary">{s.active}</td>
                  <td>
                    <div className="dropdown">
                      <button
                        className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti tabler-dots-vertical"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="/admin/students/1">
                          <i className="ti tabler-eye me-2"></i>View Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti tabler-mail me-2"></i>Send Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti tabler-check me-2"></i>Mark Paid
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-danger" href="#">
                          <i className="ti tabler-trash me-2"></i>Remove Student
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
            Showing {filtered.length > 0 ? 1 : 0}–{filtered.length} of 1,247 students
          </small>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              {['‹', '1', '2', '3', '...', '125', '›'].map((p, i) => (
                <li key={i} className={`page-item${p === '1' ? ' active' : ''}`}>
                  <a className="page-link" href="#">{p}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ── Add Student Offcanvas ─────────────────────────────────── */}
      {showCanvas && (
        <div
          className="offcanvas offcanvas-end show"
          style={{ visibility: 'visible', width: 400 }}
        >
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Add New Student</h5>
            <button type="button" className="btn-close" onClick={() => setShowCanvas(false)}></button>
          </div>
          <div className="offcanvas-body">
            <p className="text-body-secondary mb-4">Fill in the details to manually enrol a student.</p>
            {[
              ['Full Name',  'text',  'e.g. Rahul Kumar'],
              ['Email',      'email', 'rahul@email.com'],
              ['Phone',      'tel',   '9876543210'],
              ['City',       'text',  'New Delhi'],
            ].map(([label, type, ph]) => (
              <div key={label} className="mb-4">
                <label className="form-label fw-medium">{label}</label>
                <input className="form-control" type={type} placeholder={ph} />
              </div>
            ))}
            <div className="mb-4">
              <label className="form-label fw-medium">Assign Batch</label>
              <select className="form-select">
                <option>Batch A</option><option>Batch B</option><option>Batch C</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="form-label fw-medium">Enrol in Course</label>
              <select className="form-select">
                <option>Criminal Law Fundamentals</option>
                <option>Constitutional Law Mastery</option>
                <option>CLAT 2025 Preparation</option>
                <option>Evidence Act Deep Dive</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="form-label fw-medium">Payment Status</label>
              <select className="form-select">
                <option>Paid</option><option>Pending</option>
              </select>
            </div>
            <div className="d-flex gap-3">
              <button className="btn btn-primary flex-grow-1">
                <i className="ti tabler-user-plus me-1"></i>Add &amp; Enrol
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
