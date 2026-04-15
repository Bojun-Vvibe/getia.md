---
brand: Jira
tagline: "Enterprise issue tracking and agile project management for software teams."
category: Project Management
website: https://www.atlassian.com/software/jira
---

# Jira — Information Architecture

## Overview

Jira is Atlassian's enterprise-grade issue tracking and agile project management platform. The mental model is **configurable workflows for work items** — issues flow through customizable statuses, organized by projects with Scrum or Kanban methodologies. Jira differentiates through deep configurability (custom fields, workflows, schemes, permissions), JQL (Jira Query Language) for advanced filtering, and tight integration with the Atlassian ecosystem (Confluence, Bitbucket, Opsgenie). It serves teams from small startups to 100,000+ user enterprises.

## Site Map

```
├── Your Work (Home)
│   ├── Assigned to Me
│   ├── Recent Issues
│   ├── Recent Projects
│   ├── Recent Boards
│   ├── Starred Items
│   └── Worked On
├── Projects
│   ├── All Projects
│   ├── Project Detail
│   │   ├── Summary / Dashboard
│   │   ├── Board (Scrum or Kanban)
│   │   │   ├── Kanban Board (continuous flow)
│   │   │   └── Scrum Board (sprint-based)
│   │   ├── Backlog
│   │   │   ├── Sprint Planning (Scrum)
│   │   │   │   ├── Backlog Pool
│   │   │   │   ├── Sprint 1 (drag issues in)
│   │   │   │   ├── Sprint 2
│   │   │   │   └── Start Sprint (set dates, goal)
│   │   │   └── Backlog Refinement
│   │   ├── Timeline (Gantt-style)
│   │   ├── List View
│   │   ├── Calendar View
│   │   ├── Reports
│   │   │   ├── Burndown Chart
│   │   │   ├── Velocity Chart
│   │   │   ├── Sprint Report
│   │   │   ├── Cumulative Flow Diagram
│   │   │   ├── Control Chart
│   │   │   ├── Created vs. Resolved
│   │   │   └── Custom Reports
│   │   ├── Releases (Versions)
│   │   │   ├── Version Detail
│   │   │   ├── Release Hub
│   │   │   └── Release Burndown
│   │   ├── Code (Bitbucket/GitHub integration)
│   │   │   ├── Branches linked to issues
│   │   │   ├── Pull Requests
│   │   │   ├── Commits
│   │   │   └── Deployments
│   │   ├── Components
│   │   ├── Pages (Confluence integration)
│   │   └── Project Settings
│   │       ├── Details (name, key, type)
│   │       ├── Access & Permissions
│   │       ├── Notifications
│   │       ├── Issue Types
│   │       ├── Workflows (status transitions + rules)
│   │       ├── Screens (field layout per transition)
│   │       ├── Fields (custom fields)
│   │       ├── Features (enable/disable board, backlog, etc.)
│   │       ├── Automation Rules
│   │       └── Apps & Integrations
│   └── Create Project (templates: Scrum, Kanban, Bug Tracking, Team-managed, Company-managed)
├── Issue Detail (modal or full page)
│   ├── Issue Key + Summary (e.g., PROJ-1234)
│   ├── Description (rich text, Atlassian editor)
│   ├── Issue Type (Epic / Story / Task / Sub-task / Bug)
│   ├── Status (with workflow transitions)
│   ├── Priority (Highest / High / Medium / Low / Lowest)
│   ├── Assignee
│   ├── Reporter
│   ├── Labels
│   ├── Sprint
│   ├── Story Points / Estimate
│   ├── Fix Version / Release
│   ├── Component
│   ├── Due Date
│   ├── Parent (Epic or parent issue)
│   ├── Child Issues (sub-tasks)
│   ├── Linked Issues (blocks, is blocked by, relates to, duplicates)
│   ├── Custom Fields (unlimited)
│   ├── Attachments
│   ├── Comments
│   ├── Activity Log (all changes, transitions)
│   ├── Watchers
│   ├── Development Panel (branches, PRs, commits, builds, deploys)
│   └── Time Tracking (estimated, logged, remaining)
├── Filters (Saved JQL)
│   ├── My Filters
│   ├── Shared Filters
│   ├── Filter Detail → Issue List
│   └── Create Filter (JQL editor)
├── Dashboards
│   ├── My Dashboards
│   ├── Shared Dashboards
│   ├── Dashboard Detail (gadgets grid)
│   │   ├── Filter Results Gadget
│   │   ├── Pie Chart
│   │   ├── Two-Dimensional Filter
│   │   ├── Sprint Health
│   │   ├── Assigned to Me
│   │   ├── Activity Stream
│   │   └── Custom Gadgets
│   └── Create Dashboard
├── Plans (Advanced Roadmaps / Premium)
│   ├── Cross-project timeline
│   ├── Capacity planning
│   ├── Dependency mapping
│   ├── Scenario planning
│   └── Release scheduling
├── Teams
│   ├── Team Directory
│   ├── Team Workload
│   └── Team Sprint View
├── Apps (Atlassian Marketplace)
│   ├── Installed Apps
│   ├── Browse Marketplace
│   └── App Settings
├── Search
│   ├── Quick Search (top bar)
│   ├── Basic Search (field-based)
│   ├── Advanced Search (JQL editor)
│   └── Recent Searches
├── Notifications
│   ├── Bell notifications
│   └── Email notifications
├── Administration (site admin)
│   ├── User Management
│   ├── Groups & Roles
│   ├── Global Permissions
│   ├── Issue Types (schemes)
│   ├── Workflows (schemes)
│   ├── Screens (schemes)
│   ├── Fields (custom field config)
│   ├── Priorities
│   ├── Notification Schemes
│   ├── Permission Schemes
│   ├── Automation (global rules)
│   ├── Security Schemes
│   └── Audit Log
└── Personal Settings
    ├── Profile
    ├── Email Preferences
    ├── Notification Preferences
    └── Connected Apps
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Nav Bar** | Fixed | Jira logo (home), Projects dropdown, Filters dropdown, Dashboards dropdown, Teams dropdown, Apps, Create (+) button, Search, Notifications, Help, Profile |
| **Left Sidebar** | Per-project context | Summary, Board, Backlog, Timeline, List, Calendar, Reports, Releases, Code, Pages, Settings |
| **Board View** | Kanban columns (drag-and-drop) | Columns = workflow statuses; swimlanes by assignee/epic/priority |
| **Issue Modal** | Click issue → modal overlay | Detail panel without leaving board/list; full-page option |
| **Quick Search** | Top bar (/) | Search issues by key, summary; switch to JQL for advanced |
| **Context Menu** | Right-click on issue card | Assign, change status, set priority, link issue |
| **Breadcrumb** | Top of issue/project views | Home > Project > Board/Backlog > Issue |

### Top Navigation Dropdowns
```
Projects ▾               Filters ▾               Dashboards ▾
├── Recent Projects       ├── My Filters           ├── My Dashboards
├── View All Projects     ├── Shared Filters       ├── Shared Dashboards
└── Create Project        └── Create Filter        └── Create Dashboard
```

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | name, key (e.g., "PROJ"), project_type (scrum/kanban/team-managed), lead, category | has many Issues, Boards, Sprints, Versions, Components |
| Issue | key (PROJ-1234), summary, description, issue_type, status, priority, resolution, assignee, reporter, labels[], components[], fix_versions[], story_points, time_estimate, custom_fields{} | belongs to Project, Sprint, Epic; has Sub-tasks, Links, Comments, Attachments |
| Epic | issue + color, child_issues[] | specialized Issue type that groups Stories/Tasks |
| Sprint | name, goal, start_date, end_date, state (future/active/closed) | belongs to Board; has many Issues |
| Board | name, type (scrum/kanban), filter (JQL), column_config | belongs to Project; shows filtered Issues |
| Workflow | name, statuses[], transitions[], conditions[], validators[], post_functions[] | assigned to Project via scheme |
| Version / Release | name, description, start_date, release_date, status (unreleased/released/archived) | has many Issues (fix version) |
| Component | name, description, lead | belongs to Project; tagged on Issues |
| Filter | name, jql_query, owner, shared_with | generates Issue Lists; used by Boards and Dashboards |
| Dashboard | name, layout, gadgets[], owner, shared_with | displays Gadgets (data visualization widgets) |
| Automation Rule | name, trigger, conditions[], actions[], enabled | belongs to Project or Global |

### Issue Type Hierarchy
```
Initiative (optional)
 └── Epic
      ├── Story
      │    └── Sub-task
      ├── Task
      │    └── Sub-task
      └── Bug
           └── Sub-task
```

### Priority Levels
```
Highest (▲▲ red) → High (▲ red) → Medium (● yellow) → Low (▼ blue) → Lowest (▼▼ blue)
```

### Workflow Example (Scrum)
```
Open → In Development → Code Review → QA → Done
       ↕ (reopen)                      ↕ (reject)
```

## User Flows

### Sprint Planning (Scrum)
```
Backlog → Drag issues from Backlog to Sprint → Set Sprint Goal → Set Dates → Start Sprint → Board View → Daily standups
```

### Daily Work
```
Your Work → Assigned Issues → Open Issue → Update Status (transition button) → Log Work → Add Comment → Next
```

### Issue Creation
```
[+ Create] → Select Project → Issue Type (Story/Bug/Task) → Summary → Description → Assign → Set Sprint/Priority → Create
— or —
Quick create on Board: [+ Create Issue] at bottom of column
```

### JQL Power Search
```
Search bar → Switch to Advanced → Write JQL:
  project = PROJ AND status = "In Progress" AND assignee = currentUser() AND sprint in openSprints()
→ Save as Filter → Pin to sidebar → Use in Dashboard gadget
```

### Automation
```
Project Settings → Automation → Create Rule →
Trigger: "Issue transitioned to Done" →
Condition: "Issue type is Story" →
Action: "Transition all sub-tasks to Done" + "Post Slack message" → Enable
```

### Release Management
```
Create Version → Tag issues with Fix Version → Track progress → Release: mark version as Released → Release notes auto-generated
```

## URL / Route Structure

```
/                                          → Your Work
/jira/your-work                            → Your Work
/jira/projects                             → All Projects
/jira/software/projects/:key/summary       → Project Summary
/jira/software/projects/:key/boards/:id    → Board View
/jira/software/projects/:key/backlog       → Backlog
/jira/software/projects/:key/timeline      → Timeline
/jira/software/projects/:key/list          → List View
/jira/software/projects/:key/calendar      → Calendar
/jira/software/projects/:key/reports        → Reports
/jira/software/projects/:key/releases       → Releases
/jira/software/projects/:key/code           → Code panel
/jira/software/projects/:key/settings       → Project Settings
/browse/:issueKey                           → Issue Detail (e.g., /browse/PROJ-1234)
/issues/?jql=:query                         → JQL Search Results
/jira/filters                              → Saved Filters
/jira/dashboards                           → Dashboards
/jira/dashboards/:id                       → Dashboard Detail
/jira/plans                                → Advanced Roadmaps
/jira/people                               → Teams
/jira/settings                             → Site Administration
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Quick Search (/) | Issue key, summary, people, projects, boards | — | Relevance, Recent |
| Basic Search | Issues | Project, Type, Status, Assignee, Reporter, Priority, Label, Sprint, Fix Version, Created, Updated | Any field |
| JQL (Advanced) | All issue fields + custom fields | Full query language with functions | ORDER BY any field |
| Board | Issues on current board | Quick filters (My Issues, Recently Updated) + board filter (JQL) | Board column order |

### JQL (Jira Query Language) — Power Feature
```sql
-- Find critical bugs assigned to me in active sprints
project = PROJ AND type = Bug AND priority in (Highest, High)
  AND assignee = currentUser() AND sprint in openSprints()
  ORDER BY priority ASC, created DESC

-- Unresolved issues created this week
resolution = Unresolved AND created >= startOfWeek()

-- Issues with no assignee in backlog
assignee is EMPTY AND status = Backlog AND project in (PROJ, PLAT)

-- Functions: currentUser(), now(), startOfDay(), startOfWeek(), membersOf("team"), openSprints()
```

## Responsive Behavior

| Breakpoint | Layout | Board | Issue Detail |
|------------|--------|-------|-------------|
| Desktop (≥1280px) | Top nav + left sidebar + content | Full Kanban board (all columns) | Modal overlay or full page |
| Tablet (768–1279px) | Collapsed sidebar, full content | Horizontal scroll columns | Full-screen overlay |
| Mobile (<768px) | Bottom nav (Your Work, Projects, Create, Search, Notifications) | Vertical card list (tap to expand) | Full-screen page |

### Mobile App (Jira Cloud)
- Create and edit issues
- Transition issues with swipe
- Board view (simplified)
- Barcode/QR scanning for asset tracking
- Push notifications
- Offline viewing with sync
- Apple Watch: notifications + quick actions

## Access Control

| Role | Browse | Create | Edit | Transition | Delete | Admin |
|------|--------|--------|------|-----------|--------|-------|
| Viewer | ✅ | — | — | — | — | — |
| Member | ✅ | ✅ | Own issues | ✅ | — | — |
| Developer | ✅ | ✅ | All issues | ✅ | — | — |
| Project Admin | ✅ | ✅ | ✅ | ✅ | ✅ | Project settings |
| Site Admin | ✅ | ✅ | ✅ | ✅ | ✅ | Full site admin |

### Permission Schemes (Enterprise)
- **Project-level**: Browse, Create, Edit, Transition, Delete, Manage Sprints, Administer
- **Issue-level**: Security levels (restrict visibility to specific roles)
- **Workflow conditions**: Only certain roles can execute certain transitions
- **Field-level**: Screens control which fields appear per transition
- **Global**: System admin, Jira admin, browse users, create shared objects
