import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tutor — LexEd',
};

export default function AITutorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="/vendor/css/pages/app-chat.css" />
      <style>{`
        .app-chat .app-chat-history .chat-history-body {
          overflow-y: auto !important;
        }
        .app-chat .app-chat-contacts .sidebar-body,
        .app-chat .app-chat-sidebar-left .sidebar-body {
          overflow-y: auto !important;
        }
        .app-chat .app-chat-history .chat-history-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .app-chat .app-chat-history .chat-history-body {
          flex: 1;
        }
      `}</style>
      {children}
    </>
  );
}
