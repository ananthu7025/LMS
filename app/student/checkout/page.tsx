'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

// Toggle this to show success state
const showSuccess = false

export default function CheckoutPage() {
  if (showSuccess) {
    return (
      <StudentLayout activePath="">
        <div className="mx-auto text-center py-5" style={{ maxWidth: 520 }}>
          <div className="avatar avatar-xl mx-auto mb-4">
            <span className="avatar-initial rounded-circle bg-label-success">
              <i className="ti tabler-check fs-1"></i>
            </span>
          </div>
          <h4 className="fw-bold text-heading mb-2">Payment Successful!</h4>
          <p className="text-body-secondary mb-2">You&apos;ve successfully enrolled in</p>
          <p className="fw-bold text-primary fs-5 mb-4">Criminal Law &amp; Procedure (IPC, CrPC)</p>
          <div className="d-flex gap-3 justify-content-center">
            <a href="/student/learn/1" className="btn btn-primary px-4">Go to Course</a>
            <button className="btn btn-outline-secondary px-4">Download Receipt</button>
          </div>
        </div>
      </StudentLayout>
    )
  }

  return (
    <StudentLayout activePath="">
      <div className="mx-auto" style={{ maxWidth: 960 }}>
        <h4 className="fw-bold text-heading mb-4">Checkout</h4>

        <div className="row g-4">
          {/* Left — Order Details */}
          <div className="col-lg-7">
            {/* Course card */}
            <div className="card shadow-sm mb-4">
              <div className="card-body p-4">
                <h6 className="fw-bold text-heading mb-4">Order Details</h6>
                <div className="d-flex gap-3">
                  <div className="avatar avatar-lg rounded flex-shrink-0 bg-primary d-flex align-items-center justify-content-center" style={{ width: 96, height: 64 }}>
                    <i className="ti tabler-book-2 text-white fs-3"></i>
                  </div>
                  <div className="flex-grow-1">
                    <p className="fw-bold text-heading small mb-1">Criminal Law &amp; Procedure (IPC, CrPC &amp; Evidence Act)</p>
                    <p className="extra-small text-body-secondary mb-1">By Adv. Ravi Shankar · 24 lessons · 12.5 hrs</p>
                    <div className="d-flex gap-2">
                      {['Lifetime Access', 'Certificate'].map(tag => (
                        <span key={tag} className="badge bg-label-primary extra-small">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price breakdown */}
                <div className="mt-4 pt-4 border-top">
                  <div className="d-flex align-items-center justify-content-between mb-2 small">
                    <span className="text-body-secondary">Original Price</span>
                    <span className="text-heading text-decoration-line-through">₹9,999</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 small">
                    <span className="text-body-secondary">Discount (40%)</span>
                    <span className="text-success fw-medium">-₹4,000</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 small bg-label-success rounded px-3 py-2">
                    <div className="d-flex align-items-center gap-2">
                      <i className="ti tabler-check text-success"></i>
                      <span className="text-success fw-medium">SAVE20 applied</span>
                    </div>
                    <span className="text-success fw-bold">-₹1,000</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between pt-3 border-top fw-bold text-heading">
                    <span>Total Amount</span>
                    <span className="text-primary fs-5">₹4,999</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon */}
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h6 className="fw-bold text-heading mb-3">Have a Coupon?</h6>
                <div className="d-flex gap-2">
                  <input
                    type="text"
                    defaultValue="SAVE20"
                    placeholder="Enter coupon code"
                    className="form-control shadow-none"
                    style={{ borderColor: 'var(--bs-success)' }}
                  />
                  <button className="btn btn-success px-4 fw-bold small">
                    Applied ✓
                  </button>
                </div>
                <p className="extra-small text-success mt-2 fw-medium mb-0">SAVE20 applied — ₹1,000 off ✓</p>
              </div>
            </div>
          </div>

          {/* Right — Payment */}
          <div className="col-lg-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h6 className="fw-bold text-heading mb-4">Payment Method</h6>

                <div className="d-flex flex-column gap-3">
                  {[
                    { id: 'upi', label: 'UPI', desc: 'GPay, PhonePe, Paytm', icon: 'ti tabler-device-mobile', selected: true },
                    { id: 'card', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, RuPay', icon: 'ti tabler-credit-card', selected: false },
                    { id: 'netbanking', label: 'Net Banking', desc: 'All major banks', icon: 'ti tabler-building-bank', selected: false },
                    { id: 'wallet', label: 'Wallet', desc: 'Paytm, Amazon Pay', icon: 'ti tabler-wallet', selected: false },
                  ].map(method => (
                    <label
                      key={method.id}
                      className={`d-flex align-items-center gap-3 p-3 rounded border cursor-pointer ${
                        method.selected
                          ? 'border-primary bg-label-primary'
                          : 'border-light'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked={method.selected}
                        className="form-check-input"
                      />
                      <div className="avatar avatar-xs rounded bg-label-primary d-flex align-items-center justify-content-center flex-shrink-0">
                        <i className={`${method.icon} extra-small`}></i>
                      </div>
                      <div className="flex-grow-1">
                        <p className="small fw-bold text-heading mb-0">{method.label}</p>
                        <p className="extra-small text-body-secondary mb-0">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {/* UPI input shown when UPI selected */}
                <div className="mt-4 pt-4 border-top">
                  <label className="form-label small fw-medium">UPI ID</label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    className="form-control shadow-none"
                  />
                </div>

                {/* Summary */}
                <div className="mt-4 pt-4 border-top">
                  <div className="d-flex justify-content-between fs-5 fw-bold text-heading mb-4">
                    <span>Pay</span>
                    <span className="text-primary">₹4,999</span>
                  </div>
                  <button className="btn btn-primary w-100 py-3 fw-bold">
                    Pay Now — ₹4,999
                  </button>
                  <p className="text-center extra-small text-body-secondary mt-3 mb-0 d-flex align-items-center justify-content-center gap-1">
                    <i className="ti tabler-lock"></i>
                    Secured by Razorpay · 256-bit SSL encrypted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post-payment success preview */}
        <div className="card shadow-sm mt-5">
          <div className="card-body p-5 text-center">
            <div className="d-inline-flex align-items-center gap-2 bg-label-success rounded-pill px-3 py-1 mb-4">
              <span className="rounded-circle bg-success d-inline-block" style={{ width: 8, height: 8 }}></span>
              <span className="extra-small fw-medium text-success">Post-payment success state</span>
            </div>
            <div className="avatar avatar-xl mx-auto mb-4">
              <span className="avatar-initial rounded-circle bg-label-success">
                <i className="ti tabler-check fs-1"></i>
              </span>
            </div>
            <h4 className="fw-bold text-heading mb-2">Payment Successful!</h4>
            <p className="text-body-secondary mb-1">You&apos;ve successfully enrolled in</p>
            <p className="fw-bold text-primary fs-5 mb-1">Criminal Law &amp; Procedure (IPC, CrPC)</p>
            <p className="extra-small text-body-secondary mb-4">Transaction ID: TXN2025031401234 · ₹4,999 paid via UPI</p>
            <div className="d-flex gap-3 justify-content-center">
              <a href="/student/learn/1" className="btn btn-primary px-4">
                Go to Course
              </a>
              <button className="btn btn-outline-secondary px-4 d-flex align-items-center gap-2">
                <i className="ti tabler-download small"></i>
                Download Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}
