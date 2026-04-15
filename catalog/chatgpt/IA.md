---
brand: ChatGPT
tagline: Get answers. Find inspiration. Be more productive.
category: AI & ML
website: https://chat.openai.com
---

# ChatGPT — Information Architecture

## Overview

ChatGPT is OpenAI's conversational AI product, serving hundreds of millions of users across web, mobile, and desktop. The IA revolves around a **conversation-first paradigm** — every interaction begins and lives within a chat thread. The architecture has expanded from simple Q&A to a multi-modal workspace supporting GPTs (custom agents), Canvas (collaborative editing), memory (persistent user context), file analysis, image generation (DALL·E), browsing, and code execution. The left sidebar acts as an ever-growing conversation history, while the main canvas is dedicated to the active thread. The product differentiates free, Plus, Team, and Enterprise tiers, each unlocking additional models (GPT-4o, o1, o3) and capabilities.

## Site Map

```
chat.openai.com
├── / (New chat / home)
├── /c/{conversation_id} (Individual conversation)
├── /g/{gpt_id} (GPT detail / launch)
├── /gpts
│   ├── /discovery (GPT Store browse)
│   ├── /mine (My GPTs)
│   └── /editor (GPT Builder)
├── /canvas (Canvas documents)
├── /settings
│   ├── /general
│   ├── /personalization (Custom instructions, memory)
│   ├── /data-controls
│   ├── /security
│   └── /subscription
├── /share/{share_id} (Shared conversation read-only)
├── /auth/login
└── /auth/callback
```

## Navigation Model

- **Primary navigation**: Left sidebar — conversation list with search, grouped by date (Today, Yesterday, Previous 7 Days, etc.)
- **Secondary navigation**: Top-left model selector dropdown (GPT-4o, o1, o3-mini, etc.)
- **Utility navigation**: Bottom-left user avatar → Settings, My Plan, My GPTs, Log out
- **Contextual navigation**: Within a conversation — branch points (edit & regenerate), Canvas toggle, attachment menu
- **Mobile navigation**: Hamburger menu replaces sidebar; swipe to open conversation list
- **GPT Store**: Separate browse experience with category tabs (Writing, Productivity, Research, etc.)

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Conversation | Thread of alternating user/assistant messages, each with timestamps, model tag, optional attachments | User-owned, deletable |
| Message | Text (Markdown), code blocks, images, file attachments, tool-use indicators | Part of conversation |
| Canvas Document | Rich-text or code document co-edited with AI, versioned | Linked to conversation |
| GPT | Name, description, instructions, conversation starters, knowledge files, actions, icon | Creator-owned, publishable |
| Memory | Key-value facts extracted from conversations | User-owned, editable/deletable |
| Shared Link | Read-only snapshot of a conversation at share time | Public or link-only |
| Project | Folder grouping conversations + files + custom instructions | User/Team-owned |

| AuditLog | action, actor, target, timestamp, ip_address | belongs to Organization |
| Notification | type, message, read, created_at, action_url | belongs to User |
| Integration | name, type, status, credentials, last_synced | belongs to Workspace |
| Webhook | url, events[], secret, active, last_triggered | belongs to Organization |

### Entity Lifecycle
```
created → active → updated → archived
                  ↘ suspended → reactivated → active
created → deleted (soft delete with recovery period)
```
## User Flows

### New Conversation
```
User lands on `/` → sees prompt input + suggested prompts → Types message → selects model (or uses default) → Message streams in real-time via SSE → Conversation auto-saved to sidebar with AI-generated title → User can continue, branch (edit earlier message), or start new chat
```

### Using a GPT
```
User navigates to GPT Store or `/g/{id}` → Sees GPT description + conversation starters → Clicks starter or types custom prompt → Conversation opens in main chat with GPT context pre-loaded → GPT may invoke external actions (API calls) with user consent
```

### Canvas Workflow
```
User requests a document or code artifact → ChatGPT opens Canvas panel alongside chat → User can directly edit text; AI can suggest inline changes → Version history allows rollback → Export as file or copy to clipboard
```

### New User Onboarding
```
Visit ChatGPT → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home / new chat |
| `/c/{uuid}` | Existing conversation |
| `/g/{slug}` | GPT detail and launch page |
| `/gpts/discovery` | GPT Store |
| `/gpts/editor` | GPT Builder |
| `/gpts/editor/{gpt_id}` | Edit specific GPT |
| `/share/{share_id}` | Shared conversation (public) |
| `/settings/*` | Settings sub-pages |

Routes are client-side (SPA); the conversation ID is a UUID. Shared links use a separate short ID. No SEO-oriented slug pattern — conversations are private by default.

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
/c/{uuid}                         → Existing conversation
/g/{slug}                         → GPT detail page
/gpts/discovery                   → GPT Store browse
/gpts/editor                      → GPT Builder
/gpts/editor/{gpt_id}             → Edit specific GPT
/gpts/mine                        → My GPTs
/share/{share_id}                 → Shared conversation
/settings/general                 → General settings
/settings/personalization         → Custom instructions & memory
/settings/data-controls           → Data controls
/settings/subscription            → Subscription management
/canvas                           → Canvas documents
```

## Search & Filter

- **Conversation search**: Full-text search across conversation titles and message content, accessible from sidebar search bar
- **GPT Store search**: Keyword search + category filters (Top Picks, DALL·E, Writing, Research, Programming, Education, Lifestyle)
- **No advanced filters**: No date-range, model-type, or tag-based filtering for conversations
- **Memory search**: Users can browse and search stored memory items in Settings → Personalization

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Persistent sidebar + full chat canvas + optional Canvas side panel |
| Tablet (768-1024px) | Collapsible sidebar, full chat, Canvas overlays |
| Mobile (<768px) | Sidebar hidden (hamburger toggle), full-width chat, Canvas as bottom sheet or full-screen |

- Message bubbles are full-width on mobile with reduced padding
- Model selector moves into a compact dropdown
- File upload and attachment options collapse into a `+` menu
- Touch-optimized: swipe-to-open sidebar, long-press for message actions


### ChatGPT-Specific UX Patterns
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


### Memory System
```
During conversation → ChatGPT identifies important facts → Prompts "Memory updated" → User can view stored memories in Settings → Edit or delete individual memories → Memories inform future conversations across all chats
                                                                                                                                                                          ↘ Disable memory entirely in Settings → Privacy
```

### Project Workflow
```
Create Project → Name and set custom instructions → Upload files (code, docs, data) → Start conversation within project → All project context automatically included → Multiple conversations share the same project knowledge → Collaborate with team members (Team plan)
```

### Plugin / Tool Usage
```
User message requires external data → ChatGPT selects appropriate tool (browse web, execute code, generate image, analyze file) → Tool executes → Results integrated into response → User can see which tools were used via indicators
                                                                                                                                        ↘ Tool fails → Fallback to text-only response with explanation
```

### Data Export
```
Settings → Data Controls → Export Data → Request export → Email notification when ready → Download ZIP containing all conversations, files, and account data → Process completes within 24 hours
```

- Voice mode enables hands-free conversational interaction on mobile devices
- Shared links create read-only conversation snapshots accessible to anyone with the URL
- Custom GPTs can connect to external APIs via Actions for real-time data retrieval

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access (login required) |
| Free user | GPT-4o-mini, limited GPT-4o, limited image gen, no Canvas, basic memory |
| Plus ($20/mo) | Full GPT-4o, o1, o3-mini, Canvas, DALL·E, Advanced Data Analysis, 50 GPT-4o messages/3hr |
| Team ($25/user/mo) | Plus features + workspace, admin console, no training on data |
| Enterprise | Team features + SSO/SAML, SCIM, admin analytics, extended context, priority access |

- Authentication: Email/password, Google OAuth, Microsoft OAuth, Apple Sign-In
- Data controls: Users can opt out of model training, export data, delete account
- Shared links: Anyone with link can view; creator can revoke
- GPT publishing: Private, anyone with link, or public (GPT Store)
