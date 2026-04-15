---
brand: Mastodon
tagline: "Social networking that's not for sale. Decentralized, open-source, federated microblogging."
category: Social (Fediverse)
website: https://joinmastodon.org
---

# Mastodon — Information Architecture

## Overview

A decentralized, open-source microblogging platform and the flagship of the Fediverse (federated universe). Mastodon's mental model is a **network of interconnected communities** — unlike centralized platforms (Twitter, Threads), Mastodon consists of thousands of independently operated "instances" (servers) that communicate via the ActivityPub protocol. Each instance has its own moderation, rules, and community culture, but users can follow and interact across instances seamlessly. Key differentiators: decentralization (no single company controls it), no algorithmic feed (chronological only), no ads, content warnings (CW), 500-character posts ("toots"), granular privacy controls per post, robust moderation tools per instance, and full data portability (move your account between instances).

## Site Map

```
├── Home Timeline
│   ├── Posts from Followed Accounts (chronological, no algorithm)
│   ├── Boosts (reposts from followed accounts)
│   ├── Replies (from followed accounts, if enabled)
│   └── No ads, no algorithmic insertion
├── Local Timeline
│   ├── All Public Posts from Your Instance (chronological)
│   ├── Shows your instance's community activity
│   └── Good for discovering instance neighbors
├── Federated Timeline
│   ├── All Public Posts Your Instance Knows About (from any instance)
│   ├── "Firehose" of the visible Fediverse from your instance's perspective
│   └── Can be overwhelming; useful for broad discovery
├── Explore
│   ├── Trending Posts (instance-level, curated by admins)
│   ├── Trending Hashtags
│   ├── Trending News Links
│   └── Suggested Accounts (instance-curated)
├── Search
│   ├── Posts (full-text, if instance enables it)
│   ├── People (@user@instance.social format)
│   ├── Hashtags (#tag)
│   └── Cross-instance search (limited to known posts)
├── Compose Post ("Toot")
│   ├── Text (up to 500 chars default, some instances allow more)
│   ├── Media (images up to 4, video, audio, poll)
│   ├── Content Warning / Subject (CW, collapsible)
│   ├── Visibility
│   │   ├── 🌐 Public (visible everywhere, all timelines)
│   │   ├── 🔓 Unlisted (visible on profile, not in timelines)
│   │   ├── 🔒 Followers-only (only followers see it)
│   │   └── ✉️ Mentioned Only (direct message, only @mentioned users)
│   ├── Language Selector
│   ├── Poll (multiple choice, single choice, duration)
│   ├── Emoji Picker (custom instance emoji + standard)
│   ├── Scheduled Post (Mastodon 4.2+)
│   ├── Alt Text for Images (strongly encouraged by community)
│   └── Thread (reply to your own post to create a thread)
├── Post Detail
│   ├── Post Content (text, media, CW)
│   ├── Author (avatar, display name, @user@instance)
│   ├── Engagement: Replies Count, Boosts Count, Favorites Count
│   ├── Reply Thread (chronological tree, not algorithmic)
│   ├── Actions
│   │   ├── Reply
│   │   ├── Boost (repost to your followers, public posts only)
│   │   ├── Favorite (★, like)
│   │   ├── Bookmark (private save)
│   │   ├── Share (copy link, embed)
│   │   └── More (⋯): Mute Conversation, Block, Report, Filter, Pin, Delete, Edit
│   ├── Boosted By (list of who boosted)
│   └── Favorited By (list of who favorited)
├── Profile
│   ├── Header Image, Avatar
│   ├── Display Name, @user@instance
│   ├── Bio (rich text, links, custom fields for verification)
│   ├── Metadata Fields (up to 4: website, pronouns, etc., with link verification ✅)
│   ├── Stats: Posts, Following, Followers
│   ├── Follow / Unfollow / Request Follow (if locked account)
│   ├── Tabs: Posts, Posts & Replies, Media, About
│   ├── Pinned Posts (up to 5)
│   ├── Featured Hashtags (shown on profile)
│   └── Moved Account Notice (if migrated to new instance)
├── Notifications
│   ├── All
│   ├── Mentions
│   ├── Favorites
│   ├── Boosts
│   ├── Follows
│   ├── Follow Requests (if account is locked)
│   ├── Polls (your polls ended, polls you voted in ended)
│   ├── Updates (posts from accounts you've enabled notifications for)
│   └── Admin (reports, new sign-ups — for instance admins)
├── Direct Messages
│   ├── Conversations (mentioned-only posts grouped by participants)
│   ├── NOT end-to-end encrypted (visible to instance admins)
│   └── Conversation Thread
├── Bookmarks
│   ├── Private Saved Posts (only visible to you)
│   └── Chronological
├── Favorites
│   ├── Posts You've Favorited
│   └── Chronological
├── Lists
│   ├── User-Created Lists (custom timelines)
│   ├── Add/Remove Accounts to List
│   ├── List Timeline (posts from list members only)
│   └── List Settings (show replies: all/followed/none)
├── Filters
│   ├── Content Filters (keyword/phrase-based)
│   │   ├── Filter Contexts (home, notifications, public, threads, profiles)
│   │   ├── Action: Hide or Warn (show with CW-style toggle)
│   │   ├── Whole Word Match
│   │   └── Expiration (temporary or permanent)
│   └── Manage Filters
├── Hashtag Pages
│   ├── #tag Timeline (all posts with hashtag your instance knows about)
│   ├── Follow Hashtag (posts appear in home timeline)
│   └── Featured Hashtags (show on your profile)
├── Preferences / Settings
│   ├── Appearance
│   │   ├── Interface Language
│   │   ├── Theme (dark, light, high contrast)
│   │   ├── Layout: Single-column (default) / Advanced (multi-column TweetDeck-style)
│   │   ├── Animations (play/pause)
│   │   └── Sensitive Media (always show / always hide)
│   ├── Notifications
│   │   ├── Per-type toggles (mentions, favorites, boosts, follows, polls)
│   │   ├── Email Notifications
│   │   └── Push Notifications
│   ├── Profile
│   │   ├── Display Name, Bio, Avatar, Header
│   │   ├── Profile Metadata Fields (4 custom key-value)
│   │   ├── Bot Account Toggle
│   │   ├── Lock Account (require follow approval)
│   │   ├── Discoverable (opt-in to search / suggestions)
│   │   └── Featured Hashtags
│   ├── Posting Defaults
│   │   ├── Default Visibility (public/unlisted/followers-only)
│   │   ├── Default Language
│   │   ├── Sensitive Media Default
│   │   └── Default Content Type (plain text / Markdown — instance-dependent)
│   ├── Filters (manage keyword filters)
│   ├── Follows and Followers
│   │   ├── Follow Requests (pending)
│   │   ├── Follows / Followers Lists
│   │   └── Relationships (mutual, blocking, muting)
│   ├── Import / Export
│   │   ├── Export: Following list, Blocked list, Muted list, Bookmarks, Lists (CSV)
│   │   ├── Import: Following, Blocks, Mutes (CSV — for migration)
│   │   └── Request Archive (full data export)
│   ├── Account Migration
│   │   ├── Move to Different Instance
│   │   ├── Redirect Profile (old → new)
│   │   └── Followers Auto-migrate
│   ├── Security
│   │   ├── Two-Factor Authentication (TOTP)
│   │   ├── Authorized Applications (OAuth apps)
│   │   └── Active Sessions
│   └── Delete Account
├── Administration (Instance Admins)
│   ├── Dashboard (sign-ups, active users, instance stats)
│   ├── Moderation
│   │   ├── Reports (from local and remote users)
│   │   ├── Accounts (warn, freeze, suspend)
│   │   ├── Audit Log
│   │   └── Pending Accounts (if approval-required instance)
│   ├── Federation
│   │   ├── Known Instances (peers)
│   │   ├── Domain Blocks (block, silence, or reject entire instances)
│   │   ├── Domain Allows (allowlist mode)
│   │   └── Relay Management
│   ├── Server Settings
│   │   ├── Instance Name, Description, Rules
│   │   ├── Registration Mode (open/approval/closed)
│   │   ├── Content Policies
│   │   ├── Custom Emoji (upload for instance)
│   │   └── Announcements (instance-wide banners)
│   ├── Email Configuration
│   ├── Roles & Permissions (custom roles)
│   ├── Trends (approve/reject trending content)
│   └── Invites (generate invite links)
└── Third-Party Clients
    ├── Mastodon is API-first: many alternative clients exist
    ├── iOS: Ivory, Ice Cubes, Mona, Toot!
    ├── Android: Tusky, Megalodon, Fedilab
    ├── Desktop: Whalebird, Hyper, Sengi
    └── Multi-column: Pinafore (web), Elk (web)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Single-Column (Default)** | Desktop: centered column with top tabs. Mobile: bottom tab bar | Home, Local, Federated, Explore, Live Feeds |
| **Advanced Multi-Column** | TweetDeck-style, pinnable columns | Add columns: Home, Local, Federated, Notifications, Hashtags, Lists, DMs |
| **Left Sidebar** | Desktop: fixed | Navigation links, compose button, instance info |
| **Right Sidebar** | Desktop: getting started / search / trending | Trending hashtags, trending posts, links, suggestions |
| **Bottom Tab Bar** | Mobile | Home, Search, Notifications, Profile |
| **Compose Button** | Prominent CTA | Opens composer modal/screen |
| **Post Actions** | Below each post | Reply, Boost, Favorite, Bookmark, More |
| **Hashtag Follow** | On hashtag pages | Follow hashtag → posts appear in home timeline |

### Single-Column Layout (Default Desktop)
```
[Left Sidebar (300px)]  |  [Main Feed (600px)]    |  [Right Sidebar (300px)]
──────────────────────────────────────────────────────────────────
[Compose Button]        |  Home | Local | Federated| 🔍 Search
──────────────          |  ─────────────────       | ──────────
🏠 Home                 |  [Post]                  | Trending now
🔔 Notifications        |  [Post with CW]          |  #hashtag1
🔍 Explore              |  [Boosted Post]          |  #hashtag2
💬 Direct Messages      |  [Post + Images]         | ──────────
📑 Bookmarks            |  ...                     | Suggestions
📋 Lists                |                          |  @user1
⚙️ Preferences          |                          |  @user2
──────────────          |                          | ──────────
[Instance Info]         |                          | [About Instance]
```

### Advanced Multi-Column Layout
```
[Home] | [Notifications] | [Local Timeline] | [#mastodon] | [List: Tech]
  🏠   |     🔔          |      📢          |     #️⃣      |     📋
 ...   |    ...          |     ...          |    ...      |    ...
 ...   |    ...          |     ...          |    ...      |    ...
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Status (Post/Toot) | content (HTML), content_warning (CW), visibility (public/unlisted/private/direct), language, media_attachments[], poll, created_at, edited_at, sensitive (bool), in_reply_to_id, url, uri (ActivityPub), reblogs_count, favourites_count, replies_count, pinned (bool), application | belongs to Account; has Replies, Boosts, Favorites, Media, Poll |
| Account | username, acct (@user@instance), display_name, bio (note), avatar, header, fields[] (metadata key-value), followers_count, following_count, statuses_count, created_at, locked (bool), bot (bool), discoverable, moved_to | has many Statuses, Followers, Following |
| MediaAttachment | url, preview_url, type (image/video/audio/gifv), description (alt text), blurhash, meta (dimensions, fps) | belongs to Status |
| Poll | options[], votes_count, voters_count, expires_at, multiple (bool), voted (bool for current user) | belongs to Status |
| Boost (Reblog) | original_status, boosted_at | belongs to Account (sharing mechanism) |
| Favourite | created_at | belongs to Account and Status |
| Bookmark | created_at | belongs to Account and Status (private) |
| Follow | follower, following, status (active/pending), show_reblogs, notify, languages[] | connects Accounts (can be cross-instance) |
| Notification | type (mention/reblog/favourite/follow/follow_request/poll/update), account, status, created_at | belongs to Account |
| List | title, replies_policy (followed/list/none) | belongs to Account, has Accounts |
| Filter | phrase, context[] (home/notifications/public/thread/account), action (warn/hide), whole_word, expires_at | belongs to Account |
| CustomEmoji | shortcode, url, visible_in_picker, category | belongs to Instance |
| Tag (Hashtag) | name, url, history[] (daily usage stats) | many-to-many with Statuses; followable |
| Relationship | following, followed_by, blocking, blocked_by, muting, muting_notifications, requested, domain_blocking, endorsed, note | between two Accounts |
| Instance | domain, title, description, rules[], registration (open/approval/closed), languages[], contact, stats (user_count, status_count, domain_count) | part of the Fediverse |
| DomainBlock | domain, severity (silence/suspend/noop), comment | managed by Instance Admin |
| Report | target_account, statuses[], comment, forwarded (to remote instance), category (spam/violation/other) | belongs to reporter Account |
| Announcement | content, published, all_day, starts_at, ends_at, reactions[] | belongs to Instance (admin) |

### Visibility Levels
```
🌐 Public: Visible in all timelines (home, local, federated, profile)
🔓 Unlisted: Visible on profile and to followers, but NOT in public timelines
🔒 Followers-only: Only followers can see (not boostable)
✉️ Direct / Mentioned-only: Only mentioned users can see (not truly private — instance admins can read)
```

### ActivityPub Federation
```
Status → serialized as ActivityPub Activity → sent to followers' instances → rendered on remote timelines
Follow → Follow request sent to target instance → accepted/rejected → federated timeline populates
Account Migration → Redirect + follower migration via ActivityPub Move activity
```

## User Flows

### Read Home Timeline
```
Open App → Home Timeline → Scroll (chronological) → Favorite → Boost → Reply → Continue
```

### Discover via Local Timeline
```
Local Tab → See Instance Community Posts → Find Interesting Account → View Profile → Follow
```

### Post with Content Warning
```
Compose → Write Text → Toggle CW → Write Warning Label (e.g., "Politics", "Spoiler") → Attach Media + Alt Text → Set Visibility → Post
```

### Follow Across Instances
```
Find @user@other-instance.social → Copy Full Handle → Search in Your Instance → Follow → Appears in Home Timeline
```

### Migrate Instance
```
New Instance → Create Account → Old Instance: Settings → Account → Move → Enter New Account → Followers Auto-migrate → Old Profile Shows Redirect
```

### Follow a Hashtag
```
Search → #topic → Hashtag Page → [Follow] → Posts with #topic Appear in Home Timeline
```

### Report Content
```
Post → More (⋯) → Report → Select Category → Optional: Forward to Remote Instance → Submit → Instance Moderator Reviews
```

### Use Multi-Column Layout
```
Settings → Appearance → Advanced Web Interface → Enable → Add Columns (Home, Notifications, #hashtag, List) → Pin → TweetDeck-style Workspace
```

## URL / Route Structure

```
# Instance Web (instance.social)
/                                  → Home Timeline (or Landing if logged out)
/home                              → Home Timeline
/public/local                      → Local Timeline
/public                            → Federated Timeline
/explore                           → Explore / Trending
/explore/tags                      → Trending Hashtags
/explore/links                     → Trending Links
/explore/suggestions               → Suggested Accounts
/search                            → Search
/notifications                     → Notifications
/conversations                     → Direct Messages
/bookmarks                         → Bookmarks
/favourites                        → Favourites
/lists                             → Lists
/lists/:id                         → List Timeline
/tags/:hashtag                     → Hashtag Timeline
/@:username                        → Local User Profile
/@:username/:postId                → Post Detail
/@:username@:instance              → Remote User Profile (proxied)
/settings/preferences              → Preferences
/settings/profile                  → Profile Settings
/settings/notifications            → Notification Settings
/settings/filters                  → Content Filters
/settings/import                   → Import Data
/settings/export                   → Export Data
/settings/migration                → Account Migration
/settings/security                 → Security (2FA)
/auth/sign_in                      → Login
/auth/sign_up                      → Register
/admin                             → Admin Dashboard (instance admins)
/admin/reports                     → Reports
/admin/accounts                    → Account Management
/admin/instances                   → Known Instances / Domain Blocks

# ActivityPub URLs (federation)
/@:username                        → Actor endpoint
/@:username/:postId                → Object endpoint
/.well-known/webfinger             → Account discovery
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Accounts (@user@instance), Hashtags (#tag), Posts (if full-text enabled) | Type tabs (All/Accounts/Hashtags/Posts) | Relevance |
| Home | Posts from followed accounts | — | Chronological only (no algorithm) |
| Local | Posts from instance | — | Chronological |
| Federated | All known public posts | — | Chronological |
| Hashtag | Posts with hashtag | Local / Federated toggle | Chronological |
| Notifications | Your activity | Type (All/Mentions/Favorites/Boosts/Follows/Polls/Updates) | Chronological |
| Content Filters | Keyword/phrase filter | Context (home/notifications/public/threads/profiles), Action (hide/warn) | — |

### Search Limitations (by design)
- Full-text search of posts is opt-in per instance (privacy consideration)
- Users can opt out of being discoverable
- No algorithmic search ranking — results are chronological or by relevance
- Cross-instance search limited to posts your instance already knows about

## Responsive Behavior

| Breakpoint | Layout | Behavior |
|------------|--------|----------|
| Desktop (≥900px) | Single-column (sidebar + feed + sidebar) or Multi-column (advanced) | Three-panel default, TweetDeck-style optional |
| Tablet (600–899px) | Single-column, reduced sidebars | Sidebars as overlays |
| Mobile (<600px) | Single-column, bottom tab bar | Full-width feed, push navigation |

### Third-Party Client Ecosystem
- Mastodon's open API enables diverse clients
- Mobile: Ivory (iOS, premium), Ice Cubes (iOS, open source), Tusky (Android), Megalodon (Android)
- Desktop: Whalebird, Hyper, Sengi
- Web alternatives: Elk (modern UI), Phanpy (minimal), Pinafore (lightweight)
- Each client can offer different UX while connecting to the same Mastodon account/instance

### Accessibility
- Alt text for images (community norm, some instances require it)
- Content warnings for sensitive topics (community-enforced)
- High contrast theme option
- Reduced motion option
- Screen reader friendly (semantic HTML)
- Custom CSS per instance (can improve accessibility)

## Access Control

| Role | Read | Post | Boost | Favorite | Follow | Admin |
|------|------|------|-------|----------|--------|-------|
| Unauthenticated | Public posts, public profiles, explore | — | — | — | — | — |
| User | ✅ (home, local, federated) | ✅ (500+ chars, media, polls) | ✅ (public posts only) | ✅ | ✅ (cross-instance) | — |
| Locked Account User | ✅ | ✅ | ✅ | ✅ | Requires approval | — |
| Instance Moderator | ✅ | ✅ | ✅ | ✅ | ✅ | Review reports, warn/suspend accounts |
| Instance Admin | ✅ | ✅ | ✅ | ✅ | ✅ | Full: users, federation, settings, domain blocks, custom emoji, announcements |

### Federation & Moderation Model
```
Each instance is independently operated:
- Instance admin sets rules, registration policy, domain blocks
- Moderation is local (your instance admin handles your reports)
- Domain blocks: instance-level silencing or suspending entire remote instances
- Users can migrate between instances (take followers, not posts)
- No central authority — decentralized governance
```

### Privacy Philosophy
- Chronological timelines only (no engagement-maximizing algorithm)
- No ads, no tracking, no data selling
- Per-post visibility controls
- Content warnings as a cultural norm
- Full data export and account migration
- Instance admins have access to local data (choose your instance wisely)
- Direct messages are NOT end-to-end encrypted (visible to instance admins)
