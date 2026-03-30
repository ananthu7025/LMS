'use client';
import StudentLayout from '@/components/layouts/StudentLayout';

const modules = [
  { icon: '📜', title: 'Case Drafting Studio', desc: 'Draft petitions, bail applications, charge sheets and FIRs with AI guidance', difficulty: 'Intermediate', xp: 200, time: '45–60 min', progress: 68, color: '#7367F0' },
  { icon: '🎤', title: 'Moot Court Simulator', desc: 'Argue before a virtual bench — AI plays opposing counsel and judges', difficulty: 'Advanced', xp: 350, time: '30–45 min', progress: 20, color: '#EA5455' },
  { icon: '💼', title: 'Client Interview Room', desc: 'Conduct a client consultation and extract legally relevant facts', difficulty: 'Beginner', xp: 150, time: '20–30 min', progress: 90, color: '#28C76F' },
  { icon: '📋', title: 'Contract Drafting Desk', desc: 'Draft commercial contracts with essential clauses and legal safeguards', difficulty: 'Intermediate', xp: 250, time: '40–60 min', progress: 0, color: '#FF9F43' },
  { icon: '🔍', title: 'Legal Research Arena', desc: 'Research and cite case laws for a given legal problem using AI assistance', difficulty: 'Intermediate', xp: 180, time: '25–35 min', progress: 45, color: '#00CFE8' },
  { icon: '⚖️', title: 'Courtroom Argument Builder', desc: 'Build structured oral arguments using the IRAC framework', difficulty: 'Advanced', xp: 300, time: '35–50 min', progress: 10, color: '#667085' },
];

const difficultyStyle: Record<string, string> = {
  Beginner: 'badge-success', Intermediate: 'badge-warning', Advanced: 'badge-error'
};

const leaderboard = [
  { name: 'Rahul Sharma', xp: 4280, level: 'Level 8', rank: 1 },
  { name: 'Sunita Kapoor', xp: 3940, level: 'Level 7', rank: 2 },
  { name: 'Pooja Verma', xp: 3620, level: 'Level 7', rank: 3 },
  { name: 'Deepa Nair', xp: 2890, level: 'Level 6', rank: 4 },
  { name: 'Meera Iyer', xp: 2340, level: 'Level 5', rank: 5 },
];

export default function PracticeLabPage() {
  return (
    <StudentLayout activePath="/student/practice-lab">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 6 }}>⚖️ Legal Practice Lab</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Practice real legal skills in simulated environments. Each module earns XP.</p>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ textAlign: 'center', padding: '12px 20px', background: '#fff', borderRadius: 12, border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 22, marginBottom: 2 }}>🔥</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--warning)' }}>7</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Day Streak</div>
          </div>
          <div style={{ padding: '12px 20px', background: '#fff', borderRadius: 12, border: '1px solid var(--border)', minWidth: 160 }}>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 4 }}>Your Level</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--primary)', marginBottom: 6 }}>Level 5 — Associate</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>2,340 XP · 660 to Level 6</div>
            <div className="progress-bar"><div className="progress-fill" style={{ width: '78%', background: 'var(--warning)' }} /></div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 24 }}>
        {/* Modules Grid */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {modules.map((m, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden', transition: 'transform 0.15s' }}>
                <div style={{ height: 6, background: m.color }} />
                <div style={{ padding: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: `${m.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{m.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.3, marginBottom: 4 }}>{m.title}</div>
                      <span className={`badge ${difficultyStyle[m.difficulty]}`}>{m.difficulty}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: 12 }}>{m.desc}</p>
                  <div style={{ display: 'flex', gap: 12, fontSize: 11.5, color: 'var(--text-muted)', marginBottom: 12 }}>
                    <span>⭐ +{m.xp} XP</span>
                    <span>⏱️ {m.time}</span>
                  </div>
                  {m.progress > 0 && (
                    <div style={{ marginBottom: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Your progress</span>
                        <span style={{ fontSize: 11, fontWeight: 700 }}>{m.progress}%</span>
                      </div>
                      <div className="progress-bar"><div className="progress-fill" style={{ width: `${m.progress}%`, background: m.color }} /></div>
                    </div>
                  )}
                  <a href={i === 0 ? '/student/practice-lab/case-drafting/1' : '#'}>
                    <button className="btn-primary" style={{ width: '100%', background: m.color, fontSize: 13 }}>
                      {m.progress === 100 ? '🔄 Retry' : m.progress > 0 ? '▶ Continue' : '🚀 Start'}
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>🏆 Weekly Leaderboard</div>
            {leaderboard.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: i === 0 ? '#FFD700' : i === 1 ? '#C0C0C0' : i === 2 ? '#CD7F32' : 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 12, color: i < 3 ? '#fff' : 'var(--text-muted)', flexShrink: 0 }}>#{s.rank}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{s.level}</div>
                </div>
                <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: 13 }}>{s.xp.toLocaleString()} XP</span>
              </div>
            ))}
            <div style={{ marginTop: 12, padding: '10px 0', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, color: 'var(--primary)' }}>#12</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>You (Arjun Mehta)</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Level 5</div>
              </div>
              <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: 13 }}>2,340 XP</span>
            </div>
          </div>

          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>📊 Your Stats</div>
            {[['Sessions Completed', '14'], ['Cases Drafted', '8'], ['Avg Score', '82%'], ['XP This Week', '+480']].map(([k, v]) => (
              <div key={k as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>{k as string}</span>
                <span style={{ fontWeight: 700 }}>{v as string}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
