# Blog / Magazine — Information Architecture

## Overview

A content publishing platform for editorial content, personal blogs, or digital magazines. The mental model is a **publication** — articles organized by topics/categories, presented in a reading-friendly layout. Content discoverability and reading experience are priorities.

## Site Map

```
├── Home
│   ├── Featured / Hero Article
│   ├── Latest Articles
│   ├── Editor's Picks
│   ├── Category Highlights
│   ├── Popular / Trending
│   └── Newsletter Signup
├── Category Page
│   ├── Category Description
│   ├── Featured in Category
│   ├── Article List (paginated or infinite scroll)
│   └── Subcategories
├── Tag Page
│   └── Articles with Tag
├── Article Page
│   ├── Title, Author, Date, Read Time
│   ├── Hero Image
│   ├── Body Content (rich text, media embeds)
│   ├── Tags
│   ├── Author Bio Card
│   ├── Share Buttons
│   ├── Related Articles
│   ├── Comments Section
│   └── Newsletter CTA
├── Author Page
│   ├── Bio, Avatar, Social Links
│   └── Articles by Author
├── Search Results
├── About
├── Contact
├── Newsletter / Subscribe
├── Archive (date-based browsing)
└── Footer
    ├── Categories
    ├── About / Contact
    ├── Social Links
    ├── RSS Feed
    └── Legal (Privacy, Terms)
```

### CMS / Admin
```
├── Dashboard (views, top articles, comments pending)
├── Posts
│   ├── All Posts
│   ├── Editor (rich text / block editor)
│   ├── Drafts
│   ├── Scheduled
│   └── Trash
├── Media Library
├── Categories & Tags
├── Comments (moderation queue)
├── Authors / Users
├── Pages (static)
├── SEO Settings
├── Analytics
└── Settings (site title, logo, social, theme)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, category links, search icon, subscribe CTA |
| **Category Nav** | Horizontal menu or hamburger | Top-level categories |
| **Article Progress** | Reading progress bar (top) | Shows % scrolled through article |
| **Sticky Share** | Floating sidebar or bottom bar | Share to social platforms |
| **Footer** | Full-width | Category links, about, newsletter form, social |
| **Pagination** | Bottom of list pages | Numbered pages or "Load More" |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Article | title, slug, excerpt, body (rich text), cover_image, status, published_at, read_time, featured | belongs to Author, Categories; has Tags, Comments |
| Category | name, slug, description, parent_id | has many Articles, Subcategories |
| Tag | name, slug | many-to-many with Articles |
| Author | name, avatar, bio, social_links, role | has many Articles |
| Comment | name, email, body, approved, created_at | belongs to Article, can be nested |
| Page | title, slug, body | standalone (About, Contact) |
| Newsletter | email, subscribed_at, preferences | standalone |

### Article Status Flow
`draft → review → scheduled → published → updated → archived`

## User Flows

### Reader: Discover and Read
```
Home → Featured Article / Category → Article → Read → Share / Comment → Related Article
```

### Reader: Search
```
Search Icon → Type Query → Results → Article → Read
```

### Writer: Publish
```
Dashboard → New Post → Write (editor) → Add Media/Tags/Category → Preview → Publish/Schedule
```

## URL / Route Structure

```
/                          → Home
/:category                 → Category Page
/:category/:subcategory    → Subcategory Page
/:category/:slug           → Article (or /:year/:month/:slug)
/tag/:tag                  → Tag Page
/author/:name              → Author Page
/search?q=:query           → Search Results
/archive                   → Archive (by date)
/about                     → About Page
/contact                   → Contact Page
/subscribe                 → Newsletter Page
/feed.xml                  → RSS Feed
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Site Search | Article title, body, author | Category, Tag, Date Range, Author | Relevance, Date (newest), Popularity |
| Category | Articles in category | Tags, Date Range | Date, Popularity |
| Admin Posts | Title, body, author | Status, Category, Author, Date | Date, Title, Views |

## Responsive Behavior

| Breakpoint | Header | Article Grid | Article Page |
|------------|--------|-------------|--------------|
| Desktop (≥1024px) | Full nav bar | 3-column grid | Content (max 720px) + sidebar |
| Tablet (768–1023px) | Condensed nav | 2-column grid | Full-width content |
| Mobile (<768px) | Hamburger + logo + search | Single column cards | Full-width, larger text |

### Reading Experience
- Article body: max-width 680-720px, centered
- Typography optimized for reading (18-20px body, 1.6-1.8 line height)
- Code blocks: horizontal scroll
- Images: full-bleed or contained with captions
- Estimated read time displayed

## Access Control

| Role | Read | Comment | Write | Edit Others | Admin |
|------|------|---------|-------|-------------|-------|
| Reader | ✅ | ✅ (moderated) | — | — | — |
| Subscriber | ✅ (+ premium) | ✅ | — | — | — |
| Author | ✅ | ✅ | Own posts | — | — |
| Editor | ✅ | ✅ | ✅ | ✅ | — |
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ |
