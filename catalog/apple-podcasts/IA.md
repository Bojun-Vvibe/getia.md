---
brand: Apple Podcasts
tagline: "The home of great podcasts. Apple's native podcast app with curated channels, subscriptions, and transcripts."
category: Podcast
website: https://podcasts.apple.com
---

# Apple Podcasts — Information Architecture

## Overview

Apple's built-in podcast platform, one of the largest podcast directories in the world. Apple Podcasts' mental model is **subscribe and listen** — users discover shows through curated editorial picks, charts, and categories, subscribe to receive new episodes, and listen through a persistent audio player. Key differentiators: deep iOS/macOS/watchOS/CarPlay integration, Apple Podcasts Subscriptions (paid shows with premium content), curated editorial channels, automatic episode transcripts (searchable), synced playback across Apple devices, and the Apple Podcasts Connect portal for creators.

## Site Map

```
├── Listen Now (Home)
│   ├── Continue Listening (resume episodes)
│   ├── Up Next (queue)
│   ├── New Episodes (from subscriptions)
│   ├── Recently Played
│   ├── For You (personalized recommendations)
│   ├── Trending
│   ├── Editor's Picks / Featured
│   └── Stations (auto-playlists)
├── Browse
│   ├── Top Charts
│   │   ├── Top Shows (free)
│   │   ├── Top Episodes
│   │   └── Top Subscriber Shows (paid)
│   ├── Categories
│   │   ├── Arts, Business, Comedy, Education
│   │   ├── Health & Fitness, History, News, Science
│   │   ├── Society & Culture, Sports, Technology, True Crime
│   │   └── TV & Film, Music, Kids & Family, Fiction...
│   ├── Featured Collections (editorial curated)
│   ├── Channels (publisher groupings)
│   │   ├── Channel Page (shows by publisher, e.g., The New York Times, Wondery)
│   │   ├── Subscribe to Channel (paid)
│   │   └── Free + Premium shows
│   ├── New & Noteworthy
│   └── Provider Networks
├── Search
│   ├── Shows, Episodes, Channels
│   ├── Transcript Search (search spoken words)
│   ├── Category Browse (when search empty)
│   └── Recent Searches
├── Show Page
│   ├── Artwork, Title, Publisher
│   ├── Description (expandable)
│   ├── Follow / Unfollow Button
│   ├── Subscribe (if paid channel/show)
│   ├── Ratings & Reviews (star rating + written reviews)
│   ├── Episode List
│   │   ├── Sort: Latest / Season / All
│   │   ├── Filter: Played / Unplayed / Downloaded / Saved
│   │   ├── Episode Card (title, date, duration, played status indicator)
│   │   └── Search within show
│   ├── You Might Also Like (related shows)
│   ├── Trailer (if available, pinned)
│   ├── Additional Info (frequency, language, explicit rating)
│   └── Share Show
├── Episode Detail
│   ├── Title, Show, Date, Duration
│   ├── Description / Show Notes (links, timestamps)
│   ├── Play Button (primary CTA)
│   ├── Download (offline)
│   ├── Save to Library
│   ├── Add to Queue (Play Next / Play Last)
│   ├── Transcript (full, searchable, time-synced)
│   │   ├── Search within transcript
│   │   ├── Tap line → jump to timestamp
│   │   └── Follow along while playing
│   ├── Chapter Markers (if available)
│   ├── Share Episode (link, clip, timestamp link)
│   └── Mark as Played
├── Player (Persistent)
│   ├── Mini Player (bottom bar, above tab bar)
│   │   ├── Artwork, Title, Show
│   │   ├── Play/Pause
│   │   └── Progress Bar
│   └── Full Player (expanded)
│       ├── Artwork (large)
│       ├── Title, Show
│       ├── Progress Scrubber + Time Remaining
│       ├── Controls
│       │   ├── Skip Back 15s
│       │   ├── Play/Pause
│       │   ├── Skip Forward 30s
│       │   ├── Playback Speed (0.5x, 1x, 1.25x, 1.5x, 2x)
│       │   └── Volume
│       ├── Sleep Timer (5/10/15/30/45/60 min, end of episode)
│       ├── AirPlay / Audio Output
│       ├── Transcript (inline, scrolling)
│       ├── Chapter List (if available)
│       ├── Share (show, episode, clip, timestamp)
│       ├── Up Next / Queue
│       └── More (go to show, save, download, mark played)
├── Library
│   ├── Shows (followed/subscribed)
│   ├── Saved Episodes
│   ├── Downloaded Episodes
│   ├── Latest Episodes (all new from followed shows)
│   ├── Stations (custom auto-playlists)
│   │   └── Create Station (rules: shows, play order, episode limit)
│   └── Recently Played
├── Queue / Up Next
│   ├── Currently Playing
│   ├── Up Next (manually added)
│   ├── Reorder (drag to rearrange)
│   └── Auto-Queue from followed shows
├── Notifications
│   ├── New Episodes from Followed Shows
│   ├── Personalized Recommendations
│   └── Channel / Subscription Updates
├── Settings
│   ├── General
│   │   ├── Sync Library (iCloud)
│   │   ├── Continuous Playback (auto-play next)
│   │   ├── External Controls (skip duration customization)
│   │   └── Headphone Controls
│   ├── Downloads
│   │   ├── Auto-Download (on/off per show)
│   │   ├── Download When (Wi-Fi only, On Follow)
│   │   ├── Remove Played Downloads (auto)
│   │   └── Storage Management
│   ├── Notifications (per show or global)
│   ├── Playback
│   │   ├── Skip Silence (trim dead air)
│   │   ├── Default Playback Speed
│   │   └── Volume Boost (enhance speech)
│   ├── Subscriptions (Apple Podcasts Subscriptions management)
│   └── Privacy
├── Apple Podcasts Connect (Creator Portal — web)
│   ├── Dashboard (downloads, followers, listeners)
│   ├── Shows (manage multiple shows)
│   ├── Analytics
│   │   ├── Downloads
│   │   ├── Listeners (unique)
│   │   ├── Followers
│   │   ├── Engaged Listeners
│   │   ├── Demographics (device, country)
│   │   └── Episode Performance
│   ├── Subscriptions Management (pricing, free trials)
│   ├── Channels (group shows under brand)
│   └── Settings (RSS feed, category, artwork)
└── Integration
    ├── CarPlay (simplified player)
    ├── Apple Watch (streaming, downloaded episodes)
    ├── HomePod (Siri voice control)
    ├── AirPods (auto-play, announce notifications)
    └── Siri ("Hey Siri, play [show name]")
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | iOS: 4 tabs, always visible | Listen Now, Browse, Library, Search |
| **Top Bar** | Contextual | Listen Now: title; Browse: title; Library: edit; Search: search bar |
| **Mini Player** | Persistent bottom bar (above tab bar) | Always visible when audio playing; tap to expand |
| **Full Player** | Expand from mini player | Swipe up or tap to expand; swipe down to collapse |
| **Show Tabs** | Within show page | Episodes (sort/filter) |
| **Transcript View** | Within full player or episode detail | Scrollable, tappable lines, search |
| **CarPlay** | Simplified grid | Listen Now, Library, Browse (limited), Search (voice) |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Show | title, author, artwork, description, category[], feed_url, follower_count, rating (1-5), review_count, frequency, language, explicit (bool), type (episodic/serial) | has many Episodes, belongs to Channel (optional) |
| Episode | title, description, audio_url, duration, published_at, season_number, episode_number, episode_type (full/trailer/bonus), transcript, chapters[], explicit (bool) | belongs to Show |
| Channel | name, artwork, description, publisher, shows[], subscription_pricing | groups Shows by publisher |
| Subscription | user, channel_or_show, pricing (monthly/annual), started_at, status | connects User to paid Channel/Show |
| PlaybackState | episode, position_seconds, completed (bool), speed, played_at | belongs to User, synced via iCloud |
| QueueItem | episode, position_in_queue, added_by (user/auto) | belongs to User |
| Download | episode, file_path, downloaded_at, auto (bool), expires_at | belongs to User (on-device) |
| Station | name, rules (shows[], play_order, episode_limit), auto_generated | belongs to User |
| Review | rating (1-5), title, text, created_at | belongs to Show and User |
| Transcript | episode, segments[] (text, start_time, end_time, speaker) | belongs to Episode |
| Chapter | title, start_time, artwork (optional), url (optional) | belongs to Episode |
| SavedEpisode | episode, saved_at | belongs to User |

### Episode Types
`full | trailer | bonus`

### Show Types
`episodic (newest first, standalone) | serial (oldest first, sequential)`

## User Flows

### Discover and Follow
```
Browse → Top Charts → Tap Show → Read Description → Play Trailer → Follow → New Episodes Auto-appear in Listen Now
```

### Listen to Episode
```
Listen Now → New Episodes → Tap Episode → Play → Mini Player → Expand Full Player → Adjust Speed (1.5x) → Skip Silence → Finish → Auto-play Next
```

### Search by Transcript
```
Search → Type keyword → Results (shows + episodes) → Episode result shows transcript match → Tap → Jump to Timestamp → Listen in Context
```

### Queue Management
```
Episode → [+] Play Next / Play Last → Listen Now → Up Next → Reorder (drag) → Play
```

### Download for Offline
```
Episode → Download (↓) → Library → Downloads → Play Offline (airplane mode) → Auto-remove After Played
```

### Subscribe to Premium Show
```
Browse → Channel → Premium Show → Subscribe (pricing) → Apple ID payment → Unlock ad-free + bonus content
```

### Cross-Device Listening
```
Start on iPhone → Continue on Mac → Sync via iCloud → Resume at Same Spot → Finish on Apple Watch during run
```

### Create Station
```
Library → Stations → New Station → Name → Add Shows → Set Rules (newest first, limit 10 episodes) → Auto-curated playlist updates
```

## URL / Route Structure

```
# Apple Podcasts Web (podcasts.apple.com)
/                                  → Browse Home
/genre/:genreId/:genreName         → Category Page
/channel/:channelId/:channelName   → Channel Page
/podcast/:podcastName/id:showId    → Show Page
/podcast/:name/id:showId?i=:epId   → Episode Detail
/charts                            → Top Charts
/search?term=:query                → Search Results
/subscribe?id=:showId              → Subscribe Landing

# Deep Links (iOS)
podcasts://show/:showId            → Open Show in Apple Podcasts
podcasts://episode/:episodeId      → Open Episode
podcasts://search?term=:query      → Search

# Apple Podcasts Connect (creators)
podcastsconnect.apple.com          → Creator Dashboard
/analytics                         → Analytics
/my-podcasts                       → Manage Shows
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Shows, Episodes, Channels, Transcript text | — | Relevance, Popularity |
| Browse | Curated + charts | Category, Free / Subscriber | Top, Trending, New |
| Show Episodes | Episodes within show | Played / Unplayed / Downloaded / Saved, Season | Newest, Oldest, Season |
| Library | Followed shows, saved/downloaded episodes | Shows / Episodes / Downloads | Recently Updated, Title, Recently Added |
| Transcript | Spoken words within episodes | — | Timestamp order |

## Responsive Behavior

| Breakpoint | Nav | Player | Content |
|------------|-----|--------|---------|
| macOS Desktop | Sidebar (Listen Now, Browse, Charts, Library sections) | Bottom bar + expandable panel | Multi-column grid |
| iPad | Bottom tab bar or sidebar (iPadOS 16+) | Bottom bar + slide-over | 2-3 column grid |
| iPhone | Bottom tab bar | Bottom bar (swipe up to expand) | Single column |
| Apple Watch | Scrollable list | Full screen (simple controls) | Episode list only |
| CarPlay | Grid (4-8 items per screen) | Full screen player | Simplified show list |

### Audio-Specific Patterns
- Background playback (app minimized, screen locked)
- Lock screen controls (play/pause, skip, scrubber)
- Control Center integration
- Dynamic Island / Live Activity (iPhone 14 Pro+)
- AirPods auto-switch between devices
- Announce notifications (AirPods read episode titles)
- Skip silence (smart trim of dead air)
- Volume Boost (enhance speech clarity)
- Sleep timer (auto-pause)
- CarPlay / Android Auto (via web player — limited)
- Siri integration ("Play the latest episode of [show]")
- Offline download management with auto-cleanup

## Access Control

| Role | Browse | Listen | Follow | Download | Review | Transcript |
|------|--------|--------|--------|----------|--------|-----------|
| Free User (Apple ID) | ✅ | ✅ (free shows, with ads if podcast has them) | ✅ | ✅ | ✅ | ✅ |
| Channel Subscriber (paid) | ✅ | ✅ + premium/ad-free content + bonus episodes | ✅ | ✅ | ✅ | ✅ |
| Creator (Podcasts Connect) | ✅ | ✅ | ✅ | ✅ | — (own shows) | ✅ + Analytics, manage shows, set subscription pricing |
| Apple Admin | ✅ | ✅ | ✅ | ✅ | Moderate | ✅ + editorial curation, policy enforcement |

### No Separate Premium Tier
- Apple Podcasts app is free (included with iOS/macOS)
- No platform-wide subscription (unlike Spotify Premium)
- Individual shows/channels offer paid subscriptions via Apple
- Apple takes 30% of subscription revenue (first year), 15% after
- Podcast content itself is mostly free — monetization is per-show
