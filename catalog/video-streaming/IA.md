# Video Streaming — Information Architecture

## Overview

An on-demand video platform (Netflix, YouTube, Disney+ style). The mental model is a **content library** — users browse, search, and watch video content organized by genre, popularity, and personalization. Engagement is driven by recommendations and continuous watching.

## Site Map

```
├── Home
│   ├── Continue Watching
│   ├── Trending Now
│   ├── Personalized Rows (genre-based)
│   ├── New Releases
│   ├── Top 10
│   └── Because You Watched [X]
├── Browse / Explore
│   ├── By Genre (Action, Comedy, Drama...)
│   ├── By Type (Movies, Series, Documentaries)
│   ├── By Mood / Theme
│   └── Originals
├── Search
│   ├── Search Results (titles, actors, directors, genres)
│   └── Trending Searches
├── Title Detail
│   ├── Hero (trailer autoplay)
│   ├── Synopsis, Year, Rating, Duration
│   ├── Cast & Crew
│   ├── Episodes (if series)
│   │   ├── Season Selector
│   │   └── Episode List (thumbnail, title, duration, synopsis)
│   ├── More Like This
│   ├── Trailers & Extras
│   └── Reviews / Ratings
├── Video Player
│   ├── Playback Controls
│   ├── Subtitles / Audio Selection
│   ├── Quality Settings
│   ├── Skip Intro / Outro
│   ├── Next Episode (auto-play countdown)
│   └── Picture-in-Picture
├── My List / Watchlist
├── Downloads (mobile)
├── Profiles
│   ├── Profile Switcher
│   ├── Kids Profile
│   └── Profile Settings (avatar, maturity, language)
├── Account
│   ├── Subscription Plan
│   ├── Billing History
│   ├── Manage Profiles
│   ├── Playback Settings
│   ├── Notification Preferences
│   ├── Parental Controls
│   └── Sign Out
└── Help Center
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed, transparent over hero → solid on scroll | Logo, Browse (genre dropdown), Search, Notifications, Profile avatar |
| **Content Rows** | Horizontal carousels | Each row is a category; scroll to reveal more |
| **Genre Selector** | Dropdown or horizontal tabs | Filter content by genre |
| **Player Controls** | Auto-hide overlay | Show on mouse move / tap, hide after 3s inactivity |
| **Mobile Nav** | Bottom tab bar | Home, Search, Downloads, My List, Profile |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Title | name, type (movie/series), synopsis, year, maturity_rating, duration, poster, backdrop, trailer_url | has Genres, Cast, Episodes |
| Episode | number, season, title, synopsis, duration, thumbnail | belongs to Title (series) |
| Genre | name, slug | many-to-many with Titles |
| Person | name, photo, role (actor/director/writer) | many-to-many with Titles |
| Profile | name, avatar, maturity_level, language, watch_history | belongs to Account |
| WatchProgress | title, episode, timestamp, completed | belongs to Profile |
| WatchlistItem | title, added_at | belongs to Profile |
| Download | title, episode, quality, expires_at | belongs to Profile (mobile) |

### Content Hierarchy
```
Title (Movie) → single playable item
Title (Series) → Season 1, 2, 3... → Episode 1, 2, 3...
```

## User Flows

### Browse and Watch
```
Home → Scroll Rows → Hover (preview) → Click Title → Detail Page → Play → Auto-play Next
```

### Search and Watch
```
Search → Type query → Results → Title Detail → Play
```

### Continue Watching
```
Home → Continue Watching Row → Resume → Auto-play Next Episode
```

### Profile Management
```
Profile Switcher → Select Profile → Personalized Home
```

## URL / Route Structure

```
/                          → Home (or Profile Switcher)
/browse                    → Browse All
/browse/genre/:genre       → Genre Page
/search?q=:query           → Search Results
/title/:id                 → Title Detail
/watch/:id                 → Video Player (movie)
/watch/:id?s=:s&e=:e       → Video Player (series episode)
/my-list                   → Watchlist
/latest                    → New & Popular
/downloads                 → Downloads (mobile)
/profiles                  → Profile Switcher
/profiles/manage           → Manage Profiles
/account                   → Account Settings
/account/subscription      → Plan & Billing
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Title, cast, director, genre keywords | — | Relevance |
| Browse | All titles | Genre, Type (movie/series), Year Range, Maturity Rating | Trending, Year, A-Z |
| My List | Saved titles | Genre, Type | Added Date, A-Z |

## Responsive Behavior

| Breakpoint | Layout | Player | Navigation |
|------------|--------|--------|------------|
| TV/Desktop (≥1280px) | Large hero + multi-row carousels | Full-screen default | Top bar |
| Tablet (768–1279px) | Smaller hero + carousels | Full-screen | Top bar |
| Mobile (<768px) | Vertical card list + carousels | Full-screen landscape | Bottom tab bar |

### Mobile Adaptations
- Download for offline viewing
- Data saver mode (lower quality)
- Portrait: browse; Landscape: auto-enter player
- Picture-in-Picture support
- Cast to TV button

## Access Control

| Role | Browse | Watch | Download | Profiles | Admin |
|------|--------|-------|----------|----------|-------|
| Unauthenticated | Limited preview | Trailers only | — | — | — |
| Free Tier | ✅ | Limited (ads) | — | 1 | — |
| Premium | ✅ | ✅ (no ads) | ✅ | Up to 5 | — |
| Kids Profile | Filtered content | Kids-rated only | ✅ | — | — |
| Admin | ✅ | ✅ | ✅ | ✅ | Content management |
