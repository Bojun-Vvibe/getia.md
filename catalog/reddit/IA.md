---
brand: Reddit
tagline: "The front page of the internet. Community-driven forum with subreddits, karma, upvotes, and deep discussions."
category: Forum
website: https://reddit.com
---

# Reddit — Information Architecture

## Overview

The world's largest collection of community forums organized around interests. Reddit's mental model is a **subreddit ecosystem** — each subreddit (r/topic) is an independently moderated community with its own rules, culture, and moderators. Content is democratically ranked through upvotes/downvotes, and user reputation is tracked via karma. Key differentiators: subreddit model (bottomless niche communities), the voting system (content quality is crowd-sourced), deeply threaded comment trees (collapsible), karma and awards, Reddit Premium, AMAs (Ask Me Anything), and the volunteer moderator system. Reddit is fundamentally content-and-discussion-first, not profile-first.

## Site Map

```
├── Home Feed
│   ├── Best (algorithmic, from subscribed subreddits)
│   ├── Hot
│   ├── New
│   ├── Top (today/week/month/year/all time)
│   ├── Rising
│   └── Card/Classic/Compact View Toggle
├── Popular
│   ├── All of Reddit (trending across all subreddits)
│   └── Filter by Country/Region
├── All
│   ├── Every public subreddit (unfiltered)
│   └── Exclude specific subreddits
├── Subreddit (r/:subreddit)
│   ├── Subreddit Banner, Icon, Name, Description
│   ├── Member Count, Online Count
│   ├── Join / Leave Button
│   ├── Create Post Button
│   ├── Sort: Hot / New / Top / Rising / Controversial
│   ├── Post List
│   │   ├── Post Card (title, thumbnail, score, comments count, author, time, flair)
│   │   └── Post Types: Text, Link, Image, Video, Gallery, Poll, Live Chat
│   ├── Sidebar (Desktop)
│   │   ├── About Community (description, created date, member count)
│   │   ├── Subreddit Rules
│   │   ├── Moderators List
│   │   ├── Related Subreddits
│   │   ├── Flair Filter (post categories)
│   │   └── Community Awards
│   ├── Wiki (subreddit wiki pages, FAQ, guides)
│   ├── Flair (post categories specific to subreddit)
│   └── Menu Links (custom, set by mods)
├── Post / Thread
│   ├── Post Content
│   │   ├── Title (required)
│   │   ├── Body (text/link/media)
│   │   ├── Flair Badge
│   │   ├── Author, Subreddit, Time
│   │   ├── Media (images, videos, embedded links, galleries)
│   │   └── Crosspost Origin (if crossposted)
│   ├── Voting
│   │   ├── Upvote (↑)
│   │   ├── Score (net votes, can be hidden initially)
│   │   └── Downvote (↓)
│   ├── Actions: Save, Hide, Share, Report, Award, Crosspost
│   ├── Comment Section
│   │   ├── Sort: Best / Top / New / Controversial / Old / Q&A
│   │   ├── Comment Tree (threaded, infinite nesting)
│   │   │   ├── Comment (author, score, time, flair)
│   │   │   ├── Collapse Thread [-]
│   │   │   ├── Reply
│   │   │   ├── Vote (↑↓)
│   │   │   ├── Award
│   │   │   ├── Save
│   │   │   ├── Report
│   │   │   └── Nested Replies (indented)
│   │   ├── "X more replies" / "Continue thread →"
│   │   ├── OP (Original Poster) badge
│   │   ├── Mod badge (green shield)
│   │   ├── Admin badge (red)
│   │   └── Award badges on comments
│   └── Post Flair & Automod Stickies
├── Create Post
│   ├── Select Community (subreddit)
│   ├── Post Type: Text / Images & Video / Link / Poll
│   ├── Title (required)
│   ├── Body / URL / Media Upload / Poll Options
│   ├── Add Flair (subreddit-specific)
│   ├── Mark NSFW / Spoiler
│   ├── Optional: Add to collection
│   ├── Rules Reminder (subreddit rules inline)
│   └── Post / Save Draft
├── Search
│   ├── Results: Posts, Communities, People
│   ├── Search within Subreddit
│   ├── Filter: Relevance, Hot, Top, New, Most Comments
│   ├── Filter: Time (past hour/day/week/month/year/all)
│   └── Filter: Post type, Subreddit, NSFW
├── User Profile
│   ├── Avatar, Banner, Display Name, Username (u/:name)
│   ├── Karma (post karma + comment karma breakdown)
│   ├── Cake Day (account birthday)
│   ├── Trophies / Achievements
│   ├── Tabs: Overview, Posts, Comments, Saved (private), Hidden (private), Upvoted (private), Downvoted (private), Awards Given/Received
│   ├── Mod of (subreddits moderated)
│   └── Follow User
├── Chat
│   ├── Direct Messages (1:1)
│   ├── Group Chats
│   ├── Chat Rooms (subreddit-based)
│   └── Message Requests
├── Notifications / Inbox
│   ├── Activity (replies, mentions, post replies)
│   ├── Messages (private messages, legacy system)
│   ├── Comment Replies
│   ├── Post Replies
│   ├── Username Mentions (u/:name)
│   └── Mod Mail (for moderators)
├── Reddit Premium
│   ├── Ad-free browsing
│   ├── Monthly Coins (for awards)
│   ├── Custom Avatar Gear
│   ├── Access to r/lounge (exclusive subreddit)
│   └── Premium Badge
├── Awards / Coins
│   ├── Gold, Silver, Platinum, Ternion (legacy)
│   ├── Community Awards (subreddit-specific)
│   ├── Free Award (daily/weekly freebie)
│   └── Award → gives recipient coins + Premium time
├── Mod Tools (per subreddit)
│   ├── Mod Queue (posts/comments flagged for review)
│   ├── Reports
│   ├── Spam Filter
│   ├── Mod Log (action history)
│   ├── AutoModerator (rule-based automation)
│   ├── User Management (ban, mute, approve)
│   ├── Flair Management (post + user flair)
│   ├── Rules Configuration
│   ├── Wiki Management
│   ├── Traffic Stats
│   ├── Community Appearance (banner, icon, colors)
│   ├── Post Requirements (title, flair, templates)
│   └── Mod Mail (shared inbox)
├── Settings
│   ├── Account (email, password, linked accounts)
│   ├── Profile (display name, about, avatar, banner, NSFW toggle)
│   ├── Feed Settings (home feed, content, auto-play, community recommendations)
│   ├── Notifications (per type: push, email)
│   ├── Chat & Messaging (who can send)
│   ├── Emails
│   ├── Privacy (personalization, search indexing, location)
│   └── Safety & Privacy (blocked, muted accounts)
├── Communities Directory
│   ├── Top Communities
│   ├── Browse by Category
│   └── Create Community (subreddit)
│       ├── Name (r/:name)
│       ├── Type (Public / Restricted / Private / NSFW)
│       ├── Description
│       └── Topics
└── Reddit Recap (annual, like Spotify Wrapped)
    ├── Most Upvoted Posts
    ├── Top Communities
    ├── Hours Scrolled
    └── Shareable Cards
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed | Reddit logo, search bar (center), Create Post (+), Chat, Notifications, user avatar/login |
| **Left Sidebar** | Collapsible (desktop) | Home, Popular, All, Custom Feeds, Recent Communities, Joined Communities, Mod Queues |
| **Feed Sort Tabs** | Horizontal tabs on feed | Hot, New, Top, Rising (on subreddit: + Controversial) |
| **Post Actions** | Inline below each post | Vote (↑↓), Comment count link, Award, Share, Save, Hide, Report |
| **Comment Tree** | Threaded, indented, collapsible | Click [-] to collapse thread, colored depth lines |
| **Right Sidebar** | Desktop, within subreddit | Community info, rules, mods, related subs |
| **View Toggle** | Card / Classic / Compact | Desktop: switch between post density views |
| **Mobile Nav** | Bottom tab bar | Home, Communities, Create (+), Chat, Inbox |

### Desktop Layout
```
[Left Sidebar (272px)]  |  [Feed (740px)]        |  [Right Sidebar (312px)]
──────────────────────────────────────────────────────────────────
Home                    |  [Hot|New|Top|Rising]    | r/subreddit
Popular                 |  ─────────────────       | About Community
All                     |  [Post Card]             | 2.1M members · 12K online
─────────────           |   ↑ 12.5K               | ─────────────
RECENT                  |   [Title + Content]      | Rules
 r/programming          |   💬 432 comments        | 1. Be respectful
 r/react                |  ─────────────────       | 2. No spam
─────────────           |  [Post Card]             | ─────────────
COMMUNITIES             |   ↑ 8.2K                 | Moderators
 r/javascript           |   ...                    |  u/mod1
 r/webdev               |                          |  u/mod2
 ...                    |                          |
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Subreddit | name (r/:name), display_name, description, sidebar_content, rules[], subscriber_count, online_count, created_at, type (public/restricted/private), nsfw (bool), wiki_enabled, flairs[], banner, icon, color_theme | has many Posts, Moderators, Members, Wiki Pages, Rules |
| Post | title, body (markdown/rich text), url (for link posts), media[] (images/video/gallery), score (upvotes-downvotes), upvote_ratio, comment_count, flair, spoiler (bool), nsfw (bool), locked (bool), stickied (bool), crosspost_parent, created_at, edited (bool) | belongs to Subreddit and User; has many Comments |
| Comment | body (markdown), score, created_at, edited, stickied (mod), gilded, depth, distinguished (none/mod/admin), collapsed (bool) | belongs to Post and User; has parent Comment (tree) |
| Vote | value (+1/-1), target_type (post/comment) | belongs to User and Post/Comment |
| User | username (u/:name), avatar, banner, post_karma, comment_karma, awardee_karma, cake_day, is_premium, trophies[], mod_of[] | has many Posts, Comments, Votes, Awards |
| Flair (Post) | text, css_class, background_color, text_color, editable | belongs to Subreddit |
| Flair (User) | text, css_class | per Subreddit per User |
| Award | name, icon, cost (coins), gives_premium_days, gives_coins | given by User to Post/Comment |
| ModAction | action (remove/approve/ban/flair/lock/sticky), mod, target, reason, created_at | belongs to Subreddit |
| WikiPage | title, body (markdown), revision_history[], last_editor | belongs to Subreddit |
| CustomFeed (Multireddit) | name, subreddits[], public | belongs to User |
| Report | reason, target (post/comment), reporter, status | belongs to Subreddit mod queue |
| ChatMessage | body, created_at | belongs to Conversation/Room |
| Collection | title, description, posts[] | belongs to Subreddit |

### Post Types
`text (self) | link | image | video | gallery (multiple images) | poll | crosspost | live_chat`

### Karma System
```
Post upvote received: ~1 post karma (diminishing returns at scale)
Comment upvote received: ~1 comment karma
Award received: awardee karma
Karma thresholds gate actions in some subreddits (anti-spam)
```

### Comment Sorting
```
Best (confidence sort — balances score and sample size)
Top (highest net score)
New (chronological, newest first)
Controversial (most mixed upvotes/downvotes)
Old (chronological, oldest first)
Q&A (OP replies and highly scored answers)
```

## User Flows



### Browse and Engage
```
Home → Feed (Hot) → Scroll → Click Post → Read → Expand Comment Thread → Upvote Helpful Comment → Back to Feed
```

### Post to Subreddit
```
Subreddit → Create Post → Select Type (Text) → Write Title + Body → Add Flair → Post → Others Comment → Reply to Comments
```

### Join a Community
```
Popular → See Trending Post → Check Subreddit → Read Rules + Top Posts → Join → Subreddit Appears in Home Feed
```

### Deep-Thread Discussion
```
Post → Comment Section → Expand Thread → Read Nested Replies → "Continue This Thread →" → Deeper Discussion
```

### Crosspost Content
```
See Great Post → Share → Crosspost to Another Subreddit → Add Title → Post → Credits Original
```

### Moderate Content
```
Mod Queue → Review Reported Post → Check Against Rules → Remove (with reason) / Approve → Mod Log Updated
```

### AMA Participation
```
r/IAmA or r/AMA → Celebrity/Expert Posts AMA → Community Asks Questions → OP Answers (distinguished) → Best Q&As Voted Up
```


## URL / Route Structure

```
/                              → Home Feed (Best)
/r/popular                     → Popular
/r/all                         → All
/r/:subreddit                  → Subreddit Feed
/r/:subreddit/comments/:id/:slug → Post / Thread
/r/:subreddit/comments/:id/:slug/:commentId → Direct Link to Comment
/r/:subreddit/wiki             → Subreddit Wiki
/r/:subreddit/wiki/:page       → Wiki Page
/r/:subreddit/about/rules      → Subreddit Rules
/r/:subreddit/about/moderators → Moderator List
/r/:subreddit/about/modqueue   → Mod Queue
/r/:subreddit/search?q=:query  → Search within Subreddit
/r/:subreddit/submit           → Create Post in Subreddit
/submit                        → Create Post (select subreddit)
/search?q=:query               → Search Results
/user/:username                → User Profile
/user/:username/posts          → User's Posts
/user/:username/comments       → User's Comments
/user/:username/gilded         → User's Awarded Content
/message/inbox                 → Inbox / Notifications
/message/messages              → Private Messages
/message/compose               → New Message
/chat                          → Chat Conversations
/settings                      → Settings
/premium                       → Reddit Premium
/coins                         → Reddit Coins
/subreddits/create             → Create Community
/subreddits/leaderboard        → Top Communities
/r/mod                         → Mod Feed (all subreddits you mod)
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Posts, Subreddits, Users | Subreddit, Time (hour/day/week/month/year/all), Post Type, NSFW | Relevance, Hot, Top, New, Most Comments |
| Subreddit | Posts within subreddit | Flair, Time, Post Type | Hot, New, Top (with time selector), Rising, Controversial |
| Comments | Comments in post | — | Best, Top, New, Controversial, Old, Q&A |
| User | User's posts/comments | Type (posts/comments), Subreddit, Time | New, Hot, Top |

## Responsive Behavior

| Breakpoint | Left Sidebar | Feed | Right Sidebar |
|------------|-------------|------|---------------|
| Desktop (≥1200px) | Expanded sidebar (272px) | Center feed (max 740px) | Subreddit info panel (312px) |
| Tablet (768–1199px) | Collapsed (icons) | Full width | Hidden |
| Mobile (<768px) | Hamburger drawer | Full width | Hidden (info in post header) |

### Mobile Adaptations
- Card view default (large thumbnails)
- Swipe to collapse comment threads
- Pull-to-refresh feed
- Image/video: tap for full-screen, swipe gallery
- Voting: tap arrows (no swipe-to-vote by default)
- Share sheet integration
- Compact mode option for data saving
- NSFW blur (tap to reveal)

### Old Reddit (old.reddit.com)
- Legacy desktop layout, still actively used
- No right sidebar panels — sidebar is traditional HTML
- Classic threaded comments
- Custom CSS per subreddit (unique visual themes)
- Preferred by power users for density and performance

## Access Control

| Role | Read | Post | Comment | Vote | Moderate | Admin |
|------|------|------|---------|------|----------|-------|
| Unauthenticated | ✅ (public subreddits) | — | — | — | — | — |
| New User (< thresholds) | ✅ | Limited (some subreddits require min karma/age) | ✅ | ✅ | — | — |
| Regular User | ✅ | ✅ | ✅ | ✅ | — | — |
| Reddit Premium | ✅ (no ads) | ✅ | ✅ | ✅ | — | — |
| Approved User (per sub) | ✅ | ✅ (in restricted subs) | ✅ | ✅ | — | — |
| Moderator (per sub) | ✅ | ✅ | ✅ | ✅ | Own subreddits (remove, ban, flair, sticky, lock, wiki) | — |
| Admin (Reddit employee) | ✅ | ✅ | ✅ | ✅ | All subreddits | ✅ (site-wide policy, suspensions, content policy) |

### Subreddit Types
```
Public: anyone can view and post
Restricted: anyone can view, only approved users can post
Private: invitation only, hidden from search
NSFW: age-gated, hidden from r/all by default
Quarantined: warning gate, restricted discovery (controversial content)
```
