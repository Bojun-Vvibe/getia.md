# CLI Dashboard — Information Architecture

## Overview

A web-based companion UI for a command-line tool, providing visual monitoring, configuration, and management that complements terminal workflows (Vercel Dashboard, Railway, Docker Desktop, k9s-web, npm/yarn dashboard style). The mental model is a **visual control panel for your CLI** — users execute commands in the terminal but monitor, configure, and inspect via the dashboard. The two interfaces are peers: the dashboard never replaces the CLI, it augments it.

## Site Map

```
├── Dashboard (Overview)
│   ├── System / Project Status
│   │   ├── Health Indicator (running / stopped / error)
│   │   ├── Uptime / Last Deploy
│   │   ├── Active Environment (dev / staging / prod)
│   │   └── Version Info (CLI version, project version)
│   ├── Quick Stats (key metrics at a glance)
│   ├── Recent Activity (last commands, deploys, events)
│   ├── Alerts / Issues (errors, warnings, deprecations)
│   └── Quick Actions (deploy, restart, open terminal)
├── Projects / Services
│   ├── Project List
│   │   ├── Status Badge
│   │   ├── Last Activity
│   │   └── Quick Actions (start, stop, deploy)
│   └── Project Detail
│       ├── Overview Tab
│       │   ├── Service Status
│       │   ├── Endpoint URLs
│       │   ├── Environment Info
│       │   └── Resource Usage (CPU, memory, disk)
│       ├── Deployments Tab
│       │   ├── Deployment History (list)
│       │   ├── Deployment Detail
│       │   │   ├── Status (building → deploying → live / failed)
│       │   │   ├── Build Log (streaming)
│       │   │   ├── Commit Info
│       │   │   ├── Duration
│       │   │   └── Rollback Button
│       │   └── Deploy Now
│       ├── Logs Tab
│       │   ├── Live Log Stream (auto-scroll)
│       │   ├── Log Level Filter (info, warn, error, debug)
│       │   ├── Search Within Logs
│       │   ├── Time Range Selector
│       │   └── Download Logs
│       ├── Metrics Tab
│       │   ├── Request Count / Latency Charts
│       │   ├── Error Rate
│       │   ├── CPU / Memory Usage Over Time
│       │   ├── Bandwidth
│       │   └── Custom Metrics
│       ├── Environment Variables Tab
│       │   ├── Variable List (masked values)
│       │   ├── Add / Edit / Delete
│       │   ├── Environment Selector (dev/staging/prod)
│       │   └── Sync from .env File
│       └── Settings Tab
│           ├── Build Configuration
│           ├── Runtime Settings
│           ├── Custom Domains
│           ├── Scaling (instances, auto-scale rules)
│           └── Danger Zone (delete project)
├── Logs (Global)
│   ├── Aggregated Log Stream (all projects)
│   ├── Filter by Project / Service
│   ├── Filter by Level
│   ├── Full-Text Search
│   └── Structured View (JSON expand)
├── Environments
│   ├── Environment List (dev, staging, production)
│   ├── Environment Detail
│   │   ├── Variables
│   │   ├── Linked Services
│   │   └── Promote (staging → prod)
│   └── Compare Environments
├── CLI Activity
│   ├── Command History (executed via CLI)
│   ├── Command Output (recent)
│   ├── Running Processes
│   │   ├── Process List (PID, status, resource usage)
│   │   ├── Process Detail (stdout/stderr stream)
│   │   └── Stop / Restart Process
│   └── Scheduled Tasks / Cron Jobs
│       ├── Task List
│       ├── Task Detail (schedule, last run, next run)
│       ├── Run History
│       └── Create / Edit Task
├── Configuration
│   ├── Config File Viewer (YAML/TOML/JSON — syntax highlighted)
│   ├── Config Editor (with validation)
│   ├── Config History (diffs)
│   ├── Secrets / Credentials
│   │   ├── Secret List (masked)
│   │   ├── Add / Rotate Secret
│   │   └── Usage References
│   └── Plugins / Extensions
│       ├── Installed List
│       ├── Available Plugins
│       └── Plugin Settings
├── Integrations
│   ├── Git Provider (GitHub, GitLab, Bitbucket)
│   │   ├── Connected Repos
│   │   ├── Branch → Environment Mapping
│   │   └── Auto-Deploy Settings
│   ├── CI/CD Pipelines
│   │   ├── Pipeline Runs
│   │   └── Pipeline Config
│   ├── Notifications (Slack, Discord, email, webhook)
│   └── Monitoring (Datadog, Sentry, PagerDuty)
├── Team
│   ├── Members
│   ├── Roles & Permissions
│   ├── API Tokens
│   ├── Audit Log
│   └── Invite
├── Usage & Billing
│   ├── Resource Usage (compute, bandwidth, storage)
│   ├── Usage by Project
│   ├── Plan & Limits
│   ├── Invoices
│   └── Upgrade
├── Settings
│   ├── Account
│   ├── CLI Configuration (default flags, aliases)
│   ├── Dashboard Preferences (theme, timezone, date format)
│   ├── Notifications
│   ├── API Keys
│   └── Security (2FA, SSO)
└── Docs / Help
    ├── CLI Reference (searchable)
    ├── Quick Start Guide
    ├── Keyboard Shortcuts
    ├── Changelog
    └── Support
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Global Nav** | Fixed left sidebar (collapsible) | Projects, Logs, Environments, CLI Activity, Config, Team, Settings |
| **Project Nav** | Horizontal tabs within project | Overview / Deployments / Logs / Metrics / Env Vars / Settings |
| **Environment Switcher** | Top bar dropdown or segmented control | Development ↔ Staging ↔ Production (color-coded) |
| **Command Palette** | ⌘K / Ctrl+K | Search projects, run actions, navigate pages, execute CLI commands |
| **Breadcrumbs** | Top of content area | Dashboard > Project > Deployments > Deploy #42 |
| **Status Bar** | Bottom of viewport (optional) | CLI connection status, current project, active environment |
| **Contextual Actions** | Top-right of content area | Deploy, Restart, Open in Terminal, Copy CLI command |

### Sidebar Structure
```
[Logo / CLI Name]
───────────────
📊 Dashboard
📦 Projects
📋 Logs
🌍 Environments
⌨️ CLI Activity
⚙️ Configuration
───────────────
🔌 Integrations
👥 Team
💳 Usage & Billing
🔧 Settings
───────────────
📖 Docs
[CLI v2.4.1 — Connected]
```

### Environment Color Coding
```
🟢 Development   — green accent
🟡 Staging       — yellow/amber accent
🔴 Production    — red accent (careful!)
```

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | name, slug, status (running/stopped/error), framework, region, created_at | has many Deployments, EnvVars, Logs, Domains |
| Deployment | id, status (queued/building/deploying/live/failed/rolled_back), commit_sha, commit_message, branch, duration, created_by, url | belongs to Project |
| BuildLog | deployment_id, lines[], timestamp_start, timestamp_end | belongs to Deployment |
| LogEntry | level (info/warn/error/debug), message, timestamp, source (app/system/build), metadata{} | belongs to Project |
| EnvVar | key, value (encrypted), environment, updated_at, updated_by | belongs to Project |
| Environment | name (dev/staging/prod), status, url, variables_count | belongs to Project |
| Process | pid, command, status (running/stopped), cpu, memory, started_at | belongs to Project |
| CronJob | schedule, command, last_run, next_run, status, last_exit_code | belongs to Project |
| ConfigFile | path, content, format (yaml/toml/json), last_modified, diff_from_previous | belongs to Project |
| Secret | key, created_at, rotated_at, referenced_by[] | belongs to Project |
| Integration | type, provider, status, config{} | belongs to Project or Team |
| AuditEntry | actor, action, target, timestamp, ip, cli_version | belongs to Team |

### Deployment Status
```
queued → building → deploying → live
                  ↘ failed (with error log)
live → rolled_back (manual rollback to previous)
```

### CLI ↔ Dashboard Sync
- Dashboard reflects real-time CLI state (WebSocket / SSE)
- Actions in dashboard generate equivalent CLI commands (shown to user)
- CLI commands immediately reflected in dashboard
- Config edits in dashboard sync to local config files

## User Flows

### Monitor Deployment
```
CLI: `myapp deploy` → Dashboard auto-opens deploy view → Watch build log stream → See status: live → Click URL to verify
```

### Debug Error
```
Dashboard → Alerts (error count spike) → Click → Logs → Filter: level=error → Expand entry → View stack trace → Click file reference → Open in editor
```

### Configure Environment Variables
```
Project → Env Vars Tab → Select Environment (staging) → [+ Add] → Key/Value → Save → Redeploy prompt → Confirm → Deployed with new vars
```

### Roll Back Deployment
```
Project → Deployments → Find last working deploy → [Rollback to this] → Confirm → Redeployed → Status: live
```

### Execute Action from Dashboard
```
⌘K → Type "restart" → Select "Restart production" → Confirm → Equivalent CLI: `myapp restart --env=prod` (shown) → Done
```

### Review Config Changes
```
Configuration → Config File → View current → [History] → Select two versions → Side-by-side diff → [Restore this version] (optional)
```

## URL / Route Structure

```
/                                   → Dashboard Overview
/projects                           → Project List
/projects/:slug                     → Project Overview
/projects/:slug/deployments         → Deployment History
/projects/:slug/deployments/:id     → Deployment Detail (build log)
/projects/:slug/logs                → Project Logs
/projects/:slug/metrics             → Project Metrics
/projects/:slug/env                 → Environment Variables
/projects/:slug/settings            → Project Settings
/projects/:slug/domains             → Custom Domains
/logs                               → Global Logs
/environments                       → Environment List
/environments/:name                 → Environment Detail
/environments/compare               → Compare Environments
/cli                                → CLI Activity
/cli/processes                      → Running Processes
/cli/processes/:pid                 → Process Detail
/cli/cron                           → Cron Jobs
/config                             → Configuration Files
/config/:path                       → Config File Viewer
/config/:path/history               → Config History
/secrets                            → Secrets
/integrations                       → Integrations
/integrations/:provider             → Integration Detail
/team                               → Team Members
/team/tokens                        → API Tokens
/team/audit-log                     → Audit Log
/usage                              → Usage & Billing
/settings                           → Settings
/docs                               → CLI Reference
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Command Palette (⌘K) | Pages, projects, actions, CLI commands, docs | — | Relevance, Recent |
| Logs | Log message text, metadata | Level (info/warn/error/debug), Project, Source, Date Range | Timestamp (newest), Level |
| Deployments | Commit message, SHA, branch | Status (live/failed/rolled_back), Branch, Date Range, Triggered By | Date (newest), Duration |
| CLI History | Command text | Project, Date Range, Exit Code | Timestamp (newest) |
| Config | Key names, values | File, Environment | File path, Last modified |
| Docs | CLI reference, guides | Command group | Relevance |

## Responsive Behavior

| Breakpoint | Sidebar | Content | Log Viewer |
|------------|---------|---------|------------|
| Desktop (≥1280px) | Expanded with labels | Full width + max-width | Full height, side-by-side with metrics |
| Tablet (768–1279px) | Collapsed to icons | Full width | Full width, stacked |
| Mobile (<768px) | Hamburger menu | Full width, simplified | Full width, smaller font |

### Developer-Specific UX
- Monospace font throughout (log viewer, config files, env vars, CLI output)
- Syntax highlighting for config files (YAML, TOML, JSON), build logs, and code references
- Copy-to-clipboard on all values (env vars, URLs, CLI commands, log entries)
- Keyboard-first navigation (⌘K palette, j/k for list navigation, Enter to open)
- Terminal-like log viewer (auto-scroll, Ctrl+C to stop, grep-style filtering)
- Dark mode as default (matches terminal aesthetic)
- "Copy as CLI command" button on all dashboard actions
- Side-by-side diff viewer for config changes and deployment comparisons
- WebSocket-based real-time updates (logs, deployment status, process state)
- Linkable log lines (share URL to specific log entry or time range)

## Access Control

| Role | Dashboard | Deploy | Logs | Env Vars | Secrets | Billing | Team |
|------|-----------|--------|------|----------|---------|---------|------|
| Owner | ✅ | All envs | ✅ | CRUD (all envs) | CRUD | ✅ | Manage |
| Admin | ✅ | All envs | ✅ | CRUD (all envs) | View (masked) | View | Manage |
| Developer | ✅ | Dev + Staging | ✅ | CRUD (dev/staging), Read (prod) | — | — | View |
| Viewer | ✅ | — | Read | Read (masked) | — | — | View |
| CI/CD Token | — | Specified envs | Write | Read | Read | — | — |

### Security Model
- API tokens scoped per project and environment
- Production deploy requires confirmation + optional approval from admin
- Env var values encrypted at rest, masked in UI (click to reveal with re-auth)
- Secrets never shown in plain text in logs (auto-redaction)
- Audit log for all destructive actions (delete, rollback, secret rotation)
- SSO / 2FA for team accounts
- CLI authentication via `myapp login` (browser OAuth flow)
