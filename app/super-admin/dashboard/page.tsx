'use client';
import dynamic from 'next/dynamic';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// ── Data ─────────────────────────────────────────────────────────────────────

const topInstitutes = [
  { name: 'Sharma Law Academy',  revenue: '₹2.4L', trend: 'up',   pct: '18.2%' },
  { name: 'Delhi Bar Coaching',  revenue: '₹1.9L', trend: 'down', pct: '3.1%'  },
  { name: 'LawEdge Institute',   revenue: '₹1.6L', trend: 'up',   pct: '12.4%' },
  { name: 'Krishna Law Academy', revenue: '₹1.2L', trend: 'up',   pct: '9.8%'  },
  { name: 'ILS Prep Centre',     revenue: '₹0.9L', trend: 'down', pct: '1.5%'  },
  { name: 'CLAT Masters',        revenue: '₹0.7L', trend: 'up',   pct: '7.2%'  },
];

const planItems = [
  { icon: 'tabler-diamond',       color: 'primary', label: 'Starter Plan', count: '98 institutes', pct: '39.5%', pos: true },
  { icon: 'tabler-rocket',        color: 'info',    label: 'Growth Plan',  count: '102 institutes',pct: '41.1%', pos: true },
  { icon: 'tabler-star',          color: 'success', label: 'Pro Plan',     count: '48 institutes', pct: '19.4%', pos: true },
  { icon: 'tabler-clock',         color: 'warning', label: 'Trial',        count: '7 institutes',  pct: '2.8%',  pos: false },
];


const recentActivity = [
  { institute: 'Krishna Law Academy', action: 'New signup',    plan: 'Growth',  status: 'Pending',   color: 'warning', time: '2 min ago'  },
  { institute: 'Sharma Law Academy',  action: 'Plan upgrade',  plan: 'Pro',     status: 'Active',    color: 'success', time: '18 min ago' },
  { institute: 'Delhi Bar Coaching',  action: 'Payment failed',plan: 'Growth',  status: 'Overdue',   color: 'danger',  time: '1 hr ago'   },
  { institute: 'LawEdge Institute',   action: 'Activated',     plan: 'Starter', status: 'Active',    color: 'success', time: '3 hrs ago'  },
  { institute: 'TestPrep Legal',      action: 'Suspended',     plan: 'Growth',  status: 'Suspended', color: 'danger',  time: '5 hrs ago'  },
  { institute: 'ILS Prep Centre',     action: 'Renewal',       plan: 'Pro',     status: 'Active',    color: 'success', time: '1 day ago'  },
];

// ── Chart configs ─────────────────────────────────────────────────────────────

const monthlyBars = {
  series: [{ name: 'Revenue (₹L)', data: [6.5, 7.2, 8.0, 6.8, 9.0, 9.5, 8.8, 10.0, 8.5, 9.2, 7.8, 11.0] }],
  options: {
    chart: { type: 'bar' as const, toolbar: { show: false }, sparkline: { enabled: false } },
    plotOptions: { bar: { columnWidth: '55%', borderRadius: 4 } },
    colors: ['#7367F0'],
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      labels: { style: { fontSize: '10px' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { y: { formatter: (v: number) => `₹${v}L` } },
  },
};

const weeklyBars = {
  series: [{ name: 'Revenue (₹K)', data: [38, 55, 48, 72, 65, 88, 95] }],
  options: {
    chart: { type: 'bar' as const, toolbar: { show: false } },
    plotOptions: { bar: { columnWidth: '55%', borderRadius: 4 } },
    colors: ['#7367F0'],
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
      labels: { style: { fontSize: '10px' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { y: { formatter: (v: number) => `₹${v}K` } },
  },
};

const radialOptions = {
  series: [80, 5, 17],
  options: {
    chart: { type: 'radialBar' as const },
    plotOptions: {
      radialBar: {
        hollow: { size: '48%' },
        track: { background: 'transparent', strokeWidth: '100%', margin: 5 },
        dataLabels: {
          name: { fontSize: '11px', offsetY: -8 },
          value: { fontSize: '14px', fontWeight: '500', offsetY: 4 },
          total: {
            show: true,
            label: 'Institutes',
            fontSize: '11px',
            color: '#8592a3',
            formatter: () => '248',
          },
        },
      },
    },
    colors: ['#28C76F', '#FF9F43', '#EA5455'],
    labels: ['Active', 'Pending', 'Inactive'],
    legend: { show: false },
    stroke: { lineCap: 'round' as const },
  },
};

const healthLine = {
  series: [{ data: [6, 9, 5, 11, 13, 9, 12, 16, 8, 15, 13, 20] }],
  options: {
    chart: { type: 'line' as const, sparkline: { enabled: true }, toolbar: { show: false } },
    stroke: { width: 2.5, curve: 'smooth' as const },
    colors: ['#7367F0'],
    tooltip: { x: { show: false } },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function SuperAdminDashboard() {
  return (
    <SuperAdminLayout title="Dashboard" breadcrumb="Home / Dashboard">
      <div className="row g-6">

        {/* ── Platform Overview (gradient hero card) ─── col-xl-6 */}
        <div className="col-xl-6 col-12">
          <div
            className="card h-100"
            style={{
              background: 'linear-gradient(135deg, #7367F0 0%, #9E95F5 100%)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div className="card-body text-white">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h5 className="text-white mb-0">Platform Overview</h5>
                  <small style={{ opacity: 0.75 }}>Real-time SaaS Metrics</small>
                </div>
                <span className="badge rounded-pill px-3 py-2" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                  <i className="ti tabler-live-view me-1"></i>Live
                </span>
              </div>

              <div className="row g-4 mt-1">
                {[
                  { icon: 'tabler-building',      label: 'Total Institutes', value: '248',    badge: '+12 / mo',   iconBg: 'rgba(0,207,232,0.25)',   iconColor: '#00CFE8' },
                  { icon: 'tabler-users',          label: 'Active Students',  value: '18,452', badge: '+843 / wk',  iconBg: 'rgba(40,199,111,0.25)',  iconColor: '#28C76F' },
                  { icon: 'tabler-currency-rupee', label: 'Platform Revenue', value: '₹12.4L',badge: '+7.2%',      iconBg: 'rgba(255,159,67,0.25)',  iconColor: '#FF9F43' },
                  { icon: 'tabler-clock',          label: 'Pending Approvals',value: '7',     badge: 'Review now', iconBg: 'rgba(234,84,85,0.25)',   iconColor: '#EA5455' },
                ].map(s => (
                  <div key={s.label} className="col-6">
                    <div className="d-flex align-items-center gap-3">
                      <div style={{
                        width: 44, height: 44, borderRadius: 10,
                        background: s.iconBg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <i className={`ti ${s.icon}`} style={{ fontSize: 22, color: s.iconColor }}></i>
                      </div>
                      <div>
                        <h4 className="text-white mb-0 fw-bold">{s.value}</h4>
                        <small style={{ opacity: 0.72, color: '#fff' }}>{s.label}</small>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span
                        className="badge rounded-pill small"
                        style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
                      >
                        {s.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative circles */}
            <div style={{ position:'absolute', bottom:-60, right:-40, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.06)' }} />
            <div style={{ position:'absolute', bottom:-20, right:60,  width:120, height:120, borderRadius:'50%', background:'rgba(255,255,255,0.09)' }} />
          </div>
        </div>

        {/* ── Monthly Revenue ─────────────────────── col-xl-3 */}
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card h-100">
            <div className="card-header pb-0">
              <h5 className="mb-1 card-title">Monthly Revenue</h5>
              <p className="mb-0 text-body">Total Revenue This Month</p>
              <h4 className="mb-0">₹12.4L</h4>
            </div>
            <div className="card-body px-0 pb-0">
              <Chart type="bar" height={130} series={monthlyBars.series} options={monthlyBars.options} />
            </div>
          </div>
        </div>

        {/* ── Institute Status ─────────────────────── col-xl-3 */}
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card h-100">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <p className="mb-0 text-body">Institute Status</p>
                <p className="card-text fw-medium text-success">+5.1%</p>
              </div>
              <h4 className="card-title mb-1">248 Total</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <div className="d-flex gap-2 align-items-center mb-2">
                    <span className="badge bg-label-success p-1 rounded">
                      <i className="icon-base ti tabler-building-check icon-sm"></i>
                    </span>
                    <p className="mb-0">Active</p>
                  </div>
                  <h5 className="mb-0 pt-1">80.2%</h5>
                  <small className="text-body-secondary">199</small>
                </div>
                <div className="col-4">
                  <div className="divider divider-vertical">
                    <div className="divider-text">
                      <span className="badge-divider-bg bg-label-secondary">VS</span>
                    </div>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="d-flex gap-2 justify-content-end align-items-center mb-2">
                    <p className="mb-0">Pending</p>
                    <span className="badge bg-label-warning p-1 rounded">
                      <i className="icon-base ti tabler-clock icon-sm"></i>
                    </span>
                  </div>
                  <h5 className="mb-0 pt-1">2.8%</h5>
                  <small className="text-body-secondary">7</small>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <div className="progress w-100" style={{ height: 10 }}>
                  <div className="progress-bar bg-success" style={{ width: '80%' }} role="progressbar"></div>
                  <div className="progress-bar bg-warning" style={{ width: '3%' }}  role="progressbar"></div>
                  <div className="progress-bar bg-danger"  style={{ width: '17%' }} role="progressbar"></div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <small className="text-success">199 Active</small>
                <small className="text-danger">42 Inactive</small>
              </div>
            </div>
          </div>
        </div>

        {/* ── Revenue Reports ─────────────────────── col-md-6 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header pb-0 d-flex justify-content-between">
              <div className="card-title mb-0">
                <h5 className="mb-1">Revenue Reports</h5>
                <p className="card-subtitle">Weekly Revenue Overview</p>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-2 me-n1"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="icon-base ti tabler-dots-vertical icon-md text-body-secondary"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="#">Download CSV</a>
                  <a className="dropdown-item" href="#">Refresh</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center g-md-8">
                <div className="col-12 col-md-5 d-flex flex-column">
                  <div className="d-flex gap-2 align-items-center mb-3 flex-wrap">
                    <h2 className="mb-0">₹3.1L</h2>
                    <div className="badge rounded bg-label-success">+4.2%</div>
                  </div>
                  <small className="text-body">This week vs last week</small>
                </div>
                <div className="col-12 col-md-7 ps-xl-8">
                  <Chart type="bar" height={120} series={weeklyBars.series} options={weeklyBars.options} />
                </div>
              </div>

              <div className="border rounded p-4 mt-4">
                <div className="row gap-4 gap-sm-0">
                  {[
                    { color: 'primary', icon: 'tabler-currency-rupee', label: 'Gross Revenue', value: '₹12.4L', pct: 72 },
                    { color: 'info',    icon: 'tabler-chart-pie-2',    label: 'Net Profit',    value: '₹8.1L',  pct: 58 },
                    { color: 'danger',  icon: 'tabler-receipt-refund', label: 'Refunds',       value: '₹0.3L',  pct: 12 },
                  ].map(r => (
                    <div key={r.label} className="col-12 col-sm-4">
                      <div className="d-flex gap-2 align-items-center">
                        <div className={`badge rounded bg-label-${r.color} p-1`}>
                          <i className={`icon-base ti ${r.icon} icon-18px`}></i>
                        </div>
                        <h6 className="mb-0 fw-normal">{r.label}</h6>
                      </div>
                      <h4 className="my-2">{r.value}</h4>
                      <div className="progress w-75" style={{ height: 4 }}>
                        <div className={`progress-bar bg-${r.color}`} style={{ width: `${r.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Institute Tracker ───────────────────── col-md-6 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between">
              <div className="card-title mb-0">
                <h5 className="mb-1">Institute Tracker</h5>
                <p className="card-subtitle">Last 30 Days</p>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-2 me-n1"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="icon-base ti tabler-dots-vertical icon-md text-body-secondary"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="/super-admin/institutes">View All</a>
                  <a className="dropdown-item" href="#">Export</a>
                </div>
              </div>
            </div>
            <div className="card-body row">
              <div className="col-12 col-sm-4">
                <div className="mt-lg-4 mb-lg-6 mb-2">
                  <h2 className="mb-0">248</h2>
                  <p className="mb-0">Total Institutes</p>
                </div>
                <ul className="p-0 m-0 list-unstyled">
                  {[
                    { icon: 'tabler-building-check', color: 'primary', label: 'Active',    count: '199' },
                    { icon: 'tabler-building-plus',  color: 'info',    label: 'New (30d)', count: '12'  },
                    { icon: 'tabler-clock',          color: 'warning', label: 'Pending',   count: '7'   },
                    { icon: 'tabler-building-off',   color: 'danger',  label: 'Suspended', count: '30'  },
                  ].map(s => (
                    <li key={s.label} className="d-flex gap-4 align-items-center mb-lg-3 pb-1">
                      <div className={`badge rounded bg-label-${s.color} p-1_5`}>
                        <i className={`icon-base ti ${s.icon} icon-md`}></i>
                      </div>
                      <div>
                        <h6 className="mb-0 text-nowrap">{s.label}</h6>
                        <small className="text-body-secondary">{s.count}</small>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-12 col-md-8">
                <Chart type="radialBar" height={250} series={radialOptions.series} options={radialOptions.options} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Top Institutes ──────────────────────── col-xxl-4 col-md-6 */}
        <div className="col-xxl-4 col-md-6 order-1 order-xl-0">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between">
              <div className="card-title mb-0">
                <h5 className="mb-1">Top Institutes</h5>
                <p className="card-subtitle">By Monthly Revenue</p>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-text-secondary btn-icon rounded-pill text-body-secondary border-0 me-n1"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="icon-base ti tabler-dots-vertical icon-22px text-body-secondary"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="/super-admin/institutes">View All</a>
                  <a className="dropdown-item" href="#">Export</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="p-0 m-0 list-unstyled">
                {topInstitutes.map((inst, i) => (
                  <li
                    key={inst.name}
                    className={`d-flex align-items-center ${i < topInstitutes.length - 1 ? 'mb-4' : ''}`}
                  >
                    <div className="avatar flex-shrink-0 me-4">
                      <span className="avatar-initial rounded-circle bg-label-primary">
                        {inst.name[0]}
                      </span>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <div className="d-flex align-items-center">
                          <h6 className="mb-0 me-1">{inst.revenue}</h6>
                        </div>
                        <small className="text-body">{inst.name}</small>
                      </div>
                      <p className={`text-${inst.trend === 'up' ? 'success' : 'danger'} fw-medium mb-0 d-flex align-items-center gap-1`}>
                        <i className={`icon-base ti tabler-chevron-${inst.trend}`}></i>
                        {inst.pct}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Platform Health ─────────────────────── col-xxl-4 col-md-6 */}
        <div className="col-xxl-4 col-md-6 col-12 order-2 order-xl-0">
          <div className="card h-100">
            <div className="card-header">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0 card-title">Platform Health</h5>
                <div className="dropdown">
                  <button
                    className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-2 me-n1"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="icon-base ti tabler-dots-vertical icon-md text-body-secondary"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#">Refresh</a>
                    <a className="dropdown-item" href="#">Export</a>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <h2 className="mb-0 me-2">80%</h2>
                <i className="icon-base ti tabler-chevron-up text-success me-1"></i>
                <h6 className="text-success mb-0">5.1%</h6>
              </div>
            </div>
            <div className="card-body">
              <Chart type="line" height={120} series={healthLine.series} options={healthLine.options} />

              <div className="d-flex align-items-start my-4">
                <div className="badge rounded bg-label-primary p-2 me-4">
                  <i className="icon-base ti tabler-currency-rupee icon-md"></i>
                </div>
                <div className="d-flex justify-content-between w-100 gap-2 align-items-center">
                  <div className="me-2">
                    <h6 className="mb-0">Total Revenue</h6>
                    <small className="text-body">Subscription payments</small>
                  </div>
                  <h6 className="mb-0 text-success">+₹1.2L</h6>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="badge rounded bg-label-secondary p-2 me-4">
                  <i className="icon-base ti tabler-building icon-md"></i>
                </div>
                <div className="d-flex justify-content-between w-100 gap-2 align-items-center">
                  <div className="me-2">
                    <h6 className="mb-0">New Institutes</h6>
                    <small className="text-body">Onboarded this month</small>
                  </div>
                  <h6 className="mb-0 text-success">+12</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Plan Distribution ───────────────────── col-xxl-4 col-md-6 */}
        <div className="col-xxl-4 col-md-6">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between">
              <div className="card-title mb-0">
                <h5 className="mb-1">Plan Distribution</h5>
                <p className="card-subtitle">248 Active Subscriptions</p>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-2 me-n1"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="icon-base ti tabler-dots-vertical icon-md text-body-secondary"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="/super-admin/plans">Manage Plans</a>
                  <a className="dropdown-item" href="#">View More</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="p-0 m-0 list-unstyled">
                {planItems.map((p, i) => (
                  <li
                    key={p.label}
                    className={`d-flex justify-content-between align-items-center ${i < planItems.length - 1 ? 'mb-6' : 'mb-3'}`}
                  >
                    <div className={`badge bg-label-${p.color} rounded p-1_5`}>
                      <i className={`icon-base ti ${p.icon} icon-md`}></i>
                    </div>
                    <div className="d-flex justify-content-between w-100 flex-wrap ms-4">
                      <h6 className="mb-0">{p.label}</h6>
                      <div className="d-flex gap-3">
                        <p className="mb-0">{p.count}</p>
                        <p className={`ms-2 text-${p.pos ? 'success' : 'danger'} mb-0`}>{p.pct}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Quick Actions ───────────────────────── col-xxl-4 col-md-6 */}
        <div className="col-xxl-4 col-md-6 col-12">
          <div className="card h-100">
            <div className="card-header">
              <div className="card-title mb-0">
                <h5 className="mb-1">Quick Actions</h5>
                <p className="card-subtitle">Platform Management</p>
              </div>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {[
                  { icon: 'tabler-building-plus',   label: 'Approve Pending',   sub: '7 awaiting',      href: '/super-admin/institutes/approve', color: 'primary',   variant: 'btn-primary'           },
                  { icon: 'tabler-credit-card-off',  label: 'Failed Payments',   sub: '3 overdue',       href: '/super-admin/billing',           color: 'danger',    variant: 'btn-outline-danger'    },
                  { icon: 'tabler-building',         label: 'All Institutes',    sub: '248 total',       href: '/super-admin/institutes',        color: 'info',      variant: 'btn-outline-info'      },
                  { icon: 'tabler-diamond',          label: 'Manage Plans',      sub: '3 active plans',  href: '/super-admin/plans',             color: 'success',   variant: 'btn-outline-success'   },
                  { icon: 'tabler-settings',         label: 'Platform Settings', sub: 'Config & branding',href: '/super-admin/settings',         color: 'secondary', variant: 'btn-outline-secondary' },
                  { icon: 'tabler-file-analytics',   label: 'Billing & Reports', sub: 'Revenue overview', href: '/super-admin/billing',          color: 'warning',   variant: 'btn-outline-warning'   },
                ].map(a => (
                  <div key={a.label} className="col-6">
                    <a
                      href={a.href}
                      className={`btn ${a.variant} d-flex flex-column align-items-center justify-content-center gap-2 w-100 py-3`}
                      style={{ minHeight: 90, borderRadius: 10 }}
                    >
                      <i className={`ti ${a.icon}`} style={{ fontSize: 24 }}></i>
                      <div className="text-center">
                        <div className="fw-semibold" style={{ fontSize: 12, lineHeight: 1.3 }}>{a.label}</div>
                        <div style={{ fontSize: 10, opacity: 0.75, lineHeight: 1.2 }}>{a.sub}</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Recent Activity ─────────────────────── col-xxl-8 */}
        <div className="col-xxl-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="card-title mb-0">
                <h5 className="mb-1">Recent Activity</h5>
                <p className="card-subtitle">Institute events & actions</p>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-2 me-n1"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="icon-base ti tabler-dots-vertical icon-md text-body-secondary"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="/super-admin/institutes">View All Institutes</a>
                  <a className="dropdown-item" href="/super-admin/billing">View Billing</a>
                </div>
              </div>
            </div>
            <div className="table-responsive mb-4">
              <table className="table table-hover table-sm">
                <thead className="border-top">
                  <tr>
                    <th>Institute</th>
                    <th>Action</th>
                    <th>Plan</th>
                    <th>Status</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((a, i) => (
                    <tr key={i}>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar avatar-sm">
                            <span className="avatar-initial rounded-circle bg-label-primary">
                              {a.institute[0]}
                            </span>
                          </div>
                          <span className="fw-medium">{a.institute}</span>
                        </div>
                      </td>
                      <td className="text-body">{a.action}</td>
                      <td>
                        <span className="badge bg-label-primary rounded-pill">{a.plan}</span>
                      </td>
                      <td>
                        <span className={`badge bg-label-${a.color} rounded-pill`}>{a.status}</span>
                      </td>
                      <td>
                        <small className="text-body-secondary">{a.time}</small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </SuperAdminLayout>
  );
}
