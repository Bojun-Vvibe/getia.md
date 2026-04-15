---
brand: Airtable
tagline: "Connected apps platform. Spreadsheet-meets-database with multi-view, automations, and interfaces."
category: Productivity
website: https://airtable.com
---

# Airtable — Information Architecture

## Overview

Airtable bridges spreadsheets and databases with a colorful, friendly UI. The mental model is **structured data with multiple views** — the same records appear as a grid, kanban, gallery, calendar, timeline, or form. Key differentiators: rich field types (attachment, linked records, lookup, rollup, formula), Interface Designer (custom app-like views), Automations (trigger → action workflows), and Sync (cross-base data sync).

## Site Map

```
├── Home
│   ├── Recent Bases
│   ├── Shared with Me
│   ├── Starred
│   ├── Templates
│   ├── Workspaces
│   └── + Create Base
├── Base
│   ├── Table Tabs (Table 1, Table 2, + Add Table)
│   ├── Views (per table)
│   │   ├── Grid View (default spreadsheet)
│   │   ├── Kanban View
│   │   ├── Gallery View
│   │   ├── Calendar View
│   │   ├── Timeline / Gantt View
│   │   ├── Form View (public data entry)
│   │   ├── List View
│   │   └── + Create View
│   ├── View Toolbar
│   │   ├── Hide Fields
│   │   ├── Filter
│   │   ├── Group
│   │   ├── Sort
│   │   ├── Color
│   │   ├── Row Height
│   │   ├── Share View
│   │   └── Search
│   ├── Record Detail (expand row)
│   │   ├── All Fields
│   │   ├── Linked Records (clickable)
│   │   ├── Comments
│   │   └── Activity Log
│   └── Field Configuration
│       ├── Field Type Selector
│       ├── Field Options
│       └── Lookup / Rollup Configuration
├── Interfaces (Interface Designer)
│   ├── Interface List
│   ├── Interface Builder
│   │   ├── Layout Elements (grid, list, detail, chart, button, form, timeline, number, text)
│   │   ├── Data Source Picker (table + view)
│   │   ├── Filter / Sort per element
│   │   └── User Role Filtering
│   └── Published Interfaces
├── Automations
│   ├── Automation List
│   ├── Automation Builder
│   │   ├── Trigger (record created/updated, form submitted, scheduled, webhook)
│   │   ├── Conditions (filter logic)
│   │   └── Actions (send email, update record, create record, Slack, webhook, script)
│   └── Run History
├── Sync
│   ├── Synced Tables (read-only mirrors from other bases/sources)
│   └── External Syncs (Google Calendar, Salesforce, Jira)
├── Extensions
│   ├── Chart
│   ├── Scripting
│   ├── Page Designer
│   ├── Map
│   ├── Pivot Table
│   └── 3rd Party Extensions
├── Data (Admin)
│   ├── Tables & Fields Schema
│   ├── Field Dependencies
│   └── Data Capacity
├── Settings
│   ├── Base Collaborators
│   ├── API Documentation (auto-generated)
│   ├── Webhooks
│   ├── Snapshots / Backup
│   └── Trash (deleted records/tables)
└── Workspace Settings
    ├── Members & Billing
    ├── SSO / Security
    └── Admin Panel
├── Enterprise
│   ├── Admin Panel
│   │   ├── Usage Analytics
│   │   ├── Audit Logs
│   │   └── Data Governance
│   ├── SSO Configuration
│   └── API Rate Limits
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed | Base name, undo/redo, collaborator avatars, share, help, extensions, automations |
| **Table Tabs** | Horizontal tabs below top bar | Switch tables, + add table |
| **View Sidebar** | Left of grid (collapsible) | View list for current table, grouped by type |
| **Toolbar** | Below table tabs | Hide, Filter, Group, Sort, Color, Row Height, Search, + New View |
| **Record Modal** | Click expand icon on row | Full-screen modal with all fields, comments |
| **Interface Designer** | Separate mode (top-left toggle) | Drag-and-drop layout builder |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, members[], plan | has many Bases |
| Base | name, icon, color, tables[] | belongs to Workspace |
| Table | name, fields[], primary_field | has many Records, Views |
| Field | name, type, options{} | belongs to Table |
| Record | field_values{}, created_time, last_modified | belongs to Table |
| View | name, type, filters[], sorts[], groups[], hidden_fields[], color_config | belongs to Table |
| Automation | trigger{}, conditions[], actions[], enabled | belongs to Base |
| Interface | name, layout, elements[], published, role_access | belongs to Base |
| Sync | source, destination_table, fields_mapped[], frequency | belongs to Base |
| Extension | name, type, configuration, base_id | belongs to Base |
| Snapshot | created_at, size, base_id | belongs to Base |
| Comment | text, author, created_at, resolved | belongs to Record |
| Webhook | url, events[], active | belongs to Base |

### Field Types
```
Single Line Text | Long Text | Attachment | Checkbox | Single Select | Multi Select |
Number | Currency | Percent | Date | Date & Time | Duration | Phone | Email | URL |
Link to Another Record | Lookup | Rollup | Count | Formula | Autonumber | Barcode |
Rating | Rich Text | Button | Created Time | Last Modified Time | Created By | Last Modified By |
AI (summarize, categorize, translate)
```

## User Flows

### Build a Tracker
```
Create Base → Add Table → Define Fields (name, type) → Add Records → Create Kanban View (by status) → Share with team
```

### Form Data Collection
```
Create Form View → Select fields → Customize branding → Share form link → Responses appear as records → Automation sends notification
```

### Interface for Stakeholders
```
Interface Designer → Add Grid element → Connect to table → Add filters (show only relevant) → Add Chart → Publish → Share link with stakeholders (they see interface, not raw data)
```

### Automation Workflow
```
Automations tab → + New Automation → Select trigger (record created) → Add condition (status = 'New') → Add action (send Slack notification) → Test → Enable
                                                                                                                                    ↘ Add another action (update record status)
```

### Cross-Base Sync
```
Source base → Table → Share view → Enable sync → Destination base → + Synced table → Paste sync link → Configure field mapping → Auto-sync every 5 minutes
```
## URL / Route Structure

```
/                              → Home
/workspace/:id                 → Workspace
/:baseId                       → Base (default table + view)
/:baseId/:tableId              → Table
/:baseId/:tableId/:viewId      → Specific view
/:baseId/:tableId/:viewId/:recordId → Record modal
/:baseId/automations           → Automations
/:baseId/interfaces            → Interfaces
/:baseId/interfaces/:id        → Interface view
/:baseId/api                   → Auto-generated API docs
/form/:formId                  → Public form
/templates                     → Template gallery
/settings                      → Settings
/:baseId/syncs                → Synced tables
/:baseId/extensions            → Extensions panel
/:baseId/settings              → Base settings
/:baseId/collaborators         → Collaborators
/:baseId/webhooks              → Webhooks
/:baseId/trash                 → Trash
/workspaces/:id/settings       → Workspace settings
/workspaces/:id/billing        → Billing
/workspaces/:id/members        → Members
/account                       → Account settings
/account/api                   → API tokens
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Within View | By any field (type-specific operators) | Any field, multi-sort |
| Global | All tables, all records | Table | Relevance |
| Templates | Category, Use Case | Popular, Recent |

### Filter Operators
```
Text: is, is not, contains, does not contain, is empty
Number: =, ≠, <, >, ≤, ≥, is empty
Select: is, is not, is any of, has any of, is none of
Date: is, before, after, is within (past/next N days/weeks/months)
Linked Record: has, does not have, contains, is empty
```
| Extensions | Browse by category, popularity | Popular, Recent |
| Automations | By trigger type, status (enabled/disabled) | Created, Modified |

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop (≥1280px) | Full spreadsheet with sidebar |
| Tablet | Horizontal scroll, collapsed sidebar |
| Mobile | Card list per record, gallery/kanban usable, grid limited |

## Access Control

| Role | View | Add/Edit | Delete | Schema | Automations | Admin |
|------|------|----------|--------|--------|-------------|-------|
| Read Only | ✅ | — | — | — | — | — |
| Commenter | ✅ | Comments | — | — | — | — |
| Editor | ✅ | ✅ | ✅ | — | — | — |
| Creator | ✅ | ✅ | Own | Add fields/views | Create | — |
| Owner | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
