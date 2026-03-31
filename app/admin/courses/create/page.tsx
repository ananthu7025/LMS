'use client';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function CreateCoursePage() {
  return (
    <AdminLayout title="Create New Course" breadcrumb="Home / Courses / Create">
      <div className="row g-4">

        {/* Main form */}
        <div className="col-xl-8">

          {/* Basic Details */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="fw-bold mb-4">
                <i className="ti tabler-clipboard me-2 text-primary"></i>Basic Details
              </h5>
              <div className="mb-3">
                <label className="form-label">Course Title *</label>
                <input className="form-control" defaultValue="Criminal Law Fundamentals" />
              </div>
              <div className="mb-3">
                <label className="form-label">Short Description <span className="text-body-secondary fw-normal">(shown on course card)</span></label>
                <input className="form-control" defaultValue="Master the fundamentals of Criminal Law including IPC, CrPC, and landmark cases." />
              </div>
              <div className="mb-3">
                <label className="form-label">Long Description <span className="text-body-secondary fw-normal">(shown on course landing page)</span></label>
                <textarea className="form-control" rows={4} defaultValue="This comprehensive course covers all aspects of Criminal Law as tested in competitive law exams. You will learn the Indian Penal Code, Criminal Procedure Code, and study landmark Supreme Court judgments." />
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Subject Category</label>
                  <select className="form-select">
                    <option>Criminal Law</option><option>Civil Law</option><option>Constitutional Law</option>
                    <option>Evidence Law</option><option>Corporate Law</option><option>Family Law</option>
                    <option>Contract Law</option><option>Exam Prep</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Course Level</label>
                  <select className="form-select">
                    <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="fw-bold mb-4">
                <i className="ti tabler-photo me-2 text-primary"></i>Course Thumbnail
              </h5>
              <div className="border border-dashed rounded p-5 text-center" style={{ cursor: 'pointer' }}>
                <i className="ti tabler-photo text-body-secondary mb-2" style={{ fontSize: 40 }}></i>
                <div className="fw-medium mb-1">Drop image here or <span className="text-primary">browse</span></div>
                <small className="text-body-secondary">PNG or JPG · Recommended: 1280×720 · Max 5MB</small>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="fw-bold mb-4">
                <i className="ti tabler-currency-rupee me-2 text-primary"></i>Pricing
              </h5>
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="form-check form-switch mb-0">
                  <input className="form-check-input" type="checkbox" />
                </div>
                <span className="text-body-secondary">Free Course</span>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Price (₹)</label>
                  <input className="form-control" type="number" defaultValue={4999} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Discounted Price (₹) <span className="text-body-secondary fw-normal">(optional)</span></label>
                  <input className="form-control" type="number" defaultValue={3499} />
                  <small className="text-success">Students see ₹4,999 struck through</small>
                </div>
              </div>
            </div>
          </div>

          {/* Tutor Assignment */}
          <div className="card">
            <div className="card-body">
              <h5 className="fw-bold mb-4">
                <i className="ti tabler-user-check me-2 text-primary"></i>Tutor Assignment
              </h5>
              <div className="row g-3">
                <div className="col-md-8">
                  <div className="border border-primary rounded p-3 bg-label-primary">
                    <div className="fw-semibold text-primary mb-2">Assign Tutor</div>
                    <select className="form-select bg-white">
                      <option>Anil Kumar — Criminal Law</option>
                      <option>Priya Nair — Constitutional Law</option>
                      <option>Meera Sharma — Family Law</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border rounded p-3 text-center h-100 d-flex flex-column align-items-center justify-content-center" style={{ cursor: 'pointer' }}>
                    <i className="ti tabler-school text-body-secondary mb-2" style={{ fontSize: 28 }}></i>
                    <small className="text-body-secondary">No Tutor (Admin manages directly)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview + Actions */}
        <div className="col-xl-4">
          {/* Preview Card */}
          <div className="card mb-4">
            <div className="card-body">
              <h6 className="fw-bold mb-3">
                <i className="ti tabler-eye me-2 text-primary"></i>Preview Card
              </h6>
              <div className="border rounded overflow-hidden">
                <div className="d-flex align-items-center justify-content-center bg-label-primary" style={{ height: 90 }}>
                  <i className="ti tabler-book text-primary" style={{ fontSize: 36 }}></i>
                </div>
                <div className="p-3">
                  <span className="badge bg-label-primary mb-2">Criminal Law</span>
                  <div className="fw-bold small mb-1">Criminal Law Fundamentals</div>
                  <small className="text-body-secondary d-block mb-2">
                    <i className="ti tabler-user me-1"></i>Anil Kumar
                  </small>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-decoration-line-through text-body-secondary">₹4,999</small>
                    <span className="fw-bold text-primary">₹3,499</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Publish Options */}
          <div className="card">
            <div className="card-body">
              <h6 className="fw-bold mb-4">
                <i className="ti tabler-rocket me-2 text-primary"></i>Publish Options
              </h6>
              <div className="d-flex flex-column gap-2">
                <a href="/admin/courses/1/curriculum" className="btn btn-outline-secondary d-flex align-items-center gap-2">
                  <i className="ti tabler-clipboard"></i>Next: Build Curriculum
                </a>
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
                  <i className="ti tabler-device-floppy"></i>Save as Draft
                </button>
                <button className="btn btn-primary d-flex align-items-center gap-2">
                  <i className="ti tabler-rocket"></i>Publish Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
