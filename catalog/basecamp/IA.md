---
brand: Basecamp
tagline: The refreshingly simple project management tool
category: Productivity
website: https://basecamp.com
---

# Information Architecture — Basecamp

## Overview

Basecamp takes an opinionated, anti-complexity stance on project management. Each project is a self-contained "basecamp" with six fixed tools: Message Board, To-dos, Schedule, Docs & Files, Campfire (chat), and Automatic Check-ins. There are no Gantt charts, no custom fields, and no infinite configurations — by design. The Lineup view provides leadership-level project tracking, and Hill Charts offer a unique progress visualization.

## Site Map

```
basecamp.com
├── Home (HQ)
│   ├── Your Assignments
│   ├── Your Bookmarks
│   ├── Your Schedule
│   └── Your Drafts
├── Projects
│   └── [Project]
│       ├── Message Board (long-form announcements)
│       ├── To-dos
│       │   ├── To-do Lists
│       │   │   └── To-do Items (assignee, due date, notes)
│       │   └── Completed
│       ├── Campfire (group chat)
│       ├── Schedule (shared calendar)
│       ├── Docs & Files
│       │   ├── Documents
│       │   └── Files
│       ├── Automatic Check-ins (recurring prompts)
│       └── Card Table (kanban — optional)
│           └── Columns → Cards
├── Teams
│   └── [Team] (same six tools as projects)
├── Lineup (leadership view)
│   ├── Projects on timeline
│   └── Hill Charts
├── Hey! (Notifications)
│   ├── New for You
│   └── Catch Up (read later)
├── Pings (Direct Messages)
├── Activity (global feed)
│   ├── Latest Activity
│   ├── Someone's Activity
│   └── Overdue To-dos
├── Find (Search)
└── Admin
    ├── Account Settings
    ├── People
    ├── Billing
    └── Templates
├── Templates
│   ├── Project Templates
│   ├── To-do List Templates
│   └── Message Category Templates
├── Integrations
│   ├── Email Forwarding (post via email)
│   ├── Calendar (iCal/Google)
│   └── Third-party (Zapier, webhooks)
```

## Navigation Model

- **Top bar:** Home, Lineup, Hey! (notifications), Activity, Find, Pings, My Stuff dropdown
- **Home page:** Project cards in a grid; "Your Assignments" and "Your Schedule" are personal aggregations
- **Inside a project:** Six tool icons at the top (Message Board, To-dos, Campfire, Schedule, Docs & Files, Check-ins)
- **Breadcrumbs:** Always visible, showing Project → Tool → Item hierarchy
- **No sidebar:** Basecamp deliberately avoids persistent sidebars to keep attention on one thing at a time

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | name, description, color, people, tools enabled | → Messages, To-dos, Events, Documents, Campfire, Check-ins |
| Message | title, body (rich text), category, creator | → Comments, Project |
| To-do List | title, description | → To-do Items |
| To-do Item | title, assignee, due date, notes, completed | → Comments |
| Campfire | Real-time group chat per project | → Messages (chat), Project |
| Event (Schedule) | title, date/time, duration, recurring | → Comments, Project |
| Document | title, body (rich text) | → Project |
| File | name, type, size | → Project |
| Check-in | recurring question (e.g., "What did you work on today?") | → Responses, Project |
| Card Table | columns, cards | → Project |
| Hill Chart | scopes, positions (uphill/downhill) | → To-do Lists |
| Ping | text, sender, recipient(s), thread | → Users |
| Booking | name, description, project | belongs to Schedule |
| Template | type (project/todolist), structure | belongs to Account |
| Comment | text, author, attachments, created_at | belongs to Message/Todo/Event |
| Notification | type, subject, read_status | belongs to User |

## User Flows

### Kick Off a Project
```
Home → + New Project → Name, description, people → Choose tools → Post intro on Message Board → Create To-do Lists → Set Schedule milestones
```

### Post an Update
```
Project → Message Board → + New Message → Choose category (Announcement/FYI/Pitch/Heartbeat) → Write → Notify → Team comments
```

### Track Progress with Hill Charts
```
Project → To-dos → Hill Chart → Drag scopes uphill (figuring out) → Over the hill → Downhill (execution) → Compare snapshots over time
```

### Daily Check-in
```
Automatic Check-in fires (e.g., "What did you work on today?") → Respond in-app or via email → Team sees all responses in one thread
```

### Client Collaboration
```
Admin → People → Invite Client → Assign to project → Choose visible tools (hide Campfire, show Message Board + Docs) → Client sees only allowed tools
                                                                                                                                                        ↘ Client can comment on messages and access shared documents
```

### Lineup Planning
```
Lineup → View projects on timeline → Drag to adjust scope → Hill Charts → Drag scopes uphill/downhill → Snapshot progress → Compare to last week's snapshot → Identify stuck scopes
```
## URL / Route Structure

```
3.basecamp.com/{account_id}/                           # Home
3.basecamp.com/{account_id}/projects/{project_id}      # Project overview
3.basecamp.com/{account_id}/buckets/{id}/messages       # Message Board
3.basecamp.com/{account_id}/buckets/{id}/todolists      # To-dos
3.basecamp.com/{account_id}/buckets/{id}/chats/{id}     # Campfire
3.basecamp.com/{account_id}/buckets/{id}/schedules/{id} # Schedule
3.basecamp.com/{account_id}/buckets/{id}/vaults/{id}    # Docs & Files
3.basecamp.com/{account_id}/reports/todos               # My Assignments
3.basecamp.com/{account_id}/lineup                      # Lineup
3.basecamp.com/{account_id}/                           # Home
3.basecamp.com/{account_id}/projects                   # All projects
3.basecamp.com/{account_id}/projects/{project_id}      # Project overview
3.basecamp.com/{account_id}/buckets/{id}/messages       # Message Board
3.basecamp.com/{account_id}/buckets/{id}/messages/{id}  # Message detail
3.basecamp.com/{account_id}/buckets/{id}/todolists      # To-dos
3.basecamp.com/{account_id}/buckets/{id}/todos/{id}     # To-do item
3.basecamp.com/{account_id}/buckets/{id}/chats/{id}     # Campfire
3.basecamp.com/{account_id}/buckets/{id}/schedules/{id} # Schedule
3.basecamp.com/{account_id}/buckets/{id}/schedule_entries/{id} # Event detail
3.basecamp.com/{account_id}/buckets/{id}/vaults/{id}    # Docs & Files
3.basecamp.com/{account_id}/buckets/{id}/documents/{id} # Document
3.basecamp.com/{account_id}/buckets/{id}/uploads/{id}   # File detail
3.basecamp.com/{account_id}/buckets/{id}/card_tables/{id} # Card Table
3.basecamp.com/{account_id}/buckets/{id}/questionnaires/{id} # Check-in
3.basecamp.com/{account_id}/reports/todos               # My Assignments
3.basecamp.com/{account_id}/lineup                      # Lineup
3.basecamp.com/{account_id}/activity                    # Activity feed
3.basecamp.com/{account_id}/pings                       # Direct messages
3.basecamp.com/{account_id}/pings/{id}                  # Ping conversation
3.basecamp.com/{account_id}/my/bookmarks                # Bookmarks
3.basecamp.com/{account_id}/my/schedule                 # My Schedule
3.basecamp.com/{account_id}/my/drafts                   # My Drafts
3.basecamp.com/{account_id}/adminland                   # Admin settings
```

## Search & Filter

- **Find (global search):** Full-text across messages, to-dos, documents, comments, and campfire chats
- **Scoped search:** Filter by project, person, type (message/to-do/document/event)
- **Activity feed:** Filter by project or person; "Overdue" filter for to-dos
- **Hey! menu:** Catch Up feature lets you defer notifications to read later
- **No custom filters or saved views** — consistent with Basecamp's simplicity philosophy
- **Project filter**: Filter by active/archived/trashed projects
- **Person activity**: View all activity by a specific person across all projects
- **Overdue to-dos**: Dedicated filter showing all overdue items across projects

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Centered content column (max-width), no persistent sidebar |
| Tablet (768–1023px) | Same centered layout, responsive project grid |
| Mobile (iOS/Android app) | Bottom tab nav (Home, Hey!, Activity, Pings, My Stuff), full-featured native app |
| Email integration | Reply to most notifications via email; content posted back to Basecamp |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Basecamp-Specific UX Patterns
- **Progressive disclosure**: Complex features hidden behind expandable sections
- **Contextual actions**: Right-click menus and hover-revealed action buttons
- **Inline editing**: Click-to-edit fields without navigating to a separate page
- **Batch operations**: Multi-select with bulk actions (delete, move, archive, tag)
- **Undo support**: Non-destructive actions with undo toast notifications
- **Loading states**: Skeleton screens and progress indicators during async operations
- **Empty states**: Helpful illustrations and CTAs when sections have no content
- **Onboarding tooltips**: First-time user guidance highlighting key features
## Access Control

| Role | Capabilities |
|------|-------------|
| Account Owner | Billing, full admin, manage all people and projects |
| Admin | Manage people, create projects, access all projects |
| User | Access assigned projects, create content within them |
| Client (external) | Access specific projects; can be hidden from certain tools (e.g., Campfire) |
| Guest | Single-project access, limited to invited tools |
| Public link | Share a message/document as read-only public URL |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance