'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function StudentProfilePage() {
  return (
    <AdminLayout title="Student Profile" breadcrumb="Home / Students / Arjun Mehta">
      <div className="row g-4">
        {/* Left column */}
        <div className="col-xl-8">

          {/* Profile header */}
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center gap-4 pb-4 mb-4 border-bottom">
                <div className="avatar avatar-xl bg-primary rounded-circle">
                  <span className="avatar-initial rounded-circle fs-3">AM</span>
                </div>
                <div className="flex-grow-1">
                  <h4 className="fw-bold mb-1">Arjun Mehta</h4>
                  <div className="text-body-secondary">arjun.mehta@gmail.com · +91 98765 43210</div>
                  <div className="text-body-secondary">
                    <i className="ti tabler-map-pin me-1"></i>New Delhi · Joined: March 1, 2025
                  </div>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-sm">
                    <i className="ti tabler-mail me-1"></i>Message
                  </button>
                  <button className="btn btn-primary btn-sm">
                    <i className="ti tabler-plus me-1"></i>Enroll in Course
                  </button>
                </div>
              </div>
              <div className="row g-3">
                {[['3','Courses Enrolled'],['68%','Avg Progress'],['7','Quizzes Taken'],['2','Assignments Due']].map(([v, l]) => (
                  <div key={l as string} className="col-6 col-md-3">
                    <div className="text-center p-3 bg-light rounded">
                      <h4 className="fw-bold text-primary mb-1">{v as string}</h4>
                      <small className="text-body-secondary">{l as string}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enrolled Courses */}
          <div className="card mb-4">
            <div className="card-body">
              <h6 className="fw-bold mb-4">
                <i className="ti tabler-book me-2 text-primary"></i>Enrolled Courses
              </h6>
              {[['Criminal Law Fundamentals',68,'Mar 1','82%'],['Constitutional Law Mastery',45,'Feb 20','74%'],['CLAT 2025 Preparation',92,'Jan 15','91%']].map(([name, pct, date, quiz]) => (
                <div key={name as string} className="d-flex gap-3 py-3 border-bottom align-items-center">
                  <div className="avatar bg-label-primary rounded">
                    <span className="avatar-initial rounded"><i className="ti tabler-book"></i></span>
                  </div>
                  <div className="flex-grow-1">
                    <div className="fw-semibold mb-1">{name as string}</div>
                    <div className="d-flex align-items-center gap-2">
                      <div className="progress progress-sm flex-grow-1">
                        <div className="progress-bar bg-primary" style={{ width: `${pct}%` }}></div>
                      </div>
                      <small className="fw-semibold">{pct}%</small>
                    </div>
                  </div>
                  <div className="text-end">
                    <small className="text-body-secondary d-block">Enrolled: {date as string}</small>
                    <small>Quiz Avg: <strong>{quiz as string}</strong></small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="card">
            <div className="card-body">
              <h6 className="fw-bold mb-4">
                <i className="ti tabler-clock me-2 text-primary"></i>Activity Timeline
              </h6>
              {[
                ['tabler-check',   'Completed Lesson: Section 302 IPC — Murder',                        'Today, 9:42 AM'],
                ['tabler-notes',   'Quiz attempt: Module 2 Quiz — Scored 18/20',                        'Today, 9:18 AM'],
                ['tabler-help',    'Posted a doubt: "What is the difference between 299 and 300 IPC?"', 'Yesterday, 4:30 PM'],
                ['tabler-clipboard','Submitted Assignment: Write a Bail Application',                   'Mar 26, 11:00 AM'],
                ['tabler-school',  'Enrolled in Constitutional Law Mastery',                            'Mar 20, 2:00 PM'],
                ['tabler-book',    'Started Criminal Law Fundamentals',                                 'Mar 1, 10:00 AM'],
              ].map(([icon, text, time], i) => (
                <div key={i} className={`d-flex gap-3 py-2${i < 5 ? ' border-bottom' : ''}`}>
                  <div className="avatar avatar-sm bg-label-primary rounded-circle flex-shrink-0">
                    <span className="avatar-initial rounded-circle"><i className={`ti ${icon as string}`}></i></span>
                  </div>
                  <div>
                    <div className="small">{text as string}</div>
                    <small className="text-body-secondary">{time as string}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-xl-4">

          {/* Payment History */}
          <div className="card mb-4">
            <div className="card-body">
              <h6 className="fw-bold mb-4">
                <i className="ti tabler-currency-rupee me-2 text-primary"></i>Payment History
              </h6>
              {[
                ['CLAT 2025 Preparation','₹3,499','Jan 15','Paid'],
                ['Constitutional Law','₹2,999','Feb 20','Paid'],
                ['Criminal Law Fund.','₹4,499','Mar 1','Paid'],
              ].map(([course, amount, date, status]) => (
                <div key={course as string} className="py-2 border-bottom">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="fw-semibold small">{course as string}</span>
                    <span className="badge bg-label-success">{status as string}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small className="text-body-secondary">{date as string}</small>
                    <small className="fw-bold">{amount as string}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Notes */}
          <div className="card mb-4">
            <div className="card-body">
              <h6 className="fw-bold mb-3">
                <i className="ti tabler-notes me-2 text-primary"></i>Admin Notes
                <small className="text-body-secondary fw-normal ms-1">(private)</small>
              </h6>
              <textarea className="form-control mb-3" rows={4} defaultValue="Student is very active and high potential. Consider offering scholarship for next batch." />
              <button className="btn btn-primary w-100">Save Note</button>
            </div>
          </div>

          {/* Actions */}
          <div className="card">
            <div className="card-body">
              <h6 className="fw-bold mb-3">
                <i className="ti tabler-settings me-2 text-primary"></i>Actions
              </h6>
              <div className="d-flex flex-column gap-2">
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                  <i className="ti tabler-key"></i>Reset Password
                </button>
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                  <i className="ti tabler-mail"></i>Send Direct Message
                </button>
                <button className="btn btn-outline-danger d-flex align-items-center gap-2">
                  <i className="ti tabler-ban"></i>Revoke Access
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
