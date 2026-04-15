# Podcast Platform — Information Architecture

## Overview

An audio content platform for discovering, streaming, and managing podcasts (Spotify Podcasts, Apple Podcasts, Pocket Casts style). The mental model is **subscribe and listen** — users find shows, subscribe, and episodes appear in a queue. Persistent audio player is always available.

## Site Map

```
├── Home
│   ├── Continue Listening
│   ├── New Episodes (from subscriptions)
│   ├── Trending Shows
│   ├── Recommended for You
│   ├── Browse by Category
│   └── Curated Playlists / Collections
├── Browse / Discover
│   ├── Top Charts
│   ├── Categories (Technology, Comedy, News, etc.)
│   ├── Networks / Publishers
│   ├── New & Noteworthy
│   └── Search
├── Search
│   ├── Shows
│   ├── Episodes
│   └── People / Creators
├── Show Page
│   ├── Cover Art, Title, Publisher
│   ├── Description
│   ├── Subscribe / Unsubscribe Button
│   ├── Episode List (newest first)
│   │   └── Episode Card (title, date, duration, played status)
│   ├── Ratings & Reviews
│   └── Similar Shows
├── Episode Detail
│   ├── Title, Show, Date, Duration
│   ├── Description / Show Notes
│   ├── Play Button
│   ├── Download (offline)
│   ├── Add to Queue
│   ├── Share
│   └── Transcript (if available)
├── Player (Persistent)
│   ├── Mini Player (bottom bar)
│   │   ├── Cover Art, Title, Show
│   │   ├── Play/Pause
│   │   └── Progress Bar
│   └── Full Player (expanded)
│       ├── Cover Art (large)
│       ├── Progress Scrubber
│       ├── Skip Back 15s / Forward 30s
│       ├── Playback Speed (0.5x–3x)
│       ├── Sleep Timer
│       ├── Cast / AirPlay
│       ├── Share
│       └── Show Notes / Transcript
├── Library
│   ├── Subscriptions
│   ├── Queue / Up Next
│   ├── Downloads
│   ├── Listening History
│   └── Saved Episodes
├── Account / Settings
│   ├── Profile
│   ├── Playback Settings (speed, skip silence, auto-download)
│   ├── Notifications (new episodes)
│   ├── Storage Management
│   ├── Connected Devices
│   └── Subscription / Premium
└── For Creators (link to separate portal)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | Mobile: 4-5 tabs | Home, Browse, Library, Search, Profile |
| **Top Bar** | Desktop | Logo, Search, Library, Account |
| **Mini Player** | Persistent bottom bar (above tabs) | Always visible when audio is playing |
| **Full Player** | Expand from mini player | Swipe up (mobile) or click to expand |
| **Show Tabs** | Within show page | Episodes / About / Reviews |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Show | title, author, cover_art, description, category[], feed_url, subscriber_count, rating | has many Episodes |
| Episode | title, description, audio_url, duration, published_at, season, episode_number, transcript | belongs to Show |
| Subscription | user, show, subscribed_at, notification_enabled | connects User and Show |
| PlaybackState | episode, position, completed, speed | belongs to User |
| QueueItem | episode, position_in_queue | belongs to User |
| Download | episode, file_path, downloaded_at, expires | belongs to User |
| Review | rating (1-5), text, created_at | belongs to Show and User |
| Playlist | name, episodes[], public | belongs to User |

## User Flows

### Discover and Subscribe
```
Home → Browse Category → Show Page → Listen to Episode → Subscribe → New Episodes Auto-appear
```

### Listen to Episode
```
Library → New Episodes → Tap Play → Mini Player → Expand Full Player → Finish → Next in Queue
```

### Queue Management
```
Episode Card → [⋮ Menu] → Add to Queue → Library → Queue → Reorder (drag) → Play
```

## URL / Route Structure

```
/                          → Home
/browse                    → Browse / Discover
/browse/:category          → Category
/charts                    → Top Charts
/show/:id                  → Show Page
/episode/:id               → Episode Detail
/search?q=:query           → Search Results
/library                   → Library
/library/subscriptions     → Subscriptions
/library/queue             → Queue
/library/downloads         → Downloads
/library/history           → Listening History
/player                    → Full Player (deep link)
/settings                  → Settings
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Global | Type (shows/episodes) | Relevance, Popularity |
| Browse | Category, Language | Top, Trending, New |
| Show Episodes | Season | Newest, Oldest, Season |
| Library | — | Recently Played, Name, Recently Added |

## Responsive Behavior

| Breakpoint | Nav | Player | Content |
|------------|-----|--------|---------|
| Desktop | Left sidebar | Bottom bar + right panel | Grid layout |
| Tablet | Bottom tabs | Bottom bar | 2-3 column grid |
| Mobile | Bottom tabs | Bottom bar (swipe up to expand) | Single column |

### Audio-Specific Patterns
- Background playback (app can be minimized)
- Lock screen / notification controls
- CarPlay / Android Auto integration
- Sleep timer
- Playback speed control
- Skip silence option
- Offline download management

## Access Control

| Role | Browse | Listen | Subscribe | Download | Review |
|------|--------|--------|-----------|----------|--------|
| Free User | ✅ | ✅ (with ads) | ✅ | Limited | ✅ |
| Premium | ✅ | ✅ (no ads) | ✅ | Unlimited | ✅ |
| Creator | ✅ | ✅ | ✅ | ✅ | — (own shows) |
