'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

const curriculum = [
  { title: 'Module 1: Introduction to Criminal Law', lessons: [
    { type: '🎥', title: 'Overview of Criminal Law in India', duration: '18 min', published: true },
    { type: '📄', title: 'IPC Structure and History — PDF Notes', duration: '12 pages', published: true },
    { type: '📝', title: 'Quiz: Basics of IPC', duration: '10 Qs', published: true },
  ]},
  { title: 'Module 2: Offences Against the Person', lessons: [
    { type: '🎥', title: 'Section 299–304: Culpable Homicide & Murder', duration: '42 min', published: true },
    { type: '🎥', title: 'Section 320–326: Grievous Hurt & Assault', duration: '28 min', published: true },
    { type: '🔴', title: 'Live Class: State v. Ram Chandra Case Study', duration: 'Apr 1 @ 10 AM', published: true },
    { type: '📋', title: 'Assignment: Write a Charge Sheet', duration: '25 marks', published: false },
  ]},
  { title: 'Module 3: Property Offences', lessons: [
    { type: '🎥', title: 'Theft, Robbery & Dacoity: Sections 378–402', duration: '35 min', published: true },
    { type: '🎥', title: 'Cheating & Criminal Breach of Trust', duration: '30 min', published: false },
    { type: '📝', title: 'Quiz: Property Offences (20 questions)', duration: '20 Qs', published: true },
  ]},
];

export default function TutorCourseView() {
  return (
    <TutorLayout active="/tutor/courses/1" title="Criminal Law Fundamentals" breadcrumb="Home / My Courses / Criminal Law Fundamentals">
      {/* Course header stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 20 }}>
        {[['👥','#ede9fd','342','Students Enrolled'],['✅','#e8faf0','68%','Completion Rate'],['📚','#e0f9fc','10','Total Lessons'],['📹','#fff5e6','2','Upcoming Classes']].map(([icon, bg, val, label]) => (
          <div key={label as string} className="stat-card">
            <div style={{ width: 44, height: 44, borderRadius: 10, background: bg as string, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{icon as string}</div>
            <div><div style={{ fontSize: 20, fontWeight: 700 }}>{val as string}</div><div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{label as string}</div></div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16, alignItems: 'center' }}>
        <h2 style={{ fontWeight: 700, fontSize: 16 }}>📋 Course Curriculum</h2>
        <div style={{ display: 'flex', gap: 10 }}>
          <a href="/tutor/content/upload-video"><button className="btn-outline" style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>🎥 Upload Video</button></a>
          <button className="btn-primary" style={{ fontSize: 13 }}>＋ Add Section</button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {curriculum.map((section, si) => (
          <div key={si} className="card" style={{ overflow: 'hidden' }}>
            {/* Section header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', background: '#fafafa', borderBottom: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--text-muted)', cursor: 'grab', fontSize: 16 }}>⠿</span>
              <span style={{ flex: 1, fontWeight: 700, fontSize: 14 }}>{section.title}</span>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{section.lessons.length} lessons</span>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 14 }}>∨</button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--error)', fontSize: 14 }}>🗑️</button>
            </div>
            {/* Lessons */}
            {section.lessons.map((lesson, li) => (
              <div key={li} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 18px', borderBottom: li < section.lessons.length - 1 ? '1px solid var(--border)' : 'none', background: '#fff' }}>
                <span style={{ color: 'var(--text-muted)', cursor: 'grab', fontSize: 13 }}>⠿</span>
                <span style={{ fontSize: 16 }}>{lesson.type}</span>
                <span style={{ flex: 1, fontSize: 13.5 }}>{lesson.title}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', minWidth: 90, textAlign: 'right' }}>{lesson.duration}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div className={`toggle ${lesson.published ? '' : 'off'}`} style={{ transform: 'scale(0.75)' }} />
                  <span style={{ fontSize: 11, color: lesson.published ? 'var(--success)' : 'var(--text-muted)' }}>{lesson.published ? 'Published' : 'Draft'}</span>
                </div>
                <div style={{ display: 'flex', gap: 4 }}>
                  <button className="btn-outline" style={{ fontSize: 11, padding: '4px 8px' }}>Edit</button>
                  <button style={{ background: '#fde8e8', border: 'none', color: 'var(--error)', borderRadius: 6, padding: '4px 8px', fontSize: 11, cursor: 'pointer' }}>🗑️</button>
                </div>
              </div>
            ))}
            {/* Add Lesson */}
            <div style={{ padding: '10px 18px', background: '#fafafa' }}>
              <button className="btn-outline" style={{ fontSize: 12, padding: '6px 14px', color: 'var(--primary)', borderColor: 'var(--primary)' }}>＋ Add Lesson ∨</button>
            </div>
          </div>
        ))}
      </div>
    </TutorLayout>
  );
}
