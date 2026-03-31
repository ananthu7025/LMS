'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

export default function LiveClassPage() {
  return (
    <StudentLayout activePath="/student/learn">
      <div className="mx-auto d-flex flex-column gap-4" style={{ maxWidth: 900 }}>
        {/* Page header */}
        <div>
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb extra-small">
              <li className="breadcrumb-item"><a href="/student/learn/1">Criminal Law &amp; Procedure</a></li>
              <li className="breadcrumb-item active">Live Classes</li>
            </ol>
          </nav>
          <h5 className="fw-bold text-heading mb-0">Live Doubt Clearance Session — Module 2</h5>
        </div>

        {/* STATE 1: Upcoming */}
        <div className="card shadow-sm overflow-hidden">
          <div className="card-header bg-label-primary border-bottom d-flex align-items-center gap-2 py-2">
            <span className="rounded-circle bg-primary d-inline-block" style={{ width: 8, height: 8 }}></span>
            <span className="small fw-bold text-primary">State 1 — Upcoming Class</span>
          </div>
          <div className="card-body p-4">
            <div className="d-flex flex-column flex-md-row gap-4">
              <div className="flex-grow-1">
                <h6 className="fw-bold text-heading mb-3">General Exceptions &amp; Private Defence — Live Q&amp;A</h6>
                <div className="d-flex flex-column gap-2 mb-4">
                  {[
                    { icon: 'ti tabler-user', label: 'Faculty', val: 'Adv. Ravi Shankar' },
                    { icon: 'ti tabler-calendar', label: 'Date', val: 'Tuesday, 1 April 2025' },
                    { icon: 'ti tabler-clock', label: 'Time', val: '6:00 PM – 7:00 PM IST' },
                    { icon: 'ti tabler-book-2', label: 'Topics', val: 'Sec 76–106 IPC, Private Defence nuances, Case study' },
                    { icon: 'ti tabler-users', label: 'Enrolled', val: '247 students registered' },
                  ].map(item => (
                    <div key={item.label} className="d-flex align-items-start gap-2 small">
                      <i className={`${item.icon} text-primary flex-shrink-0 mt-1`}></i>
                      <span className="text-body-secondary flex-shrink-0" style={{ width: 80 }}>{item.label}</span>
                      <span className="text-heading fw-medium">{item.val}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2">
                  <i className="ti tabler-calendar-plus small"></i>
                  Add to Calendar
                </button>
              </div>

              {/* Countdown */}
              <div className="d-flex flex-column align-items-center justify-content-center bg-label-secondary rounded p-4" style={{ minWidth: 200 }}>
                <p className="extra-small fw-bold text-body-secondary text-uppercase mb-3" style={{ letterSpacing: 1 }}>Class starts in</p>
                <div className="d-flex gap-3">
                  {[['02', 'Hrs'], ['14', 'Min'], ['30', 'Sec']].map(([val, label]) => (
                    <div key={label} className="text-center">
                      <div className="bg-white border border-2 border-primary border-opacity-25 rounded d-flex align-items-center justify-content-center shadow-sm" style={{ width: 56, height: 56 }}>
                        <span className="fs-4 fw-bold text-primary">{val}</span>
                      </div>
                      <p className="extra-small text-body-secondary mt-1 mb-0">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="extra-small text-body-secondary mt-3 mb-0">Tue, Apr 1 · 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* STATE 2: Live */}
        <div className="card shadow-sm overflow-hidden border-success">
          <div className="card-header bg-label-success border-bottom d-flex align-items-center gap-2 py-2">
            <span className="rounded-circle bg-success d-inline-block" style={{ width: 8, height: 8, animation: 'pulse 2s infinite' }}></span>
            <span className="small fw-bold text-success">State 2 — Class is Live Now</span>
          </div>
          <div className="card-body p-4">
            <div className="d-flex align-items-center gap-3 bg-label-success border border-success border-opacity-25 rounded p-3 mb-4">
              <div className="avatar avatar-sm">
                <span className="avatar-initial rounded-circle bg-success bg-opacity-25">
                  <i className="ti tabler-broadcast text-success"></i>
                </span>
              </div>
              <div>
                <p className="fw-bold text-success mb-0">Class is Live Now!</p>
                <p className="small text-heading mb-0">General Exceptions &amp; Private Defence — Live Q&amp;A</p>
              </div>
              <div className="ms-auto text-end">
                <p className="extra-small text-body-secondary mb-0">Duration</p>
                <p className="fw-bold text-heading mb-0">00:23:47</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-success d-flex align-items-center gap-2 px-4 py-3 fw-bold fs-6 rounded-3 shadow-sm">
                <i className="ti tabler-video"></i>
                Join Class
              </button>
              <div className="small text-body-secondary">
                <p className="mb-0"><i className="ti tabler-microphone me-1"></i>Adv. Ravi Shankar is speaking</p>
                <p className="extra-small mb-0">183 students attending</p>
              </div>
            </div>
          </div>
        </div>

        {/* STATE 3: Recording */}
        <div className="card shadow-sm overflow-hidden">
          <div className="card-header bg-label-secondary border-bottom d-flex align-items-center gap-2 py-2">
            <span className="rounded-circle bg-secondary d-inline-block" style={{ width: 8, height: 8 }}></span>
            <span className="small fw-bold text-body-secondary">State 3 — Recording Available</span>
          </div>
          <div className="card-body p-4">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="avatar avatar-sm">
                <span className="avatar-initial rounded-circle bg-label-primary">
                  <i className="ti tabler-video"></i>
                </span>
              </div>
              <div>
                <p className="fw-bold text-heading mb-0">Class Recording Available</p>
                <p className="small text-body-secondary mb-0">Held on Mar 25, 2025 · Duration 58 min</p>
              </div>
            </div>

            {/* Video player placeholder */}
            <div className="bg-dark rounded position-relative d-flex align-items-center justify-content-center mb-4" style={{ aspectRatio: '16/9', maxHeight: 256 }}>
              <button className="btn rounded-circle d-flex align-items-center justify-content-center" style={{ width: 56, height: 56, background: 'rgba(255,255,255,0.2)' }}>
                <i className="ti tabler-player-play text-white fs-4 ms-1"></i>
              </button>
              <span className="position-absolute bottom-0 end-0 m-3 badge bg-dark bg-opacity-75 text-white extra-small">00:00 / 58:34</span>
            </div>

            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-label-primary d-flex align-items-center gap-2">
                <i className="ti tabler-check small"></i>
                Mark as Attended
              </button>
              <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                <i className="ti tabler-download small"></i>
                Download Recording
              </button>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
