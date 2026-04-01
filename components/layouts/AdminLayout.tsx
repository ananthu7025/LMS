'use client';
import AdminSidebar from './AdminSidebar';
import { useMenu } from '@/hooks/useMenu';

export default function AdminLayout({
  children,
  title,
  breadcrumb,
}: {
  children: React.ReactNode;
  active?: string;
  title?: string;
  breadcrumb?: string;
}) {
  const { toggleMenu, closeMenu } = useMenu();

  const crumbs = breadcrumb ? breadcrumb.split(' / ') : [];

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">

        <AdminSidebar />

        <div className="layout-page">

          {/* ── Navbar ───────────────────────────────────────────────── */}
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

            <div className="navbar-nav-right d-flex align-items-center justify-content-end" id="navbar-collapse">

              {/* Search toggler */}
              <div className="navbar-nav align-items-center">
                <div className="nav-item navbar-search-wrapper px-md-0 px-2 mb-0">
                  <a className="nav-item nav-link search-toggler d-flex align-items-center px-0 gap-2" href="#" onClick={e => e.preventDefault()}>
                    <i className="icon-base ti tabler-search icon-22px text-body-secondary"></i>
                    <span className="d-none d-md-inline-block text-body-secondary small">Search…</span>
                  </a>
                </div>
              </div>

              <ul className="navbar-nav flex-row align-items-center ms-md-auto">

                {/* Shortcuts */}
                <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-1">
                  <a
                    className="nav-link dropdown-toggle hide-arrow btn btn-icon btn-text-secondary rounded-pill"
                    href="#"
                    onClick={e => e.preventDefault()}
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <i className="icon-base ti tabler-layout-grid-add icon-22px text-heading"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end p-0" style={{ width: 290 }}>
                    <div className="dropdown-menu-header border-bottom">
                      <div className="dropdown-header d-flex align-items-center py-3">
                        <h6 className="mb-0 me-auto">Quick Links</h6>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="row row-bordered overflow-visible g-0">
                        {[
                          { icon: 'tabler-layout-dashboard', label: 'Dashboard',    href: '/admin/dashboard'     },
                          { icon: 'tabler-book',             label: 'Courses',      href: '/admin/courses'        },
                          { icon: 'tabler-users',            label: 'Students',     href: '/admin/students'       },
                          { icon: 'tabler-chalkboard',       label: 'Tutors',       href: '/admin/tutors'         },
                          { icon: 'tabler-currency-rupee',   label: 'Revenue',      href: '/admin/revenue'        },
                          { icon: 'tabler-settings',         label: 'Setup',        href: '/admin/setup'          },
                        ].map(s => (
                          <div key={s.label} className="dropdown-shortcuts-item col-6">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                              <i className={`icon-base ti ${s.icon} icon-26px text-heading`}></i>
                            </span>
                            <a href={s.href} className="stretched-link small fw-semibold">{s.label}</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                {/* Notifications */}
                <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                  <a
                    className="nav-link dropdown-toggle hide-arrow btn btn-icon btn-text-secondary rounded-pill"
                    href="#"
                    onClick={e => e.preventDefault()}
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <span className="position-relative">
                      <i className="icon-base ti tabler-bell icon-22px text-heading"></i>
                      <span className="badge rounded-pill bg-danger badge-dot badge-notifications border"></span>
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end p-0" style={{ width: 300 }}>
                    <li className="dropdown-menu-header border-bottom">
                      <div className="dropdown-header d-flex align-items-center py-3">
                        <h6 className="mb-0 me-auto">Notifications</h6>
                        <span className="badge bg-label-primary me-2">5 New</span>
                      </div>
                    </li>
                    <li className="dropdown-notifications-list scrollable-container" style={{ maxHeight: 280, overflowY: 'auto' }}>
                      <ul className="list-group list-group-flush">
                        {[
                          { init: 'S',  color: 'bg-label-success', title: 'New Enrollment',      body: 'Sneha Reddy enrolled in CLAT Foundation',  time: '5m ago'  },
                          { init: 'T',  color: 'bg-label-info',    title: 'Tutor Request',        body: 'Priya Verma submitted onboarding form',    time: '30m ago' },
                          { init: '!',  color: 'bg-label-warning', title: 'Course Expiring',      body: 'Constitutional Law course ends in 3 days', time: '2h ago'  },
                          { init: 'R',  color: 'bg-label-danger',  title: 'Payment Overdue',      body: '₹4,999 due for Juris Academy plan',        time: '1d ago'  },
                        ].map(n => (
                          <li key={n.title} className="list-group-item list-group-item-action dropdown-notifications-item">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar">
                                  <span className={`avatar-initial rounded-circle ${n.color}`}>{n.init}</span>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="mb-1 small">{n.title}</h6>
                                <small className="mb-1 d-block text-body">{n.body}</small>
                                <small className="text-body-secondary">{n.time}</small>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="border-top">
                      <div className="d-grid p-2">
                        <a className="btn btn-primary btn-sm" href="#">View all notifications</a>
                      </div>
                    </li>
                  </ul>
                </li>

                {/* User avatar */}
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a
                    className="nav-link dropdown-toggle hide-arrow p-0"
                    href="#"
                    onClick={e => e.preventDefault()}
                    data-bs-toggle="dropdown"
                  >
                    <div className="avatar avatar-online">
                      <span className="avatar-initial rounded-circle bg-primary">RS</span>
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item mt-0" href="#">
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar avatar-online flex-shrink-0">
                            <span className="avatar-initial rounded-circle bg-primary">RS</span>
                          </div>
                          <div>
                            <h6 className="mb-0">Rajesh Sharma</h6>
                            <small className="text-body-secondary">Institute Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li><div className="dropdown-divider my-1 mx-n2"></div></li>
                    <li>
                      <a className="dropdown-item" href="/admin/setup">
                        <i className="icon-base ti tabler-settings me-2 icon-sm"></i>Setup &amp; Settings
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

          {/* ── Content ──────────────────────────────────────────────── */}
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">

              {(title || crumbs.length > 0) && (
                <h4 className="py-3 mb-4">
                  {crumbs.slice(0, -1).map(c => (
                    <span key={c} className="text-muted fw-light">{c} / </span>
                  ))}
                  {title || crumbs[crumbs.length - 1]}
                </h4>
              )}

              {children}
            </div>
            <div className="content-backdrop fade"></div>
          </div>

        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle" onClick={closeMenu}></div>
    </div>
  );
}
