'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

const submissions = [
  { student: 'Arjun Mehta', initials: 'AM', assignment: 'Write a Charge Sheet for a Murder Case', course: 'Criminal Law', submitted: 'Today, 11:42 AM', status: 'Pending', total: 25 },
  { student: 'Sunita Kapoor', initials: 'SK', assignment: 'Draft a Bail Application — Anticipatory Bail', course: 'Criminal Law', submitted: 'Yesterday, 4:18 PM', status: 'Pending', total: 30 },
  { student: 'Vikram Joshi', initials: 'VJ', assignment: 'Write a Charge Sheet for a Murder Case', course: 'Criminal Law', submitted: 'Yesterday, 8:00 AM', status: 'Pending', total: 25 },
  { student: 'Deepa Nair', initials: 'DN', assignment: 'Evidence Analysis — Mock FIR Scenario', course: 'Criminal Law', submitted: 'Mar 27, 3:00 PM', status: 'Pending', total: 20 },
  { student: 'Rahul Sharma', initials: 'RS', assignment: 'Draft a Bail Application — Anticipatory Bail', course: 'Criminal Law', submitted: 'Mar 26, 9:30 AM', status: 'Reviewed', total: 30, marks: 27 },
];

export default function AssignmentsPage() {
  const [expanded, setExpanded] = useState(0);
  return (
    <TutorLayout active="/tutor/assignments" title="Assignment Review" breadcrumb="Home / Assignments">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 20 }}>
        {[['📋','#fff5e6','5','Pending Review'],['✅','#e8faf0','18','Reviewed This Week'],['📊','#ede9fd','84%','Avg Score This Week']].map(([icon, bg, val, label]) => (
          <div key={label as string} className="stat-card">
            <div style={{ width: 44, height: 44, borderRadius: 10, background: bg as string, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{icon as string}</div>
            <div><div style={{ fontSize: 20, fontWeight: 700 }}>{val as string}</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{label as string}</div></div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <select className="form-input" style={{ maxWidth: 180 }}><option>All Courses</option></select>
        <select className="form-input" style={{ maxWidth: 160 }}><option>All Status</option><option>Pending Review</option><option>Reviewed</option></select>
        <input type="date" className="form-input" style={{ maxWidth: 160 }} defaultValue="2025-03-01" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {submissions.map((s, i) => (
          <div key={i} className="card" style={{ overflow: 'hidden', border: expanded === i ? '2px solid var(--primary)' : '1px solid var(--border)' }}>
            <div style={{ padding: '14px 18px', display: 'flex', gap: 12, alignItems: 'center', cursor: 'pointer' }} onClick={() => setExpanded(i === expanded ? -1 : i)}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: s.status === 'Reviewed' ? 'var(--success)' : 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{s.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 3 }}>
                  <span style={{ fontWeight: 700, fontSize: 14 }}>{s.student}</span>
                  <span className={`badge ${s.status === 'Pending' ? 'badge-warning' : 'badge-success'}`}>{s.status === 'Pending' ? 'Pending Review' : 'Reviewed'}</span>
                  {s.status === 'Reviewed' && <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--success)' }}>{s.marks}/{s.total}</span>}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-primary)', marginBottom: 2 }}>{s.assignment}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{s.course} · Submitted {s.submitted}</div>
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: 18 }}>{expanded === i ? '∧' : '∨'}</span>
            </div>

            {expanded === i && (
              <div style={{ borderTop: '1px solid var(--border)', padding: '20px 18px', background: '#fafafa' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>📋 Assignment Brief</div>
                    <div style={{ padding: 14, background: '#fff', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13, lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: 14 }}>
                      Write a formal charge sheet for the following scenario: A is accused of committing murder (Section 302 IPC) against B. Include: jurisdiction, facts, specific IPC sections invoked, and prayer for trial.
                      <br /><br /><strong>Marks: 25 | Rubric:</strong> Structure (8), Legal accuracy (10), Drafting quality (7)
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>📄 Student's Submission</div>
                    <div style={{ padding: 14, background: '#fff', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13, lineHeight: 1.7, maxHeight: 200, overflowY: 'auto', color: 'var(--text-primary)' }}>
                      IN THE HON'BLE COURT OF THE CHIEF JUDICIAL MAGISTRATE<br />
                      DISTRICT: NEW DELHI<br />
                      <br />
                      Charge Sheet No. ___ of 2025<br />
                      State vs. Ram Kumar<br />
                      <br />
                      OFFENCE: Murder under Section 302 IPC<br />
                      <br />
                      The following facts are submitted to this Hon'ble Court for taking cognizance and trial of the accused...
                    </div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>✏️ Your Review</div>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                      <div style={{ flex: 1 }}>
                        <label className="form-label">Marks Awarded</label>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                          <input className="form-input" type="number" style={{ width: 80 }} defaultValue={18} />
                          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>/ {s.total}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Written Feedback</label>
                      <div style={{ border: '1px solid var(--border)', borderRadius: 8, background: '#fff' }}>
                        <div style={{ display: 'flex', gap: 4, padding: '6px 10px', borderBottom: '1px solid var(--border)', background: '#fafafa' }}>
                          {['B', 'I', 'U'].map(b => <button key={b} style={{ padding: '3px 8px', border: '1px solid var(--border)', borderRadius: 4, background: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>{b}</button>)}
                        </div>
                        <textarea className="form-input" style={{ border: 'none', height: 110, resize: 'none' }} defaultValue="Good structure overall. The jurisdictional facts are well-stated. However, the section invoking Section 302 needs to be more precisely linked to the facts. The prayer clause is missing — always include it. Good first attempt!" />
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                      <button className="btn-primary" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>📨 Return to Student</button>
                      <button className="btn-outline" style={{ fontSize: 13 }}>💾 Save Draft</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </TutorLayout>
  );
}
