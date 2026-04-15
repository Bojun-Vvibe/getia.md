---
brand: Mixpanel
tagline: Powerful, self-serve product analytics
category: Business SaaS
website: https://mixpanel.com
---

# Information Architecture — Mixpanel

## Overview

Mixpanel is an event-based product analytics platform focused on helping teams measure what people do inside their product. The IA is built around three core report types — Insights (trends), Funnels (conversion), and Flows (user paths) — plus Retention and advanced analysis. Unlike page-view analytics, Mixpanel tracks custom events and properties, enabling teams to ask "Who did what, and why?" rather than "How many page views?"

## Site Map

```
mixpanel.com
├── Home (Overview Dashboard)
│   ├── Key Metrics Summary
│   ├── Recent Reports
│   └── Bookmarks
├── Reports
│   ├── Insights (Trends & Segmentation)
│   ├── Funnels (Conversion Analysis)
│   ├── Flows (User Path Analysis)
│   ├── Retention (Cohort Retention)
│   └── Custom Reports
├── Users
│   ├── User Profiles
│   ├── Cohorts (behavioral segments)
│   └── User Look-Up (event stream)
├── Boards (Dashboards)
│   ├── Personal Boards
│   ├── Team Boards
│   └── Board Builder (drag-and-drop layout)
├── Alerts
│   ├── Custom Alerts (threshold-based)
│   └── Anomaly Detection (automatic)
├── Data Management
│   ├── Lexicon (event/property dictionary)
│   ├── Data Views (filtered event subsets)
│   ├── Lookup Tables
│   ├── Custom Properties (computed)
│   └── Data Pipelines (export)
├── Settings
│   ├── Organization
│   ├── Projects
│   ├── Team Members
│   ├── Service Accounts
│   └── Data Governance
└── Marketing Site
    ├── Product
    ├── Solutions
    ├── Pricing
    └── Templates (pre-built reports)
```

## Navigation Model

- **Left sidebar:** Home, Reports (Insights, Funnels, Flows, Retention), Users, Boards, Data Management
- **Report builder:** Select report type → Choose events → Add breakdowns (properties) → Set date range → Visualize (line, bar, table, pie)
- **Boards:** Grid layout of report cards; click card to open full report
- **User Look-Up:** Search user → Profile page with properties, event timeline, cohort memberships
- **Top bar:** Project switcher, global search, bookmarks, alerts, user menu

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | name, token, timezone, data retention | → Events, Properties, Reports |
| Event | name, properties, volume, first/last seen | → Users, Reports |
| Property | name, type (event/user/group/lookup), data type | → Events, Users |
| User (Profile) | distinct_id, user properties, event history | → Cohorts, Events |
| Cohort | name, definition (behavioral/demographic), size | → Users, Reports (segment by) |
| Report | type (insight/funnel/flow/retention), query, visualization, board | → Events, Properties, Cohorts |
| Board | name, cards (reports), layout | → Reports |
| Alert | name, metric, threshold/anomaly, notification channel | → Report metric |
| Lexicon Entry | event/property, description, tags, visibility (visible/hidden/dropped) | → Data governance |
| Data View | name, filtered event subset | → Reports |

## User Flows


### Analyze Event Trends
```
Reports → Insights → Select event (e.g., "Song Played") → Breakdown by property (e.g., "Genre") → Set to Last 30 Days → Line chart → Compare to previous period → Save to Board
```

### Measure Conversion
```
Reports → Funnels → Add steps (e.g., "Search" → "View Item" → "Add to Cart" → "Purchase") → View conversion rates → Breakdown by user property (e.g., "Plan Type") → Identify drop-off
```

### Explore User Paths
```
Reports → Flows → Set starting event → View top paths users take → Click a path branch to drill down → Identify unexpected navigation patterns
```

### Set Up an Alert
```
Alerts → + New → Select metric (e.g., "Daily Active Users") → Set threshold (e.g., "drops below 1000") → Choose notification (email/Slack) → Save
```

## URL / Route Structure

```
mixpanel.com/project/{project_id}/view/home          # Home
mixpanel.com/project/{project_id}/view/insights       # Insights report
mixpanel.com/project/{project_id}/view/funnels        # Funnels report
mixpanel.com/project/{project_id}/view/flows          # Flows report
mixpanel.com/project/{project_id}/view/retention      # Retention report
mixpanel.com/project/{project_id}/view/users          # Users / Cohorts
mixpanel.com/project/{project_id}/view/boards/{id}    # Board
mixpanel.com/project/{project_id}/view/user/{id}      # User profile
mixpanel.com/project/{project_id}/data-management     # Lexicon
mixpanel.com/project/{project_id}/view/cohorts                  # Cohorts
mixpanel.com/project/{project_id}/view/boards                   # All boards
mixpanel.com/project/{project_id}/view/alerts                   # Alerts
mixpanel.com/project/{project_id}/data-management/lexicon       # Lexicon
mixpanel.com/project/{project_id}/data-management/data-views    # Data views
mixpanel.com/project/{project_id}/data-management/lookup-tables # Lookup tables
mixpanel.com/project/{project_id}/settings                      # Project settings
mixpanel.com/settings/org/{org_id}/members                      # Members
mixpanel.com/settings/org/{org_id}/billing                      # Billing
mixpanel.com/settings/org/{org_id}/security                     # Security
mixpanel.com/report-templates                                   # Template gallery
```

## Search & Filter

- **Global search:** Find reports, boards, events, properties, cohorts by name
- **Lexicon search:** Search/filter events and properties; manage visibility (show/hide/drop)
- **Report filtering:** Filter by any event/user property with operators (equals, contains, greater than, etc.); AND/OR conditions
- **Cohort builder:** Multi-condition behavioral + demographic filters
- **User search:** Look up by distinct_id or user property
- **Date range:** Relative (last N days) or absolute; comparison to previous period

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full report builder with sidebar, chart, and breakdown panels |
| Tablet | Board viewing works; report building is cramped but functional |
| Mobile | View boards and reports (read-only); no report creation; dashboard-optimized |

## Access Control

| Role | Capabilities |
|------|-------------|
| Organization Owner | Billing, all projects, member management |
| Organization Admin | Manage members, project settings |
| Project Owner | Full project control, data governance |
| Project Admin | Manage project settings, data views |
| Analyst | Create/edit reports, cohorts, boards |
| Consumer | View reports and boards, cannot create or modify |
| Service Account | API access with scoped permissions |

## Report Types Deep Dive

| Report | Question It Answers | Visualization |
|--------|-------------------|---------------|
| Insights | How many times did X happen? How is it trending? | Line, bar, stacked bar, pie, table |
| Funnels | What % of users complete steps A → B → C? | Funnel bar chart, conversion table |
| Flows | What paths do users take after/before event X? | Sankey-style flow diagram |
| Retention | Do users come back? How often? | Retention curve, cohort table |
| Impact | Did feature X cause metric Y to change? | Causal impact chart |

## Data Governance

- **Lexicon:** Central dictionary of all events and properties with descriptions, tags, and visibility controls
- **Data Views:** Filtered subsets of events to create role-specific analytics scopes
- **Custom Properties:** Computed properties using formulas on existing event/user data
- **Lookup Tables:** Enrich event properties with external reference data (e.g., product catalog)
- **Data Pipelines:** Export raw event data to data warehouse (BigQuery, Snowflake, S3)
- **Group Analytics:** Analyze by company/account (B2B) rather than individual user

## SDK Integration

| Platform | Method |
|----------|--------|
| JavaScript | `mixpanel.track('Purchase', {amount: 50, plan: 'pro'})` |
| iOS (Swift) | `Mixpanel.mainInstance().track(event: "Purchase")` |
| Android | `mixpanel.track("Purchase", props)` |
| Python | `mp.track(distinct_id, 'Purchase', {'amount': 50})` |
| React Native | `Mixpanel.track('Purchase', {amount: 50})` |
| Server-side | HTTP API with JSON payload |
| Import | CSV, warehouse (BigQuery, Snowflake, Redshift) |

## Identity Resolution

- **Distinct ID:** Primary user identifier
- **Alias:** Link anonymous ID to known user on signup/login
- **Merge:** Combine multiple distinct IDs for the same person
- **Group Analytics:** Associate users with companies (B2B account-level analysis)
- **Cross-platform:** Merge mobile and web identities

## Event Schema Best Practices

```
// Event naming convention
"Page Viewed" — passive, past tense
"Button Clicked" — user action, past tense
"Purchase Completed" — completion state

// Property naming convention
snake_case: item_name, total_price, user_plan
Descriptive: "Cart Size" not "cs"
Typed: number for amounts, string for categories
```

## Comparison with Alternatives

| Feature | Mixpanel | Amplitude | GA4 |
|---------|----------|-----------|-----|
| Primary model | Event-based | Event-based | Session-based |
| User profiles | ✅ | ✅ | Limited |
| Funnels | ✅ (flexible) | ✅ | Basic |
| Flows/Paths | ✅ | ✅ | ✅ |
| Real-time | ✅ | ✅ | Delayed |
| Data warehouse export | ✅ | ✅ | BigQuery |
| Free tier | 20M events/mo | 10M events/mo | Unlimited |
