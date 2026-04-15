# Social Network — Information Architecture

## Overview

A feed-based social platform where users create, share, and interact with content. The mental model is a **stream** — an endless flow of posts from connections, with profile pages as identity anchors. Engagement (likes, comments, shares) and discovery drive the experience.

## Site Map

```
├── Home / Feed
│   ├── For You (algorithmic)
│   ├── Following (chronological)
│   └── Create Post (inline composer)
├── Explore / Discover
│   ├── Trending Topics
│   ├── Suggested Users
│   ├── Categories / Interests
│   └── Search Results
├── Notifications
│   ├── All
│   ├── Mentions
│   ├── Likes
│   ├── Comments
│   ├── Follows
│   └── System
├── Messages (DMs)
│   ├── Conversations List
│   ├── Conversation Thread
│   └── New Message
├── Profile
│   ├── Posts
│   ├── Replies
│   ├── Media
│   ├── Likes
│   ├── Followers / Following Lists
│   └── Edit Profile
├── Post Detail
│   ├── Original Post
│   ├── Comments / Replies Thread
│   └── Engagement Stats
├── User Profile (others)
│   ├── Posts
│   ├── Replies
│   ├── Media
│   └── Follow / Block / Report Actions
├── Groups / Communities (optional)
│   ├── Discover Groups
│   ├── My Groups
│   └── Group Detail
│       ├── Feed
│       ├── Members
│       └── Settings
├── Bookmarks / Saved
├── Settings
│   ├── Account
│   ├── Privacy & Safety
│   ├── Notifications
│   ├── Content Preferences
│   ├── Accessibility
│   ├── Connected Apps
│   └── Deactivate / Delete Account
└── Help / About
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Primary Nav** | Desktop: Fixed left sidebar. Mobile: Bottom tab bar | Feed, Explore, Notifications (badge), Messages (badge), Profile |
| **Feed Tabs** | Horizontal tabs at top of feed | For You / Following |
| **Floating Action** | FAB or top-bar button | Create new post |
| **Post Actions** | Inline action bar below each post | Like, Comment, Share/Repost, Bookmark |
| **Profile Tabs** | Horizontal tabs on profile | Posts / Replies / Media / Likes |
| **Search** | Expandable search bar in Explore | Auto-suggest users, topics, posts |

### Desktop Sidebar
```
[Logo]
─────────────
🏠 Home
🔍 Explore
🔔 Notifications (●)
✉️ Messages (●)
📑 Bookmarks
👤 Profile
─────────────
[+ New Post] (button)
─────────────
[User Card + Menu]
```

### Mobile Bottom Tab Bar
```
[ 🏠 Home ] [ 🔍 Explore ] [ ➕ Post ] [ 🔔 Alerts ] [ 👤 Profile ]
```

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| User | username, display_name, avatar, bio, verified, followers_count, following_count | has many Posts, Followers, Following |
| Post | body (text/rich), media[], created_at, likes_count, comments_count, reposts_count, visibility | belongs to User, has many Comments, Likes |
| Comment | body, created_at, likes_count | belongs to Post and User, can be nested (reply to comment) |
| Like | created_at | belongs to User and Post/Comment |
| Follow | follower_id, following_id, created_at | connects Users |
| Message | body, media[], read, created_at | belongs to Conversation |
| Conversation | participants[], last_message, unread_count | has many Messages |
| Notification | type, actor, target, read, created_at | belongs to User |
| Hashtag | name, post_count | many-to-many with Posts |
| Group | name, description, visibility, members_count | has many Members, Posts |

### Post Types
`text | image | video | poll | link | repost | quote`

### Visibility Levels
`public | followers-only | mentioned-only | private`

## User Flows

### Content Consumption
```
Open App → Feed (scroll) → Like/Comment inline → Tap Post → Full Thread → Reply
```

### Content Creation
```
Tap [+ Post] → Compose (text + media) → Add hashtags/mentions → Post → Appears in Feed
```

### Discovery
```
Explore → Trending → Tap Topic → Related Posts → Follow interesting users
```

### Social Connection
```
See Post → Tap Username → View Profile → Follow → Their posts appear in Following feed
```

### Direct Messaging
```
Profile → Message → Compose → Send → Conversation Thread
```

## URL / Route Structure

```
/                          → Home Feed
/explore                   → Explore / Discover
/explore/trending          → Trending Topics
/notifications             → Notifications
/messages                  → Conversations List
/messages/:conversationId  → Conversation Thread
/:username                 → User Profile (Posts tab)
/:username/replies         → User Replies
/:username/media           → User Media
/:username/likes           → User Likes
/:username/followers       → Followers List
/:username/following       → Following List
/:username/post/:postId    → Post Detail / Thread
/hashtag/:tag              → Posts with hashtag
/groups                    → Groups
/groups/:id                → Group Detail
/bookmarks                 → Saved Posts
/settings                  → Settings
/settings/privacy          → Privacy Settings
/settings/notifications    → Notification Preferences
/compose                   → New Post (mobile deep link)
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Users, Posts, Hashtags, Groups | Content Type (people/posts/hashtags) | Top, Latest, People, Media |
| Explore | Trending, Suggested | Category / Interest, Location | Trending, Recent |
| Messages | Conversations, message content | — | Recent |
| Profile | User's posts | Type (posts/replies/media) | Recent (default) |

## Responsive Behavior

| Breakpoint | Nav | Feed | Sidebar |
|------------|-----|------|---------|
| Desktop (≥1280px) | Left sidebar (fixed) | Center column (max 600px) | Right sidebar (trending, suggestions) |
| Tablet (768–1279px) | Left icon sidebar | Center column | Hidden |
| Mobile (<768px) | Bottom tab bar | Full width | Hidden, accessible via Explore |

### Mobile Adaptations
- Feed: Pull-to-refresh, infinite scroll
- Post composer: Full-screen modal
- Image viewing: Full-screen lightbox with swipe
- Video: Inline autoplay (muted), tap for full-screen
- Notifications: Swipe to dismiss/mark read

## Access Control

| Role | Feed | Post | Comment | Message | Settings |
|------|------|------|---------|---------|----------|
| Unauthenticated | View public posts | — | — | — | — |
| User | ✅ | Create/Edit/Delete own | Create/Edit/Delete own | Send/Receive | ✅ |
| Verified User | ✅ | + Priority in feed | ✅ | ✅ | ✅ |
| Moderator | ✅ | + Remove any | + Remove any | ✅ | Limited |
| Admin | ✅ | Full control | Full control | ✅ | ✅ |

### Privacy Controls (User-configurable)
- Who can see my posts: Everyone / Followers / Nobody
- Who can message me: Everyone / Followers / Nobody
- Who can comment: Everyone / Followers / Mentioned
- Blocked users list
- Muted users/keywords list
