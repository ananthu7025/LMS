'use client';
import { usePathname } from 'next/navigation';
import { useMenu } from '@/hooks/useMenu';

const navItems = [
  { href: '/admin/dashboard',    icon: 'tabler-smart-home',       label: 'Dashboard' },
  { href: '/admin/courses',      icon: 'tabler-book',             label: 'Courses' },
  { href: '/admin/students',     icon: 'tabler-users',            label: 'Students' },
  { href: '/admin/tutors',       icon: 'tabler-user-check',       label: 'Tutors' },
  { href: '/admin/live-classes',  icon: 'tabler-video',            label: 'Live Classes' },
  { href: '/admin/practice-lab', icon: 'tabler-flask',            label: 'Practice Lab' },
  { href: '/admin/revenue',      icon: 'tabler-currency-rupee',   label: 'Revenue' },
  { href: '/admin/coupons',      icon: 'tabler-tag',              label: 'Coupons' },
  { href: '/admin/announcements',icon: 'tabler-speakerphone',     label: 'Announcements' },
  { href: '/admin/reports',      icon: 'tabler-chart-bar',        label: 'Reports' },
  { href: '/admin/setup',        icon: 'tabler-settings',         label: 'Setup' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { toggleMenu, closeMenu } = useMenu();

  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu">
      {/* Brand */}
      <div className="app-brand demo">
        <a href="/admin/dashboard" className="app-brand-link">
          <span className="app-brand-logo demo">
            <span className="text-primary">
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                  fill="currentColor" />
                <path opacity="0.06" fillRule="evenodd" clipRule="evenodd"
                  d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                  fill="#161616" />
                <path opacity="0.06" fillRule="evenodd" clipRule="evenodd"
                  d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                  fill="#161616" />
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                  fill="currentColor" />
              </svg>
            </span>
          </span>
          <span className="app-brand-text demo menu-text fw-bold ms-3">LexEd</span>
        </a>

        <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu(); }} className="layout-menu-toggle menu-link text-large ms-auto">
          <i className="icon-base ti tabler-x d-block d-xl-none"></i>
          <i className="icon-base ti menu-toggle-icon d-none d-xl-block"></i>
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li className="menu-header small">
          <span className="menu-header-text">Institute</span>
        </li>

        {navItems.slice(0, 5).map(item => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <li key={item.href} className={`menu-item${isActive ? ' active' : ''}`}>
              <a href={item.href} className="menu-link">
                <i className={`menu-icon icon-base ti ${item.icon}`}></i>
                <div>{item.label}</div>
              </a>
            </li>
          );
        })}

        <li className="menu-header small">
          <span className="menu-header-text">Management</span>
        </li>

        {navItems.slice(5).map(item => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <li key={item.href} className={`menu-item${isActive ? ' active' : ''}`}>
              <a href={item.href} className="menu-link">
                <i className={`menu-icon icon-base ti ${item.icon}`}></i>
                <div>{item.label}</div>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
