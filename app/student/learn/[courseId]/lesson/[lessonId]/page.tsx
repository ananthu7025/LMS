'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

const savedNotes = [
  { time: '04:22', text: 'Section 300 IPC — 4 clauses. Clause 1: Intention to cause death. Clause 2: Intention to cause bodily injury likely to cause death.', color: '#7367F0' },
  { time: '11:47', text: 'K.M. Nanavati case — voluntary manslaughter doctrine not applicable in India under IPC. Landmark precedent for Sec 300 exception 1.', color: '#FF9F43' },
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
    <div className="min-h-screen bg-[#F8F7FA]">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#DBDADE] shadow-sm h-14 flex items-center px-4 gap-4">
        <a href="/student/learn/1" className="flex items-center gap-2 text-sm text-[#A8AAAE] hover:text-[#7367F0] transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Course
        </a>
        <div className="w-px h-5 bg-[#DBDADE]" />
        <span className="text-sm font-medium text-[#4B465C]">Criminal Law & Procedure</span>
        <div className="ml-auto flex items-center gap-2 text-xs text-[#A8AAAE]">
          <span>Lesson 5 of 24</span>
          <div className="w-24 h-1.5 bg-[#DBDADE] rounded-full overflow-hidden">
            <div className="h-full bg-[#7367F0] rounded-full" style={{ width: '21%' }} />
          </div>
          <span className="text-[#7367F0] font-medium">21%</span>
        </div>
      </div>

      <div className="flex h-[calc(100vh-56px)]">
        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          {/* Video player */}
          <div className="bg-[#0F0F0F] aspect-video max-h-[65vh] w-full relative group">
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center transition group-hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Time display */}
            <div className="absolute top-3 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
              11:47 / 28:30
            </div>

            {/* Bottom controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8 opacity-0 group-hover:opacity-100 transition">
              {/* Seek bar */}
              <div className="w-full h-1 bg-white/30 rounded-full mb-2.5 relative cursor-pointer">
                <div className="h-full bg-[#7367F0] rounded-full" style={{ width: '41%' }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" style={{ left: '41%', transform: 'translate(-50%, -50%)' }} />
              </div>
              {/* Controls row */}
              <div className="flex items-center gap-3">
                <button className="text-white hover:text-[#7367F0] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="text-white text-xs">11:47 / 28:30</span>
                <div className="flex items-center gap-1 text-white text-xs ml-auto">
                  {/* Playback speed */}
                  <button className="px-2 py-0.5 bg-white/20 rounded text-xs hover:bg-white/30 transition">1.0x</button>
                  {/* Quality */}
                  <button className="px-2 py-0.5 bg-white/20 rounded text-xs hover:bg-white/30 transition">720p</button>
                  {/* Subtitles */}
                  <button className="p-1 bg-white/20 rounded hover:bg-white/30 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </button>
                  {/* Fullscreen */}
                  <button className="p-1 bg-white/20 rounded hover:bg-white/30 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Below player */}
          <div className="p-5">
            {/* Nav + Mark Complete */}
            <div className="flex items-center gap-3 mb-5">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#DBDADE] text-[#4B465C] text-sm font-medium rounded-lg hover:bg-[#F8F7FA] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-[#DBDADE] text-[#4B465C] text-sm font-medium rounded-lg hover:bg-[#F8F7FA] transition">
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="ml-auto flex items-center gap-2 px-5 py-2 bg-[#28C76F]/10 text-[#28C76F] border border-[#28C76F]/30 text-sm font-semibold rounded-lg hover:bg-[#28C76F]/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Mark as Complete
              </button>
            </div>

            {/* Title + description */}
            <h1 className="text-xl font-bold text-[#4B465C] mb-1">Mistake of Fact — Section 76 & 79 IPC</h1>
            <p className="text-sm text-[#A8AAAE] mb-4">Module 2 · Lesson 5 · 28 min 30 sec</p>
            <p className="text-sm text-[#4B465C] leading-relaxed mb-5">
              In this lesson, we analyze Sections 76 and 79 of the IPC which deal with acts done by a person justified by law or by mistake of fact. We'll study the doctrine of mens rea, the objective vs subjective standard of belief, and landmark cases including R v Tolson and the Indian position under Section 79.
            </p>

            {/* Attached PDF */}
            <div className="flex items-center gap-4 p-4 bg-[#F8F7FA] border border-[#DBDADE] rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-[#EA5455]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#EA5455]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#4B465C]">Mistake of Fact — Notes & Case List.pdf</p>
                <p className="text-xs text-[#A8AAAE]">2.3 MB · 12 pages</p>
              </div>
              <a href="/student/learn/1/pdf/1" className="px-3 py-1.5 text-xs font-medium text-[#7367F0] border border-[#7367F0]/30 rounded-lg hover:bg-[#7367F0]/5 transition">
                View Notes
              </a>
              <button className="px-3 py-1.5 text-xs font-medium text-[#A8AAAE] border border-[#DBDADE] rounded-lg hover:bg-[#F8F7FA] transition flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-80 bg-white border-l border-[#DBDADE] flex flex-col">
          {/* Tab bar */}
          <div className="flex border-b border-[#DBDADE]">
            {['Notes', 'Q&A', 'Overview'].map((tab, i) => (
              <button
                key={tab}
                className={`flex-1 py-3 text-xs font-semibold transition ${
                  i === 0
                    ? 'text-[#7367F0] border-b-2 border-[#7367F0]'
                    : 'text-[#A8AAAE] hover:text-[#4B465C]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Notes tab content */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Note input */}
            <div className="border border-[#DBDADE] rounded-lg overflow-hidden mb-4">
              <div className="px-3 py-2 bg-[#F8F7FA] border-b border-[#DBDADE] flex items-center gap-2">
                <span className="text-xs font-medium text-[#7367F0] bg-[#7367F0]/10 px-2 py-0.5 rounded">@ 11:47</span>
                <span className="text-xs text-[#A8AAAE]">Add a note at current time</span>
              </div>
              <textarea
                className="w-full p-3 text-sm text-[#4B465C] placeholder:text-[#A8AAAE] focus:outline-none resize-none"
                rows={3}
                placeholder="Type your note here..."
              />
              <div className="px-3 py-2 border-t border-[#DBDADE] flex justify-end">
                <button className="px-3 py-1.5 bg-[#7367F0] text-white text-xs font-semibold rounded-md hover:bg-[#5E50E2] transition">Save Note</button>
              </div>
            </div>

            {/* Saved notes */}
            <p className="text-xs font-semibold text-[#A8AAAE] uppercase tracking-wider mb-3">Your Notes (2)</p>
            <div className="space-y-3">
              {savedNotes.map((note, i) => (
                <div key={i} className="border border-[#DBDADE] rounded-lg p-3" style={{ borderLeftColor: note.color, borderLeftWidth: 3 }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded cursor-pointer hover:opacity-80"
                      style={{ backgroundColor: note.color + '20', color: note.color }}
                    >
                      @ {note.time}
                    </span>
                    <button className="text-[#A8AAAE] hover:text-[#EA5455] text-xs">Delete</button>
                  </div>
                  <p className="text-xs text-[#4B465C] leading-relaxed">{note.text}</p>
                </div>
              ))}
            </div>

            {/* Q&A preview */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-[#A8AAAE] uppercase tracking-wider mb-3">Q&A (3 questions)</p>
              <div className="space-y-3">
                {qaItems.map((qa, i) => (
                  <div key={i} className="border border-[#DBDADE] rounded-lg p-3">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-[#7367F0]/10 flex items-center justify-center text-[#7367F0] text-xs font-bold flex-shrink-0">
                        {qa.qUser[0]}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#4B465C]">{qa.qUser} · <span className="text-[#A8AAAE] font-normal">{qa.qTime}</span></p>
                        <p className="text-xs text-[#4B465C] mt-0.5 leading-relaxed">{qa.q}</p>
                      </div>
                    </div>
                    {qa.a && (
                      <div className="ml-8 pl-3 border-l-2 border-[#28C76F]/30 bg-[#28C76F]/5 rounded-r p-2">
                        <p className="text-xs font-semibold text-[#28C76F] mb-0.5">{qa.aUser} (Tutor)</p>
                        <p className="text-xs text-[#4B465C] leading-relaxed line-clamp-3">{qa.a}</p>
                      </div>
                    )}
                    {!qa.a && (
                      <div className="ml-8 pl-3 border-l-2 border-[#DBDADE] p-2">
                        <p className="text-xs text-[#A8AAAE] italic">Awaiting tutor response...</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Post question */}
              <div className="mt-3">
                <textarea
                  className="w-full p-3 text-sm text-[#4B465C] placeholder:text-[#A8AAAE] border border-[#DBDADE] rounded-lg focus:outline-none focus:border-[#7367F0] resize-none"
                  rows={2}
                  placeholder="Ask a doubt about this lesson..."
                />
                <button className="mt-1.5 w-full py-2 bg-[#7367F0] text-white text-xs font-semibold rounded-lg hover:bg-[#5E50E2] transition">
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
