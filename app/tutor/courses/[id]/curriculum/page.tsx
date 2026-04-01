'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';

/* ── types ──────────────────────────────────────────────────────── */
type Lesson = { type: string; title: string; duration: string; published: boolean };
type Module = { id: string; open: boolean; title: string; lessons: Lesson[] };
type QuizQuestion = { text: string; type: 'mcq' | 'tf' | 'short'; options: string[]; correct: number };
type ModalType =
  | 'addModule' | 'editModule'
  | 'addLesson' | 'editLesson' | 'previewLesson'
  | 'uploadVideo' | 'addQuiz' | 'scheduleLive' | 'addAssignment' | 'uploadPdf'
  | null;

/* ── constants ──────────────────────────────────────────────────── */
const TYPE_COLOR: Record<string, string> = {
  'tabler-video': 'primary', 'tabler-file-text': 'info',
  'tabler-file-analytics': 'warning', 'tabler-broadcast': 'success', 'tabler-file-report': 'danger',
};
const TYPE_LABEL: Record<string, string> = {
  'tabler-video': 'Video', 'tabler-file-text': 'PDF',
  'tabler-file-analytics': 'Quiz', 'tabler-broadcast': 'Live Class', 'tabler-file-report': 'Assignment',
};

const INIT: Module[] = [
  { id: 'mod1', open: true,  title: 'Module 1: Introduction to Criminal Law', lessons: [
    { type: 'tabler-video',          title: 'Overview of Criminal Law in India',       duration: '18 min',        published: true  },
    { type: 'tabler-file-text',      title: 'IPC Structure and History — PDF Notes',   duration: '12 pages',      published: true  },
    { type: 'tabler-file-analytics', title: 'Quiz: Basics of IPC',                     duration: '10 Qs',         published: true  },
  ]},
  { id: 'mod2', open: true,  title: 'Module 2: Offences Against the Person', lessons: [
    { type: 'tabler-video',       title: 'Sec 299–304: Culpable Homicide & Murder', duration: '42 min',        published: true  },
    { type: 'tabler-video',       title: 'Sec 320–326: Grievous Hurt & Assault',    duration: '28 min',        published: true  },
    { type: 'tabler-broadcast',   title: 'Live Class: State v. Ram Chandra',        duration: 'Apr 1 @ 10 AM', published: true  },
    { type: 'tabler-file-report', title: 'Assignment: Write a Charge Sheet',        duration: '25 marks',      published: false },
  ]},
  { id: 'mod3', open: false, title: 'Module 3: Property Offences', lessons: [
    { type: 'tabler-video',          title: 'Theft, Robbery & Dacoity: Sec 378–402', duration: '35 min', published: true  },
    { type: 'tabler-video',          title: 'Cheating & Criminal Breach of Trust',   duration: '30 min', published: false },
    { type: 'tabler-file-analytics', title: 'Quiz: Property Offences (20 Qs)',       duration: '20 Qs',  published: true  },
  ]},
];

/* ── helpers ────────────────────────────────────────────────────── */
let nextId = 4;
const uid = () => `mod${nextId++}`;

export default function TutorCurriculumPage() {
  const [modules, setModules]     = useState<Module[]>(INIT);
  const [modal, setModal]         = useState<ModalType>(null);
  const [targetMod, setTargetMod] = useState<string>('');
  const [targetLi, setTargetLi]   = useState<number>(-1);
  const [toast, setToast]         = useState('');

  /* form state */
  const [fModTitle,  setFModTitle]  = useState('');
  const [fTitle,     setFTitle]     = useState('');
  const [fType,      setFType]      = useState('tabler-video');
  const [fDuration,  setFDuration]  = useState('');
  const [fPublished, setFPublished] = useState(true);

  /* quiz builder state */
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [quizPassScore,  setQuizPassScore]  = useState(60);
  const [quizTimeLimit,  setQuizTimeLimit]  = useState(30);

  const newQuestion = (): QuizQuestion => ({ text: '', type: 'mcq', options: ['', '', '', ''], correct: 0 });
  const addQuizQuestion    = () => setQuizQuestions(qs => [...qs, newQuestion()]);
  const removeQuizQuestion = (qi: number) => setQuizQuestions(qs => qs.filter((_, i) => i !== qi));
  const updateQuizQuestion = (qi: number, field: string, val: any) =>
    setQuizQuestions(qs => qs.map((q, i) => i === qi ? { ...q, [field]: val } : q));
  const updateQuizOption = (qi: number, oi: number, val: string) =>
    setQuizQuestions(qs => qs.map((q, i) => i === qi
      ? { ...q, options: q.options.map((o, j) => j === oi ? val : o) } : q));

  /* derived */
  const totalLessons   = modules.reduce((a, m) => a + m.lessons.length, 0);
  const publishedCount = modules.reduce((a, m) => a + m.lessons.filter(l => l.published).length, 0);
  const draftCount     = totalLessons - publishedCount;
  const targetLesson   = targetMod ? modules.find(m => m.id === targetMod)?.lessons[targetLi] : null;

  /* ── actions ──────────────────────────────────────────────────── */
  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 3000); };
  const close = () => setModal(null);

  const toggleModule  = (id: string) => setModules(ms => ms.map(m => m.id === id ? { ...m, open: !m.open } : m));
  const togglePublish = (mid: string, li: number) =>
    setModules(ms => ms.map(m => m.id === mid
      ? { ...m, lessons: m.lessons.map((l, i) => i === li ? { ...l, published: !l.published } : l) } : m));

  const deleteModule  = (id: string) => { setModules(ms => ms.filter(m => m.id !== id)); showToast('Module deleted.'); };
  const deleteLesson  = (mid: string, li: number) => {
    setModules(ms => ms.map(m => m.id === mid ? { ...m, lessons: m.lessons.filter((_, i) => i !== li) } : m));
    showToast('Lesson deleted.');
  };
  const duplicateLesson = (mid: string, li: number) => {
    setModules(ms => ms.map(m => {
      if (m.id !== mid) return m;
      const copy = { ...m.lessons[li], title: m.lessons[li].title + ' (Copy)' };
      const lessons = [...m.lessons.slice(0, li + 1), copy, ...m.lessons.slice(li + 1)];
      return { ...m, lessons };
    }));
    showToast('Lesson duplicated.');
  };
  const publishAll   = () => { setModules(ms => ms.map(m => ({ ...m, lessons: m.lessons.map(l => ({ ...l, published: true  })) }))); showToast('All lessons published.'); };
  const unpublishAll = () => { setModules(ms => ms.map(m => ({ ...m, lessons: m.lessons.map(l => ({ ...l, published: false })) }))); showToast('All lessons unpublished.'); };

  const submitAddModule = () => {
    if (!fModTitle.trim()) return;
    setModules(ms => [...ms, { id: uid(), open: true, title: fModTitle.trim(), lessons: [] }]);
    setFModTitle(''); close(); showToast('Module added.');
  };
  const submitEditModule = () => {
    if (!fModTitle.trim()) return;
    setModules(ms => ms.map(m => m.id === targetMod ? { ...m, title: fModTitle.trim() } : m));
    setFModTitle(''); close(); showToast('Module updated.');
  };
  const submitAddLesson = () => {
    if (!fTitle.trim()) return;
    const autoDuration = fType === 'tabler-file-analytics' && quizQuestions.length > 0
      ? `${quizQuestions.length} Qs` : fDuration.trim() || '—';
    const lesson: Lesson = { type: fType, title: fTitle.trim(), duration: autoDuration, published: fPublished };
    setModules(ms => ms.map(m => m.id === targetMod ? { ...m, lessons: [...m.lessons, lesson] } : m));
    setFTitle(''); setFDuration(''); setFPublished(true); setQuizQuestions([]); close(); showToast('Lesson added.');
  };
  const submitEditLesson = () => {
    if (!fTitle.trim()) return;
    setModules(ms => ms.map(m => m.id === targetMod
      ? { ...m, lessons: m.lessons.map((l, i) => i === targetLi ? { ...l, title: fTitle.trim(), type: fType, duration: fDuration || l.duration, published: fPublished } : l) }
      : m));
    close(); showToast('Lesson updated.');
  };

  const openEditModule = (mod: Module) => {
    setTargetMod(mod.id); setFModTitle(mod.title); setModal('editModule');
  };
  const openAddLesson = (mid: string, type: ModalType = 'addLesson') => {
    setTargetMod(mid); setFTitle(''); setFType('tabler-video'); setFDuration(''); setFPublished(true);
    if (type === 'uploadVideo')    setFType('tabler-video');
    if (type === 'addQuiz')        { setFType('tabler-file-analytics'); setQuizQuestions([]); setQuizPassScore(60); setQuizTimeLimit(30); }
    if (type === 'scheduleLive')   setFType('tabler-broadcast');
    if (type === 'addAssignment')  setFType('tabler-file-report');
    if (type === 'uploadPdf')      setFType('tabler-file-text');
    if (type === 'addLesson')      { setQuizQuestions([]); setQuizPassScore(60); setQuizTimeLimit(30); }
    setModal(type);
  };
  const openEditLesson = (mid: string, li: number) => {
    const l = modules.find(m => m.id === mid)!.lessons[li];
    setTargetMod(mid); setTargetLi(li);
    setFTitle(l.title); setFType(l.type); setFDuration(l.duration); setFPublished(l.published);
    setModal('editLesson');
  };
  const openPreview = (mid: string, li: number) => {
    setTargetMod(mid); setTargetLi(li); setModal('previewLesson');
  };

  const isLessonModal = modal && ['addLesson','editLesson','uploadVideo','uploadPdf','addQuiz','scheduleLive','addAssignment'].includes(modal);
  const lessonModalTitle: Record<string, string> = {
    addLesson: 'Add Lesson', editLesson: 'Edit Lesson',
    uploadVideo: 'Upload Video', uploadPdf: 'Upload PDF / Notes',
    addQuiz: 'Create Quiz', scheduleLive: 'Schedule Live Class', addAssignment: 'Add Assignment',
  };

  return (
    <TutorLayout active="/tutor/courses" title="Edit Curriculum" breadcrumb="Home / Courses / Criminal Law Fundamentals / Curriculum">

      {/* ── Toast ─────────────────────────────────────────────────── */}
      {toast && (
        <div className="position-fixed bottom-0 end-0 p-4" style={{ zIndex: 9999 }}>
          <div className="toast show align-items-center text-bg-primary border-0">
            <div className="d-flex">
              <div className="toast-body fw-semibold">
                <i className="ti tabler-circle-check me-2"></i>{toast}
              </div>
              <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setToast('')}></button>
            </div>
          </div>
        </div>
      )}

      {/* ── Top bar ───────────────────────────────────────────────── */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-6">
        <div className="d-flex align-items-center gap-3">
          <a href="/tutor/courses/1" className="btn btn-icon btn-outline-secondary rounded-pill">
            <i className="ti tabler-arrow-left"></i>
          </a>
          <div>
            <h5 className="mb-0 fw-bold">Criminal Law Fundamentals</h5>
            <small className="text-body-secondary">Curriculum Editor — {modules.length} modules · {totalLessons} lessons</small>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-2">
          <a href="/tutor/courses/1" className="btn btn-outline-secondary">
            <i className="ti tabler-eye me-1"></i>Preview Course
          </a>
          <button className="btn btn-primary" onClick={() => showToast('Changes saved successfully!')}>
            <i className="ti tabler-device-floppy me-1"></i>Save Changes
          </button>
        </div>
      </div>

      {/* ── Stat row ──────────────────────────────────────────────── */}
      <div className="row g-4 mb-6">
        {[
          { icon: 'tabler-layout-list',  color: 'primary', val: modules.length, label: 'Modules'       },
          { icon: 'tabler-files',        color: 'info',    val: totalLessons,   label: 'Total Lessons' },
          { icon: 'tabler-circle-check', color: 'success', val: publishedCount, label: 'Published'     },
          { icon: 'tabler-pencil',       color: 'warning', val: draftCount,     label: 'Draft'         },
        ].map(s => (
          <div key={s.label} className="col-sm-6 col-xl-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between">
                  <div>
                    <span className="text-heading d-block small">{s.label}</span>
                    <h4 className="mb-0 mt-1 fw-bold">{s.val}</h4>
                  </div>
                  <div className="avatar">
                    <span className={`avatar-initial rounded bg-label-${s.color}`}>
                      <i className={`icon-base ti ${s.icon} icon-26px`}></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-6">

        {/* ── Curriculum Builder ────────────────────────────────── */}
        <div className="col-lg-8">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h5 className="mb-0 fw-bold">Course Modules</h5>
              <p className="mb-0 text-body-secondary small">Drag to reorder modules and lessons</p>
            </div>
            <button className="btn btn-primary" onClick={() => { setFModTitle(''); setModal('addModule'); }}>
              <i className="ti tabler-plus me-1"></i>Add Module
            </button>
          </div>

          <div className="d-flex flex-column gap-4">
            {modules.map(mod => (
              <div key={mod.id} className="card shadow-none border">
                {/* Module header */}
                <div
                  className="card-header d-flex align-items-center justify-content-between py-3 px-4"
                  style={{ background: 'linear-gradient(135deg, #7367F010, #9E95F520)', cursor: 'pointer' }}
                  onClick={() => toggleModule(mod.id)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <i className="ti tabler-grid-dots text-body-secondary" style={{ cursor: 'grab' }} onClick={e => e.stopPropagation()}></i>
                    <div className="badge rounded bg-label-primary p-1_5">
                      <i className="icon-base ti tabler-layout-list icon-md"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">{mod.title}</h6>
                      <small className="text-body-secondary">{mod.lessons.length} lessons · {mod.lessons.filter(l => l.published).length} published</small>
                    </div>
                  </div>
                  <div className="d-flex gap-1" onClick={e => e.stopPropagation()}>
                    <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill" onClick={() => toggleModule(mod.id)}>
                      <i className={`ti ${mod.open ? 'tabler-chevron-up' : 'tabler-chevron-down'}`}></i>
                    </button>
                    <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill" onClick={() => openEditModule(mod)}>
                      <i className="ti tabler-edit"></i>
                    </button>
                    <button className="btn btn-sm btn-icon btn-text-danger rounded-pill" onClick={() => deleteModule(mod.id)}>
                      <i className="ti tabler-trash"></i>
                    </button>
                  </div>
                </div>

                {mod.open && (
                  <>
                    <div className="card-body p-0">
                      {mod.lessons.length === 0 && (
                        <div className="text-center py-5 text-body-secondary">
                          <i className="ti tabler-file-off" style={{ fontSize: 32 }}></i>
                          <p className="mb-0 mt-2 small">No lessons yet. Add one below.</p>
                        </div>
                      )}
                      {mod.lessons.map((lesson, li) => {
                        const lColor = TYPE_COLOR[lesson.type] ?? 'secondary';
                        return (
                          <div key={li} className={`d-flex align-items-center gap-3 py-3 px-4${li < mod.lessons.length - 1 ? ' border-bottom' : ''}`}>
                            <i className="ti tabler-grid-dots text-body-secondary" style={{ cursor: 'grab', fontSize: 14 }}></i>
                            <div className="avatar avatar-sm flex-shrink-0">
                              <span className={`avatar-initial rounded bg-label-${lColor}`}>
                                <i className={`icon-base ti ${lesson.type} icon-md`}></i>
                              </span>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <div className="fw-semibold small text-heading text-truncate">{lesson.title}</div>
                              <div className="d-flex align-items-center gap-2 mt-1">
                                <span className={`badge bg-label-${lColor}`} style={{ fontSize: 10 }}>{TYPE_LABEL[lesson.type] ?? 'File'}</span>
                                <small className="text-body-secondary">{lesson.duration}</small>
                              </div>
                            </div>
                            <div className="d-flex align-items-center gap-3 flex-shrink-0">
                              <div className="form-check form-switch mb-0">
                                <input className="form-check-input" type="checkbox" checked={lesson.published} onChange={() => togglePublish(mod.id, li)} />
                              </div>
                              <span className={`badge bg-label-${lesson.published ? 'success' : 'secondary'} text-uppercase`} style={{ fontSize: 10 }}>
                                {lesson.published ? 'Live' : 'Draft'}
                              </span>
                              <div className="dropdown">
                                <button className="btn btn-sm btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                  <i className="ti tabler-dots-vertical"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#" onClick={e => { e.preventDefault(); openEditLesson(mod.id, li); }}>
                                    <i className="ti tabler-edit me-2"></i>Edit
                                  </a>
                                  <a className="dropdown-item" href="#" onClick={e => { e.preventDefault(); openPreview(mod.id, li); }}>
                                    <i className="ti tabler-eye me-2"></i>Preview
                                  </a>
                                  <a className="dropdown-item" href="#" onClick={e => { e.preventDefault(); duplicateLesson(mod.id, li); }}>
                                    <i className="ti tabler-copy me-2"></i>Duplicate
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a className="dropdown-item text-danger" href="#" onClick={e => { e.preventDefault(); deleteLesson(mod.id, li); }}>
                                    <i className="ti tabler-trash me-2"></i>Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="card-footer py-2 px-4 border-top d-flex gap-2" style={{ background: 'rgba(115,103,240,0.03)' }}>
                      <button className="btn btn-sm btn-label-primary"   onClick={() => openAddLesson(mod.id, 'addLesson')}>
                        <i className="ti tabler-plus me-1"></i>Add Lesson
                      </button>
                      <button className="btn btn-sm btn-label-secondary" onClick={() => openAddLesson(mod.id, 'uploadVideo')}>
                        <i className="ti tabler-video-plus me-1"></i>Upload Video
                      </button>
                      <button className="btn btn-sm btn-label-secondary" onClick={() => openAddLesson(mod.id, 'addQuiz')}>
                        <i className="ti tabler-list-check me-1"></i>Add Quiz
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Sidebar ─────────────────────────────────────── */}
        <div className="col-lg-4">
          {/* Content Breakdown */}
          <div className="card mb-6">
            <div className="card-header"><h5 className="card-title mb-0">Content Breakdown</h5></div>
            <div className="card-body py-2">
              {Object.entries(TYPE_LABEL).map(([icon, label]) => {
                const count = modules.reduce((a, m) => a + m.lessons.filter(l => l.type === icon).length, 0);
                return (
                  <div key={icon} className="d-flex align-items-center gap-3 py-2">
                    <div className="avatar avatar-sm flex-shrink-0">
                      <span className={`avatar-initial rounded bg-label-${TYPE_COLOR[icon]}`}>
                        <i className={`icon-base ti ${icon} icon-md`}></i>
                      </span>
                    </div>
                    <span className="small fw-medium text-heading flex-grow-1">{label}</span>
                    <span className={`badge bg-label-${TYPE_COLOR[icon]}`}>{count}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Publish Status */}
          <div className="card">
            <div className="card-header"><h5 className="card-title mb-0">Publish Status</h5></div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-1">
                <small className="fw-semibold">Published lessons</small>
                <small className="fw-semibold">{publishedCount} / {totalLessons}</small>
              </div>
              <div className="progress mb-4" style={{ height: 8 }}>
                <div className="progress-bar bg-success" style={{ width: totalLessons ? `${Math.round((publishedCount / totalLessons) * 100)}%` : '0%' }}></div>
              </div>
              <div className="d-flex gap-2 mb-5">
                <span className="badge bg-label-success flex-grow-1 text-center py-2">
                  <i className="ti tabler-circle-check me-1"></i>{publishedCount} Live
                </span>
                <span className="badge bg-label-secondary flex-grow-1 text-center py-2">
                  <i className="ti tabler-pencil me-1"></i>{draftCount} Draft
                </span>
              </div>
              <button className="btn btn-success w-100 mb-2" onClick={publishAll}>
                <i className="ti tabler-world me-1"></i>Publish All Lessons
              </button>
              <button className="btn btn-outline-secondary w-100" onClick={unpublishAll}>
                <i className="ti tabler-eye-off me-1"></i>Unpublish All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══ OFFCANVAS — Add / Edit Module ══ */}
      {(modal === 'addModule' || modal === 'editModule') && (
        <>
          <div className="offcanvas offcanvas-end show" style={{ visibility: 'visible', width: 420 }}>
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title">{modal === 'addModule' ? 'Add New Module' : 'Edit Module'}</h5>
              <button className="btn-close" onClick={close}></button>
            </div>
            <div className="offcanvas-body">
              <div className="mb-4">
                <label className="form-label fw-medium">Module Title <span className="text-danger">*</span></label>
                <input className="form-control" placeholder="e.g. Module 4: Constitutional Amendments"
                  value={fModTitle} onChange={e => setFModTitle(e.target.value)} />
              </div>
              {modal === 'addModule' && (
                <div className="mb-4">
                  <label className="form-label fw-medium">Position</label>
                  <select className="form-select">
                    <option>After last module</option>
                    {modules.map((m, i) => <option key={m.id}>After Module {i + 1}</option>)}
                  </select>
                </div>
              )}
              <div className="d-flex gap-3 mt-5">
                <button className="btn btn-primary flex-grow-1" onClick={modal === 'addModule' ? submitAddModule : submitEditModule}>
                  <i className={`ti ${modal === 'addModule' ? 'tabler-plus' : 'tabler-device-floppy'} me-1`}></i>
                  {modal === 'addModule' ? 'Add Module' : 'Save Changes'}
                </button>
                <button className="btn btn-outline-secondary" onClick={close}>Cancel</button>
              </div>
            </div>
          </div>
          <div className="offcanvas-backdrop fade show" onClick={close}></div>
        </>
      )}

      {/* ══ OFFCANVAS — Add / Edit / Upload Lesson ══ */}
      {isLessonModal && (
        <>
          <div className="offcanvas offcanvas-end show" style={{ visibility: 'visible', width: 440 }}>
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title">{lessonModalTitle[modal!] ?? 'Lesson'}</h5>
              <button className="btn-close" onClick={close}></button>
            </div>
            <div className="offcanvas-body">
              {/* Module selector */}
              <div className="mb-4">
                <label className="form-label fw-medium">Module <span className="text-danger">*</span></label>
                <select className="form-select" value={targetMod} onChange={e => setTargetMod(e.target.value)}>
                  {modules.map(m => <option key={m.id} value={m.id}>{m.title}</option>)}
                </select>
              </div>

              {/* Content type — only for generic add/edit */}
              {(modal === 'addLesson' || modal === 'editLesson') && (
                <div className="mb-4">
                  <label className="form-label fw-medium">Content Type</label>
                  <select className="form-select" value={fType} onChange={e => setFType(e.target.value)}>
                    {Object.entries(TYPE_LABEL).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>
              )}

              <div className="mb-4">
                <label className="form-label fw-medium">
                  {fType === 'tabler-video'           ? 'Video Title'
                  : fType === 'tabler-file-text'      ? 'Document Title'
                  : fType === 'tabler-file-analytics' ? 'Quiz Title'
                  : fType === 'tabler-broadcast'      ? 'Session Title'
                  : fType === 'tabler-file-report'    ? 'Assignment Title'
                  : 'Lesson Title'}
                  <span className="text-danger"> *</span>
                </label>
                <input className="form-control" placeholder="Enter title..." value={fTitle} onChange={e => setFTitle(e.target.value)} />
              </div>

              {fType !== 'tabler-file-analytics' && (
                <div className="mb-4">
                  <label className="form-label fw-medium">
                    {fType === 'tabler-video'        ? 'Duration (e.g. 24 min)'
                    : fType === 'tabler-broadcast'   ? 'Date & Time (e.g. Apr 5 @ 10 AM)'
                    : fType === 'tabler-file-report' ? 'Max Marks (e.g. 25 marks)'
                    : fType === 'tabler-file-text'   ? 'Pages (e.g. 12 pages)'
                    : 'Duration / Pages'}
                  </label>
                  <input
                    className="form-control"
                    placeholder={
                      fType === 'tabler-video'         ? 'e.g. 24 min'
                      : fType === 'tabler-broadcast'   ? 'e.g. Apr 5 @ 10 AM'
                      : fType === 'tabler-file-report' ? 'e.g. 25 marks'
                      : fType === 'tabler-file-text'   ? 'e.g. 12 pages'
                      : 'e.g. 24 min'
                    }
                    value={fDuration}
                    onChange={e => setFDuration(e.target.value)}
                  />
                </div>
              )}

              {/* Video upload zone */}
              {fType === 'tabler-video' && (
                <div className="mb-4">
                  <label className="form-label fw-medium">Video File</label>
                  <div className="border border-dashed rounded p-4 text-center" style={{ borderColor: '#7367F0', cursor: 'pointer' }}>
                    <i className="ti tabler-video text-primary" style={{ fontSize: 32 }}></i>
                    <p className="mb-1 mt-2 small fw-semibold">Click to upload or drag &amp; drop</p>
                    <small className="text-body-secondary">MP4, MOV, AVI — up to 2 GB</small>
                    <input type="file" className="d-none" accept="video/*" />
                  </div>
                </div>
              )}

              {/* PDF upload zone */}
              {fType === 'tabler-file-text' && (
                <div className="mb-4">
                  <label className="form-label fw-medium">Document File</label>
                  <div className="border border-dashed rounded p-4 text-center" style={{ borderColor: '#00CFE8', cursor: 'pointer' }}>
                    <i className="ti tabler-file-text text-info" style={{ fontSize: 32 }}></i>
                    <p className="mb-1 mt-2 small fw-semibold">Click to upload or drag &amp; drop</p>
                    <small className="text-body-secondary">PDF, DOC, DOCX, PPT — up to 100 MB</small>
                    <input type="file" className="d-none" accept=".pdf,.doc,.docx,.ppt,.pptx" />
                  </div>
                </div>
              )}

              {/* Quiz Builder */}
              {fType === 'tabler-file-analytics' && (
                <div className="mb-4">
                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <label className="form-label fw-medium small">Pass Score (%)</label>
                      <input className="form-control form-control-sm" type="number" min={0} max={100}
                        value={quizPassScore} onChange={e => setQuizPassScore(+e.target.value)} />
                    </div>
                    <div className="col-6">
                      <label className="form-label fw-medium small">Time Limit (min)</label>
                      <input className="form-control form-control-sm" type="number" min={1}
                        value={quizTimeLimit} onChange={e => setQuizTimeLimit(+e.target.value)} />
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <label className="form-label fw-medium mb-0">
                      Questions <span className="badge bg-label-warning ms-1">{quizQuestions.length}</span>
                    </label>
                    <button type="button" className="btn btn-sm btn-label-primary" onClick={addQuizQuestion}>
                      <i className="ti tabler-plus me-1"></i>Add Question
                    </button>
                  </div>
                  {quizQuestions.length === 0 && (
                    <div className="text-center py-4 border border-dashed rounded text-body-secondary small"
                      style={{ borderColor: '#f0ad4e' }}>
                      <i className="ti tabler-clipboard-list" style={{ fontSize: 30, color: '#f0ad4e' }}></i>
                      <p className="mb-0 mt-2">No questions yet. Click <strong>Add Question</strong> to start building your quiz.</p>
                    </div>
                  )}
                  <div className="d-flex flex-column gap-3">
                    {quizQuestions.map((q, qi) => (
                      <div key={qi} className="border rounded p-3" style={{ background: 'rgba(240,173,78,0.05)', borderColor: 'rgba(240,173,78,0.35)' }}>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-label-warning" style={{ fontSize: 11 }}>Q{qi + 1}</span>
                            <select className="form-select form-select-sm" style={{ width: 160 }}
                              value={q.type} onChange={e => updateQuizQuestion(qi, 'type', e.target.value)}>
                              <option value="mcq">Multiple Choice</option>
                              <option value="tf">True / False</option>
                              <option value="short">Short Answer</option>
                            </select>
                          </div>
                          <button type="button" className="btn btn-sm btn-icon btn-text-danger rounded-pill"
                            onClick={() => removeQuizQuestion(qi)}>
                            <i className="ti tabler-trash"></i>
                          </button>
                        </div>
                        <input className="form-control form-control-sm mb-3"
                          placeholder={`Question ${qi + 1}...`}
                          value={q.text} onChange={e => updateQuizQuestion(qi, 'text', e.target.value)} />
                        {q.type === 'mcq' && (
                          <div className="d-flex flex-column gap-2">
                            {q.options.map((opt, oi) => (
                              <div key={oi} className="d-flex align-items-center gap-2">
                                <input type="radio" className="form-check-input flex-shrink-0 mt-0"
                                  name={`correct-${qi}`} checked={q.correct === oi}
                                  onChange={() => updateQuizQuestion(qi, 'correct', oi)} />
                                <input className="form-control form-control-sm" placeholder={`Option ${oi + 1}`}
                                  value={opt} onChange={e => updateQuizOption(qi, oi, e.target.value)} />
                              </div>
                            ))}
                            <small className="text-body-secondary mt-1">
                              <i className="ti tabler-info-circle me-1"></i>Select the radio button next to the correct answer.
                            </small>
                          </div>
                        )}
                        {q.type === 'tf' && (
                          <div className="d-flex gap-4">
                            {['True', 'False'].map((opt, oi) => (
                              <div key={oi} className="form-check">
                                <input className="form-check-input" type="radio" name={`tf-${qi}`}
                                  id={`tf-${qi}-${oi}`} checked={q.correct === oi}
                                  onChange={() => updateQuizQuestion(qi, 'correct', oi)} />
                                <label className="form-check-label small fw-semibold" htmlFor={`tf-${qi}-${oi}`}>{opt}</label>
                              </div>
                            ))}
                          </div>
                        )}
                        {q.type === 'short' && (
                          <small className="text-body-secondary fst-italic">
                            <i className="ti tabler-pencil me-1"></i>Students will type a free-text answer.
                          </small>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Live class */}
              {fType === 'tabler-broadcast' && (
                <div className="mb-4">
                  <label className="form-label fw-medium">Meeting Link</label>
                  <input className="form-control" placeholder="https://zoom.us/j/..." />
                  <div className="mt-3">
                    <label className="form-label fw-medium small">Platform</label>
                    <select className="form-select form-select-sm" style={{ maxWidth: 180 }}>
                      <option>Zoom</option>
                      <option>Google Meet</option>
                      <option>Microsoft Teams</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Assignment */}
              {fType === 'tabler-file-report' && (
                <div className="mb-4">
                  <label className="form-label fw-medium">Assignment Instructions</label>
                  <textarea className="form-control" rows={3} placeholder="Describe what students need to submit..." />
                  <div className="mt-3">
                    <label className="form-label fw-medium small">Due Date</label>
                    <input className="form-control form-control-sm" type="date" style={{ maxWidth: 180 }} />
                  </div>
                </div>
              )}

              <div className="mb-5">
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="lessonPub" checked={fPublished} onChange={e => setFPublished(e.target.checked)} />
                  <label className="form-check-label" htmlFor="lessonPub">Publish immediately</label>
                </div>
              </div>

              <div className="d-flex gap-3">
                <button className="btn btn-primary flex-grow-1"
                  onClick={modal === 'editLesson' ? submitEditLesson : submitAddLesson}>
                  <i className={`ti ${modal === 'editLesson' ? 'tabler-device-floppy' : 'tabler-plus'} me-1`}></i>
                  {modal === 'editLesson' ? 'Save Changes' : 'Add to Module'}
                </button>
                <button className="btn btn-outline-secondary" onClick={close}>Cancel</button>
              </div>
            </div>
          </div>
          <div className="offcanvas-backdrop fade show" onClick={close}></div>
        </>
      )}

      {/* ══ MODAL — Preview Lesson ══ */}
      {modal === 'previewLesson' && targetLesson && (
        <div className="modal show d-block" tabIndex={-1} style={{ background: 'rgba(0,0,0,0.45)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Lesson Preview</h5>
                <button className="btn-close" onClick={close}></button>
              </div>
              <div className="modal-body">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="avatar">
                    <span className={`avatar-initial rounded bg-label-${TYPE_COLOR[targetLesson.type] ?? 'secondary'}`}>
                      <i className={`icon-base ti ${targetLesson.type} icon-26px`}></i>
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-0 fw-bold">{targetLesson.title}</h6>
                    <small className="text-body-secondary">{TYPE_LABEL[targetLesson.type]} · {targetLesson.duration}</small>
                  </div>
                </div>
                <ul className="list-unstyled mb-0">
                  {[
                    ['Type',     TYPE_LABEL[targetLesson.type] ?? 'File'],
                    ['Duration', targetLesson.duration],
                    ['Status',   targetLesson.published ? 'Published (Live)' : 'Draft (Hidden)'],
                    ['Module',   modules.find(m => m.id === targetMod)?.title ?? '—'],
                  ].map(([k, v]) => (
                    <li key={k} className="d-flex gap-2 mb-2">
                      <span className="fw-semibold text-heading" style={{ minWidth: 80 }}>{k}:</span>
                      <span className="text-body-secondary">{v}</span>
                    </li>
                  ))}
                </ul>
                {targetLesson.type === 'tabler-video' && (
                  <div className="mt-4 rounded" style={{ height: 160, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti tabler-player-play-filled text-white" style={{ fontSize: 40 }}></i>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-secondary" onClick={close}>Close</button>
                <button className="btn btn-primary" onClick={() => { close(); openEditLesson(targetMod, targetLi); }}>
                  <i className="ti tabler-edit me-1"></i>Edit Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </TutorLayout>
  );
}
