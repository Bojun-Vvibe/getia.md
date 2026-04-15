---
brand: ClassDojo
tagline: "Connect teachers, students, and families. Behavior tracking, messaging, and classroom community."
category: School
website: https://classdojo.com
---

# ClassDojo — Information Architecture

## Overview

ClassDojo is a classroom communication and behavior management platform connecting teachers, students, and parents. Unlike full school management systems (PowerSchool), ClassDojo is **teacher-first and classroom-centric** — a single teacher can start using it in minutes without admin involvement. The core loop: teachers award or deduct points for behavior (positive reinforcement), share class stories (photos/videos), and message parents — all in real time. Monster avatars make it fun and approachable for K-8 students. ClassDojo also offers "Dojo Islands" (a virtual world for students) and Dojo Tutor (AI tutoring).

## Site Map

### Teacher App

```
├── Home
│   ├── My Classes (class cards)
│   ├── Quick Actions (take attendance, award points)
│   ├── Messages (unread count)
│   ├── School Story (school-wide feed)
│   └── Dojo Updates
├── Class View (Primary Screen)
│   ├── Student Grid
│   │   ├── Monster Avatars (circle avatars in grid)
│   │   ├── Point Totals (visible on each avatar)
│   │   ├── Tap Avatar → Award/Deduct Point
│   │   └── Select Multiple Students (group points)
│   ├── Behavior Skills
│   │   ├── Positive (Participating, Helping Others, Working Hard, Teamwork)
│   │   ├── Needs Work (Off Task, Disrespectful, Not Prepared, Talking Out)
│   │   └── Custom Skills (teacher-defined)
│   ├── Random Selector (random student picker, with animation)
│   ├── Group Maker (random groups)
│   ├── Timer / Noise Meter / Music
│   ├── Attendance
│   └── Class Settings
├── Class Story
│   ├── Photo Posts
│   ├── Video Posts
│   ├── Text Updates
│   ├── Draw (whiteboard drawing)
│   ├── Parent Visibility (toggle per post)
│   └── Comments & Likes
├── Portfolios (Student Work)
│   ├── Per-Student Portfolio
│   ├── Student-Uploaded Work (photos, drawings, voice recordings)
│   ├── Teacher-Added Items
│   ├── Activities (prompted by teacher)
│   │   ├── Photo Activity ("Show me your science project")
│   │   ├── Drawing Activity
│   │   ├── Writing Activity
│   │   └── Video Activity
│   └── Parent Can View
├── Messages
│   ├── Parent Messages (per student)
│   ├── Broadcast to All Parents
│   ├── Translation (auto-translate 35+ languages)
│   ├── Read Receipts
│   └── Scheduled Messages
├── Reports
│   ├── Behavior Report (per student, per class)
│   ├── Points Over Time (chart)
│   ├── Attendance Report
│   ├── Skill Breakdown
│   │   ├── Most Awarded Positive Skill
│   │   ├── Most Common Needs Work
│   │   └── Trends
│   ├── Export (PDF, CSV)
│   └── Share Report with Parents
├── Toolkit
│   ├── Timer
│   ├── Noise Meter (microphone-based)
│   ├── Directions (display instructions on screen)
│   ├── Think-Pair-Share
│   ├── Random Selector
│   ├── Group Maker
│   └── Music (focus sounds)
├── Dojo Islands (Student World)
│   ├── Virtual Island (student's personal space)
│   ├── Customize with Earned Points
│   ├── Mini-Games
│   └── Social Features (visit friends' islands)
├── Class Settings
│   ├── Add/Remove Students
│   ├── Customize Behavior Skills
│   ├── Point Values
│   ├── Invite Parents (via code or link)
│   ├── Class Code (for students to join)
│   ├── Co-Teachers
│   └── Archive / Reset Points
├── School Story (School-Wide)
│   ├── School Administrators Post
│   ├── All Parents Can See
│   └── School Announcements
└── Settings
    ├── Account
    ├── Notification Preferences
    ├── School Association
    └── Help
```

### Parent App

```
├── Home
│   ├── Children (selector if multiple)
│   ├── Today's Points (positive/needs work)
│   ├── Class Story (latest posts)
│   ├── Messages (from teacher)
│   └── School Story
├── Child's Page
│   ├── Points Summary (daily/weekly)
│   ├── Behavior Report (by skill)
│   ├── Monster Avatar (matching classroom)
│   ├── Portfolio (student work)
│   ├── Attendance
│   └── Teacher Info
├── Messages
│   ├── Conversations with Teacher(s)
│   ├── Auto-Translation
│   └── Read Receipts
├── Class Story (read-only)
│   ├── Photos & Videos from Classroom
│   ├── Like & Comment
│   └── Save / Download
├── School Story
│   ├── School Announcements
│   └── Events
├── Dojo Tutor (AI)
│   ├── Math Tutoring
│   ├── Reading Practice
│   └── Parent Dashboard (progress)
└── Settings
    ├── Children Management
    ├── Notifications (real-time points, stories, messages)
    ├── Language
    └── Account
```

### Student App

```
├── Home
│   ├── My Monster (avatar)
│   ├── My Points (today)
│   ├── Dojo Islands Access
│   └── Portfolio (my work)
├── Portfolio
│   ├── My Work (photos, drawings, videos)
│   ├── Complete Activities (teacher-assigned)
│   └── Submit Work
├── Dojo Islands
│   ├── My Island (customizable)
│   ├── Earn Items with Points
│   ├── Visit Friends' Islands
│   └── Mini-Games
├── Class Story (read)
└── Profile
    ├── Customize Monster
    └── Settings
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Teacher: Class Grid** | Primary view (full screen) | Monster avatar grid — tap to award points |
| **Teacher: Bottom Tab Bar** | 4-5 tabs | Class, Story, Portfolios, Messages, Toolkit |
| **Parent: Bottom Tab Bar** | 4 tabs | Home, Story, Messages, Account |
| **Student: Bottom Tab Bar** | 3-4 tabs | Home, Portfolio, Islands, Profile |
| **Point Award** | Quick-tap flow | Tap avatar → Select skill → Point awarded (sound + animation) |
| **Class Switcher** | Top bar dropdown | Switch between multiple classes |

### Signature UX: Point Award
```
Tap "Emma's Monster" → ⭐ Skill Menu pops up → Tap "Working Hard" → +1 Point → Sound Effect → Monster Bounces → Parent Gets Notification
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Class | name, grade, teacher, students[], parents[], class_code, co_teachers[], behavior_skills[] | has many Students |
| Student | name, monster_avatar, points_positive, points_negative, class, portfolio | belongs to Class, has Parents |
| BehaviorPoint | student, skill, value (+1/-1), teacher, timestamp, note | belongs to Student |
| BehaviorSkill | name, type (positive/needs_work), icon, point_value, custom | belongs to Class |
| StoryPost | type (photo/video/text/draw), content, class, visibility (class/school), likes, comments[], created_at | belongs to Class |
| PortfolioItem | student, type (photo/drawing/voice/video/text), content, activity, teacher_feedback, created_at | belongs to Student |
| Activity | title, type, instructions, due_date, class, submissions[] | teacher-assigned |
| Message | sender (teacher/parent), recipient, body, translated_body, read, thread_id | between Teacher and Parent |
| Attendance | student, date, status (present/absent/late) | belongs to Student |
| Monster | base_type, color, accessories[], earned_items[] | belongs to Student |
| School | name, code, teachers[], admins[], school_story | has many Classes |

### Gamification
```
Points → Customize Monster → Unlock Island Items → Visit Friends
Positive Points: accumulate, visible to parents
Needs Work Points: tracked separately, for teacher awareness
```

## User Flows

### Teacher: Award Points During Class
```
Open Class → See Student Grid → Tap "Marcus" → [Working Hard ⭐+1] → Sound Effect → Marcus's Points Update → Parent Gets Push Notification → Continue Teaching
```

### Teacher: Share Class Story
```
Story → [+] → Take Photo of Student Work → Add Caption → Post to Class Story → Parents See in Feed → Parents Like/Comment
```

### Parent: Check Child's Day
```
Open App → Home → "Emma earned 3 points today 🌟" → View Details (Participating x2, Helping Others x1) → Scroll Down → Class Story → See Classroom Photos
```

### Teacher: Generate Behavior Report
```
Reports → Select Student → View Points Over Time → See Skill Breakdown → [Share with Parent] → PDF Generated → Sent via Message
```

### Student: Complete Portfolio Activity
```
Portfolio → "Draw your favorite animal" → Draw → Submit → Teacher Reviews → Appears in Portfolio → Parent Can View
```

## URL / Route Structure

> Note: ClassDojo is primarily a mobile app. Web routes are for the teacher web interface.

```
/                                → Dashboard / My Classes
/class/:id                       → Class View (student grid)
/class/:id/story                 → Class Story
/class/:id/portfolios            → Portfolios
/class/:id/portfolios/:studentId → Student Portfolio
/class/:id/attendance            → Attendance
/class/:id/reports               → Reports
/class/:id/reports/:studentId    → Student Report
/class/:id/settings              → Class Settings
/messages                        → Messages
/messages/:threadId              → Conversation
/toolkit                         → Toolkit (timer, noise meter)
/school-story                    → School Story
/settings                        → Account Settings
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Students (teacher) | Student name | Class, Points Range | Name, points |
| Messages | Parent/student name | Class, Unread | Recent, name |
| Reports | Student name | Date Range, Skill Type | Date, points |

## Responsive Behavior

| Breakpoint | Class Grid | Story | Messages |
|------------|-----------|-------|----------|
| Mobile (primary for parents/students) | Monster grid (scrollable) | Vertical feed | Chat view |
| Tablet (primary for teachers in class) | Larger grid, perfect for projection | Feed + sidebar | Split view |
| Desktop (web, teacher management) | Full grid + sidebar reports | Full feed | Three-column (threads + chat) |

### ClassDojo-Specific UX
- **Monster avatars**: Every student gets a unique, customizable monster — makes it fun and anonymous when projected
- **Projection mode**: Teacher projects class grid on smartboard; whole class sees points awarded in real time
- **Instant parent notifications**: Parent gets push notification within seconds of a point award
- **Auto-translation**: Messages auto-translated into 35+ languages (critical for diverse classrooms)
- **Sound effects**: Satisfying sounds on point award (positive = ding, needs work = gentle tone)
- **No student shaming**: "Needs Work" points are private to teacher + parent; not shown on projected screen
- **One-tap point award**: Minimal friction — tap student, tap skill, done
- **QR code class join**: Students and parents join via QR code or 6-digit code

## Access Control

| Feature | Teacher | Parent | Student | School Admin |
|---------|---------|--------|---------|-------------|
| Class Grid | Own classes | — | — | All classes |
| Award Points | ✅ | — | — | — |
| Class Story | Post + manage | View + comment | View | View + post to school |
| Portfolios | View + assign | View child's | Submit + view own | View all |
| Messages | All parents | Own child's teacher | — | Broadcast |
| Reports | Generate + share | View child's | — | View all |
| Settings | Own classes | Notifications | Avatar | School-wide |
| Dojo Islands | — | Monitor | ✅ | — |
