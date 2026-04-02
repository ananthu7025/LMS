'use client'
import { useState } from 'react'
import StudentLayout from '@/components/layouts/StudentLayout'
import Link from 'next/link'

/* ─── types ─── */
type Step     = 'BRIEFING' | 'BUILDER' | 'PREVIEW' | 'RESULTS'
type BlockKey = 'issue' | 'rule' | 'application' | 'conclusion'

/* ─── problem ─── */
const PROBLEM = {
  question:
    'Whether the accused Ram Kumar is liable for murder under Section 302 IPC or culpable homicide not amounting to murder under Section 304 IPC, given the following facts.',
  facts:
    "Ram Kumar, a 35-year-old labourer, had a long-standing property dispute with his neighbour Shyam Lal. On the night of 12 March 2024, the dispute escalated into a violent altercation and Ram Kumar struck Shyam Lal three times on the head with an iron rod. Shyam Lal succumbed to his injuries two hours later. The post-mortem report confirms death due to blunt force trauma to the skull. The iron rod was recovered from Ram Kumar's residence based on his disclosure statement. Ram Kumar claims he acted in the heat of the moment after Shyam Lal threatened him with a knife — no knife was found at the scene.",
  sections: [
    {
      id: 's302', label: 'Sec 302 IPC', color: 'danger',
      short: 'Punishment for murder',
      full: 'Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine.\n\nKey Ingredients (Virsa Singh test):\n• Bodily injury was caused\n• Injury was intentionally inflicted\n• Injury sufficient in ordinary course to cause death\n• That sufficiency is an objective fact',
    },
    {
      id: 's300', label: 'Sec 300 IPC', color: 'warning',
      short: '4 clauses that elevate culpable homicide to murder',
      full: 'Culpable homicide is murder when the act is done:\n(1) With intention to cause death\n(2) With intention to cause bodily injury known likely to cause death\n(3) With intention to cause injury sufficient in ordinary course to cause death\n(4) With knowledge the act is imminently dangerous and will probably cause death\n\nException 4 — Sudden Fight: Reduces to Sec 304 if there was no premeditation, no undue advantage, sudden quarrel.',
    },
    {
      id: 's299', label: 'Sec 299 IPC', color: 'info',
      short: 'Culpable homicide — lower threshold than murder',
      full: 'Culpable homicide: causing death with (a) intention to cause death, (b) intention to cause injury likely to cause death, or (c) knowledge the act is likely to cause death.\n\nKey distinction: Section 304 applies when intent falls below the threshold for murder under Sec 300 but above mere negligence under Sec 304A.',
    },
  ],
  cases: [
    {
      id: 'c1',
      name: 'Virsa Singh v. State of Punjab',
      citation: 'AIR 1958 SC 465',
      summary:
        "Established the definitive four-ingredient test for murder under Sec 300(3). All four must be proved by the prosecution. The court does not import the accused's knowledge into the intention to cause injury — these are separate inquiries.",
    },
    {
      id: 'c2',
      name: 'State of AP v. R. Punnayya',
      citation: '(1976) 4 SCC 382',
      summary:
        '"The safest approach is to keep in mind the distinction in degrees of culpability — the higher the degree of recklessness, the closer to murder." Distinguishes Sec 299 and 300 based on probability of death.',
    },
  ],
  modelAnswer: {
    issue:
      "The issue before this court is whether Ram Kumar's act of striking Shyam Lal three times with an iron rod constitutes murder under Section 302 IPC — specifically whether all four ingredients of the Virsa Singh test are established on the prosecution's evidence — or whether the claim of sudden provocation reduces the offence to culpable homicide not amounting to murder under Section 304 IPC.",
    rule:
      "Under Section 300(3) IPC, culpable homicide is murder when the accused intentionally causes a bodily injury sufficient in the ordinary course of nature to cause death. Applying Virsa Singh v. State of Punjab (AIR 1958 SC 465), the prosecution must prove: (i) a bodily injury was caused; (ii) the injury was intentionally inflicted; (iii) the injury was sufficient in the ordinary course to cause death; and (iv) that sufficiency is an objective fact. The prosecution must also defeat Exception 4 to Section 300 (sudden fight), which requires showing that the accused took undue advantage or that there was premeditation — either defeats the exception.",
    application:
      "Applying the Virsa Singh test to the facts:\n\nFirst, bodily injury is proven — the post-mortem confirms death by blunt force trauma to the skull caused by Ram Kumar's blows. Second, the injury was intentionally inflicted — Ram Kumar deliberately picked up the iron rod and struck the deceased three times. Three deliberate blows are not accidental. Third, three strikes to the skull with an iron rod are injuries sufficient in the ordinary course of nature to cause death — this is established by the weapon, the number of blows, and the targeted anatomical region. Fourth, sufficiency is an objective fact confirmed by the medical evidence.\n\nThe defence's provocation argument fails on the facts: (a) no knife was recovered from the scene, which destroys the factual foundation of the claimed provocation; and (b) even a genuine threat does not constitute the degree of grave and sudden provocation required under Exception 1. As for Exception 4, three deliberate blows with a recovered weapon constitutes taking undue advantage, which defeats the exception entirely.",
    conclusion:
      "The prosecution has established all four ingredients of murder under Section 302 IPC. The exceptions under Section 300 do not apply on the evidence. Ram Kumar is liable to be convicted for murder under Section 302 IPC.",
  },
}

/* ─── block meta ─── */
const BLOCK_META = [
  {
    key: 'issue' as BlockKey,
    label: 'Issue',
    color: 'danger',
    icon: 'tabler-question-mark',
    instruction: 'Identify the precise legal question the court needs to decide. Focus on the legal question, not the facts.',
    helper: null,
    placeholder: 'The issue before this court is whether...',
    minWords: 20,
    minLabel: '20 words min',
    maxChars: undefined as number | undefined,
  },
  {
    key: 'rule' as BlockKey,
    label: 'Rule',
    color: 'warning',
    icon: 'tabler-book',
    instruction: 'State the relevant law. Which section applies, what are its ingredients, and what does the prosecution need to establish?',
    helper: 'Click any section chip in the left panel to insert it here.',
    placeholder: 'Under Section ___ IPC, the prosecution must establish...',
    minWords: 30,
    minLabel: '30 words min',
    maxChars: undefined as number | undefined,
  },
  {
    key: 'application' as BlockKey,
    label: 'Application',
    color: 'primary',
    icon: 'tabler-arrows-left-right',
    instruction: 'Apply the law to the facts. Take each ingredient of the rule and argue whether it is established by the facts. Be specific.',
    helper: 'For each ingredient you listed in your Rule — ask: what fact in this case proves or disproves it? Write that connection explicitly.',
    placeholder: 'Applying the above to the facts of this case...',
    minWords: 100,
    minLabel: '100 words min',
    maxChars: undefined as number | undefined,
  },
  {
    key: 'conclusion' as BlockKey,
    label: 'Conclusion',
    color: 'success',
    icon: 'tabler-check',
    instruction: 'State what the court should find and why. Keep this to two to three sentences.',
    helper: null,
    placeholder: 'On the above analysis, the prosecution submits that...',
    minWords: 5,
    minLabel: 'Required',
    maxChars: 300,
  },
]

/* ─── mock micro-feedback ─── */
const MOCK_FEEDBACK: Record<BlockKey, string> = {
  issue:
    "Your issue statement correctly identifies the central question. Consider specifying whether the prosecution relies on Clause 3 of Section 300 (intention to cause injury sufficient to cause death) — the Virsa Singh test applies specifically to Clause 3, and that is the prosecution's strongest angle on these facts.",
  rule:
    'Good rule statement with the Virsa Singh four-ingredient test correctly identified. You should also address Section 300 Exception 4 (sudden fight) — the defence will rely on it heavily. Anticipating and defeating the exception within your rule statement will significantly strengthen the prosecution argument.',
  application:
    "Strong analysis of the first three Virsa Singh ingredients. Two things to sharpen: (1) explicitly address why the absence of the knife at the scene destroys the factual basis for provocation — that single point defeats Exception 4; and (2) the disclosure statement and weapon recovery from Ram Kumar's residence shows post-incident deliberateness, which is powerful circumstantial evidence against any spontaneous-reaction defence.",
  conclusion: '',
}

/* ─── scores for results screen ─── */
const SCORES: Record<BlockKey, { score: number; label: string; weight: string; feedback: string }> = {
  issue: {
    score: 75,
    label: 'Issue Clarity',
    weight: '20%',
    feedback:
      'Correctly identified the central question. Specifying the applicable clause of Section 300 and the Virsa Singh test would have sharpened focus.',
  },
  rule: {
    score: 80,
    label: 'Rule Accuracy',
    weight: '20%',
    feedback:
      'Accurate statement of the four-ingredient test. Missing: anticipation and defeat of Exception 4, which is the defence\'s primary argument.',
  },
  application: {
    score: 72,
    label: 'Application Strength',
    weight: '40%',
    feedback:
      'Good analysis of the Virsa Singh ingredients. Underexplored: the knife absence as a factual argument, and the disclosure statement as evidence of deliberateness.',
  },
  conclusion: {
    score: 85,
    label: 'Conclusion Precision',
    weight: '20%',
    feedback:
      'Concise and logically follows from your application. A specific reference to which clause of Section 300 was established would add precision.',
  },
}

/* ─── helpers ─── */
const BLOCK_ORDER: BlockKey[] = ['issue', 'rule', 'application', 'conclusion']
const countWords = (t: string) => t.trim().split(/\s+/).filter(w => w.length > 0).length

/* ══════════════════════════════════════════════════════════════════════════ */
export default function CourtroomArgumentPage() {
  const [step,             setStep]             = useState<Step>('BRIEFING')
  const [texts,            setTexts]            = useState<Record<BlockKey, string>>({ issue: '', rule: '', application: '', conclusion: '' })
  const [feedback,         setFeedback]         = useState<Record<BlockKey, string | null>>({ issue: null, rule: null, application: null, conclusion: null })
  const [submitted,        setSubmitted]        = useState<Set<BlockKey>>(new Set())
  const [activeBlock,      setActiveBlock]      = useState<BlockKey>('issue')
  const [loadingKey,       setLoadingKey]       = useState<BlockKey | null>(null)
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [expandedCases,    setExpandedCases]    = useState<Set<string>>(new Set())
  const [notepad,          setNotepad]          = useState('')
  const [showModel,        setShowModel]        = useState(false)
  const [side,             setSide]             = useState<'PROSECUTION' | 'DEFENCE'>('PROSECUTION')

  /* derived */
  const overallScore = Math.round(
    SCORES.issue.score       * 0.2 +
    SCORES.rule.score        * 0.2 +
    SCORES.application.score * 0.4 +
    SCORES.conclusion.score  * 0.2,
  )

  const isUnlocked = (key: BlockKey) => {
    const idx = BLOCK_ORDER.indexOf(key)
    return idx === 0 || submitted.has(BLOCK_ORDER[idx - 1])
  }

  /* handlers */
  const handleNext = (key: BlockKey) => {
    const meta = BLOCK_META.find(m => m.key === key)!
    if (countWords(texts[key]) < meta.minWords) return
    setLoadingKey(key)
    setTimeout(() => {
      setFeedback(prev => ({ ...prev, [key]: MOCK_FEEDBACK[key] }))
      setLoadingKey(null)
    }, 1100)
  }

  const handleProceed = (key: BlockKey) => {
    const next = new Set(submitted)
    next.add(key)
    setSubmitted(next)
    const idx = BLOCK_ORDER.indexOf(key)
    if (idx < BLOCK_ORDER.length - 1) {
      setActiveBlock(BLOCK_ORDER[idx + 1])
    } else {
      setStep('PREVIEW')
    }
  }

  const toggleSection = (id: string) =>
    setExpandedSections(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })

  const toggleCase = (id: string) =>
    setExpandedCases(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })

  const insertRef = (label: string) =>
    setTexts(prev => ({ ...prev, [activeBlock]: prev[activeBlock] + (prev[activeBlock] ? ' ' : '') + label }))

  const handleChallenge = () => {
    setSide(s => s === 'PROSECUTION' ? 'DEFENCE' : 'PROSECUTION')
    setTexts({ issue: '', rule: '', application: '', conclusion: '' })
    setFeedback({ issue: null, rule: null, application: null, conclusion: null })
    setSubmitted(new Set())
    setActiveBlock('issue')
    setShowModel(false)
    setStep('BRIEFING')
  }

  /* ── assembled argument (for preview) ── */
  const assembledParagraphs = BLOCK_ORDER.map(k => texts[k].trim()).filter(Boolean)

  /* ══════════════════════════════════════════════════════════════════════ */
  return (
    <StudentLayout activePath="/student/practice-lab">

      {/* ════════════════════ SCREEN 1: BRIEFING ════════════════════ */}
      {step === 'BRIEFING' && (
        <>
          {/* compact hero */}
          <div className="card p-0 mb-4">
            <div className="card-body d-flex align-items-center p-0 overflow-hidden" style={{ minHeight: 84 }}>
              <div className="flex-grow-1 px-5 py-4">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="badge bg-label-danger"   style={{ fontSize: 10 }}>Advanced</span>
                  <span className="badge bg-label-secondary" style={{ fontSize: 10 }}>Advocacy</span>
                  <span className="badge bg-label-primary"  style={{ fontSize: 10 }}>+300 XP</span>
                  <span className="badge bg-label-secondary" style={{ fontSize: 10 }}>20–25 min</span>
                </div>
                <h5 className="mb-0 text-heading fw-semibold">
                  Courtroom Argument Builder &nbsp;—&nbsp;
                  <span className="text-danger">IRAC Framework</span>
                </h5>
                <p className="mb-0 text-body-secondary small mt-1">
                  Build a structured oral argument step-by-step — Issue, Rule, Application, Conclusion.
                </p>
              </div>
              <div className="d-none d-md-flex align-items-end flex-shrink-0 pe-4" style={{ minWidth: 90 }}>
                <img src="/img/illustrations/rocket.png" alt="" height={90} style={{ objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* left: legal problem */}
            <div className="col-lg-8">
              <div className="card h-100">
                <div className="card-header border-0 pb-0">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti tabler-gavel text-danger fs-5"></i>
                    Legal Problem
                  </h6>
                </div>
                <div className="card-body d-flex flex-column gap-4">

                  {/* question */}
                  <div className="rounded-2 p-3 bg-label-danger border-start border-4 border-danger">
                    <small className="fw-bold text-uppercase text-danger d-block mb-1" style={{ fontSize: 10, letterSpacing: '.05em' }}>
                      Legal Question
                    </small>
                    <p className="mb-0 small fw-semibold text-heading">{PROBLEM.question}</p>
                  </div>

                  {/* facts */}
                  <div>
                    <p className="text-uppercase fw-semibold text-body-secondary mb-2" style={{ fontSize: 10, letterSpacing: '.06em' }}>Facts</p>
                    <p className="small text-body mb-0 lh-lg">{PROBLEM.facts}</p>
                  </div>

                  {/* side assignment */}
                  <div className={`rounded-2 p-3 d-flex align-items-center gap-3 bg-label-${side === 'PROSECUTION' ? 'danger' : 'info'}`}>
                    <div className="avatar avatar-sm flex-shrink-0">
                      <span className={`avatar-initial rounded bg-${side === 'PROSECUTION' ? 'danger' : 'info'} text-white`}>
                        <i className={`icon-base ti ${side === 'PROSECUTION' ? 'tabler-sword' : 'tabler-shield'} icon-16px`}></i>
                      </span>
                    </div>
                    <div>
                      <p className="mb-0 small fw-semibold text-heading">
                        You are arguing for the <strong>{side === 'PROSECUTION' ? 'Prosecution' : 'Defence'}</strong>
                      </p>
                      <small className="text-body-secondary" style={{ fontSize: 10 }}>
                        Side is assigned — argue this position throughout.
                      </small>
                    </div>
                  </div>

                  {/* legal context */}
                  <div>
                    <p className="text-uppercase fw-semibold text-body-secondary mb-2" style={{ fontSize: 10, letterSpacing: '.06em' }}>Legal Context</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {PROBLEM.sections.map(s => (
                        <span key={s.id} className={`badge bg-label-${s.color}`} style={{ fontSize: 11 }}>
                          {s.label} — {s.short}
                        </span>
                      ))}
                    </div>
                    {PROBLEM.cases.map(c => (
                      <div key={c.id} className="mb-2 p-2 rounded-2 border bg-body">
                        <p className="mb-0 small fw-semibold text-primary">{c.name} <span className="text-body-secondary fw-normal">({c.citation})</span></p>
                        <small className="text-body-secondary">{c.summary.slice(0, 90)}…</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* right: strategy + CTA */}
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-header border-0 pb-0">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti tabler-bulb text-warning fs-5"></i>
                    Pre-Argument Strategy
                  </h6>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="rounded-2 p-3 bg-label-warning mb-3">
                    <small className="text-warning fw-semibold d-block mb-1" style={{ fontSize: 11 }}>
                      Take 2 minutes to plan your argument before you begin.
                    </small>
                    <small className="text-body-secondary" style={{ fontSize: 11 }}>
                      A strong IRAC argument starts with knowing exactly which clause of Section 300 the prosecution relies on.
                    </small>
                  </div>

                  <div className="flex-grow-1 mb-4">
                    <p className="text-uppercase fw-semibold text-body-secondary mb-2" style={{ fontSize: 10, letterSpacing: '.06em' }}>Strategy Scratchpad</p>
                    <textarea
                      className="form-control"
                      rows={8}
                      placeholder="Jot down your strategy: which Virsa Singh ingredients are strongest? How will you defeat the provocation defence?…"
                      value={notepad}
                      onChange={e => setNotepad(e.target.value)}
                      style={{ fontSize: 12, resize: 'none' }}
                    />
                  </div>

                  <div className="d-flex flex-column gap-2">
                    <button
                      className="btn btn-danger d-flex align-items-center justify-content-center gap-2"
                      onClick={() => setStep('BUILDER')}
                    >
                      <i className="icon-base ti tabler-player-play-filled icon-16px"></i>
                      Begin Argument
                    </button>
                    <Link href="/student/practice-lab" className="btn btn-label-secondary d-flex align-items-center justify-content-center gap-2">
                      <i className="icon-base ti tabler-arrow-left icon-14px"></i>
                      Back to Practice Lab
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ════════════════════ SCREEN 2: BUILDER ════════════════════ */}
      {step === 'BUILDER' && (
        <div className="card overflow-hidden">
          <div className="row g-0" style={{ minHeight: '82vh' }}>

            {/* ── left: reference panel ── */}
            <div
              className="col-lg-5 border-end d-flex flex-column overflow-auto"
              style={{ background: 'var(--bs-body-bg)' }}
            >
              {/* panel header */}
              <div className="border-bottom px-4 d-flex align-items-center justify-content-between flex-shrink-0" style={{ height: 56 }}>
                <div className="d-flex align-items-center gap-2">
                  <i className="icon-base ti tabler-book icon-16px text-primary"></i>
                  <span className="fw-semibold text-heading small">Case Reference</span>
                </div>
                <span className={`badge bg-label-${side === 'PROSECUTION' ? 'danger' : 'info'}`} style={{ fontSize: 10 }}>
                  {side}
                </span>
              </div>

              <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-3">

                {/* legal question */}
                <div className="rounded-2 p-3 bg-label-danger">
                  <small className="fw-bold text-uppercase text-danger d-block mb-1" style={{ fontSize: 10, letterSpacing: '.05em' }}>Legal Question</small>
                  <p className="mb-0 small fw-semibold text-heading" style={{ lineHeight: 1.6 }}>{PROBLEM.question}</p>
                </div>

                {/* facts */}
                <div className="card border shadow-none">
                  <div className="card-header border-0 pb-0">
                    <h6 className="mb-0 small fw-semibold d-flex align-items-center gap-2">
                      <i className="icon-base ti tabler-file-text icon-14px text-secondary"></i>
                      Facts
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <p className="mb-0 small text-body-secondary" style={{ lineHeight: 1.7, fontSize: 12 }}>{PROBLEM.facts}</p>
                  </div>
                </div>

                {/* expandable sections */}
                <div className="card border shadow-none">
                  <div className="card-header border-0 pb-0">
                    <h6 className="mb-0 small fw-semibold d-flex align-items-center gap-2">
                      <i className="icon-base ti tabler-scale icon-14px text-warning"></i>
                      IPC Sections
                    </h6>
                    <small className="text-body-secondary d-block mt-1" style={{ fontSize: 10 }}>
                      Click a chip to expand · Click again to insert into active block
                    </small>
                  </div>
                  <div className="card-body pt-2 d-flex flex-column gap-2">
                    {PROBLEM.sections.map(s => (
                      <div key={s.id} className="rounded-2 border overflow-hidden">
                        <button
                          className={`btn btn-sm w-100 text-start d-flex align-items-center justify-content-between px-3 py-2 border-0 bg-label-${s.color}`}
                          style={{ fontSize: 11 }}
                          onClick={() => toggleSection(s.id)}
                        >
                          <span className="d-flex align-items-center gap-2">
                            <span className={`badge bg-${s.color} text-white flex-shrink-0`} style={{ fontSize: 9 }}>{s.label}</span>
                            <span className="text-body-secondary">{s.short}</span>
                          </span>
                          <div className="d-flex align-items-center gap-2 flex-shrink-0">
                            {!expandedSections.has(s.id) && (
                              <span
                                className={`badge bg-label-${s.color}`}
                                style={{ fontSize: 9, cursor: 'pointer' }}
                                onClick={e => { e.stopPropagation(); insertRef(s.label) }}
                                title="Insert into active block"
                              >
                                + Insert
                              </span>
                            )}
                            <i className={`icon-base ti ${expandedSections.has(s.id) ? 'tabler-chevron-up' : 'tabler-chevron-down'} icon-12px`}></i>
                          </div>
                        </button>
                        {expandedSections.has(s.id) && (
                          <div className="px-3 py-2">
                            <pre className="mb-2 text-body-secondary" style={{ fontSize: 11, whiteSpace: 'pre-wrap', lineHeight: 1.7, fontFamily: 'inherit' }}>
                              {s.full}
                            </pre>
                            <button
                              className={`btn btn-sm btn-label-${s.color} d-flex align-items-center gap-1 px-2`}
                              style={{ fontSize: 10 }}
                              onClick={() => insertRef(s.label)}
                            >
                              <i className="icon-base ti tabler-plus icon-10px"></i>
                              Insert {s.label} into active block
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* expandable case law */}
                <div className="card border shadow-none">
                  <div className="card-header border-0 pb-0">
                    <h6 className="mb-0 small fw-semibold d-flex align-items-center gap-2">
                      <i className="icon-base ti tabler-gavel icon-14px text-danger"></i>
                      Case Law
                    </h6>
                  </div>
                  <div className="card-body pt-2 d-flex flex-column gap-2">
                    {PROBLEM.cases.map(c => (
                      <div key={c.id} className="rounded-2 border overflow-hidden">
                        <button
                          className="btn btn-sm w-100 text-start d-flex align-items-center justify-content-between px-3 py-2 border-0 bg-body"
                          style={{ fontSize: 11 }}
                          onClick={() => toggleCase(c.id)}
                        >
                          <div className="overflow-hidden me-2">
                            <span className="fw-semibold text-primary text-truncate d-block">{c.name}</span>
                            <span className="text-body-secondary" style={{ fontSize: 10 }}>{c.citation}</span>
                          </div>
                          <i className={`icon-base ti ${expandedCases.has(c.id) ? 'tabler-chevron-up' : 'tabler-chevron-down'} icon-12px flex-shrink-0`}></i>
                        </button>
                        {expandedCases.has(c.id) && (
                          <div className="px-3 pb-3 pt-1 bg-label-secondary" style={{ fontSize: 11 }}>
                            <p className="mb-0 text-body-secondary" style={{ lineHeight: 1.7 }}>{c.summary}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* ── right: IRAC builder ── */}
            <div className="col-lg-7 d-flex flex-column overflow-auto">

              {/* header */}
              <div className="border-bottom px-4 d-flex align-items-center justify-content-between flex-shrink-0" style={{ height: 56 }}>
                <div className="d-flex align-items-center gap-2">
                  <i className="icon-base ti tabler-edit icon-16px text-primary"></i>
                  <span className="fw-semibold text-heading small">Argument Builder</span>
                </div>
                {/* progress dots */}
                <div className="d-flex align-items-center gap-2">
                  {BLOCK_META.map(m => (
                    <div key={m.key} className="d-flex align-items-center gap-1">
                      <span
                        className={`rounded-circle d-inline-block ${
                          submitted.has(m.key) ? `bg-${m.color}` :
                          activeBlock === m.key ? `bg-label-${m.color} border border-${m.color}` :
                          'bg-label-secondary'
                        }`}
                        style={{ width: 10, height: 10 }}
                      />
                      <small
                        className={`${activeBlock === m.key ? `text-${m.color} fw-semibold` : 'text-body-secondary'}`}
                        style={{ fontSize: 10 }}
                      >
                        {m.label}
                      </small>
                    </div>
                  ))}
                </div>
              </div>

              {/* blocks */}
              <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-3">
                {BLOCK_META.map((meta, idx) => {
                  const unlocked   = isUnlocked(meta.key)
                  const isDone     = submitted.has(meta.key)
                  const isActive   = activeBlock === meta.key && !isDone
                  const words      = countWords(texts[meta.key])
                  const hasFeedback= feedback[meta.key] !== null
                  const loading    = loadingKey === meta.key
                  const canNext    = !hasFeedback && !loading
                  const atMaxChars = meta.maxChars ? texts[meta.key].length > meta.maxChars : false

                  /* ── locked block ── */
                  if (!unlocked) return (
                    <div key={meta.key} className="card border shadow-none" style={{ opacity: 0.5 }}>
                      <div className="card-body py-3 px-4 d-flex align-items-center gap-3">
                        <i className="icon-base ti tabler-lock icon-16px text-body-secondary"></i>
                        <div>
                          <span className={`badge bg-label-${meta.color} me-2`} style={{ fontSize: 10 }}>{meta.label}</span>
                          <small className="text-body-secondary" style={{ fontSize: 11 }}>
                            Complete {BLOCK_META[idx - 1]?.label} first
                          </small>
                        </div>
                      </div>
                    </div>
                  )

                  /* ── done (collapsed) block ── */
                  if (isDone) return (
                    <div key={meta.key} className={`card border-start border-4 border-${meta.color} shadow-none`}>
                      <div className="card-body py-3 px-4">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="d-flex align-items-center gap-2">
                            <span className={`badge bg-${meta.color} text-white`} style={{ fontSize: 10 }}>{meta.label}</span>
                            <i className="icon-base ti tabler-check icon-14px text-success"></i>
                          </div>
                          <button
                            className="btn btn-sm btn-text-secondary d-flex align-items-center gap-1 px-2"
                            style={{ fontSize: 10 }}
                            onClick={() => {
                              setActiveBlock(meta.key)
                              const newSub = new Set(submitted)
                              newSub.delete(meta.key)
                              setSubmitted(newSub)
                              setFeedback(prev => ({ ...prev, [meta.key]: null }))
                            }}
                          >
                            <i className="icon-base ti tabler-edit icon-12px"></i>Edit
                          </button>
                        </div>
                        <p className="mb-0 small text-body-secondary" style={{ fontSize: 12, lineHeight: 1.6 }}>
                          {texts[meta.key].slice(0, 180)}{texts[meta.key].length > 180 ? '…' : ''}
                        </p>
                      </div>
                    </div>
                  )

                  /* ── active block ── */
                  return (
                    <div key={meta.key} className={`card border-2 border-${meta.color} shadow-none`}>
                      <div className="card-header border-0 pb-0">
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <span className={`badge bg-${meta.color} text-white`} style={{ fontSize: 10 }}>{meta.label}</span>
                          <i className={`icon-base ti ${meta.icon} icon-14px text-${meta.color}`}></i>
                        </div>
                        <p className="mb-0 small text-heading fw-semibold" style={{ fontSize: 12 }}>{meta.instruction}</p>
                        {meta.helper && (
                          <div className={`mt-2 rounded-2 px-2 py-1 bg-label-${meta.color}`}>
                            <small style={{ fontSize: 11 }} className="text-body-secondary">
                              <i className="icon-base ti tabler-bulb icon-12px me-1 text-warning"></i>
                              {meta.helper}
                            </small>
                          </div>
                        )}
                      </div>
                      <div className="card-body pt-2">
                        <textarea
                          className="form-control mb-2"
                          rows={meta.key === 'application' ? 8 : 5}
                          placeholder={meta.placeholder}
                          value={texts[meta.key]}
                          onChange={e => {
                            const val = meta.maxChars ? e.target.value.slice(0, meta.maxChars + 10) : e.target.value
                            setTexts(prev => ({ ...prev, [meta.key]: val }))
                            // reset feedback if editing after getting it
                            if (feedback[meta.key]) setFeedback(prev => ({ ...prev, [meta.key]: null }))
                          }}
                          style={{ fontSize: 13, lineHeight: 1.8, resize: 'vertical' }}
                          disabled={!!feedback[meta.key]}
                        />

                        {/* counter row */}
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <small className="text-body-secondary" style={{ fontSize: 10 }}>
                            {meta.maxChars ? (
                              <>
                                <span className={texts[meta.key].length > meta.maxChars ? 'text-danger fw-semibold' : ''}>
                                  {texts[meta.key].length}
                                </span>
                                {' '}/{' '}{meta.maxChars} chars
                              </>
                            ) : (
                              <>
                                <span className={words >= meta.minWords ? 'text-success fw-semibold' : ''}>{words}</span>
                                {' '}words · {meta.minLabel}
                              </>
                            )}
                          </small>
                          {!hasFeedback && meta.key !== 'conclusion' && (
                            <button
                              className={`btn btn-sm btn-${meta.color} d-flex align-items-center gap-2 px-3`}
                              style={{ fontSize: 12 }}
                              onClick={() => handleNext(meta.key)}
                              disabled={!canNext || loading || atMaxChars}
                            >
                              {loading ? (
                                <>
                                  <span className="spinner-border spinner-border-sm border-2" style={{ width: 12, height: 12 }}></span>
                                  Evaluating…
                                </>
                              ) : (
                                <>
                                  Next
                                  <i className="icon-base ti tabler-arrow-right icon-12px"></i>
                                </>
                              )}
                            </button>
                          )}
                        </div>

                        {/* micro-feedback */}
                        {hasFeedback && feedback[meta.key] && (
                          <div className={`rounded-2 p-3 mb-3 bg-label-${meta.color} border-start border-4 border-${meta.color}`}>
                            <div className="d-flex align-items-center gap-2 mb-2">
                              <i className="icon-base ti tabler-sparkles icon-14px text-primary"></i>
                              <small className="fw-bold text-primary" style={{ fontSize: 10, letterSpacing: '.04em' }}>LEXAI FEEDBACK</small>
                            </div>
                            <p className="mb-0 small text-body" style={{ lineHeight: 1.7, fontSize: 12 }}>
                              {feedback[meta.key]}
                            </p>
                          </div>
                        )}

                        {/* proceed / edit after feedback */}
                        {hasFeedback && (
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-sm btn-label-secondary d-flex align-items-center gap-1 px-3"
                              style={{ fontSize: 12 }}
                              onClick={() => setFeedback(prev => ({ ...prev, [meta.key]: null }))}
                            >
                              <i className="icon-base ti tabler-edit icon-12px"></i>
                              Revise
                            </button>
                            <button
                              className={`btn btn-sm btn-${meta.color} d-flex align-items-center gap-2 px-4`}
                              style={{ fontSize: 12 }}
                              onClick={() => handleProceed(meta.key)}
                            >
                              <i className="icon-base ti tabler-check icon-12px"></i>
                              {idx < BLOCK_META.length - 1
                                ? `Proceed to ${BLOCK_META[idx + 1].label}`
                                : 'Complete Argument'
                              }
                            </button>
                          </div>
                        )}

                        {/* conclusion: no feedback, direct proceed */}
                        {meta.key === 'conclusion' && !hasFeedback && (
                          <button
                            className="btn btn-sm btn-success d-flex align-items-center gap-2 px-4"
                            style={{ fontSize: 12 }}
                            onClick={() => handleProceed(meta.key)}
                          >
                            <i className="icon-base ti tabler-eye icon-12px"></i>
                            Preview Full Argument
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ════════════════════ SCREEN 3: PREVIEW ════════════════════ */}
      {step === 'PREVIEW' && (
        <>
          {/* header card */}
          <div className="card mb-4">
            <div className="card-body py-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
              <div>
                <h6 className="mb-0 fw-semibold d-flex align-items-center gap-2">
                  <i className="ti tabler-eye text-primary fs-5"></i>
                  Assembled Argument — Preview
                </h6>
                <small className="text-body-secondary" style={{ fontSize: 11 }}>
                  This is how your argument reads as a continuous submission. Review before submitting.
                </small>
              </div>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-label-secondary d-flex align-items-center gap-1 px-3"
                  onClick={() => setStep('BUILDER')}
                >
                  <i className="icon-base ti tabler-edit icon-14px"></i>
                  Edit Argument
                </button>
                <button
                  className="btn btn-sm btn-primary d-flex align-items-center gap-2 px-4"
                  onClick={() => setStep('RESULTS')}
                >
                  <i className="icon-base ti tabler-send icon-14px"></i>
                  Submit for Evaluation
                </button>
              </div>
            </div>
          </div>

          {/* assembled argument */}
          <div className="card mb-4">
            <div className="card-header d-flex align-items-center gap-2">
              <i className="ti tabler-file-text text-body-secondary fs-5"></i>
              <span className="fw-semibold small">Your Argument — {side} Position</span>
            </div>
            <div className="card-body" style={{ maxWidth: 760, margin: '0 auto' }}>
              {assembledParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="mb-4 text-body"
                  style={{ fontSize: 14, lineHeight: 1.9, fontFamily: 'Georgia, serif' }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* IRAC structure labels overlay */}
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h6 className="mb-0 small fw-semibold d-flex align-items-center gap-2">
                <i className="icon-base ti tabler-layout-list icon-16px text-primary"></i>
                Your IRAC Structure at a Glance
              </h6>
            </div>
            <div className="card-body pt-2">
              <div className="row g-3">
                {BLOCK_META.map(m => (
                  <div key={m.key} className="col-md-6 col-lg-3">
                    <div className={`rounded-2 p-3 bg-label-${m.color} h-100`}>
                      <span className={`badge bg-${m.color} text-white mb-2`} style={{ fontSize: 10 }}>{m.label}</span>
                      <p className="mb-0 small text-body-secondary" style={{ fontSize: 11, lineHeight: 1.6 }}>
                        {texts[m.key].slice(0, 100)}{texts[m.key].length > 100 ? '…' : ''}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ════════════════════ SCREEN 4: RESULTS ════════════════════ */}
      {step === 'RESULTS' && (
        <>
          {/* score hero */}
          <div className="card mb-4 overflow-hidden">
            <div className="card-body p-0">
              <div className="d-flex flex-column flex-md-row">
                <div
                  className="d-flex flex-column align-items-center justify-content-center p-5 text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--bs-primary), #5a50d6)', minWidth: 190 }}
                >
                  <h1 className="display-3 fw-bold mb-0 text-white">{overallScore}%</h1>
                  <small className="opacity-75 mt-1">Overall Score</small>
                  <div className="mt-2 d-flex gap-1 flex-wrap justify-content-center">
                    <span className="badge bg-warning text-dark" style={{ fontSize: 10 }}>+300 XP</span>
                    {overallScore >= 80 && (
                      <span className="badge bg-white text-primary" style={{ fontSize: 10 }}>Distinction</span>
                    )}
                  </div>
                </div>
                <div className="flex-grow-1 p-5">
                  <span className="badge bg-label-primary mb-2" style={{ fontSize: 10 }}>EVALUATION COMPLETE</span>
                  <h5 className="fw-semibold mb-2">Solid prosecution argument with a strong application section.</h5>
                  <p className="text-body-secondary small mb-0" style={{ lineHeight: 1.7 }}>
                    You correctly identified and applied the Virsa Singh test. The main area for improvement is anticipating
                    and defeating the defence's Exception 4 argument within your rule statement — experienced advocates
                    address the opposing side's best argument before it is raised.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IRAC score breakdown */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <i className="ti tabler-chart-bar text-primary fs-5"></i>
                IRAC Score Breakdown
              </h6>
            </div>
            <div className="card-body">
              <div className="row g-4">
                {BLOCK_META.map(m => {
                  const sc = SCORES[m.key]
                  return (
                    <div key={m.key} className="col-md-6">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <div className="d-flex align-items-center gap-2">
                          <span className={`badge bg-${m.color} text-white`} style={{ fontSize: 10 }}>{m.label}</span>
                          <small className="text-body-secondary" style={{ fontSize: 10 }}>Weight: {sc.weight}</small>
                        </div>
                        <small className="fw-semibold" style={{ fontSize: 13 }}>{sc.score}/100</small>
                      </div>
                      <div className="progress mb-2" style={{ height: 8 }}>
                        <div
                          className={`progress-bar bg-${m.color}`}
                          style={{ width: `${sc.score}%` }}
                        />
                      </div>
                      <p className="mb-0 text-body-secondary" style={{ fontSize: 11, lineHeight: 1.6 }}>{sc.feedback}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* AI narrative feedback */}
          <div className="card mb-4">
            <div className="card-header d-flex align-items-center gap-2">
              <div className="avatar avatar-sm">
                <span className="avatar-initial rounded-circle bg-primary">
                  <i className="icon-base ti tabler-sparkles icon-12px text-white"></i>
                </span>
              </div>
              <div>
                <h6 className="mb-0 small fw-semibold">LexAI — Senior Advocate Feedback</h6>
                <small className="text-body-secondary" style={{ fontSize: 10 }}>Specific to your argument</small>
              </div>
            </div>
            <div className="card-body">
              <p className="small text-body mb-0" style={{ lineHeight: 1.9, maxWidth: 720, fontSize: 13 }}>
                Your issue statement identified the right question but could have been sharper — specifying Clause 3 of
                Section 300 and the Virsa Singh test would have framed the argument from the first sentence.
                The rule statement was accurate and well-structured; the four ingredients from <em>Virsa Singh</em> were
                correctly identified. The weakness is the absence of any engagement with Exception 4 — a competent
                defence will raise the sudden fight argument, and you want to defeat it before they raise it, not respond
                to it in reply.{' '}
                <strong>Your application is your strongest section.</strong>{' '}
                The analysis of "sufficient in ordinary course" using the weapon, the number of blows, and the anatomical
                target is exactly the right approach. You missed one powerful factual point: the recovery of the weapon
                from the accused's own home on his disclosure statement undermines any claim of spontaneous reaction.
                In practice, that single fact often turns a borderline case into a conviction.
              </p>
            </div>
          </div>

          {/* model answer toggle */}
          <div className="card mb-4">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <i className="ti tabler-book-2 text-success fs-5"></i>
                Model Answer
              </h6>
              <button
                className={`btn btn-sm ${showModel ? 'btn-label-secondary' : 'btn-success'} d-flex align-items-center gap-1 px-3`}
                style={{ fontSize: 12 }}
                onClick={() => setShowModel(m => !m)}
              >
                <i className={`icon-base ti ${showModel ? 'tabler-eye-off' : 'tabler-eye'} icon-12px`}></i>
                {showModel ? 'Hide Model Answer' : 'Reveal Model Answer'}
              </button>
            </div>
            {showModel && (
              <div className="card-body">
                <p className="text-body-secondary small mb-4" style={{ fontSize: 11 }}>
                  A well-constructed version of the same argument — not a perfect answer, but one that demonstrates strong
                  IRAC structure for this specific problem. Compare directly with your version above.
                </p>
                <div className="row g-3">
                  {BLOCK_META.map(m => (
                    <div key={m.key} className="col-12">
                      <div className={`rounded-2 p-3 bg-label-${m.color}`}>
                        <span className={`badge bg-${m.color} text-white mb-2`} style={{ fontSize: 9 }}>{m.label.toUpperCase()}</span>
                        <p
                          className="mb-0 text-body"
                          style={{ fontSize: 13, lineHeight: 1.8, fontFamily: 'Georgia, serif', whiteSpace: 'pre-wrap' }}
                        >
                          {PROBLEM.modelAnswer[m.key as keyof typeof PROBLEM.modelAnswer]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* challenge mode */}
          <div className="card mb-4">
            <div className="card-body d-flex align-items-center gap-4 flex-wrap">
              <div className="avatar flex-shrink-0">
                <span className={`avatar-initial rounded bg-label-${side === 'PROSECUTION' ? 'info' : 'danger'}`}>
                  <i className={`icon-base ti ${side === 'PROSECUTION' ? 'tabler-shield' : 'tabler-sword'} icon-22px`}
                    style={{ color: `var(--bs-${side === 'PROSECUTION' ? 'info' : 'danger'})` }}></i>
                </span>
              </div>
              <div className="flex-grow-1">
                <h6 className="mb-1 fw-semibold">Think you can argue the other side?</h6>
                <p className="mb-0 text-body-secondary small">
                  Switch sides and rebuild this argument from the{' '}
                  <strong>{side === 'PROSECUTION' ? 'Defence' : 'Prosecution'}</strong> perspective.
                  The best advocates know both sides of every argument.
                </p>
              </div>
              <button
                className={`btn btn-label-${side === 'PROSECUTION' ? 'info' : 'danger'} d-flex align-items-center gap-2 flex-shrink-0`}
                onClick={handleChallenge}
              >
                <i className={`icon-base ti ${side === 'PROSECUTION' ? 'tabler-shield' : 'tabler-sword'} icon-16px`}></i>
                Try {side === 'PROSECUTION' ? 'Defence' : 'Prosecution'} Version
              </button>
            </div>
          </div>

          {/* bottom CTA */}
          <div className="card">
            <div className="card-body d-flex flex-wrap gap-3 justify-content-center py-4">
              <button
                className="btn btn-label-secondary d-flex align-items-center gap-2 px-4"
                onClick={() => {
                  setTexts({ issue: '', rule: '', application: '', conclusion: '' })
                  setFeedback({ issue: null, rule: null, application: null, conclusion: null })
                  setSubmitted(new Set())
                  setActiveBlock('issue')
                  setShowModel(false)
                  setStep('BRIEFING')
                }}
              >
                <i className="icon-base ti tabler-reload icon-16px"></i>
                Retry Same Problem
              </button>
              <Link href="/student/practice-lab" className="btn btn-primary d-flex align-items-center gap-2 px-5">
                Back to Practice Lab
                <i className="icon-base ti tabler-arrow-right icon-16px"></i>
              </Link>
            </div>
          </div>
        </>
      )}

    </StudentLayout>
  )
}
