---
brand: Ghost
tagline: Turn your audience into a business. Independent publishing.
category: Content & Media
website: https://ghost.org
---

# Information Architecture — Ghost

## Overview
Ghost is an open-source publishing platform focused on professional content creators who want to build a membership-based business around their writing. The IA supports the full creator economy stack: **publishing** (posts, pages, newsletters), **memberships** (free and paid tiers), **newsletters** (built-in email), and **monetization** (Stripe integration for subscriptions). Ghost positions itself as the independent, open-source alternative to Substack and WordPress, with a focus on speed, clean design, and owning your audience.

## Site Map

```
ghost.org (Marketing & Docs)
├── Home
├── Features
│   ├── Publishing (editor, scheduling, SEO)
│   ├── Memberships & subscriptions
│   ├── Newsletters (built-in email)
│   ├── Themes & design
│   ├── Integrations (Zapier, Slack, Stripe, etc.)
│   ├── Analytics (built-in)
│   └── API & headless
├── Pricing
│   ├── Ghost(Pro) hosted plans (Starter / Creator / Team / Business)
│   └── Self-hosted (free, open-source)
├── Themes
│   ├── Official themes
│   ├── Marketplace (3rd party)
│   └── Theme detail (demo, features, install)
├── Integrations
│   ├── Native integrations
│   ├── Zapier integrations
│   └── Custom integrations (API)
├── Resources
│   ├── Blog
│   ├── Tutorials
│   ├── Creator resources
│   └── Migration guides (from WordPress, Substack, Medium)
├── Developers
│   ├── API documentation (Content API, Admin API)
│   ├── Theme development (Handlebars)
│   ├── Webhooks
│   ├── SDKs (JS, helpers)
│   └── Self-hosting guide
├── Explore (showcase)
│   ├── Featured publications
│   └── Case studies
├── About
│   ├── Non-profit foundation
│   ├── Open source (GitHub)
│   ├── Careers
│   └── Changelog
├── Help
│   ├── Getting started
│   ├── Publishing
│   ├── Memberships
│   ├── Email / newsletters
│   ├── Themes
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── DPA
└── Auth
    ├── Log in
    └── Start free trial

yourblog.com (Ghost Publication)
├── Home (post feed)
├── Post
│   ├── Title, feature image, author, date
│   ├── Body (rich content — cards, embeds, galleries)
│   ├── Tags
│   ├── Members-only indicator (free/paid)
│   ├── Comments (native)
│   └── Share
├── Pages (About, Contact, etc.)
├── Tags
│   └── /tag/{slug}/
├── Authors
│   └── /author/{slug}/
├── Subscribe
│   ├── Free signup
│   ├── Paid plans (monthly/yearly)
│   └── Stripe checkout
├── Account (member)
│   ├── Profile
│   ├── Subscription management
│   ├── Email preferences
│   └── Billing (Stripe customer portal)
├── Archive / All posts

Ghost Admin (CMS)
├── Dashboard (KPIs: MRR, members, engagement)
├── Posts
│   ├── Published
│   ├── Drafts
│   ├── Scheduled
│   └── Editor (rich block editor)
├── Pages
├── Tags
├── Members
│   ├── All members
│   ├── Free members
│   ├── Paid members
│   ├── Import / Export
│   └── Labels
├── Newsletter
│   ├── Newsletter settings
│   ├── Send history
│   └── Email analytics (opens, clicks)
├── Offers & Coupons
├── Recommendations
├── Settings
│   ├── General
│   ├── Design (navigation, branding)
│   ├── Membership (tiers, pricing)
│   ├── Email (newsletter design, sender)
│   ├── Integrations
│   ├── Code injection
│   ├── Labs
│   └── Staff (users & roles)
└── Analytics
    ├── Web analytics
    ├── Email analytics
    └── Revenue
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| ghost.org | Top nav | Logo, Features, Pricing, Themes, Docs, Explore, Log in, Get started |
| Publication (frontend) | Theme-dependent header | Site title/logo, primary nav links, Subscribe CTA, member menu |
| Ghost Admin | Left sidebar | Dashboard, Posts, Pages, Tags, Members, Newsletter, Offers, Explore, Settings |
| Editor | Minimal top bar | Post title, settings panel (slug, excerpt, tags, feature image, scheduling, visibility) |

**Key pattern**: Ghost Admin is intentionally minimal — the left sidebar has fewer than 10 items. The editor is distraction-free, with settings tucked behind a side panel. The focus is on writing.

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Post | title, slug, body (Mobiledoc/Lexical), feature image, excerpt, tags, authors, published date, visibility (public/members/paid), newsletter flag, email status | → Author, → Tags, → Newsletter |
| Page | title, slug, body, feature image, template | belongs to Site, has Components |
| Tag | name, slug, description, feature image, meta (SEO) | has Posts, belongs to Blog |
| Author | name, slug, bio, avatar, location, social links | has Posts, belongs to Blog |
| Member | email, name, status (free/paid/complimentary), subscription tier, created date, labels, email preferences, Stripe customer ID | → Subscription Tier, belongs to Blog |
| Tier | name, description, monthly price, yearly price, benefits, visibility | has Members, belongs to Blog |
| Newsletter | name, sender, design settings, status, post association | → Folder, belongs to User |
| Offer | name, code, discount (% or amount), tier, duration, redemptions | → Tier, belongs to Blog |

## User Flows

### 5a. Publish a post

```
Ghost Admin → New Post → editor opens →
  Write content with cards (image, gallery, embed, bookmark, code, callout, etc.) →
  Open settings panel → tags, excerpt, feature image, visibility... →
  Toggle "Email newsletter" → send as email to members →
  Publish → post live on site + email sent (if enabled)
```


### 5b. Build membership business

```
Settings → Membership → define tiers (Free, Paid Monthly, Paid Yearly) → Connect Stripe → set prices →
  Create subscriber-only content (set visibility to "Members" or "Paid members") →
  Readers visit site → hit paywall → sign up (free) or subscribe (paid) →
  Dashboard shows MRR, member growth, churn, revenue
```


### 5c. Reader — Subscribe and read

```
Visit publication → browse free posts → Hit members-only post → "Subscribe" CTA →
  Enter email (free) or select paid plan (Stripe checkout) →
  Receive welcome email → full access to content →
  Manage subscription via account page (cancel, update payment, email prefs)
```


### 5d. Newsletter workflow

```
Write post → toggle "Send as newsletter" → Select newsletter (can have multiple) → preview email →
  Publish → post goes live on site + email delivered to segment →
  View email analytics (opens, clicks, unsubscribes)
```


## URL / Route Structure

```
# ghost.org
/                               → Home
/features/                      → Features
/pricing/                       → Pricing
/themes/                        → Theme marketplace
/docs/                          → Documentation
/docs/{api-name}/               → API reference
/tutorials/                     → Tutorials
/explore/                       → Publication showcase
/changelog/                     → Changelog
/help/                          → Help center

# Publication (yourblog.com)
/                               → Home (post list)
/{post-slug}/                   → Post
/page/{n}/                      → Pagination
/tag/{tag-slug}/                → Tag archive
/author/{author-slug}/          → Author archive
/#/portal/signup                → Subscribe modal
/#/portal/account               → Member account

# Ghost Admin
/ghost/                         → Dashboard
/ghost/#/posts/                 → Post list
/ghost/#/editor/post/{id}       → Editor
/ghost/#/pages/                 → Pages
/ghost/#/tags/                  → Tags
/ghost/#/members/               → Members
/ghost/#/settings/              → Settings
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Publication search | Native search (Sodo Search) — full-text, instant results |
| Admin — Posts | Filter by status (published/draft/scheduled), tag, author, visibility |
| Admin — Members | Filter by status (free/paid/complimentary), label, subscription tier |
| Theme docs search | Full-text documentation search |
| Tag archives | Built-in content filtering by tag |
| Author archives | Built-in content filtering by author |

## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full theme layout, sidebar (if theme supports), wide reading view |
| Tablet (768–1023px) | Responsive theme, condensed navigation |
| Mobile (<768px) | Single-column, hamburger nav, full-width images, mobile subscribe CTA |
| Ghost Admin | Responsive — works on tablet, limited on phone (desktop recommended) |
| Email (newsletter) | Responsive email template, optimized for all email clients |

## Access Control

| Role | Access |
|------|--------|
| Public Visitor | Read public posts, search, browse archives |
| Free Member | All public + members-only content, comments, email newsletters |
| Paid Member | All content including paid-tier posts, full archive access |
| Contributor (staff) | Create drafts, cannot publish |
| Author (staff) | Publish own posts, manage own profile |
| Editor (staff) | Publish and edit all posts, manage tags, invite contributors |
| Administrator | Full access — settings, members, integrations, staff, design, billing |
| Owner | Administrator + transfer ownership, billing management |
| API (Integration) | Content API (read-only, public) and Admin API (read-write, authenticated) |
