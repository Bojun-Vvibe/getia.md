---
brand: Twitter/X
tagline: "What's happening. Real-time microblogging platform for news, discourse, and public conversation."
category: Social
website: https://x.com
---

# Twitter/X — Information Architecture

## Overview

A real-time microblogging and public conversation platform (rebranded from Twitter to X in 2023). The mental model is a **public town square** — short posts (originally 140 characters, now up to 25,000 for Premium) flow in a timeline, with replies creating threaded conversations. Unlike Facebook's friend-graph, Twitter/X is interest-graph and follow-based: you follow anyone, and content spreads through retweets/reposts. Key differentiators: real-time news and discourse, quote tweets, threads (multi-post storytelling), Spaces (live audio), X Premium (verification + features), Communities, long-form articles (X Articles), and the "For You" algorithmic timeline vs "Following" chronological timeline.

## Site Map

```
├── Home / Timeline
│   ├── For You (algorithmic, default)
│   ├── Following (chronological from followed accounts)
│   ├── Custom Lists (user-curated feeds)
│   └── Post Composer (inline, top of feed)
│       ├── Text (up to 280 chars free / 25,000 Premium)
│       ├── Media (images up to 4, GIF, video)
│       ├── Poll
│       ├── Schedule
│       ├── Location
│       ├── Audience (Everyone / Circle / X Premium subscribers)
│       └── Reply Settings (Everyone / Following / Verified / Mentioned)
├── Explore
│   ├── Trending (per country/region)
│   │   ├── Trending Topics (#hashtags, keywords)
│   │   ├── Trending in [Location]
│   │   └── Trend Category (Politics, Entertainment, Sports, etc.)
│   ├── Tabs: For You, Trending, News, Sports, Entertainment
│   ├── Search Bar (top)
│   └── Live Events
├── Search
│   ├── Top (mixed results, algorithmic)
│   ├── Latest (chronological)
│   ├── People
│   ├── Media (images/videos)
│   ├── Lists
│   └── Advanced Search (from, to, mentions, dates, engagement minimums, filters)
├── Notifications
│   ├── All
│   ├── Verified (only from verified accounts)
│   ├── Mentions
│   ├── Types: Likes, Reposts, Replies, Follows, Quote Tweets, Polls, Spaces
│   └── Quality Filter (hide low-quality notifications)
├── Messages (DMs)
│   ├── Conversations List
│   ├── Message Requests (from non-followers)
│   ├── Conversation Thread
│   │   ├── Text, Images, GIFs, Videos, Voice Messages
│   │   ├── Reactions (emoji on messages)
│   │   └── Encrypted DMs (X Premium)
│   ├── Group Conversations
│   └── New Message
├── Post Detail / Thread
│   ├── Original Post (full text, media, engagement stats)
│   ├── Thread Context (show above posts if this is a reply)
│   ├── Engagement Stats (reposts, quotes, likes, bookmarks, views)
│   ├── Reply Thread (chronological or "Most relevant")
│   │   ├── Sort: Most Recent / Most Liked
│   │   └── "Show more replies" / "Show probably bad replies"
│   ├── Actions: Reply, Repost, Quote, Like, Bookmark, Share, Analytics
│   └── Translate Post (if in different language)
├── Profile
│   ├── Banner, Avatar, Name, @Handle, Bio, Link, Location, Join Date
│   ├── Verification Badge (blue = X Premium, gold = organization, gray = government)
│   ├── Stats: Following, Followers, Verified Followers count
│   ├── Follow / Following Button, Message, Notifications Bell, ⋯ More
│   ├── Tabs: Posts, Replies, Highlights, Articles, Media, Likes
│   ├── Pinned Post
│   └── Creator Subscriptions (subscribe to this creator for exclusive content)
├── Lists
│   ├── Your Lists (created)
│   ├── Lists You're On
│   ├── Pinned Lists (appear as tabs on Home)
│   ├── Discover Lists (suggested)
│   ├── List Detail
│   │   ├── Members
│   │   ├── Timeline (posts from list members only)
│   │   └── Follow List
│   └── Create List (name, description, public/private, add members)
├── Bookmarks
│   ├── All Bookmarked Posts
│   ├── Bookmark Folders (X Premium)
│   └── Sort: Date Saved
├── Communities
│   ├── Discover Communities
│   ├── Your Communities
│   ├── Community Page
│   │   ├── Community Timeline
│   │   ├── Members
│   │   ├── Rules
│   │   ├── Moderators
│   │   └── Join / Leave
│   └── Post to Community
├── Spaces (Live Audio)
│   ├── Live Spaces (happening now)
│   ├── Upcoming Spaces (scheduled)
│   ├── Create Space
│   │   ├── Title, Scheduled Time
│   │   ├── Hosts, Speakers, Listeners
│   │   ├── Request to Speak
│   │   ├── Reactions (emojis)
│   │   ├── Captions (auto-generated)
│   │   └── Recording (optional)
│   └── Space Recordings (replay)
├── X Premium (Subscription)
│   ├── Basic / Premium / Premium+ Tiers
│   ├── Blue Checkmark
│   ├── Longer Posts (25,000 chars)
│   ├── Edit Post (within time window)
│   ├── Undo Post
│   ├── Bookmark Folders
│   ├── Reader Mode (thread unrolling)
│   ├── Ad-free or reduced ads
│   ├── Revenue Sharing (for eligible creators)
│   ├── Grok AI Access
│   └── Priority Ranking in replies
├── Monetization (Creators)
│   ├── Creator Subscriptions (followers pay monthly for exclusive content)
│   ├── Tips (one-time payments)
│   ├── Ads Revenue Sharing
│   ├── Super Follows (legacy)
│   └── Ticketed Spaces
├── Grok (AI Assistant)
│   ├── Chat with Grok (conversational AI)
│   ├── Trending Analysis
│   └── Image Generation
├── Settings
│   ├── Account (username, email, phone, deactivation)
│   ├── Security & Account Access (password, 2FA, apps, sessions)
│   ├── Monetization
│   ├── X Premium
│   ├── Privacy & Safety
│   │   ├── Audience & Tagging (protect your posts)
│   │   ├── Content You See (topics, muted words)
│   │   ├── Mute & Block
│   │   ├── DMs (who can message you)
│   │   ├── Discoverability (email/phone lookup)
│   │   └── Ads Preferences
│   ├── Notifications (per type: push, email, SMS)
│   ├── Accessibility, Display & Languages
│   │   ├── Font Size
│   │   ├── Color Theme (dim, lights out, default)
│   │   ├── Background Color
│   │   └── Reduce Motion
│   ├── Additional Resources (about, TOS, privacy policy)
│   └── Help Center
└── Analytics (creators)
    ├── Post Analytics (impressions, engagements, link clicks, profile visits)
    ├── Audience Insights (demographics, interests)
    ├── Video Analytics (views, completion rate)
    └── Revenue Dashboard
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Desktop: fixed, icon + label | Home, Explore, Notifications (badge), Messages (badge), Grok, Lists, Bookmarks, Communities, Premium, Profile, More (dropdown) |
| **Bottom Tab Bar** | Mobile: 5 tabs | Home, Search, Grok, Notifications, Messages |
| **Feed Toggle** | Horizontal tabs on Home | "For You" / "Following" / [Pinned Lists] |
| **Floating Compose** | FAB (mobile) or sidebar button (desktop) | "Post" button, always accessible |
| **Post Actions** | Inline below each post | Reply, Repost (repost/quote), Like, Bookmark, Share (copy link, DM, other apps), View Analytics |
| **Right Sidebar** | Desktop only | Search bar, Trends, Who to Follow, footer links |
| **Profile Tabs** | Horizontal tabs on profile | Posts / Replies / Highlights / Articles / Media / Likes |

### Desktop Layout
```
[Left Sidebar (275px)]  |  [Timeline (600px)]  |  [Right Sidebar (350px)]
─────────────────────────────────────────────────────────────────
🏠 Home                 |  [For You | Following]| 🔍 Search
🔍 Explore              |  ─────────────────    | ─────────────
🔔 Notifications (●)    |  [Post Composer]      | Trends for you
✉️ Messages (●)          |  ─────────────────    |  1. #Topic
🤖 Grok                 |  [Post]               |  2. Trending
📋 Lists                |  [Post]               |  3. Sports ·
🔖 Bookmarks            |  [Post]               | ─────────────
👥 Communities           |  [Post]               | Who to follow
✨ Premium               |  ...                  |  @user1 [Follow]
👤 Profile               |                       |  @user2 [Follow]
─────────────            |                       | ─────────────
[Post] (button)          |                       | Terms · Privacy
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Post (Tweet) | text (280/25K chars), media[] (images/video/GIF), poll, created_at, views_count, likes_count, repost_count, quote_count, reply_count, bookmark_count, visibility (everyone/circle/subscribers), reply_settings, conversation_id, language, source (app/web/api), edited (bool), edit_history[] | belongs to User; has Replies, Quotes, Media |
| User | username (@handle), display_name, avatar, banner, bio, location, website, join_date, followers_count, following_count, verified_type (none/blue/gold/gray), is_private (protected), pinned_post | has many Posts, Lists, Communities |
| Reply | same as Post, but in_reply_to_post_id set | belongs to Post (thread) and User |
| Repost | original_post_id, reposted_at | belongs to User (amplification, no commentary) |
| Quote | text + quoted_post_id | belongs to User (repost with commentary) |
| Like | created_at | belongs to User and Post |
| Bookmark | created_at, folder (Premium) | belongs to User and Post |
| Follow | follower_id, following_id, created_at, notifications (bool) | connects Users |
| List | name, description, public/private, member_count, follower_count | belongs to User, has many Members (Users) |
| Community | name, description, rules[], members_count, created_at | has many Members, Moderators, Posts |
| Space | title, host, speakers[], listeners_count, scheduled_at, recording_url | belongs to User (host) |
| DM | text, media[], reactions[], read, created_at | belongs to Conversation |
| Conversation (DM) | participants[], last_message, unread_count | has many DMs |
| Hashtag | name, post_count, trending_position | many-to-many with Posts |
| Poll | options[], duration, votes_count, ended_at | belongs to Post |
| Trend | name, tweet_count, category, location | global and per-region |

### Post Types
`text | image (1-4) | video | GIF | poll | thread | quote | article (Premium) | voice`

### Verification Types
```
Blue Checkmark: X Premium subscriber (paid)
Gold Checkmark: Organization (business/brand)
Gray Checkmark: Government / multilateral organization
```

## User Flows

### Content Consumption
```
Open App → For You Timeline → Scroll → Like (tap heart) → Tap Post → Full Thread → Reply → Back to Feed
```

### Post Creation
```
[+ Post] → Compose Text → Add Media/Poll/GIF → Set Reply Settings → Post → Appears in Followers' Timelines
```

### Thread Creation
```
[+ Post] → Write First Post → [+] Add Another → Write Second → Continue → Post All → Thread Published
```

### Discover via Trending
```
Explore → Trending Tab → Tap Trend → Latest Posts About Topic → Engage → Follow Interesting Accounts
```

### Quote Tweet (Repost with Commentary)
```
See Post → Repost → Quote → Add Your Take → Post → Original + Your Commentary Visible
```

### Spaces (Live Audio)
```
Explore → Spaces → Join → Listen → Request to Speak → Approved → Speak → React → Leave
```

### Search Power User
```
Explore → Search → Type query → "Advanced Search" → Filter (from:@user since:2024-01-01 min_faves:100) → Results
```

## URL / Route Structure

```
/                              → Home Timeline
/home                          → Home (explicit)
/explore                       → Explore / Trending
/explore/tabs/:category        → Explore Category (news, sports, etc.)
/search?q=:query               → Search Results
/search?q=:query&f=live        → Search Latest
/search?q=:query&f=user        → Search People
/search?q=:query&f=media       → Search Media
/notifications                 → Notifications
/notifications/mentions         → Mentions Only
/messages                      → DMs List
/messages/:conversationId      → DM Thread
/:username                     → User Profile (Posts tab)
/:username/with_replies        → User Replies
/:username/highlights          → User Highlights
/:username/articles            → User Articles (Premium)
/:username/media               → User Media
/:username/likes               → User Likes
/:username/followers           → Followers List
/:username/following           → Following List
/:username/status/:postId      → Post Detail / Thread
/:username/lists               → User's Lists
/i/lists/:listId               → List Timeline
/i/lists/:listId/members       → List Members
/i/communities/:id             → Community Page
/i/spaces/:spaceId             → Space (Live Audio)
/i/bookmarks                   → Bookmarks
/i/grok                        → Grok AI
/compose/post                  → Compose (mobile deep link)
/settings                      → Settings
/settings/account              → Account Settings
/settings/privacy_and_safety   → Privacy & Safety
/settings/notifications        → Notification Preferences
/settings/accessibility_display → Display Settings
/analytics                     → Analytics Dashboard
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Posts, Users, Media, Lists | Tab (Top/Latest/People/Media/Lists) | Top (algorithmic), Latest (chronological) |
| Advanced Search | Posts | From (user), To (user), Mentioning, Date Range (since/until), Min Replies/Likes/Reposts, Language, Exact Phrase, Exclude Words, Has (links/media) | Relevance, Latest |
| Explore | Trending topics | Category (For You/Trending/News/Sports/Entertainment), Location | Trending (algorithmic) |
| Notifications | Activity about you | Type (All/Verified/Mentions) | Chronological |
| Messages | DM content, people | — | Recent |

### Search Operators (Power Users)
```
from:@username     → Posts by specific user
to:@username       → Replies to specific user
@username          → Mentioning specific user
since:2024-01-01   → After date
until:2024-12-31   → Before date
min_faves:100      → Minimum likes
min_retweets:50    → Minimum reposts
has:links          → Contains URLs
has:media          → Contains images/video
has:videos         → Contains video
"exact phrase"     → Exact match
-word              → Exclude word
filter:follows     → Only from people you follow
lang:en            → Language filter
```

## Responsive Behavior

| Breakpoint | Nav | Feed | Sidebar |
|------------|-----|------|---------|
| Desktop (≥1280px) | Left sidebar (full labels) | Center timeline (max 600px) | Right sidebar (trends, suggestions) |
| Laptop (1024–1279px) | Left sidebar (icons + labels, compact) | Center timeline | Right sidebar (reduced) |
| Tablet (768–1023px) | Left icon sidebar (no labels) | Center timeline | Hidden |
| Mobile (<768px) | Bottom tab bar (5 tabs) | Full width timeline | Hidden, trends in Explore |

### Mobile Adaptations
- Pull-to-refresh timeline
- Swipe between For You / Following tabs
- FAB (Floating Action Button) for compose
- Post composer: full-screen modal
- Image viewer: pinch-to-zoom, swipe gallery
- Video: inline autoplay (muted), tap for audio
- Haptic feedback on like
- Notification badges on tab bar
- Share sheet integration (share post to other apps)

## Access Control

| Role | Read | Post | Reply | Repost | DM | Spaces | Analytics |
|------|------|------|-------|--------|-----|--------|-----------|
| Unauthenticated | Limited (public posts, rate-limited) | — | — | — | — | Listen only | — |
| Free User | ✅ | ✅ (280 chars, images, GIF, video up to 2:20) | ✅ | ✅ | ✅ | Host + Join | Basic |
| X Premium Basic | ✅ | ✅ (longer posts, edit, bookmark folders) | ✅ + priority | ✅ | ✅ | ✅ | ✅ |
| X Premium | ✅ | ✅ + blue check, 25K chars, articles, reduced ads | ✅ + higher priority | ✅ | Encrypted | ✅ | ✅ + revenue sharing |
| X Premium+ | ✅ (no ads) | ✅ + all Premium features + Grok | ✅ + highest priority | ✅ | ✅ | ✅ | ✅ + full analytics |
| Organization (Gold) | ✅ | ✅ + organization badge, affiliate accounts | ✅ | ✅ | ✅ | ✅ | ✅ + brand analytics |
| Moderator / Admin | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Platform moderation tools |

### Privacy Controls (User-configurable)
- Protected account (tweets visible only to approved followers)
- Who can reply: Everyone / Following / Verified / Mentioned
- Who can DM: Everyone / Verified / No one
- Muted words/accounts (hide without blocking)
- Blocked accounts (complete separation)
- Content filtering (sensitive content toggle)
- Discoverability (find by email/phone: on/off)
