---
brand: LaunchDarkly
tagline: Ship faster. Reduce risk. Build better software.
category: Developer Tools
website: https://launchdarkly.com
---

# LaunchDarkly — Information Architecture

## Overview

LaunchDarkly is the market-leading feature management platform that enables teams to control feature releases through feature flags (also called feature toggles). The IA is structured around a **flag-centric management hierarchy**: Organization → Project → Environment → Feature Flags. Each flag can be toggled, targeted to specific user segments, and configured with multivariate values. The platform goes beyond simple on/off toggles to support progressive rollouts, A/B experiments, entitlements, and release automation. The IA also incorporates Segments (reusable user groups), Metrics (for experimentation), and Contexts (the evolution of "users" into multi-dimensional targeting entities). The dashboard is designed for both developers (who create flags) and product managers (who control rollouts).

## Site Map

```
app.launchdarkly.com
├── / (Dashboard — flag activity, recent changes)
├── /{project_key}/flags (Feature flags list)
│   └── /{flag_key} (Flag detail — targeting, variations, activity)
│       ├── /targeting (Targeting rules & rollout)
│       ├── /variations (Flag value variations)
│       ├── /activity (Audit log for this flag)
│       ├── /experiments (A/B experiments linked)
│       └── /settings (Flag metadata)
├── /{project_key}/segments (User/Context segments)
│   └── /{segment_key}
├── /{project_key}/contexts (Context explorer — live user data)
│   └── /{context_id}
├── /{project_key}/experiments (Experimentation)
│   └── /{experiment_key}
├── /{project_key}/metrics (Metric definitions for experiments)
│   └── /{metric_key}
├── /{project_key}/releases (Release pipelines)
│   └── /{release_id}
├── /settings
│   ├── /projects (Project management)
│   ├── /environments (Environment management)
│   ├── /members (Team members & roles)
│   ├── /teams
│   ├── /integrations (Slack, Jira, Datadog, etc.)
│   ├── /webhooks
│   ├── /access-tokens
│   ├── /security (SSO, MFA)
│   └── /billing
├── /changelog (Account-wide audit log)
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Dashboard, Feature Flags, Segments, Contexts, Experiments, Releases
- **Environment selector**: Prominent dropdown in top bar — switches all views between environments (Production, Staging, Development, QA)
- **Project selector**: Top-left dropdown for multi-project organizations
- **Flag detail navigation**: Tabs within a flag — Targeting, Variations, Insights, Activity, Code References, Settings
- **Settings navigation**: Separate settings section — Projects, Environments, Members, Teams, Integrations, Billing
- **Utility navigation**: Top-right — changelog (audit), avatar → Account, Sign out
- **Quick actions**: Flag list has inline toggles — flip a flag on/off without opening the detail page
- **Mobile**: Not optimized for mobile — enterprise desktop tool

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Feature Flag | Key, name, description, variations (boolean, string, number, JSON), targeting rules, prerequisites, tags | Project-scoped |
| Targeting Rule | Context attributes (email, plan, country, etc.), operator, values, rollout percentage, variation to serve | belongs to flag |
| Variation | Named value — the actual value served to the application (e.g., true/false, "v1"/"v2") | belongs to flag |
| Segment | Key, name, rules for including/excluding contexts, reusable across flags | Project-scoped |
| Context | Entity being evaluated (user, device, organization) with attributes, flag evaluations | Runtime data |
| Experiment | Flag + metric pairing, statistical analysis of variation impact | Project-scoped |
| Metric | Custom event (click-through, conversion, latency), measured for experiments | Project-scoped |
| Release Pipeline | Staged rollout plan: flag changes across environments with approval gates | Project-scoped |
| Environment | Named deployment target (production, staging, dev) with independent flag states | Project-level |
| Audit Entry | Who changed what flag, when, in which environment, old/new values | Account-level |

## User Flows

### Creating and Rolling Out a Feature Flag

```
Developer creates a flag: key (`enable-new-checkout`), name, boolean type →
  Flag defaults to `false` in all environments → Wraps new feature code with flag check: `if... →
  Deploys code — feature is off for all users →
  Product manager opens flag → Targeting tab → enables for internal team... →
  Monitors feedback → adds 10% rollout to production users →
  Gradually increases to 50%, 100% → flag becomes permanent → remove flag from...
```


### Targeted Rollout with Segments

```
User creates Segment: "beta-users" with rules (email contains "@beta.com" OR... →
  Opens flag → Targeting → adds targeting rule: Segment "beta-users" → serve... →
  All matching users see the new feature → Segment is reusable — apply to multiple flags
```


### A/B Experiment

```
User creates Metric: "checkout-conversion" (custom event from app) →
  Creates Experiment: links flag (`checkout-variant`) with metric →
  Flag has 3 variations: "control", "variant-a", "variant-b" → Sets rollout: 34% each variation →
  Experiment runs → statistical analysis shows which variant performs best →
  Winning variant rolled out to 100%
```


### Release Pipeline

```
Team creates Release Pipeline with stages: Dev → Staging → Canary → Production →
  Links flag changes to each stage → Start release → flag enabled in Dev automatically →
  Promote to Staging → approval gate (requires team lead approval) →
  Promote to Canary (5% of production) → monitor metrics →
  Promote to Production (100%) — full rollout complete
```


## URL / Route Structure


```
/                                             # Dashboard
/{project_key}/flags                          # Flag list
/{project_key}/flags/{flag_key}               # Flag detail
/{project_key}/flags/{flag_key}/targeting     # Targeting rules
/{project_key}/segments/{segment_key}         # Segment detail
/{project_key}/contexts                       # Context explorer
/{project_key}/experiments/{key}              # Experiment detail
/{project_key}/releases/{id}                  # Release pipeline
/settings/projects                            # Project management
/settings/members                             # Team members
/settings/integrations                        # Integrations
/changelog                                    # Audit log
/{project_key}/flags/{flag_key}/variations        # Flag variations
/{project_key}/flags/{flag_key}/activity           # Flag audit log
/{project_key}/flags/{flag_key}/settings           # Flag settings
/{project_key}/flags/{flag_key}/insights           # Flag insights/analytics
/{project_key}/flags/{flag_key}/code-references    # Code references
/{project_key}/metrics/{metric_key}                # Metric detail
/settings/environments                             # Environment management
/settings/webhooks                                 # Webhook config
/settings/access-tokens                            # API tokens
/settings/security                                 # Security/SSO settings
/settings/billing                                  # Billing/plan
/settings/teams                                    # Team management
```

Project and flag keys are developer-defined slugs (e.g., `my-app`, `enable-dark-mode`). Environment key is a query parameter or part of the UI state, not the URL.

## Search & Filter

- **Flag search**: Search flags by key, name, or tag; filter by status (on/off), tags, maintainer
- **Flag list filtering**: Filter by archived, temporary/permanent, recently changed, stale (not evaluated)
- **Context search**: Search individual contexts by key or attributes
- **Segment search**: Search segments by key or name
- **Audit log search**: Filter by member, flag, project, environment, date range, action type
- **Code references**: Search codebase for flag references (integrated with GitHub/GitLab)
- **Tag system**: Flags and segments can be tagged for categorization (e.g., "frontend", "mobile", "experiment")

- **Experiment results filtering**: Filter experiment data by date range, significance level, metric
- **Release pipeline tracking**: Filter releases by status (active, completed), environment
- **Integration log search**: Search webhook delivery history and integration events
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + flag list with inline toggles + targeting rules detail |
| Desktop (1024-1280px) | Collapsible sidebar + full content |
| Tablet (768-1024px) | Sidebar as overlay + simplified flag list |
| Mobile (<768px) | Not a primary use case — basic functionality available but complex targeting rules are impractical |

- Flag list is a data-dense table — environment toggle columns visible on desktop, hidden on mobile
- Targeting rules builder uses nested conditions — requires desktop-width for comfortable editing
- Dashboard activity feed works at all sizes
- Experiment results charts resize responsively
- Audit log table scrolls horizontally on narrow screens


### Platform-Specific UX
- Inline flag toggles in the flag list enable quick on/off without opening detail pages
- Environment selector in the top bar is persistent — all views reflect the selected environment
- Targeting rules builder uses nested conditions with AND/OR logic and percentage rollouts
- Code references integration shows where each flag is used in the codebase (GitHub/GitLab)
- Stale flag detection identifies flags that haven't been evaluated recently for cleanup
- Prerequisites system links flags — a flag can require another flag to be on before it can be enabled
- Approval workflows in production environments require designated approvers before flag changes
- Contexts (evolution of "users") support multi-dimensional targeting (user, device, organization, etc.)
- Flag insights show evaluation counts, variation distribution, and targeting rule effectiveness
- Release pipelines define staged rollout plans across environments with approval gates


### Flag Lifecycle
```
created → deployed_in_code → enabled_for_internal → gradual_rollout → fully_on → permanent (remove flag from code)
                                                                                  → kill_switch (turn off in emergency)
```

### Targeting Rule Evaluation Order
```
1. Individual targeting (specific context keys)
2. Custom targeting rules (evaluated top-to-bottom, first match wins)
3. Default rule (percentage rollout or single variation)
4. Off variation (when flag is globally off)
```

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access |
| Reader | View flags, segments, contexts (no modifications) |
| Writer | Reader + create/edit flags, targeting rules, segments |
| Admin | Writer + manage projects, environments, members, integrations |
| Owner | Admin + billing, account-level settings |
| Custom roles | Enterprise: define granular permissions per resource type |
| Approval workflows | Require approval from specific roles before flag changes in production |

- Authentication: Email/password, Google OAuth, SSO/SAML (Enterprise), MFA
- Environment-level permissions: Different roles per environment (e.g., Writer in staging, Reader in production)
- Approval gates: Require approval before changes to specific flags or environments
- API tokens: Service tokens (project-scoped) and personal tokens (user-scoped)
- SDK keys: Client-side and server-side keys per environment (client-side keys are safe to expose)
- Audit trail: Every flag change logged with who, what, when, and diff
- Integrations: Slack notifications, Jira ticket linking, Datadog/New Relic metrics forwarding
