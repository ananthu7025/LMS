'use client'

import StudentNavbar from './StudentNavbar'

export default function StudentLayout({
  children,
  activePath = '',
}: {
  children: React.ReactNode
  activePath?: string
}) {
  return (
    <div className="min-h-screen bg-[#F8F7FA]">
      <StudentNavbar activePath={activePath} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  )
}
