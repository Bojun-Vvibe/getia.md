---
brand: Craft
tagline: Built for beautiful documents
category: Productivity
website: https://craft.do
---

# Information Architecture — Craft

## Overview

Craft is a document editor that prioritizes visual beauty and structure. Documents are built from blocks (text, toggles, cards, code, images) that can be nested, linked, and styled. The standout feature is the ability to share any document as a polished website with one click. With spaces for team collaboration and an AI assistant, Craft positions itself between notes apps and presentation tools.

## Site Map

```
craft.do
├── Home
│   ├── Daily Notes
│   ├── Recent Documents
│   ├── Favorites
│   └── Quick Note (widget)
├── Spaces
│   └── [Space]
│       ├── Folders
│       │   └── Documents
│       └── Shared Documents
├── Document
│   ├── Blocks
│   │   ├── Text (headings, body, lists)
│   │   ├── Page / Sub-page (linked document)
│   │   ├── Card (visual link block)
│   │   ├── Toggle (collapsible)
│   │   ├── Code Block
│   │   ├── Image / File
│   │   ├── Divider
│   │   ├── Table
│   │   └── Embed (web, video)
│   ├── Backlinks
│   ├── AI Assistant
│   ├── Comments
│   ├── Version History
│   └── Share / Publish as Website
├── All Documents (search index)
├── Trash
├── Settings
│   ├── Account
│   ├── Spaces
│   ├── Appearance (themes)
│   └── Subscription
└── Templates
```

## Navigation Model

- **Left sidebar:** Space selector, folder/document tree, Daily Notes, Favorites, Trash
- **Document view:** Full-width canvas; blocks are inline-editable; sub-pages appear as cards or inline
- **Block-level actions:** Slash command (/) for inserting blocks; drag handle for reordering; @ for mentions and links
- **Back-linking:** Documents link to each other via `@` mentions or card blocks; backlinks panel shows reverse references
- **AI Assistant:** Inline AI available in any document for summarizing, continuing, rewriting

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Space | name, icon, type (personal/team), members | → Folders, Documents |
| Folder | name, icon | → Sub-folders, Documents |
| Document | title, blocks, created date, cover image, icon | → Sub-documents, Backlinks, Comments |
| Block | type, content, styling, nesting level | → Document |
| Sub-page | linked document appearing as a block | → Parent Document, Child Document |
| Card | visual preview of a linked document | → Target Document |
| Daily Note | auto-created per date | → Space |
| Comment | text, author, block reference | → Document, Block |
| Published Page | URL, password, SEO settings | → Document |


### Item Lifecycle
```
draft → active → in_progress → completed → archived
                               ↘ blocked → unblocked → in_progress
draft → deleted (soft delete, 30-day retention)
```
## User Flows

### Create a Structured Document
```
+ New Document → Type title → / (slash) → Choose block types → Nest content with Tab → Add cards linking to sub-pages → Style with covers and icons
```

### Daily Notes Workflow
```
Open Daily Notes → Today's note auto-created → Capture thoughts, meeting notes, links → Link to project docs with @ → Review past daily notes
```

### Publish as Website
```
Document → Share → Publish to Web → Copy public URL → Optionally set password, custom subdomain, SEO title → Share link
```

### Team Collaboration
```
Create Team Space → Invite members → Create shared folders → Co-edit documents in real-time → Add comments on specific blocks
```

### New User Onboarding
```
Visit Craft → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
## URL / Route Structure

```
craft.do/                                      # Home
craft.do/s/{space_id}                          # Space
craft.do/d/{document_id}                       # Document (authenticated)
craft.do/d/{document_id}/{block_id}            # Jump to specific block
{custom-subdomain}.craft.me/{slug}             # Published page
craft.do/templates                             # Template gallery
settings  # Settings
account  # Account settings
account/security  # Security settings
billing  # Billing & subscription
notifications  # Notification preferences
help  # Help center
help/{topic}  # Help article
api  # API documentation
search?q={query}  # Search results
integrations  # Integrations
admin  # Admin console
admin/members  # Member management
import  # Import data
export  # Export data
craft.do/d/{doc_id}                           → Document
craft.do/d/{doc_id}/b/{block_id}              → Block deep link
craft.do/s/{space_id}/daily-notes              → Daily Notes
craft.do/s/{space_id}/tags/{tag}               → Tag filter
craft.do/s/{space_id}/recent                   → Recent documents
craft.do/s/{space_id}/favorites                → Favorites
craft.do/s/{space_id}/shared                   → Shared with me
craft.do/s/{space_id}/trash                    → Trash
craft.do/settings                              → Settings
craft.do/settings/account                      → Account settings
craft.do/settings/spaces                       → Space management
craft.do/settings/integrations                 → Integrations
craft.do/share/{share_id}                      → Public shared document
craft.do/templates                             → Template gallery
craft.do/s/{space_id}/search?q={query}   → Search results
craft.do/settings/billing                  → Billing & subscription
```

## Search & Filter

- **Global search (⌘K):** Full-text across all documents, titles, and block content within a space
- **Backlinks panel:** See all documents referencing the current document
- **Recent documents:** Sorted by last opened/modified
- **Favorites:** Manually pinned documents for quick access
- **Folder browsing:** Hierarchical navigation as alternative to search
- **No advanced filter builder** — search is keyword-based

- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
## Responsive Behavior

| Context | Behavior |
|---------|----------|
| macOS | Full sidebar + editor; native app with system integrations (Spotlight, Shortcuts) |
| iPad | Sidebar + editor in landscape; editor only in portrait; Apple Pencil for sketching |
| iPhone | Single-pane; document list → document; Quick Note widget for capture |
| Web (craft.do) | Full editor in browser, slightly reduced feature set vs native |
| Published pages | Fully responsive; optimized for reading on any screen size |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Craft-Specific UX Patterns
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


- Handoff integration with Xcode for native iOS/macOS development workflows
- Block-based editor with nested pages and backlinks for knowledge management
- Real-time collaboration with presence indicators and commenting
- Native Apple Silicon performance with offline-first architecture
- Export to multiple formats including PDF, Markdown, TextBundle, and print
- Daily notes and journal feature for personal knowledge capture

## Access Control

| Role | Capabilities |
|------|-------------|
| Space Owner | Full control: settings, members, billing, all documents |
| Space Editor | Create/edit documents, manage folders, comment |
| Space Viewer | Read documents, cannot edit |
| Document Sharer | Per-document link sharing with view/edit/comment permissions |
| Published Visitor | View published page; no sign-in required; optional password |
| Personal Space | Private to account; not shared unless explicitly published |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance