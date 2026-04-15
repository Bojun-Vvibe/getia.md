---
brand: Pocket
tagline: Save it. Read it later. Get smarter.
category: Content & Media
website: https://getpocket.com
---

# Information Architecture — Pocket

## Overview
Pocket (by Mozilla) is a read-it-later service that lets users save articles, videos, and web pages for offline consumption. The IA is intentionally minimal — a **save → organize → read** pipeline. Pocket differentiates through its recommendation engine (surfacing curated articles), tagging system, and distraction-free reading mode that strips away website clutter. It serves as both a personal reading library and a content discovery platform.

## Site Map

```
getpocket.com
├── Home (marketing)
├── My List (Auth — core experience)
│   ├── Saved items
│   ├── Archive
│   ├── Favorites
│   ├── Highlights
│   ├── Tags
│   │   └── /{tag-name}
│   ├── All items / Articles / Videos
│   └── Search
├── Discover (Recommendations)
│   ├── Best of web (curated)
│   ├── Topics
│   │   ├── Technology
│   │   ├── Science
│   │   ├── Self-improvement
│   │   ├── Food
│   │   ├── Entertainment
│   │   └── ... (12+ topics)
│   ├── Popular
│   └── Trending
├── Collections (editorial)
│   ├── Curated reading lists
│   └── /{collection-slug}
├── Pocket Premium
│   ├── Permanent library
│   ├── Full-text search
│   ├── Suggested tags
│   ├── Ad-free Discover
│   └── Unlimited highlights
├── Apps & Extensions
│   ├── Browser extension (Chrome, Firefox, Safari)
│   ├── iOS app
│   ├── Android app
│   └── API
├── Help
│   ├── Getting started
│   ├── Saving content
│   ├── Reading & listening
│   ├── Account
│   └── Contact
├── About
│   ├── Company
│   └── Blog
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Cookie policy
└── Auth
    ├── Log in
    └── Sign up
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| App/Web (auth) | Left sidebar | My List, Archive, Favorites, Highlights, Tags, Discover |
| My List | Top bar | All / Articles / Videos, sort, filter, search |
| Item view | Minimal toolbar | Font size, theme (light/dark/sepia), listen (TTS), archive, favorite, tag, share, delete |
| Discover | Topic tabs | Best Of, Popular, Topics |
| Extension | Popup | Save current page, add tags, view recent saves |
| Mobile app | Bottom tabs | Home (My List), Discover, Search, Settings |

**Key pattern**: The reading view is purposefully distraction-free — no ads, no sidebar, no related articles. The focus is entirely on the content. Tags replace folders as the organizational paradigm.

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Saved Item | URL, title, excerpt, thumbnail, domain/source, date saved, tags, favorite flag, status (unread/archived), estimated read time, type (article/video) | — |
| Tag | name, items count, user-defined | — |
| Highlight | text selection, item, color, note | — |
| Recommendation | title, URL, excerpt, source, topic, curator note | — |
| Collection | title, description, items (ordered), curator | — |

## User Flows

### Save & read
```
Browse the web → click Pocket extension or share-to-Pocket → Article saved → appears in My List → Optionally add tags for organization → Open in Pocket → distraction-free reader view → Archive when finished (or delete)
```

### Tag & organize
```
View My List → select item(s) → "Tag" → Type tag name(s) → apply (Premium: auto-suggested tags) → Browse by tag in sidebar → filtered view of saved items → Bulk actions: tag, archive, delete, favorite
```

### Discover & save
```
Visit Discover tab → browse curated recommendations → Filter by topic (Technology, Science, Food, etc.) → Read article preview → save to My List for later → Articles surfaced by editorial team + algorithmic recommendations
```

### Listen (TTS)
```
Open saved article → tap "Listen" button → Text-to-speech reads article aloud → Control speed, play/pause → listen while commuting → Syncs position across devices
```

## URL / Route Structure

```
/                           → Marketing home
/saves/                     → My List (auth)
/saves/archive/             → Archived items
/saves/favorites/           → Favorited items
/saves/highlights/          → All highlights
/saves/tags/{tag}/          → Items with tag
/saves/search?query={q}    → Search saved items
/explore/                   → Discover / Recommendations
/explore/{topic}/           → Topic recommendations
/collections/{slug}/        → Curated collection
/read/{item-id}             → Reader view
/premium/                   → Pocket Premium
/apps/                      → Download apps
/help/                      → Help center
getpocket.com/saves/tags/                     # All tags view
getpocket.com/saves/search                    # Search saved items
getpocket.com/explore/trending                # Trending articles
getpocket.com/explore/{topic}                 # Topic recommendations
getpocket.com/collections                     # Editorial collections
getpocket.com/settings                        # Account settings
getpocket.com/settings/account                # Account details
getpocket.com/settings/notifications          # Notification preferences
getpocket.com/premium                         # Pocket Premium
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| My List search | Keyword search across saved titles and content (Premium: full-text) |
| Tag filter | Click tag in sidebar → show all items with that tag |
| Type filter | All, Articles only, Videos only |
| Sort | Newest saved, oldest saved |
| Status filter | My List (unread) vs. Archive |
| Discover filter | By topic, popularity, trending |

## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Sidebar + list/grid view, wide reader view, multi-column Discover |
| Tablet (768–1023px) | Collapsible sidebar, grid view, comfortable reader |
| Mobile (<768px) | Bottom tabs, card list, full-screen reader, swipe to archive |
| Browser extension | Compact popup — save button, tags, recent saves |
| App (iOS/Android) | Offline reading, TTS, dark mode, widget for quick save |

## Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing page, public collections, Discover (limited) |
| Free User | Save unlimited items, 3 highlights/article, tags, archive, basic search |
| Pocket Premium | Full-text search, permanent library (saved even if original deleted), suggested tags, unlimited highlights, ad-free Discover |
| Mozilla Account (SSO) | Firefox integration, synced saves across browsers |
| API Developer | Save, retrieve, modify items programmatically |
| Editorial Team | Curate Discover content, create Collections |
| Internal | Recommendation engine tuning, content moderation |

## Reading Experience

| Feature | Description |
|---------|-------------|
| Reader view | Distraction-free rendering; strips ads, nav, sidebars |
| Dark mode | Dark background with light text |
| Sepia mode | Warm tones for comfortable reading |
| Font selection | Sans-serif, serif, or custom font choices |
| Font size | Adjustable text size for readability |
| Line spacing | Comfortable spacing adjustment |
| Text-to-speech | Listen to articles with adjustable speed |
| Offline access | Articles cached for reading without internet |
| Highlighting | Select text to highlight; unlimited on Premium |

## Save Methods

| Method | How |
|--------|-----|
| Browser extension | Click Pocket icon in toolbar |
| Share sheet (mobile) | Share from any app → Pocket |
| Email | Send URL to add@getpocket.com |
| URL direct | getpocket.com/save?url={URL} |
| IFTTT / Zapier | Automated saving from RSS, Twitter, etc. |
| Kobo e-reader | Built-in Pocket integration on Kobo devices |
| Firefox | Native Pocket integration in Firefox browser |
| API | Programmatic saving via REST API |

## Content Discovery

- **Pocket Hits:** Weekly email digest of most-saved articles across all Pocket users
- **Best of Web:** Editorially curated outstanding long-form articles
- **Topic feeds:** Technology, Science, Self-Improvement, Food, Entertainment, Business
- **Trending:** Most-saved articles in the last 24-48 hours
- **Sponsored content:** Clearly labeled recommendations from publishers
- **Algorithmic suggestions:** Based on your reading history and saved topics

## Firefox Integration

- **Built into Firefox:** No extension needed; Pocket button in toolbar
- **Recommended stories:** Pocket recommendations on Firefox new tab page
- **Firefox account sync:** Single sign-on with Firefox/Mozilla account
- **Reading view:** Firefox Reader View uses similar rendering to Pocket

## Pocket Premium vs Free

| Feature | Free | Premium ($4.99/mo) |
|---------|------|--------------------|
| Save articles | Unlimited | Unlimited |
| Tags | ✅ | ✅ + auto-suggested tags |
| Highlights per article | 3 | Unlimited |
| Full-text search | Title only | Full article text |
| Permanent library | No (if source deleted) | Yes (archived copy) |
| Ad-free Discover | No | Yes |
| Font options | 2 | 7 |
| Backup | No | Yes |
