'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

const curriculum = [
  {
    title: 'Module 1: Introduction to Criminal Law',
    lessons: 6,
    duration: '2h 15m',
    completed: 6,
    expanded: true,
    items: [
      { type: 'video', title: 'What is Criminal Law? — Overview', dur: '18:42', done: true },
      { type: 'video', title: 'Sources & Development of IPC', dur: '22:10', done: true },
      { type: 'pdf', title: 'IPC Reference Notes (PDF)', dur: '15 min', done: true },
      { type: 'quiz', title: 'Quick Check — Module 1', dur: '10 min', done: true },
      { type: 'live', title: 'Live Doubt Session', dur: '60 min', done: true },
      { type: 'assignment', title: 'Assignment 1: Draft a Case Brief', dur: '45 min', done: true },
    ],
  },
  {
    title: 'Module 2: General Exceptions (Sec 76–106)',
    lessons: 7,
    duration: '3h 00m',
    completed: 4,
    expanded: true,
    items: [
      { type: 'video', title: 'Mistake of Fact — Section 76 & 79', dur: '28:30', done: true },
      { type: 'video', title: 'Unsoundness of Mind — Section 84', dur: '24:15', done: true },
      { type: 'pdf', title: 'General Exceptions Summary Chart', dur: '10 min', done: true },
      { type: 'video', title: 'Consent & Necessity — Sec 87–92', dur: '20:00', done: true },
      { type: 'video', title: 'Private Defence — Sec 96–106', dur: '32:00', done: false },
      { type: 'quiz', title: 'Module 2 Quiz', dur: '15 min', done: false },
      { type: 'assignment', title: 'Case Analysis Assignment', dur: '60 min', done: false },
    ],
  },
  {
    title: 'Module 3: Offences Against Human Body (Sec 299–377)',
    lessons: 8,
    duration: '3h 45m',
    completed: 0,
    expanded: false,
    items: [
      { type: 'video', title: 'Culpable Homicide vs Murder — Sec 299 & 300', dur: '35:00', done: false },
      { type: 'video', title: 'Grievous Hurt & Assault', dur: '27:20', done: false },
    ],
  },
]

const typeIcon = (type: string) => {
  const icons: Record<string, { bg: string; color: string; path: string }> = {
    video: { bg: 'bg-[#7367F0]/10', color: 'text-[#7367F0]', path: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    pdf: { bg: 'bg-[#EA5455]/10', color: 'text-[#EA5455]', path: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    quiz: { bg: 'bg-[#FF9F43]/10', color: 'text-[#FF9F43]', path: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
    live: { bg: 'bg-[#28C76F]/10', color: 'text-[#28C76F]', path: 'M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
    assignment: { bg: 'bg-[#00CFE8]/10', color: 'text-[#00CFE8]', path: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
  }
  const ic = icons[type] || icons.video
  return (
    <div className={`w-6 h-6 rounded-md ${ic.bg} flex items-center justify-center flex-shrink-0`}>
      <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 h-3.5 ${ic.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={ic.path} />
      </svg>
    </div>
  )
}

export default function CourseHomePage() {
  const totalLessons = curriculum.reduce((a, s) => a + s.lessons, 0)
  const completedLessons = curriculum.reduce((a, s) => a + s.completed, 0)
  const progress = Math.round((completedLessons / totalLessons) * 100)

  return (
    <StudentLayout activePath="/student/learn">
      <div className="max-w-5xl mx-auto">
        {/* Course header */}
        <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#7367F0]/10 text-[#7367F0] mb-2">Criminal Law</span>
              <h1 className="text-xl font-bold text-[#4B465C] mb-1">Criminal Law & Procedure (IPC, CrPC & Evidence Act)</h1>
              <p className="text-sm text-[#A8AAAE]">By Adv. Ravi Shankar · Last accessed today</p>
            </div>
            <a
              href="/student/learn/1/lesson/5"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-semibold rounded-lg transition shadow-sm text-sm whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Continue Learning
            </a>
          </div>

          {/* Progress */}
          <div className="mt-5 pt-4 border-t border-[#DBDADE]">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-[#4B465C] font-medium">Overall Progress</span>
              <span className="text-[#7367F0] font-bold">{progress}%</span>
            </div>
            <div className="h-2.5 bg-[#F8F7FA] rounded-full overflow-hidden">
              <div className="h-full bg-[#7367F0] rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-[#A8AAAE]">
              <span>{completedLessons} / {totalLessons} lessons completed</span>
              <span>·</span>
              <span>Est. 5h 30m remaining</span>
              <span>·</span>
              <span className="text-[#28C76F] font-medium">On track</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-lg border border-[#DBDADE] shadow-sm p-1 mb-6 w-fit">
          {['Curriculum', 'Resources', 'Announcements'].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition ${
                i === 0
                  ? 'bg-[#7367F0] text-white shadow-sm'
                  : 'text-[#A8AAAE] hover:text-[#4B465C]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Curriculum tree */}
        <div className="space-y-3">
          {curriculum.map((section, si) => (
            <div key={si} className="bg-white rounded-xl border border-[#DBDADE] shadow-sm overflow-hidden">
              {/* Section header */}
              <div className="flex items-center justify-between px-5 py-4 bg-[#F8F7FA] cursor-pointer hover:bg-[#F0EFFD] transition">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 text-[#A8AAAE] transition-transform ${section.expanded ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm text-[#4B465C]">{section.title}</p>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="text-xs text-[#A8AAAE]">{section.lessons} lessons · {section.duration}</span>
                      <span className="text-xs text-[#28C76F] font-medium">{section.completed}/{section.lessons} done</span>
                    </div>
                  </div>
                </div>
                {/* Section progress mini */}
                <div className="hidden sm:flex items-center gap-2">
                  <div className="w-24 h-1.5 bg-[#DBDADE] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#28C76F] rounded-full"
                      style={{ width: `${(section.completed / section.lessons) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#A8AAAE]">{Math.round((section.completed / section.lessons) * 100)}%</span>
                </div>
              </div>

              {/* Lessons */}
              {section.expanded && (
                <div className="divide-y divide-[#DBDADE]">
                  {section.items.map((item, ii) => (
                    <a
                      key={ii}
                      href={`/student/learn/1/${item.type === 'video' ? 'lesson' : item.type}/${ii + 1}`}
                      className="flex items-center gap-3 px-5 py-3 hover:bg-[#F8F7FA] transition group"
                    >
                      {typeIcon(item.type)}
                      <span className={`flex-1 text-sm ${item.done ? 'text-[#A8AAAE] line-through' : 'text-[#4B465C] group-hover:text-[#7367F0]'}`}>
                        {item.title}
                      </span>
                      <span className="text-xs text-[#A8AAAE]">{item.dur}</span>
                      {item.done ? (
                        <div className="w-5 h-5 rounded-full bg-[#28C76F]/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-[#28C76F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-[#DBDADE]" />
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </StudentLayout>
  )
}
