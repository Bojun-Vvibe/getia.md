# Crowdfunding Platform — Information Architecture

## Overview

A reward-based crowdfunding platform (Kickstarter, Indiegogo style). The mental model is **back a project, get a reward** — creators launch campaigns with goals and deadlines, backers pledge money in exchange for reward tiers, and the community rallies around creative projects. Social proof (backer count, funding progress), urgency (countdown), and trust (creator track record) drive the experience.

## Site Map

### Backer-Facing

```
├── Home / Discover
│   ├── Featured Projects
│   ├── Trending Now
│   ├── Nearly Funded
│   ├── Just Launched
│   ├── Categories Grid
│   ├── Staff Picks
│   ├── Recommended for You
│   └── Collections / Curated Lists
├── Explore / Browse
│   ├── By Category
│   │   ├── Technology
│   │   ├── Design
│   │   ├── Games
│   │   ├── Film & Video
│   │   ├── Music
│   │   ├── Art
│   │   ├── Publishing
│   │   ├── Food & Craft
│   │   └── More...
│   ├── By Location
│   ├── By Popularity
│   └── Ending Soon
├── Search Results
│   ├── Project Cards (grid)
│   ├── Filters
│   └── Sort Options
├── Project Page
│   ├── Hero (video / image)
│   ├── Funding Progress Bar
│   │   ├── Amount Raised / Goal
│   │   ├── Backer Count
│   │   └── Days to Go
│   ├── Creator Info (avatar, name, location, past projects)
│   ├── Campaign Tabs
│   │   ├── Campaign (story, images, timeline)
│   │   ├── Rewards (tier cards)
│   │   ├── FAQ
│   │   ├── Updates (creator posts)
│   │   └── Comments (backer discussion)
│   ├── Reward Sidebar (desktop)
│   │   ├── Tier Cards (price, description, estimated delivery)
│   │   ├── Limited Rewards (X of Y remaining)
│   │   ├── Pledge Without Reward
│   │   └── Back This Project CTA
│   └── Related Projects
├── Pledge Flow
│   ├── Select Reward Tier
│   ├── Customize Pledge Amount
│   ├── Add-Ons (optional extras)
│   ├── Shipping Address (for physical rewards)
│   ├── Payment Information
│   ├── Review Pledge
│   └── Confirmation
├── My Backed Projects
│   ├── All Backed (with status indicators)
│   ├── In Progress (live campaigns)
│   ├── Successfully Funded
│   ├── Completed (reward received)
│   ├── Failed / Cancelled
│   └── Pledge Detail
│       ├── Pledge Amount & Reward
│       ├── Estimated Delivery
│       ├── Survey Status
│       ├── Shipping Tracking
│       └── Modify / Cancel Pledge
├── Messages
│   ├── Creator Messages
│   └── System Notifications
├── Account
│   ├── Profile
│   ├── Payment Methods
│   ├── Notification Settings
│   ├── Email Preferences
│   ├── Connected Social Accounts
│   └── Address Book
├── Help
│   ├── How It Works
│   ├── Backer FAQ
│   ├── Trust & Safety
│   ├── Creator Guidelines
│   └── Contact Support
└── Footer
    ├── About
    ├── Charter
    ├── Stats
    ├── Press
    ├── Jobs
    └── Terms / Privacy
```

### Creator-Facing

```
├── Start a Project
│   ├── Category Selection
│   ├── Project Basics
│   │   ├── Title
│   │   ├── Subtitle / Tagline
│   │   ├── Category & Subcategory
│   │   ├── Location
│   │   └── Project Image / Video
│   ├── Rewards
│   │   ├── Create Reward Tiers
│   │   │   ├── Pledge Amount
│   │   │   ├── Title & Description
│   │   │   ├── Estimated Delivery
│   │   │   ├── Shipping (included or extra)
│   │   │   ├── Limit Availability
│   │   │   └── Add-On Items
│   │   └── Reorder Tiers
│   ├── Story (rich text editor)
│   │   ├── Campaign Narrative
│   │   ├── Risks & Challenges
│   │   └── Media Embeds
│   ├── Funding
│   │   ├── Goal Amount
│   │   ├── Campaign Duration
│   │   └── Funding Model (all-or-nothing / flexible)
│   ├── Account / Identity Verification
│   ├── Preview
│   └── Submit for Review
├── Creator Dashboard
│   ├── Campaign Overview
│   │   ├── Funding Progress
│   │   ├── Backer Count
│   │   ├── Pledge Breakdown (by tier)
│   │   ├── Daily / Hourly Pledge Chart
│   │   └── Referral Sources
│   ├── Backers
│   │   ├── Backer List
│   │   ├── Backer Detail (pledge, tier, survey status)
│   │   └── Export Backer Data
│   ├── Updates
│   │   ├── Post Update
│   │   ├── Update History
│   │   └── Backer-Only vs Public Toggle
│   ├── Comments
│   ├── Messages
│   ├── Surveys
│   │   ├── Create Survey
│   │   ├── Survey Responses
│   │   └── Shipping Address Collection
│   ├── Fulfillment
│   │   ├── Reward Status Tracking
│   │   ├── Shipping Labels
│   │   └── Mark as Shipped
│   ├── Funding & Finance
│   │   ├── Pledged vs. Collected
│   │   ├── Fees Breakdown
│   │   ├── Payout Status
│   │   └── Tax Info
│   └── Analytics
│       ├── Traffic Sources
│       ├── Conversion Funnel
│       ├── Social Sharing Stats
│       └── Video Play Rate
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, Explore (dropdown), Start a Project, Search, Account |
| **Category Nav** | Dropdown or sidebar on Explore | Category list with project counts |
| **Project Tabs** | Horizontal tabs | Campaign, Rewards, FAQ, Updates, Comments |
| **Reward Sidebar** | Sticky right sidebar (desktop) | Reward tiers with "Select" CTAs |
| **Pledge Flow** | Step indicator | Step-by-step progression with back navigation |
| **Creator Dashboard Nav** | Left sidebar | Overview, Backers, Updates, Surveys, Fulfillment, Analytics |
| **Funding Bar** | Persistent on project page | Progress bar + stats (amount, backers, days left) |

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | title, subtitle, description, video_url, images[], category, goal, currency, duration, status, location | belongs to Creator, has Rewards, Updates, Comments |
| Creator | name, bio, avatar, location, verified, projects_created, projects_backed | has many Projects |
| Reward | title, description, pledge_amount, estimated_delivery, shipping_type, limit, backers_count | belongs to Project |
| Pledge | amount, reward, status, created_at, survey_completed | belongs to Backer and Project |
| Backer | user, pledges[], total_backed | is a User role |
| Update | title, body, is_public, comments_count, created_at | belongs to Project |
| Comment | body, author, likes, created_at, parent_id (threading) | belongs to Project or Update |
| Survey | questions[], responses_count, status | belongs to Project |
| AddOn | name, price, description | belongs to Project, added to Pledge |

### Project Status Flow
`draft → submitted → in_review → approved → live → funded / not_funded → fulfilling → completed`
`↘ rejected (with feedback) → revised → resubmitted`

### Pledge Status Flow
`active → collected → survey_sent → survey_completed → reward_shipped → completed`
`↘ cancelled / failed_collection / refunded`

### Funding Models
- **All-or-nothing**: Funds collected only if goal is met (Kickstarter model)
- **Flexible**: Creator keeps all funds regardless (Indiegogo model)

## User Flows

### Discover and Back
```
Home → Explore / Search → Category → Project Card → Project Page → Read Campaign → Select Reward → Customize Pledge → Add-Ons → Shipping → Payment → Confirm → Receive Updates
```

### Create a Campaign
```
Start a Project → Basics → Rewards → Story → Funding Goal & Duration → Verify Identity → Preview → Submit for Review → Approved → Launch → Share
```

### Post-Campaign Fulfillment (Creator)
```
Campaign Ends (funded) → Funds Collected → Send Surveys → Collect Addresses → Production → Ship Rewards → Mark Complete → Post Final Update
```

### Modify Pledge
```
My Backed Projects → Pledge Detail → Change Reward Tier / Amount → Update Payment → Confirm
```

## URL / Route Structure

### Backer
```
/                              → Home / Discover
/discover                      → Explore
/discover/:category            → Category Browse
/discover/:category/:sub       → Subcategory
/projects/search?q=:query      → Search Results
/projects/:creator/:slug       → Project Page
/projects/:creator/:slug/rewards    → Rewards Tab
/projects/:creator/:slug/updates    → Updates
/projects/:creator/:slug/updates/:id → Update Detail
/projects/:creator/:slug/comments   → Comments
/projects/:creator/:slug/faqs       → FAQ
/pledge/:projectId             → Pledge Flow
/pledge/:projectId/survey      → Backer Survey
/profile/backed                → My Backed Projects
/profile/backed/:id            → Pledge Detail
/profile/:username             → Public Profile
/messages                      → Messages
/settings                      → Account Settings
/help                          → Help Center
```

### Creator
```
/create                        → Start a Project
/create/basics                 → Project Basics
/create/rewards                → Set Up Rewards
/create/story                  → Write Story
/create/funding                → Funding Details
/create/preview                → Preview
/creator/dashboard             → Creator Dashboard
/creator/dashboard/:projectId  → Project Dashboard
/creator/backers               → Backer List
/creator/updates               → Manage Updates
/creator/updates/new           → Post Update
/creator/surveys               → Surveys
/creator/fulfillment           → Fulfillment
/creator/analytics             → Analytics
/creator/finance               → Funding & Payouts
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Discover | Project title, description, creator | Category, Funding Status (live/funded/ended), Goal Range, Location, Launch Date | Trending, Newest, Most Backed, Most Funded, Ending Soon, Magic (algorithm) |
| Creator Backers | Backer name, email | Reward Tier, Pledge Amount, Survey Status, Shipping Country | Pledge Amount, Date, Name |
| My Backed | Project title | Status (live/funded/completed), Category | Date Backed, Delivery Date |

## Responsive Behavior

| Breakpoint | Project Grid | Project Page | Reward Sidebar | Pledge Flow |
|------------|-------------|-------------|---------------|-------------|
| Desktop (≥1024px) | 3-4 column cards | Content + sticky reward sidebar | Right sidebar | Centered modal/page |
| Tablet (768–1023px) | 2-3 column cards | Stacked, rewards below content | Inline after content | Full page |
| Mobile (<768px) | 1 column cards | Stacked, sticky "Back" CTA | Full-screen on tap | Full-screen steps |

### Crowdfunding-Specific UX
- Funding progress bar with percentage + absolute numbers
- Countdown timer (days/hours for ending soon)
- Social proof: backer avatars, "X backed in the last hour"
- Share buttons prominent (social amplification is critical)
- Video auto-play on project page (desktop)
- Reward tier cards with visual hierarchy (most popular highlighted)
- Limited reward urgency: "Only X left!"
- Stretch goals visualization (unlocked tiers)
- Creator verification badge

## Access Control

### Backer / Creator

| Role | Browse | Back | Create | Manage | Comment |
|------|--------|------|--------|--------|---------|
| Guest | ✅ | — | — | — | — |
| Registered | ✅ | ✅ | ✅ (after verification) | Own projects | ✅ |
| Creator (verified) | ✅ | ✅ | ✅ | Own projects | ✅ |
| Superbacker | ✅ | ✅ | ✅ | Own projects | ✅ (badge) |

### Platform Admin

| Role | Dashboard | Projects | Users | Disputes | Finance | Settings |
|------|-----------|----------|-------|----------|---------|----------|
| Admin | ✅ | Review + Moderate | CRUD | Resolve | ✅ | ✅ |
| Reviewer | ✅ | Review + Approve | Read | — | — | — |
| Trust & Safety | ✅ | Suspend + Remove | Suspend | ✅ | — | — |
| Support | Limited | Read | Read | Assist | — | — |
