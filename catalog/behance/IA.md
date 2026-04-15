---
brand: Behance
tagline: The world's largest creative network for showcasing and discovering creative work
category: Social & Communication
website: https://behance.net
---

# Information Architecture — Behance

## Overview

Behance is Adobe's creative portfolio platform for showcasing and discovering professional design, illustration, photography, and other creative work. The IA is organized around Projects (multi-image case studies), Moodboards, and Live Streams, with deep integration into the Adobe Creative Cloud ecosystem. The platform serves as both a public portfolio and a professional discovery tool for recruiters and art directors.

## Site Map

```
Behance
├── Home / Discover
│   ├── For You (personalized)
│   ├── Curated Galleries
│   ├── Featured Projects
│   ├── Creative Fields
│   │   ├── Graphic Design
│   │   ├── Illustration
│   │   ├── Photography
│   │   ├── UI/UX
│   │   ├── Motion Graphics
│   │   ├── 3D Art
│   │   ├── Fashion
│   │   └── [20+ fields]
│   └── Trending
├── Project Detail
│   ├── Image gallery (scrollable case study)
│   ├── Description & tools used
│   ├── Appreciations (likes) & views
│   ├── Comments
│   ├── Tags & creative fields
│   ├── Owner info
│   └── Related Projects
├── Moodboards
│   ├── User's Moodboards
│   └── [Moodboard] → Saved projects, images, references
├── Live Streams
│   ├── Live Now
│   ├── Upcoming
│   └── Replays
├── Jobs
│   ├── Job Listings
│   ├── Filter by role, location, type
│   └── Job Detail → Apply
├── Search
│   ├── Projects
│   ├── People
│   ├── Moodboards
│   ├── Assets (Adobe Stock integration)
│   └── Live Streams
├── Profile
│   ├── Projects
│   ├── Moodboards
│   ├── Appreciated (liked projects)
│   ├── Following / Followers
│   ├── Stats
│   ├── Resume / Work Experience
│   ├── Tools & Skills
│   ├── Availability badge
│   └── Adobe Portfolio link
├── Adobe Portfolio (connected)
│   └── Custom portfolio website (powered by Behance content)
├── ProSite
├── Hire Me / Freelance
└── Settings
    ├── Account (Adobe ID)
    ├── Notifications
    ├── Privacy
    └── Connected Apps
```

## Navigation Model

- **Type**: Top nav bar (desktop), bottom tab bar (mobile app)
- **Desktop Top Bar**: Behance logo (home), Explore, Live, Jobs, Hire Freelancers | Search, Notifications, Upload, Profile
- **Mobile App Bottom Tabs**: Home, Search, Create (+), Notifications, Profile
- **Creative Field Navigation**: Category chips on Explore; sidebar on search results
- **Project Viewing**: Long vertical scroll through project images (case study format)
- **Adobe Ecosystem Links**: Deep links to Creative Cloud, Adobe Portfolio, Adobe Stock

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | cover image, images/videos (ordered), title, description, creative fields, tags, tools used, appreciations, views, comments, published date, license | → Owner, → Creative Fields, → Tags |
| Moodboard | name, description, saved items (projects, images, external references), visibility | → User, → Projects |
| Live Stream | title, streamer, scheduled time, status (live/replay), viewer count, category | → User, → Creative Field |
| User Profile | name, bio, location, avatar, banner, creative fields, tools, follower count, work experience, availability | → Projects, → Moodboards |
| Comment | text, author, timestamp, appreciations | → Project |
| Job Listing | title, company, location, type, salary range, description, creative field | → Company |
| Asset | image, license type, Adobe Stock metadata | → Adobe Stock |
| Team/Company | name, logo, members, projects | → Projects, → Job Listings |


### Content Lifecycle
```
created → published → visible → archived
                     ↘ reported → under_review → restored / removed
created → draft (saved but not published)
published → edited (version history maintained)
```
## User Flows

### Publishing a Project
```
Click "Create a Project" → Upload images/videos in sequence → Arrange order → Add captions, descriptions for each module → Set cover image → Add title, creative fields, tags, tools used → Set visibility (public, private, draft) → Publish → Project appears in followers' feeds, field galleries, and search
```

### Discovering Work
```
Visit Explore → Browse by creative field or "For You" recommendations → Scroll project grid → Click to open full case study (long vertical scroll) → Appreciate (like) → Save to Moodboard for reference → Follow creator for future projects
```

### Building a Portfolio
```
Upload multiple projects showcasing different skills → Set profile bio, work experience, tools/skills → Enable "Available for Freelance" badge → Optionally connect Adobe Portfolio for a custom domain portfolio site → Projects auto-sync from Behance to Adobe Portfolio
```

### New User Onboarding
```
Visit Behance → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
## URL / Route Structure

```
behance.net/                                # Home / discover
behance.net/gallery/{id}/{slug}             # Project detail
behance.net/search/projects?field={field}   # Browse by creative field
behance.net/search/projects?search={query}  # Search results
behance.net/{username}                      # User profile
behance.net/{username}/moodboards           # User's moodboards
behance.net/{username}/appreciated          # Liked projects
behance.net/live                            # Live streams
behance.net/live/{streamId}                 # Stream detail/replay
behance.net/joblist                         # Job board
behance.net/joblist/{id}                    # Job detail
behance.net/hire                            # Hire freelancers
myportfolio.com/ (or custom domain)         # Adobe Portfolio (connected)
myportfolio.com/settings  # Settings
myportfolio.com/billing  # Billing & subscription
myportfolio.com/notifications  # Notification preferences
myportfolio.com/help  # Help center
myportfolio.com/help/{topic}  # Help article
myportfolio.com/api  # API documentation
myportfolio.com/integrations  # Integrations
```

## Search & Filter

- **Global Search**: Projects, people, moodboards, assets, live streams
- **Creative Field Filter**: 20+ fields (Graphic Design, Photography, Motion, etc.)
- **Tool Filter**: Filter by software used (Photoshop, Figma, Blender, etc.)
- **Color Filter**: Search by dominant color in projects
- **Sort**: Recommended, Most Appreciated, Most Viewed, Most Discussed, Most Recent
- **Location Filter**: Find creators by city/country
- **Availability Filter**: Show only "Available for Freelance" profiles
- **Adobe Stock Integration**: Search stock assets alongside community projects

- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App | Bottom tab bar; single-column project grid; full-screen project viewer; swipe between projects |
| Mobile Web (< 768px) | 1-2 column grid; hamburger nav; project detail as vertical scroll page |
| Tablet (768–1024px) | 2-3 column grid; project detail with sidebar metadata |
| Desktop (> 1024px) | 3-4 column project grid; sticky top nav; project detail as full-width scroll with floating action bar |
| Large Desktop (> 1440px) | 5+ column grid; wider project detail; expanded sidebar (tools, tags, related) |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Behance-Specific UX Patterns
- **Progressive disclosure**: Complex features hidden behind expandable sections
- **Contextual actions**: Right-click menus and hover-revealed action buttons
- **Inline editing**: Click-to-edit fields without navigating to a separate page
- **Batch operations**: Multi-select with bulk actions (delete, move, archive, tag)
- **Undo support**: Non-destructive actions with undo toast notifications
- **Loading states**: Skeleton screens and progress indicators during async operations
- **Empty states**: Helpful illustrations and CTAs when sections have no content
- **Onboarding tooltips**: First-time user guidance highlighting key features

### Accessibility
- WCAG 2.1 AA compliance across all interactive elements
- Semantic HTML with proper ARIA labels and landmarks
- Keyboard navigation support for all core workflows
- Screen reader compatibility tested with VoiceOver, NVDA, and JAWS
- Color contrast ratios meeting minimum 4.5:1 for body text
- Focus indicators visible on all interactive elements
- Reduced motion option respecting `prefers-reduced-motion`
- Resizable text up to 200% without content loss

## Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Browse projects, view profiles, search; limited views before sign-up prompt |
| Registered User (free) | Upload projects, create moodboards, appreciate, comment, follow, go live |
| Adobe Creative Cloud Subscriber | Full Behance access + Adobe Portfolio, extra storage, Fonts, Stock integration |
| Pro / Freelance User | "Available for Hire" badge, priority in search, enhanced analytics |
| Company / Team | Team profile, post jobs, manage team portfolio, coordinate hiring |
| Curator / Staff | Feature projects in curated galleries, manage trending, moderate content |
| Job Poster | Create and manage job listings, receive applications |
