---
brand: Terraform Cloud
tagline: "Infrastructure as Code collaboration platform. Plan, apply, and manage Terraform runs at scale."
category: Infrastructure
website: https://app.terraform.io
---

# Terraform Cloud — Information Architecture

## Overview

Terraform Cloud (by HashiCorp) is the managed platform for Terraform, the dominant Infrastructure as Code (IaC) tool. The mental model is **workspaces as infrastructure environments** — each workspace maps to a Terraform configuration (usually a git repo) and an infrastructure state file. Teams collaborate by reviewing Terraform plans before applying changes to real infrastructure. Terraform Cloud differentiates through remote state management, policy-as-code (Sentinel/OPA), cost estimation, drift detection, private module registry, and a plan/apply workflow that mirrors code review (speculative plans on PRs, approval-gated applies).

## Site Map

```
├── Dashboard (Organization Overview)
│   ├── Workspace Health Summary
│   ├── Recent Runs (across workspaces)
│   ├── Policy Check Failures
│   ├── Drift Detection Alerts
│   └── Quick Actions (create workspace, start run)
├── Workspaces
│   ├── Workspace List (filterable by project, status, tags)
│   ├── Workspace Detail
│   │   ├── Overview
│   │   │   ├── Current State (resources managed)
│   │   │   ├── Last Run Status
│   │   │   ├── Lock Status
│   │   │   ├── Terraform Version
│   │   │   └── VCS Connection
│   │   ├── Runs
│   │   │   ├── Run List (plan-only, plan & apply, destroy)
│   │   │   ├── Run Detail
│   │   │   │   ├── Plan Phase
│   │   │   │   │   ├── Plan Output (resource changes: add/change/destroy)
│   │   │   │   │   ├── Resource Diff (attribute-level changes)
│   │   │   │   │   └── Cost Estimation (before apply)
│   │   │   │   ├── Policy Check Phase
│   │   │   │   │   ├── Sentinel / OPA Policy Results
│   │   │   │   │   ├── Pass / Soft-Fail / Hard-Fail
│   │   │   │   │   └── Override (with approval)
│   │   │   │   ├── Apply Phase
│   │   │   │   │   ├── Apply Output (resource-by-resource progress)
│   │   │   │   │   ├── State Change Summary
│   │   │   │   │   └── Apply Status (applied / errored)
│   │   │   │   ├── Confirmation Step (manual approve for applies)
│   │   │   │   ├── Run Triggers (cross-workspace dependencies)
│   │   │   │   └── Run Status (pending → planning → planned → policy_check → apply → applied)
│   │   │   └── Queue (pending runs)
│   │   ├── States
│   │   │   ├── State Versions (history of state files)
│   │   │   ├── State Detail (resource list with attributes)
│   │   │   ├── State Download (JSON)
│   │   │   └── State Rollback
│   │   ├── Variables
│   │   │   ├── Terraform Variables (input variables)
│   │   │   ├── Environment Variables (TF_VAR_, AWS_*, etc.)
│   │   │   ├── Sensitive Toggle (masked)
│   │   │   └── Variable Sets (shared across workspaces)
│   │   ├── Resources
│   │   │   ├── Resource List (managed infrastructure)
│   │   │   ├── Resource Detail (attributes, state)
│   │   │   └── Drift Detection (planned vs actual)
│   │   ├── Settings
│   │   │   ├── General (name, execution mode, Terraform version)
│   │   │   ├── VCS (repository, branch, directory, trigger patterns)
│   │   │   ├── Team Access (granular permissions per team)
│   │   │   ├── Run Triggers (upstream workspace dependencies)
│   │   │   ├── Notifications (Slack, email, webhook, Teams)
│   │   │   ├── SSH Key (for private modules)
│   │   │   ├── Auto Apply (skip manual confirmation)
│   │   │   ├── Remote State Sharing (expose to other workspaces)
│   │   │   └── Destruction & Deletion
│   │   └── Locking (prevent concurrent runs)
│   └── Create Workspace
│       ├── VCS-driven (GitHub, GitLab, Bitbucket, Azure DevOps)
│       ├── CLI-driven (`terraform plan/apply` from terminal)
│       └── API-driven (CI/CD pipeline triggers)
├── Projects
│   ├── Project List
│   ├── Project Detail
│   │   ├── Workspaces (grouped)
│   │   ├── Variable Sets (project-scoped)
│   │   └── Team Access (project-level permissions)
│   └── Create Project
├── Registry (Private Module Registry)
│   ├── Modules
│   │   ├── Module List
│   │   ├── Module Detail
│   │   │   ├── README (documentation)
│   │   │   ├── Versions (semver)
│   │   │   ├── Inputs / Outputs
│   │   │   ├── Dependencies
│   │   │   ├── Resources (created by module)
│   │   │   └── Usage Example (HCL snippet)
│   │   └── Publish Module (from VCS)
│   ├── Providers
│   │   ├── Provider List
│   │   └── Provider Versions
│   ├── Policy Sets (Sentinel / OPA)
│   │   ├── Policy Set List
│   │   ├── Policy Detail (code, enforcement level)
│   │   └── Publish from VCS
│   └── Run Tasks (third-party checks)
│       ├── Task List
│       └── Task Results (per run)
├── Policy Sets
│   ├── Policy Set List
│   ├── Policy Set Detail
│   │   ├── Policies (Sentinel or OPA Rego)
│   │   ├── Enforcement Level (advisory, soft-mandatory, hard-mandatory)
│   │   ├── Workspaces Attached
│   │   └── VCS Source
│   └── Create Policy Set
├── Variable Sets
│   ├── Variable Set List (org-wide, project, workspace scoped)
│   ├── Variable Set Detail (variables, scope)
│   └── Create Variable Set
├── Explorer (Resource Explorer)
│   ├── Cross-Workspace Resource Search
│   ├── Resource Types
│   ├── Resource Detail (across workspaces)
│   └── Drift Summary
├── Teams
│   ├── Team List
│   ├── Team Detail
│   │   ├── Members
│   │   ├── Workspace Access (per workspace permissions)
│   │   ├── Project Access
│   │   └── Token (team API token)
│   └── Create Team
├── Settings (Organization)
│   ├── General (name, email, plan)
│   ├── Authentication
│   │   ├── SSO / SAML
│   │   └── Two-Factor Enforcement
│   ├── VCS Providers (connected GitHub/GitLab/etc.)
│   ├── API Tokens (organization, team, user)
│   ├── Agents (self-hosted Terraform Cloud agents)
│   ├── Cost Estimation Settings
│   ├── Run Tasks (global integrations)
│   ├── Notifications (global)
│   ├── Audit Log
│   └── Plan & Billing
├── CLI Integration
│   ├── terraform login (authenticate)
│   ├── terraform init (configure backend)
│   ├── terraform plan (remote plan)
│   ├── terraform apply (remote apply)
│   └── terraform state (remote state operations)
└── Docs (developer.hashicorp.com)
    ├── Terraform Language (HCL)
    ├── Terraform Cloud
    ├── Provider Documentation
    └── Registry
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible | Workspaces, Projects, Registry, Policy Sets, Variable Sets, Explorer, Teams, Settings |
| **Top Bar** | Fixed | Organization switcher, global search, + Create (workspace/project), help, user menu |
| **Workspace Tabs** | Horizontal tabs within workspace | Overview, Runs, States, Variables, Resources, Settings |
| **Run Phases** | Step indicator within run detail | Plan → Cost Estimation → Policy Check → Confirm → Apply |
| **Breadcrumbs** | Below top bar | Organization > Project > Workspace > Run #42 |
| **State Browser** | Tree view within States | Resource hierarchy (module → resource type → resource instance) |

### Sidebar Structure
```
[Organization ▾]
───────────────
📦 Workspaces
📁 Projects
📚 Registry
  Modules | Providers | Policy Sets
🛡 Policy Sets
🔧 Variable Sets
🔍 Explorer
───────────────
👥 Teams
⚙ Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Organization | name, email, plan (free/team/business/plus), sso, cost_estimation | has Workspaces, Teams, Projects, Registry |
| Project | name, description, teams[] | has many Workspaces, Variable Sets |
| Workspace | name, project, execution_mode (remote/local/agent), terraform_version, vcs_repo, auto_apply, locked, tags[] | belongs to Project, has Runs, States, Variables |
| Run | id, status, is_destroy, plan_only, source (vcs/cli/api), commit_sha, commit_message, created_by | belongs to Workspace |
| Plan | resource_additions, resource_changes, resource_destructions, output, cost_estimation | belongs to Run |
| Apply | status, output, resource_count | belongs to Run |
| PolicyCheck | status, result (passed/soft_failed/hard_failed), sentinel_policies[] | belongs to Run |
| StateVersion | serial, terraform_version, resources_count, outputs{}, created_at | belongs to Workspace |
| Variable | key, value (encrypted if sensitive), category (terraform/env), sensitive, hcl | belongs to Workspace or VariableSet |
| VariableSet | name, scope (org/project/workspace), variables[] | belongs to Organization |
| Module | name, provider, source (vcs), versions[], inputs[], outputs[] | belongs to Registry |
| PolicySet | name, enforcement (advisory/soft/hard), policies[], workspaces[] | belongs to Organization |
| Team | name, members[], visibility, workspace_access[], project_access[] | belongs to Organization |
| Agent | name, status, version, last_ping | belongs to Agent Pool |
| RunTask | name, url, enforcement, stages[] | belongs to Organization |

### Run Status Flow
```
pending → fetching → planning → planned → cost_estimating → cost_estimated → policy_checking → policy_checked → confirmed → applying → applied
                   → plan_errored
                                                                              → policy_soft_failed (override possible)
                                                                              → policy_hard_failed (blocked)
                                                           → discarded (user cancelled)
                                                                                                    → apply_errored
```

### Workspace Execution Modes
- **Remote**: Plan + Apply run on Terraform Cloud infrastructure
- **Local**: Only state storage remote; execution on developer machine
- **Agent**: Execution on self-hosted agent (for private network access)

## User Flows

### VCS-Driven Workflow (Primary)
```
Push commit to main → Terraform Cloud detects via webhook → Queue run → Plan phase (show resource changes) → Cost estimation → Policy check (Sentinel/OPA) → Wait for confirmation (if not auto-apply) → Apply → Infrastructure updated → State saved → Notification sent
```

### PR Speculative Plan
```
Open PR in GitHub → Terraform Cloud runs speculative plan → Plan output posted as PR comment → Team reviews infrastructure changes alongside code → Merge PR → Triggered run → Plan → Confirm → Apply
```

### CLI-Driven Workflow
```
terraform init (configure remote backend) → terraform plan (runs remotely, streams output to terminal) → Review plan output → terraform apply (remote apply with manual confirmation in dashboard or terminal)
```

### Drift Detection
```
Scheduled drift check → Terraform Cloud runs refresh → Compares actual infra to state → Drift detected → Alert → View diff → Create run to reconcile → Apply → Drift resolved
```

### Module Publishing
```
Registry → Publish Module → Connect VCS repo → Tag version (semver) → Module published → Other workspaces: module "vpc" { source = "app.terraform.io/org/vpc/aws" version = "~> 1.0" }
```

### Policy Enforcement
```
Create Sentinel policy (e.g., "no public S3 buckets") → Attach to workspaces → Run triggers → Plan phase → Policy check phase → Policy fails (hard-mandatory) → Run blocked → Developer fixes config → Re-run → Policy passes → Apply
```

## URL / Route Structure

```
/app/:org                                  → Organization dashboard
/app/:org/workspaces                       → Workspace list
/app/:org/workspaces/new                   → Create workspace
/app/:org/workspaces/:workspace            → Workspace overview
/app/:org/workspaces/:workspace/runs       → Run list
/app/:org/workspaces/:workspace/runs/:id   → Run detail
/app/:org/workspaces/:workspace/states     → State versions
/app/:org/workspaces/:workspace/states/:id → State detail
/app/:org/workspaces/:workspace/variables  → Variables
/app/:org/workspaces/:workspace/resources  → Resources
/app/:org/workspaces/:workspace/settings   → Workspace settings
/app/:org/projects                         → Project list
/app/:org/projects/:project                → Project detail
/app/:org/registry/modules                 → Module registry
/app/:org/registry/modules/:module         → Module detail
/app/:org/registry/providers               → Provider registry
/app/:org/policy-sets                      → Policy sets
/app/:org/policy-sets/:id                  → Policy set detail
/app/:org/settings/variable-sets           → Variable sets
/app/:org/explorer                         → Resource explorer
/app/:org/settings/teams                   → Teams
/app/:org/settings/teams/:team             → Team detail
/app/:org/settings                         → Organization settings
/app/:org/settings/vcs                     → VCS providers
/app/:org/settings/authentication          → SSO / SAML
/app/:org/settings/agents                  → Agent pools
/app/:org/settings/cost-estimation         → Cost estimation
/app/:org/settings/run-tasks               → Run tasks
/app/:org/settings/audit-log               → Audit log
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Workspaces | Workspace name, tags | Project, Status (healthy/errored/drifted), Current Run Status, Tags, Execution Mode | Name, Last Run, Updated |
| Runs | Run ID, commit message | Status, Source (VCS/CLI/API), Plan Status | Created (newest) |
| States | Resource names, types | State Version | Serial Number, Created |
| Registry | Module name, provider | Provider, Verified | Name, Downloads, Updated |
| Explorer | Resource name, type, workspace | Resource Type, Provider, Workspace, Drift Status | Resource Type, Workspace |
| Variables | Variable key | Category (terraform/env), Sensitive, Source (workspace/variable set) | Key |

## Responsive Behavior

| Breakpoint | Sidebar | Workspace | Run Detail | Plan Output |
|------------|---------|-----------|-----------|-------------|
| Desktop (>=1280px) | Expanded | Full tabs + overview | Phase indicators + full output | Monospace plan output with diff highlighting |
| Tablet (768-1279px) | Collapsed (icons) | Stacked tabs | Simplified phases | Scrollable plan output |
| Mobile (<768px) | Hamburger | Stacked | Phase list | Plan output (horizontal scroll) |

### Terraform Cloud-Specific UX
- **Plan output** in monospace with `+` (green, add), `~` (yellow, change), `-` (red, destroy) highlighting
- **Resource diff**: attribute-level comparison (before → after)
- **Cost estimation**: dollar impact of changes shown before apply
- **Policy check badges**: pass/fail/override indicators per policy
- **State browser**: hierarchical tree of all managed resources
- **Run phases**: visual step indicator (plan → cost → policy → confirm → apply)
- **Lock indicator**: workspace locked during active run (prevents concurrent modifications)
- **VCS integration**: commit SHA, PR link, branch displayed on each run
- **Speculative plan comments**: posted directly on GitHub/GitLab PRs
- **Sentinel policy editor**: syntax-highlighted policy code

## Access Control

| Permission | Read | Plan | Apply | Variables | State | Lock | Admin |
|-----------|------|------|-------|-----------|-------|------|-------|
| Read | ✅ | — | — | — | View | — | — |
| Plan | ✅ | ✅ | — | Read (masked sensitive) | View | — | — |
| Write | ✅ | ✅ | ✅ | CRUD | View + Download | Lock/Unlock | — |
| Admin | ✅ | ✅ | ✅ | CRUD | CRUD | Lock/Unlock | ✅ |

### Organization Roles
- **Owner**: full organization control, billing, SSO
- **Member**: access based on team assignments
- **Team-level access**: per-workspace or per-project granular permissions

### Security Features
- State file encryption at rest
- Sensitive variables encrypted, never displayed
- SSO / SAML for enterprise authentication
- Audit logging for all operations
- Agent pools for private network access
- Run task enforcement (third-party security checks pre-apply)
- Cost estimation guardrails
- Sentinel/OPA policy-as-code enforcement
