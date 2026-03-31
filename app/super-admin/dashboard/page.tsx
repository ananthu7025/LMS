'use client';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

const stats = [
  { icon: 'tabler-building',      bg: 'bg-label-primary', label: 'Total Institutes', value: '248',    sub: '+12 this month' },
  { icon: 'tabler-users',         bg: 'bg-label-info',    label: 'Active Students',  value: '18,452', sub: '+843 this week' },
  { icon: 'tabler-currency-rupee',bg: 'bg-label-success', label: 'Platform Revenue', value: '₹12.4L', sub: 'This month' },
  { icon: 'tabler-clock',         bg: 'bg-label-warning', label: 'Pending Approvals',value: '7',      sub: 'Awaiting review' },
];

const activity = [
  { time: '2 min ago',  icon: 'tabler-building',     text: 'New institute signed up: Krishna Law Academy', color: 'primary' },
  { time: '18 min ago', icon: 'tabler-trending-up', text: 'Sharma Law Academy upgraded to Pro plan',       color: 'success' },
  { time: '1 hr ago',   icon: 'tabler-x',           text: 'Payment failed for Delhi Bar Coaching (₹8,499)',color: 'danger' },
  { time: '3 hrs ago',  icon: 'tabler-check',       text: 'LawEdge Institute activated — onboarding complete', color: 'success' },
  { time: '5 hrs ago',  icon: 'tabler-player-pause',text: 'TestPrep Legal suspended — payment overdue (45 days)', color: 'warning' },
];

const planDistribution = [
  { name: 'Starter', count: 98,  color: 'primary', pct: '39.5' },
  { name: 'Growth',  count: 102, color: 'info',    pct: '41.1' },
  { name: 'Pro',     count: 48,  color: 'success', pct: '19.4' },
];

export default function SuperAdminDashboard() {
  return (
    <SuperAdminLayout active="/super-admin/dashboard" title="Dashboard" breadcrumb="Home / Dashboard">
      
      {/* Stats row */}
      <div className="row g-4 mb-4">
        {stats.map(s => (
          <div key={s.label} className="col-xl-3 col-md-6">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center gap-3">
                <div className={`avatar avatar-lg ${s.bg} rounded`}>
                  <span className="avatar-initial rounded">
                    <i className={`ti ${s.icon} icon-26px`}></i>
                  </span>
                </div>
                <div className="ms-1">
                  <h4 className="mb-0 fw-bold">{s.value}</h4>
                  <small className="text-body-secondary">{s.label}</small>
                  <div className="text-success small mt-1">{s.sub}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h6 className="fw-bold mb-1">Institute Signups</h6>
                  <small className="text-body-secondary">Last 12 months</small>
                </div>
                <select className="form-select form-select-sm w-auto"><option>2025</option></select>
              </div>
              <div className="mt-3" style={{ height: 180, background: 'linear-gradient(180deg, rgba(115,103,240,0.1) 0%, rgba(115,103,240,0.02) 100%)', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="none">
                  <polyline points="0,160 33,140 66,120 100,100 133,90 166,70 200,75 233,55 266,45 300,35 333,40 400,20" fill="none" stroke="#7367F0" strokeWidth="2.5" />
                  <polyline points="0,160 33,140 66,120 100,100 133,90 166,70 200,75 233,55 266,45 300,35 333,40 400,20 400,180 0,180" fill="rgba(115,103,240,0.1)" />
                </svg>
                <div className="d-flex justify-content-around mt-2 position-absolute bottom-0 w-100 pb-2">
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                    <small key={m} className="text-body-secondary" style={{ fontSize: 10 }}>{m}</small>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h6 className="fw-bold mb-1">Monthly Revenue</h6>
                  <small className="text-body-secondary">Platform earnings (₹)</small>
                </div>
                <select className="form-select form-select-sm w-auto"><option>2025</option></select>
              </div>
              <div className="d-flex align-items-end gap-1 px-1" style={{ height: 180 }}>
                {[65, 72, 80, 68, 90, 95, 88, 100, 85, 92, 78, 110].map((h, i) => (
                  <div key={i} className={`flex-grow-1 rounded-top ${i === 11 ? 'bg-primary' : 'bg-label-primary'}`} style={{ height: `${h}%`, transition: 'all 0.2s' }} />
                ))}
              </div>
              <div className="d-flex justify-content-around mt-2">
                {['J','F','M','A','M','J','J','A','S','O','N','D'].map(m => (
                  <small key={m} className="text-body-secondary" style={{ fontSize: 10 }}>{m}</small>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Activity + Quick Actions */}
      <div className="row g-4">
        {/* Activity Feed */}
        <div className="col-xl-8">
          <div className="card h-100">
            <div className="card-body">
              <h6 className="fw-bold mb-4">
                <i className="ti tabler-bolt me-2 text-primary"></i>Live Activity Feed
              </h6>
              <div className="d-flex flex-column gap-3">
                {activity.map((a, i) => (
                  <div key={i} className={`d-flex align-items-start gap-3 pb-3 ${i < activity.length - 1 ? 'border-bottom' : ''}`}>
                    <div className={`avatar avatar-sm bg-label-${a.color} rounded-circle flex-shrink-0`}>
                      <span className="avatar-initial rounded-circle">
                        <i className={`ti ${a.icon}`}></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <div className="small fw-semibold">{a.text}</div>
                      <small className="text-body-secondary">{a.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions + Plan Distribution */}
        <div className="col-xl-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="fw-bold mb-4">
                    <i className="ti tabler-bolt me-2 text-primary"></i>Quick Actions
                  </h6>
                  <div className="d-flex flex-column gap-2">
                    <a href="/super-admin/institutes/approve" className="btn btn-primary d-flex align-items-center gap-2 text-start w-100">
                      <i className="ti tabler-check"></i>
                      <span>Approve Pending (7)</span>
                    </a>
                    <a href="/super-admin/billing" className="btn btn-outline-secondary d-flex align-items-center gap-2 text-start w-100">
                      <i className="ti tabler-credit-card"></i>
                      <span>View Failed Payments</span>
                    </a>
                    <a href="/super-admin/settings" className="btn btn-outline-secondary d-flex align-items-center gap-2 text-start w-100">
                      <i className="ti tabler-settings"></i>
                      <span>Platform Settings</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="fw-bold mb-4">
                    <i className="ti tabler-chart-pie me-2 text-primary"></i>Plan Distribution
                  </h6>
                  <div className="d-flex flex-column gap-3">
                    {planDistribution.map(plan => (
                      <div key={plan.name}>
                        <div className="d-flex justify-content-between mb-1">
                          <span className="small fw-semibold">{plan.name}</span>
                          <span className="small text-body-secondary">{plan.count} ({plan.pct}%)</span>
                        </div>
                        <div className="progress" style={{ height: 8 }}>
                          <div className={`progress-bar bg-${plan.color}`} style={{ width: `${plan.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
}
