---
brand: Bear
tagline: Write beautifully on iPhone, iPad, and Mac
category: Productivity
website: https://bear.app
---

# Information Architecture — Bear

## Overview

Bear is a Markdown-based note-taking app exclusively for Apple platforms (macOS, iOS, iPadOS). Its IA is radically simple: there are no notebooks or folders — organization is entirely tag-based, with nested tags (e.g., `#work/projects/alpha`) creating a virtual hierarchy. The focus is on beautiful typography, a distraction-free writing experience, and fast search.

## Site Map

```
bear.app
├── Sidebar
│   ├── Notes (all)
│   ├── Untagged
│   ├── Todo (notes with checkboxes)
│   ├── Today
│   ├── Archive
│   ├── Trash
│   └── Tags Tree
│       ├── #tag
│       │   └── #tag/subtag
│       │       └── #tag/subtag/child
│       └── ...
├── Note List (middle pane)
│   ├── Note previews
│   ├── Sort (date modified, date created, title)
│   └── Pin to top
├── Editor (right pane)
│   ├── Markdown content
│   ├── Rich previews (images, code blocks, sketches)
│   ├── Inline tags (#)
│   ├── Backlinks / Wikilinks ([[note title]])
│   ├── Table of Contents
│   ├── Focus Mode (typewriter scrolling)
│   └── Export (PDF, HTML, DOCX, MD, JPG, etc.)
├── Preferences
│   ├── General
│   ├── Editor (font, theme, Markdown compatibility)
│   ├── Privacy (encryption, app lock)
│   └── Bear Pro (sync, export, themes)
└── No web app / No Android
├── Widgets
│   ├── iOS Home Screen Widget (recent notes)
│   ├── macOS Widget
│   └── Apple Watch Complication (quick note)
├── Shortcuts Integration
│   ├── Create Note action
│   ├── Search Notes action
│   ├── Open Note action
│   └── Append to Note action
```

## Navigation Model

- **Three-pane layout (Mac):** Sidebar (tags/system collections) → Note List → Editor
- **iOS:** Tab-like navigation — Sidebar → Note List → Note (push navigation)
- **Tag-driven navigation:** Clicking a tag in the sidebar filters the note list; clicking a nested tag shows children
- **Wikilinks:** `[[note title]]` creates bidirectional links between notes for non-hierarchical navigation
- **Quick open (⌘P):** Jump to any note by title search

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Note | title (first line), body (Markdown), created date, modified date, pinned | → Tags (inline), Backlinks |
| Tag | name, nesting (via `/`), auto-generated from note content | → Notes (many-to-many) |
| Wikilink | `[[target note title]]` | → Notes (bidirectional) |
| Todo Item | checkbox within note body | → Note |
| Attachment | images, files, sketches (Apple Pencil) | → Note (inline) |
| Archive | archived notes (hidden from main view) | → Notes |
| Trash | deleted notes (30-day retention) | → Notes |
| Theme | name, colors, Pro-only flag | System setting |
| Font | name, category (serif/sans/mono) | System setting |
| Shortcut | action_type, parameters | Siri Shortcuts integration |
| Widget | type (recent/specific_tag), size | iOS/macOS widget |
| Export Format | type (PDF/MD/HTML/DOCX/JPG/TextBundle) | per Note |

## User Flows

### Capture a Note
```
⌘N (or + button) → Start typing → Add #tags inline → Auto-saved → Tag tree updates in sidebar
```

### Organize with Nested Tags
```
In note, type #work/projects/alpha → Sidebar shows work → projects → alpha hierarchy → Click any level to filter
```

### Link Notes Together
```
In note, type [[Meeting Notes 2024]] → Creates clickable link → Target note shows backlink → Navigate between related notes
```

### Focus Writing Session
```
Open note → View → Focus Mode → Typewriter scrolling enabled → Hide sidebar (⌘1) → Hide note list (⌘2) → Distraction-free writing
```

### Web Clipping
```
Safari → Share Sheet → Bear → Content imported as Markdown note → Add tags → Saved to Bear
                                                                                              ↘ Edit imported content → Add personal annotations
```

### Export & Share
```
Note → Share icon → Select format (PDF / Markdown / HTML / DOCX / JPG) → Export → Share via AirDrop, email, or save to Files
                                                                                                                                 ↘ Copy as Markdown → Paste in external editor
```

### Multi-Device Sync
```
Write note on Mac → iCloud sync (Bear Pro) → Continue editing on iPhone → Changes merged automatically → Same note on iPad with Apple Pencil sketches
```
## URL / Route Structure

Bear is a native app and does not use web URLs. Internal linking uses:

```
bear://x-callback-url/open-note?title={title}    # Open note by title
bear://x-callback-url/open-note?id={id}           # Open note by ID
bear://x-callback-url/create?title={t}&text={t}   # Create note
bear://x-callback-url/search?term={query}         # Search
bear://x-callback-url/open-tag?name={tag}          # Open tag
bear://x-callback-url/open-note?title={title}        # Open note by title
bear://x-callback-url/open-note?id={id}               # Open note by ID
bear://x-callback-url/create?title={t}&text={t}       # Create note
bear://x-callback-url/add-text?id={id}&text={t}       # Append text to note
bear://x-callback-url/add-file?id={id}&file={path}    # Add file to note
bear://x-callback-url/search?term={query}             # Search notes
bear://x-callback-url/open-tag?name={tag}              # Open tag
bear://x-callback-url/tags                            # List all tags
bear://x-callback-url/trash?id={id}                   # Move note to trash
bear://x-callback-url/archive?id={id}                 # Archive note
bear://x-callback-url/untagged                        # Open untagged notes
bear://x-callback-url/todo                            # Open todo notes
bear://x-callback-url/today                           # Open today notes
bear://x-callback-url/locked?id={id}                  # Open locked note
bear://x-callback-url/change-theme?theme={name}       # Change editor theme
bear://x-callback-url/change-font?font={name}         # Change editor font
bear://x-callback-url/export?id={id}&format=pdf       # Export note as PDF
bear://x-callback-url/export?id={id}&format=md        # Export note as Markdown
bear://x-callback-url/export?id={id}&format=html      # Export note as HTML
bear://x-callback-url/export?id={id}&format=docx      # Export note as DOCX
bear://x-callback-url/grab-url?url={url}              # Import web page as note
```

## Search & Filter

- **Global search (⌘F in sidebar):** Full-text search across all note titles and body content; instant results
- **In-note search (⌘F in editor):** Find within current note with highlight
- **Special search tokens:** `@today`, `@yesterday`, `@images`, `@files`, `@todo`, `@done`, `@code`
- **Tag filtering:** Select tag in sidebar to filter note list; nested tags include children
- **System collections:** Pre-built filters — Notes, Untagged, Todo, Today, Archive, Trash
- **Backlink search**: Notes referencing current note via [[wikilinks]]
- **Attachment filter**: `@images` shows notes with images, `@files` shows notes with file attachments
- **Date operators**: `@today` for notes modified today, `@yesterday` for yesterday

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Context | Behavior |
|---------|----------|
| macOS | Three-pane resizable layout; hide sidebar/note list independently; multiple windows |
| iPad | Adaptive layout — sidebar + list + editor in landscape; stack in portrait; Split View supported |
| iPhone | Single-pane push navigation: Tags → Note List → Editor |
| No web app | No browser access; sync via iCloud across Apple devices only |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Bear-Specific UX Patterns
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

## Access Control

| Level | Description |
|-------|-------------|
| Single-user | Bear is personal — no collaboration, no sharing within app |
| App Lock | Face ID / Touch ID / password to open app |
| Note Encryption | Individual notes can be encrypted with a password |
| Export/Share | Share notes via export (PDF, MD, etc.) or system share sheet |
| Bear Pro | Subscription required for sync, all themes, and advanced export formats |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance