---
brand: Twitch
tagline: "Live is life. Interactive live streaming platform for gaming, esports, music, and creative content."
category: Live Streaming
website: https://twitch.tv
---

# Twitch — Information Architecture

## Overview

The world's leading live streaming platform, originally focused on gaming and now expanded to music, creative arts, talk shows, and IRL (In Real Life) streaming. Twitch's mental model is a **live, interactive broadcast** — unlike YouTube's on-demand library, Twitch is fundamentally real-time: viewers watch streamers live, interact via chat, and form communities around channels. Key differentiators: real-time chat (the core social experience), Twitch Emotes (custom emojis as cultural currency), channel subscriptions with Bits/Cheers (virtual currency tipping), Raids (sending viewers to another channel), Drops (game-linked rewards), Twitch extensions (interactive overlays), and a deep integration with gaming culture.

## Site Map

```
├── Home / Following
│   ├── Live Channels You Follow (priority)
│   ├── Recommended Live Channels
│   ├── Recommended Categories
│   ├── Continue Watching (VODs)
│   ├── Offline Channels (recently ended)
│   └── Clips / Highlights
├── Browse
│   ├── Categories (Games / Creative / Music / IRL / Talk Shows)
│   │   ├── Category Page (e.g., "League of Legends")
│   │   │   ├── Live Channels (sorted by viewers)
│   │   │   ├── Tags Filter
│   │   │   └── Category Info (viewer count, follower count)
│   │   └── Sort: Viewers (High to Low), Recently Started
│   ├── Live Channels (all)
│   │   ├── Sort: Recommended / Viewers
│   │   ├── Filter by Language, Tags
│   │   └── Channel Cards (thumbnail, title, streamer, game, viewers)
│   ├── Tags (dropdown filter)
│   │   ├── English, Spanish, Japanese, Korean...
│   │   ├── FPS, RPG, Strategy, Speedrun, Competitive...
│   │   └── Charity, Drops Enabled, LGBTQIA+, Vtuber...
│   └── Go Live / Start Streaming CTA
├── Stream Page (Watch)
│   ├── Video Player
│   │   ├── Live Video Feed
│   │   ├── Stream Title, Category/Game
│   │   ├── Playback Controls (quality, full-screen, theater, clip)
│   │   ├── Latency Mode (normal / low latency)
│   │   ├── Extensions (interactive overlays, panels)
│   │   ├── Clip Button (create 30-60s clip)
│   │   └── Theater Mode / Full-Screen / Multi-Stream (Squad)
│   ├── Chat (right panel)
│   │   ├── Chat Messages (real-time, scrolling)
│   │   ├── Emotes (Twitch global + channel-specific + BTTV/FFZ/7TV)
│   │   ├── Bits / Cheers (animated cheer messages)
│   │   ├── Channel Points Predictions
│   │   ├── Polls (streamer-initiated)
│   │   ├── Hype Train (engagement meter)
│   │   ├── Raids / Hosts
│   │   ├── Moderation (mod actions, AutoMod, timeout, ban)
│   │   ├── Chat Input (text + emote picker + Bits)
│   │   ├── Slow Mode / Followers-Only / Emote-Only / Sub-Only indicators
│   │   └── Community Actions (shoutout, announce)
│   ├── Below Player
│   │   ├── Streamer Info (avatar, name, followers, follow/subscribe buttons)
│   │   ├── Subscribe Button (tiers: $4.99 / $9.99 / $24.99)
│   │   ├── Gift Sub Button
│   │   ├── Bits Button
│   │   ├── Tags (game, content type)
│   │   ├── About / Panels (custom info panels: schedule, social links, PC specs, rules)
│   │   └── VODs / Clips / Collections
│   └── Extensions Panel
│       ├── Overlay Extensions (on top of video)
│       ├── Panel Extensions (below player)
│       └── Component Extensions (within video)
├── Channel Page (Profile)
│   ├── Banner, Avatar, Channel Name, Bio, Social Links
│   ├── Follow / Subscribe Buttons
│   ├── Tabs: Home, About, Schedule, Videos, Chat
│   ├── Home (when offline: last VOD, clips, panels)
│   ├── About (bio, panels, team info)
│   ├── Schedule (stream calendar)
│   ├── Videos
│   │   ├── Past Broadcasts (VODs, auto-deleted after 14/60 days)
│   │   ├── Highlights (permanent, curated by streamer)
│   │   ├── Clips (community-created short clips)
│   │   ├── Collections (themed playlists)
│   │   └── Uploads (non-live video)
│   └── Chat Replay (on VODs)
├── Clips
│   ├── My Clips (clips I created)
│   ├── Trending Clips (popular across Twitch)
│   └── Clip Detail (play, share, link to full VOD timestamp)
├── Search
│   ├── Channels
│   ├── Categories / Games
│   ├── Tags
│   └── Suggestions
├── Following / Activity
│   ├── Followed Channels (live, offline, recently ended)
│   ├── Live Notifications
│   └── Follow Suggestions
├── Notifications
│   ├── [Channel] is live
│   ├── Raid incoming
│   ├── Sub / Gift Sub / Bits alerts
│   ├── Drops (game rewards unlocked)
│   └── Community Updates
├── Wallet / Inventory
│   ├── Subscriptions (active subs, gift subs, Prime Gaming sub)
│   ├── Bits Balance
│   ├── Channel Points (per channel)
│   ├── Drops (earned game items)
│   ├── Turbo (ad-free viewing subscription)
│   └── Payment Methods
├── Prime Gaming (cross-link)
│   ├── Free Sub (1 per month with Amazon Prime)
│   ├── Free Games
│   ├── In-Game Loot
│   └── Prime Gaming Crown Badge
├── Creator Dashboard
│   ├── Stream Manager
│   │   ├── Go Live (OBS/Streamlabs integration, stream key)
│   │   ├── Stream Info (title, category, tags, language)
│   │   ├── Quick Actions (run ad, create poll, start prediction)
│   │   ├── Activity Feed (follows, subs, bits, raids)
│   │   └── Mod View (chat + mod queue + viewer list)
│   ├── Analytics
│   │   ├── Stream Summary (viewers, chat, followers gained)
│   │   ├── Channel Analytics (avg viewers, hours streamed, subs)
│   │   ├── Revenue (subs, bits, ads)
│   │   └── Achievements (milestones toward Affiliate/Partner)
│   ├── Community
│   │   ├── Roles (mods, VIPs, editors)
│   │   ├── AutoMod Settings
│   │   ├── Blocked Terms
│   │   ├── Channel Points (customize rewards)
│   │   └── Raids (manage incoming/outgoing)
│   ├── Content
│   │   ├── VOD Manager (highlight, download, delete)
│   │   ├── Clips Manager
│   │   ├── Collections
│   │   └── Schedule (set recurring stream times)
│   ├── Extensions Manager (install, configure)
│   ├── Settings
│   │   ├── Channel (language, mature content, delay)
│   │   ├── Stream Key & Preferences
│   │   ├── Moderation
│   │   ├── Affiliates / Partners Program
│   │   └── Revenue Settings (payout, onboarding)
│   └── Path to Affiliate / Partner
│       ├── Affiliate Requirements (50 followers, 7 unique broadcasts, 500 min, 3 avg viewers)
│       └── Partner Requirements (75 avg viewers, consistent schedule, community guidelines)
├── Settings
│   ├── Profile (display name, bio, avatar, banner)
│   ├── Security & Privacy
│   ├── Notifications (per channel, push, email)
│   ├── Recommendations (content preferences)
│   ├── Accessibility (chat font size, high contrast)
│   ├── Connections (linked accounts: Steam, Battle.net, Riot, etc.)
│   └── Blocked / Banned Users
└── Safety Center
    ├── Community Guidelines
    ├── Transparency Reports
    └── Appeals
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed, dark theme | Twitch logo, Following/Browse toggle, search bar, Bits/Prime, notifications bell, user avatar |
| **Left Sidebar** | Collapsible | Followed Channels (live indicator + viewer count), Recommended Channels |
| **Stream Layout** | Player + Chat (split) | Video left (fluid), Chat right (320px fixed), theater mode removes sidebar |
| **Chat Panel** | Right panel on stream page | Real-time chat, input at bottom, mod actions inline |
| **Browse Grid** | Category cards (thumbnail, name, viewers) | Click to see live channels in that category |
| **Mobile Nav** | Bottom tab bar | Following, Discover, Browse, Search, Profile |
| **Theater Mode** | Expand player, collapse everything except chat | Wider video, no sidebar, chat remains |

### Desktop Layout (Watching)
```
[Collapsed Sidebar] | [Video Player (fluid)]  | [Chat Panel (320px)]
  Followed Channels |  Stream Title — Game     |  [chat messages...]
  • Streamer1 🔴 12K|  [Live Video Feed]       |  [emote picker]
  • Streamer2 🔴 5K |                          |  [Bits / Cheer]
  • Streamer3 🔴 1K |  ─────────────────       |  [send message...]
  Recommended       |  Streamer | Follow | Sub |
  • Rec1            |  [Panels / About]        |
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Channel | login, display_name, avatar, banner, bio, follower_count, subscriber_count, partner/affiliate, stream_schedule, panels[], social_links | has many Streams, VODs, Clips, Emotes |
| Stream (Live) | title, category/game, tags[], viewer_count, started_at, language, mature (bool), latency_mode | belongs to Channel |
| VOD | title, duration, created_at, view_count, type (archive/highlight/upload), muted_segments[], thumbnail | belongs to Channel |
| Clip | title, creator, vod_offset, duration (30-60s), view_count, created_at, thumbnail | belongs to Channel and VOD |
| Category | name, box_art, viewer_count, follower_count, tags[] | has many live Streams |
| ChatMessage | body, emotes[], bits_amount, user_color, badges[], timestamp | belongs to Channel chat and User |
| Emote | code, image_url, type (global/channel/bits_tier), animated (bool) | belongs to Twitch (global) or Channel |
| Subscription | tier (1/2/3), price, started_at, streak, gifted_by | connects User to Channel |
| Bits | amount, cheermote, message | belongs to User, sent to Channel |
| ChannelPoints | name, icon, rewards[] (custom by streamer), cost | belongs to Channel |
| Prediction | title, outcomes[], status (active/locked/resolved), created_at | belongs to Channel stream |
| Poll | title, options[], duration, votes_count | belongs to Channel stream |
| HypeTrain | level, progress, contributors[], expires_at | belongs to Channel stream |
| Raid | from_channel, to_channel, viewer_count, raided_at | connects Channels |
| Drop | game, campaign, reward_description, progress, claimed (bool) | belongs to User, linked to Category |
| Extension | name, type (overlay/panel/component), developer, active (bool) | belongs to Channel |
| Badge | name, type (sub/bits/mod/vip/founder/prime/global), icon | displayed on User in Chat |

### Channel Tiers
```
Regular → Affiliate (basic monetization) → Partner (full monetization + verified badge)
```

### Subscription Tiers
```
Tier 1: $4.99/month (standard, Prime Gaming sub)
Tier 2: $9.99/month (more emotes)
Tier 3: $24.99/month (most emotes + badges)
Gift Subs: anyone can gift subs to community
```

## User Flows

### Watch Live
```
Home → Followed Channels → Streamer is Live → Click → Watch Stream + Chat → React (emotes, Bits) → Follow / Subscribe
```

### Discover New Streamers
```
Browse → Categories → "League of Legends" → Sort by Viewers → Pick Channel → Watch → Follow → Raided to new streamer → Follow them too
```

### Interact in Chat
```
Watch Stream → Type in Chat → Send Emotes → Cheer Bits → Channel Points Prediction → Hype Train → Community Engagement
```

### Create Clip
```
Watch Stream → Cool Moment → Clip Button → Adjust Duration → Create → Share Link (Twitter, Discord)
```

### Subscribe with Prime
```
Watch Stream → Subscribe → Use Free Prime Gaming Sub → Get Channel Emotes + Badge → Auto-renew monthly
```

### Go Live (Creator)
```
Creator Dashboard → Stream Manager → Set Title + Category → Copy Stream Key → OBS → Start Streaming → Manage Chat/Polls/Predictions
```

### Raid Another Channel
```
End Stream → /raid @otherstreamer → Community Redirected → Other Channel Receives Viewers → Welcome Raid
```

## URL / Route Structure

```
/                              → Home / Following
/directory                     → Browse Categories
/directory/all                 → Browse All Live Channels
/directory/game/:category      → Category Page
/directory/all/tags/:tag       → Channels with Tag
/:username                     → Channel Page (live or offline)
/:username/videos              → Channel VODs
/:username/clips               → Channel Clips
/:username/schedule            → Stream Schedule
/:username/about               → About / Panels
/:username/clip/:clipSlug      → Clip Detail
/videos/:vodId                 → VOD Playback
/search?term=:query            → Search Results
/settings                      → User Settings
/settings/profile              → Profile Settings
/dashboard                     → Creator Dashboard
/dashboard/stream              → Stream Manager
/dashboard/analytics           → Channel Analytics
/dashboard/community           → Community Management
/dashboard/content             → Content Manager (VODs, Clips)
/dashboard/extensions          → Extensions Manager
/wallet                        → Subscriptions, Bits, Drops
/drops                         → Drops / Rewards Inventory
/prime                         → Prime Gaming
/subs                          → Manage Subscriptions
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Channels, Categories/Games, Tags | — | Relevance |
| Browse Categories | Category names | — | Viewers (default), Name |
| Category Page | Live channels in category | Tags (language, content type, game genre), Language | Viewers (High to Low), Recently Started, Recommended |
| Channel VODs | VODs, Highlights, Clips | Type (past broadcast/highlight/upload), Date | Date (newest), Views, Duration |
| Clips | Clips of channel | Period (24h/7d/30d/all) | Trending, Recent, Views |

## Responsive Behavior

| Breakpoint | Layout | Chat | Navigation |
|------------|--------|------|------------|
| Desktop (≥1200px) | Sidebar + Player + Chat (three-panel) | Right panel (320px, collapsible) | Left sidebar + top bar |
| Tablet (768–1199px) | Player + Chat (two-panel) | Below player or overlay | Top bar |
| Mobile (<768px) | Player (top) + Chat (below) stacked, or full-screen player | Below player, scrollable | Bottom tab bar |

### Mobile Adaptations
- Portrait: video top, chat below (scrollable)
- Landscape: full-screen player, chat as overlay (swipe from right)
- Picture-in-Picture while browsing other channels
- Mini player while browsing Twitch
- Low latency mode for real-time interaction
- Chat-only mode (save data)
- Clip creation from mobile

## Access Control

| Role | Watch | Chat | Follow | Subscribe | Bits | Stream | Dashboard |
|------|-------|------|--------|-----------|------|--------|-----------|
| Unauthenticated | ✅ (with ads) | Read only | — | — | — | — | — |
| Registered | ✅ (with ads) | ✅ | ✅ | ✅ (paid) | ✅ (purchase) | ✅ (after setup) | Basic |
| Turbo ($8.99/mo) | ✅ (no ads) | ✅ | ✅ | ✅ | ✅ | ✅ | Basic |
| Subscriber (of channel) | ✅ (no ads on channel) | ✅ + sub emotes + badge | ✅ | — (already subbed) | ✅ | ✅ | Basic |
| VIP (channel role) | ✅ | ✅ + VIP badge, bypass slow mode | ✅ | ✅ | ✅ | ✅ | Basic |
| Moderator (channel role) | ✅ | ✅ + mod actions (timeout, ban, delete) | ✅ | ✅ | ✅ | ✅ | Basic |
| Affiliate | ✅ | ✅ | ✅ | Receive subs + Bits | Receive | ✅ | ✅ (analytics, revenue) |
| Partner | ✅ | ✅ | ✅ | Receive subs + Bits + ads revenue | Receive | ✅ | ✅ (full analytics, transcoding, priority support) |
| Twitch Staff | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Full platform administration |
