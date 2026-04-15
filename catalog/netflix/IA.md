---
brand: Netflix
tagline: "See what's next. Premium subscription streaming with originals, profiles, and personalized recommendations."
category: Video
website: https://netflix.com
---

# Netflix — Information Architecture

## Overview

A premium subscription-based streaming service and the defining example of on-demand video. Netflix's mental model is a **personalized content library** — every user sees a different homepage, powered by sophisticated recommendation algorithms. Key differentiators: profile-based personalization, Netflix Originals branding, autoplay previews, a "Top 10" social-proof row, interactive content, and a clean ad-free experience (with a newer ad-supported tier). There is no user-generated content; all titles are licensed or produced by Netflix.

## Site Map

```
├── Profile Selector (entry gate)
│   ├── Profile 1–5 (avatars, names)
│   ├── Kids Profile (restricted)
│   └── Manage Profiles
├── Home
│   ├── Hero Billboard (featured title with trailer autoplay)
│   ├── Continue Watching
│   ├── Top 10 in Your Country
│   ├── Trending Now
│   ├── New Releases
│   ├── Netflix Originals
│   ├── Personalized Rows ("Because You Watched X", "Your Next Watch")
│   ├── Genre Rows (Thriller, Comedy, Anime, Documentaries...)
│   ├── Popular on Netflix
│   ├── My List
│   └── Award-Winning Content
├── TV Shows
│   ├── Genre Filter
│   ├── Content Rows (same pattern as Home)
│   └── Title Cards
├── Movies
│   ├── Genre Filter
│   └── Content Rows
├── New & Popular
│   ├── Coming Soon (notify me)
│   ├── Everyone's Watching
│   ├── Top 10 TV Shows
│   └── Top 10 Movies
├── My List
│   ├── Saved Titles
│   └── Remove / Reorder
├── Browse by Language
├── Search
│   ├── Trending Searches
│   ├── Results: Titles, People, Genres
│   └── Auto-suggestions
├── Title Detail (Modal or Page)
│   ├── Hero (background art / trailer autoplay)
│   ├── Match Score (% match to your taste)
│   ├── Year, Maturity Rating, Duration/Seasons, Audio (Dolby Atmos)
│   ├── Synopsis
│   ├── Cast & Crew (clickable → filmography)
│   ├── Episodes (Series)
│   │   ├── Season Selector (dropdown)
│   │   └── Episode List (thumbnail, title, duration, synopsis, progress bar)
│   ├── More Like This (similar titles)
│   ├── Trailers & More
│   ├── Details (genres, maturity details, audio/subtitle languages)
│   ├── Play / Resume Button
│   ├── Add to My List
│   ├── Rate (thumbs up / thumbs down / love)
│   └── Share
├── Player
│   ├── Playback Controls (play/pause, seek, volume)
│   ├── Skip Intro / Recap
│   ├── Next Episode Countdown (auto-play)
│   ├── Subtitles & Audio Selection (multi-language)
│   ├── Playback Speed (0.5x–1.5x)
│   ├── Episode Selector (in-player)
│   ├── Picture-in-Picture
│   ├── Lock Screen (mobile, prevent accidental touches)
│   └── "Are You Still Watching?" prompt (inactivity)
├── Downloads (Mobile)
│   ├── Downloaded Titles
│   ├── Smart Downloads (auto-download next episode)
│   └── Storage Management
├── Kids Section (separate UI)
│   ├── Age-appropriate content only
│   ├── Simplified navigation
│   ├── Character-based browsing
│   └── No maturity-gated content
├── Games (Netflix Games)
│   ├── Game Library
│   ├── Game Detail (description, screenshots)
│   └── Install / Play
├── Notifications
│   ├── New arrivals matching your taste
│   ├── Season/show premieres
│   └── Leaving soon
├── Account
│   ├── Membership & Billing
│   │   ├── Plan Details (Basic/Standard/Premium)
│   │   ├── Change Plan
│   │   ├── Payment Method
│   │   ├── Billing History
│   │   └── Cancel Membership
│   ├── Security & Privacy
│   │   ├── Password
│   │   ├── Sign-out of All Devices
│   │   └── Manage Access & Devices
│   ├── Profiles & Parental Controls
│   │   ├── Profile Settings (name, avatar, language, maturity)
│   │   ├── Viewing Restrictions
│   │   ├── Profile Lock (PIN)
│   │   └── Profile Transfer
│   ├── Playback Settings
│   │   ├── Autoplay Previews (on/off)
│   │   ├── Autoplay Next Episode
│   │   └── Data Usage per Screen (auto/low/medium/high)
│   ├── Subtitle Appearance (font, size, color)
│   ├── Communication Preferences
│   ├── Download Devices
│   └── Viewing Activity (per profile, hide/clear)
└── Help Center
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed, semi-transparent (fade to solid on scroll) | Logo, Browse (TV Shows/Movies/New & Popular/My List/Browse by Language), search icon, kids toggle, notifications bell, profile avatar dropdown |
| **Content Rows** | Horizontal carousels (peek next items) | Mouse hover → card expands with preview trailer, metadata, and action buttons |
| **Hero Billboard** | Full-width, auto-rotating | Cycles featured content with trailer autoplay; Play + More Info buttons |
| **Title Modal** | Overlay on current page | Opens without full navigation; click outside or X to close |
| **Player Controls** | Auto-hide overlay | Appear on mouse move / screen tap, hide after 3s inactivity |
| **Mobile Nav** | Bottom tab bar | Home, Games, New & Hot, My Netflix (profile) |
| **Kids Toggle** | Top bar link | Switches between standard and kids-only UI |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Title | name, type (movie/series), synopsis, year, maturity_rating, duration, seasons_count, poster, backdrop, trailer_url, match_score, genres[], audio_languages[], subtitle_languages[], netflix_original (bool) | has Genres, Cast, Episodes, Tags |
| Episode | number, season, title, synopsis, duration, thumbnail, credits_start_time | belongs to Title (series) |
| Genre | name, slug | many-to-many with Titles |
| Person | name, photo, role (actor/director/writer/creator) | many-to-many with Titles |
| Profile | name, avatar, maturity_level, language, autoplay_previews, viewing_restrictions | belongs to Account |
| WatchProgress | title, episode, position_seconds, completed, last_watched_at | belongs to Profile |
| MyListItem | title, added_at | belongs to Profile |
| Rating | title, value (thumbs_up / thumbs_down / love) | belongs to Profile |
| Download | title, episode, quality, download_at, expires_at, device | belongs to Profile |
| Notification | title, type (new_arrival / premiere / leaving_soon), sent_at | belongs to Profile |
| Game | name, description, screenshots[], size, genre | standalone Netflix Games entity |

### Content Hierarchy
```
Title (Movie) → single playable item
Title (Series) → Season 1, 2, 3... → Episode 1, 2, 3...
Title (Miniseries / Limited Series) → Episode 1, 2, 3...
```

### Maturity Ratings
`TV-Y | TV-Y7 | TV-G | TV-PG | TV-14 | TV-MA | G | PG | PG-13 | R | NC-17`

## User Flows



### Browse and Watch
```
Profile Select → Home → Scroll Rows → Hover Card (preview plays) → Click → Title Modal → Play → Auto-play Next Episode
```

### Search and Watch
```
Search Icon → Type Query → Results (instant) → Click Title → Modal → Play
```

### Continue Watching
```
Home → "Continue Watching" Row → Click → Resume at Last Position → Finish → Auto-play Next
```

### Add to My List
```
Hover Title Card → [+] My List → Title saved → My List page → Play later
```

### Download for Offline
```
Title Detail → Download Icon → Select Quality → Downloaded → Library → Watch offline → Smart Downloads replaces with next episode
```

### Rate and Improve Recommendations
```
Watch Title → Thumbs Up/Down/Love → Recommendation engine adjusts → Home refreshes with better matches
```

### Profile Management
```
Profile Selector → Manage Profiles → Edit (name, avatar, maturity, language, autoplay) → Done → Profile Selector
```


## URL / Route Structure

```
/                              → Home (or Profile Selector)
/browse                        → Browse (authenticated home)
/browse/genre/:genreId         → Genre Page
/search?q=:query               → Search Results
/title/:id                     → Title Detail Page
/watch/:id                     → Player (movie)
/watch/:id?s=:season&e=:ep     → Player (series episode)
/latest                        → New & Popular
/my-list                       → My List
/browse/my-list                → My List (alt)
/kids                          → Kids Section
/download                      → Downloads
/games                         → Netflix Games
/profiles                      → Profile Selector
/profiles/manage               → Manage Profiles
/YourAccount                   → Account Settings
/YourAccount/membership        → Plan & Billing
/YourAccount/security          → Security & Privacy
/YourAccount/profiles          → Profile Settings
/YourAccount/viewing-activity  → Viewing History
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global Search | Title names, actor/director names, genre keywords | — | Relevance (single sort, algorithm-driven) |
| Browse (TV Shows / Movies) | All titles of type | Genre dropdown | Suggestions For You (algorithmic) |
| My List | Saved titles | — | Manual reorder, Recently Added |
| New & Popular | Upcoming + trending | Category (Coming Soon / Everyone's Watching / Top 10) | Netflix-curated |
| Kids | Age-appropriate titles | Character, Category | Algorithmic |

## Responsive Behavior

| Breakpoint | Layout | Player | Navigation |
|------------|--------|--------|------------|
| TV / Large Desktop (≥1440px) | Full-width hero + 6-item carousels | Full-screen default (10-foot UI) | D-pad navigation, voice search |
| Desktop (1024–1439px) | Hero + 4-5 item carousels, title modals | Inline (theater), full-screen | Top bar, mouse hover interactions |
| Tablet (768–1023px) | Smaller hero + carousels, reduced hover | Full-screen | Top bar, touch-friendly cards |
| Mobile (<768px) | Vertical scroll, preview thumbnails (no hover) | Full-screen landscape, portrait mini | Bottom tab bar, pull-to-refresh |

### TV Adaptations (10-foot UI)
- D-pad / remote navigation (focus-based)
- Large text and thumbnails for distance viewing
- Voice search via remote
- Profile auto-login option
- Skip Intro via single button press

### Mobile Adaptations
- Smart Downloads (auto-download next episode on Wi-Fi)
- Data saver mode
- Screen lock during playback
- Cast to TV (Chromecast, AirPlay)
- Download quality selection (Standard / High)
- Fast Laughs (TikTok-style short clips from Netflix comedy)

## Access Control

| Role | Browse | Watch | Download | Profiles | Simultaneous Streams |
|------|--------|-------|----------|----------|---------------------|
| Unauthenticated | Landing page only | — | — | — | — |
| Ads-Supported Tier | ✅ | ✅ (with ads, limited catalog) | Limited | 1-2 | 2 |
| Standard | ✅ | ✅ (no ads, Full HD) | ✅ (2 devices) | Up to 5 | 2 |
| Premium | ✅ | ✅ (no ads, 4K HDR + Dolby Atmos) | ✅ (6 devices) | Up to 5 | 4 |
| Kids Profile | Filtered content only | Kids-rated only | ✅ | — | — |
| Extra Member (paid sharing) | ✅ | ✅ | ✅ (1 device) | 1 | 1 |

### Anti-Sharing Measures
- Household verification (primary location)
- Extra Member slot for out-of-household users
- Device management with sign-out controls
- Travel temporary access (away from home)
