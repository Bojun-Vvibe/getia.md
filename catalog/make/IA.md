---
brand: Make
tagline: From tasks and workflows to apps and systems, build and automate anything
category: Productivity
website: https://make.com
---

# Information Architecture — Make (formerly Integromat)

## Overview

Make (formerly Integromat) is a visual automation platform that lets users build complex multi-step workflows called "scenarios." Unlike linear trigger→action tools, Make uses a visual canvas where modules connect with routes, filters, iterators, and aggregators — enabling branching, looping, and sophisticated data transformation. The drag-and-drop scenario builder is the core of the experience.

## Site Map

```
make.com
├── Dashboard
│   ├── Scenario Overview
│   ├── Recent Runs
│   └── Quick Stats
├── Scenarios
│   ├── All Scenarios
│   ├── Folders
│   └── [Scenario]
│       ├── Visual Editor (Canvas)
│       │   ├── Modules (apps + actions)
│       │   ├── Routes (branching)
│       │   ├── Filters
│       │   ├── Iterators / Aggregators
│       │   ├── Error Handlers
│       │   └── Data Mapping Panel
│       ├── History (Run Log)
│       ├── Scheduling
│       └── Settings
├── Templates
│   ├── By Category
│   ├── By App
│   └── Community Templates
├── Connections
│   ├── App Connections
│   ├── Webhooks
│   ├── Keys
│   └── Devices
├── Data Stores
│   ├── [Store] → Records
│   └── Data Structures
├── Custom Apps (SDK)
├── Organization
│   ├── Teams
│   ├── Members
│   ├── Billing (Operations)
│   └── Security
└── Marketing Site
    ├── Apps (Integrations)
    ├── Templates
    ├── Pricing
    ├── Enterprise
    └── Academy
```

## Navigation Model

- **Left sidebar:** Dashboard, Scenarios, Templates, Connections, Data Stores, Custom Apps, Organization
- **Scenario editor:** Full-screen canvas; modules appear as circular nodes connected by lines; click module to open configuration panel
- **Module config panel:** App selection → Action selection → Connection → Field mapping with formula editor
- **Bottom bar (editor):** Run once, Scheduling toggle, History, Settings

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Organization | name, plan, operation quota | → Teams, Scenarios |
| Team | name, members | → Scenarios, Connections |
| Scenario | name, status (active/inactive), schedule (interval/cron/webhook), folder | → Modules, Routes, History |
| Module | app, action/trigger, field mapping, error handler | → Connection, Data output |
| Route | filter condition, modules chain | → Scenario branches |
| Connection | app, credentials, label | → Modules |
| Data Store | name, data structure, max records | → Records |
| Data Structure | field definitions (name, type, required) | → Data Stores, Modules |
| Webhook | URL, bound scenario | → Scenario trigger |
| Run (History) | timestamp, status, operations consumed, data flow | → Scenario |

## User Flows


### Build a Scenario
```
Scenarios → + New → Canvas → Add trigger module (e.g., Watch Gmail) → Connect → Add action module (e.g., Create Trello Card) → Map fields → Add filter/router if needed → Run Once to test → Turn On
```

### Handle Errors
```
Module → Add Error Handler route → Choose strategy (Resume, Commit, Rollback, Ignore, Break) → Configure fallback action
```

### Use Data Stores
```
Data Stores → + New → Define structure (fields) → In scenario, add "Search/Add/Update/Delete Data Store Record" modules
```

### Debug a Failed Run
```
Scenario → History → Click failed run → Inspect each module's input/output bubbles → Identify error → Fix mapping → Re-run
```

## URL / Route Structure

```
make.com/{org}/scenarios                    # Scenario list
make.com/{org}/scenarios/{id}               # Scenario editor
make.com/{org}/scenarios/{id}/history       # Run history
make.com/{org}/connections                  # Connections
make.com/{org}/datastores                   # Data stores
make.com/{org}/datastores/{id}              # Data store records
make.com/{org}/templates                    # Templates
make.com/{org}/custom-apps                  # Custom apps
make.com/{org}/organization/members         # Team members
make.com/{org}/scenarios/{id}/log                   # Execution log
make.com/{org}/scenarios/{id}/blueprint              # Scenario blueprint (JSON)
make.com/{org}/keys                                  # API keys
make.com/{org}/webhooks                              # Webhooks
make.com/{org}/devices                               # Devices
make.com/{org}/organization/billing                  # Billing
make.com/{org}/organization/security                 # Security settings
make.com/en/apps                                     # App directory
make.com/en/templates/{category}                     # Template categories
make.com/en/academy                                  # Make Academy
make.com/en/integrations/{app}                       # App integration page
```

## Search & Filter

- **Scenario list:** Search by name, filter by status (active/inactive), folder, app used
- **Run history:** Filter by date, status (success/warning/error), specific module
- **Template search:** By app, category, keyword
- **App directory:** Search 1,500+ apps with category filtering
- **Data store search:** Filter records within a data store by field values
- **Module search (in editor):** Search apps and actions when adding a new module

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full canvas editor with module config panels; optimal experience |
| Tablet | Basic dashboard access; scenario editor usable but cramped |
| Mobile | Dashboard and history viewable; scenario editing not supported |

## Access Control

| Role | Capabilities |
|------|-------------|
| Organization Owner | Billing, all settings, manage teams, full access |
| Organization Admin | Manage members, all scenarios and connections |
| Team Admin | Manage team scenarios, connections, data stores |
| Team Member | Create/edit scenarios within team, use shared connections |
| Team Monitor | View scenarios and history, cannot edit |
| Custom Role | Granular permissions per resource type (Enterprise) |

## Module Types

| Type | Purpose | Example |
|------|---------|---------|
| Trigger | Starts scenario execution | Watch new emails in Gmail |
| Action | Performs an operation | Create a row in Google Sheets |
| Search | Finds existing records | Search contacts in HubSpot |
| Aggregator | Combines multiple items into one | Merge array into CSV |
| Iterator | Splits an array into individual items | Process each line item |
| Router | Branches execution into multiple paths | Route based on status field |
| Filter | Controls which items continue | Only process priority: high |
| Error Handler | Catches and handles errors | Retry, ignore, or notify on failure |
| Transformer | Modifies data format | Parse JSON, format dates, math |

## Scenario Scheduling

- **Interval:** Every 1-60 minutes (or longer)
- **Cron expression:** Fine-grained scheduling (Enterprise)
- **Webhook-triggered:** Instant execution on incoming HTTP request
- **On-demand:** Manual run only
- **Sequential:** Wait for previous run to complete before starting next
- **Operations quota:** Each action consumes one operation; tracked per billing cycle

## Data Mapping

- **Formula editor:** Built-in functions (text, math, date, array, crypto)
- **Variable picker:** Click to insert output from any previous module
- **Iterator index:** Access current item index in loops
- **Error variables:** Access error details in error handler routes
- **Custom variables:** Store and reuse values across module chain

## Execution Model

- **Real-time processing:** Webhook-triggered scenarios execute immediately
- **Polling:** Scheduled scenarios check for new data at set intervals
- **Parallel execution:** Multiple scenarios can run simultaneously
- **Sequential guarantee:** Individual scenario runs are sequential within that scenario
- **Rate limiting:** Respects target app API limits with automatic retry
- **Data size limits:** 50MB per execution; larger files handled via URL references
- **Execution timeout:** 40 minutes max per single run

## Pricing Model

| Plan | Operations/mo | Active Scenarios | Price |
|------|--------------|-----------------|-------|
| Free | 1,000 | 2 | $0 |
| Core | 10,000 | Unlimited | $9/mo |
| Pro | 10,000+ | Unlimited | $16/mo |
| Teams | Custom | Unlimited | $29/mo |
| Enterprise | Custom | Unlimited | Custom |

## Error Handling Strategies

- **Resume:** Skip the failed bundle, continue with next
- **Commit:** Process all successful bundles, stop on error
- **Rollback:** Revert all changes if any bundle fails
- **Ignore:** Suppress error, continue execution
- **Break:** Pause scenario, allow manual resolution

## Integration Count

- **1,800+ apps** available as modules
- **Categories:** CRM, Marketing, E-commerce, Project Management, Finance, DevOps, Communication, AI/ML
- **Custom apps:** Build private modules using Make SDK
