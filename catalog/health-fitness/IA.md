# Health & Fitness — Information Architecture

## Overview

A health tracking and workout platform (Strava, Fitbit, MyFitnessPal style). The mental model is **track → analyze → improve** — users log activities, monitor health metrics, set goals, and view progress over time. Gamification (streaks, badges, challenges) drives engagement.

## Site Map

```
├── Home / Today
│   ├── Daily Summary (steps, calories, active minutes)
│   ├── Activity Rings / Progress Indicators
│   ├── Today's Workouts
│   ├── Nutrition Summary
│   ├── Sleep Summary
│   ├── Streak Counter
│   └── Quick Log (water, weight, mood)
├── Activity
│   ├── Activity Feed (social — friends' activities)
│   ├── Start Workout
│   │   ├── Activity Type (run, cycle, swim, gym, yoga...)
│   │   ├── GPS Tracking (live)
│   │   ├── Heart Rate Zones
│   │   └── In-Progress Display (timer, distance, pace)
│   ├── Workout History
│   ├── Workout Detail
│   │   ├── Map / Route
│   │   ├── Stats (distance, time, pace, elevation, calories)
│   │   ├── Heart Rate Chart
│   │   ├── Splits / Laps
│   │   ├── Photos
│   │   └── Kudos / Comments
│   └── Training Plans
├── Nutrition
│   ├── Food Diary (meals: breakfast, lunch, dinner, snacks)
│   ├── Log Food (search + barcode scanner)
│   ├── Macros (calories, protein, carbs, fat)
│   ├── Recipes / Meal Plans
│   └── Water Tracking
├── Body
│   ├── Weight Log (chart over time)
│   ├── Body Measurements
│   ├── Body Photos (progress)
│   └── BMI / Body Fat
├── Sleep
│   ├── Sleep Log
│   ├── Sleep Score
│   ├── Sleep Stages (REM, deep, light)
│   └── Trends
├── Goals & Challenges
│   ├── My Goals (weight, steps, workout frequency)
│   ├── Active Challenges
│   ├── Join Challenge
│   ├── Leaderboards
│   └── Badges / Achievements
├── Social
│   ├── Friends
│   ├── Activity Feed
│   ├── Groups / Clubs
│   └── Invite Friends
├── Devices
│   ├── Connected Devices (watch, scale, tracker)
│   ├── Sync Status
│   └── Device Settings
├── Profile
│   ├── Stats Overview
│   ├── Activity Summary (weekly/monthly/yearly)
│   ├── Personal Records (PRs)
│   ├── Badges Gallery
│   └── Settings
├── Settings
│   ├── Units (metric/imperial)
│   ├── Privacy (activity visibility)
│   ├── Notifications
│   ├── Goals
│   ├── Connected Apps
│   └── Account
└── Premium
    ├── Advanced Analytics
    ├── Training Plans
    └── Coaching
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 5 tabs | Today, Activity, Nutrition, Social, Profile |
| **Start Workout** | Floating action button or prominent CTA | Quick access to begin tracking |
| **Today View** | Scrollable dashboard | Ring charts, quick stats, daily summary |
| **Workout Detail** | Tabs or scrollable sections | Summary / Map / Charts / Splits |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workout | type, duration, distance, calories, heart_rate_data, gps_track, splits[] | belongs to User |
| FoodEntry | meal_type, food_name, serving_size, calories, macros{} | belongs to User |
| WeightLog | weight, date, body_fat_pct | belongs to User |
| SleepLog | start, end, duration, score, stages{} | belongs to User |
| Goal | type, target, current, deadline | belongs to User |
| Challenge | name, type, duration, participants[], leaderboard | has many Users |
| Badge | name, icon, criteria, earned_at | belongs to User |
| Device | type, name, last_sync, battery | belongs to User |

## User Flows

### Track Workout
```
[Start Workout] → Select Type → Begin (GPS/timer starts) → Complete → Summary → Save → Share (optional)
```

### Log Food
```
Nutrition → [+ Add Food] → Search / Scan Barcode → Select + Serving → Log → Daily Total Updated
```

### Track Progress
```
Profile → Stats → Select Metric (weight/pace/distance) → View Chart Over Time → Compare Periods
```

## URL / Route Structure

```
/                          → Today Dashboard
/activity                  → Activity Feed
/activity/start            → Start Workout
/activity/:id              → Workout Detail
/activity/history          → Workout History
/nutrition                 → Food Diary
/nutrition/log             → Log Food
/body                      → Body Metrics
/sleep                     → Sleep Log
/goals                     → Goals
/challenges                → Challenges
/challenges/:id            → Challenge Detail
/social                    → Social Feed
/social/friends            → Friends
/profile                   → My Profile
/profile/records           → Personal Records
/profile/badges            → Badges
/devices                   → Connected Devices
/settings                  → Settings
```

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop | Dashboard grid, charts side by side |
| Tablet | 2-column grid |
| Mobile (primary) | Single column, bottom tabs, large touch targets |

### Mobile-First Patterns
- Wrist-based companion (Apple Watch, WearOS)
- GPS tracking in background
- Health app integration (HealthKit, Google Fit)
- Widget support (steps, ring progress)
- Offline-capable (sync when connected)

## Access Control

| Role | Track | View Own | Social | Premium Features |
|------|-------|----------|--------|-----------------|
| Free | Basic tracking | ✅ | ✅ | — |
| Premium | Advanced tracking | ✅ + analytics | ✅ | Training plans, coaching |
| Coach | ✅ | ✅ | ✅ | View assigned athletes |
