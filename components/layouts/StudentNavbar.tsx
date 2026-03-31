'use client';
import Link from 'next/link';

export default function StudentNavbar() {
  return (
    <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
      <div className="container-xxl">
        <div className="navbar-brand app-brand demo d-none d-xl-flex py-0 me-4 ms-0">
          <Link href="/student/courses" className="app-brand-link">
            <span className="app-brand-logo demo">
              <span className="text-primary">
                <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="currentColor" />
                  <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616" />
                  <path opacity="0.06" fillRule="evenodd" clipRule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="currentColor" />
                </svg>
              </span>
            </span>
            <span className="app-brand-text demo menu-text fw-bold text-heading">LexEd</span>
          </Link>

          <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
            <i className="ti ti-x ti-sm align-middle"></i>
          </a>
        </div>

        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="#">
            <i className="ti ti-menu-2 ti-sm"></i>
          </a>
        </div>

        <div className="navbar-nav-right d-flex align-items-center justify-content-end" id="navbar-collapse">
          {/* User profile dropdown, search modal etc. */}
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* User Profile */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a className="nav-link dropdown-toggle hide-arrow p-0" href="#" data-bs-toggle="dropdown">
                <div className="avatar avatar-online">
                  <div className="avatar-initial rounded-circle bg-label-primary">A</div>
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <div className="avatar-initial rounded-circle bg-label-primary">A</div>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-0">Arjun Sharma</h6>
                        <small className="text-muted">Student</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li><div className="dropdown-divider"></div></li>
                <li>
                  <a className="dropdown-item" href="#"><i className="ti ti-user-check me-2 ti-sm"></i> My Profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#"><i className="ti ti-settings me-2 ti-sm"></i> Settings</a>
                </li>
                <li><div className="dropdown-divider"></div></li>
                <li>
                  <a className="dropdown-item" href="#"><i className="ti ti-logout me-2 ti-sm"></i> Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
