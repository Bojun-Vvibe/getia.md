---
brand: Monday.com
tagline: A Work OS that lets you shape workflows your way
category: Productivity
website: https://monday.com
---

# Information Architecture — Monday.com

## Overview

Monday.com is a "Work OS" — a flexible platform where teams build custom workflows using colorful, spreadsheet-like boards. The IA is built around workspaces → folders → boards → groups → items, with each board acting as a configurable database. Heavy emphasis on visual customization (colors, column types) and automation recipes differentiate it from traditional project management tools.

## Site Map

```
monday.com
├── My Work
│   ├── Assigned to Me
│   └── Mentioned
├── Workspaces
│   └── [Workspace]
│       ├── Folders
│       │   └── Boards
│       │       ├── Main Table (default)
│       │       ├── Kanban View
│       │       ├── Timeline View
│       │       ├── Calendar View
│       │       ├── Chart View
│       │       ├── Files Gallery
│       │       └── Dashboard
│       └── Docs
├── Inbox (Notifications)
├── Dashboards
├── Automations Center
├── Integrations Center
├── Apps Marketplace
├── Admin
│   ├── Users
│   ├── Billing
│   ├── Security
│   ├── Customization
│   └── API
└── Marketing Site
    ├── Products (Work Mgmt, CRM, Dev, Service)
    ├── Solutions
    ├── Pricing
    └── Resources
```

## Navigation Model

- **Left sidebar:** Workspace selector (dropdown), favorites, recent boards, workspace tree (folders → boards)
- **Top bar:** Search, Inbox (bell icon), My Work, "+" button for new board/doc/dashboard
- **Board-level header:** View switcher tabs, filter, sort, group by, person filter, automations, integrations
- **Item detail:** Opens as a slide-out panel with updates (comments), activity log, files

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, icon, color, type (open/closed) | → Folders, Boards, Members |
| Folder | name | → Sub-folders, Boards |
| Board | name, type (main/shareable/private), columns | → Groups, Items, Views, Automations |
| Group | name, color, collapsed state | → Items |
| Item | column values (status, person, date, number, text, etc.) | → Sub-items, Updates, Files |
| Column | type, title, settings | Defines board schema |
| Dashboard | name, widgets | → Boards (data sources) |
| Automation | trigger, conditions, actions | → Boards |
| Doc | title, content blocks | → Workspace |

## User Flows


### Create a Board from Template
```
+ New → Board → Choose template (or blank) → Name board → Set workspace → Customize columns
```

### Set Up an Automation
```
Board → Automations → + Add Automation → Select recipe (e.g., "When status changes, notify someone") → Configure → Activate
```

### Build a Cross-Board Dashboard
```
+ New → Dashboard → Add Widget → Select board(s) + column(s) → Choose chart type → Arrange layout
```

### Track Personal Work
```
My Work → View items assigned to me across all boards → Filter by date/status → Click item to open detail
```

## URL / Route Structure

```
{slug}.monday.com/boards/{board_id}                  # Board main table
{slug}.monday.com/boards/{board_id}/views/{view_id}  # Specific view
{slug}.monday.com/boards/{board_id}/pulses/{item_id} # Item detail
{slug}.monday.com/dashboards/{id}                    # Dashboard
{slug}.monday.com/docs/{id}                          # Document
{slug}.monday.com/workspaces/{id}                    # Workspace landing
{slug}.monday.com/inbox                              # Notifications
{slug}.monday.com/automations                          # Automations center
{slug}.monday.com/integrations                         # Integrations center
{slug}.monday.com/apps                                 # Apps marketplace
{slug}.monday.com/docs/{id}                            # Document
{slug}.monday.com/settings                             # Account settings
{slug}.monday.com/settings/users                       # User management
{slug}.monday.com/settings/billing                     # Billing
{slug}.monday.com/settings/security                    # Security
{slug}.monday.com/settings/api                         # API settings
{slug}.monday.com/search                               # Global search
monday.com/pricing                                     # Pricing page
monday.com/crm                                         # monday CRM
monday.com/dev                                         # monday dev
monday.com/marketplace                                 # App marketplace
```

## Search & Filter

- **Global search:** Searches across boards, items, updates, and docs; supports filtering by board, person, date
- **Board-level filters:** Column-based filtering with AND/OR logic; saveable as filter presets
- **Quick filters (person pills):** One-click filter to a specific person's items
- **Sort:** Multi-column sort within any board view
- **Group by:** Re-organize items by any column value dynamically

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1200px+) | Full sidebar + board with horizontal scroll for many columns |
| Tablet (768–1199px) | Collapsible sidebar, board adapts with fewer visible columns |
| Mobile app | Bottom nav (Home, My Work, Inbox, Search, Menu), simplified board views, swipe actions |

## Access Control

| Role | Capabilities |
|------|-------------|
| Admin | Full account control, billing, security, user management |
| Member | Create boards, full edit in assigned workspaces |
| Viewer | View boards, cannot edit items or columns |
| Guest | Access only to boards explicitly shared, limited features |
| Board Owner | Manage board permissions, columns, automations |
| Board Subscriber | Receive notifications without editing |

## Column Types

| Category | Column Types |
|----------|-------------|
| Basic | Status, Text, Numbers, Date, People, Timeline, Checkbox |
| Advanced | Formula, Mirror (cross-board), Dependency, Time Tracking |
| Media | Files, Link, Phone, Email, Location |
| Integration | Dropdown, Rating, Tags, Color Picker, Vote |

## View Types

| View | Description | Best For |
|------|-------------|----------|
| Main Table | Spreadsheet-like rows and columns | Default data entry and management |
| Kanban | Cards grouped by Status column | Visual workflow tracking |
| Timeline | Gantt-style horizontal bars | Project scheduling |
| Calendar | Date-based card layout | Deadline tracking |
| Chart | Bar, pie, line visualizations | Reporting and dashboards |
| Files Gallery | Grid of attached files | Asset management |
| Map | Location-pinned items | Geographic data |
| Workload | Resource allocation view | Capacity planning |

## Automation Recipes

- **When status changes to X, notify person Y**
- **When date arrives, move item to group Z**
- **When item created, assign to person and set status**
- **Every time period, create an item**
- **When column changes, push date by N days**
- **When status changes, send email/Slack message**
- **Custom automations with conditions and multiple actions**

## Product Suite

| Product | Purpose |
|---------|---------|
| monday work management | Project and task management with customizable boards |
| monday CRM | Sales pipeline, contacts, deals tracking |
| monday dev | Sprint planning, bug tracking, roadmaps for dev teams |
| monday service | Ticketing, SLA management, customer support workflows |

## Integrations

- **Communication:** Slack, Microsoft Teams, Outlook, Gmail, Zoom
- **Project tools:** Jira, Asana, Trello, GitHub, GitLab
- **Cloud storage:** Google Drive, Dropbox, OneDrive, Box
- **CRM:** Salesforce, HubSpot, Copper
- **Marketing:** Mailchimp, Facebook Ads, LinkedIn
- **Finance:** QuickBooks, Stripe, PayPal
- **Custom:** Zapier, Make (Integromat), API, Webhooks

## API & Developer Platform

- **REST API:** CRUD operations on boards, items, columns, groups
- **GraphQL API:** Flexible queries for complex data retrieval
- **Webhooks:** Real-time event notifications (item created, status changed)
- **SDK:** JavaScript/TypeScript SDK for custom app development
- **App Framework:** Build apps with custom views, widgets, and integrations
- **Marketplace:** Publish and distribute custom apps to monday.com users
- **OAuth 2.0:** Secure authentication for third-party integrations
- **Rate limits:** 5,000 requests/minute (complexity-based)

## Reporting & Analytics

| Widget | Data Source | Visualization |
|--------|-----------|---------------|
| Chart | Board data | Bar, line, pie, doughnut |
| Numbers | Board columns | Single metric with trend |
| Table | Board data | Filtered/sorted table |
| Battery | Status column | Completion percentage |
| Timeline | Timeline column | Gantt chart |
| Workload | People + timeline | Resource allocation |

## Board Permissions

| Board Type | Visibility | Who Can Edit |
|------------|-----------|-------------|
| Main Board | All workspace members | Board subscribers |
| Shareable Board | Anyone with link | Invited editors |
| Private Board | Creator + invited members | Invited editors |
