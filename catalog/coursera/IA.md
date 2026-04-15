---
brand: Coursera
tagline: "Learn from top universities and companies. Degrees, certificates, and courses online."
category: Learning
website: https://coursera.org
---

# Coursera — Information Architecture

## Overview

Coursera is the world's largest MOOC (Massive Open Online Course) platform, offering university-quality courses, professional certificates, and full degrees from top institutions (Stanford, Google, IBM, Yale). The mental model is **academic rigor meets online accessibility** — structured courses with video lectures, graded assignments, peer reviews, and certificates. Key differentiator vs Udemy: university partnerships, accredited degrees, and Google/Meta/IBM professional certificates. Coursera also serves enterprises (Coursera for Business) and governments (Coursera for Campus).

## Site Map

```
├── Home
│   ├── Search Bar (prominent)
│   ├── Continue Learning (in-progress courses)
│   ├── Recommended for You (personalized)
│   ├── Explore Top Courses
│   ├── Professional Certificates (Google, Meta, IBM)
│   ├── Degree Programs
│   ├── New & Trending
│   ├── Categories (Data Science, Business, CS, Health, etc.)
│   └── Free Courses
├── Explore / Catalog
│   ├── Browse by Category
│   │   ├── Data Science & Analytics
│   │   ├── Computer Science
│   │   ├── Business
│   │   ├── Health
│   │   ├── Social Sciences
│   │   ├── Arts & Humanities
│   │   └── Personal Development
│   ├── Browse by Institution
│   │   ├── Universities (Stanford, Yale, Michigan)
│   │   └── Companies (Google, IBM, Meta)
│   ├── Browse by Skill
│   ├── Professional Certificates
│   ├── Specializations (course sequences)
│   ├── Guided Projects (2-hour, hands-on)
│   ├── Degrees (online bachelor's / master's)
│   └── Coursera Plus (subscription access)
├── Course Page
│   ├── Title, Institution Logo, Instructor(s)
│   ├── Rating (stars + review count)
│   ├── Enrollment Count ("2.5M already enrolled")
│   ├── Preview Video
│   ├── About This Course
│   ├── What You'll Learn (skills list)
│   ├── Skills You'll Gain (tags)
│   ├── Syllabus / Course Content
│   │   ├── Week 1: Module Title
│   │   │   ├── Videos (3h 20m)
│   │   │   ├── Readings (45m)
│   │   │   ├── Quizzes (2)
│   │   │   └── Programming Assignments (1)
│   │   ├── Week 2: ...
│   │   └── Week N: Final Assessment
│   ├── Instructor Bio(s)
│   ├── Offered By (institution description)
│   ├── Reviews
│   ├── Career Outcomes ("86% started a new career")
│   ├── Pricing (audit free vs certificate paid)
│   ├── Financial Aid Available
│   ├── Enroll for Free / Start Free Trial
│   └── Related Courses
├── Learning View (Enrolled)
│   ├── Course Navigation
│   │   ├── Week / Module Tabs
│   │   ├── Content List (videos, readings, quizzes)
│   │   └── Progress Checkmarks
│   ├── Video Player
│   │   ├── Subtitles (auto-generated, multi-language)
│   │   ├── Playback Speed (0.75x–2x)
│   │   ├── Transcript (synced, searchable)
│   │   ├── Notes (linked to timestamp)
│   │   └── Download Video (mobile offline)
│   ├── Readings
│   ├── Discussion Forums (per module)
│   ├── Quizzes
│   │   ├── Questions (MCQ, coding, short answer)
│   │   ├── Attempts (limited or unlimited)
│   │   ├── Feedback (per question)
│   │   └── Passing Score
│   ├── Programming Assignments (Jupyter Notebooks, sandboxed)
│   ├── Peer Review Assignments
│   │   ├── Submit Work
│   │   ├── Review Peers (assigned)
│   │   └── Receive Reviews
│   ├── Progress Bar (overall completion)
│   ├── Deadlines (suggested or hard)
│   └── Resources / Downloads
├── Specializations
│   ├── Overview (3-5 courses in sequence)
│   ├── Course List (ordered)
│   ├── Capstone Project
│   ├── Certificate on Completion
│   └── Enroll
├── Professional Certificates
│   ├── Google Data Analytics
│   ├── Google UX Design
│   ├── Meta Front-End Developer
│   ├── IBM Data Science
│   └── ... (50+)
│   ├── Program Page
│   │   ├── Employer-Recognized
│   │   ├── No Experience Needed
│   │   ├── Job-Ready Skills
│   │   ├── Courses in Program
│   │   └── Career Outcomes
├── Degrees
│   ├── Bachelor's Programs
│   ├── Master's Programs
│   ├── Application Process
│   ├── Tuition (fraction of on-campus cost)
│   ├── Accreditation Info
│   └── Compare Programs
├── My Learning
│   ├── In Progress
│   ├── Completed
│   ├── Certificates
│   ├── Achievements
│   └── Learning Goals
├── Certificates
│   ├── My Certificates (sharable)
│   ├── Share on LinkedIn
│   ├── Download PDF
│   └── Verify Certificate
├── Career Resources
│   ├── Job Search Tools
│   ├── Interview Prep
│   └── Career Guidance
├── Account
│   ├── Profile
│   ├── Coursera Plus Subscription
│   ├── Payment History
│   ├── Financial Aid Applications
│   ├── Notifications
│   ├── Language Preferences
│   └── Settings
└── For Enterprise
    ├── Coursera for Business
    ├── Coursera for Campus
    ├── Coursera for Government
    └── Content Partnerships
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed header | Logo, Explore (dropdown), Search, My Learning, Profile |
| **Explore Dropdown** | Mega menu | Goals (tabs) → Categories → Popular Courses |
| **Course Sidebar** | Left nav in learning view | Week/module tree with progress checkmarks |
| **Video Player** | Full-width with controls | Play/pause, speed, subtitles, notes, transcript |
| **Progress Bar** | Top of learning view | Overall completion % with module breakdown |
| **Mobile Bottom Bar** | Learning view | Previous / Next content, Mark Complete |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Course | title, description, institution, instructors[], category, level (beginner/intermediate/advanced), duration, language, rating, enrollment_count, price, audit_available | has Modules, belongs to Institution |
| Module (Week) | title, order, videos[], readings[], quizzes[], assignments[] | belongs to Course |
| Video | title, duration, subtitles[], transcript, downloadable | belongs to Module |
| Quiz | questions[], passing_score, attempts_allowed, time_limit | belongs to Module |
| ProgrammingAssignment | instructions, environment (Jupyter/sandbox), rubric, auto_graded | belongs to Module |
| PeerReviewAssignment | instructions, rubric, reviews_required | belongs to Module |
| Enrollment | user, course, progress_pct, grade, started_at, completed_at, certificate_earned | belongs to User and Course |
| Certificate | course/specialization, user, grade, issued_at, verification_url, shareable | belongs to Enrollment |
| Specialization | title, courses[] (ordered), capstone, institution | sequence of Courses |
| ProfessionalCertificate | title, courses[], employer_partners[], no_experience_required, job_outcomes | type of Specialization |
| Degree | title, institution, type (BS/MS/MBA), tuition, accreditation, duration | has many Courses |
| Institution | name, logo, type (university/company), description | has many Courses |
| Instructor | name, title, bio, avatar, institution, rating | has many Courses |

### Course Pricing Model
```
Audit (free) → access videos and readings, no certificate
Single Course Purchase → certificate on completion
Specialization → monthly subscription while enrolled
Coursera Plus → $59/mo, unlimited certificates for 7,000+ courses
Degree → per-credit tuition, accredited
```

## User Flows

### Discover and Enroll
```
Home → Search "data science" → Results → Course Page → Preview Video → Review Syllabus → [Enroll for Free] (or Start 7-Day Trial) → Begin Week 1
```

### Complete Course
```
My Learning → Continue Course → Watch Video → Take Notes → Complete Quiz → Submit Assignment → Peer Review → Final Exam → Pass → Certificate Generated → Share on LinkedIn
```

### Financial Aid
```
Course Page → Financial Aid → Application Form (explain need, 150 words) → Submit → Review (15 days) → Approved → Full Access + Certificate at No Cost
```

### Professional Certificate
```
Home → Professional Certificates → Google Data Analytics → Enroll → Complete 8 Courses → Capstone Project → Earn Certificate → Add to Resume → Apply for Jobs
```

## URL / Route Structure

```
/                                  → Home
/browse                            → Explore Catalog
/browse/:category                  → Category Page
/courses                           → All Courses
/learn/:slug                       → Course Page
/learn/:slug/home/welcome          → Learning View Home
/learn/:slug/lecture/:id           → Video Lecture
/learn/:slug/quiz/:id              → Quiz
/learn/:slug/peer/:id              → Peer Review
/learn/:slug/supplement/:id        → Reading
/learn/:slug/discussions           → Discussion Forums
/specializations/:slug             → Specialization Page
/professional-certificates/:slug   → Professional Certificate
/degrees/:slug                     → Degree Program
/degrees/:slug/apply               → Application
/my-learning                       → My Learning
/my-learning/completed             → Completed
/account/certificates              → My Certificates
/account                           → Account
/search?query=:q                   → Search Results
/instructor/:slug                  → Instructor Profile
/university/:slug                  → Institution Page
/courseraplus                       → Coursera Plus
/for-business                      → Enterprise
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Catalog | Course title, skill, topic, instructor, institution | Category, Level, Language, Duration, Rating, Free/Paid, Certification Type, Institution | Most Popular, Highest Rated, Newest |
| My Learning | Course title | Status (in-progress/completed), Category | Last Accessed, Enrolled Date |
| Within Course | Video titles, transcript text, forum posts | Module, Content Type | Module order, relevance |

## Responsive Behavior

| Breakpoint | Browse | Learning View | Video |
|------------|--------|--------------|-------|
| Desktop (≥1024px) | Grid (4 cols), filters sidebar | Sidebar + video/content (70/30 split) | Large player + transcript sidebar |
| Tablet (768–1023px) | Grid (2-3 cols) | Toggle sidebar | Full-width player |
| Mobile (<768px) | Single column cards | Full-screen video, bottom nav | Full-screen player, gesture controls |

### Learning-Specific UX
- Auto-save progress (resume from exact position)
- Keyboard shortcuts (space = play/pause, arrow = 10s skip)
- Playback speed (0.75x–2x)
- Subtitles in 20+ languages (auto-translated)
- Note-taking synced to video timestamp
- Offline download (mobile app)
- Deadline reminders (push notifications)
- Discussion forums moderated with TA support
- Peer review with structured rubrics

## Access Control

| Role | Browse | Audit | Certificate | Degrees | Teach |
|------|--------|-------|-------------|---------|-------|
| Guest | ✅ | — | — | — | — |
| Free (Audit) | ✅ | ✅ (videos + readings) | — | — | — |
| Single Purchase | ✅ | ✅ | ✅ (purchased course) | — | — |
| Coursera Plus | ✅ | ✅ | ✅ (7,000+ courses) | — | — |
| Degree Student | ✅ | ✅ | ✅ | ✅ | — |
| Financial Aid | ✅ | ✅ | ✅ (approved courses) | — | — |
| Instructor | ✅ | ✅ | ✅ | — | Own courses |
| Enterprise Learner | ✅ | ✅ | ✅ (assigned catalog) | — | — |
