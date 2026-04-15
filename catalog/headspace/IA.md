---
brand: Headspace
tagline: Be kind to your mind
category: Health & Wellness
website: https://headspace.com
---

# Information Architecture — Headspace

## Overview

Headspace is a mindfulness and mental health platform offering guided meditations, sleep content, focus music, and mindfulness courses. The IA is organized around daily habits — Today's meditation, sleep wind-down, focus sessions — with a content library structured by topic (stress, anxiety, sleep, self-esteem) and format (meditation, course, exercise). The design is warm, illustration-heavy, and intentionally calming, reducing cognitive load to match the product's purpose.

## Site Map

```
Headspace
├── Home (Today)
│   ├── Daily Meditation
│   ├── Daily Move (exercise)
│   ├── Streak counter
│   ├── Suggested for You
│   └── Continue Learning (in-progress courses)
├── Meditate
│   ├── Featured
│   ├── Courses (multi-session)
│   │   ├── Basics (beginner)
│   │   ├── Managing Anxiety
│   │   ├── Self-Esteem
│   │   ├── Stress
│   │   ├── Focus
│   │   └── [30+ courses]
│   ├── Singles (one-off meditations)
│   │   ├── By Duration (3, 5, 10, 15, 20 min)
│   │   └── By Topic
│   └── Guided Exercises
│       ├── Breathing
│       ├── Body Scan
│       ├── Visualization
│       └── Walking Meditation
├── Sleep
│   ├── Sleepcasts (narrated stories)
│   ├── Sleep Music
│   ├── Soundscapes
│   ├── Wind Down (pre-sleep meditations)
│   └── Sleep Radio (continuous play)
├── Move
│   ├── Workout Videos
│   ├── Yoga
│   ├── Cardio
│   ├── Strength
│   └── Mindful Movement
├── Focus
│   ├── Focus Music
│   ├── Focus Modes (timed sessions)
│   └── Concentration exercises
├── Profile
│   ├── Stats (minutes, sessions, streak)
│   ├── Achievements / Milestones
│   ├── Buddy list
│   ├── Journey (completed courses)
│   └── Settings
├── Kids
│   ├── Age-appropriate meditations
│   ├── Sleep content for kids
│   └── Focus for kids
├── Settings
│   ├── Account
│   ├── Subscription
│   ├── Reminders
│   ├── Download (offline)
│   ├── Mindful Moments (notifications)
│   └── Bedtime Reminder
└── Website
    ├── Plans / Pricing
    ├── Headspace for Work (B2B)
    ├── Headspace Health (clinical)
    ├── Blog / Articles
    ├── Research
    └── Teachers / Students Program
```

## Navigation Model

- **Type**: Bottom tab bar (mobile), sidebar (web)
- **Mobile Bottom Tabs**: Today, Meditate, Sleep, Move, Focus
- **Top Actions**: Profile (avatar), Search, Notifications
- **Content Drill-Down**: Tab → Category → Course/Single → Session player
- **Player**: Full-screen immersive player with progress, pause, skip; minimizable to floating player
- **Daily Entry Point**: Push notification → opens Today tab with daily recommendation

## Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Meditation | title, narrator, duration, topic, level (beginner/intermediate/advanced), audio, description | → Course, → Topic |
| Course | title, description, session count, total duration, topic, progress tracking, level | → Meditations (ordered sessions) |
| Sleepcast | title, narrator, duration, theme, ambient sounds | → Sleep category |
| Focus Music | title, genre/mood, duration, loopable flag | → Focus category |
| Workout | title, instructor, duration, type (yoga/cardio/strength), video, difficulty | → Move category |
| Soundscape | title, ambient audio, duration, visual animation | → Sleep / Focus |
| Article | title, body, topic, author, published date | → Blog |
| User Stats | total minutes, session count, current streak, longest streak, milestones | → Profile |

## User Flows

### Daily Meditation Routine

```
Open app → Today tab shows daily meditation suggestion →
  Tap "Play" → Full-screen player with calming animation →
  Follow guided meditation (3-20 minutes) → Session ends with a bell →
  Streak counter increments → Stats updated → Suggestion for next session or course continuation
```


### Starting a Course

```
Meditate tab → Browse courses by topic (e.g., "Managing Anxiety") →
  Tap course → See description, session count, duration per session →
  Start Session 1 → Complete → Progress bar updates →
  Return daily → Continue from where you left off → Complete all sessions → Course badge earned
```


### Sleep Wind-Down

```
Evening push notification: "Time to wind down" →
  Sleep tab → Choose Sleepcast or Wind Down meditation →
  Set sleep timer (optional) → Play → Audio fades with sleep →
  Morning: view sleep stats if connected to health app
```



### Focus Session

```
Focus tab → Select Focus Mode → Choose duration (15/30/45/60 min) → Select ambient music → Start timer → Background music plays → Timer ends with gentle chime → Stats updated
```

### Kids Meditation

```
Kids tab → Select age group → Browse content (Sleep Stories, Breathing, Calm) → Play session → Child-friendly animations → Session ends → Parent view shows progress
```

## URL / Route Structure

```
headspace.com/                              # Marketing homepage
headspace.com/meditation                    # Meditation overview
headspace.com/sleep                         # Sleep content overview
headspace.com/exercise                      # Move content overview
headspace.com/focus                         # Focus content overview
headspace.com/meditation/{slug}             # Individual meditation/course page
headspace.com/subscriptions                 # Pricing / plans
headspace.com/work                          # Headspace for Work (enterprise)
headspace.com/studentplan                   # Student discount
headspace.com/articles/{slug}               # Blog article
headspace.com/headspace-clinical            # Clinical / therapy offering
my.headspace.com/                           # Web app (logged in)
headspace.com/meditation/courses            # All courses
headspace.com/meditation/singles             # Single meditations
headspace.com/meditation/guided-exercises    # Guided exercises
headspace.com/sleep/sleepcasts               # Sleepcasts
headspace.com/sleep/music                    # Sleep music
headspace.com/sleep/soundscapes              # Soundscapes
headspace.com/exercise/yoga                  # Yoga workouts
headspace.com/exercise/cardio                # Cardio workouts
headspace.com/focus/music                    # Focus music
headspace.com/kids                           # Kids content
headspace.com/about                          # About Headspace
headspace.com/science                        # Research & science
my.headspace.com/profile                     # User profile
my.headspace.com/settings                    # App settings
my.headspace.com/subscription                # Subscription management
```

## Search & Filter

- **Content Search**: Search meditations, courses, sleepcasts by keyword or topic
- **Filter by Duration**: 3, 5, 10, 15, 20+ minutes
- **Filter by Topic**: Stress, Anxiety, Sleep, Focus, Self-Esteem, Relationships, etc.
- **Filter by Level**: Beginner, Intermediate, Advanced
- **Browse by Narrator**: Filter by specific teacher/narrator voice
- **Personalized Recommendations**: Algorithm suggests content based on usage patterns and interests
- **Offline Access**: Downloaded content accessible without search (subscription feature)

- **Narrator Filter**: Filter meditations by specific narrator/teacher
- **Mood-Based Search**: Search by mood (calm, focus, energize, sleep)
- **Course Progress Tracking**: View in-progress and completed courses
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App (primary) | Bottom tab bar; full-screen player with animations; swipeable content cards; push notifications |
| Tablet | Larger content cards; side-by-side layout for browse + detail; enhanced player visuals |
| Web App (my.headspace.com) | Sidebar navigation; grid browse; embedded player; no push notifications |
| Wearable (Apple Watch) | Breathing exercise, quick meditation, mindful moment; no browse/search |
| Smart TV | Sleep content and focus music; simplified browse; ambient mode |


### Platform-Specific UX
- Daily meditation suggestion creates a habit-forming entry point
- Streak counter gamifies daily practice consistency
- Calming animations during meditation enhance the immersive experience
- Bell sound marks the end of each session — a signature Headspace audio cue
- Course progression locks content sequentially — encouraging consistent practice

## Access Control

| Role | Capabilities |
|---|---|
| Free User | Limited meditations (Basics course), some sleep content, daily meditation |
| Premium Subscriber | Full library: all courses, meditations, sleepcasts, focus music, workouts, offline download |
| Family Plan Member | Full access shared across up to 6 accounts |
| Student (discounted) | Full premium access at reduced price with student verification |
| Enterprise User (Headspace for Work) | Full access provisioned by employer; admin dashboard for HR |
| Kids Profile | Age-appropriate content only; parental controls |
| Buddy | See friend's streak and milestones; send encouragement; no content sharing |
