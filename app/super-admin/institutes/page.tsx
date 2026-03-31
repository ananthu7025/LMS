'use client';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

const institutes = [
  { name: 'Sharma Law Academy', owner: 'Rajesh Sharma', plan: 'Pro', students: 892, revenue: '₹94,200', date: 'Jan 12, 2024', status: 'Active' },
  { name: 'Delhi Bar Coaching', owner: 'Priya Mehta', plan: 'Growth', students: 445, revenue: '₹38,800', date: 'Mar 5, 2024', status: 'Active' },
  { name: 'LawEdge Institute', owner: 'Arjun Kumar', plan: 'Starter', students: 120, revenue: '₹11,200', date: 'Jun 20, 2024', status: 'Trial' },
  { name: 'Krishna Law Academy', owner: 'Sunita Verma', plan: 'Growth', students: 0, revenue: '—', date: 'Mar 27, 2025', status: 'Pending' },
  { name: 'TestPrep Legal', owner: 'Amit Joshi', plan: 'Starter', students: 78, revenue: '₹6,600', date: 'Sep 8, 2023', status: 'Suspended' },
  { name: 'Constitutional Law Hub', owner: 'Deepika Nair', plan: 'Pro', students: 1240, revenue: '₹1,28,400', date: 'Nov 2, 2023', status: 'Active' },
  { name: 'Juris Academy', owner: 'Vikram Singh', plan: 'Growth', students: 310, revenue: '₹29,400', date: 'Feb 14, 2024', status: 'Active' },
  { name: 'CLAT Prep Studio', owner: 'Meera Iyer', plan: 'Starter', students: 56, revenue: '₹4,800', date: 'Jul 3, 2024', status: 'Trial' },
];

const statusBadge: Record<string, string> = {
  Active: 'bg-label-success', Trial: 'bg-label-info', Pending: 'bg-label-warning', Suspended: 'bg-label-danger'
};
const planBadge: Record<string, string> = {
  Starter: 'bg-label-secondary', Growth: 'bg-label-info', Pro: 'bg-label-primary'
};

export default function InstitutesListPage() {
  return (
    <SuperAdminLayout active="/super-admin/institutes" title="Institutes" breadcrumb="Home / Institutes">
      {/* Top bar */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
        <div className="d-flex flex-wrap gap-2 flex-grow-1">
          <div className="position-relative" style={{ maxWidth: 260 }}>
            <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
              <i className="ti tabler-search text-body-secondary"></i>
            </span>
            <input className="form-control ps-5" placeholder="Search by name or email…" />
          </div>
          <select className="form-select w-auto"><option>All Plans</option><option>Starter</option><option>Growth</option><option>Pro</option></select>
          <select className="form-select w-auto"><option>All Status</option><option>Active</option><option>Trial</option><option>Suspended</option><option>Pending</option></select>
          <select className="form-select w-auto"><option>All Regions</option><option>Delhi</option><option>Mumbai</option><option>Bangalore</option></select>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            <i className="ti tabler-download me-1"></i>Export CSV
          </button>
          <a href="/super-admin/institutes/approve" className="btn btn-primary">
            <i className="ti tabler-check me-1"></i>Approve Pending (7)
          </a>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <div className="table-responsive text-nowrap">
          <table className="table table-hover">
            <thead>
              <tr>
                <th><input type="checkbox" className="form-check-input" /></th>
                <th>Institute</th>
                <th>Plan</th>
                <th>Students</th>
                <th>Revenue (Mo.)</th>
                <th>Signup Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {institutes.map(inst => (
                <tr key={inst.name}>
                  <td><input type="checkbox" className="form-check-input" /></td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="avatar avatar-sm bg-label-primary rounded">
                        <span className="avatar-initial rounded fw-bold">{inst.name[0]}</span>
                      </div>
                      <div>
                        <div className="fw-semibold text-heading">{inst.name}</div>
                        <small className="text-body-secondary">{inst.owner}</small>
                      </div>
                    </div>
                  </td>
                  <td><span className={`badge ${planBadge[inst.plan]}`}>{inst.plan}</span></td>
                  <td className="fw-semibold">{inst.students.toLocaleString()}</td>
                  <td className="fw-semibold">{inst.revenue}</td>
                  <td className="text-body-secondary">{inst.date}</td>
                  <td><span className={`badge ${statusBadge[inst.status]}`}>{inst.status}</span></td>
                  <td>
                    <div className="d-flex gap-1">
                      <a href={`/super-admin/institutes/1`} className="btn btn-sm btn-icon btn-text-secondary rounded-pill">
                        <i className="ti tabler-eye"></i>
                      </a>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                          <i className="ti tabler-dots-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="javascript:void(0);">Edit Details</a>
                          <a className="dropdown-item" href="javascript:void(0);">Manage Subscription</a>
                          <div className="dropdown-divider"></div>
                          {inst.status === 'Active' ? (
                            <a className="dropdown-item text-warning" href="javascript:void(0);">Suspend Institute</a>
                          ) : (
                            <a className="dropdown-item text-success" href="javascript:void(0);">Reactivate Institute</a>
                          )}
                          <a className="dropdown-item text-danger" href="javascript:void(0);">Delete</a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="card-footer d-flex flex-wrap align-items-center justify-content-between gap-3">
          <small className="text-body-secondary">Showing 1–8 of 248 institutes</small>
          <nav>
            <ul className="pagination pagination-sm mb-0">
              {['‹', '1', '2', '3', '...', '31', '›'].map((p, i) => (
                <li key={i} className={`page-item${p === '1' ? ' active' : ''}`}>
                  <a className="page-link" href="javascript:void(0);">{p}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </SuperAdminLayout>
  );
}
