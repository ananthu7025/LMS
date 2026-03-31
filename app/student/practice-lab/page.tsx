'use client';
import StudentLayout from '@/components/layouts/StudentLayout';

const modules = [
  { icon: 'ti tabler-scroll', title: 'Case Drafting Studio', desc: 'Draft petitions, bail applications, charge sheets and FIRs with AI guidance', difficulty: 'Intermediate', xp: 200, time: '45–60 min', progress: 68, colorClass: 'primary' },
  { icon: 'ti tabler-microphone', title: 'Moot Court Simulator', desc: 'Argue before a virtual bench — AI plays opposing counsel and judges', difficulty: 'Advanced', xp: 350, time: '30–45 min', progress: 20, colorClass: 'danger' },
  { icon: 'ti tabler-briefcase', title: 'Client Interview Room', desc: 'Conduct a client consultation and extract legally relevant facts', difficulty: 'Beginner', xp: 150, time: '20–30 min', progress: 90, colorClass: 'success' },
  { icon: 'ti tabler-clipboard-text', title: 'Contract Drafting Desk', desc: 'Draft commercial contracts with essential clauses and legal safeguards', difficulty: 'Intermediate', xp: 250, time: '40–60 min', progress: 0, colorClass: 'warning' },
  { icon: 'ti tabler-search', title: 'Legal Research Arena', desc: 'Research and cite case laws for a given legal problem using AI assistance', difficulty: 'Intermediate', xp: 180, time: '25–35 min', progress: 45, colorClass: 'info' },
  { icon: 'ti tabler-scale', title: 'Courtroom Argument Builder', desc: 'Build structured oral arguments using the IRAC framework', difficulty: 'Advanced', xp: 300, time: '35–50 min', progress: 10, colorClass: 'secondary' },
];

const difficultyBadge: Record<string, string> = {
  Beginner: 'bg-label-success',
  Intermediate: 'bg-label-warning',
  Advanced: 'bg-label-danger',
};

const leaderboard = [
  { name: 'Rahul Sharma', xp: 4280, level: 'Level 8', rank: 1, avatar: 'RS' },
  { name: 'Sunita Kapoor', xp: 3940, level: 'Level 7', rank: 2, avatar: 'SK' },
  { name: 'Pooja Verma', xp: 3620, level: 'Level 7', rank: 3, avatar: 'PV' },
  { name: 'Deepa Nair', xp: 2890, level: 'Level 6', rank: 4, avatar: 'DN' },
  { name: 'Meera Iyer', xp: 2340, level: 'Level 5', rank: 5, avatar: 'MI' },
];

export default function PracticeLabPage() {
  return (
    <StudentLayout activePath="/student/practice-lab">
      {/* Header */}
      <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-4">
        <div>
          <h4 className="fw-bold mb-1">Legal Practice Lab</h4>
          <p className="text-body-secondary small mb-0">Practice real legal skills in simulated environments. Each module earns XP.</p>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <div className="card shadow-none border p-2 px-3 text-center bg-white d-flex flex-column align-items-center justify-content-center" style={{ minWidth: 100 }}>
            <div className="text-warning fw-bold h4 mb-0">7</div>
            <div className="extra-small text-body-secondary fw-bold text-uppercase">Day Streak</div>
          </div>
          <div className="card shadow-none border p-3 bg-white" style={{ minWidth: 200 }}>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span className="extra-small text-body-secondary fw-bold">LEVEL 5 — ASSOCIATE</span>
              <span className="extra-small text-primary fw-bold">2,340 XP</span>
            </div>
            <div className="progress rounded-pill mb-1" style={{ height: 6 }}>
              <div className="progress-bar bg-primary" role="progressbar" style={{ width: '78%' }} aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
            <div className="extra-small text-body-secondary text-end">660 to Level 6</div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Modules Grid */}
        <div className="col-lg-8">
          <div className="row g-3">
            {modules.map((m, i) => (
              <div key={i} className="col-md-6">
                <div className="card h-100 shadow-sm border-0 hover-shadow transition-all overflow-hidden">
                  <div className={`bg-${m.colorClass}`} style={{ height: 4 }}></div>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div className={`avatar avatar-lg rounded flex-shrink-0 bg-label-${m.colorClass} d-flex align-items-center justify-content-center p-2`}>
                        <i className={`${m.icon} fs-3`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="fw-bold text-heading mb-1">{m.title}</h6>
                        <span className={`badge ${difficultyBadge[m.difficulty]} small`}>{m.difficulty}</span>
                      </div>
                    </div>
                    <p className="small text-body-secondary mb-3 line-clamp-2" style={{ height: 40 }}>{m.desc}</p>
                    <div className="d-flex gap-3 extra-small fw-bold text-body-secondary mb-3">
                      <span className="d-flex align-items-center gap-1">
                        <i className="ti tabler-star text-warning"></i>+{m.xp} XP
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <i className="ti tabler-clock text-primary"></i>{m.time}
                      </span>
                    </div>

                    {m.progress > 0 && (
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="extra-small text-body-secondary">Progress</span>
                          <span className="extra-small fw-bold text-heading">{m.progress}%</span>
                        </div>
                        <div className="progress rounded-pill" style={{ height: 4 }}>
                          <div className={`progress-bar bg-${m.colorClass}`} role="progressbar" style={{ width: `${m.progress}%` }}></div>
                        </div>
                      </div>
                    )}

                    <a href={i === 0 ? '/student/practice-lab/case-drafting/1' : '#'} className="text-decoration-none">
                      <button className={`btn btn-${m.colorClass} w-100 btn-sm fw-bold mt-2 shadow-sm`}>
                        {m.progress === 100 ? 'Retry Module' : m.progress > 0 ? 'Continue Practice' : 'Start Studio'}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar / Leaderboard */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-header border-bottom py-3">
              <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                <i className="ti tabler-trophy text-warning"></i>
                Weekly Leaderboard
              </h6>
            </div>
            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                {leaderboard.map((s, i) => (
                  <div key={i} className="list-group-item px-4 py-3 border-0 d-flex align-items-center gap-3">
                    <div className="fw-bold text-body-secondary small" style={{ width: 24 }}>#{s.rank}</div>
                    <div className="avatar avatar-sm flex-shrink-0">
                      <span className={`avatar-initial rounded-circle ${i === 0 ? 'bg-warning' : i === 1 ? 'bg-secondary' : i === 2 ? 'bg-info' : 'bg-label-primary'}`}>
                        {s.avatar}
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="small fw-bold mb-0 text-heading">{s.name}</h6>
                      <small className="extra-small text-body-secondary">{s.level}</small>
                    </div>
                    <div className="text-primary fw-bold small">{s.xp.toLocaleString()} XP</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer bg-label-primary border-top py-3">
              <div className="d-flex align-items-center gap-3">
                <div className="fw-bold text-primary small" style={{ width: 24 }}>#12</div>
                <div className="avatar avatar-sm flex-shrink-0">
                  <span className="avatar-initial rounded-circle bg-primary">AM</span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="small fw-bold mb-0 text-heading">You (Arjun Mehta)</h6>
                  <small className="extra-small text-primary">Level 5 Associate</small>
                </div>
                <div className="text-primary fw-bold small">2,340 XP</div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm border-0">
            <div className="card-header border-bottom py-3">
              <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
                <i className="ti tabler-chart-bar text-primary"></i>
                Your Activity
              </h6>
            </div>
            <div className="card-body p-4">
              {[
                { label: 'Sessions Completed', value: '14', icon: 'ti tabler-check', color: 'success' },
                { label: 'Cases Drafted', value: '8', icon: 'ti tabler-file-text', color: 'info' },
                { label: 'Avg Accuracy Score', value: '82%', icon: 'ti tabler-certificate', color: 'warning' },
                { label: 'XP This Week', value: '+480', icon: 'ti tabler-trending-up', color: 'primary' },
              ].map((stat, idx) => (
                <div key={idx} className={`d-flex align-items-center justify-content-between ${idx !== 3 ? 'mb-4' : ''}`}>
                  <div className="d-flex align-items-center gap-2">
                    <div className={`avatar avatar-xs rounded bg-label-${stat.color} flex-shrink-0 d-flex align-items-center justify-content-center`}>
                      <i className={`${stat.icon} extra-small`}></i>
                    </div>
                    <span className="small text-body-secondary">{stat.label}</span>
                  </div>
                  <span className="small fw-bold text-heading">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
