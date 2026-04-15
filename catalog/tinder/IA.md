---
brand: Tinder
tagline: "The world's most popular dating app. Swipe right to match, chat, and meet."
category: Dating
website: https://tinder.com
---

# Tinder — Information Architecture

## Overview

Tinder is the world's most popular dating app, pioneering the **swipe-to-match** interaction that has defined mobile dating. The mental model is **discover → swipe → match → chat → meet** — users see one profile at a time in a card stack, swipe right to like or left to pass, and mutual likes create a match that unlocks conversation. Tinder's IA is uniquely minimal: there's no search, no browsing, no profiles to explore — just the card stack, the match list, and chat. The algorithm decides what you see; you just swipe.

## Site Map

```
├── Discover (Card Stack)
│   ├── Profile Card
│   │   ├── Photos (swipe through, up to 9)
│   │   ├── Name, Age
│   │   ├── Distance
│   │   ├── Verified Badge (photo verified)
│   │   ├── Bio (short text)
│   │   ├── Job + Company
│   │   ├── School
│   │   ├── Passions / Interest Tags (foodie, hiking, travel, etc.)
│   │   ├── Anthem (Spotify song)
│   │   ├── Instagram Photos (linked)
│   │   ├── Relationship Intent (looking for: LTR, casual, friends, unsure)
│   │   └── Basics (height, zodiac, exercise, education, drinking, smoking, pets)
│   ├── Action Buttons
│   │   ├── ✕ Pass (swipe left)
│   │   ├── ⭐ Super Like (swipe up, limited)
│   │   ├── ❤️ Like (swipe right)
│   │   ├── ⚡ Boost (increase visibility)
│   │   └── ↩️ Rewind (undo last swipe, premium)
│   ├── Tap Card → Expanded Profile (full photos, bio, details)
│   └── Filter Quick Access
├── Match List / Messages
│   ├── New Matches (top row, scrollable)
│   │   ├── Match Thumbnails (unread, no message yet)
│   │   └── Tap → Open Chat
│   ├── Conversations (below, sorted by recent)
│   │   ├── Active Chats
│   │   ├── Unread Indicator
│   │   └── Last Message Preview
│   └── Feed (matches' activity, deprecated in some markets)
├── Chat
│   ├── Message Bubbles (text)
│   ├── GIFs (Giphy integration)
│   ├── Reactions
│   ├── Photo Sharing
│   ├── Spotify Song Share
│   ├── Video Chat (in-app)
│   ├── "Are We a Match?" (Tinder interactive games)
│   ├── Unmatch (removes chat history completely)
│   ├── Block / Report
│   └── Safety Tips
├── Likes (Who Likes You)
│   ├── Received Likes
│   │   ├── Free: Blurred grid (can see count, not profiles)
│   │   ├── Gold/Platinum: Full profiles, swipe from here
│   │   └── Tap → Like Back = Instant Match
│   ├── Sent Likes (Platinum only)
│   └── Top Picks (curated daily selection)
├── Explore
│   ├── Top Picks (algorithm's best daily suggestions)
│   ├── Vibes (interactive question stickers)
│   ├── Hot Takes (speed-matching during limited hours)
│   ├── Swipe Night (choose-your-own-adventure events)
│   ├── Festival Mode (find people at same event)
│   └── Passport (change location, premium)
├── Profile (Own)
│   ├── Photos (9 slots, drag to reorder)
│   ├── Smart Photos (auto-optimize order based on performance)
│   ├── Bio
│   ├── Passions (select from list: cooking, gaming, yoga, etc.)
│   ├── Relationship Intent (what you're looking for)
│   ├── Basics (height, exercise, education, etc.)
│   ├── Lifestyle (zodiac, pets, smoking, drinking)
│   ├── Job Title + Company
│   ├── School
│   ├── Living In (city)
│   ├── Anthem (Spotify integration)
│   ├── Connected Instagram
│   ├── Photo Verification (selfie verify)
│   ├── Profile Preview (see how others see you)
│   └── Edit Info
├── Settings / Preferences
│   ├── Discovery Settings
│   │   ├── Location (current or Passport)
│   │   ├── Distance (1-100 miles slider)
│   │   ├── Age Range (18-100 slider)
│   │   ├── Gender Preference
│   │   ├── Global Mode (show me people around the world)
│   │   └── Show Me on Tinder (toggle discoverable)
│   ├── Subscription
│   │   ├── Free / Plus / Gold / Platinum (comparison)
│   │   ├── Current Plan
│   │   └── Manage
│   ├── Notifications (matches, messages, likes, promotions)
│   ├── Privacy
│   │   ├── Block Contacts (hide from phone contacts)
│   │   ├── Hide Age
│   │   ├── Hide Distance
│   │   └── Incognito Mode (only visible to people you like, premium)
│   ├── Account (phone, email)
│   ├── Safety
│   │   ├── Photo Verification
│   │   ├── Block & Report
│   │   ├── Safety Tips
│   │   └── Noonlight Integration (emergency services)
│   ├── Snooze (pause profile temporarily)
│   └── Delete Account
└── Safety Center
    ├── Photo Verification
    ├── Block & Report
    ├── Safety Tips ("Meeting Someone New")
    ├── Community Guidelines
    ├── Share Date Details (with friends)
    └── Resources
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 4 tabs | Discover (flame), Explore (diamond), Matches (chat), Profile |
| **Card Stack** | Full-screen, one card at a time | Swipe gestures: right=like, left=pass, up=super like |
| **Match List** | Split: top (new matches) + bottom (chats) | New matches = horizontal scrollable row |
| **Chat** | Full-screen conversation | iMessage-style, with special features (GIFs, games) |
| **Settings** | Gear icon from Profile | Sliders for age, distance, preferences |

### Gesture Model
| Gesture | Action |
|---------|--------|
| Swipe Right | Like |
| Swipe Left | Pass |
| Swipe Up | Super Like |
| Tap Photo | Next photo |
| Tap Card Body | Expand full profile |
| Long Press Photo | Pause on photo |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| User | name, age, gender, photos[9], bio, passions[], job, company, school, city, verified, anthem_song, relationship_intent, basics{height, exercise, education, zodiac, drinking, smoking, pets} | has Likes, Matches, Messages |
| Like | from_user, to_user, type (like/super_like), message (Platinum), timestamp | between Users |
| Match | user_a, user_b, matched_at, status (active/unmatched), last_message_at | connects two Users |
| Message | match, sender, content, type (text/gif/image/song/game), sent_at, read | belongs to Match |
| Preference | age_range, max_distance, gender[], global_mode, discoverable | belongs to User |
| Subscription | plan (free/plus/gold/platinum), features[], renews_at | belongs to User |
| Report | reporter, reported, reason (spam/inappropriate/underage/other), details | between Users |
| TopPick | user, date, premium_only | daily curated |
| Boost | user, activated_at, duration, type (boost/super_boost) | belongs to User |

### Match Flow
```
A swipes right on B → if B already swiped right on A → MATCH! → Chat unlocked → Confetti animation
A swipes right on B → B hasn't seen A yet → A appears in B's "Likes" → B swipes right → MATCH!
A swipes right on B → B swipes left → No match (A never knows)
```

## User Flows

### Core Swipe Loop
```
Open App → Discover → See Profile Card → Swipe Photos → Read Bio → Swipe Right (Like) → Next Card → ... → MATCH! → "It's a Match!" Screen → [Send a Message] or [Keep Swiping]
```

### Super Like
```
Discover → See Great Profile → Swipe Up → ⭐ Super Like Sent → They See You With Star Badge → Higher Chance of Match → If Match: Special Animation
```

### Start Conversation
```
Matches Tab → New Match Row → Tap Match → Chat Opens → Send Message → Wait → They Reply → Conversation → Suggest Meeting
```

### Verify Profile
```
Profile → Photo Verification → Take Selfie Mimicking Pose → AI Compares to Profile Photos → Verified ✓ → Blue Checkmark Badge
```

## URL / Route Structure

> Tinder is almost exclusively a native mobile app. Web routes are limited.

```
/                              → Landing / Download App
/app/discover                  → Card Stack
/app/likes                     → Who Likes You
/app/matches                   → Matches & Chats
/app/chat/:matchId             → Chat Thread
/app/profile                   → My Profile
/app/profile/edit              → Edit Profile
/app/profile/photos            → Manage Photos
/app/explore                   → Explore (Top Picks, events)
/app/settings                  → Settings
/app/settings/preferences      → Discovery Preferences
/app/settings/subscription     → Subscription
/app/safety                    → Safety Center
/app/passport                  → Change Location (premium)
```

## Search & Filter

| Context | Behavior | Filters |
|---------|----------|---------|
| Discover | Algorithm-driven, no search | Age Range, Distance, Gender, Global Mode |
| Matches | Scroll through matches | — (sorted by recency) |
| Likes | View who liked you | — (sorted by newest) |

> Tinder is **filter-driven, not search-driven**. You set preferences; the algorithm shows you profiles. No text search for people.

## Responsive Behavior

| Breakpoint | Discover | Chat | Profile |
|------------|----------|------|---------|
| Mobile (primary) | Full-screen card stack, swipe gestures | Full-screen conversation | Scrollable sections |
| Tablet | Larger cards | Split (match list + chat) | Two-column |
| Desktop (web) | Click buttons instead of swipe | Three-column (matches + chat + profile) | Multi-column |

### Tinder-Specific UX
- **One profile at a time**: Forces focused attention (no grid browsing)
- **Swipe as primary interaction**: Gesture replaces buttons
- **Mutual anonymity until match**: A never knows if B passed
- **Match celebration**: Confetti + "It's a Match!" screen
- **Photo-first design**: Photos dominate; text is secondary
- **Haptic feedback**: On swipe actions and match
- **Smart Photos**: AI reorders your photos to show best-performing first
- **Limited resources drive engagement**: Limited daily likes (free), limited Super Likes = each one matters
- **Gold/Platinum blur**: Seeing "someone liked you" but blurred creates FOMO → conversion

## Access Control

| Feature | Free | Plus | Gold | Platinum |
|---------|------|------|------|----------|
| Swipe / Like | Limited (daily cap) | Unlimited | Unlimited | Unlimited |
| See Who Liked You | Blurred count | Blurred | ✅ Clear | ✅ Clear |
| Super Likes | 1/week | 5/week | 5/week | 5/week |
| Boost | — | 1/month | 1/month | 1/month |
| Rewind (undo) | — | ✅ | ✅ | ✅ |
| Passport | — | ✅ | ✅ | ✅ |
| Incognito | — | — | — | ✅ |
| Message Before Match | — | — | — | ✅ |
| Priority Likes | — | — | — | ✅ |
| Ads | Yes | No | No | No |

### Safety & Moderation
- Photo verification (AI + selfie check)
- Block & Report (all users)
- Unmatch deletes chat history completely
- Noonlight emergency button
- AI content moderation (detect explicit/spam messages)
- Manual review of reported users
- Ban for repeated violations
- Privacy: approximate distance only, never exact location
