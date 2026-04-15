# News Portal — Information Architecture

## Overview

A news aggregation and publishing platform (CNN, BBC, Google News, Flipboard style). The mental model is **breaking → trending → sections** — urgency and recency drive the hierarchy. Above-the-fold real estate is critical. Content is organized by topic sections with time-sensitive ordering.

## Site Map

```
├── Home / Front Page
│   ├── Breaking News Banner
│   ├── Top Stories (hero + grid)
│   ├── Section Highlights (Politics, Tech, Sports...)
│   ├── Live Updates / Tickers
│   ├── Opinion / Analysis
│   ├── Trending / Most Read
│   └── Personalized "For You"
├── Section Pages
│   ├── Politics
│   ├── World
│   ├── Business
│   ├── Technology
│   ├── Science
│   ├── Health
│   ├── Sports
│   ├── Entertainment
│   ├── Opinion
│   └── Local / Regional
├── Article Page
│   ├── Headline, Subhead, Byline, Date
│   ├── Hero Image / Video
│   ├── Article Body (rich text)
│   ├── Related Coverage (timeline of same story)
│   ├── Author Bio
│   ├── Share Buttons
│   ├── Comments
│   ├── Related Articles
│   └── Newsletter Signup
├── Live Coverage / Blog
│   ├── Live Status Indicator
│   ├── Reverse-chronological updates
│   ├── Key Points Summary
│   └── Media Embeds
├── Video Section
│   ├── Live TV / Stream
│   ├── Video Clips
│   └── Video Series
├── Search
├── Newsletters
│   ├── Browse Newsletters
│   └── My Subscriptions
├── Podcasts (if applicable)
├── Account
│   ├── Saved Articles
│   ├── Reading History
│   ├── Preferences (topics, sources)
│   ├── Notification Settings
│   └── Subscription / Paywall
└── Footer
    ├── Sections Index
    ├── About / Contact
    ├── Advertise
    ├── Corrections
    └── RSS Feeds
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, hamburger/sections menu, search, subscribe CTA, account |
| **Section Nav** | Horizontal scrolling tabs below header | Politics, World, Business, Tech, Sports... |
| **Breaking Banner** | Full-width banner above header | Red/yellow bar for breaking news, dismissible |
| **Article Progress** | Top progress bar | Reading progress indicator |
| **Footer Nav** | Full sections index | All sections, about, legal, social |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Article | headline, subhead, body, byline, section, published_at, updated_at, breaking, premium | belongs to Section, Author; has Tags, Media |
| Section | name, slug, color, editor | has many Articles |
| Author | name, title, bio, avatar, social | has many Articles |
| LiveBlog | title, status (live/ended), key_points[] | has many LiveUpdates |
| LiveUpdate | body, media, timestamp | belongs to LiveBlog |
| Tag | name, slug | many-to-many with Articles |
| Newsletter | name, frequency, description, subscriber_count | has many Editions |
| Video | title, url, duration, thumbnail | embedded in or standalone |

### Article Priority Levels
`breaking → top_story → featured → standard → opinion → analysis`

## User Flows

### Breaking News
```
Push Notification → Open App → Breaking Banner → Article → Related Coverage → Share
```

### Daily Reading
```
Home → Scroll Sections → Click Article → Read → Next Article (swipe or related)
```

### Deep Dive
```
Section (e.g., Technology) → Browse → Article → Related Articles → Author's Other Work
```

## URL / Route Structure

```
/                          → Front Page
/:section                  → Section Page (e.g., /politics)
/:section/:slug            → Article
/live/:slug                → Live Coverage
/video                     → Video Section
/video/:id                 → Video Detail
/search?q=:query           → Search Results
/author/:name              → Author Page
/tag/:tag                  → Tag Page
/newsletters               → Newsletter Browse
/saved                     → Saved Articles
/account                   → Account
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Global | Section, Date Range, Content Type (article/video/opinion) | Relevance, Date |
| Section | Tags, Date Range, Author | Latest, Most Read |
| Saved | Section, Date | Saved Date, Published Date |

## Responsive Behavior

| Breakpoint | Home Layout | Article | Nav |
|------------|------------|---------|-----|
| Desktop | Hero + 3-column grid + sidebar | Content + sidebar (ads, related) | Full section tabs |
| Tablet | Hero + 2-column grid | Full-width content | Scrollable tabs |
| Mobile | Stacked cards | Full-width, AMP-style | Hamburger + section drawer |

### News-Specific Patterns
- Push notifications for breaking news
- Pull-to-refresh for latest
- Infinite scroll or "Load More" on section pages
- Estimated read time
- Share to social prominent
- Paywall modal (if premium)
- Dark mode for night reading

## Access Control

| Role | Browse | Read | Comment | Save | Premium |
|------|--------|------|---------|------|---------|
| Guest | ✅ | Limited (paywall after N articles) | — | — | — |
| Free User | ✅ | Limited | ✅ | ✅ | — |
| Subscriber | ✅ | Unlimited | ✅ | ✅ | ✅ |
| Editor | ✅ | ✅ | ✅ | ✅ | Publish/Edit |
| Admin | ✅ | ✅ | ✅ | ✅ | Full CMS |
