# Note-Taking App — Information Architecture

## Overview

A flexible note-taking and knowledge management tool (Notion, Obsidian, Bear, Apple Notes style). The mental model is a **workspace of pages** — freeform documents organized into a hierarchy, with rich content blocks, linking, and tagging. The system grows organically as users capture and connect ideas.

## Site Map

```
├── Home / Dashboard
│   ├── Recently Edited
│   ├── Favorites / Pinned
│   ├── Quick Capture
│   └── Daily Note / Journal (optional)
├── Workspace / Pages
│   ├── Page Tree (nested hierarchy)
│   │   ├── Page
│   │   │   ├── Sub-page
│   │   │   │   └── Sub-sub-page
│   │   │   └── Sub-page
│   │   ├── Page
│   │   └── ...
│   └── Page View
│       ├── Title
│       ├── Icon / Cover Image
│       ├── Properties / Metadata
│       ├── Content Blocks
│       │   ├── Text (paragraphs, headings)
│       │   ├── Lists (bullet, numbered, todo, toggle)
│       │   ├── Code Block
│       │   ├── Image / Video / File
│       │   ├── Table
│       │   ├── Database (inline)
│       │   ├── Callout / Quote
│       │   ├── Divider
│       │   ├── Embed (URL, widget)
│       │   ├── Math / LaTeX
│       │   └── Synced Block (reference)
│       ├── Comments (inline or page-level)
│       └── Backlinks (pages linking to this one)
├── Databases / Collections
│   ├── Table View
│   ├── Board View (Kanban)
│   ├── Gallery View
│   ├── List View
│   ├── Calendar View
│   ├── Timeline View
│   └── Filters, Sorts, Groups
├── Search
│   ├── Full-text Search
│   ├── Filter by Page / Tag / Date
│   └── Recent Searches
├── Graph View (optional, Obsidian-style)
│   └── Visual map of page connections
├── Templates
│   ├── Template Gallery
│   ├── My Templates
│   └── Create Template
├── Trash
│   ├── Deleted Pages
│   └── Restore / Permanent Delete
├── Sharing
│   ├── Share Page (link, permissions)
│   ├── Publish to Web
│   └── Collaborators
├── Settings
│   ├── Workspace (name, icon)
│   ├── Members & Permissions
│   ├── Appearance (theme, font, width)
│   ├── Editor Preferences
│   ├── Notifications
│   ├── Import / Export
│   ├── Integrations
│   └── Billing / Plan
└── Quick Capture
    ├── Floating Input (global)
    ├── Browser Extension
    └── Mobile Share Sheet
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Collapsible, resizable | Page tree (nested, expandable), favorites, recent, search, trash, settings |
| **Page Breadcrumb** | Top of content area | Workspace > Parent > Current Page |
| **Block Menu** | Hover or `/` command | Add new block type, transform block |
| **Slash Command** | Type `/` in editor | Quick insert: heading, list, image, database, embed... |
| **Link Autocomplete** | Type `[[` or `@` | Link to another page, mention user |
| **Command Palette** | ⌘K / Ctrl+K | Navigate, search, run actions |
| **Drag & Drop** | Blocks and pages | Reorder blocks within page, move pages in tree |

### Sidebar Structure
```
🔍 Search
─────────────
⭐ Favorites
  Page A
  Page B
─────────────
📄 Private
  My Notes ▾
    Sub-page 1
    Sub-page 2
  Projects ▾
    Project X
    Project Y
─────────────
👥 Shared
  Team Wiki ▾
  Meeting Notes ▾
─────────────
🗑 Trash
⚙️ Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Page | title, icon, cover, parent_id, created_at, updated_at, created_by | has many Blocks, child Pages, Comments |
| Block | type, content, order, properties{}, children[] | belongs to Page, can contain child Blocks |
| Database | schema (properties[]), views[] | special type of Page/Block |
| Property | name, type (text/number/select/date/relation/formula/rollup) | belongs to Database |
| View | type (table/board/gallery/list/calendar), filters[], sorts[], groups[] | belongs to Database |
| Tag | name, color | many-to-many with Pages |
| Comment | body, author, resolved, block_reference | belongs to Page or Block |
| Template | name, content (page snapshot), category | standalone or in gallery |
| Workspace | name, icon, plan, members[] | has many Pages |

### Block Types
```
text | heading_1 | heading_2 | heading_3 | bullet_list | numbered_list |
todo | toggle | code | image | video | file | table | database |
callout | quote | divider | embed | math | synced_block | bookmark |
table_of_contents | breadcrumb | column_layout
```

### Page Properties (Database Items)
```
text | number | select | multi_select | date | person | files |
checkbox | url | email | phone | formula | relation | rollup |
created_time | last_edited_time | created_by | last_edited_by
```

## User Flows

### Quick Capture
```
⌘K → "New page" → Type title → Start writing → Organize later (drag to folder)
```

### Create Structured Note
```
Sidebar → [+ New Page] → Add Icon/Cover → Write Title → Use "/" commands to add blocks → Organize content
```

### Database Workflow
```
Create Page → Add Database Block → Define Properties → Add Items → Switch Views (table ↔ board ↔ gallery) → Filter/Sort
```

### Knowledge Linking
```
Write note → Type [[ → Search/Select page to link → Backlink appears on linked page → Build knowledge graph
```

### Collaborate
```
Share Page → Set permissions (view/comment/edit) → Collaborator opens → Edit simultaneously → Comments for discussion
```

## URL / Route Structure

```
/                          → Home / Dashboard
/:workspaceSlug            → Workspace root
/:workspaceSlug/:pageId    → Page view
/:workspaceSlug/:pageId?v=:viewId → Database with specific view
/search?q=:query           → Search results
/templates                 → Template gallery
/trash                     → Trash
/settings                  → Settings
/settings/members          → Members & permissions
/settings/billing          → Billing
```

### Public Sharing
```
/public/:shareId           → Published page (read-only, no auth)
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Global (⌘K) | Page titles, block content, file names | Created By, Date Range, Workspace Section | Relevance, Last Edited, Created |
| Database | Property values | Any property (type-specific: date range, select, number range) | Any property |
| Page | Current page content (Ctrl+F) | — | Position |

## Responsive Behavior

| Breakpoint | Sidebar | Content | Editor |
|------------|---------|---------|--------|
| Desktop (≥1280px) | Expanded (240px) + resizable | Centered (max 720px default, full-width toggle) | Full block controls |
| Tablet (768–1279px) | Overlay (hamburger) | Full-width centered | Simplified toolbar |
| Mobile (<768px) | Drawer | Full-width | Touch-optimized, bottom toolbar |

### Mobile Adaptations
- Floating toolbar (bold, italic, list, heading) above keyboard
- Swipe from left edge to open sidebar
- Share sheet integration for quick capture
- Offline editing with sync queue
- Simplified block menu (most-used types)

## Access Control

| Role | View | Edit | Comment | Share | Admin |
|------|------|------|---------|-------|-------|
| Guest (link) | Shared pages only | If permitted | If permitted | — | — |
| Member | All workspace | All workspace | ✅ | Own pages | — |
| Admin | ✅ | ✅ | ✅ | ✅ | Settings, members |
| Owner | ✅ | ✅ | ✅ | ✅ | Full control, billing |

### Page-Level Permissions
- Full Access (edit + share)
- Can Edit (edit content, no share management)
- Can Comment (read + add comments)
- Can View (read-only)
- No Access (hide from specific members)
