---
brand: Google Maps
tagline: "Explore the world. Navigate anywhere. Find any place, business, or transit route."
category: Maps / Local
website: https://maps.google.com
---

# Google Maps — Information Architecture

## Overview

Google Maps is the world's most-used mapping and navigation application, serving 1B+ monthly users. The mental model is **the digital map of the real world** — a zoomable, searchable map where every location, road, business, and transit route is indexed. The IA serves three distinct modes: **Explore** (discover places and businesses), **Navigate** (turn-by-turn driving/walking/transit directions), and **Contribute** (reviews, photos, local guide contributions). Google Maps also functions as a local business directory, competing with Yelp and Yellow Pages.

## Site Map

```
├── Map View (Primary)
│   ├── Full-Screen Map (satellite, terrain, default)
│   ├── Search Bar ("Search Google Maps")
│   ├── Current Location (GPS blue dot)
│   ├── Zoom Controls
│   ├── Layers (traffic, transit, cycling, satellite, terrain, COVID, wildfires)
│   ├── Street View (drag Pegman onto map)
│   └── 3D Buildings (in major cities)
├── Search
│   ├── Search Bar (addresses, businesses, categories, coordinates)
│   ├── Autocomplete Suggestions
│   │   ├── Places
│   │   ├── Addresses
│   │   ├── Businesses
│   │   ├── Categories ("coffee near me")
│   │   └── Transit Stations
│   ├── Search Results (sidebar or bottom sheet)
│   │   ├── Place Cards (name, rating, type, distance, hours, photo)
│   │   ├── Map Pins (with labels)
│   │   └── "More places" (scroll)
│   ├── Category Quick Filters (Restaurants, Gas, Coffee, Hotels, Groceries, Pharmacies)
│   └── Recent Searches
├── Place Detail
│   ├── Place Header (name, type, rating, review count)
│   ├── Actions Row (Directions, Save, Share, Call, Website)
│   ├── Key Info
│   │   ├── Address
│   │   ├── Hours (open/closed status, hours per day)
│   │   ├── Phone Number
│   │   ├── Website
│   │   ├── Price Level ($-$$$$)
│   │   └── Service Options (dine-in, takeout, delivery)
│   ├── Photos (user-submitted + Google)
│   ├── Reviews
│   │   ├── Overall Rating (stars + count)
│   │   ├── AI Review Summary
│   │   ├── Review Highlights (frequent topics)
│   │   ├── Sort (most relevant, newest, highest, lowest)
│   │   └── Individual Reviews (photo, text, date, helpful)
│   ├── Popular Times (bar chart, per hour)
│   ├── Menu (for restaurants, scraped or manual)
│   ├── Questions & Answers
│   ├── About (description, attributes)
│   ├── Related Places ("People also search for")
│   └── Reviews from the Web
├── Directions / Navigation
│   ├── Input Panel
│   │   ├── Origin (current location or custom)
│   │   ├── Destination
│   │   ├── Add Stop (multi-waypoint)
│   │   └── Swap Origin/Destination
│   ├── Mode Tabs
│   │   ├── Driving (car icon)
│   │   ├── Transit (bus/train icon)
│   │   ├── Walking
│   │   ├── Cycling
│   │   └── Ride Service (Uber/Lyft integration)
│   ├── Route Options
│   │   ├── Multiple Route Alternatives (with times)
│   │   ├── Avoid (highways, tolls, ferries)
│   │   ├── Units (km/miles)
│   │   └── Depart At / Arrive By (transit scheduling)
│   ├── Route Detail
│   │   ├── Step-by-Step Directions
│   │   ├── Time + Distance
│   │   ├── Traffic Conditions (green/yellow/red)
│   │   ├── Tolls Estimate
│   │   └── Fuel / EV Charging Stops
│   ├── Transit Detail
│   │   ├── Route Options (bus, subway, rail combinations)
│   │   ├── Departure Times (real-time)
│   │   ├── Walking Segments
│   │   ├── Transfer Points
│   │   └── Fare Estimate
│   └── Turn-by-Turn Navigation (full screen)
│       ├── Map with Route Highlighted
│       ├── Next Maneuver (arrow + distance)
│       ├── Lane Guidance
│       ├── Speed Limit
│       ├── Voice Navigation
│       ├── Incident Reports (accidents, road closures)
│       ├── ETA (updates with traffic)
│       ├── Music Controls (Spotify, Apple Music)
│       ├── Search Along Route
│       └── Share ETA
├── Explore Tab (Mobile)
│   ├── Category Buttons (Restaurants, Coffee, Attractions, Gas, Hotels)
│   ├── Trending Near You
│   ├── Recommendations ("Because you visited...")
│   ├── Local Guides Picks
│   ├── Lists (curated: "Best Pizza in NYC")
│   └── Events Nearby
├── Saved
│   ├── Lists
│   │   ├── Favorites (starred)
│   │   ├── Want to Go (flagged)
│   │   ├── Starred Places
│   │   ├── Custom Lists (create your own)
│   │   └── Followed Lists (from other users)
│   ├── Saved Routes
│   ├── Labeled Places (Home, Work, custom)
│   └── Visited (timeline-based)
├── Contribute
│   ├── Add a Place
│   ├── Add a Review
│   ├── Add Photos
│   ├── Answer Questions
│   ├── Edit Place Info (suggest edit)
│   ├── Report a Problem (road, place)
│   └── Local Guide Program
│       ├── Points System
│       ├── Level (1-10)
│       ├── Badges
│       └── Perks (early access, Google One storage)
├── Your Timeline
│   ├── Location History (day by day)
│   ├── Visited Places (auto-detected)
│   ├── Routes Taken
│   ├── Photos Linked to Location
│   └── Export / Delete History
├── Settings
│   ├── Navigation Settings (voice, route preferences)
│   ├── Map Type (default, satellite, terrain)
│   ├── Location Settings (history, sharing)
│   ├── Notifications
│   ├── Distance Units
│   ├── Offline Maps (download regions)
│   └── Accessibility
└── Offline Maps
    ├── Download Region
    ├── Manage Downloads
    └── Auto-Update Settings
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Map Canvas** | Full-screen interactive map | Pinch-zoom, pan, tap place pins |
| **Search Bar** | Top of screen (always accessible) | Search → results → place detail |
| **Bottom Sheet** | Draggable (mobile) | Collapsed: explore chips. Half: search results. Full: place detail |
| **Bottom Tab Bar** | 5 tabs (mobile) | Explore, Go (directions), Saved, Contribute, Updates |
| **Directions Panel** | Top overlay on map | Origin/destination + mode tabs |
| **Navigation Mode** | Full-screen takeover | Turn-by-turn with voice, minimizes other UI |
| **Layer Selector** | Map icon button | Traffic, transit, cycling, satellite overlays |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Place | place_id, name, type (restaurant/store/park/etc), address, coordinates, phone, website, hours[], rating, review_count, price_level, photos[], attributes[] | has Reviews, Photos, Q&A |
| Review | author, rating (1-5), text, photos[], date, helpful_count, owner_response | belongs to Place |
| Route | origin, destination, waypoints[], mode (driving/transit/walking/cycling), distance, duration, steps[], traffic_conditions, polyline | computed entity |
| TransitRoute | segments[] (walk, bus, subway), departure_times[], fares, transfers | type of Route |
| NavigationStep | instruction, distance, duration, maneuver, road_name | belongs to Route |
| SavedPlace | place, list, label, starred | belongs to User |
| LocalGuideProfile | level, points, reviews_count, photos_count, badges[] | belongs to User |
| OfflineMap | region, download_date, size_mb, expires | belongs to User |
| Timeline | date, places_visited[], routes[], photos[] | belongs to User |
| BusinessProfile | place, owner_verified, posts[], offers[], messaging_enabled | managed by business owner |

### Place Types (simplified)
```
food_and_drink | shopping | services | entertainment | lodging | outdoor | transit | health | education | government
```

## User Flows

### Find a Coffee Shop
```
Open Maps → "coffee near me" → See Pins on Map + List in Bottom Sheet → Filter: Open Now + 4★+ → Tap "Blue Bottle Coffee" → See Rating, Hours, Photos → [Directions] → 5 min walk → Start Navigation
```

### Navigate by Car
```
Search "SFO Airport" → [Directions] → Driving Tab → See 3 Routes (35 min, 42 min, 45 min) → Select Fastest → [Start] → Turn-by-Turn Voice Navigation → Arrive → "How was your trip?"
```

### Transit Directions
```
[Go] → Enter Destination → Transit Tab → See Options (Bus 22 → BART → Bus 48: 55 min) → Tap for Detail → See Walking + Transit Segments → Departure in 12 min → [Start]
```

### Contribute a Review
```
Visit Restaurant → Place Detail → [Write a Review] → Rate 4★ → Write Text → Add Photos → Submit → Earn Local Guide Points
```

## URL / Route Structure

```
/maps                          → Map View
/maps/search/:query            → Search Results
/maps/place/:place_id          → Place Detail
/maps/place/:place_id/reviews  → Place Reviews
/maps/place/:place_id/photos   → Place Photos
/maps/dir/:origin/:destination → Directions
/maps/@:lat,:lng,:zoom         → Map at Coordinates
/maps/timeline                 → Your Timeline
/maps/saved                    → Saved Places & Lists
/maps/contrib                  → Contribute
/maps/embed                    → Embed API
/maps/offline                  → Offline Maps
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Places | Place name, address, category, "near me" | Open Now, Rating, Price Level, Distance, Type, Features (outdoor seating, delivery) | Relevance, Distance, Rating |
| Directions | Addresses, places | Mode (driving/transit/walk/cycle), Avoid (tolls/highways/ferries), Depart/Arrive time | Fastest, Shortest, Fewest Transfers |
| Reviews | Review text | Rating, Language, Date, Photos Only | Most Relevant, Newest, Highest, Lowest |

## Responsive Behavior

| Breakpoint | Map | Search | Navigation |
|------------|-----|--------|------------|
| Mobile (primary) | Full-screen, bottom sheet for content | Full-screen search overlay | Full-screen turn-by-turn |
| Tablet | Full map, wider bottom sheet | Side panel | Split (map + directions) |
| Desktop (web) | Map + left sidebar panel | Sidebar results | Sidebar step-by-step |

### Maps-Specific UX
- Map is always the primary surface — everything overlays on it
- Long-press to drop a pin anywhere
- Street View immersive 360-degree experience
- Live traffic overlay with color-coded roads
- Indoor maps for malls, airports, transit stations
- AR walking navigation ("Live View" — camera + AR arrows)
- Offline maps for areas without connectivity
- Voice search and voice navigation
- Integration with car displays (Android Auto, CarPlay)
- Real-time transit tracking where available
- ETA sharing with contacts

## Access Control

| Feature | Anonymous | Signed In | Local Guide (Level 5+) | Business Owner |
|---------|-----------|-----------|----------------------|----------------|
| View Map | ✅ | ✅ | ✅ | ✅ |
| Search | ✅ | ✅ | ✅ | ✅ |
| Navigate | ✅ | ✅ | ✅ | ✅ |
| Save Places | — | ✅ | ✅ | ✅ |
| Write Reviews | — | ✅ | ✅ (priority display) | Respond to reviews |
| Add Photos | — | ✅ | ✅ (priority display) | ✅ |
| Edit Place Info | — | ✅ (suggest) | ✅ (trusted edits) | ✅ (own listing) |
| Timeline | — | ✅ | ✅ | — |
| Offline Maps | ✅ | ✅ | ✅ | — |
