# Project Management — Information Architecture

## Overview

A team collaboration and task tracking platform (Jira, Linear, Asana style). The mental model is **work items flowing through stages**, organized by projects, with multiple views (board, list, timeline) of the same data.

## Site Map

```
├── Home
│   ├── My Work (assigned tasks)
│   ├── Recent Activity
│   └── Favorites / Starred
├── Projects
│   ├── All Projects
│   ├── Project Detail
│   │   ├── Board View (Kanban)
│   │   ├── List View
│   │   ├── Timeline / Gantt View
│   │   ├── Calendar View
│   │   ├── Backlog
│   │   ├── Sprints / Cycles
│   │   │   └── Sprint Detail
│   │   ├── Project Settings
│   │   └── Project Members
│   └── Create Project
├── Issues / Tasks
│   ├── Issue Detail (slide-over or page)
│   │   ├── Description (rich text)
│   │   ├── Sub-tasks
│   │   ├── Comments / Discussion
│   │   ├── Activity Log
│   │   ├── Attachments
│   │   └── Related Issues
│   └── Create Issue
├── Views (Saved Filters)
│   ├── Custom Views
│   └── Shared Views
├── Goals / Roadmap
│   ├── Goals List
│   ├── Goal Detail → Linked Projects/Issues
│   └── Roadmap Timeline
├── Team
│   ├── Members
│   ├── Workload View
│   └── Capacity Planning
├── Inbox / Notifications
│   ├── Assigned to Me
│   ├── Mentions
│   └── Updates
├── Settings
│   ├── Workspace
│   ├── Members & Roles
│   ├── Labels / Tags
│   ├── Issue Types
│   ├── Workflows (status transitions)
│   ├── Integrations
│   └── Import / Export
└── User Profile & Preferences
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Global Nav** | Fixed left sidebar | Workspace logo, Home, Inbox, Projects list (expandable), Views, Goals, Team, Settings |
| **Project Nav** | Horizontal tabs or sub-sidebar | Board / List / Timeline / Backlog / Sprints / Settings |
| **Issue Detail** | Slide-over panel (default) or full page | Opens from any view without losing context |
| **Quick Actions** | ⌘K command palette | Create issue, navigate, change status, assign |
| **Context Menu** | Right-click on issues | Quick status change, assign, set priority, copy link |

### Sidebar Structure
```
[Workspace Logo + Switcher]
─────────────
🏠 Home
📥 Inbox (badge count)
─────────────
Projects ▾
  ├── Project Alpha
  ├── Project Beta
  └── + Create Project
─────────────
📋 Views
🎯 Goals
👥 Team
─────────────
⚙️ Settings
```

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, slug, settings | has many Projects, Members |
| Project | name, key (e.g., "ENG"), icon, status | has many Issues, Sprints, Members |
| Issue | key (ENG-123), title, description, status, priority, type, estimate, due_date | belongs to Project, Sprint; assigned to Member; has Sub-tasks, Comments, Labels |
| Sprint/Cycle | name, start_date, end_date, status | belongs to Project, has many Issues |
| Label | name, color | many-to-many with Issues |
| Comment | body, author, created_at | belongs to Issue |
| View | name, filters{}, sort{}, group_by | belongs to Workspace or Project |
| Goal | title, description, progress, target_date | linked to Projects/Issues |

### Issue Types
`epic → story → task → subtask → bug`

### Priority Levels
`urgent → high → medium → low → no priority`

### Status Workflow
`backlog → todo → in progress → in review → done → cancelled`

## User Flows

### Sprint Planning
```
Backlog → Drag Issues to Sprint → Set Sprint Goal/Dates → Start Sprint → Board View
```

### Daily Work
```
Home (My Work) → Pick Issue → Open Detail → Update Status → Add Comment → Next Issue
```

### Issue Creation (Quick)
```
⌘K → "Create issue" → Title + Project → Enter → (Expand to add details later)
```

### Triage
```
Inbox → Review New Issues → Set Priority + Assignee + Sprint → Move to Board
```

## URL / Route Structure

```
/                                → Home
/inbox                           → Notifications
/projects                        → All Projects
/projects/:key                   → Project Board View (default)
/projects/:key/board             → Kanban Board
/projects/:key/list              → List View
/projects/:key/timeline          → Timeline / Gantt
/projects/:key/backlog           → Backlog
/projects/:key/sprints           → Sprint List
/projects/:key/sprints/:id       → Sprint Detail
/projects/:key/settings          → Project Settings
/issue/:key                      → Issue Detail (e.g., /issue/ENG-123)
/views                           → Saved Views
/views/:id                       → Custom View
/goals                           → Goals
/goals/:id                       → Goal Detail
/team                            → Team Overview
/team/workload                   → Workload View
/settings                        → Workspace Settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global (⌘K) | Issues, Projects, Members, Actions | — | Relevance |
| Issue List | Title, description, key | Status, Assignee, Priority, Label, Sprint, Type, Due Date, Created Date | Priority, Due Date, Created, Updated, Manual |
| Backlog | Title, key | Priority, Label, Type, Estimate | Priority, Created, Manual (drag) |

### Grouping Options
Group by: Status, Assignee, Priority, Label, Sprint, No grouping

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop (≥1280px) | Sidebar + content + optional issue detail panel |
| Tablet (768–1279px) | Collapsed sidebar, full content, issue detail as overlay |
| Mobile (<768px) | Bottom tab nav (Home, Projects, Inbox, Search, Profile), board as scrollable columns |

## Access Control

| Role | Home | Projects | Issues | Goals | Settings |
|------|------|----------|--------|-------|----------|
| Owner | ✅ | All CRUD | All CRUD | CRUD | ✅ |
| Admin | ✅ | All CRUD | All CRUD | CRUD | Limited |
| Member | ✅ | Joined CRUD | All CRUD | View | — |
| Guest | ✅ | Invited (Read) | Assigned only | — | — |
