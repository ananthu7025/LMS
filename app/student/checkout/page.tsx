'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

// Toggle this to show success state
const showSuccess = false

export default function CheckoutPage() {
  if (showSuccess) {
    return (
      <StudentLayout activePath="">
        <div className="max-w-lg mx-auto text-center py-16">
          <div className="w-20 h-20 rounded-full bg-[#28C76F]/15 flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#28C76F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#4B465C] mb-2">Payment Successful!</h1>
          <p className="text-[#A8AAAE] mb-4">You've successfully enrolled in</p>
          <p className="font-semibold text-[#7367F0] text-lg mb-6">Criminal Law & Procedure (IPC, CrPC)</p>
          <div className="flex gap-3 justify-center">
            <a href="/student/learn/1" className="px-6 py-2.5 bg-[#7367F0] text-white font-semibold rounded-lg hover:bg-[#5E50E2] transition">Go to Course</a>
            <button className="px-6 py-2.5 border border-[#DBDADE] text-[#4B465C] font-semibold rounded-lg hover:bg-[#F8F7FA] transition">Download Receipt</button>
          </div>
        </div>
      </StudentLayout>
    )
  }

  return (
    <StudentLayout activePath="">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-[#4B465C] mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Left — Order Details */}
          <div className="lg:col-span-3 space-y-4">
            {/* Course card */}
            <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-5">
              <h2 className="font-semibold text-[#4B465C] mb-4">Order Details</h2>
              <div className="flex gap-4">
                <div className="w-24 h-16 rounded-lg bg-gradient-to-br from-[#7367F0] to-[#9E95F5] flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#4B465C] text-sm leading-snug">Criminal Law & Procedure (IPC, CrPC & Evidence Act)</p>
                  <p className="text-xs text-[#A8AAAE] mt-1">By Adv. Ravi Shankar · 24 lessons · 12.5 hrs</p>
                  <div className="flex gap-1 mt-1">
                    {['Lifetime Access', 'Certificate'].map(tag => (
                      <span key={tag} className="text-[10px] bg-[#7367F0]/10 text-[#7367F0] px-1.5 py-0.5 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="mt-5 pt-4 border-t border-[#DBDADE] space-y-2.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A8AAAE]">Original Price</span>
                  <span className="text-[#4B465C] line-through">₹9,999</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A8AAAE]">Discount (40%)</span>
                  <span className="text-[#28C76F] font-medium">-₹4,000</span>
                </div>
                <div className="flex items-center justify-between text-sm bg-[#28C76F]/5 rounded-lg px-3 py-2 border border-[#28C76F]/20">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#28C76F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#28C76F] font-medium">SAVE20 applied</span>
                  </div>
                  <span className="text-[#28C76F] font-bold">-₹1,000</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-[#4B465C] pt-2 border-t border-[#DBDADE]">
                  <span>Total Amount</span>
                  <span className="text-[#7367F0]">₹4,999</span>
                </div>
              </div>
            </div>

            {/* Coupon */}
            <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-5">
              <h2 className="font-semibold text-[#4B465C] mb-3">Have a Coupon?</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  defaultValue="SAVE20"
                  placeholder="Enter coupon code"
                  className="flex-1 px-3.5 py-2.5 rounded-lg border border-[#28C76F] text-[#4B465C] text-sm focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition"
                />
                <button className="px-5 py-2.5 bg-[#28C76F] text-white font-semibold text-sm rounded-lg hover:bg-[#24B263] transition">
                  Applied ✓
                </button>
              </div>
              <p className="text-xs text-[#28C76F] mt-2 font-medium">SAVE20 applied — ₹1,000 off ✓</p>
            </div>
          </div>

          {/* Right — Payment */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-5">
              <h2 className="font-semibold text-[#4B465C] mb-4">Payment Method</h2>

              <div className="space-y-3">
                {[
                  { id: 'upi', label: 'UPI', desc: 'GPay, PhonePe, Paytm', icon: '📱', selected: true },
                  { id: 'card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay', icon: '💳', selected: false },
                  { id: 'netbanking', label: 'Net Banking', desc: 'All major banks', icon: '🏦', selected: false },
                  { id: 'wallet', label: 'Wallet', desc: 'Paytm, Amazon Pay', icon: '👛', selected: false },
                ].map(method => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition ${
                      method.selected
                        ? 'border-[#7367F0] bg-[#7367F0]/5'
                        : 'border-[#DBDADE] hover:border-[#7367F0]/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked={method.selected}
                      className="accent-[#7367F0]"
                    />
                    <span className="text-xl">{method.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#4B465C]">{method.label}</p>
                      <p className="text-xs text-[#A8AAAE]">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>

              {/* UPI input shown when UPI selected */}
              <div className="mt-4 pt-4 border-t border-[#DBDADE]">
                <label className="block text-sm font-medium text-[#4B465C] mb-1.5">UPI ID</label>
                <input
                  type="text"
                  placeholder="yourname@upi"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DBDADE] text-[#4B465C] text-sm placeholder:text-[#A8AAAE] focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition"
                />
              </div>

              {/* Summary */}
              <div className="mt-4 pt-4 border-t border-[#DBDADE]">
                <div className="flex justify-between text-lg font-bold text-[#4B465C] mb-4">
                  <span>Pay</span>
                  <span className="text-[#7367F0]">₹4,999</span>
                </div>
                <button className="w-full py-3.5 bg-[#7367F0] hover:bg-[#5E50E2] text-white font-bold rounded-lg transition shadow-sm text-base">
                  Pay Now — ₹4,999
                </button>
                <p className="text-center text-xs text-[#A8AAAE] mt-3">
                  🔒 Secured by Razorpay · 256-bit SSL encrypted
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Post-payment success preview */}
        <div className="mt-10 bg-white rounded-xl border border-[#DBDADE] shadow-sm p-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#28C76F]/10 rounded-full px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#28C76F]" />
            <span className="text-xs font-medium text-[#28C76F]">Post-payment success state</span>
          </div>
          <div className="w-20 h-20 rounded-full bg-[#28C76F]/15 flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#28C76F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#4B465C] mb-2">Payment Successful!</h2>
          <p className="text-[#A8AAAE] mb-2">You've successfully enrolled in</p>
          <p className="font-semibold text-[#7367F0] text-lg mb-1">Criminal Law & Procedure (IPC, CrPC)</p>
          <p className="text-xs text-[#A8AAAE] mb-6">Transaction ID: TXN2025031401234 · ₹4,999 paid via UPI</p>
          <div className="flex gap-3 justify-center">
            <a href="/student/learn/1" className="px-6 py-2.5 bg-[#7367F0] text-white font-semibold rounded-lg hover:bg-[#5E50E2] transition">
              Go to Course
            </a>
            <button className="px-6 py-2.5 border border-[#DBDADE] text-[#4B465C] font-semibold rounded-lg hover:bg-[#F8F7FA] transition flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
