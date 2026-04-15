---
brand: Raycast
tagline: "Supercharged productivity launcher. Command palette for your Mac with extensions and AI."
category: Launcher / CLI
website: https://www.raycast.com
---

# Raycast — Information Architecture

## Overview

Raycast is a macOS productivity launcher that replaces Spotlight with a command palette for everything — app launching, clipboard history, window management, snippets, AI chat, and an extensible API with 1000+ community extensions. The mental model is **type to do anything** — a single keyboard shortcut (usually Option+Space) opens a command bar where users type commands, search files, control apps, and run automations. Raycast differentiates through its extension ecosystem (built with React/TypeScript), built-in AI, and developer-first design (everything is scriptable, everything has a keyboard shortcut).

## Site Map

```
├── Command Bar (Main Interface)
│   ├── Search (files, apps, calculations, clipboard)
│   ├── Built-in Commands
│   │   ├── Applications (launch, switch, quit)
│   │   ├── Calculator (inline math, currency conversion, unit conversion)
│   │   ├── File Search (filename, content, recent)
│   │   ├── Clipboard History
│   │   │   ├── Text Entries (searchable)
│   │   │   ├── Image Entries
│   │   │   ├── File Entries
│   │   │   ├── Pin Items
│   │   │   └── Clear History
│   │   ├── Window Management
│   │   │   ├── Layout Commands (left half, right half, maximize, center)
│   │   │   ├── Custom Layouts
│   │   │   └── Move to Display
│   │   ├── Snippets
│   │   │   ├── Snippet List (searchable)
│   │   │   ├── Create Snippet (keyword trigger + expansion)
│   │   │   ├── Dynamic Placeholders ({date}, {clipboard}, {cursor})
│   │   │   └── Import / Export
│   │   ├── Quicklinks (bookmarks to URLs/files with query support)
│   │   ├── Floating Notes (scratchpad windows)
│   │   ├── Calendar (view schedule, join meetings)
│   │   ├── Reminders (create, view, complete)
│   │   ├── System Commands (sleep, shutdown, lock, empty trash, toggle)
│   │   ├── Script Commands (custom shell/Python/etc. scripts)
│   │   └── Confetti (celebration command)
│   ├── Extension Commands
│   │   ├── Extension-specific commands (e.g., "Search GitHub Repos")
│   │   ├── Actions within results (⌘K for action panel)
│   │   └── Deep links (protocol URLs)
│   └── AI (Raycast AI)
│       ├── AI Chat (conversational, multi-model)
│       ├── AI Commands (summarize, fix grammar, explain code, etc.)
│       ├── Quick AI (highlight text → run AI command)
│       ├── AI Presets (custom prompts)
│       ├── Models (GPT-4, Claude, etc.)
│       └── AI Extensions (community AI commands)
├── Store (Extension Marketplace)
│   ├── Featured Extensions
│   ├── Categories
│   │   ├── Developer Tools (GitHub, Jira, Linear, Docker, npm)
│   │   ├── Communication (Slack, Discord, Notion, Zoom)
│   │   ├── Design (Figma, Color Picker, Icon Search)
│   │   ├── Productivity (Todoist, Obsidian, Bear, Apple Notes)
│   │   ├── Finance (Currency Converter, Crypto Prices)
│   │   ├── System (Brew, Caffeinate, Kill Process)
│   │   ├── Media (Spotify, Apple Music, YouTube)
│   │   ├── Fun (Random Facts, Colors, Placeholder)
│   │   └── AI (ChatGPT, Perplexity, Custom Models)
│   ├── Extension Detail
│   │   ├── Description + Screenshots
│   │   ├── Commands List
│   │   ├── Author
│   │   ├── Install Count
│   │   ├── Source Code (GitHub link)
│   │   └── Install Button
│   ├── Search Extensions
│   └── Submit Extension
├── Preferences (Settings)
│   ├── General
│   │   ├── Hotkey (default: Option+Space)
│   │   ├── Launch at Login
│   │   └── Theme (light/dark/auto + accent color)
│   ├── Extensions
│   │   ├── Installed Extensions (list)
│   │   ├── Extension Settings (per-extension configuration)
│   │   ├── Hotkey Assignment (per-command custom hotkeys)
│   │   ├── Alias Assignment
│   │   └── Enable / Disable
│   ├── Clipboard History
│   │   ├── Toggle On/Off
│   │   ├── History Duration
│   │   ├── App Exclusions (password managers)
│   │   └── Sensitive Content Handling
│   ├── Window Management
│   │   ├── Enable/Disable
│   │   ├── Custom Shortcuts
│   │   └── Padding / Gaps
│   ├── Snippets
│   │   ├── Enable Auto-Expansion
│   │   └── Keyword Prefix
│   ├── AI
│   │   ├── Default Model
│   │   ├── Custom API Key (BYOK)
│   │   └── AI Presets
│   ├── Quicklinks
│   ├── Script Commands
│   │   ├── Script Directory
│   │   └── Language Settings
│   ├── Appearance
│   │   ├── Theme
│   │   ├── Icon Style
│   │   ├── Font Size
│   │   └── Compact Mode
│   ├── Advanced
│   │   ├── Proxy Settings
│   │   ├── API Tokens
│   │   ├── Sync (across devices via iCloud)
│   │   ├── Import / Export Settings
│   │   └── Beta Features
│   └── Account
│       ├── Pro Subscription
│       ├── Teams (shared extensions, snippets, quicklinks)
│       └── Usage Stats
├── Extension Development (for developers)
│   ├── Create Extension (CLI: `npx create-raycast-extension`)
│   ├── API Documentation (raycast.com/developers)
│   │   ├── Components (List, Detail, Form, Grid, Action Panel)
│   │   ├── API Reference (Clipboard, Environment, OAuth, Storage)
│   │   ├── Lifecycle (commands, background tasks)
│   │   └── UI Kit
│   ├── Dev Tools (within Raycast)
│   │   ├── Console (debug output)
│   │   ├── Hot Reload (during development)
│   │   └── Script Command Editor
│   └── Publish to Store
└── Teams (Raycast for Teams)
    ├── Shared Snippets
    ├── Shared Quicklinks
    ├── Shared Extensions (private distribution)
    ├── Team Settings
    ├── Member Management
    └── AI Usage (team-level)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Command Bar** | Single-line input (Spotlight-style) | Type to search/filter commands, results appear below |
| **Result List** | Vertical list below command bar | Keyboard navigation (↑↓), hover for preview |
| **Action Panel** | ⌘K or Enter | Context menu for selected item (open, copy, reveal, delete, etc.) |
| **Detail View** | Right panel (metadata preview) | Shows details for selected item without leaving list |
| **Back Navigation** | Escape or ⌘← | Go back to previous view / close |
| **Nested Navigation** | Enter on list item | Drill into extension views (list → detail → sublist) |
| **Root Search** | Start typing from any view | Filters current context or returns to root search |
| **Hotkeys** | Per-command customizable | Direct launch of any command without opening command bar first |

### Interaction Flow
```
[Option+Space] → Command Bar appears
↓
Type "gh" → Results: [GitHub Search Repos] [GitHub My PRs] [GitHub Create Issue]
↓
Select with ↑↓ → Press Enter → Extension view loads (e.g., repo list)
↓
Select repo → ⌘K (Action Panel) → [Open in Browser] [Copy URL] [View Issues] [Star]
↓
Escape → Back to command bar
```

### Keyboard-First Design
```
Option+Space     → Open Raycast
⌘K              → Action Panel on selected item
⌘⇧K             → Quick AI on selected text
Tab              → Autocomplete / Next section
⌘,              → Preferences
⌘⇧,             → Extension preferences
Escape           → Back / Close
⌘↵              → Default Action
⌘⇧C             → Copy to clipboard
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Command | name, description, icon, hotkey, alias, mode (view/no-view/menu-bar) | belongs to Extension |
| Extension | name, title, description, author, icon, commands[], preferences[] | installed from Store |
| SearchResult | title, subtitle, icon, actions[], accessories[], detail | returned by Command |
| Action | title, icon, shortcut, handler | belongs to SearchResult |
| Snippet | name, keyword, text (with placeholders), tags[] | user-created |
| Quicklink | name, url_template (with {query} placeholder), icon | user-created |
| ClipboardEntry | content, type (text/image/file), application, timestamp | auto-captured |
| FloatingNote | title, content (markdown), position, size | user-created |
| ScriptCommand | name, description, language (bash/python/ruby/etc.), script_path, arguments[] | user-created |
| AIChat | id, messages[], model, title | belongs to User |
| AIPreset | name, prompt_template, model, creativity, icon | user-created |
| WindowLayout | name, position, size, display, shortcut | user-configured |
| Theme | name, appearance (light/dark), colors{} | installed from Store |

### Extension Architecture
```
Extension Package (npm)
├── package.json (manifest: commands, preferences, icon)
├── src/
│   ├── command-a.tsx (React component → List/Detail/Form/Grid)
│   └── command-b.tsx
├── assets/ (icons, images)
└── README.md
```

### Command Modes
- **View**: Full UI (List, Detail, Form, Grid)
- **No-View**: Background action (no UI shown, e.g., toggle dark mode)
- **Menu Bar**: Persistent icon in macOS menu bar

## User Flows

### Instant Launch
```
Option+Space → Type "sl" → "Slack" appears → Enter → Slack opens
(Total time: ~0.5 seconds)
```

### Clipboard History
```
Option+Space → Type "clip" or use ⌘⇧V hotkey → Clipboard History → Search → Select entry → Paste (auto-paste to active app)
```

### Quick AI
```
Select text in any app → ⌘⇧K → Choose AI command (Summarize / Fix Grammar / Translate) → Result appears → Paste or Copy
```

### Snippet Expansion
```
In any text field → Type keyword (e.g., "!email") → Auto-expands to full template with dynamic values ("Dear {cursor}, ...")
```

### Window Management
```
Option+Space → "left half" → Current window snaps to left half
Or: Use hotkey (e.g., ⌘⌃←) → Instant snap
```

### Extension Installation
```
Store → Search "GitHub" → GitHub Extension → Install → Preferences → Add access token → Option+Space → "GitHub Search Repos" → Search repos → Open / Clone / Star
```

### Developer: Build Extension
```
npx create-raycast-extension → Choose template → Code (React + TypeScript) → npm run dev → Raycast auto-loads extension → Test in command bar → Publish to Store
```

## URL / Route Structure

Raycast is a native macOS app, not web-based. Navigation is through the command bar, not URLs. However, deep links use the `raycast://` protocol:

```
raycast://                                 → Open Raycast
raycast://extensions/:author/:extension/:command → Open specific command
raycast://extensions/store                 → Open Store
raycast://ai-chat                          → Open AI Chat
raycast://ai-chat/new?prompt=:text         → Start AI chat with prompt
raycast://clipboard/history                → Open Clipboard History
raycast://snippets                         → Open Snippets
raycast://quicklinks                       → Open Quicklinks
raycast://window-management                → Window Management
raycast://confetti                         → Launch confetti
raycast://preferences                      → Open Preferences
raycast://preferences/:extensionName       → Extension preferences
raycast://script-commands                  → Script Commands
```

### Store URLs (Web)
```
https://www.raycast.com/store              → Extension Store
https://www.raycast.com/:author/:extension → Extension detail
https://www.raycast.com/developers         → Developer docs
https://www.raycast.com/changelog          → Changelog
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Command Bar (root) | Commands, apps, files, calculations, clipboard, snippets, quicklinks | — (all-in-one) | Relevance + Frecency (frequency + recency) |
| Clipboard History | Entry content | Type (text/image/file), App | Timestamp (newest) |
| Extension Store | Extension name, description, author, commands | Category | Featured, Popular, Recent |
| Extension Results | Extension-specific (e.g., GitHub repos, Jira issues) | Extension-specific filters | Extension-specific |
| Snippets | Snippet name, keyword, content | Tags | Name, Keyword, Last Used |

### Frecency Algorithm
Raycast learns from usage patterns — frequently and recently used commands rank higher in search results. This is the core ranking mechanism.

## Responsive Behavior

Raycast is a native macOS app. "Responsive" applies to the command bar window size:

| State | Behavior |
|-------|----------|
| **Command bar only** | Compact floating window, keyboard input |
| **With results** | Window expands vertically to show result list (up to ~8 items) |
| **With detail preview** | Window expands horizontally to show metadata panel |
| **Grid view** | Window expands to show grid of items (e.g., icons, colors) |
| **AI Chat** | Full-height window with conversation thread |
| **Compact mode** | User preference for smaller result items |

### Raycast-Specific UX
- **Keyboard-first**: designed to never require a mouse
- **Frecency ranking**: results learn from your habits
- **Sub-second performance**: native Swift app, no web overhead
- **Action Panel** (⌘K): context menu for any selected item with keyboard shortcuts
- **Rich previews**: metadata panel shows details without opening apps
- **Hotkey-per-command**: assign any global shortcut to any command
- **Snippet placeholders**: `{date}`, `{time}`, `{clipboard}`, `{cursor}` for dynamic expansion
- **Menu bar commands**: persistent status in macOS menu bar (weather, status, timers)
- **Fallback commands**: when no result matches, offer web search, calculator, etc.
- **Dark mode** follows macOS system preference
- **Minimal chrome**: no title bar, no toolbar — just the command bar and results
- **Sync across devices**: settings, snippets, quicklinks via iCloud

## Access Control

### Individual (Free / Pro)
| Feature | Free | Pro |
|---------|------|-----|
| Command bar | ✅ | ✅ |
| Extensions | ✅ | ✅ |
| Clipboard History | ✅ | ✅ |
| Snippets | ✅ | ✅ |
| Window Management | ✅ | ✅ |
| AI Chat | — | ✅ (unlimited) |
| AI Commands | — | ✅ |
| Custom AI Models | — | ✅ (BYOK) |
| Cloud Sync | — | ✅ |
| Custom Themes | ✅ | ✅ |

### Teams
| Feature | Team Plan |
|---------|-----------|
| Shared Snippets | ✅ |
| Shared Quicklinks | ✅ |
| Private Extensions (internal distribution) | ✅ |
| Team AI Usage Management | ✅ |
| Admin Dashboard | ✅ |
| SSO | ✅ (Enterprise) |

### Extension Permissions
- Extensions declare required permissions in manifest (clipboard, system commands, network)
- OAuth integrations are per-user (each user authenticates individually)
- Local storage is sandboxed per extension
- Script Commands run with user's shell permissions
