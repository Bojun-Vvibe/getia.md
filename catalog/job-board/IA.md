# Job Board — Information Architecture

## Overview

A job search and recruitment platform (LinkedIn Jobs, Indeed, Glassdoor style). The mental model is a **two-sided marketplace** — job seekers search, apply, and track applications while employers post jobs, review candidates, and manage hiring pipelines. Discovery (matching the right candidate with the right job) and conversion (application completion) drive the platform.

## Site Map

### Job Seeker Facing

```
├── Home
│   ├── Search Bar (job title, keyword, location)
│   ├── Recommended Jobs (based on profile)
│   ├── Recent Searches
│   ├── Saved Jobs
│   ├── Application Status Summary
│   ├── Trending Searches
│   └── Career Resources
├── Job Search Results
│   ├── Job Cards (title, company, location, salary, posted date)
│   ├── Filters Panel
│   ├── Map View (optional)
│   ├── Save Search Alert
│   └── Pagination
├── Job Detail
│   ├── Title & Company
│   ├── Location (remote/hybrid/onsite)
│   ├── Salary Range
│   ├── Job Description
│   ├── Requirements & Qualifications
│   ├── Benefits & Perks
│   ├── Company Overview (mini card)
│   ├── Apply Button (easy apply or external)
│   ├── Save / Share
│   ├── Similar Jobs
│   └── Company Reviews Snippet
├── Apply
│   ├── Resume Upload / Select
│   ├── Cover Letter (optional)
│   ├── Application Questions (screening)
│   ├── Contact Info (pre-filled from profile)
│   ├── Work Authorization
│   ├── Review Application
│   └── Submit
├── My Applications
│   ├── Applied (list with status)
│   ├── Application Detail
│   │   ├── Status (applied, reviewed, interview, offer, rejected)
│   │   ├── Timeline
│   │   ├── Messages from Employer
│   │   └── Withdraw
│   ├── Interviews (upcoming)
│   └── Archived
├── Profile / Resume
│   ├── Personal Info
│   ├── Resume (upload + parser)
│   ├── Work Experience
│   ├── Education
│   ├── Skills
│   ├── Certifications
│   ├── Portfolio / Links
│   ├── Job Preferences (location, salary, type, remote)
│   └── Privacy (profile visibility)
├── Company Pages
│   ├── Company Profile
│   │   ├── Overview & About
│   │   ├── Open Positions
│   │   ├── Photos / Culture
│   │   ├── Reviews & Ratings
│   │   ├── Salary Data
│   │   ├── Benefits
│   │   └── Follow
│   └── Company List (browse)
├── Salary Explorer
│   ├── By Title
│   ├── By Company
│   ├── By Location
│   └── Salary Calculator
├── Resources
│   ├── Resume Builder
│   ├── Interview Prep
│   ├── Career Advice (articles)
│   └── Skill Assessments
├── Account
│   ├── Settings
│   ├── Notification Preferences
│   ├── Saved Jobs
│   ├── Saved Searches
│   └── Blocked Companies
├── Messages
│   ├── Inbox (recruiter messages)
│   ├── Thread
│   └── Compose
└── Help
    ├── FAQ
    ├── Contact
    └── Report Job
```

### Employer / Recruiter Portal

```
├── Dashboard
│   ├── Active Jobs Summary
│   ├── New Applications
│   ├── Pipeline Overview (by stage)
│   ├── Time-to-Hire Metrics
│   └── Urgent Actions
├── Jobs
│   ├── Active Jobs
│   ├── Draft Jobs
│   ├── Closed Jobs
│   ├── Create Job Posting
│   │   ├── Title & Department
│   │   ├── Location / Remote Policy
│   │   ├── Job Description (rich text)
│   │   ├── Requirements
│   │   ├── Compensation & Benefits
│   │   ├── Screening Questions
│   │   ├── Application Settings (easy apply, external link)
│   │   └── Preview & Publish
│   └── Edit / Clone Job
├── Candidates
│   ├── All Candidates
│   ├── By Job (application list)
│   ├── Candidate Profile
│   │   ├── Resume / CV
│   │   ├── Application Answers
│   │   ├── Cover Letter
│   │   ├── Notes & Tags
│   │   ├── Interview Feedback
│   │   ├── Stage History
│   │   └── Actions (advance, reject, message)
│   ├── Talent Pipeline (Kanban board)
│   │   ├── Applied
│   │   ├── Screened
│   │   ├── Interview
│   │   ├── Offer
│   │   └── Hired / Rejected
│   └── Candidate Search / Source
├── Interviews
│   ├── Schedule Interview
│   ├── Interview Calendar
│   ├── Interview Kits (questions, rubrics)
│   └── Feedback Forms
├── Messages
│   ├── Candidate Messages
│   ├── Templates
│   └── Bulk Messaging
├── Company Page
│   ├── Edit Profile
│   ├── Photos & Media
│   ├── Benefits
│   └── Review Responses
├── Analytics
│   ├── Job Performance (views, applies, conversion)
│   ├── Source Tracking
│   ├── Time-to-Fill
│   ├── Diversity Metrics
│   └── Pipeline Reports
├── Team
│   ├── Hiring Team Members
│   ├── Roles & Permissions
│   └── Interview Assignments
└── Settings
    ├── Company Info
    ├── Billing & Plan
    ├── ATS Integrations
    ├── Email Templates
    └── Notifications
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Seeker Header** | Sticky top bar | Logo, Job Search, My Jobs, Messages (badge), Profile |
| **Search Bar** | Prominent on home, compact in header | What (title/keyword) + Where (location) |
| **Results Filters** | Left sidebar (desktop) / bottom sheet (mobile) | Job type, salary, experience, remote, date posted |
| **Job Detail CTA** | Sticky apply button | Always visible on scroll |
| **Employer Sidebar** | Fixed left nav | Dashboard, Jobs, Candidates, Interviews, Messages, Analytics, Settings |
| **Pipeline Board** | Kanban (horizontal lanes) | Drag candidates between stages |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Job | title, department, location, remote_policy (remote/hybrid/onsite), salary_range, type (full-time/part-time/contract), description, requirements[], benefits[], posted_at, expires_at, status | belongs to Company, has many Applications |
| Application | status, resume, cover_letter, answers[], applied_at, stage, notes[] | belongs to Job and Candidate |
| Candidate | name, email, phone, resume, experience[], education[], skills[], portfolio_url | has many Applications |
| Company | name, logo, industry, size, description, culture, photos[], rating, benefits[] | has many Jobs, Reviews |
| Interview | candidate, job, interviewers[], datetime, type (phone/video/onsite), feedback[], status | belongs to Application |
| Review | rating, title, pros, cons, role, employment_status (current/former), date | belongs to Company |
| SavedSearch | keywords, location, filters, alert_frequency | belongs to Candidate |
| Message | sender, recipient, subject, body, attachments[], read | between Candidate and Employer |
| InterviewKit | job, questions[], rubric, interviewer_guide | belongs to Job |
| SalaryData | title, company, location, base, bonus, equity, total_comp | aggregated data |

### Application Status Flow
```
applied → screened → interview → offer → hired
           ↘ rejected (at any stage)
           ↘ withdrawn (by candidate)
```

## User Flows

### Search & Apply
```
Home → Search (title + location) → Results → Filter → Job Detail → Apply → Upload Resume → Answer Questions → Submit → Track in My Applications
```

### Easy Apply
```
Job Detail → [Easy Apply] → Auto-fill from Profile → Review → Submit (1-click)
```

### Employer: Post & Hire
```
Dashboard → [+ Post Job] → Fill Details → Add Questions → Publish → Review Applications → Screen → Schedule Interview → Collect Feedback → Extend Offer
```

### Employer: Pipeline Management
```
Candidates → Kanban Board → Drag to Next Stage → Add Notes → Schedule Interview → Feedback → Offer / Reject → Notify Candidate
```

## URL / Route Structure

### Job Seeker
```
/                              → Home
/jobs                          → Job Search
/jobs?q=:query&l=:location     → Search Results
/job/:id                       → Job Detail
/job/:id/apply                 → Application Form
/applications                  → My Applications
/applications/:id              → Application Detail
/profile                       → My Profile
/profile/resume                → Resume
/profile/preferences           → Job Preferences
/companies                     → Company Directory
/companies/:slug               → Company Page
/companies/:slug/reviews       → Company Reviews
/companies/:slug/salaries      → Company Salaries
/salaries                      → Salary Explorer
/salaries/:title               → Salary by Title
/messages                      → Messages
/messages/:threadId            → Message Thread
/saved-jobs                    → Saved Jobs
/resources                     → Career Resources
/account                       → Account Settings
/help                          → Help Center
```

### Employer
```
/employer                      → Dashboard
/employer/jobs                 → Job Listings
/employer/jobs/new             → Create Job
/employer/jobs/:id             → Job Detail / Edit
/employer/jobs/:id/candidates  → Candidates for Job
/employer/candidates           → All Candidates
/employer/candidates/:id       → Candidate Profile
/employer/pipeline/:jobId      → Kanban Pipeline
/employer/interviews           → Interview Schedule
/employer/interviews/:id       → Interview Detail
/employer/messages             → Messages
/employer/company              → Company Page Editor
/employer/analytics            → Analytics
/employer/team                 → Team Management
/employer/settings             → Settings
/employer/billing              → Billing
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Jobs (seeker) | Title, keyword, company | Location / Remote, Job Type (full/part/contract), Experience Level, Salary Range, Date Posted, Industry, Company Size, Benefits | Relevance, Date, Salary, Distance |
| Companies | Name, industry | Size, Rating, Industry, Location | Rating, Name, Size |
| Candidates (employer) | Name, skills, title, resume text | Experience, Education, Location, Skills, Applied Date, Stage | Match Score, Date, Name |
| Salaries | Title, company | Location, Experience, Industry | Median Salary, Sample Size |

### Search Autocomplete
Job search suggests: job titles, companies, locations (city/state/country), popular searches

## Responsive Behavior

| Breakpoint | Search | Results | Job Detail | Pipeline |
|------------|--------|---------|-----------|----------|
| Desktop (≥1024px) | Full inline search | List + detail split pane | Full detail + sidebar apply | Horizontal Kanban |
| Tablet (768–1023px) | Compact search | List, detail on click | Full-width detail | Horizontal Kanban (scrollable) |
| Mobile (<768px) | Search bar expands | Card list | Full page, sticky apply bar | Vertical stages (accordion) |

### Mobile Adaptations
- One-tap easy apply from search results
- Resume upload from phone (camera / files)
- Push notifications for new matching jobs
- Swipe to save/dismiss jobs
- Application status timeline (visual)
- Calendar integration for interviews

## Access Control

### Job Seeker
| Role | Search | Apply | Track | Reviews | Salary Data |
|------|--------|-------|-------|---------|-------------|
| Guest | ✅ | — (prompt signup) | — | Read | Limited |
| Free User | ✅ | ✅ | ✅ | Read + Write | Limited |
| Premium | ✅ | ✅ + priority | ✅ + insights | Read + Write | Full |

### Employer
| Role | Dashboard | Jobs | Candidates | Interviews | Analytics | Settings |
|------|-----------|------|-----------|------------|-----------|----------|
| Admin | ✅ | CRUD all | All | All | All | ✅ |
| Recruiter | ✅ | CRUD assigned | Assigned jobs | Assigned | Own jobs | — |
| Hiring Manager | ✅ | View | Review + feedback | Participate | Own jobs | — |
| Interviewer | — | — | Assigned candidates | Own interviews | — | — |
