---
brand: Threads
tagline: "Say more. Meta's text-based conversation platform built on the Instagram community."
category: Social
website: https://threads.net
---

# Threads — Information Architecture

## Overview

Meta's text-first social platform, launched in 2023 as a competitor to Twitter/X. Threads' mental model is a **public conversation space** — short text posts with optional media, built on top of Instagram's social graph. Key differentiators: seamless Instagram identity integration (same username, followers import), ActivityPub/fediverse compatibility (planned), a deliberately simpler feature set than Twitter (no hashtags initially, no DMs, no trending), a focus on positive community and anti-toxicity, and a feed-first experience without a separate Explore tab. Threads positions itself as a less adversarial alternative to Twitter/X.

## Site Map

```
├── Home / Feed
│   ├── For You (algorithmic, default)
│   ├── Following (chronological from followed accounts)
│   ├── Liked (posts liked by people you follow)
│   ├── Saved (bookmarked posts)
│   └── Custom Feeds (user-created topic feeds)
├── Search / Explore
│   ├── Search Bar
│   ├── Search Results: Posts, Users, Tags
│   ├── Trending Topics (introduced later)
│   └── Suggested Accounts
├── Create Post (Compose)
│   ├── Text (up to 500 characters)
│   ├── Add Media (images up to 10, video up to 5 min, GIF)
│   ├── Add Poll
│   ├── Add Voice Recording
│   ├── Tag / Mention (@username)
│   ├── Topic Tag (# categorization)
│   ├── Thread (multi-post chain)
│   ├── Audience: Everyone / Profiles You Follow
│   ├── Reply Controls: Anyone / Profiles You Follow / Mentioned Only
│   └── Cross-post to Instagram Feed (toggle)
├── Post Detail / Thread
│   ├── Original Post (text + media)
│   ├── Author (avatar, username, verified badge)
│   ├── Engagement: Likes, Replies, Reposts, Shares, Quotes
│   ├── Reply Thread (flat or nested, author-highlighted)
│   ├── Actions
│   │   ├── Like (❤️)
│   │   ├── Reply (💬)
│   │   ├── Repost (♻️) / Quote
│   │   ├── Share (send via DM on IG, copy link, share to IG Story, share to feed)
│   │   ├── Save (🔖 bookmark)
│   │   └── More (⋯): Not Interested, Mute, Block, Report, Embed, Copy Text
│   └── View on Instagram (author's profile link)
├── Activity (Notifications)
│   ├── All
│   ├── Follows
│   ├── Replies
│   ├── Mentions
│   ├── Quotes
│   ├── Reposts
│   ├── Verified (from verified accounts only)
│   └── Requests (pending follow requests, if private)
├── Profile
│   ├── Avatar (from Instagram, circular)
│   ├── Username (@, shared with Instagram)
│   ├── Name, Bio (editable, separate from IG)
│   ├── Link
│   ├── Followers / Following Counts
│   ├── Instagram Link (cross-profile)
│   ├── Follow / Following Button
│   ├── Mention / Share
│   ├── Tabs: Threads (posts), Replies, Reposts
│   ├── Pinned Post (up to 1)
│   └── Verified Badge (from Instagram verification or Meta Verified)
├── Saved Posts (Bookmarks)
│   ├── All Saved Posts
│   └── Chronological
├── Settings
│   ├── Account
│   │   ├── Profile (edit bio, link, avatar — linked to IG)
│   │   ├── Fediverse Sharing (ActivityPub toggle)
│   │   ├── Privacy
│   │   │   ├── Private Profile (on/off)
│   │   │   ├── Mentions (who can mention you)
│   │   │   ├── Muted (users, words)
│   │   │   ├── Hidden Words (filter offensive content)
│   │   │   ├── Blocked Profiles
│   │   │   └── Restricted Profiles
│   │   ├── Notifications (likes, follows, replies, mentions, reposts, quotes, verified)
│   │   ├── Account (linked Instagram account)
│   │   ├── Close Friends (shared with Instagram)
│   │   └── Deactivate / Delete Profile
│   ├── Feed Preferences
│   │   ├── Muted Words / Phrases
│   │   └── Content Preferences
│   ├── Accessibility
│   └── About (Terms, Privacy Policy, version)
└── Cross-Platform Integration
    ├── Instagram Identity (same @, avatar, verification)
    ├── Share to Instagram Story / Feed
    ├── Instagram DMs (Threads has no native DMs)
    └── ActivityPub / Fediverse (follow from Mastodon, etc.)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 5 tabs, always visible | Home (🏠), Search (🔍), Create (➕), Activity (❤️), Profile (👤) |
| **Feed Toggle** | Horizontal tabs on Home | "For You" / "Following" / "Liked" / "Saved" / Custom Feeds |
| **Floating Compose** | On web: also accessible from sidebar | Tapping [+] opens full-screen composer on mobile |
| **Post Actions** | Below each post, inline | Like, Reply, Repost/Quote, Share |
| **Profile Tabs** | Horizontal tabs on profile | Threads / Replies / Reposts |
| **Desktop Sidebar** | Left sidebar | Home, Search, Activity, Profile, Create |
| **Swipe Gestures** | Swipe between feed tabs | For You ↔ Following ↔ Liked |

### Mobile Layout
```
┌────────────────────────────────┐
│  ┌ For You ┐  Following  Liked │  ← feed tabs
├────────────────────────────────┤
│                                │
│  [Avatar] username · 2h        │
│  Post text content here...     │
│  [Optional Image/Video]        │
│                                │
│  ❤️ 42  💬 12  ♻️ 5  ➤       │  ← actions
│  ────────────────────────────  │
│                                │
│  [Avatar] username · 1h        │
│  Another post text...          │
│                                │
│  ❤️ 128  💬 34  ♻️ 18  ➤     │
│  ...                           │
├────────────────────────────────┤
│ 🏠  🔍  ➕  ❤️  👤            │  ← tab bar
└────────────────────────────────┘
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Post | text (500 chars), media[] (images up to 10 / video up to 5 min / GIF), poll, voice_note, created_at, likes_count, replies_count, reposts_count, quotes_count, audience (everyone/followers), reply_control (anyone/followers/mentioned), pinned (bool), topic_tags[] | belongs to User; has Replies, Reposts, Quotes |
| User | username (@ shared with IG), display_name, avatar, bio, link, followers_count, following_count, is_verified, is_private, instagram_linked (bool), fediverse_enabled (bool) | has many Posts, Followers, Following |
| Reply | same as Post, but in_reply_to set | belongs to Post and User |
| Repost | original_post_id, reposted_at | belongs to User (no commentary) |
| Quote | text + media + original_post_id | belongs to User (repost with commentary) |
| Like | created_at | belongs to User and Post |
| Bookmark | post, saved_at | belongs to User |
| Follow | follower_id, following_id, status (active/pending for private), created_at | connects Users |
| Poll | question (in post text), options[], votes[], duration | belongs to Post |
| TopicTag | name, post_count | many-to-many with Posts |
| CustomFeed | name, topics[], accounts[] | belongs to User |
| Notification | type (like/reply/follow/mention/repost/quote), actor, target, read, created_at | belongs to User |

### Post Types
`text | text+image | text+carousel | text+video | text+gif | text+poll | text+voice | quote | repost | thread (multi-post)`

## User Flows

### Browse Feed
```
Open App → For You Feed → Scroll → Like (tap heart) → Tap Post → Read Replies → Reply → Back to Feed
```

### Create Post
```
Tap [+] → Write Text → Add Image/Video (optional) → Set Audience → Post → Appears in Followers' Feed
```

### Create Thread
```
Tap [+] → Write First Post → "Add to Thread" → Write Second → Continue → Post All
```

### Quote Post
```
See Post → Repost → Quote → Write Your Commentary → Post → Shows Original + Your Take
```

### Follow from Instagram
```
Sign Up → Import Instagram Following → Threads Profile Created → Following Feed Populated
```

### Share to Instagram Story
```
Post → Share → "Add to Instagram Story" → Opens IG Story Editor → Post Story with Threads Link
```

### Cross-Fediverse Follow
```
Enable Fediverse Sharing (Settings) → Mastodon user follows @you@threads.net → Your posts appear in their Mastodon feed
```

## URL / Route Structure

```
# Threads Web (threads.net)
/                              → Home Feed
/search                        → Search
/search?q=:query               → Search Results
/activity                      → Activity / Notifications
/@:username                    → User Profile
/@:username/post/:postId       → Post Detail
/settings                      → Settings
/settings/account              → Account Settings
/settings/privacy              → Privacy Settings
/settings/notifications        → Notification Settings
/saved                         → Saved / Bookmarks
/liked                         → Liked Feed Tab
/intent/post?text=:text        → Compose Intent (pre-fill text)
/tag/:tagName                  → Topic Tag Page
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Posts, Users, Topic Tags | Content Type (Posts/People/Tags) | Relevance (algorithmic) |
| Feed | Posts from network | Feed Tab (For You/Following/Liked/Saved/Custom) | Algorithmic / Chronological |
| Profile | User's posts | Tab (Threads/Replies/Reposts) | Chronological |
| Activity | Notifications | Type (All/Follows/Replies/Mentions/Quotes/Reposts/Verified) | Chronological |
| Saved | Bookmarked posts | — | Date Saved |

## Responsive Behavior

| Breakpoint | Nav | Feed | Sidebar |
|------------|-----|------|---------|
| Desktop (≥1024px) | Left sidebar (icons + labels) | Center column (max 600px) | — (no right sidebar, clean design) |
| Tablet (768–1023px) | Left icon sidebar | Center column | — |
| Mobile (<768px) | Bottom tab bar (5 tabs) | Full width | — |

### Design Philosophy
- Deliberately simpler than Twitter/X
- No trending page (initially, added later)
- No DMs (use Instagram DMs)
- No desktop-first features (mobile-first design)
- Clean, spacious typography
- Less dense than Twitter — more breathing room
- Instagram-style visual language (rounded elements, gradient accents)

### Mobile Adaptations
- Pull-to-refresh
- Double-tap to like
- Swipe between feed tabs
- Full-screen post composer
- Share sheet integration
- Instagram identity seamless (single sign-on)

## Access Control

| Role | Read | Post | Reply | Repost | Save |
|------|------|------|-------|--------|------|
| Unauthenticated | Public profiles (limited, login wall) | — | — | — | — |
| User | ✅ | ✅ (500 chars, images, video, poll, voice) | ✅ (per post's reply controls) | ✅ | ✅ |
| Private User | ✅ | Followers only see | ✅ | ✅ | ✅ |
| Verified (Meta Verified) | ✅ | ✅ + verified badge, impersonation protection | ✅ | ✅ | ✅ |
| Fediverse User | Public posts via ActivityPub | Follow + interact from federated platform | ✅ (via ActivityPub) | ✅ | — |
| Admin (Meta) | ✅ | ✅ | ✅ | ✅ | Content moderation |

### Community Guidelines
- Inherited from Instagram Community Guidelines
- Anti-toxicity focus (limiting political content recommendations)
- Content filters for sensitive topics
- Hidden words (customizable offensive content filter)
- Block/restrict/mute carry over from Instagram
