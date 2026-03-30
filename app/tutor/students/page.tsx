'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const students = [
  { name: 'Arjun Mehta', initials: 'AM', course: 'Criminal Law Fundamentals', done: 24, total: 35, progress: 68, quizAvg: 82, lastActive: 'Today' },
  { name: 'Sunita Kapoor', initials: 'SK', course: 'Criminal Law Fundamentals', done: 32, total: 35, progress: 92, quizAvg: 91, lastActive: 'Yesterday' },
  { name: 'Vikram Joshi', initials: 'VJ', course: 'Criminal Law Fundamentals', done: 16, total: 35, progress: 45, quizAvg: 64, lastActive: 'Mar 25' },
  { name: 'Deepa Nair', initials: 'DN', course: 'Criminal Law Fundamentals', done: 10, total: 35, progress: 30, quizAvg: 71, lastActive: 'Mar 27' },
  { name: 'Rahul Sharma', initials: 'RS', course: 'Criminal Law Fundamentals', done: 35, total: 35, progress: 100, quizAvg: 88, lastActive: 'Mar 28' },
  { name: 'Pooja Verma', initials: 'PV', course: 'Criminal Law Fundamentals', done: 19, total: 35, progress: 55, quizAvg: 76, lastActive: 'Today' },
  { name: 'Karan Singh', initials: 'KS', course: 'Criminal Law Fundamentals', done: 4, total: 35, progress: 12, quizAvg: 40, lastActive: 'Mar 20' },
  { name: 'Meera Iyer', initials: 'MI', course: 'Criminal Law Fundamentals', done: 20, total: 35, progress: 58, quizAvg: 79, lastActive: 'Mar 26' },
];

export default function StudentProgressPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <TutorLayout active="/tutor/students" title="Student Progress" breadcrumb="Home / Student Progress">
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <select className="form-input" style={{ maxWidth: 220 }}><option>Criminal Law Fundamentals</option><option>Constitutional Law Mastery</option></select>
        <select className="form-input" style={{ maxWidth: 150 }}><option>Sort by Progress</option><option>Sort by Last Active</option><option>Sort by Quiz Score</option></select>
        <input className="form-input" style={{ maxWidth: 220 }} placeholder="🔍 Search students..." />
      </div>

      <div className="card" style={{ overflow: 'hidden' }}>
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Lessons Done</th>
              <th>Progress</th>
              <th>Quiz Avg</th>
              <th>Last Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <>
                <tr key={i} style={{ cursor: 'pointer' }} onClick={() => setExpanded(expanded === i ? null : i)}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 12 }}>{s.initials}</div>
                      <span style={{ fontWeight: 600, fontSize: 13.5 }}>{s.name}</span>
                    </div>
                  </td>
                  <td style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.course}</td>
                  <td style={{ fontWeight: 600 }}>{s.done} / {s.total}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="progress-bar" style={{ width: 80 }}><div className="progress-fill" style={{ width: `${s.progress}%` }} /></div>
                      <span style={{ fontSize: 12, fontWeight: 700 }}>{s.progress}%</span>
                    </div>
                  </td>
                  <td>
                    <span style={{ fontWeight: 700, color: s.quizAvg >= 75 ? 'var(--success)' : s.quizAvg >= 50 ? 'var(--warning)' : 'var(--error)' }}>{s.quizAvg}%</span>
                  </td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 13 }}>{s.lastActive}</td>
                  <td><span style={{ color: 'var(--primary)', fontSize: 16 }}>{expanded === i ? '∧' : '∨'}</span></td>
                </tr>
                {expanded === i && (
                  <tr key={`expand-${i}`}>
                    <td colSpan={7} style={{ padding: '0 16px 16px', background: '#fafafa' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, paddingTop: 16 }}>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>📚 Lesson Completion</div>
                          {['Introduction to IPC ✅', 'Section 299–302 ✅', 'Section 320–326 ✅', 'Property Offences ✅', 'Evidence Act ⏳', 'Bail Application 🔒'].map(l => (
                            <div key={l} style={{ fontSize: 12.5, padding: '5px 0', borderBottom: '1px solid var(--border)', color: l.includes('✅') ? 'var(--text-primary)' : l.includes('⏳') ? 'var(--warning)' : 'var(--text-muted)' }}>{l}</div>
                          ))}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>📝 Quiz History</div>
                          {[['Module 1 Quiz', '18/20', '90%'], ['Module 2 Quiz', '16/20', '80%'], ['Property Quiz', '15/20', '75%']].map(([quiz, score, pct]) => (
                            <div key={quiz as string} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, padding: '5px 0', borderBottom: '1px solid var(--border)' }}>
                              <span>{quiz as string}</span>
                              <span style={{ fontWeight: 700 }}>{score as string} ({pct as string})</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>📝 Tutor Notes (Private)</div>
                          <textarea className="form-input" style={{ height: 90, resize: 'none', fontSize: 12.5 }} placeholder="Add a private note about this student..." />
                          <button className="btn-outline" style={{ marginTop: 8, fontSize: 12, padding: '5px 12px' }}>Save Note</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </TutorLayout>
  );
}
