---
brand: GitHub
tagline: "The world's leading code hosting platform. Pull requests, Actions CI/CD, and social coding."
category: Code Repository
website: https://github.com
---

# GitHub — Information Architecture

## Overview

GitHub is the dominant source code hosting platform, home to 100M+ developers. The mental model is **repositories as collaboration hubs** — each repo contains code, issues, pull requests, and CI/CD workflows. GitHub differentiates through its social coding graph (follow, star, fork), GitHub Actions (integrated CI/CD), Copilot (AI pair programming), and the pull request review flow as the industry-standard code review primitive. The platform also serves as a developer identity (profile = portfolio).

## Site Map

```
├── Home / Dashboard
│   ├── Activity Feed (following, starred repos)
│   ├── Pinned Repositories
│   ├── Recent Repositories
│   ├── Suggested Repositories
│   ├── Explore Call-to-Action
│   └── Copilot Chat (sidebar)
├── Repository
│   ├── <> Code
│   │   ├── File Browser (tree view + breadcrumb)
│   │   ├── File Viewer (syntax highlighted, blame toggle)
│   │   ├── Branch / Tag Selector (dropdown)
│   │   ├── Commit History
│   │   ├── Commit Detail (diff view)
│   │   ├── Blame View (line-by-line annotations)
│   │   ├── README (auto-rendered below tree)
│   │   └── Go to File (fuzzy finder)
│   ├── ⊙ Issues
│   │   ├── Issue List (open/closed, label/milestone/assignee filters)
│   │   ├── Issue Detail
│   │   │   ├── Title, Body (Markdown, task lists)
│   │   │   ├── Labels, Assignees, Milestone, Projects
│   │   │   ├── Comments / Timeline (events, references)
│   │   │   ├── Linked Pull Requests
│   │   │   └── Development Section (branch, PR)
│   │   ├── New Issue (templates, forms)
│   │   └── Issue Templates Config
│   ├── ⊕ Pull Requests
│   │   ├── PR List (open/closed/merged, review status)
│   │   ├── PR Detail
│   │   │   ├── Conversation Tab (description, comments, timeline)
│   │   │   ├── Commits Tab
│   │   │   ├── Checks Tab (CI status from Actions)
│   │   │   ├── Files Changed Tab
│   │   │   │   ├── Diff View (unified / split)
│   │   │   │   ├── Inline Review Comments
│   │   │   │   ├── File Tree (left sidebar)
│   │   │   │   ├── Viewed Checkbox (per file)
│   │   │   │   └── Suggestion Blocks (apply in PR)
│   │   │   ├── Review Summary (approve / request changes / comment)
│   │   │   ├── Merge Controls (merge / squash / rebase)
│   │   │   ├── Merge Queue Status
│   │   │   └── Auto-merge Toggle
│   │   └── Create PR (compare branches)
│   ├── ▶ Actions
│   │   ├── Workflow List (from .github/workflows/)
│   │   ├── Workflow Runs (filterable by branch, status, event)
│   │   ├── Run Detail
│   │   │   ├── Job Graph (visual DAG)
│   │   │   ├── Job Logs (step-by-step, searchable)
│   │   │   ├── Artifacts
│   │   │   └── Re-run Controls (all / failed)
│   │   └── Workflow Editor (YAML in-browser)
│   ├── ⊞ Projects (v2)
│   │   ├── Project Board (table / board / roadmap views)
│   │   ├── Custom Fields
│   │   ├── Automation Rules
│   │   └── Insights Charts
│   ├── 📖 Wiki
│   ├── 🛡 Security
│   │   ├── Security Overview
│   │   ├── Dependabot Alerts
│   │   ├── Code Scanning (CodeQL)
│   │   ├── Secret Scanning
│   │   └── Security Advisories
│   ├── 📊 Insights
│   │   ├── Pulse (recent activity summary)
│   │   ├── Contributors
│   │   ├── Community Standards
│   │   ├── Traffic (clones, views)
│   │   ├── Commits (activity graph)
│   │   ├── Code Frequency
│   │   ├── Dependency Graph
│   │   ├── Network (fork graph)
│   │   └── Forks
│   ├── ⚙ Settings
│   │   ├── General (features, merge button options)
│   │   ├── Collaborators & Teams
│   │   ├── Branches (protection rules, rulesets)
│   │   ├── Tags (protection)
│   │   ├── Rules → Rulesets
│   │   ├── Actions (runner config, permissions)
│   │   ├── Webhooks
│   │   ├── Environments (deploy targets)
│   │   ├── Pages
│   │   ├── Codespaces
│   │   ├── Security & Analysis
│   │   └── Danger Zone (archive, transfer, delete)
│   └── Releases
│       ├── Release List (tags, assets)
│       └── Create Release
├── Codespaces
│   ├── My Codespaces (list)
│   ├── Create Codespace (from repo/branch/PR)
│   └── Codespace Editor (VS Code in browser)
├── Copilot
│   ├── Chat (conversational, context-aware)
│   ├── PR Summary (auto-generated)
│   └── Code Review Suggestions
├── Explore
│   ├── Trending (repos, developers — daily/weekly/monthly)
│   ├── Topics
│   ├── Collections
│   ├── Events
│   └── GitHub Sponsors (discover)
├── Marketplace
│   ├── Actions (reusable workflows)
│   └── Apps (integrations)
├── Profile
│   ├── Overview (bio, pinned repos, contribution graph)
│   ├── Repositories
│   ├── Projects
│   ├── Packages
│   ├── Stars
│   ├── Followers / Following
│   ├── Achievements (badges)
│   └── Sponsors (if enabled)
├── Organization
│   ├── Overview (pinned repos, README)
│   ├── Repositories
│   ├── Teams (nested, with repo access)
│   ├── People (members, outside collaborators)
│   ├── Projects
│   ├── Packages
│   ├── Security (org-level overview)
│   └── Settings (billing, roles, audit log)
├── Notifications
│   ├── Inbox (grouped by repo)
│   ├── Saved
│   ├── Done
│   └── Filters (participating, watching, custom)
├── Global Search
│   ├── Code Search (new engine, regex, symbol search)
│   ├── Repositories
│   ├── Issues
│   ├── Pull Requests
│   ├── Discussions
│   ├── Users
│   ├── Commits
│   └── Topics
├── Settings (User)
│   ├── Profile
│   ├── Account
│   ├── Appearance (theme: light/dark/auto)
│   ├── Accessibility
│   ├── Notifications
│   ├── Billing & Plans
│   ├── Emails
│   ├── SSH & GPG Keys
│   ├── Security (2FA, sessions, tokens)
│   ├── Developer Settings (OAuth apps, PATs, GitHub Apps)
│   ├── Copilot Settings
│   ├── Codespaces Settings
│   └── Organizations
└── GitHub Docs (docs.github.com)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Global Header** | Fixed top bar | GitHub logo, search (/ to focus), create (+) dropdown, notifications, user avatar |
| **Repo Tab Bar** | Horizontal tabs with counters | Code, Issues (12), Pull Requests (3), Actions, Projects, Wiki, Security, Insights, Settings |
| **File Browser** | Tree view (left sidebar, toggleable) | Navigate directories, switch branches via dropdown |
| **PR File Navigator** | Left sidebar file tree | Check off reviewed files, jump between changes |
| **Command Palette** | ⌘K / Ctrl+K | Navigate repos, files, commands; context-aware |
| **Breadcrumbs** | Below repo tabs | owner / repo / tree / branch / path |
| **Mobile Nav** | Bottom tab bar | Home, Notifications, Explore, Profile |

### Repo Tabs with Badges
```
<> Code | ⊙ Issues (12) | ⊕ Pull Requests (3) | ▶ Actions | ⊞ Projects | 📖 Wiki | 🛡 Security | 📊 Insights | ⚙ Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Repository | name, owner, visibility (public/private/internal), description, default_branch, topics[], stars, forks, language, license | has Files, Issues, PRs, Releases, Actions, Projects |
| Branch | name, head_commit, protected, rules[] | belongs to Repository |
| Commit | sha, message, author, committer, date, diff, verified (GPG) | belongs to Branch |
| File | path, content, size, language, last_commit | belongs to Repository + Branch |
| Issue | number, title, body (Markdown), state, labels[], assignees[], milestone, project | belongs to Repository |
| PullRequest | number, title, body, state, source_branch, target_branch, reviewers[], checks[], draft, auto_merge, merge_queue_entry | belongs to Repository |
| Review | state (approved/changes_requested/commented/pending), body, comments[] | belongs to PR |
| ReviewComment | body, diff_hunk, path, line, suggestion_block | belongs to Review |
| CheckRun | name, status, conclusion, started_at, completed_at, output | belongs to PR (via commit) |
| Workflow | name, path (.github/workflows/), triggers[], jobs[] | belongs to Repository |
| WorkflowRun | workflow, status, conclusion, duration, triggered_by, event, branch | belongs to Workflow |
| Release | tag, name, body, assets[], prerelease, draft | belongs to Repository |
| Discussion | title, body, category, answered, comments[] | belongs to Repository |
| Project (v2) | title, description, fields[], views (table/board/roadmap), items[] | belongs to User or Org |
| Codespace | name, repo, branch, machine_type, status, idle_timeout | belongs to User |
| Package | name, type (npm/container/maven/etc.), versions[] | belongs to Repository or Org |

### PR States
```
draft → open → review_requested → changes_requested → approved → merge_queue → merged
                                                                              → closed
```

### Issue States
```
open → closed (completed / not_planned / duplicate)
```

### Actions Run States
```
queued → in_progress → completed (success / failure / cancelled / skipped)
```

## User Flows

### Code Review (Core Flow)
```
Notification (review requested) → PR Detail → Conversation (read description) → Files Changed → Review diff file-by-file → Add inline comments / suggestions → Submit Review (approve / request changes) → Author pushes fixes → Re-review → Approve → Merge (squash) → Branch deleted
```

### CI/CD with Actions
```
Push to branch → Actions auto-trigger (on: push) → Workflow runs → Jobs execute (matrix) → View logs per step → Check status on PR → Fix failures → Re-run failed jobs → All green → Merge
```

### Merge Queue Flow
```
PR approved + checks pass → Add to merge queue → Queue runs checks on merge commit → Pass → Auto-merged → Branch deleted
```

### Issue to PR Workflow
```
Issues tab → Create issue → Assign + label → Create branch from issue → Code changes → Open PR (auto-linked to issue via "Fixes #123") → Review → Merge → Issue auto-closed
```

### Codespaces Development
```
Repo → Code → Open in Codespace → VS Code loads in browser → Edit code → Terminal → Commit → Push → Open PR (from Codespace)
```

## URL / Route Structure

```
/                                  → Dashboard
/:owner/:repo                     → Repository (Code tab)
/:owner/:repo/tree/:branch/:path  → File browser at path
/:owner/:repo/blob/:branch/:path  → View file
/:owner/:repo/commits/:branch     → Commit history
/:owner/:repo/commit/:sha         → Commit detail
/:owner/:repo/issues              → Issues
/:owner/:repo/issues/:number      → Issue detail
/:owner/:repo/issues/new          → New issue (template chooser)
/:owner/:repo/pulls               → Pull requests
/:owner/:repo/pull/:number        → PR detail (Conversation tab)
/:owner/:repo/pull/:number/files  → PR diff (Files changed)
/:owner/:repo/pull/:number/commits → PR commits
/:owner/:repo/pull/:number/checks → PR checks
/:owner/:repo/compare/:base...:head → Compare / create PR
/:owner/:repo/actions             → Actions
/:owner/:repo/actions/workflows/:file → Workflow runs
/:owner/:repo/actions/runs/:id    → Workflow run detail
/:owner/:repo/actions/runs/:id/job/:jobId → Job logs
/:owner/:repo/releases            → Releases
/:owner/:repo/releases/tag/:tag   → Release detail
/:owner/:repo/security            → Security overview
/:owner/:repo/settings            → Settings
/:owner/:repo/projects            → Repo projects
/:owner/:repo/discussions         → Discussions
/:owner/:repo/wiki                → Wiki
/:owner/:repo/packages            → Packages
/codespaces                        → My Codespaces
/orgs/:org                         → Organization
/orgs/:org/teams                   → Teams
/orgs/:org/people                  → Members
/:username                         → User profile
/:username?tab=repositories        → User's repos
/:username?tab=stars               → User's stars
/explore                           → Explore
/trending                          → Trending
/marketplace                       → Marketplace
/notifications                     → Notifications
/search?q=:query&type=:type        → Search
/settings                          → User settings
/settings/tokens                   → Personal access tokens
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Global | Code, repos, issues, PRs, discussions, users, commits, topics | Language, type, org/user scope | Best Match, Stars, Forks, Updated, Recently Indexed |
| Code Search | File content, paths, symbols | Language, path, repo, org, regex, symbol type | Relevance |
| Issues | Title, body, comments | State, label, assignee, author, milestone, project, type (issue/PR) | Created, Updated, Comments, Reactions |
| PRs | Title, body | State, reviewer, author, label, branch, draft, merge status | Created, Updated |
| Actions | Workflow name, run ID | Status, branch, event, actor | Date |

### Search Qualifiers (GitHub-specific)
```
is:open is:issue label:bug assignee:@me sort:updated-desc
repo:owner/name language:python stars:>100
is:pr review:approved draft:false
path:src/**.ts content:"function"
```

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop (>=1280px) | Full tab bar, side-by-side diff, file tree sidebar, contribution graph |
| Tablet (768-1279px) | Scrollable tabs, unified diff, no file tree sidebar |
| Mobile (<768px) | Native app (iOS/Android) preferred; web: stacked diff, minimal code browser, hamburger nav, bottom tab bar |

### GitHub-Specific UX
- Monospace font throughout code views
- Syntax highlighting for 300+ languages
- Line numbers (linkable via #L42, range via #L10-L20)
- Markdown rendering everywhere (issues, PRs, wiki, README, discussions)
- Contribution graph (green squares) on profile
- Dark/Light/Auto theme with dimmed dark option
- Keyboard shortcuts (press `?` for full list)
- Command palette (⌘K) for power navigation
- Hover cards on usernames and issues/PRs
- Copy-to-clipboard on SHA, file content, code blocks
- GitHub Mobile (iOS/Android) for notifications and reviews

## Access Control

| Role | Read | Issues | PR | Push | Merge | Settings | Admin |
|------|------|--------|-----|------|-------|----------|-------|
| Public | ✅ (public repos) | Create | Create (fork first) | — | — | — | — |
| Read | ✅ | Create | Create (fork) | — | — | — | — |
| Triage | ✅ | CRUD + manage | CRUD | — | — | — | — |
| Write | ✅ | CRUD | CRUD + Review | ✅ | ✅ (if rules allow) | — | — |
| Maintain | ✅ | CRUD | CRUD + Merge | ✅ | ✅ | Limited | — |
| Admin | ✅ | CRUD | CRUD + Merge | ✅ | ✅ | ✅ | ✅ |

### Branch Protection & Rulesets
- Required reviews (1+, dismiss stale, CODEOWNERS)
- Required status checks (CI must pass)
- Merge queue enforcement
- Signed commits required
- Force push / deletion restrictions
- Rulesets: org-level rules that apply across repos
