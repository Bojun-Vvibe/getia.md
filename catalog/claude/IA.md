---
brand: Claude
tagline: Talk to Claude, an AI assistant from Anthropic.
category: AI & ML
website: https://claude.ai
---

# Claude — Information Architecture

## Overview

Claude is Anthropic's AI assistant product, designed around safety, helpfulness, and extended thinking. The IA centers on a **conversation workspace model** augmented by Projects (persistent context containers), Artifacts (rendered outputs like code, documents, and diagrams), and a 200K-token context window that enables working with entire codebases or long documents. The interface is deliberately minimal — a single-pane chat with an expandable Artifacts panel. Claude differentiates through its thinking process (extended thinking mode), project-based organization, and emphasis on nuanced, well-reasoned responses. Tiers include Free, Pro, Team, and Enterprise.

## Site Map

```
claude.ai
├── / (Home / new conversation)
├── /chat/{conversation_id} (Active conversation)
├── /project/{project_id} (Project workspace)
│   └── /chat/{conversation_id} (Conversation within project)
├── /artifacts (Artifact gallery — recent artifacts)
├── /settings
│   ├── /profile
│   ├── /appearance
│   ├── /privacy
│   └── /subscription
├── /login
├── /recents (Recent conversations)
└── /starred (Starred conversations)
```

## Navigation Model

- **Primary navigation**: Left sidebar with sections — Recents (conversation list), Starred, Projects
- **Secondary navigation**: Model selector at top of chat (Claude Sonnet 4, Claude Opus 4, Haiku)
- **Utility navigation**: Bottom-left user avatar → Settings, Subscription, Help, Log out
- **Contextual navigation**: Artifact panel slides in from right; toggleable via artifact preview chips in chat
- **Project navigation**: Within a project — project knowledge (uploaded files, instructions), conversation list scoped to project
- **Mobile**: Bottom tab bar with Chat, Recents, and Menu; sidebar replaced by modal drawer

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Conversation | Threaded message exchange with model tag, timestamps | User-owned |
| Message | Markdown text, code blocks, LaTeX, inline citations | Part of conversation |
| Artifact | Standalone rendered content — React component, HTML page, SVG, Markdown doc, Mermaid diagram, code file | Linked to conversation, downloadable |
| Project | Named container with custom instructions, knowledge files, and scoped conversations | User or Team-owned |
| Knowledge File | PDF, TXT, CSV, code files uploaded to a project as persistent context | Part of project |
| Starred Conversation | Bookmarked conversation for quick access | User-owned |

| Notification | type, message, read, created_at, action_url | belongs to User |
| Integration | name, type, status, credentials, last_synced | belongs to Workspace |
| Webhook | url, events[], secret, active, last_triggered | belongs to Organization |
| APIToken | name, key_hash, permissions[], created_at, last_used | belongs to User |

### Entity Lifecycle
```
created → active → updated → archived
                  ↘ suspended → reactivated → active
created → deleted (soft delete with recovery period)
```
## User Flows

### Starting a Conversation
```
User lands on `/` → empty chat with prompt input and model selector → Types message → response streams in real-time → Conversation auto-titled and saved to Recents in sidebar → User can star, rename, or delete the conversation
```

### Working with Artifacts
```
Claude generates code, a document, or diagram in response → Artifact chip appears in chat → click to expand Artifact panel → Artifact renders live (React components run in sandboxed iframe) → User can copy, download, or remix ("make it darker", "add animations") → Multiple artifacts in one conversation are navigable via artifact tabs
```

### Using Projects
```
User creates a project with a name and custom instructions → Uploads knowledge files (codebase, docs, specs) → All conversations within the project inherit the knowledge + instructions → Enables domain-specific expertise without re-uploading context each time
```

### Extended Thinking
```
User enables extended thinking or asks a complex reasoning question → Claude shows a "Thinking..." block with collapsible thought process → Thought tokens are visible but clearly separated from the final response → Enables chain-of-thought reasoning for math, coding, analysis tasks
```

### New User Onboarding
```
Visit Claude → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home / new conversation |
| `/chat/{uuid}` | Individual conversation |
| `/project/{uuid}` | Project overview |
| `/project/{uuid}/chat/{uuid}` | Conversation within a project |
| `/artifacts` | Recent artifacts gallery |
| `/settings/*` | User settings |
| `/login` | Authentication |

Client-side SPA routing. UUIDs for conversations and projects. No public sharing URLs by default — conversations are private.

### Additional Routes

```
account  → Account settings
account/security  → Security settings
billing  → Billing & subscription
notifications  → Notification preferences
help  → Help center
help/{topic}  → Help article
api  → API documentation
search?q={query}  → Search results
integrations  → Integrations
admin  → Admin console
admin/members  → Member management
import  → Import data
export  → Export data
/chat/{uuid}                      → Individual conversation
/project/{uuid}                   → Project overview
/project/{uuid}/chat/{uuid}       → Project conversation
/project/{uuid}/knowledge         → Project files
/artifacts                        → Recent artifacts
/recents                          → Recent conversations
/starred                          → Starred conversations
/settings/profile                 → Profile settings
/settings/appearance              → Appearance settings
/settings/privacy                 → Privacy settings
/settings/subscription            → Subscription management
/login                            → Authentication
/team/settings                    → Team settings (Team plan)
```

## Search & Filter

- **Conversation search**: Text search across conversation titles in sidebar
- **No full-text message search**: Search is limited to titles, not message content
- **Project filtering**: Conversations can be filtered by project membership
- **Artifact browsing**: Recent artifacts are browsable in a gallery view but not searchable
- **No tag system**: Conversations rely on starring and recency for organization

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Persistent sidebar + chat pane + collapsible Artifact panel (3-column max) |
| Tablet (768-1024px) | Collapsible sidebar, chat + Artifact panel overlay |
| Mobile (<768px) | Full-screen chat, Artifact panel as modal overlay, sidebar as drawer |

- Artifact panel on mobile expands to full-screen with a close button
- Input area has adaptive height with attachment button
- Model selector is a compact pill on mobile
- Touch: swipe to open sidebar drawer


### Claude-Specific UX Patterns
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


### Multi-Modal Input
```
User attaches image/PDF/file to message → Claude analyzes visual content alongside text → Response references specific elements from the attachment → Multiple files can be attached in a single message
                                                                                                                                                        ↘ Unsupported format → Error message with supported format list
```

### Team Workspace
```
Admin creates Team workspace → Invites members via email → Creates shared Projects with team-wide instructions and knowledge files → Team members access shared context → Admin manages billing and data controls → Conversations are private to individual users within shared projects
```

### Artifact Iteration
```
Claude generates initial artifact (code/document/diagram) → User requests changes ("make it responsive", "add error handling") → Claude updates artifact in-place → Previous versions accessible via version history → User can fork artifact for parallel iterations
                                                                                                                                                                       ↘ Download artifact → Use in external project
```

### Conversation Management
```
Sidebar → Right-click conversation → Rename / Star / Move to Project / Delete → Starred conversations pinned at top → Search conversations by title → Bulk select for deletion
```

- Claude supports LaTeX rendering for mathematical notation within conversations
- Artifacts render interactive React components in a sandboxed iframe environment
- Project knowledge files persist across all conversations within the same project context
- Team workspace enables shared Projects with centralized billing and admin controls
- API access for Pro users enables programmatic interaction alongside the web interface
- MCP (Model Context Protocol) enables Claude to connect to external tools and data sources

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access (login required) |
| Free user | Claude Sonnet (limited messages/day), basic artifacts, no projects |
| Pro ($20/mo) | Claude Opus 4, Sonnet 4, Haiku, higher rate limits, Projects, extended thinking, priority access |
| Team ($25/user/mo) | Pro features + team workspace, shared projects, admin controls, no training on data |
| Enterprise | Team features + SSO/SAML, SCIM, audit logs, custom data retention, dedicated support |

- Authentication: Email/password, Google OAuth
- Privacy: Users can opt out of training; conversations not used for training by default on Pro/Team/Enterprise
- Sharing: No public sharing of conversations (privacy-first design)
- Projects: Owner can share with team members (Team/Enterprise)
