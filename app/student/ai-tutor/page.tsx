'use client';
import { useState } from 'react';
import StudentLayout from '@/components/layouts/StudentLayout';

const sessions = [
  { id: 1, title: 'Murder vs Culpable Homicide — Sec 299 & 300', time: '5 min ago' },
  { id: 2, title: 'Bail under Section 437 CrPC', time: '30 min ago' },
  { id: 3, title: 'General Exceptions — Private Defence', time: 'Yesterday' },
  { id: 4, title: 'Indian Evidence Act — Res Gestae', time: '3 days ago' },
  { id: 5, title: 'Constitutional Remedies — Article 32 vs 226', time: '5 days ago' },
];

const quickPrompts = [
  'Explain IRAC method',
  'Key IPC offences',
  'Fundamental Rights',
  'CLAT exam pattern',
  'Evidence Act sections',
  'Right of Private Defence',
];

interface IRACBlock {
  type: 'irac';
  issue: string;
  rule: string;
  application: { heading?: boolean; text: string }[];
  conclusion: string;
}

interface TextBlock {
  type: 'text';
  lines: { text: string; heading?: boolean; tip?: boolean }[];
}

interface TagsBlock {
  type: 'tags';
  items: string[];
}

type ChatBlock = IRACBlock | TextBlock | TagsBlock;

interface ChatMessage {
  role: 'user' | 'ai';
  text?: string;
  time: string;
  blocks?: ChatBlock[];
}

const messages: ChatMessage[] = [
  {
    role: 'user',
    text: 'Can you explain the difference between culpable homicide under Section 299 and murder under Section 300 IPC in simple terms?',
    time: '2:14 PM',
  },
  {
    role: 'ai',
    time: '2:14 PM',
    blocks: [
      {
        type: 'irac',
        issue: 'What distinguishes culpable homicide (Sec 299) from murder (Sec 300)?',
        rule: 'Section 299 IPC defines culpable homicide. Section 300 IPC elevates it to murder with a higher threshold of intent.',
        application: [
          { heading: true, text: 'Section 299 — Culpable Homicide:' },
          { text: '• Intention to cause death, OR' },
          { text: '• Intention to cause bodily injury likely to cause death, OR' },
          { text: '• Knowledge that the act is likely to cause death' },
          { heading: true, text: 'Section 300 — Murder (stricter):' },
          { text: '• Intention to cause death, OR' },
          { text: '• Intention to cause injury sufficient in ordinary course to cause death, OR' },
          { text: '• Knowledge that the act is imminently dangerous and will most probably cause death' },
        ],
        conclusion: 'Every murder is culpable homicide, but not every culpable homicide is murder. Murder has 5 exceptions that reduce it back to Section 304.',
      },
      {
        type: 'tags',
        items: ['Sec 299 IPC', 'Sec 300 IPC', 'Sec 304 IPC', 'Virsa Singh v Punjab (1958)', 'K.M. Nanavati v Maharashtra (1962)'],
      },
    ],
  },
  {
    role: 'user',
    text: 'What are the 5 exceptions to Section 300 IPC?',
    time: '2:16 PM',
  },
  {
    role: 'ai',
    time: '2:16 PM',
    blocks: [
      {
        type: 'text',
        lines: [
          { text: 'The 5 exceptions reduce murder to culpable homicide not amounting to murder (Sec 304):' },
          { heading: true, text: 'Exception 1 — Grave & Sudden Provocation' },
          { text: 'Offender acted under provocation that deprived self-control. Must not be self-induced.' },
          { heading: true, text: 'Exception 2 — Exceeded Right of Private Defence' },
          { text: 'Exceeded private defence in good faith, without premeditation.' },
          { heading: true, text: 'Exception 3 — Public Servant Exceeding Powers' },
          { text: 'Acting for public justice, exceeded necessary force in good faith.' },
          { heading: true, text: 'Exception 4 — Sudden Fight' },
          { text: 'Sudden quarrel, heat of passion, no premeditation, no undue advantage.' },
          { heading: true, text: 'Exception 5 — Consent' },
          { text: 'Victim above 18 years consented to risk of death or harm.' },
          { tip: true, text: 'Exam tip: All 5 exceptions are provisos — they reduce liability from murder to Sec 304 Part I or II.' },
        ],
      },
      {
        type: 'tags',
        items: ['Sec 300 IPC', 'Sec 304 IPC'],
      },
    ],
  },
];

export default function AITutorPage() {
  const [activeSession, setActiveSession] = useState(1);

  return (
    <StudentLayout activePath="/student/ai-tutor">
      <div className="app-chat card overflow-hidden">
        <div className="row g-0">

          {/* ── Sessions Sidebar ── */}
          <div
            className="col app-chat-contacts app-sidebar flex-grow-0 overflow-hidden border-end"
            id="app-chat-contacts"
          >
            {/* Sidebar header */}
            <div className="sidebar-header h-px-75 px-5 border-bottom d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-3 flex-grow-1">
                <div className="avatar">
                  <span className="avatar-initial rounded-circle bg-label-primary">
                    <i className="icon-base ti tabler-sparkles icon-18px text-primary"></i>
                  </span>
                </div>
                <span className="fw-semibold text-heading">LexAI</span>
              </div>
              <button className="btn btn-icon btn-sm btn-primary rounded-circle" title="New Chat">
                <i className="icon-base ti tabler-plus icon-16px"></i>
              </button>
            </div>

            {/* Sessions list */}
            <div className="sidebar-body">
              <ul className="list-unstyled chat-contact-list py-2 mb-0">
                <li className="chat-contact-list-item chat-contact-list-item-title mt-0">
                  <h5 className="text-primary mb-0">Recent Sessions</h5>
                </li>
                {sessions.map(s => (
                  <li
                    key={s.id}
                    className={`chat-contact-list-item mb-1${s.id === activeSession ? ' active' : ''}`}
                    onClick={() => setActiveSession(s.id)}
                  >
                    <a className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar">
                        <span className={`avatar-initial rounded-circle${s.id === activeSession ? '' : ' bg-label-secondary'}`}>
                          <i className="icon-base ti tabler-message-2 icon-16px"></i>
                        </span>
                      </div>
                      <div className="chat-contact-info flex-grow-1 ms-4">
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="chat-contact-name text-truncate m-0 fw-normal">{s.title}</h6>
                          <small className="chat-contact-list-item-time flex-shrink-0 ms-2">{s.time}</small>
                        </div>
                        <small className="chat-contact-status text-truncate">Criminal Law · IPC</small>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Quick Prompts */}
              <ul className="list-unstyled chat-contact-list mb-0 py-2">
                <li className="chat-contact-list-item chat-contact-list-item-title mt-0">
                  <h5 className="text-primary mb-0">Quick Prompts</h5>
                </li>
                {quickPrompts.map(p => (
                  <li key={p} className="chat-contact-list-item">
                    <a className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
                      <div className="avatar d-block flex-shrink-0">
                        <span className="avatar-initial rounded-circle bg-label-primary">
                          <i className="icon-base ti tabler-bolt icon-14px"></i>
                        </span>
                      </div>
                      <div className="chat-contact-info flex-grow-1 ms-4">
                        <h6 className="chat-contact-name text-truncate m-0 fw-normal">{p}</h6>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Token usage at bottom */}
              <div className="px-5 py-4 border-top mt-2">
                <div className="d-flex justify-content-between mb-1">
                  <small className="text-body-secondary">Daily tokens</small>
                  <small className="fw-semibold">34%</small>
                </div>
                <div className="progress mb-1" style={{ height: 5 }}>
                  <div className="progress-bar" role="progressbar" style={{ width: '34%' }}></div>
                </div>
                <small className="text-body-secondary">3,400 / 10,000 used</small>
              </div>
            </div>
          </div>

          {/* ── Main Chat Area ── */}
          <div className="col app-chat-history" id="app-chat-history">
            <div className="chat-history-wrapper">

              {/* Header */}
              <div className="chat-history-header border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex overflow-hidden align-items-center gap-3">
                    <div className="avatar">
                      <span className="avatar-initial rounded-circle bg-primary">
                        <i className="icon-base ti tabler-sparkles icon-16px text-white"></i>
                      </span>
                    </div>
                    <div>
                      <h6 className="m-0 fw-semibold">LexAI — Law Tutor</h6>
                      <small className="text-body-secondary">
                        <span className="badge bg-label-success me-2">Active</span>
                        Criminal Law · IPC Chapter XVI
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="btn btn-text-secondary btn-icon rounded-pill d-sm-inline-flex d-none">
                      <i className="icon-base ti tabler-refresh icon-22px"></i>
                    </span>
                    <span className="btn btn-text-secondary btn-icon rounded-pill d-sm-inline-flex d-none">
                      <i className="icon-base ti tabler-download icon-22px"></i>
                    </span>
                    <div className="dropdown">
                      <button
                        className="btn btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow"
                        data-bs-toggle="dropdown"
                      >
                        <i className="icon-base ti tabler-dots-vertical icon-22px"></i>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">Clear Chat</a>
                        <a className="dropdown-item" href="#">Export as PDF</a>
                        <a className="dropdown-item" href="#">Change Subject</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item text-danger" href="#">End Session</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="chat-history-body">
                <ul className="list-unstyled chat-history">
                  {messages.map((msg, i) =>
                    msg.role === 'user' ? (
                      /* User bubble — right */
                      <li key={i} className="chat-message chat-message-right">
                        <div className="d-flex overflow-hidden">
                          <div className="chat-message-wrapper flex-grow-1">
                            <div className="chat-message-text">
                              <p className="mb-0">{'text' in msg ? msg.text : ''}</p>
                            </div>
                            <div className="text-end text-body-secondary mt-1">
                              <i className="icon-base ti tabler-checks icon-16px text-success me-1"></i>
                              <small>{msg.time}</small>
                            </div>
                          </div>
                          <div className="user-avatar flex-shrink-0 ms-4">
                            <div className="avatar avatar-sm">
                              <span className="avatar-initial rounded-circle bg-label-primary fw-bold">R</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ) : (
                      /* AI bubble — left */
                      <li key={i} className="chat-message">
                        <div className="d-flex overflow-hidden">
                          <div className="user-avatar flex-shrink-0 me-4">
                            <div className="avatar avatar-sm">
                              <span className="avatar-initial rounded-circle bg-primary">
                                <i className="icon-base ti tabler-sparkles icon-14px text-white"></i>
                              </span>
                            </div>
                          </div>
                          <div className="chat-message-wrapper flex-grow-1">
                            {'blocks' in msg && msg.blocks?.map((block, bi) => {
                              if (block.type === 'irac') return (
                                <div key={bi} className="chat-message-text mb-2">
                                  <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                                    <i className="icon-base ti tabler-scale icon-16px text-primary"></i>
                                    <small className="fw-bold text-primary text-uppercase">IRAC Analysis</small>
                                  </div>
                                  <div className="mb-2">
                                    <span className="badge bg-label-danger mb-1" style={{ fontSize: 10 }}>ISSUE</span>
                                    <p className="mb-0 small fw-semibold">{block.issue}</p>
                                  </div>
                                  <div className="mb-2">
                                    <span className="badge bg-label-warning mb-1" style={{ fontSize: 10 }}>RULE</span>
                                    <p className="mb-0 small">{block.rule}</p>
                                  </div>
                                  <div className="mb-2">
                                    <span className="badge bg-label-primary mb-1" style={{ fontSize: 10 }}>APPLICATION</span>
                                    {'application' in block && block.application?.map((line, li) => (
                                      <p key={li} className={`mb-0 small${'heading' in line && line.heading ? ' fw-semibold text-heading mt-1' : ' text-body-secondary'}`}>
                                        {line.text}
                                      </p>
                                    ))}
                                  </div>
                                  <div>
                                    <span className="badge bg-label-success mb-1" style={{ fontSize: 10 }}>CONCLUSION</span>
                                    <p className="mb-0 small fw-semibold">{block.conclusion}</p>
                                  </div>
                                </div>
                              );
                              if (block.type === 'text') return (
                                <div key={bi} className="chat-message-text mb-2">
                                  {'lines' in block && block.lines?.map((line, li) => (
                                    'tip' in line && line.tip ? (
                                      <p key={li} className="mb-1 small text-primary fw-semibold mt-2">
                                        <i className="icon-base ti tabler-pin icon-14px me-1"></i>{line.text}
                                      </p>
                                    ) : (
                                      <p key={li} className={`mb-1 small${'heading' in line && line.heading ? ' fw-semibold text-heading mt-2' : ' text-body-secondary'}`}>
                                        {line.text}
                                      </p>
                                    )
                                  ))}
                                </div>
                              );
                              if (block.type === 'tags') return (
                                <div key={bi} className="chat-message-text mt-2 d-flex flex-wrap gap-2">
                                  {'items' in block && block.items?.map(tag => (
                                    <span key={tag} className="badge bg-label-secondary" style={{ fontSize: 10 }}>{tag}</span>
                                  ))}
                                </div>
                              );
                              return null;
                            })}
                            <div className="text-body-secondary mt-1">
                              <small>{msg.time}</small>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Footer — Input */}
              <div className="chat-history-footer shadow-xs">
                {/* Quick chips */}
                <div className="d-flex gap-2 flex-wrap mb-3">
                  {['Explain simply', 'Give an IRAC', 'List key cases', 'Practice question', 'Summarise topic'].map(chip => (
                    <button key={chip} className="btn btn-sm btn-outline-secondary rounded-pill" style={{ fontSize: 11 }}>
                      {chip}
                    </button>
                  ))}
                </div>
                <form className="form-send-message d-flex justify-content-between align-items-center">
                  <input
                    className="form-control message-input border-0 me-4 shadow-none"
                    placeholder="Ask LexAI anything about Indian law… e.g. 'Explain mens rea under IPC'"
                  />
                  <div className="message-actions d-flex align-items-center">
                    <span className="btn btn-text-secondary btn-icon rounded-pill cursor-pointer">
                      <i className="icon-base ti tabler-microphone icon-22px text-heading"></i>
                    </span>
                    <label htmlFor="attach-doc" className="form-label mb-0">
                      <span className="btn btn-text-secondary btn-icon rounded-pill cursor-pointer mx-1">
                        <i className="icon-base ti tabler-paperclip icon-22px text-heading"></i>
                      </span>
                      <input type="file" id="attach-doc" hidden />
                    </label>
                    <button type="submit" className="btn btn-primary d-flex send-msg-btn">
                      <span className="align-middle d-md-inline-block d-none">Send</span>
                      <i className="icon-base ti tabler-send icon-16px ms-md-2 ms-0"></i>
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </StudentLayout>
  );
}
