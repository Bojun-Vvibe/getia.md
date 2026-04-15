# Wiki / Knowledge Base — Information Architecture

## Overview

A collaborative knowledge management platform for teams and organizations (Confluence, Notion, GitBook style). The mental model is a **shared brain** — a structured, searchable repository of pages organized into spaces/workspaces, where teams create, edit, and maintain documentation together. Version history and collaboration are central.

## Site Map

```
├── Home / Dashboard
│   ├── Recent Activity Feed
│   ├── Spaces You Follow
│   ├── Recently Viewed Pages
│   ├── Recently Updated (across org)
│   ├── Starred / Bookmarked Pages
│   ├── Drafts (your unpublished work)
│   └── Announcements / Pinned
├── Spaces Directory
│   ├── My Spaces
│   ├── All Spaces
│   ├── Space Categories (Engineering, Product, HR, etc.)
│   └── Create Space
├── Space
│   ├── Space Home (overview, pinned pages)
│   ├── Page Tree (sidebar)
│   │   ├── Top-level Pages
│   │   │   ├── Child Pages
│   │   │   │   └── Grandchild Pages (unlimited nesting)
│   │   │   └── ...
│   │   └── ...
│   ├── Blog Posts (space-level blog)
│   ├── Space Settings
│   │   ├── General (name, description, logo)
│   │   ├── Permissions
│   │   ├── Sidebar Customization
│   │   └── Integrations
│   └── Space Members
├── Page
│   ├── Breadcrumb (Space > Parent > Page)
│   ├── Title
│   ├── Page Metadata (author, last updated, contributors)
│   ├── Body Content (rich text / blocks)
│   │   ├── Text (headings, paragraphs, lists)
│   │   ├── Tables
│   │   ├── Code Blocks
│   │   ├── Media (images, videos, files)
│   │   ├── Macros / Embeds (Jira, diagrams, calendars)
│   │   ├── Callouts / Info Panels
│   │   ├── Expandable Sections
│   │   └── Table of Contents (auto-generated)
│   ├── Labels / Tags
│   ├── Attachments
│   ├── Comments (inline + page-level)
│   ├── Reactions (emoji)
│   ├── Actions: Edit, Star, Watch, Share, Move, Copy, Export, Delete
│   └── Page Info
│       ├── Version History (diffs)
│       ├── View Count
│       ├── Contributors
│       └── Incoming / Outgoing Links
├── Editor
│   ├── Block-based or Rich Text Editor
│   ├── Slash Commands (/ to insert)
│   ├── @ Mentions (users, pages)
│   ├── Template Selector
│   ├── Real-time Collaboration (cursors, presence)
│   ├── Page Tree Location (parent page)
│   ├── Labels
│   └── Publish / Save as Draft
├── Templates
│   ├── Global Templates
│   ├── Space Templates
│   ├── Template Categories (Meeting Notes, RFC, Runbook, etc.)
│   └── Create Template
├── Search
│   ├── Global Search (⌘K)
│   ├── Results: Pages, Spaces, People, Files
│   ├── Filters (space, author, date, label)
│   └── Advanced Search (CQL / query builder)
├── People Directory
│   ├── User Profile
│   │   ├── Name, Avatar, Role, Team
│   │   ├── Recent Contributions
│   │   └── Spaces & Pages
│   └── Teams
├── Admin / Settings
│   ├── Organization Settings
│   ├── User Management (invite, roles, groups)
│   ├── Space Management
│   ├── Global Permissions
│   ├── Templates Management
│   ├── Integrations (Slack, Jira, GitHub)
│   ├── Import / Export
│   ├── Audit Log
│   └── Billing
└── Trash / Archive
    ├── Deleted Pages (restore / permanent delete)
    └── Archived Spaces
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed, always visible | Logo, global search (⌘K), spaces menu, create (+), notifications, user avatar |
| **Sidebar (in Space)** | Left sidebar, collapsible | Page tree (nested), drag-to-reorder, expand/collapse |
| **Breadcrumbs** | Above page title | Space > Parent Page > Current Page (clickable) |
| **Page Actions** | Top-right toolbar | Edit, Star, Watch, Share, ⋯ More (move, copy, export, delete) |
| **On-Page ToC** | Right sidebar or sticky | Auto-generated from headings, scroll-synced |
| **Quick Switcher** | ⌘K overlay | Jump to any page, space, or person |

### Sidebar (Space Context)
```
[Space Logo + Name]
─────────────
📄 Space Home
─────────────
Pages ▾
  📄 Getting Started
  📂 Architecture ▾
    📄 Overview
    📄 Backend
    📄 Frontend
  📂 Processes ▾
    📄 On-call Runbook
    📄 Incident Response
  📄 FAQ
─────────────
📝 Blog
⚙️ Space Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Space | key, name, description, icon, type (global/personal/team), status (active/archived) | has many Pages, Members, Permissions |
| Page | title, slug, body (block content), status (draft/published), version, created_at, updated_at, position (sort order) | belongs to Space, has parent Page (tree), has Comments, Labels, Attachments, Versions |
| PageVersion | version_number, body, edited_by, edited_at, change_message | belongs to Page |
| Comment | body, type (inline/page), anchor (text selection for inline), resolved, created_at | belongs to Page and User |
| Label | name | many-to-many with Pages |
| Attachment | filename, mime_type, size, url, uploaded_at | belongs to Page and User |
| Template | title, body, category, scope (global/space) | belongs to Space (or global) |
| User | name, email, avatar, role (admin/member/guest), teams[] | has many Pages, Comments |
| Group | name, members[] | has Permissions |
| Permission | subject (user/group), resource (space/page), level (view/edit/admin) | connects User/Group to Space/Page |
| BlogPost | title, body, published_at, excerpt | belongs to Space and User |
| Notification | type, actor, target, read, created_at | belongs to User |

### Page Content Blocks
```
paragraph | heading (h1-h6) | bullet_list | numbered_list | task_list
table | code_block | quote | callout (info/warning/error/success)
image | video | file | divider | expand | toc
embed (external URL) | mention (user/page) | date | status_badge
```

### Permission Levels
```
View → Can read pages
Edit → Can create/edit pages
Admin → Can manage space settings, permissions, delete
```

## User Flows

### Find Information
```
⌘K → Type query → Select result → Read page → Follow link to related page
```

### Create a Page
```
Space Sidebar → [+ Create] → Select template (or blank) → Write content → Add labels → Publish
```

### Collaborative Editing
```
Open page → Edit → See co-editors' cursors → Make changes → Auto-save → Publish
```

### Review and Comment
```
Read page → Select text → Add inline comment → @mention author → Author gets notification → Resolves comment
```

### Organize Knowledge
```
Space → Page tree → Drag page to new position → Nest under parent → Reorder siblings
```

### Version Recovery
```
Page → ⋯ More → Page History → Compare versions → Restore previous version
```

## URL / Route Structure

```
/                                    → Home / Dashboard
/spaces                              → Spaces Directory
/spaces/create                       → Create Space
/s/:spaceKey                         → Space Home
/s/:spaceKey/pages                   → Page Tree
/s/:spaceKey/page/:pageId/:slug      → Page View
/s/:spaceKey/page/:pageId/edit       → Page Editor
/s/:spaceKey/page/:pageId/history    → Version History
/s/:spaceKey/page/:pageId/diff/:v1/:v2 → Version Comparison
/s/:spaceKey/blog                    → Space Blog
/s/:spaceKey/blog/:postId            → Blog Post
/s/:spaceKey/settings                → Space Settings
/s/:spaceKey/permissions             → Space Permissions
/search?q=:query                     → Search Results
/search?q=:query&space=:key          → Search within Space
/templates                           → Template Gallery
/people                              → People Directory
/people/:userId                      → User Profile
/drafts                              → My Drafts
/recent                              → Recently Viewed
/starred                             → Starred Pages
/admin                               → Organization Admin
/admin/users                         → User Management
/admin/groups                        → Group Management
/admin/audit-log                     → Audit Log
/trash                               → Trash
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global (⌘K) | Pages, Spaces, People, Attachments | Space, Author, Label, Date Range, Content Type | Relevance, Last Updated, Created Date |
| Within Space | Pages in space | Label, Author, Date Range | Relevance, Last Updated, Title |
| Page Tree | Page titles | — | Tree position, Alphabetical |
| Admin | Users, Groups, Audit events | Role, Status, Date | Name, Date, Activity |

### Search Features
- Full-text search across page content
- CQL / advanced query syntax
- Search within code blocks
- Search attachments (PDF, Office docs)
- Recent searches and suggestions
- Highlight matching text in results
- Keyboard navigation (⌘K quick switcher)

## Responsive Behavior

| Breakpoint | Sidebar | Content | ToC |
|------------|---------|---------|-----|
| Desktop (≥1280px) | Fixed left (260px), resizable | Center (max 900px) | Fixed right (200px) |
| Tablet (768–1279px) | Collapsible overlay | Full width | Hidden (dropdown) |
| Mobile (<768px) | Hamburger drawer | Full width | Hidden |

### Editor Behavior
- Desktop: Full toolbar, side-by-side preview option
- Tablet: Simplified toolbar, auto-save
- Mobile: Minimal toolbar (expandable), block-level editing
- Real-time collaboration: all breakpoints (presence indicators adapt)

## Access Control

| Role | View | Create | Edit | Delete | Admin |
|------|------|--------|------|--------|-------|
| Guest | Invited spaces only | — | — | — | — |
| Member | All non-restricted | ✅ | Own pages (or space-level) | Own pages | — |
| Space Admin | ✅ | ✅ | All in space | All in space | Space settings |
| Org Admin | ✅ | ✅ | ✅ | ✅ | Full org settings |

### Permission Inheritance
```
Organization defaults → Space permissions → Page restrictions (override)
```
- Pages inherit space permissions by default
- Individual pages can be restricted to specific users/groups
- "View restrictions" hide pages from search and navigation for non-permitted users
