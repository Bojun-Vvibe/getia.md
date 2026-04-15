---
brand: Retool
tagline: Build internal tools, remarkably fast.
category: Developer Tools
website: https://retool.com
---

# Retool — Information Architecture

## Overview

Retool is a low-code platform for building internal tools — admin panels, dashboards, CRUD apps, and workflow automation. The IA is organized around a **drag-and-drop builder with query-first data architecture** — the centerpiece is a visual editor where developers drag UI components (tables, forms, charts, buttons) onto a canvas and connect them to data queries (SQL, REST APIs, GraphQL, Firebase, Stripe, etc.). The key insight shaping the IA is that internal tools follow predictable patterns: fetch data → display in table → allow editing → execute action. Retool abstracts away frontend boilerplate while giving developers full control over the data layer. The platform supports web apps, mobile apps (Retool Mobile), workflows (backend automation), and embedded apps.

## Site Map

```
{org}.retool.com
├── / (App list — home page)
├── /apps (Application list)
│   ├── /new (Create new app)
│   └── /{app_id}/edit (App builder — drag-and-drop editor)
│       ├── Canvas (component layout)
│       ├── Query editor (bottom panel)
│       ├── Component inspector (right panel)
│       └── State inspector (left panel — app data)
├── /apps/{app_id} (App in presentation mode — end-user view)
├── /workflows (Workflow list)
│   ├── /new
│   └── /{workflow_id}/edit (Visual workflow builder)
├── /resources (Data source connections)
│   └── /{resource_id} (Resource config)
├── /mobile (Retool Mobile apps)
│   └── /{mobile_app_id}/edit
├── /folders (App organization)
│   └── /{folder_id}
├── /modules (Reusable component modules)
│   └── /{module_id}/edit
├── /settings
│   ├── /general
│   ├── /members
│   ├── /groups (Permission groups)
│   ├── /sso
│   ├── /audit-log
│   ├── /branding (White-label — Enterprise)
│   └── /billing
├── /source-control (Git sync settings)
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Apps (list), Workflows, Resources, Settings
- **Builder navigation**: Three-panel layout — Left (component tree + state inspector), Center (canvas + query editor), Right (component properties inspector)
- **Query editor**: Bottom panel in builder — tabbed queries connected to different data sources
- **Component panel**: Drag components from a categorized panel — Tables, Forms, Charts, Inputs, Display, Layout, Navigation
- **App folder navigation**: Folder tree for organizing apps; starred apps for quick access
- **Page navigation**: Within an app — multiple pages connected via navigation components
- **Utility navigation**: Top bar — app name, version history, share, preview, deploy
- **Mobile**: End-user apps are responsive; the builder requires desktop

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| App | Name, pages, components, queries, event handlers, JS/CSS, version history | Org-owned |
| Component | Type (Table, Form, TextInput, Button, Chart, etc.), properties, event handlers, data bindings | Part of app |
| Query | Type (SQL, REST API, GraphQL, JS transformer), data source, configuration, caching | Part of app |
| Resource | Data source connection — type, host, credentials, SSL config | Org-level |
| Workflow | Trigger (webhook, schedule, app button), steps (query, transform, condition, loop), execution history | Org-owned |
| Module | Reusable component group with defined inputs/outputs, shareable across apps | Org-level |
| Folder | Named container for organizing apps | Org-level |
| Version | App snapshot at a point in time, deployable, rollbackable | Part of app |

## User Flows

### Building a CRUD App
```
Developer creates new app → blank canvas opens → Creates Resource: connects to PostgreSQL database (host, credentials) → Adds a SQL query: `SELECT * FROM users WHERE active = true` → Drags Table component onto canvas → binds `data` property to query results → Enables inline editing on table → adds "Save Changes" button → Button triggers an update query: `UPDATE users SET name = {{table1.changesetObject.name}} WHERE id = {{table1.selectedRow.id}}` → Adds Form component for creating new users → connected to INSERT query → Deploys app → shares URL with team
```

### Connecting to Data Sources
```
Admin navigates to Resources → "Create New" → Selects resource type from 60+ integrations (PostgreSQL, MySQL, MongoDB, REST API, Stripe, Snowflake, etc.) → Enters connection details (host, port, credentials, SSL) → Tests connection → saves → Resource available to all apps in the organization → Permissions: restrict which groups can use which resources
```

### Workflow Automation
```
Developer creates Workflow → selects trigger (schedule: every hour, or webhook) → Adds steps: Query (fetch data) → JS Transform (process) → Condition (if/else) → Query (write result) → Each step can use different data sources → Tests workflow with sample data → Deploys → workflow runs automatically on trigger → Monitors execution history for failures
```

### Version Control & Deployment
```
Developer edits app in edit mode → changes are auto-saved as draft → Clicks "Deploy" → creates a new version (snapshot) → End-users see the deployed version (not the draft) → Can roll back to any previous version → Git sync: optionally sync app JSON to GitHub for version control
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `{org}.retool.com/` | App list (home) |
| `{org}.retool.com/apps/{uuid}/edit` | App builder |
| `{org}.retool.com/apps/{uuid}` | App in presentation mode |
| `{org}.retool.com/workflows/{uuid}/edit` | Workflow builder |
| `{org}.retool.com/resources/{uuid}` | Resource config |
| `{org}.retool.com/mobile/{uuid}/edit` | Mobile app builder |
| `{org}.retool.com/modules/{uuid}/edit` | Module builder |
| `{org}.retool.com/folders/{uuid}` | Folder contents |
| `{org}.retool.com/settings/*` | Organization settings |

Org-scoped subdomain. UUIDs for apps, workflows, and resources. Builder vs. presentation mode distinguished by `/edit` suffix.

## Search & Filter

- **App search**: Search apps by name on home page
- **Component search**: Search available components in builder component panel
- **Resource search**: Filter resources by type (PostgreSQL, REST API, etc.) or name
- **Query results**: Table components support client-side search and column filtering
- **Audit log search**: Filter by user, action, resource, date range
- **No marketplace**: Unlike some low-code platforms, no public app/template marketplace
- **Workflow search**: Search workflows by name

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Builder (Desktop only, >1280px) | Three-panel layout — component tree, canvas, inspector. Full query editor below |
| End-user app (Desktop, >1024px) | App layout as designed — components in arranged positions |
| End-user app (Tablet, 768-1024px) | Components can be configured to reflow or hide on smaller screens |
| End-user app (Mobile, <768px) | Limited — web apps are desktop-first; Retool Mobile is a separate product |

- The builder itself is desktop-only — requires ~1280px minimum for comfortable use
- End-user apps can be made responsive using Retool's layout containers and responsive breakpoints
- Table component has built-in horizontal scroll for many columns
- Retool Mobile is a separate builder optimized for mobile app UIs
- Components can be conditionally shown/hidden based on viewport size

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access (all apps require authentication) |
| End User | Use apps (presentation mode only); no builder access |
| Editor | Build and edit apps, create queries, manage modules |
| Admin | Editor + manage members, resources, settings, billing |
| Custom Groups | Fine-grained permissions per app, resource, and workflow |
| Viewer | View apps but cannot interact with write operations (configurable per app) |

- Authentication: Email/password, Google OAuth, SSO/SAML (Business+), LDAP, OpenID Connect
- App-level permissions: Each app can restrict access to specific groups/users
- Resource permissions: Restrict which groups can use which data sources
- Query-level audit: All queries logged with user, timestamp, parameters (Enterprise)
- Row-level security: Queries can filter data based on `{{ current_user }}` attributes
- Environment variables: Secret values stored as Retool-managed environment variables
- Self-hosted option: Run Retool on your own infrastructure for full data control
- SOC 2 Type II, HIPAA compliant (Enterprise)

## Component Library

| Category | Components |
|----------|-----------|
| Layout | Container, Tabs, Modal, Drawer, Columns, Form |
| Input | Text Input, Number, Date, Select, Multiselect, Checkbox, Radio, Slider, File Upload |
| Display | Table, Text, Stat, JSON Viewer, Image, PDF Viewer, Map, Chart |
| Action | Button, Form, Wizard (multi-step), Link |
| Data | Table (with inline editing, sorting, filtering, pagination), List View, JSON Explorer |
| Charts | Line, Bar, Pie, Scatter, Area (Plotly-based) |
| Advanced | Code Editor, Rich Text Editor, Timer, iFrame, Custom Component |

## Data Source Integrations

| Category | Sources |
|----------|---------|
| Databases | PostgreSQL, MySQL, MongoDB, Redis, Snowflake, BigQuery, DynamoDB, Elasticsearch |
| APIs | REST, GraphQL, gRPC, SOAP |
| SaaS | Stripe, Twilio, SendGrid, Slack, GitHub, Salesforce, HubSpot |
| Cloud | AWS S3, Google Cloud Storage, Azure Blob |
| Auth | LDAP, SAML SSO, Google OAuth, Okta |

## Query Types

| Type | Description |
|------|-------------|
| SQL | Write raw SQL against connected databases |
| REST API | Configure HTTP requests with method, URL, headers, body |
| GraphQL | Write GraphQL queries and mutations |
| JavaScript | Custom logic, data transformation, API orchestration |
| Retool Database | Built-in PostgreSQL database (no external setup needed) |
| Workflow | Multi-step automation triggered by events |

## App Building Flow

```
Create App → Drag Components onto Canvas → Connect Data Source → Write Query → Bind Query Results to Table → Add Event Handlers → Test → Deploy → Share with Team
```

## Permission Model

| Role | Build Apps | View Apps | Manage Resources | Admin |
|------|-----------|-----------|-----------------|-------|
| Admin | ✅ | ✅ | ✅ | ✅ |
| Editor | ✅ | ✅ | Own resources | — |
| User | — | ✅ (assigned apps) | — | — |
| Viewer | — | ✅ (read-only) | — | — |

## Workflows (Automation)

- **Trigger types:** Webhook, cron schedule, manual, resource query
- **Blocks:** Query, JavaScript, conditional, loop, response
- **Error handling:** Try-catch blocks with retry logic
- **Scheduling:** Cron expressions for recurring automation
- **Monitoring:** Execution logs with input/output for each run

## Retool Database

- **Built-in PostgreSQL:** No external database setup needed for simple apps
- **Schema editor:** Visual table creation and column management
- **GUI editor:** Spreadsheet-like data editing directly in Retool
- **API access:** Query Retool Database from external applications
- **Import/Export:** CSV import for bulk data loading
- **Relationships:** Foreign keys and joins between tables
- **Permissions:** Row-level security policies

## Mobile Apps

- **Retool Mobile:** Build native iOS/Android apps with the same drag-and-drop builder
- **Native components:** Camera, barcode scanner, GPS, push notifications
- **Offline support:** Cache data and queue writes when offline
- **App Store distribution:** Wrap in Retool Mobile container or build standalone
