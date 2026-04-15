---
brand: Audible
tagline: Stories that surround you. Listen anywhere, anytime.
category: Content & Media
website: https://www.audible.com
---

# Information Architecture — Audible

## Overview
Audible (an Amazon company) is the world's largest audiobook and spoken-word platform. The IA is structured around a **credit-based membership model** — members receive monthly credits to exchange for any title, plus access to the Audible Plus catalog (included titles). The experience combines a retail marketplace (browse, purchase, wishlist) with a streaming library (Plus catalog), and deep Amazon ecosystem integration (Whispersync for switching between Kindle and Audible).

## Site Map

```
audible.com
├── Home (personalized)
├── Browse
│   ├── Audiobooks
│   │   ├── Best Sellers
│   │   ├── New Releases
│   │   ├── Coming Soon
│   │   ├── By genre (Mystery, Sci-Fi, Business, etc.)
│   │   └── Audible Originals
│   ├── Podcasts
│   │   ├── Originals
│   │   ├── Popular
│   │   └── By category
│   ├── Audible Plus Catalog
│   │   ├── Included with membership
│   │   └── Browse by genre
│   ├── Kids & Family
│   └── Sleep & Wellness
├── Title Detail Page
│   ├── Cover art, title, author, narrator
│   ├── Sample (play preview)
│   ├── Rating & reviews
│   ├── Length, release date, language
│   ├── Series info
│   ├── Buy with credit / Buy with money / Add to Plus
│   ├── Whispersync availability
│   ├── Listeners also enjoyed
│   └── Editorial reviews
├── Search
│   ├── Results (audiobooks, podcasts, authors, narrators)
│   └── Filters
├── Membership
│   ├── Plans (Plus, Premium Plus 1-credit, Premium Plus 2-credit)
│   ├── Benefits
│   ├── Gift memberships
│   └── Corporate plans
├── Library (Auth)
│   ├── Titles (purchased + credits)
│   ├── Plus catalog (streaming)
│   ├── Wish list
│   ├── Collections
│   ├── Listening stats
│   ├── Credits remaining
│   └── Purchase history
├── My Account
│   ├── Membership details
│   ├── Payment settings
│   ├── Listening preferences
│   └── Connected devices
├── Help Center
│   ├── Getting started
│   ├── Membership & billing
│   ├── Listening & app
│   ├── Returns & exchanges
│   └── Contact
├── Legal
│   ├── Conditions of Use
│   ├── Privacy
│   └── Listening guarantee
└── Auth
    ├── Sign in (Amazon account)
    └── Start free trial
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search bar, Browse, Plus Catalog, Categories, Library, Cart, Account |
| Browse | Category mega-menu | Genres, Best Sellers, New Releases, Originals, Podcasts, Kids |
| Title page | Action buttons | Buy, Add to Wish List, Sample, Share |
| Library | Top tabs | All, Titles, Podcasts, Plus Catalog, Wish List |
| App | Bottom tabs | Home, Discover, Library, Profile |
| Persistent player | Bottom bar | Book cover mini, play/pause, skip 30s, speed, sleep timer |

**Key pattern**: The credit model shapes the IA — "Use a Credit" vs. "Buy for $X" is a constant decision point. The Plus catalog is a secondary layer of "free with membership" content, always distinguished from credit-worthy purchases.

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Title (Audiobook) | title, author(s), narrator(s), length, release date, publisher, language, cover art, sample, price, credit-eligible, Plus-included, series, rating, reviews count | belongs to parent entity |
| Series | name, books (ordered), author, genre | belongs to parent entity |
| Podcast | name, description, episodes, creator, category, Audible Original flag | belongs to parent entity |
| Review | user, rating (1-5), title, body, helpful votes | belongs to User and Entity |
| Collection | name, owner, titles, public/private | belongs to parent entity |
| Listening Stats | hours listened, titles finished, badges, streaks | belongs to parent entity |
| Credit | balance, expiry, tier (1/2 per month) | belongs to parent entity |
| Author | name, bio, titles[], photo | has many Titles |
| Narrator | name, titles[], rating | has many Titles |
| Bookmark | title_id, position_seconds, note, created_at | belongs to User |
| Clip | title_id, start_seconds, end_seconds, shareable | belongs to User |
| Badge | name, criteria, earned_at | belongs to User |

## User Flows

### Browse & purchase with credit
```
Browse categories or search → find title → Play sample (5-minute preview) → Click "1 Credit" → title added to Library → Download in app → listen offline → Rate and review after listening
```

### Whispersync experience
```
Buy Kindle eBook on Amazon → Audible version available at reduced price → Purchase Audible companion → Whispersync enabled → Read on Kindle → switch to Audible app → picks up where you left off → Seamlessly transition between reading and listening
```

### Plus catalog streaming
```
Browse Plus Catalog → thousands of included titles → Add to Library → stream or download → Listen without using a credit → Titles may rotate in/out of Plus catalog
```

### Membership management
```
Account → Membership Details → View plan, next billing date, credits remaining → Upgrade/downgrade plan → change credit allocation → Pause membership (up to 3 months) or cancel → Unused credits carry over (up to rollover limit)
```

### Listen & Bookmark
```
Library → Select title → Play → Set playback speed (1.25x) → Add bookmark at key moment → Enable sleep timer → Resume later from bookmark
                                                                                                                                              ↘ Create clip → Share clip with friends
```

### Return & Exchange
```
Library → Title → Return → Select reason → Credit restored immediately → Browse for replacement → Use credit on new title
```
## URL / Route Structure

```
/                               → Home (personalized)
/cat/                           → Browse categories
/cat/{genre}/                   → Genre page
/cat/best-sellers/              → Best sellers
/cat/new-releases/              → New releases
/ep/{asin}                      → Title detail page
/pd/{podcast-asin}              → Podcast detail
/search?keywords={q}            → Search results
/plus/                          → Plus catalog
/membership/                    → Membership plans
/lib/                           → My Library (auth)
/lib/wish-list/                 → Wish list (auth)
/account/                       → Account settings (auth)
/help/                          → Help center
/help/{topic}/                  → Help article
/originals/                    → Audible Originals
/series/{asin}                 → Series page
/author/{name}                 → Author page
/narrator/{name}              → Narrator page
/lib/collections/             → Collections (auth)
/lib/collections/{id}         → Collection detail
/lib/stats/                    → Listening stats
/lib/purchase-history/         → Purchase history
/account/membership/           → Membership details
/account/devices/              → Connected devices
/account/preferences/          → Listening preferences
/gift/                         → Gift memberships
/corporate/                    → Corporate plans
/kids/                         → Kids & Family section
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | By title, author, narrator; autocomplete suggestions |
| Genre filter | Fiction, Non-fiction, Business, Sci-Fi, Mystery, Romance, etc. |
| Length filter | Under 1 hour, 1-3h, 3-6h, 6-10h, 10-20h, 20+ hours |
| Format filter | Audiobooks, Podcasts, Originals, Plus catalog only |
| Sort | Relevance, best sellers, average rating, newest, price |
| Whispersync filter | Show only titles with Kindle companion |
| Library search | Search within owned titles, filter by listened/unfinished |
| Author/Narrator | Search by author name, narrator name | Relevance, popularity |
| Series | Browse series, filter complete/ongoing | Series order, popularity |

## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full browse grid (4-5 columns), sidebar filters, detailed title page |
| Tablet (768–1023px) | 3-column grid, collapsible filters |
| Mobile web (<768px) | 2-column grid, bottom-sheet filters, simplified title page, deep-link to app |
| App (iOS/Android) | Full listening experience — downloads, playback speed, sleep timer, car mode, bookmarks, clips |
| Alexa / Smart speakers | Voice-driven — "Alexa, read my audiobook" → continues where you left off |


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
| Visitor | Browse catalog, view title details, play samples |
| Free (no membership) | Purchase individual titles at full price, access purchased library |
| Audible Plus Member | Plus catalog access (stream/download included titles), no credits |
| Premium Plus Member (1 credit) | 1 credit/month + Plus catalog + member discounts (30% off) |
| Premium Plus Member (2 credits) | 2 credits/month + all Premium Plus benefits |
| Family Plan | Shared benefits, individual libraries |
| Corporate / Gift | Pre-paid plans, bulk credit management |
| Internal | Catalog management, editorial picks, content partnerships |
