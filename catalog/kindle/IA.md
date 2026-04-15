---
brand: Kindle
tagline: "A world of reading. Amazon's ebook ecosystem with Kindle Unlimited, Whispersync, and dedicated e-readers."
category: Reading
website: https://amazon.com/kindle
---

# Kindle — Information Architecture

## Overview

Amazon's digital reading ecosystem spanning dedicated e-ink hardware (Kindle devices), mobile/desktop apps, and the world's largest ebook store. Kindle's mental model is a **personal library synced everywhere** — buy once, read on any device, with progress, highlights, and notes seamlessly synchronized via Whispersync. Key differentiators: e-ink optimized UI, Kindle Unlimited (subscription all-you-can-read), Whispersync (cross-device progress + audio/text sync with Audible), X-Ray (entity indexing within a book), Word Wise (inline vocabulary help), Send to Kindle, and the massive Amazon Kindle Store catalog.

## Site Map

```
├── Home
│   ├── Continue Reading (current book with progress %)
│   ├── Recommended for You
│   ├── New Releases
│   ├── Bestsellers
│   ├── Kindle Unlimited Picks
│   ├── Prime Reading (for Prime members)
│   ├── Reading Goals / Insights
│   ├── Kindle Deals (daily deals)
│   └── Kindle Vella (serialized stories)
├── Kindle Store (integrated with Amazon)
│   ├── Featured / Banners
│   ├── Categories / Genres
│   │   ├── Fiction (Mystery, Romance, Sci-Fi, Fantasy, Literary, Horror...)
│   │   ├── Non-Fiction (Business, Self-Help, Science, History, Biography...)
│   │   └── Subcategories
│   ├── Bestsellers (Kindle-specific rankings)
│   ├── New Releases
│   ├── Kindle Daily Deals
│   ├── Free Kindle Books
│   ├── Kindle Unlimited Catalog
│   ├── Prime Reading Catalog
│   ├── Pre-Orders
│   ├── Kindle Singles (short reads)
│   ├── Kindle Vella (serial stories with tokens)
│   └── Charts (by genre, overall)
├── Book Detail (Amazon product page + Kindle-specific)
│   ├── Cover, Title, Author, Rating (stars)
│   ├── Price / Buy Now / Read for Free (KU/Prime)
│   ├── Send Sample (free first ~10%)
│   ├── Format Selector (Kindle, Hardcover, Paperback, Audiobook)
│   ├── Synopsis / Description
│   ├── Book Info (pages, file size, publisher, ISBN, language, text-to-speech, X-Ray enabled, Word Wise enabled)
│   ├── Kindle MatchBook (buy print → cheap ebook upgrade)
│   ├── Whispersync for Voice (pair with Audible narration)
│   ├── Ratings & Reviews
│   │   ├── Average Rating, Rating Distribution
│   │   ├── Customer Reviews (filterable by star, verified purchase)
│   │   └── Top Reviews
│   ├── Popular Highlights (most highlighted passages by readers)
│   ├── Customers Also Bought
│   ├── Series Info (if applicable, with reading order)
│   ├── Author Page (bio, all books, follow)
│   └── Share / Gift
├── Reader (Kindle App / Device)
│   ├── Reading View
│   │   ├── Page Content
│   │   ├── Page Turn (tap edges / swipe)
│   │   ├── Progress: Page X of Y, Location, % Complete, "X min left in chapter"
│   │   └── Clock (top of screen)
│   ├── Reader Controls (tap center or swipe from top)
│   │   ├── Table of Contents (go to chapter)
│   │   ├── Bookmarks (tap top-right corner)
│   │   ├── Notes & Highlights (list, filter, export)
│   │   ├── Search in Book (full text)
│   │   ├── X-Ray
│   │   │   ├── People (character list with descriptions, appearances)
│   │   │   ├── Terms (key concepts, places, things)
│   │   │   ├── Images (all images in book)
│   │   │   └── Notable Clips / Passages
│   │   ├── Display Settings
│   │   │   ├── Font Family (Bookerly, OpenDyslexic, etc.)
│   │   │   ├── Font Size (adjustable slider)
│   │   │   ├── Bold Slider
│   │   │   ├── Line Spacing
│   │   │   ├── Margins
│   │   │   ├── Orientation (portrait / landscape)
│   │   │   ├── Theme (White, Sepia, Green, Dark / Black)
│   │   │   └── Page Layout (continuous scroll / page turn)
│   │   ├── Word Wise (inline definitions for hard words)
│   │   ├── Go to Page / Location / Bookmark
│   │   └── About This Book (synopsis, X-Ray, reading time)
│   ├── Text Interaction (long-press word)
│   │   ├── Dictionary Lookup (built-in)
│   │   ├── Wikipedia Preview
│   │   ├── Translate
│   │   ├── Highlight (Yellow, Blue, Pink, Orange)
│   │   ├── Add Note to Highlight
│   │   ├── Copy
│   │   ├── Search in Book
│   │   └── Share Quote (social, email)
│   └── Whispersync for Voice
│       ├── Switch to Audible Narration
│       ├── Immersion Reading (text + audio synced, words highlighted)
│       └── Auto-sync position between reading and listening
├── Library
│   ├── All Books (covers grid or list)
│   ├── Currently Reading
│   ├── Collections (user-created shelves)
│   ├── Kindle Unlimited Borrowed Books
│   ├── Samples
│   ├── Audiobooks (Audible-linked)
│   ├── Documents (Send to Kindle)
│   ├── Downloaded / On Device
│   ├── Filter: Books / Docs / Samples / Kindle Unlimited
│   ├── Sort: Recent / Title / Author / Collection
│   └── View: Grid (covers) / List
├── Notes & Highlights
│   ├── All Highlights (across all books)
│   ├── Per-Book View
│   ├── Export Notes (email, notebook)
│   ├── Popular Highlights (community)
│   ├── Flashcards (from highlights, for study)
│   └── Kindle Notebook (read.amazon.com/notebook)
├── Author Page
│   ├── Bio, Photo
│   ├── Bibliography (all Kindle books)
│   ├── Follow Author (new release notifications)
│   └── Author Blog (if linked)
├── Series Page
│   ├── Series Title, Total Books
│   ├── Books in Reading Order
│   └── Reading Progress per Book
├── Reading Insights / Stats
│   ├── Books Finished
│   ├── Days Streaked
│   ├── Total Reading Time
│   ├── Pages Read
│   ├── Reading Goal (annual)
│   ├── Badges / Awards
│   └── Monthly / Yearly Summary
├── Kindle Unlimited
│   ├── Unlimited Catalog Browse
│   ├── Borrowed Books (max 20 at a time)
│   ├── Return Book (to borrow new one)
│   └── Subscription Management
├── Send to Kindle
│   ├── Email-to-Kindle (unique @kindle.com address)
│   ├── Browser Extension
│   ├── Desktop App
│   └── Supported Formats (EPUB, PDF, DOC, MOBI)
├── Manage Devices & Content (Amazon web)
│   ├── Your Content (all purchased/borrowed)
│   ├── Your Devices (registered Kindles, apps)
│   ├── Deliver to Device
│   ├── Return Kindle Unlimited Books
│   ├── Preferences (personal documents, annotations backup)
│   └── Deregister Device
├── Settings
│   ├── Account (Amazon account)
│   ├── Kindle Unlimited Subscription
│   ├── Reader Defaults (font, theme, margins)
│   ├── Download Settings (Wi-Fi only)
│   ├── Notifications (new releases, deals, reading reminders)
│   ├── Vocabulary Builder (words looked up, quiz)
│   ├── Parental Controls / FreeTime (kids)
│   └── Privacy (annotation backup, usage data)
└── Kindle Kids / Amazon Kids+
    ├── Age-appropriate catalog
    ├── Reading goals (achievement system)
    ├── Parent dashboard
    └── Vocabulary Builder
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | Mobile app: 4-5 tabs | Home, Library, Store, More |
| **Top Bar (App)** | Contextual | Home: Search + Settings; Library: Sort + View toggle; Reader: hidden |
| **Reader Controls** | Tap center to toggle | Top/bottom toolbar overlay, auto-hide after 3s |
| **E-Ink Navigation** | Minimal, touch-based | Tap left/right edge for page turn, top for menu, bottom for progress |
| **Library Grid/List** | Toggle view + sort | Switch between cover grid and list view with sort options |
| **Store** | Integrated Amazon browsing | Category tabs, search, deals, bestsellers |
| **Page Turn** | Tap edge or swipe | Right/left to turn pages; configurable direction |

### E-Ink Home Screen (Kindle Device)
```
[Library]     [Home]     [Store]
─────────────────────────────────
Continue Reading
  📖 Book Title — 63% ●●●●●●○○○○

Recommended for You
  [cover] [cover] [cover] [cover]

Reading Insights
  🔥 5-day streak  📚 12 books this year

Your Library
  [cover] [cover] [cover] [cover]
```

### Reader Controls (overlay)
```
[← Back]  [Go To]  [X-Ray]  [Aa]  [⋮ More]
─────────────────────────────────────────────

            [Page Content]

─────────────────────────────────────────────
Location 1234 · 63% · 47 min left in chapter
────────────●───────────────
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Book | title, subtitle, asin, cover_image, description, page_count, file_size, publisher, publish_date, language, price, format (ebook/audiobook), kindle_unlimited (bool), prime_reading (bool), x_ray_enabled (bool), word_wise_enabled (bool), text_to_speech (bool) | belongs to Author(s), Genre(s), Series |
| Author | name, bio, photo, amazon_author_page, follow_count | has many Books |
| Series | name, description, total_books | has many Books (ordered) |
| Genre | name, slug, parent_genre | has many Books, Subgenres |
| Review | rating (1-5), title, body, helpful_count, verified_purchase (bool), created_at | belongs to Book and User |
| Highlight | text, color (yellow/blue/pink/orange), location_start, location_end, note, created_at, public (bool) | belongs to Book and User |
| Bookmark | location, page, created_at | belongs to Book and User |
| Note | text, location, created_at | belongs to Highlight or standalone in Book |
| ReadingProgress | book, location, percentage, last_read_at, device, status (reading/finished) | belongs to User, synced via Whispersync |
| Collection | name, books[] | belongs to User |
| Sample | book, content (first ~10%), downloaded_at | belongs to Book and User |
| Purchase | book, price, purchased_at, order_id | belongs to User (Amazon account) |
| KindleUnlimitedBorrow | book, borrowed_at, returned_at | belongs to User (max 20 concurrent) |
| Device | name, type (kindle_paperwhite/kindle_oasis/kindle_scribe/app_ios/app_android/app_desktop), registered_at, last_synced | belongs to User |
| VocabWord | word, stem, usage (sentence from book), book, looked_up_at, mastery_level | belongs to User (Vocabulary Builder) |
| PopularHighlight | text, book, highlight_count | aggregated across all users |
| XRayEntity | name, type (person/term/place), description, occurrences[] (location list) | belongs to Book |

### Content Formats
`EPUB | MOBI (legacy) | AZW3 (Kindle format) | PDF | KFX (newest format) | Audiobook (Audible)`

### Reading Status
`sample_downloaded → purchased → downloading → reading → finished | abandoned`

## User Flows

### Browse and Purchase
```
Home → Recommended → Tap Book → Read Synopsis + Reviews → Buy with 1-Click → Download → Open → Read
```

### Send Sample First
```
Store → Book Detail → Send Sample → Library → Read Sample (10%) → "Keep Reading" → Purchase → Full Book
```

### Continue Reading (Cross-Device)
```
Home → "Continue Reading" → Tap Book → Resume at Last Position → Whispersync confirms → Read → Close → Open on Phone → Same Position
```

### Highlight and Annotate
```
Reader → Long-press Word → Drag Selection → Highlight (Yellow) → Add Note → Saved to Notebook → Export Notes
```

### X-Ray Character Tracking
```
Reader → X-Ray → People Tab → See All Characters → Tap Character → Description + Every Appearance in Book → Tap to Jump
```

### Vocabulary Builder
```
Reader → Long-press Unknown Word → Dictionary Definition → Word Saved to Vocabulary Builder → Quiz Later → Mark Mastered
```

### Kindle Unlimited Browsing
```
Store → Kindle Unlimited → Browse Catalog → Read for Free → Download → Finish → Return → Borrow Next
```

### Whispersync with Audible
```
Reading Ebook → Switch to Audible (headphones icon) → Audiobook Continues from Same Spot → Listen → Switch Back → Text Resumes
```

### Send Document to Kindle
```
Email PDF/EPUB to @kindle.com → Appears in Library → Download → Read on Kindle Device/App
```

## URL / Route Structure

```
# Amazon / Kindle Store (amazon.com)
/kindle-dbs/hz/bookshelf                → Kindle Cloud Reader (web)
/dp/:asin                               → Book Detail (Amazon product page)
/gp/product/:asin                       → Book Detail (alt)
/kindle-store                            → Kindle Store Home
/s?k=:query&i=digital-text              → Search Kindle Books
/kindle-dbs/hz/subscribe/ku             → Kindle Unlimited Landing
/kindle-dbs/entity/author/:id           → Author Page
/best-sellers-books-Amazon/zgbs/digital-text → Kindle Bestsellers
/gp/new-releases/digital-text            → New Releases

# Kindle Notebook (read.amazon.com)
/notebook                               → All Notes & Highlights
/notebook?asin=:asin                    → Notes for Specific Book

# Manage Content (amazon.com)
/hz/mycd/digital-console/contentlist    → Your Content
/hz/mycd/digital-console/devicelist     → Your Devices
/hz/mycd/digital-console/alldevices     → All Devices

# Kindle App (deep links)
kindle://book?asin=:asin               → Open Book in Kindle App
kindle://home                           → Kindle Home
kindle://library                        → Kindle Library
kindle://store                          → Kindle Store
read.amazon.com/notebook                    # All notes & highlights
read.amazon.com/kp/notebook?asin={asin}     # Book-specific notebook
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Kindle Store | Title, Author, ISBN, Description | Genre, Price Range (free/under $5/etc.), Rating, Format (Kindle/Audible), Language, Kindle Unlimited, Prime Reading | Relevance, Bestselling, Price (low/high), Publication Date, Rating |
| Library | Title, Author | Collection, Status (reading/finished), Format, Downloaded, Source (purchased/KU/Prime/sample/document) | Recent, Title, Author, Date Added |
| In-Book Search | Full text of current book | — | Position (location order) |
| Notes & Highlights | Highlight text, Note text | Book, Highlight Color, Date | Date, Book, Position |
| Vocabulary Builder | Word, Usage | Book, Mastery Level | Recently Looked Up, Alphabetical |

## Responsive Behavior

| Breakpoint | Nav | Library | Reader |
|------------|-----|---------|--------|
| Desktop App (≥1024px) | Left sidebar (Library, Store, Reading Now) | Grid (5-6 columns of covers) | Center column, paginated |
| Tablet (768–1023px) | Bottom tab bar | Grid (3-4 columns) | Full width, paginated |
| Mobile (<768px) | Bottom tab bar | Grid (2-3 columns) or list | Full screen, tap/swipe to turn |
| E-Ink Device (Kindle) | Minimal touch nav | List or grid (covers, grayscale) | Full screen, e-ink optimized, no animation |

### E-Ink Specific Adaptations
- No animations (e-ink refresh latency)
- High contrast text rendering
- Dark mode (inverted, available on newer Kindles)
- Warm light adjustment (Kindle Paperwhite Signature)
- Physical page turn buttons (Kindle Oasis)
- Pen input for notes (Kindle Scribe)
- Battery life measured in weeks (not hours)

### Offline-First Design
- Books fully downloaded for offline reading
- Reading progress queued for sync when online
- Highlights/notes saved locally, synced on connection
- Library browsable offline (covers cached)
- Whispersync reconciles position across devices

## Access Control

| Role | Browse Store | Read | Highlight/Note | Review | Purchase | KU |
|------|-------------|------|----------------|--------|----------|-----|
| Unauthenticated | ✅ | Samples only (web) | — | — | — | — |
| Amazon Account (Free) | ✅ | Purchased + free books + samples | ✅ | ✅ | ✅ (1-Click) | — |
| Prime Member | ✅ | + Prime Reading catalog (rotating selection) | ✅ | ✅ | ✅ | — |
| Kindle Unlimited ($11.99/mo) | ✅ | + KU catalog (~4M titles, borrow up to 20) | ✅ | ✅ | ✅ | ✅ |
| Family Library | ✅ | Shared purchased books (2 adults, up to 4 children) | ✅ | ✅ | Shared payment | Shared |
| Author (KDP) | ✅ | ✅ | ✅ | — (own books) | ✅ | + Royalty dashboard, sales reports |
| Amazon Kids+ | Filtered catalog | Age-appropriate only | Limited | — | Parent approval | — |

### Content Protection
- DRM on purchased content (Kindle format, device-locked)
- Device limits: up to 6 registered devices per account
- Family Library: share purchases between 2 adults
- Lending: share a book with one person for 14 days
- Highlight/note export: personal use (Kindle Notebook, Readwise integration)
