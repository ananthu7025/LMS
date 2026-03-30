'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

const reviewQuestions = [
  {
    num: 1,
    text: 'Which section of IPC deals with culpable homicide?',
    selected: 'A',
    correct: 'A',
    options: ['Section 299', 'Section 300', 'Section 302', 'Section 304'],
    explanation: '',
  },
  {
    num: 2,
    text: 'Under which exception to Section 300 does "sudden fight" fall?',
    selected: 'B',
    correct: 'D',
    options: ['Exception 1', 'Exception 2', 'Exception 3', 'Exception 4'],
    explanation: 'Exception 4 of Section 300 deals with acts done in a sudden fight in the heat of passion. Exception 1 covers provocation, Exception 2 covers consent, and Exception 3 covers public servant exceeding powers.',
  },
  {
    num: 3,
    text: 'The K.M. Nanavati case is primarily associated with which legal concept?',
    selected: 'C',
    correct: 'C',
    options: ['Right of private defence', 'Grave and sudden provocation', 'Trial by jury — last case in India', 'Unsoundness of mind'],
    explanation: '',
  },
  {
    num: 7,
    text: 'Which of the following statements correctly distinguishes Section 299 from Section 300?',
    selected: 'B',
    correct: 'B',
    options: [
      'Section 299 requires intention to cause death, while 300 does not.',
      'Section 300 is a specific form of Section 299 with higher threshold, subject to five exceptions.',
      'The two sections are mutually exclusive.',
      'Section 299 applies only to insanity cases.',
    ],
    explanation: '',
  },
  {
    num: 9,
    text: 'Which case established the "attractive nuisance" doctrine in India?',
    selected: 'A',
    correct: 'C',
    options: ['Rylands v Fletcher', 'Donoghue v Stevenson', 'Municipal Corporation of Delhi v Subhagwanti', 'M.C. Mehta v Union of India'],
    explanation: 'The Municipal Corporation of Delhi v Subhagwanti case is the Indian case dealing with nuisance by municipal structures. Note: "attractive nuisance" is primarily a US doctrine; in India, we follow the Rylands v Fletcher principle adapted by Indian courts.',
  },
]

export default function QuizResultsPage() {
  const score = 42
  const total = 60
  const pct = Math.round((score / total) * 100)
  const pass = pct >= 60

  return (
    <StudentLayout activePath="/student/learn">
      <div className="max-w-4xl mx-auto">
        {/* Score hero card */}
        <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Circular progress ring */}
            <div className="relative w-36 h-36 flex-shrink-0">
              <svg className="w-36 h-36 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#F8F7FA" strokeWidth="12" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke={pass ? '#28C76F' : '#EA5455'}
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 52}`}
                  strokeDashoffset={`${2 * Math.PI * 52 * (1 - pct / 100)}`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[#4B465C]">{pct}%</span>
                <span className="text-xs text-[#A8AAAE]">Score</span>
              </div>
            </div>

            {/* Score details */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <h1 className="text-4xl font-bold text-[#4B465C]">{score} / {total}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${pass ? 'bg-[#28C76F]/10 text-[#28C76F]' : 'bg-[#EA5455]/10 text-[#EA5455]'}`}>
                  {pass ? 'PASS ✓' : 'FAIL ✗'}
                </span>
              </div>
              <p className="text-[#A8AAAE] text-sm mb-4">Module 2 Quiz · Criminal Law & Procedure</p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {[
                  { label: 'Time Taken', val: '38:22', color: 'text-[#FF9F43]' },
                  { label: 'Correct', val: '42', color: 'text-[#28C76F]' },
                  { label: 'Incorrect', val: '12', color: 'text-[#EA5455]' },
                  { label: 'Skipped', val: '6', color: 'text-[#A8AAAE]' },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <p className={`text-xl font-bold ${s.color}`}>{s.val}</p>
                    <p className="text-xs text-[#A8AAAE]">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rank */}
            <div className="text-center bg-[#7367F0]/5 border border-[#7367F0]/20 rounded-xl p-4 min-w-[140px]">
              <div className="w-10 h-10 rounded-full bg-[#7367F0]/10 flex items-center justify-center mx-auto mb-2">
                <span className="text-lg">🏆</span>
              </div>
              <p className="text-2xl font-bold text-[#7367F0]">#4</p>
              <p className="text-xs text-[#A8AAAE]">out of 89 students</p>
              <div className="mt-2 pt-2 border-t border-[#7367F0]/20">
                <p className="text-xs text-[#A8AAAE]">Percentile</p>
                <p className="text-sm font-bold text-[#4B465C]">95.5%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section-wise breakdown */}
        <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6 mb-6">
          <h2 className="text-base font-bold text-[#4B465C] mb-4">Section-wise Performance</h2>
          <div className="space-y-3">
            {[
              { label: 'General Principles of IPC', correct: 8, total: 10, color: '#28C76F' },
              { label: 'General Exceptions (Sec 76–106)', correct: 14, total: 20, color: '#7367F0' },
              { label: 'Offences Against Human Body', correct: 12, total: 18, color: '#FF9F43' },
              { label: 'Criminal Procedure (CrPC)', correct: 8, total: 12, color: '#00CFE8' },
            ].map(section => {
              const pctS = Math.round((section.correct / section.total) * 100)
              return (
                <div key={section.label}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-[#4B465C]">{section.label}</span>
                    <span className="font-semibold text-[#4B465C]">{section.correct}/{section.total} ({pctS}%)</span>
                  </div>
                  <div className="h-2.5 bg-[#F8F7FA] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pctS}%`, backgroundColor: section.color }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Question review */}
        <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-6 mb-6">
          <h2 className="text-base font-bold text-[#4B465C] mb-4">Question Review (5 of 60)</h2>
          <div className="space-y-4">
            {reviewQuestions.map(q => {
              const isCorrect = q.selected === q.correct
              return (
                <div key={q.num} className={`border rounded-xl p-4 ${isCorrect ? 'border-[#28C76F]/30 bg-[#28C76F]/5' : 'border-[#EA5455]/30 bg-[#EA5455]/5'}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${isCorrect ? 'bg-[#28C76F] text-white' : 'bg-[#EA5455] text-white'}`}>
                      {q.num}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#4B465C] mb-3">{q.text}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
                        {q.options.map((opt, i) => {
                          const letter = ['A','B','C','D'][i]
                          const isStudentAnswer = letter === q.selected
                          const isCorrectAnswer = letter === q.correct
                          return (
                            <div
                              key={letter}
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs ${
                                isCorrectAnswer
                                  ? 'bg-[#28C76F] text-white font-semibold'
                                  : isStudentAnswer && !isCorrect
                                  ? 'bg-[#EA5455] text-white'
                                  : 'bg-white border border-[#DBDADE] text-[#4B465C]'
                              }`}
                            >
                              <span className="font-bold w-4">{letter}.</span>
                              <span>{opt}</span>
                              {isCorrectAnswer && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                              {isStudentAnswer && !isCorrect && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 ml-auto flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              )}
                            </div>
                          )
                        })}
                      </div>
                      {!isCorrect && q.explanation && (
                        <div className="bg-white border border-[#7367F0]/20 rounded-lg p-3">
                          <p className="text-xs font-semibold text-[#7367F0] mb-1">Explanation</p>
                          <p className="text-xs text-[#4B465C] leading-relaxed">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 justify-center pb-6">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#7367F0] text-white font-semibold rounded-lg hover:bg-[#5E50E2] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Retake Quiz
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 border border-[#DBDADE] text-[#4B465C] font-semibold rounded-lg hover:bg-[#F8F7FA] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Report
          </button>
          <a href="/student/learn/1/lesson/8" className="flex items-center gap-2 px-5 py-2.5 bg-[#28C76F] text-white font-semibold rounded-lg hover:bg-[#24B263] transition">
            Next Lesson
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <button className="flex items-center gap-2 px-5 py-2.5 border border-[#7367F0]/50 text-[#7367F0] font-semibold rounded-lg hover:bg-[#7367F0]/5 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share Score
          </button>
        </div>
      </div>
    </StudentLayout>
  )
}
