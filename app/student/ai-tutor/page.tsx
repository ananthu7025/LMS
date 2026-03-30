'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

const conversations = [
  { id: 1, title: 'Section 300 IPC — Murder vs Culpable Homicide', time: '2 hrs ago', active: true },
  { id: 2, title: 'Bail under Section 437 CrPC', time: 'Yesterday' },
  { id: 3, title: 'General Exceptions — Private Defence', time: '2 days ago' },
  { id: 4, title: 'Indian Evidence Act — Res Gestae', time: '3 days ago' },
]

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

**Exception 4 — Sudden Fight**
In a sudden fight without premeditation, in the heat of passion, upon a sudden quarrel. (*No undue advantage, no cruel manner*)

**Exception 5 — Consent**
The victim, being above 18 years, consented to the risk of death or harm.

📌 Key exam tip: All 5 exceptions must be read with Section 300 as provisos that reduce liability from murder to Section 304 Part I or II.`,
      sections: ['Sec 300 IPC Exceptions 1-5', 'Sec 304 IPC'],
    },
  },
]

export default function AITutorPage() {
  return (
    <StudentLayout activePath="/student/ai-tutor">
      <div className="h-[calc(100vh-120px)] flex rounded-xl overflow-hidden border border-[#DBDADE] shadow-sm">
        {/* Left sidebar — conversation history */}
        <div className="w-64 bg-white border-r border-[#DBDADE] flex flex-col">
          <div className="p-4 border-b border-[#DBDADE]">
            <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white text-sm font-semibold rounded-lg transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Chat
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <p className="px-4 pt-3 pb-1 text-xs font-semibold text-[#A8AAAE] uppercase tracking-wider">Recent Chats</p>
            {conversations.map(conv => (
              <button
                key={conv.id}
                className={`w-full text-left px-4 py-3 hover:bg-[#F8F7FA] transition ${conv.active ? 'bg-[#7367F0]/5 border-r-2 border-[#7367F0]' : ''}`}
              >
                <p className={`text-xs font-medium line-clamp-2 ${conv.active ? 'text-[#7367F0]' : 'text-[#4B465C]'}`}>{conv.title}</p>
                <p className="text-[10px] text-[#A8AAAE] mt-0.5">{conv.time}</p>
              </button>
            ))}
          </div>

          {/* Token usage */}
          <div className="p-4 border-t border-[#DBDADE]">
            <p className="text-xs text-[#A8AAAE] mb-1">Daily tokens used</p>
            <div className="h-1.5 bg-[#F8F7FA] rounded-full overflow-hidden">
              <div className="h-full bg-[#7367F0] rounded-full" style={{ width: '34%' }} />
            </div>
            <p className="text-[10px] text-[#A8AAAE] mt-1">3,400 / 10,000</p>
          </div>
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col bg-[#F8F7FA]">
          {/* Context bar */}
          <div className="bg-white border-b border-[#DBDADE] px-5 py-2.5 flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#A8AAAE]">Context:</span>
              <span className="flex items-center gap-1.5 bg-[#7367F0]/10 text-[#7367F0] px-2.5 py-1 rounded-full font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Criminal Law Fundamentals
              </span>
              <span className="text-[#A8AAAE]">·</span>
              <span className="flex items-center gap-1.5 bg-[#FF9F43]/10 text-[#FF9F43] px-2.5 py-1 rounded-full font-medium">
                Lesson: Section 300 IPC
              </span>
            </div>
            <button className="ml-auto text-xs text-[#A8AAAE] hover:text-[#EA5455] transition">Clear context</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'student' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-[#7367F0] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mr-3 mt-1">
                    AI
                  </div>
                )}

                <div className={`max-w-[75%] ${msg.role === 'student' ? 'max-w-[55%]' : ''}`}>
                  {msg.role === 'student' ? (
                    <div className="bg-[#7367F0] text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                      {msg.text}
                      <p className="text-[10px] text-white/60 mt-1 text-right">{msg.time}</p>
                    </div>
                  ) : (
                    <div className="bg-white rounded-2xl rounded-tl-sm border border-[#DBDADE] shadow-sm overflow-hidden">
                      {'content' in msg && msg.content?.irac && (
                        <>
                          {/* IRAC header */}
                          <div className="bg-[#7367F0]/5 border-b border-[#7367F0]/20 px-4 py-2 flex items-center gap-2">
                            <span className="text-xs font-bold text-[#7367F0]">IRAC Response</span>
                          </div>
                          <div className="p-4 space-y-3 text-sm text-[#4B465C]">
                            <div>
                              <span className="text-xs font-bold text-[#EA5455] uppercase">Issue</span>
                              <p className="mt-0.5">{msg.content.issue}</p>
                            </div>
                            <div>
                              <span className="text-xs font-bold text-[#FF9F43] uppercase">Rule</span>
                              <p className="mt-0.5">{msg.content.rule}</p>
                            </div>
                            <div>
                              <span className="text-xs font-bold text-[#7367F0] uppercase">Application</span>
                              <div className="mt-1 space-y-1">
                                {msg.content.application?.split('\n').map((line, li) => (
                                  <p key={li} className={line.startsWith('**') ? 'font-semibold' : line.startsWith('•') ? 'pl-2' : ''}>{line.replace(/\*\*/g, '')}</p>
                                ))}
                              </div>
                            </div>
                            <div>
                              <span className="text-xs font-bold text-[#28C76F] uppercase">Conclusion</span>
                              <p className="mt-0.5">{msg.content.conclusion}</p>
                            </div>
                          </div>
                        </>
                      )}
                      {'content' in msg && msg.content && !msg.content.irac && 'text' in msg.content && (
                        <div className="p-4 text-sm text-[#4B465C] space-y-1">
                          {(msg.content.text as string).split('\n').map((line, li) => (
                            <p key={li} className={line.startsWith('**') ? 'font-semibold text-[#4B465C]' : line.startsWith('📌') ? 'text-[#7367F0] font-medium' : ''}>{line.replace(/\*\*/g, '')}</p>
                          ))}
                        </div>
                      )}

                      {/* Section chips + case laws */}
                      {'content' in msg && msg.content && (
                        <div className="px-4 pb-3 pt-1 border-t border-[#DBDADE] flex flex-wrap gap-1.5">
                          {msg.content.sections?.map(s => (
                            <span key={s} className="text-xs bg-[#7367F0]/10 text-[#7367F0] px-2 py-0.5 rounded-full font-medium">{s}</span>
                          ))}
                          {'caseLaws' in msg.content && msg.content.caseLaws?.map(c => (
                            <span key={c} className="text-xs bg-[#28C76F]/10 text-[#28C76F] px-2 py-0.5 rounded-full font-medium">{c}</span>
                          ))}
                        </div>
                      )}

                      <div className="px-4 pb-2 text-[10px] text-[#A8AAAE]">{msg.time}</div>
                    </div>
                  )}
                </div>

                {msg.role === 'student' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7367F0] to-[#9E95F5] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ml-3 mt-1">
                    A
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#7367F0] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                AI
              </div>
              <div className="bg-white border border-[#DBDADE] shadow-sm rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex gap-1.5 items-center">
                  {[0, 1, 2].map(i => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-[#A8AAAE] rounded-full"
                      style={{ opacity: i === 0 ? 1 : i === 1 ? 0.7 : 0.4 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick action chips */}
          <div className="px-5 pb-2 flex gap-2 flex-wrap">
            {['Explain simply', 'Practice question', 'Key cases', 'Draft argument', 'Memory tips'].map(chip => (
              <button
                key={chip}
                className="px-3 py-1.5 bg-white border border-[#DBDADE] text-[#4B465C] text-xs font-medium rounded-full hover:border-[#7367F0] hover:text-[#7367F0] transition"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input bar */}
          <div className="px-5 pb-4">
            <div className="bg-white border border-[#DBDADE] rounded-xl shadow-sm overflow-hidden">
              <textarea
                className="w-full px-4 pt-3 pb-2 text-sm text-[#4B465C] placeholder:text-[#A8AAAE] focus:outline-none resize-none"
                rows={2}
                placeholder="Ask anything about criminal law... e.g. 'Explain the doctrine of mens rea in IPC'"
              />
              <div className="flex items-center gap-2 px-4 pb-3">
                <span className="text-xs text-[#A8AAAE]">0 / 2000 chars</span>
                <span className="text-xs text-[#A8AAAE]">·</span>
                <span className="text-xs text-[#A8AAAE]">3,400 / 10,000 tokens used today</span>
                <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-[#7367F0] hover:bg-[#5E50E2] text-white text-sm font-semibold rounded-lg transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
