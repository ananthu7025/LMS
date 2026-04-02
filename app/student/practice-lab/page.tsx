/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import Link from 'next/link';
import StudentLayout from '@/components/layouts/StudentLayout';

const modules = [
  {
    icon: 'tabler-scroll',
    image: '/img/illustrations/pencil-rocket.png',
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
    image: '/img/illustrations/boy-with-rocket-light.png',
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
    image: '/img/illustrations/girl-sitting-with-laptop.png',
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
    href: '/student/practice-lab/client-interview',
  },
  {
    icon: 'tabler-clipboard-text',
    image: '/img/illustrations/lady-with-laptop-light.png',
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
    href: '/student/practice-lab/contract-drafting',
  },
  {
    icon: 'tabler-search',
    image: '/img/illustrations/bulb-light.png',
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
    image: '/img/illustrations/rocket.png',
    title: 'Courtroom Argument Builder',
    desc: 'Build structured oral arguments using the IRAC framework for any case.',
    category: 'Advocacy',
    categoryColor: 'secondary',
    difficulty: 'Advanced',
    diffColor: 'danger',
    xp: 300,
    time: '20–25 min',
    progress: 10,
    color: 'secondary',
    href: '/student/practice-lab/courtroom-argument',
  },
];

const leaderboard = [
  { rank: 1, name: 'Rahul Sharma',  init: 'RS', color: 'warning',   xp: 4280, level: 'Level 8' },
  { rank: 2, name: 'Sunita Kapoor', init: 'SK', color: 'secondary',  xp: 3940, level: 'Level 7' },
  { rank: 3, name: 'Pooja Verma',   init: 'PV', color: 'info',       xp: 3620, level: 'Level 7' },
  { rank: 4, name: 'Deepa Nair',    init: 'DN', color: 'primary',    xp: 2890, level: 'Level 6' },
  { rank: 5, name: 'Meera Iyer',    init: 'MI', color: 'success',    xp: 2340, level: 'Level 5' },
];

const moduleTabs = ['All', 'In Progress', 'Completed', 'Not Started'];
const secondaryTabs = ['Leaderboard', 'Activity'] as const;

export default function PracticeLabPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [secondaryTab, setSecondaryTab] = useState<'Leaderboard' | 'Activity'>('Leaderboard');

  const inProgress = modules.filter(m => m.progress > 0 && m.progress < 100);

  const filtered = modules.filter(m => {
    if (activeTab === 'In Progress') return m.progress > 0 && m.progress < 100;
    if (activeTab === 'Completed')   return m.progress === 100;
    if (activeTab === 'Not Started') return m.progress === 0;
    return true;
  });

  return (
    <StudentLayout activePath="/student/practice-lab">

      {/* ── Compact Hero ── */}
      <div className="card p-0 mb-4">
        <div className="card-body d-flex align-items-center p-0 overflow-hidden" style={{ minHeight: 90 }}>
          <div className="d-none d-md-flex align-items-end flex-shrink-0 ps-4" style={{ minWidth: 80 }}>
            <img src="/img/illustrations/boy-with-rocket-light.png" alt="" height={86} style={{ objectFit: 'contain' }} />
          </div>
          <div className="flex-grow-1 px-5 py-4">
            <h5 className="mb-1 text-heading fw-semibold">
              Legal Practice Lab &nbsp;—&nbsp; <span className="text-primary">Sharpen Your Skills.</span>
            </h5>
            <p className="mb-0 text-body-secondary small">
              Simulate real legal scenarios — draft cases, argue in moot court, interview clients and earn XP.
            </p>
          </div>
          <div className="d-none d-md-flex align-items-end flex-shrink-0 pe-4" style={{ minWidth: 90 }}>
            <img src="/img/illustrations/pencil-rocket.png" alt="" height={110} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* ── Compact Stats Strip ── */}
      <div className="card mb-4">
        <div className="card-body py-3">
          <div className="d-flex flex-wrap align-items-center gap-3 gap-md-4">
            <div className="d-flex align-items-center gap-2">
              <i className="ti tabler-star text-warning fs-5"></i>
              <span className="small text-body-secondary">XP:</span>
              <span className="fw-semibold small">2,340</span>
            </div>
            <div className="vr d-none d-sm-block opacity-25"></div>
            <div className="d-flex align-items-center gap-2">
              <i className="ti tabler-trophy text-primary fs-5"></i>
              <span className="small text-body-secondary">Level:</span>
              <span className="fw-semibold small">5 — Associate</span>
            </div>
            <div className="vr d-none d-sm-block opacity-25"></div>
            <div className="d-flex align-items-center gap-2">
              <i className="ti tabler-flame text-danger fs-5"></i>
              <span className="small text-body-secondary">Streak:</span>
              <span className="fw-semibold small">7 Days 🔥</span>
            </div>
            <div className="vr d-none d-sm-block opacity-25"></div>
            <div className="d-flex align-items-center gap-2">
              <i className="ti tabler-check text-success fs-5"></i>
              <span className="small text-body-secondary">Sessions:</span>
              <span className="fw-semibold small">14</span>
            </div>
            <div className="ms-auto d-flex align-items-center gap-2">
              <small className="text-body-secondary text-nowrap">Lvl 6 in</small>
              <div className="progress" style={{ width: 100, height: 7 }}>
                <div className="progress-bar bg-primary" style={{ width: '78%' }}></div>
              </div>
              <small className="fw-semibold text-primary">78%</small>
            </div>
          </div>
        </div>
      </div>

      {/* ── Continue Your Practice ── */}
      {inProgress.length > 0 && (
        <div className="card mb-4">
          <div className="card-header border-0 pb-0">
            <h6 className="mb-0 d-flex align-items-center gap-2">
              <i className="ti tabler-player-play-filled text-primary"></i>
              Continue Your Practice
            </h6>
          </div>
          <div className="card-body pt-3">
            <div className="row g-4">
              {inProgress.map((m, i) => (
                <div key={i} className="col-sm-6 col-lg-4">
                  <div className={`rounded-3 p-4 bg-label-${m.color} d-flex align-items-center gap-3`}>
                    <div className="avatar flex-shrink-0">
                      <span className={`avatar-initial rounded bg-${m.color}`}>
                        <i className={`icon-base ti ${m.icon} icon-20px text-white`}></i>
                      </span>
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h6 className="mb-1 text-truncate">{m.title}</h6>
                      <div className="progress mb-1" style={{ height: 5 }}>
                        <div className={`progress-bar bg-${m.color}`} style={{ width: `${m.progress}%` }}></div>
                      </div>
                      <small className="text-body-secondary">{m.progress}% complete</small>
                    </div>
                    <Link href={m.href} className={`btn btn-sm btn-${m.color} flex-shrink-0`}>
                      <i className="ti tabler-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Practice Modules (dominant, full width) ── */}
      <div className="card mb-4">
        <div className="card-header d-flex flex-wrap justify-content-between align-items-center gap-4">
          <div className="card-title mb-0">
            <h5 className="mb-0">Practice Modules</h5>
            <p className="mb-0 text-body-secondary small">{modules.length} modules available</p>
          </div>
          <ul className="nav nav-pills gap-1">
            {moduleTabs.map(tab => (
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
              <div key={i} className="col-sm-6 col-xl-4">
                <div className="card p-2 h-100 shadow-none border">

                  {/* Thumbnail */}
                  <div className={`rounded-2 overflow-hidden mb-4 position-relative bg-label-${m.color} d-flex align-items-center justify-content-center`} style={{ height: 160 }}>
                    <img src={m.image} alt={m.title} style={{ height: 130, objectFit: 'contain' }} />
                    <span
                      className={`badge bg-label-${m.diffColor} position-absolute`}
                      style={{ top: 10, right: 10, fontSize: 11 }}
                    >
                      {m.difficulty}
                    </span>
                    <span className="avatar position-absolute" style={{ bottom: 10, left: 10 }}>
                      <span className={`avatar-initial rounded bg-${m.color}`}>
                        <i className={`icon-base ti ${m.icon} icon-20px text-white`}></i>
                      </span>
                    </span>
                  </div>

                  <div className="card-body p-4 pt-2">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <span className={`badge bg-label-${m.categoryColor}`}>{m.category}</span>
                    </div>
                    <h6 className="text-heading fw-semibold mb-1">{m.title}</h6>
                    <p className="text-body-secondary small mt-1 mb-3">{m.desc}</p>
                    <div className="d-flex align-items-center gap-3 mb-3 small text-body-secondary">
                      <span><i className="ti tabler-star text-warning me-1"></i>+{m.xp} XP</span>
                      <span><i className="ti tabler-clock me-1"></i>{m.time}</span>
                    </div>

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
                          <div className={`progress-bar bg-${m.color}`} role="progressbar" style={{ width: `${m.progress}%` }}></div>
                        </div>
                      </>
                    )}
                    {m.progress === 0 && <div className="mb-4"></div>}

                    <div className="d-flex gap-4">
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

      {/* ── Secondary: Leaderboard | Activity (tabbed) ── */}
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-pills gap-1">
            {secondaryTabs.map(tab => (
              <li key={tab} className="nav-item">
                <button
                  className={`nav-link${secondaryTab === tab ? ' active' : ''}`}
                  onClick={() => setSecondaryTab(tab)}
                >
                  <i className={`ti ${tab === 'Leaderboard' ? 'tabler-trophy' : 'tabler-chart-bar'} me-2`}></i>
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {secondaryTab === 'Leaderboard' && (
          <div className="card-body">
            <div className="row">
              <div className="col-lg-5">
                <div className="px-2 py-2 mb-4 border-bottom d-flex justify-content-between">
                  <small className="text-uppercase text-body-secondary fw-semibold">Student</small>
                  <small className="text-uppercase text-body-secondary fw-semibold">XP</small>
                </div>
                {leaderboard.map((s, i) => (
                  <div key={s.rank} className={`d-flex justify-content-between align-items-center${i < leaderboard.length - 1 ? ' mb-5' : ''}`}>
                    <div className="d-flex align-items-center gap-3">
                      <span className="text-body-secondary fw-semibold small" style={{ width: 20 }}>#{s.rank}</span>
                      <div className="avatar">
                        <span className={`avatar-initial rounded-circle bg-label-${s.color}`}>{s.init}</span>
                      </div>
                      <div>
                        <h6 className="mb-0">{s.name}</h6>
                        <small className="text-body-secondary">{s.level}</small>
                      </div>
                    </div>
                    <h6 className="mb-0 text-primary">{s.xp.toLocaleString()}</h6>
                  </div>
                ))}
                <div className="rounded-3 bg-label-primary p-3 mt-5">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <span className="text-primary fw-semibold small" style={{ width: 20 }}>#12</span>
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle bg-primary">AM</span>
                      </div>
                      <div>
                        <h6 className="mb-0 text-heading">You (Arjun Mehta)</h6>
                        <small className="text-primary">Level 5 — Associate</small>
                      </div>
                    </div>
                    <h6 className="mb-0 text-primary">2,340</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {secondaryTab === 'Activity' && (
          <div className="card-body">
            <div className="row g-6">
              {[
                { icon: 'tabler-check',       label: 'Sessions Completed', value: '14',   color: 'success', iconColor: '#28C76F' },
                { icon: 'tabler-file-text',   label: 'Cases Drafted',      value: '8',    color: 'info',    iconColor: '#00CFE8' },
                { icon: 'tabler-certificate', label: 'Avg Accuracy',       value: '82%',  color: 'warning', iconColor: '#FF9F43' },
                { icon: 'tabler-trending-up', label: 'XP This Week',       value: '+480', color: 'primary', iconColor: '#7367F0' },
              ].map((stat, idx) => (
                <div key={idx} className="col-sm-6 col-lg-3">
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
        )}
      </div>

    </StudentLayout>
  );
}
