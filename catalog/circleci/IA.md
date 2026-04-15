---
brand: CircleCI
tagline: The world's best CI/CD platform for speed, reliability, and scale.
category: Developer Tools
website: https://circleci.com
---

# CircleCI — Information Architecture

## Overview

CircleCI is a continuous integration and delivery platform that automates software build, test, and deployment pipelines. The IA is organized around a **pipeline-centric workflow model** — code commits trigger Pipelines, which contain Workflows, which orchestrate Jobs, which run Steps on executors (Docker, Linux VM, macOS, Windows, ARM). The architecture emphasizes configurability via `.circleci/config.yml` and reusability via Orbs (shareable, versioned config packages). CircleCI's dashboard provides visibility into pipeline status, test results, build artifacts, and Insights (analytics). The platform supports both cloud-hosted and self-hosted (server) deployments.

## Site Map

```
app.circleci.com
├── / (Dashboard — recent pipelines)
├── /pipelines/{vcs}/{org}/{project} (Project pipelines list)
│   └── /{pipeline_number}
│       └── /workflows/{workflow_id}
│           └── /jobs/{job_number} (Job detail — steps, output, artifacts, tests)
├── /projects (All projects list)
├── /insights/{vcs}/{org}/{project} (Project analytics)
│   ├── /workflows (Workflow metrics)
│   └── /tests (Test metrics — flaky test detection)
├── /organization/{org_id}
│   ├── /settings
│   ├── /contexts (Shared secret contexts)
│   ├── /orbs (Organization orbs)
│   ├── /runners (Self-hosted runners)
│   └── /usage (Usage & billing)
├── /project/{vcs}/{org}/{project}/settings
│   ├── /environment-variables
│   ├── /ssh-keys
│   ├── /api-permissions
│   ├── /advanced
│   └── /triggers (Scheduled pipelines)
├── /orb-registry (Public orb marketplace)
│   └── /{namespace}/{orb_name} (Orb detail page)
├── /account
│   ├── /personal
│   ├── /tokens
│   └── /notifications
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Pipelines (dashboard), Projects, Insights, Organization settings
- **Pipeline drill-down**: Dashboard → Pipeline → Workflow (graph view) → Job → Steps (hierarchical drill-down)
- **Workflow graph**: Visual DAG (directed acyclic graph) showing job dependencies and status
- **Project navigation**: Within a project — Pipelines, Insights, Settings (tabs or sidebar)
- **Organization navigation**: Sidebar sections — Contexts, Self-Hosted Runners, Usage, Orbs, Settings
- **Orb registry**: Browse/search public orbs — separate discovery experience
- **Utility navigation**: Top-right — avatar → Account, Notifications, Tokens
- **Branch/PR filter**: Pipeline list filterable by branch (critical for monorepo and multi-branch workflows)

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Pipeline | Trigger (push, PR, schedule, API), pipeline number, commit, branch, workflows | Auto-triggered |
| Workflow | Name, jobs (DAG), status, duration, retries | Part of pipeline |
| Job | Name, executor (docker/vm), steps, output, artifacts, test results, resource class | Part of workflow |
| Step | Name, command, output log, duration, status | Part of job |
| Orb | Namespace, name, version, commands, jobs, executors, documentation | Public or org-private |
| Context | Named set of secrets, shared across projects within an org | Org-level |
| Environment Variable | Key-value, project-scoped, masked in output | Project-level |
| Artifact | File(s) produced by a job, downloadable, retained for configurable period | Part of job |
| Test Result | JUnit XML parsed results — pass/fail, duration, flaky detection | Part of job |
| Insight | Aggregated metrics — success rate, duration (p50/p95), throughput, credit usage | Analytics |


### Build/Pipeline Lifecycle
```
triggered → queued → running → success → deployed
                              ↘ failed → retried → success
triggered → cancelled (by user or timeout)
running → timed_out → failed
```
## User Flows

### Pipeline Triggered by Code Push
```
Developer pushes code to GitHub/GitLab/Bitbucket → CircleCI triggers Pipeline → reads `.circleci/config.yml` → Workflow(s) start → jobs execute in defined order/parallelism → Dashboard updates in real-time — job status badges (running, success, failed) → Workflow graph shows DAG with colored nodes → Click a job → see step-by-step output, test results, artifacts
```

### Investigating a Failed Build
```
Developer sees red pipeline on dashboard → Clicks Pipeline → Workflow graph shows which job(s) failed → Clicks failed job → scrolls to the failing step → Reads error output → identifies issue (test failure, build error, timeout) → Can SSH into the executor for interactive debugging (if enabled) → Fixes code → pushes → new pipeline runs
```

### Insights & Optimization
```
Team lead navigates to Insights → selects project → Views workflow metrics: success rate trend, duration trend (p50, p95), throughput → Identifies slowest workflows and most common failure points → Drills into test metrics → sees flaky tests (tests that intermittently fail) → Optimizes config: adds caching, parallelism, or resource class upgrades → Measures improvement in next sprint's metrics
```

### Using an Orb
```
Developer browses Orb Registry → finds relevant orb (e.g., `circleci/slack`) → Reads orb documentation: available commands, jobs, and parameters → Adds orb reference to config: `orbs: slack: circleci/slack@4.12.0` → Uses orb commands in workflow: `slack/notify` job after deployment → Orb auto-updates with version pinning
```

### New User Onboarding
```
Visit CircleCI → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
## URL / Route Structure

| Pattern | Description |
|---|---|
| `app.circleci.com/` | Dashboard |
| `app.circleci.com/pipelines/{vcs}/{org}/{project}` | Project pipelines |
| `app.circleci.com/pipelines/{vcs}/{org}/{project}/{number}` | Pipeline detail |
| `app.circleci.com/pipelines/{vcs}/{org}/{project}/{number}/workflows/{id}` | Workflow graph |
| `app.circleci.com/pipelines/{vcs}/{org}/{project}/{number}/workflows/{id}/jobs/{number}` | Job detail |
| `app.circleci.com/insights/{vcs}/{org}/{project}/workflows` | Workflow insights |
| `app.circleci.com/orb-registry/{namespace}/{name}` | Orb detail |
| `app.circleci.com/organization/{id}/contexts` | Contexts |
| `app.circleci.com/project/{vcs}/{org}/{project}/settings/*` | Project settings |

Deep hierarchical URLs reflecting Pipeline → Workflow → Job hierarchy. VCS type (github, bitbucket) in path.

### Additional Routes

```
app.circleci.com/account  → Account settings
app.circleci.com/account/security  → Security settings
app.circleci.com/billing  → Billing & subscription
app.circleci.com/notifications  → Notification preferences
app.circleci.com/help  → Help center
app.circleci.com/help/{topic}  → Help article
app.circleci.com/api  → API documentation
app.circleci.com/search?q={query}  → Search results
app.circleci.com/integrations  → Integrations
app.circleci.com/admin  → Admin console
app.circleci.com/projects                                           # All projects
app.circleci.com/organization/{id}/settings                          # Org settings
app.circleci.com/organization/{id}/runners                           # Self-hosted runners
app.circleci.com/organization/{id}/usage                             # Usage & billing
app.circleci.com/account/personal                                   # Personal settings
app.circleci.com/account/tokens                                     # API tokens
app.circleci.com/account/notifications                              # Notification prefs
app.circleci.com/insights/{vcs}/{org}/{project}/tests               # Test metrics
app.circleci.com/project/{vcs}/{org}/{project}/settings/env-vars     # Environment variables
app.circleci.com/project/{vcs}/{org}/{project}/settings/ssh-keys     # SSH keys
```

## Search & Filter

- **Pipeline filtering**: Filter by branch (critical), status (success, failed, running), trigger type
- **Project search**: Search projects by name
- **Orb Registry search**: Full-text search across orb names, descriptions, categories
- **Job output search**: Search within step output logs (in-job)
- **Insights filtering**: Time range (7d, 30d, 90d), workflow name, branch
- **Test search**: Search test results by test name, filter by status (failed, flaky)
- **No cross-project pipeline search**: Each project's pipelines are independent

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + pipeline list/workflow graph + job detail panel |
| Desktop (1024-1280px) | Collapsible sidebar + full content |
| Tablet (768-1024px) | Sidebar as drawer + simplified workflow graph |
| Mobile (<768px) | Hamburger nav + pipeline list (simplified), workflow graph scrollable, job output full-width |

- Workflow DAG graph is the most challenging responsive element — zooms/pans on mobile, simplified layout
- Pipeline list shows key info (commit, branch, status, duration) at all sizes
- Job output logs are monospace with horizontal scroll
- Insights charts resize and may reduce data density on mobile
- Orb registry cards reflow from grid to single-column


### CircleCI-Specific UX Patterns
- **Progressive disclosure**: Complex features hidden behind expandable sections
- **Contextual actions**: Right-click menus and hover-revealed action buttons
- **Inline editing**: Click-to-edit fields without navigating to a separate page
- **Batch operations**: Multi-select with bulk actions (delete, move, archive, tag)
- **Undo support**: Non-destructive actions with undo toast notifications
- **Loading states**: Skeleton screens and progress indicators during async operations
- **Empty states**: Helpful illustrations and CTAs when sections have no content
- **Onboarding tooltips**: First-time user guidance highlighting key features

### Accessibility
- WCAG 2.1 AA compliance across all interactive elements
- Semantic HTML with proper ARIA labels and landmarks
- Keyboard navigation support for all core workflows
- Screen reader compatibility tested with VoiceOver, NVDA, and JAWS
- Color contrast ratios meeting minimum 4.5:1 for body text
- Focus indicators visible on all interactive elements
- Reduced motion option respecting `prefers-reduced-motion`
- Resizable text up to 200% without content loss


### API & Integration Patterns
- RESTful API with JSON request/response format
- Webhook support for real-time event notifications
- OAuth 2.0 for third-party application authorization
- Rate limiting with clear headers (X-RateLimit-Remaining)
- Pagination via cursor-based or offset-based parameters
- Versioned API endpoints for backward compatibility
- Comprehensive API documentation with interactive examples
- SDKs available for popular languages (JavaScript, Python, Ruby, Go)


- Docker layer caching significantly reduces build times for container-based workflows
- Test splitting distributes tests across parallel containers for faster feedback

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, orb registry (public), docs |
| Free | 6,000 build minutes/mo (Linux), 30 concurrent jobs, limited macOS |
| Performance ($15/seat/mo) | Unlimited builds, all resource classes, Docker layer caching, test splitting, priority support |
| Scale | Performance + custom concurrency, self-hosted runners, audit logs, SSO |
| Server (self-hosted) | Full CircleCI on customer infrastructure |
| Org roles | Admin (settings, contexts, members) → All Members (view/trigger pipelines) |
| Context security | Restrict context access to specific security groups/teams |

- Authentication: GitHub OAuth, GitLab OAuth, Bitbucket OAuth (VCS-based)
- API tokens: Personal API tokens for CLI and API access; project tokens for read-only status badges
- Contexts: Org-level secret groups — restrict which projects/branches can access them
- SSH keys: Deploy keys and user keys for checkout and deployment
- IP ranges: Dedicated IP ranges for allowlisting (Performance+ plans)
- Secrets masking: Environment variables and context values are masked in build output
