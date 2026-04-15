---
brand: Sentry
tagline: "Application monitoring for every developer. Error tracking, performance monitoring, and session replay."
category: Monitoring
website: https://sentry.io
---

# Sentry — Information Architecture

## Overview

Sentry is a developer-first application monitoring platform focused on **error tracking and performance monitoring**. The mental model is **issues, not just errors** — Sentry groups individual error events into deduplicated issues, assigns them to owners, and tracks their lifecycle from first occurrence to resolution. Sentry differentiates through deep stack trace analysis, source map support, release tracking (which deploy introduced the bug), session replay (watch what the user did), and tight integration with developer workflows (GitHub issues, Slack, Jira). The platform works across web, mobile, and backend.

## Site Map

```
├── Dashboard
│   ├── Issues Overview (error count trends)
│   ├── Crash-Free Sessions (%)
│   ├── Transactions (performance)
│   ├── Release Health
│   ├── Custom Widgets (add/configure)
│   └── Date Range Selector
├── Issues
│   ├── Issue List (grouped errors)
│   │   ├── Unresolved / Ignored / For Review
│   │   ├── Filter by: project, environment, time, assignee, level
│   │   ├── Sort by: events, users, date, priority
│   │   └── Saved Searches
│   ├── Issue Detail
│   │   ├── Title (error type + message)
│   │   ├── Sparkline (event count over time)
│   │   ├── Stack Trace (source-mapped, clickable frames)
│   │   ├── Breadcrumbs (user actions leading to error)
│   │   ├── Tags (browser, OS, URL, custom)
│   │   ├── Context
│   │   │   ├── User (ID, email, IP)
│   │   │   ├── Device (browser, OS, screen)
│   │   │   ├── Request (URL, method, headers)
│   │   │   └── Custom Context (key-value)
│   │   ├── Events (individual occurrences, navigable)
│   │   ├── Replays (linked session replays)
│   │   ├── Activity (status changes, assignments, comments)
│   │   ├── Similar Issues
│   │   ├── Merged Issues
│   │   ├── Linked Issues (GitHub, Jira, Linear)
│   │   ├── Suspect Commits (which commit caused this)
│   │   ├── Suspect Releases (which release introduced this)
│   │   └── Actions: Resolve / Ignore / Assign / Link / Delete
│   └── Issue Triage
│       ├── For Review Queue
│       ├── Regression Detection (resolved issues recurring)
│       └── Auto-assignment Rules
├── Projects
│   ├── Project List
│   ├── Project Detail
│   │   ├── Processing Issues
│   │   ├── Project Settings
│   │   │   ├── General
│   │   │   ├── Alerts
│   │   │   ├── Teams & Access
│   │   │   ├── Client Keys (DSN)
│   │   │   ├── Source Maps
│   │   │   ├── Release Tracking
│   │   │   ├── Data Scrubbing (PII filtering)
│   │   │   ├── Issue Grouping (fingerprinting rules)
│   │   │   └── Integrations (per-project config)
│   │   └── SDK Setup Instructions
│   └── Create Project (platform selection: React, Python, iOS, etc.)
├── Performance
│   ├── Overview
│   │   ├── Apdex Score
│   │   ├── Throughput (transactions/sec)
│   │   ├── P50 / P75 / P95 / P99 Duration
│   │   ├── Failure Rate
│   │   └── Trend Charts
│   ├── Transaction List
│   │   └── Transaction Summary
│   │       ├── Duration Distribution
│   │       ├── Span Waterfall (breakdown by operation)
│   │       ├── Suspect Tags (what correlates with slow)
│   │       ├── Related Issues (errors in this transaction)
│   │       └── Web Vitals (if web transaction)
│   ├── Trends (improving/regressing transactions)
│   ├── Queries (database query analysis)
│   │   ├── Slowest Queries
│   │   ├── Query Detail (time spent, throughput)
│   │   └── N+1 Detection
│   ├── Resources (HTTP, images, scripts)
│   ├── Screens (mobile screen load performance)
│   ├── Web Vitals (LCP, FID, CLS, TTFB — per page)
│   └── Caches (cache hit/miss analysis)
├── Replays (Session Replay)
│   ├── Replay List (sessions with errors)
│   ├── Replay Player
│   │   ├── DOM Recording (visual playback)
│   │   ├── Console Logs
│   │   ├── Network Requests
│   │   ├── Breadcrumbs (user clicks, navigation)
│   │   ├── Errors (highlighted moments)
│   │   ├── Rage Clicks / Dead Clicks
│   │   └── Scrubbing (timeline slider)
│   └── Filter: has errors, has rage clicks, duration, user
├── Profiling (Continuous Profiling)
│   ├── Profile List (by transaction)
│   ├── Flamechart / Flamegraph
│   │   ├── Function-level CPU time
│   │   ├── Call stack visualization
│   │   └── Regression Detection
│   └── Aggregate Flamegraph
├── Crons (Cron Job Monitoring)
│   ├── Cron Monitor List (healthy/failing/missed)
│   ├── Monitor Detail
│   │   ├── Check-in Timeline (expected vs actual)
│   │   ├── Status (OK, ERROR, MISSED, TIMEOUT)
│   │   └── Alert Rules
│   └── Create Monitor
├── Releases
│   ├── Release List (version, date, health)
│   ├── Release Detail
│   │   ├── Overview (crash-free %, new issues)
│   │   ├── Commits (linked to repo)
│   │   ├── Deploys (environments)
│   │   ├── New Issues (introduced in this release)
│   │   ├── Resolved Issues
│   │   ├── All Issues
│   │   └── Adoption (% of sessions on this release)
│   └── Release Health Chart
├── Discover (Custom Queries)
│   ├── Query Builder
│   │   ├── Dataset Selector (errors, transactions, replays)
│   │   ├── Columns / Fields
│   │   ├── Conditions / Filters
│   │   ├── Sort
│   │   └── Visualization (table, chart, world map)
│   ├── Saved Queries
│   └── Pre-built Queries
├── Dashboards
│   ├── Dashboard List
│   ├── Dashboard Detail
│   │   ├── Widgets (drag-and-drop grid)
│   │   ├── Widget Types (charts, tables, issue list, big number)
│   │   └── Global Filters (project, environment, date)
│   └── Create Dashboard
├── Alerts
│   ├── Alert Rules
│   │   ├── Issue Alerts (when new issue, regression, etc.)
│   │   ├── Metric Alerts (error count > threshold, p95 > Xms)
│   │   └── Uptime Alerts (URL monitoring)
│   ├── Create Alert Rule
│   ├── Alert History
│   └── Notification Channels (email, Slack, PagerDuty, Teams, webhooks)
├── Stats
│   ├── Usage Stats (events accepted, rejected, filtered)
│   ├── Rate Limiting
│   └── Data Forwarding
├── Settings (Organization)
│   ├── General
│   ├── Teams
│   │   ├── Team List
│   │   └── Team → Project Mapping
│   ├── Members (invite, roles)
│   ├── Auth (SSO/SAML, 2FA)
│   ├── Integrations
│   │   ├── GitHub / GitLab / Bitbucket (commit tracking)
│   │   ├── Jira / Linear / Azure DevOps (issue linking)
│   │   ├── Slack / Teams / Discord (notifications)
│   │   ├── PagerDuty / Opsgenie (alerting)
│   │   └── Codecov / Vercel / etc.
│   ├── Developer Settings (API keys, auth tokens)
│   ├── Security & Privacy (data scrubbing, IP ranges)
│   ├── Subscription & Usage (plan, quotas)
│   ├── Data Export
│   ├── Relay (self-hosted event forwarding)
│   └── Early Adopter Features
└── Docs (docs.sentry.io)
    ├── Platforms (SDK guides: JavaScript, Python, iOS, Android, Go, etc.)
    ├── Product Guides
    └── API Reference
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible | Issues, Projects, Performance, Replays, Profiling, Crons, Releases, Discover, Dashboards, Alerts, Stats, Settings |
| **Top Bar** | Fixed | Organization switcher, global search, project/environment selector, help, user menu |
| **Project/Environment Selector** | Top bar dropdowns (multi-select) | Filter entire view by project(s) and environment(s) — persistent |
| **Issue Detail Header** | Sticky | Issue title, status (unresolved/resolved/ignored), assign, link, actions |
| **Event Navigator** | Within issue detail | Navigate between individual events (older/newer), "Latest Event" / "Recommended" |
| **Date Range Picker** | Top bar | 1h, 24h, 7d, 14d, 30d, 90d, custom |

### Sidebar Structure
```
[Organization ▾]
───────────────
⊙ Issues
📦 Projects
⚡ Performance
🎬 Replays
🔥 Profiling
⏰ Crons
🏷 Releases
🔍 Discover
📊 Dashboards
🔔 Alerts
📈 Stats
⚙ Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Organization | name, slug, plan, teams[] | has Projects, Members, Integrations |
| Project | name, slug, platform (react/python/ios/etc.), teams[], dsn | belongs to Organization |
| Issue | id, title, culprit, level (error/warning/info), status, times_seen, first_seen, last_seen, assignee, priority | belongs to Project, has Events |
| Event | event_id, timestamp, level, message, stack_trace, tags{}, contexts{}, breadcrumbs[], user{}, request{} | belongs to Issue |
| Transaction | event_id, transaction_name, duration, status, spans[], measurements{} | belongs to Project |
| Span | op, description, start, duration, status, data{} | belongs to Transaction |
| Replay | replay_id, user, duration, error_count, urls[], dom_events[] | belongs to Project, linked to Issues |
| Release | version, date_created, projects[], commits[], deploy_count, new_issues | belongs to Organization |
| Deploy | environment, date_started, date_finished, release | belongs to Release |
| AlertRule | name, type (issue/metric), conditions[], actions[], frequency | belongs to Project |
| CronMonitor | name, slug, schedule, status, last_checkin | belongs to Project |
| Profile | profile_id, transaction_name, duration, functions[] | belongs to Project |
| SavedSearch | name, query, is_global | belongs to Organization/User |
| Dashboard | title, widgets[], filters[] | belongs to Organization |

### Issue Status Flow
```
unresolved → resolved (manually / via commit / via release)
unresolved → ignored (for duration / until count / forever)
resolved → regressed (re-occurred in new events)
```

### Issue Priority
```
critical → high → medium → low
(auto-assigned by ML based on impact, frequency, user count)
```

## User Flows

### Triage New Errors
```
Alert (Slack/email: new issue) → Issues → For Review → Issue Detail → Read stack trace → Check breadcrumbs → View suspect commit → Assign to team member → Link to GitHub issue → Resolve when fixed
```

### Debug Error with Replay
```
Issue Detail → See user affected → Click "View Replay" → Watch session replay → See user actions before error → Identify reproduction steps → Fix in code → Deploy → Mark resolved
```

### Performance Investigation
```
Performance → Sort by P95 → Click slow transaction → View span waterfall → Identify slow database query (N+1) → View query detail → Optimize → Deploy → Compare P95 trend
```

### Release Health Monitoring
```
Releases → New release deployed → Monitor crash-free % → Compare to previous release → If regression: see new issues introduced → Rollback or hotfix → Track adoption %
```

### Set Up Alerting
```
Alerts → Create Alert → Issue Alert: "When new issue is seen more than 10 times in 1 hour" → Action: Send to Slack #engineering → Action: Assign to on-call → Save → Test
```

## URL / Route Structure

```
/organizations/:org/                           → Dashboard
/organizations/:org/issues/                    → Issue list
/organizations/:org/issues/:issueId/           → Issue detail
/organizations/:org/issues/:issueId/events/:eventId/ → Event detail
/organizations/:org/issues/:issueId/replays/   → Related replays
/organizations/:org/projects/                  → Project list
/organizations/:org/projects/:project/         → Project detail
/organizations/:org/performance/               → Performance overview
/organizations/:org/performance/summary/       → Transaction summary
/organizations/:org/performance/trends/        → Performance trends
/organizations/:org/performance/database/      → Query analysis
/organizations/:org/replays/                   → Replay list
/organizations/:org/replays/:replayId/         → Replay player
/organizations/:org/profiling/                 → Profiling
/organizations/:org/crons/                     → Cron monitors
/organizations/:org/releases/                  → Release list
/organizations/:org/releases/:version/         → Release detail
/organizations/:org/discover/                  → Custom queries
/organizations/:org/discover/results/          → Query results
/organizations/:org/dashboards/                → Dashboard list
/organizations/:org/dashboards/:id/            → Dashboard detail
/organizations/:org/alerts/rules/              → Alert rules
/organizations/:org/alerts/rules/new/          → Create alert
/organizations/:org/stats/                     → Usage stats
/settings/:org/                                → Org settings
/settings/:org/teams/                          → Teams
/settings/:org/members/                        → Members
/settings/:org/integrations/                   → Integrations
/settings/:org/projects/:project/              → Project settings
/settings/:org/developer-settings/             → API keys / tokens
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Issues | Error message, issue ID, tags | Project, Environment, Level, Status, Assignee, First/Last Seen, Times Seen, Tags (browser, os, url, custom) | Date, Events, Users, Priority |
| Performance | Transaction name | Project, Environment, Duration, Status Code | P50, P95, Throughput, Failure Rate, Trend |
| Replays | User email, URL, replay ID | Has Errors, Has Rage Clicks, Duration, Project | Date, Duration, Error Count |
| Releases | Version | Project, Environment, Date, Health (crash-free %) | Date, Sessions, Crash-Free |
| Discover | Custom fields | Any tag or field, aggregations (count, avg, p95) | Any selected column |

### Search Syntax
```
is:unresolved assigned:me browser:Chrome level:error
!has:user firstSeen:>2024-01-01 times_seen:>100
transaction:/api/users/* http.status_code:500
```

## Responsive Behavior

| Breakpoint | Sidebar | Issue List | Issue Detail |
|------------|---------|-----------|-------------|
| Desktop (>=1280px) | Expanded | Full table with inline metadata | Stack trace + breadcrumbs + tags side by side |
| Tablet (768-1279px) | Collapsed (icons) | Simplified table | Stacked layout |
| Mobile (<768px) | Hamburger | Card layout | Stacked, simplified stack trace |

### Sentry-Specific UX
- **Stack traces** with source-mapped code, syntax highlighted, clickable frames
- **Breadcrumbs** timeline (console, HTTP, UI clicks, navigation, custom)
- **Suspect commits**: links directly to the git commit that likely caused the issue
- **Session replay**: DOM recording playback with timeline markers for errors
- **Span waterfall**: visual breakdown of transaction timing
- **Flamechart**: CPU profiling visualization
- **Issue grouping**: smart deduplication with customizable fingerprinting
- **Tag facets**: see distribution of tags (browser, OS, URL) for each issue
- **Real-time updates**: new events appear without refresh
- **Dark mode** with high-contrast error highlighting

## Access Control

| Role | Issues | Performance | Releases | Alerts | Settings | Billing |
|------|--------|-------------|----------|--------|----------|---------|
| Member | View + Resolve | View | View | View | — | — |
| Admin | CRUD | CRUD | CRUD | CRUD | ✅ | — |
| Manager | CRUD | CRUD | CRUD | CRUD | ✅ | View |
| Owner | CRUD | CRUD | CRUD | CRUD | ✅ | ✅ |
| Billing | — | — | — | — | — | ✅ |

### Team-Based Access
- Projects are assigned to teams
- Members see issues only from their team's projects (unless org-wide access)
- Issue ownership rules (auto-assign based on code path or tag)
- Integration-level permissions (who can configure GitHub/Slack)
