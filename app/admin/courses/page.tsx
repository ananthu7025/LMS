'use client';
import { useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';

const courses = [
  { title: 'Criminal Law Fundamentals', category: 'Criminal Law', students: 342, tutor: 'Anil Kumar', status: 'Published', revenue: '₹68,400', color: '#7367F0' },
  { title: 'Constitutional Law Mastery', category: 'Constitutional Law', students: 218, tutor: 'Admin Direct', status: 'Published', revenue: '₹43,600', color: '#00CFE8' },
  { title: 'CLAT 2025 Preparation', category: 'Exam Prep', students: 290, tutor: 'Priya Nair', status: 'Published', revenue: '₹52,200', color: '#28C76F' },
  { title: 'Evidence Act Deep Dive', category: 'Evidence Law', students: 124, tutor: 'Anil Kumar', status: 'Published', revenue: '₹24,800', color: '#FF9F43' },
  { title: 'Contract Law Basics', category: 'Civil Law', students: 89, tutor: 'Admin Direct', status: 'Draft', revenue: '—', color: '#EA5455' },
  { title: 'Family Law & Matrimonial Disputes', category: 'Family Law', students: 0, tutor: 'Meera Sharma', status: 'Draft', revenue: '—', color: '#667085' },
];

const statusStyle: Record<string, string> = { Published: 'badge-success', Draft: 'badge-secondary', Archived: 'badge-warning' };

export default function CoursesPage() {
  const [view, setView] = useState<'card' | 'table'>('card');
  return (
    <AdminLayout active="/admin/courses" title="Courses" breadcrumb="Home / Courses">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <input className="form-input" style={{ maxWidth: 240 }} placeholder="🔍 Search courses..." />
          <select className="form-input" style={{ maxWidth: 140 }}><option>All Status</option><option>Published</option><option>Draft</option><option>Archived</option></select>
          <select className="form-input" style={{ maxWidth: 160 }}><option>All Subjects</option><option>Criminal Law</option><option>Civil Law</option><option>Constitutional Law</option></select>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ display: 'flex', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
            <button onClick={() => setView('card')} style={{ padding: '7px 14px', border: 'none', background: view === 'card' ? 'var(--primary)' : '#fff', color: view === 'card' ? '#fff' : 'var(--text-muted)', cursor: 'pointer', fontSize: 14 }}>⊞</button>
            <button onClick={() => setView('table')} style={{ padding: '7px 14px', border: 'none', background: view === 'table' ? 'var(--primary)' : '#fff', color: view === 'table' ? '#fff' : 'var(--text-muted)', cursor: 'pointer', fontSize: 14 }}>☰</button>
          </div>
          <a href="/admin/courses/create"><button className="btn-primary">＋ Create New Course</button></a>
        </div>
      </div>

      {view === 'card' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {courses.map(c => (
            <div key={c.title} className="card" style={{ overflow: 'hidden' }}>
              <div style={{ height: 120, background: `linear-gradient(135deg, ${c.color}22, ${c.color}44)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, borderBottom: '1px solid var(--border)' }}>📚</div>
              <div style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span className="badge badge-primary" style={{ fontSize: 11 }}>{c.category}</span>
                  <span className={`badge ${statusStyle[c.status]}`}>{c.status}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 6, lineHeight: 1.3 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 10 }}>
                  👨‍🏫 {c.tutor} · 👥 {c.students} students · 💰 {c.revenue}
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <a href="/admin/courses/1"><button className="btn-outline" style={{ fontSize: 12, padding: '5px 10px' }}>✏️ Edit</button></a>
                  <button className="btn-outline" style={{ fontSize: 12, padding: '5px 10px' }}>👥 Students</button>
                  <button className="btn-outline" style={{ fontSize: 12, padding: '5px 10px' }}>⋯</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card" style={{ overflow: 'hidden' }}>
          <table>
            <thead><tr><th>Course</th><th>Category</th><th>Students</th><th>Tutor</th><th>Revenue</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              {courses.map(c => (
                <tr key={c.title}>
                  <td style={{ fontWeight: 600 }}>{c.title}</td>
                  <td><span className="badge badge-primary">{c.category}</span></td>
                  <td>{c.students}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{c.tutor}</td>
                  <td style={{ fontWeight: 700 }}>{c.revenue}</td>
                  <td><span className={`badge ${statusStyle[c.status]}`}>{c.status}</span></td>
                  <td><div style={{ display: 'flex', gap: 6 }}>
                    <a href="/admin/courses/1"><button className="btn-outline" style={{ fontSize: 12, padding: '5px 10px' }}>Edit</button></a>
                    <button className="btn-outline" style={{ fontSize: 12, padding: '5px 10px' }}>Archive</button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
