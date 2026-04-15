---
brand: Noom
tagline: Stop dieting. Get life-long results.
category: Health & Wellness
website: https://noom.com
---

# Information Architecture — Noom

## Overview

Noom is a psychology-based weight management and health platform that combines food logging, daily educational articles, coaching, and behavioral change techniques to build sustainable habits. The IA is structured around a daily curriculum — articles, quizzes, food/weight logging — delivered in a conversational, chat-like interface. Unlike calorie-counting apps, Noom emphasizes the psychological "why" behind eating behaviors through its traffic-light food classification system and cognitive behavioral therapy (CBT) principles.

## Site Map

```
Noom
├── Home (Today's Dashboard)
│   ├── Daily Lessons (articles + quizzes)
│   ├── Weight Log
│   ├── Calorie Budget (remaining)
│   ├── Step Count
│   ├── Water Intake
│   └── Streak / Progress
├── Food Logging
│   ├── Meals (Breakfast, Lunch, Dinner, Snacks)
│   ├── Food Database (search)
│   ├── Barcode Scanner
│   ├── Recipe Logger
│   ├── Traffic Light System
│   │   ├── Green (low calorie-density)
│   │   ├── Yellow (moderate)
│   │   └── Orange/Red (high calorie-density)
│   └── Calorie Budget breakdown
├── Lessons (Curriculum)
│   ├── Daily Articles (conversational format)
│   ├── Quizzes
│   ├── Thought Exercises
│   ├── Goal Setting
│   ├── Progress Milestones
│   └── Themed Modules
│       ├── Psychology of Eating
│       ├── Portion Control
│       ├── Emotional Eating
│       ├── Stress Management
│       └── Exercise Habits
├── Weight Tracking
│   ├── Daily Weigh-In
│   ├── Weight Graph (trend line)
│   ├── Goal Weight
│   └── Projected Timeline
├── Coach
│   ├── 1:1 Chat with Coach
│   ├── Goal Review
│   └── Accountability Check-ins
├── Group (Support Group)
│   ├── Group Chat
│   ├── Group Coach
│   ├── Shared Challenges
│   └── Member Introductions
├── Exercise Tracking
│   ├── Log Exercise
│   ├── Step Counter (integrated)
│   ├── Exercise Database
│   └── Calorie Adjustment
├── Recipes (Noom-friendly)
│   ├── By Meal Type
│   ├── By Calorie Range
│   ├── By Dietary Restriction
│   └── Favorited Recipes
├── Profile
│   ├── Progress Photos
│   ├── Stats Summary
│   ├── Goals
│   └── Settings
├── Settings
│   ├── Account
│   ├── Subscription
│   ├── Calorie Budget Preferences
│   ├── Integrations (Apple Health, Fitbit, etc.)
│   ├── Notifications
│   └── Privacy
└── Website
    ├── Quiz / Onboarding
    ├── Pricing
    ├── Success Stories
    ├── Blog
    └── Science / Research
```

## Navigation Model

- **Type**: Bottom tab bar (mobile-first)
- **Bottom Tabs**: Home, Logging, Lessons, Coach/Group, Profile
- **Home Dashboard**: Scrollable daily cards — weight, food, water, steps, lesson
- **Lesson Flow**: Chat-like conversational interface — tap to advance through article → quiz → summary
- **Food Logging**: Tab within logging → Meal selector → Search/scan → Add food → See traffic light color
- **Coach Chat**: Persistent chat thread; responds within business hours (async)

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Lesson (Article) | title, body (conversational), quiz questions, topic module, day number, reading time | → Curriculum Module |
| Food Entry | food item, serving size, calories, traffic light color (green/yellow/orange), meal | → Daily Log |
| Weight Entry | weight, date, trend line position | → Weight History |
| Exercise Entry | activity type, duration, calories burned | → Daily Log |
| Recipe | title, ingredients, instructions, calories per serving, traffic light breakdown, dietary tags | → Recipes Collection |
| Coach Message | text, sender (user/coach), timestamp, attachments | → Coach Thread |
| Group Post | text, author, timestamp, reactions | → Support Group |
| Quiz | question, options, correct answer, explanation | → Lesson |
| Goal | type (weight, behavior), target, deadline, progress | → Profile |
| Progress Photo | image, date, weight at time | → Profile |

## User Flows

### Daily Routine
```
Morning: Open app → Log weight → View calorie budget for the day → Log breakfast → Each food shows traffic light color → Budget adjusts → Read daily lesson (5-10 min) → Complete quiz → Reflect → Throughout day: Log meals and water → Step count auto-tracked → Evening: Check remaining budget → Log dinner → Review daily summary
```

### Onboarding Quiz
```
Visit noom.com → Start quiz → Answer questions about goals, habits, lifestyle → Quiz covers: current weight, goal weight, eating habits, exercise frequency, motivation → Personalized plan generated: calorie budget, daily lessons pace, coaching level → Select subscription plan → Create account → Begin Day 1 curriculum
```

### Coach Interaction
```
Navigate to Coach tab → Type message about a struggle or question → Coach responds (async, typically same day) with personalized guidance → Coach reviews food logs, weight trends, lesson progress → Weekly check-in: Coach asks about goals, adjusts plan if needed
```

## URL / Route Structure

```
noom.com/                                   # Marketing homepage
noom.com/quiz                               # Onboarding quiz
noom.com/plans                              # Pricing / subscription plans
noom.com/blog                               # Blog
noom.com/blog/{slug}                        # Blog article
noom.com/recipes                            # Noom recipes
noom.com/success-stories                    # Testimonials
noom.com/science                            # Research / science page
app.noom.com/                               # Web app (logged in)
noom.com/programs                               # Programs overview
noom.com/programs/weight-loss                   # Weight loss program
noom.com/programs/diabetes                      # Diabetes prevention
noom.com/programs/stress                        # Stress management
noom.com/about                                  # About page
noom.com/careers                                # Careers
noom.com/privacy                                # Privacy policy
noom.com/terms                                  # Terms of service
app.noom.com/diary                              # Food diary
app.noom.com/lessons                            # Lessons curriculum
app.noom.com/coach                              # Coach chat
app.noom.com/progress                           # Progress tracking
```

## Search & Filter

- **Food Search**: Extensive food database with keyword search; barcode scanner for packaged foods
- **Food Filter**: By traffic light color (green/yellow/orange), by meal type
- **Recipe Search**: By keyword, meal type, calorie range, dietary restriction (vegetarian, gluten-free)
- **Lesson Browse**: Sequential curriculum (not browseable out of order by design — learning is paced)
- **Exercise Search**: Activity type database (running, cycling, yoga, etc.) with calorie estimates
- **No Social Discovery**: Noom is a personal health tool; no browsing other users' content

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App (primary) | Bottom tab bar; chat-like lesson interface; food logging with barcode camera; full-screen weight graph |
| Tablet | Larger lesson cards; expanded food log view; side-by-side dashboard |
| Web App | Dashboard layout; food logging via search (no barcode); lesson reading on wider screen |
| Apple Watch | Step counting, exercise logging; no food logging or lessons |
| Integrations | Syncs with Apple Health, Google Fit, Fitbit, Garmin for activity/weight data |

## Access Control

| Role | Capabilities |
|---|---|
| Trial User | Full access for trial period (typically 7-14 days); all features available |
| Paid Subscriber | Full access: lessons, food logging, coaching, group support, recipes |
| Free (expired) | Limited: weight logging, basic food logging; no lessons or coaching |
| Coach | View assigned users' logs, weight trends, lesson progress; send messages; set goals |
| Group Coach | Facilitate group discussions, post prompts, moderate group chat |
| Group Member | Participate in group chat, share wins, support peers |
| Family (Noom for families) | Shared household plan; individual profiles and progress |

## Traffic Light Food System

| Color | Calorie Density | Examples | Budget Allocation |
|-------|----------------|----------|------------------|
| Green | Low (< 1 cal/g) | Fruits, vegetables, non-fat dairy, egg whites, broth-based soups | ~30% of daily calories |
| Yellow | Moderate (1-2.4 cal/g) | Lean meats, grains, beans, avocado, hummus, low-fat cheese | ~45% of daily calories |
| Orange/Red | High (> 2.4 cal/g) | Nuts, butter, oils, full-fat cheese, bacon, candy, pizza | ~25% of daily calories |

## Behavioral Psychology Techniques

- **Cognitive Behavioral Therapy (CBT):** Identify and change negative thought patterns around food
- **Motivational Interviewing:** Coach uses reflective listening to build intrinsic motivation
- **Self-Monitoring:** Daily logging creates awareness (food, weight, water, steps)
- **Goal Gradient:** Progress bars and streaks leverage the endowed progress effect
- **Implementation Intentions:** "If-then" planning for anticipated challenges
- **Social Accountability:** Group support and coach check-ins maintain commitment
- **Gamification:** Streaks, milestones, and curriculum progress badges

## Curriculum Structure

- **Phase 1 (Weeks 1-4):** Foundation — calorie budgeting, traffic light system, portion control
- **Phase 2 (Weeks 5-8):** Psychology — emotional eating, stress management, cognitive distortions
- **Phase 3 (Weeks 9-12):** Sustainability — habit stacking, relapse prevention, social situations
- **Phase 4 (Weeks 13-16):** Maintenance — long-term strategies, identity shift, independence

## Coach Matching

- **Specialization:** Coaches matched by user goals (weight loss, diabetes, stress)
- **Communication style:** Some coaches are motivational, others are data-driven
- **Availability:** Async messaging (not real-time); typical response within same day
- **Reassignment:** Users can request a different coach at any time
- **Group coach:** Separate from 1:1 coach; facilitates group discussions

## Pricing

| Plan | Duration | Price | Features |
|------|----------|-------|----------|
| Monthly | 1 month | ~$70/mo | Full access, 1:1 coach, group support |
| 4-month | 4 months | ~$50/mo | Same features, discounted rate |
| Annual | 12 months | ~$30/mo | Same features, best value |
| Add-ons | — | Varies | Meal plans, workout programs, DNA testing |
