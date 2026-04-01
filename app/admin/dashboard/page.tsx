'use client';
import dynamic from 'next/dynamic';
import AdminLayout from '@/components/layouts/AdminLayout';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// ── Data ─────────────────────────────────────────────────────────────────────

const topCourses = [
  { name: 'Criminal Law Fundamentals', enrolled: '482',  trend: 'up',   pct: '18.2%' },
  { name: 'Constitutional Law',         enrolled: '315',  trend: 'up',   pct: '8.4%'  },
  { name: 'CLAT Preparation',           enrolled: '287',  trend: 'up',   pct: '12.1%' },
  { name: 'Evidence Act Deep Dive',     enrolled: '198',  trend: 'down', pct: '2.3%'  },
  { name: 'Contract Law Basics',        enrolled: '143',  trend: 'up',   pct: '5.7%'  },
  { name: 'Legal Aptitude Basics',      enrolled: '89',   trend: 'up',   pct: '3.2%'  },
];

const courseCategories = [
  { icon: 'tabler-gavel',      color: 'primary', label: 'Core Law',   count: '5 courses', pct: '42.1%', pos: true  },
  { icon: 'tabler-school',     color: 'info',    label: 'CLAT Prep',  count: '4 courses', pct: '33.3%', pos: true  },
  { icon: 'tabler-book',       color: 'success', label: 'Electives',  count: '2 courses', pct: '16.7%', pos: true  },
  { icon: 'tabler-pencil',     color: 'warning', label: 'Drafts',     count: '1 course',  pct: '8.3%',  pos: false },
];

const recentActivity = [
  { student: 'Arjun Mehta',    action: 'New enrollment',   course: 'Criminal Law', status: 'Active',   color: 'success', time: '5 min ago'  },
  { student: 'Sunita Kapoor',  action: 'Course completed', course: 'Constitutional Law', status: 'Active',   color: 'success', time: '22 min ago' },
  { student: 'Vikram Singh',   action: 'Assignment submitted', course: 'CLAT Prep', status: 'Pending',  color: 'warning', time: '1 hr ago'   },
  { student: 'Deepa Nair',     action: 'Doubt raised',     course: 'Constitutional Law', status: 'Active',   color: 'success', time: '2 hrs ago'  },
  { student: 'Rahul Sharma',   action: 'Course completed', course: 'Criminal Law', status: 'Active',   color: 'success', time: '3 hrs ago'  },
  { student: 'Priya Sharma',   action: 'Payment failed',   course: 'Evidence Act', status: 'Overdue',  color: 'danger',  time: '5 hrs ago'  },
];

// ── Chart configs ─────────────────────────────────────────────────────────────

const monthlyBars = {
  series: [{ name: 'Revenue (₹K)', data: [18, 22, 28, 24, 31, 35, 29, 38, 32, 41, 36, 48] }],
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
    tooltip: { y: { formatter: (v: number) => `₹${v}K` } },
  },
};

const weeklyBars = {
  series: [{ name: 'Revenue (₹K)', data: [12, 18, 15, 24, 22, 30, 28] }],
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
  series: [84, 13, 3],
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
            label: 'Courses',
            fontSize: '11px',
            color: '#8592a3',
            formatter: () => '12',
          },
        },
      },
    },
    colors: ['#28C76F', '#FF9F43', '#7367F0'],
    labels: ['Active', 'Draft', 'Archived'],
    legend: { show: false },
    stroke: { lineCap: 'round' as const },
  },
};

const healthLine = {
  series: [{ data: [42, 58, 50, 71, 65, 80, 74, 88, 76, 92, 85, 98] }],
  options: {
    chart: { type: 'line' as const, sparkline: { enabled: true }, toolbar: { show: false } },
    stroke: { width: 2.5, curve: 'smooth' as const },
    colors: ['#7367F0'],
    tooltip: { x: { show: false } },
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  return (
    <AdminLayout title="Dashboard" breadcrumb="Home / Dashboard">
      <div className="row g-6">

        {/* ── Institute Overview (gradient hero card) ─── col-xl-6 */}
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
                  <h5 className="text-white mb-0">Institute Overview</h5>
                  <small style={{ opacity: 0.75 }}>Real-time LMS Metrics</small>
                </div>
                <span className="badge rounded-pill px-3 py-2" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                  <i className="ti tabler-live-view me-1"></i>Live
                </span>
              </div>

              <div className="row g-4 mt-1">
                {[
                  { icon: 'tabler-users',          label: 'Total Students',      value: '1,247',  badge: '+42 / wk',   iconBg: 'rgba(0,207,232,0.25)',   iconColor: '#00CFE8' },
                  { icon: 'tabler-book',            label: 'Active Courses',      value: '12',     badge: '3 in draft', iconBg: 'rgba(40,199,111,0.25)',  iconColor: '#28C76F' },
                  { icon: 'tabler-currency-rupee',  label: 'Revenue This Month',  value: '₹2.84L', badge: '↑ 18%',      iconBg: 'rgba(255,159,67,0.25)',  iconColor: '#FF9F43' },
                  { icon: 'tabler-clock',           label: 'Pending Enrollments', value: '23',     badge: 'Review now', iconBg: 'rgba(234,84,85,0.25)',   iconColor: '#EA5455' },
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
              <h4 className="mb-0">₹2.84L</h4>
            </div>
            <div className="card-body px-0 pb-0">
              <Chart type="bar" height={130} series={monthlyBars.series} options={monthlyBars.options} />
            </div>
          </div>
        </div>

        {/* ── Student Status ─────────────────────── col-xl-3 */}
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card h-100">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <p className="mb-0 text-body">Student Status</p>
                <p className="card-text fw-medium text-success">+3.4%</p>
              </div>
              <h4 className="card-title mb-1">1,247 Total</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <div className="d-flex gap-2 align-items-center mb-2">
                    <span className="badge bg-label-success p-1 rounded">
                      <i className="icon-base ti tabler-user-check icon-sm"></i>
                    </span>
                    <p className="mb-0">Active</p>
                  </div>
                  <h5 className="mb-0 pt-1">87.2%</h5>
                  <small className="text-body-secondary">1,087</small>
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
                    <p className="mb-0">Inactive</p>
                    <span className="badge bg-label-warning p-1 rounded">
                      <i className="icon-base ti tabler-user-x icon-sm"></i>
                    </span>
                  </div>
                  <h5 className="mb-0 pt-1">12.8%</h5>
                  <small className="text-body-secondary">160</small>
                </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                <div className="progress w-100" style={{ height: 10 }}>
                  <div className="progress-bar bg-success" style={{ width: '87%' }} role="progressbar"></div>
                  <div className="progress-bar bg-warning" style={{ width: '8%' }}  role="progressbar"></div>
                  <div className="progress-bar bg-danger"  style={{ width: '5%' }}  role="progressbar"></div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <small className="text-success">1,087 Active</small>
                <small className="text-danger">160 Inactive</small>
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
                    <h2 className="mb-0">₹82K</h2>
                    <div className="badge rounded bg-label-success">+18.2%</div>
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
                    { color: 'primary', icon: 'tabler-currency-rupee', label: 'Gross Revenue', value: '₹2.84L', pct: 72 },
                    { color: 'info',    icon: 'tabler-chart-pie-2',    label: 'Net Profit',    value: '₹1.96L', pct: 58 },
                    { color: 'danger',  icon: 'tabler-receipt-refund', label: 'Refunds',       value: '₹12K',   pct: 8  },
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

        {/* ── Course Tracker ───────────────────────── col-md-6 */}
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between">
              <div className="card-title mb-0">
                <h5 className="mb-1">Course Tracker</h5>
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
                  <a className="dropdown-item" href="/admin/courses">View All</a>
                  <a className="dropdown-item" href="#">Export</a>
                </div>
              </div>
            </div>
            <div className="card-body row">
              <div className="col-12 col-sm-4">
                <div className="mt-lg-4 mb-lg-6 mb-2">
                  <h2 className="mb-0">12</h2>
                  <p className="mb-0">Total Courses</p>
                </div>
                <ul className="p-0 m-0 list-unstyled">
                  {[
                    { icon: 'tabler-book-2',   color: 'primary', label: 'Active',    count: '10' },
                    { icon: 'tabler-file-plus', color: 'info',    label: 'New (30d)', count: '2'  },
                    { icon: 'tabler-pencil',   color: 'warning', label: 'Draft',     count: '1'  },
                    { icon: 'tabler-archive',  color: 'danger',  label: 'Archived',  count: '3'  },
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

        {/* ── Top Courses ──────────────────────────── col-xxl-4 col-md-6 */}
        <div className="col-xxl-4 col-md-6 order-1 order-xl-0">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between">
              <div className="card-title mb-0">
                <h5 className="mb-1">Top Courses</h5>
                <p className="card-subtitle">By Enrollment</p>
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
                  <a className="dropdown-item" href="/admin/courses">View All</a>
                  <a className="dropdown-item" href="#">Export</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="p-0 m-0 list-unstyled">
                {topCourses.map((course, i) => (
                  <li
                    key={course.name}
                    className={`d-flex align-items-center ${i < topCourses.length - 1 ? 'mb-4' : ''}`}
                  >
                    <div className="avatar flex-shrink-0 me-4">
                      <span className="avatar-initial rounded-circle bg-label-primary">
                        {course.name[0]}
                      </span>
                    </div>
                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                      <div className="me-2">
                        <div className="d-flex align-items-center">
                          <h6 className="mb-0 me-1">{course.enrolled} students</h6>
                        </div>
                        <small className="text-body">{course.name}</small>
                      </div>
                      <p className={`text-${course.trend === 'up' ? 'success' : 'danger'} fw-medium mb-0 d-flex align-items-center gap-1`}>
                        <i className={`icon-base ti tabler-chevron-${course.trend}`}></i>
                        {course.pct}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Learning Health ─────────────────────── col-xxl-4 col-md-6 */}
        <div className="col-xxl-4 col-md-6 col-12 order-2 order-xl-0">
          <div className="card h-100">
            <div className="card-header">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0 card-title">Learning Health</h5>
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
                <h2 className="mb-0 me-2">87%</h2>
                <i className="icon-base ti tabler-chevron-up text-success me-1"></i>
                <h6 className="text-success mb-0">3.4%</h6>
              </div>
            </div>
            <div className="card-body">
              <Chart type="line" height={120} series={healthLine.series} options={healthLine.options} />

              <div className="d-flex align-items-start my-4">
                <div className="badge rounded bg-label-primary p-2 me-4">
                  <i className="icon-base ti tabler-users icon-md"></i>
                </div>
                <div className="d-flex justify-content-between w-100 gap-2 align-items-center">
                  <div className="me-2">
                    <h6 className="mb-0">New Enrollments</h6>
                    <small className="text-body">This month</small>
                  </div>
                  <h6 className="mb-0 text-success">+42</h6>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <div className="badge rounded bg-label-secondary p-2 me-4">
                  <i className="icon-base ti tabler-trophy icon-md"></i>
                </div>
                <div className="d-flex justify-content-between w-100 gap-2 align-items-center">
                  <div className="me-2">
                    <h6 className="mb-0">Course Completions</h6>
                    <small className="text-body">This month</small>
                  </div>
                  <h6 className="mb-0 text-success">+28</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Course Categories ────────────────────── col-xxl-4 col-md-6 */}
        <div className="col-xxl-4 col-md-6">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between">
              <div className="card-title mb-0">
                <h5 className="mb-1">Course Categories</h5>
                <p className="card-subtitle">12 Active Courses</p>
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
                  <a className="dropdown-item" href="/admin/courses">Manage Courses</a>
                  <a className="dropdown-item" href="#">View More</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="p-0 m-0 list-unstyled">
                {courseCategories.map((p, i) => (
                  <li
                    key={p.label}
                    className={`d-flex justify-content-between align-items-center ${i < courseCategories.length - 1 ? 'mb-6' : 'mb-3'}`}
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
                <p className="card-subtitle">Institute Management</p>
              </div>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {[
                  { icon: 'tabler-user-check',    label: 'Approve Enrollments', sub: '23 pending',      href: '/admin/students',              color: 'primary',   variant: 'btn-primary'           },
                  { icon: 'tabler-video',          label: 'Schedule Class',      sub: 'Live session',    href: '/admin/live-classes/schedule', color: 'info',      variant: 'btn-outline-info'      },
                  { icon: 'tabler-file-plus',      label: 'Create Course',       sub: 'New content',     href: '/admin/courses/create',        color: 'success',   variant: 'btn-outline-success'   },
                  { icon: 'tabler-speakerphone',   label: 'Announcement',        sub: 'Notify students', href: '/admin/announcements',         color: 'warning',   variant: 'btn-outline-warning'   },
                  { icon: 'tabler-user-plus',      label: 'Add Student',         sub: 'Manual entry',    href: '/admin/students',              color: 'secondary', variant: 'btn-outline-secondary' },
                  { icon: 'tabler-file-analytics', label: 'View Reports',        sub: 'Analytics',       href: '/admin/reports',               color: 'danger',    variant: 'btn-outline-danger'    },
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
                <p className="card-subtitle">Student events & actions</p>
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
                  <a className="dropdown-item" href="/admin/students">View All Students</a>
                  <a className="dropdown-item" href="/admin/courses">View Courses</a>
                </div>
              </div>
            </div>
            <div className="table-responsive mb-4">
              <table className="table table-hover table-sm">
                <thead className="border-top">
                  <tr>
                    <th>Student</th>
                    <th>Action</th>
                    <th>Course</th>
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
                              {a.student[0]}
                            </span>
                          </div>
                          <span className="fw-medium">{a.student}</span>
                        </div>
                      </td>
                      <td className="text-body">{a.action}</td>
                      <td>
                        <span className="badge bg-label-primary rounded-pill">{a.course}</span>
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
    </AdminLayout>
  );
}
