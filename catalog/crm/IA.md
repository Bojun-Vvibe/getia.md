# CRM — Information Architecture

## Overview

A customer relationship management platform for sales teams. The mental model is a **pipeline** — contacts flow through stages from lead to customer. The UI centers on relationship tracking, deal management, and communication history.

## Site Map

```
├── Dashboard
│   ├── Sales Pipeline Summary
│   ├── Revenue Forecast
│   ├── Tasks Due Today
│   └── Recent Activities
├── Contacts
│   ├── All Contacts (list/grid)
│   ├── Contact Detail
│   │   ├── Overview (info + timeline)
│   │   ├── Deals
│   │   ├── Activities
│   │   ├── Emails
│   │   ├── Notes
│   │   └── Files
│   ├── Import Contacts
│   └── Segments / Lists
├── Companies
│   ├── All Companies
│   ├── Company Detail
│   │   ├── Overview
│   │   ├── Contacts (associated)
│   │   ├── Deals
│   │   └── Activity Timeline
│   └── Import Companies
├── Deals
│   ├── Pipeline View (Kanban)
│   ├── List View
│   ├── Deal Detail
│   │   ├── Overview
│   │   ├── Contact / Company Links
│   │   ├── Activities
│   │   ├── Products / Line Items
│   │   └── Documents
│   └── Pipeline Settings
├── Activities
│   ├── Calendar View
│   ├── Task List
│   └── Call Log
├── Email
│   ├── Inbox (synced)
│   ├── Templates
│   ├── Sequences
│   └── Tracking
├── Reports
│   ├── Sales Performance
│   ├── Pipeline Analysis
│   ├── Activity Reports
│   ├── Revenue Forecast
│   └── Custom Reports
├── Settings
│   ├── Pipeline Stages
│   ├── Custom Fields
│   ├── Automations / Workflows
│   ├── Integrations
│   ├── Team Management
│   └── Data Management (Import/Export/Dedupe)
└── User Profile
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Global Nav** | Fixed left sidebar | Logo, primary modules, settings at bottom |
| **Module Nav** | Horizontal tabs within modules | E.g., Contacts → All / Segments / Import |
| **Record Nav** | Tabs on detail pages | Overview / Deals / Activities / Emails / Notes |
| **Utility Nav** | Top bar | Global search, notifications, quick-create (+), user menu |
| **Quick Create** | Floating action or top-bar button | Create Contact / Deal / Task from anywhere |

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Contact | name, email, phone, title, lifecycle_stage, owner | belongs to Company, has many Deals, Activities, Notes |
| Company | name, domain, industry, size, revenue | has many Contacts, Deals |
| Deal | name, amount, stage, probability, close_date, owner | belongs to Pipeline, linked to Contact(s) & Company |
| Pipeline | name, stages[] | has many Deals |
| Activity | type (call/email/meeting/task), subject, due_date, completed | linked to Contact/Deal, assigned to User |
| Note | body, created_at | linked to Contact/Company/Deal |
| Email | subject, body, from, to, opened, clicked | linked to Contact |
| Product | name, price, SKU | linked to Deal (as line items) |

### Lifecycle Stages
- Contact: `subscriber → lead → MQL → SQL → opportunity → customer → evangelist`
- Deal: `qualified → meeting → proposal → negotiation → closed-won / closed-lost`

## User Flows

### Lead to Deal
```
Import/Create Contact → Qualify → Create Deal → Move Through Pipeline → Close Won/Lost
```

### Daily Sales Workflow
```
Dashboard → Tasks Due Today → Complete Task → Log Activity → Update Deal Stage → Next Task
```

### Email Outreach
```
Contact Detail → Send Email (template) → Track Opens/Clicks → Follow-up Task Auto-created
```

## URL / Route Structure

```
/                              → Dashboard
/contacts                      → Contact List
/contacts/:id                  → Contact Detail
/contacts/:id/deals            → Contact's Deals
/contacts/:id/activities       → Contact's Activities
/contacts/import               → Import Contacts
/contacts/segments             → Segments
/companies                     → Company List
/companies/:id                 → Company Detail
/deals                         → Pipeline View (default)
/deals?view=list               → List View
/deals/:id                     → Deal Detail
/deals/pipeline/:pipelineId    → Specific Pipeline
/activities                    → Activities / Calendar
/activities/tasks              → Task List
/email                         → Email Inbox
/email/templates               → Email Templates
/email/sequences               → Sequences
/reports                       → Reports Dashboard
/reports/:reportType           → Specific Report
/settings/pipeline             → Pipeline Config
/settings/fields               → Custom Fields
/settings/automations          → Workflow Automations
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Contacts, Companies, Deals | — | Relevance |
| Contacts | Name, email, phone, company | Lifecycle Stage, Owner, Tags, Created Date, Last Activity | Name, Created, Last Activity, Company |
| Deals | Name, company, contact | Stage, Owner, Amount Range, Close Date, Probability | Amount, Close Date, Created, Stage |
| Activities | Subject, notes | Type, Status, Due Date, Owner | Due Date, Created |

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop (≥1280px) | Sidebar + main content + optional detail panel (split view) |
| Tablet (768–1279px) | Collapsed sidebar + full content, Kanban scrollable horizontally |
| Mobile (<768px) | Bottom tab nav, deal pipeline as vertical list, contact cards |

### Mobile Adaptations
- Kanban board → Vertical stage list with expandable cards
- Split view → Full-screen detail with back navigation
- Data tables → Summary cards with tap-to-expand
- Inline editing → Full-screen edit forms

## Access Control

| Role | Dashboard | Contacts | Deals | Reports | Settings |
|------|-----------|----------|-------|---------|----------|
| Admin | ✅ | All CRUD | All CRUD | All | ✅ |
| Manager | ✅ | All CRUD | Team's CRUD | Team | Limited |
| Sales Rep | ✅ | All Read, Own CRUD | Own CRUD | Own | — |
| Viewer | ✅ | Read | Read | Limited | — |
