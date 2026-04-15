# Code Repository — Information Architecture

## Overview

A source code hosting platform (GitHub, GitLab, Bitbucket style). The mental model is **repositories as projects** — each repo contains code, issues, pull requests, and CI/CD. Collaboration through code review is the core workflow.

## Site Map

```
├── Home / Dashboard
│   ├── Activity Feed (recent across repos)
│   ├── My Repositories (pinned)
│   ├── Recent Activity
│   ├── Suggested Repositories
│   └── Notifications Summary
├── Repository
│   ├── Code
│   │   ├── File Browser (tree view)
│   │   ├── File Viewer (syntax highlighted)
│   │   ├── Branch / Tag Selector
│   │   ├── Commit History
│   │   ├── Commit Detail (diff view)
│   │   └── Blame View
│   ├── Issues
│   │   ├── Issue List (open/closed, filters)
│   │   ├── Issue Detail
│   │   │   ├── Title, Description (markdown)
│   │   │   ├── Labels, Assignees, Milestone
│   │   │   ├── Comments / Timeline
│   │   │   └── Linked Pull Requests
│   │   └── New Issue (templates)
│   ├── Pull Requests
│   │   ├── PR List (open/closed/merged)
│   │   ├── PR Detail
│   │   │   ├── Description
│   │   │   ├── Diff View (file-by-file or unified)
│   │   │   ├── Review Comments (inline)
│   │   │   ├── Conversation
│   │   │   ├── Commits
│   │   │   ├── Checks / CI Status
│   │   │   └── Merge Controls
│   │   └── Create PR
│   ├── Actions / CI/CD
│   │   ├── Workflow List
│   │   ├── Workflow Runs
│   │   └── Run Detail (logs, jobs, steps)
│   ├── Projects / Boards
│   │   └── Kanban Board (issues + PRs)
│   ├── Wiki
│   │   ├── Page List
│   │   └── Wiki Page (markdown)
│   ├── Releases
│   │   ├── Release List
│   │   └── Release Detail (notes, assets)
│   ├── Security
│   │   ├── Advisories
│   │   ├── Dependency Alerts
│   │   └── Code Scanning
│   ├── Insights / Analytics
│   │   ├── Contributors
│   │   ├── Traffic
│   │   ├── Commit Activity
│   │   └── Code Frequency
│   └── Settings
│       ├── General (name, visibility, features)
│       ├── Branches (protection rules)
│       ├── Webhooks
│       ├── Deploy Keys
│       ├── Collaborators
│       └── Danger Zone (archive, delete, transfer)
├── Explore
│   ├── Trending Repos
│   ├── Topics
│   └── Collections
├── Profile
│   ├── Overview (bio, pinned repos, contribution graph)
│   ├── Repositories
│   ├── Stars
│   ├── Followers / Following
│   └── Organizations
├── Organization
│   ├── Overview
│   ├── Repositories
│   ├── Teams
│   ├── Members
│   └── Settings
├── Notifications
│   ├── Inbox
│   ├── Participating
│   └── Watching
├── Search (code, repos, issues, users, PRs)
├── Settings (user)
│   ├── Profile
│   ├── SSH / GPG Keys
│   ├── Notifications
│   ├── Security
│   ├── Tokens (PAT)
│   └── Appearance
└── Docs / Help
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Global Header** | Fixed top bar | Logo, search, create (+), notifications, user menu |
| **Repo Tab Bar** | Horizontal tabs | Code, Issues, Pull Requests, Actions, Projects, Wiki, Security, Settings |
| **File Browser** | Tree sidebar or breadcrumb path | Navigate directories, switch branches |
| **Diff Navigation** | File list + inline jumps | Expand/collapse files, jump between changed files |
| **Command Palette** | ⌘K | Navigate anywhere, run actions |

### Repo Tabs with Badges
```
<> Code | ⊙ Issues (12) | ⊕ Pull Requests (3) | ▶ Actions | ⊞ Projects | 📖 Wiki | 🛡 Security | ⚙ Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Repository | name, owner, visibility, description, default_branch, stars, forks, language | has Files, Issues, PRs, Releases |
| Branch | name, head_commit, protected | belongs to Repository |
| Commit | sha, message, author, date, diff | belongs to Branch |
| File | path, content, size, language | belongs to Repository + Branch |
| Issue | number, title, body, state, labels[], assignees[], milestone | belongs to Repository |
| PullRequest | number, title, body, state, source_branch, target_branch, reviewers[], checks[] | belongs to Repository |
| Review | state (approved/changes_requested/commented), body, comments[] | belongs to PR |
| ReviewComment | body, file_path, line_number, resolved | belongs to Review |
| Release | tag, name, body, assets[], prerelease | belongs to Repository |
| Workflow | name, triggers[], jobs[] | belongs to Repository |
| WorkflowRun | workflow, status, conclusion, duration, triggered_by | belongs to Workflow |

### PR States
`draft → open → review_requested → changes_requested → approved → merged / closed`

### Issue States
`open → closed (completed / not_planned)`

## User Flows

### Code Review (Core Flow)
```
Notification → PR Detail → Review Diff → Add Inline Comments → Submit Review (approve/request changes) → Author Updates → Re-review → Merge
```

### File Browsing
```
Repo → Code Tab → Navigate Tree → View File → Blame → Commit History for File
```

### Issue Workflow
```
Issues Tab → Create Issue → Assign + Label → Work on Branch → Open PR (linked) → Merge → Issue Auto-closed
```

### CI/CD
```
Push Code → Actions Auto-trigger → View Run → Check Logs → Fix Failures → Re-run
```

## URL / Route Structure

```
/                                  → Dashboard
/:owner/:repo                     → Repo (Code tab, default branch)
/:owner/:repo/tree/:branch        → File browser at branch
/:owner/:repo/blob/:branch/:path  → View file
/:owner/:repo/commits/:branch     → Commit history
/:owner/:repo/commit/:sha         → Commit detail
/:owner/:repo/issues              → Issues
/:owner/:repo/issues/:number      → Issue detail
/:owner/:repo/issues/new          → New issue
/:owner/:repo/pulls               → Pull requests
/:owner/:repo/pull/:number        → PR detail
/:owner/:repo/pull/:number/files  → PR diff
/:owner/:repo/compare/:base...:head → Create PR
/:owner/:repo/actions             → Actions
/:owner/:repo/actions/runs/:id    → Workflow run
/:owner/:repo/releases            → Releases
/:owner/:repo/wiki                → Wiki
/:owner/:repo/settings            → Settings
/:owner                           → User/Org profile
/explore                          → Explore
/notifications                    → Notifications
/search?q=:query                  → Search
/settings                         → User settings
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Global | Code, repos, issues, PRs, users | Language, Type | Best Match, Stars, Forks, Updated |
| Issues | Title, body, comments | State, Label, Assignee, Author, Milestone | Created, Updated, Comments |
| PRs | Title, body | State, Reviewer, Author, Label, Branch | Created, Updated |
| Code (in repo) | File content | Language, Path | Relevance |

### Search Qualifiers
```
is:open is:issue label:bug assignee:@me sort:updated-desc
repo:owner/name language:python stars:>100
```

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop (≥1280px) | Full tab bar, side-by-side diff, tree sidebar |
| Tablet (768–1279px) | Scrollable tabs, unified diff, no tree sidebar |
| Mobile (<768px) | Stacked diff, minimal code browser, hamburger nav |

### Developer-Specific UX
- Monospace font throughout code views
- Syntax highlighting for 100+ languages
- Line numbers (linkable)
- Copy file/snippet buttons
- Keyboard shortcuts (? for help)
- Markdown rendering everywhere (issues, PRs, wiki, README)
- Dark mode default option

## Access Control

| Role | Read | Issues | PR | Push | Settings | Admin |
|------|------|--------|-----|------|----------|-------|
| Public | ✅ (public repos) | Create | Create (fork) | — | — | — |
| Collaborator | ✅ | CRUD | CRUD + Review | ✅ | — | — |
| Maintainer | ✅ | CRUD | CRUD + Merge | ✅ | Limited | — |
| Admin | ✅ | CRUD | CRUD + Merge | ✅ | ✅ | ✅ |
| Owner | ✅ | CRUD | CRUD + Merge | ✅ | ✅ | ✅ (including delete/transfer) |
