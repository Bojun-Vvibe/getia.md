---
brand: Duolingo
tagline: "The world's best way to learn a language. Free, fun, and effective."
category: Learning
website: https://duolingo.com
---

# Duolingo — Information Architecture

## Overview

Duolingo is the world's most popular language learning app, teaching 40+ languages to 500M+ users through gamification. The mental model is **daily practice as a game** — short lessons (5 minutes), XP points, streaks, hearts (lives), leaderboards, and a progression tree. Duo the Owl mascot drives engagement through encouragement and guilt ("You made Duo sad"). Unlike Coursera's academic structure, Duolingo optimizes for daily habit formation and bite-sized learning.

## Site Map

```
├── Home / Learn
│   ├── Path (Progressive Skill Tree)
│   │   ├── Units (grouped by theme)
│   │   │   ├── Lessons (5-7 per unit)
│   │   │   │   ├── Lesson Nodes (circles on path)
│   │   │   │   ├── Locked / Unlocked / Completed / Legendary
│   │   │   │   └── Cracks (need to practice to prevent decay)
│   │   │   ├── Unit Header (theme: "Family", "Restaurant", "Travel")
│   │   │   └── Checkpoint (unit review test)
│   │   └── Legendary Level (hardest difficulty, premium or gems)
│   ├── Daily Quest / Goal
│   ├── Streak Counter (flame icon, prominent)
│   ├── Hearts (lives remaining, free tier)
│   ├── XP Progress (daily target)
│   ├── Streak Freeze Status
│   └── Friend Activity ("Maria completed a lesson!")
├── Lesson View (In-Lesson)
│   ├── Progress Bar (top, fills as you answer)
│   ├── Exercise Types
│   │   ├── Translate (L2 → L1 or L1 → L2)
│   │   ├── Tap Words (arrange word tiles)
│   │   ├── Type Answer (free text)
│   │   ├── Listen & Type (audio → text)
│   │   ├── Speak (speech recognition)
│   │   ├── Match Pairs (tap matching pairs)
│   │   ├── Select Image (which picture matches?)
│   │   └── Fill in the Blank
│   ├── Feedback (correct = green, wrong = red + explanation)
│   ├── Hearts Lost (wrong answer = lose a heart)
│   ├── Combo Counter (consecutive correct)
│   ├── Tips / Hints (tap word for translation)
│   └── Lesson Complete
│       ├── XP Earned
│       ├── Accuracy %
│       ├── Streak Extended!
│       └── Share / Continue
├── Streak
│   ├── Current Streak (days)
│   ├── Streak Calendar (filled circles)
│   ├── Streak Freeze (protect streak for 1 day)
│   ├── Streak Society (milestone badges: 7, 30, 100, 365)
│   └── Friend Streak Comparison
├── Leaderboards
│   ├── Leagues (Bronze → Silver → Gold → Sapphire → Ruby → ... → Diamond)
│   ├── Weekly League (30 users)
│   ├── XP Rankings
│   ├── Promotion / Demotion Zones
│   └── History
├── Profile
│   ├── Stats (total XP, streak, courses, time spent)
│   ├── Achievements (badges gallery)
│   ├── Friends
│   │   ├── Friend List
│   │   ├── Add Friends (search, contacts, social)
│   │   ├── Follow / Unfollow
│   │   └── Friend XP Rankings
│   ├── Courses (languages being learned)
│   └── Edit Profile (name, avatar, username)
├── Practice
│   ├── Review (weak skills — spaced repetition)
│   ├── Practice Hub (stories, listening, speaking)
│   ├── Mistakes Practice (redo errors)
│   └── Timed Practice (challenge mode)
├── Stories (Intermediate)
│   ├── Story List (by difficulty)
│   ├── Story View
│   │   ├── Narrative (illustrated, animated)
│   │   ├── Interactive Questions (inline)
│   │   ├── Character Voices
│   │   └── Comprehension Check
│   └── XP from Stories
├── Podcasts
│   ├── Episodes (real stories in target language)
│   ├── Transcript (L1 + L2)
│   └── Comprehension Questions
├── Duolingo Max (Premium AI)
│   ├── Explain My Answer (AI tutor explains mistakes)
│   ├── Roleplay (AI conversation practice)
│   ├── Video Call (AI character chat)
│   └── Unlimited Hearts
├── Shop
│   ├── Gems (virtual currency)
│   ├── Streak Freezes (200 gems)
│   ├── Heart Refill (350 gems)
│   ├── Outfits for Duo (cosmetic)
│   ├── Timer Boost
│   └── Legendary Level Unlock
├── Courses
│   ├── Switch Language
│   ├── Available Languages (40+)
│   ├── Course Progress
│   └── Reset Progress
├── Settings
│   ├── Daily Goal (5/10/15/20 min)
│   ├── Reminder Time (push notification)
│   ├── Sound Effects
│   ├── Speaking Exercises (on/off)
│   ├── Motivational Messages
│   ├── Account
│   └── Privacy
├── Super Duolingo (Subscription)
│   ├── Unlimited Hearts
│   ├── No Ads
│   ├── Mistake Practice
│   ├── Legendary Levels (unlimited)
│   ├── Progress Quizzes
│   └── Family Plan (up to 6)
└── Help
    ├── FAQ
    ├── Bug Report
    └── Community Forum
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 5 tabs | Learn (path), Practice, Leaderboards, Profile, Shop |
| **Path View** | Vertical scrolling path (map-like) | Lesson nodes connected by path, current position highlighted |
| **Lesson** | Full-screen takeover (no nav) | Progress bar only — complete or quit |
| **Streak Counter** | Always visible (top) | Flame icon + day count, tap for details |
| **Hearts** | Top-right (free tier) | Red hearts showing lives remaining |
| **XP Pop-ups** | Floating after correct answer | "+10 XP" animation |

### Signature UX: The Path
```
     ⭐ Legendary
     🟢 Lesson 5 (completed)
     🟢 Lesson 4 (completed)
     🟡 Lesson 3 (current — glowing)
     🔒 Lesson 2 (locked)
     🔒 Lesson 1 (locked)
  ──── Checkpoint ────
     🟢 Lesson 3 ...
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Course | language_pair (e.g., EN→ES), units[], total_skills | belongs to User (enrollment) |
| Unit | title, theme, order, lessons[], checkpoint | belongs to Course |
| Lesson | skills[], exercises[], xp_reward, difficulty, status (locked/available/completed/legendary) | belongs to Unit |
| Exercise | type (translate/listen/speak/match/fill_blank), prompt, correct_answer, alternatives[], hints[], audio_url | belongs to Lesson |
| Streak | current_days, longest_ever, freeze_active, freeze_count | belongs to User |
| LeaguePosition | league (bronze→diamond), rank, xp_this_week, promotion_zone | belongs to User |
| Achievement | name, icon, criteria, earned_at | belongs to User |
| Story | title, language, difficulty, characters[], scenes[], xp_reward | belongs to Course |
| Gem | balance, earned_history[], spent_history[] | virtual currency |
| Subscription | type (free/super/max/family), features[], expires_at | belongs to User |

### Gamification Mechanics
```
XP: Earned per lesson (10-20), bonus for combos and speed
Streak: +1 per day of practice, breaks reset (unless frozen)
Hearts: Start with 5 (free), lose 1 per mistake, refill with gems or wait
Leagues: Weekly competition, top 10 promoted, bottom 5 demoted
Gems: Earned from lessons, spent on power-ups
Legendary: Hardest lesson difficulty, earn a gold crown
```

### Lesson Status
```
locked → available → started → completed → cracked (needs review) → practiced
                                          → legendary (gold)
```

## User Flows

### Daily Practice (The Core Loop)
```
Open App → See Streak ("Day 47 🔥") → Next Lesson on Path → Complete 5-10 Exercises → "Lesson Complete! +15 XP" → Streak Extended → Close App → Push Notification Tomorrow
```

### Review Mistakes
```
Practice → Mistakes → Redo Exercises You Got Wrong → Correct → Strengthened! → XP Earned
```

### Compete in Leagues
```
Complete Lessons → Earn XP → Check Leaderboard → "3rd Place in Gold League" → Earn More XP → Promotion to Sapphire → Trophy!
```

### AI Roleplay (Max)
```
Practice → Roleplay → Scenario: "Ordering at a café in Paris" → Type/Speak Response → AI Responds in Character → Conversation → Feedback on Grammar
```

### New User Onboarding
```
Visit Duolingo → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
## URL / Route Structure

```
/                              → Home / Learn (Path)
/learn                         → Learning Path
/lesson/:id                    → In-Lesson View
/practice                      → Practice Hub
/practice/mistakes             → Mistake Review
/stories                       → Stories
/stories/:id                   → Story View
/leaderboard                   → Leagues
/profile                       → My Profile
/profile/:username             → User Profile
/profile/achievements          → Achievement Gallery
/shop                          → Gem Shop
/settings                      → Settings
/settings/courses              → Language Courses
/settings/daily-goal           → Daily Goal
/super                         → Super Duolingo
/max                           → Duolingo Max
/podcasts                      → Podcasts
/events                        → Duolingo Events (meetups)
billing  → Billing & subscription
/settings/notifications           → Notification preferences
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Friends | Username, name | — | Activity level |
| Courses | Language name | — | Popularity |
| Stories | Title | Difficulty, Language | Difficulty, newest |

> Note: Duolingo is mostly **navigation-driven, not search-driven**. The path determines what you do next. There's no catalog to browse.

## Responsive Behavior

| Breakpoint | Path | Lesson | Leaderboard |
|------------|------|--------|-------------|
| Mobile (primary) | Vertical path, full width | Full-screen exercises | League table, scrollable |
| Tablet | Wider path, larger tiles | Centered exercises | Side-by-side stats |
| Desktop (web) | Path + sidebar (streak, friends) | Centered with keyboard input | Full table |

### Gamification-Specific UX
- Streak counter with fire animation (visible everywhere)
- Haptic feedback on correct/wrong answers
- Sound effects (ding for correct, buzz for wrong)
- Duo the Owl animations (happy, sad, encouraging, judging)
- Push notifications: "Don't lose your streak!" "Duo is waiting for you!"
- XP animations: floating numbers, combo counters
- League promotion/demotion animations
- Celebration screens on milestones (7-day streak, 100-day streak)
- Green = correct, red = wrong, gold = legendary (consistent color language)
- Dark mode support

## Access Control

| Feature | Free | Super | Max |
|---------|------|-------|-----|
| Lessons | ✅ | ✅ | ✅ |
| Hearts | 5 (replenish over time) | Unlimited | Unlimited |
| Ads | Yes | No | No |
| Mistakes Practice | — | ✅ | ✅ |
| Legendary Levels | Gems required | Unlimited | Unlimited |
| Progress Quizzes | — | ✅ | ✅ |
| AI Explain My Answer | — | — | ✅ |
| AI Roleplay | — | — | ✅ |
| AI Video Call | — | — | ✅ |
| Offline Lessons | — | ✅ | ✅ |
| Family Plan | — | ✅ (6 users) | — |
