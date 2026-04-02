/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import TutorLayout from '@/components/layouts/TutorLayout';
import Link from 'next/link';

/* ── Seed data for "edit" mode (sc-001: Priya Sharma)
   In production, fetch by params.scenarioId ── */
const SEED = {
  moduleId: 'client-interview',
  moduleTitle: 'Client Interview Room',
  clientName: 'Priya Sharma',
  initials: 'PS',
  age: '28',
  occupation: 'Software Engineer',
  caseId: 'CASE-882-P',
  summary: "Has messaged saying she needs urgent legal advice and doesn't know where to start.",
  openingMessage: "Hi, I really don't know where to begin. My husband and I have been having a lot of problems and things have gotten really bad recently. I just need to know what my options are.",
  keyAreas: 'Marriage history, Safety concerns, Children & custody, Financial control, Legal complaints, Support system',
  quickQ1: 'Ask about recent incidents',
  quickQ2: 'Explore financial situation',
  quickQ3: 'Ask about children',
  quickQ4: 'Inquire about family support',
  hiddenFacts: [
    { text: 'Married for 4 years',                                    category: 'Marriage', discovered: true  },
    { text: 'Husband has been physically aggressive on two occasions', category: 'Safety',   discovered: true  },
    { text: 'Client has one child aged 2',                             category: 'Custody',  discovered: true  },
    { text: 'Husband controls all bank accounts',                      category: 'Finance',  discovered: true  },
    { text: "Husband's family pressuring for more dowry",              category: 'Legal',    discovered: false },
    { text: 'Client wants separation but fears for her safety',        category: 'Safety',   discovered: false },
    { text: 'No prior police complaints filed',                        category: 'Legal',    discovered: false },
    { text: 'Husband is a senior government official',                 category: 'Context',  discovered: false },
  ],
  provisions: [
    { name: 'DV Act, 2005',     status: 'Critical',   color: 'danger',    desc: 'Section 3 definitions of domestic violence, including economic abuse.' },
    { name: 'Section 498A IPC', status: 'Applicable', color: 'warning',   desc: 'Cruelty by husband or relatives, including dowry-related harassment.' },
    { name: 'Section 125 CrPC', status: 'Relevant',   color: 'info',      desc: 'Child aged 2 creates a primary maintenance nexus for this client.' },
    { name: 'Section 406 IPC',  status: 'Consider',   color: 'secondary', desc: 'Criminal breach of trust if jointly-held assets have been misappropriated.' },
  ],
  responseEarly:    "We've been together for about 4 years now. It started off okay, but lately things have changed a lot...",
  responseMid:      "He gets so angry sometimes. Last week he... he hit me. And our daughter was right there. I don't want her growing up seeing that.",
  responseLate:     "I just want to be safe. Do you think you can help me leave? I have nowhere to go and no money of my own.",
  responseFallback: "I don't know if that's relevant...",
};

const FACT_CATEGORIES = ['Marriage', 'Safety', 'Custody', 'Finance', 'Legal', 'Context', 'Procedure', 'Evidence', 'Employment', 'Tenancy'];
const PROVISION_COLORS = ['danger', 'warning', 'info', 'primary', 'success', 'secondary'];
const PROVISION_STATUSES = ['Critical', 'Applicable', 'Relevant', 'Consider'];

type Fact = { text: string; category: string; discovered: boolean };
type Provision = { name: string; status: string; color: string; desc: string };

export default function TutorScenarioEditorPage() {
  /* ── form state ── */
  const [clientName,    setClientName]    = useState(SEED.clientName);
  const [initials,      setInitials]      = useState(SEED.initials);
  const [age,           setAge]           = useState(SEED.age);
  const [occupation,    setOccupation]    = useState(SEED.occupation);
  const [caseId,        setCaseId]        = useState(SEED.caseId);
  const [summary,       setSummary]       = useState(SEED.summary);
  const [openingMsg,    setOpeningMsg]    = useState(SEED.openingMessage);
  const [keyAreas,      setKeyAreas]      = useState(SEED.keyAreas);
  const [quickQ1,       setQuickQ1]       = useState(SEED.quickQ1);
  const [quickQ2,       setQuickQ2]       = useState(SEED.quickQ2);
  const [quickQ3,       setQuickQ3]       = useState(SEED.quickQ3);
  const [quickQ4,       setQuickQ4]       = useState(SEED.quickQ4);
  const [facts,         setFacts]         = useState<Fact[]>(SEED.hiddenFacts);
  const [provisions,    setProvisions]    = useState<Provision[]>(SEED.provisions);
  const [responseEarly, setResponseEarly] = useState(SEED.responseEarly);
  const [responseMid,   setResponseMid]   = useState(SEED.responseMid);
  const [responseLate,  setResponseLate]  = useState(SEED.responseLate);
  const [responseFall,  setResponseFall]  = useState(SEED.responseFallback);
  const [saved,         setSaved]         = useState(false);
  const [openSection,   setOpenSection]   = useState<string>('client');

  /* ── helpers ── */
  const addFact = () =>
    setFacts(prev => [...prev, { text: '', category: 'Legal', discovered: false }]);

  const updateFact = (i: number, field: keyof Fact, val: string | boolean) =>
    setFacts(prev => prev.map((f, idx) => idx === i ? { ...f, [field]: val } : f));

  const removeFact = (i: number) =>
    setFacts(prev => prev.filter((_, idx) => idx !== i));

  const addProvision = () =>
    setProvisions(prev => [...prev, { name: '', status: 'Relevant', color: 'info', desc: '' }]);

  const updateProvision = (i: number, field: keyof Provision, val: string) =>
    setProvisions(prev => prev.map((p, idx) => idx === i ? { ...p, [field]: val } : p));

  const removeProvision = (i: number) =>
    setProvisions(prev => prev.filter((_, idx) => idx !== i));

  const handleSave = (publish: boolean) => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const toggle = (s: string) => setOpenSection(prev => prev === s ? '' : s);

  /* ── section header helper ── */
  const SectionHeader = ({ id, icon, label, color, badge }: { id: string; icon: string; label: string; color: string; badge?: string }) => (
    <button
      type="button"
      className="w-100 d-flex align-items-center justify-content-between p-4 border-0 bg-transparent text-start"
      onClick={() => toggle(id)}
    >
      <div className="d-flex align-items-center gap-3">
        <div className="avatar avatar-sm">
          <span className={`avatar-initial rounded bg-label-${color}`}>
            <i className={`icon-base ti ${icon} icon-16px`} style={{ color: `var(--bs-${color})` }}></i>
          </span>
        </div>
        <div>
          <h6 className="mb-0 fw-semibold text-heading">{label}</h6>
          {badge && <small className="text-body-secondary">{badge}</small>}
        </div>
      </div>
      <i className={`ti ${openSection === id ? 'tabler-chevron-up' : 'tabler-chevron-down'} text-body-secondary`}></i>
    </button>
  );

  return (
    <TutorLayout active="/tutor/practice-lab" title="Scenario Editor" breadcrumb="Home / Practice Lab / Scenario Editor">

      {/* ── Breadcrumb ── */}
      <div className="d-flex align-items-center gap-2 mb-4">
        <Link href="/tutor/practice-lab" className="text-body-secondary text-decoration-none d-flex align-items-center gap-1 small">
          <i className="ti tabler-arrow-left" style={{ fontSize: 14 }}></i>
          Practice Lab
        </Link>
        <i className="ti tabler-chevron-right text-body-secondary" style={{ fontSize: 12 }}></i>
        <span className="small fw-semibold text-heading">Edit Scenario — {clientName || 'New'}</span>
      </div>

      <div className="row g-6">

        {/* ── Left: form sections ── */}
        <div className="col-lg-8">

          {/* ── 1. Client Profile ── */}
          <div className="card mb-4">
            <SectionHeader id="client" icon="tabler-user-circle" label="Client Profile" color="success" badge="Name, age, occupation, opening message" />
            {openSection === 'client' && (
              <div className="card-body pt-0 border-top">
                <div className="row g-4 mt-1">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Client Name <span className="text-danger">*</span></label>
                    <input
                      className="form-control"
                      value={clientName}
                      onChange={e => setClientName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label small fw-semibold">Initials</label>
                    <input
                      className="form-control"
                      value={initials}
                      onChange={e => setInitials(e.target.value)}
                      placeholder="PS"
                      maxLength={3}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label small fw-semibold">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      value={age}
                      onChange={e => setAge(e.target.value)}
                      placeholder="28"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Occupation</label>
                    <input
                      className="form-control"
                      value={occupation}
                      onChange={e => setOccupation(e.target.value)}
                      placeholder="e.g. Software Engineer"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Case ID</label>
                    <input
                      className="form-control"
                      value={caseId}
                      onChange={e => setCaseId(e.target.value)}
                      placeholder="e.g. CASE-882-P"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Client Summary <span className="text-danger">*</span></label>
                    <textarea
                      className="form-control"
                      rows={2}
                      value={summary}
                      onChange={e => setSummary(e.target.value)}
                      placeholder="Brief one-line description shown to students before the interview begins…"
                      style={{ resize: 'none' }}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Opening Message <span className="text-danger">*</span></label>
                    <small className="text-body-secondary d-block mb-2" style={{ fontSize: 11 }}>
                      The client's first message that the student sees when the simulation starts.
                    </small>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={openingMsg}
                      onChange={e => setOpeningMsg(e.target.value)}
                      placeholder="Client's opening statement in first person…"
                      style={{ resize: 'none' }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── 2. Key Areas & Quick Questions ── */}
          <div className="card mb-4">
            <SectionHeader id="areas" icon="tabler-tags" label="Key Areas & Quick Questions" color="primary" badge="Shown in briefing and as hint chips during interview" />
            {openSection === 'areas' && (
              <div className="card-body pt-0 border-top">
                <div className="row g-4 mt-1">
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Key Areas to Explore</label>
                    <small className="text-body-secondary d-block mb-2" style={{ fontSize: 11 }}>
                      Comma-separated. Shown as tags in the briefing screen.
                    </small>
                    <input
                      className="form-control"
                      value={keyAreas}
                      onChange={e => setKeyAreas(e.target.value)}
                      placeholder="Marriage history, Safety concerns, Financial control…"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Quick Question Chips</label>
                    <small className="text-body-secondary d-block mb-2" style={{ fontSize: 11 }}>
                      Exactly 4 shortcut chips shown below the chat input. Students can click to prefill.
                    </small>
                    <div className="row g-3">
                      {[[quickQ1, setQuickQ1], [quickQ2, setQuickQ2], [quickQ3, setQuickQ3], [quickQ4, setQuickQ4]].map(([val, setter], i) => (
                        <div key={i} className="col-md-6">
                          <div className="input-group">
                            <span className="input-group-text small text-body-secondary" style={{ minWidth: 28 }}>{i + 1}</span>
                            <input
                              className="form-control"
                              value={val as string}
                              onChange={e => (setter as React.Dispatch<React.SetStateAction<string>>)(e.target.value)}
                              placeholder={`Quick question ${i + 1}…`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── 3. Hidden Facts ── */}
          <div className="card mb-4">
            <SectionHeader id="facts" icon="tabler-lock" label="Hidden Facts" color="warning" badge={`${facts.length} facts configured`} />
            {openSection === 'facts' && (
              <div className="card-body pt-0 border-top">
                <small className="text-body-secondary d-block mt-3 mb-3" style={{ fontSize: 11 }}>
                  Facts the student must discover through questioning. Toggle "Pre-Discovered" if the fact should be visible from the start.
                </small>

                <div className="d-flex flex-column gap-2">
                  {facts.map((f, i) => (
                    <div key={i} className="rounded-2 border p-3">
                      <div className="row g-3 align-items-center">
                        <div className="col">
                          <input
                            className="form-control form-control-sm"
                            value={f.text}
                            onChange={e => updateFact(i, 'text', e.target.value)}
                            placeholder="Fact description…"
                          />
                        </div>
                        <div className="col-auto">
                          <select
                            className="form-select form-select-sm"
                            value={f.category}
                            onChange={e => updateFact(i, 'category', e.target.value)}
                            style={{ minWidth: 110 }}
                          >
                            {FACT_CATEGORIES.map(c => <option key={c}>{c}</option>)}
                          </select>
                        </div>
                        <div className="col-auto d-flex align-items-center gap-2">
                          <div className="form-check form-switch mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              checked={f.discovered}
                              onChange={e => updateFact(i, 'discovered', e.target.checked)}
                              id={`disc-${i}`}
                            />
                            <label className="form-check-label small text-body-secondary" htmlFor={`disc-${i}`}>
                              Pre-discovered
                            </label>
                          </div>
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-text-danger rounded-pill"
                            onClick={() => removeFact(i)}
                          >
                            <i className="ti tabler-trash" style={{ fontSize: 14 }}></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-label-warning btn-sm mt-3 d-flex align-items-center gap-2"
                  onClick={addFact}
                >
                  <i className="ti tabler-plus"></i>Add Fact
                </button>
              </div>
            )}
          </div>

          {/* ── 4. Legal Provisions ── */}
          <div className="card mb-4">
            <SectionHeader id="provisions" icon="tabler-gavel" label="Legal Provisions" color="info" badge={`${provisions.length} provisions configured`} />
            {openSection === 'provisions' && (
              <div className="card-body pt-0 border-top">
                <small className="text-body-secondary d-block mt-3 mb-3" style={{ fontSize: 11 }}>
                  Shown in the right panel during consultation and in the Legal Nexus Analysis on the results screen.
                </small>

                <div className="d-flex flex-column gap-3">
                  {provisions.map((p, i) => (
                    <div key={i} className="rounded-2 border p-3">
                      <div className="row g-3">
                        <div className="col-md-4">
                          <label className="form-label small text-body-secondary mb-1">Provision Name</label>
                          <input
                            className="form-control form-control-sm"
                            value={p.name}
                            onChange={e => updateProvision(i, 'name', e.target.value)}
                            placeholder="e.g. Section 498A IPC"
                          />
                        </div>
                        <div className="col-md-3">
                          <label className="form-label small text-body-secondary mb-1">Status Label</label>
                          <select
                            className="form-select form-select-sm"
                            value={p.status}
                            onChange={e => updateProvision(i, 'status', e.target.value)}
                          >
                            {PROVISION_STATUSES.map(s => <option key={s}>{s}</option>)}
                          </select>
                        </div>
                        <div className="col-md-3">
                          <label className="form-label small text-body-secondary mb-1">Badge Colour</label>
                          <select
                            className="form-select form-select-sm"
                            value={p.color}
                            onChange={e => updateProvision(i, 'color', e.target.value)}
                          >
                            {PROVISION_COLORS.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div className="col-md-2 d-flex align-items-end">
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-text-danger rounded-pill"
                            onClick={() => removeProvision(i)}
                          >
                            <i className="ti tabler-trash" style={{ fontSize: 14 }}></i>
                          </button>
                        </div>
                        <div className="col-12">
                          <label className="form-label small text-body-secondary mb-1">Description</label>
                          <input
                            className="form-control form-control-sm"
                            value={p.desc}
                            onChange={e => updateProvision(i, 'desc', e.target.value)}
                            placeholder="One-line explanation of relevance to this case…"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="btn btn-label-info btn-sm mt-3 d-flex align-items-center gap-2"
                  onClick={addProvision}
                >
                  <i className="ti tabler-plus"></i>Add Provision
                </button>
              </div>
            )}
          </div>

          {/* ── 5. Scripted Responses ── */}
          <div className="card mb-4">
            <SectionHeader id="responses" icon="tabler-message-chatbot" label="Scripted Responses" color="danger" badge="Client replies at early / mid / late turns + fallback" />
            {openSection === 'responses' && (
              <div className="card-body pt-0 border-top">
                <div className="rounded-2 bg-label-secondary p-3 mb-4 mt-3">
                  <small className="text-body-secondary" style={{ fontSize: 11 }}>
                    <strong>How turns work:</strong> Each session has 18 turns. The client replies with the
                    "Early" response when turns remaining &gt; 12, "Mid" when &gt; 5, "Late" when ≤ 5,
                    and "Fallback" when the student's message doesn't match any pattern.
                  </small>
                </div>

                {[
                  { label: 'Early Response', sub: 'Turns remaining > 12  ·  Client is Guarded', val: responseEarly, set: setResponseEarly, color: 'secondary' },
                  { label: 'Mid Response',   sub: 'Turns remaining 5–12  ·  Client is Opening Up', val: responseMid,   set: setResponseMid,   color: 'info'      },
                  { label: 'Late Response',  sub: 'Turns remaining ≤ 5   ·  Client reveals critical facts', val: responseLate, set: setResponseLate, color: 'warning'  },
                  { label: 'Fallback',       sub: 'Used when none of the above phases match', val: responseFall, set: setResponseFall, color: 'danger'    },
                ].map(r => (
                  <div key={r.label} className="mb-4">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className={`badge bg-label-${r.color}`} style={{ fontSize: 10 }}>{r.label}</span>
                      <small className="text-body-secondary" style={{ fontSize: 11 }}>{r.sub}</small>
                    </div>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={r.val}
                      onChange={e => r.set(e.target.value)}
                      placeholder={`Client's response during ${r.label.toLowerCase()}…`}
                      style={{ fontSize: 13, resize: 'none' }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* ── Right: preview + actions ── */}
        <div className="col-lg-4">

          {/* Preview card */}
          <div className="card mb-4 position-sticky" style={{ top: 80 }}>
            <div className="card-header border-0 pb-0">
              <h6 className="mb-0 d-flex align-items-center gap-2">
                <i className="ti tabler-eye text-primary"></i>
                Scenario Preview
              </h6>
            </div>
            <div className="card-body">

              {/* Client avatar */}
              <div className="d-flex align-items-center gap-3 mb-4 p-3 rounded-2 bg-label-success">
                <div className="avatar avatar-lg flex-shrink-0">
                  <span className="avatar-initial rounded-circle bg-success text-white fw-bold" style={{ fontSize: 18 }}>
                    {initials || '??'}
                  </span>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold text-heading">{clientName || 'Client Name'}</h6>
                  <small className="text-body-secondary">{age || '—'} yrs · {occupation || 'Occupation'}</small>
                  <div className="mt-1">
                    <span className="badge bg-label-secondary" style={{ fontSize: 10 }}>{caseId || 'CASE-ID'}</span>
                  </div>
                </div>
              </div>

              {/* Opening message preview */}
              {openingMsg && (
                <div className="rounded-2 p-3 border-start border-4 border-warning bg-label-warning mb-4">
                  <small className="fw-bold text-uppercase text-warning d-block mb-1" style={{ fontSize: 10 }}>Opening Message</small>
                  <p className="mb-0 small fst-italic">"{openingMsg.slice(0, 120)}{openingMsg.length > 120 ? '…' : ''}"</p>
                </div>
              )}

              {/* Facts summary */}
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <small className="fw-semibold text-body-secondary text-uppercase" style={{ fontSize: 10 }}>Hidden Facts</small>
                  <small className="text-body-secondary">{facts.length} total · {facts.filter(f => f.discovered).length} pre-discovered</small>
                </div>
                <div className="d-flex flex-wrap gap-1">
                  {facts.map((f, i) => (
                    <span
                      key={i}
                      className={`badge bg-label-${f.discovered ? 'success' : 'secondary'}`}
                      style={{ fontSize: 9 }}
                    >
                      {f.category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Provisions summary */}
              <div className="mb-4">
                <small className="fw-semibold text-body-secondary text-uppercase d-block mb-2" style={{ fontSize: 10 }}>Legal Provisions</small>
                <div className="d-flex flex-wrap gap-1">
                  {provisions.map((p, i) => (
                    <span key={i} className={`badge bg-label-${p.color}`} style={{ fontSize: 9 }}>
                      {p.name || 'Unnamed'}
                    </span>
                  ))}
                </div>
              </div>

              {/* Save feedback */}
              {saved && (
                <div className="alert alert-success py-2 px-3 d-flex align-items-center gap-2 mb-3" style={{ fontSize: 12 }}>
                  <i className="ti tabler-check"></i>Saved successfully.
                </div>
              )}

              {/* Action buttons */}
              <div className="d-flex flex-column gap-2">
                <button
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => handleSave(true)}
                >
                  <i className="ti tabler-world-upload"></i>
                  Publish Scenario
                </button>
                <button
                  className="btn btn-label-secondary w-100 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => handleSave(false)}
                >
                  <i className="ti tabler-device-floppy"></i>
                  Save as Draft
                </button>
                <Link
                  href="/tutor/practice-lab"
                  className="btn btn-text-secondary w-100 d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="ti tabler-arrow-left"></i>
                  Cancel
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </TutorLayout>
  );
}
