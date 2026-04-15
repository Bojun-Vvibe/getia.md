---
brand: Cursor
tagline: The AI Code Editor.
category: AI & ML
website: https://cursor.com
---

# Cursor — Information Architecture

## Overview

Cursor is a VS Code-forked AI code editor that deeply integrates LLM capabilities into every layer of the coding experience. The IA inherits VS Code's **editor-centric workspace model** (file tree, tabs, terminal, panels) but adds AI-native surfaces: Cmd+K (inline edit/generate), Composer (multi-file AI agent), Tab (intelligent autocomplete), and Chat (contextual conversation). The key architectural differentiator is that AI is not a sidebar bolt-on — it operates within the code itself, editing across files, understanding project context via codebase indexing, and proposing diffs that users accept or reject. The product ships as a desktop application (Electron) with a companion web presence for marketing, docs, and account management.

## Site Map

```
cursor.com (marketing/account)
├── / (Marketing home)
├── /pricing
├── /changelog
├── /docs (Documentation)
│   ├── /get-started
│   ├── /tab
│   ├── /cmd-k
│   ├── /chat
│   ├── /composer
│   └── /context
├── /settings (Web account settings)
│   ├── /subscription
│   ├── /usage
│   └── /team
├── /blog
├── /privacy
└── /download

Desktop App (Electron)
├── Editor workspace (VS Code-derived)
│   ├── File explorer (sidebar)
│   ├── Open editors (tabs)
│   ├── Terminal panel
│   ├── Source control (Git)
│   ├── Extensions
│   └── Search
├── AI Surfaces
│   ├── Cmd+K (inline prompt bar)
│   ├── Chat (right sidebar panel)
│   ├── Composer (multi-file agent panel)
│   └── Tab (autocomplete — no UI, inline ghost text)
├── Settings
│   ├── AI model selection
│   ├── Codebase indexing
│   ├── Privacy mode
│   └── Rules for AI (.cursorrules)
└── Command palette (Cmd+Shift+P)
```

## Navigation Model

- **Primary navigation (desktop app)**: VS Code activity bar — Explorer, Search, Source Control, Extensions, plus Cursor-specific Chat icon
- **File navigation**: File tree in sidebar, Cmd+P quick-open, tab bar, breadcrumbs
- **AI navigation**: Cmd+K triggers inline prompt anywhere in code; Cmd+L opens Chat panel; Cmd+I opens Composer
- **Settings navigation**: Cursor settings (gear icon) → tabs for General, Models, Features, Privacy, Rules
- **Command palette**: Cmd+Shift+P — unified command access (VS Code convention)
- **Web navigation**: Top bar — Features, Pricing, Docs, Blog, Download, Sign In
- **No mobile navigation**: Desktop-only application

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | Root directory with files, .cursorrules, .cursor/ config | User-defined |
| File | Source code file open in editor — the primary object of interaction | Project |
| Cmd+K Edit | Inline prompt → diff preview → accept/reject | Ephemeral |
| Chat Conversation | Message thread with code context references (@file, @symbol, @codebase) | Session-based |
| Composer Session | Multi-file editing agent with step-by-step plan, file changes, terminal commands | Session-based |
| Tab Completion | Ghost-text autocomplete suggestion using ML model | Ephemeral |
| .cursorrules | Project-specific instructions for AI behavior | Project config |
| Codebase Index | Embedded vector index of all project files for semantic search | Auto-generated |


### Entity Lifecycle
```
created → active → updated → archived
                  ↘ suspended → reactivated → active
created → deleted (soft delete with recovery period)
```
## User Flows

### Cmd+K Inline Editing
```
User selects code block (or places cursor at insertion point) → Presses Cmd+K → inline prompt bar appears → Types instruction (e.g., "add error handling" or "convert to async/await") → Cursor generates diff preview — green/red inline changes → User presses Enter to accept, Escape to reject, or edits the prompt → Changes applied to file
```

### Composer (Multi-File Agent)
```
User presses Cmd+I → Composer panel opens → Types high-level task (e.g., "add authentication to the API using JWT") → Composer analyzes codebase context → creates a step-by-step plan → Generates changes across multiple files simultaneously → User reviews each file's diff → Accept All or accept individually → Can run terminal commands (npm install, etc.) as part of the plan
```

### Chat with Context
```
User opens Chat panel (Cmd+L) → Types question — automatically includes current file as context → Can explicitly add context: @filename, @symbol, @codebase (searches indexed codebase), @web → AI responds with code suggestions, explanations, referenced files → "Apply" button on code blocks inserts/replaces code in the active file
```

### Tab Autocomplete
```
User types code → Cursor predicts next edit (not just next token) → Ghost text appears showing suggested completion → Tab to accept, keep typing to refine, Escape to dismiss → Can predict multi-line completions and even the next edit location
```

### New User Onboarding
```
Visit Cursor → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
## URL / Route Structure

| Pattern | Description |
|---|---|
| `cursor.com/` | Marketing home |
| `cursor.com/pricing` | Plans and pricing |
| `cursor.com/docs/{section}` | Documentation |
| `cursor.com/changelog` | Version history |
| `cursor.com/settings` | Web account management |
| `cursor.com/settings/subscription` | Subscription management |
| `cursor.com/settings/usage` | Usage stats (requests, tokens) |
| `cursor.com/download` | Download page |

Desktop app uses local file paths (not URLs). Web presence is marketing + account management only.

### Additional Routes

```
cursor.com/billing  → Billing & subscription
cursor.com/notifications  → Notification preferences
cursor.com/help  → Help center
cursor.com/help/{topic}  → Help article
cursor.com/api  → API documentation
cursor.com/search?q={query}  → Search results
cursor.com/integrations  → Integrations
cursor.com/admin  → Admin console
cursor.com/admin/members  → Member management
cursor.com/import  → Import data
cursor.com/export  → Export data
cursor.com/team  → Team management
```

## Search & Filter

- **Code search**: VS Code's built-in search (Cmd+Shift+F) — regex, file-type filters, include/exclude patterns
- **Semantic search**: @codebase in Chat/Composer uses vector embedding search over project files
- **Quick open**: Cmd+P — fuzzy file name search
- **Symbol search**: Cmd+T — search by function/class/variable name
- **Docs search**: Documentation site has keyword search
- **No cloud search**: All code stays local; no cloud-hosted workspace search

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Surface | Behavior |
|---|---|
| Desktop App | Fixed layout — sidebar (resizable), editor pane(s), panel (bottom), chat (right). Supports split editors, drag-and-drop panels |
| Marketing Site | Responsive: desktop hero → tablet card stack → mobile single-column |
| Documentation | Responsive: sidebar TOC (desktop) → hamburger (mobile), content max-width container |

- Desktop app is not responsive in the traditional sense — it's a native-feeling window with resizable panes
- Minimum window size approximately 800x600
- Chat and Composer panels can be resized or toggled
- Multi-monitor support: editor windows can be detached


### Cursor-Specific UX Patterns
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


- Tab completion uses AI to predict multi-line code changes
- Composer mode enables multi-file edits from natural language instructions
- Privacy mode allows using Cursor without sending code to external servers

## Access Control

| Role | Permissions |
|---|---|
| Free (Hobby) | 2000 completions, 50 slow premium requests/mo, limited models |
| Pro ($20/mo) | Unlimited completions, 500 fast premium requests/mo, all models (GPT-4, Claude, etc.) |
| Business ($40/seat/mo) | Pro features + team billing, admin dashboard, enforced privacy mode, centralized settings |
| Enterprise | Business + SSO/SAML, custom deployment, audit logs, dedicated support |

- Authentication: GitHub OAuth, Google OAuth, email/password
- Privacy Mode: When enabled, no code is stored on Cursor servers; all requests are ephemeral
- Model selection: Users choose which LLM to use (Claude, GPT-4, Cursor's own models)
- .cursorrules: Project-level AI behavior configuration (not access control, but AI governance)
- No telemetry by default in privacy mode; opt-in usage analytics
