'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const classes = [
  { course: 'Criminal Law Fundamentals', topic: 'Section 302 & Murder — Case Studies', tutor: 'Anil Kumar', date: 'Apr 1, 2025', time: '10:00 AM', duration: '90 min', students: 124, link: 'zoom.us/j/123456', status: 'Upcoming' },
  { course: 'Constitutional Law', topic: 'Fundamental Rights — Art. 14 to 21', tutor: 'Priya Nair', date: 'Apr 2, 2025', time: '02:00 PM', duration: '60 min', students: 98, link: 'meet.google.com/abc', status: 'Upcoming' },
  { course: 'CLAT Preparation', topic: 'Mock Test Review: March Batch', tutor: 'Priya Nair', date: 'Apr 3, 2025', time: '05:30 PM', duration: '120 min', students: 201, link: 'zoom.us/j/654321', status: 'Upcoming' },
  { course: 'Criminal Law Fundamentals', topic: 'Evidence Act: Sections 45–51', tutor: 'Anil Kumar', date: 'Mar 28, 2025', time: '10:00 AM', duration: '90 min', students: 108, link: '—', status: 'Completed' },
  { course: 'Constitutional Law', topic: 'Directive Principles & Fundamental Duties', tutor: 'Priya Nair', date: 'Mar 25, 2025', time: '02:00 PM', duration: '60 min', students: 91, link: '—', status: 'Completed' },
];

export default function LiveClassesPage() {
  const [view, setView] = useState<'calendar'|'list'>('list');
  return (
    <AdminLayout active="/admin/live-classes" title="Live Classes" breadcrumb="Home / Live Classes">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
          <button onClick={() => setView('calendar')} style={{ padding: '8px 18px', border: 'none', background: view === 'calendar' ? 'var(--primary)' : '#fff', color: view === 'calendar' ? '#fff' : 'var(--text-muted)', cursor: 'pointer', fontSize: 13, fontWeight: 500 }}>📅 Calendar</button>
          <button onClick={() => setView('list')} style={{ padding: '8px 18px', border: 'none', background: view === 'list' ? 'var(--primary)' : '#fff', color: view === 'list' ? '#fff' : 'var(--text-muted)', cursor: 'pointer', fontSize: 13, fontWeight: 500 }}>☰ List</button>
        </div>
        <a href="/admin/live-classes/schedule"><button className="btn-primary">＋ Schedule Class</button></a>
      </div>

      {view === 'calendar' && (
        <div className="card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <h3 style={{ fontWeight: 700 }}>April 2025</h3>
            <div style={{ display: 'flex', gap: 6 }}>
              <button className="btn-outline" style={{ padding: '5px 12px', fontSize: 12 }}>← Prev</button>
              <button className="btn-outline" style={{ padding: '5px 12px', fontSize: 12 }}>Next →</button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d} style={{ textAlign: 'center', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', padding: '8px 0' }}>{d}</div>)}
            {Array.from({ length: 2 }).map((_, i) => <div key={`empty-${i}`} style={{ height: 70, borderRadius: 6, background: '#fafafa' }} />)}
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} style={{ height: 70, borderRadius: 6, border: '1px solid var(--border)', padding: 6, background: [1, 2, 3].includes(i) ? 'var(--primary-light)' : '#fff' }}>
                <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 4, color: [1, 2, 3].includes(i) ? 'var(--primary)' : 'var(--text-muted)' }}>{i + 1}</div>
                {i === 1 && <div style={{ fontSize: 10, background: 'var(--primary)', color: '#fff', borderRadius: 4, padding: '2px 4px', marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>10 AM Criminal</div>}
                {i === 2 && <div style={{ fontSize: 10, background: '#00CFE8', color: '#fff', borderRadius: 4, padding: '2px 4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>2 PM Constitutional</div>}
                {i === 3 && <div style={{ fontSize: 10, background: '#28C76F', color: '#fff', borderRadius: 4, padding: '2px 4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>5:30 PM CLAT</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {view === 'list' && (
        <div className="card" style={{ overflow: 'hidden' }}>
          <table>
            <thead><tr><th>Course & Topic</th><th>Tutor</th><th>Date & Time</th><th>Duration</th><th>Students</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {classes.map((c, i) => (
                <tr key={i}>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: 13.5 }}>{c.topic}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{c.course}</div>
                  </td>
                  <td style={{ fontSize: 13 }}>{c.tutor}</td>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: 13 }}>{c.date}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{c.time}</div>
                  </td>
                  <td>{c.duration}</td>
                  <td style={{ fontWeight: 600 }}>{c.students}</td>
                  <td><span className={`badge ${c.status === 'Upcoming' ? 'badge-info' : 'badge-secondary'}`}>{c.status}</span></td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {c.status === 'Upcoming' && <button className="btn-primary" style={{ fontSize: 12, padding: '5px 12px' }}>Join</button>}
                      <button className="btn-outline" style={{ fontSize: 12, padding: '5px 10px' }}>Edit</button>
                      {c.status === 'Upcoming' && <button style={{ background: '#fde8e8', border: 'none', color: 'var(--error)', borderRadius: 6, padding: '5px 10px', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}>Cancel</button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
