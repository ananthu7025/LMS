'use client';
import StudentNavbar from './StudentNavbar';
import StudentMenu from './StudentMenu';

export default function StudentLayout({
  children,
  activePath = '',
}: {
  children: React.ReactNode;
  activePath?: string;
}) {
  return (
    <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
      <div className="layout-container">
        <StudentNavbar />
        <div className="layout-page">
          <div className="content-wrapper">
            <StudentMenu activePath={activePath} />
            <div className="container-xxl flex-grow-1 container-p-y">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
