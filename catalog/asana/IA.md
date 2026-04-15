---
brand: Asana
tagline: Manage your team's work, projects, & tasks online
category: Productivity
website: https://asana.com
---

# Information Architecture — Asana

## Overview

Asana is a work management platform that helps teams orchestrate work from daily tasks to strategic initiatives. The IA centers on a workspace→team→project→task hierarchy, giving users multiple lenses (List, Board, Timeline, Calendar) to view the same underlying data. The "My Tasks" hub personalizes the experience by surfacing individually-relevant work across all projects.

## Site Map

```
asana.com
├── Home (Dashboard)
│   ├── My Tasks
│   ├── Inbox (Notifications)
│   └── Reporting
├── Projects
│   ├── List View
│   ├── Board View
│   ├── Timeline (Gantt)
│   ├── Calendar View
│   └── Overview / Brief
├── Portfolios
│   ├── Portfolio Dashboard
│   └── Status Updates
├── Goals
│   ├── Company Goals
│   ├── Team Goals
│   └── My Goals
├── Teams
│   ├── Team Projects
│   └── Team Conversations
├── Search
├── Admin Console
│   ├── Members
│   ├── Billing
│   ├── Security
│   └── Apps & Integrations
└── Marketing Site
    ├── Product
    ├── Solutions
    ├── Resources
    ├── Pricing
    └── Enterprise
├── Workflows
│   ├── Rules (automations)
│   ├── Forms (intake)
│   └── Approvals
├── Templates
│   ├── Project Templates
│   └── Task Templates
├── Integrations
│   ├── Slack
│   ├── Microsoft Teams
│   ├── Google Drive
│   ├── Jira
│   └── 200+ Apps
```

## Navigation Model

- **Left sidebar (persistent):** Home, My Tasks, Inbox, Reporting, Portfolios, Goals, followed by a Teams/Projects tree
- **Top bar:** Global search (⌘K), Create button (+), workspace switcher
- **Project-level tabs:** Overview, List, Board, Timeline, Calendar, Files, Messages
- **Contextual right pane:** Task detail slides in from the right without leaving the project view

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, members, billing plan | → Teams, Projects |
| Team | name, description, privacy | → Projects, Members |
| Project | name, owner, color, view, status | → Sections, Tasks, Milestones |
| Section | name, order | → Tasks |
| Task | title, assignee, due date, description, priority, tags | → Subtasks, Comments, Attachments |
| Goal | title, owner, time period, metric | → Sub-goals, Projects |
| Portfolio | name, owner | → Projects |
| Custom Field | name, type (text/number/enum) | → Projects, Tasks |
| Milestone | name, due_date, completed | belongs to Project |
| Status Update | text, status (on_track/at_risk/off_track), author, date | belongs to Project |
| Rule (Automation) | trigger, action, project_id, enabled | belongs to Project |
| Form | name, fields[], project_id, public_link | belongs to Project |
| Attachment | filename, type, size, url | belongs to Task |
| Comment | text, author, created_at, likes[] | belongs to Task |

## User Flows

### Create and Assign a Task
```
Project → + Add Task → Fill title, assignee, due date → Set section → Save
```

### Track Project Progress
```
Portfolios → Select Portfolio → View status indicators → Drill into project → Check Timeline / Milestones
```

### Review Personal Work
```
My Tasks → Sort by due date/project → Mark complete / Snooze to later
```

### Set and Track Goals
```
Goals → + New Goal → Set time period, metric type → Link sub-goals or projects → Update progress
```

### Create a Project from Template
```
Home → + Create → Project → Use template → Select (Sprint Planning, Product Launch, etc.) → Customize → Invite team → Project created with pre-built sections and tasks
```

### Inbox Triage
```
Inbox → Review notifications → Quick-action: Like, Comment, Follow-up → Archive processed items → Remaining items need action → Open task → Update status → Done
```

### Status Update to Stakeholders
```
Project → Overview → Post status update → Select status (On Track / At Risk / Off Track) → Add summary → Attach key milestones → Publish → Stakeholders notified → Visible in Portfolio roll-up
```
## URL / Route Structure

```
app.asana.com/0/home                     # Dashboard
app.asana.com/0/inbox                    # Notifications
app.asana.com/0/{project_id}/list        # Project list view
app.asana.com/0/{project_id}/board       # Project board view
app.asana.com/0/{project_id}/timeline    # Project timeline
app.asana.com/0/{task_id}               # Task detail (overlay)
app.asana.com/0/portfolios/{id}          # Portfolio
app.asana.com/0/goals                    # Goals
app.asana.com/0/search?q=...             # Search results
app.asana.com/0/home                     # Dashboard
app.asana.com/0/my-tasks                 # My Tasks
app.asana.com/0/inbox                    # Notifications
app.asana.com/0/reporting                # Reporting hub
app.asana.com/0/{project_id}/list        # Project list view
app.asana.com/0/{project_id}/board       # Project board view
app.asana.com/0/{project_id}/timeline    # Project timeline
app.asana.com/0/{project_id}/calendar    # Project calendar
app.asana.com/0/{project_id}/overview    # Project overview
app.asana.com/0/{project_id}/files       # Project files
app.asana.com/0/{project_id}/messages    # Project messages
app.asana.com/0/{task_id}                # Task detail (overlay)
app.asana.com/0/{task_id}/f              # Task detail (full page)
app.asana.com/0/portfolios               # All portfolios
app.asana.com/0/portfolios/{id}          # Portfolio detail
app.asana.com/0/goals                    # Goals
app.asana.com/0/goals/{id}               # Goal detail
app.asana.com/0/search?q=...             # Search results
app.asana.com/0/teams/{id}               # Team page
app.asana.com/admin                      # Admin console
app.asana.com/admin/members              # Member management
app.asana.com/admin/billing              # Billing
app.asana.com/admin/security             # Security settings
```

## Search & Filter

- **Global search (⌘K):** Full-text across tasks, projects, conversations, and messages
- **Advanced search:** Filter by assignee, project, due date, completion status, custom fields, created by, tags
- **Saved searches:** Persist as "Reports" accessible from Reporting section
- **Project filters:** Sort/filter within any project view by assignee, due date, section, custom fields
- **My Tasks filters**: Sort by due date, project, or custom sections (Recently Assigned, Today, Upcoming, Later)
- **Reporting dashboards**: Custom charts — tasks by assignee, by completion, by custom field values

- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full sidebar + project view + task detail pane (three-column) |
| Tablet (768–1023px) | Collapsible sidebar, task detail replaces project view |
| Mobile app (iOS/Android) | Bottom tab navigation (Home, My Tasks, Inbox, Search), simplified views |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Asana-Specific UX Patterns
- **Progressive disclosure**: Complex features hidden behind expandable sections
- **Contextual actions**: Right-click menus and hover-revealed action buttons
- **Inline editing**: Click-to-edit fields without navigating to a separate page
- **Batch operations**: Multi-select with bulk actions (delete, move, archive, tag)
- **Undo support**: Non-destructive actions with undo toast notifications
- **Loading states**: Skeleton screens and progress indicators during async operations
- **Empty states**: Helpful illustrations and CTAs when sections have no content
- **Onboarding tooltips**: First-time user guidance highlighting key features
- Asana Forms allow external stakeholders to submit work requests directly into projects

## Access Control

| Role | Capabilities |
|------|-------------|
| Organization Admin | Full workspace settings, billing, member management, security controls |
| Team Admin | Manage team membership, team-level settings |
| Project Owner | Configure project, manage members, set permissions |
| Project Editor | Create/edit tasks, change views |
| Project Commenter | Comment only, cannot modify tasks |
| Guest | Limited to explicitly shared projects, no team browsing |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance