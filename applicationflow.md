# LexEd — Complete Application Flow & Feature Documentation

> White-label SaaS platform for law coaching institutes.
> Four user roles: Super Admin, Institute Admin, Tutor (optional), Student.

---

## Table of Contents

- [Role 1 — Super Admin](#role-1--super-admin)
- [Role 2 — Institute Admin](#role-2--institute-admin)
- [Role 3 — Tutor](#role-3--tutor)
- [Role 4 — Student](#role-4--student)
- [Shared Module — Legal Practice Lab](#shared-module--legal-practice-lab)

---

---

# Role 1 — Super Admin

> LexEd platform owner. Manages all institutes, plans, billing, and platform settings.

---

## Flow 1: Authentication

### Screen 1 — Super Admin Login
- Email and password fields
- "Forgot password" link → OTP-based reset via email
- Session-based JWT authentication
- Redirect to Super Admin Dashboard on success
- Failed login: show error after 3 attempts, trigger CAPTCHA

---

## Flow 2: Platform Overview

### Screen 2 — Super Admin Dashboard
- **Platform stats (top cards):**
  - Total institutes onboarded (all time)
  - Total active students across all institutes
  - Total platform revenue this month
  - New institute signup requests pending approval
- **Charts:**
  - Line chart: new institute signups over last 12 months
  - Bar chart: monthly platform revenue trend
  - Pie chart: plan distribution (Starter / Growth / Pro)
- **Activity feed:**
  - Real-time feed of events: new institute signed up, plan upgraded, payment failed, institute suspended
- **Quick actions:**
  - Approve pending institutes
  - View failed payments
  - Go to platform settings

---

## Flow 3: Institute Management

### Screen 3 — All Institutes List
- **Table columns:** Institute name, Owner name, Plan, Student count, Revenue this month, Signup date, Status (Active / Trial / Suspended / Pending)
- **Search:** by institute name or owner email
- **Filters:** by plan type, status, region/state
- **Sorting:** by revenue, student count, signup date
- **Bulk actions:** Export list as CSV
- Click any row → Institute Detail View

### Screen 4 — Institute Detail View
- **Profile section:**
  - Institute name, logo, subdomain URL
  - Owner name, email, phone
  - Registered address
  - Date onboarded
- **Plan and billing:**
  - Current plan name
  - Renewal date
  - Amount paid
  - Payment method on file
- **Usage stats:**
  - Total students enrolled
  - Total tutors added
  - Total courses published
  - Storage used vs limit
  - AI usage tokens used vs quota
- **Revenue section:**
  - Revenue generated this month
  - All-time revenue
  - Platform fee collected
- **Actions:**
  - Edit institute profile
  - Upgrade or downgrade plan
  - Suspend institute (with reason)
  - Reactivate suspended institute
  - Reset owner password
  - Delete institute (with confirmation modal)

### Screen 5 — Approve New Institute
- **Application details displayed:**
  - Institute name and type (coaching centre / law school / individual tutor)
  - Owner name, email, phone, city
  - Expected student count
  - Plan selected during signup
- **Verification info:**
  - GST number (if provided)
  - Website or social link (if provided)
- **Actions:**
  - Approve → auto-sends welcome email and login credentials
  - Reject → mandatory reason field → rejection email sent to applicant
  - Request more info → send custom message to applicant

---

## Flow 4: Plan and Billing Management

### Screen 6 — Plans List
- **Plan cards:** Starter, Growth, Pro (editable)
- **Each plan shows:**
  - Monthly and annual pricing
  - Max students allowed
  - Max courses allowed
  - Max tutors allowed
  - AI usage quota (tokens/month)
  - Storage limit (GB)
  - Features included: Live classes, Practice Lab, Custom branding, API access
- **Actions:**
  - Edit any plan limit or price
  - Create new plan
  - Archive a plan (existing institutes on that plan are grandfathered)

### Screen 7 — Billing Overview
- **Summary cards:** Total revenue collected, Pending payments, Failed payments this month
- **Transaction table:**
  - Institute name, Plan, Amount, Date, Status (paid / pending / failed / refunded)
  - Filter by status, date range
  - Export to CSV
- **Upcoming renewals list:**
  - Institutes renewing in the next 7 days
- **Failed payment actions:**
  - Retry payment
  - Notify institute owner
  - Grace period toggle (extend access by X days)
- **Invoice management:**
  - Auto-generated invoice per transaction
  - Download as PDF per invoice

---

## Flow 5: Platform Settings

### Screen 8 — Global Settings
- **Branding:**
  - Platform name
  - Platform logo
  - Primary color (applied to all institute login pages)
  - Favicon
- **Email templates:**
  - Welcome email (institute)
  - Welcome email (student)
  - Payment confirmation
  - Password reset
  - Course enrollment confirmation
  - Each template: editable subject line and body with merge tags
- **Feature flags:**
  - Enable/disable AI features globally
  - Enable/disable Legal Practice Lab globally
  - Enable/disable Live Classes globally
  - Maintenance mode toggle (shows maintenance page to all users)
- **Security settings:**
  - Session timeout duration
  - Max login attempts before lockout
  - Force 2FA for institute admins toggle

---

---

# Role 2 — Institute Admin

> Law coaching institute owner or manager. Manages courses, students, tutors, payments, and content.

---

## Flow 1: Onboarding (First-time Setup Wizard)

### Screen 9 — Setup Wizard: Step 1 — Brand Setup
- Upload institute logo (PNG/JPG, max 2MB)
- Enter institute full name
- Enter display name (shown to students)
- Choose subdomain: `[name].lexed.in`
- Preview subdomain availability (real-time check)
- Progress bar: Step 1 of 3

### Screen 10 — Setup Wizard: Step 2 — Add First Course
- Option A: Create a course now (goes to course creation flow)
- Option B: Skip and add later
- Option to invite tutors (enter email addresses)
- Note displayed: "Tutors are optional — you can sell courses directly"
- Progress bar: Step 2 of 3

### Screen 11 — Setup Wizard: Step 3 — Payment Setup
- Select payment gateway: Razorpay or Stripe
- Connect gateway: enter API key and secret
- Set default currency: INR / USD / AED / CAD
- Test payment toggle (test mode before going live)
- Finish Setup → redirect to Admin Dashboard
- Progress bar: Step 3 of 3 — Done

---

## Flow 2: Admin Dashboard

### Screen 12 — Institute Admin Dashboard
- **Top stat cards:**
  - Total students enrolled (all courses)
  - Total active courses
  - Revenue this month
  - Pending enrollments (students who paid but not confirmed)
- **Charts:**
  - Line chart: student enrollment over last 6 months
  - Bar chart: revenue by course (top 5 courses)
- **Today's schedule widget:**
  - Upcoming live classes today with time, course, tutor name
  - Join link per class
- **Recent student activity feed:**
  - Student enrolled, student completed lesson, student submitted assignment, new doubt asked
- **Quick action buttons:**
  - Create New Course
  - Add Student manually
  - Schedule Live Class
  - Send Announcement

---

## Flow 3: Course Management

### Screen 13 — All Courses List
- **Course cards/table view toggle**
- **Each course shows:**
  - Thumbnail
  - Course title
  - Subject category tag
  - Enrolled student count
  - Tutor assigned (or "Direct — No Tutor")
  - Status badge: Draft / Published / Archived
  - Revenue earned
- **Actions per course:** Edit, View Students, Archive, Duplicate
- **Top actions:** Create New Course button, Filter by status/subject

### Screen 14 — Create New Course: Step 1 — Basic Details
- Course title field
- Short description (shown in course card)
- Long description (shown in course landing page)
- Subject category dropdown: Criminal Law, Civil Law, Constitutional Law, Contract Law, Family Law, Corporate Law, etc.
- Course level: Beginner / Intermediate / Advanced
- Course thumbnail upload
- **Pricing:**
  - Free toggle
  - Paid: enter price
  - Discounted price (original price struck through)
- **Tutor assignment:**
  - Assign from existing tutors list (optional)
  - Leave unassigned (admin manages directly)
- Next Step button

### Screen 15 — Create New Course: Step 2 — Curriculum Builder
- **Section (module) management:**
  - Add Section button → enter section title
  - Drag to reorder sections
  - Delete section (with confirmation)
- **Lesson management inside each section:**
  - Add Lesson dropdown options:
    - Video lesson
    - PDF notes
    - Live class
    - Quiz
    - Assignment
  - Drag to reorder lessons within a section
  - Each lesson row shows: type icon, title, duration (for video), publish toggle
- **Lesson quick-edit inline:** click lesson title to rename
- **Preview curriculum:** see how students will view it
- Save as Draft or Publish Course buttons

### Screen 16 — Course Detail — Admin View
- **Overview tab:**
  - Total enrolled students
  - Completion rate percentage
  - Average quiz score
  - Revenue earned
  - Last updated date
- **Curriculum tab:**
  - Full section and lesson list
  - Edit any lesson, add new lesson, reorder
- **Students tab:**
  - List of enrolled students with progress percentage
  - Filter by completion status
  - Individual student progress on click
- **Analytics tab:**
  - Lesson-wise completion drop-off chart
  - Most rewatched lessons
  - Average time spent per lesson
- **Settings tab:**
  - Change course price
  - Change tutor
  - Archive or unpublish course
  - Certificate template selection

---

## Flow 4: Student Management

### Screen 17 — All Students List
- **Table columns:** Name, Email, Phone, Enrolled Courses, Batch, Payment Status, Last Active, Overall Progress
- **Filters:** by course, batch, payment status, activity (active last 7 days / inactive)
- **Search:** by name, email, phone
- **Bulk actions:** Send message, Export CSV, Mark selected as paid, Assign to batch
- **Add Student manually** button → enter details and enroll in course
- Click student row → Student Profile

### Screen 18 — Student Profile
- **Personal info:** Name, email, phone, city, date of joining
- **Enrolled courses section:**
  - Each course: progress bar, completion percentage, last accessed date, quiz scores
- **Payment history:**
  - All transactions: course, amount, date, status
  - Download invoice per transaction
- **Activity log:**
  - Lessons watched, quizzes taken, assignments submitted, doubts asked (timeline view)
- **Admin notes field:** private notes visible only to admin
- **Actions:**
  - Enroll in another course
  - Reset student password
  - Send direct message
  - Revoke access

---

## Flow 5: Tutor Management (Optional)

### Screen 19 — All Tutors List
- **Table columns:** Name, Email, Subject specialization, Courses assigned, Student count, Status (Active / Invited / Inactive)
- **Actions per tutor:** Edit permissions, Assign course, Deactivate
- **Invite Tutor** button

### Screen 20 — Invite Tutor
- Enter tutor name and email
- Select subject specialization
- Assign to course (optional — can assign later)
- **Set permissions:**
  - Can upload video lessons
  - Can upload PDF notes
  - Can create quizzes
  - Can schedule and conduct live classes
  - Can view student progress
  - Can reply to student doubts
  - Can review assignments
- Send Invitation button → tutor receives email with login setup link

---

## Flow 6: Live Class Management

### Screen 21 — Schedule a Live Class
- Select course
- Select section (module) the class belongs to
- Class topic / title
- Date picker
- Start time and duration
- Platform: paste Zoom/Google Meet link or use built-in
- Notify enrolled students: toggle (sends email + in-app notification)
- Recurring class toggle: daily / weekly
- Save Class button

### Screen 22 — Live Classes Calendar
- **Calendar view:** monthly/weekly toggle
- Each class block on calendar shows: course name, tutor/admin, time
- Click class → class detail popup:
  - Full details
  - Enrolled student count
  - Join link
  - Edit or Cancel class option
  - Mark attendance manually option
- **List view toggle:** table of all upcoming classes sorted by date

---

## Flow 7: Payments

### Screen 23 — Revenue Overview
- **Summary cards:** Total collected (all time), This month, Pending, Refunds issued
- **Transaction table:**
  - Student name, Course, Amount, Payment method, Date, Status
  - Filter by date range, course, status
  - Export to CSV
- **Course-wise revenue breakdown:** bar chart
- **Payout section:** View balance, Request payout to bank account

### Screen 24 — Coupons and Discounts
- **Active coupons table:** Code, Discount type (% or fixed), Value, Expiry, Usage count vs limit, Status
- **Create Coupon form:**
  - Coupon code (auto-generate or manual)
  - Discount: percentage or fixed amount
  - Applicable courses: all courses or specific courses
  - Expiry date
  - Usage limit (total and per student)
  - Minimum cart value (optional)
- Edit and Deactivate options per coupon

---

## Flow 8: Announcements

### Screen 25 — Send Announcement
- **Audience selector:**
  - All students (entire institute)
  - Students in a specific course
  - Students in a specific batch
- Message title
- Message body (rich text editor)
- Attach file toggle (PDF attachment)
- **Delivery channels:**
  - In-app notification
  - Email
  - Both
- Schedule toggle: send now or pick date and time
- Preview before sending
- Send button → confirmation modal with audience count shown

---

## Flow 9: Reports

### Screen 26 — Reports
- **Report types (tabs):**
  - Student Performance: completion rates, quiz averages, inactive students
  - Revenue: monthly revenue, course-wise breakdown, pending payments
  - Course Completion: per-course completion funnel
  - Attendance: live class attendance per student per class
  - Practice Lab: student practice scores and activity
- **Filters per report:** date range, course, batch
- **Export options:** Download as PDF or CSV per report
- **Scheduled reports toggle:** auto-email weekly summary to admin

---

---

# Role 3 — Tutor

> Assigned by Institute Admin. Optional role. Can manage content, conduct live classes, handle student doubts, and review assignments for assigned courses.

---

## Flow 1: Authentication

### Screen 27 — Tutor Login
- Institute subdomain auto-detected from URL
- Email and password
- Institute logo and name shown on login page
- First-time login: forced password change screen
- Forgot password: OTP to registered email

---

## Flow 2: Tutor Dashboard

### Screen 28 — Tutor Dashboard
- **My courses list:** course title, enrolled student count, completion rate, next live class
- **Today's schedule:** upcoming live classes with time and join button
- **Pending items:**
  - Unanswered doubt questions count
  - Unreviewed assignment submissions count
- **Recent student activity:** who watched a lesson, who submitted an assignment
- **Quick actions:** Upload Lesson, Schedule Class, View Doubts

---

## Flow 3: Content Management

### Screen 29 — My Course — Curriculum View
- Full section and lesson tree for the assigned course
- Each lesson row: type icon (video / PDF / quiz / assignment / live), title, duration, publish status toggle
- **Actions per lesson:** Edit, Delete, Preview
- **Add content button:** dropdown to add video, PDF, quiz, or assignment to any section
- Drag to reorder lessons
- Add new section button

### Screen 30 — Upload Video Lesson
- Video file upload (drag and drop or browse)
- Upload progress bar with percentage
- Processing status: "Transcoding video..." → "Ready"
- Lesson title field
- Description (rich text)
- Attach supplementary PDF notes (optional)
- Attach additional resources: links or files
- Preview lesson before publishing
- Save as Draft or Publish toggle
- Estimated watch time auto-calculated from video duration

### Screen 31 — Upload PDF Notes
- PDF file upload
- Notes title
- Description
- Associated lesson or section selector
- Tags: subject tags for searchability
- Preview PDF inline
- Publish toggle

### Screen 32 — Create Quiz
- Quiz title
- Instructions for students (optional)
- **Question builder:**
  - Add question button
  - Question text field (rich text — supports math and legal notation)
  - 4 option fields
  - Mark correct answer toggle per option
  - Explanation field for correct answer (shown to student after attempt)
  - Delete question button
  - Reorder questions via drag
- **Quiz settings:**
  - Total marks
  - Passing score percentage
  - Time limit toggle: set minutes
  - Shuffle questions toggle
  - Shuffle options toggle
  - Allow reattempt toggle: max attempts
  - Show result immediately or after deadline
- Preview quiz as student
- Save and Publish

---

## Flow 4: Live Classes

### Screen 33 — Schedule Live Class
- Course selector (from assigned courses)
- Section selector
- Class topic
- Date and time picker
- Duration selector
- Platform: paste external link or use built-in
- Notify students toggle
- Save

### Screen 34 — Start Live Class
- Class details summary: topic, course, scheduled time
- Live attendee count (updates in real time)
- Start class button (launches Zoom or built-in room)
- Share join link button
- End class button
- After class ends: mark attendance screen
  - Auto-populated list of who joined
  - Manual toggle per student to mark present or absent
  - Save attendance

---

## Flow 5: Student Interaction

### Screen 35 — Doubt Queue
- **List of pending doubts:**
  - Student name and avatar
  - Course and lesson the doubt is from
  - Question text
  - Time posted
  - Status: unanswered / answered
- Filter by: course, lesson, date, status
- Click doubt → open reply panel
  - Student's question displayed
  - Rich text reply editor
  - Attach image or file
  - Submit reply → student gets in-app notification
- Mark as resolved button
- Resolved doubts archive

### Screen 36 — Assignment Review
- **Submissions list:**
  - Student name, assignment title, course, submitted time, status (pending review / reviewed)
- Click submission → open review screen:
  - Assignment brief/instructions shown at top
  - Student's submitted work (text or file)
  - Marks field: enter out of total
  - Written feedback: rich text editor
  - Add inline comments toggle (for text submissions)
  - Return to Student button → student receives marks and feedback notification
- Filter by: course, status, date

---

## Flow 6: Student Progress

### Screen 37 — My Students Progress
- **Table:** Student name, Course, Lessons completed, Lessons total, Progress %, Quiz average score, Last active date
- Sort by: progress, last active, quiz score
- Click student row → individual breakdown:
  - Lesson-by-lesson completion status
  - Quiz attempt history with scores
  - Assignment submission history
  - Doubt history
  - Tutor can add private notes about the student

---

---

# Role 4 — Student

> Enrolled in one or more courses from the institute.

---

## Flow 1: Authentication

### Screen 38 — Student Login
- Institute-branded login page: institute logo and name displayed
- Email and password
- Remember me toggle
- Forgot password: OTP to registered email or phone
- New student: Sign Up link

### Screen 39 — Student Signup
- Full name, email, phone number, password, confirm password
- City / state
- Agree to terms checkbox
- Submit → OTP verification on phone or email
- After verification → redirect to Course Catalog

---

## Flow 2: Course Discovery

### Screen 40 — Course Catalog
- **Course cards grid:**
  - Thumbnail
  - Course title
  - Subject tag
  - Tutor name (or "Institute Direct" if no tutor)
  - Total lessons count
  - Total duration
  - Price (or Free badge)
  - Rating (stars) and review count
  - Enroll Now / Go to Course button
- **Filters:**
  - Subject category
  - Price: free / paid / all
  - Level: beginner / intermediate / advanced
  - Duration: under 5 hours / 5–20 hours / 20+ hours
- **Search bar:** search by title or subject

### Screen 41 — Course Landing Page
- Hero section: course title, subtitle, short description
- **Key stats bar:** total lessons, total duration, enrolled students, last updated
- **What you will learn:** bullet point list
- **Curriculum preview:**
  - All sections listed (collapsed by default)
  - Expand section to see lesson titles and type icons
  - Lesson count and section duration shown
- **Tutor section (if assigned):**
  - Tutor photo, name, bio, rating, students taught count
- **Student reviews:**
  - Average rating with star breakdown chart
  - Individual review cards: student name, rating, comment, date
- **Sticky sidebar:**
  - Course price
  - Apply coupon field
  - Enroll Now button
  - What is included: video hours, PDFs, quizzes, certificate

### Screen 42 — Checkout
- Course title and thumbnail summary
- Price breakdown: original price, discount applied, final price
- Coupon code field with Apply button: shows savings if valid
- **Payment method selector:**
  - UPI
  - Credit / Debit card
  - Net banking
  - Wallet
- Order summary
- Pay Now button
- Redirect to payment gateway
- **Post-payment confirmation screen:**
  - Success message
  - Course name enrolled
  - Go to Course button
  - Receipt download link

---

## Flow 3: Learning (LMS — Udemy Style)

### Screen 43 — Course Home
- Course title and overall progress bar with percentage
- **Continue Learning** CTA button: resumes from last incomplete lesson
- **Curriculum tree (collapsible sections):**
  - Each section: title, lesson count, section duration, completion count
  - Expand section to see lessons
  - **Each lesson row:**
    - Type icon: video / PDF / live / quiz / assignment
    - Lesson title
    - Duration (for video) or page count (for PDF)
    - Completion tick (green when done)
    - Lock icon (if prerequisites not met)
  - Click lesson to open it
- **Course resources tab:** all downloadable PDFs across the course in one place
- **Announcements tab:** admin/tutor announcements for this course

### Screen 44 — Video Lesson Player
- **Large video player:**
  - Play / pause, seek bar, volume control
  - Playback speed: 0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x
  - Quality selector: 360p / 480p / 720p / 1080p
  - Subtitles toggle (if available)
  - Fullscreen toggle
  - Picture-in-picture toggle
  - Progress auto-saved: resumes from where student left off
- **Below video:**
  - Lesson title
  - Description
  - Attached PDF notes: thumbnail and download button
  - Additional resource links
- **Mark as Complete** button (bottom right) → unlocks next lesson
- **Lesson navigation:** Previous Lesson and Next Lesson buttons
- **Tabs panel (right side or below):**
  - **Notes tab:** personal notepad synced to video timestamp — student types notes, timestamp saved automatically, click note to jump to that moment in video
  - **Q&A tab:**
    - Post a doubt about this lesson
    - View other students' doubts and tutor replies
    - Upvote helpful questions
    - Filter: all questions / my questions / unanswered
  - **Overview tab:** lesson description and resources

### Screen 45 — PDF Notes Viewer
- PDF rendered inline in browser (full page)
- Page navigation: previous / next, jump to page number
- Zoom in and out controls
- **Download button** (downloads original PDF)
- **Highlight tool:** select text to highlight in yellow
- **Annotation tool:** add sticky note to any position
- All highlights and annotations saved to student's account
- **Ask AI about this PDF** button → opens AI Tutor chat with this PDF pre-loaded as context
- Mark as Complete button

### Screen 46 — Live Class
- **Before class (countdown state):**
  - Class topic and course name
  - Tutor/instructor name
  - Countdown timer: "Class starts in 02:14:30"
  - Add to calendar button
- **When class is live:**
  - "Class is Live Now" banner with pulsing indicator
  - Join Class button → opens Zoom/Meet link or built-in room
- **After class (recording state):**
  - Recording available message
  - Video player with class recording
  - Same controls as video lesson player
  - Attendance auto-marked when student joins
- Mark as Attended button (if watching recording)

### Screen 47 — Quiz Screen
- **Quiz header:**
  - Quiz title
  - Question counter: "Question 7 of 20"
  - Countdown timer (turns amber at 5 min, red at 1 min)
  - Pause not allowed indicator
- **Question panel:**
  - Question text (supports formatted text, images)
  - 4 answer option cards — click to select, highlights on selection
  - Deselect option to change answer
- **Question navigation sidebar:**
  - All question numbers as dots:
    - Gray: not visited
    - White/outline: visited but not answered
    - Green: answered
    - Red/flag: flagged for review
  - Click any number to jump to that question
- **Bottom actions:**
  - Flag Question button
  - Previous and Next buttons
  - Submit Quiz button (appears on last question, also accessible from sidebar)
- **Submit confirmation modal:** shows unanswered count before confirming

### Screen 48 — Quiz Results
- **Score summary card:**
  - Score: e.g. "42 / 60"
  - Percentage: large circular progress ring
  - Pass / Fail badge
  - Time taken
  - Rank among students (if leaderboard enabled)
- **Section-wise breakdown bar chart** (if quiz has sections)
- **Question review:**
  - Each question listed
  - Student's answer highlighted
  - Correct answer highlighted
  - Explanation shown below each wrong answer
- **Actions:**
  - Retake Quiz button (if attempts remaining)
  - Download result PDF
  - Next Lesson button
  - Share score (optional toggle)

### Screen 49 — Assignment
- **Before submission:**
  - Assignment title and course/section info
  - Instructions and rubric (rich text)
  - Due date countdown
  - Marks: total marks shown
  - **Submission options:**
    - Text editor: write answer inline
    - File upload: PDF, DOCX, ZIP (max size shown)
  - Submit Assignment button
  - Save Draft button
- **After submission (pending review):**
  - "Submitted on [date and time]" confirmation
  - Submitted file/text preview
  - Status badge: Awaiting Review
- **After tutor reviews:**
  - Marks received: e.g. "18 / 25"
  - Tutor written feedback
  - Inline comments (if text submission)
  - Resubmit button (if allowed by tutor)

---

## Flow 4: AI Features

### Screen 50 — AI Tutor Chat
- **Chat interface:**
  - Message thread: student messages on right, AI responses on left
  - AI responses formatted with:
    - IRAC structure for legal reasoning questions
    - Cited sections (IPC, CrPC, CPC, Constitution) as clickable chips
    - Relevant case references in cards
    - Numbered steps for procedural questions
  - Typing indicator when AI is generating response
- **Context bar at top:**
  - Current course context loaded
  - Current lesson context (if launched from lesson)
  - PDF loaded indicator (if launched from PDF viewer)
- **Quick action chips (new conversation):**
  - "Explain this concept simply"
  - "Give me a practice question"
  - "What are the key cases for this topic"
  - "Help me draft an argument"
  - "Summarise this section"
- **Ask about PDF button:** upload or select a PDF → AI answers based on PDF content
- **Conversation history sidebar:** past conversations list, click to resume
- **New Chat button**
- Character count and token usage indicator

---

## Flow 5: Legal Practice Lab

### Screen 51 — Practice Lab Home
- **6 module cards:**
  1. Case Drafting Studio
  2. Moot Court Simulator
  3. Client Interview Room
  4. Contract Drafting Desk
  5. Legal Research Arena
  6. Courtroom Argument Builder
- **Each card shows:**
  - Module name and icon
  - Short description of what student will practice
  - Difficulty badge: Beginner / Intermediate / Advanced
  - XP reward for completion
  - Estimated time
  - Student's own completion percentage
  - Start / Continue / Retry button
- **Practice streak badge:** "🔥 7 day streak — Keep it up!"
- **Weekly leaderboard widget:**
  - Top 5 students by XP earned this week
  - Student's own rank shown even if not in top 5
- **XP level summary:** current level name and progress to next level

---

### Case Drafting Flow

#### Screen 52 — Scenario Selection
- **Scenario cards grid:**
  - Wrongful Termination — Employment Law
  - Property Boundary Dispute — Civil Law
  - Consumer Fraud — Section 420 IPC
  - Bail Application — Sessions Court
  - Writ Petition — High Court
  - Divorce Petition — Family Court
  - Cheque Bounce — NI Act Section 138
  - FIR Challenge — Quashing Petition
- **Each card shows:** case type tag, court level badge, difficulty stars (1–5), estimated time, times attempted
- **Filter bar:** court type, subject area, difficulty
- Click card → Read Case Brief

#### Screen 53 — Read Case Brief
- **Case facts:** full scenario in plain language (client's story)
- **Your role badge:** Petitioner's Advocate or Respondent's Advocate
- **Key issues checklist:** 4–6 issues the draft must address (student can tick as they plan)
- **Relevant law sections:** clickable chips — click to see section text in a side panel
- **Landmark precedents:** 3 case cards with case name, court, year, one-line holding
- **Start Drafting button** (fixed at bottom)

#### Screen 54 — Drafting Workspace
- **Case Brief panel** (collapsible, always accessible):
  - Facts summary
  - Issues checklist
  - Law section chips
  - Precedent cards
- **Legal Document Editor (center):**
  - Auto-filled court header:
    ```
    IN THE HON'BLE SESSIONS COURT AT [CITY]
    Criminal Case No. ___ of 2025
    IN THE MATTER OF:
    [Petitioner Name] ... Petitioner
    VERSUS
    [Respondent Name] ... Respondent
    ```
  - Auto-generated numbered sections: 1. Jurisdiction, 2. Facts, 3. Grounds, 4. Prayer
  - Rich text formatting: bold, italic, underline, numbered lists, indent
  - Insert Section button: adds new numbered section
  - Insert Citation button: inserts formatted case citation
  - Legal Formatting toggle: applies court document font and spacing
  - Word count, page count estimate
  - Auto-save every 30 seconds with timestamp
- **AI Legal Assistant panel:**
  - Chat interface pre-loaded with case context
  - Quick action buttons:
    - "Suggest grounds for petition"
    - "Check my argument structure"
    - "Find relevant case laws"
    - "Review my prayer clause"
    - "Improve this paragraph" (highlights selected text)
  - AI response cards with "Insert into Draft" one-click button
  - **Live IRAC Checker:**
    - Four indicators: Issue ✓, Rule ✓, Application ⚠, Conclusion ✗
    - Green: covered, Amber: partial, Red: missing
    - Click indicator for suggestions on what is missing
- Submit for Review button

#### Screen 55 — AI Draft Review
- **Split view:** student's draft (left) vs AI suggestions (right)
- **Inline annotations on student draft:**
  - Green highlight: "Strong argument — well reasoned"
  - Yellow highlight: "Needs citation — add a case reference here"
  - Red highlight: "Missing — jurisdiction not established"
  - Blue highlight: "Suggested improvement — click to see"
  - Click any annotation to see full AI explanation
- **Score card:**
  - Structure: score out of 100
  - Legal Accuracy: score out of 100
  - Argumentation: score out of 100
  - Language and Formatting: score out of 100
  - Overall Grade: A / B+ / B / C with badge
- **Detailed feedback accordion:** expandable section per scoring criterion
- **Compare with Model Draft** toggle: shows ideal draft side by side
- **XP earned** on submission (even on first attempt)
- **Actions:** Revise and Resubmit, Download My Draft, Download Model Draft

---

### Moot Court Flow

#### Screen 56 — Case Briefing Room
- Case title: e.g. "State of Maharashtra v. Rajan Mehta — 2025"
- Full case facts and legal issues
- Petitioner team panel vs Respondent team panel (avatars and names)
- Student's assigned side and role highlighted with glow
- Prep timer countdown: "Argument begins in 14:32"
- **Argument Notes pad:** free text notepad for student's own prep notes
- **Quick research links:** relevant sections and past cases
- Research Mode button: opens legal research panel alongside
- I'm Ready button → enters queue, argument begins when all are ready

#### Screen 57 — Live Argument Screen
- **Judge panel (top):** 3 AI judge avatars with names and titles
- **Active speaker panel (center):**
  - Student's avatar and name
  - Role label: Petitioner's Counsel / Respondent's Counsel
  - Argument timer: countdown (e.g. "4:23 remaining")
  - Visual pulsing mic indicator
- **Team queues:** Petitioner side and Respondent side — names in order with "Speaking next" indicator
- **Student's argument outline:** bullet points from their prep notes visible
- **Action buttons:**
  - Raise Objection (red, urgent) → interrupts with objection flag
  - Request Extension → sends request to AI judge
  - Submit Written Submission
- **AI Judge interruption popup cards:**
  - Appear mid-argument: "Counsel, what is your authority for that proposition?"
  - Student must respond before continuing
  - Judge may also ask follow-up questions
- **Live transcript feed (collapsible):**
  - Real-time text log of all arguments
  - Searchable after session

#### Screen 58 — Judge Feedback Screen
- **Judge panel header:** official style with names
- **Scoring table:**
  - Knowledge of Law
  - Clarity of Arguments
  - Handling of Judge's Questions
  - Court Manners and Etiquette
  - Written Submissions Quality
  - Each row: score out of 10, score bar, judge's comment
- **Total score and rank** among all participants
- **Award card:** Best Speaker trophy or Runner Up or Participation
- **Highlight reel:** 3–5 key argument moments with timestamps from transcript
- **XP earned** displayed
- Download Certificate button (unlocked for passing score)

---

### Client Interview Flow

#### Screen 59 — Meet Your Client
- Client avatar (illustrated)
- Client name, age, brief situation: e.g. "Meera Sharma, 34 — Seeks advice on divorce and child custody"
- What the student must do: "Ask the right questions to uncover all key facts"
- Key facts target: "Find 10 key facts to build a complete case brief"
- Tips: "Listen carefully — clients don't always give complete information"
- Start Interview button

#### Screen 60 — Interview in Progress
- **Chat interface (center):**
  - Client speaks first: explains situation in plain language
  - Student types questions
  - AI client responds: sometimes emotional, sometimes vague, sometimes withholding information until asked directly
  - Client speech bubbles styled differently from student bubbles
- **Case Notes panel (auto-fills):**
  - As student uncovers facts, notes populate automatically:
    - Parties involved
    - Key dates
    - Documents mentioned
    - Legal issues identified
  - Each fact entry: fact text + green tick when confirmed
- **Progress tracker:** "Facts gathered: 6 of 10"
- **Coach tip cards (appear when student is stuck):**
  - "A good lawyer would ask about the timeline of events"
  - "Have you asked about any written agreements?"
  - Dismissible
- **End Interview** button available after minimum facts gathered

#### Screen 61 — Interview Complete
- All gathered facts displayed in structured summary
- Missed facts shown in amber: facts the student did not uncover
- **Generate Case Summary button:**
  - Produces a formatted client intake note:
    - Client name and details
    - Nature of matter
    - Key facts
    - Documents to be obtained
    - Preliminary legal issues
    - Recommended next steps
- Download intake note as PDF
- XP earned for session
- **Option: Proceed to Draft → opens Case Drafting with these facts pre-loaded**

---

### Contract Drafting Flow

#### Screen 62 — Contract Scenario Briefing
- Scenario at top: "Draft a Service Agreement between a freelance developer and a startup. Project value: ₹2.5L, Timeline: 3 months"
- Parties described: who is the client and who is the service provider
- **Clause checklist to complete:**
  - Parties and Recitals
  - Scope of Work
  - Payment Terms
  - Intellectual Property
  - Confidentiality and NDA
  - Termination Clause
  - Dispute Resolution
  - Governing Law
- Clause coverage progress bar: 0 of 8 clauses covered
- Start Drafting button

#### Screen 63 — Contract Editor
- Contract title auto-filled: "SERVICE AGREEMENT"
- Parties section auto-filled from scenario
- **Clause-based collapsible sections:**
  - Each clause is a distinct collapsible block
  - Student writes content inside each clause block
  - Insert Standard Clause button per section: inserts a template clause student can edit
  - **Risk indicator per clause:**
    - Green dot: clause is complete and balanced
    - Amber dot: clause is present but has gaps
    - Red dot: clause is missing or has critical issues
- **AI Contract Advisor:**
  - Warning cards appear as student writes:
    - "This payment clause has no late payment penalty — add one?"
    - "Missing: Force Majeure clause — critical for service agreements"
    - "IP clause does not specify who owns pre-existing IP"
  - Each warning has an Insert Suggestion button
  - Jurisdiction selector dropdown: India / UAE / Canada
- Clause coverage progress bar updates as student fills clauses
- Finalise Contract button

#### Screen 64 — Contract Review
- Clause coverage score: X of 8 clauses complete
- **Clause-wise analysis:**
  - Each clause: AI assessment, risk rating, suggestion
- **Overall contract health score:** out of 100
- Missing clause warnings list
- Suggested improvements with one-click Insert
- Compare with Model Contract toggle
- Download My Contract and Download Model Contract buttons
- XP earned

---

### Legal Research Flow

#### Screen 65 — Research Challenge
- Scenario displayed as a judge's instruction:
  > "Counsel, find me three precedents supporting anticipatory bail in a white-collar crime case under Section 406 IPC"
- Research objective summary
- **Search bar (large, prominent):**
  - Type case name, legal issue, or section number
  - Filters:
    - Court: Supreme Court / High Court / Sessions Court / All
    - Year range: slider (e.g. 2000–2025)
    - Subject tags: Criminal / Civil / Constitutional / Corporate
- Start Researching button

#### Screen 66 — Research in Progress
- **Search results panel:**
  - Case cards: case name, court, year, brief relevance summary, citation format
  - Relevance score badge (AI rated) per result
  - Add to My Brief button per card
  - Click card to expand: full case summary, ratio decidendi, key paragraphs
- **My Research Brief panel (builds as student adds cases):**
  - Added case cards in order added
  - Student annotation field per case: "Why is this relevant?"
  - Remove case button
  - Reorder cases
- **AI Research Assistant (bottom bar):**
  - Suggests related search terms based on current research
  - Flags if a case has been overruled or distinguished
  - "You have 2 cases — find one more for a stronger brief"
- Submit Brief button

#### Screen 67 — Research Brief Complete
- Final brief: all cases with student annotations
- AI assessment: brief strength score, gaps identified
- **Actions:**
  - Use in Draft → opens Case Drafting with these cases as precedents
  - Download Brief as PDF
  - XP earned

---

## Flow 6: Progress and Achievements

### Screen 68 — My Progress
- **Course progress section:**
  - Each enrolled course: progress bar, completion %, lessons done, quizzes taken, average quiz score
- **Practice Lab skill radar chart:**
  - 6 axes: Drafting, Research, Argumentation, Client Skills, Contract Law, Procedure
  - Current skill level plotted
  - Target level overlay (optional)
- **XP and level system:**
  - Current level: e.g. "Level 4 — Junior Advocate"
  - XP progress bar to next level
  - XP history: how XP was earned (by activity and date)
- **Level progression map:**
  - Level 1: Law Student
  - Level 2: Intern
  - Level 3: Paralegal
  - Level 4: Junior Advocate
  - Level 5: Advocate
  - Level 6: Senior Advocate
  - Level 7: Master Counsel

### Screen 69 — Achievements and Badges
- **Badges grid (unlocked and locked):**
  - First Draft Filed
  - Moot Champion (won a moot court)
  - Research Pro (50 cases researched)
  - 100 Cases Drafted
  - Perfect Quiz (100% score)
  - Practice Streak 30 Days
  - Client Whisperer (all 10 facts found in interview)
  - Contract Master (drafted 10 contracts)
  - Speed Drafter (completed draft in under 20 mins)
  - Doubt Cleared (had a doubt answered)
- Locked badges show hint: "Draft 5 more cases to unlock"
- Click unlocked badge: see when earned and details

### Screen 70 — My Certificates
- **Certificate cards:**
  - Course completion certificates: course name, completion date, institute logo
  - Practice Lab certificates: module, score, date
  - Moot court award certificates
- Each certificate:
  - Preview thumbnail
  - Download as PDF button
  - Share link button (generates public certificate verification URL)

---

## Flow 7: Student Account

### Screen 71 — Profile and Settings
- **Personal details (editable):**
  - Full name
  - Email address
  - Phone number
  - City and state
  - Profile photo upload
- **Change password:**
  - Current password
  - New password
  - Confirm new password
- **Notification preferences:**
  - New course announcement: on/off
  - Live class reminder (24h before): on/off
  - Quiz due reminder: on/off
  - Doubt replied notification: on/off
  - Assignment reviewed notification: on/off
  - Promotional emails: on/off
- **Enrolled courses list:** with quick jump to course links
- **Billing and payments:**
  - All transactions table
  - Download invoice per transaction
- **Account actions:**
  - Logout
  - Delete account (with confirmation and data export option)

---

*Document version 1.0 — LexEd Platform*
*Generated for internal product and design reference*