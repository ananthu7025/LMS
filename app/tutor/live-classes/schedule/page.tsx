'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

export default function TutorScheduleClassPage() {
  return (
    <TutorLayout active="/tutor/live-classes/schedule" title="Schedule Live Class" breadcrumb="Home / Live Classes / Schedule">
      <div className="row">
        <div className="col-lg-8 col-xl-7">
          <div className="card">
            <div className="card-header d-flex align-items-center gap-2 py-3 px-4">
              <i className="ti tabler-calendar-plus text-primary"></i>
              <h6 className="mb-0 fw-bold">Schedule a Class</h6>
            </div>
            <div className="card-body p-4">
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-uppercase text-body-secondary">Course</label>
                  <select className="form-select">
                    <option>Criminal Law Fundamentals</option>
                    <option>Constitutional Law Mastery</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-uppercase text-body-secondary">Module / Section</label>
                  <select className="form-select">
                    <option>Module 2: Offences Against Person</option>
                    <option>Module 1: Introduction</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold text-uppercase text-body-secondary">Class Topic *</label>
                <input className="form-control" placeholder="e.g. Section 302 & Murder Case Studies" />
              </div>

              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <label className="form-label small fw-bold text-uppercase text-body-secondary">Date *</label>
                  <input className="form-control" type="date" defaultValue="2025-04-01" />
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-bold text-uppercase text-body-secondary">Start Time</label>
                  <input className="form-control" type="time" defaultValue="10:00" />
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-bold text-uppercase text-body-secondary">Duration</label>
                  <select className="form-select">
                    <option>60 min</option>
                    <option>90 min</option>
                    <option>120 min</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label small fw-bold text-uppercase text-body-secondary mb-3 d-block">Platform</label>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <input type="radio" className="btn-check" name="platform" id="platform-link" defaultChecked />
                    <label className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2 py-3" htmlFor="platform-link">
                      <i className="ti tabler-link fs-4"></i>
                      <span>Meeting Link</span>
                    </label>
                  </div>
                  <div className="col-md-6">
                    <input type="radio" className="btn-check" name="platform" id="platform-built-in" />
                    <label className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 py-3" htmlFor="platform-built-in">
                      <i className="ti tabler-device-laptop fs-4"></i>
                      <span>Built-in Room</span>
                    </label>
                  </div>
                </div>
                <div className="input-group input-group-merge">
                  <span className="input-group-text"><i className="ti tabler-link"></i></span>
                  <input className="form-control" placeholder="https://zoom.us/j/..." />
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded-3 mb-4">
                <div>
                  <div className="fw-bold text-heading small">Notify Students</div>
                  <small className="text-body-secondary small">Email + in-app notification to 342 enrolled students</small>
                </div>
                <div className="form-check form-switch mb-0">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                </div>
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-primary px-4">
                  <i className="ti tabler-calendar-event me-2"></i>Save & Schedule
                </button>
                <a href="/tutor/dashboard" className="btn btn-outline-secondary px-4">Cancel</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}
