'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

export default function LiveClassPage() {
  return (
    <StudentLayout activePath="/student/learn">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page header */}
        <div>
          <nav className="flex items-center gap-2 text-xs text-[#A8AAAE] mb-2">
            <a href="/student/learn/1" className="hover:text-[#7367F0]">Criminal Law & Procedure</a>
            <span>/</span>
            <span className="text-[#4B465C]">Live Classes</span>
          </nav>
          <h1 className="text-2xl font-bold text-[#4B465C]">Live Doubt Clearance Session — Module 2</h1>
        </div>

        {/* ─── STATE 1: Before (Upcoming) ─── */}
        <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#7367F0]/10 to-[#9E95F5]/10 border-b border-[#7367F0]/20 px-6 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#7367F0]" />
            <span className="text-sm font-semibold text-[#7367F0]">State 1 — Upcoming Class</span>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-[#4B465C] mb-3">General Exceptions & Private Defence — Live Q&A</h2>
                <div className="space-y-2 mb-5">
                  {[
                    { icon: '👨‍🏫', label: 'Faculty', val: 'Adv. Ravi Shankar' },
                    { icon: '📅', label: 'Date', val: 'Tuesday, 1 April 2025' },
                    { icon: '🕕', label: 'Time', val: '6:00 PM – 7:00 PM IST' },
                    { icon: '🎓', label: 'Topics', val: 'Sec 76–106 IPC, Private Defence nuances, Case study' },
                    { icon: '👥', label: 'Enrolled', val: '247 students registered' },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-2 text-sm">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-[#A8AAAE] w-20 flex-shrink-0">{item.label}</span>
                      <span className="text-[#4B465C] font-medium">{item.val}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-[#7367F0] text-[#7367F0] text-sm font-semibold rounded-lg hover:bg-[#7367F0]/5 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Add to Calendar
                </button>
              </div>

              {/* Countdown */}
              <div className="flex flex-col items-center justify-center bg-[#F8F7FA] rounded-xl p-6 min-w-[200px]">
                <p className="text-xs font-semibold text-[#A8AAAE] uppercase tracking-wider mb-3">Class starts in</p>
                <div className="flex gap-3">
                  {[['02', 'Hrs'], ['14', 'Min'], ['30', 'Sec']].map(([val, label]) => (
                    <div key={label} className="text-center">
                      <div className="w-14 h-14 rounded-xl bg-white border-2 border-[#7367F0]/20 flex items-center justify-center shadow-sm">
                        <span className="text-2xl font-bold text-[#7367F0]">{val}</span>
                      </div>
                      <p className="text-[10px] text-[#A8AAAE] mt-1">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#A8AAAE] mt-4">Tue, Apr 1 · 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── STATE 2: Live (Active) ─── */}
        <div className="bg-white rounded-xl border border-[#28C76F] shadow-sm overflow-hidden">
          <div className="bg-[#28C76F]/10 border-b border-[#28C76F]/20 px-6 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#28C76F] animate-pulse" />
            <span className="text-sm font-semibold text-[#28C76F]">State 2 — Class is Live Now</span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 bg-[#28C76F]/5 border border-[#28C76F]/20 rounded-xl p-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#28C76F]/20 flex items-center justify-center">
                <span className="text-xl">🔴</span>
              </div>
              <div>
                <p className="font-bold text-[#28C76F]">Class is Live Now!</p>
                <p className="text-sm text-[#4B465C]">General Exceptions & Private Defence — Live Q&A</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-xs text-[#A8AAAE]">Duration</p>
                <p className="font-bold text-[#4B465C]">00:23:47</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-8 py-3 bg-[#28C76F] hover:bg-[#24B263] text-white font-bold text-base rounded-xl transition shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Join Class
              </button>
              <div className="text-sm text-[#A8AAAE]">
                <p>🎙️ Adv. Ravi Shankar is speaking</p>
                <p className="text-xs mt-0.5">183 students attending</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── STATE 3: After (Recording) ─── */}
        <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm overflow-hidden">
          <div className="bg-[#F8F7FA] border-b border-[#DBDADE] px-6 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#A8AAAE]" />
            <span className="text-sm font-semibold text-[#A8AAAE]">State 3 — Recording Available</span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#7367F0]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#7367F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#4B465C]">Class Recording Available</p>
                <p className="text-sm text-[#A8AAAE]">Held on Mar 25, 2025 · Duration 58 min</p>
              </div>
            </div>

            {/* Video player placeholder */}
            <div className="bg-[#0F0F0F] rounded-xl aspect-video max-h-64 flex items-center justify-center relative mb-4">
              <button className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
              <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded">00:00 / 58:34</span>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#7367F0]/10 text-[#7367F0] font-semibold text-sm rounded-lg border border-[#7367F0]/20 hover:bg-[#7367F0]/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Mark as Attended
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 border border-[#DBDADE] text-[#4B465C] text-sm font-medium rounded-lg hover:bg-[#F8F7FA] transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Recording
              </button>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
