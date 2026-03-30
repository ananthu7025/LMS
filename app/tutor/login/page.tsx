'use client';
import { useState } from 'react';

export default function TutorLoginPage() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#fff' }}>
      <div style={{ flex: 1, background: 'linear-gradient(135deg, #2F3349 0%, #1a1f35 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(115,103,240,0.15)' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 250, height: 250, borderRadius: '50%', background: 'rgba(0,207,232,0.08)' }} />
        <div style={{ textAlign: 'center', color: '#fff', zIndex: 2 }}>
          <div style={{ width: 72, height: 72, borderRadius: 16, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 28 }}>🏛️</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Sharma Law Academy</h2>
          <p style={{ fontSize: 14, opacity: 0.65, marginBottom: 32 }}>sharma-law.lexed.in</p>
          <div style={{ padding: '20px 28px', background: 'rgba(255,255,255,0.06)', borderRadius: 12, textAlign: 'left', maxWidth: 340 }}>
            <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 10 }}>👨‍🏫 Tutor Portal — access your:</div>
            {['Course curriculum builder', 'Student doubts & queries', 'Assignment review board', 'Live class scheduler'].map(item => (
              <div key={item} style={{ fontSize: 13, opacity: 0.7, marginBottom: 6 }}>• {item}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ width: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36 }}>
          <span style={{ fontSize: 26 }}>⚖️</span>
          <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--primary)' }}>LexEd</span>
          <span style={{ fontSize: 12, background: '#f3f3f5', color: 'var(--text-muted)', borderRadius: 4, padding: '2px 8px', fontWeight: 600 }}>TUTOR</span>
        </div>
        <div style={{ width: '100%', maxWidth: 380 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Welcome back! 👋</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 28, fontSize: 14 }}>Sign in to your Tutor account</p>
          <div style={{ marginBottom: 18 }}>
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" defaultValue="anil@sharmalaw.in" />
          </div>
          <div style={{ marginBottom: 8 }}>
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input className="form-input" type={showPass ? 'text' : 'password'} defaultValue="••••••••" style={{ paddingRight: 44 }} />
              <button onClick={() => setShowPass(p => !p)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 16 }}>{showPass ? '🙈' : '👁️'}</button>
            </div>
          </div>
          <div style={{ textAlign: 'right', marginBottom: 24 }}>
            <a href="#" style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 500 }}>Forgot password?</a>
          </div>
          <a href="/tutor/dashboard">
            <button className="btn-primary" style={{ width: '100%', padding: 12, fontSize: 15, marginBottom: 14 }}>Sign In</button>
          </a>
          <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-muted)' }}>
            First time? <a href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>Set up your account →</a>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 20, fontSize: 12, color: 'var(--text-muted)' }}>Powered by LexEd</div>
      </div>
    </div>
  );
}
