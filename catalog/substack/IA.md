---
brand: Substack
tagline: "Start a newsletter. Subscription-based publishing platform where writers own their audience."
category: Newsletter
website: https://substack.com
---

# Substack — Information Architecture

## Overview

A subscription newsletter platform where independent writers publish directly to their email subscribers. Substack's mental model is **"your own publication"** — each writer runs an independent newsletter/blog with free and paid tiers, and Substack handles payments, delivery, and hosting. Key differentiators: writer-owned mailing lists (portable), a 10% revenue cut model (no ads), Substack Notes (short-form social feed), Substack Chat (community), podcast/video hosting, Substack Reads (reader app), and the Leaderboard showcasing top publications.

## Site Map

```
├── Substack Home (substack.com)
│   ├── Discover / Browse
│   │   ├── Categories
│   │   │   ├── Culture, Politics, Technology, Business, Finance
│   │   │   ├── Science, Health, Sports, Food & Drink
│   │   │   └── Faith, Music, Art, Comics, Fiction, Crypto...
│   │   ├── Leaderboard (top free + paid publications)
│   │   ├── Staff Picks / Featured
│   │   ├── Trending Posts
│   │   └── Recommendations from writers you follow
│   ├── Substack Reads (reader inbox)
│   │   ├── Inbox (latest from subscriptions)
│   │   ├── Activity (likes, comments, restacks from network)
│   │   └── Filter: All / Free / Paid
│   ├── Notes (short-form feed)
│   │   ├── Timeline (from subscriptions + recommendations)
│   │   ├── Create Note (text, images, links, quotes)
│   │   ├── Restack (like retweet)
│   │   ├── Like / Comment
│   │   └── Discover tab
│   └── Search (writers, publications, posts)
├── Individual Publication (writer.substack.com or custom domain)
│   ├── Home
│   │   ├── Hero (publication name, tagline, subscribe CTA)
│   │   ├── Latest Posts
│   │   ├── Popular Posts
│   │   └── About / Bio
│   ├── Archive
│   │   ├── All Posts (chronological, paginated)
│   │   ├── Filter: Free / Paid
│   │   └── Search within publication
│   ├── About Page
│   │   ├── Writer Bio
│   │   ├── Publication Description
│   │   └── Subscribe CTA
│   ├── Post / Article
│   │   ├── Title, Subtitle
│   │   ├── Author, Date
│   │   ├── Body Content
│   │   │   ├── Rich Text (headings, paragraphs, quotes)
│   │   │   ├── Images
│   │   │   ├── Embedded Audio Player (podcast)
│   │   │   ├── Embedded Video
│   │   │   ├── Footnotes
│   │   │   ├── Buttons / CTAs
│   │   │   ├── Paywall Break (content below is paid-only)
│   │   │   └── Pullquotes
│   │   ├── Like (heart) Count
│   │   ├── Comments Section
│   │   │   ├── Threaded Comments
│   │   │   ├── Writer Pinned Comment
│   │   │   └── Like on Comments
│   │   ├── Share (copy link, Twitter, email)
│   │   ├── Restack (share to your own Substack Notes)
│   │   ├── Gift Link (bypass paywall for friends)
│   │   └── Subscribe CTA (end of post, sticky bar for non-subscribers)
│   ├── Podcast Player (if podcast publication)
│   │   ├── Episode List
│   │   ├── Audio Player (persistent mini player)
│   │   └── RSS Feed Link
│   ├── Chat (community)
│   │   ├── Threads (topic-based)
│   │   ├── Real-time Messages
│   │   └── Subscriber-only access
│   └── Subscribe
│       ├── Free (email newsletter)
│       ├── Paid (monthly / annual price, set by writer)
│       ├── Founding Member (higher tier, optional)
│       └── Group Subscriptions
├── Writer Dashboard
│   ├── Home (stats overview)
│   ├── Posts
│   │   ├── Published
│   │   ├── Drafts
│   │   ├── Scheduled
│   │   └── Editor
│   │       ├── Title + Subtitle
│   │       ├── Rich Text Body (block editor)
│   │       ├── Image Upload
│   │       ├── Audio Upload (podcast)
│   │       ├── Video Upload
│   │       ├── Add Paywall Break
│   │       ├── Add Button / CTA
│   │       ├── Preview (email + web)
│   │       ├── Send Options
│   │       │   ├── Section (if multiple sections)
│   │       │   ├── Audience: Everyone / Free only / Paid only
│   │       │   ├── Publish: Now / Schedule
│   │       │   ├── Social preview (title, subtitle, image)
│   │       │   └── Email subject line override
│   │       └── Import (from WordPress, Ghost, etc.)
│   ├── Notes (create/manage)
│   ├── Chat (manage threads)
│   ├── Subscribers
│   │   ├── List (name, email, type, subscribed date)
│   │   ├── Import Subscribers (CSV)
│   │   ├── Export Subscribers (portable mailing list)
│   │   ├── Growth Analytics
│   │   └── Segments (free, paid, comp, founding)
│   ├── Stats
│   │   ├── Subscriber Growth (chart)
│   │   ├── Revenue / MRR
│   │   ├── Post Performance (opens, clicks, views)
│   │   ├── Email Open Rate
│   │   ├── Web Views
│   │   ├── Top Posts
│   │   └── Churn Rate
│   ├── Settings
│   │   ├── Publication Details (name, description, logo, colors)
│   │   ├── Custom Domain
│   │   ├── Sections (multi-section newsletter)
│   │   ├── Payments (Stripe connect, pricing, free trial)
│   │   ├── Recommendations (cross-promote other Substacks)
│   │   ├── Email Settings (sender name, reply-to)
│   │   ├── Comments Policy
│   │   ├── Homepage Layout
│   │   ├── SEO / Social Preview
│   │   └── Import / Export
│   └── Payments
│       ├── Stripe Dashboard Link
│       ├── Earnings History
│       ├── Substack Fee (10% of paid revenue)
│       └── Payout Schedule
├── Reader Settings
│   ├── Account (email, password)
│   ├── Subscriptions (manage all)
│   ├── Billing (paid subscriptions list)
│   ├── Notifications (email frequency, app push)
│   ├── Reading Preferences
│   └── Privacy
└── Substack App (mobile)
    ├── Inbox (subscriptions feed)
    ├── Notes (short-form feed)
    ├── Search / Discover
    ├── Activity
    └── Profile
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Substack Home Top Bar** | Fixed | Substack logo, Search, "Start writing" CTA, Sign In, user avatar |
| **Substack Home Tabs** | Horizontal tabs | Inbox, Notes, Discover |
| **Publication Top Bar** | Fixed, publication-branded | Publication name/logo, Home, Archive, About, Subscribe button |
| **Sticky Subscribe Bar** | Fixed bottom (for non-subscribers on post page) | "Subscribe to [Publication]" + email input or Sign In |
| **Post Engagement Bar** | Below post, or floating | Like (heart), Comment, Share, Restack |
| **Writer Dashboard Nav** | Left sidebar | Home, Posts, Notes, Chat, Subscribers, Stats, Settings |
| **Mobile Tab Bar** | Bottom (Substack app) | Inbox, Notes, Search, Activity, Profile |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Publication | name, slug, description, logo, cover_image, custom_domain, author, pricing (monthly/annual), subscriber_count, sections[], recommendations[] | belongs to Writer; has many Posts, Subscribers |
| Post | title, subtitle, body (rich text/html), slug, type (newsletter/podcast/video/thread), audience (everyone/free/paid), published_at, scheduled_at, email_subject, section, likes_count, comments_count, web_views, email_opens | belongs to Publication; has Comments, Likes |
| Note | body (short text), media[], restack_of, likes_count, comments_count, created_at | belongs to User |
| Subscriber | email, name, type (free/paid/comp/founding), subscribed_at, source | belongs to Publication |
| Comment | body, created_at, likes_count, pinned (bool) | belongs to Post and User; can be nested |
| Like | created_at | belongs to User and Post/Note/Comment |
| Restack | note (optional commentary), original_post | belongs to User (sharing mechanism) |
| ChatThread | title, body, created_at, replies_count | belongs to Publication (community) |
| Section | name, slug, description | belongs to Publication (multi-section newsletter) |
| GiftLink | post, token, created_at, views | belongs to Post (bypass paywall) |

### Post Delivery
```
Write → Publish → Email sent to subscribers + Post appears on web
Post visibility: Free (all subscribers) | Paid (paid subscribers only)
Paywall break: Content above is free preview, below requires subscription
```

### Subscriber Types
```
Free subscriber → receives free posts via email
Paid subscriber → receives all posts (free + paid)
Founding member → paid at higher optional price (supporter tier)
Comp subscriber → free paid access (gifted by writer)
```

## User Flows

### Reader: Discover and Subscribe
```
Substack Home → Discover → Category → Publication → Read Free Post → Subscribe (free) → Upgrade to Paid
```

### Reader: Daily Reading
```
Open Substack App → Inbox → Latest Posts → Tap to Read → Like → Comment → Next Post
```

### Reader: Notes Browsing
```
Notes Tab → Timeline → Read Note → Restack → Comment → Discover New Writers → Subscribe
```

### Writer: Publish Newsletter
```
Dashboard → New Post → Write Title + Body → Add Paywall Break → Preview Email → Set Audience → Publish Now → Email Delivered + Web Published
```

### Writer: Podcast Episode
```
Dashboard → New Post → Add Audio Upload → Write Show Notes → Set as Podcast Post → Publish → Available via RSS + Email + Web
```

### Writer: Grow Audience
```
Dashboard → Recommendations → Add Substacks to Recommend → Cross-promotion → New Subscriber Joins → Welcome Email Sent
```

### Paid Subscription
```
Read Post → Hit Paywall → "Subscribe" CTA → Choose Plan (monthly/annual) → Stripe Payment → Unlock All Content
```

## URL / Route Structure

```
# Substack Home (substack.com)
/                              → Home / Discover
/inbox                         → Reader Inbox
/notes                         → Notes Feed
/search?q=:query               → Search
/discover                      → Discover / Browse
/leaderboard                   → Top Publications
/category/:name                → Category Page
/profile/:userId               → User Profile
/settings                      → Reader Settings

# Individual Publication (writer.substack.com)
/                              → Publication Home
/about                         → About Page
/archive                       → All Posts Archive
/archive?sort=new              → Archive sorted by new
/p/:slug                       → Post / Article
/p/:slug/comments              → Post Comments
/podcast                       → Podcast Episodes
/chat                          → Community Chat
/subscribe                     → Subscribe Page
/manage-subscription           → Manage Your Subscription

# Writer Dashboard (writer.substack.com/publish)
/publish                       → Dashboard Home
/publish/posts                 → All Posts
/publish/post/:id              → Edit Post
/publish/post/new              → New Post Editor
/publish/notes                 → Manage Notes
/publish/chat                  → Manage Chat
/publish/subscribers           → Subscriber List
/publish/stats                 → Stats / Analytics
/publish/settings              → Publication Settings
/publish/domain                → Custom Domain Settings
/publish/payments              → Payments / Earnings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global (substack.com) | Publications, Posts, People | Category | Relevance |
| Inbox (reader) | Subscribed posts | All / Free / Paid, Publication | Date |
| Publication Archive | Posts within publication | Free / Paid, Section | Newest, Oldest, Popular |
| Subscriber List | Subscribers | Type (free/paid/comp/founding), Source, Date | Date, Name, Type |
| Notes | Notes from network | — | Latest |

## Responsive Behavior

| Breakpoint | Header | Post Body | Navigation |
|------------|--------|-----------|------------|
| Desktop (≥1080px) | Full nav bar | Content centered (max 728px) | Top nav, sidebar on dashboard |
| Tablet (768–1079px) | Condensed nav | Full-width content (max 728px) | Top nav |
| Mobile (<768px) | Simplified header + app banner | Full-width, optimized typography | Bottom tab bar (app), hamburger (web) |

### Reading Experience
- Post body: max-width 728px, centered
- Typography: serif body text, clean line height (~1.7)
- Email-first design: posts render well in email clients
- Images: contained or full-width
- Footnotes: clickable inline
- Paywall break: visible divider + subscribe CTA
- Audio player: inline for podcast posts
- Read time: not shown (Substack philosophy: no metrics pressure on readers)

### Mobile Adaptations
- Substack Reader app: native reading experience
- Push notifications for new posts
- Offline reading (cached posts)
- Background audio for podcast posts
- Share sheet integration
- Deep links from email to app

## Access Control

| Role | Read Free | Read Paid | Comment | Write | Dashboard | Manage Subs |
|------|-----------|-----------|---------|-------|-----------|-------------|
| Unauthenticated | ✅ (web) | Preview + paywall | — | — | — | — |
| Free Subscriber | ✅ | Preview + paywall | ✅ | — | — | — |
| Paid Subscriber | ✅ | ✅ | ✅ | — | — | Own subscription |
| Founding Member | ✅ | ✅ | ✅ | — | — | Own subscription |
| Writer (Free Publication) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (subscribers) |
| Writer (Paid Publication) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ + payments, earnings |
| Substack Admin | ✅ | ✅ | ✅ | ✅ | ✅ | Platform moderation, featuring |

### Ownership Model
- Writer owns the mailing list (exportable CSV at any time)
- Writer sets pricing (Substack takes 10% of paid subscriptions)
- Stripe handles payments directly (writer's Stripe account)
- Custom domain supported (DNS CNAME)
- No ads — revenue comes only from subscriptions
