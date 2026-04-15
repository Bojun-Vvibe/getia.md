---
brand: Framer
tagline: Ship sites fast. Design and publish without code.
category: Content & Media
website: https://www.framer.com
---

# Information Architecture — Framer

## Overview
Framer is a website builder that emphasizes speed, visual polish, and component-driven design. Originally a prototyping tool, Framer has pivoted to a full **publish-ready website builder** with a built-in CMS, animations, responsive breakpoints, and localization. The IA is streamlined for speed — designers can go from idea to published site in hours, not weeks. Framer sites are known for smooth animations, modern aesthetics, and excellent performance.

## Site Map

```
framer.com
├── Home
├── Features
│   ├── Design (visual canvas)
│   ├── CMS (content management)
│   ├── Animations (scroll, hover, page transitions)
│   ├── Components (reusable, with variants + overrides)
│   ├── Responsive design (breakpoints)
│   ├── Localization (multi-language)
│   ├── SEO
│   ├── Forms
│   ├── Hosting (edge CDN)
│   ├── Analytics
│   └── AI (generate copy, images, layouts)
├── Templates
│   ├── Free templates
│   ├── Premium templates
│   ├── Browse by category (Landing, Portfolio, SaaS, Agency, Blog)
│   └── Template detail & preview
├── Marketplace
│   ├── Components (community-built)
│   ├── Templates
│   └── Plugins
├── Pricing
│   ├── Free / Mini / Basic / Pro
│   └── Feature comparison
├── Resources
│   ├── Academy (video tutorials)
│   ├── Blog
│   ├── Community (Discord)
│   ├── Showcase (sites built with Framer)
│   ├── Updates / Changelog
│   └── Developers (code components)
├── Enterprise
│   ├── Solutions
│   ├── Security
│   └── Contact sales
├── Support
│   ├── Help center
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── DPA
└── Auth
    ├── Log in
    └── Start for free

Framer Editor (Canvas)
├── Canvas (WYSIWYG)
├── Left panel
│   ├── Layers (element tree)
│   ├── Pages
│   ├── CMS Collections
│   ├── Assets
│   └── Components library
├── Right panel
│   ├── Properties (layout, sizing, typography, colors, effects)
│   ├── Fill & border
│   ├── Interactions (hover, scroll, tap animations)
│   ├── CMS bindings
│   └── Responsive overrides
├── Top bar
│   ├── Breakpoint selector (Desktop, Tablet, Phone)
│   ├── Preview
│   ├── Publish
│   ├── Share / Collaborate
│   └── AI tools
├── CMS panel
│   ├── Collections (define schema)
│   ├── Items (add/edit content)
│   └── Template pages
└── Settings
    ├── General (name, domain, favicon)
    ├── SEO
    ├── Analytics
    ├── Localization
    ├── Custom code
    ├── Redirects
    └── Forms
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| framer.com | Top nav | Logo, Features, Templates, Pricing, Enterprise, Resources, Log in, Start for free |
| Features | Dropdown | Design, CMS, Animations, Components, AI, Localization |
| Editor | Dual panel | Left (layers, pages, CMS, assets) + Right (properties, interactions) |
| Editor top | Toolbar | Breakpoint switch, preview, publish, undo/redo |
| Footer | Compact | Product, Resources, Company, Legal |

**Key pattern**: The editor is canvas-centric — maximum space for the visual design, with collapsible panels. Framer emphasizes "what you see is what ships" — the editor IS the published site layout.

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Site (Project) | name, slug, custom domain, plan, collaborators, published URL | has Chapters, → Voices, belongs to User |
| Page | name, path, SEO metadata, layout, breakpoint overrides | belongs to Site, has Components |
| Component | name, variants, properties (configurable), overrides, code component flag | used by Pages, has Variants |
| CMS Collection | name, fields (text, rich text, image, number, boolean, date, link, color, reference) | belongs to Site, has CMS Items |
| CMS Item | collection, field values, slug, published flag | belongs to CMS Collection |
| Animation | trigger (scroll, hover, appear, tap), properties (opacity, scale, position, rotation), easing, delay | belongs to Component/Page |
| Form | fields, action (email, webhook), submissions | belongs to Page/Site |
| Locale | language, country, translations, published flag | belongs to Site, has Translations |

## User Flows

### 5a. Build a site from template

```
Browse templates → preview → "Use Template" → Framer editor opens with template loaded →
  Replace content (text, images) → adjust styles → Set custom domain → configure SEO →
  Publish → site live on edge CDN
```


### 5b. Design from scratch

```
New project → blank canvas → Draw frames → add elements (text, images, buttons, sections) →
  Use auto-layout (flexbox-based) for responsive structure → Create components → reuse with variants →
  Add animations → preview → publish
```


### 5c. CMS-powered pages

```
Create CMS Collection (e.g., "Projects") → define fields → Add items (content entries) →
  Create CMS page → bind fields to design elements →
  Create collection list on pages → displays items dynamically →
  Add/edit CMS items → site updates automatically
```


### 5d. Localization

```
Settings → Localization → add languages → Content auto-duplicated per locale →
  Translate content (or use AI auto-translate) → Set locale-specific URLs (e.g., /fr/, /de/) →
  Visitors see localized version based on browser language or URL
```


## URL / Route Structure

```
# framer.com (marketing)
/                               → Home
/features/                      → Features
/features/{feature}/            → Feature detail
/templates/                     → Template directory
/templates/{slug}/              → Template preview
/marketplace/                   → Components & plugins
/pricing/                       → Pricing
/academy/                       → Video tutorials
/blog/                          → Blog
/blog/{slug}/                   → Blog post
/showcase/                      → Site showcase
/updates/                       → Changelog
/developers/                    → Code components docs
/help/                          → Help center

# Editor
/projects/{id}                  → Editor canvas

# Published site (custom domain)
/                               → Home
/{page-path}                    → Page
/{collection}/{item-slug}       → CMS detail page
/{locale}/{page-path}           → Localized page
/enterprise/                    # Enterprise landing
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Template search | By keyword, category (SaaS, Agency, Portfolio, Blog), free/premium |
| Marketplace search | Components, plugins by keyword and category |
| Academy search | Search tutorials by topic |
| Editor — Layers | Search elements in layer tree by name |
| CMS | Filter/search collection items by field values |
| Help search | Keyword → categorized articles |

## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full editor canvas, dual panels, marketing site with showcase animations |
| Tablet (768–1023px) | Editor usable but constrained; marketing site responsive |
| Mobile (<768px) | Editor not supported (desktop only); marketing site fully responsive |
| Editor breakpoints | Desktop (1200px default) → Tablet → Phone (390px) |
| Published sites | Responsive per breakpoint configurations set in editor |

## Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing site, templates, showcase, academy |
| Free Account | 1 site, Framer subdomain, limited CMS items, Framer badge |
| Mini Plan | Custom domain, remove badge, basic features |
| Basic Plan | More CMS items, form submissions, analytics |
| Pro Plan | Advanced staging, password protection, high CMS limits |
| Enterprise | SSO, SLA, audit logs, advanced security |
| Collaborator | Editor access with role-based permissions (edit / comment / view) |
| CMS Editor | Content editing only (simplified editor view) |
| Developer | Code components (React), custom API integrations |
| Internal | Template curation, marketplace review, infrastructure |
