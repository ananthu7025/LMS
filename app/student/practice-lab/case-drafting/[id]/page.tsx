'use client'
import { useState } from 'react'
import StudentLayout from '@/components/layouts/StudentLayout'

const issues = ['Establish jurisdiction of the Sessions Court', 'State the specific offence — Section 302 IPC', 'Lay out the prima facie evidence against the accused', 'Include the appropriate prayer for trial']
const lawSections = ['Sec 299 IPC', 'Sec 300 IPC', 'Sec 302 IPC', 'Sec 304 IPC', 'Sec 154 CrPC']
const precedents = [
  { name: 'State of UP v. Ram Sagar Yadav', court: 'Supreme Court', year: '1985', holding: 'Ingredients of Section 302 — intention to cause death established by surrounding circumstances' },
  { name: 'Bachan Singh v. State of Punjab', court: 'Supreme Court', year: '1980', holding: 'Death penalty under Section 302 — rarest of rare doctrine established' },
]

const iracStatus = [
  { label: 'Issue', status: 'success', note: 'Well identified' },
  { label: 'Rule', status: 'success', note: 'Sections cited' },
  { label: 'Application', status: 'warning', note: 'Needs more facts' },
  { label: 'Conclusion', status: 'danger', note: 'Prayer missing' },
]

const statusIcon: Record<string, string> = {
  success: 'ti tabler-check',
  warning: 'ti tabler-alert-triangle',
  danger: 'ti tabler-x',
}

export default function CaseDraftingPage() {
  const [briefOpen, setBriefOpen] = useState(true)
  const [checkedIssues, setCheckedIssues] = useState([true, true, false, false])

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#f8f7fa' }}>
      {/* Top bar */}
      <div className="sticky-top bg-white border-bottom shadow-sm d-flex align-items-center gap-3 px-4" style={{ height: 52, zIndex: 50 }}>
        <a href="/student/practice-lab" className="small text-body-secondary text-decoration-none d-flex align-items-center gap-1">
          <i className="ti tabler-chevron-left"></i> Back
        </a>
        <div className="d-flex align-items-center gap-2">
          <i className="ti tabler-scale text-primary"></i>
          <span className="fw-bold text-heading">Case Drafting Studio</span>
        </div>
        <span className="badge bg-label-warning">Intermediate</span>
        <span className="extra-small text-body-secondary">Bail Application — Sessions Court</span>
        <div className="ms-auto d-flex gap-2 align-items-center">
          <span className="extra-small text-body-secondary">
            <i className="ti tabler-device-floppy me-1"></i>Saved 2 min ago
          </span>
          <span className="extra-small text-body-secondary">847 words · ~3 pages</span>
          <button className="btn btn-success btn-sm d-flex align-items-center gap-1">
            <i className="ti tabler-upload small"></i>
            Submit for Review
          </button>
        </div>
      </div>

      <div className="d-flex flex-grow-1 overflow-hidden">
        {/* Case Brief Panel */}
        <div className="bg-white border-end flex-shrink-0 overflow-hidden" style={{ width: briefOpen ? 280 : 40, transition: 'width 0.2s' }}>
          <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
            {briefOpen && (
              <span className="fw-bold small d-flex align-items-center gap-1">
                <i className="ti tabler-clipboard-list text-primary"></i> Case Brief
              </span>
            )}
            <button onClick={() => setBriefOpen(o => !o)} className="btn btn-sm p-0 text-body-secondary border-0 bg-transparent">
              <i className={`ti ${briefOpen ? 'tabler-chevron-left' : 'tabler-chevron-right'}`}></i>
            </button>
          </div>
          {briefOpen && (
            <div className="p-3 overflow-auto" style={{ maxHeight: 'calc(100vh - 100px)' }}>
              <p className="extra-small fw-bold text-body-secondary text-uppercase mb-2" style={{ letterSpacing: 0.5 }}>Facts</p>
              <p className="extra-small text-heading lh-base mb-3">
                Accused Ram Kumar allegedly caused the death of Shyam Lal on January 15, 2025 at approximately 11 PM in New Delhi. Witnesses place the accused at the scene. A weapon matching injuries was recovered from the accused. The accused has a prior criminal record.
              </p>

              <p className="extra-small fw-bold text-body-secondary text-uppercase mb-2" style={{ letterSpacing: 0.5 }}>Issues to Address</p>
              {issues.map((issue, i) => (
                <label key={i} className="d-flex gap-2 mb-2 cursor-pointer align-items-start">
                  <input
                    type="checkbox"
                    className="form-check-input mt-1"
                    checked={checkedIssues[i]}
                    onChange={e => { const n = [...checkedIssues]; n[i] = e.target.checked; setCheckedIssues(n) }}
                  />
                  <span className={`extra-small lh-base ${checkedIssues[i] ? 'text-heading text-decoration-line-through' : 'text-body-secondary'}`}>{issue}</span>
                </label>
              ))}

              <p className="extra-small fw-bold text-body-secondary text-uppercase mb-2 mt-3" style={{ letterSpacing: 0.5 }}>Relevant Sections</p>
              <div className="d-flex flex-wrap gap-1 mb-3">
                {lawSections.map(s => (
                  <span key={s} className="badge bg-label-primary extra-small cursor-pointer">{s}</span>
                ))}
              </div>

              <p className="extra-small fw-bold text-body-secondary text-uppercase mb-2" style={{ letterSpacing: 0.5 }}>Precedents</p>
              {precedents.map((p, i) => (
                <div key={i} className="border rounded p-2 mb-2 bg-label-secondary">
                  <p className="extra-small fw-bold text-heading mb-0">{p.name}</p>
                  <p className="extra-small text-body-secondary mb-1">{p.court} · {p.year}</p>
                  <p className="extra-small text-heading fst-italic lh-base mb-0">{p.holding}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Editor */}
        <div className="flex-grow-1 d-flex flex-column p-4 overflow-auto">
          <div className="card shadow-sm flex-grow-1 overflow-hidden">
            {/* Toolbar */}
            <div className="d-flex gap-1 px-3 py-2 border-bottom bg-label-secondary flex-wrap align-items-center">
              {['B', 'I', 'U'].map(f => (
                <button key={f} className="btn btn-sm px-2 py-1 text-heading extra-small fw-bold">{f}</button>
              ))}
              <div className="vr mx-1"></div>
              {['H1', 'H2', 'List', '1.'].map(f => (
                <button key={f} className="btn btn-sm px-2 py-1 text-heading extra-small fw-medium">{f}</button>
              ))}
              <div className="vr mx-1"></div>
              <button className="btn btn-sm px-2 py-1 text-heading extra-small"><i className="ti tabler-pin"></i></button>
              <button className="btn btn-sm px-2 py-1 text-heading extra-small"><i className="ti tabler-plus"></i></button>
              <div className="ms-auto d-flex gap-2">
                <button className="btn btn-outline-secondary btn-sm extra-small">
                  <i className="ti tabler-scale me-1"></i>Legal Formatting
                </button>
                <button className="btn btn-outline-secondary btn-sm extra-small">
                  <i className="ti tabler-plus me-1"></i>Insert Section
                </button>
              </div>
            </div>
            <textarea className="form-control border-0 shadow-none flex-grow-1 p-4" style={{ fontFamily: '"Times New Roman", serif', fontSize: 14, lineHeight: 2, resize: 'none', minHeight: 500 }} defaultValue={`IN THE HON'BLE SESSIONS COURT AT NEW DELHI
Criminal Case No. ___ of 2025

IN THE MATTER OF:

State of NCT of Delhi                        ... Complainant

VERSUS

Ram Kumar                                      ... Accused

CHARGE SHEET

Submitted under Section 173 of the Code of Criminal Procedure, 1973

1. JURISDICTION
   This Hon'ble Court has territorial jurisdiction under Section 177 CrPC as the alleged offence was committed within the local limits of South Delhi District.

2. FACTS
   That on the night of January 15, 2025, the accused Ram Kumar (hereinafter "the accused") is alleged to have caused the death of one Shyam Lal (hereinafter "the deceased") by inflicting blunt force injuries on his person at approximately 11:00 PM at Flat No. 204, Saket, New Delhi.

3. OFFENCES ALLEGED
   The accused is charged with the commission of an offence punishable under:
   • Section 302 IPC (Murder): The accused intentionally caused the death of the deceased with the requisite mens rea.

4. EVIDENCE
   (a) Oral Evidence: Three eyewitnesses place the accused at the scene...
   (b) Material Evidence: A weapon matching the injuries was recovered...

5. PRAYER
   [TO BE COMPLETED]`}></textarea>
          </div>
        </div>

        {/* AI Assistant Panel */}
        <div className="bg-white border-start d-flex flex-column flex-shrink-0" style={{ width: 290 }}>
          <div className="px-3 py-2 border-bottom fw-bold small d-flex align-items-center gap-2">
            <i className="ti tabler-robot text-primary"></i> AI Legal Assistant
          </div>

          {/* IRAC Checker */}
          <div className="p-3 border-bottom">
            <p className="extra-small fw-bold text-body-secondary text-uppercase mb-2" style={{ letterSpacing: 0.5 }}>Live IRAC Checker</p>
            <div className="row g-2">
              {iracStatus.map(s => (
                <div key={s.label} className="col-6">
                  <div className={`p-2 rounded bg-label-${s.status} border border-${s.status} border-opacity-25`}>
                    <p className={`extra-small fw-bold text-${s.status} d-flex align-items-center gap-1 mb-1`}>
                      <i className={statusIcon[s.status]}></i> {s.label}
                    </p>
                    <p className="extra-small text-body-secondary mb-0">{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat */}
          <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-2">
            <div className="bg-label-primary rounded p-3" style={{ borderBottomLeftRadius: 2 }}>
              <p className="extra-small text-primary fw-bold mb-1">AI Legal Assistant</p>
              <p className="extra-small lh-base mb-2">Your draft is looking good! I notice Section 5 (Prayer) is incomplete — this is critical for any charge sheet. A prayer clause should request the court to take cognizance and commit the case to trial.</p>
              <button className="btn btn-primary btn-sm extra-small">
                <i className="ti tabler-arrow-down me-1"></i>Insert into Draft
              </button>
            </div>
            <div className="bg-label-secondary rounded p-3 align-self-end" style={{ maxWidth: '85%', borderBottomRightRadius: 2 }}>
              <p className="extra-small mb-0">Can you help me draft the prayer clause?</p>
            </div>
          </div>

          {/* Quick actions */}
          <div className="p-3 border-top">
            <div className="d-flex flex-wrap gap-1 mb-2">
              {['Suggest grounds', 'Check structure', 'Find case laws', 'Draft prayer'].map(label => (
                <button key={label} className="badge bg-label-primary border border-primary border-opacity-25 text-primary extra-small cursor-pointer">{label}</button>
              ))}
            </div>
            <div className="input-group input-group-sm">
              <input className="form-control shadow-none extra-small" placeholder="Ask the AI..." />
              <button className="btn btn-primary">
                <i className="ti tabler-send"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
