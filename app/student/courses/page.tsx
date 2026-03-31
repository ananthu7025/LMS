'use client';
import Link from 'next/link';
import StudentLayout from '@/components/layouts/StudentLayout';

const courses = [
  {
    id: '1',
    colorClass: 'bg-primary',
    subject: 'Criminal Law',
    subjectLabel: 'label-primary',
    title: 'Criminal Law & Procedure (IPC, CrPC)',
    tutor: 'Adv. Ravi Shankar',
    lessons: 24,
    hours: '12.5',
    rating: '4.8',
    reviews: 234,
    price: '₹5,999',
    original: '₹9,999',
    enrolled: true,
  },
  {
    id: '2',
    colorClass: 'bg-success',
    subject: 'Constitutional Law',
    subjectLabel: 'label-success',
    title: 'Constitutional Law: Fundamental Rights & Duties',
    tutor: 'Dr. Priya Menon',
    lessons: 18,
    hours: '9.0',
    rating: '4.9',
    reviews: 512,
    price: '₹4,999',
    original: '₹7,999',
    enrolled: false,
  },
  {
    id: '3',
    colorClass: 'bg-warning',
    subject: 'Civil Law',
    subjectLabel: 'label-warning',
    title: 'Civil Procedure Code & Evidence Act',
    tutor: 'Institute Direct',
    lessons: 20,
    hours: '10.0',
    rating: '4.6',
    reviews: 178,
    price: '₹3,999',
    original: '₹5,999',
    enrolled: false,
  },
  {
    id: '4',
    colorClass: 'bg-danger',
    subject: 'Judiciary Prep',
    subjectLabel: 'label-danger',
    title: 'Judicial Services Exam — Complete Preparation',
    tutor: 'Adv. Meera Pillai',
    lessons: 36,
    hours: '18.0',
    rating: '4.7',
    reviews: 389,
    price: '₹8,999',
    original: '₹14,999',
    enrolled: false,
  },
  {
    id: '5',
    colorClass: 'bg-info',
    subject: 'Corporate Law',
    subjectLabel: 'label-info',
    title: 'Corporate & Commercial Law (Companies Act)',
    tutor: 'Adv. Suresh Kapoor',
    lessons: 16,
    hours: '8.0',
    rating: '4.5',
    reviews: 143,
    price: '₹4,499',
    original: '₹6,999',
    enrolled: false,
  },
  {
    id: '6',
    colorClass: 'bg-secondary',
    subject: 'Family Law',
    subjectLabel: 'label-secondary',
    title: 'Family Law: Hindu & Muslim Personal Laws',
    tutor: 'Dr. Anita Desai',
    lessons: 14,
    hours: '7.5',
    rating: '4.7',
    reviews: 96,
    price: '₹3,499',
    original: '₹5,499',
    enrolled: false,
  },
];

function StarRating({ rating }: { rating: string }) {
  return (
    <div className="d-flex align-items-center gap-1">
      <div className="d-flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <i key={s} className={`ti tabler-star-filled fs-6 ${parseFloat(rating) >= s ? 'text-warning' : 'text-body-tertiary opacity-25'}`}></i>
        ))}
      </div>
      <span className="small fw-bold text-heading ms-1">{rating}</span>
    </div>
  );
}

export default function CoursesCatalogPage() {
  return (
    <StudentLayout activePath="/student/courses">
      {/* Header */}
      <div className="mb-4">
        <h4 className="fw-bold mb-1">Course Catalog</h4>
        <p className="text-body-secondary small">Explore 500+ law courses curated for competitive exams & practice</p>
      </div>

      {/* Search + Filter bar */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body p-4">
          <div className="row g-3">
            {/* Search */}
            <div className="col-lg-4">
              <div className="input-group input-group-merge border rounded">
                <span className="input-group-text border-0 bg-transparent ps-3"><i className="ti tabler-search text-body-secondary"></i></span>
                <input
                  type="text"
                  placeholder="Search courses, topics, instructors..."
                  className="form-control border-0 shadow-none py-2"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="col-lg-8">
              <div className="d-flex gap-2 flex-wrap justify-content-lg-end">
                {[
                  { label: 'Subject', options: ['All Subjects', 'Criminal Law', 'Constitutional Law', 'Civil Law', 'Corporate Law'] },
                  { label: 'Level', options: ['All Levels', 'Beginner', 'Intermediate', 'Advanced'] },
                  { label: 'Sort', options: ['Most Popular', 'Newest', 'Price: Low to High', 'Price: High to Low'] },
                ].map((filter) => (
                  <select
                    key={filter.label}
                    className="form-select w-auto py-2 small shadow-none"
                    aria-label={filter.label}
                  >
                    <option hidden>{filter.label}</option>
                    {filter.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                ))}
                <button className="btn btn-label-secondary btn-sm d-flex align-items-center px-3">
                  <i className="ti tabler-x me-1 small"></i>Clear
                </button>
              </div>
            </div>
          </div>

          {/* Active filters */}
          <div className="d-flex align-items-center gap-2 mt-4 pt-3 border-top">
            <span className="text-body-secondary small">Active:</span>
            {['Criminal Law', 'Intermediate'].map(tag => (
              <span key={tag} className="badge bg-label-primary d-flex align-items-center gap-1 rounded-pill">
                {tag}
                <i className="ti tabler-x cursor-pointer ms-1 small"></i>
              </span>
            ))}
            <span className="text-body-secondary small ms-auto">Showing 6 of 234 courses</span>
          </div>
        </div>
      </div>

      {/* Course grid */}
      <div className="row g-4">
        {courses.map((course) => (
          <div key={course.id} className="col-md-6 col-lg-4">
            <div className="card h-100 overflow-hidden shadow-sm hover-shadow transition-all border-light">
              {/* Thumbnail */}
              <div className={`${course.colorClass} py-5 position-relative flex-center`} style={{ height: 160 }}>
                <div className="opacity-25">
                  <i className="ti tabler-book-2 text-white" style={{ fontSize: 80 }}></i>
                </div>
                <div className="position-absolute top-0 end-0 p-3">
                  <span className="badge bg-white bg-opacity-25 text-white small">
                    {course.enrolled ? 'Enrolled' : 'New'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className={`badge bg-label-${course.subjectLabel.split('-')[1]} small mb-2`}>
                    {course.subject}
                  </span>
                </div>
                <h6 className="fw-bold text-heading mb-2 hover-text-primary transition line-clamp-2" style={{ height: 40 }}>
                  {course.title}
                </h6>
                <p className="text-body-secondary mb-3 small d-flex align-items-center gap-1">
                  <i className="ti tabler-user fs-6"></i>{course.tutor}
                </p>

                {/* Stats */}
                <div className="d-flex align-items-center gap-3 text-body-secondary small mb-3">
                  <span className="d-flex align-items-center gap-1">
                    <i className="ti tabler-list-check fs-6 text-primary"></i>{course.lessons} lessons
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <i className="ti tabler-clock fs-6 text-primary"></i>{course.hours} hrs
                  </span>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-4">
                  <StarRating rating={course.rating} />
                  <span className="text-body-secondary extra-small">({course.reviews} reviews)</span>
                </div>

                {/* Price + CTA */}
                <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                  <div>
                    <h5 className="mb-0 fw-bold text-heading">{course.price}</h5>
                    <small className="text-body-secondary text-decoration-line-through">{course.original}</small>
                  </div>
                  <Link
                    href={`/student/courses/${course.id}`}
                    className={`btn btn-sm px-3 ${
                      course.enrolled
                        ? 'btn-label-success'
                        : 'btn-primary'
                    }`}
                  >
                    {course.enrolled ? 'Go to Course' : 'Enroll Now'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex align-items-center justify-content-between mt-5">
        <p className="text-body-secondary small mb-0">Showing 1-6 of 234 courses</p>
        <nav aria-label="Course list pagination">
          <ul className="pagination pagination-sm mb-0">
            <li className="page-item disabled"><span className="page-link"><i className="ti tabler-chevron-left"></i></span></li>
            <li className="page-item active"><span className="page-link">1</span></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><span className="page-link">...</span></li>
            <li className="page-item"><a className="page-link" href="#">39</a></li>
            <li className="page-item"><a className="page-link" href="#"><i className="ti tabler-chevron-right"></i></a></li>
          </ul>
        </nav>
      </div>
    </StudentLayout>
  );
}
