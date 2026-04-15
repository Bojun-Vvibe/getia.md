# Music Streaming — Information Architecture

## Overview

A music streaming platform for discovering, playing, and organizing music (Spotify, Apple Music, Tidal style). The mental model is a **personal jukebox** — users search, browse, and stream songs organized into albums and playlists. A persistent player anchors the experience, and personalized recommendations drive discovery.

## Site Map

```
├── Home
│   ├── Recently Played
│   ├── Made for You (Daily Mixes, Discover Weekly)
│   ├── New Releases
│   ├── Trending / Popular
│   ├── Moods & Genres
│   └── Featured Playlists
├── Browse / Explore
│   ├── Genres & Moods
│   ├── New Releases
│   ├── Charts (Top 50, Viral)
│   ├── Podcasts (cross-link)
│   ├── Live Events / Concerts
│   └── Curated Collections
├── Search
│   ├── Recent Searches
│   ├── Results: Songs, Artists, Albums, Playlists, Users
│   └── Browse Categories (when empty)
├── Artist Page
│   ├── Header (image, name, monthly listeners, follow)
│   ├── Popular Tracks
│   ├── Discography (albums, singles, compilations)
│   ├── Featuring (appears on)
│   ├── Related Artists
│   ├── About (bio, stats, social links)
│   └── Merch / Events (optional)
├── Album Page
│   ├── Cover Art, Title, Artist, Year, Duration
│   ├── Track List (number, title, features, duration)
│   ├── Credits
│   ├── More by Artist
│   └── Save / Share
├── Playlist Page
│   ├── Cover, Title, Creator, Description
│   ├── Track List (sortable, filterable)
│   ├── Collaborative Badge (if shared editing)
│   ├── Followers Count
│   └── Recommended Songs (add to playlist)
├── Player (Persistent)
│   ├── Mini Player (bottom bar)
│   │   ├── Album Art, Song Title, Artist
│   │   ├── Play/Pause
│   │   ├── Progress Bar
│   │   └── Like Button
│   └── Full Player (expanded)
│       ├── Album Art (large)
│       ├── Song Title, Artist, Album
│       ├── Progress Scrubber
│       ├── Controls (Shuffle, Previous, Play/Pause, Next, Repeat)
│       ├── Volume Slider
│       ├── Queue
│       ├── Lyrics (synced)
│       ├── Devices (Connect)
│       └── Share
├── Queue
│   ├── Now Playing
│   ├── Next in Queue (user-added)
│   └── Next From (album/playlist context)
├── Library
│   ├── Playlists (own + followed)
│   ├── Liked Songs
│   ├── Albums (saved)
│   ├── Artists (followed)
│   ├── Downloaded (offline)
│   └── Listening History
├── Your Profile
│   ├── Display Name, Avatar
│   ├── Public Playlists
│   ├── Followers / Following
│   ├── Recently Played (public toggle)
│   └── Top Artists / Tracks
├── User Profile (others)
│   ├── Public Playlists
│   ├── Followers / Following
│   └── Follow Button
├── Settings
│   ├── Account
│   ├── Subscription / Plan
│   ├── Playback (crossfade, gapless, normalize, quality)
│   ├── Downloads (quality, storage)
│   ├── Social (private session, share listening)
│   ├── Notifications
│   ├── Connected Apps / Devices
│   └── Language / Region
└── Premium Upgrade (for free users)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Desktop: fixed sidebar | Home, Browse, Library sections + playlist list |
| **Bottom Tab Bar** | Mobile: 4-5 tabs | Home, Search, Library, Premium |
| **Mini Player** | Persistent bottom bar (above mobile tabs) | Always visible when audio playing |
| **Full Player** | Expand from mini player | Click/swipe up to expand; swipe down to collapse |
| **Context Menus** | Right-click (desktop) or long-press (mobile) | Add to playlist, queue, share, go to artist/album, radio |
| **Top Bar** | Desktop: within content area | Back/Forward, user avatar, upgrade button |

### Desktop Sidebar
```
[Logo]
─────────────
🏠 Home
🔍 Search
─────────────
📚 Your Library
  Recently Added ▾
  Playlists
  Albums
  Artists
─────────────
[+ Create Playlist]
─────────────
🎵 Liked Songs
📋 My Playlist #1
📋 My Playlist #2
...
─────────────
[Mini Player]
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Track | title, duration, track_number, disc_number, explicit, isrc, preview_url, popularity | belongs to Album, has Artists (primary + features) |
| Album | title, cover_art, release_date, type (album/single/EP/compilation), total_tracks, label, copyright | belongs to Artist, has many Tracks |
| Artist | name, image, bio, genres[], monthly_listeners, verified, social_links | has many Albums, Tracks |
| Playlist | name, description, cover_image, public, collaborative, followers_count | belongs to User, has many Tracks (ordered) |
| User | username, display_name, avatar, country | has Playlists, Library, Following |
| LikedSong | track, added_at | belongs to User |
| PlaybackState | track, position_ms, device, shuffle, repeat_mode, volume | belongs to User |
| QueueItem | track, position_in_queue, source (user/auto) | belongs to User session |
| Follow | follower, following (artist or user), created_at | connects User to Artist/User |
| ListeningHistory | track, played_at, context (album/playlist/radio) | belongs to User |
| Genre | name, slug, color, icon | many-to-many with Artists |

### Content Hierarchy
```
Artist → Albums → Tracks
Playlist → Tracks (ordered, cross-artist)
Radio / Mix → auto-generated track list
```

## User Flows

### Discover and Listen
```
Home → Made for You Mix → Tap Play → Streams full mix → Like songs → Added to Liked Songs
```

### Search and Play
```
Search → Type query → Results (songs tab) → Tap song → Plays → Browse artist → Follow
```

### Create Playlist
```
Library → [+ Create Playlist] → Name it → Search songs → Add to Playlist → Share
```

### Offline Listening
```
Album/Playlist → Download → Library → Downloads → Play offline
```

### Queue Management
```
Song/Album → [⋮ Menu] → Add to Queue → Player → Queue tab → Reorder/Remove → Play
```

### Device Transfer
```
Playing on Phone → Player → Devices → Select Desktop → Audio transfers seamlessly
```

## URL / Route Structure

```
/                          → Home
/browse                    → Browse / Explore
/browse/genre/:id          → Genre Page
/browse/charts             → Charts
/search                    → Search (empty state: categories)
/search/:query             → Search Results
/artist/:id                → Artist Page
/album/:id                 → Album Page
/track/:id                 → Track (redirects to album context)
/playlist/:id              → Playlist Page
/collection/tracks         → Liked Songs
/collection/albums         → Saved Albums
/collection/artists        → Followed Artists
/collection/playlists      → Your Playlists
/queue                     → Queue
/user/:id                  → User Profile
/user/:id/playlists        → User's Public Playlists
/settings                  → Settings
/settings/account          → Account
/settings/subscription     → Plan & Billing
/lyrics                    → Lyrics (full player)
/download                  → App Download Landing
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Songs, Artists, Albums, Playlists, Users, Genres | Content Type (songs/artists/albums/playlists) | Relevance |
| Browse | Curated content | Genre, Mood, Era | Trending, New, Popular |
| Playlist | Tracks within playlist | — | Title, Artist, Date Added, Duration, Custom |
| Library | Saved items | Type (playlists/albums/artists), Downloaded | Recently Added, Alphabetical, Creator, Recently Played |
| Artist Discography | Albums, singles | Type (album/single/compilation), Year | Latest, Oldest, Popular |

## Responsive Behavior

| Breakpoint | Nav | Player | Content |
|------------|-----|--------|---------|
| Desktop (≥1280px) | Left sidebar (fixed, resizable) | Bottom bar + right panel (queue) | Grid layout (cards) |
| Tablet (768–1279px) | Collapsed icon sidebar | Bottom bar | Adaptive grid |
| Mobile (<768px) | Bottom tab bar | Bottom bar (swipe up to expand) | Single column / 2-col grid |

### Audio-Specific Patterns
- Gapless playback between tracks
- Crossfade option (0-12s)
- Audio normalization (loudness leveling)
- Background playback (app minimized)
- Lock screen / notification controls
- CarPlay / Android Auto integration
- Chromecast / AirPlay / Spotify Connect
- Offline mode with download management
- Streaming quality settings (auto, low, normal, high, very high)

## Access Control

| Role | Browse | Stream | Playlist | Download | Social |
|------|--------|--------|----------|----------|--------|
| Free User | ✅ | Shuffle-only (mobile), with ads | Create/Follow (limited) | — | Follow, share |
| Premium | ✅ | On-demand, no ads, high quality | Unlimited | ✅ | ✅ |
| Family Premium | ✅ | ✅ (up to 6 accounts) | ✅ | ✅ | ✅ |
| Artist | ✅ | ✅ | ✅ | ✅ | + Artist profile management |
| Admin | ✅ | ✅ | ✅ | ✅ | Content moderation, catalog management |
