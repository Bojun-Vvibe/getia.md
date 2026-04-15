---
brand: BambooHR
tagline: "HR software with heart. People data, hiring, onboarding, and performance in one place."
category: HR
website: https://bamboohr.com
---

# BambooHR — Information Architecture

## Overview

BambooHR is an HR platform designed for small and medium businesses (SMBs) that want a clean, human-centered alternative to enterprise HR systems. The mental model is **people, not paperwork** — a friendly employee database at the core, with hiring, onboarding, time tracking, performance management, and reporting built around it. The signature design: a warm, approachable interface (green brand color, friendly illustrations) that HR admins, managers, and employees all enjoy using. BambooHR is known for its employee self-service and eNPS (Employee Net Promoter Score).

## Site Map

```
├── Home / Dashboard
│   ├── Who's Out Today (calendar strip)
│   ├── Upcoming Birthdays & Anniversaries
│   ├── Pending Approvals (time-off, hiring)
│   ├── New Hires (this month)
│   ├── Company Announcements
│   ├── Open Positions
│   ├── eNPS Summary
│   └── Quick Links (Add Employee, Request Time Off)
├── People
│   ├── Employee Directory
│   │   ├── Photo Grid or List View
│   │   ├── Search & Filter
│   │   └── Export
│   ├── Org Chart (visual hierarchy)
│   ├── Employee Profile
│   │   ├── Personal Tab
│   │   │   ├── Photo, Name, Pronouns
│   │   │   ├── Contact Info
│   │   │   ├── Emergency Contacts
│   │   │   └── Personal Details
│   │   ├── Job Tab
│   │   │   ├── Title, Department, Division
│   │   │   ├── Manager
│   │   │   ├── Location
│   │   │   ├── Employment Status (FT/PT/Contractor)
│   │   │   ├── Start Date
│   │   │   └── Job History (promotions, transfers)
│   │   ├── Compensation Tab
│   │   │   ├── Current Salary
│   │   │   ├── Compensation History
│   │   │   ├── Bonus
│   │   │   └── Equity
│   │   ├── Time Off Tab
│   │   │   ├── Balances (PTO, Sick, Personal)
│   │   │   ├── Requests
│   │   │   └── History
│   │   ├── Documents Tab
│   │   │   ├── Uploaded Documents
│   │   │   ├── E-Signatures
│   │   │   └── Tax Forms (W-4, I-9)
│   │   ├── Benefits Tab
│   │   │   ├── Enrolled Plans
│   │   │   ├── Dependents
│   │   │   └── Open Enrollment
│   │   ├── Training Tab
│   │   │   ├── Completed Training
│   │   │   └── Required Training
│   │   ├── Assets Tab
│   │   │   ├── Assigned Equipment (laptop, phone)
│   │   │   └── Return on Offboarding
│   │   └── Notes Tab (HR private notes)
│   └── Add Employee
├── Hiring (ATS)
│   ├── Job Openings
│   │   ├── Active Jobs
│   │   ├── Create Job Posting
│   │   │   ├── Title, Department, Location
│   │   │   ├── Description (rich text)
│   │   │   ├── Hiring Lead, Team
│   │   │   └── Publish (career page, job boards)
│   │   └── Job Board Integrations (Indeed, LinkedIn, etc.)
│   ├── Applicant Tracking
│   │   ├── Candidates (by job)
│   │   ├── Pipeline View (Kanban)
│   │   │   ├── New → Phone Screen → Interview → Offer → Hired
│   │   │   └── Rejected (at any stage)
│   │   ├── Candidate Profile
│   │   │   ├── Resume
│   │   │   ├── Application Answers
│   │   │   ├── Interview Notes
│   │   │   ├── Scorecards
│   │   │   └── Communication Log (emails)
│   │   └── Schedule Interview
│   ├── Offer Letter Templates
│   ├── Career Page (branded, embeddable)
│   └── Hiring Reports
├── Onboarding
│   ├── Onboarding Templates (checklists)
│   ├── Pre-Boarding (before Day 1)
│   │   ├── Welcome Email
│   │   ├── New Hire Packet (e-signature)
│   │   ├── Tax Forms
│   │   ├── Direct Deposit
│   │   └── Equipment Request
│   ├── Day 1 Checklist
│   ├── Onboarding Tasks (assignable to HR, manager, IT)
│   └── Progress Tracking
├── Time Off
│   ├── Request Time Off
│   │   ├── Type (PTO, Sick, Personal, Volunteer, etc.)
│   │   ├── Dates
│   │   ├── Notes
│   │   └── Submit
│   ├── My Requests
│   ├── Team Calendar (who's out when)
│   ├── Approvals (manager)
│   ├── Balances
│   └── Policies
│       ├── Accrual Rules
│       ├── Carryover Limits
│       └── Blackout Dates
├── Time Tracking
│   ├── Clock In / Clock Out
│   ├── Timesheet (weekly)
│   ├── Approve Timesheets (manager)
│   ├── Overtime Tracking
│   └── Projects / Tasks (time allocation)
├── Performance
│   ├── Performance Reviews
│   │   ├── Review Cycles (annual, quarterly)
│   │   ├── Self-Assessment
│   │   ├── Manager Assessment
│   │   ├── Peer Feedback (360)
│   │   ├── Competency Ratings
│   │   └── Review Summary
│   ├── Goals
│   │   ├── Set Goals (employee + manager)
│   │   ├── Track Progress
│   │   ├── Align with Company Goals
│   │   └── Goal History
│   └── Employee Satisfaction
│       ├── eNPS Survey (automated)
│       ├── Custom Surveys
│       ├── Results Dashboard
│       └── Trends Over Time
├── Benefits Administration
│   ├── Plan Setup (medical, dental, vision, life, 401k)
│   ├── Open Enrollment
│   ├── Employee Elections
│   ├── Carrier Connections
│   └── Benefits Reports
├── Reports & Analytics
│   ├── Standard Reports
│   │   ├── Headcount
│   │   ├── Turnover
│   │   ├── Time Off Usage
│   │   ├── Compensation
│   │   ├── EEO / Compliance
│   │   └── New Hires & Terminations
│   ├── Custom Reports (drag-and-drop builder)
│   ├── Scheduled Reports (email delivery)
│   └── Benchmarking
├── Settings
│   ├── Company Info
│   ├── Departments & Locations
│   ├── Access Levels (roles)
│   ├── Custom Fields
│   ├── Time Off Policies
│   ├── Benefit Plans
│   ├── Email Templates
│   ├── Integrations (payroll, Slack, etc.)
│   └── Branding (logo, colors for career page)
└── Employee Self-Service
    ├── My Profile (edit personal info)
    ├── My Time Off (request + balances)
    ├── My Timesheet
    ├── My Pay Stubs
    ├── My Benefits
    ├── My Goals
    ├── My Training
    ├── Company Directory
    └── Company Docs (handbook, policies)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Nav** | Fixed header | Home, People, Hiring, Time Off, Performance, Reports |
| **Employee Profile Tabs** | Horizontal tabs | Personal / Job / Compensation / Time Off / Documents / Benefits / Training |
| **Role-Based Nav** | Different views per role | HR: full nav. Manager: team + approvals. Employee: self-service |
| **Quick Actions** | Header icons | Add Employee, Clock In, Request Time Off |
| **Org Chart** | Interactive tree | Click to expand/collapse, click profile to open |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Employee | name, email, phone, title, department, manager, location, start_date, status (active/inactive/onleave), photo, pronouns | has many TimeOffRequests, Reviews, Documents, Benefits |
| Department | name, head, parent | has many Employees |
| TimeOffRequest | type, start_date, end_date, hours, status, approver, notes | belongs to Employee |
| TimeOffPolicy | type, accrual_rate, carryover_limit, blackout_dates | belongs to Company |
| PerformanceReview | cycle, reviewer, reviewee, self_assessment, manager_assessment, rating, goals[], competencies[] | belongs to Employee |
| Goal | title, description, status (on_track/at_risk/completed), due_date, aligned_to | belongs to Employee |
| JobOpening | title, department, location, status (open/closed), applicants_count, pipeline | has Candidates |
| Candidate | name, email, resume, stage, scorecard, interview_notes | belongs to JobOpening |
| OnboardingChecklist | template, employee, tasks[], progress | belongs to Employee |
| Document | name, type, file, uploaded_by, signed, expires | belongs to Employee |
| eNPSSurvey | score (-100 to +100), response_rate, period | belongs to Company |
| BenefitPlan | type (medical/dental/vision/life/401k), provider, tiers[] | has many Enrollments |

### Time Off Status
```
requested → approved / denied
approved → taken → completed
```

## User Flows

### HR: Hire to Onboard
```
Hiring → Create Job → Publish → Receive Applications → Screen (Kanban) → Interview → Scorecard → Offer → Accept → Convert to Employee → Onboarding Checklist Auto-Created → Pre-Boarding Packet Sent → Day 1
```

### Employee: Request PTO
```
Time Off → Request → Select PTO → Pick Dates → "3 days, 21 hours remaining after" → Submit → Manager Gets Notification → Approve → Calendar Updated
```

### Manager: Performance Review
```
Performance → Current Cycle → Select Employee → Review Self-Assessment → Write Manager Assessment → Rate Competencies → Discuss Goals → Sign Off → Review Complete
```

### HR: Run eNPS Survey
```
Performance → Satisfaction → eNPS → Send Survey → Employees Complete (anonymous) → Results Dashboard → eNPS Score: 42 → Trends vs Last Quarter
```

## URL / Route Structure

```
/                              → Dashboard
/employees                     → Employee Directory
/employees/org-chart           → Org Chart
/employees/:id                 → Employee Profile
/employees/:id/job             → Job Tab
/employees/:id/compensation    → Compensation Tab
/employees/:id/time-off        → Time Off Tab
/employees/:id/documents       → Documents Tab
/employees/new                 → Add Employee
/hiring                        → Job Openings
/hiring/:id                    → Job Detail + Pipeline
/hiring/:id/candidates/:cid    → Candidate Profile
/hiring/new                    → Create Job Posting
/onboarding/:id                → Onboarding Checklist
/time-off                      → Time Off Overview
/time-off/request              → Request Form
/time-off/calendar             → Team Calendar
/time-off/approvals            → Pending Approvals
/time-tracking                 → Timesheets
/performance                   → Performance Reviews
/performance/goals             → Goals
/performance/satisfaction      → eNPS & Surveys
/benefits                      → Benefits Admin
/benefits/enrollment           → Open Enrollment
/reports                       → Reports
/reports/:type                 → Specific Report
/settings                      → Settings
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| People | Name, email, title, department | Department, Location, Status, Employment Type, Manager | Name, Start Date, Department |
| Candidates | Name, email | Job, Stage, Rating, Source | Applied Date, Rating, Stage |
| Time Off | Employee name | Type, Status, Date Range, Department | Date, Employee |
| Reports | — | Date Range, Department, Location | — |

## Responsive Behavior

| Breakpoint | Dashboard | Directory | Profile |
|------------|-----------|-----------|---------|
| Desktop | Full dashboard grid | Photo grid or table | Tabs with full detail |
| Tablet | Simplified dashboard | List view | Stacked tabs |
| Mobile | Card-based, scrollable | List with search | Accordion sections |

### BambooHR-Specific UX
- Friendly, warm design (green, illustrations of people)
- Employee self-service reduces HR ticket volume
- Org chart is interactive and always up to date
- "Who's Out" widget on dashboard (instant team visibility)
- Birthday/anniversary celebrations (automated)
- eNPS: anonymous, automated pulse surveys
- E-signature built in for onboarding docs
- Custom fields on employee profile (extensible)
- Integrations with payroll (ADP, Gusto, Paychex)

## Access Control

| Role | Dashboard | Directory | Employee Records | Hiring | Time Off | Performance | Reports | Settings |
|------|-----------|-----------|-----------------|--------|----------|-------------|---------|----------|
| Admin/HR | ✅ Full | All | All CRUD | Full | Configure | All | All | ✅ |
| Manager | Team view | All (read) | Team (limited) | Hiring team | Approve team | Team reviews | Team | — |
| Employee | Self view | All (read) | Own profile | — | Request own | Own goals/reviews | — | — |

### Security
- Role-based access with field-level permissions
- SSO (SAML, OAuth)
- Two-factor authentication
- Audit trail for sensitive changes
- IP restrictions (optional)
- Data encryption at rest and in transit
- SOC 2 Type II compliant
