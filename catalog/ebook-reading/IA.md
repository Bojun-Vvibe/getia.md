# Ebook / Reading App — Information Architecture

## Overview

A digital reading platform for ebooks, audiobooks, and long-form content (Kindle, Apple Books, Kobo style). The mental model is a **personal library and reading room** — users browse a store, build a library, and read in a distraction-free environment. The reading experience is paramount, with customizable typography, progress tracking, and seamless bookmarking.

## Site Map

```
├── Home
│   ├── Continue Reading (current books)
│   ├── Recommended for You
│   ├── New Releases
│   ├── Bestsellers
│   ├── Reading Goals Progress
│   └── Curated Lists / Collections
├── Store / Shop
│   ├── Featured / Banner
│   ├── Categories / Genres
│   │   ├── Fiction (Thriller, Romance, Sci-Fi, Fantasy, etc.)
│   │   ├── Non-Fiction (Business, Self-Help, Science, etc.)
│   │   └── Subcategories
│   ├── Bestsellers
│   ├── New Releases
│   ├── Deals / Free Books
│   ├── Pre-Orders
│   ├── Charts (by genre, overall)
│   └── Search Results
├── Book Detail
│   ├── Cover, Title, Author, Rating
│   ├── Price / Buy / Sample Button
│   ├── Synopsis / Description
│   ├── Book Info (pages, publisher, ISBN, language, format)
│   ├── Author Page Link
│   ├── Ratings & Reviews
│   │   ├── Average Rating
│   │   ├── Rating Distribution
│   │   └── User Reviews (sortable)
│   ├── Similar Books ("Readers Also Enjoyed")
│   ├── Series Info (if part of series)
│   │   └── Other Books in Series
│   └── Share
├── Reader (Full-screen)
│   ├── Reading View
│   │   ├── Page Content
│   │   ├── Page Turn (tap/swipe)
│   │   └── Progress Indicator (% or page/location)
│   ├── Reader Controls (tap center to show/hide)
│   │   ├── Table of Contents
│   │   ├── Bookmarks
│   │   ├── Notes & Highlights
│   │   ├── Search in Book
│   │   ├── Display Settings
│   │   │   ├── Font Family
│   │   │   ├── Font Size
│   │   │   ├── Line Spacing
│   │   │   ├── Margins
│   │   │   ├── Theme (Light, Sepia, Dark, Black)
│   │   │   └── Orientation Lock
│   │   ├── Go to Page / Location
│   │   └── Share Quote
│   ├── Highlight & Annotation
│   │   ├── Select Text → Highlight (colors)
│   │   ├── Add Note to Highlight
│   │   ├── Copy Text
│   │   ├── Dictionary Lookup
│   │   ├── Translate
│   │   └── Search Web / Wikipedia
│   └── Audiobook Player (if audiobook)
│       ├── Play/Pause
│       ├── Skip Back 30s / Forward 30s
│       ├── Playback Speed (0.5x–3x)
│       ├── Sleep Timer
│       ├── Chapter Navigation
│       └── Narration + Text Sync (Whispersync)
├── Library
│   ├── All Books
│   ├── Collections / Shelves (user-created)
│   ├── Currently Reading
│   ├── Want to Read
│   ├── Finished
│   ├── Samples
│   ├── Audiobooks
│   ├── Downloaded
│   └── Sort & Filter Options
├── Notes & Highlights
│   ├── All Highlights (across books)
│   ├── By Book
│   ├── Export Notes
│   └── Popular Highlights (community)
├── Author Page
│   ├── Bio, Photo
│   ├── Bibliography (all books)
│   ├── Follow Author
│   └── Similar Authors
├── Series Page
│   ├── Series Title, Description
│   ├── Books in Order
│   └── Reading Progress per Book
├── Reading Stats
│   ├── Books Read (by period)
│   ├── Pages / Hours Read
│   ├── Reading Streak
│   ├── Annual Reading Goal
│   └── Genre Breakdown
├── Social / Community
│   ├── Friends' Activity (what they're reading)
│   ├── Book Clubs
│   ├── Reading Challenges
│   └── Share / Recommend
├── Settings
│   ├── Account
│   ├── Subscription (if applicable: Kindle Unlimited, etc.)
│   ├── Reader Defaults (font, theme, margins)
│   ├── Download Settings (Wi-Fi only, quality)
│   ├── Notifications (new releases, deals, reading reminders)
│   ├── Devices (manage Kindle devices)
│   ├── Parental Controls
│   └── Privacy
└── Help / Support
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | Mobile: 4-5 tabs | Home, Store, Library, Search, More |
| **Top Bar** | Contextual | Logo + search (home), back + title (detail), hidden (reader) |
| **Reader Controls** | Tap center to toggle | Overlay appears/disappears on content |
| **Library Grid/List** | Toggle view + sort | Switch between cover grid and list view |
| **Store Navigation** | Category tabs or sidebar | Genre browsing with featured sections |
| **Page Turn** | Tap edge or swipe | Left/right to turn pages; reader-specific |

### Mobile Bottom Tab Bar
```
[ 🏠 Home ] [ 🏪 Store ] [ 📚 Library ] [ 🔍 Search ] [ ⋯ More ]
```

### Reader Controls (overlay)
```
[← Back]  [Title]  [Bookmark 🔖]
─────────────────────────────────

        [Page Content]

─────────────────────────────────
[ToC] [Aa Settings] [Search] [Notes]
        ────●────── 43%
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Book | title, subtitle, cover_image, description, isbn, asin, page_count, publish_date, publisher, language, format (ebook/audiobook/both), price, file_size | belongs to Author(s), Genre(s), Series |
| Author | name, bio, photo, website, social_links | has many Books |
| Series | name, description, total_books | has many Books (ordered) |
| Genre | name, slug, parent_genre | has many Books, Subgenres |
| Review | rating (1-5), title, body, helpful_count, created_at | belongs to Book and User |
| Highlight | text, color, position_start, position_end, note, created_at | belongs to Book and User |
| Bookmark | position, page, created_at | belongs to Book and User |
| ReadingProgress | book, position, percentage, last_read_at, device, status (reading/finished/abandoned) | belongs to User |
| Collection | name, description, cover | belongs to User, has many Books |
| Sample | book, content (first ~10%) | belongs to Book |
| Purchase | book, price, purchased_at, format | belongs to User |
| Subscription | plan, status, start_date, renewal_date | belongs to User |
| Device | name, type, last_sync | belongs to User |

### Book Formats
`ebook (epub/mobi/pdf) | audiobook | enhanced (text + audio sync)`

### Reading Status
`want_to_read → reading → finished | abandoned`

## User Flows

### Browse and Purchase
```
Home → Recommended → Tap Book → Read Synopsis → Buy / Get Sample → Download → Read
```

### Continue Reading
```
Home → Continue Reading → Tap Book → Reader opens at last position → Read → Auto-sync progress
```

### Highlight and Annotate
```
Reader → Long-press text → Select range → Choose highlight color → Add note → Saved to Notes
```

### Discover via Series
```
Finish Book → "Next in Series" prompt → Book Detail → Buy → Download → Continue reading
```

### Manage Library
```
Library → Create Collection ("Sci-Fi Favorites") → Long-press books → Add to Collection → Organize
```

### Listen to Audiobook
```
Library → Audiobook → Play → Background audio → Lock screen controls → Sleep timer → Resume next day
```

### Sync Across Devices
```
Read on Tablet → Close → Open on Phone → "Sync to furthest page?" → Yes → Resume
```

## URL / Route Structure

```
/                              → Home
/store                         → Store Home
/store/genre/:genre            → Genre Page
/store/genre/:genre/:sub       → Subgenre Page
/store/bestsellers             → Bestsellers
/store/new-releases            → New Releases
/store/deals                   → Deals & Free
/store/charts                  → Charts
/book/:id                      → Book Detail
/book/:id/reviews              → Reviews
/author/:id                    → Author Page
/series/:id                    → Series Page
/read/:bookId                  → Reader
/read/:bookId/loc/:location    → Reader at location
/library                       → Library (all books)
/library/collections           → Collections
/library/collection/:id        → Specific Collection
/library/reading               → Currently Reading
/library/finished              → Finished Books
/library/audiobooks            → Audiobooks
/library/samples               → Samples
/library/downloads             → Downloaded
/notes                         → All Notes & Highlights
/notes/:bookId                 → Notes for Book
/stats                         → Reading Stats
/search?q=:query               → Search Results
/settings                      → Settings
/settings/account              → Account
/settings/subscription         → Subscription
/settings/devices              → Manage Devices
/settings/reader               → Reader Defaults
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Store | Title, Author, ISBN, Description | Genre, Price Range, Rating, Format (ebook/audiobook), Language | Relevance, Bestselling, Price (low/high), Rating, Date |
| Library | Title, Author | Collection, Status (reading/finished), Format, Downloaded | Recent, Title, Author, Date Added |
| In-Book Search | Full text of current book | — | Position (in-book order) |
| Notes | Highlight text, Note text | Book, Color, Date Range | Date, Book, Position |
| Author | Books by author | Genre, Format | Publication Date, Popularity, Title |

## Responsive Behavior

| Breakpoint | Nav | Library | Reader |
|------------|-----|---------|--------|
| Desktop (≥1024px) | Top nav bar | Grid (4-6 columns of covers) | Center column (max 700px), paginated |
| Tablet (768–1023px) | Top nav | Grid (3-4 columns) | Full width, paginated or scroll |
| Mobile (<768px) | Bottom tab bar | Grid (2-3 columns) or list | Full screen, tap/swipe to turn |
| E-Reader Device | Minimal nav | List view | Full screen, e-ink optimized |

### Reader Adaptations
- Font scaling: system-wide accessibility support
- Dark/sepia/light themes for eye comfort
- Screen timeout prevention while reading
- Auto-brightness adjustment
- Page turn animation (slide, curl, none)
- Orientation: portrait (default), landscape (two-page spread on tablets)
- E-ink: simplified rendering, no animations, high contrast

### Offline-First Design
- Books downloaded for offline reading
- Reading progress queued for sync
- Highlights/notes saved locally, synced when online
- Library browsable offline (covers cached)

## Access Control

| Role | Browse Store | Read | Highlight/Note | Review | Purchase |
|------|-------------|------|----------------|--------|----------|
| Unauthenticated | ✅ | Samples only | — | — | — |
| Free User | ✅ | Purchased + free books | ✅ | ✅ | ✅ |
| Subscriber (Unlimited) | ✅ | Catalog included in plan | ✅ | ✅ | ✅ (outside catalog) |
| Family Member | ✅ | Shared family library | ✅ | ✅ | Requires approval |
| Author | ✅ | ✅ | ✅ | — (own books) | ✅ + royalty dashboard |
| Admin | ✅ | ✅ | ✅ | Moderate | Catalog management |

### Content Protection
- DRM on purchased content
- Device limits (e.g., up to 6 registered devices)
- Lending: share a book with one person for limited time
- Family sharing: shared purchases within household
- Highlight/note export: allowed for personal use
