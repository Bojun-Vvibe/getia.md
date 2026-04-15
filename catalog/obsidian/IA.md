---
brand: Obsidian
tagline: "A second brain. Local-first Markdown knowledge base with bidirectional linking and graph view."
category: Productivity
website: https://obsidian.md
---

# Obsidian — Information Architecture

## Overview

Obsidian is a local-first, Markdown-based knowledge management tool built around **bidirectional linking and a graph of interconnected notes**. Unlike cloud-first tools, Obsidian stores everything as plain `.md` files in a local folder (the "vault"), giving users full ownership of their data. The mental model is a **personal knowledge graph** — atomic notes linked together, visualized as a network, extended by a rich plugin ecosystem. Power users treat it as an IDE for thought.

## Site Map

```
├── Vault (local folder on disk)
│   ├── Files & Folders (user-organized)
│   │   ├── Folder A
│   │   │   ├── note-1.md
│   │   │   └── note-2.md
│   │   ├── Folder B
│   │   └── Attachments (images, PDFs)
│   └── .obsidian/ (config, plugins, themes)
├── Editor / Note View
│   ├── Note Title (= filename)
│   ├── YAML Frontmatter (metadata)
│   │   ├── tags, aliases, cssclass, publish
│   │   └── Custom properties (Obsidian Properties UI)
│   ├── Markdown Content
│   │   ├── Headings, paragraphs, lists
│   │   ├── Internal Links ([[page]])
│   │   ├── Embeds (![[page]] or ![[image.png]])
│   │   ├── Callouts (> [!note], > [!warning])
│   │   ├── Code blocks (syntax-highlighted)
│   │   ├── Math (LaTeX / MathJax)
│   │   ├── Mermaid diagrams
│   │   ├── Tables (Markdown)
│   │   └── Footnotes
│   ├── Live Preview (WYSIWYG-ish Markdown)
│   ├── Reading View (rendered, no edit)
│   ├── Source Mode (raw Markdown)
│   ├── Backlinks Panel (pages linking here)
│   ├── Outgoing Links Panel
│   └── Tags Panel
├── Graph View
│   ├── Global Graph (all notes as nodes, links as edges)
│   │   ├── Filter by tags, folders, link depth
│   │   ├── Color groups
│   │   └── Force-directed layout
│   └── Local Graph (connections from current note)
├── File Explorer (left sidebar)
│   ├── Folder tree (mirrors file system)
│   ├── Create new note / folder
│   └── Sort (name, modified, created)
├── Search
│   ├── Full-text search across vault
│   ├── Search operators (path:, tag:, file:, line:)
│   ├── Regex search
│   └── Embedded search queries (search: blocks)
├── Quick Switcher (⌘O)
│   └── Fuzzy search by note title
├── Command Palette (⌘P)
│   └── All commands from core + plugins
├── Bookmarks (pinned notes, searches, graphs)
├── Canvas (visual whiteboard)
│   ├── Note cards (linked to vault notes)
│   ├── Text cards (standalone)
│   ├── Media cards (images, PDFs)
│   ├── URL cards (web embeds)
│   └── Connectors (arrows between cards)
├── Daily Notes
│   ├── Auto-create today's note
│   ├── Navigate by date (previous / next)
│   └── Template for daily note
├── Templates
│   ├── Template folder (user-defined)
│   └── Insert template into current note
├── Tags
│   ├── Tag Pane (all tags, nested: #project/active)
│   └── Click tag → search results
├── Community Plugins
│   ├── Browse (800+ plugins)
│   ├── Installed plugins
│   ├── Plugin settings
│   └── Notable plugins: Dataview, Templater, Calendar, Kanban, Excalidraw
├── Themes
│   ├── Browse community themes
│   ├── CSS snippets (custom overrides)
│   └── Appearance settings
├── Obsidian Sync (optional paid)
│   ├── End-to-end encrypted sync
│   ├── Version history (per note)
│   └── Selective sync
├── Obsidian Publish (optional paid)
│   ├── Select notes to publish
│   ├── Custom domain
│   ├── Public graph view
│   └── Navigation, search, theme
└── Settings
    ├── Editor (vim mode, line numbers, fold, spellcheck)
    ├── Files & Links (default location, link format, deleted files)
    ├── Appearance (theme, font, font size, translucent window)
    ├── Hotkeys (fully customizable keybindings)
    ├── Core Plugins (toggle built-in features)
    ├── Community Plugins
    ├── About (vault stats, version)
    └── Account (Sync/Publish license)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Collapsible panels: File Explorer, Search, Bookmarks, Tags | Icons at top toggle between panels |
| **Right Sidebar** | Collapsible panels: Backlinks, Outgoing Links, Tags, Graph | Contextual to active note |
| **Tab Bar** | Browser-style tabs | Multiple notes open simultaneously; split view (vertical/horizontal) |
| **Quick Switcher** | ⌘O → fuzzy filename search | Navigate to any note instantly |
| **Command Palette** | ⌘P → all available commands | Run any action: plugin commands, navigation, formatting |
| **Internal Links** | `[[Note Name]]` or `[[Note Name\|Display Text]]` | Click to navigate; ⌘+click to open in new tab; hover to preview |
| **Breadcrumb** | Plugin-based (optional) | Folder path or link trail |
| **Graph View** | Interactive force-directed graph | Click node to open note; zoom/filter; color by tag/folder |

### Pane Layout (Unique to Obsidian)
```
┌──────────────────────────────────────────────────────┐
│ Tab Group A          │ Tab Group B                    │
│ ┌──────────────────┐ │ ┌──────────────────────────┐  │
│ │ Note: Zettelkasten│ │ │ Note: Literature Notes    │  │
│ │ (editing)         │ │ │ (reading view)            │  │
│ └──────────────────┘ │ └──────────────────────────┘  │
│                      │ ┌──────────────────────────┐  │
│                      │ │ Local Graph View          │  │
│                      │ └──────────────────────────┘  │
└──────────────────────────────────────────────────────┘
```
- Arbitrary split panes (horizontal + vertical)
- Pin tabs to prevent accidental close
- Linked panes: graph/backlinks update with active note

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Vault | path (local folder), name, config (.obsidian/) | contains all Notes, Folders, Attachments |
| Note | filename (.md), frontmatter (YAML), body (Markdown), created, modified | belongs to Folder; links to other Notes |
| Folder | name, path | contains Notes, sub-Folders (mirrors filesystem) |
| Internal Link | target (note name or path), display text, heading anchor | connects Notes (bidirectional) |
| Tag | name (supports nesting: #parent/child), inline or frontmatter | many-to-many with Notes |
| Alias | alternative name for a note (frontmatter) | belongs to Note; searchable in link autocomplete |
| Attachment | file (image, PDF, audio, video), path | referenced by Notes via `![[file]]` |
| Canvas | cards[], connectors[], layout | contains Note Cards, Text Cards, Media Cards |
| Property | key, value, type (text/number/date/checkbox/list/tags) | belongs to Note (frontmatter) |
| Embed | type (note/heading/block), source note | transclusion of content from another note |

### Markdown Extensions (Obsidian-specific)
```
[[Internal Link]]              → Link to note
[[Note#Heading]]               → Link to specific heading
[[Note^block-id]]              → Link to specific block
![[Note]]                      → Embed (transclude) entire note
![[image.png]]                 → Embed image
![[Note#Heading]]              → Embed specific section
> [!info] Title                → Callout block (info, warning, tip, etc.)
%%hidden comment%%             → Comment (not rendered)
```

### Dataview (Popular Plugin) Query Language
```
```dataview
TABLE file.mtime AS "Modified", tags
FROM #project AND "Work"
WHERE status = "active"
SORT file.mtime DESC
```
```

## User Flows

### Quick Capture
```
⌘N → New note → Start writing in Markdown → Link to related notes with [[ → File later by moving to folder
```

### Daily Note Workflow
```
Click "Daily Note" (or hotkey) → Today's note auto-created from template → Journal, log tasks, link to project notes → Navigate to previous/next day
```

### Build Knowledge Graph
```
Write atomic note → Add [[links]] to related concepts → View Local Graph → Discover unexpected connections → Create new linking note (MOC: Map of Content)
```

### Research with Zettelkasten
```
Read source → Create Literature Note → Extract ideas as Permanent Notes (atomic) → Link to existing knowledge → Tag with topics → MOC emerges from density of links
```

### Canvas Brainstorm
```
Open Canvas → Add note cards (existing or new) → Add text cards for annotations → Draw connectors → Spatial arrangement of ideas → Double-click card to edit full note
```

### Plugin Workflow (Templater + Dataview)
```
⌘P → "Insert Templater template" → Select "Meeting Note" → Template auto-fills date, attendees field → Write notes → Dataview query on Project page auto-lists all meeting notes
```

## URL / Route Structure

Obsidian uses a custom protocol and local file paths rather than HTTP URLs:

```
obsidian://open?vault=MyVault&file=Note%20Name     → Open note in vault
obsidian://new?vault=MyVault&name=New%20Note       → Create new note
obsidian://search?vault=MyVault&query=tag:project   → Open search with query
obsidian://open?vault=MyVault&file=Canvas%20Name    → Open canvas
```

### Publish URLs (Obsidian Publish)
```
https://publish.obsidian.md/:site/                  → Published site root
https://publish.obsidian.md/:site/:notePath          → Published note
https://:customDomain/:notePath                      → Custom domain
```

### Local File Paths
```
~/MyVault/                          → Vault root
~/MyVault/Folder/Note.md            → Note file
~/MyVault/.obsidian/                → Config, plugins, themes
~/MyVault/.obsidian/plugins/        → Installed community plugins
~/MyVault/.obsidian/themes/         → Installed themes
```

## Search & Filter

| Context | Search Scope | Filters / Operators | Sort |
|---------|-------------|---------------------|------|
| Global Search | All note content, titles, tags | `path:`, `file:`, `tag:`, `line:`, `section:`, `content:`, regex | Modified, Created, Alphabetical |
| Quick Switcher (⌘O) | Note titles + aliases | Fuzzy match | Recency, Relevance |
| Graph View | All linked notes | Filter by tag, folder, orphans, attachments; link depth slider | — (spatial) |
| Tag Pane | All tags (nested hierarchy) | — | Alphabetical, Frequency |
| Backlinks | Notes linking to current note | Linked mentions vs. unlinked mentions | — |

### Search Operators
```
path:Projects              → Notes in Projects folder
file:meeting               → Notes with "meeting" in filename
tag:#status/active          → Notes with specific tag
line:(TODO)                → Lines containing "TODO"
section:(## Summary)        → Content under "Summary" heading
/regex\d+pattern/           → Regular expression search
"exact phrase"              → Exact match
(foo OR bar) -baz           → Boolean operators
```

## Responsive Behavior

Obsidian is a desktop-first app (Electron) with mobile apps:

| Platform | Layout | Features |
|----------|--------|----------|
| Desktop (macOS/Windows/Linux) | Multi-pane workspace, full sidebar, all plugins | Full editing, graph view, canvas, command palette, vim mode |
| Tablet (iPad) | Single pane + sidebar overlay | Full editing, most plugins, split view on iPad |
| Mobile (iOS/Android) | Single pane, bottom toolbar | Editing, quick switcher, mobile toolbar (bold, link, checkbox), pull-down command palette |

### Mobile-Specific Features
- Bottom toolbar: undo, redo, bold, italic, link, checkbox, heading, indent
- Pull-down gesture for command palette
- Share sheet → capture web links/text to vault
- Obsidian Sync for cross-device access
- Offline-first (all data local)
- Swipe to navigate back

## Access Control

Obsidian is fundamentally a **single-user, local-first** tool. Access control is minimal compared to cloud apps:

| Context | Model |
|---------|-------|
| Local Vault | File system permissions (your OS) |
| Obsidian Sync | End-to-end encrypted; only your devices |
| Obsidian Publish | Per-note publish toggle; public read-only |
| Shared Vaults (Sync) | Share vault with specific Obsidian accounts; all members have full edit access |
| Community Plugins | Manually reviewed; sandboxed but has file access |

### Publish Access
- **Public**: Anyone with URL can view published notes
- **Password-protected**: Site-level password
- **Selective publishing**: Choose which notes are public; unpublished notes' links show as stubs
- **No edit access**: Publish is read-only; editing requires the desktop/mobile app
