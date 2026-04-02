import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Interview Room — LexEd',
};

export default function ClientInterviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="/vendor/css/pages/app-chat.css" />
      <style>{`
        .app-chat .app-chat-history .chat-history-body {
          overflow-y: auto !important;
          flex: 1;
        }
        .app-chat .app-chat-history .chat-history-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
      `}</style>
      {children}
    </>
  );
}
