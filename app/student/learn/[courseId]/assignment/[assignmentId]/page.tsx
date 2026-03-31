'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

const showReview = false

export default function AssignmentPage() {
  return (
    <StudentLayout activePath="/student/learn">
      <div className="mx-auto" style={{ maxWidth: 900 }}>
        {/* Header */}
        <div className="mb-4">
          <nav aria-label="breadcrumb" className="mb-2">
            <ol className="breadcrumb extra-small">
              <li className="breadcrumb-item"><a href="/student/learn/1">Criminal Law &amp; Procedure</a></li>
              <li className="breadcrumb-item active">Assignment 1</li>
            </ol>
          </nav>
          <div className="d-flex align-items-start gap-3">
            <div className="flex-grow-1">
              <div className="d-flex align-items-center gap-2 mb-1">
                <h5 className="fw-bold text-heading mb-0">Case Brief — State vs Accused under Sec 300 IPC</h5>
                {showReview && (
                  <span className="badge bg-label-success small">Submitted ✓</span>
                )}
              </div>
              <p className="small text-body-secondary mb-0">Assignment 1 · Module 1 · Criminal Law &amp; Procedure</p>
            </div>
            <div className="text-end flex-shrink-0">
              <p className="fs-4 fw-bold text-heading mb-0">{showReview ? '18' : '?'} <span className="small text-body-secondary">/ 25 marks</span></p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="d-inline-flex gap-1 bg-white rounded border shadow-sm p-1 mb-4">
          {['Before Submission', 'After Review'].map((tab, i) => (
            <button
              key={tab}
              className={`btn btn-sm px-3 py-1 small fw-medium ${
                (showReview ? i === 1 : i === 0)
                  ? 'btn-primary shadow-sm'
                  : 'btn-text-secondary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {!showReview ? (
          /* BEFORE SUBMISSION */
          <div className="d-flex flex-column gap-4">
            {/* Info bar */}
            <div className="row g-3">
              {[
                { icon: 'ti tabler-calendar', label: 'Due Date', val: 'Apr 5, 2025', color: 'primary' },
                { icon: 'ti tabler-clock', label: 'Remaining', val: '5 days 14 hrs', color: 'warning' },
                { icon: 'ti tabler-trophy', label: 'Max Marks', val: '25 marks', color: 'success' },
                { icon: 'ti tabler-pin', label: 'Status', val: 'Not Submitted', color: 'danger' },
              ].map(info => (
                <div key={info.label} className="col-6 col-md-3">
                  <div className="card shadow-sm h-100">
                    <div className="card-body p-3">
                      <div className={`avatar avatar-xs rounded bg-label-${info.color} d-flex align-items-center justify-content-center mb-2`}>
                        <i className={`${info.icon} extra-small`}></i>
                      </div>
                      <p className="extra-small text-body-secondary mb-0">{info.label}</p>
                      <p className="small fw-bold text-heading mb-0">{info.val}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h6 className="fw-bold text-heading mb-3">Instructions &amp; Rubric</h6>
                <p className="small text-heading lh-base mb-4">
                  Write a structured case brief for a hypothetical criminal matter involving Section 300 IPC (murder vs culpable homicide not amounting to murder). Your brief should use the IRAC (Issue, Rule, Application, Conclusion) method.
                </p>
                <div className="bg-label-secondary rounded p-3">
                  <p className="extra-small fw-bold text-body-secondary text-uppercase mb-3" style={{ letterSpacing: 1 }}>Marking Criteria</p>
                  {[
                    ['Issue identification', '5 marks'],
                    ['Rule statement (applicable law)', '5 marks'],
                    ['Application to facts', '10 marks'],
                    ['Conclusion & arguments', '5 marks'],
                  ].map(([c, m]) => (
                    <div key={c} className="d-flex align-items-center justify-content-between small mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <span className="rounded-circle bg-primary d-inline-block" style={{ width: 6, height: 6 }}></span>
                        <span className="text-heading">{c}</span>
                      </div>
                      <span className="fw-bold text-primary">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Submission */}
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h6 className="fw-bold text-heading mb-3">Your Submission</h6>

                {/* Text editor */}
                <div className="mb-4">
                  <label className="form-label small fw-medium">Written Response</label>
                  <div className="border rounded overflow-hidden">
                    <div className="d-flex align-items-center gap-1 px-3 py-2 bg-label-secondary border-bottom flex-wrap">
                      {['B', 'I', 'U'].map(f => (
                        <button key={f} className="btn btn-sm px-2 py-1 text-heading small fw-bold">{f}</button>
                      ))}
                      <div className="vr mx-1"></div>
                      {['H1', 'H2', 'List', '1.'].map(f => (
                        <button key={f} className="btn btn-sm px-2 py-1 text-heading extra-small fw-medium">{f}</button>
                      ))}
                    </div>
                    <textarea
                      className="form-control border-0 shadow-none"
                      style={{ fontFamily: '"Times New Roman", serif', fontSize: 14, lineHeight: 2, minHeight: 250 }}
                      defaultValue={`ISSUE:\nWhether the act of the accused constitutes murder under Section 300 IPC or culpable homicide not amounting to murder under Section 299 IPC?\n\nRULE:\nSection 299 IPC defines culpable homicide as an act done with the intention of causing death, or with the intention of causing such bodily injury as is likely to cause death, or with the knowledge that the act is likely to cause death.\n\nSection 300 IPC elevates culpable homicide to murder where: (1) the act is done with the intention of causing death; (2) with intention to cause bodily injury that the accused knows is sufficient to cause death...\n\nAPPLICATION:\nOn the facts presented, the accused...`}
                    ></textarea>
                    <div className="px-3 py-2 bg-label-secondary border-top d-flex justify-content-between extra-small text-body-secondary">
                      <span>Word count: 124 / 800 recommended</span>
                      <span>~0.5 pages</span>
                    </div>
                  </div>
                </div>

                {/* File upload */}
                <div>
                  <label className="form-label small fw-medium">Upload Supporting Documents (Optional)</label>
                  <div className="border border-2 border-dashed rounded p-4 text-center cursor-pointer">
                    <i className="ti tabler-cloud-upload fs-2 text-body-secondary mb-2 d-block"></i>
                    <p className="small fw-medium text-heading mb-1">Drop files here or <span className="text-primary">browse</span></p>
                    <p className="extra-small text-body-secondary mb-0">PDF, DOC, DOCX up to 10 MB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="d-flex gap-3">
              <button className="btn btn-primary px-4">Submit Assignment</button>
              <button className="btn btn-outline-secondary px-4">Save Draft</button>
            </div>
          </div>
        ) : (
          /* AFTER REVIEW */
          <div className="d-flex flex-column gap-4">
            {/* Score card */}
            <div className="card shadow-sm border-success">
              <div className="card-body p-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="avatar avatar-lg">
                    <span className="avatar-initial rounded-circle bg-label-success">
                      <i className="ti tabler-check fs-3"></i>
                    </span>
                  </div>
                  <div>
                    <p className="small text-body-secondary mb-0">Assignment Reviewed</p>
                    <div className="d-flex align-items-baseline gap-2">
                      <span className="display-6 fw-bold text-heading">18</span>
                      <span className="fs-5 text-body-secondary">/ 25 marks</span>
                      <span className="small fw-bold text-success">72% — Good</span>
                    </div>
                    <p className="extra-small text-body-secondary mb-0">Reviewed by Adv. Ravi Shankar · Mar 28, 2025</p>
                  </div>
                </div>

                {/* Score breakdown */}
                <div className="mt-4 pt-4 border-top row g-3">
                  {[
                    { label: 'Issue identification', score: '4/5' },
                    { label: 'Rule statement', score: '5/5' },
                    { label: 'Application to facts', score: '7/10' },
                    { label: 'Conclusion', score: '2/5' },
                  ].map(s => (
                    <div key={s.label} className="col-6 col-md-3">
                      <div className="text-center p-2 bg-label-secondary rounded">
                        <p className="small fw-bold text-primary mb-0">{s.score}</p>
                        <p className="extra-small text-body-secondary mb-0">{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tutor feedback */}
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h6 className="fw-bold text-heading mb-3">Tutor Feedback</h6>
                <div className="bg-label-secondary rounded p-4 small text-heading lh-base">
                  <p className="mb-2">Good attempt overall. Your identification of the issue and rule statement are well-structured. However, the application section needs more depth — you should have specifically addressed each clause of Section 300 against the given facts, and explained why none of the five exceptions apply in this scenario.</p>
                  <p className="mb-2">The conclusion is too brief. A proper conclusion should summarize the legal reasoning and clearly state whether the accused is guilty of murder or the lesser charge, with the applicable section number.</p>
                  <p className="text-primary fw-medium mb-0">Strong points: Citation of K.M. Nanavati case and use of IRAC structure throughout.</p>
                </div>

                {/* Inline comments */}
                <div className="mt-4">
                  <p className="extra-small fw-bold text-body-secondary text-uppercase mb-3" style={{ letterSpacing: 1 }}>Inline Comments</p>
                  <div className="d-flex flex-column gap-2">
                    {[
                      { part: 'Issue Section', comment: 'Well-identified. Consider also mentioning Section 304 as an alternative charge.' },
                      { part: 'Application — Para 3', comment: 'You need to analyze clause (2) of Section 300 separately — intention to cause bodily injury that is sufficient in the ordinary course of nature to cause death.' },
                      { part: 'Conclusion', comment: 'Too brief. State the final verdict and the specific clause of Section 300 under which the accused would be convicted.' },
                    ].map(c => (
                      <div key={c.part} className="border border-warning bg-label-warning rounded p-3 d-flex gap-2">
                        <i className="ti tabler-message-2 text-warning flex-shrink-0 mt-1"></i>
                        <div>
                          <p className="extra-small fw-bold text-warning mb-1">{c.part}</p>
                          <p className="extra-small text-heading mb-0">{c.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resubmit */}
            <div className="d-flex gap-3">
              <button className="btn btn-primary d-flex align-items-center gap-2 px-4">
                <i className="ti tabler-refresh small"></i>
                Resubmit Assignment
              </button>
              <button className="btn btn-outline-secondary d-flex align-items-center gap-2 px-4 small">
                Download Feedback PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </StudentLayout>
  )
}
