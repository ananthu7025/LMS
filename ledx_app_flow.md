# LedX (LexEd) — Complete Application Flow

> A comprehensive, non-technical guide to every screen and feature in the LedX Learning Management System, organized by user role.

---

## Table of Contents

1. [Platform Overview](#platform-overview)
2. [User Roles Summary](#user-roles-summary)
3. [Super Admin Portal](#1-super-admin-portal)
4. [Admin (Institute) Portal](#2-admin-institute-portal)
5. [Tutor Portal](#3-tutor-portal)
6. [Student Portal](#4-student-portal)
7. [Authentication & Onboarding](#5-authentication--onboarding)

---

## Platform Overview

LedX (also branded **LexEd**) is a multi-tenant SaaS learning management system built for **law education institutes** in India. The platform allows institutes to create, sell, and manage law courses, conduct live classes, and provide AI-powered learning tools to students — all under their own branding.

**Key Concepts:**
- **Multi-tenant**: One platform serves many institutes; each institute gets its own branded subdomain (e.g., `sharma-law.lexed.in`).
- **Subscription-based**: Institutes subscribe to plans (Starter, Professional, Enterprise) that control their student limits, course limits, and feature access.
- **Four distinct user roles**: Super Admin, Admin, Tutor, and Student — each with their own dedicated portal and navigation.

---

## User Roles Summary

| Role | Who Are They? | What Can They Do? |
|------|---------------|-------------------|
| **Super Admin** | LedX platform operator | Manages all institutes, subscription plans, platform billing, and global settings |
| **Admin** | Institute owner/manager | Manages their own institute — courses, tutors, students, revenue, live classes, announcements |
| **Tutor** | Subject-matter expert | Uploads content (videos, PDFs, quizzes), conducts live classes, answers student doubts, reviews assignments |
| **Student** | Enrolled learner | Browses and enrolls in courses, watches lessons, takes quizzes, attends live classes, uses AI Tutor, practices in the Legal Practice Lab |

---

## 1. Super Admin Portal

The Super Admin portal is the **platform-level control center**. It is designed for the team running the LedX SaaS platform itself (not individual institutes).

**Navigation**: Vertical sidebar menu with sections for Dashboard, Institutes, Approvals, Plans, Billing, and Settings.

---

### 1.1 Dashboard

**Purpose**: Provides a real-time bird's-eye view of the entire platform's health and business metrics.

**What You See on This Screen:**

- **Platform Overview (Hero Card)** — A large gradient card showing:
  - Total Institutes on the platform
  - Active Students across all institutes
  - Monthly Recurring Revenue (MRR)
  - Platform uptime percentage

- **Revenue Chart** — A bar chart showing monthly revenue trends across the year, with the ability to switch between monthly and weekly views.

- **Institute Status** — A visual breakdown (radial chart) of institutes by status: Active, Trial, Suspended, and Pending.

- **Top Institutes** — A ranked list of the top-performing institutes based on their active students and revenue, with trend indicators (up/down arrows).

- **Platform Health** — A sparkline showing overall platform health score over time, plus indicators for new institute signups and monthly completions.

- **Plan Distribution** — A pie/donut chart showing how many institutes are on each subscription plan (Starter, Professional, Enterprise).

- **Quick Actions** — Shortcut buttons for common tasks:
  - Review Pending Approvals
  - Create New Plan
  - View Billing
  - Platform Settings

- **Recent Activity Feed** — A timeline of the latest events across the platform (new signups, payments, plan changes, etc.).

---

### 1.2 Institutes Management

**Purpose**: View, search, and manage all institutes registered on the platform.

**What You See on This Screen:**

- **Summary Statistics** — Four stat cards at the top:
  - Total Institutes
  - Active Institutes
  - On Trial
  - Suspended

- **Filters & Search** — Filter institutes by status (Active, Trial, Suspended, Pending) and search by name.

- **Institutes Table** — A sortable table showing:
  - Institute name and domain
  - Current subscription plan (Starter / Professional / Enterprise)
  - Active students count
  - Revenue generated
  - Current status with color-coded badges
  - Action menu (View, Edit Plan, Suspend, etc.)

- **Invite Institute (Slide-out Panel)** — A side panel to manually invite a new institute by entering their details:
  - Institute name
  - Admin email
  - Phone number
  - Plan assignment

---

### 1.3 Institute Approvals

**Purpose**: Review and approve (or reject) new institutes that have applied to join the platform.

**What You See on This Screen:**

- **Summary Cards** — Shows counts for:
  - Pending Reviews
  - Approved This Month
  - Rejected

- **Queue Filters** — Filter by priority (High / Medium / Low), submission date, and search.

- **Approval Queue** — A list of pending applications, each showing:
  - Institute name and type (Law College, Coaching, etc.)
  - Submission date
  - Priority badge
  - Requested plan

- **Detailed Review Panel** — When you click on a pending application, a detailed panel opens showing:
  - Full institute profile (name, type, city, admin email, website)
  - Requested plan details
  - Admin note / cover letter
  - **Action Buttons**: Approve, Reject, or Request More Information
  - A notes field for internal comments

---

### 1.4 Plans & Pricing

**Purpose**: Create and manage the subscription plans that institutes can purchase.

**What You See on This Screen:**

- **Plan Cards** — Each plan is displayed as a card with:
  - Plan name (e.g., Starter, Professional, Enterprise)
  - Price per month
  - Key limits: max students, max courses, max tutors, storage
  - Feature checklist (AI Tutor, Practice Lab, Custom Domain, etc.)
  - Edit and Delete buttons

- **Create / Edit Plan** — A form to define or modify a plan:
  - Plan name
  - Monthly and yearly pricing
  - Student limit, course limit, tutor limit
  - Storage quota
  - Feature toggles (checkboxes for AI Tutor, Practice Lab, Live Classes, White Labeling, Priority Support, Custom Domain)

---

### 1.5 Billing

**Purpose**: Track all financial transactions between the platform and its subscribing institutes.

**What You See on This Screen:**

- **Revenue Summary Cards**:
  - Total Revenue (all-time)
  - This Month's Revenue
  - Upcoming Renewals count
  - Failed Payments count

- **Transaction History Table** — A searchable, filterable table of all payments:
  - Institute name
  - Plan name
  - Amount paid
  - Payment date
  - Payment method (UPI, Card, Net Banking)
  - Status badge (Paid, Pending, Failed, Refunded)
  - Actions: View Invoice, Send Reminder, Refund

- **Upcoming Renewals** — A list of institutes whose subscriptions are due for renewal, with days remaining.

- **Failed Payments** — A highlighted list of failed payment attempts that need attention, with retry and contact options.

---

### 1.6 Platform Settings

**Purpose**: Configure global platform-level settings. Organized into four tabs:

#### Tab 1: Branding
- Upload platform logo (light and dark versions)
- Set primary and secondary brand colors
- Upload favicon
- Live preview of the branding changes

#### Tab 2: Email Templates
- View and edit system email templates (Welcome, Password Reset, Invoice, Suspension Notice)
- Each template shows: subject line, description, and an Edit button
- Rich text editing for email content and design

#### Tab 3: Feature Flags
- Toggle features on/off for the entire platform:
  - AI Tutor
  - Practice Lab
  - Live Classes
  - Custom Domains
  - Student Certificates
  - Maintenance Mode
- Each toggle has a description, status badge, and the ability to turn it on/off instantly

#### Tab 4: Security
- Configure password policies (minimum length, complexity, expiry)
- Set session timeout duration
- Toggle two-factor authentication (2FA) requirement
- IP whitelisting for admin access
- Login attempt limits

---

### 1.7 Institute Detail Page

**Purpose**: View the full profile and operational details of a specific institute.

**What You See on This Screen:**
- Institute name, logo, domain, and contact information
- Current plan and subscription status
- Student, course, and tutor counts
- Revenue history
- Activity log
- Options to change plan, suspend, or contact the admin

---

## 2. Admin (Institute) Portal

The Admin portal is the **institute-level management hub**. Each institute has its own admin who manages courses, tutors, students, and revenue.

**Navigation**: Vertical sidebar menu with sections for Dashboard, Courses, Tutors, Students, Live Classes, Announcements, Revenue, Reports, Coupons, and Setup.

---

### 2.1 Dashboard

**Purpose**: A command center for the institute admin, showing all key metrics and actionable items at a glance.

**What You See on This Screen:**

- **Institute Overview (Hero Card)** — A large gradient card with live metrics:
  - Total Students (with weekly growth badge)
  - Active Courses (with draft count)
  - Revenue This Month (with growth percentage)
  - Pending Enrollments (with "Review now" prompt)

- **Monthly Revenue Chart** — A bar chart showing revenue per month for the year.

- **Student Status Card** — Active vs. Inactive student breakdown with:
  - Percentage split
  - Visual progress bar showing the ratio
  - Exact count for each group

- **Revenue Reports** — Weekly revenue overview with:
  - Total weekly revenue amount and trend
  - Week-over-week comparison bar chart
  - Detailed breakdown: Gross Revenue, Net Profit, Refunds — each with progress indicators

- **Course Tracker** — An overview of all courses:
  - Total course count
  - Status breakdown: Active, New (last 30 days), Draft, Archived
  - Radial chart visualization of course distribution

- **Top Courses** — A ranked list of the most popular courses by enrollment, showing:
  - Course name
  - Number of enrolled students
  - Growth trend (up/down with percentage)

- **Learning Health** — Platform engagement score with:
  - Overall percentage (e.g., 87%)
  - Trend line chart
  - New enrollments this month
  - Course completions this month

- **Course Categories** — Breakdown of courses by subject:
  - Category name (Core Law, CLAT Prep, Electives, Drafts)
  - Number of courses in each category
  - Growth percentage per category

- **Quick Actions** — Six shortcut buttons in a 2×3 grid:
  - Approve Enrollments
  - Schedule Live Class
  - Create Course
  - Make Announcement
  - Add Student
  - View Reports

- **Recent Activity Table** — A table showing latest student events:
  - Student name
  - Action performed (enrollment, completion, submission, doubt, payment failure)
  - Course involved
  - Status badge
  - Time stamp

---

### 2.2 Courses List

**Purpose**: View and manage all courses created by the institute.

**What You See on This Screen:**

- **Hero Banner** — A branded header with:
  - Title "Manage Your Courses"
  - Description text
  - Search bar for finding courses
  - "New Course" button

- **Filters & View Toggle**:
  - Filter by status (All, Published, Draft, Archived)
  - Filter by subject (Criminal Law, Civil Law, Constitutional Law, Exam Prep)
  - Toggle between Card View and Table View

- **Card View** — Each course is displayed as a visual card with:
  - Course thumbnail image
  - Status badge (Published / Draft)
  - Category tag
  - Star rating and review count
  - Course title and short description
  - Duration and assigned tutor
  - Student count and revenue earned
  - Average completion progress bar
  - Action buttons: View Students, Edit

- **Table View** — A tabular layout showing:
  - Course name with thumbnail
  - Category badge
  - Tutor name
  - Student count
  - Revenue
  - Rating
  - Status
  - Actions menu (Edit, View Students, Archive)

---

### 2.3 Create Course

**Purpose**: A step-by-step form to create a new course.

**What You See on This Screen:**

The page is split into a main form area (left) and a preview/actions sidebar (right).

**Main Form (Left Side):**

- **Basic Details Section**:
  - Course title
  - Short description (shown on course card)
  - Long description (shown on landing page)
  - Subject category dropdown
  - Course level (Beginner / Intermediate / Advanced)

- **Course Thumbnail Section**:
  - Drag-and-drop image upload area
  - Recommended size and file format guidelines

- **Pricing Section**:
  - Free course toggle switch
  - Regular price field
  - Discounted price field (with strike-through preview note)

- **Tutor Assignment Section**:
  - Dropdown to select a tutor from the institute's tutor list
  - Option for "No Tutor" (admin manages directly)

**Sidebar (Right Side):**

- **Preview Card** — A live preview of how the course card will look to students, showing the thumbnail, category badge, title, tutor name, and pricing.

- **Publish Options**:
  - "Next: Build Curriculum" button (takes you to the curriculum builder)
  - "Save as Draft" button
  - "Publish Course" button

---

### 2.4 Students Management

**Purpose**: View, filter, and manage all enrolled students.

**What You See on This Screen:**

- **Summary Statistics** — Four stat cards:
  - Total Students
  - Paid Students
  - Active Today
  - Pending Payment

- **Advanced Filters** — Filter by:
  - Course enrolled in
  - Batch assignment
  - Payment status (Paid, Pending, Failed)

- **Search & Tools** — Search bar, entries-per-page selector, Export button, and "Add Student" button.

- **Bulk Actions Bar** — Appears when students are selected via checkboxes:
  - Send Message
  - Export CSV
  - Mark Paid
  - Assign Batch

- **Students Table** — A detailed table with:
  - Checkbox for multi-select
  - Student name, email, and avatar
  - Phone number
  - Number of courses enrolled
  - Batch assignment
  - Payment status badge
  - Progress bar with percentage
  - Last active date
  - Actions menu: View Profile, Send Message, Mark Paid, Remove Student

- **Pagination** — Page navigation at the bottom

- **Add Student (Slide-out Panel)** — A side panel form to manually enrol a student:
  - Full name, email, phone, city
  - Assign to a batch
  - Enrol in a course
  - Set payment status

---

### 2.5 Tutors Management

**Purpose**: Manage the institute's teaching staff.

**What You See on This Screen:**

- **Summary Statistics** — Four stat cards:
  - Total Tutors
  - Active Tutors
  - Invited (awaiting acceptance)
  - Inactive

- **Filters** — Filter by specialization and status.

- **Search & Tools** — Search bar, Export, and "Invite Tutor" button.

- **Bulk Actions** — Send Message, Export CSV, Assign Course, Deactivate.

- **Tutors Table** — Shows:
  - Tutor name, email, avatar
  - Specialization badge
  - Number of courses assigned
  - Number of students taught
  - Status badge (Active, Invited, Inactive)
  - Actions: View Profile, Send Message, Assign Course, Edit Permissions, Deactivate

- **Invite Tutor (Slide-out Panel)** — Form to invite a new tutor:
  - Full name, email, phone
  - Specialization dropdown
  - Initial course assignment

---

### 2.6 Live Classes

**Purpose**: Schedule, manage, and monitor live teaching sessions.

**What You See on This Screen:**

- **Summary Statistics** — Four stat cards:
  - Scheduled This Month
  - Live Now (with pulsing indicator)
  - Upcoming (next 7 days)
  - Completed

- **Toolbar** — Filters for course, tutor, status, and search. View toggle (Cards / Calendar). "Schedule Class" button.

- **Cards View** — Classes are grouped into three sections:

  1. **Live Now** — A prominent gradient hero card for any class currently in session, showing:
     - Topic and course name
     - Date, time, and duration badges
     - Tutor name and avatar
     - Student attendance count
     - "Join Now" button

  2. **Upcoming** — Grid of upcoming class cards, each showing:
     - Course badge
     - Topic title
     - Date, time, duration tags
     - Tutor avatar and name
     - Expected student count
     - Action buttons: Edit, Notify, Start Early, Cancel

  3. **Completed** — Grid of past class cards, each showing:
     - Course badge
     - Topic title
     - Date and attendance count
     - Tutor name
     - "View Recording" button

- **Calendar View** — A monthly calendar grid showing:
  - Colored event badges on scheduled days
  - Navigation (previous/next month, Today button)
  - Color legend for different courses

---

### 2.7 Schedule Live Class

**Purpose**: Form to schedule a new live class session.

**What You See on This Screen:**
- Course selection dropdown
- Topic / title field
- Date and time pickers
- Duration selector
- Tutor assignment
- Student notification toggle

---

### 2.8 Announcements

**Purpose**: Create, send, and track announcements to students.

**What You See on This Screen:**

- **Summary Statistics** — Four stat cards:
  - Sent This Month
  - Total Reach (students notified)
  - Average Open Rate
  - Scheduled (pending send)

The page is split into two sections:

**Left Side — Announcement History:**

- **Filters** — By status (Sent, Scheduled, Draft) and audience.
- **Announcement Table** — Shows:
  - Title and audience badge
  - Delivery channels (Email, In-App — shown as badges)
  - Reach count
  - Open rate with progress bar
  - Status badge
  - Actions: View, Edit, Resend, Send Now, Delete

**Right Side — Compose Panel:**

- **Audience Selection** — Radio buttons with three options:
  - All Students (shows total count)
  - Specific Course (dropdown appears)
  - Specific Batch (dropdown appears)

- **Content Fields** — Title input and message textarea.

- **Delivery Channels** — Checkbox toggles for:
  - Email
  - In-App Notification

- **Schedule Option** — Toggle to schedule for a specific date and time.

- **Action Buttons** — "Save as Draft" and "Send Now" (or "Schedule" if the schedule toggle is on).

- **Confirmation Modal** — Before sending, a confirmation popup shows:
  - Number of students who will receive the announcement
  - Channels being used
  - Warning that the action cannot be undone

---

### 2.9 Reports

**Purpose**: Comprehensive analytics and reporting across five key areas, accessed via tabs.

**What You See on This Screen:**

- **Date Range Selector** — Start and end date pickers.
- **Export Buttons** — Export as PDF or CSV.

#### Tab 1: Student Performance
- Summary cards: Avg Completion Rate, Avg Quiz Score, Inactive Students, Certificates Issued
- Detailed student performance table with: name, courses, avg progress, quizzes taken, quiz average, last active, status

#### Tab 2: Revenue
- Monthly Revenue Trend — Bar chart for 12 months
- Revenue by Course — List with progress bars showing each course's revenue contribution

#### Tab 3: Course Completion
- Funnel visualization showing drop-off at each stage:
  - Enrolled → Started → 50% Complete → 80% Complete → 100% Complete → Certificate Earned

#### Tab 4: Attendance
- Matrix table showing student attendance across live classes
- Attendance percentage and total counts

#### Tab 5: Practice Lab
- Activity by module (Case Drafting, Moot Court, Contract Drafting, etc.) with student counts
- Top Practice Lab Students leaderboard ranked by XP

**Additional Feature:**
- **Automated Weekly Summary Report** — A banner showing that an auto-email summary is sent to the admin every Monday morning.

---

### 2.10 Revenue

**Purpose**: Detailed financial management for the institute.

**What You See on This Screen:**

- **Hero Card** — A large gradient card showing:
  - All-time revenue total
  - Growth percentage vs. last month
  - Quick metrics: This month, Total transactions, Pending amount
  - A mini bar chart showing the last 6 months' trend

- **Summary Statistics** — Four stat cards:
  - This Month revenue
  - Paid transactions
  - Pending amount
  - Refunds issued

- **Transactions List (Left Side)** — Each transaction shows:
  - Student avatar, name, and course
  - Payment method badge (UPI, Card, Net Banking, Wallet)
  - Date
  - Amount and status (Paid, Pending, Failed, Refunded)
  - Actions: View Receipt, Download, Send Reminder, Refund

- **Revenue by Course (Right Side)** — Breakdown showing each course's revenue with color-coded progress bars.

- **Payout Summary Card** — A green gradient card showing:
  - Net payout amount (after platform fee)
  - Gross and platform fee breakdown
  - "Request Payout" button
  - Processing timeline note

---

### 2.11 Coupons & Discounts

**Purpose**: Create and manage discount coupons for course purchases.

**What You See on This Screen:**

- **Summary Statistics** — Four stat cards:
  - Total Coupons
  - Active coupons
  - Total Redemptions
  - Revenue impact (estimated discount given)

- **Filters** — By status (Active / Expired) and discount type (Percentage / Fixed).

- **Coupons Table** — Each row shows:
  - Coupon code displayed in a styled, dashed-border box with a copy button
  - Discount value (e.g., "30% off" or "₹500 off")
  - Applicable courses
  - Usage progress bar (e.g., 42/100 used — 42%)
  - Minimum cart value
  - Expiry date
  - Status badge (Active / Expired)
  - Actions: Edit, Duplicate, Disable/Reactivate, Delete

- **Create Coupon (Slide-out Panel)** — Form with:
  - Coupon code field (with auto-generate button)
  - Discount type toggle (Percentage vs. Fixed Amount)
  - Discount value and minimum cart value
  - Course applicability (checkboxes)
  - Expiry date
  - Usage limit (total and per-student)

---

### 2.12 Setup Wizard

**Purpose**: A guided onboarding wizard for new institutes, shown after first login.

**What You See on This Screen:**

A centered, step-by-step wizard with progress indicators at the top (Step 1, 2, 3).

**Step 1 — Brand Setup:**
- Upload institute logo (drag-and-drop)
- Institute full name and display name
- Choose subdomain (with availability check)

**Step 2 — Add First Course:**
- Two options: "Create a Course Now" or "Skip for Now"
- Optional: Invite tutors by entering email addresses

**Step 3 — Payment Setup:**
- Select payment gateway (Razorpay or Stripe)
- Enter API Key and API Secret
- Choose default currency
- Toggle test mode on/off

**Navigation:** Back and Next buttons at the bottom, with a "Finish Setup" button on the last step.

---

### 2.13 Other Admin Pages

- **Course Detail / Curriculum Builder** — Manage individual course content, modules, and lesson ordering.
- **Student Detail Page** — View a specific student's profile, enrollment history, progress, payments, and activity.
- **Tutor Detail Page** — View a specific tutor's profile, assigned courses, student feedback, and teaching stats.
- **Live Class Detail** — View details of a specific live class, including recording (if completed), attendance list, and chat history.

---

## 3. Tutor Portal

The Tutor portal is designed for **subject-matter experts** who deliver course content. Tutors can manage their assigned courses, upload learning materials, conduct live sessions, and interact with students.

**Navigation**: Horizontal menu with links to Dashboard, My Courses, Live Classes, Content, Assignments, Doubts, and Students.

---

### 3.1 Dashboard

**Purpose**: A personalized command center for the tutor.

**What You See on This Screen:**

**Left Column (Main Area):**

- **My Courses** — Cards for each assigned course showing:
  - Course title
  - Completion progress bar
  - Student count
  - Average completion percentage
  - Next scheduled live class date/time

- **Today's Schedule** — A timeline of today's live classes:
  - Time slot
  - Class topic and course name
  - Expected student attendance
  - "Start" button for each session

- **Recent Student Activity** — A feed of the latest student interactions:
  - Lesson completions
  - Assignment submissions
  - Doubts raised
  - Quiz attempts (with scores)

**Right Column (Sidebar):**

- **Pending Items** — Urgent action cards:
  - Unanswered Doubts (count + oldest age) — links to Doubts page
  - Unreviewed Assignments (count + oldest submission) — links to Assignments page

- **Quick Actions** — Button shortcuts:
  - Upload Video Lesson
  - Schedule Live Class
  - View Student Doubts
  - Create a Quiz

- **My Stats This Month** — Personal performance metrics:
  - Students taught
  - Lessons uploaded
  - Live classes conducted
  - Doubts answered
  - Assignments reviewed

---

### 3.2 My Courses

**Purpose**: View and manage courses assigned to the tutor.

**What You See on This Screen:**
- List of assigned courses with enrollment stats, progress, and quick access to course management.

### 3.3 Course Detail (Tutor View)

**Purpose**: Manage content within a specific course.

**What You See on This Screen:**
- Curriculum tree with modules and lessons
- Options to add/edit/reorder lessons
- Upload new content (videos, PDFs)
- Add quizzes and assignments

---

### 3.4 Content Management

The tutor has dedicated screens for creating different content types:

#### Upload Video Lesson
- Video file upload (drag-and-drop)
- Lesson title and description
- Select course and module placement
- Processing status indicator

#### Upload PDF Material
- PDF file upload
- Title and description
- Course and module assignment
- Estimated reading time

#### Create Quiz
- Quiz title and instructions
- Question builder with multiple question types
- Set time limit and passing score
- Preview quiz layout

---

### 3.5 Live Classes (Tutor View)

**Purpose**: Schedule and conduct live teaching sessions.

#### Schedule Live Class
- Select course
- Enter topic/title
- Pick date and time
- Set duration
- Student notification toggle

#### Live Class Detail
- View session details and recording
- Attendance list
- Student engagement metrics

---

### 3.6 Assignments

**Purpose**: Review student-submitted assignments and provide feedback.

**What You See on This Screen:**
- List of submitted assignments filtered by course
- Each submission shows: student name, assignment title, submission date, status
- Grading interface with:
  - Student's submitted work
  - Score/grade input
  - Written feedback area
  - Mark as Reviewed/Returned

---

### 3.7 Student Doubts

**Purpose**: Answer student questions related to course content.

**What You See on This Screen:**

- **Stats Bar** — Three cards showing:
  - Pending Doubts count
  - Answered This Week
  - Average Response Time

- **Filters** — Filter by course, lesson, and status (Answered / Unanswered). Search bar.

- **Doubts List** — Expandable cards for each doubt:
  - Student name and avatar
  - Course and lesson context badge
  - Full question text
  - Time submitted
  - Status badge (Unanswered / Answered)

- **Reply Panel** (expands on click) — Contains:
  - Rich text editor with formatting toolbar (bold, italic, underline, link, image)
  - Text area for typing the answer
  - "Submit Reply" button
  - "Mark Resolved" button

---

### 3.8 Students (Tutor View)

**Purpose**: View the students enrolled in the tutor's courses.

**What You See on This Screen:**
- Student list filtered to only the tutor's courses
- Student name, progress, quiz scores, recent activity

---

## 4. Student Portal

The Student portal is the **learning experience interface**. Students discover courses, learn through structured content, interact with AI, and practice legal skills.

**Navigation**: Horizontal menu with links to Course Catalog, My Learning, AI Tutor, Practice Lab, and profile/notifications.

---

### 4.1 Course Catalog

**Purpose**: Browse, discover, and purchase courses.

**What You See on This Screen:**
- Search bar and category filters
- Course cards showing:
  - Thumbnail image
  - Category badge
  - Course title and short description
  - Tutor name
  - Star rating and review count
  - Price (with struck-through original price if discounted)
  - Duration and student count
- Clicking a card opens the Course Detail page

---

### 4.2 Course Detail Page (Student View)

**Purpose**: Learn about a course before enrolling.

**What You See on This Screen:**
- Course banner / thumbnail
- Full description
- Curriculum outline (modules and lessons)
- Tutor profile and bio
- Student reviews and ratings
- Price and "Enrol Now" / "Buy Now" button

---

### 4.3 Checkout

**Purpose**: Complete course purchase.

**What You See on This Screen:**
- Order summary (course name, price)
- Coupon code input field
- Price breakdown (original, discount, final)
- Payment method selection
- "Pay Now" button

---

### 4.4 Course Home (My Learning)

**Purpose**: The student's main learning interface for an enrolled course.

**What You See on This Screen:**

- **Course Header** — Shows:
  - Category badge
  - Course title
  - Tutor name
  - Last accessed date
  - "Continue Learning" button

- **Overall Progress** — A progress bar with:
  - Completion percentage
  - Lessons completed out of total
  - Estimated time remaining
  - On-track/behind status

- **Tab Navigation** — Three tabs:
  - Curriculum
  - Resources
  - Announcements

- **Curriculum Tree** — Expandable modules, each showing:
  - Module title
  - Lesson count and total duration
  - Completion status (X/Y done)
  - Mini progress bar

  Each lesson within a module shows:
  - Content type icon (Video, PDF, Quiz, Live Class, Assignment)
  - Lesson title
  - Duration
  - Completion checkmark or empty circle

  Clicking a lesson navigates to the specific content viewer.

---

### 4.5 Video Lesson Player

**Purpose**: Watch video lessons with an embedded player.

**What You See on This Screen:**
- Video player with standard controls
- Lesson title and description
- Course navigation sidebar (next/previous lessons)
- Progress tracking (auto-marks as complete when finished)

---

### 4.6 PDF Viewer

**Purpose**: Read PDF study materials.

**What You See on This Screen:**
- Embedded PDF viewer
- Document title and description
- Navigation to other lessons

---

### 4.7 Quiz

**Purpose**: Take assessments to test understanding.

**What You See on This Screen:**
- Quiz title and instructions
- Timer (if timed)
- Questions displayed one at a time or all at once
- Multiple choice / multi-select options
- "Submit Quiz" button

### Quiz Results Page
- Final score (e.g., 16/20)
- Pass/fail status
- Question-by-question review showing correct answers
- Option to retry

---

### 4.8 Live Class (Student View)

**Purpose**: Join scheduled live sessions.

**What You See on This Screen:**
- Live video stream
- Class topic and tutor info
- Student count
- Chat/Q&A sidebar

---

### 4.9 Assignment Submission

**Purpose**: Complete and submit course assignments.

**What You See on This Screen:**
- Assignment title and instructions
- Text editor for writing the submission
- File upload option
- "Submit Assignment" button
- Status tracking (Submitted, Under Review, Graded)

---

### 4.10 AI Tutor

**Purpose**: An AI-powered chat assistant specialized in law education.

**What You See on This Screen:**

**Left Sidebar:**
- "New Chat" button
- Recent chat history (conversation titles with timestamps)
- Daily token usage meter (progress bar showing usage out of daily limit)

**Main Chat Area:**

- **Context Bar** — Shows the currently selected course and topic as badges
- **Chat Messages** — Alternating student and AI messages:
  - Student messages appear as purple bubbles (right-aligned)
  - AI responses appear as white cards (left-aligned) with:
    - **IRAC Format** (for legal analysis): Issue, Rule, Application, Conclusion — each with a colored label badge
    - **Section tags** — Referenced IPC/CrPC sections shown as badges
    - **Case law references** — Cited cases shown as green badges
  - Timestamp below each message

- **Quick Action Chips** — Pre-built prompts for common requests:
  - "Explain simply"
  - "Practice question"
  - "Key cases"
  - "Draft argument"

- **Input Area** — Text box with:
  - Formatting and attachment icons
  - Character counter
  - "Send" button

---

### 4.11 Legal Practice Lab

**Purpose**: A gamified environment for practicing real-world legal skills through simulated exercises.

**What You See on This Screen:**

**Header Area:**
- Page title "Legal Practice Lab"
- Description text
- Day Streak counter
- Level and XP progress bar (e.g., "Level 5 — Associate, 2,340 XP")

**Modules Grid (Left Side)** — Six practice modules displayed as cards:

| Module | Description | Difficulty |
|--------|-------------|------------|
| Case Drafting Studio | Draft petitions, bail applications, charge sheets, FIRs with AI guidance | Intermediate |
| Moot Court Simulator | Argue before a virtual bench — AI plays opposing counsel and judges | Advanced |
| Client Interview Room | Conduct a client consultation and extract legally relevant facts | Beginner |
| Contract Drafting Desk | Draft commercial contracts with essential clauses | Intermediate |
| Legal Research Arena | Research and cite case laws for a given legal problem | Intermediate |
| Courtroom Argument Builder | Build structured oral arguments using the IRAC framework | Advanced |

Each module card shows:
- Icon and title
- Difficulty badge (Beginner/Intermediate/Advanced)
- Description text
- XP reward and estimated time
- Progress bar (if started)
- Action button: "Start Studio" / "Continue Practice" / "Retry Module"

**Sidebar (Right Side):**

- **Weekly Leaderboard** — Ranked list of top students by XP:
  - Rank, avatar, name, level, and XP points
  - Your own rank highlighted at the bottom

- **Your Activity Stats**:
  - Sessions completed
  - Cases drafted
  - Average accuracy score
  - XP earned this week

---

### 4.12 Case Drafting Studio (Practice Lab Module)

**Purpose**: Practice drafting legal documents with AI assistance.

**What You See on This Screen:**
- Case scenario description
- Document template
- AI guidance panel
- Submit for evaluation
- Scoring and feedback

---

## 5. Authentication & Onboarding

Each role has its own separate login page, and students additionally have a signup page.

---

### 5.1 Login Pages

All login pages follow a **two-column "cover" layout**:
- **Left Side**: Decorative illustration with branding and tagline
- **Right Side**: Login form with:
  - Email/phone field
  - Password field with show/hide toggle
  - "Remember Me" checkbox
  - "Forgot Password?" link
  - Login button
  - Social login options (where applicable)

There are four separate login screens:
- **Super Admin Login** (`/super-admin/login`)
- **Admin Login** (`/admin/login`)
- **Tutor Login** (`/tutor/login`)
- **Student Login** (`/student/login`)

---

### 5.2 Student Signup

**Purpose**: New student registration.

**What You See on This Screen:**
- Two-column cover layout (similar to login)
- Registration form:
  - Full name
  - Email address
  - Phone number
  - Password and confirm password
  - Terms & conditions checkbox
  - "Create Account" button
  - Link to login page for existing users

---

### 5.3 Post-Login Flow

After successful login, each role is redirected to their respective dashboard:

| Role | Redirected To |
|------|--------------|
| Super Admin | `/super-admin/dashboard` |
| Admin | `/admin/dashboard` (or `/admin/setup` if first login) |
| Tutor | `/tutor/dashboard` |
| Student | `/student/courses` (Course Catalog) |

---

*This document reflects the current state of the LedX application as implemented in the codebase. Features are based on the actual page implementations and may evolve as development continues.*
