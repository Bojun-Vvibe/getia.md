---
brand: Strava
tagline: "The social network for athletes. Track runs, rides, and more with GPS."
category: Fitness
website: https://strava.com
---

# Strava — Information Architecture

## Overview

Strava is the leading social fitness platform built around GPS-tracked activities, primarily running and cycling. The mental model is **record → share → compete** — athletes record activities with GPS, share them on a social feed, and compete on leaderboards (Segments). Unlike MyFitnessPal's nutrition focus or Fitbit's health metrics, Strava's core loop is performance and community. Segments (user-defined stretches of road or trail with leaderboards) are Strava's defining feature, turning every ride and run into a competition.

## Site Map

```
├── Home / Feed
│   ├── Activity Feed (following)
│   │   ├── Activity Cards (map, stats, photos, kudos, comments)
│   │   ├── Kudos (like) / Comment
│   │   ├── Club Posts
│   │   └── Challenge Updates
│   ├── Suggested Athletes
│   └── Sponsored / Partner Content
├── Record Activity
│   ├── Start (GPS begins)
│   │   ├── Activity Type (Run, Ride, Swim, Hike, Walk, 30+ types)
│   │   ├── Live Map (GPS trail)
│   │   ├── Metrics Display (time, distance, pace/speed, elevation, HR)
│   │   ├── Audio Cues (pace alerts, split times)
│   │   ├── Live Segments (approaching a Segment? Real-time KOM/PR race)
│   │   └── Beacon (share live location with contacts)
│   ├── Pause / Resume / Stop
│   └── Save Activity
│       ├── Title (auto-generated or custom)
│       ├── Description
│       ├── Photos
│       ├── Type / Gear Selection
│       ├── Perceived Exertion (1-10 RPE)
│       ├── Private / Followers / Everyone
│       └── Save → Activity Page
├── Activity Detail
│   ├── Map (route rendered on map, color-coded by effort)
│   ├── Stats (distance, time, elevation, pace, HR, power, cadence)
│   ├── Splits (per-mile or per-km)
│   ├── Segments Matched
│   │   ├── Segment Name
│   │   ├── Time & Ranking (KOM/QOM, Top 10, PR)
│   │   ├── Leaderboard Position
│   │   └── Effort Comparison (vs PR, vs others)
│   ├── Heart Rate Zones (chart)
│   ├── Power Data (cycling, if available)
│   ├── Elevation Profile
│   ├── Laps / Intervals
│   ├── Gear Used (shoes, bike)
│   ├── Weather Conditions
│   ├── Kudos (count + who)
│   ├── Comments
│   ├── Matched Runs/Rides (same route comparison)
│   ├── Relative Effort Score
│   ├── Training Load (Subscription)
│   └── Share / Export (GPX, TCX)
├── Segments
│   ├── Explore Segments (map-based)
│   ├── Starred Segments (favorites)
│   ├── Segment Detail
│   │   ├── Map
│   │   ├── Leaderboard (Overall, This Year, Following, Age Group, Weight Class)
│   │   ├── KOM/QOM Holder
│   │   ├── My Efforts (history)
│   │   ├── Segment Stats (distance, avg grade, elevation)
│   │   └── Hazard Reports
│   ├── Create Segment (draw on map)
│   └── Local Legend (most efforts on a segment)
├── Explore / Routes
│   ├── Route Builder (draw routes on map)
│   ├── Suggested Routes (AI-powered)
│   ├── Popular Routes Near You
│   ├── Heatmap (global activity density)
│   ├── Route Detail (elevation, surface, stats)
│   └── Save / Download Route (GPX)
├── Challenges
│   ├── Active Challenges (monthly distance, elevation)
│   ├── Partner Challenges (brand-sponsored)
│   ├── My Progress
│   ├── Trophies / Badges
│   └── Leaderboard
├── Clubs
│   ├── My Clubs
│   ├── Club Detail
│   │   ├── Members
│   │   ├── Activity Feed (club members)
│   │   ├── Leaderboard (club)
│   │   ├── Discussion Board
│   │   └── Group Events
│   ├── Find Clubs
│   └── Create Club
├── Profile
│   ├── Activity History (list + stats)
│   ├── Stats Summary (weekly/monthly/yearly/all-time)
│   ├── Trophy Case (KOMs, CRs, badges)
│   ├── Gear (bikes, shoes, with mileage tracking)
│   ├── Training Log (calendar view)
│   ├── Fitness & Freshness (Subscription: form chart)
│   ├── Personal Records (PRs per distance)
│   ├── Following / Followers
│   └── Edit Profile (photo, bio, location, FTP, weight)
├── Training (Subscription)
│   ├── Training Plans
│   ├── Workout Builder
│   ├── Goals (weekly, race prep)
│   ├── Fitness & Freshness Chart
│   ├── Relative Effort Trends
│   ├── Power Analysis (cycling)
│   └── Heart Rate Analysis
├── Settings
│   ├── Privacy (activity defaults, who can see)
│   ├── Data Permissions
│   ├── Connected Devices (Garmin, Apple Watch, Wahoo)
│   ├── Connected Apps (TrainingPeaks, Zwift)
│   ├── Units (metric/imperial)
│   ├── Heart Rate / Power Zones
│   ├── Notifications
│   └── Account
├── Subscription
│   ├── Free vs Summit (now "Subscription")
│   ├── Feature Comparison
│   └── Manage Subscription
└── Help
    ├── Support Center
    ├── Community Hub
    └── Status
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** (mobile) | 5 tabs | Feed, Explore (maps), Record (center, prominent), Challenges, Profile |
| **Record Button** | Center tab, floating (+ icon) | Always accessible — start recording immediately |
| **Activity Map** | Full-bleed map on activity page | Route rendered on Mapbox, color-coded by effort |
| **Segment Pop-Up** | Inline on activity page | Matched segments with leaderboard position |
| **Top Bar** (web) | Fixed | Dashboard, Training, Explore, Challenges, Bell, Profile |

### Signature UX: Live Segments
During recording, when approaching a known Segment:
```
[ ⚡ Approaching: "Hawk Hill Climb" ]
[ Your PR: 4:32 | KOM: 3:45 ]
[ LIVE elapsed: 2:15 → color bar shows vs PR ]
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Activity | type, title, distance, time, elevation_gain, avg_pace/speed, max_pace/speed, avg_hr, max_hr, calories, gps_polyline, start_time, gear_id, description, photos[], perceived_exertion, private | belongs to Athlete, has Segments, Laps |
| Segment | name, distance, avg_grade, elevation_gain, polyline, created_by, hazardous, effort_count | has many Efforts, one Leaderboard |
| SegmentEffort | activity, segment, elapsed_time, rank, pr_rank, kom_rank | belongs to Activity and Segment |
| Athlete | name, avatar, location, bio, ftp, weight, followers[], following[], clubs[] | has many Activities, Gear |
| Gear | name, type (bike/shoes), distance_total, retired | belongs to Athlete |
| Route | name, distance, elevation, polyline, surface_type, estimated_time | belongs to Athlete |
| Club | name, type (cycling/running/triathlon), members[], description, location | has many Athletes |
| Challenge | name, type (distance/elevation), period, target, sponsor, badge | has many Participants |
| Kudos | athlete, activity | social interaction |
| Comment | athlete, activity, text | social interaction |

### Segment Leaderboard Categories
`overall | this_year | following | club | age_group | weight_class`
KOM = King of the Mountain (overall male), QOM = Queen of the Mountain (overall female)

## User Flows

### Record a Run
```
[Record] → Select "Run" → Start → GPS Tracks → Live Metrics + Live Segments → Finish → Auto-Detect Segments → Title/Photo/Gear → Save → Feed Post → Kudos Roll In
```

### Chase a KOM
```
Segments → Starred → Select Segment → View Leaderboard → See KOM Time → Plan Route → Record Activity → Live Segment Race → Check Results → New PR? Top 10?
```

### Build a Route
```
Explore → Routes → [Create Route] → Draw on Map → See Elevation Profile → Save → Send to Device → Follow on Next Activity
```

## URL / Route Structure

```
/                              → Feed
/dashboard                     → Dashboard (web)
/activities/:id                → Activity Detail
/segments/:id                  → Segment Detail
/segments/:id/leaderboard      → Segment Leaderboard
/segments/explore              → Explore Segments (map)
/routes                        → My Routes
/routes/new                    → Route Builder
/routes/:id                    → Route Detail
/athlete/training              → Training Log
/athlete/fitness               → Fitness & Freshness
/challenges                    → Challenges
/challenges/:id                → Challenge Detail
/clubs                         → My Clubs
/clubs/:id                     → Club Detail
/athletes/:id                  → Athlete Profile
/athletes/:id/stats            → Athlete Stats
/settings                      → Settings
/summit                        → Subscription
/heatmap                       → Global Heatmap
/upload                        → Manual Upload (GPX/FIT)
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Athletes | Name | Location, Following, Mutual | Relevance |
| Segments | Name, location | Activity Type, Distance, Grade, Starred | Popularity, Distance, Grade |
| Activities | Title | Type, Date Range, Distance, Gear | Date, Distance, Time |
| Clubs | Name | Type (cycling/running), Location | Members, name |
| Leaderboard | Athlete name | Time Period, Age, Weight, Gender, Following | Time (fastest) |

## Responsive Behavior

| Breakpoint | Feed | Activity | Segments |
|------------|------|----------|----------|
| Mobile (primary) | Vertical card feed | Map + stats + segments scroll | Map + leaderboard |
| Tablet | Wider cards | Larger map + side stats | Two-column |
| Desktop (web) | Feed + sidebar (summary) | Full map + tabs (segments, power, HR) | Full leaderboard table |

### Mobile-First Design
- GPS recording runs in background
- Live Segments with real-time comparison
- Beacon: share live location with emergency contacts
- Connected device sync (Garmin, Wahoo, Apple Watch auto-upload)
- Widget: weekly distance summary
- Haptic feedback at mile/km splits
- Offline maps for routes

## Access Control

| Feature | Free | Subscriber |
|---------|------|-----------|
| Record & Share | ✅ | ✅ |
| Segments (view) | ✅ | ✅ |
| Segment Leaderboards | Top 10 only | Full leaderboard + filters |
| Route Builder | Basic | Advanced (surfaces, popularity) |
| Fitness & Freshness | — | ✅ |
| Training Plans | — | ✅ |
| Live Segments | — | ✅ |
| Matched Runs | — | ✅ |
| Power Analysis | — | ✅ |
| Beacon | — | ✅ |
| Local Legend | — | ✅ |
