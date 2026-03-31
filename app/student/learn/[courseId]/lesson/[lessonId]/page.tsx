'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

const savedNotes = [
  { time: '04:22', text: 'Section 300 IPC — 4 clauses. Clause 1: Intention to cause death. Clause 2: Intention to cause bodily injury likely to cause death.', color: 'primary' },
  { time: '11:47', text: 'K.M. Nanavati case — voluntary manslaughter doctrine not applicable in India under IPC. Landmark precedent for Sec 300 exception 1.', color: 'warning' },
]

const qaItems = [
  {
    q: 'What is the key difference between Section 299 and 300?',
    qUser: 'Arjun S.',
    qTime: '2 days ago',
    a: 'Great question! Section 299 defines culpable homicide in general terms, while Section 300 narrows it down to murder. The key distinction lies in the degree of intention — S.300 requires a higher threshold. Remember: all murder is culpable homicide, but not vice versa.',
    aUser: 'Adv. Ravi Shankar',
    aType: 'tutor',
  },
  {
    q: 'Can Exception 4 of Section 300 apply in a premeditated act?',
    qUser: 'Priya K.',
    qTime: '1 day ago',
    a: 'Exception 4 requires the act to be done in sudden fight without premeditation. If there\'s premeditation, the exception won\'t apply — the Supreme Court has confirmed this in multiple cases including Ghapoo Yadav v State of MP (2003).',
    aUser: 'Adv. Ravi Shankar',
    aType: 'tutor',
  },
  {
    q: 'Where can I find the full text of the K.M. Nanavati judgment?',
    qUser: 'Rahul M.',
    qTime: '5 hours ago',
    a: '',
    aUser: '',
    aType: '',
  },
]

export default function VideoLessonPage() {
  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f7fa' }}>
      {/* Top bar */}
      <div className="sticky-top bg-white border-bottom shadow-sm d-flex align-items-center gap-3 px-4" style={{ height: 56, zIndex: 50 }}>
        <a href="/student/learn/1" className="d-flex align-items-center gap-2 small text-body-secondary text-decoration-none">
          <i className="ti tabler-chevron-left"></i>
          Back to Course
        </a>
        <div className="vr"></div>
        <span className="small fw-medium text-heading">Criminal Law &amp; Procedure</span>
        <div className="ms-auto d-flex align-items-center gap-2 extra-small text-body-secondary">
          <span>Lesson 5 of 24</span>
          <div className="progress rounded-pill" style={{ width: 96, height: 4 }}>
            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '21%' }}></div>
          </div>
          <span className="text-primary fw-medium">21%</span>
        </div>
      </div>

      <div className="d-flex" style={{ height: 'calc(100vh - 56px)' }}>
        {/* Main content */}
        <div className="flex-grow-1 overflow-auto">
          {/* Video player */}
          <div className="bg-dark position-relative" style={{ aspectRatio: '16/9', maxHeight: '65vh' }}>
            {/* Play button */}
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <button className="btn rounded-circle d-flex align-items-center justify-content-center" style={{ width: 64, height: 64, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}>
                <i className="ti tabler-player-play text-white fs-3 ms-1"></i>
              </button>
            </div>

            {/* Time display */}
            <div className="position-absolute top-0 end-0 m-3">
              <span className="badge bg-dark bg-opacity-75 text-white small">11:47 / 28:30</span>
            </div>

            {/* Bottom controls */}
            <div className="position-absolute bottom-0 start-0 end-0 px-4 pb-3 pt-5" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
              {/* Seek bar */}
              <div className="progress rounded-pill mb-3" style={{ height: 4 }}>
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '41%' }}></div>
              </div>
              {/* Controls row */}
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-sm p-0 text-white">
                  <i className="ti tabler-player-play fs-5"></i>
                </button>
                <span className="text-white extra-small">11:47 / 28:30</span>
                <div className="d-flex align-items-center gap-1 ms-auto">
                  <button className="btn btn-sm text-white extra-small px-2 py-1 rounded" style={{ background: 'rgba(255,255,255,0.2)' }}>1.0x</button>
                  <button className="btn btn-sm text-white extra-small px-2 py-1 rounded" style={{ background: 'rgba(255,255,255,0.2)' }}>720p</button>
                  <button className="btn btn-sm text-white p-1 rounded" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <i className="ti tabler-message-2 small"></i>
                  </button>
                  <button className="btn btn-sm text-white p-1 rounded" style={{ background: 'rgba(255,255,255,0.2)' }}>
                    <i className="ti tabler-maximize small"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Below player */}
          <div className="p-4">
            {/* Nav + Mark Complete */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2">
                <i className="ti tabler-chevron-left small"></i>
                Previous
              </button>
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2">
                Next
                <i className="ti tabler-chevron-right small"></i>
              </button>
              <button className="btn btn-label-success btn-sm ms-auto d-flex align-items-center gap-2 fw-bold">
                <i className="ti tabler-check small"></i>
                Mark as Complete
              </button>
            </div>

            {/* Title + description */}
            <h5 className="fw-bold text-heading mb-1">Mistake of Fact — Section 76 &amp; 79 IPC</h5>
            <p className="small text-body-secondary mb-3">Module 2 · Lesson 5 · 28 min 30 sec</p>
            <p className="small text-heading lh-base mb-4">
              In this lesson, we analyze Sections 76 and 79 of the IPC which deal with acts done by a person justified by law or by mistake of fact. We&apos;ll study the doctrine of mens rea, the objective vs subjective standard of belief, and landmark cases including R v Tolson and the Indian position under Section 79.
            </p>

            {/* Attached PDF */}
            <div className="card shadow-none bg-label-secondary">
              <div className="card-body p-3 d-flex align-items-center gap-3">
                <div className="avatar avatar-sm rounded bg-label-danger d-flex align-items-center justify-content-center flex-shrink-0">
                  <i className="ti tabler-file-text small"></i>
                </div>
                <div className="flex-grow-1">
                  <p className="small fw-bold text-heading mb-0">Mistake of Fact — Notes &amp; Case List.pdf</p>
                  <p className="extra-small text-body-secondary mb-0">2.3 MB · 12 pages</p>
                </div>
                <a href="/student/learn/1/pdf/1" className="btn btn-outline-primary btn-sm extra-small">
                  View Notes
                </a>
                <button className="btn btn-outline-secondary btn-sm extra-small d-flex align-items-center gap-1">
                  <i className="ti tabler-download"></i>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="bg-white border-start d-flex flex-column" style={{ width: 320 }}>
          {/* Tab bar */}
          <div className="d-flex border-bottom">
            {['Notes', 'Q&A', 'Overview'].map((tab, i) => (
              <button
                key={tab}
                className={`flex-grow-1 py-3 extra-small fw-bold border-0 bg-transparent ${
                  i === 0
                    ? 'text-primary border-bottom border-2 border-primary'
                    : 'text-body-secondary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Notes tab content */}
          <div className="flex-grow-1 overflow-auto p-3">
            {/* Note input */}
            <div className="border rounded overflow-hidden mb-4">
              <div className="px-3 py-2 bg-label-secondary border-bottom d-flex align-items-center gap-2">
                <span className="badge bg-label-primary extra-small">@ 11:47</span>
                <span className="extra-small text-body-secondary">Add a note at current time</span>
              </div>
              <textarea
                className="form-control border-0 shadow-none small"
                rows={3}
                placeholder="Type your note here..."
              ></textarea>
              <div className="px-3 py-2 border-top d-flex justify-content-end">
                <button className="btn btn-primary btn-sm extra-small">Save Note</button>
              </div>
            </div>

            {/* Saved notes */}
            <p className="extra-small fw-bold text-body-secondary text-uppercase mb-3" style={{ letterSpacing: 1 }}>Your Notes (2)</p>
            <div className="d-flex flex-column gap-3">
              {savedNotes.map((note, i) => (
                <div key={i} className={`border rounded p-3 border-start border-3 border-${note.color}`}>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className={`badge bg-label-${note.color} extra-small cursor-pointer`}>
                      @ {note.time}
                    </span>
                    <button className="btn btn-sm p-0 text-body-secondary extra-small">Delete</button>
                  </div>
                  <p className="extra-small text-heading lh-base mb-0">{note.text}</p>
                </div>
              ))}
            </div>

            {/* Q&A preview */}
            <div className="mt-4">
              <p className="extra-small fw-bold text-body-secondary text-uppercase mb-3" style={{ letterSpacing: 1 }}>Q&amp;A (3 questions)</p>
              <div className="d-flex flex-column gap-3">
                {qaItems.map((qa, i) => (
                  <div key={i} className="border rounded p-3">
                    <div className="d-flex align-items-start gap-2 mb-2">
                      <div className="avatar avatar-xs rounded-circle bg-label-primary d-flex align-items-center justify-content-center flex-shrink-0">
                        <span className="extra-small fw-bold">{qa.qUser[0]}</span>
                      </div>
                      <div>
                        <p className="extra-small fw-bold text-heading mb-0">{qa.qUser} · <span className="text-body-secondary fw-normal">{qa.qTime}</span></p>
                        <p className="extra-small text-heading mt-1 lh-base mb-0">{qa.q}</p>
                      </div>
                    </div>
                    {qa.a && (
                      <div className="ms-4 ps-3 border-start border-2 border-success bg-label-success rounded-end p-2">
                        <p className="extra-small fw-bold text-success mb-1">{qa.aUser} (Tutor)</p>
                        <p className="extra-small text-heading lh-base mb-0 line-clamp-3">{qa.a}</p>
                      </div>
                    )}
                    {!qa.a && (
                      <div className="ms-4 ps-3 border-start border-2 p-2">
                        <p className="extra-small text-body-secondary fst-italic mb-0">Awaiting tutor response...</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Post question */}
              <div className="mt-3">
                <textarea
                  className="form-control shadow-none small"
                  rows={2}
                  placeholder="Ask a doubt about this lesson..."
                ></textarea>
                <button className="btn btn-primary btn-sm w-100 mt-2 extra-small fw-bold">
                  Post Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
