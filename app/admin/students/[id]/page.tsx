'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function StudentProfilePage() {
  return (
    <AdminLayout active="/admin/students" title="Student Profile" breadcrumb="Home / Students / Arjun Mehta">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Header */}
          <div className="card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 68, height: 68, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 24, fontWeight: 700 }}>AM</div>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Arjun Mehta</h2>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>arjun.mehta@gmail.com · +91 98765 43210</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>📍 New Delhi · Joined: March 1, 2025</div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                <button className="btn-outline" style={{ fontSize: 12 }}>📨 Message</button>
                <button className="btn-primary" style={{ fontSize: 12 }}>＋ Enroll in Course</button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              {[['3', 'Courses Enrolled'],['68%', 'Avg Progress'],['7', 'Quizzes Taken'],['2', 'Assignments Due']].map(([v, l]) => (
                <div key={l as string} style={{ textAlign: 'center', padding: 12, background: '#fafafa', borderRadius: 8 }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--primary)' }}>{v as string}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{l as string}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enrolled Courses */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>📚 Enrolled Courses</div>
            {[['Criminal Law Fundamentals', 68, 'Mar 1', '82%'],['Constitutional Law Mastery', 45, 'Feb 20', '74%'],['CLAT 2025 Preparation', 92, 'Jan 15', '91%']].map(([name, pct, date, quiz]) => (
              <div key={name as string} style={{ display: 'flex', gap: 14, padding: '12px 0', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>📚</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 4 }}>{name as string}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="progress-bar" style={{ width: 120 }}><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{pct}%</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: 12, color: 'var(--text-muted)' }}>
                  <div>Enrolled: {date as string}</div>
                  <div>Quiz Avg: <strong>{quiz as string}</strong></div>
                </div>
              </div>
            ))}
          </div>

          {/* Activity Timeline */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 14 }}>⏱️ Activity Timeline</div>
            {[
              ['✅','Completed Lesson: Section 302 IPC — Murder', 'Today, 9:42 AM'],
              ['📝','Quiz attempt: Module 2 Quiz — Scored 18/20', 'Today, 9:18 AM'],
              ['❓','Posted a doubt: "What is the difference between 299 and 300 IPC?"', 'Yesterday, 4:30 PM'],
              ['📋','Submitted Assignment: Write a Bail Application', 'Mar 26, 11:00 AM'],
              ['🎓','Enrolled in Constitutional Law Mastery', 'Mar 20, 2:00 PM'],
              ['📚','Started Criminal Law Fundamentals', 'Mar 1, 10:00 AM'],
            ].map(([icon, text, time], i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i < 5 ? '1px solid var(--border)' : 'none' }}>
                <span style={{ fontSize: 16, marginTop: 1 }}>{icon as string}</span>
                <div>
                  <div style={{ fontSize: 13 }}>{text as string}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{time as string}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Payment History */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 14 }}>💰 Payment History</div>
            {[
              ['CLAT 2025 Preparation', '₹3,499', 'Jan 15', 'Paid'],
              ['Constitutional Law', '₹2,999', 'Feb 20', 'Paid'],
              ['Criminal Law Fund.', '₹4,499', 'Mar 1', 'Paid'],
            ].map(([course, amount, date, status]) => (
              <div key={course as string} style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{course as string}</span>
                  <span className="badge badge-success">{status as string}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-muted)' }}>
                  <span>{date as string}</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{amount as string}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Admin Notes */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>📝 Admin Notes <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 400 }}>(private)</span></div>
            <textarea className="form-input" style={{ height: 90, resize: 'none' }} defaultValue="Student is very active and high potential. Consider offering scholarship for next batch." />
            <button className="btn-primary" style={{ marginTop: 10, width: '100%', fontSize: 13 }}>Save Note</button>
          </div>

          {/* Actions */}
          <div className="card" style={{ padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>⚙️ Actions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <button className="btn-outline" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>🔑 Reset Password</button>
              <button className="btn-outline" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>📨 Send Direct Message</button>
              <button style={{ background: '#fde8e8', border: '1px solid var(--error)', color: 'var(--error)', borderRadius: 8, padding: '8px 14px', cursor: 'pointer', fontWeight: 600, fontSize: 13, textAlign: 'left', display: 'flex', alignItems: 'center', gap: 8 }}>🚫 Revoke Access</button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
