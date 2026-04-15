---
brand: Oura
tagline: Empowering every body
category: Health & Wellness
website: https://ouraring.com
---

# Information Architecture — Oura

## Overview

Oura is a health tracking platform centered on the Oura Ring — a wearable that continuously monitors sleep, activity, heart rate, temperature, and blood oxygen. The IA is organized around three daily scores — Sleep, Readiness, and Activity — that distill complex biometric data into actionable guidance. The app surfaces trends over time and provides personalized insights, bridging the gap between raw sensor data and practical health decisions.

## Site Map

```
Oura
├── Home (Today)
│   ├── Sleep Score
│   ├── Readiness Score
│   ├── Activity Score
│   ├── Daily Insights
│   ├── Body Clock (circadian rhythm)
│   └── Tags (log lifestyle factors)
├── Sleep
│   ├── Sleep Score breakdown
│   │   ├── Total Sleep
│   │   ├── Efficiency
│   │   ├── Restfulness
│   │   ├── REM Sleep
│   │   ├── Deep Sleep
│   │   ├── Latency
│   │   └── Timing
│   ├── Sleep Stages Graph (hypnogram)
│   ├── Heart Rate During Sleep
│   ├── HRV (Heart Rate Variability)
│   ├── Respiratory Rate
│   ├── Blood Oxygen (SpO2)
│   ├── Sleep Trends (weekly/monthly)
│   └── Bedtime Guidance
├── Readiness
│   ├── Readiness Score breakdown
│   │   ├── Resting Heart Rate
│   │   ├── HRV Balance
│   │   ├── Body Temperature
│   │   ├── Recovery Index
│   │   ├── Sleep Balance
│   │   ├── Previous Day Activity
│   │   └── Activity Balance
│   └── Readiness Trends
├── Activity
│   ├── Activity Score breakdown
│   │   ├── Steps
│   │   ├── Active Calories
│   │   ├── Total Calories
│   │   ├── Walking Equivalency
│   │   ├── Training Frequency
│   │   ├── Training Volume
│   │   └── Inactivity Alerts
│   ├── Activity Goal Progress
│   ├── Workouts (auto-detected + manual)
│   └── Activity Trends
├── Trends
│   ├── Score Trends (30/90/180 days)
│   ├── Biometric Trends
│   ├── Correlations (Tags vs. Scores)
│   └── Resilience
├── Explore
│   ├── Guided Sessions (audio)
│   │   ├── Meditation
│   │   ├── Breathwork
│   │   ├── Sleep Sounds
│   │   └── Education
│   ├── Articles & Tips
│   └── Content Partners
├── Tags
│   ├── Log Tags (caffeine, alcohol, stress, etc.)
│   ├── Custom Tags
│   └── Tag Correlations with Scores
├── Cycle Tracking (Period Prediction)
│   ├── Cycle Calendar
│   ├── Temperature Deviation
│   └── Period Predictions
├── Profile
│   ├── Ring Settings
│   ├── Goals
│   ├── Subscription
│   └── Health Integrations
├── Settings
│   ├── Account
│   ├── Ring (firmware, battery)
│   ├── Units & Preferences
│   ├── Notifications
│   ├── Health App Sync (Apple Health, Google Health Connect)
│   └── Data Export
└── Website (ouraring.com)
    ├── Shop
    │   ├── Oura Ring (Gen 3 / Gen 4)
    │   ├── Sizing Kit
    │   └── Accessories
    ├── Membership
    ├── Science / Research
    ├── Blog (The Pulse)
    └── Business (Oura for Business)
```

## Navigation Model

- **Type**: Bottom tab bar (mobile)
- **Bottom Tabs**: Home, Sleep, Readiness, Activity (or combined "Scores"), Explore
- **Home**: Three score rings (Sleep, Readiness, Activity) → tap any for detail
- **Drill-Down**: Score → Breakdown → Individual metric → Trend chart
- **Swipe Between Days**: Horizontal swipe on any screen to view past days
- **Insights Panel**: Cards on Home with contextual tips based on data
- **Ring Icon**: Battery status and ring connection indicator in top bar

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Sleep Score | score (0-100), breakdown components, sleep stages, biometrics, date | → Night's Sleep Data |
| Readiness Score | score (0-100), breakdown components, recovery metrics, date | → Sleep Score, → Activity |
| Activity Score | score (0-100), steps, calories, training, inactivity, date | → Workouts |
| Biometric Reading | type (HR, HRV, SpO2, temperature), value, timestamp | → Score component |
| Sleep Stages | wake, light, deep, REM — duration per stage, hypnogram | → Sleep Score |
| Workout | type, duration, calories, average HR, source (auto-detected/manual) | → Activity Score |
| Tag | name (predefined or custom), timestamp | → Correlation analysis |
| Insight | title, body, type (tip/alert/trend), date | → Scores, → Trends |
| Guided Session | title, type (meditation/breathwork), instructor, duration, audio | → Explore |
| Cycle Data | cycle day, temperature deviation, period dates, prediction | → Profile |
| Trend | metric, timeframe (30/90/180 days), data points, direction | → Scores |

## User Flows

### Morning Check-In
```
Wake up → Open app → Ring syncs overnight data automatically → Home shows three scores: Sleep (82), Readiness (71), Activity (yesterday's 95) → Tap Sleep → View hypnogram, time in each stage, HRV, resting HR → Read insight: "Your deep sleep was 15% below your baseline. Consider avoiding caffeine after 2 PM." → Add Tag: "Late coffee" to track correlation over time
```

### Understanding Readiness
```
Tap Readiness score → See component breakdown → Temperature +0.3°C above baseline → Body may be fighting something → HRV below personal average → Recovery is low → Insight suggests: "Take it easy today. Opt for light activity." → Check trend → See readiness dip pattern correlated with "Poor sleep" tag
```

### Tracking Cycle
```
Enable Cycle Tracking in settings → Log period start → Oura tracks basal body temperature deviations nightly → Algorithm predicts cycle phases and next period → View Cycle Calendar → See temperature curve overlaid with cycle days
```

## URL / Route Structure

```
ouraring.com/                               # Marketing homepage
ouraring.com/product                        # Ring product page
ouraring.com/product/rings/{model}          # Specific ring model
ouraring.com/sizing                         # Sizing kit order
ouraring.com/membership                     # Membership plans
ouraring.com/blog                           # The Pulse blog
ouraring.com/blog/{slug}                    # Blog article
ouraring.com/research                       # Scientific research
ouraring.com/business                       # Oura for Business
cloud.ouraring.com/                         # Web dashboard (limited)
cloud.ouraring.com/dashboard                # Data overview
api.ouraring.com/                           # Developer API
ouraring.com/product/accessories             # Ring accessories
ouraring.com/oura-for-business               # Enterprise offering
cloud.ouraring.com/trends                    # Trends dashboard
cloud.ouraring.com/sleep                     # Sleep details
cloud.ouraring.com/activity                  # Activity details
cloud.ouraring.com/readiness                 # Readiness details
api.ouraring.com/v2/usercollection/daily_sleep  # Sleep API endpoint
api.ouraring.com/v2/usercollection/daily_activity # Activity API endpoint
```

## Search & Filter

- **Tag Search**: Browse and create custom tags for lifestyle factors
- **Trend Filters**: View trends by 7, 30, 90, or 180 days
- **Workout Filter**: By type (running, cycling, weight training, etc.)
- **Guided Content Browse**: Filter by type (meditation, breathwork, sleep), duration
- **Correlation Discovery**: Automatic analysis of how tags correlate with scores (e.g., "alcohol" → lower sleep score)
- **No Social Search**: Oura is a personal health tool with no social features
- **Data Export**: Full data export to CSV for external analysis

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App (primary) | Bottom tab bar; score rings on home; full-screen charts; swipe between days |
| Tablet | Expanded charts with more data points visible; larger hypnogram |
| Web Dashboard (cloud.ouraring.com) | Limited data view; scores and trends; no guided content |
| Oura Ring (hardware) | No screen; LED pulse for alignment/charging; all data viewed in app |
| Apple Watch / Widget | Score summary widget; quick glance at today's scores |

## Access Control

| Role | Capabilities |
|---|---|
| Ring Owner (no membership) | Basic scores (Sleep, Readiness, Activity); no detailed insights, trends, or guided content |
| Member (subscription) | Full access: detailed breakdowns, trends, insights, guided sessions, cycle tracking, tags, data export |
| Lifetime Member (Gen 3 purchase before cutoff) | Full membership included with ring purchase; no subscription required |
| API Developer | Access personal data via OAuth API; rate-limited reads of sleep, activity, readiness |
| Oura for Business User | Ring provided by employer; aggregated (anonymized) insights shared with organization |
| Guest (no ring) | Browse website, blog, research; cannot access app features |

## Sensor Technology

| Sensor | Measurement | Sampling Rate |
|--------|------------|---------------|
| Infrared PPG | Heart rate, HRV, SpO2 | Every 5 seconds (sleep) |
| NTC Temperature | Skin temperature deviation | Continuous overnight |
| 3D Accelerometer | Movement, steps, activity type | Continuous |
| Gyroscope | Orientation, gesture detection | Continuous |

## Score Calculation

- **Sleep Score (0-100):** Weighted average of total sleep, efficiency, restfulness, REM sleep, deep sleep, latency, timing
- **Readiness Score (0-100):** Weighted average of resting HR, HRV balance, body temperature, recovery index, sleep balance, activity balance
- **Activity Score (0-100):** Weighted average of steps, active calories, training frequency, training volume, inactivity time

## Data Export & API

- **CSV export:** Download all historical data from the app
- **REST API:** OAuth2 access to sleep, activity, readiness, heart rate data
- **Webhook support:** Real-time notifications when new data is available
- **Apple Health / Google Health Connect:** Bidirectional sync of sleep, activity, heart rate
- **Third-party integrations:** Strava, Natural Cycles, Zero (fasting), IFTTT
