# Spreadsheet / Database — Information Architecture

## Overview

A collaborative data management tool combining spreadsheets and databases (Airtable, Notion databases, Google Sheets, Coda style). The mental model is **structured data with multiple views** — the same dataset can be visualized as a table, kanban board, gallery, form, or chart. Users define schemas and build workflows on top of tabular data.

## Site Map

```
├── Home / Dashboard
│   ├── Recent Bases / Workspaces
│   ├── Favorites
│   ├── Shared with Me
│   ├── Templates
│   └── Create New Base
├── Base (Workspace)
│   ├── Tables (tabs)
│   │   ├── Table A
│   │   ├── Table B
│   │   └── + Add Table
│   ├── Views (per table)
│   │   ├── Grid View (default spreadsheet)
│   │   ├── Kanban Board
│   │   ├── Gallery
│   │   ├── Calendar
│   │   ├── Timeline / Gantt
│   │   ├── Form View
│   │   ├── Chart / Pivot
│   │   └── + Create View
│   ├── Record Detail (expand row)
│   │   ├── All Fields (editable)
│   │   ├── Linked Records
│   │   ├── Activity / History
│   │   └── Comments
│   └── Base Settings
│       ├── Collaborators
│       ├── Automations
│       ├── API Docs (auto-generated)
│       ├── Sync / Import
│       └── Snapshots / Backups
├── Templates
│   ├── Template Gallery
│   ├── By Category
│   └── Use Template → Create Base
├── Automations
│   ├── Trigger (record created, updated, scheduled)
│   ├── Condition (filter)
│   ├── Actions (send email, update record, notify, webhook)
│   └── Automation History / Logs
├── Extensions / Apps
│   ├── Charts
│   ├── Scripting
│   ├── Page Designer
│   ├── Map View
│   └── Third-party Integrations
├── Search
│   ├── Within Base (records, fields)
│   └── Global (across bases)
├── Account / Settings
│   ├── Workspace Settings
│   ├── Members & Billing
│   ├── API Keys
│   ├── Notifications
│   └── Import / Export
└── Help / Documentation
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed | Base name, undo/redo, collaborators (avatars), share, help |
| **Table Tabs** | Horizontal tab bar (below top bar) | Switch between tables, + add table |
| **View Sidebar** | Left sidebar or toolbar | List of views for current table, + create view |
| **Toolbar** | Below table tabs | Hide fields, filter, sort, group, color, row height, search in view |
| **Record Modal** | Expand row → full-screen modal | All fields, linked records, comments, activity |
| **Field Header** | Clickable column headers | Sort, filter, customize field, hide, rename |

### Layout
```
[Top Bar: Base Name | Undo/Redo | Collaborators | Share]
[Table Tabs: Table A | Table B | + ]
[View Bar: Grid ▾ | Hide | Filter | Sort | Group | Color | Search | + View]
[Grid / Board / Gallery / Calendar / Timeline]
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, icon, members[] | has many Bases |
| Base | name, icon, color, tables[] | belongs to Workspace |
| Table | name, fields[], records[] | belongs to Base |
| Field (Column) | name, type, options{}, primary | belongs to Table |
| Record (Row) | field_values{}, created_at, modified_at | belongs to Table; can link to Records in other Tables |
| View | name, type, filters[], sorts[], groups[], hidden_fields[], color_rules | belongs to Table |
| Automation | trigger, conditions[], actions[], enabled, run_count | belongs to Base |
| Form | fields (subset), title, description, submit_url | special View type |
| Comment | body, author, record_reference, created_at | belongs to Record |

### Field Types
```
Single Line Text | Long Text | Attachment | Checkbox | Single Select | Multi Select |
Number | Currency | Percent | Date | Date/Time | Duration | Phone | Email | URL |
Link to Another Table | Lookup | Rollup | Count | Formula | Autonumber |
Created Time | Last Modified Time | Created By | Last Modified By | Button
```

### View Types
```
Grid: Traditional spreadsheet (rows × columns)
Kanban: Cards grouped by a select field (drag between columns)
Gallery: Card view with image thumbnail emphasis
Calendar: Records placed on dates
Timeline / Gantt: Records as date-range bars
Form: Public data entry (subset of fields)
Chart: Bar, line, pie, scatter from record data
```

## User Flows

### Create Structured Data
```
New Base → Add Table → Define Fields (columns) → Add Records (rows) → Switch Views
```

### Data Entry (Form)
```
Create Form View → Select Fields → Share Form Link → Respondent Fills → Record Created in Table
```

### Kanban Workflow
```
Grid View → Create Kanban View → Group by Status Field → Drag Cards Between Columns → Click Card for Detail
```

### Automation
```
Base Settings → Automations → + Create → Set Trigger (e.g., "When record enters view") → Add Action (e.g., "Send Slack message") → Enable → Runs Automatically
```

### Linked Data
```
Table A → Add "Link to Table B" Field → Click Cell → Select/Create Records from Table B → Lookup/Rollup Fields Pull Related Data
```

## URL / Route Structure

```
/                              → Home / Dashboard
/workspace/:id                 → Workspace
/base/:id                      → Base (default table + default view)
/base/:id/:tableId             → Specific table (default view)
/base/:id/:tableId/:viewId     → Specific table + view
/base/:id/:tableId/:viewId/:recordId → Record detail (modal over view)
/base/:id/automations          → Automations
/base/:id/settings             → Base settings
/base/:id/api                  → API docs
/form/:formId                  → Public form
/templates                     → Template gallery
/settings                      → Account settings
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Within View | Current table records | By any field (type-specific operators: is, contains, >, <, is empty, etc.) | By any field (asc/desc), multi-sort |
| Within Base | All tables, all records | Table, Field | Relevance |
| Global | Across all bases | Base, Table | Relevance, Modified Date |

### Filter Operators (by field type)
```
Text: is, is not, contains, does not contain, is empty, is not empty
Number: =, ≠, <, >, ≤, ≥, is empty
Select: is, is not, is any of, has any of
Date: is, before, after, is within (past week/month), is empty
Checkbox: is checked, is not checked
Link: has, does not have, is empty
```

### Grouping
Group records by any field — creates collapsible sections with subtotals for number fields.

## Responsive Behavior

| Breakpoint | Grid | Views | Record Detail |
|------------|------|-------|---------------|
| Desktop (≥1280px) | Full spreadsheet with horizontal scroll | All view types available | Modal overlay |
| Tablet (768–1279px) | Horizontal scroll, fewer visible columns | Grid, Kanban, Gallery | Full-screen modal |
| Mobile (<768px) | Card list (swipe to see fields) | Gallery, Kanban (scrollable) | Full-screen page |

### Mobile Adaptations
- Grid → Card list (one card per record)
- Horizontal swipe to see additional fields
- Camera integration for attachment fields
- Barcode scanner for inventory use cases
- Offline editing with sync queue
- Quick-add record form (essential fields only)

## Access Control

| Role | View | Add/Edit | Delete | Schema Changes | Automations | Admin |
|------|------|----------|--------|----------------|-------------|-------|
| Read Only | ✅ | — | — | — | — | — |
| Commenter | ✅ | Comments only | — | — | — | — |
| Editor | ✅ | ✅ | ✅ | — | — | — |
| Creator | ✅ | ✅ | Own records | Add fields/views | Create | — |
| Owner | ✅ | ✅ | ✅ | ✅ | Full | ✅ |

### View-Level Permissions
- Personal views (only creator sees)
- Collaborative views (shared with team)
- Locked views (only creator can modify filters/sorts)
