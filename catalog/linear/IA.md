---
brand: Linear
tagline: "Streamline issues, projects, and product roadmaps. Built for speed."
category: Project Management
website: https://linear.app
---

# Linear — Information Architecture

## Overview

Linear is a high-performance issue tracking and project management tool designed for modern software teams. The mental model is **issues flowing through a streamlined pipeline** — from triage to backlog to active development to done. Linear differentiates through extreme keyboard-driven speed, opinionated workflows (cycles instead of arbitrary sprints), and a polished, minimal UI. Every interaction is optimized for sub-100ms response.

## Site Map

```
├── Home (My Issues)
│   ├── My Issues (assigned to me)
│   │   ├── Active (in progress)
│   │   ├── Upcoming (in current/next cycle)
│   │   └── Backlog
│   ├── Activity Feed
│   └── Favorites
├── Inbox
│   ├── Notifications (assigned, mentioned, subscribed)
│   ├── Unread / Archive
│   └── Notification Preferences
├── Team (per team)
│   ├── Active Issues
│   ├── Backlog
│   ├── Board View (Kanban by status)
│   ├── List View
│   ├── Cycles
│   │   ├── Current Cycle
│   │   │   ├── Cycle Progress (burndown, scope changes)
│   │   │   └── Issues in cycle
│   │   ├── Upcoming Cycle
│   │   ├── Past Cycles
│   │   └── Cycle Settings (auto-scheduling)
│   ├── Triage (incoming, unprocessed issues)
│   └── Team Settings
│       ├── Members
│       ├── Labels
│       ├── Workflows (custom statuses)
│       └── Templates
├── Projects
│   ├── All Projects
│   ├── Project Detail
│   │   ├── Overview (health, progress, updates)
│   │   ├── Issues (filtered to project)
│   │   ├── Milestones
│   │   ├── Project Updates (status reports)
│   │   ├── Documents (project specs, RFCs)
│   │   └── Settings (lead, members, dates)
│   └── Create Project
├── Initiatives (cross-project grouping)
│   ├── Initiative Overview
│   ├── Linked Projects
│   └── Progress Tracking
├── Views (Custom Filters)
│   ├── Personal Views
│   ├── Team Views (shared)
│   └── Create View (save filter + sort + grouping)
├── Issue Detail (slide-over panel)
│   ├── Title + Description (Markdown)
│   ├── Status (workflow stages)
│   ├── Priority (Urgent/High/Medium/Low/None)
│   ├── Assignee
│   ├── Labels
│   ├── Cycle
│   ├── Project + Milestone
│   ├── Estimate (points)
│   ├── Due Date
│   ├── Parent Issue / Sub-issues
│   ├── Relations (blocking, blocked by, related, duplicate)
│   ├── Attachments (Figma, GitHub PR, Sentry)
│   ├── Comments + Activity
│   └── History (all changes)
├── Roadmap
│   ├── Timeline View (projects on timeline)
│   └── Filter by team, status, lead
├── Search (⌘K)
│   ├── Issues, Projects, Views, People
│   └── Quick Actions (create, navigate)
├── Settings
│   ├── Workspace
│   │   ├── General (name, URL, timezone)
│   │   ├── Members & Roles
│   │   ├── Teams
│   │   ├── Labels (workspace-wide)
│   │   ├── Templates (issue, project)
│   │   ├── Integrations (GitHub, Slack, Figma, Sentry, Zendesk...)
│   │   ├── API (personal tokens, OAuth apps, webhooks)
│   │   ├── Import (from Jira, Asana, GitHub Issues, Shortcut)
│   │   └── Billing
│   └── Account
│       ├── Profile
│       ├── Notifications
│       ├── Display (theme: light/dark/system)
│       └── Keyboard Shortcuts
└── Document Hub
    ├── Team Documents
    ├── Project Documents
    └── Create Document (rich text editor)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, compact | Workspace switcher, Home, Inbox, Teams (expandable), Projects, Views, Roadmap |
| **Team Sub-nav** | Expand team in sidebar | Active, Backlog, Board, Cycles, Triage, Settings |
| **Issue Detail** | Slide-over panel (right, ~50% width) | Opens from any list without losing context; ⌘↵ to open full page |
| **Command Palette** | ⌘K | Universal: search, navigate, create, change status/priority/assignee, run actions |
| **Keyboard-first** | Extensive shortcuts | `C` create, `S` status, `P` priority, `A` assignee, `L` label, `⌘↵` open full |
| **Context Menu** | Right-click on issue row | Quick actions: status, priority, assignee, cycle, delete |
| **Breadcrumb** | Top of content area | Team > Board/Backlog > Issue (when in full-page view) |

### Sidebar Structure
```
[Workspace Logo + Switcher]
─────────────
🏠 Home
📥 Inbox (badge)
─────────────
Teams ▾
  ├── 🟣 Engineering
  │   ├── Active Issues
  │   ├── Backlog
  │   └── Cycles
  ├── 🔵 Design
  └── 🟢 Product
─────────────
📁 Projects
📋 Views
🗺 Roadmap
─────────────
⚙ Settings
```

### Keyboard Shortcuts (core differentiator)
```
C = Create issue          ⌘K = Command palette      I = Go to Inbox
S = Set status            P = Set priority           A = Set assignee
L = Set label             D = Set due date           E = Set estimate
⌘↵ = Open full page       ⌘⇧P = Switch project       ⌘⇧C = Copy issue URL
J/K = Navigate up/down    X = Select issue           ⌘⇧D = Duplicate
```

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, url_slug, settings, plan | has many Teams, Projects, Members |
| Team | name, key (e.g., "ENG"), icon, color, workflow_states[] | has many Issues, Cycles, Labels |
| Issue | identifier (ENG-123), title, description (Markdown), status, priority (0-4), estimate, due_date, sort_order | belongs to Team, Cycle, Project; assigned to Member; has Sub-issues, Comments, Relations, Labels |
| Cycle | number, name, start_date, end_date, progress | belongs to Team; has many Issues |
| Project | name, icon, color, description, status (planned/started/paused/completed/cancelled), start_date, target_date, lead | has many Issues, Milestones, Documents, Updates |
| Initiative | name, description, status | groups multiple Projects |
| Milestone | name, sort_order | belongs to Project; groups Issues within project |
| Label | name, color, group | many-to-many with Issues; scoped to Team or Workspace |
| View | name, filters{}, sort{}, group_by, display (list/board) | personal or shared |
| Comment | body (Markdown), author, created_at, edited_at | belongs to Issue |
| Document | title, content (rich text), icon | belongs to Project or Team |
| Relation | type (blocks/blocked_by/related/duplicate), source_issue, target_issue | connects Issues |

### Issue Priority Scale
```
0 = No priority (gray)
1 = Urgent (red, !!!)
2 = High (orange, !!)
3 = Medium (yellow, !)
4 = Low (blue)
```

### Default Workflow States
```
Triage → Backlog → Todo → In Progress → In Review → Done → Cancelled
         (customizable per team)
```

### Cycle Model (opinionated sprints)
- Fixed cadence (e.g., 2 weeks) with auto-scheduling
- Unfinished issues auto-roll to next cycle
- Cycle progress shows scope creep (issues added mid-cycle)
- No manual sprint creation; cycles are continuous

## User Flows

### Daily Work
```
Home → My Issues (active) → Click issue → Update status (S → In Progress) → Add comment → Next issue (J/K)
```

### Issue Creation (Speed)
```
C → Type title → Tab → Set project → Tab → Set priority → Tab → Set assignee → Enter → Created (<5 seconds)
— or —
⌘K → "Create issue" → Inline creation with autocomplete
```

### Triage Flow
```
Team → Triage → Review incoming issues → Set priority + assignee + cycle → Move to Backlog/Active → Repeat
```

### Cycle Planning
```
Backlog → Filter by priority → Select issues (X) → Move to current cycle → Board view → Track daily progress
```

### Project Tracking
```
Projects → Project Detail → View progress (% complete) → Write Project Update → Link to milestone → Review roadmap timeline
```

### Integration Flow (GitHub)
```
Create branch with issue ID (e.g., eng-123-feature) → Push commits → PR auto-linked → PR merged → Issue auto-moves to "Done"
```

## URL / Route Structure

```
/                                  → Home (my issues)
/inbox                             → Inbox / notifications
/:teamKey/active                   → Team active issues
/:teamKey/backlog                  → Team backlog
/:teamKey/board                    → Team board view
/:teamKey/cycles                   → Cycles list
/:teamKey/cycles/current           → Current cycle
/:teamKey/triage                   → Triage queue
/:teamKey/settings                 → Team settings
/issue/:identifier                 → Issue detail (e.g., /issue/ENG-123)
/projects                          → All projects
/project/:slug                     → Project detail
/project/:slug/issues              → Project issues
/project/:slug/milestones          → Project milestones
/project/:slug/documents           → Project documents
/initiatives                       → Initiatives
/views                             → Custom views
/views/:id                         → Saved view
/roadmap                           → Roadmap timeline
/settings                          → Workspace settings
/settings/integrations             → Integrations
/settings/api                      → API settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Command Palette (⌘K) | Issues, projects, views, members, actions | — | Relevance |
| Issue List | Issue title, description, identifier | Status, Assignee, Priority, Label, Cycle, Project, Due Date, Creator, Subscriber, Estimate, Created, Updated | Priority, Created, Updated, Due Date, Manual (drag), Alphabetical |
| Backlog | Title, identifier | Priority, Label, Estimate, Creator | Priority, Created, Manual |
| Project List | Project name | Status, Lead, Team, Target Date | Name, Created, Target Date |

### Grouping Options
Group by: Status, Assignee, Priority, Label, Cycle, Project, No grouping

### Filter Syntax (in views)
```
status is "In Progress"
assignee is me
priority is Urgent, High
label is "Bug"
cycle is "Current"
project is "Platform v2"
created after 2024-01-01
has:sub-issues
no:assignee
```

## Responsive Behavior

| Breakpoint | Layout | Issue Detail |
|------------|--------|-------------|
| Desktop (≥1280px) | Sidebar (200px) + issue list + slide-over detail panel | Side panel (~50% width) |
| Tablet (768–1279px) | Collapsed sidebar, full issue list | Full-screen overlay |
| Mobile (<768px) | Bottom tab nav (Home, Inbox, Teams, Search) | Full-screen page |

### Mobile App Features
- Swipe to change issue status
- Quick-create with voice title
- Push notifications for mentions and assignments
- Offline issue viewing with sync queue
- Compact board view (horizontal scroll)

## Access Control

| Role | View Issues | Create/Edit | Admin | Billing |
|------|------------|-------------|-------|---------|
| Guest | Invited teams/projects | Comment only | — | — |
| Member | All workspace | ✅ (all teams) | — | — |
| Admin | ✅ | ✅ | Workspace settings, members | — |
| Owner | ✅ | ✅ | ✅ | ✅ |

### Team-Level Access
- **Any workspace member** can view all teams by default (transparency-first)
- Team membership determines who receives triage notifications
- Issue visibility follows team membership settings
- Projects can have restricted member lists
