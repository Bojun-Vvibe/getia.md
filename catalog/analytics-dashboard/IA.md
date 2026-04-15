# Analytics Dashboard — Information Architecture

## Overview

A product/business analytics platform (Mixpanel, Amplitude, Google Analytics, Plausible style). The mental model is **data exploration** — users define questions, build queries, and visualize answers as charts and dashboards. The core loop is ask → query → visualize → share → act.

## Site Map

```
├── Home / Overview
│   ├── Key Metrics Summary (KPIs)
│   ├── Active Users (real-time)
│   ├── Quick Links to Saved Reports
│   └── Team Activity
├── Dashboards
│   ├── Dashboard List (my / shared / templates)
│   ├── Dashboard View
│   │   ├── Grid of Widgets (drag & arrange)
│   │   ├── Widget Types
│   │   │   ├── Line Chart
│   │   │   ├── Bar Chart
│   │   │   ├── Pie / Donut Chart
│   │   │   ├── Metric / Number Card
│   │   │   ├── Table
│   │   │   ├── Funnel
│   │   │   ├── Map
│   │   │   └── Text / Markdown
│   │   ├── Date Range Selector (global)
│   │   ├── Global Filters
│   │   └── Auto-refresh Toggle
│   ├── Create Dashboard
│   └── Dashboard Settings (sharing, schedule email)
├── Reports / Analysis
│   ├── Events (event analytics)
│   │   ├── Event Explorer (pick event → chart over time)
│   │   ├── Event Properties Breakdown
│   │   └── Compare Events
│   ├── Funnels
│   │   ├── Funnel Builder (define steps)
│   │   ├── Conversion Rate by Step
│   │   ├── Drop-off Analysis
│   │   └── Breakdown by Property
│   ├── Retention
│   │   ├── Retention Table (cohort grid)
│   │   ├── Retention Curve
│   │   └── Breakdown
│   ├── Flows / Paths
│   │   ├── User Paths (Sankey diagram)
│   │   ├── Path from / Path to
│   │   └── Top Paths
│   ├── Cohorts
│   │   ├── Cohort Builder (define criteria)
│   │   ├── Cohort List
│   │   └── Cohort Detail (users, overlap)
│   ├── User Segments
│   └── Custom Reports
│       ├── Query Builder (drag & drop)
│       ├── SQL Mode (optional)
│       └── Saved Reports
├── Users / Profiles
│   ├── User List (searchable, filterable)
│   ├── User Profile
│   │   ├── Properties (attributes)
│   │   ├── Event Timeline (activity stream)
│   │   ├── Sessions
│   │   ├── Cohort Memberships
│   │   └── Revenue
│   └── User Lookup (by ID, email)
├── Real-time
│   ├── Live Event Stream
│   ├── Active Users Now
│   ├── Live Dashboard
│   └── Geographic Map (live)
├── Data Management
│   ├── Events (schema: name, properties, volume)
│   ├── User Properties (schema)
│   ├── Data Governance (hide, merge, drop events)
│   ├── Integrations / Sources
│   │   ├── SDKs (web, iOS, Android)
│   │   ├── Server-side APIs
│   │   ├── Third-party Connectors
│   │   └── Import (CSV, warehouse)
│   └── Data Export
│       ├── Raw Data Export
│       ├── Warehouse Sync
│       └── API
├── Alerts
│   ├── Alert Rules (metric exceeds threshold)
│   ├── Alert History
│   └── Create Alert
├── Settings
│   ├── Project Settings (timezone, currency)
│   ├── Team Members & Roles
│   ├── API Keys & Tokens
│   ├── Privacy (data retention, GDPR)
│   ├── SSO / Security
│   └── Billing / Usage
└── Help / Documentation
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible | Home, Dashboards, Reports (expandable: Events/Funnels/Retention/...), Users, Real-time, Data, Alerts, Settings |
| **Top Bar** | Fixed | Project switcher, search, date range picker (global), notifications, user menu |
| **Report Builder** | Full-page interactive | Event/metric picker → chart → breakdown → filter → segment |
| **Dashboard Grid** | Drag-and-drop layout | Resize, rearrange, add/remove widgets |
| **Date Range Picker** | Global (top bar) + per-widget override | Presets (7D, 30D, 90D, custom) + compare to previous period |

### Sidebar Structure
```
[Project Switcher ▾]
─────────────
🏠 Home
📊 Dashboards
─────────────
📈 Events
🔻 Funnels
🔄 Retention
🌊 Flows
👥 Cohorts
📋 Custom Reports
─────────────
👤 Users
⚡ Real-time
─────────────
🗄 Data Management
🔔 Alerts
⚙️ Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | name, timezone, currency, data_retention | has Events, Users, Dashboards |
| Event | name, properties_schema{}, volume, first_seen, last_seen | belongs to Project |
| UserProfile | distinct_id, properties{}, first_seen, last_event | belongs to Project, has many Events |
| Dashboard | name, owner, shared, widgets[], filters[] | belongs to Project |
| Widget | type, query{}, position, size, title | belongs to Dashboard |
| Report | name, type (funnel/retention/event/flow/custom), query{}, saved_at | belongs to Project |
| Funnel | steps[], conversion_window, breakdown | type of Report |
| Cohort | name, criteria[], user_count, created_at | belongs to Project |
| Alert | name, metric, condition, threshold, channels[], enabled | belongs to Project |
| Integration | source_name, type (SDK/API/connector), status, events_count | belongs to Project |

### Chart Types
```
line | bar | stacked_bar | pie | donut | number_card | table |
funnel | retention_table | retention_curve | sankey | heatmap | map
```

### Query Model
```
{
  event: "purchase",
  measure: "count" | "uniques" | "sum(revenue)" | "avg(value)",
  time_range: { from, to },
  interval: "hour" | "day" | "week" | "month",
  filters: [{ property, operator, value }],
  breakdown: { property, limit },
  compare: "previous_period" | "same_period_last_year"
}
```

## User Flows

### Explore a Metric
```
Events → Select Event (e.g., "Sign Up") → Chart (over time) → Breakdown by Property (e.g., country) → Filter → Save as Report
```

### Build Funnel
```
Funnels → Add Steps (Sign Up → Add to Cart → Purchase) → Set Window → View Conversion → Breakdown by Segment → Save
```

### Analyze Retention
```
Retention → Select Start Event → Select Return Event → Set Period (Day/Week/Month) → View Cohort Table → Compare Segments
```

### Build Dashboard
```
Dashboards → Create New → Add Widgets → Configure Each (select saved report or build inline) → Arrange Layout → Share with Team
```

### Set Up Alert
```
Alerts → Create Alert → Select Metric (e.g., daily signups) → Set Condition (drops below 100) → Set Channel (Slack/email) → Enable
```

### Investigate User
```
Users → Search by email → User Profile → View Event Timeline → See Sessions → Identify Issues
```

## URL / Route Structure

```
/                              → Home / Overview
/dashboards                    → Dashboard list
/dashboards/:id                → Dashboard view
/dashboards/:id/edit           → Dashboard edit mode
/events                        → Event analytics
/events/:eventName             → Specific event detail
/funnels                       → Funnel list
/funnels/new                   → Funnel builder
/funnels/:id                   → Saved funnel
/retention                     → Retention analysis
/flows                         → Path analysis
/cohorts                       → Cohort list
/cohorts/:id                   → Cohort detail
/reports                       → Saved reports
/reports/:id                   → Report view
/users                         → User list
/users/:id                     → User profile
/realtime                      → Real-time view
/data                          → Data management
/data/events                   → Event schema
/data/properties               → Property schema
/data/integrations             → Integrations
/alerts                        → Alerts
/alerts/:id                    → Alert detail
/settings                      → Project settings
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Global | Events, reports, dashboards, users | Type (dashboard/report/event) | Relevance, Recent |
| Event Explorer | Event names, property values | Event properties (any), user properties, date range | Count, Uniques |
| User List | Email, user ID, name | Any user property, cohort membership, last active | Last Active, First Seen, Events Count |
| Dashboards | Dashboard name | Owner, Shared Status | Last Modified, Name |

### Filter Operators
```
is | is not | contains | does not contain | is set | is not set |
> | < | >= | <= | between | in last N days | before | after
```

## Responsive Behavior

| Breakpoint | Sidebar | Dashboard | Reports |
|------------|---------|-----------|---------|
| Desktop (≥1280px) | Expanded | Multi-column widget grid | Full interactive charts |
| Tablet (768–1279px) | Collapsed (icons) | Single-column widgets | Charts simplified |
| Mobile (<768px) | Hamburger | Single-column, widgets stacked | Simplified charts, tables scroll |

### Data Visualization Notes
- Charts must be readable at various sizes
- Hover tooltips for exact values
- Click-through: chart segment → filtered detail view
- Export chart as PNG/PDF
- Dashboard → scheduled email (PDF attachment)

## Access Control

| Role | View Dashboards | Create Reports | Manage Data | Users | Settings |
|------|----------------|---------------|-------------|-------|----------|
| Viewer | ✅ (shared) | — | — | — | — |
| Analyst | ✅ | ✅ | View schema | View | — |
| Manager | ✅ | ✅ | View schema | View | — |
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ |
| Owner | ✅ | ✅ | ✅ | ✅ | ✅ (billing, delete) |

### Data Access Controls
- Property-level visibility (hide PII)
- Row-level access (see only own team's data)
- Data retention policies (auto-delete after N days)
- GDPR: user deletion, data export on request
- Audit log for data access
