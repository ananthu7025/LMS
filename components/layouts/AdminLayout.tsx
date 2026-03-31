'use client';
import AdminSidebar from './AdminSidebar';
import { useMenu } from '@/hooks/useMenu';

export default function AdminLayout({
  children,
  title,
  breadcrumb,
}: {
  children: React.ReactNode;
  active?: string;   // kept for backward compat, sidebar auto-detects via pathname now
  title?: string;
  breadcrumb?: string;
}) {
  const { toggleMenu, closeMenu } = useMenu();

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">

        {/* Sidebar */}
        <AdminSidebar />

        {/* Layout page */}
        <div className="layout-page">

          {/* Navbar */}
          <nav
            className="layout-navbar container-xxl navbar-detached navbar navbar-expand-xl align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            {/* Mobile menu toggle */}
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-6" href="#" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>
                <i className="icon-base ti tabler-menu-2 icon-md"></i>
              </a>
            </div>

            <div
              className="navbar-nav-right d-flex align-items-center justify-content-between w-100"
              id="navbar-collapse"
            >
              {/* Left: Page title / breadcrumb */}
              <div className="d-flex flex-column">
                {title && <h4 className="fw-bold mb-0">{title}</h4>}
                {breadcrumb && (
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-style1 mb-0">
                      {breadcrumb.split(' / ').map((crumb, i, arr) => (
                        <li
                          key={crumb}
                          className={`breadcrumb-item${i === arr.length - 1 ? ' active' : ''}`}
                        >
                          {crumb}
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
              </div>

              <ul className="navbar-nav flex-row align-items-center ms-md-auto">
                {/* Notifications */}
                <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                  <a
                    className="nav-link btn btn-icon btn-text-secondary rounded-pill"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    <i className="icon-base ti tabler-bell icon-22px"></i>
                    <span className="badge bg-danger rounded-pill badge-notifications">5</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end p-0">
                    <li className="dropdown-menu-header border-bottom py-3 px-4">
                      <h6 className="mb-0">Notifications <span className="badge bg-danger ms-1">5</span></h6>
                    </li>
                    <li>
                      <div className="d-grid p-2">
                        <a className="btn btn-primary btn-sm" href="#">View all notifications</a>
                      </div>
                    </li>
                  </ul>
                </li>

                {/* User dropdown */}
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a
                    className="nav-link dropdown-toggle hide-arrow p-0"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    data-bs-toggle="dropdown"
                  >
                    <div className="avatar avatar-online">
                      <span className="avatar-initial rounded-circle bg-primary">RS</span>
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item mt-0" href="#">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-2">
                            <div className="avatar avatar-online">
                              <span className="avatar-initial rounded-circle bg-primary">RS</span>
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0">Rajesh Sharma</h6>
                            <small className="text-body-secondary">Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li><div className="dropdown-divider my-1 mx-n2"></div></li>
                    <li>
                      <a className="dropdown-item" href="/admin/setup">
                        <i className="icon-base ti tabler-settings me-3 icon-md"></i>
                        <span className="align-middle">Settings</span>
                      </a>
                    </li>
                    <li><div className="dropdown-divider my-1 mx-n2"></div></li>
                    <li>
                      <div className="d-grid px-2 pt-2 pb-1">
                        <a className="btn btn-sm btn-danger d-flex align-items-center justify-content-center gap-2" href="/login">
                          <span>Logout</span>
                          <i className="icon-base ti tabler-logout icon-14px"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          {/* / Navbar */}

          {/* Content wrapper */}
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              {children}
            </div>
            <div className="content-backdrop fade"></div>
          </div>
          {/* / Content wrapper */}

        </div>
        {/* / Layout page */}
      </div>

      {/* Overlay for mobile */}
      <div className="layout-overlay layout-menu-toggle" onClick={closeMenu}></div>
    </div>
  );
}
