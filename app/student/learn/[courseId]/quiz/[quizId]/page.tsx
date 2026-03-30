'use client'

const question = {
  number: 7,
  total: 20,
  text: 'Which of the following statements correctly distinguishes Section 299 (Culpable Homicide) from Section 300 (Murder) of the Indian Penal Code?',
  options: [
    { id: 'A', text: 'Section 299 requires proof of intention to cause death, while Section 300 does not require any intention.' },
    { id: 'B', text: 'Section 300 is a specific form of Section 299 with a higher threshold of intention or knowledge, subject to five exceptions.' },
    { id: 'C', text: 'The two sections are mutually exclusive and deal with entirely different factual situations without overlap.' },
    { id: 'D', text: 'Section 299 applies only to cases involving insanity, while Section 300 applies to all other cases of homicide.' },
  ],
  selected: 'B',
}

type DotStatus = 'answered' | 'flagged' | 'current' | 'unanswered'

const questionGrid: DotStatus[] = [
  'answered','answered','answered','answered','answered',
  'answered','current','unanswered','flagged','unanswered',
  'answered','answered','flagged','unanswered','unanswered',
  'unanswered','unanswered','unanswered','unanswered','unanswered',
]

const dotStyle: Record<DotStatus, string> = {
  answered: 'bg-[#28C76F] text-white',
  flagged: 'bg-[#EA5455] text-white',
  current: 'bg-[#7367F0] text-white ring-2 ring-[#7367F0]/30',
  unanswered: 'bg-[#F8F7FA] text-[#A8AAAE] border border-[#DBDADE]',
}

export default function QuizPage() {
  const showModal = true

  return (
    <div className="min-h-screen bg-[#F8F7FA]">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#DBDADE] shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#7367F0] flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="font-bold text-[#4B465C]">LexEd</span>
          </div>
          <div className="w-px h-5 bg-[#DBDADE]" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#4B465C]">Module 2 — Quick Quiz</p>
            <p className="text-xs text-[#A8AAAE]">Criminal Law & Procedure · No pause allowed</p>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-2 bg-[#FF9F43]/10 border border-[#FF9F43]/30 rounded-lg px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#FF9F43]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-mono font-bold text-[#FF9F43] text-lg">23:45</span>
          </div>

          {/* Warning */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-[#EA5455] bg-[#EA5455]/5 px-3 py-1.5 rounded-lg border border-[#EA5455]/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            No pause — timer continues
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Question counter bar */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-[#4B465C]">Question {question.number} of {question.total}</span>
          <div className="flex-1 mx-4 h-2 bg-[#DBDADE] rounded-full overflow-hidden">
            <div className="h-full bg-[#7367F0] rounded-full" style={{ width: `${(question.number / question.total) * 100}%` }} />
          </div>
          <span className="text-sm text-[#A8AAAE]">35% complete</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Question panel */}
          <div className="lg:col-span-2 space-y-4">
            {/* Question card */}
            <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#7367F0] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {question.number}
                </div>
                <p className="text-[#4B465C] font-medium leading-relaxed">{question.text}</p>
              </div>

              <div className="space-y-3">
                {question.options.map(opt => {
                  const isSelected = opt.id === question.selected
                  return (
                    <label
                      key={opt.id}
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition ${
                        isSelected
                          ? 'border-[#7367F0] bg-[#7367F0]/5'
                          : 'border-[#DBDADE] hover:border-[#7367F0]/40 hover:bg-[#F8F7FA]'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                        isSelected
                          ? 'border-[#7367F0] bg-[#7367F0] text-white'
                          : 'border-[#DBDADE] text-[#A8AAAE]'
                      }`}>
                        {opt.id}
                      </div>
                      <p className={`text-sm leading-relaxed ${isSelected ? 'text-[#4B465C] font-medium' : 'text-[#4B465C]'}`}>
                        {opt.text}
                      </p>
                      <input type="radio" name="answer" defaultChecked={isSelected} className="sr-only" />
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 border border-[#DBDADE] text-[#4B465C] text-sm font-medium rounded-lg hover:bg-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 border border-[#FF9F43]/50 text-[#FF9F43] text-sm font-medium rounded-lg hover:bg-[#FF9F43]/5 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                Flag Question
              </button>
              <button className="ml-auto flex items-center gap-2 px-5 py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-semibold text-sm rounded-lg transition">
                Next
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#28C76F] hover:bg-[#24B263] text-white font-semibold text-sm rounded-lg transition">
                Submit Quiz
              </button>
            </div>
          </div>

          {/* Right sidebar — question grid */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-4 sticky top-20">
              <p className="text-sm font-semibold text-[#4B465C] mb-3">Question Navigator</p>

              {/* Legend */}
              <div className="flex flex-wrap gap-2 mb-4 text-xs">
                {[
                  { color: 'bg-[#28C76F]', label: 'Answered' },
                  { color: 'bg-[#EA5455]', label: 'Flagged' },
                  { color: 'bg-[#7367F0]', label: 'Current' },
                  { color: 'bg-[#F8F7FA] border border-[#DBDADE]', label: 'Not answered' },
                ].map(l => (
                  <div key={l.label} className="flex items-center gap-1">
                    <div className={`w-3 h-3 rounded-sm ${l.color}`} />
                    <span className="text-[#A8AAAE]">{l.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-5 gap-1.5">
                {questionGrid.map((status, i) => (
                  <button
                    key={i}
                    className={`w-full aspect-square rounded-md text-xs font-bold transition hover:opacity-80 ${dotStyle[status]}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {/* Summary */}
              <div className="mt-4 pt-4 border-t border-[#DBDADE] space-y-1.5 text-xs">
                <div className="flex justify-between text-[#4B465C]">
                  <span>Answered</span>
                  <span className="font-semibold text-[#28C76F]">8</span>
                </div>
                <div className="flex justify-between text-[#4B465C]">
                  <span>Flagged</span>
                  <span className="font-semibold text-[#EA5455]">2</span>
                </div>
                <div className="flex justify-between text-[#4B465C]">
                  <span>Not answered</span>
                  <span className="font-semibold text-[#A8AAAE]">10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit confirmation modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="w-14 h-14 rounded-full bg-[#FF9F43]/15 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#FF9F43]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-center text-lg font-bold text-[#4B465C] mb-1">Submit Quiz?</h3>
            <p className="text-center text-[#A8AAAE] text-sm mb-4">
              <span className="text-[#EA5455] font-semibold">2 questions unanswered</span> · Are you sure you want to submit?
            </p>

            <div className="bg-[#F8F7FA] rounded-lg p-3 mb-5 space-y-1.5 text-sm">
              {[
                ['Answered', '8', 'text-[#28C76F]'],
                ['Flagged', '2', 'text-[#EA5455]'],
                ['Unanswered', '10', 'text-[#A8AAAE]'],
                ['Time remaining', '23:45', 'text-[#FF9F43]'],
              ].map(([k, v, c]) => (
                <div key={k} className="flex justify-between text-[#4B465C]">
                  <span>{k}</span>
                  <span className={`font-semibold ${c}`}>{v}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-2.5 border border-[#DBDADE] text-[#4B465C] font-semibold text-sm rounded-lg hover:bg-[#F8F7FA] transition">
                Continue Quiz
              </button>
              <a
                href="/student/learn/1/quiz/1/results"
                className="flex-1 py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-bold text-sm rounded-lg transition text-center"
              >
                Submit Anyway
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
