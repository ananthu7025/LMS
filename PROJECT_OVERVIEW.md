# LMS Platform — Complete User Flow & Feature Documentation

> This document describes every screen, every feature, and every user interaction in the platform. It is organized by user role and covers the complete journey from login to every page.

---

## Table of Contents

1. [Platform Overview](#1-platform-overview)
2. [User Roles](#2-user-roles)
3. [Super Admin Flow](#3-super-admin-flow)
4. [Institute Admin Flow](#4-institute-admin-flow)
5. [Tutor Flow](#5-tutor-flow)
6. [Student Flow](#6-student-flow)
7. [Practice Lab — Detailed Module Breakdown](#7-practice-lab--detailed-module-breakdown)
8. [AI Tutor System](#8-ai-tutor-system)

---

## 1. Platform Overview

This is a white-label Law Learning Management System (LMS) built for law coaching institutes. It supports multiple institutes, each with their own admin, tutors, and students. The platform has four distinct user types:

- **Super Admin** — The platform owner who manages all institutes
- **Institute Admin** — Manages one institute (courses, students, tutors, revenue)
- **Tutor** — Creates and teaches courses, reviews student work
- **Student** — Learns through courses, live classes, assignments, and a practice lab

The platform's identity is called **LexEd** and uses the term **LexAI** for its AI tutor feature. The practice lab is branded as the **Legal Practice Lab**.

---

## 2. User Roles

| Role | Access | Primary Goal |
|------|--------|--------------|
| Super Admin | All institutes, platform-wide | Monitor revenue, approve institutes, manage plans |
| Institute Admin | One institute | Run the institute — courses, students, tutors, billing |
| Tutor | Assigned courses | Teach, grade, answer doubts |
| Student | Enrolled courses | Learn, practice, complete curriculum |

---

## 3. Super Admin Flow

### 3.1 Login

- The Super Admin logs in via the root login page using their credentials (e.g., `superadmin@lexed.in`).
- There is no separate login page — they use the platform's main login.
- After login, they land on the Super Admin Dashboard.

---

### 3.2 Super Admin Dashboard

**What the Super Admin sees first:**

A full-width hero card with a gradient background showing the platform's health at a glance:

- **Total Institutes Onboarded** — How many institutes are live on the platform
- **Total Active Students** — Sum of active students across all institutes
- **Platform Revenue This Month** — Total revenue in rupees
- **New Signup Requests Pending** — Institutes waiting for approval

**Below the hero card, there are several sections:**

- **Monthly Revenue Chart** — A bar chart showing revenue for each month of the year
- **Weekly Revenue Chart** — A bar chart breaking down revenue week by week
- **Plan Distribution Chart** — A radial bar (donut) chart showing what percentage of institutes are on Starter, Growth, Pro, or Trial plans
- **Top Institutes Table** — A list of the 6 highest-performing institutes with their name, revenue, and a trend indicator showing whether they're growing or declining
- **Plan Distribution Cards** — Four individual cards: Starter, Growth, Pro, Trial — each showing the count of institutes on that plan
- **Recent Activity Feed** — A live feed of events happening across institutes (new signups, enrollments, purchases, etc.)

---

### 3.3 Institutes Management

**Institute List Page:**
- A table listing every institute on the platform
- Each row shows: institute name, owner name, students count, plan, status (Active/Suspended/Trial), joined date
- Actions available: View details, Suspend, Activate

**Institute Details Page:**
- Full profile of one institute
- Shows their student count, active courses, revenue generated, and plan details
- Admin can change the institute's plan or status from here

**Approve Pending Signups Page:**
- A list of institutes that have signed up but not yet been approved
- Each entry shows: institute name, owner name, contact, and signup date
- The Super Admin can **Approve** or **Reject** each request
- Approving activates the institute and sends a confirmation to the owner

---

### 3.4 Plans Management

- A list of all subscription plans available on the platform
- Each plan shows: name (Starter/Growth/Pro), price, features included, number of courses allowed, number of students allowed
- Super Admin can create new plans, edit existing ones, or deactivate plans

---

### 3.5 Billing

- A billing overview showing all payments received from institutes
- Shows invoice history, upcoming renewals, and any payment failures
- Super Admin can view individual invoices

---

### 3.6 Platform Settings

- Global configuration for the platform
- Settings like platform name, logo, contact email, feature toggles

---

## 4. Institute Admin Flow

### 4.1 Login

- The Institute Admin logs in via the main login page using their institute credentials
- After login, they land on the Admin Dashboard
- The layout switches to a **vertical sidebar navigation** on the left and a top navbar

---

### 4.2 Admin Dashboard

**The first thing the admin sees is a purple gradient hero overview card showing:**

- **Total Students** — e.g., 1,247 students (+42 this week, shown as a green badge)
- **Active Courses** — e.g., 12 courses (3 are in draft, shown in a secondary badge)
- **Revenue This Month** — e.g., ₹2.84 Lakh (with ↑18% growth indicator)
- **Pending Enrollments** — e.g., 23 students waiting to be approved

**Below this, the dashboard has multiple data sections laid out in a grid:**

**Revenue Section:**
- A large **Monthly Revenue Bar Chart** — Shows revenue for each of the 12 months
- Below the chart: three metric cards — Gross Revenue, Net Revenue, and Refunds for the current period

**Student Activity:**
- A card showing **Student Status** with two metrics: what percentage are Active vs. Inactive (e.g., Active 87.2%, Inactive 12.8%)
- A small pie/donut representation of this split

**Course Performance:**
- A **Course Tracker Radial Chart** showing Active, Draft, and Archived courses as a percentage of total
- **Learning Health Chart** — A line chart tracking new enrollments and completions week over week
- Two stat chips: New Enrollments (e.g., 127) and Completions (e.g., 89) this week

**Top Courses Table:**
- A 6-row table listing the best-performing courses
- Each row: Course Title, Enrolled Students, Revenue, Completion %, Tutor Name, a sparkline trend chart

**Course Categories:**
- Four category cards showing the distribution of courses (e.g., Criminal Law 35%, Civil Law 28%, Constitutional Law 22%, Corporate Law 15%)

**Quick Actions:**
- Six action buttons for the most common tasks the admin performs:
  1. Approve Enrollments
  2. Schedule Class
  3. Create Course
  4. Post Announcement
  5. Add Student
  6. View Reports

**Recent Activity Table:**
- A live activity feed table showing recent events
- Columns: Student Name, Action (Enrolled, Submitted, etc.), Course, Status, Time Ago

---

### 4.3 Courses

**Courses List Page:**
- A filterable table of all courses in the institute
- **Filters available:** Category, Tutor, Status (Published/Draft/Archived)
- **Table columns:** Course Title, Category, Number of Students, Assigned Tutor, Status badge, Revenue, Duration, Star Rating, Completion %
- **Actions per row:** Edit course, View curriculum, Archive/Delete
- A **Create New Course** button at the top right

**Create Course Page:**
- A form to create a new course:
  - Course Title, Category (dropdown), Description (rich text), Thumbnail image upload
  - Price, Discounted Price
  - Assign a Tutor (dropdown from the institute's tutors)
  - Duration, Tags
  - Publish or Save as Draft toggle
- A **Save** button at the bottom

**Course Details / Edit Page:**
- Same form as Create but pre-filled with existing data
- Admin can edit any field and save changes
- Also shows course-level stats: total enrolled, revenue generated, average rating

**Curriculum Builder:**
- The admin (or assigned tutor) can build the course structure here
- A **drag-and-drop** interface to organize modules and lessons
- Each module has a title; inside each module, content items can be added:
  - **Video lesson** — Upload or link a video
  - **PDF/Document** — Upload a file
  - **Quiz** — Create a quiz with questions
  - **Live Class** — Link to a scheduled live session
  - **Assignment** — Create a written assignment prompt
- Items can be reordered within a module
- Modules can be reordered relative to each other
- Each item can be marked as Free Preview (visible to non-enrolled visitors)

---

### 4.4 Students

**Students List Page:**
- A comprehensive table of every student enrolled in the institute
- **Top stat cards:** Total Students, Paid Students, Active Today, Pending Payment
- **Filters:** By Course, By Batch, By Payment Status (Paid/Pending/Failed)
- **Table columns:** Student Name, Email, Phone Number, Enrolled Courses (count), Batch, Payment Status badge, Last Active (timestamp), Progress % (progress bar)
- **Bulk actions:** Select multiple students → Send Announcement, Export Data, Change Batch
- Clicking a student row goes to their individual profile

**Student Profile Page:**
- Full profile of one student
- Shows: personal info (name, email, phone), enrolled courses with individual progress bars, payment history, assignment submission history, quiz scores, last login
- Admin can manually change payment status from here

---

### 4.5 Tutors

**Tutors List Page:**
- A table of all tutors in the institute
- Columns: Tutor Name, Email, Courses Assigned (count), Students (total across courses), Rating, Status
- An **Invite Tutor** button

**Invite Tutor Page:**
- A simple form: Tutor's email address, optional welcome message
- On submit, the platform sends an invite email with a link to register

**Tutor Profile Page:**
- Full profile of one tutor
- Shows: bio, specialization, courses they teach, their student count, their overall rating
- Admin can reassign courses or remove the tutor

---

### 4.6 Live Classes

**Live Classes List Page:**
- A list of all upcoming and past live classes across all courses
- Each entry shows: Class Title, Course it belongs to, Tutor, Scheduled Date & Time, Duration, Status (Upcoming/Live/Completed)
- A **Schedule New Class** button

**Schedule New Class Page:**
- A form to schedule a live class:
  - Title, Description
  - Select Course (dropdown)
  - Select Tutor (dropdown)
  - Date and Time picker
  - Duration (in minutes)
  - Meeting Link (Zoom/Google Meet URL)
- On save, enrolled students are notified automatically

---

### 4.7 Practice Lab (Admin View)

**Practice Lab Management Page:**
- Overview of all practice modules available in the system
- Shows: Module Name, Total Student Attempts, Average Score, Category, Difficulty
- A button to configure or add scenarios

**Scenarios Management Page (per module):**
- A list of all scenarios/challenges within a specific module (e.g., Case Drafting scenarios)
- Admin can add new scenarios, edit existing ones, or deactivate scenarios
- Each scenario has: Title, Difficulty, Description, Instructions, Expected Outcomes, XP reward

---

### 4.8 Revenue

**Revenue Dashboard:**
- A dedicated page for financial analytics
- **Summary cards:** Total Revenue, Revenue This Month, Revenue This Week, Pending Payments
- **Revenue by Course** — A bar chart showing which courses are generating the most income
- **Revenue by Month** — Trend line chart for the year
- **Transaction Table** — List of all individual transactions: Student, Course, Amount, Date, Method (UPI/Card/Netbanking), Status

**Revenue Detail Page:**
- Drill into a specific transaction or time period
- Shows full payment details

---

### 4.9 Coupons

- A table listing all discount coupons
- Each row: Coupon Code, Discount Type (Flat/%), Discount Value, Usage Limit, Times Used, Expiry Date, Status (Active/Expired)
- **Create Coupon** button — Form to create a new coupon with all settings
- Admin can deactivate or delete coupons

---

### 4.10 Announcements

- A list of all announcements sent or scheduled
- Each announcement shows: Title, Target Audience (All Students / Specific Course / Specific Batch), Date Sent, Views
- **Create Announcement** button — A form with: Title, Message body, Target audience selection, Schedule (send now or later)
- Announcements appear on the student dashboard/notification area

---

### 4.11 Reports

- Consolidated analytics and downloadable reports
- Sections available:
  - **Student Performance Report** — Completion rates, quiz scores, assignment scores by student
  - **Course Analytics** — Enrollment, drop-off, engagement by lesson
  - **Revenue Report** — Detailed financial breakdown
  - **Tutor Performance** — Classes conducted, student ratings
- Each report can be exported (CSV/PDF)

---

### 4.12 Setup

- Institute-level configuration:
  - Institute Name, Logo, Brand Color
  - Contact Email, Phone
  - Bank Account / Payment Gateway settings
  - Notification preferences (email/SMS templates)
  - Enable/Disable features (e.g., Practice Lab on/off)

---

## 5. Tutor Flow

### 5.1 Login

- Tutors log in via the Tutor Login page
- After login, they land on the Tutor Dashboard
- The layout uses a **vertical sidebar navigation** (similar to Admin but with tutor-specific sections)

---

### 5.2 Tutor Dashboard

**A purple gradient hero overview card showing:**

- **My Students** — Total students across all the tutor's courses (e.g., 560 students, +18 this week)
- **Active Courses** — e.g., 5 courses (2 are in draft)
- **Earnings This Month** — e.g., ₹48,000 (↑22% growth)
- **Pending Review** — e.g., 8 items waiting for the tutor to grade (assignments/doubts)

**Below the hero card:**

- **Monthly Earnings Bar Chart** — Shows the tutor's earnings for each month
- **Weekly Engagement Chart** — Bar chart showing how many lessons students watched each day this week
- **Course Tracker Radial Chart** — Visual breakdown of their courses: Active vs. Draft vs. Archived
- **Completion Trend Sparkline** — A small line chart showing course completion momentum
- **Top 5 Courses Table** — Their best-performing courses by enrollment count and revenue
- **Course Categories Cards** — Breakdown of which law categories their courses cover
- **Recent Activity Feed** — Last 6 events: student submissions, new enrollments, quiz completions, doubts asked

---

### 5.3 My Courses

**Courses List Page:**
- A table of all courses assigned to or created by this tutor
- Columns: Title, Students Enrolled, Revenue, Avg Rating, Status, Last Updated
- Actions: Edit, View Curriculum, Archive

**Course Details / Edit Page:**
- Same as admin course edit — tutor can update content, description, pricing (if permitted)

**Curriculum Builder:**
- Full drag-and-drop curriculum editor (same as admin view)
- Tutor can add videos, PDFs, quizzes, assignments, and live class links
- Can mark items as free preview

---

### 5.4 Live Classes

**Scheduled Classes List:**
- A list of all live classes the tutor has scheduled
- Columns: Title, Course, Scheduled Date/Time, Duration, Status, Registered Count
- A **Schedule New Class** button

**Schedule New Class Page:**
- Form: Title, Course selection, Date/Time, Duration, Meeting Link
- Students enrolled in that course are automatically notified

**Live Class Detail Page:**
- Shows full details of one class
- If the class is Upcoming: shows countdown, registered student list
- If the class is Live: shows the meeting link prominently with a Join button
- If Completed: shows attendance list

---

### 5.5 Student Doubts

- A list of all questions/doubts submitted by students to this tutor
- Each doubt shows: Student Name, Course, Question Text, Asked At (timestamp), Status (Answered/Pending)
- Tutor clicks a doubt to open it and type a reply
- Answered doubts are marked green; pending ones are highlighted

---

### 5.6 Assignments

**Assignments Review Page:**
- A list of all submitted assignments across all the tutor's courses
- Filter by: Course, Status (Submitted/Graded/Late)
- Each row: Student Name, Course, Assignment Title, Submitted At, Status
- Tutor clicks a row to open the submission

**Assignment Review Interface:**
- Shows the assignment instructions/rubric at the top
- Below: the student's submitted text/uploaded file
- A grading panel on the right:
  - Score input (e.g., out of 100)
  - Rubric-based scoring (if rubric is defined)
  - Feedback text area for written comments
- A **Submit Grade** button
- After grading, the student is notified of their score and feedback

---

### 5.7 Practice Lab (Tutor View)

**Practice Lab Management:**
- Overview of student activity in the practice lab
- Shows: Module Name, Total Attempts by students, Average Score

**Scenario Review Page:**
- For modules the tutor manages, they can review individual student submissions
- See the student's drafted document/answers and provide feedback or a score

---

### 5.8 Student Progress

- A table of all students the tutor teaches
- Columns: Student Name, Enrolled Course(s), Lessons Completed, Quiz Average Score, Assignment Score Average, Last Active, Overall Progress %
- Tutor can click a student to see a detailed breakdown of their progress in each course

---

## 6. Student Flow

### 6.1 Registration

**Signup Page:**
- New students create an account by filling in:
  - Full Name
  - Email Address
  - Phone Number
  - City
  - Password and Confirm Password
  - Agreement to Terms & Conditions checkbox
- After submitting, an **OTP verification** step appears — four separate input boxes for the 4-digit code sent to their phone/email
- Once OTP is verified, the account is created and the student is redirected to the home page

---

### 6.2 Login

**Student Login Page:**
- Email and Password fields
- A "Forgot Password" link
- After login, student lands on the Home/Dashboard page

---

### 6.3 Student Home (Dashboard)

**Welcome Section:**
- Personalized greeting: "Welcome back, [Student Name]"
- Four quick stat chips showing the student's weekly summary:
  - Hours Spent Learning (e.g., 28 hours)
  - Test Results Average (e.g., 76%)
  - Courses Completed (e.g., 3)
  - Total Time Spent (e.g., 42h 30m) with a mini bar chart showing daily activity

**Topics I'm Interested In (left section):**
- A card showing the student's learning focus across 5 law categories
- Each category has a horizontal progress bar and a percentage:
  - e.g., Criminal Law 42%, Constitutional Law 28%, Contract Law 18%, Civil Procedure 8%, Corporate Law 4%

**Popular Instructors (right section):**
- A small table showing 4 tutors the student interacts with most
- Each row: Tutor initials (avatar), Name, Specialization, Number of courses they teach

**Top Courses (right sidebar):**
- A vertical list of popular courses on the platform
- Each item: Course title and a view count/popularity indicator

**Upcoming Live Class (right sidebar):**
- A card showing the next live class the student is registered for
- Shows: Class title, Date, Time, and a prominent **Join** button

**Assignment Progress (right sidebar):**
- Four circular progress indicators (SVG rings) showing the completion percentage of each pending assignment
- Each circle shows the assignment name and % done

**Continue Learning (full width at bottom):**
- A table of the student's in-progress courses
- Columns: Course Thumbnail, Course Title, Category, Tutor Name, Total Duration, Progress Bar with %, Status badge, **Continue** button

---

### 6.4 Courses (Catalog)

**Top of the Page:**
- A hero banner with a light bulb illustration on the left, a search bar in the center ("Search for courses..."), and a rocket illustration on the right
- This sets a welcoming, exploratory tone

**My Courses Card (main content):**
- A heading "My Courses" with a count badge
- **Filters:**
  - Category filter dropdown
  - A toggle switch: "Hide Completed" — hides courses the student has already finished
- **Course Grid (3 columns):**
  - Each course card shows:
    - Course thumbnail image
    - Category badge (colored: e.g., blue for Criminal Law)
    - Star rating (e.g., 4.8 ⭐) with review count
    - Course Title (bold)
    - Short description (2 lines, truncated)
    - Duration badge or a green "Completed" badge
    - Progress bar (e.g., 65% complete)
    - Action buttons:
      - If not started: **Start** button
      - If in progress: **Continue** button
      - If completed: **Start Over** + **Review** buttons
- Pagination at the bottom to navigate pages of courses

**Promotional Banners (below the grid):**
- Two horizontal cards: "Earn a Certificate" and "Best Rated Courses" — encouraging deeper engagement

**Free Trial Lessons (3 columns):**
- Preview cards for trial lessons from top tutors
- Each card: Tutor name, lesson title, duration, a **Watch Free** button

---

### 6.5 Course Landing Page

This is the page a student sees when they click a course they're not yet enrolled in (or when they click on an available course).

**Left Section (main content):**
- Breadcrumb navigation (e.g., Home > Courses > Criminal Law > Murder under IPC)
- Category badge (e.g., "Criminal Law")
- Large Course Title
- One-line Subtitle or tagline
- Course Description paragraph
- Star rating display (5 filled/half-filled stars) with number of reviews
- Tutor info: "By [Tutor Name]" as a clickable link
- **Stats Bar:**
  - 24 Lessons
  - 12.5 Hours of content
  - 1,847 Students Enrolled
  - Lifetime Access
  - Certificate on Completion

**What You'll Learn (below stats):**
- A checklist of 6 learning outcomes in a 2-column grid (e.g., "Understand the elements of murder under IPC", "Draft a bail application confidently")

**Course Curriculum (expandable):**
- A list of all modules/sections in the course
- One module is expanded by default showing its individual lessons
- Each lesson item shows:
  - An icon representing the type (video, PDF, quiz, live class, assignment)
  - Lesson title
  - Duration
  - A lock icon (if premium) or a free preview badge (if free)
  - A completion checkmark (if the student has done it)

**Your Instructor:**
- Tutor's profile photo
- Name and Specialization
- Stats: Star rating, total students taught, total courses
- Short bio paragraph

**Student Reviews:**
- Overall rating (e.g., 4.8 out of 5)
- Rating distribution bar chart (how many students gave 5 stars, 4 stars, etc.)
- Three individual review cards: reviewer avatar, name, date, star rating, review text

**Right Sidebar (sticky — stays visible while scrolling):**
- Course thumbnail image with a play button overlay
- **Price:** ₹5,999 (original price ₹9,999 struck through) with a "40% Off" badge
- **Countdown Timer:** "Offer ends in 2 days 14:23:09" (creates urgency)
- **Coupon Code Input:** Text field + Apply button
- **"Enroll Now" button** (large, prominent, primary color)
- **"Try Free Preview" button** (secondary, below Enroll Now)
- **What's Included checklist** (7 items with check icons):
  - e.g., 24 on-demand video lessons, 12 downloadable PDFs, 5 practice quizzes, 2 live Q&A sessions, AI Tutor access, Certificate of Completion, Lifetime Access

---

### 6.6 Checkout

- Order summary showing: Course name, original price, discount applied, coupon discount (if any), **Total Amount**
- Payment method selection: UPI, Credit/Debit Card, Net Banking
- Form fields change based on selected method (UPI ID, Card number/expiry/CVV, etc.)
- A **Pay Now** button
- After successful payment, student is enrolled and redirected to the course player

---

### 6.7 Course Player (Learning Interface)

**This is where the main learning happens.**

**Left Sidebar (Curriculum Navigator):**
- A collapsible sidebar listing all modules and their lessons
- Each module has a header with its title and can be expanded/collapsed
- Completed lessons show a green checkmark
- Current lesson is highlighted
- Student can click any lesson to jump to it

**Main Content Area (center):**
- The content of the current lesson is displayed here
- **Video Lesson:** A video player with standard controls (play/pause, volume, speed, fullscreen)
- **PDF Lesson:** An embedded PDF viewer with pagination controls and a download button
- **Quiz:** Interactive quiz interface (described in 6.8)
- **Assignment:** Submission interface (described in 6.9)
- **Live Class:** A button to join the live session + details

**Below the main content:**
- **Previous / Next Lesson** navigation buttons
- The lesson title and which module it belongs to

---

### 6.8 Quiz Interface

**Taking a Quiz:**
- The quiz title and instructions are shown at the top
- A countdown timer in the top right corner (if time-limited)
- Questions are displayed one at a time or all at once (depending on settings):
  - Question text
  - Answer options (radio buttons for single-choice, checkboxes for multi-choice)
  - Some questions may have a code snippet or short text field
- A progress indicator showing "Question 3 of 10"
- A **Submit Quiz** button at the end

**Quiz Results Page:**
- Shows immediately after submission
- **Score card:** e.g., "76 / 100" in a large circle, color-coded (green for pass, red for fail)
- Pass/Fail badge
- Percentage
- **Answer Review Section:**
  - Each question is listed again
  - The student's chosen answer is shown
  - The correct answer is highlighted in green
  - Wrong answers the student picked are shown in red
  - An explanation is shown for each question (if configured by the tutor)
- A **Retake Quiz** button (if attempts remaining) or a **Next Lesson** button

---

### 6.9 Assignment Submission

- The assignment title and instructions are shown
- The grading rubric (if set) is displayed so the student knows what they'll be evaluated on
- A large **text editor area** for writing the answer
- An **Upload File** option (drag-and-drop or click to browse) for supporting documents
- A **Submit Assignment** button
- After submission, the status changes to "Submitted — Awaiting Review"
- Once the tutor grades it, the student sees their score and written feedback here

---

### 6.10 Live Class (Student View)

- A page showing the live class details: title, tutor, start time, duration
- A countdown if the class hasn't started yet
- When the class goes live, a prominent **Join Live Class** button appears (links to Zoom/Google Meet)
- After the class: the recording may appear here (if provided by the tutor)

---

## 7. Practice Lab — Detailed Module Breakdown

### 7.1 Practice Lab Home

**Hero Banner:**
- Title: "Legal Practice Lab — Sharpen Your Skills"
- Subtitle about real-world skill development

**Student Stats Strip (below the hero):**
- **XP (Experience Points):** e.g., 2,340 XP
- **Level:** e.g., Level 5 — Associate (with the level title)
- **Streak:** e.g., 7 Days 🔥 (consecutive days practicing)
- **Sessions Completed:** e.g., 14 total sessions
- **Progress to Next Level:** A progress bar showing 78% to Level 6

**Continue Your Practice:**
- Cards for modules the student has already started but not completed
- Each card: Module name, progress bar (e.g., 3/5 challenges done), a **Continue** button

**Practice Modules Grid (main section):**
- Filter tabs across the top: **All | In Progress | Completed | Not Started**
- 3-column card grid of all available modules
- Each module card shows:
  - A unique illustration thumbnail (e.g., bail document, FIR, contract)
  - **Difficulty Badge:** Beginner (green), Intermediate (yellow), Advanced (red)
  - **Category Badge:** e.g., Criminal Law, Contract Law
  - Module Title
  - 2-line description
  - XP Reward (e.g., "200 XP")
  - Estimated time (e.g., "45–60 min")
  - Progress bar (if started)
  - Action button:
    - Not started → **Start Module**
    - In progress → **Continue**
    - Completed → **Start Over** or **Retry**

**Bottom Section — Two Tabs:**

**Tab 1: Leaderboard**
- A ranked list of the top 5 students in the institute by total XP
- Each row: Rank (#1, #2, #3...), Student Name, XP Points, Level
- The current student's rank is highlighted (even if they're outside top 5)

**Tab 2: Activity**
- Four stat cards summarizing the student's practice performance:
  - Sessions Completed (total)
  - Cases Drafted (total documents created)
  - Average Accuracy (% score across all attempts)
  - XP Earned This Week

---

### 7.2 Case Drafting Studio

**What it is:** The student is given a real legal scenario and must draft a formal legal document (bail application, petition, FIR, charge sheet, etc.).

**Screen Layout:**

**Left Panel — Context & Instructions:**
- The scenario facts (e.g., "Your client has been arrested under Section 302 IPC...")
- Document type to draft (e.g., "Draft a Bail Application")
- Key elements to include (a checklist of must-have clauses/sections)
- Relevant legal provisions and sections

**Center — Drafting Area:**
- A paper-styled text editor (looks like a real legal document)
- Standard formatting toolbar: Bold, Italic, Underline, Numbered List, Insert Clause tag
- The student types/drafts the document here
- The document area has legal paper styling (lines, formal margins)

**Right Panel — AI Drafting Assistant:**
- An AI chat panel
- The student can ask the AI: "What should I write in the prayer section?", "Is this format correct?", "Suggest a relevant case law"
- The AI responds with guidance, suggestions, and corrections
- The AI does NOT write the document for the student — it guides

**Bottom Bar:**
- **Submit Draft** button — submits for review/scoring
- **Save Draft** button — saves progress and exits
- Word count display

**Difficulty:** Intermediate | **XP:** 200 | **Time:** 45–60 min

---

### 7.3 Moot Court Simulator

**Status:** Coming Soon

**What it will be:** A virtual courtroom where the student argues a case. The AI will play opposing counsel and the judge, asking questions and making objections. The student must respond in real time.

**Difficulty:** Advanced | **XP:** 350 | **Time:** 30–45 min

---

### 7.4 Client Interview Room

**What it is:** A realistic simulation of a lawyer-client first meeting. The student must interview a virtual client to gather facts, identify legal issues, and build rapport.

**Screen Layout:**

**Left Panel — Client Profile:**
- Client avatar (illustration)
- Client name and brief profile
- **Current Emotional State indicator** — shows how the client is feeling (Nervous, Upset, Cooperative, Defensive) — this changes based on how the student conducts the interview
- Client's opening statement

**Center — Chat Interface:**
- A chat-style interface where the student types questions and the virtual client responds
- The conversation flows naturally
- Some responses from the client contain **hidden facts** — these are only revealed if the student asks the right follow-up questions
- The interface looks like a real WhatsApp/messenger chat

**Right Panel — Interview Toolkit:**
- **Hidden Facts Checklist:** A list of facts that need to be discovered during the interview. Items are greyed out until discovered. As the student asks the right questions, items check off.
- **Quick Questions:** Pre-defined question suggestions the student can click to use (e.g., "Can you describe what happened?", "Were there any witnesses?")
- **Legal Provisions Sidebar:** Relevant laws that may apply based on the scenario (shown as hints)

**Scenarios Available:**
- Domestic Violence case
- Inheritance Dispute
- Wrongful Dismissal (Employment)
- Others depending on configuration

**Difficulty:** Beginner | **XP:** 150 | **Time:** 20–30 min

---

### 7.5 Contract Drafting Desk

**What it is:** The student selects a contract type and drafts a complete commercial contract from scratch with AI assistance.

**Template Selection (first step):**
- Four contract templates to choose from:
  - **NDA** (Non-Disclosure Agreement) — with an NDA illustration
  - **Service Agreement** — with a service agreement illustration
  - **Lease Deed** — with a lease deed illustration
  - **Employment Contract** — with an employment contract illustration
- The student clicks one to begin drafting

**Drafting Screen Layout:**

**Left Sidebar — Drafting Guide:**
- **Drafting Brief:** The scenario (e.g., "Draft an NDA between Tech Corp and Freelancer XYZ for a 6-month software project")
- **Scenario Facts:** Key details (parties, dates, terms)
- **Essential Clauses Checklist:** Must-include clauses (e.g., Definition of Confidential Information, Obligations, Duration, Exclusions, Remedies). Items check off as the student includes them.
- **Legal Framework:** Relevant acts and legal context
- **Tips Section:** Drafting tips (e.g., "Use precise language in the Definition clause")

**Center — Contract Editor:**
- A large paper-styled textarea for typing the contract
- Formatting toolbar: Bold, Italic, Numbered List, Insert Clause Label
- The document looks like a real legal contract

**Right Panel — AI Drafting Assistant (Floating):**
- A chat interface that slides in from the right
- Student can ask: "What clauses are missing?", "How should I word the obligations section?", "Check my confidentiality clause"
- The AI provides feedback, suggests language, and flags issues

**Difficulty:** Intermediate | **XP:** 250 | **Time:** 40–60 min

---

### 7.6 Legal Research Arena

**Status:** Coming Soon

**What it will be:** A research simulation where the student is given a legal question and must find relevant case laws, statutes, and legal principles, then write a research note.

**Difficulty:** Intermediate | **XP:** 180 | **Time:** 25–35 min

---

### 7.7 Courtroom Argument Builder

**What it is:** The student constructs a structured oral argument using the **IRAC framework** (Issue, Rule, Application, Conclusion).

**The student is given:**
- A case fact pattern
- Which side they must argue (Prosecution/Defense or Plaintiff/Defendant)

**The Interface:**
- A structured form/builder:
  - **Issue:** What is the legal question being argued?
  - **Rule:** What law/statute/precedent applies?
  - **Application:** How does the rule apply to these facts?
  - **Conclusion:** What is the logical outcome?
- Each section has a text area
- An AI assistant provides hints if the student is stuck
- A **Build Argument** button to finalize and submit

**Difficulty:** Advanced | **XP:** 300 | **Time:** 20–25 min

---

## 8. AI Tutor System

### 8.1 What is LexAI?

LexAI is the platform's built-in AI tutor, specialized in law. Students access it from the main navigation. It answers legal questions, explains concepts, gives IRAC-formatted analysis, and helps with exam preparation.

---

### 8.2 AI Tutor Screen Layout

The page is divided into two areas:

**Left Sidebar:**
- **LexAI branding** — Logo and "LexAI — Your Law Tutor" header
- **New Chat** button — Starts a fresh conversation
- **Recent Sessions** — A list of the student's last 5 chat sessions with LexAI, each showing the topic/title and a timestamp. Clicking one reopens that conversation.
- **Quick Prompts** — Six pre-written question prompts the student can click to instantly start a relevant conversation (e.g., "Explain bail under CrPC", "What is the difference between murder and culpable homicide?")
- **Token Usage Meter** — A progress bar showing how much of the student's monthly AI quota they've used (e.g., 34% used — 3,400 of 10,000 tokens)

**Main Chat Area:**
- **Header:**
  - LexAI avatar + name
  - "Online" status dot (green)
  - Current subject context display (e.g., "Criminal Law · IPC Chapter XVI")
  - Action buttons: Refresh conversation, Download chat transcript, More options (⋮)

- **Messages List:**
  - **Student messages** appear on the right side in blue bubbles with the question text and a sent timestamp with a double-checkmark
  - **LexAI responses** appear on the left side in white/light grey bubbles

- **LexAI Response Formats:**
  The AI uses structured formats for different types of answers:
  - **IRAC Analysis Blocks** (for case/scenario questions):
    - A color-coded structured block with four labeled sections:
      - **ISSUE** — Red/orange badge label, followed by the issue statement
      - **RULE** — Yellow badge, followed by the applicable law
      - **APPLICATION** — Blue badge, followed by multi-paragraph analysis
      - **CONCLUSION** — Green badge, followed by the conclusion
  - **Text Explanation Blocks** — For general explanations with optional headings and tip callouts
  - **Reference Tags** — Grey pill badges at the bottom of relevant responses showing cited sections (e.g., "Sec 299 IPC", "Sec 304 IPC", "Article 21")

- **Chat Footer:**
  - **Quick Action Chips** — Five clickable suggestion chips the student can tap to send a follow-up:
    - "Explain simply"
    - "Give an IRAC"
    - "List key cases"
    - "Practice question"
    - "Summarise topic"
  - **Message Input Bar:**
    - A text field: "Ask LexAI anything about law..."
    - **Microphone button** — Voice input option
    - **Attachment button** — Upload a document/image for the AI to analyze
    - **Send button**

---

## Summary: Complete Screen List by Role

### Super Admin Screens
| Screen | Path | Purpose |
|--------|------|---------|
| Login | /login | Super admin authentication |
| Dashboard | /super-admin/dashboard | Platform overview — institutes, revenue, plans |
| Institutes List | /super-admin/institutes | View and manage all institutes |
| Institute Details | /super-admin/institutes/[id] | Individual institute profile and management |
| Approve Signups | /super-admin/institutes/approve | Review and approve new institute requests |
| Plans | /super-admin/plans | Manage subscription plans |
| Billing | /super-admin/billing | Platform-wide billing and invoices |
| Settings | /super-admin/settings | Platform configuration |

### Institute Admin Screens
| Screen | Path | Purpose |
|--------|------|---------|
| Dashboard | /admin/dashboard | Institute overview — students, courses, revenue |
| Courses List | /admin/courses | View all courses |
| Create Course | /admin/courses/create | Add a new course |
| Course Details | /admin/courses/[id] | Edit a course |
| Curriculum Builder | /admin/courses/[id]/curriculum | Build course content |
| Students List | /admin/students | View and manage all students |
| Student Profile | /admin/students/[id] | Individual student details |
| Tutors List | /admin/tutors | View and manage tutors |
| Invite Tutor | /admin/tutors/invite | Send a tutor invite |
| Tutor Profile | /admin/tutors/[id] | Individual tutor details |
| Live Classes | /admin/live-classes | View all live classes |
| Schedule Class | /admin/live-classes/schedule | Schedule a new live class |
| Practice Lab | /admin/practice-lab | Manage practice modules |
| Module Scenarios | /admin/practice-lab/[moduleId]/scenarios | Manage scenarios for a module |
| Revenue | /admin/revenue | Financial dashboard |
| Revenue Detail | /admin/revenue/[id] | Detailed transaction view |
| Coupons | /admin/coupons | Manage discount codes |
| Announcements | /admin/announcements | Create and manage announcements |
| Reports | /admin/reports | Analytics and reports |
| Setup | /admin/setup | Institute configuration |

### Tutor Screens
| Screen | Path | Purpose |
|--------|------|---------|
| Login | /tutor/login | Tutor authentication |
| Dashboard | /tutor/dashboard | Teaching overview — students, earnings, classes |
| My Courses | /tutor/courses | List of tutor's courses |
| Course Details | /tutor/courses/[id] | Edit a course |
| Curriculum Builder | /tutor/courses/[id]/curriculum | Build/edit course content |
| Live Classes | /tutor/live-classes | View scheduled classes |
| Schedule Class | /tutor/live-classes/schedule | Schedule a new class |
| Class Details | /tutor/live-classes/[id] | View one class details |
| Student Doubts | /tutor/doubts | Answer student questions |
| Assignments | /tutor/assignments | Grade student assignments |
| Practice Lab | /tutor/practice-lab | Manage practice scenarios |
| Scenario Review | /tutor/practice-lab/[moduleId]/scenarios/[scenarioId] | Review student submissions |
| Student Progress | /tutor/students | View student analytics |

### Student Screens
| Screen | Path | Purpose |
|--------|------|---------|
| Signup | /student/signup | New student registration + OTP |
| Login | /student/login | Student authentication |
| Home | /student/home | Student dashboard — stats, progress, upcoming |
| Courses Catalog | /student/courses | Browse enrolled courses |
| Course Landing | /student/courses/[id] | Course details before enrolling |
| Checkout | /student/checkout | Payment for enrollment |
| Course Player | /student/learn/[courseId] | Main learning interface |
| Lesson | /student/learn/[courseId]/lesson/[lessonId] | Watch a video lesson |
| Quiz | /student/learn/[courseId]/quiz/[quizId] | Take a quiz |
| Quiz Results | /student/learn/[courseId]/quiz/[quizId]/results | Review quiz answers |
| Assignment | /student/learn/[courseId]/assignment/[assignmentId] | Submit an assignment |
| Live Class | /student/learn/[courseId]/live/[classId] | Join a live class |
| PDF Viewer | /student/learn/[courseId]/pdf/[pdfId] | View a PDF document |
| AI Tutor | /student/ai-tutor | Chat with LexAI |
| Practice Lab Home | /student/practice-lab | Practice modules, leaderboard, stats |
| Case Drafting | /student/practice-lab/case-drafting/[id] | Draft legal documents |
| Client Interview | /student/practice-lab/client-interview | Virtual client simulation |
| Contract Drafting | /student/practice-lab/contract-drafting | Draft commercial contracts |
| Courtroom Argument | /student/practice-lab/courtroom-argument | Build oral arguments |

---

*Document last updated: April 2026*
