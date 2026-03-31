'use client'

export default function StudentSignupPage() {
  const showOtp = false

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: '#f8f7fa' }}>
      {/* Left decorative panel */}
      <div className="d-none d-lg-flex w-50 position-relative overflow-hidden flex-column align-items-center justify-content-center p-5" style={{ background: 'linear-gradient(135deg, #7367F0, #5E50E2, #3B1FA8)' }}>
        {/* Abstract circles */}
        <div className="position-absolute rounded-circle" style={{ top: -80, right: -80, width: 288, height: 288, background: 'rgba(255,255,255,0.1)' }}></div>
        <div className="position-absolute rounded-circle" style={{ bottom: -60, left: -60, width: 224, height: 224, background: 'rgba(255,255,255,0.1)' }}></div>

        <div className="position-relative text-center" style={{ zIndex: 10 }}>
          <div className="d-flex align-items-center justify-content-center rounded-4 mb-4 mx-auto shadow-lg" style={{ width: 128, height: 128, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
            <i className="ti tabler-scale text-white" style={{ fontSize: 64 }}></i>
          </div>
          <h2 className="text-white fw-bold fs-3 lh-sm">Join the Legal<br />Community.</h2>
          <p className="mt-3 mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 300 }}>
            Access 500+ curated law courses, AI-powered tutoring, and live classes from top legal faculty.
          </p>
          <div className="d-flex gap-5 justify-content-center mt-4">
            {[['500+', 'Courses'], ['50K+', 'Students'], ['200+', 'Faculty']].map(([num, label]) => (
              <div key={label} className="text-center">
                <p className="text-white fs-4 fw-bold mb-0">{num}</p>
                <p className="extra-small mt-1 mb-0" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="position-absolute bottom-0 start-0 end-0 text-center pb-3">
          <p className="extra-small mb-0" style={{ color: 'rgba(255,255,255,0.5)' }}>Powered by LexEd Platform</p>
        </div>
      </div>

      {/* Right signup panel */}
      <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center px-4 py-5">
        <div className="w-100" style={{ maxWidth: 520 }}>
          {/* Institute branding */}
          <div className="d-flex flex-column align-items-center mb-5">
            <div className="avatar avatar-lg rounded-3 bg-primary shadow-lg mb-3 d-flex align-items-center justify-content-center">
              <span className="text-white fw-bold fs-4">L</span>
            </div>
            <h4 className="fw-bold text-heading mb-0">LexEd</h4>
            <p className="text-body-secondary extra-small mt-1 mb-0">Sharma Law Academy</p>
          </div>

          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">
              {!showOtp ? (
                <>
                  <h5 className="fw-bold text-heading mb-1">Create your account</h5>
                  <p className="text-body-secondary small mb-4">Join thousands of law students on LexEd</p>

                  {/* Full Name */}
                  <div className="mb-3">
                    <label className="form-label small fw-medium">Full Name</label>
                    <input type="text" placeholder="Arjun Sharma" className="form-control shadow-none" />
                  </div>

                  {/* Email + Phone */}
                  <div className="row g-3 mb-3">
                    <div className="col-sm-6">
                      <label className="form-label small fw-medium">Email Address</label>
                      <input type="email" placeholder="you@example.com" className="form-control shadow-none" />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label small fw-medium">Phone Number</label>
                      <div className="input-group">
                        <span className="input-group-text small">+91</span>
                        <input type="tel" placeholder="9876543210" className="form-control shadow-none" />
                      </div>
                    </div>
                  </div>

                  {/* City/State */}
                  <div className="mb-3">
                    <label className="form-label small fw-medium">City / State</label>
                    <select className="form-select shadow-none">
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
                  <div className="row g-3 mb-3">
                    <div className="col-sm-6">
                      <label className="form-label small fw-medium">Password</label>
                      <input type="password" placeholder="············" className="form-control shadow-none" />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label small fw-medium">Confirm Password</label>
                      <input type="password" placeholder="············" className="form-control shadow-none" />
                    </div>
                  </div>

                  {/* Password strength */}
                  <div className="mb-3">
                    <div className="d-flex gap-1 mt-1">
                      {[1,2,3,4].map(i => (
                        <div key={i} className={`flex-grow-1 rounded-pill ${i <= 2 ? 'bg-warning' : 'bg-light'}`} style={{ height: 4 }}></div>
                      ))}
                    </div>
                    <p className="extra-small text-warning mt-1 mb-0">Moderate — add special characters for stronger password</p>
                  </div>

                  {/* Terms */}
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="terms" defaultChecked />
                    <label className="form-check-label small" htmlFor="terms">
                      I agree to the{' '}
                      <a href="#" className="text-primary text-decoration-none">Terms of Service</a>
                      {' & '}
                      <a href="#" className="text-primary text-decoration-none">Privacy Policy</a>
                    </label>
                  </div>

                  <button className="btn btn-primary w-100 py-2 fw-bold">
                    Create Account
                  </button>

                  <p className="text-center small text-body-secondary mt-4 mb-0">
                    Already have an account?{' '}
                    <a href="/student/login" className="text-primary fw-medium text-decoration-none">Sign In</a>
                  </p>
                </>
              ) : (
                /* OTP Verification Step */
                <div className="text-center">
                  <div className="avatar avatar-lg mx-auto mb-4">
                    <span className="avatar-initial rounded-circle bg-label-primary">
                      <i className="ti tabler-lock fs-3"></i>
                    </span>
                  </div>
                  <h5 className="fw-bold text-heading mb-1">Verify Your Account</h5>
                  <p className="text-body-secondary small mb-1">
                    We&apos;ve sent a 4-digit OTP to{' '}
                    <span className="text-heading fw-medium">arjun@gmail.com</span>
                  </p>
                  <p className="extra-small text-body-secondary mb-4">
                    Didn&apos;t receive? Check spam or <a href="#" className="text-primary text-decoration-none">Resend OTP</a>
                  </p>

                  <div className="d-flex gap-3 justify-content-center mb-4">
                    {[0,1,2,3].map(i => (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        defaultValue={i < 2 ? '7' : ''}
                        className="form-control text-center fw-bold fs-4 shadow-none"
                        style={{ width: 56, height: 56 }}
                      />
                    ))}
                  </div>

                  <button className="btn btn-primary w-100 py-2 fw-bold">
                    Verify &amp; Continue
                  </button>
                  <p className="extra-small text-body-secondary mt-3 mb-0">
                    OTP expires in <span className="text-danger fw-medium">09:47</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="text-center extra-small text-body-secondary mt-4 mb-0">
            Powered by <span className="text-primary fw-bold">LexEd</span>
          </p>
        </div>
      </div>
    </div>
  )
}
