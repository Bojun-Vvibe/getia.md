---
brand: Instagram
tagline: "Capture and share the world's moments. Visual-first platform for photos, Reels, Stories, and creator commerce."
category: Photo Social
website: https://instagram.com
---

# Instagram — Information Architecture

## Overview

A visual-first social platform owned by Meta, built around photo and video sharing. Instagram's mental model has evolved from a **photo gallery** to a **multi-format visual entertainment platform** — now encompassing the feed (photos + carousels), Stories (24-hour ephemeral content), Reels (TikTok-style short video), IGTV/long video, DMs, and Shopping. Key differentiators: the iconic square-grid profile, Stories with interactive stickers, Reels (vertical short-form video competing with TikTok), Instagram Shopping (in-app commerce), Close Friends list, Broadcast Channels (one-to-many messaging), and deep integration with Facebook/Meta's ad platform. The profile grid serves as a curated visual portfolio.

## Site Map

```
├── Home / Feed
│   ├── Following Feed (posts from followed accounts + suggested)
│   ├── Favorites Feed (close friends and favorite accounts)
│   ├── Stories Bar (top, horizontal scroll)
│   │   ├── Your Story (first position, add new)
│   │   ├── Close Friends Stories (green ring)
│   │   └── Followed Accounts' Stories
│   ├── Suggested Posts (after catching up with following)
│   ├── Sponsored Posts (ads, in-feed)
│   └── Post Card
│       ├── Author (avatar, username, follow button)
│       ├── Media (photo / carousel / Reel / video)
│       ├── Action Bar: Like (❤️), Comment (💬), Share (➤), Save (🔖)
│       ├── Likes Count
│       ├── Caption (with @mentions, #hashtags)
│       ├── "View all X comments"
│       ├── Timestamp
│       └── Carousel Dots (if multi-image)
├── Explore
│   ├── Trending Grid (algorithmic mix of photos + Reels)
│   ├── Topic Chips (Accounts, Audio, Tags, Places, Reels)
│   ├── Search Bar
│   │   ├── Results: Accounts, Tags, Places, Audio
│   │   └── Recent Searches
│   ├── Hashtag Page
│   │   ├── Top Posts (grid)
│   │   ├── Recent Posts
│   │   ├── Related Hashtags
│   │   └── Post Count
│   └── Location Page
│       ├── Map
│       ├── Top Posts
│       └── Recent Posts
├── Reels
│   ├── Full-screen Vertical Feed (swipe up)
│   ├── Per-Reel Overlay
│   │   ├── Right: Like, Comment, Share, Audio, More (⋯)
│   │   ├── Bottom: @Creator, Caption, Audio Name
│   │   └── Follow Button (inline)
│   ├── Reel Detail (comments, share, save)
│   └── Audio Page (all Reels using this sound)
├── Create
│   ├── Post (photo/video/carousel)
│   │   ├── Select from Gallery (multi-select for carousel up to 10)
│   │   ├── Camera Capture
│   │   ├── Edit
│   │   │   ├── Filters (Clarendon, Juno, Valencia, etc.)
│   │   │   ├── Adjustments (brightness, contrast, saturation, warmth, etc.)
│   │   │   ├── Crop / Rotate
│   │   │   └── Cover Image (for video)
│   │   └── Share Screen
│   │       ├── Caption + @mentions + #hashtags
│   │       ├── Tag People (in photo)
│   │       ├── Add Location
│   │       ├── Add Music
│   │       ├── Alt Text (accessibility)
│   │       ├── Audience (Everyone / Close Friends)
│   │       ├── Advanced: Hide Likes, Turn Off Commenting
│   │       ├── Reminder (set event reminder)
│   │       ├── Share to Facebook (cross-post)
│   │       └── Product Tags (Shopping)
│   ├── Reel
│   │   ├── Record (multi-clip, timer, speed)
│   │   ├── Audio (add music/sound before or after)
│   │   ├── Effects / AR Filters
│   │   ├── Edit (trim, reorder clips, text, stickers, draw)
│   │   ├── Voiceover
│   │   ├── Auto-Captions
│   │   └── Share (caption, tags, cover, topic)
│   ├── Story
│   │   ├── Photo / Video / Boomerang / Layout / Hands-Free
│   │   ├── Stickers
│   │   │   ├── Poll, Quiz, Question, Countdown, Emoji Slider
│   │   │   ├── Music, GIF, Mention, Hashtag, Location
│   │   │   ├── Link (any account), Product
│   │   │   ├── Add Yours (collaborative template)
│   │   │   └── AI-generated stickers
│   │   ├── Text Overlay (fonts, colors, animation)
│   │   ├── Drawing Tools (marker, neon, eraser)
│   │   ├── Filters / AR Effects
│   │   └── Share (Your Story / Close Friends / DM)
│   └── Broadcast Channel (one-to-many messages)
├── Stories Viewer
│   ├── Full-screen Story (photo/video)
│   ├── Tap Left/Right (navigate within user's stories)
│   ├── Swipe Left/Right (navigate between users)
│   ├── Swipe Up / Link Tap
│   ├── Reply (message to author)
│   ├── React (emoji reactions)
│   ├── Story Interactions (poll, quiz, question — tap to participate)
│   └── Story Insights (for creators: views, interactions)
├── Post Detail
│   ├── Photo(s) / Video / Reel
│   ├── Author (avatar, username)
│   ├── Like Count (hideable by author)
│   ├── Caption (#hashtags, @mentions, tagged accounts)
│   ├── Comments (threaded, pinned by author)
│   │   ├── Like on Comments
│   │   ├── Reply (nested)
│   │   ├── Translate Comment
│   │   └── Report / Delete
│   ├── Timestamp
│   ├── Location Link
│   ├── Tagged People
│   ├── Product Tags (tap to view/buy)
│   └── Actions: Like, Comment, Share, Save to Collection
├── Profile
│   ├── Header
│   │   ├── Avatar (tap for Story ring)
│   │   ├── Username, Name
│   │   ├── Bio (150 chars, links, pronouns, category)
│   │   ├── External Link
│   │   ├── Action Buttons: Follow, Message, Contact (email/phone/directions)
│   │   └── Stats: Posts, Followers, Following
│   ├── Story Highlights Row (persistent, circular icons)
│   ├── Content Tabs
│   │   ├── Grid (3-column, default)
│   │   ├── Reels
│   │   └── Tagged
│   ├── Pinned Posts (up to 3, pinned to top of grid)
│   ├── Saved (own profile only, private)
│   │   ├── All Saved
│   │   └── Collections (user-created folders)
│   ├── Professional Dashboard (creator/business accounts)
│   │   ├── Insights (reach, accounts engaged, content performance)
│   │   ├── Tools (promotions, branded content, shopping)
│   │   └── Resources (tips, guides)
│   └── Profile Type: Personal / Creator / Business
├── Direct Messages (DMs)
│   ├── Primary Inbox (people you follow back)
│   ├── General Inbox (requests from non-followers)
│   ├── Conversation Thread
│   │   ├── Text, Photos, Videos, GIFs, Voice Messages
│   │   ├── Share Post / Reel / Profile / Location
│   │   ├── Reactions (double-tap, emoji)
│   │   ├── Reply to specific message (thread)
│   │   ├── Vanish Mode (disappearing messages)
│   │   └── Video/Voice Call (inline)
│   ├── Group Chats (up to 250 people)
│   ├── Notes (short-form status visible on DM list)
│   ├── Channels (creator → followers broadcasts)
│   └── Message Requests (non-followers)
├── Activity / Notifications
│   ├── Likes (on your posts)
│   ├── Comments
│   ├── Follows (new followers)
│   ├── Mentions (@mentions in posts/stories/comments)
│   ├── Tags (photo tags)
│   ├── Requests (follow requests for private accounts)
│   ├── Live (someone you follow is live)
│   └── Shopping (order updates)
├── Instagram Shopping
│   ├── Shop Tab (product browsing by category)
│   ├── Product Detail Page (images, price, description)
│   ├── Collections (curated by brands)
│   ├── Wishlist
│   ├── In-Feed Product Tags (tap on post → product)
│   ├── Live Shopping
│   └── Checkout (in-app or redirect to brand website)
├── Instagram Live
│   ├── Go Live (create)
│   │   ├── Title, Audience, Practice Mode
│   │   ├── Add Co-broadcaster (up to 3 in Live Rooms)
│   │   ├── Filters
│   │   ├── Q&A, Donations
│   │   └── Shopping (pin products)
│   ├── Watch Live
│   │   ├── Real-time Video
│   │   ├── Comments (scrolling)
│   │   ├── Hearts (tap to send)
│   │   ├── Request to Join
│   │   └── Share
│   └── Live Replay (saved to Reels or archive)
├── Settings
│   ├── Edit Profile (name, username, bio, avatar, pronouns, links)
│   ├── Professional Dashboard (creator/business)
│   ├── Account (personal info, verification, branded content)
│   ├── Privacy
│   │   ├── Account Privacy (Public / Private)
│   │   ├── Close Friends List
│   │   ├── Blocked Accounts
│   │   ├── Restricted Accounts
│   │   ├── Hidden Words (comment filter)
│   │   ├── Story (hide from, close friends, sharing)
│   │   ├── Comments (allow from: everyone/followers/off)
│   │   ├── Tags & Mentions
│   │   ├── Messages (who can message you)
│   │   ├── Activity Status (online indicator)
│   │   └── Reels & Remix
│   ├── Notifications (granular per type + per account)
│   ├── Security (password, 2FA, login activity, emails from IG)
│   ├── Ads (ad preferences)
│   ├── Supervision (parental controls)
│   ├── Content Preferences (sensitive content, liked/saved, political content)
│   ├── Your Activity (time spent, daily reminder, quiet mode)
│   ├── Accessibility (alt text, captions, reduce motion)
│   ├── Help
│   └── About
└── Threads Integration (cross-post, link in bio)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 5 tabs, always visible | Home (🏠), Search (🔍), Create (➕), Reels (🎬), Profile (👤) |
| **Top Bar (Home)** | Logo (left) + Likes (❤️) + DMs (✉️ with badge) | Contextual per screen |
| **Stories Bar** | Horizontal scroll, top of Home feed | Circular avatars with color ring (unseen=gradient, seen=gray, close friends=green) |
| **Post Actions** | Below each post, horizontal | Like ❤️, Comment 💬, Share ➤, Save 🔖 |
| **Profile Tabs** | Icon tabs below highlights | Grid (▦), Reels (🎬), Tagged |
| **Desktop Sidebar** | Left sidebar (≥1024px) | Home, Search, Explore, Reels, Messages, Notifications, Create, Profile |
| **Reels Feed** | Full-screen vertical swipe | Same as TikTok-style: swipe up for next |
| **Create (+)** | Center tab, opens creation flow | Bottom sheet: Post, Reel, Story, Live, Story Highlight |

### Mobile Layout
```
┌─────────────────────────────────┐
│  [Instagram]        [❤️] [✉️3] │  ← top bar
│  (●)(○)(○)(○)(○)(○)(○)→        │  ← stories bar
├─────────────────────────────────┤
│  [Avatar] username  [•••]      │
│  ┌───────────────────────────┐ │
│  │                           │ │
│  │      [Photo/Video]        │ │
│  │                           │ │
│  └───────────────────────────┘ │
│  ❤️ 💬 ➤              🔖      │  ← actions
│  1,234 likes                   │
│  username Caption text...      │
│  View all 89 comments          │
│  2 HOURS AGO                   │
├─────────────────────────────────┤
│ 🏠 Home|🔍|➕|🎬 Reels|👤 Prof│  ← tab bar
└─────────────────────────────────┘
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Post | media[] (photos/videos up to 10 carousel), caption (2,200 chars), location, filter, likes_count, comments_count, created_at, like_count_hidden (bool), comments_disabled (bool), tagged_users[], product_tags[] | belongs to User; has Comments, Likes, Saves |
| Media | url, type (image/video), width, height, alt_text, order (carousel position), aspect_ratio (1:1/4:5/16:9) | belongs to Post |
| Story | media (photo/video/boomerang), stickers[], text_overlays[], drawing[], duration, expires_at (24h from creation), viewer_list[] | belongs to User |
| StoryHighlight | name, cover_image, stories[] | belongs to User (persistent on profile) |
| Reel | video_url, audio, caption, duration (up to 90s), cover_image, likes_count, views_count, shares_count, comments_count | belongs to User |
| Comment | text, likes_count, created_at, pinned (bool) | belongs to Post/Reel and User; can be nested (1 level of replies) |
| Like | created_at | belongs to User and Post/Reel/Comment |
| Save | post, collection | belongs to User |
| SavedCollection | name, cover_image | belongs to User; has many saved Posts |
| User | username, display_name, avatar, bio, website, is_private, is_verified, account_type (personal/creator/business), followers_count, following_count, posts_count, pronouns, category | has many Posts, Stories, Reels, Highlights |
| Follow | follower_id, following_id, status (active/pending for private accounts), close_friend (bool) | connects Users |
| Hashtag | name, post_count, top_posts[] | many-to-many with Posts |
| Location | name, lat, lng, address | many-to-many with Posts/Stories |
| Audio | name, artist, original_creator, reels_count | used by many Reels |
| BroadcastChannel | name, creator, subscribers_count, messages[] | belongs to Creator User |
| Note | text (60 chars), audio_clip, expires_at (24h) | belongs to User (visible on DM list) |
| Product | name, price, images[], product_url, brand | tagged in Posts/Stories |
| Message | text, media[], reactions[], read, created_at, vanish_mode (bool) | belongs to Conversation |

### Post Types
`single_photo | carousel (up to 10) | video | reel | collab_post (two authors)`

### Media Aspect Ratios
`1:1 (square) | 4:5 (portrait, recommended) | 16:9 (landscape) | 9:16 (Reels/Stories)`

## User Flows

### Browse and Engage
```
Open App → Feed → Scroll → Double-tap to Like → Tap Comment → Write Reply → Back to Feed → View Stories
```

### Post Photo
```
[+] → Select Photo → Apply Filter → Edit Adjustments → Write Caption + Hashtags → Tag People → Add Location → Share
```

### Create Reel
```
[+] → Reel → Select Audio → Record Clips → Add Effects/Text → Edit → Write Caption → Share → Appears in Feed + Reels Tab
```

### Watch Stories
```
Feed → Tap Story Avatar (ring) → Full-screen Story → Tap Right (next) → Interact (poll/quiz) → Reply → Swipe to Next User
```

### Explore and Discover
```
Explore Tab → Trending Grid → Tap Photo/Reel → Like/Save → View Profile → Follow → Their Content in Feed
```

### Save and Organize
```
Post → Bookmark (🔖) → Saved → Create Collection → Add to Collection → Browse Collections Later
```

### Shopping
```
Feed → Tap Product Tag on Post → Product Detail → View on Website / Add to Wishlist → Checkout
```

### Go Live
```
Create → Live → Set Title → Go Live → Viewers Join → Comments/Hearts → Invite Guest → End → Share to Reels
```

## URL / Route Structure

```
/                              → Home Feed
/explore                       → Explore / Discover
/explore/tags/:tag             → Hashtag Page
/explore/locations/:id         → Location Page
/reels                         → Reels Feed
/reels/audio/:audioId          → Audio Page
/p/:postId                     → Post Detail
/reel/:reelId                  → Reel Detail
/:username                     → User Profile (Grid)
/:username/reels               → User Reels
/:username/tagged              → Tagged Posts
/:username/saved               → Saved Posts (own profile, private)
/:username/followers            → Followers List
/:username/following            → Following List
/:username/channel              → Broadcast Channel
/direct/inbox                  → DM Inbox
/direct/t/:threadId            → DM Conversation
/stories/:username             → Current Stories
/stories/:username/:storyId    → Specific Story
/accounts/edit                 → Edit Profile
/accounts/settings             → Settings
/accounts/privacy              → Privacy Settings
/accounts/professional-account → Creator/Business Dashboard
/search?q=:query               → Search Results
/create                        → Create (desktop)
/live/:username                → Live Stream
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Accounts, Tags, Places, Audio, Reels | Content Type tabs | Relevance (algorithmic) |
| Explore | Trending posts/reels | Topic chips (category) | Trending (algorithmic) |
| Hashtag Page | Posts with tag | — | Top, Recent |
| Location Page | Posts at location | — | Top, Recent |
| Profile | User's posts | Tab (Grid/Reels/Tagged) | Chronological (grid layout) |
| Saved | Bookmarked posts | Collection | Saved Date |
| DMs | Messages, accounts | — | Recent |

## Responsive Behavior

| Breakpoint | Nav | Feed | Profile Grid |
|------------|-----|------|-------------|
| Desktop (≥1024px) | Left sidebar (icons + labels) | Center feed (max 470px post width) + right suggestions | 3-column grid |
| Tablet (768–1023px) | Left icon sidebar (no labels) | Center feed | 3-column grid |
| Mobile (<768px) | Bottom tab bar (5 tabs) | Full-width feed | 3-column grid (tight, no gap) |

### Mobile-First Patterns
- Camera-first: [+] launches photo/video picker or camera
- Double-tap to like with heart animation overlay
- Swipe gestures in carousel posts
- Pull-to-refresh feed
- Stories: full-screen, hold to pause, tap left/right to navigate
- Reels: full-screen vertical swipe (TikTok-style)
- Image loading: progressive blur → sharp (LQIP)
- Haptic feedback on actions (like, send)
- Dark mode (system-aware or manual)

## Access Control

| Role | Browse | Post | Comment | Message | Stories | Reels | Shopping |
|------|--------|------|---------|---------|---------|-------|----------|
| Unauthenticated | Public profiles/posts only (limited) | — | — | — | — | — | — |
| Personal Account | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Browse |
| Private Account | ✅ | Followers only see content | ✅ | ✅ | Followers only | Followers only (or public if shared to Reels) | Browse |
| Creator Account | ✅ | ✅ + Insights | ✅ | ✅ + Primary/General inbox | ✅ + Insights | ✅ + Insights, Remix settings | ✅ + Product tagging, Branded Content |
| Business Account | ✅ | ✅ + Ads, Promotions | ✅ | ✅ + Quick Replies, Auto-response | ✅ + Shopping | ✅ + Shopping | ✅ + Catalog, Checkout, Ads |
| Verified (blue check) | ✅ | ✅ + Verified badge | ✅ | ✅ | ✅ | ✅ | ✅ |
| Admin (Meta) | ✅ | Full control | Moderate | ✅ | ✅ | ✅ | Platform moderation |

### Privacy Controls (User-configurable)
- Account privacy: Public / Private (requires follow approval)
- Story visibility: Everyone / Close Friends / Custom
- Reel remixing: Allow / Don't Allow
- Comment controls: Everyone / Followers / Followers + Following / Off
- Who can tag you: Everyone / Followers / No one
- Message requests: Everyone / Followers + people in your contacts
- Activity status (online): On / Off
- Hide like counts on your posts
- Blocked accounts / Restricted accounts
- Sensitive content control (Explore): More / Standard / Less
