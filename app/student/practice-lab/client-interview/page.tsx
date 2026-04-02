/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState, useEffect } from 'react'
import StudentLayout from '@/components/layouts/StudentLayout'
import Link from 'next/link'

/* ─── types ─── */
type InterviewStep  = 'BRIEFING' | 'CONSULTATION' | 'REVIEWING' | 'RESULTS'
type EmotionalState = 'Distressed' | 'Guarded' | 'Opening Up' | 'Uncomfortable'

interface Message { role: 'client' | 'student'; text: string }

interface Scenario {
  client: {
    name: string
    initials: string
    age: number
    occupation: string
    caseId: string
    summary: string
    openingMessage: string
  }
  hiddenFacts: { id: number; text: string; discovered: boolean; category: string }[]
  quickQuestions: string[]
  legalProvisions: { t: string; s: string; color: string; desc: string }[]
  keyAreas: string[]
  responses: { early: string; mid: string; late: string; fallback: string }
}

/* ─── scenario pool ─── */
const SCENARIO_POOL: Scenario[] = [
  /* ── 1. Domestic Violence ── */
  {
    client: {
      name: 'Priya Sharma',
      initials: 'PS',
      age: 28,
      occupation: 'Software Engineer',
      caseId: 'CASE-882-P',
      summary: "Has messaged saying she needs urgent legal advice and doesn't know where to start.",
      openingMessage: "Hi, I really don't know where to begin. My husband and I have been having a lot of problems and things have gotten really bad recently. I just need to know what my options are.",
    },
    hiddenFacts: [
      { id: 1, text: 'Married for 4 years',                                    discovered: true,  category: 'Marriage' },
      { id: 2, text: 'Husband has been physically aggressive on two occasions', discovered: true,  category: 'Safety'   },
      { id: 3, text: 'Client has one child aged 2',                             discovered: true,  category: 'Custody'  },
      { id: 4, text: 'Husband controls all bank accounts',                      discovered: true,  category: 'Finance'  },
      { id: 5, text: "Husband's family pressuring for more dowry",              discovered: false, category: 'Legal'    },
      { id: 6, text: 'Client wants separation but fears for her safety',        discovered: false, category: 'Safety'   },
      { id: 7, text: 'No prior police complaints filed',                        discovered: false, category: 'Legal'    },
      { id: 8, text: 'Husband is a senior government official',                 discovered: false, category: 'Context'  },
    ],
    quickQuestions: ['Ask about recent incidents', 'Explore financial situation', 'Ask about children', 'Inquire about family support'],
    legalProvisions: [
      { t: 'DV Act, 2005',     s: 'Critical',   color: 'danger',    desc: 'Section 3 definitions of domestic violence, including economic abuse.' },
      { t: 'Section 498A IPC', s: 'Applicable', color: 'warning',   desc: 'Cruelty by husband or relatives, including dowry-related harassment.' },
      { t: 'Section 125 CrPC', s: 'Relevant',   color: 'info',      desc: 'Child aged 2 creates a primary maintenance nexus for this client.' },
      { t: 'Section 406 IPC',  s: 'Consider',   color: 'secondary', desc: 'Criminal breach of trust if jointly-held assets have been misappropriated.' },
    ],
    keyAreas: ['Marriage history', 'Safety concerns', 'Children & custody', 'Financial control', 'Legal complaints', 'Support system'],
    responses: {
      early:    "We've been together for about 4 years now. It started off okay, but lately things have changed a lot...",
      mid:      "He gets so angry sometimes. Last week he... he hit me. And our daughter was right there. I don't want her growing up seeing that.",
      late:     "I just want to be safe. Do you think you can help me leave? I have nowhere to go and no money of my own.",
      fallback: "I don't know if that's relevant...",
    },
  },

  /* ── 2. Wrongful Termination / POSH ── */
  {
    client: {
      name: 'Anita Singh',
      initials: 'AS',
      age: 34,
      occupation: 'Marketing Manager',
      caseId: 'CASE-241-L',
      summary: 'Terminated without notice after 6 years of service, shortly after filing a workplace harassment complaint.',
      openingMessage: "I was fired last week. No warning, no notice pay, nothing. I had filed a complaint two months ago about my manager's behaviour and now… I don't know if it's connected but it feels like it.",
    },
    hiddenFacts: [
      { id: 1, text: 'Employed for 6 years with a clean appraisal record',        discovered: true,  category: 'Employment' },
      { id: 2, text: 'Filed a POSH complaint 2 months before termination',        discovered: true,  category: 'Legal'      },
      { id: 3, text: 'Received no formal warning letters before termination',     discovered: true,  category: 'Procedure'  },
      { id: 4, text: 'Termination letter cites "company restructuring"',          discovered: true,  category: 'Context'    },
      { id: 5, text: 'Full and final settlement not yet paid',                    discovered: false, category: 'Finance'    },
      { id: 6, text: 'Returned from maternity leave only 4 months ago',          discovered: false, category: 'Context'    },
      { id: 7, text: 'Two junior colleagues in same team were retained',          discovered: false, category: 'Evidence'   },
      { id: 8, text: 'Has email trail documenting the harassment incidents',      discovered: false, category: 'Evidence'   },
    ],
    quickQuestions: ['Ask about the termination letter', 'Explore the POSH complaint', 'Ask about notice period dues', 'Inquire about retained colleagues'],
    legalProvisions: [
      { t: 'Industrial Disputes Act', s: 'Critical',   color: 'danger',    desc: 'Section 25F mandates notice pay and retrenchment compensation for employees over 1 year.' },
      { t: 'POSH Act, 2013',          s: 'Applicable', color: 'warning',   desc: 'Retaliatory dismissal after a POSH complaint constitutes a specific statutory violation.' },
      { t: 'Maternity Benefit Act',   s: 'Relevant',   color: 'info',      desc: 'Section 12 prohibits discharge during or shortly after maternity leave.' },
      { t: 'Section 23 Contract Act', s: 'Consider',   color: 'secondary', desc: 'Termination clause void if it contravenes public policy or statute.' },
    ],
    keyAreas: ['Termination grounds', 'POSH complaint timeline', 'Notice & settlement dues', 'Maternity protection', 'Email evidence', 'Reinstatement vs. compensation'],
    responses: {
      early:    "I've been with the company for 6 years. Always got good appraisals. Then I filed a complaint about my manager… and two months later they called me in and let me go.",
      mid:      "They said it was restructuring but they kept two junior colleagues who joined after me. And HR never followed up on my complaint properly. I have emails. I didn't share them initially but… yes, I have proof.",
      late:     "I just want justice. And my dues. They haven't paid my full and final yet. I have a family to support and I cannot let this go.",
      fallback: "I'm not sure how that is relevant to my situation…",
    },
  },

  /* ── 3. Tenant Eviction / Property ── */
  {
    client: {
      name: 'Rajesh Kumar',
      initials: 'RK',
      age: 52,
      occupation: 'Retired Teacher',
      caseId: 'CASE-557-P',
      summary: 'Facing illegal eviction from a property he has occupied for over 20 years. Landlord\'s heir claims he has no rights.',
      openingMessage: "I have been living in this house for more than 20 years. Now the landlord's son has come back and says he wants the house and we have to leave. We paid rent every month. I don't know what rights I have.",
    },
    hiddenFacts: [
      { id: 1, text: 'Tenant for over 20 years in the same property',            discovered: true,  category: 'Tenancy'   },
      { id: 2, text: 'Rent paid regularly — receipts available for last 5 years', discovered: true,  category: 'Evidence'  },
      { id: 3, text: 'Original landlord deceased — son is the legal heir',       discovered: true,  category: 'Context'   },
      { id: 4, text: 'No written rent agreement currently in force',             discovered: true,  category: 'Legal'     },
      { id: 5, text: 'Verbal agreement with original landlord for long-term stay', discovered: false, category: 'Legal'   },
      { id: 6, text: 'Eviction notice issued without a court order',             discovered: false, category: 'Procedure' },
      { id: 7, text: 'Client invested ₹8 lakhs in property improvements',        discovered: false, category: 'Finance'   },
      { id: 8, text: 'Other tenants in the building also threatened',            discovered: false, category: 'Context'   },
    ],
    quickQuestions: ['Ask about the rental agreement', 'Explore the eviction notice', 'Ask about property improvements', 'Inquire about ownership documents'],
    legalProvisions: [
      { t: 'Transfer of Property Act', s: 'Critical',   color: 'danger',    desc: 'Section 106 requires proper notice period before termination of tenancy.' },
      { t: 'Rent Control Act',         s: 'Applicable', color: 'warning',   desc: 'Protects long-term tenants from arbitrary eviction; grounds are exhaustively defined.' },
      { t: 'Specific Relief Act',      s: 'Relevant',   color: 'info',      desc: 'Section 38 — perpetual injunction can prevent illegal dispossession.' },
      { t: 'CPC Order 39',             s: 'Consider',   color: 'secondary', desc: 'Temporary injunction to prevent immediate eviction pending trial.' },
    ],
    keyAreas: ['Tenancy duration', 'Rental agreement existence', 'Property improvements made', 'Eviction notice validity', 'Court order status', 'Ownership documents'],
    responses: {
      early:    "My arrangement was with the old landlord. He passed away three years ago. His son now says the old agreement means nothing. But we have been paying rent every single month — I have the receipts.",
      mid:      "We spent nearly ₹8 lakhs fixing the plumbing, the roof, everything. The original landlord even said — 'this is your home for as long as you live.' Now his son wants us out in 30 days. There is no court order — just a letter.",
      late:     "I have rent receipts. I have messages where the old landlord thanked me for improving the house. I am not leaving without a court order. I just need to know the law is on my side.",
      fallback: "I'm not sure I understand what you're asking…",
    },
  },

  /* ── 4. Cheque Bounce / Financial Fraud ── */
  {
    client: {
      name: 'Mohammed Irfan',
      initials: 'MI',
      age: 45,
      occupation: 'Small Business Owner',
      caseId: 'CASE-330-C',
      summary: 'Gave a ₹12 lakh personal loan to a business partner. Partner now denies the loan and the repayment cheque has bounced.',
      openingMessage: "I gave my business partner ₹12 lakhs two years ago as a personal loan. Now he says he doesn't owe me anything. The cheque he gave me has bounced. I need to know what I can do.",
    },
    hiddenFacts: [
      { id: 1, text: 'Loan of ₹12 lakhs given 2 years ago',                       discovered: true,  category: 'Finance'   },
      { id: 2, text: 'Partner issued a post-dated cheque for repayment',           discovered: true,  category: 'Legal'     },
      { id: 3, text: 'Cheque returned dishonoured — "insufficient funds"',         discovered: true,  category: 'Legal'     },
      { id: 4, text: 'No formal written loan agreement signed',                    discovered: true,  category: 'Procedure' },
      { id: 5, text: 'WhatsApp chat shows partner acknowledging the loan',         discovered: false, category: 'Evidence'  },
      { id: 6, text: 'NEFT transfer records exist in bank statement',              discovered: false, category: 'Evidence'  },
      { id: 7, text: 'Partner has since transferred assets to his wife\'s name',  discovered: false, category: 'Context'   },
      { id: 8, text: 'Bank dishonour memo received within 30 days',               discovered: false, category: 'Procedure' },
    ],
    quickQuestions: ['Ask about loan documentation', 'Explore bank transfer records', 'Ask about the dishonour memo', 'Inquire about asset transfers'],
    legalProvisions: [
      { t: 'Section 138 NI Act',       s: 'Critical',   color: 'danger',    desc: 'Cheque dishonour — legal notice within 30 days; complaint within 1 month of reply/expiry.' },
      { t: 'Section 420 IPC',          s: 'Applicable', color: 'warning',   desc: 'Cheating and dishonest inducement — if intent to defraud from the outset is proven.' },
      { t: 'Order 37 CPC',             s: 'Relevant',   color: 'info',      desc: 'Summary suit for recovery of money — a faster civil remedy for liquidated debts.' },
      { t: 'Section 25 Contract Act',  s: 'Consider',   color: 'secondary', desc: 'Oral agreements are valid; NEFT records and WhatsApp chats corroborate the loan.' },
    ],
    keyAreas: ['Loan documentation', 'Bank transfer records', 'Cheque & dishonour memo', 'WhatsApp message evidence', 'Asset transfers', 'Notice timeline'],
    responses: {
      early:    "I know him for 15 years. We were like brothers in business. I transferred the money directly — NEFT. He gave me a post-dated cheque saying he would return it in two years. Now the cheque has bounced and he claims I am lying.",
      mid:      "I have the bank statement showing the NEFT transfer. And on WhatsApp he wrote — 'bhai, I will return your money, trust me.' After I asked for repayment, he sold his car and transferred his shop to his wife's name. I think he is hiding assets.",
      late:     "I received the dishonour memo from the bank last week. I sent him a WhatsApp notice asking him to pay within 15 days. He ignored it. Can I file a criminal case now? What is the next step?",
      fallback: "I am not sure how to explain that part…",
    },
  },
]

const statusColor: Record<EmotionalState, string> = {
  'Distressed':    'warning',
  'Guarded':       'secondary',
  'Opening Up':    'success',
  'Uncomfortable': 'danger',
}

const MAX_TURNS = 18

/* ─── component ─── */
export default function ClientInterviewPage() {
  // Pick a random scenario once per page load
  const [scenario]       = useState<Scenario>(() => SCENARIO_POOL[Math.floor(Math.random() * SCENARIO_POOL.length)])
  const [step,           setStep]           = useState<InterviewStep>('BRIEFING')
  const [turns,          setTurns]          = useState(MAX_TURNS)
  const [emotion,        setEmotion]        = useState<EmotionalState>('Distressed')
  const [messages,       setMessages]       = useState<Message[]>([{ role: 'client', text: scenario.client.openingMessage }])
  const [inputText,      setInputText]      = useState('')
  const [isTyping,       setIsTyping]       = useState(false)
  const [notepad,        setNotepad]        = useState('')
  const [scratchpad,     setScratchpad]     = useState('')

  const { client: CLIENT, hiddenFacts: HIDDEN_FACTS, quickQuestions: QUICK_QUESTIONS, legalProvisions: LEGAL_PROVISIONS, keyAreas, responses } = scenario

  useEffect(() => {
    if (step === 'REVIEWING') {
      const t = setTimeout(() => setStep('RESULTS'), 2200)
      return () => clearTimeout(t)
    }
  }, [step])

  const handleSend = () => {
    if (!inputText.trim() || turns === 0 || isTyping) return
    setMessages(prev => [...prev, { role: 'student', text: inputText }])
    setInputText('')
    setTurns(t => t - 1)
    setIsTyping(true)

    const remaining = turns - 1
    setTimeout(() => {
      let response = responses.fallback
      if (remaining > 12) {
        setEmotion('Guarded')
        response = responses.early
      } else if (remaining > 5) {
        setEmotion('Opening Up')
        response = responses.mid
      } else {
        response = responses.late
      }
      setMessages(prev => [...prev, { role: 'client', text: response }])
      setIsTyping(false)
    }, 1500)
  }

  const handleRestart = () => {
    setStep('BRIEFING')
    setTurns(MAX_TURNS)
    setEmotion('Distressed')
    setMessages([{ role: 'client', text: CLIENT.openingMessage }])
    setInputText('')
    setNotepad('')
  }

  const discoveredCount = HIDDEN_FACTS.filter(f => f.discovered).length
  const sc              = statusColor[emotion]

  return (
    <StudentLayout activePath="/student/practice-lab">

      {/* ══════════════════════ SCREEN 1: BRIEFING ══════════════════════ */}
      {step === 'BRIEFING' && (
        <>
          {/* compact hero */}
          <div className="card p-0 mb-4">
            <div className="card-body d-flex align-items-center p-0 overflow-hidden" style={{ minHeight: 84 }}>
              <div className="flex-grow-1 px-5 py-4">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="badge bg-label-success"  style={{ fontSize: 10 }}>Beginner</span>
                  <span className="badge bg-label-secondary" style={{ fontSize: 10 }}>Skills</span>
                  <span className="badge bg-label-primary"  style={{ fontSize: 10 }}>+150 XP</span>
                </div>
                <h5 className="mb-0 text-heading fw-semibold">
                  Client Interview Room &nbsp;—&nbsp;
                  <span className="text-success">Fact-Finding Simulation</span>
                </h5>
                <p className="mb-0 text-body-secondary small mt-1">
                  Conduct a client consultation and extract legally relevant facts through empathetic inquiry.
                </p>
              </div>
              <div className="d-none d-md-flex align-items-end flex-shrink-0 pe-4" style={{ minWidth: 90 }}>
                <img src="/img/illustrations/girl-sitting-with-laptop.png" alt="" height={90} style={{ objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* client profile card */}
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-header border-0 pb-0">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti tabler-user-circle text-success fs-5"></i>
                    Client Profile
                  </h6>
                </div>
                <div className="card-body">

                  {/* avatar + name */}
                  <div className="d-flex align-items-center gap-3 mb-4 p-3 rounded-2 bg-label-success">
                    <div className="avatar avatar-lg flex-shrink-0">
                      <span className="avatar-initial rounded-circle bg-success text-white fw-bold" style={{ fontSize: 18 }}>
                        {CLIENT.initials}
                      </span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold text-heading">{CLIENT.name}</h6>
                      <small className="text-body-secondary">{CLIENT.age} yrs · {CLIENT.occupation}</small>
                      <div className="mt-1 d-flex gap-1 flex-wrap">
                        <span className="badge bg-warning text-white" style={{ fontSize: 10 }}>Priority</span>
                        <span className="badge bg-label-secondary"    style={{ fontSize: 10 }}>{CLIENT.caseId}</span>
                      </div>
                    </div>
                  </div>

                  <p className="small text-body-secondary mb-4">{CLIENT.summary}</p>

                  {/* session info */}
                  <div className="d-flex flex-column gap-2">
                    {[
                      { icon: 'tabler-message-chatbot', label: '18 Message Turns',       sub: 'Maximize fact discovery',            color: 'primary' },
                      { icon: 'tabler-brain',           label: 'Emotional Intelligence',  sub: 'Build trust to unlock guarded facts', color: 'info'    },
                      { icon: 'tabler-gavel',           label: 'Statutory Mapping',       sub: 'Identify relevant legal provisions',  color: 'warning' },
                    ].map((item, i) => (
                      <div key={i} className="d-flex align-items-center gap-3 p-2 rounded-2 border">
                        <div className="avatar avatar-sm flex-shrink-0">
                          <span className={`avatar-initial rounded bg-label-${item.color}`}>
                            <i className={`icon-base ti ${item.icon} icon-16px`} style={{ color: `var(--bs-${item.color})` }}></i>
                          </span>
                        </div>
                        <div>
                          <p className="mb-0 small fw-semibold text-heading">{item.label}</p>
                          <small className="text-body-secondary" style={{ fontSize: 10 }}>{item.sub}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* strategy + CTA */}
            <div className="col-lg-8">
              <div className="card h-100">
                <div className="card-header border-0 pb-0">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti tabler-clipboard-text text-primary fs-5"></i>
                    Pre-Interview Strategy
                  </h6>
                </div>
                <div className="card-body d-flex flex-column">

                  {/* opening message preview */}
                  <div className="rounded-2 p-3 mb-4 border-start border-4 border-warning bg-label-warning">
                    <small className="fw-bold text-uppercase text-warning d-block mb-1" style={{ fontSize: 10, letterSpacing: '.05em' }}>
                      Client's Opening Message
                    </small>
                    <p className="mb-0 small fst-italic">"{CLIENT.openingMessage}"</p>
                  </div>

                  {/* areas to explore */}
                  <div className="mb-4">
                    <p className="text-uppercase fw-semibold text-body-secondary mb-2" style={{ fontSize: 10, letterSpacing: '.06em' }}>
                      Key Areas to Explore
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {keyAreas.map(a => (
                        <span key={a} className="badge bg-label-secondary" style={{ fontSize: 11 }}>
                          <i className="icon-base ti tabler-search icon-10px me-1"></i>{a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* scratchpad */}
                  <div className="flex-grow-1 mb-4">
                    <p className="text-uppercase fw-semibold text-body-secondary mb-2" style={{ fontSize: 10, letterSpacing: '.06em' }}>
                      <i className="icon-base ti tabler-bulb icon-12px me-1 text-warning"></i>
                      Strategy Scratchpad
                    </p>
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Note down your areas of inquiry before starting the consultation…"
                      value={scratchpad}
                      onChange={e => setScratchpad(e.target.value)}
                      style={{ fontSize: 13, resize: 'none' }}
                    />
                  </div>

                  {/* CTA row */}
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <button
                      className="btn btn-success d-flex align-items-center gap-2 px-5"
                      onClick={() => setStep('CONSULTATION')}
                    >
                      <i className="icon-base ti tabler-player-play-filled icon-16px"></i>
                      Start Interview Simulation
                    </button>
                    <Link href="/student/practice-lab" className="btn btn-label-secondary d-flex align-items-center gap-2">
                      <i className="icon-base ti tabler-arrow-left icon-14px"></i>
                      Back to Lab
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ══════════════════════ SCREEN 2: CONSULTATION ══════════════════════ */}
      {step === 'CONSULTATION' && (
        <div className="app-chat card overflow-hidden">
          <div className="row g-0" style={{ minHeight: '78vh' }}>

            {/* ── left: chat ── */}
            <div className="col-lg-7 app-chat-history d-flex flex-column">
              <div className="chat-history-wrapper">

                {/* header */}
                <div className="chat-history-header border-bottom">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">

                    {/* client info */}
                    <div className="d-flex align-items-center gap-3">
                      <div className="avatar avatar-sm flex-shrink-0">
                        <span className="avatar-initial rounded-circle bg-success text-white fw-bold" style={{ fontSize: 12 }}>
                          {CLIENT.initials}
                        </span>
                      </div>
                      <div>
                        <h6 className="m-0 fw-semibold" style={{ fontSize: 13 }}>{CLIENT.name}</h6>
                        <div className="d-flex align-items-center gap-2">
                          <span className={`badge bg-label-${sc}`} style={{ fontSize: 10 }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: `var(--bs-${sc})`, display: 'inline-block', marginRight: 4 }}></span>
                            {emotion}
                          </span>
                          <small className="text-body-secondary" style={{ fontSize: 10 }}>{CLIENT.age} yrs · {CLIENT.occupation}</small>
                        </div>
                      </div>
                    </div>

                    {/* turns counter */}
                    <div style={{ minWidth: 180 }}>
                      <div className="d-flex justify-content-between mb-1">
                        <small className="text-body-secondary" style={{ fontSize: 10 }}>Turns remaining</small>
                        <small className={`fw-semibold ${turns <= 5 ? 'text-danger' : 'text-primary'}`} style={{ fontSize: 10 }}>
                          {turns} / {MAX_TURNS}
                        </small>
                      </div>
                      <div className="progress" style={{ height: 5 }}>
                        <div
                          className={`progress-bar ${turns <= 5 ? 'bg-danger' : 'bg-success'}`}
                          style={{ width: `${(turns / MAX_TURNS) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* finalize / end early */}
                    <div className="d-flex gap-1">
                      {turns === 0 ? (
                        <button
                          className="btn btn-sm btn-success d-flex align-items-center gap-1 px-3"
                          onClick={() => setStep('REVIEWING')}
                          style={{ fontSize: 12 }}
                        >
                          <i className="icon-base ti tabler-checklist icon-14px"></i>
                          Finalize
                        </button>
                      ) : (
                        <button
                          className="btn btn-sm btn-label-secondary d-flex align-items-center gap-1 px-3"
                          onClick={() => setStep('REVIEWING')}
                          style={{ fontSize: 12 }}
                        >
                          <i className="icon-base ti tabler-checklist icon-14px"></i>
                          End Early
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* messages */}
                <div className="chat-history-body">
                  <ul className="list-unstyled chat-history" style={{ maxWidth: 680, margin: '0 auto', padding: '0 1rem' }}>
                    {messages.map((m, i) =>
                      m.role === 'client' ? (
                        <li key={i} className="chat-message">
                          <div className="d-flex overflow-hidden">
                            <div className="user-avatar flex-shrink-0 me-3">
                              <div className="avatar avatar-sm">
                                <span className="avatar-initial rounded-circle bg-success text-white fw-bold" style={{ fontSize: 11 }}>
                                  {CLIENT.initials}
                                </span>
                              </div>
                            </div>
                            <div className="chat-message-wrapper flex-grow-1">
                              <div className="chat-message-text">
                                <p className="mb-0 small">{m.text}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ) : (
                        <li key={i} className="chat-message chat-message-right">
                          <div className="d-flex overflow-hidden">
                            <div className="chat-message-wrapper flex-grow-1">
                              <div className="chat-message-text">
                                <p className="mb-0 small">{m.text}</p>
                              </div>
                            </div>
                            <div className="user-avatar flex-shrink-0 ms-3">
                              <div className="avatar avatar-sm">
                                <span className="avatar-initial rounded-circle bg-label-primary fw-bold" style={{ fontSize: 11 }}>You</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    )}

                    {isTyping && (
                      <li className="chat-message">
                        <div className="d-flex align-items-center gap-3">
                          <div className="avatar avatar-sm flex-shrink-0">
                            <span className="avatar-initial rounded-circle bg-success text-white fw-bold" style={{ fontSize: 11 }}>
                              {CLIENT.initials}
                            </span>
                          </div>
                          <div className="chat-message-text d-flex align-items-center gap-2">
                            <span className="spinner-border spinner-border-sm text-success border-2" style={{ width: 12, height: 12 }}></span>
                            <small className="text-body-secondary" style={{ fontSize: 11 }}>{CLIENT.name.split(' ')[0]} is typing…</small>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                {/* footer */}
                <div className="chat-history-footer shadow-xs">
                  <div style={{ maxWidth: 680, margin: '0 auto' }}>

                    {/* quick question chips */}
                    <div className="d-flex gap-2 flex-wrap mb-3">
                      {QUICK_QUESTIONS.map(q => (
                        <button
                          key={q}
                          className="btn btn-sm btn-label-secondary d-flex align-items-center gap-1 px-3"
                          style={{ fontSize: 11, borderRadius: 8 }}
                          onClick={() => setInputText(q)}
                          disabled={turns === 0}
                        >
                          <i className="icon-base ti tabler-message-question icon-12px"></i>
                          {q}
                        </button>
                      ))}
                    </div>

                    {/* input row */}
                    <form
                      className="form-send-message d-flex align-items-center gap-2"
                      onSubmit={e => { e.preventDefault(); handleSend() }}
                    >
                      <input
                        className="form-control message-input border-0 shadow-none flex-grow-1"
                        placeholder={turns > 0 ? 'Type your question to the client…' : 'Interview complete — click Finalize to view results'}
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
                        disabled={turns === 0 || isTyping}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary d-flex align-items-center gap-2 px-4"
                        disabled={turns === 0 || isTyping || !inputText.trim()}
                      >
                        <span>Send</span>
                        <i className="icon-base ti tabler-send icon-14px"></i>
                      </button>
                    </form>

                    <div className="text-center mt-2">
                      <small className="text-body-secondary" style={{ fontSize: 10 }}>
                        Press{' '}
                        <kbd style={{ fontSize: 9, padding: '1px 5px', border: '1px solid currentColor', borderRadius: 3, opacity: .7 }}>
                          Enter ↵
                        </kbd>
                        {' '}to send
                      </small>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ── right: notepad + tracker ── */}
            <div className="col-lg-5 d-flex flex-column border-start overflow-auto">

              {/* panel header */}
              <div
                className="border-bottom px-4 d-flex align-items-center justify-content-between flex-shrink-0"
                style={{ height: 56 }}
              >
                <div className="d-flex align-items-center gap-2">
                  <i className="icon-base ti tabler-notes icon-16px text-warning"></i>
                  <span className="fw-semibold text-heading small">Clinician's Legal Pad</span>
                </div>
                <span className="badge bg-label-secondary" style={{ fontSize: 10 }}>
                  <i className="icon-base ti tabler-lock icon-10px me-1"></i>Confidential
                </span>
              </div>

              <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-3">

                {/* notepad textarea */}
                <div className="card border shadow-none">
                  <div className="card-header border-0 pb-0">
                    <h6 className="mb-0 small fw-semibold d-flex align-items-center gap-2">
                      <i className="icon-base ti tabler-pencil icon-14px text-warning"></i>
                      Case Notes
                    </h6>
                  </div>
                  <div className="card-body pt-2">
                    <textarea
                      className="form-control border-0 shadow-none p-2"
                      rows={7}
                      placeholder="Jot down discovered facts, legal provisions, and client observations…"
                      value={notepad}
                      onChange={e => setNotepad(e.target.value)}
                      style={{
                        resize: 'none', fontSize: 13, lineHeight: 1.9,
                        background: 'rgba(255,193,7,.05)',
                        borderRadius: 6,
                      }}
                    />
                  </div>
                </div>

                {/* facts tracker */}
                <div className="card border shadow-none">
                  <div className="card-header border-0 pb-0 d-flex align-items-center justify-content-between">
                    <h6 className="mb-0 small fw-semibold d-flex align-items-center gap-2">
                      <i className="icon-base ti tabler-checklist icon-14px text-success"></i>
                      Facts Tracker
                    </h6>
                    <span className="badge bg-label-success" style={{ fontSize: 10 }}>
                      {discoveredCount} / {HIDDEN_FACTS.length}
                    </span>
                  </div>
                  <div className="card-body pt-2">
                    <div className="d-flex flex-column gap-1">
                      {HIDDEN_FACTS.map(f => (
                        <div
                          key={f.id}
                          className="d-flex align-items-center gap-2 px-2 py-1 rounded-2"
                          style={{
                            background: f.discovered ? 'rgba(var(--bs-success-rgb),.06)' : 'transparent',
                            opacity: f.discovered ? 1 : 0.5,
                          }}
                        >
                          <i
                            className={`icon-base ti ${f.discovered ? 'tabler-check' : 'tabler-lock'} icon-12px flex-shrink-0`}
                            style={{ color: f.discovered ? 'var(--bs-success)' : 'var(--bs-secondary)' }}
                          />
                          <span
                            className={`flex-grow-1 ${f.discovered ? 'text-heading' : 'text-body-secondary'}`}
                            style={{ fontSize: 11 }}
                          >
                            {f.discovered ? f.text : '— Not yet discovered'}
                          </span>
                          <span
                            className={`badge bg-label-${f.discovered ? 'success' : 'secondary'} flex-shrink-0`}
                            style={{ fontSize: 9 }}
                          >
                            {f.category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* relevant provisions */}
                <div className="card border shadow-none">
                  <div className="card-header border-0 pb-0">
                    <h6 className="mb-0 small fw-semibold d-flex align-items-center gap-2">
                      <i className="icon-base ti tabler-gavel icon-14px text-primary"></i>
                      Relevant Provisions
                    </h6>
                  </div>
                  <div className="card-body pt-2 d-flex flex-wrap gap-1">
                    {LEGAL_PROVISIONS.map(p => (
                      <span key={p.t} className={`badge bg-label-${p.color}`} style={{ fontSize: 10 }}>{p.t}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* ══════════════════════ SCREEN 3: REVIEWING ══════════════════════ */}
      {step === 'REVIEWING' && (
        <div className="card" style={{ minHeight: '52vh' }}>
          <div className="card-body d-flex flex-column align-items-center justify-content-center text-center" style={{ padding: '5rem 2rem' }}>
            <div className="spinner-border text-primary mb-4" style={{ width: 56, height: 56, borderWidth: 3 }}></div>
            <h5 className="fw-semibold mb-2">Analyzing Consultation Performance…</h5>
            <p className="text-body-secondary small mb-0">LexAI is mapping your discovered facts against legal provision nexuses.</p>
          </div>
        </div>
      )}

      {/* ══════════════════════ SCREEN 4: RESULTS ══════════════════════ */}
      {step === 'RESULTS' && (
        <>
          {/* score hero */}
          <div className="card mb-4 overflow-hidden">
            <div className="card-body p-0">
              <div className="d-flex flex-column flex-md-row">
                <div
                  className="d-flex flex-column align-items-center justify-content-center p-5 text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--bs-success), #1f9d57)', minWidth: 180 }}
                >
                  <h1 className="display-3 fw-bold mb-0 text-white">82%</h1>
                  <small className="opacity-75 mt-1">Overall Score</small>
                </div>
                <div className="flex-grow-1 p-5">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge bg-label-success" style={{ fontSize: 10 }}>SIMULATION COMPLETE</span>
                  </div>
                  <h5 className="fw-semibold mb-2">Excellent demonstration of empathetic inquiry.</h5>
                  <p className="text-body-secondary small mb-3">
                    You successfully uncovered critical facts while maintaining client trust.
                    Strengthening your financial nexus inquiry would have reached an elite score.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-label-warning d-flex align-items-center gap-1" style={{ fontSize: 11 }}>
                      <i className="icon-base ti tabler-star-filled icon-12px"></i>+340 XP earned
                    </span>
                    <span className="badge bg-label-info d-flex align-items-center gap-1" style={{ fontSize: 11 }}>
                      <i className="icon-base ti tabler-trophy icon-12px"></i>Clinical Star Awarded
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* stats strip */}
          <div className="card mb-4">
            <div className="card-body py-3">
              <div className="d-flex flex-wrap align-items-center gap-4">
                {[
                  { icon: 'tabler-search',     label: 'Facts Uncovered',  value: `${discoveredCount}/${HIDDEN_FACTS.length}`, color: 'success' },
                  { icon: 'tabler-mood-wink',  label: 'Peak Trust Level', value: 'Opening Up',                                color: 'info'    },
                  { icon: 'tabler-clock',      label: 'Turns Used',       value: `${MAX_TURNS}/${MAX_TURNS}`,                 color: 'primary' },
                  { icon: 'tabler-percentage', label: 'Turn Efficiency',  value: '100%',                                      color: 'warning' },
                ].map((s, i) => (
                  <div key={i} className="d-flex align-items-center gap-2">
                    <div className="avatar avatar-sm">
                      <span className={`avatar-initial rounded bg-label-${s.color}`}>
                        <i className={`icon-base ti ${s.icon} icon-16px`} style={{ color: `var(--bs-${s.color})` }}></i>
                      </span>
                    </div>
                    <div>
                      <p className="mb-0 fw-semibold small">{s.value}</p>
                      <small className="text-body-secondary" style={{ fontSize: 10 }}>{s.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* fact tables */}
          <div className="row g-4 mb-4">
            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti tabler-circle-check text-success fs-5"></i>
                    Facts Discovered
                  </h6>
                  <span className="badge bg-label-success" style={{ fontSize: 10 }}>Mastery</span>
                </div>
                <div className="card-body p-0">
                  <table className="table table-hover align-middle mb-0">
                    <tbody>
                      {HIDDEN_FACTS.filter(f => f.discovered).map(f => (
                        <tr key={f.id}>
                          <td className="px-4 py-3">
                            <p className="mb-0 small fw-semibold text-heading">{f.text}</p>
                            <small className="text-body-secondary" style={{ fontSize: 10 }}>Uncovered via empathetic inquiry</small>
                          </td>
                          <td className="px-4 text-end">
                            <span className="badge bg-label-primary" style={{ fontSize: 10 }}>{f.category}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <i className="ti tabler-alert-triangle text-warning fs-5"></i>
                    Missed Opportunities
                  </h6>
                  <span className="badge bg-label-warning" style={{ fontSize: 10 }}>Review</span>
                </div>
                <div className="card-body p-0">
                  <table className="table table-hover align-middle mb-0">
                    <tbody>
                      {HIDDEN_FACTS.filter(f => !f.discovered).map(f => (
                        <tr key={f.id}>
                          <td className="px-4 py-3">
                            <p className="mb-0 small fw-semibold text-body-secondary">{f.text}</p>
                            <small className="text-warning" style={{ fontSize: 10 }}>
                              Ask more about {f.category.toLowerCase()} area
                            </small>
                          </td>
                          <td className="px-4 text-end">
                            <span className="badge bg-label-secondary" style={{ fontSize: 10 }}>{f.category}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* legal nexus */}
          <div className="card mb-4">
            <div className="card-header">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <i className="ti tabler-scale text-primary fs-5"></i>
                Legal Nexus Analysis
              </h6>
              <p className="mb-0 text-body-secondary small mt-1">
                Based on facts discovered, LexAI identified these critical provisions for your strategy.
              </p>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {LEGAL_PROVISIONS.map((l, i) => (
                  <div key={i} className="col-md-6">
                    <div className={`rounded-2 p-3 bg-label-${l.color}`}>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="mb-0 fw-semibold small text-heading">{l.t}</h6>
                        <span className={`badge bg-${l.color} text-white`} style={{ fontSize: 9 }}>{l.s}</span>
                      </div>
                      <p className="mb-0 text-body-secondary" style={{ fontSize: 11 }}>{l.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="card">
            <div className="card-body d-flex flex-wrap gap-3 justify-content-center py-4">
              <button
                className="btn btn-label-secondary d-flex align-items-center gap-2 px-4"
                onClick={handleRestart}
              >
                <i className="icon-base ti tabler-reload icon-16px"></i>
                Restart Simulation
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
