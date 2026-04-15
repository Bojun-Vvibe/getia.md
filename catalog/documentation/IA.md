# Documentation Site — Information Architecture

## Overview

A technical documentation platform for APIs, SDKs, or product knowledge bases. The mental model is a **reference book** — users either read linearly (guides) or jump directly to specific topics (API reference). Discoverability and search are critical.

## Site Map

```
├── Home / Landing
│   ├── Quick Start Links
│   ├── Popular Topics
│   └── What's New / Changelog
├── Getting Started
│   ├── Introduction
│   ├── Installation
│   ├── Quick Start Guide
│   └── Core Concepts
├── Guides / Tutorials
│   ├── Guide Category A
│   │   ├── Tutorial 1
│   │   ├── Tutorial 2
│   │   └── ...
│   ├── Guide Category B
│   └── ...
├── API Reference
│   ├── Authentication
│   ├── Endpoints / Methods
│   │   ├── Resource A
│   │   │   ├── List
│   │   │   ├── Get
│   │   │   ├── Create
│   │   │   ├── Update
│   │   │   └── Delete
│   │   ├── Resource B
│   │   └── ...
│   ├── Error Codes
│   ├── Rate Limits
│   └── SDKs & Libraries
├── Examples / Cookbooks
│   ├── Example by Use Case
│   └── Example by Language
├── Changelog
│   └── Version entries (date-sorted)
├── Community
│   ├── GitHub Discussions
│   ├── Discord / Slack
│   └── Contributing Guide
└── Search (full-text)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed header | Logo, version selector, search (⌘K), GitHub link, dark mode toggle |
| **Sidebar** | Left sidebar, collapsible sections | Full doc tree, highlighted current page, expand/collapse sections |
| **On-Page Nav** | Right sidebar (table of contents) | Auto-generated from headings, scroll-synced |
| **Breadcrumbs** | Above page title | Docs > Guides > Category > Page Title |
| **Pagination** | Bottom of page | Previous / Next article within section |
| **Search** | ⌘K overlay | Full-text search with section filtering |

### Sidebar Structure
```
Getting Started ▾
  Introduction
  Installation
  Quick Start
  Core Concepts

Guides ▾
  Category A ▾
    Tutorial 1
    Tutorial 2
  Category B ▾
    ...

API Reference ▾
  Authentication
  Resource A ▾
    List
    Get
    Create
    ...

Examples

Changelog
```

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Section | title, slug, order, icon | has many Pages, child Sections |
| Page | title, slug, body (MDX), last_updated, authors[], tags[] | belongs to Section, has Headings |
| Heading | text, level (h2-h4), anchor | belongs to Page (for ToC) |
| CodeBlock | language, code, title, highlighted_lines[] | embedded in Page |
| APIEndpoint | method, path, description, parameters[], responses[], auth_required | belongs to API Section |
| ChangelogEntry | version, date, type (added/changed/fixed/removed), description | standalone |
| Version | number, status (current/legacy/beta) | scopes all content |

### Content Types
- **Conceptual**: Explains "what" and "why" (Core Concepts)
- **Procedural**: Step-by-step "how to" (Guides)
- **Reference**: Complete specification (API Reference)
- **Example**: Working code samples (Cookbooks)

## User Flows

### New User (Linear Reading)
```
Home → Getting Started → Installation → Quick Start → Core Concepts → First Guide
```

### Experienced User (Reference Lookup)
```
⌘K Search → "create user endpoint" → API Reference Page → Copy code example
```

### Troubleshooting
```
Search "error 429" → Error Codes Page → Rate Limits Page → Implementation Guide
```

### Version Migration
```
Changelog → Breaking Changes → Migration Guide → Updated API Reference
```

## URL / Route Structure

```
/                                → Home
/docs                            → Getting Started (default)
/docs/getting-started            → Getting Started section
/docs/getting-started/install    → Installation
/docs/getting-started/quickstart → Quick Start
/docs/guides                     → Guides index
/docs/guides/:category/:slug     → Guide page
/api-reference                   → API Reference root
/api-reference/auth              → Authentication
/api-reference/:resource         → Resource overview
/api-reference/:resource/:action → Specific endpoint
/examples                        → Examples index
/examples/:slug                  → Specific example
/changelog                       → Changelog
/search?q=:query                 → Search results
```

### Version Prefixing (optional)
```
/docs/v2/getting-started/install
/docs/v1/getting-started/install  (legacy)
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global (⌘K) | All pages, headings, code blocks | Section (Guides / API / Examples), Version | Relevance |
| Search Page | Full text | Section, Content Type, Tags, Date | Relevance, Date |
| API Reference | Endpoints, parameters, descriptions | Method (GET/POST/PUT/DELETE), Resource | Alphabetical, Resource Group |

### Search UX
- Instant results as you type
- Highlight matching text in results
- Show section/breadcrumb context
- Keyboard navigation (↑↓ to browse, Enter to select)

## Responsive Behavior

| Breakpoint | Sidebar | Content | ToC |
|------------|---------|---------|-----|
| Desktop (≥1280px) | Fixed left (240px) | Center column (max 768px) | Fixed right (200px) |
| Tablet (768–1279px) | Hamburger toggle overlay | Full width | Hidden (show as dropdown) |
| Mobile (<768px) | Hamburger drawer | Full width, code blocks scroll horizontally | Hidden |

### Mobile Adaptations
- Code blocks: horizontal scroll with copy button
- Tables: horizontal scroll wrapper
- Sidebar: full-screen drawer with search at top
- ToC: collapsible section at top of article

## Access Control

| Role | Public Docs | Internal Docs | API Keys | Admin |
|------|-------------|---------------|----------|-------|
| Public | ✅ | — | — | — |
| Authenticated User | ✅ | ✅ | Generate | — |
| Admin | ✅ | ✅ | Manage | ✅ (edit pages, manage versions) |
