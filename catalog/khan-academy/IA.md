---
brand: Khan Academy
tagline: You can learn anything
category: Education
website: https://khanacademy.org
---

# Information Architecture — Khan Academy

## Overview

Khan Academy is a free, nonprofit education platform offering mastery-based learning across math, science, computing, humanities, and test prep. The IA is structured as a knowledge tree — subjects branch into units, units into lessons, lessons into individual exercises and videos. The mastery system tracks comprehension through spaced repetition and adaptive practice, while Khanmigo (AI tutor) provides personalized guidance. The platform serves learners from K-12 through adult education.

## Site Map

```
Khan Academy
├── Home (Dashboard)
│   ├── Continue Learning
│   ├── Mastery Progress (current courses)
│   ├── Streak Counter
│   ├── Assigned (teacher assignments)
│   └── Recommendations
├── Subjects
│   ├── Math
│   │   ├── Early Math (K-2)
│   │   ├── Arithmetic
│   │   ├── Pre-Algebra
│   │   ├── Algebra 1 & 2
│   │   ├── Geometry
│   │   ├── Trigonometry
│   │   ├── Precalculus
│   │   ├── Calculus (AP/College)
│   │   ├── Statistics
│   │   ├── Linear Algebra
│   │   └── Multivariable Calculus
│   ├── Science
│   │   ├── Biology (AP/College)
│   │   ├── Chemistry (AP/College)
│   │   ├── Physics (AP/College)
│   │   ├── Organic Chemistry
│   │   └── Health & Medicine
│   ├── Computing
│   │   ├── Computer Programming
│   │   ├── Computer Science
│   │   ├── Algorithms
│   │   └── Pixar in a Box
│   ├── Humanities
│   │   ├── US History
│   │   ├── World History
│   │   ├── Art History
│   │   ├── Grammar
│   │   └── Government & Civics
│   ├── Economics
│   │   ├── Microeconomics
│   │   ├── Macroeconomics
│   │   └── Finance & Capital Markets
│   └── Test Prep
│       ├── SAT
│       ├── LSAT
│       ├── MCAT
│       ├── AP Courses
│       └── Praxis
├── Course → Unit → Lesson → Content
│   ├── Video (lecture)
│   ├── Article (text explanation)
│   ├── Practice Exercise (adaptive)
│   ├── Unit Test
│   └── Course Challenge (mastery)
├── Khanmigo (AI Tutor)
│   ├── Chat with AI
│   ├── Tutor Mode (Socratic method)
│   ├── Writing Coach
│   ├── Debate Partner
│   └── Teacher Tools (AI-assisted)
├── Teacher Dashboard
│   ├── Classes
│   ├── Assignments
│   ├── Student Progress Reports
│   ├── Mastery Overview
│   └── Course Mastery Goals
├── Parent Dashboard
│   ├── Child's Activity
│   ├── Progress Reports
│   └── Weekly Summary Emails
├── Profile
│   ├── Energy Points
│   ├── Badges / Avatars
│   ├── Mastery Progress by Subject
│   ├── Activity Log
│   └── Goals
├── District / Admin
│   ├── Rostering (Clever, ClassLink)
│   ├── District-wide reporting
│   └── Implementation resources
└── About
    ├── Mission
    ├── Research
    ├── Donate
    ├── Careers
    └── Press
```

## Navigation Model

- **Type**: Top nav bar (desktop/web), bottom tab bar (mobile app)
- **Desktop Top Bar**: Subjects (mega dropdown), Search, Khanmigo, Donate | Profile, Teacher/Parent toggle
- **Mobile Bottom Tabs**: Home, Search, Bookmarks, Profile
- **Subject Drill-Down**: Subject → Course → Unit → Lesson → Video/Exercise
- **Breadcrumb**: Always visible showing Subject > Course > Unit > Lesson position
- **Sidebar**: Left sidebar shows unit/lesson outline for navigation within a course
- **Mastery Map**: Visual representation of skill mastery (familiar → proficient → mastered)

## Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Course | title, subject, description, unit count, mastery percentage | → Units |
| Unit | title, position, lesson count, unit test | → Course, → Lessons |
| Lesson | title, position, content items (videos, articles, exercises) | → Unit |
| Video | title, duration, transcript, subtitles, Sal/instructor, YouTube ID | → Lesson |
| Article | title, body (rich text with LaTeX), author | → Lesson |
| Exercise | question set (adaptive), skill tag, mastery level, hints, explanation | → Lesson, → Skill |
| Unit Test | questions (sampled from unit), score, mastery impact | → Unit |
| Course Challenge | questions (sampled across course), cumulative mastery | → Course |
| Skill | name, mastery level (needs practice → mastered), spaced repetition schedule | → Exercise(s) |
| Badge | name, icon, criteria, rarity | → Profile |
| Assignment (teacher-created) | content items, due date, class, students | → Class |

## User Flows

### Mastery Learning

```
Select Course (e.g., Algebra 1) → Unit 1 → Lesson 1 →
  Watch video → Read article (optional) → Start practice exercise →
  Exercise adapts: correct answers advance; wrong answers provide hints →
  Mastery level progresses: Attempted → Familiar → Proficient → Mastered →
  Take Unit Test → Mastery level adjusts → Move to next unit or review
```


### Teacher Assigning Work

```
Teacher creates class → Students join via class code →
  Teacher browses course → Selects exercises/videos → Assigns to class with due... →
  Students see assignment on their Home dashboard → Complete exercises →
  Teacher views Student Progress → Mastery heat map (red → yellow → green) →
  Identify struggling students → Provide targeted support
```


### Using Khanmigo AI Tutor

```
Stuck on a problem → Tap Khanmigo icon →
  AI asks guiding questions (Socratic method) — does not give direct answers →
  Student works through reasoning → Khanmigo confirms or redirects →
  For writing: Khanmigo provides feedback, suggestions, not rewrites →
  Teacher can review Khanmigo conversation logs
```


## URL / Route Structure

```
khanacademy.org/                                # Homepage
khanacademy.org/math                            # Math subject
khanacademy.org/math/algebra                    # Algebra course
khanacademy.org/math/algebra/unit-1             # Unit
khanacademy.org/math/algebra/unit-1/lesson-1    # Lesson
khanacademy.org/math/algebra/unit-1/lesson-1/v/{videoSlug}  # Video
khanacademy.org/math/algebra/unit-1/lesson-1/e/{exerciseSlug}  # Exercise
khanacademy.org/math/algebra/unit-1/lesson-1/a/{articleSlug}   # Article
khanacademy.org/profile                         # User profile
khanacademy.org/coach/dashboard                 # Teacher dashboard
khanacademy.org/sat                             # SAT prep
khanacademy.org/computing                       # Computing courses
khanacademy.org/search?q={query}                # Search results
khanacademy.org/donate                          # Donation page
khanacademy.org/science                      # Science courses
khanacademy.org/humanities                    # Humanities courses
khanacademy.org/economics-finance-domain      # Economics & Finance
khanacademy.org/test-prep                     # Test prep (SAT, MCAT, etc.)
khanacademy.org/kids                          # Khan Kids content
khanacademy.org/khanmigo                      # Khanmigo AI tutor
khanacademy.org/coach/class/{classId}          # Class dashboard
khanacademy.org/coach/class/{classId}/students  # Student list
khanacademy.org/signup                         # Registration page
khanacademy.org/login                          # Login page
khanacademy.org/settings                       # User settings
khanacademy.org/donate                         # Donation page
```

## Search & Filter

- **Global Search**: Videos, articles, exercises by keyword across all subjects
- **Subject Browse**: Hierarchical navigation — Subject → Course → Unit → Lesson
- **Grade Filter**: K-12 grade-level alignment for age-appropriate content
- **Mastery Filter**: Show "Needs practice" skills for review sessions
- **Teacher Search**: Find content to assign; search by standard (Common Core, NGSS)
- **Language Filter**: Content available in 50+ languages
- **Test Prep Filter**: SAT, LSAT, MCAT with practice test mode
- **Khanmigo**: Natural language query — "Explain quadratic formula" triggers tutoring conversation

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App | Bottom tab bar; vertical video player; exercise one-question-at-a-time; simplified mastery map |
| Tablet | Split view — video + notes; larger exercise area; course sidebar |
| Desktop (primary) | Left sidebar course outline + main content area; video player with transcript; exercise with workspace |
| Classroom / Projector | Full-screen video mode; teacher controls for pacing |
| Offline | Mobile app supports downloaded videos and exercises for offline access |


### Platform-Specific UX
- Mastery-based progression requires demonstrating understanding before advancing
- Energy points and badges gamify learning progress and consistency
- Khanmigo AI tutor provides Socratic-method tutoring without giving direct answers

## Access Control

| Role | Capabilities |
|---|---|
| Learner (free) | Full access to all content: videos, articles, exercises, mastery tracking, badges |
| Learner (Khanmigo) | All free features + AI tutor, writing coach, debate partner (requires Khanmigo subscription or district license) |
| Teacher (free) | Create classes, assign content, view student progress, mastery reports, class management |
| Teacher (Khanmigo) | All teacher features + AI lesson planning, rubric creation, student support insights |
| Parent (free) | Link to child's account, view progress reports, receive weekly summaries |
| District Admin | Roster management (Clever/ClassLink), district-wide reporting, implementation support |
| Content Creator (internal) | Create/edit videos, articles, exercises; manage course structure |
| Translator | Contribute translations via Crowdin integration; localize content |
| Donor | No special access; donation supports free mission |
