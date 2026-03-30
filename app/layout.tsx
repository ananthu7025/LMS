import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LexEd — Law Coaching Platform",
  description: "White-label SaaS LMS for law coaching institutes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
