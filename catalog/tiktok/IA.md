---
brand: TikTok
tagline: "Make every second count. Short-form video platform powered by the For You algorithm and creator culture."
category: Short Video
website: https://tiktok.com
---

# TikTok — Information Architecture

## Overview

A short-form vertical video platform that redefined mobile content consumption. TikTok's mental model is an **infinite scroll of algorithmically-curated short videos** — unlike traditional social networks where you follow people first, TikTok's "For You" page (FYP) surfaces content from anyone based on machine learning. Users don't browse — they swipe. Key differentiators: the For You algorithm (interest-based, not social-graph-based), native in-app video editor with effects/sounds/filters, duets and stitches (creative collaboration), TikTok LIVE, TikTok Shop (in-video commerce), and the sound/trend-driven content culture where audio tracks are first-class entities.

## Site Map

```
├── For You Page (FYP) — Home
│   ├── Full-screen Vertical Video Feed
│   ├── Swipe Up to Next Video (infinite)
│   ├── Per-Video Overlay
│   │   ├── Right: Creator Avatar (+Follow), Heart, Comment, Bookmark, Share, Sound Disc
│   │   ├── Bottom: @Creator, Caption (#hashtags), Sound Name (♪ marquee)
│   │   ├── Progress Bar (bottom edge)
│   │   └── Long-press: Save Video, Not Interested, Report
│   └── Feed Toggle: For You | Following | Friends | LIVE
├── Following Feed
│   ├── Videos from Followed Creators (chronological/mixed)
│   └── Same UI as FYP
├── Friends Feed
│   ├── Videos from Mutual Follows
│   └── Stories (ephemeral, 24h)
├── Discover / Explore
│   ├── Search Bar (top)
│   ├── Trending Hashtags
│   ├── Trending Sounds
│   ├── Trending Effects
│   ├── Category Tabs (All, Gaming, Comedy, Sports, Food, etc.)
│   └── Trending Creators
├── Search
│   ├── Top (mixed results)
│   ├── Users
│   ├── Videos
│   ├── Sounds
│   ├── LIVE
│   ├── Hashtags
│   └── Search Suggestions / Autocomplete
├── Create Video ([+] Button)
│   ├── Camera / Record
│   │   ├── Record Button (tap or hold)
│   │   ├── Timer (3s / 10s delay)
│   │   ├── Duration (15s / 60s / 3min / 10min)
│   │   ├── Speed (0.3x – 3x)
│   │   ├── Effects / Filters (AR, beauty, green screen, etc.)
│   │   ├── Sound / Music (add before or after recording)
│   │   ├── Flash
│   │   ├── Flip Camera
│   │   └── Multi-clip recording
│   ├── Upload from Gallery
│   ├── Photo Mode (photo carousel post)
│   ├── Edit
│   │   ├── Trim / Split / Adjust Clips
│   │   ├── Effects (visual, time, transition)
│   │   ├── Text Overlay (timed to appear/disappear)
│   │   ├── Stickers
│   │   ├── Voice Effects
│   │   ├── Voiceover
│   │   ├── Auto-Captions
│   │   └── Sound (original, add music, volume mixing)
│   ├── Templates (trending formats)
│   ├── Duet (split-screen with another video)
│   ├── Stitch (clip + respond to another video)
│   └── Post Settings
│       ├── Caption (text + #hashtags + @mentions)
│       ├── Cover Image (select frame)
│       ├── Tag People
│       ├── Tag Location
│       ├── Privacy (everyone / friends / only me)
│       ├── Allow Comments (on/off)
│       ├── Allow Duets / Stitches
│       ├── Allow Downloads
│       ├── TikTok Shop Product Tags
│       ├── Schedule Post (date/time)
│       └── Post / Save as Draft
├── TikTok LIVE
│   ├── Live Feed (browse live streams)
│   ├── Live Viewer
│   │   ├── Full-screen Video
│   │   ├── Real-time Chat (overlaid)
│   │   ├── Gifts (virtual items with real money value)
│   │   ├── Co-host (multi-guest live)
│   │   ├── Q&A
│   │   ├── Polls
│   │   └── Product Pins (TikTok Shop)
│   └── Go Live (creator, 1000+ follower requirement)
│       ├── Set Topic, Title, Cover
│       ├── Effects / Filters
│       ├── Invite Co-host
│       └── Manage Chat (mod, block)
├── TikTok Shop
│   ├── Shop Tab (product browsing)
│   ├── Product Detail Page
│   ├── In-Video Shopping (tagged products)
│   ├── Live Shopping (buy during live stream)
│   ├── Creator Affiliate Links
│   ├── Cart / Checkout
│   ├── Orders / Tracking
│   └── Reviews
├── Inbox
│   ├── Activity (likes, comments, mentions, follows, duet/stitch notifications)
│   ├── Direct Messages
│   │   ├── Individual Chats
│   │   ├── Group Chats
│   │   ├── Share Videos via DM
│   │   └── Message Requests (from non-followers)
│   └── System Notifications
├── Profile
│   ├── Avatar, Username, Name, Bio, Link
│   ├── Stats: Following, Followers, Likes
│   ├── Edit Profile
│   ├── Share Profile
│   ├── Tabs: Videos, Reposts, Favorites, Liked (private by default)
│   ├── Pinned Videos (up to 3)
│   ├── Video Grid (3 columns, cover + view count)
│   ├── Creator Tools (if eligible)
│   │   ├── Analytics
│   │   ├── Creator Fund / Creativity Program
│   │   ├── TikTok Shop Seller
│   │   ├── Creator Marketplace
│   │   └── LIVE settings
│   └── QR Code (share profile)
├── Sound Page
│   ├── Sound Name, Artist/Creator
│   ├── All Videos Using This Sound
│   ├── Use This Sound (open creator with sound pre-loaded)
│   ├── Bookmark Sound
│   └── Sound Stats (videos created with it)
├── Hashtag Page
│   ├── Hashtag Name, View Count
│   ├── Top Videos with Hashtag
│   └── Related Hashtags
├── Effect Page
│   ├── Effect Name, Creator
│   ├── Videos Using This Effect
│   └── Try This Effect
├── Settings & Privacy
│   ├── Account (username, phone, email, linked accounts)
│   ├── Privacy
│   │   ├── Private Account (on/off)
│   │   ├── Who Can Duet / Stitch / Comment / Message / View Likes
│   │   ├── Blocked Accounts
│   │   ├── Downloads (allow/disallow)
│   │   └── Personalization & Data
│   ├── Content Preferences (language, restricted mode, content filter)
│   ├── Notifications (granular per activity type)
│   ├── Digital Wellbeing
│   │   ├── Screen Time Management (daily limit, break reminders)
│   │   ├── Restricted Mode
│   │   └── Sleep Reminders
│   ├── Accessibility (auto-captions, text size, reduce motion)
│   ├── Cache & Storage
│   ├── Data Saver
│   └── Family Pairing (parent controls linked account)
└── Creator Tools
    ├── TikTok Creator Center (web)
    │   ├── Analytics (video views, followers, traffic sources, audience demographics)
    │   ├── Trending Discovery (sounds, hashtags, topics, creators)
    │   ├── Tips & Resources
    │   └── Comment Management
    ├── Promote (paid promotion for videos)
    ├── Creativity Program Beta (successor to Creator Fund)
    ├── TikTok Creator Marketplace (brand deals)
    └── Business Suite (for business accounts)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 5 tabs, always visible | Home, Friends/Discover, [+Create], Inbox, Profile |
| **Top Feed Toggle** | Horizontal tabs on Home | "For You" / "Following" / "Friends" / "LIVE" |
| **Full-Screen Video** | Each video fills entire screen | Swipe up for next, swipe down for previous |
| **Right Action Bar** | Vertical icons overlaid on video | Avatar(+Follow), Heart, Comment, Bookmark, Share, Sound Disc |
| **Bottom Caption** | Overlaid on video bottom | @username, caption with #hashtags, ♪ sound name (marquee scroll) |
| **Create (+)** | Center tab, raised | Opens camera/upload (always accessible, core CTA) |
| **Sound Disc** | Spinning disc icon (bottom-right) | Tap to go to sound page (see all videos with this sound) |
| **Swipe Gestures** | Up: next video, Right: creator profile, Left: TikTok Shop (if enabled) | Navigation is gesture-driven, not tap-driven |

### Mobile Layout (Full-Screen Video)
```
┌─────────────────────────────┐
│  For You | Following        │  ← Feed toggle
│                             │
│                             │
│                             │
│     [Full-screen Video]     │     [Avatar]
│                             │     [❤️ 1.2M]
│                             │     [💬 23K]
│                             │     [🔖 Save]
│                             │     [↗️ Share]
│                             │     [♪ 🎵]
│                             │
│  @creator Caption text...   │
│  ♪ Original Sound - creator │
│  ════════════●══════════    │  ← progress bar
├─────────────────────────────┤
│ 🏠 Home | 👥 | ➕ | ✉️ | 👤│  ← tab bar
└─────────────────────────────┘
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Video | video_url, cover_image, caption, duration, views_count, likes_count, comments_count, shares_count, saves_count, created_at, visibility (public/friends/private), allow_comments, allow_duet, allow_stitch, allow_download, pinned (bool), promoted (bool) | belongs to User, has Sound, Effects[], Hashtags[], ProductTags[] |
| User | username, display_name, avatar, bio, link, followers_count, following_count, total_likes, is_verified, is_private, account_type (personal/creator/business) | has many Videos, LIVE Streams |
| Sound | name, artist, audio_url, duration, original (bool), video_count (how many videos use it) | used by many Videos |
| Hashtag | name, view_count, video_count | many-to-many with Videos |
| Effect | name, creator, icon, video_count | used by many Videos |
| Comment | text, likes_count, created_at, pinned (bool) | belongs to Video and User, can be nested (replies) |
| Like | created_at | belongs to User and Video/Comment |
| Follow | follower_id, following_id, mutual (bool) | connects Users |
| Duet | original_video, response_video, layout (side-by-side/top-bottom/react) | connects two Videos |
| Stitch | original_video, clip_segment, response_video | connects two Videos |
| LiveStream | title, category, viewer_count, started_at, co_hosts[], gifts_received | belongs to User |
| Gift | type (rose/TikTok/drama_queen/etc.), value, sender, created_at | sent during LiveStream |
| Message | text, media, created_at, read | belongs to Conversation and User |
| ProductTag | product, video, position, shop_url, price | connects Video to TikTok Shop Product |
| Draft | video_data, edit_state, saved_at | belongs to User |
| Story | media, created_at, expires_at (24h), viewed_by[] | belongs to User |

### Video Types
`standard | duet | stitch | photo_carousel | live_replay | ad/promoted`

### Video Durations
`15s | 60s | 3min | 10min (longer for some creators)`

## User Flows

### Consume Content (FYP)
```
Open App → FYP → Watch Video (auto-plays) → Swipe Up → Next Video → Like (double-tap) → Swipe Up → Share to Friend → Continue Swiping
```

### Discover via Sound
```
Watch Video → Tap Sound Disc → Sound Page → Browse All Videos Using Sound → Watch Favorites → Use This Sound (→ creator)
```

### Create Video
```
[+] → Record (hold button) → Add Sound → Apply Effect → Edit (trim, text, stickers) → Write Caption + Hashtags → Set Privacy → Post
```

### Duet / Stitch
```
Watch Video → Share → Duet → Record Alongside Original → Edit → Post (side-by-side video published)
```

### Live Shopping
```
FYP → Swipe into LIVE → Watch → Creator Pins Product → Tap Product → Product Detail → Add to Cart → Checkout → Order
```

### Follow Creator
```
Watch Video → Tap Avatar (+) → Followed → Their Videos Appear in Following Feed → Visit Profile → Watch Grid
```

### Trend Participation
```
Discover → Trending Sound → Tap "Use This Sound" → Record with Sound → Add Your Twist → Post → Join Trend
```

## URL / Route Structure

```
# TikTok Web (tiktok.com)
/                              → For You Feed
/following                     → Following Feed
/foryou                        → For You (explicit)
/explore                       → Discover / Trending
/@:username                    → User Profile
/@:username/video/:videoId     → Video Detail Page
/music/:soundSlug-:soundId     → Sound Page
/tag/:hashtag                  → Hashtag Page
/effect/:effectId              → Effect Page
/search?q=:query               → Search Results
/search/user?q=:query          → Search Users
/search/video?q=:query         → Search Videos
/live                          → Browse LIVE
/live/:username                → Live Stream
/upload                        → Upload Video (web)
/creator-center                → Creator Center (analytics)
/shop                          → TikTok Shop
/messages                      → Direct Messages
/setting                       → Settings
/setting/privacy               → Privacy Settings

# Deep Links (App)
tiktok://feed                  → For You Feed
tiktok://user/@:username       → User Profile
tiktok://video/:videoId        → Video
tiktok://sound/:soundId        → Sound Page
tiktok://camera                → Open Creator Camera
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Users, Videos, Sounds, LIVE, Hashtags | Content Type tabs (Top/Users/Videos/Sounds/LIVE/Hashtags) | Relevance (algorithmic) |
| Explore | Trending content | Category tabs (All, Gaming, Comedy, Sports, etc.) | Trending (algorithmic) |
| Sound Page | Videos using this sound | — | Top, Recent |
| Hashtag Page | Videos with hashtag | — | Top, Recent |
| User Videos | Creator's videos | — | Latest, Most Popular |
| TikTok Shop | Products | Category, Price, Rating | Relevance, Price, Bestselling |

## Responsive Behavior

| Breakpoint | Layout | Video | Navigation |
|------------|--------|-------|------------|
| Mobile (<768px, primary) | Full-screen vertical video, gesture-driven | 9:16 full-screen, auto-play with sound | Bottom tab bar |
| Tablet (768–1023px) | Full-screen video or grid browse | Full-screen or embedded | Bottom tab bar |
| Desktop (≥1024px) | Sidebar + centered video (max-width ~420px) or "Explore" grid | Contained vertical video, auto-play, keyboard navigation (↑↓) | Left sidebar |

### Mobile-First Design (TikTok is mobile-native)
- Full-screen vertical video is the default and defining experience
- Auto-play with sound (unlike most social platforms)
- Double-tap to like (heart animation)
- Swipe gestures: up (next), down (previous), right (profile), left (shop)
- Pull-to-refresh on Following feed
- Creator camera: always one tap away ([+])
- Low-bandwidth mode (auto quality adjustment)
- Data saver mode
- Download videos (if allowed by creator)

## Access Control

| Role | Watch | Create | Comment | LIVE | Monetize | Shop |
|------|-------|--------|---------|------|----------|------|
| Unauthenticated | ✅ (FYP, limited) | — | — | Watch only | — | Browse |
| Registered (under 16) | ✅ | ✅ (limited to 60s, no DMs) | Limited | Watch only | — | — |
| Registered (16-17) | ✅ | ✅ (up to 3 min) | ✅ | Watch + Go Live (no gifts) | — | ✅ |
| Registered (18+) | ✅ | ✅ (up to 10 min) | ✅ | Watch + Go Live (1000+ followers) + Send/Receive Gifts | ✅ (if eligible) | ✅ |
| Creator (eligible) | ✅ | ✅ | ✅ | ✅ | Creator Fund, Marketplace, LIVE Gifts, Shop affiliate | ✅ |
| Business Account | ✅ | ✅ + Promote (ads), product tags | ✅ | ✅ | Ads, Shop seller, Creator Marketplace | ✅ (seller) |
| Moderator / Admin | ✅ | ✅ | ✅ | ✅ | — | Content moderation, policy enforcement |

### Digital Wellbeing (Built-in)
- Screen time dashboard (daily usage)
- Daily screen time limit (configurable)
- Break reminders (after continuous scrolling)
- Sleep reminders (no notifications during set hours)
- Family Pairing (parent links to teen account for controls)
- Restricted Mode (filter mature content)
- Comment filters (keywords, spam)
