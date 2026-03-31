'use client'

const pageThumbs = [
  { page: 1, active: false },
  { page: 2, active: false },
  { page: 3, active: true },
  { page: 4, active: false },
  { page: 5, active: false },
]

const annotations = [
  { page: 3, color: 'warning', text: 'Key definition — compare with Sec 84 insanity defence', x: 60, y: 35 },
  { page: 3, color: 'primary', text: 'IRAC: Issue — whether the accused had knowledge of facts making the act unlawful', x: 60, y: 62 },
]

export default function PDFViewerPage() {
  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#1a1a2e' }}>
      {/* Top toolbar */}
      <div className="d-flex align-items-center gap-3 px-4" style={{ height: 48, backgroundColor: '#0f0f1a', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <a href="/student/learn/1/lesson/3" className="d-flex align-items-center gap-1 small text-decoration-none" style={{ color: 'rgba(255,255,255,0.6)' }}>
          <i className="ti tabler-chevron-left"></i>
          Back
        </a>
        <div style={{ width: 1, height: 20, backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
        <span className="small fw-medium text-white flex-grow-1 text-truncate">Mistake of Fact — Notes &amp; Case List.pdf</span>

        {/* Page controls */}
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-sm d-flex align-items-center justify-content-center rounded text-white" style={{ width: 28, height: 28, backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <i className="ti tabler-chevron-left small"></i>
          </button>
          <div className="d-flex align-items-center gap-1 rounded px-2 py-1" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <input type="text" defaultValue="3" className="bg-transparent border-0 text-white text-center extra-small" style={{ width: 24, outline: 'none' }} />
            <span className="extra-small" style={{ color: 'rgba(255,255,255,0.5)' }}>/ 18</span>
          </div>
          <button className="btn btn-sm d-flex align-items-center justify-content-center rounded text-white" style={{ width: 28, height: 28, backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <i className="ti tabler-chevron-right small"></i>
          </button>
        </div>

        {/* Zoom */}
        <div className="d-flex align-items-center gap-1">
          <button className="btn btn-sm d-flex align-items-center justify-content-center rounded text-white fs-5" style={{ width: 28, height: 28, backgroundColor: 'rgba(255,255,255,0.1)' }}>−</button>
          <span className="extra-small px-1" style={{ color: 'rgba(255,255,255,0.7)' }}>100%</span>
          <button className="btn btn-sm d-flex align-items-center justify-content-center rounded text-white fs-5" style={{ width: 28, height: 28, backgroundColor: 'rgba(255,255,255,0.1)' }}>+</button>
        </div>

        <button className="btn btn-primary btn-sm d-flex align-items-center gap-1 extra-small">
          <i className="ti tabler-download"></i>
          Download
        </button>

        <button className="btn btn-sm d-flex align-items-center gap-1 extra-small fw-bold" style={{ backgroundColor: 'rgba(40,199,111,0.2)', color: '#28C76F', border: '1px solid rgba(40,199,111,0.4)' }}>
          <i className="ti tabler-check"></i>
          Mark Complete
        </button>
      </div>

      <div className="d-flex flex-grow-1 overflow-hidden">
        {/* Left sidebar — page thumbnails */}
        <div className="d-flex flex-column align-items-center py-3 gap-2 overflow-auto" style={{ width: 80, backgroundColor: '#0f0f1a', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
          {pageThumbs.map(thumb => (
            <button
              key={thumb.page}
              className={`rounded overflow-hidden border-0 p-0 ${thumb.active ? 'ring-primary' : ''}`}
              style={{ width: 56, outline: thumb.active ? '2px solid var(--bs-primary)' : '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="bg-white d-flex flex-column p-1 gap-1" style={{ aspectRatio: '3/4' }}>
                {[1,2,3,4,5,6].map(l => (
                  <div key={l} className="rounded-pill" style={{ height: 2, backgroundColor: 'rgba(75,70,92,0.3)', width: l % 3 === 0 ? '60%' : '100%' }}></div>
                ))}
              </div>
              <div className="text-center py-1" style={{ fontSize: 10, color: thumb.active ? 'var(--bs-primary)' : 'rgba(255,255,255,0.4)' }}>
                {thumb.page}
              </div>
            </button>
          ))}
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>...</span>
        </div>

        {/* Main PDF area */}
        <div className="flex-grow-1 overflow-auto d-flex align-items-start justify-content-center p-4">
          <div className="position-relative bg-white rounded shadow-lg" style={{ width: 640, minHeight: 900 }}>
            {/* Simulated content */}
            <div className="p-5">
              <p className="text-center extra-small text-body-secondary fw-medium mb-4">SHARMA LAW ACADEMY — CRIMINAL LAW NOTES</p>
              <h6 className="text-center fw-bold text-heading mb-1">Mistake of Fact</h6>
              <p className="text-center small text-body-secondary mb-5">Sections 76 &amp; 79 of the Indian Penal Code, 1860</p>

              <p className="small fw-bold text-heading mb-2">1. Introduction</p>
              <div className="d-flex flex-column gap-1 mb-4">
                {[90, 85, 95, 70, 88, 60, 92].map((w, i) => (
                  <div key={i} className="rounded-pill" style={{ height: 6, width: `${w}%`, backgroundColor: 'rgba(75,70,92,0.1)' }}></div>
                ))}
              </div>

              <p className="small fw-bold text-heading mb-2">2. Section 76 — Act Done by a Person Bound by Law</p>
              <div className="bg-label-primary border-start border-3 border-primary rounded-end p-3 mb-4">
                <div className="d-flex flex-column gap-1">
                  {[95, 80, 70, 90].map((w, i) => (
                    <div key={i} className="rounded-pill" style={{ height: 6, width: `${w}%`, backgroundColor: 'rgba(115,103,240,0.2)' }}></div>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-column gap-1 mb-4">
                {[85, 92, 75, 88, 65, 90, 80].map((w, i) => (
                  <div key={i} className="rounded-pill" style={{ height: 6, width: `${w}%`, backgroundColor: 'rgba(75,70,92,0.1)' }}></div>
                ))}
              </div>

              <p className="small fw-bold text-heading mb-2">3. Section 79 — Act Done by a Person Justified by Law</p>
              <div className="d-flex flex-column gap-1 mb-4">
                {[90, 82, 95, 68, 85, 78, 91, 60].map((w, i) => (
                  <div key={i} className="rounded-pill" style={{ height: 6, width: `${w}%`, backgroundColor: 'rgba(75,70,92,0.1)' }}></div>
                ))}
              </div>

              <p className="small fw-bold text-heading mb-2">4. Key Case Laws</p>
              <div className="d-flex flex-column gap-1">
                {[88, 72, 95, 64, 80, 90].map((w, i) => (
                  <div key={i} className="rounded-pill" style={{ height: 6, width: `${w}%`, backgroundColor: 'rgba(75,70,92,0.1)' }}></div>
                ))}
              </div>
            </div>

            {/* Page number */}
            <div className="position-absolute bottom-0 start-0 end-0 text-center pb-3 extra-small text-body-secondary">
              — 3 —
            </div>
          </div>
        </div>

        {/* Right annotations panel */}
        <div className="d-flex flex-column" style={{ width: 256, backgroundColor: '#0f0f1a', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Highlight tool */}
          <div className="p-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="extra-small fw-bold mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Annotation Tools</p>
            <div className="d-flex gap-2">
              {[
                { color: '#FF9F43', active: true },
                { color: '#7367F0', active: false },
                { color: '#28C76F', active: false },
                { color: '#EA5455', active: false },
              ].map(c => (
                <button
                  key={c.color}
                  className="rounded-circle border-0 p-0"
                  style={{ width: 24, height: 24, backgroundColor: c.color, outline: c.active ? '2px solid white' : '1px solid rgba(255,255,255,0.2)', transform: c.active ? 'scale(1.1)' : 'none' }}
                ></button>
              ))}
              <button className="ms-auto btn btn-sm p-0 extra-small" style={{ color: 'rgba(255,255,255,0.5)' }}>Clear</button>
            </div>
            <p className="mt-2 mb-0" style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Select text to highlight or annotate</p>
          </div>

          {/* Annotations list */}
          <div className="flex-grow-1 overflow-auto p-3">
            <p className="extra-small fw-bold mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Notes on Page 3</p>
            <div className="d-flex flex-column gap-2">
              {annotations.map((ann, i) => (
                <div key={i} className="rounded p-2 border-start border-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: ann.color === 'warning' ? '#FF9F43' : '#7367F0' }}>
                  <p className="mb-1" style={{ fontSize: 10, color: ann.color === 'warning' ? '#FF9F43' : '#7367F0' }}>Page {ann.page}</p>
                  <p className="extra-small lh-base mb-0" style={{ color: 'rgba(255,255,255,0.8)' }}>{ann.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ask AI button */}
          <div className="p-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button className="btn btn-primary w-100 btn-sm d-flex align-items-center justify-content-center gap-2 extra-small fw-bold">
              <i className="ti tabler-bolt"></i>
              Ask AI about this PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
