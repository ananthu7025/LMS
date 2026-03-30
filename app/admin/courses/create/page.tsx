'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function CreateCoursePage() {
  return (
    <AdminLayout active="/admin/courses" title="Create New Course" breadcrumb="Home / Courses / Create">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
        {/* Main form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 18 }}>📋 Basic Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label className="form-label">Course Title *</label>
                <input className="form-input" defaultValue="Criminal Law Fundamentals" />
              </div>
              <div>
                <label className="form-label">Short Description <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(shown on course card)</span></label>
                <input className="form-input" defaultValue="Master the fundamentals of Criminal Law including IPC, CrPC, and landmark cases." />
              </div>
              <div>
                <label className="form-label">Long Description <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(shown on course landing page)</span></label>
                <textarea className="form-input" style={{ height: 110, resize: 'vertical' }} defaultValue="This comprehensive course covers all aspects of Criminal Law as tested in competitive law exams. You will learn the Indian Penal Code, Criminal Procedure Code, and study landmark Supreme Court judgments that shaped criminal jurisprudence in India." />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label className="form-label">Subject Category</label>
                  <select className="form-input"><option>Criminal Law</option><option>Civil Law</option><option>Constitutional Law</option><option>Evidence Law</option><option>Corporate Law</option><option>Family Law</option><option>Contract Law</option><option>Exam Prep</option></select>
                </div>
                <div>
                  <label className="form-label">Course Level</label>
                  <select className="form-input"><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 18 }}>🖼️ Course Thumbnail</h3>
            <div style={{ border: '2px dashed var(--border)', borderRadius: 12, padding: 32, textAlign: 'center', cursor: 'pointer', background: '#fafafa' }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>🖼️</div>
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>Drop image here or <span style={{ color: 'var(--primary)', cursor: 'pointer' }}>browse</span></div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>PNG or JPG · Recommended: 1280×720 · Max 5MB</div>
            </div>
          </div>

          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 18 }}>💰 Pricing</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div className="toggle" />
              <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>Free Course</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label className="form-label">Price (₹)</label>
                <input className="form-input" type="number" defaultValue={4999} />
              </div>
              <div>
                <label className="form-label">Discounted Price (₹) <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(optional)</span></label>
                <input className="form-input" type="number" defaultValue={3499} />
                <div style={{ fontSize: 11, color: 'var(--success)', marginTop: 4 }}>Students see ₹4,999 struck through</div>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 18 }}>👨‍🏫 Tutor Assignment</h3>
            <div style={{ display: 'flex', gap: 14 }}>
              <div style={{ flex: 1, border: '2px solid var(--primary)', borderRadius: 10, padding: '14px 16px', cursor: 'pointer', background: 'var(--primary-light)' }}>
                <div style={{ fontWeight: 600, color: 'var(--primary)', marginBottom: 4 }}>Assign Tutor</div>
                <select className="form-input" style={{ background: '#fff' }}><option>Anil Kumar — Criminal Law</option><option>Priya Nair — Constitutional Law</option><option>Meera Sharma — Family Law</option></select>
              </div>
              <div style={{ width: 180, border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span style={{ fontSize: 22 }}>🎓</span>
                <span style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>No Tutor (Admin manages directly)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Preview & Actions sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>👁️ Preview Card</div>
            <div style={{ border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ height: 90, background: 'linear-gradient(135deg, #7367F022, #7367F044)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>📚</div>
              <div style={{ padding: 12 }}>
                <span className="badge badge-primary" style={{ marginBottom: 6 }}>Criminal Law</span>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Criminal Law Fundamentals</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>👨‍🏫 Anil Kumar</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                  <span style={{ fontSize: 12, textDecoration: 'line-through', color: 'var(--text-muted)' }}>₹4,999</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--primary)' }}>₹3,499</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>🚀 Publish Options</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="/admin/courses/1/curriculum">
                <button className="btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>📋 Next: Build Curriculum →</button>
              </a>
              <button className="btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>💾 Save as Draft</button>
              <button className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>🚀 Publish Course</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
