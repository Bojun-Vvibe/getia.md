---
brand: Medium
tagline: "Where good ideas find you. Creator-driven publishing platform with curation, claps, and membership."
category: Blog
website: https://medium.com
---

# Medium — Information Architecture

## Overview

A creator-driven publishing and reading platform. Medium's mental model is a **curated magazine you personalize** — writers publish articles, readers follow topics and writers, and an algorithmic feed surfaces quality content. Key differentiators: the "clap" engagement system (up to 50 claps per article), the metered paywall with member-only content, publications (multi-author blogs hosted on Medium), the clean distraction-free reading experience, and the Partner Program that pays writers based on member reading time.

## Site Map

```
├── Home / Feed
│   ├── For You (personalized algorithmic feed)
│   ├── Following (from followed writers + publications + topics)
│   ├── Trending on Medium (top stories)
│   └── Topic Suggestions (chips: Technology, Self Improvement, Programming, etc.)
├── Explore
│   ├── Topic Pages
│   │   ├── Technology
│   │   ├── Programming
│   │   ├── Data Science
│   │   ├── Self Improvement
│   │   ├── Productivity
│   │   ├── Writing
│   │   └── ... (100+ topics)
│   ├── Recommended Reading Lists
│   ├── Staff Picks
│   └── Publications Directory
├── Article Page
│   ├── Title (large, prominent)
│   ├── Subtitle
│   ├── Author (avatar, name, follow button, bio snippet)
│   ├── Publication (if published in one)
│   ├── Date, Read Time
│   ├── Hero Image
│   ├── Body Content
│   │   ├── Rich Text (headings, paragraphs, quotes)
│   │   ├── Images (full-width, side-by-side)
│   │   ├── Code Blocks (syntax highlighted)
│   │   ├── Embeds (tweets, YouTube, GitHub Gists, CodePen)
│   │   ├── Pullquotes
│   │   └── Horizontal Rules
│   ├── Tags (up to 5)
│   ├── Engagement Bar (sticky bottom)
│   │   ├── Clap (up to 50 per article per user)
│   │   ├── Responses Count
│   │   ├── Save (bookmark)
│   │   └── Share (Twitter, LinkedIn, Facebook, copy link)
│   ├── Author Bio (end of article)
│   │   ├── Avatar, Name, Bio
│   │   ├── Follow Button
│   │   └── More from Author
│   ├── Responses Section
│   │   ├── Response (mini-article format, not just a comment)
│   │   ├── Clap on responses
│   │   └── Reply to response
│   ├── More from [Publication]
│   ├── Recommended Stories
│   └── Member-only Indicator (★ star icon)
├── Write / Editor
│   ├── Title Field
│   ├── Content Editor (block-based, minimal UI)
│   │   ├── Text (auto-formatting on Enter)
│   │   ├── [+] Button: Image, Embed, Divider, Code Block
│   │   ├── Inline Toolbar (bold, italic, link, heading, quote, code)
│   │   ├── Image Upload (drag & drop, URL, Unsplash)
│   │   └── Keyboard shortcuts
│   ├── Publish Flow
│   │   ├── Preview
│   │   ├── Add Tags (up to 5)
│   │   ├── Select Publication (optional)
│   │   ├── Set Featured Image + Alt Text
│   │   ├── Custom Excerpt
│   │   ├── SEO Title (optional override)
│   │   ├── Content Licensing
│   │   ├── Schedule Publish (date/time)
│   │   └── Member-only Toggle (paywall)
│   ├── Drafts (auto-save)
│   └── Import Story (from URL)
├── Publication
│   ├── Publication Home (custom layout)
│   ├── About
│   ├── Editors / Writers
│   ├── Tags / Sections (custom navigation)
│   ├── Archive
│   ├── Newsletter
│   ├── Follow Publication
│   └── Publication Settings (editors only)
│       ├── Homepage Layout
│       ├── Navigation (custom tabs)
│       ├── Writers (invite, manage)
│       ├── Newsletter Settings
│       └── Custom Domain (legacy)
├── Profile
│   ├── Name, Avatar, Bio, Follow Button
│   ├── Home (featured / pinned stories)
│   ├── Lists (curated reading lists)
│   ├── About
│   ├── Followers / Following
│   └── Stories Published
├── Lists (Reading Lists)
│   ├── Saved Stories (private bookmarks)
│   ├── Custom Lists (public or private)
│   └── Reading History
├── Notifications
│   ├── Claps on your stories
│   ├── New followers
│   ├── Responses to your stories
│   ├── Highlights on your stories
│   ├── Publication submissions
│   └── Recommendations from people you follow
├── Stats (Writer Dashboard)
│   ├── Views (daily/monthly graph)
│   ├── Reads (read ratio)
│   ├── Fans (unique clappers)
│   ├── Claps
│   ├── Per-Story Breakdown
│   ├── Traffic Sources (internal, external, search)
│   ├── Audience Stats (followers, email subscribers)
│   └── Partner Program Earnings (if enrolled)
├── Settings
│   ├── Account
│   ├── Publishing (default license, SEO)
│   ├── Membership (Medium Member plan)
│   ├── Partner Program (writer monetization)
│   ├── Email Digest Preferences
│   ├── Notifications
│   ├── Security (password, social logins)
│   ├── Muted Users / Publications
│   └── Manage Blocked Users
└── Membership / Paywall
    ├── Become a Member (pricing)
    ├── Member Benefits (unlimited reading, audio, no ads)
    └── Gift Membership
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed, clean white | Medium logo (home link), "Write" button, search icon, notifications bell, user avatar |
| **Feed Tabs** | Below top bar on home | "For You" / "Following" toggle |
| **Topic Chips** | Horizontal scrollable pills on home | Technology, Programming, Self Improvement, etc. (customizable) |
| **Sticky Engagement Bar** | Fixed bottom on article page | Clap, Responses, Save, Share, overflow menu |
| **Reading Progress** | Thin progress bar at top | Shows % scrolled through article body |
| **Floating [+]** | In editor, left gutter | Appears on empty lines to add media/embed |
| **Inline Toolbar** | In editor, on text selection | Bold, italic, link, heading, quote, code |
| **Mobile Nav** | Bottom tab bar | Home, Explore, Write, Bookmarks, Profile |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Story | title, subtitle, body (rich text blocks), slug, featured_image, read_time, claps_count, responses_count, views_count, reads_count, published_at, member_only (bool), status (draft/published/unlisted), canonical_url, seo_title, license | belongs to Author, Publication (optional); has Tags, Responses |
| Tag / Topic | name, slug, description, followers_count | many-to-many with Stories |
| Author (User) | username, name, avatar, bio, twitter_handle, followers_count, following_count | has many Stories, Responses, Lists, Publications |
| Publication | name, slug, description, logo, avatar, tags[], editors[], writers[] | has many Stories, Newsletters, Navigation Items |
| Response | body (rich text, mini-article format), claps_count, created_at | belongs to Story and User |
| Clap | count (1-50 per user per story), created_at | belongs to User and Story/Response |
| Highlight | text_selection, note (optional), created_at | belongs to User and Story |
| List | name, description, public (bool), stories[] | belongs to User |
| Bookmark | story, saved_at | belongs to User |
| Newsletter | publication, subject, body, sent_at, subscribers_count | belongs to Publication |
| Earnings | story, month, amount, member_reading_time | belongs to User (Partner Program) |

### Story Status Flow
`draft → (submit to publication → editor review →) published → updated → unlisted → deleted`

### Engagement Model
```
View → Read (scrolled to end) → Clap (1-50) → Response (mini-article) → Highlight → Share
```

## User Flows

### Read and Discover
```
Home → For You Feed → Scroll → Click Story → Read → Clap (1-50) → Respond → Related Stories
```

### Follow Topics
```
Home → Topic Chips → Click "+" to follow → "Customize" → Select Topics → Feed adjusts to interests
```

### Write and Publish
```
"Write" Button → Editor → Write Title + Body → Add Images → [Publish] → Tags + Featured Image + Member Toggle → Publish
```

### Publish to Publication
```
Write Story → "Add to Publication" → Select Publication → Submit → Editor Reviews → Approved → Published in Publication
```

### Highlight and Save
```
Read Article → Select Text → Highlight → Optional Note → Saved to Highlights → Share Highlight Quote
```

### Paywall Encounter
```
Read Free Story → Click Member-Only Story (★) → "Become a Member" modal → Subscribe ($5/month) → Unlimited Reading
```

## URL / Route Structure

```
/                              → Home Feed
/me/following                  → Following Feed
/explore-topics                → Explore / Discover
/topic/:topicSlug              → Topic Page
/search?q=:query               → Search Results
/:username                     → User Profile
/:username/:storySlug-:id      → Story Page (unique ID suffix)
/:username/about               → User About
/:username/followers            → Followers
/@:username                    → User Profile (alt, @ prefix)
/p/:storyId                    → Story by ID (short link)
/new-story                     → Editor (new)
/p/:storyId/edit               → Editor (existing)
/me/stories/drafts             → My Drafts
/me/stories/public             → My Published Stories
/me/lists                      → My Lists / Bookmarks
/me/lists/:listId              → Specific List
/me/stats                      → Writer Stats Dashboard
/me/settings                   → Settings
/me/notifications              → Notifications
/:publicationSlug              → Publication Home
/:publicationSlug/about        → Publication About
/:publicationSlug/archive      → Publication Archive
/plans                         → Membership Plans
/gift                          → Gift Membership
/partner-program               → Partner Program Info
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Stories, People, Publications, Tags | — | Relevance |
| Topic Page | Stories with tag | — | Trending, Latest, Best of (period) |
| Publication | Stories in publication | Tags/Sections (custom) | Latest, Featured (editor pinned) |
| Profile | User's stories | — | Latest, Oldest |
| Stats | Your stories | Date Range | Views, Reads, Fans, Claps |

## Responsive Behavior

| Breakpoint | Header | Article | Feed |
|------------|--------|---------|------|
| Desktop (≥1080px) | Full nav bar (logo, search, write, notifications, avatar) | Content centered (max 680px) + right sidebar (related, author) | Center column + right sidebar |
| Tablet (768–1079px) | Condensed nav | Full-width content (max 680px) | Single column |
| Mobile (<768px) | Hamburger + logo + write + avatar | Full-width, optimized type | Single column, bottom tab bar |

### Reading Experience
- Article body: max-width 680px, centered
- Typography: custom Medium serif font, 21px body, ~1.75 line height
- Code blocks: monospace, horizontal scroll, syntax highlighting
- Images: full-bleed (breakout of 680px column) or contained
- Estimated read time displayed (based on ~265 words/min)
- Kicker/subtitle: gray, below title
- Footnotes: inline tooltips
- Audio version: text-to-speech for member stories

### Mobile Adaptations
- Swipe between stories in publication
- Reading position saved across devices
- Offline reading (cached articles)
- Share sheet integration (iOS/Android native)
- "Open in app" banner (web to app bridge)

## Access Control

| Role | Read | Clap | Respond | Write | Publish | Stats |
|------|------|------|---------|-------|---------|-------|
| Unauthenticated | 3 free member stories/month + all free stories | — | — | — | — | — |
| Free Account | 3 free member stories/month | ✅ | ✅ | ✅ | ✅ (free stories only via Partner Program) | Basic |
| Medium Member ($5/month) | Unlimited (all member + free stories, no ads, audio) | ✅ | ✅ | ✅ | ✅ (member-only stories) | ✅ |
| Partner Program Writer | Per membership | ✅ | ✅ | ✅ | ✅ + earn from member reading time | Full (earnings, traffic sources) |
| Publication Editor | ✅ | ✅ | ✅ | ✅ | ✅ + manage submissions | Publication stats |
| Staff / Admin | ✅ | ✅ | ✅ | ✅ | ✅ | Full + content moderation, curation |
