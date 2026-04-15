---
brand: Clubhouse
tagline: Drop in and talk about anything
category: Social & Communication
website: https://joinclubhouse.com
---

# Information Architecture — Clubhouse

## Overview

Clubhouse is a drop-in audio conversation platform where users join live rooms to listen, speak, and network. The IA centers on real-time audio rooms organized by topics and clubs, with a hallway-style feed that surfaces active and upcoming conversations. The ephemeral nature of live rooms (now supplemented by replays) creates urgency, while clubs and following graphs provide persistent community structure.

## Site Map

```
Clubhouse
├── Hallway (Home Feed)
│   ├── Live Rooms (happening now)
│   ├── Upcoming Rooms (scheduled)
│   └── Replays (recorded rooms)
├── Explore / Search
│   ├── People
│   ├── Clubs
│   ├── Topics
│   └── Suggested Rooms
├── Room (live audio)
│   ├── Stage (speakers)
│   ├── Audience
│   ├── Raise Hand
│   ├── Chat (text backchannel)
│   ├── Links / Pinned
│   └── Replay toggle
├── Clubs
│   ├── Club Profile
│   ├── Members
│   ├── Rooms (past/scheduled)
│   └── Rules / Description
├── Notifications
│   ├── Room Invites
│   ├── Followers
│   ├── Club Updates
│   └── Scheduled Reminders
├── Profile
│   ├── Bio
│   ├── Clubs
│   ├── Followers / Following
│   ├── Replays
│   └── Interests (topics)
├── Messages (DMs / Backchannel)
├── Create
│   ├── Start a Room (open / social / closed)
│   └── Schedule a Room
└── Settings
    ├── Account
    ├── Notifications
    ├── Privacy
    └── Linked Accounts
```

## Navigation Model

- **Type**: Bottom tab bar (mobile-first)
- **Bottom Tabs**: Hallway (home), Search/Explore, Notifications, Messages, Profile
- **Room Entry**: Tap room card from Hallway → drops into live audio room
- **FAB (Floating Action Button)**: Green "Start a Room" button always visible at bottom
- **Room Navigation**: Minimize room to floating pill at top while browsing other screens
- **Topic Chips**: Tappable interest tags in Explore to filter rooms by topic

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Room | title, topic tags, room type (open/social/closed), speakers, listener count, start time, replay flag | → Club, → Speakers, → Replay |
| Replay | audio recording, room title, speakers, duration, timestamp, clip support | → Room, → Club |
| Club | name, avatar, description, rules, member count, admin list, topic | → Rooms, → Members |
| User Profile | name, username, bio, photo, follower count, interests/topics, clubs | → Rooms, → Clubs |
| Scheduled Event | title, date/time, description, club, hosts, reminder count | → Room (when live) |
| Topic | name, related topics | → Rooms, → Clubs, → Profiles |
| Message | text, sender, timestamp, room link | → User(s) |

| AuditLog | action, actor, target, timestamp, ip_address | belongs to Organization |
| Notification | type, message, read, created_at, action_url | belongs to User |
| Integration | name, type, status, credentials, last_synced | belongs to Workspace |
| Webhook | url, events[], secret, active, last_triggered | belongs to Organization |

### Content Lifecycle
```
created → published → visible → archived
                     ↘ reported → under_review → restored / removed
created → draft (saved but not published)
published → edited (version history maintained)
```
## User Flows

### Joining a Live Room
```
Open app → Hallway shows active rooms with speaker avatars and listener count → Tap room card → Immediately dropped into room as listener (audio plays) → Raise hand icon → Moderator can invite to stage → Unmute and speak → Leave quietly at any time by tapping "Leave" button
```

### Scheduling a Room
```
Tap "Start a Room" → Choose "Schedule for later" → Set title, topic, date/time, co-hosts, club (optional) → Share event link → Followers receive notification before start → At scheduled time, creator opens room → Attendees get ping to join
```

### Exploring Topics
```
Tap Explore → Browse topic categories (Tech, Music, Health, etc.) → Tap topic → See live rooms, upcoming events, and clubs under that topic → Follow topic → Hallway prioritizes rooms matching followed topics
```

### New User Onboarding
```
Visit Clubhouse → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
### Search and Discover
```
Global search → Type query → Results grouped by type → Click result → Navigate to item → Refine search with filters if needed
                                                                                          ↘ No results → Suggested alternatives
```
## URL / Route Structure

```
joinclubhouse.com/                          # Landing page / download
joinclubhouse.com/room/{roomId}             # Room deeplink (opens in app)
joinclubhouse.com/club/{clubSlug}           # Club profile
joinclubhouse.com/event/{eventId}           # Scheduled event
joinclubhouse.com/@{username}               # User profile
joinclubhouse.com/topic/{topicSlug}         # Topic page
joinclubhouse.com/settings  # Settings
joinclubhouse.com/billing  # Billing & subscription
joinclubhouse.com/notifications  # Notification preferences
joinclubhouse.com/help  # Help center
joinclubhouse.com/help/{topic}  # Help article
joinclubhouse.com/api  # API documentation
joinclubhouse.com/search?q={query}  # Search results
joinclubhouse.com/integrations  # Integrations
joinclubhouse.com/admin  # Admin console
joinclubhouse.com/admin/members  # Member management
joinclubhouse.com/import  # Import data
joinclubhouse.com/export  # Export data
joinclubhouse.com/changelog  # Changelog
joinclubhouse.com/team  # Team management
```

## Search & Filter

- **Universal Search**: People, clubs, topics, rooms
- **Hallway Filters**: "For You" (algorithmic) vs. following-based feed
- **Topic Browsing**: Explore tab organized by category with horizontal scroll
- **Club Discovery**: Search clubs by name or browse by topic
- **Language Filter**: Filter rooms by spoken language
- **No Full-Text Audio Search**: Audio content is not transcribed for search (replays are browse-only)

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (primary) | Single-pane; bottom tab bar; rooms are full-screen audio with speaker grid; floating minimized room pill |
| Tablet | Enlarged phone layout; larger speaker grid in rooms |
| Web (joinclubhouse.com) | Marketing site + limited room listening on web; profile and club pages viewable; deeplinks redirect to app |
| Desktop | Not a primary platform; web-based listening added for accessibility |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Clubhouse-Specific UX Patterns
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


### API & Integration Patterns
- RESTful API with JSON request/response format
- Webhook support for real-time event notifications
- OAuth 2.0 for third-party application authorization
- Rate limiting with clear headers (X-RateLimit-Remaining)
- Pagination via cursor-based or offset-based parameters
- Versioned API endpoints for backward compatibility
- Comprehensive API documentation with interactive examples
- SDKs available for popular languages (JavaScript, Python, Ruby, Go)

- Rooms can transition from open to closed mid-conversation for private discussions
- Emoji reactions (confetti, fire, etc.) provide non-verbal audience engagement signals

## Access Control

| Role | Capabilities |
|---|---|
| Listener | Join open rooms, listen, raise hand, react with emoji, view profiles |
| Speaker (on stage) | Speak, mute/unmute self, share links |
| Room Moderator | Move users to stage, mute speakers, remove users, end room, pin links, toggle replay |
| Club Admin | Create rooms under club, manage members, edit club info, schedule events |
| Club Member | Join club rooms, receive notifications, appear in member list |
| Registered User | Follow people/clubs, set interests, DM, start/schedule rooms |
| Non-registered Visitor | View landing page; must download app and sign up to access content |
