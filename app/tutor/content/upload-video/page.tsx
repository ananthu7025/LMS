'use client';
import TutorLayout from '@/components/layouts/TutorLayout';

export default function UploadVideoPage() {
  return (
    <TutorLayout active="/tutor/content/upload-video" title="Upload Video Lesson" breadcrumb="Home / Upload Content / Video">
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="d-flex flex-column gap-4">
            {/* Upload zone + progress */}
            <div className="card h-100">
              <div className="card-header d-flex align-items-center gap-2 py-3 px-4">
                <i className="ti tabler-video text-primary"></i>
                <h6 className="mb-0 fw-bold">Video File</h6>
              </div>
              <div className="card-body p-4">
                {/* Upload zone */}
                <div className="border border-2 border-dashed border-primary rounded-3 py-5 px-4 text-center cursor-pointer bg-label-primary mb-4 transition-all hover-shadow-sm">
                  <div className="avatar avatar-xl bg-label-primary rounded-circle mx-auto mb-3">
                    <span className="avatar-initial rounded-circle"><i className="ti tabler-upload fs-1"></i></span>
                  </div>
                  <h6 className="fw-bold text-primary mb-1">Drop your video file here</h6>
                  <p className="text-body-secondary small mb-3">or click to browse — MP4, MOV, AVI (max 4GB)</p>
                  <button className="btn btn-primary btn-sm">
                    <i className="ti tabler-file-search me-1"></i>Browse Files
                  </button>
                </div>

                {/* Upload Progress (in progress state) */}
                <div className="card shadow-none border bg-light">
                  <div className="card-body p-3">
                    <div className="d-flex gap-3 align-items-start">
                      <div className="avatar avatar-md bg-label-secondary rounded">
                        <span className="avatar-initial rounded"><i className="ti tabler-movie fs-4"></i></span>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="fw-bold text-heading small">Section-302-Murder-IPC.mp4</span>
                          <span className="badge bg-label-primary small">73%</span>
                        </div>
                        <div className="progress mb-2" style={{ height: 6 }}>
                          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '73%' }}></div>
                        </div>
                        <div className="d-flex justify-content-between text-body-secondary small">
                          <span>847 MB · Uploading...</span>
                          <span>4.2 MB/s · ~2 min left</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-label-warning rounded d-flex align-items-center gap-2 small">
                      <i className="ti tabler-clock fs-6"></i>
                      <span>Transcoding video after upload completes — this may take a few minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Details */}
            <div className="card">
              <div className="card-header d-flex align-items-center gap-2 py-3 px-4">
                <i className="ti tabler-list-details text-primary"></i>
                <h6 className="mb-0 fw-bold">Lesson Details</h6>
              </div>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label small fw-bold">Lesson Title *</label>
                  <input className="form-control" defaultValue="Section 302 & Murder — Deep Dive Analysis" />
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-bold">Description</label>
                  <div className="border rounded overflow-hidden">
                    <div className="bg-light p-2 border-bottom d-flex gap-1">
                      {['tabler-bold', 'tabler-italic', 'tabler-underline', 'tabler-align-left', 'tabler-layout-grid'].map(icon => (
                        <button key={icon} className="btn btn-sm btn-icon btn-text-secondary rounded"><i className={`ti ${icon} fs-5`}></i></button>
                      ))}
                    </div>
                    <textarea className="form-control border-0 rounded-0 p-3 small" rows={4} defaultValue="In this lesson, we analyze Section 302 of IPC (Murder) in detail — its ingredients, punishment, and how courts distinguish it from culpable homicide." />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-bold">
                    <i className="ti tabler-paperclip me-1 small"></i>Attach PDF Notes (Optional)
                  </label>
                  <div className="border border-dashed rounded p-3 text-center cursor-pointer bg-light small text-body-secondary">
                    Drop PDF here or <span className="text-primary fw-semibold">browse</span>
                  </div>
                </div>
                <div>
                  <label className="form-label small fw-bold">
                    <i className="ti tabler-link me-1 small"></i>Additional Resources
                  </label>
                  <div className="d-flex flex-column gap-2">
                    <input className="form-control small" placeholder="Resource title" defaultValue="Supreme Court judgment — Bachan Singh v. State of Punjab" />
                    <input className="form-control small" placeholder="URL or file" />
                    <button className="btn btn-label-primary btn-sm align-self-start">
                      <i className="ti tabler-plus me-1"></i>Add Resource
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="d-flex flex-column gap-4">
            <div className="card">
              <div className="card-header py-3 px-4">
                <h6 className="mb-0 fw-bold">
                  <i className="ti tabler-chart-bar me-2 text-primary"></i>Lesson Info
                </h6>
              </div>
              <div className="card-body p-4 pt-0">
                {[
                  { label: 'Course', value: 'Criminal Law Fundamentals' },
                  { label: 'Module', value: 'Module 2: Offences Against Person' },
                  { label: 'Estimated Duration', value: '~42 min (auto)' },
                  { label: 'File Size', value: '847 MB' }
                ].map((item, idx) => (
                  <div key={idx} className={`py-3 ${idx < 3 ? 'border-bottom' : ''}`}>
                    <small className="text-body-secondary d-block mb-1">{item.label}</small>
                    <span className="fw-semibold text-heading small">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card border-primary-subtle bg-primary-subtle bg-opacity-10">
              <div className="card-header py-3 px-4 bg-transparent">
                <h6 className="mb-0 fw-bold">
                  <i className="ti tabler-rocket me-2 text-primary"></i>Publish
                </h6>
              </div>
              <div className="card-body p-4 pt-0">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <div className="fw-bold text-heading small">Publish immediately</div>
                    <small className="text-body-secondary small">Visible to students after upload</small>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input className="form-check-input" type="checkbox" defaultChecked />
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-outline-secondary w-100">
                    <i className="ti tabler-device-floppy me-1"></i>Save as Draft
                  </button>
                  <button className="btn btn-primary w-100">
                    <i className="ti tabler-rocket me-1"></i>Upload & Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TutorLayout>
  );
}
