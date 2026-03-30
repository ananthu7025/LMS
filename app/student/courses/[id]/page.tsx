'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

const curriculumSections = [
  {
    title: 'Module 1: Introduction to Criminal Law',
    lessons: 6,
    duration: '2h 15m',
    items: [
      { type: 'video', title: 'What is Criminal Law? — Overview', dur: '18:42', done: true },
      { type: 'video', title: 'Sources & Development of IPC', dur: '22:10', done: true },
      { type: 'pdf', title: 'IPC Reference Notes (PDF)', dur: '15 min read', done: false },
      { type: 'quiz', title: 'Quick Check — Module 1', dur: '10 min', done: false },
      { type: 'live', title: 'Live Doubt Session', dur: '60 min', done: false },
      { type: 'assignment', title: 'Assignment 1: Draft a Case Brief', dur: '45 min', done: false },
    ],
  },
  {
    title: 'Module 2: General Exceptions (Sec 76–106)',
    lessons: 7,
    duration: '3h 00m',
    items: [
      { type: 'video', title: 'Mistake of Fact — Section 76 & 79', dur: '28:30', done: false },
      { type: 'video', title: 'Unsoundness of Mind — Section 84', dur: '24:15', done: false },
      { type: 'pdf', title: 'General Exceptions Summary Chart', dur: '10 min read', done: false },
    ],
  },
  {
    title: 'Module 3: Offences Against Human Body (Sec 299–377)',
    lessons: 8,
    duration: '3h 45m',
    items: [
      { type: 'video', title: 'Culpable Homicide vs Murder — Sec 299 & 300', dur: '35:00', done: false },
      { type: 'video', title: 'Grievous Hurt & Assault', dur: '27:20', done: false },
    ],
  },
]

const lessonTypeIcon: Record<string, React.ReactNode> = {
  video: (
    <div className="w-7 h-7 rounded-lg bg-[#7367F0]/10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#7367F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  ),
  pdf: (
    <div className="w-7 h-7 rounded-lg bg-[#EA5455]/10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#EA5455]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    </div>
  ),
  quiz: (
    <div className="w-7 h-7 rounded-lg bg-[#FF9F43]/10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#FF9F43]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    </div>
  ),
  live: (
    <div className="w-7 h-7 rounded-lg bg-[#28C76F]/10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#28C76F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    </div>
  ),
  assignment: (
    <div className="w-7 h-7 rounded-lg bg-[#00CFE8]/10 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#00CFE8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </div>
  ),
}

export default function CourseLandingPage() {
  return (
    <StudentLayout activePath="/student/courses">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left — course info */}
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-[#A8AAAE] mb-4">
              <a href="/student/courses" className="hover:text-[#7367F0]">Course Catalog</a>
              <span>/</span>
              <span className="text-[#4B465C]">Criminal Law</span>
            </nav>

            <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#7367F0]/10 text-[#7367F0] mb-3">Criminal Law</span>
            <h1 className="text-3xl font-bold text-[#4B465C] leading-tight mb-3">
              Criminal Law & Procedure<br />
              <span className="text-[#7367F0]">(IPC, CrPC & Evidence Act)</span>
            </h1>
            <p className="text-[#A8AAAE] text-base leading-relaxed mb-5">
              A comprehensive course covering the Indian Penal Code, Code of Criminal Procedure, and Evidence Act — designed for Judicial Services aspirants, law graduates, and legal professionals seeking mastery of criminal law.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 text-[#FF9F43]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#4B465C] font-bold">4.8</span>
              <span className="text-[#A8AAAE] text-sm">(234 ratings) · 1,847 students enrolled</span>
            </div>

            {/* Tutor + last updated */}
            <div className="flex items-center gap-4 text-sm text-[#A8AAAE]">
              <span>Created by <a href="#" className="text-[#7367F0] font-medium hover:underline">Adv. Ravi Shankar</a></span>
              <span>·</span>
              <span>Last updated: March 2025</span>
              <span>·</span>
              <span>Hindi + English</span>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-[#DBDADE]">
              {[
                { label: '24 Lessons', icon: '📚' },
                { label: '12.5 Hours', icon: '⏱️' },
                { label: '1,847 Enrolled', icon: '👥' },
                { label: 'Lifetime Access', icon: '♾️' },
                { label: 'Certificate', icon: '🏆' },
              ].map(s => (
                <div key={s.label} className="flex items-center gap-2 text-sm text-[#4B465C]">
                  <span>{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm sticky top-20 overflow-hidden">
              {/* Thumbnail */}
              <div className="h-44 bg-gradient-to-br from-[#7367F0] to-[#9E95F5] flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">Preview</span>
              </div>

              <div className="p-5">
                <div className="flex items-end gap-3 mb-1">
                  <span className="text-3xl font-bold text-[#4B465C]">₹5,999</span>
                  <span className="text-lg text-[#A8AAAE] line-through mb-0.5">₹9,999</span>
                  <span className="text-sm font-bold text-[#28C76F] mb-0.5">40% off</span>
                </div>
                <p className="text-xs text-[#EA5455] font-medium mb-4">⏰ 2 days left at this price!</p>

                {/* Coupon */}
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="flex-1 px-3 py-2 rounded-lg border border-[#DBDADE] text-sm text-[#4B465C] placeholder:text-[#A8AAAE] focus:outline-none focus:border-[#7367F0]"
                  />
                  <button className="px-3 py-2 bg-[#F8F7FA] text-[#7367F0] font-semibold text-sm rounded-lg border border-[#DBDADE] hover:border-[#7367F0] transition">
                    Apply
                  </button>
                </div>

                <a href="/student/checkout" className="block w-full py-3 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-bold text-center rounded-lg transition shadow-sm">
                  Enroll Now
                </a>
                <button className="block w-full py-2.5 mt-2 border border-[#7367F0] text-[#7367F0] font-semibold text-center rounded-lg hover:bg-[#7367F0]/5 transition text-sm">
                  Try Free Preview
                </button>
                <p className="text-center text-xs text-[#A8AAAE] mt-3">30-day money-back guarantee</p>

                {/* What's included */}
                <div className="mt-4 pt-4 border-t border-[#DBDADE]">
                  <p className="text-xs font-semibold text-[#4B465C] mb-2">What's included</p>
                  {[
                    '24 video lessons (12.5 hrs)',
                    '6 downloadable PDFs',
                    '3 live Q&A sessions',
                    '4 quizzes + 2 assignments',
                    'AI Tutor access',
                    'Certificate of completion',
                    'Lifetime access',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#4B465C] mb-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#28C76F] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What you'll learn */}
        <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-[#4B465C] mb-4">What You'll Learn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              'Understand the structure and scope of the Indian Penal Code (IPC)',
              'Apply general exceptions and defences in criminal matters',
              'Analyze offences against the human body — culpable homicide vs murder',
              'Navigate the Code of Criminal Procedure — bail, trial, sentencing',
              'Evaluate evidentiary rules under the Indian Evidence Act',
              'Draft criminal pleadings, bail applications, and case briefs',
            ].map(point => (
              <div key={point} className="flex items-start gap-2.5 text-sm text-[#4B465C]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#28C76F] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {point}
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#4B465C]">Course Curriculum</h2>
            <span className="text-sm text-[#A8AAAE]">3 sections • 21 lessons • 8h 00m</span>
          </div>

          <div className="space-y-3">
            {curriculumSections.map((section, si) => (
              <div key={si} className="border border-[#DBDADE] rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-[#F8F7FA] cursor-pointer">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#A8AAAE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="font-semibold text-sm text-[#4B465C]">{section.title}</span>
                  </div>
                  <span className="text-xs text-[#A8AAAE]">{section.lessons} lessons · {section.duration}</span>
                </div>
                {si === 0 && (
                  <div className="divide-y divide-[#DBDADE]">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="flex items-center gap-3 px-4 py-2.5">
                        {lessonTypeIcon[item.type]}
                        <span className="flex-1 text-sm text-[#4B465C]">{item.title}</span>
                        <span className="text-xs text-[#A8AAAE]">{item.dur}</span>
                        {item.done ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#28C76F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#DBDADE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tutor */}
        <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-[#4B465C] mb-4">Your Instructor</h2>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7367F0] to-[#5E50E2] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
              R
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#4B465C]">Adv. Ravi Shankar</h3>
              <p className="text-sm text-[#A8AAAE] mb-2">Senior Criminal Advocate, Delhi High Court | 18+ Years</p>
              <div className="flex gap-4 text-xs text-[#A8AAAE] mb-3">
                <span>⭐ 4.9 instructor rating</span>
                <span>👥 3,200+ students</span>
                <span>📚 4 courses</span>
              </div>
              <p className="text-sm text-[#4B465C] leading-relaxed">
                Adv. Ravi Shankar has been practicing criminal law at the Delhi High Court for over 18 years, handling landmark cases in criminal appellate jurisdiction. He specializes in making complex IPC provisions accessible through real case studies and practical examples, having mentored 200+ judicial services aspirants who have cleared state PSC exams.
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6">
          <h2 className="text-lg font-bold text-[#4B465C] mb-4">Student Reviews</h2>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Overall */}
            <div className="text-center">
              <p className="text-6xl font-bold text-[#4B465C]">4.8</p>
              <div className="flex gap-0.5 justify-center mt-1">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 text-[#FF9F43]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-[#A8AAAE] mt-1">Course Rating</p>
            </div>

            {/* Bar chart */}
            <div className="flex-1 space-y-2">
              {[
                { stars: 5, pct: 72 },
                { stars: 4, pct: 18 },
                { stars: 3, pct: 7 },
                { stars: 2, pct: 2 },
                { stars: 1, pct: 1 },
              ].map(r => (
                <div key={r.stars} className="flex items-center gap-2 text-xs">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className={`w-2.5 h-2.5 ${s <= r.stars ? 'text-[#FF9F43]' : 'text-[#DBDADE]'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex-1 h-2 bg-[#F8F7FA] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF9F43] rounded-full" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="text-[#A8AAAE] w-8 text-right">{r.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Priya K.', initials: 'P', rating: 5, date: 'Feb 2025', text: 'Excellent course! Adv. Shankar explains each section with real case examples. The IPC module on culpable homicide vs murder was incredibly clear. Highly recommend for Judiciary prep.' },
              { name: 'Rahul M.', initials: 'R', rating: 5, date: 'Jan 2025', text: 'Cleared UP Judiciary mains with flying colors. The live sessions were very interactive. Notes PDFs are concise and cover the syllabus perfectly. Worth every rupee.' },
              { name: 'Anjali S.', initials: 'A', rating: 4, date: 'Mar 2025', text: 'Very good content and structured well. Would love more practice questions per module. The AI tutor integration is a great bonus feature for self-study.' },
            ].map(r => (
              <div key={r.name} className="border border-[#DBDADE] rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7367F0] to-[#9E95F5] flex items-center justify-center text-white text-sm font-bold">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#4B465C]">{r.name}</p>
                    <p className="text-xs text-[#A8AAAE]">{r.date}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className={`w-3 h-3 ${s <= r.rating ? 'text-[#FF9F43]' : 'text-[#DBDADE]'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#4B465C] leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
