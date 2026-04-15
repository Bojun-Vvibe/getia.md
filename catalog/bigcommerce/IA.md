---
brand: BigCommerce
tagline: Ecommerce for a new era. Enterprise power, simplified.
category: E-Commerce & Fintech
website: https://www.bigcommerce.com
---

# Information Architecture — BigCommerce

## Overview
BigCommerce is an enterprise-grade SaaS e-commerce platform offering hosted storefronts, headless commerce via API, multi-storefront capabilities, and an extensive app marketplace. The IA serves three audiences: **merchants** evaluating the platform, **developers** building integrations, and **partners/agencies** reselling or implementing BigCommerce. Unlike self-hosted WooCommerce, BigCommerce is fully managed — hosting, security, and updates are handled by the platform.

## Site Map

```
bigcommerce.com
├── Home
├── Product
│   ├── Platform overview
│   ├── Storefront
│   │   ├── Stencil (theme engine)
│   │   ├── Page Builder
│   │   └── Headless commerce
│   ├── Multi-Storefront
│   ├── B2B Edition
│   ├── Omnichannel (Amazon, eBay, social, POS)
│   ├── Payments
│   ├── Shipping
│   ├── International & multi-currency
│   ├── SEO
│   └── Security & reliability
├── Solutions
│   ├── By industry (Fashion, Food, B2B, etc.)
│   ├── By business size (SMB, Mid-market, Enterprise)
│   ├── Headless commerce
│   ├── Multi-storefront
│   └── B2B
├── Pricing
│   ├── Standard / Plus / Pro / Enterprise
│   └── Feature comparison
├── Apps & Integrations
│   ├── App marketplace
│   ├── Browse by category
│   ├── Featured apps
│   ├── Free apps
│   └── App detail page
├── Developers
│   ├── API documentation
│   ├── SDKs & tools
│   ├── Stencil theme docs
│   ├── Headless / Storefront API
│   ├── BigDesign (component library)
│   └── Developer community
├── Partners
│   ├── Partner program
│   ├── Agency directory
│   ├── Technology partners
│   └── Become a partner
├── Resources
│   ├── Blog
│   ├── Case studies
│   ├── Webinars
│   ├── Guides & reports
│   ├── University (learning center)
│   └── Community forum
├── Support
│   ├── Help center
│   ├── Knowledge base
│   ├── System status
│   └── Contact
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Trust & security
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── SLA
└── Auth
    ├── Log in
    └── Start free trial
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav | Logo, Products, Solutions, Pricing, Apps, Resources, Request Demo, Start Trial |
| Products | Mega-menu | Platform features organized by capability area |
| Solutions | Mega-menu | By industry, by size, by use case |
| Developer | Separate docs site | Left sidebar with API reference, guides, tutorials |
| Control Panel | Left sidebar | Orders, Products, Customers, Marketing, Analytics, Channel Manager, Apps, Settings |
| Footer | Multi-column | Product, Solutions, Partners, Resources, Company, Legal |

**Key pattern**: The marketing site is comparison-oriented (vs. Shopify, vs. WooCommerce), with ROI calculators and migration guides. The developer docs are a separate subdomain with their own IA.

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Product (Platform Feature) | name, description, benefits, screenshots, related features | belongs to parent entity |
| App (Marketplace) | name, developer, description, price, rating, reviews, category, compatibility | belongs to parent entity |
| Case Study | merchant, industry, challenge, solution, results, quote, URL | belongs to parent entity |
| Plan | name (Standard/Plus/Pro/Enterprise), price, features, limits | belongs to parent entity |
| Blog Post | title, author, date, category, body, CTA | belongs to User, has many Comments |
| API Endpoint | resource, methods, parameters, examples, versioning | belongs to parent entity |

### Merchant Store Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Product | name, SKU, price, variants (size/color), images, description, categories, brand, custom fields, inventory | belongs to parent entity |
| Category | name, description, image, parent, sort order | has many Items |
| Order | number, customer, items, total, status, payment, shipping, channel | belongs to User, has many Items |
| Customer | name, email, addresses, groups, order history, account | belongs to parent entity |
| Storefront | name, domain, channel, locale, currency | belongs to parent entity |

## User Flows

### Merchant — Evaluate & sign up
```
Land on home → explore Product features or Solutions by industry → View pricing → compare plans → start free trial → Onboarding wizard → store name, industry, products → Add products, configure payments, choose theme → Customize with Page Builder → launch store
```

### Merchant — Multi-storefront
```
Create primary store → go to Channel Manager → Add new storefront → assign domain, locale, currency → Share product catalog or create storefront-specific products → Unique themes per storefront → launch multiple brands from one dashboard
```

### Developer — Headless build
```
Visit developer docs → Storefront API / GraphQL reference → Choose frontend framework (Next.js, Gatsby, etc.) → Use BigCommerce as backend (products, cart, checkout API) → Build custom frontend → connect via API keys → Deploy independently → BigCommerce handles commerce logic
```

### Partner — Agency implementation
```
Join Partner Program → access resources, training → Client engagement → migrate or build store on BigCommerce → Use Stencil CLI for theme development, API for custom integrations → Launch client store → ongoing management via Control Panel
```

### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
## URL / Route Structure

```
# Marketing site
/                               → Home
/product/                       → Platform overview
/product/{feature}/             → Feature detail
/solutions/{industry}/          → Industry solution
/essentials/pricing/            → Pricing & plans
/apps/                          → App marketplace
/apps/{category}/               → App category
/apps/{app-slug}/               → App detail
/partners/                      → Partner program
/resources/blog/                → Blog
/resources/blog/{slug}/         → Blog post
/case-studies/{slug}/           → Case study
/support/                       → Help center

# Developer docs (developer.bigcommerce.com)
/docs/                          → Docs home
/docs/rest-management/          → REST API reference
/docs/storefront/               → Storefront API
/docs/stencil-docs/             → Theme development

# Merchant store (customizable)
/                               → Storefront home
/categories/{slug}/             → Category page
/products/{slug}/               → Product page
/cart.php                       → Cart
/checkout/                      → Checkout
/account.php                    → Customer account
/about/                        → Company info
/careers/                       → Careers page
/trust/                         → Trust & security
/resources/webinars/            → Webinars
/resources/guides/              → Guides & reports
/community/                     → Community forum
/university/                    → BigCommerce University
/status/                        → System status page
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| App marketplace search | Keyword, category, free/paid, rating, developer |
| Help center search | Full-text knowledge base search |
| Blog search | By category (Marketing, Technology, Operations, Design) |
| Developer docs search | API endpoint search, guide keyword search |
| Merchant store (built-in) | Product search, category facets, price/brand/attribute filters, sort options |

- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full mega-menu, comparison tables, multi-column app grid |
| Tablet (768–1023px) | Condensed nav, 2-column grid, scrollable comparison |
| Mobile (<768px) | Hamburger menu, single-column, accordion features, mobile CTA bar |
| Control Panel | Responsive admin — works on tablet, limited on phone |
| Merchant storefronts | Responsive themes (Cornerstone default is fully responsive) |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads
## Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing site, pricing, app marketplace, docs |
| Trial User | Full Control Panel access, limited to trial period |
| Store Owner | Full admin — products, orders, settings, apps, users |
| Store Admin | Configurable permissions — may exclude billing or user management |
| Staff (limited) | Assigned sections only (e.g., orders only, products only) |
| Customer (storefront) | Browse, purchase, account, order history, wishlists |
| Developer | API keys, webhook management, theme development |
| Partner / Agency | Multi-store management, partner dashboard, referral tracking |
| Internal (BigCommerce) | Merchant support, platform operations, partner management |
