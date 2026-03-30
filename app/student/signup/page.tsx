'use client'

export default function StudentSignupPage() {
  // Toggle to show OTP step (static demo — showing OTP step)
  const showOtp = false

  return (
    <div className="min-h-screen bg-[#F8F7FA] flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7367F0] to-[#5E50E2] flex items-center justify-center shadow-lg mb-3">
          <span className="text-white font-bold text-lg">L</span>
        </div>
        <h1 className="text-xl font-bold text-[#4B465C]">LexEd</h1>
        <p className="text-[#A8AAAE] text-xs mt-0.5">Sharma Law Academy</p>
      </div>

      <div className="w-full max-w-lg bg-white rounded-xl border border-[#DBDADE] shadow-sm p-8">
        {!showOtp ? (
          <>
            <h2 className="text-xl font-semibold text-[#4B465C] mb-1">Create your account</h2>
            <p className="text-[#A8AAAE] text-sm mb-6">Join thousands of law students on LexEd</p>

            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-[#4B465C] mb-1.5">Full Name</label>
                <input
                  type="text"
                  placeholder="Arjun Sharma"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DBDADE] text-[#4B465C] text-sm placeholder:text-[#A8AAAE] focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#4B465C] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DBDADE] text-[#4B465C] text-sm placeholder:text-[#A8AAAE] focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4B465C] mb-1.5">Phone Number</label>
                  <div className="flex">
                    <span className="px-3 py-2.5 bg-[#F8F7FA] border border-r-0 border-[#DBDADE] rounded-l-lg text-sm text-[#A8AAAE]">+91</span>
                    <input
                      type="tel"
                      placeholder="9876543210"
                      className="flex-1 px-3.5 py-2.5 rounded-r-lg border border-[#DBDADE] text-[#4B465C] text-sm placeholder:text-[#A8AAAE] focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition"
                    />
                  </div>
                </div>
              </div>

              {/* City/State */}
              <div>
                <label className="block text-sm font-medium text-[#4B465C] mb-1.5">City / State</label>
                <select className="w-full px-3.5 py-2.5 rounded-lg border border-[#DBDADE] text-[#4B465C] text-sm focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition bg-white">
                  <option value="">Select your city / state</option>
                  <option>Delhi</option>
                  <option>Mumbai, Maharashtra</option>
                  <option>Bengaluru, Karnataka</option>
                  <option>Chennai, Tamil Nadu</option>
                  <option>Kolkata, West Bengal</option>
                  <option>Hyderabad, Telangana</option>
                  <option>Pune, Maharashtra</option>
                  <option>Ahmedabad, Gujarat</option>
                  <option>Jaipur, Rajasthan</option>
                </select>
              </div>

              {/* Password + Confirm */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#4B465C] mb-1.5">Password</label>
                  <input
                    type="password"
                    placeholder="············"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DBDADE] text-[#4B465C] text-sm placeholder:text-[#A8AAAE] focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4B465C] mb-1.5">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="············"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DBDADE] text-[#4B465C] text-sm placeholder:text-[#A8AAAE] focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition"
                  />
                </div>
              </div>

              {/* Password strength */}
              <div>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full ${i <= 2 ? 'bg-[#FF9F43]' : 'bg-[#DBDADE]'}`} />
                  ))}
                </div>
                <p className="text-xs text-[#FF9F43] mt-1">Moderate — add special characters for stronger password</p>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  defaultChecked
                  className="mt-0.5 w-4 h-4 rounded border-[#DBDADE] accent-[#7367F0]"
                />
                <label htmlFor="terms" className="text-sm text-[#4B465C]">
                  I agree to the{' '}
                  <a href="#" className="text-[#7367F0] hover:underline">Terms of Service</a>
                  {' & '}
                  <a href="#" className="text-[#7367F0] hover:underline">Privacy Policy</a>
                </label>
              </div>

              <button className="w-full py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-semibold rounded-lg transition shadow-sm text-sm">
                Create Account
              </button>
            </div>

            <p className="text-center text-sm text-[#A8AAAE] mt-6">
              Already have an account?{' '}
              <a href="/student/login" className="text-[#7367F0] font-medium hover:underline">Sign In</a>
            </p>
          </>
        ) : (
          /* OTP Verification Step */
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#7367F0]/10 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#7367F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#4B465C] mb-1">Verify Your Account</h2>
            <p className="text-[#A8AAAE] text-sm mb-2">
              We've sent a 4-digit OTP to{' '}
              <span className="text-[#4B465C] font-medium">arjun@gmail.com</span>
            </p>
            <p className="text-xs text-[#A8AAAE] mb-8">Didn't receive? Check spam or <a href="#" className="text-[#7367F0]">Resend OTP</a></p>

            <div className="flex gap-3 justify-center mb-6">
              {[0,1,2,3].map(i => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  defaultValue={i < 2 ? '7' : ''}
                  className="w-14 h-14 text-center text-xl font-bold rounded-lg border-2 border-[#DBDADE] text-[#4B465C] focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition"
                />
              ))}
            </div>

            <button className="w-full py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-semibold rounded-lg transition shadow-sm text-sm">
              Verify & Continue
            </button>
            <p className="text-xs text-[#A8AAAE] mt-4">OTP expires in <span className="text-[#EA5455] font-medium">09:47</span></p>
          </div>
        )}
      </div>

      <p className="text-center text-xs text-[#A8AAAE] mt-6">
        Powered by <span className="text-[#7367F0] font-semibold">LexEd</span>
      </p>

      {/* OTP section preview for design purposes */}
      <div className="w-full max-w-lg mt-8 bg-white rounded-xl border border-[#DBDADE] shadow-sm p-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#7367F0]/10 rounded-full px-3 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#7367F0]" />
            <span className="text-xs font-medium text-[#7367F0]">Post-signup step</span>
          </div>
          <div className="w-16 h-16 rounded-full bg-[#7367F0]/10 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#7367F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-[#4B465C] mb-1">Verify Your Account</h2>
          <p className="text-[#A8AAAE] text-sm mb-2">
            We've sent a 4-digit OTP to{' '}
            <span className="text-[#4B465C] font-medium">arjun@gmail.com</span>
          </p>
          <p className="text-xs text-[#A8AAAE] mb-8">Didn't receive? Check spam or <a href="#" className="text-[#7367F0]">Resend OTP</a></p>
          <div className="flex gap-3 justify-center mb-6">
            {['7','3','',''].map((v, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                defaultValue={v}
                className={`w-14 h-14 text-center text-xl font-bold rounded-lg border-2 text-[#4B465C] focus:outline-none transition ${v ? 'border-[#7367F0] bg-[#7367F0]/5' : 'border-[#DBDADE]'}`}
              />
            ))}
          </div>
          <button className="w-full py-2.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-semibold rounded-lg transition shadow-sm text-sm">
            Verify & Continue
          </button>
          <p className="text-xs text-[#A8AAAE] mt-4">OTP expires in <span className="text-[#EA5455] font-medium">09:47</span></p>
        </div>
      </div>
    </div>
  )
}
