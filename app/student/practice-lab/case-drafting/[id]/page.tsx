/* eslint-disable react-hooks/purity */
/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'
import Link from 'next/link'

// ── Types ────────────────────────────────────────────────────────────────────

type DocType   = 'fir' | 'chargesheet' | 'bail' | 'petition'
type Step      = 'selection' | 'briefing' | 'drafting'

interface Scenario {
  caseRef:       string
  location:      string
  incidentDate:  string
  complainant:   string   // or "Applicant" for bail / "Petitioner" for petition
  accused:       string
  facts:         string   // rich paragraph shown in briefing & sidebar
  initialDraft:  string   // pre-filled text in the paper editor
}

interface DocTemplate {
  title:       string
  id:          string
  image:       string
  icon:        string
  color:       string
  description: string
  partyLabels: { a: string; b: string }  // e.g. Complainant / Accused
  issues:      string[]
  lawSections: string[]
  precedents:  { name: string; court: string; year: string; holding: string }[]
  scenarios:   Scenario[]
}

// ── Template + Scenario Pool ─────────────────────────────────────────────────

const docTemplates: Record<DocType, DocTemplate> = {

  /* ────────── FIR ────────── */
  fir: {
    title:       'First Information Report (FIR)',
    id:          'SEC-154-CRPC',
    image:       '/img/illustrations/fir.png',
    icon:        'tabler-file-alert',
    color:       'danger',
    description: 'Draft a formal complaint for a cognizable offence to initiate criminal proceedings.',
    partyLabels: { a: 'Complainant', b: 'Accused' },
    issues: [
      'Clearly state the time and place of incident',
      'Identify the accused (if known)',
      'Describe the specific criminal acts committed',
      'List stolen property or physical injuries sustained',
    ],
    lawSections: ['Section 154 CrPC', 'Section 379 IPC', 'Section 323 IPC'],
    precedents: [
      { name: 'Lalita Kumari v. Govt. of UP', court: 'Supreme Court', year: '2014', holding: 'Mandatory FIR registration if information discloses a cognizable offence' },
    ],
    scenarios: [
      {
        caseRef:      'FIR No. [TO BE FILLED] / 2026',
        location:     'Saket, South Delhi',
        incidentDate: '14 March 2026, 10:30 PM',
        complainant:  'Manish Gupta',
        accused:      'Two unidentified persons on motorcycle',
        facts:        'The complainant, Manish Gupta, was returning home on foot at 10:30 PM on 14 March 2026 when two unidentified men on a motorcycle snatched his bag containing ₹15,000 cash, a laptop, and identity documents. One of the assailants struck him with a blunt object causing injuries to his left shoulder. The motorcycle fled towards the Ring Road before he could note the number plate.',
        initialDraft: `FIRST INFORMATION REPORT
(Under Section 154 Cr.P.C.)

1. DISTRICT: South Delhi          2. P.S.: Saket          3. FIR NO: _____ / 2026

TO,
THE OFFICER-IN-CHARGE,
Saket Police Station, New Delhi.

SUBJECT: Complaint regarding theft and physical assault.

Sir/Madam,

I, Manish Gupta, s/o Late Shri R.K. Gupta, residing at H.No. 45, Saket, New Delhi — 110017, do hereby state as follows:

1. INCIDENT DETAILS
   Date & Time : 14 March 2026, approximately 10:30 PM
   Place       : Near Saket Metro Gate No. 2, South Delhi

2. FACTS OF THE CASE
   [Draft the facts of the incident clearly and in chronological order]

3. DESCRIPTION OF ACCUSED
   [Describe the accused to the best of your knowledge]

4. PROPERTY STOLEN / INJURIES SUSTAINED
   [List all stolen items and injuries]

5. PRAYER
   I request the registration of this FIR and appropriate police action.

Yours faithfully,
Manish Gupta
Date:`,
      },
      {
        caseRef:      'FIR No. [TO BE FILLED] / 2026',
        location:     'Koramangala, Bengaluru',
        incidentDate: '20 March 2026',
        complainant:  'Kavita Mehta',
        accused:      'Unknown cybercriminal (posing as bank official)',
        facts:        'The complainant, Kavita Mehta, received a call from an individual posing as a Senior Manager of her bank, claiming her account was suspended. She was induced to share her OTP and net-banking credentials over the phone. A sum of ₹2,30,000 was fraudulently debited in three transactions within minutes. The bank\'s cyber cell confirmed the transactions originated from a VPN-masked IP address in another state.',
        initialDraft: `FIRST INFORMATION REPORT
(Under Section 154 Cr.P.C.)

1. DISTRICT: Bengaluru Urban        2. P.S.: Koramangala        3. FIR NO: _____ / 2026

TO,
THE OFFICER-IN-CHARGE,
Koramangala Police Station, Bengaluru — 560034.

SUBJECT: Complaint regarding online fraud and impersonation.

Sir/Madam,

I, Kavita Mehta, d/o Shri Arun Mehta, residing at Flat 12B, Golden Palms, Koramangala 5th Block, Bengaluru, do hereby state as follows:

1. INCIDENT DETAILS
   Date & Time : 20 March 2026, approximately 3:15 PM
   Mode        : Phone call followed by online transaction

2. FACTS OF THE CASE
   [Draft the facts of the fraud in chronological order]

3. NATURE OF FRAUD
   [Describe how the accused induced the complainant]

4. FINANCIAL LOSS
   Amount Defrauded : ₹2,30,000/-
   Transaction IDs  : [To be provided by bank]

5. PRAYER
   I request the registration of this FIR and cybercrime investigation.

Yours faithfully,
Kavita Mehta
Date:`,
      },
    ],
  },

  /* ────────── CHARGESHEET ────────── */
  chargesheet: {
    title:       'Police Charge Sheet',
    id:          'SEC-173-CRPC',
    image:       '/img/illustrations/chargesheet.png',
    icon:        'tabler-file-text',
    color:       'primary',
    description: 'Final report by police after investigation, detailing evidence and charges against the accused.',
    partyLabels: { a: 'State / Complainant', b: 'Accused' },
    issues: [
      'Establish territorial jurisdiction of the Court',
      'State the specific offence and applicable IPC section',
      'Lay out the prima facie evidence clearly',
      'Identify all witnesses and material exhibits',
    ],
    lawSections: ['Section 173 CrPC', 'Section 302 IPC', 'Section 120B IPC'],
    precedents: [
      { name: 'State of UP v. Ram Sagar Yadav', court: 'Supreme Court', year: '1985', holding: 'Ingredients of Section 302 — intention established by circumstances' },
      { name: 'Bachan Singh v. State of Punjab', court: 'Supreme Court', year: '1980', holding: 'Rarest of rare doctrine for capital punishment under Section 302' },
    ],
    scenarios: [
      {
        caseRef:      'Criminal Case No. ___ / 2026',
        location:     'Saket, South Delhi',
        incidentDate: '28 January 2026',
        complainant:  'State of NCT of Delhi',
        accused:      'Ram Kumar (age 34, daily wage labourer)',
        facts:        'Post-investigation in FIR No. 45/2026, Ram Kumar is accused of the murder of Shyam Lal on 28 January 2026. The murder weapon — a kitchen knife — was recovered from the accused\'s residence based on his disclosure statement. Two eyewitnesses have been identified. Forensic analysis confirms blood-type match on the weapon with the deceased.',
        initialDraft: `IN THE HON'BLE SESSIONS COURT AT NEW DELHI
Criminal Case No. ___ of 2026

IN THE MATTER OF:
State of NCT of Delhi                  ... Complainant
VERSUS
Ram Kumar, s/o Shri Hari Ram           ... Accused

CHARGE SHEET
(Under Section 173 Cr.P.C.)

1. JURISDICTION
   [Establish why this Court has territorial jurisdiction]

2. BRIEF FACTS OF THE CASE
   [State the facts disclosed during investigation in chronological order]

3. OFFENCE ALLEGED
   Section 302 IPC — Murder
   [Set out the ingredients of the offence and how they are made out]

4. EVIDENCE ON RECORD
   (a) Witness List    : [List all witnesses with designations]
   (b) Material Exhibits : [List all physical exhibits]
   (c) Forensic Reports  : [Summarise FSL findings]

5. CONCLUSION
   That the chargesheet be taken on record and the accused be tried.

Submitted by:
Investigating Officer
Date:`,
      },
      {
        caseRef:      'Special Case No. ___ / 2026',
        location:     'Dharavi, Mumbai',
        incidentDate: '5 February 2026',
        complainant:  'State of Maharashtra / NCB',
        accused:      'Suresh Patel (age 41, transport contractor)',
        facts:        'Following a tip-off, the Narcotics Control Bureau conducted a raid at Warehouse No. 7, Dharavi, on 5 February 2026. 12 kg of heroin was recovered concealed in commercial packaging. Suresh Patel, the warehouse owner, was arrested at the scene. Mobile records show regular contact with a known drug cartel operative. A co-accused absconding.',
        initialDraft: `IN THE HON'BLE SPECIAL COURT (NDPS) AT MUMBAI
Special Case No. ___ of 2026

IN THE MATTER OF:
State of Maharashtra / NCB             ... Complainant
VERSUS
Suresh Patel, s/o Ramesh Patel         ... Accused No. 1
[Co-accused — Absconding]              ... Accused No. 2

CHARGE SHEET
(Under Section 173 Cr.P.C. read with NDPS Act, 1985)

1. JURISDICTION
   [Establish jurisdiction of the Special NDPS Court]

2. BRIEF FACTS OF THE CASE
   [State the facts of the raid and arrest]

3. OFFENCES ALLEGED
   Section 21(c) NDPS Act — Possession of heroin exceeding commercial quantity
   Section 29 NDPS Act    — Conspiracy
   [Set out ingredients and how they are established]

4. EVIDENCE ON RECORD
   (a) Seizure Panchanama
   (b) FSL Report on recovered substance
   (c) Call Detail Records
   (d) Witness List

5. PRAYER
   That the accused be tried and convicted under the NDPS Act.

Submitted by:
Investigating Officer, NCB
Date:`,
      },
    ],
  },

  /* ────────── BAIL ────────── */
  bail: {
    title:       'Bail Application',
    id:          'SEC-437-CRPC',
    image:       '/img/illustrations/bail.png',
    icon:        'tabler-gavel',
    color:       'success',
    description: 'Request the court to release the accused from custody pending trial or investigation.',
    partyLabels: { a: 'Applicant / Accused', b: 'State' },
    issues: [
      'Argue the applicant poses no flight risk',
      'Establish absence of prior criminal antecedents',
      'Demonstrate investigation is complete — no recovery pending',
      'Address concerns of witness tampering proactively',
    ],
    lawSections: ['Section 437 CrPC', 'Section 439 CrPC', 'Article 21 Constitution'],
    precedents: [
      { name: 'Satyendar Kumar Antil v. CBI', court: 'Supreme Court', year: '2022', holding: 'Bail is the rule, jail is the exception — guidelines for all courts' },
      { name: 'Sanjay Chandra v. CBI', court: 'Supreme Court', year: '2012', holding: 'Prolonged incarceration before conviction violates Article 21' },
    ],
    scenarios: [
      {
        caseRef:      'Bail Application No. ___ / 2026',
        location:     'Saket, New Delhi',
        incidentDate: 'Arrested 20 March 2026',
        complainant:  'State of NCT of Delhi',
        accused:      'Vivek Anand (age 38, IT Consultant)',
        facts:        'Vivek Anand was arrested on 20 March 2026 in connection with FIR No. 88/2026 alleging financial fraud. He has cooperated fully with the investigation, handed over his passports, and has no prior criminal record. Investigation is substantially complete; chargesheet is expected shortly. He is the sole earning member of his family. Co-accused have been granted bail.',
        initialDraft: `IN THE COURT OF THE METROPOLITAN MAGISTRATE (SAKET)
Bail Application No. ___ of 2026

IN RE: State of NCT of Delhi  vs.  Vivek Anand

APPLICATION FOR BAIL UNDER SECTION 437 OF Cr.P.C.

MOST RESPECTFULLY SHOWETH:

1. That the applicant/accused has been falsely implicated in FIR No. 88/2026 registered at Saket P.S.

2. That the applicant is a law-abiding citizen with absolutely no prior criminal record.

3. [Draft the grounds for bail — cooperation with investigation, no flight risk, ties to community]

4. That the investigation is substantially complete and no further recovery is pending from the applicant.

5. That the co-accused in the same case have already been enlarged on bail.

6. GROUNDS
   (i)   [Ground 1 — flight risk argument]
   (ii)  [Ground 2 — evidence tampering argument]
   (iii) [Ground 3 — humanitarian / personal circumstances]

PRAYER
In view of the above, it is most respectfully prayed that this Hon'ble Court may be pleased to enlarge the applicant on bail on such terms and conditions as this Court deems fit.

Counsel for Applicant
Date:`,
      },
      {
        caseRef:      'Bail Application No. ___ / 2026',
        location:     'Pune, Maharashtra',
        incidentDate: 'Arrested 10 March 2026',
        complainant:  'State of Maharashtra',
        accused:      'Prateek Sharma (age 26, software developer)',
        facts:        'Prateek Sharma was arrested on 10 March 2026 in connection with a road accident on 8 March 2026 in which one person died. He is charged under Section 304A IPC (death by negligence). The accused was not intoxicated (breathalyser report confirms 0.0). It was a wet road and low-visibility incident. He stopped at the scene and called the ambulance himself. He has no prior record and is the sole breadwinner for his elderly parents.',
        initialDraft: `IN THE COURT OF THE CHIEF JUDICIAL MAGISTRATE, PUNE
Bail Application No. ___ of 2026

IN RE: State of Maharashtra  vs.  Prateek Sharma

APPLICATION FOR BAIL UNDER SECTION 437 OF Cr.P.C.
(In connection with FIR No. ___ / 2026, P.S. Hadapsar)

MOST RESPECTFULLY SHOWETH:

1. That the applicant has been arrested in connection with an unfortunate road accident on 8 March 2026 on the Pune-Solapur Highway.

2. That the applicant is charged under Section 304A IPC (death by negligence). The offence is not punishable with death or life imprisonment.

3. [Draft grounds — breathalyser result, voluntary assistance at scene, no flight risk]

4. That the applicant stopped his vehicle immediately, called the ambulance and fully cooperated with the police.

5. That the investigation is complete — FSL, Spot Panchanama, and breathalyser report are on record.

GROUNDS FOR BAIL
   (i)   [Ground 1]
   (ii)  [Ground 2]
   (iii) [Ground 3]

PRAYER
It is most respectfully prayed that the applicant be enlarged on bail on appropriate terms and conditions.

Counsel for Applicant
Date:`,
      },
    ],
  },

  /* ────────── PETITION ────────── */
  petition: {
    title:       'Writ Petition (Criminal)',
    id:          'ART-226-CONST',
    image:       '/img/illustrations/petition.png',
    icon:        'tabler-scales',
    color:       'info',
    description: 'Approach the High Court for enforcement of fundamental rights or quashing of FIR.',
    partyLabels: { a: 'Petitioner', b: 'Respondents' },
    issues: [
      'Demonstrate violation of a fundamental right (Art. 14 / 21)',
      'Argue for quashing of FIR under Section 482 CrPC',
      'Establish there is no adequate alternative remedy',
      'Cite abuse of the process of law by the respondents',
    ],
    lawSections: ['Article 226 Constitution', 'Section 482 CrPC', 'Article 14 & 21'],
    precedents: [
      { name: 'State of Haryana v. Bhajan Lal', court: 'Supreme Court', year: '1992', holding: 'Seven exhaustive categories for quashing FIRs under Section 482 CrPC' },
      { name: 'Arnesh Kumar v. State of Bihar', court: 'Supreme Court', year: '2014', holding: 'Police must apply mind before arresting — checklist mandated' },
    ],
    scenarios: [
      {
        caseRef:      'Criminal Writ Petition No. ___ / 2026',
        location:     'High Court of Delhi',
        incidentDate: 'FIR registered 5 March 2026',
        complainant:  'Sunil Varma (Journalist)',
        accused:      'State of NCT of Delhi & Ors.',
        facts:        'The petitioner, Sunil Varma, a senior journalist, seeks quashing of FIR No. 11/2026 registered under Section 499/500 IPC (defamation). The FIR was filed by a sitting MLA hours after the petitioner published an investigative article on corruption. The complainant has a documented history of filing such FIRs against press reporters. The petitioner has reasonable apprehension of arrest, stifling his journalistic work.',
        initialDraft: `IN THE HIGH COURT OF DELHI AT NEW DELHI
Criminal Writ Petition No. ___ of 2026

IN THE MATTER OF:
Sunil Varma, s/o Ramesh Varma               ... Petitioner
VERSUS
State of NCT of Delhi & Ors.                 ... Respondents

WRIT PETITION UNDER ARTICLE 226 OF THE CONSTITUTION OF INDIA
(For Quashing of FIR No. 11/2026 & staying investigation thereunder)

MOST RESPECTFULLY SHOWETH:

1. That the Petitioner is a senior journalist with 18 years of experience and no criminal record.

2. That FIR No. 11/2026 under Section 499/500 IPC has been registered at the behest of Respondent No. 2, a sitting MLA.

3. [Draft the constitutional violation — Art. 19(1)(a) freedom of press, Art. 21 personal liberty]

4. That the FIR is clearly an abuse of process filed to intimidate the Petitioner and suppress legitimate press reporting.

5. GROUNDS FOR QUASHING
   (i)  [Ground under Bhajan Lal category — no cognizable offence disclosed]
   (ii) [Ground — FIR filed with ulterior motive]
   (iii)[Ground — Fundamental Right violation]

PRAYER
(a) Quash FIR No. 11/2026 registered at P.S. Civil Lines, Delhi.
(b) Stay further investigation pending hearing.
(c) Any other relief this Court deems fit.

Counsel for Petitioner
Date:`,
      },
      {
        caseRef:      'Habeas Corpus Petition No. ___ / 2026',
        location:     'High Court of Bombay',
        incidentDate: 'Detained since 18 March 2026',
        complainant:  'Asha Devi (on behalf of detenu Rajan Devi)',
        accused:      'State of Maharashtra & Superintendent, Yerawada Prison',
        facts:        'The petitioner, Asha Devi, files this petition on behalf of her husband, Rajan Devi, who was detained under the National Security Act on 18 March 2026 without any formal charge. The detention order is non-specific and does not disclose grounds. The detenu has been denied access to his lawyer for 12 days, violating Articles 21 and 22(1) of the Constitution. No review board has been convened as required under Section 10 of the NSA.',
        initialDraft: `IN THE HIGH COURT OF JUDICATURE AT BOMBAY
Habeas Corpus Petition No. ___ of 2026

IN THE MATTER OF:
Asha Devi (wife of the detenu)               ... Petitioner
VERSUS
State of Maharashtra & Ors.                  ... Respondents

WRIT OF HABEAS CORPUS UNDER ARTICLE 226 OF THE CONSTITUTION

MOST RESPECTFULLY SHOWETH:

1. That this petition is filed to secure the release of Rajan Devi, detained since 18 March 2026 under the National Security Act, 1980.

2. That the detention order is vague, non-specific, and does not disclose sufficient grounds as mandated under Section 8 of the NSA.

3. [Draft the constitutional argument — Article 21, Article 22(1), right to legal counsel]

4. That no Advisory Board review has been convened within the statutory period of 10 days, rendering the detention void ab initio.

5. GROUNDS
   (i)  [Ground — Detention order non-specific / vague]
   (ii) [Ground — Denial of legal access violates Art. 22(1)]
   (iii)[Ground — Advisory Board not convened]

PRAYER
(a) Issue writ of Habeas Corpus directing immediate release of the detenu.
(b) Declare the detention order dated 18 March 2026 unconstitutional and void.
(c) Any other relief as deemed fit.

Counsel for Petitioner
Date:`,
      },
    ],
  },
}

// ── Component ────────────────────────────────────────────────────────────────

export default function CaseDraftingPage() {
  const [step,          setStep]          = useState<Step>('selection')
  const [docType,       setDocType]       = useState<DocType | null>(null)
  const [scenario,      setScenario]      = useState<Scenario | null>(null)
  const [briefOpen,     setBriefOpen]     = useState(true)
  const [checkedIssues, setCheckedIssues] = useState<boolean[]>([])
  const [scratchpad,    setScratchpad]    = useState('')

  const template = docType ? docTemplates[docType] : null

  // ── Step 1 → Step 2: pick doc type, randomly select scenario, show briefing
  const handleSelect = (type: DocType) => {
    const pool = docTemplates[type].scenarios
    const picked = pool[Math.floor(Math.random() * pool.length)]
    setDocType(type)
    setScenario(picked)
    setCheckedIssues(new Array(docTemplates[type].issues.length).fill(false))
    setScratchpad('')
    setStep('briefing')
  }

  // ── Step 2 → Step 3: proceed to drafting
  const handleStartDrafting = () => setStep('drafting')

  // ── Back to selection
  const handleBack = () => {
    setStep('selection')
    setDocType(null)
    setScenario(null)
  }

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#f1f1f2', fontFamily: 'var(--bs-font-sans-serif)', overflow: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .paper-studio { background-color:#fff; box-shadow:0 10px 40px rgba(0,0,0,0.06),0 0 1px rgba(0,0,0,0.1); width:100%; max-width:850px; margin:40px auto; min-height:1056px; position:relative; padding:80px 80px 80px 120px; border-radius:4px; }
        .legal-margin { position:absolute; left:80px; top:0; bottom:0; width:1px; border-left:1px solid rgba(220,53,69,0.3); }
        .editor-textarea { width:100%; border:none; outline:none; resize:none; font-family:'Times New Roman',serif; font-size:1.1rem; line-height:2.2; color:#2c3e50; background:transparent; overflow:hidden; }
        .studio-glass { backdrop-filter:blur(10px); background:rgba(255,255,255,0.85); }
        .custom-scrollbar::-webkit-scrollbar { width:6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background:rgba(0,0,0,0.1); border-radius:10px; }
        .brief-item { transition:all 0.2s ease; border:1px solid transparent; }
        .brief-item:hover { background:rgba(var(--bs-primary-rgb),0.05); border-color:rgba(var(--bs-primary-rgb),0.1); }
        .doc-card { transition:all 0.4s cubic-bezier(0.4,0,0.2,1); cursor:pointer; border:none; overflow:hidden; }
        .doc-card:hover { transform:translateY(-10px); box-shadow:0 20px 40px rgba(0,0,0,0.12) !important; }
        .doc-card .card-img-top { height:160px; object-fit:contain; padding:20px; transition:transform 0.4s ease; }
        .doc-card:hover .card-img-top { transform:scale(1.1); }
        .illustration-bg { height:160px; display:flex; align-items:center; justify-content:center; position:relative; }
        .illustration-bg::after { content:''; position:absolute; bottom:0; left:0; right:0; height:40%; background:linear-gradient(to top,#fff,transparent); }
        @keyframes pulse { 0%{transform:scale(1);box-shadow:0 0 0 0 rgba(115,103,240,0.4);} 70%{transform:scale(1.05);box-shadow:0 0 0 10px rgba(115,103,240,0);} 100%{transform:scale(1);box-shadow:0 0 0 0 rgba(115,103,240,0);} }
      `}} />

      {/* ══════════ STEP 1: SELECTION ══════════ */}
      {step === 'selection' && (
        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center p-4 overflow-auto custom-scrollbar">
          <div className="text-center mb-5" style={{ maxWidth: 700 }}>
            <span className="badge bg-label-primary mb-3 px-3 py-2 rounded-pill text-uppercase fw-bold" style={{ letterSpacing: 1.5 }}>Legal Practice Lab</span>
            <h4 className="mb-2 text-heading fw-semibold">Case Drafting Studio</h4>
            <p className="text-body-secondary fs-5 mb-0">
              Select a document type. A unique case scenario will be assigned — read the briefing, then draft.
            </p>
          </div>

          <div className="row g-4 w-100" style={{ maxWidth: 1100 }}>
            {(Object.keys(docTemplates) as DocType[]).map(key => {
              const t = docTemplates[key]
              return (
                <div key={key} className="col-md-6 col-lg-3">
                  <div className="card h-100 doc-card shadow-sm" onClick={() => handleSelect(key)}>
                    <div className={`illustration-bg bg-label-${t.color} bg-opacity-10`}>
                      <img src={t.image} alt={t.title} className="card-img-top" />
                    </div>
                    <div className="card-body p-4 text-center d-flex flex-column">
                      <div className="mb-2">
                        <span className={`badge bg-label-${t.color}`} style={{ fontSize: 10 }}>
                          {t.scenarios.length} scenarios
                        </span>
                      </div>
                      <h5 className="fw-bold mb-2 text-heading">{t.title}</h5>
                      <p className="extra-small text-body-secondary mb-4 flex-grow-1 lh-base">{t.description}</p>
                      <button className={`btn btn-label-${t.color} w-100 rounded-pill fw-bold border-0`}>
                        <i className="ti tabler-eye me-2"></i>View Briefing
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-5 pt-4 text-center">
            <Link href="/student/practice-lab" className="text-body-secondary text-decoration-none d-flex align-items-center justify-content-center gap-2 fw-medium">
              <i className="ti tabler-arrow-left"></i> Back to All Labs
            </Link>
          </div>
        </div>
      )}

      {/* ══════════ STEP 2: BRIEFING ══════════ */}
      {step === 'briefing' && template && scenario && (
        <div className="flex-grow-1 overflow-auto custom-scrollbar">
          <div className="container-xxl py-5">

            {/* compact hero */}
            <div className="card p-0 mb-4">
              <div className="card-body d-flex align-items-center p-0 overflow-hidden" style={{ minHeight: 84 }}>
                <div className="flex-grow-1 px-5 py-4">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className={`badge bg-label-${template.color}`} style={{ fontSize: 10 }}>
                      <i className={`ti ${template.icon} me-1`}></i>{template.title}
                    </span>
                    <span className="badge bg-label-secondary" style={{ fontSize: 10 }}>{template.id}</span>
                    <span className="badge bg-label-warning" style={{ fontSize: 10 }}>+200 XP</span>
                  </div>
                  <h5 className="mb-0 text-heading fw-semibold">
                    Case Briefing &nbsp;—&nbsp;
                    <span className={`text-${template.color}`}>Review Before You Draft</span>
                  </h5>
                  <p className="mb-0 text-body-secondary small mt-1">
                    Read the scenario facts carefully, note your strategy, then begin drafting.
                  </p>
                </div>
                <div className="d-none d-md-flex align-items-end flex-shrink-0 pe-4" style={{ minWidth: 90 }}>
                  <img src={template.image} alt="" height={90} style={{ objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            <div className="row g-4">

              {/* ── Left: Scenario Card ── */}
              <div className="col-lg-4">
                <div className="card h-100">
                  <div className="card-header border-0 pb-0">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <i className={`ti tabler-file-description text-${template.color} fs-5`}></i>
                      Assigned Scenario
                    </h6>
                  </div>
                  <div className="card-body">

                    {/* case reference banner */}
                    <div className={`rounded-2 p-3 mb-4 bg-label-${template.color}`}>
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar flex-shrink-0">
                          <span className={`avatar-initial rounded bg-${template.color}`}>
                            <i className={`icon-base ti ${template.icon} icon-20px text-white`}></i>
                          </span>
                        </div>
                        <div>
                          <h6 className="mb-0 fw-bold text-heading" style={{ fontSize: 13 }}>{scenario.caseRef}</h6>
                          <small className="text-body-secondary" style={{ fontSize: 11 }}>
                            <i className="ti tabler-map-pin me-1"></i>{scenario.location}
                          </small>
                        </div>
                      </div>
                    </div>

                    {/* parties */}
                    <div className="d-flex flex-column gap-2 mb-4">
                      {[
                        { label: template.partyLabels.a, value: scenario.complainant, icon: 'tabler-user',       color: 'primary'   },
                        { label: template.partyLabels.b,  value: scenario.accused,    icon: 'tabler-user-off',   color: 'danger'    },
                        { label: 'Date / Period',          value: scenario.incidentDate, icon: 'tabler-calendar', color: 'secondary' },
                      ].map((row, i) => (
                        <div key={i} className="d-flex align-items-start gap-3 p-2 rounded-2 border">
                          <div className="avatar avatar-sm flex-shrink-0">
                            <span className={`avatar-initial rounded bg-label-${row.color}`}>
                              <i className={`icon-base ti ${row.icon} icon-14px`} style={{ color: `var(--bs-${row.color})` }}></i>
                            </span>
                          </div>
                          <div>
                            <p className="mb-0 small fw-semibold text-heading" style={{ fontSize: 11 }}>{row.label}</p>
                            <small className="text-body-secondary" style={{ fontSize: 11 }}>{row.value}</small>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* facts */}
                    <div className="rounded-2 p-3 border-start border-4 border-warning bg-label-warning">
                      <small className="fw-bold text-uppercase text-warning d-block mb-1" style={{ fontSize: 10, letterSpacing: '.05em' }}>
                        Case Facts
                      </small>
                      <p className="mb-0 small lh-base">{scenario.facts}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right: Strategy + CTA ── */}
              <div className="col-lg-8">
                <div className="card h-100">
                  <div className="card-header border-0 pb-0">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <i className="ti tabler-clipboard-check text-primary fs-5"></i>
                      Drafting Strategy
                    </h6>
                  </div>
                  <div className="card-body d-flex flex-column">

                    {/* objectives */}
                    <div className="mb-4">
                      <p className="text-uppercase fw-semibold text-body-secondary mb-2" style={{ fontSize: 10, letterSpacing: '.06em' }}>
                        Objectives — What your draft must address
                      </p>
                      <div className="d-flex flex-column gap-2">
                        {template.issues.map((issue, i) => (
                          <div key={i} className="d-flex align-items-center gap-3 p-2 rounded-2 border">
                            <div className="avatar avatar-xs flex-shrink-0">
                              <span className="avatar-initial rounded-circle bg-label-primary">
                                <span className="fw-semibold" style={{ fontSize: 10, color: 'var(--bs-primary)' }}>{i + 1}</span>
                              </span>
                            </div>
                            <small className="text-heading" style={{ fontSize: 12 }}>{issue}</small>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* legal framework */}
                    <div className="mb-4">
                      <p className="text-uppercase fw-semibold text-body-secondary mb-2" style={{ fontSize: 10, letterSpacing: '.06em' }}>
                        Legal Framework
                      </p>
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {template.lawSections.map(s => (
                          <span key={s} className="badge bg-label-primary" style={{ fontSize: 11 }}>{s}</span>
                        ))}
                      </div>
                      {template.precedents.map((p, i) => (
                        <div key={i} className={`p-2 rounded-2 border mb-2 ${i === 0 ? 'bg-label-info' : 'bg-label-secondary'}`}>
                          <p className="mb-0 small fw-semibold text-heading" style={{ fontSize: 11 }}>{p.name} ({p.year})</p>
                          <small className="text-body-secondary fst-italic" style={{ fontSize: 10 }}>{p.holding}</small>
                        </div>
                      ))}
                    </div>

                    {/* scratchpad */}
                    <div className="flex-grow-1 mb-4">
                      <p className="text-uppercase fw-semibold text-body-secondary mb-2" style={{ fontSize: 10, letterSpacing: '.06em' }}>
                        <i className="icon-base ti tabler-bulb icon-12px me-1 text-warning"></i>
                        Strategy Scratchpad
                      </p>
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Jot down your drafting plan, key arguments, or sections to cover before you start…"
                        value={scratchpad}
                        onChange={e => setScratchpad(e.target.value)}
                        style={{ fontSize: 13, resize: 'none' }}
                      />
                    </div>

                    {/* CTA row */}
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      <button
                        className={`btn btn-${template.color} d-flex align-items-center gap-2 px-5`}
                        onClick={handleStartDrafting}
                      >
                        <i className="icon-base ti tabler-pencil icon-16px"></i>
                        Start Drafting
                      </button>
                      <button
                        className="btn btn-label-secondary d-flex align-items-center gap-2"
                        onClick={handleBack}
                      >
                        <i className="icon-base ti tabler-arrow-left icon-14px"></i>
                        Change Document Type
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ STEP 3: DRAFTING ══════════ */}
      {step === 'drafting' && template && scenario && (
        <>
          <nav className="sticky-top studio-glass border-bottom shadow-xs d-flex align-items-center justify-content-between px-4" style={{ height: 64, zIndex: 100 }}>
            <div className="d-flex align-items-center gap-4">
              <button
                onClick={() => setStep('briefing')}
                className="btn btn-icon btn-text-secondary rounded-pill"
                title="Back to Briefing"
              >
                <i className="ti tabler-chevron-left fs-4"></i>
              </button>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center gap-2">
                  <span className={`badge bg-label-${template.color} px-2 py-1`}>
                    <i className={`ti ${template.icon} me-1`}></i>{template.title}
                  </span>
                  <h6 className="mb-0 fw-bold d-none d-sm-block">Studio Workspace</h6>
                </div>
                <small className="text-body-secondary d-flex align-items-center gap-1 extra-small">
                  {scenario.caseRef} <i className="ti tabler-chevron-right icon-xs"></i> {template.id}
                </small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <div className="d-none d-md-flex align-items-center gap-3 pe-3 border-end">
                <div className="text-end">
                  <p className="mb-0 small fw-semibold">Saved</p>
                  <p className="mb-0 extra-small text-body-secondary">Just now</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-label-secondary btn-sm px-3">
                  <i className="ti tabler-download me-1"></i>Export
                </button>
                <button className="btn btn-primary btn-sm px-4 shadow-sm">
                  <i className="ti tabler-send me-1"></i>Submit Case
                </button>
              </div>
            </div>
          </nav>

          <div className="d-flex flex-grow-1 overflow-hidden position-relative">

            {/* ── Left sidebar: Case Brief ── */}
            <aside className="studio-glass border-end d-flex flex-column flex-shrink-0 custom-scrollbar overflow-auto" style={{ width: briefOpen ? 320 : 0, opacity: briefOpen ? 1 : 0, transition: 'width .2s, opacity .2s' }}>
              <div className="p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0 fw-bold text-uppercase small" style={{ letterSpacing: 0.5 }}>
                    <i className="ti tabler-clipboard-text text-primary me-2"></i>Case Brief
                  </h6>
                  <span className="badge bg-label-warning extra-small">Training</span>
                </div>

                {/* parties mini-card */}
                <div className="card shadow-none border-0 bg-label-secondary mb-3">
                  <div className="card-body p-3">
                    <p className="extra-small fw-bold text-uppercase mb-2">Parties</p>
                    <p className="small text-heading mb-1"><span className="text-body-secondary">{template.partyLabels.a}:</span> {scenario.complainant}</p>
                    <p className="small text-heading mb-0"><span className="text-body-secondary">{template.partyLabels.b}:</span> {scenario.accused}</p>
                  </div>
                </div>

                <div className="card shadow-none border-0 bg-label-secondary mb-4">
                  <div className="card-body p-3">
                    <p className="extra-small fw-bold text-uppercase mb-2">Scenario Facts</p>
                    <p className="small text-heading lh-base mb-0">{scenario.facts}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="extra-small fw-bold text-uppercase mb-3 opacity-75">Objectives</p>
                  {template.issues.map((issue, i) => (
                    <div
                      key={i}
                      className={`brief-item rounded p-2 mb-1 d-flex gap-2 align-items-start cursor-pointer ${checkedIssues[i] ? 'opacity-50' : ''}`}
                      onClick={() => { const n = [...checkedIssues]; n[i] = !n[i]; setCheckedIssues(n) }}
                    >
                      <div className={`mt-1 flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle border ${checkedIssues[i] ? 'bg-primary border-primary' : 'border-secondary'}`} style={{ width: 14, height: 14 }}>
                        {checkedIssues[i] && <i className="ti tabler-check text-white" style={{ fontSize: 10 }}></i>}
                      </div>
                      <span className={`extra-small lh-base ${checkedIssues[i] ? 'text-decoration-line-through' : 'text-heading'}`}>{issue}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-white rounded border shadow-xs">
                  <p className="extra-small fw-bold text-uppercase mb-2 opacity-75">Legal Framework</p>
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {template.lawSections.map(s => <span key={s} className="badge bg-label-primary extra-small">{s}</span>)}
                  </div>
                  {template.precedents.map((p, i) => (
                    <div key={i} className="mb-2 border-top pt-2">
                      <p className="extra-small fw-bold mb-0 text-primary">{p.name}</p>
                      <p className="extra-small text-body-secondary fst-italic">{p.holding.substring(0, 60)}…</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div
              className="d-flex align-items-center justify-content-center bg-white border-end shadow-sm"
              style={{ width: 24, zIndex: 10, cursor: 'pointer' }}
              onClick={() => setBriefOpen(b => !b)}
            >
              <i className={`ti ${briefOpen ? 'tabler-chevron-left' : 'tabler-chevron-right'} fs-6 text-body-secondary`}></i>
            </div>

            {/* ── Main: paper editor ── */}
            <main className="flex-grow-1 overflow-auto custom-scrollbar d-flex flex-column align-items-center pb-5" style={{ background: '#f8f9fa' }}>
              <div className="sticky-top mt-4 mb-2 z-3">
                <div className="card shadow-sm border rounded-pill px-3 py-1 d-flex flex-row gap-1 align-items-center studio-glass border-opacity-50">
                  <button className="btn btn-icon btn-sm btn-text-secondary rounded-circle"><i className="ti tabler-bold"></i></button>
                  <button className="btn btn-icon btn-sm btn-text-secondary rounded-circle"><i className="ti tabler-italic"></i></button>
                  <div className="vr mx-1 opacity-25"></div>
                  <button className="btn btn-sm btn-label-primary rounded-pill px-3 extra-small fw-bold">Legal Format</button>
                  <button className="btn btn-sm btn-text-primary rounded-pill px-3 extra-small fw-bold"><i className="ti tabler-plus me-1"></i>Section</button>
                </div>
              </div>

              <div className="paper-studio">
                <div className="legal-margin"></div>
                <textarea
                  className="editor-textarea"
                  placeholder="Start drafting..."
                  style={{ minHeight: '100%' }}
                  defaultValue={scenario.initialDraft}
                />
              </div>

              <button
                className="btn btn-primary rounded-pill shadow-lg d-flex align-items-center gap-2 position-fixed"
                style={{ bottom: '2rem', right: '2rem', padding: '0.8rem 1.5rem', zIndex: 1040, animation: 'pulse 2s infinite' }}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasAnalysis"
              >
                <i className="ti tabler-sparkles fs-4"></i>
                <span className="fw-bold">AI Analysis</span>
              </button>
            </main>

            {/* ── AI offcanvas ── */}
            <div className="offcanvas offcanvas-end studio-glass shadow-lg" tabIndex={-1} id="offcanvasAnalysis" style={{ width: 400, borderLeft: '1px solid rgba(115,103,240,0.1)' }}>
              <div className="offcanvas-header border-bottom py-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="avatar avatar-sm"><span className="avatar-initial rounded-circle bg-primary"><i className="ti tabler-robot text-white"></i></span></div>
                  <h5 className="offcanvas-title fw-bold text-uppercase small mb-0">AI Assistant</h5>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
              </div>
              <div className="offcanvas-body p-0 custom-scrollbar d-flex flex-column">
                <div className="flex-grow-1 overflow-auto p-4">
                  <div className="chat-history d-flex flex-column gap-4">
                    <div className="bg-label-primary p-3 rounded-3" style={{ borderBottomLeftRadius: 0 }}>
                      <p className="extra-small fw-bold text-primary mb-1">LexAI Tutor</p>
                      <p className="small mb-0 lh-base">
                        I've loaded the <b>{template.title}</b> scenario. The case involves <b>{scenario.complainant}</b>. Use the objectives in the sidebar to guide your draft.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-top studio-glass mt-auto">
                  <div className="input-group input-group-merge shadow-xs border rounded-pill overflow-hidden bg-white">
                    <span className="input-group-text border-0 ps-3 bg-transparent"><i className="ti tabler-message-2 text-body-secondary"></i></span>
                    <input className="form-control border-0 shadow-none extra-small py-2" placeholder="Ask LexAI..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
