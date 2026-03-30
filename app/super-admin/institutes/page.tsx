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

const statusStyle: Record<string, string> = {
  Active: 'badge-success', Trial: 'badge-info', Pending: 'badge-warning', Suspended: 'badge-error'
};
const planStyle: Record<string, string> = {
  Starter: 'badge-secondary', Growth: 'badge-info', Pro: 'badge-primary'
};

export default function InstitutesListPage() {
  return (
    <SuperAdminLayout active="/super-admin/institutes" title="Institutes" breadcrumb="Home / Institutes">
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flex: 1 }}>
          <input className="form-input" style={{ maxWidth: 260 }} placeholder="🔍  Search by name or email…" />
          <select className="form-input" style={{ maxWidth: 150 }}><option>All Plans</option><option>Starter</option><option>Growth</option><option>Pro</option></select>
          <select className="form-input" style={{ maxWidth: 150 }}><option>All Status</option><option>Active</option><option>Trial</option><option>Suspended</option><option>Pending</option></select>
          <select className="form-input" style={{ maxWidth: 150 }}><option>All Regions</option><option>Delhi</option><option>Mumbai</option><option>Bangalore</option></select>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>📥 Export CSV</button>
          <a href="/super-admin/institutes/approve"><button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>✅ Approve Pending (7)</button></a>
        </div>
      </div>

      {/* Table */}
      <div className="card" style={{ overflow: 'hidden' }}>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Institute</th>
              <th>Plan</th>
              <th>Students</th>
              <th>Revenue (Mo.)</th>
              <th>Signup Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {institutes.map(inst => (
              <tr key={inst.name}>
                <td><input type="checkbox" /></td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: 'var(--primary)', flexShrink: 0 }}>
                      {inst.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13.5 }}>{inst.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{inst.owner}</div>
                    </div>
                  </div>
                </td>
                <td><span className={`badge ${planStyle[inst.plan]}`}>{inst.plan}</span></td>
                <td style={{ fontWeight: 600 }}>{inst.students.toLocaleString()}</td>
                <td style={{ fontWeight: 600 }}>{inst.revenue}</td>
                <td style={{ color: 'var(--text-muted)' }}>{inst.date}</td>
                <td><span className={`badge ${statusStyle[inst.status]}`}>{inst.status}</span></td>
                <td>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <a href={`/super-admin/institutes/1`}><button className="btn-outline" style={{ padding: '5px 12px', fontSize: 12 }}>View</button></a>
                    {inst.status === 'Active' && <button style={{ background: '#fff5e6', border: 'none', color: 'var(--warning)', borderRadius: 6, padding: '5px 10px', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>Suspend</button>}
                    {inst.status === 'Suspended' && <button style={{ background: '#e8faf0', border: 'none', color: 'var(--success)', borderRadius: 6, padding: '5px 10px', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>Reactivate</button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderTop: '1px solid var(--border)' }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Showing 1–8 of 248 institutes</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['‹', '1', '2', '3', '...', '31', '›'].map((p, i) => (
              <button key={i} style={{ width: 32, height: 32, borderRadius: 6, border: '1px solid var(--border)', background: p === '1' ? 'var(--primary)' : '#fff', color: p === '1' ? '#fff' : 'var(--text-primary)', cursor: 'pointer', fontSize: 13, fontWeight: 500 }}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
}
