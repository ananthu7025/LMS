'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

const curriculum = [
  { title: 'Module 1: Introduction to Criminal Law', lessons: [
    { type: '🎥', title: 'Overview of Criminal Law in India', duration: '18 min', published: true },
    { type: '📄', title: 'IPC Structure and History — PDF Notes', duration: '12 pages', published: true },
    { type: '📝', title: 'Quiz: Basics of IPC', duration: '10 Qs', published: true },
  ]},
  { title: 'Module 2: Offences Against the Person', lessons: [
    { type: '🎥', title: 'Section 299–304: Culpable Homicide & Murder', duration: '42 min', published: true },
    { type: '🎥', title: 'Section 320–326: Grievous Hurt & Assault', duration: '28 min', published: true },
    { type: '🔴', title: 'Live Class: Case Study — State v. Ram Chandra', duration: 'Apr 2 @ 10 AM', published: true },
    { type: '📋', title: 'Assignment: Write a charge sheet for a given scenario', duration: '25 marks', published: false },
  ]},
  { title: 'Module 3: Property Offences', lessons: [
    { type: '🎥', title: 'Theft, Robbery & Dacoity: Sections 378–402', duration: '35 min', published: true },
    { type: '🎥', title: 'Cheating & Criminal Breach of Trust', duration: '30 min', published: false },
    { type: '📝', title: 'Quiz: Property Offences MCQ (20 questions)', duration: '20 Qs', published: true },
  ]},
];

export default function CurriculumBuilderPage() {
  return (
    <AdminLayout active="/admin/courses" title="Curriculum Builder" breadcrumb="Home / Courses / Criminal Law Fundamentals / Curriculum">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <a href="/admin/courses/1"><button className="btn-outline" style={{ fontSize: 13 }}>← Back to Course</button></a>
          <button className="btn-outline" style={{ fontSize: 13 }}>👁️ Preview as Student</button>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="btn-outline">💾 Save Draft</button>
          <button className="btn-primary">🚀 Publish Course</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
        <div>
          {curriculum.map((section, si) => (
            <div key={si} className="card" style={{ marginBottom: 16, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', background: '#fafafa', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--text-muted)', cursor: 'grab', fontSize: 16 }}>⠿</span>
                <input style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 14, fontWeight: 700, color: 'var(--text-primary)' }} defaultValue={section.title} />
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{section.lessons.length} lessons</span>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 16 }}>∨</button>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--error)', fontSize: 14 }}>🗑️</button>
              </div>
              {section.lessons.map((lesson, li) => (
                <div key={li} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 18px', borderBottom: '1px solid var(--border)', background: '#fff' }}>
                  <span style={{ color: 'var(--text-muted)', cursor: 'grab', fontSize: 14 }}>⠿</span>
                  <span style={{ fontSize: 16 }}>{lesson.type}</span>
                  <input style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 13.5, color: 'var(--text-primary)' }} defaultValue={lesson.title} />
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', minWidth: 80, textAlign: 'right' }}>{lesson.duration}</span>
                  <div className={`toggle ${lesson.published ? '' : 'off'}`} style={{ transform: 'scale(0.8)' }} />
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--error)', fontSize: 14 }}>🗑️</button>
                </div>
              ))}
              <div style={{ padding: '10px 18px' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <button className="btn-outline" style={{ fontSize: 12, padding: '6px 14px', color: 'var(--primary)', borderColor: 'var(--primary)' }}>＋ Add Lesson ∨</button>
                  <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 6, zIndex: 10, minWidth: 160, marginTop: 4, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                    {[['🎥', 'Video Lesson'], ['📄', 'PDF Notes'], ['🔴', 'Live Class'], ['📝', 'Quiz'], ['📋', 'Assignment']].map(([icon, label]) => (
                      <div key={label as string} style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: 6, fontSize: 13 }} onMouseOver={e => (e.currentTarget.style.background = '#f3f3f5')} onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
                        {icon as string} {label as string}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className="btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', borderStyle: 'dashed' }}>
            ＋ Add New Section / Module
          </button>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>📊 Course Summary</div>
            {[['Modules', '3'], ['Total Lessons', '10'], ['Video Lessons', '6'], ['Quizzes', '2'], ['Assignments', '1'], ['Live Classes', '1'], ['Published', '8 / 10']].map(([k, v]) => (
              <div key={k as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid var(--border)', fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>{k as string}</span>
                <span style={{ fontWeight: 600 }}>{v as string}</span>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>💡 Tips</div>
            <div style={{ fontSize: 12.5, color: 'var(--text-muted)', lineHeight: 1.7 }}>
              • Drag lessons to reorder<br/>
              • Toggle to publish/unpublish<br/>
              • Add a quiz after each module<br/>
              • First lesson should be free preview
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
