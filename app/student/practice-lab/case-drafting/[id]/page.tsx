'use client';
import { useState } from 'react';
import StudentLayout from '@/components/layouts/StudentLayout';

const issues = ['Establish jurisdiction of the Sessions Court', 'State the specific offence — Section 302 IPC', 'Lay out the prima facie evidence against the accused', 'Include the appropriate prayer for trial'];
const lawSections = ['Sec 299 IPC', 'Sec 300 IPC', 'Sec 302 IPC', 'Sec 304 IPC', 'Sec 154 CrPC'];
const precedents = [
  { name: 'State of UP v. Ram Sagar Yadav', court: 'Supreme Court', year: '1985', holding: 'Ingredients of Section 302 — intention to cause death established by surrounding circumstances' },
  { name: 'Bachan Singh v. State of Punjab', court: 'Supreme Court', year: '1980', holding: 'Death penalty under Section 302 — rarest of rare doctrine established' },
];

const iracStatus = [
  { label: 'Issue', status: 'green', note: 'Well identified' },
  { label: 'Rule', status: 'green', note: 'Sections cited' },
  { label: 'Application', status: 'amber', note: 'Needs more facts' },
  { label: 'Conclusion', status: 'red', note: 'Prayer missing' },
];

export default function CaseDraftingPage() {
  const [briefOpen, setBriefOpen] = useState(true);
  const [checkedIssues, setCheckedIssues] = useState([true, true, false, false]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--page-bg)', display: 'flex', flexDirection: 'column' }}>
      {/* Top bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 14, position: 'sticky', top: 0, zIndex: 50 }}>
        <a href="/student/practice-lab" style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>← Back</a>
        <div style={{ fontSize: 16, fontWeight: 700 }}>⚖️ Case Drafting Studio</div>
        <span className="badge badge-warning">Intermediate</span>
        <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 4 }}>Bail Application — Sessions Court</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>💾 Saved 2 min ago</span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>847 words · ~3 pages</span>
          <button className="btn-primary" style={{ fontSize: 13, background: 'var(--success)' }}>📤 Submit for Review</button>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Case Brief Panel */}
        <div style={{ width: briefOpen ? 280 : 40, background: '#fff', borderRight: '1px solid var(--border)', transition: 'width 0.2s', overflow: 'hidden', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', borderBottom: '1px solid var(--border)' }}>
            {briefOpen && <span style={{ fontWeight: 700, fontSize: 13 }}>📋 Case Brief</span>}
            <button onClick={() => setBriefOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: 'var(--text-muted)' }}>{briefOpen ? '◀' : '▶'}</button>
          </div>
          {briefOpen && (
            <div style={{ padding: 14, overflowY: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Facts</div>
              <p style={{ fontSize: 12.5, color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: 14 }}>
                Accused Ram Kumar allegedly caused the death of Shyam Lal on January 15, 2025 at approximately 11 PM in New Delhi. Witnesses place the accused at the scene. A weapon matching injuries was recovered from the accused. The accused has a prior criminal record.
              </p>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Issues to Address</div>
              {issues.map((issue, i) => (
                <label key={i} style={{ display: 'flex', gap: 8, marginBottom: 8, cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" checked={checkedIssues[i]} onChange={e => { const n = [...checkedIssues]; n[i] = e.target.checked; setCheckedIssues(n); }} style={{ accentColor: 'var(--primary)', marginTop: 2 }} />
                  <span style={{ fontSize: 12, color: checkedIssues[i] ? 'var(--text-primary)' : 'var(--text-muted)', textDecoration: checkedIssues[i] ? 'line-through' : 'none', lineHeight: 1.4 }}>{issue}</span>
                </label>
              ))}
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, marginTop: 14, textTransform: 'uppercase', letterSpacing: 0.5 }}>Relevant Sections</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
                {lawSections.map(s => (
                  <span key={s} style={{ background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 600, cursor: 'pointer' }}>{s}</span>
                ))}
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Precedents</div>
              {precedents.map((p, i) => (
                <div key={i} style={{ padding: 10, background: '#fafafa', borderRadius: 8, marginBottom: 8, border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{p.court} · {p.year}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-primary)', marginTop: 4, lineHeight: 1.4, fontStyle: 'italic' }}>{p.holding}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Editor */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 24, overflowY: 'auto' }}>
          <div className="card" style={{ padding: 0, overflow: 'hidden', flex: 1 }}>
            {/* Toolbar */}
            <div style={{ display: 'flex', gap: 4, padding: '10px 14px', borderBottom: '1px solid var(--border)', background: '#fafafa', flexWrap: 'wrap' }}>
              {[['B','font-weight'], ['I','font-style'], ['U','text-decoration'], '|', ['≡','list'], ['⊞','grid'], '|', ['📌','cite'], ['⊕','section']].map((btn, i) => (
                btn === '|' ? <div key={i} style={{ width: 1, background: 'var(--border)', margin: '0 4px' }} /> :
                <button key={i} style={{ padding: '4px 10px', border: '1px solid var(--border)', borderRadius: 4, background: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>{(btn as string[])[0]}</button>
              ))}
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                <button className="btn-outline" style={{ fontSize: 11, padding: '4px 10px' }}>⚖️ Legal Formatting</button>
                <button className="btn-outline" style={{ fontSize: 11, padding: '4px 10px' }}>＋ Insert Section</button>
              </div>
            </div>
            <textarea className="form-input" style={{ flex: 1, border: 'none', borderRadius: 0, fontFamily: '"Times New Roman", serif', fontSize: 14, lineHeight: 2, padding: 28, resize: 'none', minHeight: 500 }} defaultValue={`IN THE HON'BLE SESSIONS COURT AT NEW DELHI
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
   [TO BE COMPLETED]`} />
          </div>
        </div>

        {/* AI Assistant Panel */}
        <div style={{ width: 290, background: '#fff', borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
          <div style={{ padding: '12px 14px', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: 13 }}>🤖 AI Legal Assistant</div>

          {/* IRAC Checker */}
          <div style={{ padding: 14, borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 10 }}>LIVE IRAC CHECKER</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {iracStatus.map(s => (
                <div key={s.label} style={{ padding: '8px 10px', borderRadius: 8, background: s.status === 'green' ? '#e8faf0' : s.status === 'amber' ? '#fff5e6' : '#fde8e8', border: `1px solid ${s.status === 'green' ? 'var(--success)' : s.status === 'amber' ? 'var(--warning)' : 'var(--error)'}` }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: s.status === 'green' ? 'var(--success)' : s.status === 'amber' ? 'var(--warning)' : 'var(--error)', marginBottom: 2 }}>
                    {s.status === 'green' ? '✓' : s.status === 'amber' ? '⚠' : '✗'} {s.label}
                  </div>
                  <div style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat */}
          <div style={{ flex: 1, overflowY: 'auto', padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ padding: '10px 12px', background: 'var(--primary-light)', borderRadius: 10, borderBottomLeftRadius: 2 }}>
              <div style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 700, marginBottom: 4 }}>AI Legal Assistant</div>
              <div style={{ fontSize: 12.5, lineHeight: 1.6 }}>Your draft is looking good! I notice Section 5 (Prayer) is incomplete — this is critical for any charge sheet. A prayer clause should request the court to take cognizance and commit the case to trial.</div>
              <button style={{ marginTop: 8, background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 6, padding: '5px 10px', fontSize: 11, cursor: 'pointer', fontWeight: 600 }}>⬇ Insert into Draft</button>
            </div>
            <div style={{ padding: '10px 12px', background: '#f3f3f5', borderRadius: 10, borderBottomRightRadius: 2, alignSelf: 'flex-end', maxWidth: '85%' }}>
              <div style={{ fontSize: 12.5 }}>Can you help me draft the prayer clause?</div>
            </div>
          </div>

          {/* Quick actions */}
          <div style={{ padding: '10px 14px', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
              {['Suggest grounds', 'Check structure', 'Find case laws', 'Draft prayer'].map(label => (
                <button key={label} style={{ background: 'var(--primary-light)', border: '1px solid var(--primary)', color: 'var(--primary)', borderRadius: 20, padding: '4px 10px', fontSize: 11, cursor: 'pointer', fontWeight: 500 }}>{label}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <input className="form-input" style={{ flex: 1, fontSize: 12, padding: '7px 10px' }} placeholder="Ask the AI..." />
              <button className="btn-primary" style={{ padding: '7px 12px', fontSize: 13 }}>→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
