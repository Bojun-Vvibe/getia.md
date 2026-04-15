---
brand: Hacker News
tagline: News for hackers, by hackers
category: Social & Communication
website: https://news.ycombinator.com
---

# Information Architecture — Hacker News

## Overview

Hacker News (HN) is Y Combinator's minimalist technology news aggregator and discussion forum. The IA is intentionally sparse — a single-column list of links ranked by a gravity-based algorithm, threaded comments, and virtually no media embellishments. This design philosophy prioritizes substance over presentation, rewarding intellectual curiosity and deep technical discussion. The site has barely changed its layout since 2007.

## Site Map

```
Hacker News
├── Front Page (Top Stories)
├── New (newest submissions)
├── Past (top stories from past days)
├── Comments (recent comments across all threads)
├── Ask HN
│   └── [Ask HN submissions — community questions]
├── Show HN
│   └── [Show HN submissions — project demos]
├── Jobs
│   └── [YC company job postings]
├── Submit
│   └── Submit link or text post
├── Item (story/comment detail)
│   ├── Story metadata (points, submitter, time, comment count)
│   └── Threaded comments (recursive)
├── User Profile
│   ├── About
│   ├── Karma
│   ├── Submissions
│   └── Comments
├── Threads (user's comment history)
├── Favorites (saved stories/comments)
├── Leaders (top karma users)
├── Guidelines
├── FAQ
├── API
│   ├── /v0/topstories
│   ├── /v0/newstories
│   ├── /v0/item/{id}
│   └── /v0/user/{id}
└── Lists
    ├── Best (highest-voted recent stories)
    ├── Active (most-discussed)
    └── Noob Comments (new users' comments for mentoring)
```

## Navigation Model

- **Type**: Single horizontal text nav bar at top (orange header)
- **Top Bar Links**: Y logo | Hacker News | new | past | comments | ask | show | jobs | submit
- **Right Side**: Login/logout, username link
- **No Sidebar**: Pure single-column layout
- **Pagination**: "More" link at bottom of every list page (30 items per page)
- **Thread Navigation**: Click comment count → full threaded discussion; indent = nesting depth
- **No JavaScript-based Navigation**: All navigation is server-rendered page loads

## Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Story | title, URL (or text body for Ask/Show HN), points, submitter, timestamp, comment count | → Comments, → User |
| Comment | text (markdown-ish), author, timestamp, parent, points (hidden for 24h) | → Story, → Parent Comment, → User |
| Ask HN | title (prefixed "Ask HN:"), text body, points, submitter | → Comments |
| Show HN | title (prefixed "Show HN:"), URL, text body, points | → Comments |
| Job Posting | title, URL, company (YC batch), timestamp | standalone (no comments/votes) |
| User Profile | username, created date, karma, about (text), submissions, comments | → Stories, → Comments |
| Poll (rare) | title, options, vote counts | → Comments |

## User Flows

### Reading & Voting

```
Visit front page → Scan ranked list of 30 story titles with domains →
  Click title → Opens external link (or HN text post) →
  Click comment count → View threaded discussion →
  Upvote stories/comments (if >500 karma: can also downvote comments) →
  Click "More" at bottom → Next page of stories
```


### Submitting a Story

```
Click "submit" in nav → Enter URL and title (or text for Ask/Show HN) →
  Submit → Story appears on /newest →
  If it gains upvotes quickly, it rises to the front page via ranking algorithm →
  Points decay over time (gravity model): score / (age + 2)^1.8
```


### Show HN Flow

```
Submit with title starting "Show HN:" + project URL + description →
  Appears on /show page and /newest → Community provides feedback in comments →
  Successful Show HN posts reach front page
```



### Ask HN Discussion

```
Click 'submit' → Title starts with 'Ask HN:' → Write question in text body → Submit → Community responds in comments → Best answers voted to top → Discussion unfolds over hours/days
```

### Flagging Inappropriate Content

```
See problematic story/comment → Click 'flag' link → Enough flags → Story de-ranked or marked [flagged] → Moderator reviews → May be [dead] or restored
```

## URL / Route Structure

```
news.ycombinator.com/                       # Front page (top stories)
news.ycombinator.com/newest                 # New submissions
news.ycombinator.com/past?page={date}       # Past top stories
news.ycombinator.com/newcomments            # Recent comments
news.ycombinator.com/ask                    # Ask HN
news.ycombinator.com/show                   # Show HN
news.ycombinator.com/jobs                   # YC job postings
news.ycombinator.com/item?id={id}           # Story or comment detail
news.ycombinator.com/user?id={username}     # User profile
news.ycombinator.com/threads?id={username}  # User's comments
news.ycombinator.com/favorites?id={username}# User's favorites
news.ycombinator.com/submit                 # Submit form
news.ycombinator.com/leaders                # Top karma leaderboard
hacker-news.firebaseio.com/v0/             # Public API root
news.ycombinator.com/best                     # Best stories
news.ycombinator.com/active                   # Most-discussed stories
news.ycombinator.com/noobstories              # New users' stories
news.ycombinator.com/noobcomments              # New users' comments
news.ycombinator.com/login                    # Login page
news.ycombinator.com/submitted?id={username}  # User's submissions
news.ycombinator.com/upvoted?id={username}    # User's upvoted items
news.ycombinator.com/changepw                 # Change password
news.ycombinator.com/newpoll                  # Create poll (rare)
hn.algolia.com/                               # Full-text search (external)
hn.algolia.com/api                            # Algolia search API
hacker-news.firebaseio.com/v0/beststories     # API: best stories
hacker-news.firebaseio.com/v0/askstories      # API: Ask HN stories
hacker-news.firebaseio.com/v0/showstories     # API: Show HN stories
hacker-news.firebaseio.com/v0/jobstories      # API: Job stories
hacker-news.firebaseio.com/v0/updates         # API: recent changes
```

## Search & Filter

- **No Built-in Search**: HN has no native search feature on the site
- **Algolia HN Search**: hn.algolia.com provides full-text search (official integration)
  - Filter by stories, comments, date range, popularity
- **List Filters**: Top / New / Best / Active / Ask / Show / Jobs — predefined views
- **Past Page**: Browse top stories by specific date
- **No Tags/Categories**: Stories are not categorized; ranking is purely algorithmic
- **Flagging**: Users can flag inappropriate content; flagged stories may be de-ranked or killed

- **Algolia Search Filters**: Filter by stories only, comments only, popularity threshold, date range
- **Algolia Sort Options**: Sort by relevance, date, popularity
- **User Submissions**: Browse all submissions and comments by a specific user
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| All Sizes | Same HTML layout — no responsive breakpoints; table-based layout from 2007 |
| Mobile | Horizontal scroll possible on very narrow screens; text remains readable; tap targets are small |
| Desktop | Narrow centered column (~85% width); generous whitespace; monospace-friendly |
| No Media Queries | Site predates responsive web design; works through simplicity rather than adaptation |
| Third-Party Apps | Mobile experience primarily through third-party clients (Harmonic, Hack, Materialistic) that provide proper mobile UI |


### Platform-Specific UX
- Table-based HTML layout has not changed significantly since 2007 — intentional minimalism
- No JavaScript frameworks — all navigation is server-rendered page loads
- Comment indentation depth indicates nesting level in threaded discussions
- Karma system: points earned from upvotes on stories and comments (not visible to others on comments for 24h)
- Flagging mechanism: users with sufficient karma can flag stories for moderation
- Hellban (shadow ban): banned users' posts visible only to themselves — others see nothing
- No edit/delete after ~2 hours — encourages thoughtful posting
- Gravity-based ranking: score / (age + 2)^1.8 ensures fresh content rises and old content falls
- "Show dead" toggle (karma >30) reveals flagged/killed posts for transparency
- Single moderator team (dang, sctb) manages the entire community
- No images, no avatars, no rich media — pure text-based discussion
- Orange color scheme is Y Combinator's brand color
- Poll feature exists but is rarely used — limited to text options
- Jobs board is exclusively for YC portfolio companies

### Historical Context
- Founded by Paul Graham in 2007 as a Y Combinator community project
- Algolia search (hn.algolia.com) is the unofficial but sanctioned search engine
- Firebase API provides programmatic access to stories, comments, and users
- Third-party mobile clients (Harmonic, Hack, Materialistic) provide proper mobile UX
- "Who Is Hiring" monthly threads are among the most valuable recurring posts


### Ranking Algorithm
```
Score = (votes - 1)^0.8 / (age_hours + 2)^1.8

Key properties:
- Recent stories with few votes can outrank older stories with many votes
- The denominator grows faster than the numerator — stories naturally decay
- Flagged stories receive a heavy penalty multiplier
- Second-chance pool rescues worthy stories that didn't get initial traction
```

## Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Read all stories and comments; view profiles; use API |
| Registered User | Submit stories, comment, upvote, flag, edit own posts (within ~2 hours), save favorites |
| User (karma > 500) | Downvote comments, access to /bestcomments |
| User (karma > 30) | Can set "showdead" to see killed/flagged posts |
| Moderator (dang, sctb) | Edit titles, merge duplicates, kill/unkill stories, detach comments, ban users, add [flagged]/[dead] labels |
| New User | Comments may appear in /newcomments for community mentoring; rate-limited posting |
| Banned/Hellbanned | Posts visible only to self; invisible to others (shadow ban) |
| YC Founder | Can post jobs to /jobs; may have special submission privileges |
