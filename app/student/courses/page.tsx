'use client';
import { useState } from 'react';
import Link from 'next/link';
import StudentLayout from '@/components/layouts/StudentLayout';

const courses = [
  {
    id: '1',
    image: '/img/courses/criminal_law.png',
    category: 'Criminal Law',
    categoryColor: 'primary',
    rating: 4.8,
    reviews: '1.2k',
    title: 'Criminal Law Fundamentals',
    desc: 'Comprehensive study of IPC, criminal procedure and landmark judgements.',
    duration: '24 hours',
    completion: 68,
    completed: false,
  },
  {
    id: '2',
    image: '/img/courses/constitutional_law.png',
    category: 'Constitutional Law',
    categoryColor: 'info',
    rating: 4.5,
    reviews: '980',
    title: 'Constitutional Law Mastery',
    desc: 'Deep dive into fundamental rights, directive principles and constitutional amendments.',
    duration: '18 hours',
    completion: 32,
    completed: false,
  },
  {
    id: '3',
    image: '/img/courses/exam_prep.png',
    category: 'Exam Prep',
    categoryColor: 'success',
    rating: 4.9,
    reviews: '3.7k',
    title: 'CLAT 2025 Preparation',
    desc: 'Full-length mocks, sectional tests and strategy sessions for CLAT 2025.',
    duration: '32 hours',
    completion: 100,
    completed: true,
  },
  {
    id: '4',
    image: '/img/courses/criminal_law.png',
    category: 'Evidence Law',
    categoryColor: 'warning',
    rating: 4.3,
    reviews: '720',
    title: 'Evidence Act Deep Dive',
    desc: 'Sections 1–167 of the Indian Evidence Act with case-based explanation.',
    duration: '14 hours',
    completion: 50,
    completed: false,
  },
  {
    id: '5',
    image: '/img/courses/corporate_law.png',
    category: 'Civil Law',
    categoryColor: 'danger',
    rating: 4.1,
    reviews: '548',
    title: 'Contract Law Basics',
    desc: 'Fundamentals of offer, acceptance, consideration and breach of contract.',
    duration: '10 hours',
    completion: 25,
    completed: false,
  },
  {
    id: '6',
    image: '/img/courses/constitutional_law.png',
    category: 'Family Law',
    categoryColor: 'secondary',
    rating: 4.7,
    reviews: '410',
    title: 'Family Law & Matrimonial Disputes',
    desc: 'Hindu Marriage Act, Special Marriage Act, and personal law disputes.',
    duration: '12 hours',
    completion: 10,
    completed: false,
  },
];

export default function CoursesCatalogPage() {
  const [hideCompleted, setHideCompleted] = useState(false);
  const [filter, setFilter] = useState('');

  const filtered = courses.filter(c => {
    if (hideCompleted && c.completed) return false;
    if (filter && c.category !== filter) return false;
    return true;
  });

  return (
    <StudentLayout activePath="/student/courses">
      <div className="app-academy">

        {/* ── Hero Banner ── */}
        <div className="card p-0 mb-6">
          <div className="card-body d-flex flex-column flex-md-row justify-content-between p-0 pt-6">
            {/* Left — bulb */}
            <div className="d-none d-md-flex align-items-end ps-6 pb-0" style={{ minWidth: 90 }}>
              <img
                src="/img/illustrations/bulb-light.png"
                alt=""
                height={90}
                style={{ objectFit: 'contain' }}
              />
            </div>
            {/* Center — text + search */}
            <div className="flex-grow-1 d-flex align-items-md-center flex-column text-md-center mb-6 py-6 px-6">
              <span className="card-title mb-4 lh-lg px-md-12 h4 text-heading">
                Your Law Learning Journey.<br />
                <span className="text-primary text-nowrap">All in one place.</span>
              </span>
              <p className="mb-4 text-body">
                Continue your enrolled courses, track progress and earn certificates<br className="d-none d-md-inline" />
                in criminal law, constitutional law, CLAT prep and more.
              </p>
              <div className="d-flex align-items-center justify-content-between" style={{ maxWidth: 480 }}>
                <input type="search" placeholder="Find your course" className="form-control me-4" />
                <button type="button" className="btn btn-primary btn-icon">
                  <i className="icon-base ti tabler-search icon-22px"></i>
                </button>
              </div>
            </div>
            {/* Right — pencil rocket */}
            <div className="d-none d-md-flex align-items-end justify-content-end pe-0" style={{ minWidth: 120 }}>
              <img
                src="/img/illustrations/pencil-rocket.png"
                alt=""
                height={188}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* ── My Courses ── */}
        <div className="card mb-6">
          <div className="card-header d-flex flex-wrap justify-content-between gap-4">
            <div className="card-title mb-0 me-1">
              <h5 className="mb-0">My Courses</h5>
              <p className="mb-0 text-body">Total {courses.length} courses you have enrolled in</p>
            </div>
            <div className="d-flex justify-content-md-end align-items-center column-gap-6 flex-sm-row flex-column row-gap-4">
              <select
                className="form-select"
                style={{ maxWidth: 180 }}
                onChange={e => setFilter(e.target.value)}
              >
                <option value="">All Courses</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Constitutional Law">Constitutional Law</option>
                <option value="Exam Prep">Exam Prep</option>
                <option value="Evidence Law">Evidence Law</option>
                <option value="Civil Law">Civil Law</option>
                <option value="Family Law">Family Law</option>
              </select>
              <div className="form-check form-switch my-2 ms-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="HideCompleted"
                  checked={hideCompleted}
                  onChange={e => setHideCompleted(e.target.checked)}
                />
                <label className="form-check-label text-nowrap mb-0" htmlFor="HideCompleted">
                  Hide completed
                </label>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="row gy-6 mb-6">
              {filtered.map(c => (
                <div key={c.id} className="col-sm-6 col-lg-4">
                  <div className="card p-2 h-100 shadow-none border">
                    {/* Thumbnail */}
                    <div className="rounded-2 text-center mb-4 overflow-hidden" style={{ height: 160 }}>
                      <Link href={`/student/courses/${c.id}`}>
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-100 h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </Link>
                    </div>

                    <div className="card-body p-4 pt-2">
                      {/* Category + Rating */}
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <span className={`badge bg-label-${c.categoryColor}`}>{c.category}</span>
                        <p className="d-flex align-items-center justify-content-center fw-medium gap-1 mb-0">
                          {c.rating}
                          <span className="text-warning">
                            <i className="icon-base ti tabler-star-filled icon-lg me-1 mb-1_5"></i>
                          </span>
                          <span className="fw-normal">({c.reviews})</span>
                        </p>
                      </div>

                      {/* Title + desc */}
                      <Link href={`/student/courses/${c.id}`} className="h5 text-heading">{c.title}</Link>
                      <p className="mt-1 text-body-secondary small">{c.desc}</p>

                      {/* Duration / Completed */}
                      {c.completed ? (
                        <p className="d-flex align-items-center text-success mb-1">
                          <i className="icon-base ti tabler-check me-1"></i>Completed
                        </p>
                      ) : (
                        <p className="d-flex align-items-center mb-1 text-body-secondary small">
                          <i className="icon-base ti tabler-clock me-1"></i>{c.duration}
                        </p>
                      )}

                      {/* Progress */}
                      <div className="progress mb-4" style={{ height: 8 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${c.completion}%` }}
                        ></div>
                      </div>

                      {/* Actions */}
                      {c.completed ? (
                        <Link
                          href={`/student/learn/${c.id}`}
                          className="w-100 btn btn-label-primary d-flex align-items-center justify-content-center"
                        >
                          <i className="icon-base ti tabler-rotate-clockwise-2 icon-xs me-2"></i>
                          Start Over
                        </Link>
                      ) : (
                        <div className="d-flex flex-column flex-md-row gap-4 text-nowrap flex-wrap flex-md-nowrap flex-lg-wrap flex-xxl-nowrap">
                          <Link
                            href={`/student/learn/${c.id}`}
                            className="w-100 btn btn-label-secondary d-flex align-items-center justify-content-center"
                          >
                            <i className="icon-base ti tabler-rotate-clockwise-2 icon-xs me-2"></i>
                            Start Over
                          </Link>
                          <Link
                            href={`/student/learn/${c.id}`}
                            className="w-100 btn btn-label-primary d-flex align-items-center justify-content-center"
                          >
                            <span className="me-2">Continue</span>
                            <i className="icon-base ti tabler-chevron-right icon-xs lh-1"></i>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <nav aria-label="Page navigation" className="d-flex align-items-center justify-content-center">
              <ul className="pagination mb-0 pagination-rounded">
                <li className="page-item first disabled">
                  <a className="page-link" href="#"><i className="icon-base ti tabler-chevrons-left icon-sm"></i></a>
                </li>
                <li className="page-item prev disabled">
                  <a className="page-link" href="#"><i className="icon-base ti tabler-chevron-left icon-sm"></i></a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item next">
                  <a className="page-link" href="#"><i className="icon-base ti tabler-chevron-right icon-xs"></i></a>
                </li>
                <li className="page-item last">
                  <a className="page-link" href="#"><i className="icon-base ti tabler-chevrons-right icon-sm"></i></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* ── Earn Certificate + Best Rated ── */}
        <div className="row gy-6 mb-6">
          <div className="col-lg-6">
            <div className="card shadow-none bg-label-primary h-100">
              <div className="card-body d-flex justify-content-between flex-wrap-reverse">
                <div className="mb-0 d-flex flex-column justify-content-between text-center text-sm-start" style={{ maxWidth: '60%' }}>
                  <div className="card-title">
                    <h5 className="text-primary mb-2">Earn a Certificate</h5>
                    <p className="text-body">
                      Get the right professional certificate in law to boost your career and credibility.
                    </p>
                  </div>
                  <div className="mb-0">
                    <button className="btn btn-sm btn-primary">View Programs</button>
                  </div>
                </div>
                <div className="d-flex justify-content-center justify-content-sm-end align-items-end mb-4 mb-sm-0" style={{ height: 150 }}>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/boy-app-academy.png"
                    alt="boy illustration"
                    style={{ maxHeight: 150 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow-none bg-label-danger h-100">
              <div className="card-body d-flex justify-content-between flex-wrap-reverse">
                <div className="mb-0 d-flex flex-column justify-content-between text-center text-sm-start" style={{ maxWidth: '60%' }}>
                  <div className="card-title">
                    <h5 className="text-danger mb-2">Best Rated Courses</h5>
                    <p className="text-body">
                      Enroll now in the most popular and best rated law courses on our platform.
                    </p>
                  </div>
                  <div className="mb-0">
                    <button className="btn btn-sm btn-danger">View Courses</button>
                  </div>
                </div>
                <div className="d-flex justify-content-center justify-content-sm-end align-items-end mb-4 mb-sm-0" style={{ height: 150 }}>
                  <img
                    className="img-fluid"
                    src="/img/illustrations/girl-app-academy.png"
                    alt="girl illustration"
                    style={{ maxHeight: 150 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Free / Featured Courses ── */}
        <div className="card">
          <div className="card-body row gy-6">
            {/* Left — promo */}
            <div className="col-sm-12 col-lg-4 text-center pt-md-12 px-4">
              <span className="badge bg-label-primary rounded mb-4 d-inline-flex align-items-center justify-content-center" style={{ height: 52, width: 52 }}>
                <i className="icon-base ti tabler-gift icon-36px"></i>
              </span>
              <h4 className="card-title mb-4">Free Trial Lessons</h4>
              <p className="card-text text-body-secondary">
                We offer free preview lessons from top law tutors. Start learning today without any commitment — upgrade when you are ready.
              </p>
              <button className="btn btn-primary">Get Premium Access</button>
            </div>

            {/* Free course previews */}
            {[
              {
                image: '/img/courses/criminal_law.png',
                title: 'Criminal Law — Free Intro',
                desc: 'Watch the first 3 lessons of Criminal Law Fundamentals for free.',
                href: '/student/courses/1',
              },
              {
                image: '/img/courses/exam_prep.png',
                title: 'CLAT Strategy Session',
                desc: 'A free 45-minute strategy session covering CLAT exam pattern and preparation tips.',
                href: '/student/courses/3',
              },
            ].map(fc => (
              <div key={fc.title} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-none border">
                  <div className="p-2 pb-0 rounded-top overflow-hidden" style={{ height: 160 }}>
                    <img
                      src={fc.image}
                      alt={fc.title}
                      className="w-100 h-100 rounded"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{fc.title}</h5>
                    <p className="card-text text-body-secondary small">{fc.desc}</p>
                    <Link href={fc.href} className="btn btn-sm btn-label-primary">
                      Watch Free
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </StudentLayout>
  );
}
