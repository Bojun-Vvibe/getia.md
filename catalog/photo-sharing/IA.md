# Photo Sharing — Information Architecture

## Overview

A visual-first platform for uploading, sharing, and discovering photos and short videos (Instagram, Flickr, 500px style). The mental model is a **visual gallery** — users capture and curate visual content, browse feeds of images, and interact through likes and comments. Visual impact drives engagement; profiles serve as personal portfolios.

## Site Map

```
├── Home / Feed
│   ├── Following Feed (chronological or algorithmic)
│   ├── Suggested Posts
│   └── Stories Bar (top)
├── Explore / Discover
│   ├── Trending Grid (photos + Reels)
│   ├── Category Tabs (Style, Nature, Food, Travel, etc.)
│   ├── Hashtag Pages
│   └── Location Pages
├── Search
│   ├── Search Bar (top)
│   ├── Results: Users, Tags, Places
│   └── Recent Searches
├── Create / Upload
│   ├── Photo Capture (camera)
│   ├── Photo Library (select from device)
│   ├── Multi-Photo Carousel
│   ├── Filters & Edit
│   │   ├── Filters (preset)
│   │   ├── Adjustments (brightness, contrast, saturation, etc.)
│   │   └── Crop / Rotate
│   ├── Caption, Tags, Location
│   ├── Tag People
│   └── Share to (feed, story, other platforms)
├── Stories
│   ├── Story Viewer (full-screen, tap to advance)
│   ├── Story Creator
│   │   ├── Photo / Video / Boomerang / Text
│   │   ├── Stickers (poll, question, music, location, mention)
│   │   ├── Drawing / Text Overlay
│   │   └── Filters / AR Effects
│   └── Story Highlights (on profile)
├── Reels / Short Video
│   ├── Full-screen vertical feed (swipe up)
│   ├── Reel Creator (record, edit, audio, effects)
│   └── Reel Detail (comments, share)
├── Post Detail
│   ├── Photo(s) / Video
│   ├── Likes Count
│   ├── Caption (with hashtags, mentions)
│   ├── Comments (threaded)
│   ├── Timestamp
│   ├── Location Link
│   └── Actions (Like, Comment, Share, Save)
├── Profile
│   ├── Header (avatar, username, bio, link, stats)
│   ├── Stats (posts, followers, following)
│   ├── Action Buttons (Follow, Message, Contact)
│   ├── Story Highlights Row
│   ├── Grid View (default, 3 columns)
│   ├── List View (optional)
│   ├── Reels Tab
│   ├── Tagged Tab
│   └── Saved Tab (own profile only, private)
├── Direct Messages
│   ├── Inbox (conversation list)
│   ├── Conversation Thread
│   ├── Share Photo/Post via DM
│   └── Group Chats
├── Activity / Notifications
│   ├── Likes
│   ├── Comments
│   ├── Follows
│   ├── Mentions
│   └── Requests (private accounts)
├── Settings
│   ├── Edit Profile
│   ├── Privacy (public/private, blocked accounts)
│   ├── Notifications
│   ├── Security (2FA, login activity)
│   ├── Content Preferences
│   ├── Account (linked accounts, data download)
│   ├── Help
│   └── About
└── Hashtag Page
    ├── Top Posts (grid)
    ├── Recent Posts
    ├── Related Hashtags
    └── Post Count
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | Mobile: 5 tabs, always visible | Home, Search, Create (+), Reels, Profile |
| **Top Bar** | Mobile: contextual | Logo + DMs (home), Search bar (explore), Back + title (detail) |
| **Desktop Nav** | Left sidebar (fixed) | Home, Search, Explore, Reels, Messages, Notifications, Create, Profile |
| **Stories Bar** | Horizontal scroll, top of feed | Circular avatars, your story first, tap to view |
| **Post Actions** | Below each post | Like (heart), Comment, Share (DM/external), Save (bookmark) |
| **Profile Tabs** | Icon tabs below bio | Grid, Reels, Tagged |

### Mobile Bottom Tab Bar
```
[ 🏠 Home ] [ 🔍 Search ] [ ➕ Create ] [ 🎬 Reels ] [ 👤 Profile ]
```

### Desktop Sidebar
```
[Logo]
─────────────
🏠 Home
🔍 Search
🧭 Explore
🎬 Reels
✉️ Messages (●)
❤️ Notifications
➕ Create
👤 Profile
─────────────
☰ More
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Post | media[] (photos/videos), caption, location, filter, aspect_ratio, likes_count, comments_count, created_at | belongs to User, has Tags, Comments, Likes |
| Media | url, type (photo/video), width, height, alt_text, order (carousel) | belongs to Post |
| Story | media, type (photo/video/boomerang), stickers[], duration, expires_at (24h) | belongs to User |
| StoryHighlight | name, cover_image | belongs to User, has many Stories |
| Reel | video_url, audio, caption, duration (15-90s), likes_count, views_count | belongs to User |
| Comment | text, created_at, likes_count | belongs to Post/Reel and User, can be nested |
| Like | created_at | belongs to User and Post/Comment/Reel |
| User | username, display_name, avatar, bio, website, is_private, is_verified, followers_count, following_count, posts_count | has many Posts, Stories, Reels |
| Follow | follower_id, following_id, status (active/pending for private accounts) | connects Users |
| Hashtag | name, post_count | many-to-many with Posts |
| Location | name, lat, lng, address | many-to-many with Posts |
| SavedCollection | name, cover | belongs to User, has many Posts |
| Message | text, media, post_share, story_reply, read, created_at | belongs to Conversation |

### Post Types
`single_photo | carousel (up to 10) | video | reel`

### Media Aspect Ratios
`1:1 (square, default) | 4:5 (portrait) | 16:9 (landscape)`

## User Flows

### Browse and Engage
```
Open App → Feed → Scroll → Double-tap to Like → Tap Comment → Reply → Scroll
```

### Post Photo
```
Tap [+] → Select Photo(s) → Apply Filter → Edit → Write Caption → Add Tags/Location → Share
```

### Discover Content
```
Explore → Trending Grid → Tap Photo → Like/Follow → View Profile → Browse Grid → Follow
```

### Watch Stories
```
Feed → Tap Story Avatar → Full-screen Story → Tap to Advance → Swipe to Next User → Reply
```

### Direct Share
```
Post → Share Icon → Select Contact(s) → Send via DM → Conversation
```

### Save and Organize
```
Post → Bookmark Icon → Saved → Collections → Create Collection → Organize
```

## URL / Route Structure

```
/                          → Home Feed
/explore                   → Explore / Discover
/explore/tags/:tag         → Hashtag Page
/explore/locations/:id     → Location Page
/reels                     → Reels Feed
/p/:postId                 → Post Detail
/reel/:reelId              → Reel Detail
/:username                 → User Profile (Grid)
/:username/reels           → User Reels
/:username/tagged          → Tagged Posts
/:username/saved           → Saved Posts (own, private)
/:username/followers       → Followers List
/:username/following       → Following List
/direct/inbox              → Messages
/direct/t/:threadId        → Conversation Thread
/stories/:username         → User's Current Stories
/accounts/edit             → Edit Profile
/accounts/settings         → Settings
/accounts/privacy          → Privacy Settings
/search?q=:query           → Search Results
/create                    → Create Post (desktop)
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Users, Hashtags, Locations | Content Type (accounts/tags/places) | Relevance |
| Explore | Trending posts | Category (Style, Travel, Food, Art, etc.) | Trending (algorithmic) |
| Hashtag Page | Posts with tag | — | Top, Recent |
| Profile | User's posts | Tab (posts/reels/tagged) | Chronological (grid) |
| Saved | Bookmarked posts | Collection | Saved Date |

## Responsive Behavior

| Breakpoint | Nav | Feed | Profile Grid |
|------------|-----|------|-------------|
| Desktop (≥1024px) | Left sidebar | Center feed (max 470px posts) + right suggestions | 3-column grid |
| Tablet (768–1023px) | Left icon sidebar | Center feed | 3-column grid |
| Mobile (<768px) | Bottom tab bar | Full-width feed | 3-column grid (tight) |

### Mobile-First Patterns
- Camera-first: Create button launches camera or photo picker
- Double-tap to like with heart animation
- Swipe gestures: right on photo = like, left = next (carousel)
- Pull-to-refresh feed
- Stories: full-screen, tap left/right to navigate, swipe to skip user
- Reels: full-screen vertical scroll (TikTok-style)
- Image loading: progressive blur → sharp

## Access Control

| Role | Browse | Post | Comment | Message | Stories |
|------|--------|------|---------|---------|---------|
| Unauthenticated | Public profiles/posts only | — | — | — | — |
| User | ✅ | Create/Edit/Delete own | ✅ | ✅ | ✅ |
| Private User | ✅ | Visible to approved followers only | ✅ | ✅ | Followers only |
| Verified User | ✅ | + Verified badge | ✅ | ✅ | ✅ |
| Business / Creator | ✅ | + Insights, Promotions | ✅ | ✅ | + Links, Shopping |
| Admin | ✅ | Full control | Moderate | ✅ | ✅ |

### Privacy Controls (User-configurable)
- Account visibility: Public / Private (requires follow approval)
- Story visibility: Everyone / Close Friends list / Custom
- Comment controls: Everyone / Followers / Off
- Who can tag you: Everyone / Followers / No one
- Hide like counts (own posts)
- Activity status (online indicator): On / Off
- Blocked / Restricted accounts
