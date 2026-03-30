'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

export default function UploadPDFPage() {
  return (
    <TutorLayout active="/tutor/content/upload-video" title="Upload PDF Notes" breadcrumb="Home / Upload Content / PDF">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>📄 PDF File</div>
            <div style={{ border: '2px dashed var(--primary)', borderRadius: 12, padding: '32px 20px', textAlign: 'center', cursor: 'pointer', background: 'var(--primary-light)', marginBottom: 14 }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>📄</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary)', marginBottom: 4 }}>Drop PDF here</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>PDF only, max 50MB</div>
            </div>
            {/* Uploaded file shown */}
            <div style={{ display: 'flex', gap: 10, padding: '10px 14px', border: '1px solid var(--success)', borderRadius: 8, background: '#e8faf0', alignItems: 'center' }}>
              <span style={{ fontSize: 22 }}>📄</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>IPC-Section-300-302-Notes.pdf</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>2.4 MB · 18 pages</div>
              </div>
              <span style={{ color: 'var(--success)', fontWeight: 700, fontSize: 13 }}>✓ Ready</span>
            </div>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, marginBottom: 14 }}>📋 Notes Details</div>
            <div style={{ marginBottom: 14 }}><label className="form-label">Notes Title</label><input className="form-input" defaultValue="Section 300–302: Murder — Comprehensive Notes" /></div>
            <div style={{ marginBottom: 14 }}><label className="form-label">Description</label><textarea className="form-input" style={{ height: 70, resize: 'none' }} defaultValue="Detailed notes covering the definition, ingredients, and landmark cases for Sections 300 and 302 of the IPC." /></div>
            <div style={{ marginBottom: 14 }}>
              <label className="form-label">Associated Lesson / Section</label>
              <select className="form-input"><option>Module 2, Lesson 1: Section 299–304 IPC</option><option>Module 1: Introduction</option></select>
            </div>
            <div>
              <label className="form-label">Subject Tags</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
                {['Criminal Law', 'IPC', 'Section 302', 'Murder', 'Evidence'].map(tag => (
                  <span key={tag} style={{ background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 20, padding: '3px 10px', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{tag} ✕</span>
                ))}
              </div>
              <input className="form-input" placeholder="Add a tag..." />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn-outline">💾 Save Draft</button>
            <button className="btn-primary">🚀 Publish Notes</button>
          </div>
        </div>

        {/* Preview panel */}
        <div className="card" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fafafa' }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>👁️ PDF Preview</div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button className="btn-outline" style={{ fontSize: 12, padding: '4px 10px' }}>⊖ Zoom Out</button>
              <span style={{ alignSelf: 'center', fontSize: 12, color: 'var(--text-muted)' }}>Page 1 of 18</span>
              <button className="btn-outline" style={{ fontSize: 12, padding: '4px 10px' }}>⊕ Zoom In</button>
            </div>
          </div>
          <div style={{ padding: 16, display: 'flex', gap: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} style={{ width: 50, height: 70, borderRadius: 4, border: i === 0 ? '2px solid var(--primary)' : '1px solid var(--border)', background: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: 'var(--text-muted)', cursor: 'pointer' }}>{i + 1}</div>
              ))}
            </div>
            <div style={{ flex: 1, border: '1px solid var(--border)', borderRadius: 8, background: '#fff', padding: 20, minHeight: 400, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ height: 12, background: '#e8e8e8', borderRadius: 4, width: '60%' }} />
              <div style={{ height: 8, background: '#f0f0f0', borderRadius: 4 }} />
              <div style={{ height: 8, background: '#f0f0f0', borderRadius: 4, width: '85%' }} />
              <div style={{ height: 8, background: '#f0f0f0', borderRadius: 4, width: '90%' }} />
              <div style={{ height: 8, background: 'rgba(115,103,240,0.3)', borderRadius: 4, width: '75%' }} />
              <div style={{ height: 8, background: '#f0f0f0', borderRadius: 4 }} />
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} style={{ height: 7, background: '#f3f3f3', borderRadius: 3, width: `${60 + Math.random() * 30}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}
