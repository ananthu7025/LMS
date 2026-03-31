'use client'

export default function StudentLoginPage() {
  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: '#f8f7fa' }}>
      {/* Left decorative panel */}
      <div className="d-none d-lg-flex w-50 position-relative overflow-hidden flex-column align-items-center justify-content-center p-5" style={{ background: 'linear-gradient(135deg, #7367F0, #5E50E2, #3B1FA8)' }}>
        {/* Abstract circles */}
        <div className="position-absolute rounded-circle" style={{ top: -80, right: -80, width: 288, height: 288, background: 'rgba(255,255,255,0.1)' }}></div>
        <div className="position-absolute rounded-circle" style={{ bottom: -60, left: -60, width: 224, height: 224, background: 'rgba(255,255,255,0.1)' }}></div>
        <div className="position-absolute rounded-circle" style={{ top: '50%', left: -100, width: 256, height: 256, background: 'rgba(255,255,255,0.05)' }}></div>

        <div className="position-relative text-center" style={{ zIndex: 10 }}>
          <div className="d-flex align-items-center justify-content-center rounded-4 mb-4 mx-auto shadow-lg" style={{ width: 128, height: 128, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
            <i className="ti tabler-scale text-white" style={{ fontSize: 64 }}></i>
          </div>
          <div className="text-center">
            <h2 className="text-white fw-bold fs-3 lh-sm">Master Law.<br />Shape Justice.</h2>
            <p className="mt-3 mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 300 }}>
              Access 500+ curated law courses, AI-powered tutoring, and live classes from top legal faculty.
            </p>
          </div>
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

      {/* Right login panel */}
      <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center px-4 py-5">
        <div className="w-100" style={{ maxWidth: 440 }}>
          {/* Institute branding */}
          <div className="d-flex flex-column align-items-center mb-5">
            <div className="avatar avatar-lg rounded-3 bg-primary shadow-lg mb-3 d-flex align-items-center justify-content-center">
              <span className="text-white fw-bold fs-4">S</span>
            </div>
            <h4 className="fw-bold text-heading mb-0">Sharma Law Academy</h4>
            <p className="text-body-secondary small mt-1 mb-0">Student Learning Portal</p>
          </div>

          {/* Card */}
          <div className="card shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h5 className="fw-bold text-heading mb-1">Welcome back! 👋</h5>
              <p className="text-body-secondary small mb-4">Please sign in to your student account</p>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label small fw-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="student@example.com"
                  defaultValue="arjun.sharma@gmail.com"
                  className="form-control shadow-none"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <label className="form-label small fw-medium mb-0">Password</label>
                  <a href="#" className="extra-small text-primary text-decoration-none">Forgot Password?</a>
                </div>
                <div className="input-group input-group-merge">
                  <input
                    type="password"
                    placeholder="············"
                    defaultValue="password"
                    className="form-control shadow-none"
                  />
                  <span className="input-group-text cursor-pointer">
                    <i className="ti tabler-eye text-body-secondary"></i>
                  </span>
                </div>
              </div>

              {/* Remember me */}
              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="remember" defaultChecked />
                <label className="form-check-label small" htmlFor="remember">Remember me</label>
              </div>

              {/* Login button */}
              <button className="btn btn-primary w-100 py-2 fw-bold">
                Sign In
              </button>

              <p className="text-center small text-body-secondary mt-4 mb-0">
                New student?{' '}
                <a href="/student/signup" className="text-primary fw-medium text-decoration-none">Create Account</a>
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center extra-small text-body-secondary mt-4 mb-0">
            Powered by <span className="text-primary fw-bold">LexEd</span>
          </p>
        </div>
      </div>
    </div>
  )
}
