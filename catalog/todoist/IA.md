---
brand: Todoist
tagline: Organize work and life with Todoist
category: Productivity
website: https://todoist.com
---

# Information Architecture — Todoist

## Overview

Todoist is a focused task management app built for personal productivity and small team collaboration. Its IA is intentionally minimal: Projects contain Tasks, and Tasks can have sub-tasks. The magic lies in its natural language input ("Buy milk tomorrow p1 #Shopping"), smart date parsing, and a Karma gamification system. Filters and labels provide cross-project views without adding structural complexity. The platform supports web, desktop (macOS, Windows, Linux), mobile (iOS, Android), wearables (Apple Watch, Wear OS), and browser extensions.

## Site Map

```
todoist.com
├── Inbox (default capture)
├── Today
│   ├── Overdue tasks
│   └── Tasks due today (grouped by project or time)
├── Upcoming (calendar + 7-day view)
│   ├── Day-by-day timeline
│   └── Overdue section
├── Filters & Labels
│   ├── Filters (custom queries)
│   │   ├── Built-in: Assigned to Me, Priority 1
│   │   └── Custom filters (user-defined query syntax)
│   └── Labels (tags, color-coded)
├── Projects
│   └── [Project]
│       ├── List View
│       ├── Board View (Kanban)
│       ├── Calendar View
│       ├── Sections (groupings within project)
│       ├── Comments (project-level discussion)
│       └── Sub-projects (nested hierarchy)
├── Completed (Activity Log)
│   ├── Completed tasks by date
│   ├── Filter by project
│   └── Restore completed tasks
├── Karma (Productivity Score)
│   ├── Daily / weekly goals
│   ├── Score breakdown
│   └── Streaks
├── Notifications
│   ├── Task reminders
│   ├── Due date alerts
│   ├── Assignment notifications
│   └── Comment mentions
├── Templates Gallery
│   ├── Browse by category (Personal, Work, Education)
│   └── Import template to projects
├── Settings
│   ├── Account (email, password, data export)
│   ├── General (theme, language, date format, start of week, defaults)
│   ├── Notifications (email, push, reminders)
│   ├── Integrations (Google Calendar, Slack, Zapier, IFTTT)
│   ├── Subscription (Free / Pro / Business)
│   └── Productivity (Karma settings, daily/weekly goals)
└── Marketing Site
    ├── Features
    ├── Pricing
    ├── Templates
    ├── Integrations
    ├── Blog
    └── Help Center
```

## Navigation Model

- **Left sidebar:** Inbox, Today, Upcoming, Filters & Labels section, Projects tree (collapsible, drag-to-reorder, color-coded)
- **Top bar:** Quick Add (+ / Q), Search (⌘K), Productivity (Karma), Notifications bell, Settings gear
- **Project view:** Toggle between List, Board, and Calendar views; Sections act as swim lanes or column headers in Board
- **Task detail:** Inline expansion or side panel — title, description, sub-tasks, comments, activity log
- **Quick Add (Q / +):** Global shortcut opens a floating input with natural language parsing (date, priority, label, project auto-detected)
- **Mobile:** Bottom nav (Today, Inbox, Browse, Search), floating Quick Add FAB, swipe gestures (right to complete, left to schedule)
- **Desktop:** Left sidebar + main content area; Ctrl/Cmd+K for command palette and search

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Inbox | Built-in capture project, cannot be deleted | → Tasks |
| Project | name, color, icon, view (list/board/calendar), favorite, is_shared, comment_count | → Sections, Tasks, Sub-projects, Comments, Members |
| Section | name, order, collapsed | → Tasks (within project) |
| Task | title (natural language), description (Markdown), due date/time, priority (P1–P4), assignee, creator, created_at, completed_at, order, duration | → Sub-tasks, Labels, Comments, Reminders, Project |
| Sub-task | title, completed, order | → Parent Task |
| Label | name, color, is_favorite | → Tasks (many-to-many) |
| Filter | name, query string (custom syntax), color, is_favorite | Virtual view (no storage) |
| Comment | text (Markdown), attachments (files, images), author, created_at | → Task or Project |
| Reminder | type (time/location), trigger_time, location | → Task |
| Karma | daily_goal, weekly_goal, current_score, max_score, streaks, trend | → User |
| Template | name, category, description, tasks, sections | → Projects (importable) |
| Integration | service (Google Calendar, Slack, etc.), sync_status, config | → User |

## User Flows

### Quick Capture
```
Quick Add (Q) → Type "Call dentist Thursday p2 #Health" → Todoist parses date, priority, label → Add Task → Task lands in Inbox or specified project
```

### Plan the Day
```
Today → Review tasks due today + overdue → Drag to reorder by importance → Reschedule (right-click → date picker) → Work through list → Complete (checkbox) → Karma updates
```

### Create a Custom Filter
```
Filters & Labels → + Add Filter → Query: "assigned to: me & due before: next week & p1" → Save → Pin to favorites → Filter appears in sidebar
```

### Team Collaboration
```
Project → Share (invite icon) → Invite via email → Assign tasks to members → Comment on tasks → @mention teammates → Track completion in activity log
```

### Board Workflow
```
Project → Switch to Board view → Sections become columns (e.g., To Do, In Progress, Done) → Drag cards between columns → Add sub-tasks as checklist → Mark complete
```

## URL / Route Structure

```
todoist.com/                                    # Marketing homepage
todoist.com/features                            # Features page
todoist.com/pricing                             # Pricing plans
todoist.com/templates                           # Templates gallery
todoist.com/templates/{category}                # Templates by category
todoist.com/integrations                        # Integrations directory
todoist.com/integrations/{service}              # Integration detail
todoist.com/help                                # Help center
todoist.com/help/{article-slug}                 # Help article
todoist.com/blog                                # Blog
todoist.com/blog/{post-slug}                    # Blog post
todoist.com/auth/login                          # Login
todoist.com/auth/signup                         # Sign up
app.todoist.com/app/inbox                       # Inbox
app.todoist.com/app/today                       # Today view
app.todoist.com/app/upcoming                    # Upcoming view
app.todoist.com/app/project/{project_id}        # Project
app.todoist.com/app/project/{id}/board          # Project board view
app.todoist.com/app/project/{id}/calendar       # Project calendar view
app.todoist.com/app/filter/{filter_id}          # Custom filter
app.todoist.com/app/label/{label_name}          # Label view
app.todoist.com/app/task/{task_id}              # Task detail
app.todoist.com/app/activity                    # Completed tasks / activity log
app.todoist.com/app/settings                    # Settings
app.todoist.com/app/settings/account            # Account settings
app.todoist.com/app/settings/general            # General preferences
app.todoist.com/app/settings/notifications      # Notification settings
app.todoist.com/app/settings/integrations       # Connected integrations
app.todoist.com/app/settings/subscription       # Subscription management
app.todoist.com/app/karma                       # Karma / productivity stats
```

## Search & Filter

- **Global search (⌘K / /):** Full-text across task titles, descriptions, comments, project names
- **Filter queries:** Custom syntax — `due: today`, `priority: 1`, `assigned to: me`, `#ProjectName`, `@LabelName`, operators `&`, `|`, `!`
- **Natural language in search:** "tasks due next week assigned to me" interpreted automatically
- **Built-in views:** Today, Upcoming serve as pre-built filters
- **Sort:** By date, priority, name, assignee (within any view)
- **Group by:** Project, date, priority, label, assignee
- **Quick filter bar:** Person, priority, label, due date chips in project view
- **Saved filters:** Pin to sidebar favorites for instant access

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Sidebar + main content; task detail as inline expansion or side panel; keyboard shortcuts |
| Tablet (768–1023px) | Collapsible sidebar, same layout; touch-optimized drag and drop |
| Mobile app (iOS/Android) | Bottom nav (Today, Inbox, Browse, Search), swipe to complete/schedule, Quick Add FAB, widgets |
| Apple Watch / Wear OS | View Today list, complete tasks, add via voice dictation |
| Browser extension | Quick Add from any webpage; right-click to add page as task |
| Email plugin (Gmail/Outlook) | Add emails as tasks directly from inbox |

## Access Control

| Role | Capabilities |
|------|-------------|
| Project Owner | Full project settings, archive/delete, manage members, view activity |
| Project Member | Add/edit/complete tasks, comment, assign to others |
| Viewer | View tasks only, cannot modify (Business plan) |
| Personal (non-shared) | Full control, single-user projects |
| Free tier | Up to 5 active projects, 5 collaborators per project, basic filters |
| Pro tier | Unlimited projects, reminders, labels, filters, themes, activity log, file uploads |
| Business tier | Team workspace, admin console, team billing, role management, priority support |
| Admin (Business) | Manage team members, set default settings, view team productivity stats |
