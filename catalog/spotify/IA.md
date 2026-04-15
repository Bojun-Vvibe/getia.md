---
brand: Spotify
tagline: "Music for everyone. Playlist-centric streaming with Discover Weekly, Spotify Connect, and Wrapped."
category: Music
website: https://spotify.com
---

# Spotify — Information Architecture

## Overview

The world's leading music streaming platform. Spotify's mental model is a **playlist-centric personal jukebox** — playlists (both user-created and algorithmic) are the primary organizational unit, not albums. Key differentiators: Discover Weekly and Daily Mixes (personalized algorithmic playlists), Spotify Connect (cross-device playback), Spotify Wrapped (annual listening recap), a persistent mini player, and a desktop app with a resizable sidebar. Spotify also hosts podcasts and audiobooks, making it an all-in-one audio platform.

## Site Map

```
├── Home
│   ├── Recently Played (cards)
│   ├── Made for You
│   │   ├── Discover Weekly (Monday refresh)
│   │   ├── Daily Mix 1–6 (genre-based mixes)
│   │   ├── Release Radar (new from followed artists)
│   │   ├── On Repeat / Repeat Rewind
│   │   ├── Time Capsule
│   │   └── Daylist (mood-shifting throughout day)
│   ├── Your Top Mixes
│   ├── New Releases for You
│   ├── Trending / Popular
│   ├── Moods & Genres
│   ├── Featured Playlists
│   ├── Shows to Try (podcasts)
│   └── Jump Back In
├── Search
│   ├── Search Bar (instant results)
│   ├── Browse All (genre/mood cards grid)
│   │   ├── Podcasts
│   │   ├── Hip-Hop, Pop, Rock, Indie, Latin, K-Pop...
│   │   ├── Mood (Chill, Focus, Workout, Party, Sleep...)
│   │   ├── Charts
│   │   ├── New Releases
│   │   ├── Discover
│   │   └── Audiobooks
│   ├── Recent Searches
│   └── Results: Songs, Artists, Albums, Playlists, Podcasts, Episodes, Users, Genres
├── Your Library
│   ├── Filter Pills: Playlists, Artists, Albums, Podcasts & Shows, Audiobooks, Downloaded
│   ├── Sort: Recents, Recently Added, Alphabetical, Creator
│   ├── View: List / Grid
│   ├── Liked Songs (auto-playlist)
│   ├── Your Episodes (saved podcast episodes)
│   ├── Local Files
│   └── Create Playlist (+)
├── Artist Page
│   ├── Header (image, name, monthly listeners, verified badge)
│   ├── Follow Button
│   ├── Popular Tracks (top 5, show more)
│   ├── Artist's Pick (pinned content)
│   ├── Discography
│   │   ├── Albums
│   │   ├── Singles & EPs
│   │   └── Compilations
│   ├── Featuring [Artist] (appears on)
│   ├── Fans Also Like (related artists)
│   ├── Discovered On (playlists featuring this artist)
│   ├── About (bio, images, monthly listeners, social links, world rank)
│   └── Merch (if available)
├── Album Page
│   ├── Cover Art, Title, Artist(s), Year, Track Count, Duration
│   ├── Play / Shuffle
│   ├── Save to Library (heart)
│   ├── Track List (number, title, features, explicit tag, duration)
│   ├── Credits (writers, producers — expandable)
│   ├── More by [Artist]
│   └── Copyrights
├── Playlist Page
│   ├── Cover (mosaic or custom), Title, Creator, Description
│   ├── Total Tracks, Duration, Followers Count
│   ├── Play / Shuffle
│   ├── Download Toggle
│   ├── Track List (sortable by title, artist, album, date added, duration)
│   ├── Search within Playlist
│   ├── Collaborative Badge + Invite
│   ├── Recommended Songs ("Add to this playlist")
│   └── Share / Embed
├── Now Playing (Full Player)
│   ├── Album Art (large, animated canvas for some tracks)
│   ├── Song Title, Artist(s), Album
│   ├── Like (heart)
│   ├── Progress Scrubber + Time Codes
│   ├── Controls: Shuffle, Previous, Play/Pause, Next, Repeat
│   ├── Queue Button
│   ├── Lyrics (synced, line-by-line, karaoke style)
│   ├── Devices (Spotify Connect)
│   ├── Volume Slider (desktop)
│   ├── Full Screen / Canvas (animated artwork)
│   └── Share
├── Mini Player (Persistent)
│   ├── Album Art Thumbnail, Song Title, Artist
│   ├── Play/Pause, Next
│   ├── Like (heart)
│   └── Progress Bar
├── Queue
│   ├── Now Playing
│   ├── Next in Queue (user-added)
│   └── Next From: [playlist/album/radio]
├── Podcasts
│   ├── Your Shows (subscribed)
│   ├── Show Page
│   │   ├── Cover, Title, Publisher, Description, Rating
│   │   ├── Follow Button
│   │   ├── Episodes List (newest first)
│   │   └── Similar Shows
│   ├── Episode Detail
│   │   ├── Title, Date, Duration, Show Notes
│   │   ├── Play / Download / Save
│   │   └── Rate
│   └── Podcast Charts
├── Audiobooks
│   ├── Browse / Store
│   ├── Book Detail (cover, narrator, duration, chapters)
│   ├── Included with Premium (15 hrs/month)
│   └── Purchase Additional
├── Spotify Wrapped (annual)
│   ├── Top Songs, Artists, Genres, Podcasts
│   ├── Listening Time
│   ├── Shareable Cards (social media)
│   └── Personal Playlist (Your Top Songs [Year])
├── Spotify Connect
│   ├── Available Devices (phone, desktop, web, speaker, TV, car)
│   ├── Switch Playback
│   └── Remote Control
├── User Profile
│   ├── Display Name, Avatar
│   ├── Followers / Following
│   ├── Public Playlists
│   ├── Recently Played Artists
│   └── Top Artists / Tracks (public toggle)
├── Friend Activity (Desktop right sidebar)
│   ├── What friends are listening to (real-time)
│   └── Click to play same track
├── Notifications
│   ├── New Release from Followed Artist
│   ├── Playlist Updates
│   ├── Concert Recommendations
│   └── Wrapped Availability
├── Settings
│   ├── Account (plan, email, password, subscription)
│   ├── Playback
│   │   ├── Crossfade (0-12s)
│   │   ├── Gapless Playback
│   │   ├── Automix
│   │   ├── Audio Normalization
│   │   └── Mono Audio
│   ├── Audio Quality
│   │   ├── Streaming (auto/low/normal/high/very high)
│   │   ├── Download Quality
│   │   └── Equalizer (mobile)
│   ├── Downloads (storage location, Wi-Fi only)
│   ├── Social (private session, share listening activity, show recently played)
│   ├── Notifications
│   ├── Display (language, hardware acceleration, show unavailable songs)
│   ├── Connected Apps
│   ├── Privacy
│   └── Experimental Features (beta toggles)
└── Premium Upgrade (for free users)
    ├── Plan Comparison
    ├── Individual / Duo / Family / Student
    └── Free Trial CTA
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Desktop: fixed, resizable (drag divider) | Home, Search sections; Your Library (scrollable list of playlists, albums, artists, podcasts) |
| **Bottom Tab Bar** | Mobile: 3 tabs | Home, Search, Your Library |
| **Mini Player** | Persistent bottom bar (desktop: above status bar; mobile: above tab bar) | Always visible when audio playing; click/swipe up to expand to full player |
| **Full Player** | Expand from mini player | Desktop: bottom bar expands; Mobile: full-screen slide-up |
| **Context Menus** | Right-click (desktop) / long-press (mobile) | Add to playlist, add to queue, go to artist, go to album, share, radio, remove, credits |
| **Top Bar** | Desktop: within content area | Back/Forward arrows, user avatar, upgrade button (free), install app CTA |
| **Right Sidebar** | Desktop: optional, toggleable | Friend Activity feed, Now Playing lyrics/canvas |
| **Spotify Connect Bar** | Above mini player (when remote) | "Listening on [Device]" — switch button |

### Desktop Sidebar
```
[Spotify Logo]
─────────────
🏠 Home
🔍 Search
─────────────
📚 Your Library     [+] [→]
  Filter: Playlists | Artists | Albums | Podcasts
  Sort: Recents ▾
  ─────────────
  🎵 Liked Songs  ♥ 2,347
  📋 Discover Weekly
  📋 Daily Mix 1
  📋 My Playlist #1
  📋 My Playlist #2
  📻 Followed Artist 1
  💿 Saved Album 1
  🎙 Followed Podcast
  ...
─────────────
[Mini Player]
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Track | title, duration, track_number, disc_number, explicit (bool), isrc, popularity (0-100), preview_url, playable (bool), canvas_url (animated art) | belongs to Album; has Artists (primary + featured) |
| Album | title, cover_art_url, release_date, type (album/single/EP/compilation), total_tracks, label, copyright, genres[] | belongs to Artist(s); has many Tracks |
| Artist | name, images[], bio, genres[], monthly_listeners, followers, verified (bool), world_rank | has many Albums, Tracks, Merch |
| Playlist | name, description, cover_image (mosaic or custom), public (bool), collaborative (bool), followers_count, total_tracks, total_duration | belongs to User/Spotify; has many Tracks (ordered) |
| User | username, display_name, avatar, country, product (free/premium), followers_count, following_count | has Playlists, Library, Following, ListeningHistory |
| LikedSong | track_id, added_at | belongs to User (special auto-playlist) |
| PlaybackState | track, position_ms, device_id, shuffle (bool), repeat_mode (off/track/context), volume_percent | belongs to User (real-time) |
| QueueItem | track, position_in_queue, source (user/auto) | belongs to User session |
| SpotifyConnect | device_id, device_name, type (computer/smartphone/speaker/tv/car), is_active, volume | belongs to User |
| Follow | follower, following_type (artist/user/playlist), created_at | connects User to entity |
| ListeningHistory | track, played_at, context (album/playlist/artist_radio/discover) | belongs to User |
| PodcastShow | title, publisher, cover_art, description, categories[], total_episodes, rating | has many Episodes |
| PodcastEpisode | title, description, audio_url, duration, published_at, show_notes | belongs to Show |
| Audiobook | title, author, narrator, cover, chapters[], duration, included_in_premium (bool) | standalone |
| Concert | artist, venue, date, ticket_url | belongs to Artist |

### Content Hierarchy
```
Artist → Albums → Tracks
Playlist → Tracks (ordered, cross-artist)
Radio / Mix → auto-generated track list (contextual)
Podcast Show → Episodes (chronological)
Audiobook → Chapters (sequential)
```

### Playlist Types
```
User-created | Collaborative | Algorithmic (Discover Weekly, Daily Mix, Release Radar)
Editorial (curated by Spotify editors) | Artist-created | Mood/Activity-based
```

## User Flows

### Discover and Listen (Algorithmic)
```
Home → Discover Weekly → Tap Play → Streaming → Like Song (♥) → Added to Liked Songs → Improves future recommendations
```

### Search and Play
```
Search → Type query → Results → Tap Song → Plays in context → Long-press → Add to Playlist
```

### Create and Share Playlist
```
Library → [+ Create Playlist] → Name/Description → Search Songs → Add to Playlist → Toggle Public → Share Link
```

### Collaborative Playlist
```
Playlist → [...] Menu → Make Collaborative → Share Invite Link → Friends Add Songs → Real-time updates
```

### Offline Listening
```
Playlist/Album → Download Toggle (↓) → Downloads on Wi-Fi → Airplane Mode → Play from Library → Downloads section
```

### Cross-Device Playback (Spotify Connect)
```
Playing on Phone → Mini Player → Devices Icon → Select Desktop/Speaker → Audio transfers instantly → Control from any device
```

### Podcast Listening
```
Search → Podcast → Show Page → Follow → Episode → Play → Speed (1.5x) → Mark as Played
```

### Wrapped Experience
```
December → Wrapped Notification → Open → Swipe Through Story Cards → View Top Songs/Artists → Share to Instagram/Twitter → Wrapped Playlist saved
```

## URL / Route Structure

```
/                              → Home
/search                        → Search (empty: Browse All categories)
/search/:query                 → Search Results
/artist/:id                    → Artist Page
/album/:id                     → Album Page
/track/:id                     → Track (redirects to album context)
/playlist/:id                  → Playlist Page
/collection/tracks             → Liked Songs
/collection/albums             → Saved Albums
/collection/artists            → Followed Artists
/collection/playlists          → Your Playlists
/collection/podcasts           → Your Podcasts
/genre/:id                     → Genre/Mood Page
/section/:id                   → Browse Category Section
/show/:id                      → Podcast Show Page
/episode/:id                   → Podcast Episode
/audiobook/:id                 → Audiobook Detail
/queue                         → Queue
/user/:id                      → User Profile
/user/:id/playlists            → User's Public Playlists
/lyrics                        → Lyrics View (full player)
/settings                      → Settings
/settings/account              → Account
/settings/subscription         → Plan & Billing
/download                      → App Download Landing
/wrapped                       → Spotify Wrapped (seasonal)
/premium                       → Premium Landing Page
/concerts                      → Live Events near You
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Songs, Artists, Albums, Playlists, Podcasts, Episodes, Audiobooks, Users, Genres & Moods | Content Type tabs (All/Songs/Artists/Albums/Playlists/Podcasts/Audiobooks) | Relevance |
| Browse All | Curated categories | Genre, Mood, Activity, Era | Spotify-curated order |
| Playlist | Tracks within playlist | Search by title/artist within playlist | Title, Artist, Album, Date Added, Duration, Custom (drag) |
| Library | Saved items | Type pills (Playlists/Artists/Albums/Podcasts/Audiobooks/Downloaded) | Recents, Recently Added, Alphabetical, Creator |
| Artist Discography | Albums, singles | Type (Albums/Singles & EPs/Compilations) | Latest, Oldest |

## Responsive Behavior

| Breakpoint | Nav | Player | Content |
|------------|-----|--------|---------|
| Desktop (≥1280px) | Left sidebar (fixed, resizable 200-400px) + optional right sidebar (friend activity) | Bottom bar (mini player) + expandable full view | Grid layout (cards), scrollable content area |
| Tablet (768–1279px) | Collapsed sidebar (icons + library search) | Bottom bar + expandable | Adaptive grid |
| Mobile (<768px) | Bottom tab bar (Home, Search, Library) | Bottom bar (swipe up to full player) | Single column / 2-col grid |

### Audio-Specific Patterns
- Gapless playback between tracks (seamless album experience)
- Crossfade option (0-12s transition between songs)
- Automix (smooth transitions in playlists)
- Audio normalization (loudness leveling across tracks)
- Equalizer (mobile: preset + custom bands)
- Background playback (app minimized)
- Lock screen / notification controls (iOS + Android)
- CarPlay / Android Auto integration
- Chromecast / AirPlay / Spotify Connect
- Offline mode with download management
- Streaming quality tiers (auto/low 24kbps/normal 96kbps/high 160kbps/very high 320kbps)

## Access Control

| Role | Browse | Stream | Playlist | Download | Social | Spotify Connect |
|------|--------|--------|----------|----------|--------|----------------|
| Free User | ✅ | Shuffle-only on mobile (with ads), on-demand on desktop (with ads) | Create/Follow (limited to 10,000 songs) | — | Follow, share | Limited |
| Premium Individual | ✅ | On-demand, no ads, very high quality (320kbps) | Unlimited | ✅ | ✅ | ✅ |
| Premium Duo | ✅ | ✅ (2 accounts) + Duo Mix playlist | ✅ | ✅ | ✅ | ✅ |
| Premium Family | ✅ | ✅ (up to 6 accounts) + Family Mix | ✅ | ✅ | ✅ + parental controls | ✅ |
| Premium Student | ✅ | ✅ (discounted, single account) | ✅ | ✅ | ✅ | ✅ |
| Artist (Spotify for Artists) | ✅ | ✅ | ✅ | ✅ | + Artist profile management, Canvas upload, analytics | ✅ |
| Admin | ✅ | ✅ | ✅ | ✅ | Content moderation, catalog management | ✅ |
