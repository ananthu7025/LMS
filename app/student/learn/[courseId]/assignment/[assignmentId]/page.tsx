'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

// Set to true to show "after review" state
const showReview = false

export default function AssignmentPage() {
  return (
    <StudentLayout activePath="/student/learn">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <nav className="flex items-center gap-2 text-xs text-[#A8AAAE] mb-2">
            <a href="/student/learn/1" className="hover:text-[#7367F0]">Criminal Law & Procedure</a>
            <span>/</span>
            <span className="text-[#4B465C]">Assignment 1</span>
          </nav>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-[#4B465C]">Case Brief — State vs Accused under Sec 300 IPC</h1>
                {showReview && (
                  <span className="px-2.5 py-0.5 bg-[#28C76F]/10 text-[#28C76F] text-xs font-bold rounded-full">Submitted ✓</span>
                )}
              </div>
              <p className="text-sm text-[#A8AAAE]">Assignment 1 · Module 1 · Criminal Law & Procedure</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-2xl font-bold text-[#4B465C]">{showReview ? '18' : '?'} <span className="text-sm text-[#A8AAAE]">/ 25 marks</span></p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-lg border border-[#DBDADE] shadow-sm p-1 mb-6 w-fit">
          {['Before Submission', 'After Review'].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition ${
                (showReview ? i === 1 : i === 0)
                  ? 'bg-[#7367F0] text-white shadow-sm'
                  : 'text-[#A8AAAE] hover:text-[#4B465C]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {!showReview ? (
          /* ─── BEFORE SUBMISSION ─── */
          <div className="space-y-5">
            {/* Info bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: '📅', label: 'Due Date', val: 'Apr 5, 2025' },
                { icon: '⏰', label: 'Remaining', val: '5 days 14 hrs', urgent: false },
                { icon: '🏆', label: 'Max Marks', val: '25 marks' },
                { icon: '📌', label: 'Status', val: 'Not Submitted' },
              ].map(info => (
                <div key={info.label} className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-4">
                  <span className="text-lg mb-1 block">{info.icon}</span>
                  <p className="text-xs text-[#A8AAAE]">{info.label}</p>
                  <p className="text-sm font-semibold text-[#4B465C]">{info.val}</p>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6">
              <h2 className="font-semibold text-[#4B465C] mb-3">Instructions & Rubric</h2>
              <div className="space-y-2 text-sm text-[#4B465C] mb-4">
                <p className="leading-relaxed">
                  Write a structured case brief for a hypothetical criminal matter involving Section 300 IPC (murder vs culpable homicide not amounting to murder). Your brief should use the IRAC (Issue, Rule, Application, Conclusion) method.
                </p>
              </div>
              <div className="bg-[#F8F7FA] rounded-lg p-4">
                <p className="text-xs font-semibold text-[#A8AAAE] uppercase tracking-wider mb-3">Marking Criteria</p>
                <div className="space-y-2">
                  {[
                    ['Issue identification', '5 marks'],
                    ['Rule statement (applicable law)', '5 marks'],
                    ['Application to facts', '10 marks'],
                    ['Conclusion & arguments', '5 marks'],
                  ].map(([c, m]) => (
                    <div key={c} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7367F0]" />
                        <span className="text-[#4B465C]">{c}</span>
                      </div>
                      <span className="font-semibold text-[#7367F0]">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submission options */}
            <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6">
              <h2 className="font-semibold text-[#4B465C] mb-4">Your Submission</h2>

              {/* Text editor */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#4B465C] mb-1.5">Written Response</label>
                <div className="border border-[#DBDADE] rounded-lg overflow-hidden">
                  {/* Toolbar */}
                  <div className="flex items-center gap-1 px-3 py-2 bg-[#F8F7FA] border-b border-[#DBDADE]">
                    {['B', 'I', 'U'].map(f => (
                      <button key={f} className={`w-7 h-7 text-sm font-semibold rounded hover:bg-white transition ${f === 'B' ? 'font-bold' : ''} text-[#4B465C]`}>{f}</button>
                    ))}
                    <div className="w-px h-5 bg-[#DBDADE] mx-1" />
                    {['H1', 'H2', 'List', '1.'].map(f => (
                      <button key={f} className="w-7 h-7 text-xs font-medium rounded hover:bg-white transition text-[#4B465C]">{f}</button>
                    ))}
                  </div>
                  <textarea
                    className="w-full p-4 text-sm text-[#4B465C] placeholder:text-[#A8AAAE] focus:outline-none resize-none min-h-[250px]"
                    defaultValue={`ISSUE:
Whether the act of the accused constitutes murder under Section 300 IPC or culpable homicide not amounting to murder under Section 299 IPC?

RULE:
Section 299 IPC defines culpable homicide as an act done with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death, or with the knowledge that the act is likely to cause death.

Section 300 IPC elevates culpable homicide to murder where: (1) the act is done with the intention of causing death; (2) with intention to cause bodily injury that the accused knows is sufficient to cause death...

APPLICATION:
On the facts presented, the accused...`}
                  />
                  <div className="px-4 py-2 bg-[#F8F7FA] border-t border-[#DBDADE] flex justify-between text-xs text-[#A8AAAE]">
                    <span>Word count: 124 / 800 recommended</span>
                    <span>~0.5 pages</span>
                  </div>
                </div>
              </div>

              {/* File upload */}
              <div>
                <label className="block text-sm font-medium text-[#4B465C] mb-1.5">Upload Supporting Documents (Optional)</label>
                <div className="border-2 border-dashed border-[#DBDADE] rounded-lg p-6 text-center hover:border-[#7367F0]/50 transition cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#A8AAAE] mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-[#4B465C] font-medium">Drop files here or <span className="text-[#7367F0]">browse</span></p>
                  <p className="text-xs text-[#A8AAAE] mt-1">PDF, DOC, DOCX up to 10 MB</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-semibold rounded-lg transition shadow-sm">
                Submit Assignment
              </button>
              <button className="px-6 py-2.5 border border-[#DBDADE] text-[#4B465C] font-medium rounded-lg hover:bg-[#F8F7FA] transition">
                Save Draft
              </button>
            </div>
          </div>
        ) : (
          /* ─── AFTER REVIEW ─── */
          <div className="space-y-5">
            {/* Score card */}
            <div className="bg-white rounded-xl border border-[#28C76F]/30 shadow-sm p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#28C76F]/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#28C76F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#A8AAAE]">Assignment Reviewed</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#4B465C]">18</span>
                    <span className="text-lg text-[#A8AAAE]">/ 25 marks</span>
                    <span className="text-sm font-semibold text-[#28C76F]">72% — Good</span>
                  </div>
                  <p className="text-xs text-[#A8AAAE] mt-0.5">Reviewed by Adv. Ravi Shankar · Mar 28, 2025</p>
                </div>
              </div>

              {/* Score breakdown */}
              <div className="mt-5 pt-5 border-t border-[#DBDADE] grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { label: 'Issue identification', score: '4/5' },
                  { label: 'Rule statement', score: '5/5' },
                  { label: 'Application to facts', score: '7/10' },
                  { label: 'Conclusion', score: '2/5' },
                ].map(s => (
                  <div key={s.label} className="text-center p-2 bg-[#F8F7FA] rounded-lg">
                    <p className="text-sm font-bold text-[#7367F0]">{s.score}</p>
                    <p className="text-[10px] text-[#A8AAAE] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tutor feedback */}
            <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6">
              <h2 className="font-semibold text-[#4B465C] mb-3">Tutor Feedback</h2>
              <div className="bg-[#F8F7FA] rounded-lg p-4 text-sm text-[#4B465C] leading-relaxed">
                <p className="mb-2">
                  Good attempt overall. Your identification of the issue and rule statement are well-structured. However, the application section needs more depth — you should have specifically addressed each clause of Section 300 against the given facts, and explained why none of the five exceptions apply in this scenario.
                </p>
                <p className="mb-2">
                  The conclusion is too brief. A proper conclusion should summarize the legal reasoning and clearly state whether the accused is guilty of murder or the lesser charge, with the applicable section number.
                </p>
                <p className="text-[#7367F0] font-medium">Strong points: Citation of K.M. Nanavati case and use of IRAC structure throughout.</p>
              </div>

              {/* Inline comments */}
              <div className="mt-4">
                <p className="text-xs font-semibold text-[#A8AAAE] uppercase tracking-wider mb-3">Inline Comments</p>
                <div className="space-y-2">
                  {[
                    { part: 'Issue Section', comment: 'Well-identified. Consider also mentioning Section 304 as an alternative charge.' },
                    { part: 'Application — Para 3', comment: 'You need to analyze clause (2) of Section 300 separately — intention to cause bodily injury that is sufficient in the ordinary course of nature to cause death.' },
                    { part: 'Conclusion', comment: 'Too brief. State the final verdict and the specific clause of Section 300 under which the accused would be convicted.' },
                  ].map(c => (
                    <div key={c.part} className="border border-[#FF9F43]/30 bg-[#FF9F43]/5 rounded-lg p-3 flex gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#FF9F43] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      <div>
                        <p className="text-xs font-semibold text-[#FF9F43]">{c.part}</p>
                        <p className="text-xs text-[#4B465C] mt-0.5">{c.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resubmit */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-semibold rounded-lg transition shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Resubmit Assignment
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 border border-[#DBDADE] text-[#4B465C] font-medium rounded-lg hover:bg-[#F8F7FA] transition text-sm">
                Download Feedback PDF
              </button>
            </div>
          </div>
        )}

        {/* Preview of both states */}
        {!showReview && (
          <div className="mt-8 bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6">
            <div className="inline-flex items-center gap-2 bg-[#28C76F]/10 rounded-full px-3 py-1 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#28C76F]" />
              <span className="text-xs font-medium text-[#28C76F]">After Review state — Preview</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#28C76F]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#28C76F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#4B465C]">Marks: 18 / 25 — Reviewed ✓</p>
                <p className="text-sm text-[#A8AAAE]">Feedback by Adv. Ravi Shankar with inline comments and resubmit option available</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </StudentLayout>
  )
}
