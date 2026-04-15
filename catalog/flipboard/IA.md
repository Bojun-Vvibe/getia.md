---
brand: Flipboard
tagline: Stories for you. Curated by people who care.
category: Content & Media
website: https://www.flipboard.com
---

# Information Architecture — Flipboard

## Overview
Flipboard is a magazine-style news aggregation platform known for its signature **flip animation** (page-turn gesture) and visually rich content presentation. The IA centers on **Magazines** (user-curated collections), **Storyboards** (editorial narratives), and **Smart Magazines** (AI-curated topic feeds). Content is sourced from RSS, social media, and publisher partnerships, then presented in a beautiful, lean-back reading experience that mimics a glossy magazine.

## Site Map

```
flipboard.com
├── Home (For You feed)
├── Explore
│   ├── Topics
│   │   ├── Technology
│   │   ├── Science
│   │   ├── Politics
│   │   ├── Business
│   │   ├── Design
│   │   ├── Food
│   │   ├── Travel
│   │   ├── Sports
│   │   └── ... (100+ topics)
│   ├── Smart Magazines (AI-curated)
│   ├── Community Magazines (user-created)
│   ├── Storyboards (editorial)
│   └── Publisher channels
├── Following
│   ├── Followed topics
│   ├── Followed magazines
│   ├── Followed publishers
│   └── Followed people
├── Magazines
│   ├── My magazines
│   ├── Liked magazines
│   └── Magazine detail
│       ├── Cover image
│       ├── Description
│       ├── Curator
│       ├── Article list
│       └── Flip-through view
├── Storyboard
│   ├── Narrative layout
│   ├── Mixed media (text, images, video, tweets)
│   └── Author / curator
├── Article View
│   ├── Full article (in-app reader or linked)
│   ├── Flip to related stories
│   ├── Like / Comment / Share
│   └── Flip into magazine
├── Profile
│   ├── Bio & avatar
│   ├── Magazines curated
│   ├── Storyboards
│   ├── Liked articles
│   ├── Followers / Following
│   └── Activity
├── Notifications
├── Flipboard TV
│   ├── Video news
│   └── Channels
├── Help
│   ├── Getting started
│   ├── Reading
│   ├── Curating
│   ├── Privacy
│   └── Contact
├── Publishers
│   ├── Partner program
│   ├── Content integration
│   └── Analytics
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Community guidelines
└── Auth
    ├── Log in
    └── Sign up
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| App | Bottom tab bar | Home, Following, Explore, Notifications, Profile |
| Web | Top nav | Logo, Home, Following, Explore, Notifications, Profile, Search |
| Article | Gesture-based | Flip up/down (swipe) to navigate between articles — magazine page-turn metaphor |
| Magazine | Cover + scroll | Visual cover, then flip through articles |
| Explore | Topic grid | Visual topic cards, magazine covers |
| Profile | Tab sections | Magazines, Storyboards, Likes, Activity |

**Key pattern**: The flip gesture IS the navigation. Vertical swipes page through articles like a physical magazine. This gesture-driven nav replaces traditional lists and is Flipboard's signature UX.

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Article | title, source/publisher, author, body (or link), cover image, published date, likes, comments, flipped-into count | → Feed, → Board, → Source |
| Magazine | title, description, cover image, curator, articles, followers, topic tags, public/private | has Articles, belongs to Curator |
| Smart Magazine | topic, AI-curated articles, auto-updating, follower count | has Articles, belongs to Curator |
| Storyboard | title, author, narrative blocks (text, image, video, embed), cover image | has Articles, belongs to User/Team |
| Topic | name, related topics, Smart Magazine, follower count | has Smart Magazine, has Articles |
| Publisher Channel | name, logo, articles, followers, verified flag | has Articles, belongs to Publisher |
| Profile | name, avatar, bio, magazines, followers, following | has Magazines, has Followers |

## User Flows

### 5a. Read & discover

```
Open Flipboard → Home "For You" feed (personalized) → Flip through articles (vertical swipe gesture) →
  Tap article → full view (in-app reader or original source) →
  Like, comment, or flip into a personal magazine →
  Explore tab → browse topics → follow new topics for more content
```


### 5b. Curate a magazine

```
Tap "+" → create new magazine (title, description, cover) →
  Browse articles → "Flip into" your magazine → Arrange article order → publish →
  Share magazine link → followers can subscribe → Magazine grows as you continue adding articles
```


### 5c. Create a Storyboard

```
New Storyboard → title + cover image →
  Add blocks: text paragraphs, images, video embeds, tweets, articles →
  Arrange narrative flow → preview → Publish → appears on profile and can be shared
```


### 5d. Follow & personalize

```
During onboarding → select interests (5+ topics) → Flipboard curates Home feed based on selections →
  Follow specific magazines, publishers, and people →
  "Following" tab shows chronological updates from followed sources →
  AI refines recommendations based on reading behavior
```


## URL / Route Structure

```
/                               → Home (For You)
/explore/                       → Explore topics
/topic/{topic-slug}/            → Topic Smart Magazine
/@{username}/                   → User profile
/@{username}/{magazine-slug}/   → User magazine
/storyboard/{slug}/             → Storyboard
/article/{slug}/                → Article view
/search?q={query}               → Search results
/publishers/                    → Publisher program
/help/                          → Help center
/tv/                            → Flipboard TV
/@{username}/storyboards/      # User's storyboards
/@{username}/likes/             # User's liked articles
/@{username}/followers/         # Followers list
/@{username}/following/         # Following list
/notifications/                # Notifications
/settings/                     # Account settings
/settings/profile/             # Profile settings
/settings/interests/           # Manage interests
/about/                        # About Flipboard
/terms/                        # Terms of service
/privacy/                      # Privacy policy
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | Search articles, magazines, topics, people, publishers |
| Topic browse | Visual grid of 100+ topics |
| Magazine search | By title, topic, curator |
| Following filter | Filter by magazines, topics, people, publishers |
| Smart Magazine | Auto-curated, no manual filtering needed |
| Sort (implicit) | Home = algorithmic, Following = chronological |

- **Storyboard search**: Find storyboards by title or author
- **Publisher search**: Find publishers and content partners
- **History**: Recently viewed articles for re-discovery
## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Magazine-style layout, multi-column, click-to-flip, full Storyboard view |
| Tablet (768–1023px) | Optimized for flip gesture (iPad is the signature Flipboard experience), landscape + portrait |
| Mobile (<768px) | Vertical flip, full-screen articles, bottom tabs |
| App (iOS/Android) | Native flip animation, offline reading, push notifications for breaking news |
| Web widget | Embeddable magazine widget for blogs/sites |


### Platform-Specific UX
- The flip gesture (vertical swipe) is the core navigation metaphor — replaces scrolling
- Magazine cover design follows glossy print magazine aesthetics
- Smart Magazines are AI-curated and auto-updating based on topic algorithms
- Storyboards combine text, images, video, and social embeds for editorial narratives
- Publisher partnerships provide verified channels with analytics access
- Flipboard TV offers video news consumption in a dedicated section
- Content is sourced from RSS, social media APIs, and direct publisher integrations
- The "Flip Into" action is the primary curation gesture — adds articles to personal magazines
- Topic following during onboarding seeds the personalization algorithm

## Access Control

| Role | Access |
|------|--------|
| Visitor | Browse public magazines, articles (limited), topic pages |
| Logged-in User | Personalized feed, create magazines, follow, like, comment, Storyboards |
| Curator | Public magazine with followers, editorial influence |
| Publisher (Partner) | Verified channel, analytics, content integration, monetization |
| Flipboard TV Contributor | Video content submission, channel management |
| Editorial Team | Smart Magazine curation, featured content, Storyboard promotion |
| Internal | Content moderation, recommendation engine, publisher relations |
