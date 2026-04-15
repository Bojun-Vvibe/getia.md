---
brand: Amplitude
tagline: The Digital Analytics Platform
category: Business SaaS
website: https://amplitude.com
---

# Information Architecture — Amplitude

## Overview

Amplitude is a product analytics platform designed to help teams understand user behavior. The IA is organized around analysis workspaces: Charts (event segmentation, funnels, retention, revenue), Cohorts (behavioral user groups), and Notebooks (collaborative analysis docs). The data model is event-centric — every user interaction is an event with properties — and the platform enables deep behavioral analysis without SQL.

## Site Map

```
amplitude.com
├── Home
│   ├── Recent Charts
│   ├── Pinned Items
│   ├── Team Activity
│   └── Spaces (organized collections)
├── Analytics
│   ├── Event Segmentation (chart builder)
│   ├── Funnel Analysis
│   ├── Retention Analysis
│   ├── Revenue Analysis (LTV)
│   ├── User Sessions
│   ├── Pathfinder (user journeys)
│   ├── Impact Analysis (causal)
│   └── Compass (correlation)
├── Cohorts
│   ├── Behavioral Cohorts (event-based)
│   ├── Predictive Cohorts (ML)
│   └── Synced Cohorts (to destinations)
├── User Look-Up
│   ├── User Profile
│   ├── Event Stream
│   └── Properties
├── Data
│   ├── Sources (SDKs, Segment, etc.)
│   ├── Events (taxonomy)
│   ├── Properties (event, user, group)
│   ├── Transformations
│   ├── Destinations (sync cohorts out)
│   └── Governance (naming, blocking)
├── Experiments (A/B Testing)
│   ├── Experiment Builder
│   ├── Feature Flags
│   ├── Results & Statistical Analysis
│   └── Mutual Exclusion Groups
├── Notebooks
│   ├── Collaborative Analysis Documents
│   └── Embedded Charts
├── Dashboards
│   ├── Dashboard Builder
│   ├── Widgets (charts, metrics, text)
│   └── Scheduled Reports
├── Spaces (Team Organization)
│   └── [Space] → Charts, Cohorts, Dashboards, Notebooks
├── Settings
│   ├── Organization
│   ├── Projects
│   ├── Team Members
│   ├── Data Governance
│   └── Integrations
└── Marketing Site
    ├── Platform
    ├── Solutions
    ├── Pricing
    └── Resources
├── Feature Flags
│   ├── Flag List
│   ├── Flag Detail (variants, targeting)
│   └── Rollout History
├── Audiences
│   ├── Audience Builder
│   └── Synced Audiences
```

## Navigation Model

- **Left sidebar:** Home, Analytics (chart types), Cohorts, User Look-Up, Data, Experiments, Notebooks, Dashboards, Spaces
- **Chart builder:** Select chart type → Choose events → Add segments (cohorts/properties) → Set date range → Visualize → Save to Space/Dashboard
- **User Look-Up:** Search → User profile with full event timeline, properties, cohort memberships
- **Spaces:** Team-organized collections of charts, dashboards, and notebooks for easy discovery

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | name, data sources, taxonomy | → Events, Properties, Charts |
| Event | name, properties, volume, first/last seen | → User actions, Charts |
| Event Property | name, type, values | → Events |
| User Property | name, type, values | → Users |
| User | user_id, device_id, properties, event history | → Cohorts, Events |
| Chart | type (segmentation/funnel/retention/etc.), query, visualization | → Events, Cohorts, Dashboard |
| Cohort | name, definition (behavioral conditions), size, synced destinations | → Users, Charts |
| Dashboard | name, widgets (charts, metrics), layout | → Charts |
| Notebook | title, content blocks, embedded charts | → Charts, Space |
| Experiment | name, variants, metrics, allocation, status | → Feature Flag, Results |
| Feature Flag | key, variants, rollout percentage | → Experiment |
| Space | name, members, contents | → Charts, Dashboards, Notebooks, Cohorts |
| Group | group_type, group_name, properties | → Users, Events |
| Data Source | type (SDK/integration), status, last_seen | → Project |
| Destination | type (Braze/Iterable/etc.), synced_cohorts | → Cohorts |

## User Flows

### Analyze Feature Usage
```
Analytics → Event Segmentation → Select event (e.g., "Button Clicked") → Segment by property (e.g., platform) → Set date range → View trend → Save to Dashboard
```

### Build a Conversion Funnel
```
Analytics → Funnel Analysis → Add steps (e.g., "Sign Up" → "Complete Onboarding" → "First Purchase") → Segment by cohort → View conversion rates and drop-off → Identify bottleneck
```

### Create a Behavioral Cohort
```
Cohorts → + New → Define: "Users who performed 'Add to Cart' 3+ times in last 7 days AND did NOT perform 'Purchase'" → Save → Use in charts or sync to marketing tool
```

### Run an A/B Test
```
Experiments → + New → Define variants → Set primary metric → Allocate traffic → Launch → Monitor results → Reach statistical significance → Ship winner
```

### Investigate Retention Drop
```
Home → Retention Analysis → Select retention event (e.g., 'Session Start') → Set cohort (new users this month) → View retention curve → Compare to previous period → Identify drop-off day → Drill into cohort properties → Create segment of churned users
                                                                                                                                                                            ↘ Sync churned cohort to email tool for re-engagement
```

### Set Up Data Source
```
Data → Sources → + Add Source → Select SDK (JavaScript, iOS, Android) → Copy API key → Install SDK → Instrument events → Verify in live debugger → Events appear in taxonomy
```
## URL / Route Structure

```
app.amplitude.com/{org}/home                          # Home
app.amplitude.com/{org}/chart/{chart_id}               # Chart (any type)
app.amplitude.com/{org}/chart/new?chartType=segmentation  # New chart
app.amplitude.com/{org}/cohort/{cohort_id}             # Cohort
app.amplitude.com/{org}/dashboard/{dash_id}            # Dashboard
app.amplitude.com/{org}/notebook/{id}                  # Notebook
app.amplitude.com/{org}/user-lookup/{user_id}          # User profile
app.amplitude.com/{org}/data/events                    # Data taxonomy
app.amplitude.com/{org}/experiment/{id}                # Experiment
app.amplitude.com/{org}/space/{space_id}               # Space
app.amplitude.com/{org}/chart/new?chartType=funnel        # New funnel
app.amplitude.com/{org}/chart/new?chartType=retention      # New retention
app.amplitude.com/{org}/chart/new?chartType=revenue        # New revenue chart
app.amplitude.com/{org}/chart/new?chartType=pathfinder     # New pathfinder
app.amplitude.com/{org}/cohort/new                        # New cohort
app.amplitude.com/{org}/data/user-properties               # User properties
app.amplitude.com/{org}/data/group-properties              # Group properties
app.amplitude.com/{org}/data/sources                      # Data sources
app.amplitude.com/{org}/data/destinations                 # Destinations
app.amplitude.com/{org}/data/transformations              # Data transformations
app.amplitude.com/{org}/data/governance                   # Governance
app.amplitude.com/{org}/experiment/new                    # New experiment
app.amplitude.com/{org}/feature-flags                     # Feature flags
app.amplitude.com/{org}/settings/organization             # Org settings
app.amplitude.com/{org}/settings/projects                 # Project settings
app.amplitude.com/{org}/settings/members                  # Team members
app.amplitude.com/{org}/settings/integrations             # Integrations
```

## Search & Filter

- **Global search:** Find charts, cohorts, dashboards, notebooks, events, and users by keyword
- **Event search (Data):** Search event names, filter by volume, first/last seen, status (live/blocked/hidden)
- **User Look-Up:** Search by user_id, device_id, or user property value
- **Chart filters:** Segment by any event/user property, cohort, date range; WHERE clauses for granular filtering
- **Cohort conditions:** Multi-condition builder with event counts, property values, time windows, AND/OR logic

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full chart builder with sidebar, visualization, and configuration panels |
| Tablet | Dashboard viewing functional; chart building requires desktop |
| Mobile | Dashboard viewing only; no chart editing; Amplitude is desktop-first |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads
- Amplitude's Recommend feature suggests experiments based on behavioral analysis

## Access Control

| Role | Capabilities |
|------|-------------|
| Organization Admin | Manage projects, members, billing, SSO, governance |
| Project Admin | Manage project settings, data governance, integrations |
| Manager | Create/edit/delete charts, cohorts, dashboards, experiments |
| Member | Create/edit own charts, view shared content, create cohorts |
| Viewer | View charts, dashboards, user profiles; cannot create or modify |
| Space-level permissions | Control who can view/edit content within a specific Space |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance