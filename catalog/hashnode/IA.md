---
brand: Hashnode
tagline: Blog on your own domain. Powered by the developer community.
category: Content & Media
website: https://hashnode.com
---

# Information Architecture — Hashnode

## Overview
Hashnode is a developer blogging platform that uniquely allows bloggers to publish on their **own custom domain** while leveraging Hashnode's community, CDN, and SEO infrastructure. The IA supports both the community hub (hashnode.com feed, discussions, challenges) and individual blog instances (myblog.dev). Key features include Series (multi-part tutorials), Newsletter integration, GitHub-backed editing, and a built-in analytics dashboard.

## Site Map

```
hashnode.com (Community Hub)
├── Home (Community Feed)
│   ├── Featured
│   ├── Recent
│   ├── Best (week/month/year)
│   └── Following
├── Explore
│   ├── Tags (#javascript, #devops, #aws, etc.)
│   ├── Trending tags
│   ├── Top blogs
│   └── Hackathons & challenges
├── Article Page (community view)
│   ├── Title, cover image, author
│   ├── Body (Markdown)
│   ├── Reactions (likes)
│   ├── Comments
│   ├── Tags
│   └── Read on author's blog (link)
├── User Profile
│   ├── Bio, social links
│   ├── Articles
│   ├── Badges
│   ├── Blog link (custom domain)
│   └── Followers / Following
├── Notifications
├── Bookmarks

myblog.hashnode.dev (or custom domain)
├── Blog Home
│   ├── Posts list
│   ├── Featured post
│   ├── Newsletter signup
│   └── About page
├── Post Page
│   ├── Title, cover, date, tags
│   ├── Body (Markdown rendered)
│   ├── Table of contents (auto-generated)
│   ├── Series navigation (prev/next)
│   ├── Reactions & comments
│   └── Share
├── Series
│   ├── Series overview
│   └── Ordered post list
├── Tags
│   └── Posts filtered by tag
├── About / Custom pages

Dashboard (Auth)
├── Posts
│   ├── Published
│   ├── Drafts
│   └── Scheduled
├── Series management
├── Newsletter
│   ├── Subscribers
│   └── Send newsletter
├── Analytics
│   ├── Views, reads, reactions
│   ├── Top posts
│   ├── Traffic sources
│   └── Geography
├── Blog settings
│   ├── General (name, description, logo)
│   ├── Domain (custom domain setup)
│   ├── Appearance (theme, colors, layout)
│   ├── Integrations (analytics, comments, GitHub backup)
│   ├── Newsletter settings
│   └── SEO / Social cards
├── Account settings
│   ├── Profile
│   ├── Social accounts
│   └── Developer (API keys)
└── Sponsors / Widgets
```

## Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Community hub | Top nav | Logo, Explore, Bookmarks, Notifications, Write, Profile |
| Community feed | Top tabs | Featured, Recent, Best, Following |
| Individual blog | Custom header | Blog name/logo, navigation links (Home, Tags, About, Newsletter) |
| Post page | Sticky sidebar | Table of contents (auto-generated from headings) |
| Dashboard | Left sidebar | Posts, Series, Newsletter, Analytics, Settings |
| Mobile | Hamburger | Condensed nav for both community and blog views |

**Key pattern**: Dual identity — hashnode.com is the community (discovery + social), while each blog is a standalone site on the author's own domain. Content lives on the blog but is syndicated to the community feed.

## Content Model

| Entity | Key Attributes | Relationships |
|---|---|---|
| Post | title, slug, body (Markdown), cover image, tags, series, published date, canonical URL, SEO description, reactions, comments, read time | → Author, → Tags, → Newsletter |
| Series | name, description, posts (ordered), cover image | has Posts, belongs to Blog |
| Blog | name, subdomain/custom domain, description, logo, favicon, theme, social links, newsletter enabled | has Posts, has Series, belongs to User |
| Tag | name, articles count, followers count, community-wide | has Posts, belongs to Blog |
| Comment | author, body (Markdown), parent comment, reactions, timestamp | belongs to Post, → Author |
| Newsletter Issue | subject, body, recipient list, sent date, stats (opens, clicks) | → Folder, belongs to User |
| Badge | name, icon, criteria (e.g., streak, milestone) | belongs to User |
| User | username, name, bio, avatar, blog URL, social links, badges | has Blogs, has Posts, has Badges |

## User Flows

### 5a. Write & publish

```
Click "Write" → Markdown editor (or use GitHub-backed source) →
  Write article → add title, cover image, tags → Assign to series (optional) → set SEO metadata →
  Publish → article appears on personal blog AND community feed →
  Optionally send as newsletter to subscribers
```


### 5b. Set up custom domain

```
Dashboard → Settings → Domain → Enter custom domain (e.g., blog.mydomain.dev) →
  Add CNAME record at DNS provider → point to Hashnode →
  Hashnode provisions SSL → blog live on custom domain →
  All posts served from custom domain with Hashnode CDN
```


### 5c. Discover & engage (community)

```
Visit hashnode.com → browse Featured/Recent/Best →
  React to articles (like) → comment (threaded Markdown) →
  Follow authors → their posts appear in Following tab → Follow tags → see tagged content in feed →
  Bookmark articles for later reading
```


### 5d. Series creation

```
Dashboard → New Series → title, description, cover → Create posts → assign to series →
  Series page auto-generates with ordered navigation → Readers navigate prev/next within series →
  Series appears as a cohesive learning path
```


## URL / Route Structure

```
# Community (hashnode.com)
/                               → Community feed
/explore/                       → Explore tags & blogs
/n/tag/{tag-name}/              → Tag page
/@{username}/                   → User profile
/{username}/{post-slug}         → Article (community view)
/notifications/                 → Notifications (auth)
/bookmarks/                     → Bookmarks (auth)

# Individual blog (custom domain or {blog}.hashnode.dev)
/                               → Blog home
/{post-slug}                    → Post page
/series/{series-slug}           → Series overview
/tag/{tag-name}                 → Tag filter
/newsletter                     → Newsletter signup
/about                          → About page

# Dashboard
/dashboard/                     → Posts list
/dashboard/drafts/              → Drafts
/dashboard/series/              → Series management
/dashboard/newsletter/          → Newsletter management
/dashboard/analytics/           → Analytics
/dashboard/settings/            → Blog settings
/explore/tags/                     # Browse all tags
/explore/blogs/                    # Top blogs directory
/hackathons/                       # Hackathons & challenges
/@{username}/followers/            # User's followers
/@{username}/following/            # User's following
```

## Search & Filter

| Feature | Behavior |
|---------|----------|
| Community search | By keyword, author, tag |
| Feed filter | Featured, Recent, Best (week/month/year), Following |
| Tag browse | Popular tags, trending, all tags directory |
| Blog search | Search within individual blog posts |
| Dashboard filter | Published, drafts, scheduled, by series |
| Analytics filter | By post, date range, traffic source |

- **Tag filtering**: Filter community feed by specific tags or combinations
- **Blog-level analytics**: Filter analytics by post, traffic source, geography
## Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full community feed, sidebar with trending tags, wide reading view with ToC sidebar |
| Tablet (768–1023px) | Single-column feed, collapsible ToC, simplified dashboard |
| Mobile (<768px) | Hamburger nav, full-width posts, floating actions, bottom sheet for ToC |
| Individual blog | Responsive by default (theme-dependent), mobile-optimized typography |
| AMP | Optional AMP versions for Google discover/search |

## Access Control

| Role | Access |
|------|--------|
| Visitor | Read articles on community and individual blogs, search |
| Logged-in User | Write articles, comment, react, follow, bookmark, newsletter subscribe |
| Blog Owner | Full blog admin — posts, series, newsletter, analytics, settings, domain |
| Team Blog Member | Write/edit posts on team blog, configurable permissions |
| Newsletter Subscriber | Receive email newsletters, manage preferences |
| Hashnode Ambassador | Badge, early access to features, community leadership |
| API Developer | Headless CMS access, programmatic publishing |
| Internal | Community moderation, featured content selection, infrastructure |
