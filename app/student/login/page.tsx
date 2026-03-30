'use client'

export default function StudentLoginPage() {
  return (
    <div className="min-h-screen flex bg-[#F8F7FA]">
      {/* Left decorative panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-[#7367F0] via-[#5E50E2] to-[#3B1FA8] flex-col items-center justify-center p-12">
        {/* Abstract circles */}
        <div className="absolute top-[-80px] right-[-80px] w-72 h-72 rounded-full bg-white/10" />
        <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 rounded-full bg-white/10" />
        <div className="absolute top-1/2 left-[-100px] w-64 h-64 rounded-full bg-white/5" />

        {/* Gavel + scales illustration placeholder */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="w-32 h-32 rounded-3xl bg-white/20 backdrop-blur flex items-center justify-center shadow-2xl">
            <span className="text-6xl">⚖️</span>
          </div>
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold leading-tight">Master Law.<br />Shape Justice.</h2>
            <p className="text-white/70 mt-3 text-base max-w-xs">
              Access 500+ curated law courses, AI-powered tutoring, and live classes from top legal faculty.
            </p>
          </div>
          <div className="flex gap-8 mt-4">
            {[['500+', 'Courses'], ['50K+', 'Students'], ['200+', 'Faculty']].map(([num, label]) => (
              <div key={label} className="text-center">
                <p className="text-white text-2xl font-bold">{num}</p>
                <p className="text-white/60 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom brand */}
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-white/50 text-xs">Powered by LexEd Platform</p>
        </div>
      </div>

      {/* Right login panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Institute branding */}
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7367F0] to-[#5E50E2] flex items-center justify-center shadow-lg mb-4">
              <span className="text-white text-2xl font-bold">S</span>
            </div>
            <h1 className="text-2xl font-bold text-[#4B465C]">Sharma Law Academy</h1>
            <p className="text-[#A8AAAE] text-sm mt-1">Student Learning Portal</p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-8">
            <h2 className="text-xl font-semibold text-[#4B465C] mb-1">Welcome back! 👋</h2>
            <p className="text-[#A8AAAE] text-sm mb-6">Please sign in to your student account</p>

            <div className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#4B465C] mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="student@example.com"
                  defaultValue="arjun.sharma@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DBDADE] text-[#4B465C] text-sm placeholder:text-[#A8AAAE] focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-[#4B465C]">Password</label>
                  <a href="#" className="text-xs text-[#7367F0] hover:underline">Forgot Password?</a>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="············"
                    defaultValue="password"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DBDADE] text-[#4B465C] text-sm placeholder:text-[#A8AAAE] focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition pr-10"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8AAAE] hover:text-[#4B465C]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  defaultChecked
                  className="w-4 h-4 rounded border-[#DBDADE] text-[#7367F0] accent-[#7367F0]"
                />
                <label htmlFor="remember" className="text-sm text-[#4B465C]">Remember me</label>
              </div>

              {/* Login button */}
              <button className="w-full py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-semibold rounded-lg transition shadow-sm text-sm mt-2">
                Sign In
              </button>
            </div>

            <p className="text-center text-sm text-[#A8AAAE] mt-6">
              New student?{' '}
              <a href="/student/signup" className="text-[#7367F0] font-medium hover:underline">Create Account</a>
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-[#A8AAAE] mt-6">
            Powered by{' '}
            <span className="text-[#7367F0] font-semibold">LexEd</span>
          </p>
        </div>
      </div>
    </div>
  )
}
