---
brand: GitLab
tagline: "The complete DevSecOps platform. From planning to production in a single application."
category: Code Repository
website: https://gitlab.com
---

# GitLab — Information Architecture

## Overview

GitLab is an all-in-one DevSecOps platform that covers the entire software development lifecycle — from project planning through source code management, CI/CD, security scanning, monitoring, and deployment. Unlike GitHub's ecosystem approach (integrations + marketplace), GitLab's mental model is a **single application for the entire DevOps toolchain**. The IA reflects this with deep, hierarchical navigation across stages: Plan, Code, Build, Test, Deploy, Monitor, and Secure.

## Site Map

```
├── Home / Dashboard
│   ├── Your Work
│   │   ├── Projects (recent, starred)
│   │   ├── Groups
│   │   ├── Merge Requests (assigned, review requested)
│   │   ├── Issues (assigned)
│   │   ├── To-Do List (action items)
│   │   └── Activity
│   └── Explore
│       ├── Projects
│       ├── Groups
│       ├── Topics
│       └── Snippets
├── Group
│   ├── Overview (subgroups, projects, README)
│   ├── Issues (cross-project)
│   ├── Merge Requests (cross-project)
│   ├── Epics
│   │   ├── Epic List (open/closed)
│   │   ├── Epic Detail (child issues, child epics, roadmap)
│   │   └── Epic Board
│   ├── Milestones (cross-project)
│   ├── Iterations
│   ├── Boards (issue boards, cross-project)
│   ├── Roadmap (Gantt-style)
│   ├── CI/CD
│   │   ├── Pipelines (across projects)
│   │   └── Runners (group-level)
│   ├── Security
│   │   ├── Vulnerability Report
│   │   ├── Security Dashboard
│   │   ├── Compliance
│   │   └── Audit Events
│   ├── Packages & Registries
│   │   ├── Package Registry
│   │   └── Container Registry
│   ├── Analytics
│   │   ├── Contribution Analytics
│   │   ├── DevOps Adoption
│   │   ├── Productivity Analytics
│   │   └── Value Stream Analytics
│   ├── Wiki (group-level)
│   └── Settings
│       ├── General
│       ├── Integrations
│       ├── Access Tokens
│       ├── Repository (default branch, push rules)
│       ├── CI/CD (variables, runners, auto DevOps)
│       └── SAML SSO / LDAP
├── Project
│   ├── Overview
│   │   ├── Details (README, activity)
│   │   └── Releases
│   ├── Plan
│   │   ├── Issues
│   │   │   ├── Issue List (filters, labels, weights)
│   │   │   ├── Issue Detail
│   │   │   │   ├── Description (Markdown + task lists)
│   │   │   │   ├── Design Uploads (attached mockups)
│   │   │   │   ├── Linked Issues / MRs
│   │   │   │   ├── Time Tracking
│   │   │   │   └── Related Merge Requests
│   │   │   └── New Issue (templates, quick actions)
│   │   ├── Issue Boards (Kanban, multiple boards)
│   │   ├── Milestones
│   │   ├── Iterations
│   │   ├── Requirements
│   │   └── Service Desk
│   ├── Code
│   │   ├── Repository
│   │   │   ├── File Browser (tree)
│   │   │   ├── File Editor (Web IDE integration)
│   │   │   ├── Branches
│   │   │   ├── Tags
│   │   │   ├── Contributors
│   │   │   ├── Graph (branch visualization)
│   │   │   └── Compare (branch diff)
│   │   ├── Merge Requests
│   │   │   ├── MR List (open/merged/closed/all)
│   │   │   ├── MR Detail
│   │   │   │   ├── Overview (description, approvals, pipeline status)
│   │   │   │   ├── Commits
│   │   │   │   ├── Pipelines (MR-specific)
│   │   │   │   ├── Changes (diff view — inline/side-by-side)
│   │   │   │   │   ├── Inline Threads (resolvable)
│   │   │   │   │   ├── Merge Conflicts Resolver (in-browser)
│   │   │   │   │   └── Code Quality diff
│   │   │   │   ├── Approval Rules (required approvers)
│   │   │   │   ├── Merge Widget (merge when pipeline succeeds)
│   │   │   │   └── Merge Train
│   │   │   └── Create MR
│   │   ├── Snippets (code fragments)
│   │   └── Web IDE (full editor in browser)
│   ├── Build
│   │   ├── Pipelines
│   │   │   ├── Pipeline List
│   │   │   ├── Pipeline Detail (DAG / stage graph)
│   │   │   ├── Pipeline Editor (.gitlab-ci.yml visual editor)
│   │   │   └── Pipeline Schedules
│   │   ├── Jobs
│   │   │   ├── Job List
│   │   │   └── Job Detail (log, artifacts, retry)
│   │   └── Artifacts (browsable, downloadable)
│   ├── Secure
│   │   ├── Security Dashboard
│   │   ├── Vulnerability Report
│   │   ├── Dependency List
│   │   ├── License Compliance
│   │   ├── SAST Results
│   │   ├── DAST Results
│   │   ├── Container Scanning
│   │   ├── Secret Detection
│   │   └── Fuzz Testing
│   ├── Deploy
│   │   ├── Environments
│   │   │   ├── Environment List (production, staging, review apps)
│   │   │   └── Environment Detail (deployments, monitoring)
│   │   ├── Releases
│   │   ├── Feature Flags (built-in)
│   │   ├── Pages (static site hosting)
│   │   └── Terraform (GitLab-managed state)
│   ├── Operate
│   │   ├── Kubernetes (cluster management)
│   │   ├── Environments (monitoring)
│   │   └── Incidents
│   ├── Monitor
│   │   ├── Metrics (Prometheus integration)
│   │   ├── Logs
│   │   ├── Tracing
│   │   ├── Error Tracking
│   │   ├── Alerts
│   │   ├── Incidents
│   │   └── On-call Schedules
│   ├── Analytics
│   │   ├── Value Stream Analytics
│   │   ├── CI/CD Analytics
│   │   ├── Repository Analytics
│   │   ├── Code Review Analytics
│   │   ├── Merge Request Analytics
│   │   └── Issue Analytics
│   ├── Wiki (project-level)
│   ├── Packages & Registries
│   │   ├── Package Registry (npm, Maven, PyPI, NuGet, etc.)
│   │   ├── Container Registry (Docker images)
│   │   ├── Infrastructure Registry (Terraform modules)
│   │   └── Model Registry (ML models)
│   └── Settings
│       ├── General (visibility, merge method, merge checks)
│       ├── Integrations (Slack, Jira, etc.)
│       ├── Webhooks
│       ├── Access Tokens
│       ├── Repository (protected branches, push rules, mirroring)
│       ├── Merge Requests (approval rules, merge checks)
│       ├── CI/CD (variables, runners, auto DevOps, artifacts)
│       └── Monitor (alerts, incidents)
├── User Profile
│   ├── Overview (activity calendar, bio)
│   ├── Personal Projects
│   ├── Groups
│   ├── Contributed Projects
│   ├── Starred Projects
│   ├── Snippets
│   └── Followers / Following
├── To-Do List
│   └── Action items (assigned issues, MRs to review, mentions)
├── Search (global)
│   ├── Projects, Groups, Issues, MRs, Milestones, Users, Code, Commits, Notes, Wiki
│   └── Advanced Search (Elasticsearch — paid tier)
├── Settings (User)
│   ├── Profile
│   ├── Preferences (theme, layout, syntax highlighting, navigation)
│   ├── SSH Keys
│   ├── Access Tokens
│   ├── Notifications
│   ├── Active Sessions
│   └── Applications (OAuth)
├── Admin Area (self-hosted)
│   ├── Dashboard (stats, components)
│   ├── Users / Groups / Projects
│   ├── CI/CD (runners, jobs)
│   ├── Monitoring (background jobs, health)
│   ├── Settings (general, integrations, reporting)
│   ├── License
│   └── Abuse Reports
└── Help / Documentation
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed top bar | GitLab logo, menu (⊞), search (/ to focus), create (+), issues/MRs shortcuts, To-Do bell, user avatar |
| **Left Sidebar** | Collapsible, context-sensitive | Changes based on context (project vs group vs user); expandable sections for Plan, Code, Build, Secure, Deploy, Operate, Monitor, Analytics |
| **Project Sidebar** | Left navigation with DevOps stages | Plan → Code → Build → Secure → Deploy → Operate → Monitor → Analytics |
| **MR Tabs** | Horizontal tabs | Overview, Commits, Pipelines, Changes |
| **Breadcrumbs** | Below top bar | Group / Subgroup / Project / Section |
| **Quick Actions** | Slash commands in comments | `/assign @user`, `/label ~bug`, `/merge`, `/close` |
| **Command Palette** | Not yet prominent (search-first) | Global search with scope selection |

### Left Sidebar Structure (Project Context)
```
📋 Plan
  Issues | Boards | Milestones | Iterations
📝 Code
  Repository | Merge Requests | Snippets | Web IDE
🔨 Build
  Pipelines | Jobs | Artifacts | Pipeline Editor
🛡 Secure
  Security Dashboard | Vulnerability Report | Dependency List
🚀 Deploy
  Environments | Releases | Feature Flags | Pages
🔧 Operate
  Kubernetes | Incidents
📊 Monitor
  Metrics | Logs | Error Tracking | Alerts
📈 Analytics
  Value Stream | CI/CD | Repository
📦 Packages & Registries
⚙ Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | name, path, namespace, visibility, description, default_branch, topics[], star_count, fork_count | belongs to Group/User, has Issues, MRs, Pipelines |
| Group | name, path, parent, description, visibility | has Subgroups, Projects, Epics, Milestones |
| Issue | iid (project-scoped), title, description, state, labels[], assignees[], milestone, weight, time_estimate, time_spent, health_status | belongs to Project, linked to MRs and Epics |
| Epic | iid, title, description, start_date, due_date, state | belongs to Group, has child Issues and Epics |
| MergeRequest | iid, title, description, state, source_branch, target_branch, assignees[], reviewers[], approvals[], pipeline_status, merge_status | belongs to Project |
| Pipeline | id, status, ref, sha, source (push/merge_request/schedule), stages[], duration | belongs to Project |
| Job | id, name, stage, status, duration, runner, artifacts[], trace (log) | belongs to Pipeline |
| Environment | name, tier (production/staging/testing/development), state, last_deployment | belongs to Project |
| Deployment | iid, status, environment, sha, ref, created_at | belongs to Environment |
| Release | tag, name, description, assets[], milestones[], evidences[] | belongs to Project |
| FeatureFlag | name, description, active, strategies[], scopes[] | belongs to Project |
| Vulnerability | id, severity, scanner, state, location, solution | belongs to Project |
| Runner | id, description, type (shared/group/project), tags[], status | belongs to instance/group/project |
| Snippet | title, file_name, content, visibility | belongs to User or Project |
| WikiPage | title, content, slug | belongs to Project or Group |

### MR States
```
opened → merged / closed
  with: draft, approval_required, merge_conflicts, pipeline_pending
  merge methods: merge_commit / squash / fast_forward / semi_linear
```

### Pipeline States
```
created → waiting_for_resource → preparing → pending → running → success / failed / canceled / skipped / manual / scheduled
```

## User Flows

### Code Review (MR Flow)
```
Create branch → Push commits → Open MR → Auto-trigger pipeline → Assign reviewers → Code review (threads) → Resolve threads → Approval rules met → Pipeline passes → Merge (with merge train if enabled)
```

### CI/CD Pipeline
```
Push / MR / Schedule → .gitlab-ci.yml parsed → Pipeline created → Stages run sequentially (build → test → deploy) → Jobs in stage run in parallel → View logs → Artifacts stored → Deploy to environment → Feature flags toggle
```

### DevSecOps (Shift-Left Security)
```
Push code → Pipeline runs → SAST/DAST/Container/Dependency scanning auto-triggered → Vulnerability report generated → MR shows security findings → Fix before merge → Security dashboard tracks trends
```

### Value Stream Analytics
```
Plan (issue created) → Code (first commit) → Build (pipeline start) → Test (pipeline finish) → Review (MR created → merged) → Staging (deployed) → Production (deployed) → Measure cycle time
```

### Issue to Deployment
```
Create issue → Assign + label → Create MR from issue → Develop → Pipeline runs → Review → Merge → Auto-deploy to staging → Manual promote to production → Issue auto-closed
```

## URL / Route Structure

```
/                                      → Dashboard (Your Work)
/dashboard/merge_requests              → Assigned MRs
/dashboard/issues                      → Assigned Issues
/dashboard/todos                       → To-Do List
/:namespace/:project                   → Project Overview
/:namespace/:project/-/tree/:branch    → File browser
/:namespace/:project/-/blob/:branch/:path → View file
/:namespace/:project/-/edit/:branch/:path → Edit file
/:namespace/:project/-/commits/:branch → Commit history
/:namespace/:project/-/commit/:sha     → Commit detail
/:namespace/:project/-/issues          → Issues
/:namespace/:project/-/issues/:iid     → Issue detail
/:namespace/:project/-/merge_requests  → Merge requests
/:namespace/:project/-/merge_requests/:iid → MR detail
/:namespace/:project/-/merge_requests/:iid/diffs → MR changes
/:namespace/:project/-/pipelines       → Pipelines
/:namespace/:project/-/pipelines/:id   → Pipeline detail
/:namespace/:project/-/jobs/:id        → Job detail
/:namespace/:project/-/pipeline_editor → Pipeline editor
/:namespace/:project/-/environments    → Environments
/:namespace/:project/-/releases        → Releases
/:namespace/:project/-/feature_flags   → Feature flags
/:namespace/:project/-/security/dashboard → Security dashboard
/:namespace/:project/-/vulnerability_report → Vulnerabilities
/:namespace/:project/-/boards          → Issue boards
/:namespace/:project/-/milestones      → Milestones
/:namespace/:project/-/wiki            → Wiki
/:namespace/:project/-/packages        → Packages
/:namespace/:project/-/container_registry → Container images
/:namespace/:project/-/settings/general → Settings
/groups/:namespace                     → Group overview
/groups/:namespace/-/epics             → Epics
/groups/:namespace/-/boards            → Group boards
/groups/:namespace/-/roadmap           → Roadmap
/groups/:namespace/-/analytics/value_stream_analytics → Value Stream
/:username                             → User profile
/explore/projects                      → Explore
/search?search=:query&scope=:scope     → Search
/-/profile                             → User settings
/admin                                 → Admin area (self-hosted)
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Global | Projects, groups, issues, MRs, milestones, users, code, commits, notes, wiki | Scope (project/group/global), confidential, state | Relevance, Created, Updated |
| Issues | Title, description | State, label, assignee, author, milestone, weight, iteration, epic, confidential | Created, Updated, Due Date, Weight, Priority |
| MRs | Title, description | State, author, assignee, reviewer, label, milestone, source/target branch, WIP/draft | Created, Updated, Merge Date |
| Pipelines | Pipeline ID, SHA | Status, source (push/MR/schedule/API), ref, username | Date |
| Code (Advanced) | File content, paths | Language, filename, extension, path, blob | Relevance |

### Quick Actions (slash commands)
```
/assign @user    /label ~bug ~critical    /milestone %v2.0
/merge           /close                   /weight 3
/estimate 2h     /spend 1h               /due 2024-12-01
```

## Responsive Behavior

| Breakpoint | Left Sidebar | Content | Diff View |
|------------|-------------|---------|-----------|
| Desktop (>=1280px) | Expanded with labels (collapsible) | Full width | Side-by-side diff |
| Tablet (768-1279px) | Collapsed (icons only) | Full width | Inline diff |
| Mobile (<768px) | Hidden (hamburger) | Full width stacked | Inline diff, simplified |

### GitLab-Specific UX
- Left sidebar navigation is the primary navigation paradigm (not top tabs)
- DevOps stage sections in sidebar (Plan/Code/Build/Secure/Deploy/Operate/Monitor)
- Web IDE for in-browser editing (VS Code-based)
- Pipeline visualization with DAG view (directed acyclic graph)
- Merge train visualization (queue of MRs)
- Slash commands / quick actions in all comment boxes
- Markdown everywhere with GitLab Flavored Markdown (task lists, math, diagrams)
- Dark mode / light mode
- Self-hosted instances have Admin Area with full system management

## Access Control

| Role | Read | Issues | MR | Push | Merge | CI/CD | Settings | Admin |
|------|------|--------|-----|------|-------|-------|----------|-------|
| Guest | ✅ (public/internal) | Create | — | — | — | View | — | — |
| Reporter | ✅ | CRUD | View | — | — | View | — | — |
| Developer | ✅ | CRUD | CRUD + Review | ✅ (non-protected) | ✅ (non-protected) | Run/Retry | — | — |
| Maintainer | ✅ | CRUD | CRUD + Merge | ✅ (all) | ✅ (all) | Configure | Limited | — |
| Owner | ✅ | CRUD | CRUD + Merge | ✅ | ✅ | Full | ✅ | Group/Project |
| Admin (self-hosted) | ✅ | CRUD | CRUD | ✅ | ✅ | Full | ✅ | Instance |

### Additional Security Features
- Protected branches and tags with granular push/merge access
- Approval rules (required approvals, code owners, specific users/groups)
- Merge request approval policies
- Compliance frameworks and pipelines
- Audit events (group and project level)
- IP restrictions, 2FA enforcement, SAML/SCIM
- External authorization services integration
