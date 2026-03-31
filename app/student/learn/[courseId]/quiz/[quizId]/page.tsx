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
  answered: 'bg-success text-white',
  flagged: 'bg-danger text-white',
  current: 'bg-primary text-white shadow-sm',
  unanswered: 'bg-label-secondary text-body-secondary border',
}

export default function QuizPage() {
  const showModal = true

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#f8f7fa' }}>
      {/* Header */}
      <div className="sticky-top bg-white border-bottom shadow-sm" style={{ zIndex: 50 }}>
        <div className="mx-auto px-4 d-flex align-items-center gap-3" style={{ maxWidth: 1100, height: 56 }}>
          <div className="d-flex align-items-center gap-2">
            <div className="avatar avatar-xs rounded bg-primary d-flex align-items-center justify-content-center">
              <span className="text-white fw-bold extra-small">L</span>
            </div>
            <span className="fw-bold text-heading">LexEd</span>
          </div>
          <div className="vr"></div>
          <div className="flex-grow-1">
            <p className="small fw-bold text-heading mb-0">Module 2 — Quick Quiz</p>
            <p className="extra-small text-body-secondary mb-0">Criminal Law &amp; Procedure · No pause allowed</p>
          </div>

          {/* Timer */}
          <div className="d-flex align-items-center gap-2 bg-label-warning border border-warning border-opacity-25 rounded px-3 py-2">
            <i className="ti tabler-clock text-warning"></i>
            <span className="fw-bold text-warning fs-5" style={{ fontFamily: 'monospace' }}>23:45</span>
          </div>

          {/* Warning */}
          <div className="d-none d-md-flex align-items-center gap-1 extra-small text-danger bg-label-danger px-3 py-2 rounded">
            <i className="ti tabler-alert-triangle"></i>
            No pause — timer continues
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-4" style={{ maxWidth: 1100 }}>
        {/* Question counter bar */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <span className="small fw-bold text-heading">Question {question.number} of {question.total}</span>
          <div className="flex-grow-1 mx-3">
            <div className="progress rounded-pill" style={{ height: 6 }}>
              <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${(question.number / question.total) * 100}%` }}></div>
            </div>
          </div>
          <span className="small text-body-secondary">35% complete</span>
        </div>

        <div className="row g-4">
          {/* Question panel */}
          <div className="col-lg-8">
            {/* Question card */}
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-start gap-3 mb-4">
                  <div className="avatar avatar-sm rounded-circle bg-primary d-flex align-items-center justify-content-center flex-shrink-0">
                    <span className="text-white fw-bold small">{question.number}</span>
                  </div>
                  <p className="text-heading fw-medium lh-base mb-0">{question.text}</p>
                </div>

                <div className="d-flex flex-column gap-3">
                  {question.options.map(opt => {
                    const isSelected = opt.id === question.selected
                    return (
                      <label
                        key={opt.id}
                        className={`d-flex align-items-start gap-3 p-3 rounded border border-2 cursor-pointer ${
                          isSelected
                            ? 'border-primary bg-label-primary'
                            : 'border-light'
                        }`}
                      >
                        <div className={`rounded-circle d-flex align-items-center justify-content-center extra-small fw-bold flex-shrink-0 ${
                          isSelected
                            ? 'bg-primary text-white'
                            : 'border border-2 text-body-secondary'
                        }`} style={{ width: 28, height: 28 }}>
                          {opt.id}
                        </div>
                        <p className={`small lh-base mb-0 ${isSelected ? 'text-heading fw-medium' : 'text-heading'}`}>
                          {opt.text}
                        </p>
                        <input type="radio" name="answer" defaultChecked={isSelected} className="d-none" />
                      </label>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2">
                <i className="ti tabler-chevron-left small"></i>
                Previous
              </button>
              <button className="btn btn-outline-warning btn-sm d-flex align-items-center gap-2">
                <i className="ti tabler-flag small"></i>
                Flag Question
              </button>
              <button className="btn btn-primary btn-sm ms-auto d-flex align-items-center gap-2">
                Next
                <i className="ti tabler-chevron-right small"></i>
              </button>
              <button className="btn btn-success btn-sm d-flex align-items-center gap-2">
                Submit Quiz
              </button>
            </div>
          </div>

          {/* Right sidebar — question grid */}
          <div className="col-lg-4">
            <div className="card shadow-sm position-sticky" style={{ top: 80 }}>
              <div className="card-body p-4">
                <p className="small fw-bold text-heading mb-3">Question Navigator</p>

                {/* Legend */}
                <div className="d-flex flex-wrap gap-2 mb-3 extra-small">
                  {[
                    { cls: 'bg-success', label: 'Answered' },
                    { cls: 'bg-danger', label: 'Flagged' },
                    { cls: 'bg-primary', label: 'Current' },
                    { cls: 'bg-label-secondary border', label: 'Not answered' },
                  ].map(l => (
                    <div key={l.label} className="d-flex align-items-center gap-1">
                      <div className={`rounded ${l.cls}`} style={{ width: 12, height: 12 }}></div>
                      <span className="text-body-secondary">{l.label}</span>
                    </div>
                  ))}
                </div>

                <div className="d-grid gap-1" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
                  {questionGrid.map((status, i) => (
                    <button
                      key={i}
                      className={`btn btn-sm p-2 extra-small fw-bold rounded ${dotStyle[status]}`}
                      style={{ aspectRatio: '1' }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-3 pt-3 border-top extra-small">
                  <div className="d-flex justify-content-between text-heading mb-1">
                    <span>Answered</span>
                    <span className="fw-bold text-success">8</span>
                  </div>
                  <div className="d-flex justify-content-between text-heading mb-1">
                    <span>Flagged</span>
                    <span className="fw-bold text-danger">2</span>
                  </div>
                  <div className="d-flex justify-content-between text-heading">
                    <span>Not answered</span>
                    <span className="fw-bold text-body-secondary">10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit confirmation modal */}
      {showModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 100 }}>
          <div className="card shadow-lg rounded-4" style={{ maxWidth: 440, width: '100%' }}>
            <div className="card-body p-4 text-center">
              <div className="avatar avatar-lg mx-auto mb-3">
                <span className="avatar-initial rounded-circle bg-label-warning">
                  <i className="ti tabler-alert-triangle fs-3"></i>
                </span>
              </div>
              <h5 className="fw-bold text-heading mb-1">Submit Quiz?</h5>
              <p className="text-body-secondary small mb-4">
                <span className="text-danger fw-bold">2 questions unanswered</span> · Are you sure you want to submit?
              </p>

              <div className="bg-label-secondary rounded p-3 mb-4 small">
                {[
                  ['Answered', '8', 'text-success'],
                  ['Flagged', '2', 'text-danger'],
                  ['Unanswered', '10', 'text-body-secondary'],
                  ['Time remaining', '23:45', 'text-warning'],
                ].map(([k, v, c]) => (
                  <div key={k} className="d-flex justify-content-between text-heading mb-1">
                    <span>{k}</span>
                    <span className={`fw-bold ${c}`}>{v}</span>
                  </div>
                ))}
              </div>

              <div className="d-flex gap-3">
                <button className="btn btn-outline-secondary flex-grow-1">
                  Continue Quiz
                </button>
                <a
                  href="/student/learn/1/quiz/1/results"
                  className="btn btn-primary flex-grow-1 fw-bold text-center"
                >
                  Submit Anyway
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
