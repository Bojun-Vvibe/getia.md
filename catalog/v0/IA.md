---
brand: v0
tagline: Chat with v0. Generate UI with simple text prompts.
category: AI & ML
website: https://v0.dev
---

# v0 — Information Architecture

## Overview

v0 is Vercel's AI-powered UI generation tool that converts natural language prompts into production-ready React components using shadcn/ui and Tailwind CSS. The IA is structured as a **prompt-to-component workshop** — the interface is a chat where each AI response is a live-rendered, editable UI component. Unlike general-purpose AI tools, v0 is laser-focused on frontend generation: every output is a functional React component that can be copied, iterated upon, or deployed directly to Vercel. The product emphasizes an iterative design loop: prompt → preview → refine → ship. It integrates tightly with the Next.js/Vercel ecosystem and supports image-to-code workflows where users can upload design screenshots for conversion.

## Site Map

```
v0.dev
├── / (Home)
│   ├── Prompt input (centered hero)
│   ├── Featured generations grid
│   ├── Recent conversations (signed in)
│   └── Trending community creations
├── /chat/{chat_id} (Generation Conversation)
│   ├── Conversation sidebar (history)
│   ├── Prompt/response pairs
│   ├── Component preview (live render)
│   ├── Code view (React/JSX with syntax highlighting)
│   ├── Version history (per conversation)
│   ├── File tree (multi-file generations)
│   └── Actions (Copy, Deploy, Share, Fork)
├── /community (Community Gallery)
│   ├── Featured / Staff picks
│   ├── Trending
│   ├── Category filters
│   └── /t/{generation_id} (Shared generation detail)
│       ├── Live preview
│       ├── Original prompt
│       ├── Code view
│       └── Remix button
├── /docs (Documentation)
│   ├── Getting started
│   ├── Prompting guide
│   ├── Supported components (shadcn/ui reference)
│   ├── Integration with Next.js
│   ├── CLI usage (v0 CLI)
│   └── API reference
├── /pricing
│   ├── Free tier
│   ├── Premium tier
│   ├── Team tier
│   └── Feature comparison
├── /settings
│   ├── /account (profile, email, password)
│   ├── /subscription (plan, billing, usage)
│   ├── /api-keys (API access tokens)
│   └── /preferences (default framework, theme)
└── /auth
    ├── Sign in (Vercel, GitHub, Google OAuth)
    └── Sign up
```

## Navigation Model

- **Primary navigation**: Minimal — centered prompt input is the hero; top bar with logo, Community, Docs, Pricing, Sign In
- **Chat navigation**: Left sidebar lists conversation history (similar to ChatGPT); main area shows prompt/response pairs with live preview
- **Component navigation**: Each AI response shows a rendered preview with tabs for Preview / Code / Files
- **Iteration navigation**: Follow-up prompts refine the component; previous versions accessible in the conversation thread
- **Community navigation**: Browse shared generations with category filters, trending/featured sorting
- **Utility navigation**: Top-right avatar → Settings, Subscription, Sign out
- **Keyboard shortcuts**: Enter to send prompt, Cmd+K for quick actions, Cmd+Shift+C to copy code
- **Mobile**: Responsive; preview components scale down but code editing is desktop-optimized

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Chat/Conversation | id (UUID), title (auto-generated from first prompt), created_at, updated_at, message_count, is_public | belongs to User; has many Messages |
| Message | role (user/assistant), content, timestamp, version_number | belongs to Conversation |
| Generated Component | React/JSX code, shadcn/ui imports, Tailwind classes, live preview iframe, file tree (multi-file) | belongs to Message |
| Component Version | version_number, code_snapshot, preview_snapshot, diff_from_previous | belongs to Conversation (each iteration) |
| Shared Generation | short_id, title, prompt, code, preview_image, creator, created_at, views_count, forks_count | published from Conversation |
| Prompt | natural language text, attached images (for image-to-code), framework preference | belongs to Message (user role) |
| User | id, email, display_name, avatar, plan (free/premium/team), usage_count, created_at | has many Conversations |
| Team | name, members[], billing, shared_conversations | has many Users |

## User Flows

### Generating a UI Component
```
Home (/) → Type prompt (e.g., "a pricing page with 3 tiers, dark theme") → v0 generates React code → Live preview renders → Toggle Preview / Code → Copy code or continue iterating
```

### Iterative Refinement
```
Initial generation → Type follow-up ("make the popular tier highlighted, add comparison table") → v0 updates component → New version saved → Reference previous versions → Converge on final design
```

### Image-to-Code
```
Home → Upload screenshot/mockup image → v0 analyzes design → Generates matching React component → Refine with text prompts → Copy final code
```

### Using Generated Code
```
Code view → Click "Copy Code" → Paste into Next.js project → Run `npx shadcn@latest add` for dependencies → Component works out of the box → Or click "Deploy" to deploy directly to Vercel
```

### Community Browsing and Remixing
```
Community → Browse trending/featured → Click generation → View live preview + prompt → "Remix" → Opens in new chat → Customize with follow-up prompts → Save as own version
```

## URL / Route Structure

```
v0.dev/                                     # Home — prompt input
v0.dev/chat/{uuid}                          # Chat conversation
v0.dev/chat/{uuid}/share                    # Share conversation
v0.dev/community                            # Community gallery
v0.dev/community/trending                   # Trending generations
v0.dev/community/featured                   # Featured / staff picks
v0.dev/community/{category}                 # Category filter (dashboard, landing, form, etc.)
v0.dev/t/{short_id}                         # Shared generation (public)
v0.dev/t/{short_id}/code                    # Shared generation code view
v0.dev/t/{short_id}/remix                   # Fork/remix a generation
v0.dev/docs                                 # Documentation home
v0.dev/docs/getting-started                 # Getting started guide
v0.dev/docs/prompting                       # Prompting best practices
v0.dev/docs/components                      # Supported shadcn/ui components
v0.dev/docs/integration                     # Next.js integration guide
v0.dev/docs/cli                             # CLI reference
v0.dev/docs/api                             # API reference
v0.dev/pricing                              # Pricing page
v0.dev/settings                             # Settings home
v0.dev/settings/account                     # Account settings
v0.dev/settings/subscription                # Subscription management
v0.dev/settings/api-keys                    # API key management
v0.dev/settings/preferences                 # Default preferences
v0.dev/auth/signin                          # Sign in
v0.dev/auth/signup                          # Sign up
```

## Search & Filter

- **Community search**: Search shared generations by keyword, description, or component type
- **Community filters**: Categories (Dashboard, Landing Page, E-commerce, Form, Chart, Table, Navigation, Auth, etc.)
- **Community sort**: Trending, Most Popular, Most Forked, Newest
- **Conversation history**: Searchable by title/prompt in sidebar; sorted by recent
- **Component library**: Browse supported shadcn/ui components in docs
- **No component marketplace**: v0 generates custom components rather than searching a pre-built library

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (>1024px) | Sidebar (conversation list) + main area (prompt + preview/code side-by-side split) |
| Tablet (768-1024px) | Collapsible sidebar + preview/code as tabs instead of side-by-side |
| Mobile (<768px) | No sidebar (hamburger), full-width prompt input, preview/code as tabs |

- Generated component previews are rendered in an iframe that responds to viewport
- Users can toggle preview sizes (desktop/tablet/mobile) to test responsiveness of generated output
- Code view has syntax highlighting with horizontal scroll on narrow screens
- Prompt input area adapts to software keyboard on mobile
- Community gallery switches from grid to list layout on small screens
- File tree collapses to dropdown on mobile

## Access Control

| Role | Permissions |
|------|-------------|
| Anonymous | Browse community generations, view shared generations; no generation access |
| Free (signed in) | Limited generations per day (usage cap), community access, basic sharing |
| Premium ($20/mo) | Higher generation limits, priority queue, longer conversations, image-to-code, API access |
| Team | Premium features + shared workspace, team billing, shared conversation history |
| Enterprise | Custom limits, SSO, dedicated support, private generations |

- Authentication: Vercel account (GitHub, GitLab, Bitbucket OAuth), Google OAuth, email
- Generation limits: Free tier has daily/monthly caps; premium has significantly higher limits
- Sharing: Generated components can be shared via public URL or kept private (default)
- Code ownership: Users own the generated code; MIT-compatible output
- Vercel integration: One-click deploy of generated components to Vercel
- API access: Premium users can access v0 generation via API for programmatic use
