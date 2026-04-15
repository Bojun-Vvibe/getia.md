---
brand: Wikipedia
tagline: "The free encyclopedia that anyone can edit. Collaborative, multilingual, citation-driven knowledge."
category: Wiki
website: https://wikipedia.org
---

# Wikipedia — Information Architecture

## Overview

The world's largest free encyclopedia, collaboratively written and maintained by volunteers. Wikipedia's mental model is an **interlinked knowledge graph** — articles reference each other through hyperlinks, forming a massive web of structured knowledge. Key differentiators: anyone can edit (with varying permission levels), every edit is tracked in version history, content requires citations from reliable sources, articles exist in 300+ languages independently, and there is no paywall, no ads, and no algorithmic feed. The IA is article-centric, with categories, portals, and disambiguation pages organizing millions of entries.

## Site Map

```
├── Main Page
│   ├── Featured Article (daily rotation)
│   ├── Did You Know (new/expanded articles)
│   ├── In the News (current events)
│   ├── On This Day (historical events)
│   ├── Today's Featured Picture
│   └── Sister Projects (Wiktionary, Wikiquote, Commons, etc.)
├── Article Page
│   ├── Title
│   ├── Lead Section (summary, right-side infobox)
│   ├── Infobox (structured data: type, date, location, etc.)
│   ├── Table of Contents (auto-generated, collapsible)
│   ├── Body Sections
│   │   ├── Section Headings (h2–h6, with [edit] links)
│   │   ├── Text (prose with inline citations [1][2][3])
│   │   ├── Images / Galleries
│   │   ├── Tables
│   │   ├── Lists
│   │   ├── Infoboxes / Sidebars
│   │   ├── Navboxes (bottom navigation templates)
│   │   └── Math / Chemical Formulas (LaTeX)
│   ├── See Also (related articles)
│   ├── Notes / References Section
│   │   ├── Footnotes (numbered, linked back to text)
│   │   └── Full Citation Details (author, title, URL, date)
│   ├── Bibliography
│   ├── Further Reading
│   ├── External Links
│   ├── Categories (bottom of page)
│   ├── Article Tabs
│   │   ├── Article (read)
│   │   ├── Talk (discussion about the article)
│   │   ├── Edit / View Source
│   │   └── View History
│   └── Page Tools (sidebar)
│       ├── What Links Here
│       ├── Related Changes
│       ├── Upload File
│       ├── Special Pages
│       ├── Permanent Link
│       ├── Page Information
│       ├── Cite This Page
│       ├── Wikidata Item
│       ├── Download as PDF
│       └── Printable Version
├── Talk Page (per article)
│   ├── Discussion Threads (indented replies)
│   ├── Article Assessment (quality class, importance)
│   ├── WikiProject Banners
│   ├── Archives (old discussions)
│   └── New Section (+)
├── Edit Page
│   ├── Visual Editor (WYSIWYG)
│   │   ├── Toolbar (bold, italic, link, cite, template, table, media)
│   │   ├── Insert Citation Dialog
│   │   ├── Insert Template Dialog
│   │   ├── Preview
│   │   └── Publish Changes (edit summary required)
│   └── Source Editor (wikitext)
│       ├── Wikitext Markup
│       ├── Toolbar (formatting shortcuts)
│       ├── Show Preview
│       ├── Show Changes (diff)
│       └── Publish Changes
├── Search
│   ├── Full-text search across all articles
│   ├── Namespaces filter (article, talk, user, project, file...)
│   ├── Advanced Search (date, category, template)
│   └── Search Suggestions (autocomplete)
├── Categories
│   ├── Category Page (list of articles + subcategories)
│   ├── Category Tree (hierarchical browsing)
│   └── Hidden Categories (maintenance)
├── Portal Pages
│   ├── Portal:Science, Portal:History, Portal:Geography, etc.
│   ├── Featured content for the portal topic
│   ├── Tasks / To-do for editors
│   └── Related WikiProjects
├── User Page
│   ├── User Page (personal, like a profile/wiki page)
│   ├── User Talk Page (messages from others)
│   ├── Contributions (all edits by this user)
│   ├── Logs (actions taken)
│   ├── Sandbox (personal testing space)
│   ├── Watchlist Items
│   └── Preferences
├── Watchlist
│   ├── Recent Changes to watched pages
│   ├── Filter: Minor edits, bot edits, namespace
│   └── Manage Watchlist
├── Recent Changes (global)
│   ├── All Recent Edits (real-time feed)
│   ├── Filter: Namespace, edit type, user, tags
│   ├── Patrolled / Unpatrolled
│   └── Related Changes (for specific page)
├── Special Pages
│   ├── All Pages (alphabetical index)
│   ├── Random Article
│   ├── Statistics (article count, edit count, active users)
│   ├── Log (block, delete, move, protection)
│   ├── New Pages
│   ├── Orphaned Pages (no links to them)
│   ├── Dead-end Pages (no links out)
│   ├── Disambiguation Pages (multiple meanings)
│   └── Maintenance Reports
├── Community / Project
│   ├── Village Pump (community discussion)
│   ├── Administrators' Noticeboard
│   ├── WikiProjects (topic-based editorial groups)
│   ├── Policies & Guidelines (Neutral POV, Verifiability, No Original Research, etc.)
│   ├── Manual of Style
│   ├── Help Pages
│   ├── Sandbox (public testing)
│   └── Requests for Adminship (RfA)
├── History / Diff View
│   ├── Revision List (date, user, edit summary, size change)
│   ├── Diff View (side-by-side comparison of two revisions)
│   ├── Undo / Rollback
│   └── Thank Editor
├── Languages Sidebar
│   ├── List of all language versions of this article
│   └── Add Translation
└── Donate Banner (periodic)
    └── Fundraiser CTA (Wikimedia Foundation)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed | Wikipedia wordmark/logo, search bar (prominent, center), language switcher, user menu, create account/login |
| **Left Sidebar** | Fixed (desktop), collapsible | Main Page, Contents, Current Events, Random Article, About, Contact, Donate + Tools section (What links here, Related changes, etc.) |
| **Article Tabs** | Horizontal tabs above article title | Read, Talk, Edit (or View Source), View History |
| **Table of Contents** | Auto-generated, collapsible (top of article) | Jump to section, nested numbering (1, 1.1, 1.2, 2, ...) |
| **Breadcrumbs** | Not standard — categories at bottom | Categories as flat taxonomy (no hierarchy in article view) |
| **Interwiki Links** | Left sidebar section | Links to same article in other language Wikipedias |
| **Section Edit** | [edit] link next to each heading | Edit individual section without loading full article |

### Desktop Layout
```
[Left Sidebar (200px)]  |  [Article Content (fluid, max ~960px)]
                         |  [Table of Contents (floating or top)]
─────────────────────────────────────────────────────────
Main Page               |  Article Title [edit]
Contents                |  ─────────────────
Current events          |  Lead section... infobox →
Random article          |  ─────────────────
About Wikipedia         |  Contents
Contact us              |  1. History
Donate                  |  2. Geography
─────────────           |  3. Demographics
Tools                   |  ...
What links here         |
Related changes         |  [Section content with citations]
Upload file             |
Special pages           |  ─────────────────
Permanent link          |  References
Page information        |  Categories: [cat1] [cat2] [cat3]
Cite this page          |
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Article | title, body (wikitext/HTML), namespace, page_id, language, protection_level, created_at, last_edited, edit_count, page_views | has many Revisions, Categories, Interwiki Links, Talk Page |
| Revision | rev_id, parent_id, user, timestamp, edit_summary, size_bytes, minor (bool), tags[] | belongs to Article |
| Category | name, parent_categories[], subcategories[], article_count | many-to-many with Articles (hierarchical tree) |
| User | username, edit_count, registration_date, user_groups[] (autoconfirmed, admin, bureaucrat, etc.) | has many Revisions, Talk Page, Watchlist |
| Talk Section | heading, body, signatures[], archived (bool) | belongs to Talk Page (associated with Article) |
| Infobox | template_name, fields (key-value structured data) | belongs to Article |
| Citation | ref_id, type (web/book/journal), author, title, url, date, access_date, publisher | belongs to Article (inline) |
| File | filename, description, license, dimensions, upload_date, uploader | hosted on Wikimedia Commons, used by Articles |
| Disambiguation | title, entries[] (brief description + link for each meaning) | special article type |
| Portal | topic, featured_article, did_you_know, tasks[] | links to many Articles |
| Redirect | from_title, to_title | connects old/alt names to canonical Article |
| WikiProject | name, scope, assessment_criteria, members[] | manages quality of Articles within a topic |

### Namespaces
```
(Main/Article) | Talk | User | User talk | Wikipedia | Wikipedia talk
File | File talk | MediaWiki | Template | Template talk | Help | Category
Portal | Draft | Module
```

### Article Quality Scale
```
Stub → Start → C → B → Good Article (GA) → Featured Article (FA)
```

### Protection Levels
```
Unprotected (anyone edits) → Semi-protected (autoconfirmed only) → Extended-confirmed → Full protection (admins only)
```

## User Flows

### Read and Navigate
```
Search → Article → Read Lead → Table of Contents → Jump to Section → Follow Wikilink → New Article → Continue
```

### Quick Lookup
```
Search Bar → Type query → Autocomplete suggestion → Click → Read lead paragraph + infobox → Done
```

### Edit an Article
```
Article → [Edit] Tab → Visual Editor → Make Changes → Add Citation → Preview → Write Edit Summary → Publish
```

### Discuss Changes
```
Article → Talk Tab → Read Discussion → New Section → Write Opinion → Sign (~~~~) → Others Reply
```

### Patrol Recent Changes
```
Recent Changes → Filter (unpatrolled) → Click Diff → Review Edit → Accept / Revert / Warn User
```

### Create New Article
```
Search → "Create this page" → Choose Stub Template → Write Lead + Infobox + References → Add Categories → Publish → Others Expand
```

### Compare Versions
```
Article → View History → Select Two Revisions → Compare → Diff View (additions green, removals red) → Undo if vandalism
```

## URL / Route Structure

```
/wiki/:Title                       → Article Page
/wiki/Talk::Title                  → Talk Page
/wiki/User::Username               → User Page
/wiki/User_talk::Username          → User Talk Page
/wiki/Category::CategoryName       → Category Page
/wiki/Portal::TopicName            → Portal Page
/wiki/File::Filename               → File/Image Page
/wiki/Template::TemplateName       → Template Page
/wiki/Special:Search?search=:q     → Search Results
/wiki/Special:RecentChanges        → Recent Changes
/wiki/Special:Watchlist            → Watchlist
/wiki/Special:Contributions/:user  → User Contributions
/wiki/Special:Random               → Random Article
/wiki/Special:AllPages             → All Pages Index
/wiki/Special:Log                  → Action Logs
/wiki/Special:Statistics           → Site Statistics
/w/index.php?title=:T&action=edit  → Edit Page
/w/index.php?title=:T&action=history → View History
/w/index.php?title=:T&diff=:r1&oldid=:r2 → Diff View
/w/index.php?title=:T&oldid=:rev  → Specific Revision
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Article titles + full text | Namespace (Article, Talk, User, etc.), Language | Relevance, Last Edited, Creation Date |
| Category | Articles in category | Subcategory, Alphabetical range | Alphabetical (default) |
| Recent Changes | All edits | Namespace, User, Tags (reverted, visual edit, etc.), Minor/Bot | Chronological (newest first) |
| Contributions | Edits by specific user | Namespace, Date Range, Tags | Chronological |
| Watchlist | Changes to watched pages | Namespace, Change Type, Time Period | Chronological |

### Search Features
- Full-text search with highlighting
- "Did you mean?" suggestions
- Namespace-scoped search
- Interwiki search (across Wikimedia projects)
- Hatnotes at top of articles ("For other uses, see...")
- Disambiguation pages for ambiguous terms

## Responsive Behavior

| Breakpoint | Sidebar | Content | ToC |
|------------|---------|---------|-----|
| Desktop (≥1000px) | Fixed left sidebar (200px) | Fluid article content (max ~960px) | Inline (top of article, collapsible) |
| Tablet (720–999px) | Collapsed (hamburger) | Full-width content | Inline (collapsed by default) |
| Mobile (<720px) | Hamburger drawer | Full-width, simplified layout | Sticky floating button (bottom) |

### Mobile Adaptations (Mobile Web / App)
- Simplified header (search + hamburger)
- Collapsible sections (tap heading to expand)
- Infobox: horizontally scrollable or stacked
- Table of Contents: floating button, opens as overlay
- Images: tap to view full-screen
- Edit: simplified visual editor
- Language switcher: prominent button
- Nearby: geo-based article discovery
- Offline: save articles for offline reading (Wikipedia app)

## Access Control

| Role | Read | Edit | Move/Rename | Delete | Protect | Block Users |
|------|------|------|-------------|--------|---------|-------------|
| Anonymous (IP) | ✅ | Most articles (not semi-protected) | — | — | — | — |
| Registered (new) | ✅ | Most articles (not semi-protected) | — | — | — | — |
| Autoconfirmed (4 days + 10 edits) | ✅ | ✅ (incl. semi-protected) | ✅ | — | — | — |
| Extended Confirmed (30 days + 500 edits) | ✅ | ✅ (incl. extended-confirmed) | ✅ | — | — | — |
| Rollbacker | ✅ | ✅ | ✅ | — | — | — (+ one-click revert) |
| Administrator | ✅ | ✅ (incl. fully-protected) | ✅ | ✅ | ✅ | ✅ |
| Bureaucrat | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ + grant admin rights |

### Content Policies (enforced socially + technically)
- Neutral Point of View (NPOV) — no bias
- Verifiability — all claims need reliable sources
- No Original Research — Wikipedia summarizes existing knowledge
- Biographies of Living Persons (BLP) — strict sourcing requirements
- Notability — subjects must have significant coverage in independent sources
