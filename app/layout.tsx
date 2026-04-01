import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/ThemeContext";
import BootstrapClient from "@/components/BootstrapClient";
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
    <html
      lang="en"
      className="layout-navbar-fixed layout-menu-fixed layout-compact"
      dir="ltr"
      data-skin="default"
      data-bs-theme="light"
      data-assets-path="/vendor/"
      data-template="vertical-menu-template-no-customizer"
    >
      <head>
        {/* Public Sans font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        {/* Tabler / Iconify Icons */}
        <link rel="stylesheet" href="/vendor/fonts/iconify-icons.css" />
        {/* Node Waves ripple */}
        <link rel="stylesheet" href="/vendor/libs/node-waves/node-waves.css" />
        {/* Perfect Scrollbar */}
        <link rel="stylesheet" href="/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
        {/* Vuexy Core CSS — Bootstrap + full theme */}
        <link rel="stylesheet" href="/vendor/css/core.css" />
        {/* Demo overrides */}
        <link rel="stylesheet" href="/css/demo.css" />
        {/* ApexCharts */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/apexcharts/dist/apexcharts.min.css" />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <BootstrapClient />
        </ThemeProvider>
      </body>
    </html>
  );
}
