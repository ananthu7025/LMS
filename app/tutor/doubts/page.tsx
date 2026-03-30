'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const doubts = [
  { student: 'Arjun Mehta', initials: 'AM', course: 'Criminal Law', lesson: 'Section 300 IPC', question: 'What is the key distinction between culpable homicide under Section 299 and murder under Section 300? The elements seem overlapping to me.', time: '2 hrs ago', status: 'Unanswered' },
  { student: 'Sunita Kapoor', initials: 'SK', course: 'Criminal Law', lesson: 'Evidence Act — Sec 45', question: 'Can an expert witness opinion be given by someone who is not officially qualified but has practical experience? What does Section 45 say?', time: '4 hrs ago', status: 'Unanswered' },
  { student: 'Deepa Nair', initials: 'DN', course: 'Criminal Law', lesson: 'Bail Applications', question: 'Is there a difference between regular bail and anticipatory bail? Which court has jurisdiction for anticipatory bail?', time: '6 hrs ago', status: 'Unanswered' },
  { student: 'Vikram Joshi', initials: 'VJ', course: 'Criminal Law', lesson: 'Section 420 IPC', question: 'How does cheating under Section 420 differ from criminal breach of trust under Section 405?', time: '1 day ago', status: 'Answered' },
  { student: 'Pooja Verma', initials: 'PV', course: 'Criminal Law', lesson: 'FIR & Police Powers', question: 'What are the legal consequences of a false FIR? Can the complainant be held liable?', time: '2 days ago', status: 'Answered' },
];

export default function DoubtsPage() {
  const [expanded, setExpanded] = useState(0);
  return (
    <TutorLayout active="/tutor/doubts" title="Student Doubts" breadcrumb="Home / Student Doubts">
      {/* Stats bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 20 }}>
        {[['❓','#fff5e6','3','Pending Doubts'],['✅','#e8faf0','48','Answered This Week'],['⏱️','#ede9fd','2.4 hrs','Avg Response Time']].map(([icon, bg, val, label]) => (
          <div key={label as string} className="stat-card">
            <div style={{ width: 44, height: 44, borderRadius: 10, background: bg as string, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{icon as string}</div>
            <div><div style={{ fontSize: 20, fontWeight: 700 }}>{val as string}</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{label as string}</div></div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <select className="form-input" style={{ maxWidth: 160 }}><option>All Courses</option><option>Criminal Law</option><option>Constitutional Law</option></select>
        <select className="form-input" style={{ maxWidth: 180 }}><option>All Lessons</option></select>
        <select className="form-input" style={{ maxWidth: 140 }}><option>All Status</option><option>Unanswered</option><option>Answered</option></select>
        <input className="form-input" style={{ maxWidth: 200 }} placeholder="🔍 Search doubts..." />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {doubts.map((d, i) => (
          <div key={i} className="card" style={{ overflow: 'hidden', border: expanded === i ? '2px solid var(--primary)' : '1px solid var(--border)' }}>
            {/* Doubt header */}
            <div style={{ padding: '14px 18px', cursor: 'pointer', display: 'flex', gap: 12, alignItems: 'flex-start' }} onClick={() => setExpanded(i === expanded ? -1 : i)}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{d.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{d.student}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', background: '#f3f3f5', padding: '2px 8px', borderRadius: 20 }}>{d.course} › {d.lesson}</span>
                  <span className={`badge ${d.status === 'Unanswered' ? 'badge-warning' : 'badge-success'}`} style={{ marginLeft: 'auto' }}>{d.status}</span>
                </div>
                <p style={{ fontSize: 13.5, color: 'var(--text-primary)', lineHeight: 1.5, margin: 0 }}>{d.question}</p>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 6 }}>{d.time}</div>
              </div>
            </div>

            {/* Reply panel */}
            {expanded === i && (
              <div style={{ borderTop: '1px solid var(--border)', padding: '16px 18px', background: '#fafafa' }}>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 10 }}>✏️ Your Reply</div>
                <div style={{ border: '1px solid var(--border)', borderRadius: 8, background: '#fff' }}>
                  <div style={{ display: 'flex', gap: 4, padding: '8px 10px', borderBottom: '1px solid var(--border)', background: '#fafafa' }}>
                    {['B', 'I', 'U', '🔗', '📷'].map(btn => <button key={btn} style={{ padding: '3px 8px', border: '1px solid var(--border)', borderRadius: 4, background: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>{btn}</button>)}
                  </div>
                  <textarea className="form-input" style={{ border: 'none', borderRadius: '0 0 8px 8px', height: 100, resize: 'vertical' }} placeholder="Type your answer here... You can reference specific IPC sections or case laws." />
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                  <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>📨 Submit Reply</button>
                  <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--success)', borderColor: 'var(--success)' }}>✅ Mark Resolved</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </TutorLayout>
  );
}
