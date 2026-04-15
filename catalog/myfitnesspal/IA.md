---
brand: MyFitnessPal
tagline: "The world's largest food database. Track calories, macros, and nutrition to reach your goals."
category: Nutrition
website: https://myfitnesspal.com
---

# MyFitnessPal — Information Architecture

## Overview

MyFitnessPal is the dominant calorie and nutrition tracking app with the world's largest food database (14M+ foods). The mental model is **calories in vs calories out** — users set a daily calorie goal, log every meal by searching or scanning barcodes, and track macros (protein, carbs, fat). The experience revolves around a daily food diary. Unlike Strava's social/athletic focus, MyFitnessPal is goal-oriented (lose weight, gain muscle, maintain) with nutrition as the centerpiece.

## Site Map

```
├── Home / Dashboard (Today)
│   ├── Calorie Summary (Goal – Food + Exercise = Remaining)
│   ├── Macros Bar (protein, carbs, fat — horizontal bar)
│   ├── Food Diary Quick View
│   │   ├── Breakfast
│   │   ├── Lunch
│   │   ├── Dinner
│   │   ├── Snacks
│   │   └── [+ Add Food] per meal
│   ├── Exercise Summary
│   ├── Water Intake
│   ├── Steps (synced from device)
│   ├── Streak Counter
│   └── Nutrition Insights (daily/weekly)
├── Food Diary (Daily Log)
│   ├── Meals (Breakfast, Lunch, Dinner, Snacks — customizable names)
│   ├── Per Meal
│   │   ├── Logged Foods (with serving sizes)
│   │   ├── Meal Totals (calories, macros)
│   │   └── [+ Add Food]
│   ├── Daily Totals
│   │   ├── Calories
│   │   ├── Macros (protein, carbs, fat)
│   │   ├── Micros (fiber, sugar, sodium, cholesterol, vitamins)
│   │   └── Remaining
│   ├── Complete Diary (end-of-day)
│   │   └── "If every day were like today, you'd weigh X in 5 weeks"
│   └── Navigate Days (← Yesterday | Today | Tomorrow →)
├── Add Food (Search)
│   ├── Search (14M+ food database)
│   ├── Barcode Scanner (camera)
│   ├── Recent Foods
│   ├── Frequent Foods
│   ├── My Foods (custom created)
│   ├── My Meals (saved combinations)
│   ├── My Recipes (with ingredient breakdown)
│   └── Quick Add (just enter calories)
├── Food Detail
│   ├── Nutrition Label (mimics FDA label)
│   ├── Serving Size (adjustable — cups, grams, oz, pieces)
│   ├── Number of Servings
│   ├── Calories & Macros
│   ├── Micronutrients (full breakdown)
│   ├── Log to Meal
│   └── Report Inaccuracy
├── Recipes
│   ├── Create Recipe
│   │   ├── Name
│   │   ├── Add Ingredients (search + amount)
│   │   ├── Number of Servings
│   │   └── Auto-Calculate Per-Serving Nutrition
│   ├── Import Recipe (from URL)
│   ├── My Recipes
│   └── Discover Recipes (Premium)
├── Exercise
│   ├── Log Exercise
│   │   ├── Cardiovascular (search database)
│   │   ├── Strength (exercises, sets, reps, weight)
│   │   └── Duration → Calories Burned Estimate
│   ├── Exercise History
│   └── Connected Devices (auto-sync from Garmin, Apple Watch, etc.)
├── Progress
│   ├── Weight Log (chart over time)
│   ├── Body Measurements (waist, hips, chest, etc.)
│   ├── Progress Photos
│   ├── Nutrition Reports (weekly/monthly averages)
│   │   ├── Calories Over Time
│   │   ├── Macro Breakdown
│   │   └── Nutrient Summary
│   └── Goal Progress
├── Goals
│   ├── Starting Weight → Current → Goal Weight
│   ├── Weekly Goal (lose 0.5kg, maintain, gain)
│   ├── Calorie Goal (TDEE-based)
│   ├── Macro Goals (default or custom ratio)
│   ├── Nutrient Goals (custom micro targets)
│   └── Exercise Goals (weekly frequency/calories)
├── Community (reduced)
│   ├── Forums
│   ├── Blog / Articles
│   └── Success Stories
├── Premium
│   ├── Calorie & Macro Goals by Meal
│   ├── Food Analysis (timestamps, patterns)
│   ├── Custom Macro Targets
│   ├── No Ads
│   ├── Nutrient Dashboard
│   ├── Food Insights
│   └── Priority Support
├── Devices & Apps
│   ├── Connected Fitness Trackers (Garmin, Fitbit, Apple Watch)
│   ├── Connected Apps (Strava, MapMyRun, Samsung Health)
│   └── Sync Settings
├── Settings
│   ├── Profile (age, sex, height, activity level)
│   ├── Goals (calorie, macro, nutrient)
│   ├── Diary Settings (meal names, default foods)
│   ├── Notifications
│   ├── Units (metric/imperial)
│   ├── Privacy
│   ├── Account
│   └── Help
└── Help
    ├── FAQ
    ├── Contact Support
    └── Exercise Database Correction
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 5 tabs | Dashboard, Diary, [+ Add], Progress, More |
| **Add Button** | Center tab, prominent blue (+) | Quick access to food logging (the #1 action) |
| **Diary Meals** | Expandable sections | Breakfast/Lunch/Dinner/Snacks with [+] per meal |
| **Date Nav** | Left/right arrows at top | Navigate between days |
| **Barcode Scanner** | Camera icon in search | Scan food package → instant nutrition lookup |
| **Top Bar (web)** | Fixed | Food, Exercise, Reports, Apps, Community |

### Signature UX: Barcode Scanner
```
[+ Add Food] → [Barcode Icon] → Point Camera → Auto-Detect → "Chobani Greek Yogurt" → Confirm Serving → Log to Lunch
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| FoodEntry | food, meal_type, serving_size, num_servings, calories, protein, carbs, fat, date | belongs to User's Diary |
| Food | name, brand, serving_sizes[], calories, macros{}, micros{}, barcode, verified, user_submitted | database entity |
| Recipe | name, ingredients[], servings, per_serving_nutrition{} | belongs to User |
| Meal (saved) | name, foods[] | reusable food combination |
| ExerciseEntry | exercise, duration, calories_burned, date, source (manual/synced) | belongs to User |
| WeightLog | weight, date, body_fat_pct | belongs to User |
| Goal | type (weight/calorie/macro), target, current, daily_calorie_target, macro_split{} | belongs to User |
| DiaryDay | date, meals{}, exercise[], water, calorie_total, macro_totals{}, complete | aggregated daily |
| Streak | current_days, longest, type (logging/exercise) | belongs to User |

### Diary Equation
```
Daily Calorie Budget = TDEE − Deficit (or + Surplus)
Remaining = Budget − Food Calories + Exercise Calories
```

## User Flows

### Log a Meal
```
Diary → Lunch → [+ Add Food] → Search "chicken breast" → Select → Adjust Serving (6 oz) → Log → Diary Updated → Remaining Calories Updated
```

### Scan Barcode
```
[+] → Barcode Scanner → Scan → "Kind Bar Almond" Found → Confirm 1 Serving → Log to Snacks → Done
```

### Create and Log Recipe
```
More → Recipes → [Create] → "Homemade Chili" → Add Ingredients (search each) → Set Servings (6) → Save → Log 1 Serving to Dinner
```

### Track Weight Progress
```
Progress → Weight → [+ Add] → Enter Today's Weight → Save → Chart Updates → "You've lost 3 lbs this month"
```

## URL / Route Structure

```
/                              → Dashboard
/food/diary                    → Food Diary (today)
/food/diary?date=YYYY-MM-DD   → Specific Day
/food/search                   → Search Foods
/food/:id                      → Food Detail (nutrition label)
/food/add-to-diary             → Add Food Flow
/recipe                        → My Recipes
/recipe/new                    → Create Recipe
/recipe/:id                    → Recipe Detail
/exercise                      → Exercise Log
/exercise/search               → Search Exercises
/reports                       → Nutrition Reports
/reports/calories              → Calorie Report
/reports/macros                → Macro Report
/progress                      → Weight & Measurements
/progress/weight               → Weight Chart
/progress/photos               → Progress Photos
/goals                         → Goals Setup
/goals/calories                → Calorie Goal
/goals/macros                  → Macro Goals
/account                       → Account
/settings                      → Settings
/premium                       → Premium Features
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Food Search | Food name, brand, barcode | Verified, My Foods, Recent, Frequent | Relevance, popularity |
| Exercise Search | Exercise name | Type (cardio/strength), Recent | Relevance |
| Recipes | Recipe name | My Recipes, Imported | Name, date created |
| Diary | Food entries | Date, Meal | Date, meal order |

## Responsive Behavior

| Breakpoint | Diary | Food Search | Reports |
|------------|-------|-------------|---------|
| Mobile (primary) | Expandable meal sections, single column | Full-screen search + scanner | Charts (swipe between) |
| Tablet | Two-column (diary + daily summary) | Search + nutrition preview | Charts side by side |
| Desktop (web) | Diary table + side nutrition panel | Search + full nutrition label | Dashboard with multiple charts |

### Mobile-First Design
- Barcode scanner as primary food entry method
- Quick Add for when you just know the calories
- Persistent calorie remaining counter
- Streak motivation ("12-day logging streak!")
- Connected device auto-sync (exercise calories)
- Widget: remaining calories, macro bars
- Offline food search (cached recent/frequent)

## Access Control

| Feature | Free | Premium |
|---------|------|---------|
| Food Logging | ✅ | ✅ |
| Barcode Scanner | ✅ | ✅ |
| Calorie Tracking | ✅ | ✅ |
| Macros (daily total) | ✅ | ✅ |
| Macros (per meal) | — | ✅ |
| Nutrient Dashboard | Basic | Full (17+ nutrients) |
| Food Analysis | — | ✅ (timestamps, patterns) |
| Custom Macro Targets | — | ✅ |
| Ads | Yes | No |
| Recipe Import | — | ✅ |
| Priority Support | — | ✅ |
| Export Data | — | ✅ |
