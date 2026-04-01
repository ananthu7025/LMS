'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import AdminLayout from '@/components/layouts/AdminLayout';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// ── Data ─────────────────────────────────────────────────────────────────────

const tabs = [
  { id: 0, label: 'Student Performance', icon: 'tabler-chart-bar' },
  { id: 1, label: 'Revenue',             icon: 'tabler-currency-rupee' },
  { id: 2, label: 'Course Completion',   icon: 'tabler-circle-check' },
  { id: 3, label: 'Attendance',          icon: 'tabler-calendar-check' },
  { id: 4, label: 'Practice Lab',        icon: 'tabler-flask' },
];

const studentRows = [
  { name: 'Arjun Mehta',   courses: 3, progress: 68, quizzes: 7,  avg: '82%', active: 'Today',    status: 'Active'    },
  { name: 'Sunita Kapoor', courses: 2, progress: 92, quizzes: 12, avg: '91%', active: 'Yesterday', status: 'Active'    },
  { name: 'Vikram Joshi',  courses: 1, progress: 45, quizzes: 3,  avg: '64%', active: 'Mar 25',   status: 'Active'    },
  { name: 'Rahul Sharma',  courses: 4, progress: 100,quizzes: 18, avg: '88%', active: 'Mar 28',   status: 'Completed' },
  { name: 'Karan Singh',   courses: 2, progress: 12, quizzes: 1,  avg: '40%', active: 'Mar 20',   status: 'Inactive'  },
];

const monthlyRevenue = {
  series: [{ name: 'Revenue (₹K)', data: [18, 22, 28, 24, 31, 35, 29, 38, 32, 41, 36, 48] }],
  options: {
    chart: { type: 'bar' as const, toolbar: { show: false } },
    plotOptions: { bar: { columnWidth: '55%', borderRadius: 4 } },
    colors: ['#7367F0'],
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      labels: { style: { fontSize: '11px' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { labels: { formatter: (v: number) => `₹${v}K`, style: { fontSize: '10px' } } },
    grid: { borderColor: '#f1f1f1' },
    tooltip: { y: { formatter: (v: number) => `₹${v}K` } },
  },
};

const courseRevChart = [
  { name: 'Criminal Law Fund.',  rev: '₹68,400', pct: 82, color: 'primary', hex: '#7367F0' },
  { name: 'Constitutional Law',  rev: '₹43,600', pct: 52, color: 'info',    hex: '#00BAD1' },
  { name: 'CLAT 2025',           rev: '₹52,200', pct: 63, color: 'success', hex: '#28C76F' },
  { name: 'Evidence Act',        rev: '₹24,800', pct: 30, color: 'warning', hex: '#FF9F43' },
];

const funnelStages = [
  { stage: 'Enrolled',           count: 1247, pct: 100, color: 'primary' },
  { stage: 'Started (>0%)',      count: 1089, pct: 87,  color: 'info'    },
  { stage: '50%+ complete',      count: 724,  pct: 58,  color: 'success' },
  { stage: '80%+ complete',      count: 487,  pct: 39,  color: 'warning' },
  { stage: '100% complete',      count: 312,  pct: 25,  color: 'danger'  },
  { stage: 'Certificate earned', count: 289,  pct: 23,  color: 'secondary'},
];

const attendanceRows = [
  { name: 'Arjun Mehta',   c1: true,  c2: true,  c3: true,  total: '3/3', pct: '100%' },
  { name: 'Sunita Kapoor', c1: true,  c2: true,  c3: false, total: '2/3', pct: '67%'  },
  { name: 'Vikram Joshi',  c1: false, c2: true,  c3: true,  total: '2/3', pct: '67%'  },
  { name: 'Rahul Sharma',  c1: true,  c2: false, c3: true,  total: '2/3', pct: '67%'  },
  { name: 'Deepa Nair',    c1: true,  c2: true,  c3: true,  total: '3/3', pct: '100%' },
];

const labModules = [
  { name: 'Case Drafting Studio',   students: 234, pct: 78, color: 'primary' },
  { name: 'Moot Court Simulator',   students: 156, pct: 52, color: 'info'    },
  { name: 'Contract Drafting',       students: 189, pct: 63, color: 'success' },
  { name: 'Legal Research Arena',    students: 142, pct: 47, color: 'warning' },
  { name: 'Client Interview Room',   students: 98,  pct: 33, color: 'danger'  },
];

const labLeaders = [
  { name: 'Rahul Sharma',  xp: '4,280 XP', level: 'Level 8', color: 'warning'   },
  { name: 'Arjun Mehta',   xp: '3,940 XP', level: 'Level 7', color: 'secondary' },
  { name: 'Sunita Kapoor', xp: '3,620 XP', level: 'Level 7', color: 'danger'    },
  { name: 'Deepa Nair',    xp: '2,890 XP', level: 'Level 6', color: 'primary'   },
  { name: 'Pooja Verma',   xp: '2,340 XP', level: 'Level 5', color: 'success'   },
];

const avatarColors = ['primary', 'success', 'info', 'warning', 'danger'];
const avatarColor  = (name: string) => avatarColors[name.charCodeAt(0) % avatarColors.length];
const initials     = (name: string) => name.split(' ').map(n => n[0]).join('');

// ── Component ─────────────────────────────────────────────────────────────────

export default function ReportsPage() {
  const [tab, setTab] = useState(0);

  return (
    <AdminLayout title="Reports" breadcrumb="Home / Reports">

      {/* ── Hero Card ─────────────────────────────────────────────────── */}
      <div className="card p-0 mb-6 overflow-hidden">
        <div
          className="card-body p-5"
          style={{ background: 'linear-gradient(135deg, #7367F0 0%, #9E95F5 100%)', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: -50, right: -50,  width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: -70, right: 120, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', top: '50%', right: 340,  width: 90,  height: 90,  borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none', transform: 'translateY(-50%)' }}></div>

          <div className="row align-items-center g-4 position-relative">
            <div className="col-12 col-md">
              <p className="mb-1 fw-semibold" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Analytics Overview</p>
              <h2 className="fw-bold mb-1" style={{ color: '#fff', fontSize: 36, lineHeight: 1.1 }}>Institute Reports</h2>
              <p className="mb-4 d-flex align-items-center gap-1" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
                <i className="ti tabler-calendar me-1" style={{ fontSize: 14 }}></i>
                Q1 2025 — Jan 1 to Mar 31
              </p>
              <div className="d-flex flex-wrap gap-3">
                {[
                  { label: 'Total Students', val: '1,247' },
                  { label: 'Revenue',        val: '₹2.84L' },
                  { label: 'Completions',    val: '312'    },
                  { label: 'Certificates',   val: '289'    },
                ].map(q => (
                  <div key={q.label} className="rounded-3 px-3 py-2" style={{ background: 'rgba(255,255,255,0.15)' }}>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>{q.val}</div>
                    <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 11 }}>{q.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date range + export controls */}
            <div className="col-12 col-md-auto d-none d-md-flex flex-column gap-2 align-items-end">
              <div className="d-flex gap-2">
                <input type="date" className="form-control form-control-sm" defaultValue="2025-01-01"
                  style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: 140 }} />
                <input type="date" className="form-control form-control-sm" defaultValue="2025-03-31"
                  style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: 140 }} />
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-sm fw-semibold" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: 'none' }}>
                  <i className="ti tabler-file-type-pdf me-1"></i>Export PDF
                </button>
                <button className="btn btn-sm fw-semibold" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: 'none' }}>
                  <i className="ti tabler-download me-1"></i>Export CSV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tab Nav ───────────────────────────────────────────────────── */}
      <div className="card mb-6">
        <div className="card-body py-0 px-5">
          <ul className="nav nav-tabs border-0 flex-wrap">
            {tabs.map(t => (
              <li key={t.id} className="nav-item">
                <button
                  className={`nav-link d-flex align-items-center gap-2 py-4 px-3 border-0 border-bottom border-2 ${tab === t.id ? 'active border-primary text-primary fw-semibold' : 'border-transparent text-body-secondary'}`}
                  style={{ background: 'none', borderRadius: 0 }}
                  onClick={() => setTab(t.id)}
                >
                  <i className={`ti ${t.icon}`}></i>
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Tab 0: Student Performance ────────────────────────────────── */}
      {tab === 0 && (
        <div>
          {/* KPI cards */}
          <div className="row g-6 mb-6">
            {[
              { icon: 'tabler-chart-pie',    color: 'primary', val: '72%', label: 'Avg Completion Rate', change: '+4%',  changeColor: 'success' },
              { icon: 'tabler-notes',        color: 'info',    val: '74%', label: 'Avg Quiz Score',      change: '+2%',  changeColor: 'success' },
              { icon: 'tabler-zzz',          color: 'warning', val: '184', label: 'Inactive (7+ days)',  change: '+12',  changeColor: 'danger'  },
              { icon: 'tabler-trophy',       color: 'success', val: '89',  label: 'Certificates Issued', change: '+28',  changeColor: 'success' },
            ].map(s => (
              <div key={s.label} className="col-sm-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-start justify-content-between">
                      <div>
                        <span className="text-heading">{s.label}</span>
                        <div className="d-flex align-items-center my-1 gap-2">
                          <h4 className="mb-0">{s.val}</h4>
                          <p className={`text-${s.changeColor} mb-0`}>({s.change})</p>
                        </div>
                        <small className="text-body-secondary">vs last quarter</small>
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

          {/* Student table */}
          <div className="card">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3 border-bottom py-4">
              <div>
                <h5 className="card-title mb-0">Student Performance Report</h5>
                <small className="text-body-secondary">{studentRows.length} students</small>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <select className="form-select form-select-sm" style={{ width: 140 }}><option>All Courses</option></select>
                <select className="form-select form-select-sm" style={{ width: 130 }}><option>All Batches</option></select>
                <div className="input-group input-group-sm" style={{ width: 190 }}>
                  <span className="input-group-text"><i className="ti tabler-search"></i></span>
                  <input type="search" className="form-control" placeholder="Search student..." />
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              {studentRows.map((s, i) => (
                <div
                  key={s.name}
                  className={`d-flex align-items-center gap-3 px-5 py-3${i < studentRows.length - 1 ? ' border-bottom' : ''}`}
                >
                  <div className="avatar flex-shrink-0">
                    <span className={`avatar-initial rounded-circle bg-label-${avatarColor(s.name)}`}>
                      {initials(s.name)}
                    </span>
                  </div>
                  <div style={{ minWidth: 130, flex: '0 0 130px' }}>
                    <div className="fw-semibold text-heading">{s.name}</div>
                    <small className="text-body-secondary">{s.courses} course{s.courses > 1 ? 's' : ''}</small>
                  </div>
                  <div className="flex-grow-1 d-none d-md-block" style={{ minWidth: 0 }}>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress flex-grow-1" style={{ height: 6 }}>
                        <div
                          className={`progress-bar bg-${s.progress === 100 ? 'success' : s.progress > 50 ? 'primary' : 'warning'}`}
                          style={{ width: `${s.progress}%` }}
                        ></div>
                      </div>
                      <small className="fw-semibold text-nowrap" style={{ minWidth: 36 }}>{s.progress}%</small>
                    </div>
                    <small className="text-body-secondary">Progress</small>
                  </div>
                  <div className="text-center d-none d-lg-block" style={{ minWidth: 70 }}>
                    <div className="fw-semibold">{s.quizzes}</div>
                    <small className="text-body-secondary">Quizzes</small>
                  </div>
                  <div className="text-center d-none d-lg-block" style={{ minWidth: 70 }}>
                    <div className="fw-semibold">{s.avg}</div>
                    <small className="text-body-secondary">Quiz Avg</small>
                  </div>
                  <div className="text-center d-none d-xl-block" style={{ minWidth: 80 }}>
                    <small className="text-body-secondary">{s.active}</small>
                    <div style={{ fontSize: 10, color: '#adb5bd' }}>Last active</div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`badge ${s.status === 'Active' ? 'bg-label-success' : s.status === 'Completed' ? 'bg-label-primary' : 'bg-label-secondary'}`}>
                      {s.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Tab 1: Revenue ────────────────────────────────────────────── */}
      {tab === 1 && (
        <div className="row g-6">
          {/* Revenue stat cards */}
          <div className="col-12">
            <div className="row g-6">
              {[
                { icon: 'tabler-trending-up',      color: 'primary', val: '₹2.84L', label: 'Total Revenue',  change: '+18%', changeColor: 'success' },
                { icon: 'tabler-circle-check',     color: 'success', val: '1,184',  label: 'Paid Txns',      change: '+12%', changeColor: 'success' },
                { icon: 'tabler-clock',            color: 'warning', val: '₹42K',   label: 'Pending',        change: '+3',   changeColor: 'warning' },
                { icon: 'tabler-corner-down-left', color: 'danger',  val: '₹12K',   label: 'Refunds',        change: '-2%',  changeColor: 'danger'  },
              ].map(s => (
                <div key={s.label} className="col-sm-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-start justify-content-between">
                        <div>
                          <span className="text-heading">{s.label}</span>
                          <div className="d-flex align-items-center my-1 gap-2">
                            <h4 className="mb-0">{s.val}</h4>
                            <p className={`text-${s.changeColor} mb-0`}>({s.change})</p>
                          </div>
                          <small className="text-body-secondary">vs last quarter</small>
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
          </div>

          {/* Monthly bar chart */}
          <div className="col-xl-8">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between border-bottom py-4">
                <div>
                  <h5 className="card-title mb-0">Monthly Revenue Trend</h5>
                  <small className="text-body-secondary">Jan – Dec 2025</small>
                </div>
                <div className="dropdown">
                  <button className="btn btn-text-secondary rounded-pill text-body-secondary border-0 p-2 me-n1" type="button" data-bs-toggle="dropdown">
                    <i className="icon-base ti tabler-dots-vertical icon-md"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#"><i className="ti tabler-download me-2"></i>Export CSV</a>
                    <a className="dropdown-item" href="#"><i className="ti tabler-refresh me-2"></i>Refresh</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <Chart type="bar" height={260} series={monthlyRevenue.series} options={monthlyRevenue.options} />
              </div>
            </div>
          </div>

          {/* Revenue by course */}
          <div className="col-xl-4">
            <div className="card h-100">
              <div className="card-header border-bottom py-4">
                <h5 className="card-title mb-0">Revenue by Course</h5>
              </div>
              <div className="card-body py-4">
                {courseRevChart.map((c, i) => (
                  <div key={c.name} className={i < courseRevChart.length - 1 ? 'mb-5' : ''}>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <div className="d-flex align-items-center gap-2">
                        <span className="rounded-circle flex-shrink-0" style={{ width: 8, height: 8, background: c.hex, display: 'inline-block' }}></span>
                        <small className="text-heading fw-medium">{c.name}</small>
                      </div>
                      <small className="fw-bold text-heading">{c.rev}</small>
                    </div>
                    <div className="progress" style={{ height: 6 }}>
                      <div className={`progress-bar bg-${c.color}`} style={{ width: `${c.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Tab 2: Course Completion ──────────────────────────────────── */}
      {tab === 2 && (
        <div className="row g-6">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-header border-bottom py-4">
                <h5 className="card-title mb-0">Course Completion Funnel</h5>
                <small className="text-body-secondary">1,247 total enrolled students</small>
              </div>
              <div className="card-body py-5">
                {funnelStages.map((s, i) => (
                  <div key={s.stage} className={`d-flex align-items-center gap-4${i < funnelStages.length - 1 ? ' mb-5' : ''}`}>
                    <div className="flex-shrink-0" style={{ width: 180 }}>
                      <div className="fw-medium text-heading">{s.stage}</div>
                      <small className="text-body-secondary">{s.count.toLocaleString()} students</small>
                    </div>
                    <div className="flex-grow-1">
                      <div className="progress" style={{ height: 10, borderRadius: 6 }}>
                        <div className={`progress-bar bg-${s.color}`} style={{ width: `${s.pct}%`, borderRadius: 6 }}></div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-end" style={{ minWidth: 44 }}>
                      <span className={`badge bg-label-${s.color}`}>{s.pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="card h-100">
              <div className="card-header border-bottom py-4">
                <h5 className="card-title mb-0">Completion Summary</h5>
              </div>
              <div className="card-body">
                {[
                  { icon: 'tabler-users',         color: 'primary', label: 'Total Enrolled',  val: '1,247' },
                  { icon: 'tabler-player-play',   color: 'info',    label: 'Started',          val: '1,089' },
                  { icon: 'tabler-circle-half-2', color: 'warning', label: '50%+ Complete',    val: '724'   },
                  { icon: 'tabler-circle-check',  color: 'success', label: 'Fully Complete',   val: '312'   },
                  { icon: 'tabler-trophy',        color: 'danger',  label: 'Certificates',     val: '289'   },
                ].map((s, i) => (
                  <div key={s.label} className={`d-flex align-items-center gap-3${i < 4 ? ' mb-5' : ''}`}>
                    <div className={`badge rounded bg-label-${s.color} p-2`}>
                      <i className={`icon-base ti ${s.icon} icon-md`}></i>
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-semibold text-heading">{s.label}</div>
                    </div>
                    <h5 className="mb-0 fw-bold">{s.val}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Tab 3: Attendance ─────────────────────────────────────────── */}
      {tab === 3 && (
        <div className="row g-6">
          <div className="col-12">
            <div className="row g-6 mb-2">
              {[
                { icon: 'tabler-users',       color: 'primary', val: '5',   label: 'Students Tracked' },
                { icon: 'tabler-video',       color: 'info',    val: '3',   label: 'Live Classes'     },
                { icon: 'tabler-percentage',  color: 'success', val: '80%', label: 'Avg Attendance'   },
                { icon: 'tabler-star',        color: 'warning', val: '2',   label: '100% Attendees'   },
              ].map(s => (
                <div key={s.label} className="col-sm-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar">
                          <span className={`avatar-initial rounded bg-label-${s.color}`}>
                            <i className={`icon-base ti ${s.icon} icon-26px`}></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="mb-0 fw-bold">{s.val}</h4>
                          <small className="text-body-secondary">{s.label}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12">
            <div className="card">
              <div className="card-header border-bottom py-4">
                <h5 className="card-title mb-0">Live Class Attendance</h5>
                <small className="text-body-secondary">Apr 1–3, 2025</small>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="border-top">
                      <tr>
                        <th>Student</th>
                        <th className="text-center">Criminal Law<br /><small className="text-body-secondary fw-normal">Apr 1</small></th>
                        <th className="text-center">Constitutional<br /><small className="text-body-secondary fw-normal">Apr 2</small></th>
                        <th className="text-center">CLAT Mock<br /><small className="text-body-secondary fw-normal">Apr 3</small></th>
                        <th className="text-center">Total</th>
                        <th className="text-center">Attendance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendanceRows.map(r => (
                        <tr key={r.name}>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <div className="avatar avatar-sm">
                                <span className={`avatar-initial rounded-circle bg-label-${avatarColor(r.name)}`}>{initials(r.name)}</span>
                              </div>
                              <span className="fw-semibold">{r.name}</span>
                            </div>
                          </td>
                          {[r.c1, r.c2, r.c3].map((present, i) => (
                            <td key={i} className="text-center">
                              <span className={`badge rounded-circle p-1 ${present ? 'bg-label-success' : 'bg-label-secondary'}`}
                                style={{ width: 28, height: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className={`ti ${present ? 'tabler-check' : 'tabler-x'}`} style={{ fontSize: 13 }}></i>
                              </span>
                            </td>
                          ))}
                          <td className="text-center fw-semibold">{r.total}</td>
                          <td className="text-center">
                            <span className={`badge ${r.pct === '100%' ? 'bg-label-success' : 'bg-label-warning'}`}>{r.pct}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Tab 4: Practice Lab ───────────────────────────────────────── */}
      {tab === 4 && (
        <div className="row g-6">
          {/* Lab KPIs */}
          <div className="col-12">
            <div className="row g-6">
              {[
                { icon: 'tabler-flask',        color: 'primary', val: '5',     label: 'Active Modules'   },
                { icon: 'tabler-users',        color: 'info',    val: '819',   label: 'Unique Users'     },
                { icon: 'tabler-star',         color: 'warning', val: '4,280', label: 'Top XP Earned'    },
                { icon: 'tabler-trending-up',  color: 'success', val: '+34%',  label: 'Engagement Rate'  },
              ].map(s => (
                <div key={s.label} className="col-sm-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar">
                          <span className={`avatar-initial rounded bg-label-${s.color}`}>
                            <i className={`icon-base ti ${s.icon} icon-26px`}></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="mb-0 fw-bold">{s.val}</h4>
                          <small className="text-body-secondary">{s.label}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Module activity */}
          <div className="col-xl-7">
            <div className="card h-100">
              <div className="card-header border-bottom py-4">
                <h5 className="card-title mb-0">Practice Lab Activity</h5>
                <small className="text-body-secondary">Student engagement by module</small>
              </div>
              <div className="card-body py-5">
                {labModules.map((m, i) => (
                  <div key={m.name} className={`d-flex align-items-center gap-4${i < labModules.length - 1 ? ' mb-5' : ''}`}>
                    <div className={`badge rounded bg-label-${m.color} p-2 flex-shrink-0`}>
                      <i className="icon-base ti tabler-flask icon-md"></i>
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-medium text-heading">{m.name}</span>
                        <small className="text-body-secondary">{m.students} students</small>
                      </div>
                      <div className="progress" style={{ height: 6 }}>
                        <div className={`progress-bar bg-${m.color}`} style={{ width: `${m.pct}%` }}></div>
                      </div>
                    </div>
                    <span className={`badge bg-label-${m.color} flex-shrink-0`} style={{ minWidth: 44 }}>{m.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="col-xl-5">
            <div className="card h-100">
              <div className="card-header border-bottom py-4">
                <h5 className="card-title mb-0">XP Leaderboard</h5>
                <small className="text-body-secondary">Top performing students</small>
              </div>
              <div className="card-body p-0">
                {labLeaders.map((s, i) => (
                  <div key={s.name} className={`d-flex align-items-center gap-3 px-5 py-3${i < labLeaders.length - 1 ? ' border-bottom' : ''}`}>
                    <div
                      className={`d-flex align-items-center justify-content-center rounded-circle fw-bold flex-shrink-0`}
                      style={{
                        width: 32, height: 32, fontSize: 12,
                        background: i === 0 ? '#FF9F43' : i === 1 ? '#7367F0' : i === 2 ? '#EA5455' : '#f1f1f1',
                        color: i < 3 ? '#fff' : '#555',
                      }}
                    >
                      #{i + 1}
                    </div>
                    <div className="avatar flex-shrink-0">
                      <span className={`avatar-initial rounded-circle bg-label-${avatarColor(s.name)}`}>{initials(s.name)}</span>
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-semibold text-heading">{s.name}</div>
                      <small className="text-body-secondary">{s.level}</small>
                    </div>
                    <span className="fw-bold text-primary">{s.xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Scheduled Report Banner ───────────────────────────────────── */}
      <div className="card mt-6">
        <div className="card-body d-flex flex-wrap align-items-center justify-content-between gap-3 py-4">
          <div className="d-flex align-items-center gap-3">
            <div className="badge rounded bg-label-primary p-2">
              <i className="icon-base ti tabler-mail icon-md"></i>
            </div>
            <div>
              <div className="fw-semibold text-heading">Weekly Summary Report</div>
              <small className="text-body-secondary">Auto-email every Monday at 9 AM to rajesh@sharmalaw.in</small>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="badge bg-label-success">Active</span>
            <div className="form-check form-switch mb-0">
              <input className="form-check-input" type="checkbox" defaultChecked />
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ti tabler-settings me-1"></i>Configure
            </button>
          </div>
        </div>
      </div>

    </AdminLayout>
  );
}
