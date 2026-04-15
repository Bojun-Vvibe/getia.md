# Dating App — Information Architecture

## Overview

A dating and relationship platform (Tinder, Hinge, Bumble style). The mental model is **discover → match → connect → meet** — users create a profile, browse potential matches through swipe or scroll interactions, match based on mutual interest, chat, and arrange dates. Profile quality, matching algorithms, and conversation engagement drive the experience. Privacy and safety are critical.

## Site Map

### User App

```
├── Home / Discover
│   ├── Profile Card Stack (swipeable)
│   │   ├── Photos (swipe through)
│   │   ├── Name, Age
│   │   ├── Bio / Prompts
│   │   ├── Distance
│   │   ├── Key Details (job, education, height)
│   │   └── Compatibility Indicators
│   ├── Actions (Like, Pass, Super Like, Rewind)
│   ├── Filter / Preference Quick Access
│   └── Boost / Spotlight CTA
├── Matches
│   ├── New Matches (unread, no conversation yet)
│   ├── Active Conversations
│   ├── Match Grid (thumbnails)
│   └── Match Detail → Opens Chat
├── Chat
│   ├── Conversation Thread
│   │   ├── Text Messages
│   │   ├── Photos / GIFs
│   │   ├── Voice Notes
│   │   ├── Prompts / Icebreakers
│   │   └── Date Suggestion (time, place)
│   ├── Match Profile (view from chat)
│   ├── Video Call
│   ├── Unmatch / Block / Report
│   └── Safety Tips
├── Likes (Who Liked You)
│   ├── Received Likes (blurred for free, visible for premium)
│   ├── Sent Likes (optional)
│   └── Like Detail → Match or Pass
├── Profile (Own)
│   ├── Photos (6-9 slots, order matters)
│   ├── Prompts / Answers (e.g., "Two truths and a lie")
│   ├── Bio
│   ├── Basics (job, company, education, location)
│   ├── Details (height, exercise, drinking, smoking, religion, politics)
│   ├── Interests / Hobbies Tags
│   ├── Looking For (relationship, casual, friends, unsure)
│   ├── Linked Accounts (Instagram, Spotify)
│   ├── Profile Verification (photo verify)
│   └── Preview Mode (see how others see you)
├── Preferences / Filters
│   ├── Age Range
│   ├── Distance / Location
│   ├── Gender Preference
│   ├── Dealbreakers (height, smoking, religion, etc.)
│   └── Advanced Filters (premium)
├── Explore / Discovery Modes (optional)
│   ├── Nearby (location-based)
│   ├── Events (social events, speed dating)
│   ├── Communities / Groups
│   └── Passport / Travel Mode (change location)
├── Safety Center
│   ├── Block & Report
│   ├── Photo Verification
│   ├── Safety Tips
│   ├── Share Date Details (with friends)
│   ├── Video Call Before Meeting
│   └── Unmatch & Data Deletion
├── Account
│   ├── Settings
│   │   ├── Phone / Email
│   │   ├── Notification Preferences
│   │   ├── Privacy (hide profile, incognito mode)
│   │   ├── Discovery Settings
│   │   └── Linked Accounts
│   ├── Subscription / Premium
│   │   ├── Plan Comparison
│   │   ├── Current Plan
│   │   └── Manage Subscription
│   ├── Snooze Mode (pause profile)
│   └── Delete Account
└── Help
    ├── FAQ
    ├── Contact Support
    ├── Community Guidelines
    └── Safety Resources
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 4-5 tabs | Discover (fire/cards), Likes (heart), Matches/Chat (message), Profile (person) |
| **Discover** | Card stack (swipe UX) | Swipe right = Like, Left = Pass, Up = Super Like |
| **Matches** | Grid + list hybrid | Top row: new matches (scrollable). Below: conversation list |
| **Chat** | Full conversation view | iMessage-style bubbles with actions |
| **Profile Editor** | Scrollable form | Drag-to-reorder photos, tap to edit sections |

### Mobile Bottom Tabs
```
[ 🔥 Discover ] [ ❤️ Likes ] [ 💬 Chat ] [ 👤 Profile ]
```

### Gesture Model
| Gesture | Action |
|---------|--------|
| Swipe Right | Like |
| Swipe Left | Pass / Nope |
| Swipe Up | Super Like |
| Tap Card | Expand Profile |
| Long Press Photo | Pause (stay on photo) |
| Swipe Photo | Next / Previous photo |
| Double Tap | Like (alternative) |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| User | name, age, gender, photos[], bio, prompts[], job, company, school, location, verified, looking_for | has many Likes, Matches, Messages |
| Photo | url, order, is_primary, verified | belongs to User |
| Prompt | question, answer | belongs to User (e.g., "A typical Sunday: ...") |
| Like | from_user, to_user, type (like/super_like/rose), message (on Hinge-style), created_at | between Users |
| Match | user_a, user_b, matched_at, status (active/unmatched), last_message | connects two Users |
| Message | match, sender, type (text/image/gif/voice/video_call), content, sent_at, read_at | belongs to Match |
| Preference | age_range, distance, gender, dealbreakers{} | belongs to User |
| Report | reporter, reported, reason, details, created_at | between Users |
| Block | blocker, blocked, created_at | between Users |
| Subscription | user, plan (free/plus/gold/platinum), features[], starts_at, expires_at | belongs to User |
| Boost | user, type (boost/super_boost), activated_at, duration | belongs to User |

### Match Flow
```
User A likes User B → (if B already liked A) → Instant Match → Chat Unlocked
User A likes User B → (B hasn't seen A) → Appears in B's "Likes" → B likes back → Match
User A likes User B → (B sees and passes) → No match (A never knows)
```

### Match Status
```
matched → chatting → exchanged_numbers / planned_date → (user-defined)
           ↘ unmatched
           ↘ reported / blocked
```

## User Flows

### Discover & Match
```
Open App → Discover → Swipe Through Cards → Like (swipe right) → Mutual Like → Match! → Open Chat → Send Message
```

### Like with Comment (Hinge-style)
```
Discover → View Profile → Tap Prompt/Photo → Write Comment → Send Like with Comment → Appears in Their Likes → They Accept → Match → Chat
```

### Start Conversation
```
Matches → New Match → Open Chat → Send Icebreaker / Respond to Prompt → Conversation → Suggest Date
```

### Update Profile
```
Profile → Edit → Reorder Photos → Update Prompts → Edit Details → Preview → Save
```

### Video Date
```
Chat → [Video Call] → Camera/Mic Permissions → In-Call → End Call → Continue Chat
```

## URL / Route Structure

> Note: Dating apps are almost exclusively native mobile apps. These routes are for deep links and the companion web app.

```
/                              → Landing / Download App
/discover                      → Discover (card stack)
/likes                         → Who Liked You
/matches                       → Matches & Conversations
/chat/:matchId                 → Chat Thread
/profile                       → My Profile
/profile/edit                  → Edit Profile
/profile/photos                → Manage Photos
/profile/prompts               → Edit Prompts
/preferences                   → Discovery Preferences
/explore                       → Explore / Discovery Modes
/explore/events                → Social Events
/safety                        → Safety Center
/account                       → Account
/account/subscription          → Subscription
/account/settings              → Settings
/account/privacy               → Privacy Settings
/help                          → Help Center
/verify                        → Photo Verification
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Discover | Auto-curated (algorithm-driven, not searched) | Age Range, Distance, Gender, Height, Religion, Ethnicity (sensitive, optional), Education, Smoking, Drinking, Children, Looking For | Algorithm (compatibility/activity-based) |
| Matches | Match name | — | Recent Activity, Newest Match |
| Likes | — | — | Newest |

> Note: Discovery is **filter-driven, not search-driven**. Users set preferences, and the algorithm delivers matches. There is no text search for people.

## Responsive Behavior

| Breakpoint | Discover | Chat | Profile |
|------------|----------|------|---------|
| Mobile (primary) | Full-screen card stack, swipe gestures | Full-screen conversation | Scrollable form |
| Tablet | Larger cards, same swipe UX | Split view (matches list + chat) | Two-column form |
| Desktop (web) | Side-by-side (profile + actions), click instead of swipe | Three-column (matches, chat, profile) | Multi-column |

### Mobile-First Design Principles
- Card-based discovery (one profile at a time = focused attention)
- Gesture-driven interaction (swipe > tap > type)
- Photo-first design (images dominate, text supports)
- Bottom-sheet pattern for profile expansion
- Haptic feedback on like/match
- Real-time push notifications (new match, new message)
- Minimal typing required (prompts, pre-written icebreakers)
- Camera-native (in-app photo capture for verification)

## Access Control

### Free vs Premium
| Feature | Free | Plus | Gold/Platinum |
|---------|------|------|--------------|
| Swipe / Like | Limited daily | Unlimited | Unlimited |
| See Who Liked You | Blurred | Blurred | ✅ Full |
| Super Likes | 1/week | 5/week | 5/day |
| Rewind (undo pass) | — | ✅ | ✅ |
| Passport (change location) | — | ✅ | ✅ |
| Boost | — | 1/month | 1/week |
| Incognito Mode | — | — | ✅ |
| Advanced Filters | Basic | More | All |
| Read Receipts | — | — | ✅ |
| Priority Likes | — | — | ✅ |

### Safety & Moderation
| Feature | All Users |
|---------|-----------|
| Block User | ✅ |
| Report User | ✅ |
| Unmatch (deletes chat) | ✅ |
| Photo Verification | ✅ (optional) |
| Video Call (in-app) | ✅ |
| Share Date Plans | ✅ |
| AI Content Moderation | Auto-detect explicit/spam |
| Manual Review | Reported content |
| Ban (repeated violations) | Account suspension/deletion |

### Privacy Controls
- Profile visible only to potential matches (not searchable by name)
- Incognito mode: only visible to people you've liked
- Block contacts: hide from phone contacts
- Location: approximate distance only (never exact)
- Last active: can be hidden
- Screenshots: discouraged (optional notification)
