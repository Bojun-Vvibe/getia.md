# Learning Platform — Information Architecture

## Overview

An online education platform (Coursera, Udemy, Khan Academy style). The mental model is **curriculum → lessons → progress** — students enroll in courses, work through structured content, and track their learning progress. Completion and engagement are primary metrics.

## Site Map

```
├── Home
│   ├── Continue Learning (in-progress courses)
│   ├── Recommended for You
│   ├── Popular Courses
│   ├── New Courses
│   ├── Learning Paths
│   └── Categories
├── Browse / Catalog
│   ├── By Category (Development, Business, Design, etc.)
│   ├── By Skill Level (Beginner, Intermediate, Advanced)
│   ├── By Format (Video, Interactive, Text)
│   ├── Certifications
│   └── Learning Paths (curated sequences)
├── Course Page
│   ├── Title, Instructor, Rating, Enrollment Count
│   ├── Preview Video
│   ├── Description & What You'll Learn
│   ├── Curriculum / Syllabus
│   │   ├── Section 1
│   │   │   ├── Lesson 1 (video/text/interactive)
│   │   │   ├── Lesson 2
│   │   │   └── Quiz
│   │   ├── Section 2
│   │   └── Final Assessment
│   ├── Instructor Bio
│   ├── Reviews & Ratings
│   ├── Prerequisites
│   ├── Pricing / Enroll Button
│   └── Related Courses
├── Learning View (enrolled)
│   ├── Video Player / Content Area
│   ├── Sidebar: Curriculum Navigator
│   ├── Notes (personal)
│   ├── Transcript
│   ├── Downloads / Resources
│   ├── Discussion / Q&A
│   ├── Exercises / Coding Playground
│   └── Progress Bar
├── Quizzes & Assessments
│   ├── Quiz View (questions)
│   ├── Results & Feedback
│   └── Certificate (on completion)
├── My Learning
│   ├── In Progress
│   ├── Completed
│   ├── Wishlist
│   ├── Certificates
│   └── Learning Stats (hours, courses, streak)
├── Search
│   ├── Courses
│   ├── Instructors
│   └── Topics
├── Instructor Pages
│   ├── Profile & Bio
│   ├── Courses
│   └── Reviews
├── Community
│   ├── Discussion Forums
│   ├── Study Groups
│   └── Peer Reviews
├── Account
│   ├── Profile
│   ├── Subscriptions / Purchases
│   ├── Payment Methods
│   ├── Notifications
│   ├── Language & Accessibility
│   └── Settings
└── For Instructors / Teach
    ├── Dashboard (earnings, enrollments)
    ├── Course Builder
    │   ├── Curriculum Editor
    │   ├── Video Upload
    │   ├── Quiz Builder
    │   └── Pricing & Publishing
    ├── Student Analytics
    └── Revenue
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed header | Logo, Browse (category dropdown), Search, My Learning, Cart, Profile |
| **Course Sidebar** | Left sidebar in learning view | Curriculum tree, section/lesson navigation, progress checkmarks |
| **Video Controls** | Player overlay | Play/pause, speed, quality, subtitles, fullscreen, notes |
| **Progress Bar** | Top of course page | Overall completion percentage |
| **Bottom Bar** | Mobile learning view | Previous / Next lesson, Mark Complete |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Course | title, description, category, level, language, duration, price, rating, enrollment_count | has Sections, Instructor, Reviews |
| Section | title, order | has many Lessons |
| Lesson | title, type (video/text/interactive/quiz), duration, content, order | belongs to Section |
| Quiz | questions[], passing_score, attempts_allowed | type of Lesson |
| Enrollment | user, course, progress_pct, started_at, completed_at | connects User and Course |
| LessonProgress | lesson, completed, time_spent | belongs to Enrollment |
| Review | rating (1-5), text, created_at | belongs to Course and User |
| Certificate | course, user, issued_at, credential_id | belongs to Enrollment |
| Instructor | name, bio, avatar, rating, students_count, courses_count | has many Courses |
| Note | content, timestamp (linked to video position), lesson | belongs to User |
| LearningPath | name, description, courses[] (ordered) | curated sequence |

### Lesson Types
`video | article | interactive (code lab) | quiz | assignment | download`

## User Flows

### Discover and Enroll
```
Home → Browse Category → Course Page → Preview → Enroll / Purchase → Start Learning
```

### Learning Session
```
My Learning → Continue Course → Video Lesson → Take Notes → Complete → Next Lesson → Quiz → Results
```

### Complete Course
```
... → Final Assessment → Pass → Certificate Generated → Download / Share on LinkedIn
```

### Instructor: Create Course
```
Teach Dashboard → Create Course → Add Sections → Upload Videos → Create Quizzes → Set Price → Publish
```

## URL / Route Structure

```
/                              → Home
/browse                        → Catalog
/browse/:category              → Category Page
/course/:slug                  → Course Page
/course/:slug/learn            → Learning View (redirects to current lesson)
/course/:slug/learn/:lessonId  → Specific Lesson
/course/:slug/quiz/:quizId     → Quiz
/course/:slug/certificate      → Certificate
/my-learning                   → My Learning
/my-learning/completed         → Completed Courses
/my-learning/wishlist          → Wishlist
/my-learning/certificates      → All Certificates
/search?q=:query               → Search Results
/instructor/:id                → Instructor Profile
/paths                         → Learning Paths
/paths/:id                     → Path Detail
/teach                         → Instructor Dashboard
/teach/courses/:id/edit        → Course Builder
/account                       → Account Settings
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Catalog | Category, Level, Price (free/paid), Duration, Rating, Language, Features (subtitles, certificate) | Most Popular, Highest Rated, Newest, Price |
| My Learning | Status (in progress/completed), Category | Last Accessed, Enrolled Date, Title |
| Within Course | Lesson title, Q&A | Section Order, Relevance |

## Responsive Behavior

| Breakpoint | Browse | Learning View | Video |
|------------|--------|--------------|-------|
| Desktop | Grid 4 cols | Sidebar + video/content | Large player + sidebar |
| Tablet | Grid 2-3 cols | Toggle sidebar | Full-width player |
| Mobile | Single column cards | Full-screen video, bottom nav | Full-screen player |

### Learning-Specific UX
- Auto-save progress
- Resume from last position
- Keyboard shortcuts (space = play/pause, → = skip)
- Playback speed (0.5x–2x)
- Picture-in-picture for multitasking
- Offline download (mobile)
- Note-taking synced to video timestamp

## Access Control

| Role | Browse | Free Courses | Paid Courses | Teach | Admin |
|------|--------|-------------|-------------|-------|-------|
| Guest | ✅ | Preview only | — | — | — |
| Free User | ✅ | ✅ | — | — | — |
| Subscriber | ✅ | ✅ | ✅ (included) | — | — |
| Purchaser | ✅ | ✅ | Purchased only | — | — |
| Instructor | ✅ | ✅ | ✅ | Own courses | — |
| Admin | ✅ | ✅ | ✅ | All | ✅ |
