---
brand: Trello
tagline: Trello helps teams move work forward
category: Productivity
website: https://trello.com
---

# Information Architecture — Trello

## Overview

Trello pioneered the digital Kanban board, and its IA reflects that simplicity: Workspaces contain Boards, Boards contain Lists, and Lists contain Cards. This flat, visual hierarchy makes Trello immediately intuitive. Power-Ups extend functionality, and Butler provides no-code automation — but the core mental model remains a board of cards you drag between columns. Trello's strength is its flexibility: the same Board → List → Card hierarchy works for software development, event planning, content calendars, CRM pipelines, and personal task management.

## Site Map

```
trello.com
├── Home
│   ├── Boards (recently viewed, grid layout)
│   ├── Starred Boards (pinned favorites)
│   ├── Templates (quick start)
│   └── Create board CTA
├── Workspaces
│   └── [Workspace]
│       ├── Boards (workspace board list)
│       ├── Members (invite, manage roles)
│       ├── Settings (visibility, permissions, description)
│       └── Views (Premium/Enterprise)
│           ├── Table View (spreadsheet-like across boards)
│           ├── Calendar View (cards with due dates)
│           ├── Timeline View (Gantt-like, Premium)
│           ├── Dashboard View (charts and stats, Premium)
│           └── Map View (location-based, Premium)
├── Board
│   ├── Lists (horizontal columns)
│   │   └── Cards (draggable items)
│   ├── Board Header
│   │   ├── Board name (editable)
│   │   ├── Star / Favorite toggle
│   │   ├── Visibility (workspace/private/public)
│   │   ├── Filter button
│   │   ├── Power-Ups button
│   │   ├── Butler (Automation)
│   │   └── Share / Invite
│   ├── Board Menu (slide-in right panel)
│   │   ├── About This Board
│   │   ├── Activity (board log)
│   │   ├── Archived Items (cards and lists)
│   │   ├── Change Background (photos, colors, patterns)
│   │   ├── Labels (manage board labels)
│   │   ├── Custom Fields
│   │   ├── Power-Ups (installed + directory)
│   │   ├── Butler (Automation rules, buttons, schedules)
│   │   ├── Stickers
│   │   ├── Copy Board
│   │   ├── Print & Export
│   │   └── Close Board
│   └── Card Detail (modal overlay)
│       ├── Title (editable)
│       ├── Description (Markdown editor)
│       ├── Members (assigned users, avatars)
│       ├── Labels (color-coded tags)
│       ├── Checklists (multiple, with progress bar)
│       ├── Due Date / Start Date
│       ├── Attachments (files, links, Google Drive, Dropbox)
│       ├── Cover Image (color or photo)
│       ├── Custom Fields (text, number, date, dropdown, checkbox)
│       ├── Comments / Activity log
│       ├── Move / Copy card
│       ├── Watch (subscribe to notifications)
│       ├── Archive / Delete
│       └── Power-Up fields
├── Search
│   ├── Global search bar
│   ├── Search operators
│   └── Recent searches
├── Templates Gallery
│   ├── By category (Project Management, Marketing, Sales, Design, etc.)
│   ├── By creator (Trello, community)
│   └── Template detail + Use Template
└── Marketing Site
    ├── Features
    ├── Solutions (by team, by use case)
    ├── Plans (Free, Standard, Premium, Enterprise)
    ├── Pricing
    ├── Resources (blog, guides, webinars)
    └── Developers (API, Power-Up development)
```

## Navigation Model

- **Top bar (persistent):** Trello logo (→ Home), Workspaces dropdown, Recent boards, Starred boards, Templates, Create (+), Search bar, Notifications bell, User menu
- **Home page:** Board grid organized by workspace and starred status; recent boards prominent
- **Board view:** Horizontal scroll of lists; each list scrolls vertically for long card sets; board menu slides in from the right
- **Card detail:** Modal overlay on top of board — no page navigation required; click outside or X to close
- **Workspace sidebar:** Boards list, Members, Settings, Views (table/calendar/timeline/dashboard/map)
- **Mobile:** Bottom tabs (Boards, Search, Notifications, Account); horizontal swipe between lists; card detail as full screen

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, type (team/education/business/other), logo, visibility, description | → Boards, Members, Settings |
| Board | name, background (color/photo), visibility (private/workspace/public), starred, Power-Ups[], closed | → Lists, Labels, Custom Fields, Members |
| List | name, position, archived | → Cards |
| Card | title, description (Markdown), due_date, start_date, members[], labels[], position, cover, archived, subscribed | → Checklists, Comments, Attachments, Custom Fields |
| Checklist | title, position | → Checklist Items (text, complete/incomplete, member, due_date) |
| Label | name, color (10 colors), board-scoped | → Cards (many-to-many) |
| Custom Field | name, type (text/number/date/dropdown/checkbox), options | → Board, Cards |
| Power-Up | name, type (integration/utility/board tool), icon, enabled | → Board |
| Butler Rule | name, trigger (card move, due date, schedule), action(s), enabled | → Board |
| Attachment | filename, url, type (file/link), thumbnail, date | → Card |
| Comment | text, author, timestamp, reactions | → Card |
| Activity | action, member, timestamp, target | → Board or Card |

## User Flows

### Create a Board and Add Cards
```
+ Create → Board → Name + background + workspace → Add Lists (e.g., To Do, Doing, Done) → + Add Card to each list → Invite team members
```

### Move Work Forward (Core Loop)
```
Board → Drag card from "To Do" to "Doing" → Open card → Update checklist progress → Add comment → Drag to "Done" → Notifications sent
```

### Set Up Butler Automation
```
Board Menu → Butler → + Create Rule → When [card moved to Done] → Do [check all items, remove members, add label] → Save → Automation runs automatically
```

### Use a Template
```
Templates Gallery → Browse by category → Preview template → Use Template → Set board name + workspace → Board created with pre-built lists and cards
```

### Card Collaboration
```
Open card → Assign members → Add due date → Create checklist with items → Attach files → Add comments → @mention teammate → Watch for updates
```

## URL / Route Structure

```
trello.com/                                     # Marketing homepage
trello.com/signup                               # Sign up
trello.com/login                                # Log in
trello.com/u/{username}/boards                  # User's boards
trello.com/u/{username}/activity                # User activity
trello.com/w/{workspace_slug}/home              # Workspace home
trello.com/w/{workspace_slug}/members           # Workspace members
trello.com/w/{workspace_slug}/account           # Workspace settings
trello.com/w/{workspace_slug}/views/table       # Workspace table view
trello.com/w/{workspace_slug}/views/calendar    # Workspace calendar view
trello.com/w/{workspace_slug}/views/timeline    # Workspace timeline view
trello.com/b/{board_id}/{board_slug}            # Board view
trello.com/b/{board_id}/{board_slug}/butler     # Board Butler automation
trello.com/b/{board_id}/{board_slug}/power-ups  # Board Power-Ups
trello.com/c/{card_id}/{card_slug}              # Card detail (also opens as modal)
trello.com/templates                            # Template gallery
trello.com/templates/{category}                 # Templates by category
trello.com/search?q={query}                     # Search results
trello.com/pricing                              # Pricing
trello.com/platforms                            # Platform downloads
trello.com/guide                                # Getting started guide
trello.com/power-ups                            # Power-Up directory
trello.com/power-ups/{power-up-slug}            # Power-Up detail
trello.com/developer                            # Developer API docs
```

## Search & Filter

- **Global search:** Full-text across board names, card titles, descriptions, comments, checklists; search operators (`@me`, `@username`, `#label`, `has:attachments`, `has:description`, `is:open`, `is:archived`, `board:name`, `list:name`, `due:day`, `due:week`, `due:month`, `due:overdue`)
- **Board filter (menu → Filter):** By member, label, due date (overdue/no date/next day/next week/next month), keyword; filters combine with AND
- **Card filter bar:** Quick filter chips visible on board header when active filters applied
- **Saved searches:** Not native; achieved via bookmarked search URLs
- **Template search:** Search by keyword, browse by category
- **Power-Up search:** Search the Power-Up directory by name or category

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Horizontal scrolling lists, full card detail modal, board menu sidebar, keyboard shortcuts |
| Tablet (768–1023px) | Same layout, touch-optimized drag and drop, slightly larger touch targets |
| Mobile app (iOS/Android) | Vertical stack of lists (swipe between), card detail as full screen, bottom tabs (Boards, Search, Notifications, Account), offline support |
| Apple Watch | View board notifications, quick card actions |
| Widgets | iOS/Android home screen widgets for board overview |

## Access Control

| Role | Capabilities |
|------|-------------|
| Workspace Admin | Manage workspace settings, billing, members, all boards, Power-Ups |
| Board Admin | Configure board settings, Power-Ups, manage board members, close/delete board |
| Board Member | Create/edit/move/archive cards, add comments, manage own checklists |
| Board Observer | View board only, cannot edit (Enterprise/Premium feature) |
| Guest (multi-board) | Access specific boards within a workspace, limited workspace visibility |
| Public Board | Anyone with link can view (no editing); search-engine indexable |
| Free tier | Unlimited boards, 10 boards per workspace, limited Power-Ups (1 per board), 10MB attachment limit |
| Standard tier | Unlimited boards, unlimited Power-Ups, 250MB attachments, advanced checklists, custom fields |
| Premium tier | All Standard + workspace views (Timeline, Dashboard, Map, Calendar, Table), admin controls, priority support |
| Enterprise tier | Organization-wide permissions, SSO/SAML, attachment restrictions, Power-Up admin, unlimited workspaces |
