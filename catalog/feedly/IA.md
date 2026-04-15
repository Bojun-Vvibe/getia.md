---
brand: Feedly
tagline: Track the topics and trends that matter to you.
category: Content & Media
website: https://feedly.com
---

# Information Architecture — Feedly

## Overview
Feedly is an RSS reader and content intelligence platform that aggregates news, blogs, and research sources into a unified feed. The IA is organized around **Feeds** (RSS subscriptions), **Boards** (curated collections for sharing/organizing), and **Leo** (an AI assistant that prioritizes, summarizes, and filters content). Feedly spans from individual power-readers to enterprise teams tracking competitive intelligence, threat research, and industry trends.

## Site Map

```
feedly.com
├── Home (marketing)
├── My Feedly (Auth — core experience)
│   ├── Today (AI-prioritized)
│   ├── All feeds
│   ├── Feed folders
│   │   ├── /{folder-name}
│   │   └── Individual feed
│   ├── Boards
│   │   ├── Personal boards
│   │   ├── Team boards (shared)
│   │   └── /{board-name}
│   ├── Read Later
│   ├── Recently Read
│   ├── Saved searches (Keyword Alerts)
│   └── Newsletters
├── Leo AI
│   ├── Priority articles
│   ├── Topic tracking
│   ├── Entity tracking (companies, people, products)
│   ├── Trend detection
│   ├── AI summaries
│   ├── Mute filters
│   └── Custom AI models
├── Discover / Add Content
│   ├── Search sources (blogs, news, YouTube, Reddit, etc.)
│   ├── Browse by topic
│   ├── Featured sources
│   ├── Newsletters integration
│   └── Twitter / social feeds
├── Integrations
│   ├── Slack
│   ├── Microsoft Teams
│   ├── Zapier
│   ├── Buffer
│   ├── Notion
│   ├── Evernote
│   └── ... (many more)
├── Pricing
│   ├── Free / Pro / Pro+ / Business / Enterprise
│   └── Feature comparison
├── Solutions
│   ├── Market intelligence
│   ├── Threat intelligence
│   ├── Research
│   ├── PR & communications
│   └── Content marketing
├── Help Center
│   ├── Getting started
│   ├── Feeds & sources
│   ├── Leo AI
│   ├── Boards & sharing
│   ├── Integrations
│   └── Contact
├── Blog
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── GDPR
└── Auth
    ├── Log in
    └── Get started
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| App (auth) | Left sidebar | Today, Feeds (collapsible folders), Boards, Read Later, Recently Read, Leo (AI) |
| Feed view | Top bar | All / Unread, view mode (magazine/title-only/cards), sort (newest/oldest/relevance), mark all read |
| Article view | Inline expansion or full view | Summary, full article, save to board, read later, share, highlight, note |
| Leo AI | Inline badges + sidebar filter | Priority flag, topic tag, entity tag, summary overlay |
| Mobile app | Bottom tabs | Today, Feeds, Boards, Search, More |

**Key pattern**: The sidebar is the primary organizational structure — feeds grouped into folders, boards as curated output. Leo AI works as an invisible layer that tags and prioritizes articles inline, not as a separate view.

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Article | title, source, author, published date, summary, full text, images, URL, Leo score, topics, entities, read/unread | → Feed, → Board, → Source |
| Feed (Source) | name, URL (RSS), category, frequency, last updated, article count | → Folder, has Articles |
| Folder | name, feeds, unread count | has Feeds, belongs to User |
| Board | name, articles (saved), owner, shared flag, team, notes | has Articles, belongs to User/Team |
| Keyword Alert | query, sources scope, results, frequency | → Sources, has Articles |
| Leo Rule | type (topic/entity/keyword/mute), criteria, action (prioritize/mute/tag) | → Articles, belongs to User |
| Highlight | text, article, note, color | → Article, belongs to User |
| Newsletter | sender, subject, body, assigned folder | → Folder, belongs to User |

## User Flows

### 5a. Add sources & read

```
Click "+" or Discover → search for blog/site/YouTube channel/subreddit →
  Add to folder → articles appear in feed → Browse feed → read inline or open full article →
  Mark as read, save to board, or share
```


### 5b. Train Leo AI

```
Read articles → Leo learns from your reading patterns →
  Set explicit rules: "Prioritize articles about 'AI regulation'" →
  Set mute filters: "Hide articles about sports" →
  Leo adds priority badges → "Today" view shows AI-curated top articles →
  Review Leo's picks → thumbs up/down to improve
```


### 5c. Team collaboration (Business)

```
Create shared board → invite team members → Save relevant articles to board → add notes/highlights →
  Team sees curated intelligence board → Share board via Slack integration or email digest →
  Track what team members saved and annotated
```


### 5d. Keyword Alerts

```
Set up keyword alert (e.g., "competitor name" OR "product launch") →
  Feedly monitors all sources for matches → Matching articles appear in dedicated alert feed →
  Optionally forward to Slack or email
```


## URL / Route Structure

```
/                               → Marketing home
/i/discover/                    → Discover sources
/i/discover/search/{query}/     → Source search
/i/latest/                      → All feeds (auth)
/i/folder/{folder-id}/          → Folder view
/i/subscription/{feed-id}/      → Individual feed
/i/board/{board-id}/            → Board view
/i/saved/                       → Read Later
/i/recently-read/               → Recently Read
/i/keyword/{alert-id}/          → Keyword alert
/i/leo/                         → Leo AI settings
/i/entry/{entry-id}/            → Full article view
/pricing/                       → Pricing plans
/solutions/{use-case}/          → Solution page
/blog/                          → Blog
/help/                          → Help center
/i/today/                      # Today (AI-prioritized)
/i/newsletters/                # Newsletter inbox
/i/highlights/                 # Highlights
/i/team/                       # Team boards
/i/settings/                   # Account settings
/i/settings/integrations/      # Integration settings
/i/settings/leo/               # Leo AI settings
/i/opml/                       # OPML import/export
/login/                        # Login page
/signup/                       # Get started
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Source search | Find RSS feeds by URL, site name, or topic |
| Article search | Search within subscribed feeds by keyword, date, source |
| Leo filters | Priority level (must-read, important), topic, entity, source |
| View modes | All vs. Unread only |
| Sort | Newest, oldest, relevance (Leo-powered) |
| Board search | Search within board articles |
| Keyword alerts | Persistent keyword monitoring across sources |

- **Highlight search**: Search within saved highlights and notes
- **Team board search**: Search within shared team boards
- **Newsletter filtering**: Filter newsletters by sender or date
## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Sidebar + 3-pane view (folders / article list / article detail), full Leo dashboard |
| Tablet (768–1023px) | Collapsible sidebar, 2-pane (list + detail) |
| Mobile (<768px) | Hamburger sidebar, single-pane, swipe to mark read, pull-to-refresh |
| App (iOS/Android) | Bottom tabs, offline reading, widget for unread count |
| Browser extension | Quick save to board from any web page |


### Platform-Specific UX
- Leo AI priority badges appear inline on articles — not as a separate filtered view
- Three-pane layout (folders | article list | article detail) mirrors traditional email clients
- Board sharing enables team intelligence workflows — curate and annotate for colleagues
- Newsletter integration assigns incoming newsletters to folders like RSS feeds
- OPML import/export ensures portability from other RSS readers
- Power search supports Boolean operators and date range filtering
- Browser extension enables one-click "save to board" from any webpage
- Feedly's AI summary feature generates article abstracts for quick scanning
- Highlight and note system allows inline annotation directly on articles

## Access Control

| Role | Access |
|------|--------|
| Free User | Up to 100 sources, 3 feeds, basic organization |
| Pro | Unlimited sources, Leo AI (basic), boards, notes, power search |
| Pro+ | Leo AI (advanced), keyword alerts, AI summaries, integrations (Slack, Teams) |
| Business | Team boards, shared feeds, team analytics, SAML SSO |
| Enterprise | Custom AI models, compliance features, dedicated support, API access |
| Team Member | Access to shared boards/feeds, configurable permissions (view/contribute/admin) |
| API Developer | Programmatic access to feeds, entries, boards, search |
| Internal | Content indexing, AI model training, infrastructure |
