'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

export default function UploadVideoPage() {
  return (
    <TutorLayout active="/tutor/content/upload-video" title="Upload Video Lesson" breadcrumb="Home / Upload Content / Video">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Upload zone + progress */}
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>🎥 Video File</h3>
            {/* Upload zone */}
            <div style={{ border: '2px dashed var(--primary)', borderRadius: 12, padding: '40px 24px', textAlign: 'center', cursor: 'pointer', background: 'var(--primary-light)', marginBottom: 16 }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>📁</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--primary)', marginBottom: 4 }}>Drop your video file here</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 14 }}>or click to browse — MP4, MOV, AVI (max 4GB)</div>
              <button className="btn-primary" style={{ fontSize: 13 }}>Browse Files</button>
            </div>

            {/* Upload Progress (in progress state) */}
            <div style={{ border: '1px solid var(--border)', borderRadius: 10, padding: 16 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: '#f3f3f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🎬</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 4 }}>Section-302-Murder-IPC.mp4</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>847 MB · Uploading...</div>
                  <div className="progress-bar" style={{ marginBottom: 6 }}><div className="progress-fill" style={{ width: '73%' }} /></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 600 }}>73% uploaded</span>
                    <span style={{ color: 'var(--text-muted)' }}>4.2 MB/s · ~2 min left</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 12, padding: '8px 12px', background: '#fff5e6', borderRadius: 8, fontSize: 12, color: 'var(--warning)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span>⏳</span> Transcoding video after upload completes — this may take a few minutes
              </div>
            </div>
          </div>

          {/* Lesson Details */}
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 16 }}>📋 Lesson Details</h3>
            <div style={{ marginBottom: 16 }}>
              <label className="form-label">Lesson Title *</label>
              <input className="form-input" defaultValue="Section 302 & Murder — Deep Dive Analysis" />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label className="form-label">Description</label>
              <div style={{ border: '1px solid var(--border)', borderRadius: 8 }}>
                <div style={{ display: 'flex', gap: 4, padding: '8px 10px', borderBottom: '1px solid var(--border)', background: '#fafafa' }}>
                  {['B', 'I', 'U', '≡', '⊞'].map(b => <button key={b} style={{ padding: '3px 8px', border: '1px solid var(--border)', borderRadius: 4, background: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>{b}</button>)}
                </div>
                <textarea className="form-input" style={{ border: 'none', borderRadius: '0 0 8px 8px', height: 90, resize: 'vertical' }} defaultValue="In this lesson, we analyze Section 302 of IPC (Murder) in detail — its ingredients, punishment, and how courts distinguish it from culpable homicide." />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label className="form-label">📎 Attach PDF Notes (Optional)</label>
              <div style={{ border: '1px dashed var(--border)', borderRadius: 8, padding: '14px', textAlign: 'center', cursor: 'pointer', background: '#fafafa', fontSize: 13, color: 'var(--text-muted)' }}>
                Drop PDF here or <span style={{ color: 'var(--primary)' }}>browse</span>
              </div>
            </div>
            <div>
              <label className="form-label">🔗 Additional Resources</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <input className="form-input" placeholder="Resource title" defaultValue="Supreme Court judgment — Bachan Singh v. State of Punjab" />
                <input className="form-input" placeholder="URL or file" />
                <button className="btn-outline" style={{ fontSize: 12, alignSelf: 'flex-start' }}>＋ Add Resource</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>📊 Lesson Info</div>
            {[['Course', 'Criminal Law Fundamentals'], ['Module', 'Module 2: Offences Against Person'], ['Estimated Duration', '~42 min (auto)'], ['File Size', '847 MB']].map(([k, v]) => (
              <div key={k as string} style={{ display: 'flex', flexDirection: 'column', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{k as string}</span>
                <span style={{ fontSize: 13, fontWeight: 500, marginTop: 2 }}>{v as string}</span>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>🚀 Publish</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Publish immediately</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Visible to students after upload</div>
              </div>
              <div className="toggle" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button className="btn-outline" style={{ width: '100%' }}>💾 Save as Draft</button>
              <button className="btn-primary" style={{ width: '100%' }}>🚀 Upload & Publish</button>
            </div>
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}
