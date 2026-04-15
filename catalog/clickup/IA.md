---
brand: ClickUp
tagline: One app to replace them all
category: Productivity
website: https://clickup.com
---

# Information Architecture — ClickUp

## Overview

ClickUp is an all-in-one productivity platform that consolidates project management, docs, goals, whiteboards, and chat into a single application. Its IA is defined by a deep hierarchy — Workspace → Space → Folder → List → Task — offering extreme customizability at every level. Each node in the hierarchy can have its own statuses, custom fields, and views, making it both powerful and complex.

## Site Map

```
clickup.com
├── Home (Dashboard)
│   ├── My Work
│   ├── Favorites
│   └── Assigned Comments
├── Spaces
│   └── [Space]
│       ├── Folders
│       │   └── Lists
│       │       ├── List View
│       │       ├── Board View
│       │       ├── Calendar View
│       │       ├── Gantt View
│       │       ├── Table View
│       │       ├── Mind Map
│       │       └── Activity View
│       └── Folderless Lists
├── Everything View
├── Docs
│   ├── Documents
│   └── Wikis
├── Whiteboards
├── Dashboards
├── Goals
├── Inbox (Notifications)
├── Chat
├── Automations
├── Integrations
├── Template Center
└── Settings
    ├── Workspace
    ├── Spaces
    ├── People
    ├── Imports/Exports
    └── Security
```

## Navigation Model

- **Left sidebar:** Home, Inbox, Docs, Dashboards, Whiteboards, Goals, plus the Spaces tree (collapsible)
- **Top bar:** Global search (⌘K), quick-create (+), breadcrumb trail, notifications bell
- **View bar:** Horizontal tabs for switching between views within any list/folder/space
- **Task detail:** Full-page or modal view with subtasks, comments, attachments, activity, relationships
- **Everything View:** Flat view aggregating all tasks across all spaces with filters

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, members, plan | → Spaces |
| Space | name, color, avatar, features enabled | → Folders, Lists, Statuses |
| Folder | name, statuses override | → Lists |
| List | name, statuses, custom fields | → Tasks |
| Task | title, assignee(s), status, priority, due date, time estimate, tags | → Subtasks, Checklists, Comments, Attachments, Dependencies |
| Doc | title, content (blocks), sharing | → Workspace, Pages |
| Goal | name, target (number/currency/true-false/task), owner | → Key Results, Tasks |
| Dashboard | name, widgets | → Data sources (lists, spaces) |
| Whiteboard | name, objects, collaborators | → Workspace |


### Item Lifecycle
```
draft → active → in_progress → completed → archived
                               ↘ blocked → unblocked → in_progress
draft → deleted (soft delete, 30-day retention)
```
## User Flows

### Set Up a New Space
```
Sidebar → + Create Space → Name, color, icon → Enable features (Statuses, Time Tracking, Custom Fields, etc.) → Create default lists
```

### Create a Task with Dependencies
```
List → + New Task → Title, assignee, priority → Open detail → Add dependency (waiting on / blocking) → Set due dates
```

### Build a Dashboard
```
Dashboards → + New → Add widgets (Sprint Velocity, Workload, Time Tracking, Custom Charts) → Select data sources → Arrange
```

### Set and Track Goals
```
Goals → + New Goal → Define target type → Add key results → Link tasks → Monitor completion percentage
```

### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
## URL / Route Structure

```
app.clickup.com/{workspace_id}/home                    # Home dashboard
app.clickup.com/{workspace_id}/v/l/{list_id}           # List view
app.clickup.com/{workspace_id}/v/b/{list_id}           # Board view
app.clickup.com/{workspace_id}/v/dc/{list_id}          # Calendar view
app.clickup.com/{workspace_id}/v/gh/{list_id}          # Gantt view
app.clickup.com/t/{task_id}                            # Task detail
app.clickup.com/{workspace_id}/docs/{doc_id}           # Document
app.clickup.com/{workspace_id}/dashboards/{id}         # Dashboard
app.clickup.com/{workspace_id}/goals                   # Goals
app.clickup.com/settings  # Settings
app.clickup.com/account  # Account settings
app.clickup.com/account/security  # Security settings
app.clickup.com/billing  # Billing & subscription
app.clickup.com/notifications  # Notification preferences
app.clickup.com/help  # Help center
app.clickup.com/help/{topic}  # Help article
app.clickup.com/api  # API documentation
app.clickup.com/search?q={query}  # Search results
app.clickup.com/integrations  # Integrations
app.clickup.com/admin  # Admin console
```

## Search & Filter

- **Global search (⌘K):** Full-text across tasks, docs, comments, people; recent searches, saved searches
- **List/Folder filters:** Multi-field filter builder (status, assignee, priority, tags, custom fields, dates) with AND/OR/NOT logic
- **Group by & Sort:** Group by any field; multi-level sort
- **Me Mode:** Quick toggle to filter any view to only the current user's tasks
- **Saved filters:** Persist as reusable filter sets applicable across views

- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full sidebar + view + task detail panel (three columns possible) |
| Tablet (768–1279px) | Collapsible sidebar, single-view focus, task detail as overlay |
| Mobile app | Bottom nav (Home, Notifications, Add, Search, Menu), card-based task views |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### ClickUp-Specific UX Patterns
- **Progressive disclosure**: Complex features hidden behind expandable sections
- **Contextual actions**: Right-click menus and hover-revealed action buttons
- **Inline editing**: Click-to-edit fields without navigating to a separate page
- **Batch operations**: Multi-select with bulk actions (delete, move, archive, tag)
- **Undo support**: Non-destructive actions with undo toast notifications
- **Loading states**: Skeleton screens and progress indicators during async operations
- **Empty states**: Helpful illustrations and CTAs when sections have no content
- **Onboarding tooltips**: First-time user guidance highlighting key features

### Accessibility
- WCAG 2.1 AA compliance across all interactive elements
- Semantic HTML with proper ARIA labels and landmarks
- Keyboard navigation support for all core workflows
- Screen reader compatibility tested with VoiceOver, NVDA, and JAWS
- Color contrast ratios meeting minimum 4.5:1 for body text
- Focus indicators visible on all interactive elements
- Reduced motion option respecting `prefers-reduced-motion`
- Resizable text up to 200% without content loss


### API & Integration Patterns
- RESTful API with JSON request/response format
- Webhook support for real-time event notifications
- OAuth 2.0 for third-party application authorization
- Rate limiting with clear headers (X-RateLimit-Remaining)
- Pagination via cursor-based or offset-based parameters
- Versioned API endpoints for backward compatibility
- Comprehensive API documentation with interactive examples
- SDKs available for popular languages (JavaScript, Python, Ruby, Go)


### Automation Rules
```
List → Automations → + New Rule → When: status changes to "Done" → Then: assign to reviewer, move to Review list, post Slack notification → Test rule → Enable
                                                                  ↘ Add condition: only if priority is "High"
```

### ClickUp AI
```
Task → AI button → Summarize comments → Generate subtasks from description → Translate content → Improve writing → AI-generated status updates from task activity
```

### Time Tracking
```
Open task → Start timer → Work on task → Stop timer → Time logged automatically → View time reports by person, project, or date range → Export for billing
                                                         ↘ Manual entry → Add time retroactively with notes
```

## Access Control

| Role | Capabilities |
|------|-------------|
| Owner | Full workspace control, billing, transfer ownership |
| Admin | User management, workspace settings, all spaces |
| Member | Access granted spaces, create tasks, manage own items |
| Guest (internal) | Limited to specific lists/folders, no space-level access |
| Guest (external) | Specific item/list access only, no sidebar navigation |
| Custom Role | Configurable permissions per feature (Enterprise plan) |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance