'use client';
import { useState } from 'react';

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fff' }}>
      {/* Left illustration panel */}
      <div style={{
        flex: 1, background: 'linear-gradient(135deg, #7367F0 0%, #9e95f5 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 48, position: 'relative', overflow: 'hidden'
      }} className="hidden-mobile">
        <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ textAlign: 'center', color: '#fff', zIndex: 2 }}>
          <div style={{ fontSize: 80, marginBottom: 24 }}>⚖️</div>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>LexEd Platform</h2>
          <p style={{ fontSize: 16, opacity: 0.85, maxWidth: 360, lineHeight: 1.7 }}>
            The complete white-label LMS for law coaching institutes. Manage courses, students, and practice labs — all in one place.
          </p>
          <div style={{ display: 'flex', gap: 32, marginTop: 40, justifyContent: 'center' }}>
            {[['250+', 'Institutes'], ['18K+', 'Students'], ['99.9%', 'Uptime']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{num}</div>
                <div style={{ fontSize: 13, opacity: 0.75 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right login card */}
      <div style={{ width: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, background: '#fff' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36 }}>
          <span style={{ fontSize: 28 }}>⚖️</span>
          <span style={{ fontSize: 24, fontWeight: 800, color: 'var(--primary)' }}>LexEd</span>
        </div>

        <div style={{ width: '100%', maxWidth: 380 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>Welcome back! 👋🏻</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 28, fontSize: 14 }}>Sign in to your Super Admin account</p>

          <div style={{ marginBottom: 18 }}>
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" defaultValue="superadmin@lexed.in" placeholder="Enter your email" />
          </div>

          <div style={{ marginBottom: 8 }}>
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input className="form-input" type={showPass ? 'text' : 'password'} defaultValue="••••••••" placeholder="Enter your password" style={{ paddingRight: 44 }} />
              <button onClick={() => setShowPass(p => !p)} style={{
                position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 16
              }}>{showPass ? '🙈' : '👁️'}</button>
            </div>
          </div>

          <div style={{ textAlign: 'right', marginBottom: 24 }}>
            <a href="/forgot-password" style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 500 }}>Forgot password?</a>
          </div>

          <a href="/super-admin/dashboard">
            <button className="btn-primary" style={{ width: '100%', padding: '12px', fontSize: 15, marginBottom: 20, borderRadius: 8 }}>
              Sign In
            </button>
          </a>

          <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)' }}>
            Institute Admin?{' '}
            <a href="/admin/dashboard" style={{ color: 'var(--primary)', fontWeight: 600 }}>Sign in here</a>
          </div>

          <div style={{
            marginTop: 32, padding: '12px 16px', background: 'var(--primary-light)',
            borderRadius: 8, fontSize: 13, color: 'var(--primary)'
          }}>
            <strong>Demo:</strong> superadmin@lexed.in / admin123
          </div>
        </div>
      </div>
    </div>
  );
}
