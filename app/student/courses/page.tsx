'use client'

import StudentLayout from '@/components/layouts/StudentLayout'

const courses = [
  {
    id: '1',
    gradient: 'from-[#7367F0] to-[#9E95F5]',
    subject: 'Criminal Law',
    subjectColor: 'bg-[#7367F0]/10 text-[#7367F0]',
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
    gradient: 'from-[#28C76F] to-[#48DA89]',
    subject: 'Constitutional Law',
    subjectColor: 'bg-[#28C76F]/10 text-[#28C76F]',
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
    gradient: 'from-[#FF9F43] to-[#FFBE76]',
    subject: 'Civil Law',
    subjectColor: 'bg-[#FF9F43]/10 text-[#FF9F43]',
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
    gradient: 'from-[#EA5455] to-[#F08182]',
    subject: 'Judiciary Prep',
    subjectColor: 'bg-[#EA5455]/10 text-[#EA5455]',
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
    gradient: 'from-[#00CFE8] to-[#1CE7FF]',
    subject: 'Corporate Law',
    subjectColor: 'bg-[#00CFE8]/10 text-[#00CFE8]',
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
    gradient: 'from-[#9C27B0] to-[#CE93D8]',
    subject: 'Family Law',
    subjectColor: 'bg-[#9C27B0]/10 text-[#9C27B0]',
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
]

function StarRating({ rating }: { rating: string }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} className={`w-3.5 h-3.5 ${parseFloat(rating) >= s ? 'text-[#FF9F43]' : 'text-[#DBDADE]'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs font-semibold text-[#4B465C]">{rating}</span>
    </div>
  )
}

export default function CoursesCatalogPage() {
  return (
    <StudentLayout activePath="/student/courses">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#4B465C]">Course Catalog</h1>
        <p className="text-[#A8AAAE] text-sm mt-1">Explore 500+ law courses curated for competitive exams & practice</p>
      </div>

      {/* Search + Filter bar */}
      <div className="bg-white rounded-xl border border-[#DBDADE] shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A8AAAE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search courses, topics, instructors..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-[#DBDADE] text-sm text-[#4B465C] placeholder:text-[#A8AAAE] focus:outline-none focus:border-[#7367F0] focus:ring-2 focus:ring-[#7367F0]/20 transition"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            {[
              { label: 'Subject', options: ['All Subjects', 'Criminal Law', 'Constitutional Law', 'Civil Law', 'Corporate Law'] },
              { label: 'Level', options: ['All Levels', 'Beginner', 'Intermediate', 'Advanced'] },
              { label: 'Duration', options: ['Any Duration', 'Under 5 hrs', '5-10 hrs', '10-20 hrs', '20+ hrs'] },
              { label: 'Price', options: ['Any Price', 'Free', 'Under ₹2,000', '₹2,000-₹5,000', '₹5,000+'] },
            ].map((filter) => (
              <select
                key={filter.label}
                className="px-3 py-2.5 rounded-lg border border-[#DBDADE] text-sm text-[#4B465C] focus:outline-none focus:border-[#7367F0] bg-white"
              >
                {filter.options.map(o => <option key={o}>{o}</option>)}
              </select>
            ))}
            <button className="px-4 py-2.5 text-sm font-medium text-[#A8AAAE] hover:text-[#EA5455] border border-[#DBDADE] rounded-lg transition">
              Clear Filters
            </button>
          </div>
        </div>

        {/* Active filters */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#DBDADE]">
          <span className="text-xs text-[#A8AAAE]">Active:</span>
          {['Criminal Law', 'Intermediate', 'Under ₹6,000'].map(tag => (
            <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#7367F0]/10 text-[#7367F0] text-xs font-medium rounded-full">
              {tag}
              <button className="hover:text-[#EA5455]">×</button>
            </span>
          ))}
          <span className="text-xs text-[#A8AAAE] ml-auto">Showing 6 of 234 courses</span>
        </div>
      </div>

      {/* Course grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl border border-[#DBDADE] shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
            {/* Thumbnail */}
            <div className={`h-36 bg-gradient-to-br ${course.gradient} relative`}>
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  {course.enrolled ? 'Enrolled' : 'New'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${course.subjectColor}`}>
                {course.subject}
              </span>
              <h3 className="font-semibold text-[#4B465C] text-sm leading-snug mb-1 group-hover:text-[#7367F0] transition line-clamp-2">
                {course.title}
              </h3>
              <p className="text-xs text-[#A8AAAE] mb-3">{course.tutor}</p>

              {/* Stats */}
              <div className="flex items-center gap-3 text-xs text-[#A8AAAE] mb-3">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {course.lessons} lessons
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.hours} hrs
                </span>
              </div>

              <StarRating rating={course.rating} />
              <p className="text-xs text-[#A8AAAE] mt-0.5">({course.reviews} reviews)</p>

              {/* Price + CTA */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#DBDADE]">
                <div>
                  <span className="text-lg font-bold text-[#4B465C]">{course.price}</span>
                  <span className="text-xs text-[#A8AAAE] line-through ml-2">{course.original}</span>
                </div>
                <a
                  href={`/student/courses/${course.id}`}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition ${
                    course.enrolled
                      ? 'bg-[#28C76F]/10 text-[#28C76F] hover:bg-[#28C76F]/20'
                      : 'bg-[#7367F0] text-white hover:bg-[#5E50E2]'
                  }`}
                >
                  {course.enrolled ? 'Go to Course' : 'Enroll Now'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state (hidden unless needed — shown for reference) */}
      <div className="hidden mt-16 text-center">
        <div className="w-24 h-24 rounded-2xl bg-[#F8F7FA] border-2 border-dashed border-[#DBDADE] flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#DBDADE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-[#4B465C] font-semibold">No courses found</h3>
        <p className="text-[#A8AAAE] text-sm mt-1">Try adjusting your filters or search terms</p>
        <button className="mt-4 px-5 py-2 bg-[#7367F0] text-white text-sm font-medium rounded-lg hover:bg-[#5E50E2] transition">
          Clear All Filters
        </button>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-8">
        <p className="text-sm text-[#A8AAAE]">Showing 1-6 of 234 courses</p>
        <div className="flex items-center gap-1">
          {[1, 2, 3, '...', 39].map((p, i) => (
            <button
              key={i}
              className={`w-8 h-8 text-sm rounded-lg font-medium transition ${
                p === 1
                  ? 'bg-[#7367F0] text-white'
                  : 'text-[#4B465C] hover:bg-[#F8F7FA]'
              }`}
            >
              {p}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center text-[#4B465C] hover:bg-[#F8F7FA] rounded-lg transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </StudentLayout>
  )
}
