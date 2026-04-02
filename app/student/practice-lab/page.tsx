'use client';
import { useState } from 'react';
import Link from 'next/link';
import StudentLayout from '@/components/layouts/StudentLayout';

const modules = [
  {
    icon: 'tabler-scroll',
    image: '/img/courses/app-academy-tutor-1.png',
    title: 'Case Drafting Studio',
    desc: 'Draft petitions, bail applications, charge sheets and FIRs with AI guidance.',
    category: 'Drafting',
    categoryColor: 'primary',
    difficulty: 'Intermediate',
    diffColor: 'warning',
    xp: 200,
    time: '45–60 min',
    progress: 68,
    color: 'primary',
    href: '/student/practice-lab/case-drafting/1',
  },
  {
    icon: 'tabler-microphone',
    image: '/img/courses/app-academy-tutor-2.png',
    title: 'Moot Court Simulator',
    desc: 'Argue before a virtual bench — AI plays opposing counsel and judges.',
    category: 'Advocacy',
    categoryColor: 'danger',
    difficulty: 'Advanced',
    diffColor: 'danger',
    xp: 350,
    time: '30–45 min',
    progress: 20,
    color: 'danger',
    href: '#',
  },
  {
    icon: 'tabler-briefcase',
    image: '/img/courses/app-academy-tutor-3.png',
    title: 'Client Interview Room',
    desc: 'Conduct a client consultation and extract legally relevant facts.',
    category: 'Skills',
    categoryColor: 'success',
    difficulty: 'Beginner',
    diffColor: 'success',
    xp: 150,
    time: '20–30 min',
    progress: 100,
    color: 'success',
    href: '#',
  },
  {
    icon: 'tabler-clipboard-text',
    image: '/img/courses/app-academy-tutor-4.png',
    title: 'Contract Drafting Desk',
    desc: 'Draft commercial contracts with essential clauses and legal safeguards.',
    category: 'Drafting',
    categoryColor: 'warning',
    difficulty: 'Intermediate',
    diffColor: 'warning',
    xp: 250,
    time: '40–60 min',
    progress: 0,
    color: 'warning',
    href: '#',
  },
  {
    icon: 'tabler-search',
    image: '/img/courses/app-academy-tutor-5.png',
    title: 'Legal Research Arena',
    desc: 'Research and cite case laws for a given legal problem using AI assistance.',
    category: 'Research',
    categoryColor: 'info',
    difficulty: 'Intermediate',
    diffColor: 'warning',
    xp: 180,
    time: '25–35 min',
    progress: 45,
    color: 'info',
    href: '#',
  },
  {
    icon: 'tabler-scale',
    image: '/img/courses/app-academy-tutor-6.png',
    title: 'Courtroom Argument Builder',
    desc: 'Build structured oral arguments using the IRAC framework for any case.',
    category: 'Advocacy',
    categoryColor: 'secondary',
    difficulty: 'Advanced',
    diffColor: 'danger',
    xp: 300,
    time: '35–50 min',
    progress: 10,
    color: 'secondary',
    href: '#',
  },
];

const leaderboard = [
  { rank: 1, name: 'Rahul Sharma',  init: 'RS', color: 'warning',   xp: 4280, level: 'Level 8' },
  { rank: 2, name: 'Sunita Kapoor', init: 'SK', color: 'secondary',  xp: 3940, level: 'Level 7' },
  { rank: 3, name: 'Pooja Verma',   init: 'PV', color: 'info',       xp: 3620, level: 'Level 7' },
  { rank: 4, name: 'Deepa Nair',    init: 'DN', color: 'primary',    xp: 2890, level: 'Level 6' },
  { rank: 5, name: 'Meera Iyer',    init: 'MI', color: 'success',    xp: 2340, level: 'Level 5' },
];

const tabs = ['All', 'In Progress', 'Completed', 'Not Started'];

export default function PracticeLabPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = modules.filter(m => {
    if (activeTab === 'In Progress') return m.progress > 0 && m.progress < 100;
    if (activeTab === 'Completed')   return m.progress === 100;
    if (activeTab === 'Not Started') return m.progress === 0;
    return true;
  });

  return (
    <StudentLayout activePath="/student/practice-lab">

      {/* ── Hero Banner ── */}
      <div className="card p-0 mb-6">
        <div className="card-body d-flex flex-column flex-md-row justify-content-between p-0 pt-6">
          <div className="d-none d-md-flex align-items-end ps-6 pb-0" style={{ minWidth: 90 }}>
            <img src="/img/illustrations/boy-with-rocket-light.png" alt="" height={110} style={{ objectFit: 'contain' }} />
          </div>
          <div className="flex-grow-1 d-flex align-items-md-center flex-column text-md-center mb-6 py-6 px-6">
            <h4 className="mb-2 text-heading lh-lg">
              Legal Practice Lab<br />
              <span className="text-primary text-nowrap">Sharpen Your Skills.</span>
            </h4>
            <p className="mb-0 text-body">
              Simulate real legal scenarios — draft cases, argue in moot court, interview clients and earn XP.
            </p>
          </div>
          <div className="d-none d-md-flex align-items-end justify-content-end pe-0" style={{ minWidth: 120 }}>
            <img src="/img/illustrations/pencil-rocket.png" alt="" height={188} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* ── Stat Cards ── */}
      <div className="row g-6 mb-6">
        {[
          { icon: 'tabler-star',          label: 'Total XP',        value: '2,340',       sub: '+480 this week',   color: 'bg-label-warning', iconColor: '#FF9F43' },
          { icon: 'tabler-trophy',         label: 'Current Level',   value: 'Level 5',     sub: 'Associate',        color: 'bg-label-primary', iconColor: '#7367F0' },
          { icon: 'tabler-flame',          label: 'Day Streak',      value: '7 Days',      sub: 'Keep it going!',   color: 'bg-label-danger',  iconColor: '#EA5455' },
          { icon: 'tabler-check',          label: 'Sessions Done',   value: '14',          sub: '1 completed today', color: 'bg-label-success', iconColor: '#28C76F' },
        ].map(s => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="content-left">
                    <span className="text-heading">{s.label}</span>
                    <div className="d-flex align-items-center my-1">
                      <h4 className="mb-0 me-2">{s.value}</h4>
                    </div>
                    <small className="mb-0 text-body-secondary">{s.sub}</small>
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

      {/* ── XP Progress bar ── */}
      <div className="card mb-6">
        <div className="card-body py-4">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-label-primary">Level 5 — Associate</span>
              <small className="text-body-secondary">2,340 / 3,000 XP to Level 6</small>
            </div>
            <small className="fw-semibold text-primary">78%</small>
          </div>
          <div className="progress" style={{ height: 10 }}>
            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '78%' }}></div>
          </div>
        </div>
      </div>

      <div className="row g-6">

        {/* ── Modules ── */}
        <div className="col-xl-8">
          <div className="card">
            <div className="card-header d-flex flex-wrap justify-content-between align-items-center gap-4">
              <div className="card-title mb-0">
                <h5 className="mb-0">Practice Modules</h5>
                <p className="mb-0 text-body">{modules.length} modules available</p>
              </div>
              {/* Tabs */}
              <ul className="nav nav-pills gap-1">
                {tabs.map(tab => (
                  <li key={tab} className="nav-item">
                    <button
                      className={`nav-link${activeTab === tab ? ' active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-body">
              <div className="row gy-6">
                {filtered.map((m, i) => (
                  <div key={i} className="col-sm-6">
                    <div className="card p-2 h-100 shadow-none border">

                      {/* Thumbnail image */}
                      <div className="rounded-2 overflow-hidden mb-4 position-relative" style={{ height: 160 }}>
                        <img
                          src={m.image}
                          alt={m.title}
                          className="w-100 h-100"
                          style={{ objectFit: 'cover' }}
                        />
                        {/* difficulty badge overlay */}
                        <span
                          className={`badge bg-label-${m.diffColor} position-absolute`}
                          style={{ top: 10, right: 10, fontSize: 11 }}
                        >
                          {m.difficulty}
                        </span>
                        {/* icon badge overlay */}
                        <span
                          className={`avatar position-absolute`}
                          style={{ bottom: 10, left: 10 }}
                        >
                          <span className={`avatar-initial rounded bg-${m.color}`}>
                            <i className={`icon-base ti ${m.icon} icon-20px text-white`}></i>
                          </span>
                        </span>
                      </div>

                      <div className="card-body p-4 pt-2">
                        {/* Category */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <span className={`badge bg-label-${m.categoryColor}`}>{m.category}</span>
                        </div>

                        {/* Title + desc */}
                        <h6 className="text-heading fw-semibold mb-1">{m.title}</h6>
                        <p className="text-body-secondary small mt-1 mb-3">{m.desc}</p>

                        {/* Meta */}
                        <div className="d-flex align-items-center gap-3 mb-3 small text-body-secondary">
                          <span><i className="ti tabler-star text-warning me-1"></i>+{m.xp} XP</span>
                          <span><i className="ti tabler-clock me-1"></i>{m.time}</span>
                        </div>

                        {/* Progress */}
                        {m.progress > 0 && (
                          <>
                            <div className="d-flex justify-content-between mb-1">
                              <small className="text-body-secondary">
                                {m.progress === 100
                                  ? <span className="text-success"><i className="ti tabler-check me-1"></i>Completed</span>
                                  : 'Progress'}
                              </small>
                              <small className="fw-semibold">{m.progress}%</small>
                            </div>
                            <div className="progress mb-4" style={{ height: 8 }}>
                              <div
                                className={`progress-bar bg-${m.color}`}
                                role="progressbar"
                                style={{ width: `${m.progress}%` }}
                              ></div>
                            </div>
                          </>
                        )}
                        {m.progress === 0 && <div className="mb-4"></div>}

                        {/* Actions */}
                        <div className="d-flex flex-column flex-md-row gap-4 text-nowrap flex-wrap flex-md-nowrap flex-lg-wrap flex-xxl-nowrap">
                          {m.progress === 100 ? (
                            <Link href={m.href} className="w-100 btn btn-label-primary d-flex align-items-center justify-content-center">
                              <i className="icon-base ti tabler-rotate-clockwise-2 icon-xs me-2"></i>Retry
                            </Link>
                          ) : m.progress > 0 ? (
                            <>
                              <Link href={m.href} className="w-100 btn btn-label-secondary d-flex align-items-center justify-content-center">
                                <i className="icon-base ti tabler-rotate-clockwise-2 icon-xs me-2"></i>Start Over
                              </Link>
                              <Link href={m.href} className="w-100 btn btn-label-primary d-flex align-items-center justify-content-center">
                                <span className="me-2">Continue</span>
                                <i className="icon-base ti tabler-chevron-right icon-xs lh-1"></i>
                              </Link>
                            </>
                          ) : (
                            <Link href={m.href} className="w-100 btn btn-label-primary d-flex align-items-center justify-content-center">
                              <span className="me-2">Start Module</span>
                              <i className="icon-base ti tabler-chevron-right icon-xs lh-1"></i>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {filtered.length === 0 && (
                  <div className="col-12 text-center py-6">
                    <div className="avatar avatar-lg mb-3">
                      <span className="avatar-initial rounded-circle bg-label-secondary">
                        <i className="icon-base ti tabler-mood-empty icon-26px"></i>
                      </span>
                    </div>
                    <p className="text-body-secondary mb-0">No modules in this category yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Sidebar ── */}
        <div className="col-xl-4">

          {/* Leaderboard */}
          <div className="card mb-6">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="card-title m-0">Weekly Leaderboard</h5>
              <div className="avatar">
                <span className="avatar-initial rounded bg-label-warning">
                  <i className="icon-base ti tabler-trophy icon-26px" style={{ color: '#FF9F43' }}></i>
                </span>
              </div>
            </div>
            <div className="px-5 py-3 border border-start-0 border-end-0">
              <div className="d-flex justify-content-between">
                <p className="mb-0 text-uppercase small text-body-secondary">Student</p>
                <p className="mb-0 text-uppercase small text-body-secondary">XP</p>
              </div>
            </div>
            <div className="card-body">
              {leaderboard.map((s, i) => (
                <div key={s.rank} className={`d-flex justify-content-between align-items-center${i < leaderboard.length - 1 ? ' mb-6' : ''}`}>
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-body-secondary fw-semibold small" style={{ width: 20 }}>#{s.rank}</span>
                    <div className="avatar me-2">
                      <span className={`avatar-initial rounded-circle bg-label-${s.color}`}>{s.init}</span>
                    </div>
                    <div>
                      <h6 className="mb-0 text-truncate">{s.name}</h6>
                      <small className="text-body-secondary">{s.level}</small>
                    </div>
                  </div>
                  <div className="text-end">
                    <h6 className="mb-0 text-primary">{s.xp.toLocaleString()}</h6>
                  </div>
                </div>
              ))}
            </div>
            {/* You */}
            <div className="card-footer bg-label-primary">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <span className="text-primary fw-semibold small" style={{ width: 20 }}>#12</span>
                  <div className="avatar me-2">
                    <span className="avatar-initial rounded-circle bg-primary">AM</span>
                  </div>
                  <div>
                    <h6 className="mb-0 text-heading">You (Arjun Mehta)</h6>
                    <small className="text-primary">Level 5 — Associate</small>
                  </div>
                </div>
                <div className="text-end">
                  <h6 className="mb-0 text-primary">2,340</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="card-title m-0">Your Activity</h5>
            </div>
            <div className="card-body">
              {[
                { icon: 'tabler-check',        label: 'Sessions Completed', value: '14',   color: 'success', iconColor: '#28C76F' },
                { icon: 'tabler-file-text',    label: 'Cases Drafted',      value: '8',    color: 'info',    iconColor: '#00CFE8' },
                { icon: 'tabler-certificate',  label: 'Avg Accuracy',       value: '82%',  color: 'warning', iconColor: '#FF9F43' },
                { icon: 'tabler-trending-up',  label: 'XP This Week',       value: '+480', color: 'primary', iconColor: '#7367F0' },
              ].map((stat, idx, arr) => (
                <div key={idx} className={`d-flex align-items-start justify-content-between${idx < arr.length - 1 ? ' mb-6' : ''}`}>
                  <div className="d-flex align-items-center gap-3">
                    <div className="avatar">
                      <span className={`avatar-initial rounded bg-label-${stat.color}`}>
                        <i className={`icon-base ti ${stat.icon} icon-26px`} style={{ color: stat.iconColor }}></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0">{stat.value}</h6>
                      <small className="text-body-secondary">{stat.label}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </StudentLayout>
  );
}
