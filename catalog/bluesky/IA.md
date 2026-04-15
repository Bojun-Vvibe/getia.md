---
brand: Bluesky
tagline: Social media as it should be
category: Social & Communication
website: https://bsky.app
---

# Information Architecture — Bluesky

## Overview

Bluesky is a decentralized social network built on the AT Protocol (Authenticated Transfer Protocol), offering a Twitter-like microblogging experience with user sovereignty over data and algorithms. The IA mirrors familiar social feeds — timeline, notifications, profile — but adds protocol-level features like custom feeds, starter packs, domain-based identity verification, and the ability to self-host your data through Personal Data Servers (PDS).

## Site Map

```
Bluesky
├── Home / Timeline
│   ├── Following (chronological)
│   ├── Discover (algorithmic)
│   └── Custom Feeds (user-subscribed)
│       ├── What's Hot
│       ├── Mutuals
│       ├── Quiet Posters
│       └── [Community-built feeds]
├── Search / Explore
│   ├── Trending Topics
│   ├── Trending Posts
│   ├── Suggested Follows
│   └── Search (posts, users, feeds)
├── Notifications
│   ├── Likes
│   ├── Reposts
│   ├── Replies
│   ├── Mentions
│   ├── Follows
│   └── Quotes
├── Messages (DMs)
│   ├── Conversations
│   └── Message Requests
├── Feeds (custom feed browser)
│   ├── My Feeds (pinned)
│   ├── Discover Feeds
│   └── Feed detail (preview + subscribe)
├── Lists
│   ├── Curation Lists
│   ├── Moderation Lists (mute/block)
│   └── List detail
├── Starter Packs
│   ├── My Starter Packs
│   └── Starter Pack detail (follow all)
├── Profile
│   ├── Posts
│   ├── Replies
│   ├── Media
│   ├── Likes
│   ├── Feeds (created)
│   ├── Lists (created)
│   ├── Starter Packs (created)
│   ├── Followers / Following
│   └── Domain handle (identity)
├── Settings
│   ├── Account
│   ├── Privacy
│   ├── Moderation
│   │   ├── Content Filters
│   │   ├── Muted Words
│   │   ├── Muted Accounts
│   │   ├── Blocked Accounts
│   │   └── Moderation Lists
│   ├── App Passwords
│   ├── Handle Change
│   └── Export Data
└── Web / Docs
    ├── AT Protocol Documentation
    ├── Developer API
    ├── Community Guidelines
    └── Blog
├── Hashtags / Topics
│   ├── Trending hashtags
│   └── Hashtag feed (posts using tag)
├── Compose
│   ├── Text (300 chars)
│   ├── Images (up to 4)
│   ├── Video
│   ├── Link card preview
│   ├── Alt text (accessibility)
│   ├── Content warning labels
│   └── Language tag
```

## Navigation Model

- **Type**: Left sidebar (desktop) / bottom tab bar (mobile)
- **Desktop Sidebar**: Home, Search, Notifications, Messages, Feeds, Lists, Profile, Settings
- **Mobile Bottom Tabs**: Home, Search, Notifications, Messages, Profile
- **Feed Switcher**: Horizontal tabs at top of Home — Following, Discover, pinned custom feeds
- **Compose**: Floating "+" button (mobile) / "New Post" button in sidebar (desktop)
- **Thread Navigation**: Tap post → thread view with parent and replies

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Post | text (300 chars), images (4 max), video, link card, language tag, timestamp, like/repost/reply counts | → Thread, → Author, → Feed(s) |
| Reply | inherits Post + parent reference, root reference | → Thread, → Parent Post |
| Repost | reference to original post, timestamp | → Post, → User |
| Quote Post | inherits Post + embedded quoted post | → Original Post |
| Custom Feed | name, description, algorithm (feed generator), creator, like count | → Posts (filtered/sorted) |
| List | name, description, type (curation/moderation), members | → Users |
| Starter Pack | name, description, included users, included feeds, creator | → Users, → Feeds |
| User Profile | display name, handle (domain-based), avatar, banner, bio, follower/following counts | → Posts, → Feeds, → Lists |
| Label | type (content warning, moderation), source (labeler service) | → Post, → User |
| DM Conversation | participants[], messages[], last_message_at | → Users |
| Message | text, sender, timestamp, read | → DM Conversation |
| Muted Word | keyword, targets (tags/text), created_at | → User settings |

## User Flows

### Custom Feed Discovery
```
Tap "Feeds" in nav → Browse "Discover Feeds" section → Preview feed (see sample posts) → Tap "Pin" to add to home tab bar → Return to Home → Swipe between Following, Discover, and pinned custom feeds → Reorder or unpin feeds in Settings → Saved Feeds
```

### Setting Up Domain Handle
```
Go to Settings → Handle → "I have my own domain" → Add DNS TXT record `_atproto.{domain}` with DID value → Verify → Handle changes from `user.bsky.social` to `user.com` → Domain serves as decentralized identity verification
```

### Using Starter Packs
```
Receive starter pack link from another user → Open link → See list of recommended accounts and feeds → Tap "Follow All" → Instantly follow all accounts in pack → Subscribed feeds added to Home feed tabs
```

### Content Moderation
```
Settings → Moderation → Content Filters → Toggle categories (adult, violence, spam) → Subscribe to labeler services → Customize per-labeler preferences → Muted Words → Add keywords → Posts with those words hidden from all feeds
```

### Creating a List
```
Profile → Lists → New List → Choose type (Curation / Moderation) → Add members by handle → Name and describe → Publish
                                                                                                                                     ↘ Curation list: others can follow as a feed
                                                                                                                                     ↘ Moderation list: others can subscribe to mute/block
```
## URL / Route Structure

```
bsky.app/                                  # Home / timeline
bsky.app/profile/{handle}                  # User profile
bsky.app/profile/{handle}/post/{postId}    # Post / thread detail
bsky.app/profile/{handle}/feed/{feedSlug}  # Custom feed
bsky.app/profile/{handle}/lists/{listId}   # List detail
bsky.app/starter-pack/{handle}/{packId}    # Starter pack
bsky.app/search?q={query}                  # Search results
bsky.app/feeds                             # Feed discovery
bsky.app/notifications                     # Notifications
bsky.app/messages                          # DMs
bsky.app/settings                          # Settings
docs.bsky.app/                             # Developer documentation
bsky.app/profile/{handle}/followers     # Followers list
bsky.app/profile/{handle}/follows        # Following list
bsky.app/profile/{handle}/media          # Media posts
bsky.app/profile/{handle}/likes          # Liked posts
bsky.app/hashtag/{tag}                   # Hashtag feed
bsky.app/settings/account                # Account settings
bsky.app/settings/privacy                # Privacy settings
bsky.app/settings/moderation             # Moderation settings
bsky.app/settings/app-passwords          # App passwords
bsky.app/settings/saved-feeds            # Manage pinned feeds
bsky.app/lists                           # All lists
bsky.app/starter-packs                   # Browse starter packs
bsky.app/moderation/muted-accounts       # Muted accounts
bsky.app/moderation/blocked-accounts     # Blocked accounts
bsky.app/moderation/muted-words          # Muted words
```

## Search & Filter

- **Universal Search**: Posts (full-text), users (handle/display name), feeds
- **Trending**: Trending topics and posts on Explore tab
- **Post Filters**: Search results filterable by "Latest" or "Top"; filter by language
- **Content Filters**: User-configurable content labels (adult, violence, etc.) via moderation settings
- **Muted Words**: Keyword-based muting hides posts containing specified terms
- **Feed Algorithms**: Custom feeds act as persistent search/filter — e.g., "Posts with images from mutuals"
- **Moderation Lists**: Subscribe to community-maintained block/mute lists
- **Hashtag search**: Browse posts by hashtag/topic
- **User discovery**: Suggested follows based on social graph and interests

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | Bottom tab bar; single-column feed; full-screen thread view; swipe between feed tabs |
| Tablet (768–1024px) | Bottom tab bar; wider feed column; optional right sidebar for trending |
| Desktop (> 1024px) | Left sidebar navigation; centered feed column; right sidebar (trending, suggested follows) |
| PWA | Installable progressive web app; notifications support; works offline for cached content |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads
- Labeler services enable community-driven content moderation beyond the platform defaults

## Access Control

| Role | Capabilities |
|---|---|
| Registered User | Post, reply, repost, quote, like, DM, create feeds/lists/starter packs, customize moderation |
| Custom Handle User | Uses own domain as handle; serves as verification (no separate verification system) |
| Feed Generator Operator | Hosts feed algorithm; defines ranking/filtering logic via AT Protocol feed generator API |
| Labeler Service | Applies moderation labels to content/accounts; users can subscribe to labeler services |
| PDS Self-Hoster | Hosts own data server; full data sovereignty; can migrate between providers |
| Non-registered Visitor | View public profiles and posts on bsky.app; cannot interact |
| Muted/Blocked User | Muted: posts hidden from muter's feeds; Blocked: cannot view or interact with blocker |
| App Password Holder | Third-party app access with limited permissions; revocable from settings |
