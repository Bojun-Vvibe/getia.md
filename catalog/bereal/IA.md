---
brand: BeReal
tagline: Your friends for real
category: Social & Communication
website: https://bereal.com
---

# Information Architecture — BeReal

## Overview

BeReal is an anti-curation social platform that prompts all users simultaneously at a random time each day to share an unfiltered dual-camera photo within a 2-minute window. The IA is radically simple — no followers count, no likes, no filters — designed to strip away performative social media behaviors. The entire experience revolves around one daily moment of authenticity.

## Site Map

```
BeReal
├── Daily Feed
│   ├── Friends Tab (mutual friends' BeReals)
│   ├── Discovery Tab (public BeReals worldwide)
│   └── BTS (Bonus BeReals — extra posts)
├── Post Capture
│   ├── Dual Camera Capture (front + back)
│   ├── Retake (with counter displayed)
│   ├── Caption
│   └── Location tag (optional)
├── BeReal Detail
│   ├── Photo (dual-view: selfie + world)
│   ├── RealMojis (selfie reactions)
│   ├── Comments
│   ├── Time posted vs. notification time
│   └── Retake count
├── Memories
│   ├── Calendar view (your past BeReals)
│   └── Monthly/Yearly recaps
├── Profile
│   ├── Username
│   ├── Friends list
│   ├── Streaks
│   └── BeReal history
├── Friends
│   ├── Add Friends (contacts, username, link)
│   ├── Friend Requests
│   └── Suggestions
├── Notifications
│   ├── Daily "Time to BeReal!" push
│   ├── Friend reactions
│   └── New friend requests
└── Settings
    ├── Account
    ├── Privacy
    ├── Notifications
    ├── Memories (export)
    └── Help / Contact
├── BTS (Bonus BeReal)
│   ├── Capture Additional Moments
│   ├── BTS Gallery
│   └── BTS Reactions
├── Streaks Dashboard
│   ├── Active Streaks
│   ├── Streak History
│   └── Top Streaks
├── Year in Review
│   ├── Annual Recap Video
│   ├── Stats (posts, reactions, streaks)
│   └── Top Moments
```

## Navigation Model

- **Type**: Minimal bottom tab bar
- **Bottom Tabs**: Feed, Friends (or Discovery), Profile
- **Daily Notification**: Push notification → opens camera directly
- **Post Button**: Prominent capture button; only appears during daily window or for BTS
- **Feed Toggle**: Friends / Discovery tab switch at top of feed
- **Minimal Depth**: Almost all content is 1–2 taps from the feed

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| BeReal Post | front photo, back photo, timestamp, caption, location, retake count, late flag | → User, → RealMojis, → Comments |
| RealMoji | selfie reaction (photo), reactor user, timestamp | → BeReal Post, → User |
| Comment | text, author, timestamp | → BeReal Post |
| BTS (Bonus) | additional dual-camera post, same attributes as BeReal | → User |
| Memory | date, front/back photos, caption, location | → Calendar, → User |
| Streak | two users, streak count, active/expired | → Friends |
| User Profile | username, display name, avatar (last BeReal), friend count, streak info | → Posts, → Friends |
| Friend Request | sender, recipient, status (pending/accepted/declined), sent_at | → Users |
| Notification | type (daily/reaction/friend_request), message, read, timestamp | → User |
| Year in Review | year, stats (total_posts, reactions, streaks), video_url | → User |
| Report | reporter, content_id, reason, status | → BeReal Post or User |
| Block | blocker_id, blocked_id, created_at | → Users |

## User Flows

### Daily BeReal Capture
```
Random push notification: "Time to BeReal!" → All users notified simultaneously → Open app → Camera activates with 2-minute countdown → Capture → Front and back cameras fire simultaneously → Add optional caption and location → Post → If posted late, "Late" badge displayed with exact delay time → Retake allowed, but retake count is visible to friends
```

### Reacting with RealMoji
```
View friend's BeReal in feed → Tap RealMoji bar → Front camera activates → Capture selfie as reaction → Choose from preset expressions or custom selfie → RealMoji appears on the friend's post
```

### Viewing Memories
```
Tap Profile → "Memories" section → Calendar grid shows one thumbnail per day → Tap date → View that day's BeReal (front + back) → Scroll through months for personal time capsule
```

### Managing Streaks
```
Post daily BeReal → Friend also posts → Streak counter increments → Miss a day → Streak resets to 0 → Notification warns before streak breaks
                                                                                                                                             ↘ View streak stats in profile
```

### Adding Friends
```
Profile → Friends → Add → Search by username → Send request → Friend accepts → Mutual friendship established → See each other's BeReals in Friends feed
                                                          ↘ Share invite link → Friend opens link → Redirected to app → Auto-connected
```

### Bonus BeReal (BTS)
```
After posting daily BeReal → BTS option unlocked → Capture additional moments throughout the day → BTS posts appear in separate BTS tab → Friends can view and react
```

### Privacy Controls
```
Settings → Privacy → Choose who sees your BeReal (Friends Only / Friends of Friends / Everyone) → Configure Discovery visibility → Manage blocked accounts → Control location sharing
```
## URL / Route Structure

```
bereal.com/                             # Marketing landing page
bereal.com/download                     # App store redirect
bereal.com/{username}                   # Profile deeplink (opens in app)
bfrn.link/{shortcode}                   # Shared BeReal deeplink
bereal.com/                                   # Marketing landing page
bereal.com/download                           # App store redirect
bereal.com/about                              # About BeReal
bereal.com/privacy                            # Privacy policy
bereal.com/terms                              # Terms of service
bereal.com/community-guidelines               # Community guidelines
bereal.com/support                            # Support & FAQ
bereal.com/careers                            # Careers
bereal.com/press                              # Press kit
bereal.com/{username}                         # Profile deeplink (opens in app)
bfrn.link/{shortcode}                         # Shared BeReal deeplink
bereal.com/safety                             # Safety center
bereal.com/parents                            # Parent guide
bereal.com/developers                         # Developer info
# App deep links (mobile only)
bereal://feed                                 # Open feed
bereal://capture                              # Open camera
bereal://profile/{username}                   # Open profile
bereal://memories                             # Open memories
bereal://friends                              # Open friends list
bereal://settings                             # Open settings
```

## Search & Filter

- **Friend Search**: Search by username or real name to add friends
- **Discovery Feed**: Browse public BeReals by region (no keyword search)
- **Memories**: Browse by date (calendar view); no text search
- **No Hashtags**: No tagging, trending, or algorithmic discovery by design
- **Intentionally Minimal**: Search features are deliberately limited to discourage clout-seeking behavior
- **Discovery regions**: Browse public BeReals by geographic region
- **Memories date picker**: Navigate to specific dates via calendar interface
- **Friend suggestions**: Algorithm-based suggestions from contacts and mutual friends

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (primary & only) | Full-screen vertical layout; dual-photo stacked or picture-in-picture; bottom tab bar |
| Tablet | Scaled phone layout; no optimized tablet experience |
| Web (bereal.com) | Marketing and download page only; no feed viewing on web |
| Desktop | No desktop app or web app; mobile-only experience by design |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### BeReal-Specific UX Patterns
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
| Registered User | Post daily BeReal, view friends' posts, send RealMojis, comment, add friends |
| Non-poster (today) | Cannot view friends' BeReals until they post their own (reciprocity gate) |
| Late Poster | Can still post after 2-min window; "Late" badge shown permanently on that post |
| Friend | View each other's BeReals, react with RealMojis, comment, see streaks |
| Non-friend | Cannot view private BeReals; can see public Discovery posts |
| Non-registered | View marketing site; must download app and sign up to participate |
| Blocked User | Cannot view or interact with blocking user's content; invisible to each other |
