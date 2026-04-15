# School Management — Information Architecture

## Overview

A school management system (PowerSchool, ClassDojo, Managebac style). The mental model is **classes, students, and grades** — administrators manage the school, teachers plan lessons and grade assignments, students submit work and track progress, and parents monitor their children. Multiple portals serve different user types with role-specific views of shared data.

## Site Map

### Admin Portal

```
├── Dashboard
│   ├── School Overview (enrollment, attendance today, announcements)
│   ├── Quick Stats (students, teachers, classes, pass rate)
│   ├── Calendar (school events, holidays)
│   └── Alerts (absences, incidents, deadlines)
├── Students
│   ├── Student Directory
│   ├── Student Profile
│   │   ├── Personal Info & Photo
│   │   ├── Enrollment Info (grade, section, year)
│   │   ├── Academic Record (GPA, transcripts)
│   │   ├── Attendance History
│   │   ├── Behavior / Discipline
│   │   ├── Health Info
│   │   ├── Parent / Guardian Contacts
│   │   └── Documents
│   ├── Enrollment (new student registration)
│   ├── Bulk Import / Export
│   └── Graduation / Promotion
├── Teachers / Staff
│   ├── Staff Directory
│   ├── Staff Profile
│   │   ├── Personal Info
│   │   ├── Subjects & Classes Assigned
│   │   ├── Schedule
│   │   └── Payroll Info
│   ├── Hiring / Onboarding
│   └── Leave Management
├── Classes & Sections
│   ├── Class List
│   ├── Class Detail (teacher, students, schedule)
│   ├── Section Management
│   └── Assign Teachers & Students
├── Curriculum
│   ├── Subjects
│   ├── Syllabi
│   ├── Lesson Plans
│   └── Learning Standards
├── Scheduling
│   ├── Master Timetable
│   ├── Class Schedules
│   ├── Room Assignments
│   └── Exam Schedule
├── Attendance
│   ├── Daily Attendance (school-wide)
│   ├── Class Attendance
│   ├── Attendance Reports
│   └── Absence Alerts
├── Grades & Reports
│   ├── Grading Periods
│   ├── Grade Entry (by class)
│   ├── Report Cards
│   ├── Transcripts
│   └── Academic Analytics
├── Finance
│   ├── Fee Structure
│   ├── Fee Collection
│   ├── Invoices
│   ├── Payment History
│   ├── Scholarships / Discounts
│   └── Financial Reports
├── Communication
│   ├── Announcements (school-wide, by class, by grade)
│   ├── Messages (to parents, teachers, students)
│   ├── Email / SMS Blasts
│   └── Notification Log
├── Events & Calendar
│   ├── School Calendar
│   ├── Events (assemblies, parent-teacher, sports)
│   └── Holidays & Breaks
├── Settings
│   ├── School Info
│   ├── Academic Year & Terms
│   ├── Grading Scale
│   ├── Roles & Permissions
│   ├── Integrations (LMS, payment gateway)
│   └── System Settings
└── Reports
    ├── Enrollment Reports
    ├── Attendance Reports
    ├── Academic Performance
    ├── Financial Reports
    └── Custom Reports
```

### Teacher Portal

```
├── Dashboard
│   ├── Today's Schedule
│   ├── Pending Assignments to Grade
│   ├── Recent Submissions
│   ├── Announcements
│   └── Upcoming Events
├── My Classes
│   ├── Class List
│   └── Class Detail
│       ├── Student Roster
│       ├── Attendance (mark for today)
│       ├── Assignments
│       │   ├── Create Assignment
│       │   ├── Assignment Detail (submissions, grades)
│       │   └── Grade Submissions
│       ├── Gradebook
│       ├── Lesson Plans
│       ├── Resources / Materials
│       └── Class Announcements
├── Gradebook
│   ├── By Class (spreadsheet view)
│   ├── Enter / Edit Grades
│   ├── Grade Weights & Categories
│   └── Grade Reports
├── Attendance
│   ├── Mark Attendance (today)
│   ├── Attendance History (by class)
│   └── Reports
├── Assignments
│   ├── All Assignments
│   ├── Create Assignment (title, description, due date, attachments, rubric)
│   ├── Submissions (list, grade, feedback)
│   └── Bulk Grade
├── Communication
│   ├── Messages (to parents, students, admin)
│   ├── Class Announcements
│   └── Parent-Teacher Conference Scheduler
├── Schedule
│   ├── My Timetable
│   ├── Exam Schedule
│   └── Leave Requests
├── Resources
│   ├── File Library
│   ├── Shared Resources
│   └── Upload Materials
└── Profile & Settings
```

### Student Portal

```
├── Dashboard
│   ├── Today's Classes
│   ├── Upcoming Assignments (due soon)
│   ├── Recent Grades
│   ├── Announcements
│   └── Attendance Summary
├── My Classes
│   ├── Class List
│   └── Class Detail
│       ├── Assignments
│       ├── Materials / Resources
│       ├── Grades
│       └── Announcements
├── Assignments
│   ├── Pending
│   ├── Submitted
│   ├── Graded (with feedback)
│   └── Submit Assignment (upload, text entry)
├── Grades
│   ├── Current Grades (by class)
│   ├── GPA
│   ├── Report Cards
│   └── Transcripts
├── Schedule
│   ├── My Timetable
│   └── Exam Schedule
├── Attendance
│   ├── My Attendance Record
│   └── Absence Requests
├── Communication
│   ├── Messages
│   └── Announcements
└── Profile & Settings
```

### Parent Portal

```
├── Dashboard
│   ├── Children Selector (if multiple)
│   ├── Today's Overview (classes, assignments due)
│   ├── Recent Grades
│   ├── Attendance Alerts
│   └── School Announcements
├── Academic
│   ├── Grades (current + history)
│   ├── Report Cards
│   ├── Assignments (status)
│   └── Teacher Comments
├── Attendance
│   ├── Attendance Record
│   ├── Report Absence
│   └── Absence History
├── Communication
│   ├── Messages (with teachers, admin)
│   ├── Announcements
│   └── Conference Scheduling
├── Finance
│   ├── Fee Summary
│   ├── Payment History
│   ├── Make Payment
│   └── Receipts
├── Calendar
│   ├── School Events
│   └── Child's Schedule
└── Profile & Settings
    ├── Child Profiles
    ├── Contact Info
    └── Notification Preferences
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Admin Sidebar** | Fixed left nav | Students, Teachers, Classes, Attendance, Grades, Finance, Communication, Settings |
| **Teacher Sidebar** | Fixed left nav | Dashboard, Classes, Gradebook, Attendance, Assignments, Messages, Schedule |
| **Student Bottom Nav** | Mobile tabs | Home, Classes, Assignments, Grades, Profile |
| **Parent Bottom Nav** | Mobile tabs | Home, Academic, Attendance, Messages, Finance |
| **Child Switcher** | Dropdown/tabs at top (parent) | Switch between children's views |
| **Class Selector** | Dropdown or horizontal tabs (teacher) | Switch between assigned classes |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Student | name, student_id, dob, grade_level, section, photo, enrollment_date, status | belongs to Section, has many Grades, Attendance, Guardian |
| Teacher | name, employee_id, subjects[], email, phone | has many Classes |
| Class | name, subject, section, academic_year, schedule | has one Teacher, many Students |
| Assignment | title, description, due_date, max_score, attachments[], rubric, type (homework/quiz/project/exam) | belongs to Class |
| Submission | student, assignment, content, attachments[], submitted_at, grade, feedback | belongs to Student and Assignment |
| Grade | student, class, assignment, score, weight, grading_period | belongs to Student and Class |
| Attendance | student, class, date, status (present/absent/late/excused), notes | belongs to Student and Class |
| ReportCard | student, grading_period, grades[], gpa, comments, issued_at | belongs to Student |
| Guardian | name, relationship, email, phone | linked to Student(s) |
| Fee | student, type (tuition/transport/lunch/activity), amount, due_date, status (paid/pending/overdue) | belongs to Student |
| Announcement | title, body, audience (all/grade/class), author, pinned, created_at | belongs to School/Class |
| Event | title, date, time, location, type (assembly/sports/conference), audience | belongs to School |

### Grading Period Types
`quarter | trimester | semester | annual`

### Assignment Status Flow
```
created → assigned → submitted → graded → returned
                      ↘ late_submitted → graded
                      ↘ missing
```

## User Flows

### Teacher: Create & Grade Assignment
```
My Classes → Select Class → Assignments → [+ Create] → Fill Details → Attach Rubric → Assign → Students Submit → View Submissions → Grade Each → Return with Feedback
```

### Teacher: Take Attendance
```
Dashboard → Today's Schedule → Select Class → Mark Attendance (present/absent/late per student) → Submit → Parent Auto-Notified (if absent)
```

### Parent: Check Progress
```
Dashboard → Select Child → Academic → Grades → View by Class → See Assignment Grades & Comments
```

### Student: Submit Assignment
```
Assignments → Pending → Select → View Details → Upload/Type Work → Submit → Await Grade → View Feedback
```

### Admin: Enroll Student
```
Students → [+ New Student] → Personal Info → Guardian Info → Assign Grade & Section → Generate Student ID → Confirm
```

## URL / Route Structure

### Admin
```
/admin                          → Dashboard
/admin/students                 → Student Directory
/admin/students/:id             → Student Profile
/admin/students/enroll          → New Enrollment
/admin/teachers                 → Teacher Directory
/admin/teachers/:id             → Teacher Profile
/admin/classes                  → Class List
/admin/classes/:id              → Class Detail
/admin/attendance               → Attendance Overview
/admin/grades                   → Grade Management
/admin/grades/report-cards      → Report Cards
/admin/finance                  → Finance
/admin/finance/fees             → Fee Collection
/admin/finance/invoices         → Invoices
/admin/communication            → Communication
/admin/calendar                 → School Calendar
/admin/settings                 → Settings
/admin/reports                  → Reports
```

### Teacher
```
/teach                          → Dashboard
/teach/classes                  → My Classes
/teach/classes/:id              → Class Detail
/teach/classes/:id/attendance   → Mark Attendance
/teach/classes/:id/assignments  → Assignments
/teach/assignments/:id          → Assignment Detail
/teach/assignments/:id/grade    → Grade Submissions
/teach/gradebook                → Gradebook
/teach/messages                 → Messages
/teach/schedule                 → My Schedule
```

### Student
```
/                               → Dashboard
/classes                        → My Classes
/classes/:id                    → Class Detail
/assignments                    → All Assignments
/assignments/:id                → Assignment Detail
/assignments/:id/submit         → Submit Assignment
/grades                         → My Grades
/grades/report-card             → Report Card
/schedule                       → My Schedule
/attendance                     → My Attendance
/messages                       → Messages
```

### Parent
```
/parent                         → Dashboard
/parent/children/:id/grades     → Grades
/parent/children/:id/attendance → Attendance
/parent/children/:id/assignments→ Assignments
/parent/children/:id/report-card→ Report Card
/parent/children/:id/schedule   → Schedule
/parent/finance                 → Fees & Payments
/parent/finance/pay             → Make Payment
/parent/messages                → Messages
/parent/calendar                → School Calendar
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Students (admin) | Name, student ID, email | Grade Level, Section, Status, Gender, Enrollment Year | Name, ID, Grade, Date |
| Teachers (admin) | Name, employee ID | Subject, Department, Status | Name, Subject |
| Assignments (teacher) | Title | Class, Status, Due Date Range, Type | Due Date, Created, Title |
| Grades (parent/student) | Subject/Class name | Grading Period, Class | Class, Grade, Date |
| Fees (admin/parent) | Student name, invoice # | Status, Fee Type, Date Range, Amount | Due Date, Amount, Status |

## Responsive Behavior

| Breakpoint | Admin | Teacher | Student/Parent |
|------------|-------|---------|---------------|
| Desktop (≥1024px) | Full sidebar + data tables + charts | Sidebar + gradebook spreadsheet | Dashboard + sidebar |
| Tablet (768–1023px) | Collapsible sidebar + responsive tables | Full-width gradebook | Simplified layout |
| Mobile (<768px) | Hamburger menu + card-based views | Bottom tabs, card lists | Bottom nav, stacked cards |

### Mobile Adaptations
- Quick attendance marking with swipe gestures
- Push notifications for grades, absences, announcements
- Camera integration for assignment submission (photo upload)
- Offline grade viewing
- Calendar widget integration
- QR code for student ID card

## Access Control

| Feature | Admin | Teacher | Student | Parent |
|---------|-------|---------|---------|--------|
| Student Records | Full CRUD | Read (own students) | Own only | Own child |
| Grades | Configure | CRUD (own classes) | Read own | Read child's |
| Attendance | View all + reports | Mark (own classes) | View own | View child's + report absence |
| Assignments | — | CRUD | Submit + view | View |
| Finance | Full | — | View own fees | View + pay |
| Communication | All audiences | Parents + students | Teachers | Teachers + admin |
| Settings | Full | Own preferences | Own preferences | Own preferences |
| Reports | All | Own classes | — | — |
