# Forum / Community — Information Architecture

## Overview

A discussion-based community platform (Reddit, Discourse, Stack Overflow style). The mental model is **topics organized into spaces/categories**, with threaded discussions, voting, and reputation. Knowledge accumulation and community moderation are core.

## Site Map

```
├── Home / Feed
│   ├── Hot / Trending Posts
│   ├── New Posts
│   ├── Top (day/week/month/year/all)
│   └── Subscribed Feed
├── Categories / Spaces
│   ├── Category List
│   └── Category Page
│       ├── Description & Rules
│       ├── Pinned Posts
│       ├── Post List (sorted)
│       └── Category Members / Stats
├── Post / Thread
│   ├── Original Post (title + body + media)
│   ├── Voting (up/down)
│   ├── Tags / Flair
│   ├── Comments (threaded, collapsible)
│   │   ├── Reply
│   │   ├── Vote
│   │   ├── Report
│   │   └── Nested Replies
│   └── Related Posts
├── Create Post
│   ├── Select Category
│   ├── Post Type (discussion, question, link, poll, media)
│   ├── Title & Body (markdown editor)
│   ├── Tags
│   └── Preview
├── Search
│   ├── Results (posts, comments, users, categories)
│   └── Advanced Search (filters)
├── User Profile
│   ├── Posts
│   ├── Comments
│   ├── Reputation / Karma
│   ├── Badges / Achievements
│   ├── About / Bio
│   └── Activity Timeline
├── Notifications
│   ├── Replies to Your Posts
│   ├── Mentions
│   ├── Upvotes
│   └── Moderation Actions
├── Moderation (mod/admin)
│   ├── Report Queue
│   ├── Mod Log
│   ├── User Management
│   ├── Auto-mod Rules
│   └── Category Settings
├── Saved / Bookmarks
├── Settings
│   ├── Profile
│   ├── Email & Notifications
│   ├── Privacy
│   ├── Content Preferences
│   └── Blocked Users
└── About / Guidelines
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed header | Logo, search, create post (+), notifications, user menu |
| **Left Sidebar** | Collapsible | Home, Popular, Subscribed categories, Recently Visited |
| **Feed Tabs** | Horizontal tabs | Hot / New / Top / Rising |
| **Category Nav** | Within category page | Pinned / Hot / New / Top |
| **Thread Nav** | Sort selector | Best / Top / New / Old / Controversial |
| **Right Sidebar** | Desktop only | Category info, rules, online users, trending |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Category | name, slug, description, icon, rules[], sidebar_content, subscriber_count | has many Posts, Moderators |
| Post | title, body (markdown), type, score, vote_count, comment_count, pinned, locked, created_at | belongs to Category and User; has many Comments, Tags |
| Comment | body, score, vote_count, depth, created_at | belongs to Post and User; can be nested |
| Vote | value (+1/-1), type (post/comment) | belongs to User and Post/Comment |
| User | username, avatar, karma, badges[], joined_at, role | has many Posts, Comments, Votes |
| Tag / Flair | name, color | many-to-many with Posts |
| Badge | name, icon, criteria | awarded to Users |
| Report | reason, status, reporter, target | moderation queue item |

### Post Types
`discussion | question (accepted answer) | link | poll | media | announcement`

### Reputation System
- Upvote on post: +10 karma
- Upvote on comment: +5 karma
- Best answer accepted: +15 karma
- Badges for milestones (first post, 100 upvotes, etc.)

## User Flows

### Read and Engage
```
Home Feed → Scroll → Click Post → Read → Upvote/Downvote → Comment → Reply to Comment
```

### Create Discussion
```
[+ Create Post] → Select Category → Choose Type → Write (title + body) → Add Tags → Submit
```

### Ask a Question
```
Create Post → Type: Question → Write → Submit → Receive Answers → Accept Best Answer
```

### Moderation
```
Report Queue → Review Reported Content → Remove / Approve / Warn User → Log Action
```

## URL / Route Structure

```
/                          → Home Feed
/popular                   → Popular / Trending
/c/:category               → Category Page
/c/:category/:postId/:slug → Post / Thread
/c/:category/submit        → Create Post in Category
/submit                    → Create Post (select category)
/search?q=:query           → Search Results
/u/:username               → User Profile
/u/:username/posts         → User's Posts
/u/:username/comments      → User's Comments
/notifications             → Notifications
/saved                     → Saved Posts
/settings                  → Settings
/mod/:category             → Moderation Panel
/about                     → About / Guidelines
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Posts, comments, users, categories | Category, Post Type, Date Range, Author | Relevance, Top, New |
| Category | Posts within category | Tags, Post Type, Date | Hot, Top (period), New, Rising |
| Thread | Comments | — | Best, Top, New, Old, Controversial |

## Responsive Behavior

| Breakpoint | Left Sidebar | Content | Right Sidebar |
|------------|-------------|---------|---------------|
| Desktop (≥1280px) | Expanded (240px) | Center feed (max 700px) | Info panel (300px) |
| Tablet (768–1279px) | Collapsed (icons) | Full width | Hidden |
| Mobile (<768px) | Hamburger drawer | Full width | Hidden |

### Mobile Adaptations
- Swipe to upvote/downvote
- Collapsible comment threads (tap to expand)
- Bottom sheet for post actions
- Pull-to-refresh feed

## Access Control

| Role | Read | Post | Comment | Vote | Moderate | Admin |
|------|------|------|---------|------|----------|-------|
| Guest | ✅ | — | — | — | — | — |
| New User | ✅ | Limited (anti-spam) | ✅ | ✅ | — | — |
| Member | ✅ | ✅ | ✅ | ✅ | — | — |
| Moderator | ✅ | ✅ | ✅ | ✅ | Own categories | — |
| Admin | ✅ | ✅ | ✅ | ✅ | All | ✅ |
