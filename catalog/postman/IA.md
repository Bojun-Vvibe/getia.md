---
brand: Postman
tagline: "The API platform for building, testing, and documenting APIs. Collaboration-first API development."
category: API Tool
website: https://www.postman.com
---

# Postman — Information Architecture

## Overview

Postman is the leading API development platform used by 30M+ developers. The mental model is **workspaces containing collections of API requests** — developers organize, test, document, and share APIs through a desktop/web application that serves as the universal API client. Postman differentiates through its collection-based organization (like folders of requests), environment variables (switch between dev/staging/prod), automated testing with Newman, mock servers, API documentation generation, and team workspaces for collaborative API development.

## Site Map

```
├── Home
│   ├── Recent Workspaces
│   ├── Recently Viewed (collections, requests, APIs)
│   ├── Team Activity
│   └── Quick Actions (new request, import, explore)
├── Workspaces
│   ├── Personal Workspace
│   ├── Team Workspaces
│   │   ├── Workspace Overview
│   │   ├── Members & Roles
│   │   └── Activity Feed
│   ├── Public Workspaces
│   └── Create Workspace
├── Collections
│   ├── Collection List (sidebar tree)
│   ├── Collection
│   │   ├── Folder Structure (nested)
│   │   ├── Request
│   │   │   ├── Request Builder
│   │   │   │   ├── Method Selector (GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD)
│   │   │   │   ├── URL Bar (with path variables)
│   │   │   │   ├── Params Tab (query parameters)
│   │   │   │   ├── Authorization Tab (API key, Bearer, OAuth2, Basic, etc.)
│   │   │   │   ├── Headers Tab
│   │   │   │   ├── Body Tab (form-data, raw JSON/XML, binary, GraphQL)
│   │   │   │   ├── Pre-request Scripts (JavaScript)
│   │   │   │   ├── Tests Tab (assertions, JavaScript)
│   │   │   │   └── Settings (follow redirects, timeouts)
│   │   │   └── Response Viewer
│   │   │       ├── Body (pretty, raw, preview)
│   │   │       ├── Headers
│   │   │       ├── Cookies
│   │   │       ├── Test Results (pass/fail)
│   │   │       ├── Status Code + Time + Size
│   │   │       └── Save as Example
│   │   ├── Collection Settings
│   │   │   ├── Authorization (inherited)
│   │   │   ├── Pre-request Scripts (collection-level)
│   │   │   ├── Tests (collection-level)
│   │   │   └── Variables (collection-scoped)
│   │   ├── Run Collection (Collection Runner)
│   │   │   ├── Select Folder / Requests
│   │   │   ├── Choose Environment
│   │   │   ├── Iterations
│   │   │   ├── Delay
│   │   │   ├── Data File (CSV/JSON for data-driven tests)
│   │   │   └── Run Results (pass/fail per request)
│   │   └── Collection Documentation (auto-generated)
│   ├── Import (OpenAPI, cURL, Swagger, HAR, GraphQL, WSDL)
│   └── Export (JSON v2.1)
├── APIs
│   ├── API List
│   ├── API Definition
│   │   ├── Schema (OpenAPI / GraphQL / Protobuf / RAML / WSDL)
│   │   ├── Schema Editor (visual or code)
│   │   ├── Linked Collections
│   │   ├── Validation (schema linting)
│   │   ├── Changelog
│   │   └── Versioning (v1, v2, etc.)
│   ├── Mock Servers
│   │   ├── Mock Server List
│   │   ├── Create Mock (from collection or API)
│   │   ├── Mock URL (simulated endpoint)
│   │   └── Mock Call Log
│   ├── Monitors
│   │   ├── Monitor List
│   │   ├── Create Monitor (scheduled collection runs)
│   │   ├── Monitor Results (uptime, response time, failures)
│   │   └── Alerts (email, Slack, PagerDuty)
│   └── Documentation
│       ├── Publish Collection as Docs
│       ├── Custom Domain
│       └── Published Docs (public URL)
├── Environments
│   ├── Environment List
│   ├── Environment Detail
│   │   ├── Variables (key-value, initial vs current value)
│   │   ├── Type (default, secret, environment)
│   │   └── Share / Export
│   ├── Globals (cross-environment variables)
│   └── Active Environment Selector (top bar)
├── Flows (Visual API Workflows)
│   ├── Flow Builder (drag-and-drop canvas)
│   ├── Blocks (request, condition, output, delay)
│   ├── Data Connections
│   └── Run Flow
├── History
│   └── Request History (timestamped, searchable)
├── API Network
│   ├── Public API Network (discover APIs)
│   ├── Team API Network (internal APIs)
│   ├── Browse by Category
│   └── API Detail Page (collection, documentation, fork)
├── Postbot (AI Assistant)
│   ├── Generate Tests (from response)
│   ├── Generate Documentation
│   ├── Fix Errors
│   ├── Explain API
│   └── Generate Collection
├── Admin (Team/Enterprise)
│   ├── Team Management
│   │   ├── Members (invite, roles)
│   │   ├── Groups
│   │   └── SSO Configuration
│   ├── Billing
│   ├── Resource Usage
│   ├── API Governance (API linting rules, style guides)
│   ├── Secret Scanner
│   ├── Audit Logs
│   └── Custom Domains
└── Settings (User)
    ├── General (theme, editor settings)
    ├── Shortcuts
    ├── Data (export/import all data)
    ├── Add-ons (Postman Agent for web)
    ├── Certificates (client certificates)
    ├── Proxy
    └── Update Channel (stable/beta)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Expandable tree view | Collections (folder tree), APIs, Environments, Flows, History |
| **Top Bar** | Fixed | Workspace selector, search, environment selector, invite, settings, account |
| **Tab Bar** | Horizontal tabs (browser-like) | Open requests, collections, APIs, documentation — each in a tab |
| **Request Builder** | Main content area | Method + URL bar, tabbed sections (Params, Auth, Headers, Body, Pre-request, Tests) |
| **Response Panel** | Below request builder | Body, Headers, Cookies, Test Results — collapsible |
| **Environment Switcher** | Top-right dropdown | Switch active environment (development, staging, production) |
| **Collection Runner** | Slide-out panel or modal | Configure and run entire collection |
| **Footer Bar** | Bottom of app | Console, Postman Agent status, sync status, find/replace |

### Sidebar Structure
```
[Workspace Selector ▾]
───────────────
📁 Collections
  └── My API
      ├── 📂 Users
      │   ├── GET List Users
      │   ├── POST Create User
      │   └── GET Get User by ID
      └── 📂 Products
          └── ...
📡 APIs
🌍 Environments
🔀 Flows
🕐 History
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, type (personal/team/public), description, members[] | has Collections, APIs, Environments, Flows |
| Collection | name, description, auth{}, variables[], scripts{} | has Folders, Requests, belongs to Workspace |
| Folder | name, description, auth (inherited/custom), scripts{} | belongs to Collection, has Requests |
| Request | name, method, url, headers[], body{}, auth{}, pre_request_script, test_script | belongs to Folder/Collection |
| Example | name, request, response (saved) | belongs to Request |
| Environment | name, values[{key, value, type}], isPublic | belongs to Workspace |
| Variable | key, initial_value, current_value, type (default/secret) | belongs to Environment/Collection/Globals |
| API | name, schema (OpenAPI/GraphQL/etc.), versions[], linked_collections[], linked_docs[] | belongs to Workspace |
| MockServer | name, collection, url, config | belongs to Workspace |
| Monitor | name, collection, environment, schedule (cron), regions[], results[] | belongs to Workspace |
| Flow | name, blocks[], connections[], trigger | belongs to Workspace |

### Variable Scoping (precedence high → low)
```
Local (set via script) → Data (CSV/JSON file) → Environment → Collection → Global
```

### Auth Inheritance
```
Collection Auth → Folder Auth → Request Auth
(each level can inherit from parent or override)
```

## User Flows



### Build and Test API Request
```
New Tab → Select Method (POST) → Enter URL → Add Body (JSON) → Set Auth (Bearer token from env var) → Send → View Response → Write Test Assertions → Save to Collection
```

### Run Automated Tests
```
Collection → Run Collection → Select Environment → Set Iterations → Attach Data File → Run → View Results (pass/fail per request) → Export results → Integrate with CI (Newman CLI)
```

### Design API Schema-First
```
APIs → Create API → Write OpenAPI spec → Validate → Generate Collection from Schema → Add Examples → Publish Documentation → Share Mock Server URL
```

### Switch Between Environments
```
Create Environments (dev: localhost:3000, staging: api.staging.example.com, prod: api.example.com) → Set {{base_url}} variable → Select environment from dropdown → All requests use active environment's variables
```

### Collaborate on APIs
```
Team Workspace → Import OpenAPI spec → Generate Collection → Fork Collection (for personal experiments) → Make changes → Create Pull Request → Team reviews → Merge → Collection updated for all
```

### Monitor API Uptime
```
Collection → Create Monitor → Set schedule (every 5 min) → Select regions → Enable alerts → View results over time → Get notified on failures
```


## URL / Route Structure

```
/                                      → Home
/workspace/:workspaceId                → Workspace overview
/workspace/:workspaceId/collection/:id → Collection
/workspace/:workspaceId/request/:id    → Request (opens in tab)
/workspace/:workspaceId/api/:id        → API definition
/workspace/:workspaceId/environment/:id → Environment
/workspace/:workspaceId/flow/:id       → Flow builder
/workspace/:workspaceId/monitor/:id    → Monitor detail
/workspace/:workspaceId/mock/:id       → Mock server
/workspace/:workspaceId/history        → Request history
/workspace/:workspaceId/documentation  → Collection docs
/explore                               → Public API Network
/explore/:slug                         → Public API detail
/admin                                 → Team admin
/admin/team                            → Team members
/admin/billing                         → Billing
/admin/audit-logs                      → Audit logs
/settings                              → User settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Global (⌘K) | Collections, requests, APIs, environments, docs, team members | Workspace, Type | Relevance, Recent |
| Sidebar | Collection names, request names, folder names | — | Alphabetical, Custom Order |
| API Network | API names, descriptions, categories | Category, Authentication Type, Provider | Relevance, Watchers, Forks |
| History | Request URL, method, response code | Method, Status Code, Date Range | Timestamp |
| Collection Runner | Request names | Pass/Fail status | Execution Order |

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop app (primary) | Full IDE-like layout: sidebar + tabs + request builder + response panel |
| Web app (>=1024px) | Same as desktop, requires Postman Agent for local requests |
| Tablet (768-1023px) | Simplified, limited concurrent tabs |
| Mobile (<768px) | Not supported — Postman is a desktop-first tool |

### Postman-Specific UX
- **Tab-based interface** (like VS Code/browser — multiple requests open simultaneously)
- **Two-pane request/response** layout (horizontal split)
- **Variable highlighting**: `{{variable_name}}` in orange, hover to see resolved value
- **Environment badge**: colored dot next to environment name
- **Console** (bottom panel): raw HTTP request/response, useful for debugging
- **Collection Runner** with iteration support and data-driven testing
- **Code generation**: click "Code" to get snippet in any language (cURL, Python, JavaScript, Go, etc.)
- **Fork & Pull Request** workflow for collections (like git for APIs)
- **Postbot AI**: generate tests, documentation, and queries from natural language
- **Dark mode** available

## Access Control

| Role | View | Edit Collections | Run | Manage APIs | Mock Servers | Admin |
|------|------|-----------------|-----|-------------|-------------|-------|
| Viewer | ✅ | — | ✅ (own fork) | View | — | — |
| Editor | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### Workspace Visibility
- **Personal**: only you
- **Team**: all team members (with role-based access)
- **Private Team**: specific members only
- **Public**: discoverable on API Network, forkable by anyone
- **Partner**: shared with external collaborators
