---
brand: Perplexity
tagline: Ask anything. Get instant answers with cited sources.
category: AI & ML
website: https://perplexity.ai
---

# Perplexity — Information Architecture

## Overview

Perplexity is an AI-powered answer engine that combines large language models with real-time web search to deliver cited, sourced responses. Unlike traditional chatbots, Perplexity's IA is built around a **search-first, citation-centric paradigm** — every answer includes inline references to source URLs, and the interface resembles a search engine more than a chat app. Key differentiators include Focus modes (All, Academic, Writing, Wolfram, YouTube, Reddit), Collections (shared research spaces), and Pro Search (multi-step reasoning with follow-up clarifications). The product spans web, mobile apps, Chrome extension, and API.

## Site Map

```
perplexity.ai
├── / (Home / search bar)
├── /search/{query_id} (Search result thread)
├── /collections
│   ├── / (All collections)
│   └── /{collection_id} (Individual collection)
├── /library (Saved threads)
├── /discover (Trending topics / curated content)
├── /profile/{username} (Public profile)
├── /spaces (Collaborative spaces)
│   └── /{space_id}
├── /settings
│   ├── /account
│   ├── /ai-profile
│   └── /subscription
├── /pro (Pro upgrade page)
├── /api (API docs and keys)
└── /auth/login
```

## Navigation Model

- **Primary navigation**: Left sidebar — Home (new search), Discover, Library, Collections/Spaces
- **Central element**: Large search bar with Focus mode selector (the dominant UI element)
- **Secondary navigation**: Suggested follow-up questions below each answer
- **Utility navigation**: Top-right user avatar → Profile, Settings, Subscription
- **Thread navigation**: Within a search thread — sequential Q&A pairs, each with its own source panel
- **Mobile**: Bottom tab bar (Home, Discover, Library, Profile); search bar at top

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Search Thread | Sequential question-answer pairs with citations, related questions | User-owned, shareable |
| Answer | Markdown text with numbered inline citations, images, quick facts panel | Part of thread |
| Source Card | URL, title, favicon, snippet from cited web page | System-generated |
| Collection | Named group of related threads with description, collaborators | User/shared |
| Space | Collaborative research workspace with custom AI instructions and shared threads | Team-owned |
| Discover Article | AI-generated summary of trending topic with sources | System-curated |
| AI Profile | User preferences for personalized answers (expertise level, interests) | User-owned |

## User Flows

### Standard Search
```
Lands on `/` → types question in prominent search bar → Selects Focus mode (optional): All, Academic, Writing, Wolfram|Alpha, YouTube, Reddit → Perplexity searches web in real-time → shows "Searching..." with source URLs loading → Answer streams in with inline citation numbers → source cards displayed in side panel → Follow-up questions suggested below → user can continue the thread → Thread auto-saved to Library
```

### Pro Search (Multi-Step)
```
Toggles "Pro" switch on search bar → Perplexity may ask clarifying questions before searching → Performs multi-step research: initial search → analysis → deeper searches → synthesis → Shows reasoning steps and intermediate findings → Final answer is more comprehensive with more sources
```

### Collection Research
```
Creates a Collection with a topic name → Runs multiple searches, adding relevant threads to the Collection → Invites collaborators to the Collection → Collection serves as a shared research knowledge base → AI can reference previous threads in the Collection for context
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home / new search |
| `/search/{alphanumeric_id}` | Individual search thread |
| `/collections/{uuid}` | Collection view |
| `/spaces/{uuid}` | Space view |
| `/library` | User's saved threads |
| `/discover` | Trending / curated content |
| `/profile/{username}` | Public user profile |
| `/settings/*` | Account settings |
| `/pro` | Subscription upgrade |

Threads use short alphanumeric IDs. Collections and Spaces use UUIDs. Public profiles use usernames.

## Search & Filter

- **Primary search**: The main product IS search — natural language queries processed through LLM + web search pipeline
- **Focus modes**: Filter search to specific sources — Academic (papers), Reddit, YouTube, Wolfram|Alpha, Writing (no search, pure LLM)
- **Library search**: Text search across saved thread titles
- **Discover filters**: Topic categories (Technology, Science, Business, Entertainment, Sports, etc.)
- **No advanced operators**: Unlike Google, no `site:`, `filetype:`, or Boolean operators — natural language only
- **Related questions**: AI-generated follow-up queries for deeper exploration

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Sidebar + centered search/answer pane + source panel on right |
| Tablet (768-1024px) | Collapsible sidebar, answer pane full-width, sources below answer |
| Mobile (<768px) | Bottom tab nav, full-width search bar, sources as expandable section below answer |

- Source cards stack vertically on mobile (horizontal carousel on desktop)
- Focus mode selector becomes a horizontal scroll strip on mobile
- Follow-up questions render as tappable chips
- Discover feed is a responsive card grid (3 columns → 2 → 1)

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Limited searches, basic model, no Library persistence |
| Free (signed in) | Unlimited basic searches, Library, Collections, 5 Pro Searches/day |
| Pro ($20/mo) | Unlimited Pro Search, GPT-4o/Claude/Sonar access, file upload, AI Profile, API credits |
| Enterprise | Pro features + team management, SSO, data privacy guarantees |

- Authentication: Email/password, Google OAuth, Apple Sign-In
- Sharing: Threads shareable via public link; Collections can have collaborators
- API: Separate API key with usage-based billing
- Data: Free tier conversations may be used for improvement; Pro has opt-out

## Focus Modes

| Mode | Source Restriction | Best For |
|------|-------------------|----------|
| All | Full web search | General questions, current events |
| Academic | Scholar, PubMed, arXiv, Semantic Scholar | Research papers, scientific evidence |
| Writing | No search (pure LLM) | Creative writing, drafting, brainstorming |
| Wolfram Alpha | Wolfram computational engine | Math, data, computations, unit conversions |
| YouTube | YouTube transcripts and content | Video content summary, tutorials |
| Reddit | Reddit posts and comments | Community opinions, recommendations, experiences |

## Answer Anatomy

| Component | Description |
|-----------|-------------|
| Answer text | Markdown-formatted response with inline citation numbers |
| Source cards | Clickable cards showing URL, title, and favicon of each cited source |
| Quick facts | Key data points extracted and highlighted (dates, numbers, definitions) |
| Images | Relevant images pulled from search results |
| Follow-up questions | AI-suggested related queries for deeper exploration |
| Related searches | Alternative phrasings and related topics |

## Pro Search vs Standard

| Feature | Standard | Pro Search |
|---------|----------|------------|
| Reasoning | Single-step | Multi-step with clarifying questions |
| Sources | 5-10 | 15-30+ |
| Model | Default (fast) | GPT-4o, Claude, or Sonar Large |
| File upload | — | PDF, image, CSV analysis |
| Depth | Quick answer | Comprehensive research report |
| Daily limit (free) | Unlimited | 5/day |
| Daily limit (Pro) | Unlimited | Unlimited |

## API

- **Endpoint:** `api.perplexity.ai/chat/completions`
- **Models:** `sonar-small`, `sonar-medium`, `sonar-pro`
- **Format:** OpenAI-compatible chat completions API
- **Features:** Streaming, citations in response, search grounding
- **Pricing:** Token-based; varies by model
- **Authentication:** Bearer token (API key)

## Privacy & Data

- **Free tier:** Conversations may be used for model improvement
- **Pro tier:** Opt-out available for training data usage
- **Enterprise:** Full data privacy guarantees, no training
- **Thread sharing:** Public links optional; private by default
- **Account deletion:** Full data deletion on account removal

## Thread Structure

```
User Question 1 → Sources Loading → AI Answer (with [1][2][3] citations) → Related Questions
     ↓
User Follow-up 2 → More Sources → AI Answer (context-aware, builds on Q1) → Related Questions
     ↓
User Follow-up 3 → Additional Sources → AI Answer (full thread context) → Related Questions
```

## Model Selection (Pro)

| Model | Provider | Strengths |
|-------|----------|-----------|
| Sonar | Perplexity | Fastest, web-search optimized, always up-to-date |
| GPT-4o | OpenAI | Strong reasoning, multimodal (image analysis) |
| Claude 3.5 | Anthropic | Long-form analysis, careful nuance |
| Sonar Pro | Perplexity | Multi-step research, comprehensive sourcing |

## Spaces (Collaborative Research)

- **Custom instructions:** Set AI behavior rules for the space (e.g., "always cite peer-reviewed sources")
- **Shared threads:** All members see and contribute to research threads
- **Knowledge base:** Upload files (PDFs, docs) as context for AI answers
- **Team permissions:** Admin, editor, viewer roles
- **Use cases:** Team research, project knowledge bases, shared analysis

## Browser Extension

- **Quick search:** Highlight text on any webpage → right-click → "Ask Perplexity"
- **Page summary:** Summarize any webpage with one click
- **Side panel:** Ask questions about the current page without leaving it
- **Keyboard shortcut:** Trigger Perplexity search from any tab

## Competitive Positioning

| Feature | Perplexity | ChatGPT | Google Search |
|---------|-----------|---------|---------------|
| Real-time web search | ✅ (always) | ✅ (when enabled) | ✅ |
| Inline citations | ✅ (every answer) | Sometimes | Links in results |
| Follow-up context | ✅ (thread) | ✅ (conversation) | New search |
| Focus modes | ✅ (6 modes) | — | — |
| Ad-free | ✅ (Pro) | ✅ | Ads in results |
| API | ✅ | ✅ | ✅ |
