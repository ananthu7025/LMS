'use client';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', href: '/student/home', icon: 'ti tabler-smart-home' },
  { label: 'My Learning', href: '/student/learn', icon: 'ti tabler-book' },
  { label: 'Course Catalog', href: '/student/courses', icon: 'ti tabler-search' },
  { label: 'AI Tutor', href: '/student/ai-tutor', icon: 'ti tabler-robot' },
  { label: 'Practice Lab', href: '/student/practice-lab', icon: 'ti tabler-microscope' },
];

export default function StudentMenu({ activePath = '' }: { activePath?: string }) {
  return (
    <aside id="layout-menu" className="layout-menu-horizontal menu-horizontal menu flex-grow-0 bg-white border-bottom">
      <div className="container-xxl d-flex h-100">
        <ul className="menu-inner py-1">
          {menuItems.map((item) => {
            const isActive = activePath.startsWith(item.href);
            return (
              <li key={item.href} className={`menu-item ${isActive ? 'active' : ''}`}>
                <Link href={item.href} className="menu-link">
                  <i className={`menu-icon ${item.icon}`}></i>
                  <div className="text-truncate">{item.label}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
