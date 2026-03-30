'use client'

import Link from 'next/link'

const navLinks = [
  { label: 'My Learning', href: '/student/learn' },
  { label: 'Course Catalog', href: '/student/courses' },
  { label: 'AI Tutor', href: '/student/ai-tutor' },
  { label: 'Practice Lab', href: '/student/practice-lab' },
]

export default function StudentNavbar({ activePath = '' }: { activePath?: string }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#DBDADE] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/student/courses" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#7367F0] flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-[#4B465C] text-lg tracking-tight">LexEd</span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activePath.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-[#7367F0]'
                      : 'text-[#4B465C] hover:text-[#7367F0]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7367F0] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#F8F7FA] text-[#4B465C] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#EA5455] rounded-full border border-white" />
            </button>

            {/* Avatar Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-[#F8F7FA] transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7367F0] to-[#9E95F5] flex items-center justify-center text-white text-sm font-semibold">
                  A
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-xs font-semibold text-[#4B465C] leading-none">Arjun Sharma</p>
                  <p className="text-[10px] text-[#A8AAAE] mt-0.5">Student</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#A8AAAE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
