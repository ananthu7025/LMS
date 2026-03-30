'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

export default function CreateQuizPage() {
  return (
    <TutorLayout active="/tutor/content/upload-video" title="Create Quiz" breadcrumb="Home / Upload Content / Quiz">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
        <div>
          {/* Quiz Header */}
          <div className="card" style={{ padding: 20, marginBottom: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label className="form-label">Quiz Title</label>
                <input className="form-input" defaultValue="Module 2: Offences Against Person — Quiz" />
              </div>
              <div>
                <label className="form-label">Instructions (Optional)</label>
                <input className="form-input" placeholder="e.g. Read each question carefully" defaultValue="Each question carries 3 marks. No negative marking." />
              </div>
            </div>
          </div>

          {/* Questions */}
          {[
            {
              q: 'Which section of the IPC defines "Murder"?',
              options: ['Section 299', 'Section 300', 'Section 302', 'Section 304'],
              correct: 1,
              explanation: 'Section 300 defines murder, while Section 302 prescribes the punishment for murder.'
            },
            {
              q: 'What is the punishment for murder under IPC Section 302?',
              options: ['Imprisonment up to 7 years', 'Life imprisonment or death', 'Imprisonment up to 14 years', 'Fine only'],
              correct: 1,
              explanation: 'Section 302 prescribes death or life imprisonment plus fine for murder.'
            },
          ].map((q, qi) => (
            <div key={qi} className="card" style={{ padding: 20, marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--primary)', background: 'var(--primary-light)', padding: '4px 10px', borderRadius: 6 }}>Q{qi + 1}</span>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--error)', fontSize: 18 }}>🗑️</button>
              </div>
              <textarea className="form-input" style={{ marginBottom: 14, height: 60, resize: 'none' }} defaultValue={q.q} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
                {q.options.map((opt, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '8px 10px', borderRadius: 8, border: `2px solid ${i === q.correct ? 'var(--success)' : 'var(--border)'}`, background: i === q.correct ? '#e8faf0' : '#fff' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: i === q.correct ? 'var(--success)' : 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff', fontWeight: 700, flexShrink: 0 }}>{i === q.correct ? '✓' : String.fromCharCode(65 + i)}</div>
                    <input style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 13 }} defaultValue={opt} />
                  </div>
                ))}
              </div>
              <div>
                <label className="form-label" style={{ color: 'var(--success)' }}>✅ Explanation (shown after attempt)</label>
                <input className="form-input" defaultValue={q.explanation} />
              </div>
            </div>
          ))}

          <button className="btn-outline" style={{ width: '100%', borderStyle: 'dashed', padding: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            ＋ Add Question
          </button>
        </div>

        {/* Settings */}
        <div className="card" style={{ padding: 20, height: 'fit-content' }}>
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>⚙️ Quiz Settings</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div><label className="form-label">Total Marks</label><input className="form-input" type="number" defaultValue={60} /></div>
              <div><label className="form-label">Passing Score (%)</label><input className="form-input" type="number" defaultValue={50} /></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderTop: '1px solid var(--border)' }}>
              <div><div style={{ fontSize: 13, fontWeight: 600 }}>Time Limit</div></div>
              <div className="toggle" />
            </div>
            <div style={{ marginTop: -8 }}>
              <label className="form-label">Time (minutes)</label>
              <input className="form-input" type="number" defaultValue={45} />
            </div>
            {[['Shuffle Questions', true], ['Shuffle Options', false], ['Allow Reattempt', true]].map(([label, on]) => (
              <div key={label as string} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderTop: '1px solid var(--border)' }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{label as string}</span>
                <div className={`toggle ${on ? '' : 'off'}`} />
              </div>
            ))}
            <div>
              <label className="form-label">Show Result</label>
              <select className="form-input">
                <option>Immediately after submission</option>
                <option>After deadline</option>
              </select>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 4 }}>
              <label className="form-label">Max Attempts</label>
              <input className="form-input" type="number" defaultValue={3} style={{ marginTop: -4 }} />
            </div>
          </div>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button className="btn-outline" style={{ width: '100%' }}>👁️ Preview as Student</button>
            <button className="btn-primary" style={{ width: '100%' }}>💾 Save & Publish Quiz</button>
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}
