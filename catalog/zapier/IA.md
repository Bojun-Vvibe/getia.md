---
brand: Zapier
tagline: Automation that moves you forward
category: Productivity
website: https://zapier.com
---

# Information Architecture — Zapier

## Overview

Zapier connects 7,000+ apps through automated workflows called "Zaps." Each Zap follows a trigger→action model: an event in one app automatically triggers actions in one or more other apps. The IA is organized around a dashboard of Zaps, an app directory, and a step-by-step Zap editor. Tables, Interfaces, and Chatbots extend Zapier from a connector into a lightweight app-building platform. Canvas provides visual workflow building for complex multi-step automations.

## Site Map

```
zapier.com
├── Dashboard (Home)
│   ├── My Zaps (overview)
│   ├── Recently Run
│   ├── Usage Stats (tasks used / available)
│   └── Quick Create suggestions
├── Zaps
│   ├── All Zaps (list with status, last run, task count)
│   ├── Folders (organize Zaps by project/team)
│   ├── Shared Zaps
│   ├── Drafts
│   └── Zap Templates (pre-built)
├── Zap Editor
│   ├── Trigger Step (event in source app)
│   ├── Action Step(s) (sequential or parallel)
│   ├── Filter (continue if conditions met)
│   ├── Path (branching logic, if/else)
│   ├── Formatter (text, number, date transformations)
│   ├── Code Step (JavaScript or Python)
│   ├── Delay (wait, schedule)
│   ├── Looping (iterate over list)
│   ├── Sub-Zap (call another Zap)
│   └── Test & Publish
├── Tables (Zapier Tables)
│   ├── Table List
│   ├── Table Detail
│   │   ├── Fields (text, number, date, checkbox, link, etc.)
│   │   ├── Records (rows)
│   │   ├── Views (grid, kanban)
│   │   └── Linked Zaps (automations attached)
│   └── Import / Export
├── Interfaces (Zapier Interfaces)
│   ├── Pages (drag-and-drop page builder)
│   ├── Forms (input collection)
│   ├── Kanban (visual board)
│   ├── Tables (embedded)
│   └── Link Tables + Zaps
├── Chatbots (AI-powered)
│   ├── Create Chatbot
│   ├── Knowledge Sources
│   ├── Embed / Share
│   └── Analytics
├── Canvas (Visual Workflow Builder)
│   ├── Whiteboard-style Zap planning
│   ├── Convert to Zap
│   └── Collaboration
├── Task History
│   ├── All Tasks (chronological)
│   ├── By Zap
│   ├── By Status (success/error/held/filtered/replayed)
│   ├── Task Detail (input/output data inspection)
│   └── Replay (re-run failed tasks)
├── App Directory
│   ├── Browse by Category (Marketing, Sales, CRM, Dev Tools, etc.)
│   ├── Search (7,000+ apps)
│   ├── Popular Apps
│   ├── New Apps
│   └── App Profile
│       ├── Available Triggers
│       ├── Available Actions
│       ├── Pre-built Zap Templates
│       └── Authentication info
├── Settings
│   ├── Account (profile, email, password)
│   ├── Billing (plan, usage, invoices)
│   ├── Team Members (invite, roles)
│   ├── Connected Accounts (OAuth connections per app)
│   ├── API Keys / Webhooks
│   ├── Security (2FA, SSO)
│   └── Notifications
└── Marketing Site
    ├── Apps (directory)
    ├── Explore (use case templates)
    ├── Pricing (Free, Starter, Professional, Team, Company)
    ├── Blog
    ├── Learn (Zapier University)
    └── Resources (webinars, guides, community)
```

## Navigation Model

- **Left sidebar:** Home, Zaps, Tables, Interfaces, Chatbots, Canvas, Task History
- **Top bar:** Search (global), Create (+), Notifications bell, Account avatar
- **Zap Editor:** Vertical step-by-step flow — each step expands to configure trigger/action/filter; steps connected by arrows
- **App Directory:** Card grid browseable by category; each app page lists available triggers & actions with templates
- **Table Editor:** Spreadsheet-style grid with field configuration, linked Zap indicators
- **Interface Builder:** Drag-and-drop page layout with form, table, and visual components

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Zap | name, status (on/off/draft), folder, created_at, last_run, task_count, version | → Steps (Trigger, Actions, Filters, Paths) |
| Step | type (trigger/action/filter/path/formatter/code/delay/loop), app, event, config, position | → Connected Account, Field Mapping |
| Connected Account | app name, auth type (OAuth/API key/basic), label, status | → Steps |
| Task | Zap run instance, status (success/error/held/filtered), timestamp, data_input, data_output | → Zap |
| Table | name, fields[], records[], linked_zaps[], created_at | → Zaps, Interfaces |
| Record | field_values, created_at, updated_at | → Table |
| Interface | name, pages[], published_url, theme | → Tables, Zaps |
| Chatbot | name, knowledge_sources[], embed_config, conversation_count | → Zaps (actions) |
| Folder | name, zap_count | → Zaps |
| App (Directory) | name, category, icon, triggers[], actions[], auth_type, popularity | → Zaps |
| Template | name, description, apps[], trigger, actions[], use_count | Pre-built Zap blueprint |

## User Flows

### Create a Zap
```
+ Create → Choose Trigger App → Select event → Connect account → Configure trigger → + Action → Choose Action App → Select event → Map fields → Test → Turn On
```

### Build a Multi-Step Zap with Branching
```
Trigger (new email) → + Path → Branch A (contains "urgent") → Action: Slack message → Branch B (all others) → Action: add to spreadsheet → Publish
```

### Monitor and Debug
```
Task History → Filter by Zap or status → View failed task → Inspect input/output data → Identify field mapping error → Fix in editor → Replay task
```

### Build a Form-to-Workflow App
```
Interfaces → + New → Add Form page → Define fields → Link to Table → Create Zap triggered by new Table record → Add actions (email, Slack, CRM) → Publish interface → Share URL
```

### Set Up a Chatbot
```
Chatbots → + New → Upload knowledge sources (docs, URLs) → Configure personality → Test conversation → Embed on website → Monitor analytics
```

## URL / Route Structure

```
zapier.com/                                         # Marketing homepage
zapier.com/sign-up                                  # Sign up
zapier.com/app/login                                # Log in
zapier.com/app/dashboard                            # Dashboard
zapier.com/app/zaps                                 # All Zaps
zapier.com/app/zaps/folder/{folder_id}              # Zap folder
zapier.com/editor/{zap_id}                          # Zap editor
zapier.com/editor/{zap_id}/nodes/{step_id}          # Zap editor step detail
zapier.com/app/history                              # Task history
zapier.com/app/history/{task_id}                    # Task detail
zapier.com/app/tables                               # All Tables
zapier.com/app/tables/{table_id}                    # Table detail
zapier.com/app/interfaces                           # All Interfaces
zapier.com/app/interfaces/{interface_id}            # Interface editor
zapier.com/app/interfaces/{id}/published            # Published interface
zapier.com/app/chatbots                             # All Chatbots
zapier.com/app/chatbots/{chatbot_id}                # Chatbot editor
zapier.com/app/connections                          # Connected accounts
zapier.com/app/settings                             # Settings
zapier.com/app/settings/billing                     # Billing & plan
zapier.com/app/settings/team                        # Team members
zapier.com/app/settings/profile                     # Profile settings
zapier.com/apps                                     # App directory
zapier.com/apps/{app-slug}                          # App profile
zapier.com/apps/{app-slug}/integrations             # App integrations
zapier.com/apps/{app1}/integrations/{app2}          # App pair integrations
zapier.com/explore                                  # Zap templates explore
zapier.com/pricing                                  # Pricing page
zapier.com/blog                                     # Blog
zapier.com/learn                                    # Zapier University
```

## Search & Filter

- **Global search:** Find Zaps, apps, tables, interfaces, chatbots by keyword; ⌘K shortcut
- **App Directory search:** Search 7,000+ apps, filter by category, sort by popularity or alphabetical
- **Task History filters:** By Zap, date range, status (success/error/held/filtered/replayed), search by data content
- **Zap list filters:** By status (on/off/draft), app used, folder, last run date
- **Explore (templates):** Search pre-built Zap templates by app combination, use case, or keyword
- **Table search:** Search records within a table by field values
- **Connected accounts:** Search and filter by app name

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full sidebar + Zap editor with field mapping panels; Tables in spreadsheet view |
| Tablet (768–1023px) | Collapsible sidebar, Zap editor scrolls vertically; Tables functional |
| Mobile | Dashboard and task history viewable; Zap editing not supported (desktop-only experience); notifications and monitoring |
| Mobile app (iOS/Android) | View Zap status, task history, notifications; cannot edit Zaps |

## Access Control

| Role | Capabilities |
|------|-------------|
| Account Owner | Billing, all settings, manage members, all Zaps, all resources |
| Admin | Manage team members, view all Zaps, manage shared folders, app restrictions |
| Member | Create/edit own Zaps, use shared folders, shared app connections |
| Restricted Member | Use only pre-approved apps and shared Zaps; cannot connect new apps |
| Shared Zap (link) | View-only Zap template for duplication, no editing |
| Free tier | 5 single-step Zaps, 100 tasks/month |
| Starter tier | 20 multi-step Zaps, 750 tasks/month, filters, formatters |
| Professional tier | Unlimited Zaps, unlimited steps, paths, webhooks, custom logic |
| Team tier | Shared workspace, shared connections, SAML SSO, team folders, premier support |
| Company tier | Advanced admin, SCIM provisioning, audit logs, custom retention, dedicated support |
