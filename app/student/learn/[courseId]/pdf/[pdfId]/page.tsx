'use client'

const pageThumbs = [
  { page: 1, active: false },
  { page: 2, active: false },
  { page: 3, active: true },
  { page: 4, active: false },
  { page: 5, active: false },
]

const annotations = [
  { page: 3, color: '#FF9F43', text: 'Key definition — compare with Sec 84 insanity defence', x: 60, y: 35 },
  { page: 3, color: '#7367F0', text: 'IRAC: Issue — whether the accused had knowledge of facts making the act unlawful', x: 60, y: 62 },
]

export default function PDFViewerPage() {
  return (
    <div className="min-h-screen bg-[#1A1A2E] flex flex-col">
      {/* Top toolbar */}
      <div className="bg-[#0F0F1A] border-b border-white/10 h-12 flex items-center px-4 gap-3">
        <a href="/student/learn/1/lesson/3" className="text-white/60 hover:text-white transition text-sm flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </a>
        <div className="w-px h-5 bg-white/20" />
        <span className="text-white text-sm font-medium flex-1 truncate">Mistake of Fact — Notes & Case List.pdf</span>

        {/* Page controls */}
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-1 bg-white/10 rounded px-2 py-1">
            <input type="text" defaultValue="3" className="w-6 text-center text-white text-xs bg-transparent focus:outline-none" />
            <span className="text-white/50 text-xs">/ 18</span>
          </div>
          <button className="w-7 h-7 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Zoom */}
        <div className="flex items-center gap-1">
          <button className="w-7 h-7 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 text-white text-lg transition">−</button>
          <span className="text-white/70 text-xs px-1">100%</span>
          <button className="w-7 h-7 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 text-white text-lg transition">+</button>
        </div>

        {/* Download */}
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white text-xs font-medium rounded transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>

        {/* Mark complete */}
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#28C76F]/20 hover:bg-[#28C76F]/30 text-[#28C76F] text-xs font-semibold rounded border border-[#28C76F]/40 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          Mark Complete
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar — page thumbnails */}
        <div className="w-20 bg-[#0F0F1A] border-r border-white/10 overflow-y-auto flex flex-col items-center py-3 gap-2">
          {pageThumbs.map(thumb => (
            <button
              key={thumb.page}
              className={`w-14 rounded overflow-hidden transition ${
                thumb.active ? 'ring-2 ring-[#7367F0]' : 'ring-1 ring-white/10 hover:ring-white/30'
              }`}
            >
              <div className="bg-white aspect-[3/4] flex flex-col p-1 gap-0.5">
                {[1,2,3,4,5,6].map(l => (
                  <div key={l} className="h-0.5 bg-[#4B465C]/30 rounded-full" style={{ width: l % 3 === 0 ? '60%' : '100%' }} />
                ))}
              </div>
              <div className={`text-center text-[10px] py-0.5 ${thumb.active ? 'text-[#7367F0]' : 'text-white/40'}`}>
                {thumb.page}
              </div>
            </button>
          ))}
          <span className="text-white/30 text-[10px]">...</span>
        </div>

        {/* Main PDF area */}
        <div className="flex-1 overflow-auto flex items-start justify-center p-6">
          <div className="relative bg-white rounded shadow-2xl" style={{ width: 640, minHeight: 900 }}>
            {/* Simulated PDF page content */}
            <div className="p-10">
              <p className="text-center text-xs text-[#A8AAAE] font-medium mb-6">SHARMA LAW ACADEMY — CRIMINAL LAW NOTES</p>
              <h2 className="text-center text-base font-bold text-[#4B465C] mb-1">Mistake of Fact</h2>
              <h3 className="text-center text-sm text-[#A8AAAE] mb-8">Sections 76 & 79 of the Indian Penal Code, 1860</h3>

              <p className="text-sm font-bold text-[#4B465C] mb-2">1. Introduction</p>
              <div className="space-y-1.5 mb-5">
                {[90, 85, 95, 70, 88, 60, 92].map((w, i) => (
                  <div key={i} className="h-2 bg-[#4B465C]/10 rounded-full" style={{ width: `${w}%` }} />
                ))}
              </div>

              <p className="text-sm font-bold text-[#4B465C] mb-2">2. Section 76 — Act Done by a Person Bound by Law</p>
              <div className="bg-[#F8F7FA] border-l-4 border-[#7367F0] p-3 rounded-r mb-4">
                <div className="space-y-1">
                  {[95, 80, 70, 90].map((w, i) => (
                    <div key={i} className="h-2 bg-[#7367F0]/20 rounded-full" style={{ width: `${w}%` }} />
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 mb-5">
                {[85, 92, 75, 88, 65, 90, 80].map((w, i) => (
                  <div key={i} className="h-2 bg-[#4B465C]/10 rounded-full" style={{ width: `${w}%` }} />
                ))}
              </div>

              <p className="text-sm font-bold text-[#4B465C] mb-2">3. Section 79 — Act Done by a Person Justified by Law</p>
              <div className="space-y-1.5 mb-5">
                {[90, 82, 95, 68, 85, 78, 91, 60].map((w, i) => (
                  <div key={i} className="h-2 bg-[#4B465C]/10 rounded-full" style={{ width: `${w}%` }} />
                ))}
              </div>

              <p className="text-sm font-bold text-[#4B465C] mb-2">4. Key Case Laws</p>
              <div className="space-y-1.5">
                {[88, 72, 95, 64, 80, 90].map((w, i) => (
                  <div key={i} className="h-2 bg-[#4B465C]/10 rounded-full" style={{ width: `${w}%` }} />
                ))}
              </div>
            </div>

            {/* Annotation highlights */}
            {annotations.map((ann, i) => (
              <div
                key={i}
                className="absolute pointer-events-none"
                style={{
                  top: `${ann.y}%`,
                  left: `5%`,
                  right: `5%`,
                  height: 12,
                  backgroundColor: ann.color + '40',
                  borderLeft: `3px solid ${ann.color}`,
                }}
              />
            ))}

            {/* Page number */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-[#A8AAAE]">
              — 3 —
            </div>
          </div>
        </div>

        {/* Right annotations panel */}
        <div className="w-64 bg-[#0F0F1A] border-l border-white/10 flex flex-col">
          {/* Highlight tool */}
          <div className="p-3 border-b border-white/10">
            <p className="text-white/70 text-xs font-semibold mb-2">Annotation Tools</p>
            <div className="flex gap-1.5">
              {['#FF9F43', '#7367F0', '#28C76F', '#EA5455'].map(c => (
                <button
                  key={c}
                  className={`w-6 h-6 rounded-full transition ${c === '#FF9F43' ? 'ring-2 ring-white scale-110' : 'ring-1 ring-white/20 hover:scale-105'}`}
                  style={{ backgroundColor: c }}
                />
              ))}
              <button className="ml-auto text-xs text-white/50 hover:text-white transition px-1">Clear</button>
            </div>
            <p className="text-white/30 text-[10px] mt-2">Select text to highlight or annotate</p>
          </div>

          {/* Annotations list */}
          <div className="flex-1 overflow-y-auto p-3">
            <p className="text-white/50 text-xs font-semibold mb-2">Notes on Page 3</p>
            <div className="space-y-2">
              {annotations.map((ann, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-2.5 border-l-2" style={{ borderLeftColor: ann.color }}>
                  <p className="text-[10px]" style={{ color: ann.color }}>Page {ann.page}</p>
                  <p className="text-white/80 text-xs mt-1 leading-relaxed">{ann.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ask AI button */}
          <div className="p-3 border-t border-white/10">
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white text-xs font-semibold rounded-lg transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Ask AI about this PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
