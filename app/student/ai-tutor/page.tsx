'use client';
import StudentLayout from '@/components/layouts/StudentLayout';

const conversations = [
  { id: 1, title: 'Section 300 IPC — Murder vs Culpable Homicide', time: '2 hrs ago', active: true },
  { id: 2, title: 'Bail under Section 437 CrPC', time: 'Yesterday' },
  { id: 3, title: 'General Exceptions — Private Defence', time: '2 days ago' },
  { id: 4, title: 'Indian Evidence Act — Res Gestae', time: '3 days ago' },
];

const messages = [
  {
    role: 'student',
    text: "Can you explain the difference between culpable homicide under Section 299 and murder under Section 300 IPC in simple terms?",
    time: '2:14 PM',
  },
  {
    role: 'ai',
    time: '2:14 PM',
    content: {
      irac: true,
      issue: 'What distinguishes culpable homicide (Sec 299) from murder (Sec 300)?',
      rule: 'Section 299 IPC defines culpable homicide. Section 300 IPC elevates it to murder with a higher threshold of intent.',
      application: `The key distinction lies in the degree of intention and knowledge:

**Section 299 — Culpable Homicide:** Act done with:
• Intention to cause death, OR
• Intention to cause bodily injury likely to cause death, OR
• Knowledge that the act is likely to cause death

**Section 300 — Murder:** All culpable homicide PLUS:
• Intention to cause death, OR
• Intention to cause injury sufficient in ordinary course to cause death, OR
• Knowledge that the act is imminently dangerous and will most probably cause death (without any justification)`,
      conclusion: 'Every murder is culpable homicide, but not every culpable homicide is murder. Murder has five exceptions that reduce it back to culpable homicide not amounting to murder.',
      caseLaws: ['K.M. Nanavati v State of Maharashtra (1962)', 'Virsa Singh v State of Punjab (1958)', 'State of AP v R. Punnayya (1976)'],
      sections: ['Sec 299 IPC', 'Sec 300 IPC', 'Sec 304 IPC'],
    },
  },
  {
    role: 'student',
    text: "What are the 5 exceptions to Section 300 IPC? Give a brief for each.",
    time: '2:16 PM',
  },
  {
    role: 'ai',
    time: '2:16 PM',
    content: {
      irac: false,
      text: `The 5 exceptions to Section 300 IPC reduce murder to culpable homicide not amounting to murder:

**Exception 1 — Grave & Sudden Provocation**
The offender acted under grave and sudden provocation that deprived them of the power of self-control. *Note: The provocation must not be self-induced.*

**Exception 2 — Right of Private Defence Exceeded**
The offender exceeded their right of private defence in good faith without premeditation.

**Exception 3 — Public Servant Exceeding Powers**
A public servant acting for public justice exceeded necessary force in good faith.

**Exception 5 — Sudden Fight**
In a sudden fight without premeditation, in the heat of passion, upon a sudden quarrel. (*No undue advantage, no cruel manner*)

**Exception 5 — Consent**
The victim, being above 18 years, consented to the risk of death or harm.

📌 Key exam tip: All 5 exceptions must be read with Section 300 as provisos that reduce liability from murder to Section 304 Part I or II.`,
      sections: ['Sec 300 IPC Exceptions 1-5', 'Sec 304 IPC'],
    },
  },
];

export default function AITutorPage() {
  return (
    <StudentLayout activePath="/student/ai-tutor">
      <div className="card shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 180px)' }}>
        <div className="row g-0 h-100">
          {/* Left sidebar — conversation history */}
          <div className="col-md-3 col-lg-2 border-end d-flex flex-column bg-light h-100">
            <div className="p-3 border-bottom bg-white">
              <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2">
                <i className="ti tabler-plus fs-5"></i>
                <span className="small fw-bold">New Chat</span>
              </button>
            </div>

            <div className="flex-grow-1 overflow-y-auto">
              <div className="px-3 py-2 mt-2">
                <small className="text-body-secondary text-uppercase fw-bold extra-small tracking-wider">Recent Chats</small>
              </div>
              <div className="list-group list-group-flush">
                {conversations.map(conv => (
                  <button
                    key={conv.id}
                    className={`list-group-item list-group-item-action border-0 px-3 py-3 rounded-0 ${conv.active ? 'bg-primary bg-opacity-10 border-start border-3 border-primary' : ''}`}
                  >
                    <div className={`small fw-bold line-clamp-2 mb-1 ${conv.active ? 'text-primary' : 'text-heading'}`}>{conv.title}</div>
                    <div className="extra-small text-body-secondary d-flex align-items-center gap-1">
                      <i className="ti tabler-clock extra-small"></i>{conv.time}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Token usage */}
            <div className="p-3 border-top bg-white">
              <div className="d-flex justify-content-between mb-1">
                <small className="text-body-secondary extra-small">Daily Tokens</small>
                <small className="text-heading fw-bold extra-small">34%</small>
              </div>
              <div className="progress rounded-pill" style={{ height: 4 }}>
                <div className="progress-bar" role="progressbar" style={{ width: '34%' }} aria-valuenow={34} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <p className="extra-small text-body-secondary mt-1 mb-0">3,400 / 10,000 used</p>
            </div>
          </div>

          {/* Main chat area */}
          <div className="col-md-9 col-lg-10 d-flex flex-column h-100 bg-white">
            {/* Context bar */}
            <div className="px-4 py-2 border-bottom d-flex align-items-center gap-3 bg-white">
              <div className="d-flex align-items-center gap-2 small">
                <span className="text-body-secondary extra-small fw-bold text-uppercase">Context:</span>
                <span className="badge bg-label-primary d-flex align-items-center gap-1 px-2 py-1">
                  <i className="ti tabler-book-2 extra-small"></i>
                  Criminal Law Fundamentals
                </span>
                <span className="badge bg-label-warning d-flex align-items-center gap-1 px-2 py-1">
                  <i className="ti tabler-align-left extra-small"></i>
                  Section 300 IPC
                </span>
              </div>
              <button className="btn btn-sm btn-text-secondary ms-auto extra-small fw-bold">
                <i className="ti tabler-trash me-1"></i>Clear
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow-1 overflow-y-auto p-4 bg-label-light">
              <div className="d-flex flex-column gap-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`d-flex ${msg.role === 'student' ? 'justify-content-end' : 'justify-content-start'}`}>
                    <div className="d-flex align-items-start gap-2" style={{ maxWidth: '85%' }}>
                      {msg.role === 'ai' && (
                        <div className="avatar avatar-sm flex-shrink-0 mt-1">
                          <span className="avatar-initial rounded-circle bg-primary"><i className="ti tabler-robot fs-5"></i></span>
                        </div>
                      )}

                      <div className="d-flex flex-column">
                        <div className={`card shadow-none border-0 ${msg.role === 'student' ? 'bg-primary text-white rounded-end-0' : 'bg-white rounded-start-0'}`}>
                          <div className="card-body p-3">
                            {msg.role === 'student' && <p className="mb-0 small">{msg.text}</p>}
                            
                            {msg.role === 'ai' && 'content' in msg && msg.content?.irac && (
                              <div>
                                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                                  <i className="ti tabler-scale text-primary"></i>
                                  <span className="extra-small fw-bold text-primary text-uppercase tracking-wider">IRAC Analysis</span>
                                </div>
                                <div className="space-y-3">
                                  <div className="mb-3">
                                    <span className="badge bg-label-danger extra-small mb-1">ISSUE</span>
                                    <p className="mb-0 small fw-semibold">{msg.content.issue}</p>
                                  </div>
                                  <div className="mb-3">
                                    <span className="badge bg-label-warning extra-small mb-1">RULE</span>
                                    <p className="mb-0 small">{msg.content.rule}</p>
                                  </div>
                                  <div className="mb-3">
                                    <span className="badge bg-label-primary extra-small mb-1">APPLICATION</span>
                                    <div className="small text-body-secondary mt-1">
                                      {msg.content.application?.split('\n').map((line, li) => (
                                        <p key={li} className={`mb-1 ${line.startsWith('**') ? 'fw-bold text-heading' : line.startsWith('•') ? 'ps-3' : ''}`}>
                                          {line.replace(/\*\*/g, '')}
                                        </p>
                                      ))}
                                    </div>
                                  </div>
                                  <div>
                                    <span className="badge bg-label-success extra-small mb-1">CONCLUSION</span>
                                    <p className="mb-0 small fw-bold text-heading">{msg.content.conclusion}</p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {msg.role === 'ai' && 'content' in msg && msg.content && !msg.content.irac && 'text' in msg.content && (
                              <div className="small text-body-secondary">
                                {(msg.content.text as string).split('\n').map((line, li) => (
                                  <p key={li} className={`mb-1 ${line.startsWith('**') ? 'fw-bold text-heading mt-2' : line.startsWith('📌') ? 'text-primary fw-bold mt-2' : ''}`}>
                                    {line.replace(/\*\*/g, '')}
                                  </p>
                                ))}
                              </div>
                            )}

                            {msg.role === 'ai' && 'content' in msg && msg.content && (
                              <div className="mt-3 pt-3 border-top d-flex flex-wrap gap-2">
                                {msg.content.sections?.map(s => (
                                  <span key={s} className="badge bg-label-primary extra-small px-2">{s}</span>
                                ))}
                                {'caseLaws' in msg.content && msg.content.caseLaws?.map(c => (
                                  <span key={c} className="badge bg-label-success extra-small px-2">{c}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={`mt-1 extra-small text-body-secondary ${msg.role === 'student' ? 'text-end' : ''}`}>
                          {msg.time}
                        </div>
                      </div>

                      {msg.role === 'student' && (
                        <div className="avatar avatar-sm flex-shrink-0 mt-1">
                          <span className="avatar-initial rounded-circle bg-label-primary fw-bold">A</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer / Input */}
            <div className="p-4 border-top">
              {/* Quick action chips */}
              <div className="d-flex gap-2 flex-wrap mb-3">
                {['Explain simply', 'Practice question', 'Key cases', 'Draft argument'].map(chip => (
                  <button key={chip} className="btn btn-sm btn-outline-secondary rounded-pill extra-small px-3 py-1">
                    {chip}
                  </button>
                ))}
              </div>

              <div className="card shadow-none border">
                <div className="card-body p-2">
                  <textarea
                    className="form-control border-0 shadow-none py-2 px-3 small"
                    rows={2}
                    placeholder="Ask anything about criminal law... e.g. 'Explain the doctrine of mens rea'"
                  ></textarea>
                  <div className="d-flex align-items-center justify-content-between mt-2 px-2 pb-1">
                    <div className="d-flex align-items-center gap-2">
                      <i className="ti tabler-typography fs-6 text-body-secondary cursor-pointer hover-text-primary"></i>
                      <i className="ti tabler-paperclip fs-6 text-body-secondary cursor-pointer hover-text-primary"></i>
                      <span className="text-body-secondary extra-small ms-2">0 / 2000</span>
                    </div>
                    <button className="btn btn-primary btn-sm px-4 d-flex align-items-center gap-2">
                      <span>Send</span>
                      <i className="ti tabler-send fs-6"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
