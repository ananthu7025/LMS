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
      <div className="mx-auto" style={{ maxWidth: 900 }}>
        {/* Score hero card */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-5">
            <div className="d-flex flex-column flex-md-row align-items-center gap-4">
              {/* Circular progress ring */}
              <div className="position-relative flex-shrink-0" style={{ width: 144, height: 144 }}>
                <svg className="w-100 h-100" viewBox="0 0 120 120" style={{ transform: 'rotate(-90deg)' }}>
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
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                  <span className="fs-3 fw-bold text-heading">{pct}%</span>
                  <span className="extra-small text-body-secondary">Score</span>
                </div>
              </div>

              {/* Score details */}
              <div className="flex-grow-1 text-center text-md-start">
                <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start mb-2">
                  <h3 className="display-6 fw-bold text-heading mb-0">{score} / {total}</h3>
                  <span className={`badge ${pass ? 'bg-label-success' : 'bg-label-danger'} small fw-bold`}>
                    {pass ? 'PASS ✓' : 'FAIL ✗'}
                  </span>
                </div>
                <p className="small text-body-secondary mb-3">Module 2 Quiz · Criminal Law &amp; Procedure</p>

                <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-md-start">
                  {[
                    { label: 'Time Taken', val: '38:22', color: 'text-warning' },
                    { label: 'Correct', val: '42', color: 'text-success' },
                    { label: 'Incorrect', val: '12', color: 'text-danger' },
                    { label: 'Skipped', val: '6', color: 'text-body-secondary' },
                  ].map(s => (
                    <div key={s.label} className="text-center">
                      <p className={`fs-5 fw-bold ${s.color} mb-0`}>{s.val}</p>
                      <p className="extra-small text-body-secondary mb-0">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rank */}
              <div className="text-center bg-label-primary border border-primary border-opacity-25 rounded p-3" style={{ minWidth: 140 }}>
                <div className="avatar avatar-sm mx-auto mb-2">
                  <span className="avatar-initial rounded-circle bg-label-primary">
                    <i className="ti tabler-trophy"></i>
                  </span>
                </div>
                <p className="fs-4 fw-bold text-primary mb-0">#4</p>
                <p className="extra-small text-body-secondary mb-0">out of 89 students</p>
                <div className="mt-2 pt-2 border-top border-primary border-opacity-25">
                  <p className="extra-small text-body-secondary mb-0">Percentile</p>
                  <p className="small fw-bold text-heading mb-0">95.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section-wise breakdown */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h6 className="fw-bold text-heading mb-3">Section-wise Performance</h6>
            <div className="d-flex flex-column gap-3">
              {[
                { label: 'General Principles of IPC', correct: 8, total: 10, color: '#28C76F' },
                { label: 'General Exceptions (Sec 76–106)', correct: 14, total: 20, color: '#7367F0' },
                { label: 'Offences Against Human Body', correct: 12, total: 18, color: '#FF9F43' },
                { label: 'Criminal Procedure (CrPC)', correct: 8, total: 12, color: '#00CFE8' },
              ].map(section => {
                const pctS = Math.round((section.correct / section.total) * 100)
                return (
                  <div key={section.label}>
                    <div className="d-flex align-items-center justify-content-between small mb-1">
                      <span className="text-heading">{section.label}</span>
                      <span className="fw-bold text-heading">{section.correct}/{section.total} ({pctS}%)</span>
                    </div>
                    <div className="progress rounded-pill" style={{ height: 8 }}>
                      <div className="progress-bar rounded-pill" role="progressbar" style={{ width: `${pctS}%`, backgroundColor: section.color }}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Question review */}
        <div className="card shadow-sm mb-4">
          <div className="card-body p-4">
            <h6 className="fw-bold text-heading mb-3">Question Review (5 of 60)</h6>
            <div className="d-flex flex-column gap-3">
              {reviewQuestions.map(q => {
                const isCorrect = q.selected === q.correct
                return (
                  <div key={q.num} className={`border rounded p-3 ${isCorrect ? 'border-success bg-label-success' : 'border-danger bg-label-danger'}`}>
                    <div className="d-flex align-items-start gap-3">
                      <div className={`avatar avatar-xs rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${isCorrect ? 'bg-success' : 'bg-danger'}`}>
                        <span className="text-white extra-small fw-bold">{q.num}</span>
                      </div>
                      <div className="flex-grow-1">
                        <p className="small fw-medium text-heading mb-3">{q.text}</p>
                        <div className="row g-2 mb-3">
                          {q.options.map((opt, i) => {
                            const letter = ['A','B','C','D'][i]
                            const isStudentAnswer = letter === q.selected
                            const isCorrectAnswer = letter === q.correct
                            return (
                              <div key={letter} className="col-sm-6">
                                <div className={`d-flex align-items-center gap-2 px-3 py-2 rounded extra-small ${
                                  isCorrectAnswer
                                    ? 'bg-success text-white fw-bold'
                                    : isStudentAnswer && !isCorrect
                                    ? 'bg-danger text-white'
                                    : 'bg-white border text-heading'
                                }`}>
                                  <span className="fw-bold" style={{ width: 16 }}>{letter}.</span>
                                  <span>{opt}</span>
                                  {isCorrectAnswer && (
                                    <i className="ti tabler-check ms-auto flex-shrink-0"></i>
                                  )}
                                  {isStudentAnswer && !isCorrect && (
                                    <i className="ti tabler-x ms-auto flex-shrink-0"></i>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        {!isCorrect && q.explanation && (
                          <div className="bg-white border border-primary border-opacity-25 rounded p-3">
                            <p className="extra-small fw-bold text-primary mb-1">Explanation</p>
                            <p className="extra-small text-heading lh-base mb-0">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="d-flex flex-wrap gap-3 justify-content-center pb-4">
          <button className="btn btn-primary d-flex align-items-center gap-2">
            <i className="ti tabler-refresh small"></i>
            Retake Quiz
          </button>
          <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
            <i className="ti tabler-download small"></i>
            Download PDF Report
          </button>
          <a href="/student/learn/1/lesson/8" className="btn btn-success d-flex align-items-center gap-2">
            Next Lesson
            <i className="ti tabler-chevron-right small"></i>
          </a>
          <button className="btn btn-outline-primary d-flex align-items-center gap-2">
            <i className="ti tabler-share small"></i>
            Share Score
          </button>
        </div>
      </div>
    </StudentLayout>
  )
}
