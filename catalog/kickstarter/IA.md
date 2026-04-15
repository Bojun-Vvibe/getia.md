---
brand: Kickstarter
tagline: "Bring creative projects to life. The world's largest crowdfunding platform for creative work."
category: Crowdfunding
website: https://www.kickstarter.com
---

# Kickstarter — Information Architecture

## Overview

Kickstarter is the world's largest reward-based crowdfunding platform, specifically focused on creative projects. The mental model is **all-or-nothing funding** — creators set a funding goal and deadline; if the goal is met, pledges are collected and rewards fulfilled; if not, no money changes hands. Kickstarter differentiates through its strict all-or-nothing model (unlike Indiegogo's flexible funding), curated project review process (projects must be approved), creative-only focus (no charity, equity, or personal causes), community engagement (updates, comments, backer interaction), and cultural influence as the launchpad for iconic products (Pebble, Exploding Kittens, Oculus). The platform takes a 5% fee on funded projects.

## Site Map

### Backer Side

```
├── Discover (Home)
│   ├── Search Bar
│   ├── Featured Project (hero, editor's pick)
│   ├── Recommended for You
│   ├── Trending Right Now
│   ├── Nearly Funded (close to goal)
│   ├── Just Launched (new projects)
│   ├── Projects We Love (staff picks)
│   ├── Categories (quick links)
│   └── "What We Do" explainer (first-time visitors)
├── Explore
│   ├── Category Browse
│   │   ├── Art
│   │   ├── Comics & Illustration
│   │   ├── Design & Tech
│   │   ├── Film
│   │   ├── Food & Craft
│   │   ├── Games (Tabletop Games, Video Games)
│   │   ├── Music
│   │   ├── Publishing
│   │   └── Each with Subcategories
│   ├── Filter: Location, Goal Amount, % Funded, "Projects We Love"
│   ├── Sort: Magic (algorithm), Popularity, Newest, End Date, Most Funded, Most Backed
│   ├── Ending Soon
│   └── Collections (curated themed lists)
├── Project Page (Core Experience)
│   ├── Project Header
│   │   ├── Video / Hero Image
│   │   ├── Project Title
│   │   ├── Creator (name, avatar, location)
│   │   ├── Category / Subcategory Badge
│   │   └── "Projects We Love" Badge (if selected)
│   ├── Funding Stats Bar
│   │   ├── Amount Pledged / Goal (progress bar)
│   │   ├── Number of Backers
│   │   ├── Days to Go (or "Funded!" / "Funding Unsuccessful")
│   │   └── % Funded
│   ├── Pledge Button (green "Back this project" CTA)
│   ├── Tabs
│   │   ├── Campaign
│   │   │   ├── Story (rich text, images, GIFs)
│   │   │   ├── Risks and Challenges (required section)
│   │   │   └── Environmental Commitments
│   │   ├── Rewards
│   │   │   ├── Pledge Without a Reward
│   │   │   ├── Reward Tiers (cards)
│   │   │   │   ├── Pledge Amount
│   │   │   │   ├── Title & Description
│   │   │   │   ├── Includes (list of items)
│   │   │   │   ├── Estimated Delivery
│   │   │   │   ├── Shipping (where and how much)
│   │   │   │   ├── Backers Count
│   │   │   │   ├── Limited (X of Y left) — if limited
│   │   │   │   └── [Select] Button
│   │   │   └── Add-Ons (optional extras)
│   │   ├── FAQ (creator-authored)
│   │   ├── Updates (creator posts)
│   │   │   ├── Update List
│   │   │   ├── Backer-Only Updates (locked for non-backers)
│   │   │   └── Comment on Updates
│   │   └── Comments (backer discussion)
│   │       ├── Comment Thread
│   │       ├── Creator Responses (highlighted)
│   │       └── Sort (newest, oldest)
│   ├── Reward Sidebar (desktop, sticky)
│   │   ├── All reward tiers (scrollable)
│   │   └── "Back this project" CTA
│   ├── Creator Section
│   │   ├── Creator Bio, Location
│   │   ├── Past Projects (track record)
│   │   ├── Created / Backed Count
│   │   ├── Last Login
│   │   └── Contact Creator
│   ├── Social Share (Twitter, Facebook, email, embed)
│   └── Related Projects ("You might also like")
├── Pledge Flow
│   ├── Select Reward (or "Pledge without a reward")
│   ├── Set Pledge Amount (can go above minimum)
│   ├── Add-Ons (select optional extras)
│   ├── Shipping Country Selection
│   ├── Payment Information (card — charged only if funded)
│   ├── Review Pledge
│   └── Confirm ("Remember, this is an all-or-nothing project")
├── Backed Projects (Your Profile)
│   ├── Backed Projects List
│   │   ├── Status: Live / Successfully Funded / Unsuccessful / Completed
│   │   └── Pledge Detail
│   │       ├── Pledge Amount & Reward
│   │       ├── Estimated Delivery
│   │       ├── Survey Status (not sent / sent / completed)
│   │       ├── Modify/Cancel Pledge (if campaign still live)
│   │       └── Shipping Tracking (post-campaign)
│   ├── Saved Projects (bookmarked)
│   ├── Recommended Projects
│   └── Backed History (lifetime stats)
├── Profile
│   ├── Public Profile (bio, location, backed projects, created projects)
│   ├── Superbacker Badge (if eligible)
│   └── Connected Social Accounts
├── Messages
│   ├── Creator Messages
│   └── Backer-to-Creator Conversations
├── Notifications
│   ├── Project Updates
│   ├── Funding Milestones
│   ├── Survey Requests
│   ├── Reward Shipping
│   └── Recommended Projects
├── Account Settings
│   ├── Profile (name, bio, avatar, location)
│   ├── Email / Password
│   ├── Payment Methods
│   ├── Notification Preferences
│   ├── Privacy Settings
│   └── Connected Apps
├── Help
│   ├── How Kickstarter Works (for backers)
│   ├── Backer FAQ
│   ├── Creator Guidelines
│   ├── Trust & Safety
│   ├── Community Guidelines
│   └── Contact Support
└── Footer
    ├── About (company, charter, stats, press, jobs)
    ├── Support / Education
    ├── Arts & Culture
    └── Legal (terms, privacy, cookie policy)
```

### Creator Side

```
├── Start a Project
│   ├── Choose Category
│   ├── Basics
│   │   ├── Project Title
│   │   ├── Short Blurb
│   │   ├── Category & Subcategory
│   │   ├── Project Image
│   │   └── Location
│   ├── Rewards
│   │   ├── Create Reward Tiers
│   │   │   ├── Pledge Amount (minimum)
│   │   │   ├── Title
│   │   │   ├── Description
│   │   │   ├── Items Included
│   │   │   ├── Estimated Delivery Month
│   │   │   ├── Shipping (destinations + costs)
│   │   │   └── Limit Availability (optional cap)
│   │   ├── Add-Ons (optional extras)
│   │   └── Reorder Tiers
│   ├── Story
│   │   ├── Video (strongly recommended, hosted by Kickstarter)
│   │   ├── Campaign Story (rich text editor: text, images, GIFs)
│   │   ├── Risks and Challenges (mandatory)
│   │   └── Environmental Commitments (optional)
│   ├── People
│   │   ├── Creator Profile (bio, photo, website)
│   │   ├── Collaborators
│   │   └── Social Links
│   ├── Payment
│   │   ├── Verify Identity
│   │   ├── Bank Account (for fund transfer)
│   │   └── Tax Information
│   ├── Funding
│   │   ├── Goal Amount
│   │   ├── Campaign Duration (1-60 days, 30 recommended)
│   │   └── Launch Date (immediate or scheduled)
│   ├── Preview (full project page preview)
│   └── Submit for Review (Kickstarter approval required)
├── Creator Dashboard (post-launch)
│   ├── Campaign Overview
│   │   ├── Funding Progress (real-time)
│   │   ├── Backer Count
│   │   ├── Pledge Amount by Day (chart)
│   │   ├── Referral Sources (internal, direct, social, external)
│   │   ├── Pledge Distribution by Tier
│   │   └── Video Play Rate
│   ├── Backers
│   │   ├── Backer List (pledge level, survey status)
│   │   ├── Backer Detail
│   │   ├── Export Backer Data (CSV)
│   │   └── New Backer Notifications
│   ├── Updates
│   │   ├── Post Update (rich text, backer-only or public)
│   │   ├── Update History
│   │   └── Engagement Stats (views, likes, comments)
│   ├── Comments (moderate, respond)
│   ├── Messages (direct backer communication)
│   ├── Surveys (post-campaign)
│   │   ├── Create Survey (reward fulfillment questions)
│   │   ├── Send to Backers
│   │   ├── Survey Responses
│   │   └── Address Collection (shipping addresses)
│   ├── Post-Campaign Tools
│   │   ├── Pledge Manager (late pledges, add-on upgrades)
│   │   ├── Reward Fulfillment Tracking
│   │   ├── Shipping Status
│   │   └── Mark Rewards as Fulfilled
│   ├── Finances
│   │   ├── Pledged vs Collected (card failures)
│   │   ├── Kickstarter Fee (5%)
│   │   ├── Payment Processing Fee (3-5%)
│   │   ├── Payout Status
│   │   └── Tax Documentation
│   └── Analytics
│       ├── Traffic Sources
│       ├── Conversion Funnel (page view → pledge)
│       ├── Social Sharing Stats
│       ├── Geographic Distribution
│       └── Referrer Breakdown
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Fixed top bar (minimal) | Kickstarter logo, Explore (dropdown), Start a Project, Search, Account |
| **Category Nav** | Dropdown on Explore or sidebar on browse | Category list with project counts |
| **Project Tabs** | Horizontal tabs | Campaign, Rewards, FAQ, Updates (count), Comments (count) |
| **Reward Sidebar** | Sticky right sidebar (desktop) | All reward tiers with "Select" CTAs |
| **Funding Progress Bar** | Persistent on project page | Green progress bar + stats (amount, backers, days left) |
| **Pledge Flow** | Step indicator | Reward → Amount → Add-Ons → Shipping → Payment → Confirm |
| **Creator Dashboard Nav** | Left sidebar | Overview, Backers, Updates, Comments, Messages, Surveys, Finances, Analytics |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | title, blurb, category, subcategory, goal, currency, deadline, status, location, video_url, story_html, risks_html, launched_at, funding_amount, backer_count, percent_funded | belongs to Creator |
| Creator | name, bio, avatar, location, created_count, backed_count, verified, last_login, websites[] | has Projects |
| Reward | title, description, pledge_amount, includes[], estimated_delivery, shipping_type, shipping_destinations[], limit, backers_count, add_ons[] | belongs to Project |
| Pledge | amount, reward, status, add_ons[], shipping_address, survey_status | belongs to Backer and Project |
| Update | title, body_html, is_public, likes_count, comments_count, published_at | belongs to Project |
| Comment | body, author, likes, created_at, is_creator_response | belongs to Project or Update |
| Survey | questions[], sent_count, response_count | belongs to Project |
| AddOn | name, description, price | belongs to Project, added to Pledge |

### Project Status Flow (Kickstarter-specific)
```
draft → submitted → in_review → approved → live → funded / not_funded
                  → rejected (with feedback → revise → resubmit)
live → suspended (policy violation)
funded → collecting_pledges → funds_transferred → fulfilling → completed
```

### Funding Model
- **All-or-Nothing** (only model on Kickstarter): funds collected only if goal met by deadline
- If goal not met: all pledges cancelled, no money charged
- Kickstarter fee: 5% of funds raised (only on success)
- Payment processing: 3% + $0.20 per pledge

### Pledge Status
```
active → collected (goal met) → survey_sent → survey_completed → reward_shipped → fulfilled
active → cancelled (goal not met — no charge)
active → cancelled_by_backer (during campaign)
collected → refunded (creator-initiated)
```

## User Flows

### Back a Project
```
Discover → Browse category (Games) or search → Project card → Project page → Watch video → Read story → Browse rewards → Select reward ($50 tier) → Set pledge amount ($55 to add extra support) → Add-ons (dice set $15) → Select shipping country → Enter payment → Confirm → "You're a backer!" → Receive updates → Goal met → Charged → Survey → Receive reward
```

### Create a Campaign
```
Start a Project → Category (Design & Tech) → Basics (title, blurb, image) → Rewards (create 4-5 tiers) → Story (video + narrative + risks) → Funding (goal: $50,000, duration: 30 days) → Identity verification → Preview → Submit for Review → Approved (2-3 days) → Launch → Share → Campaign runs → Goal met → Funds collected → Surveys → Fulfill rewards
```

### Stretch Goals
```
Campaign funded at 100% → Creator posts update: "Stretch Goal at $75K: Deluxe Edition" → Backers share → More backers join → $75K reached → New stretch goal at $100K → Community excitement grows → Campaign ends → All stretch goals included
```

### Failed Campaign
```
Campaign live → Tracking pledges → Day 25: only 40% funded → Creator posts update encouraging sharing → Day 30: 65% funded (short of goal) → Campaign ends: "Funding Unsuccessful" → No charges → Creator may relaunch
```

## URL / Route Structure

```
/                                      → Discover / Home
/discover                              → Explore
/discover/categories/:category          → Category Browse
/discover/categories/:category/:sub     → Subcategory
/discover/advanced?term=:query         → Search Results
/projects/:creator/:slug              → Project Page
/projects/:creator/:slug/description  → Campaign Tab
/projects/:creator/:slug/rewards      → Rewards Tab
/projects/:creator/:slug/faqs         → FAQ Tab
/projects/:creator/:slug/posts        → Updates Tab
/projects/:creator/:slug/posts/:id    → Update Detail
/projects/:creator/:slug/comments     → Comments Tab
/projects/:creator/:slug/pledge/new   → Pledge Flow (Select Reward)
/projects/:creator/:slug/pledge/edit  → Modify Pledge
/profile/:username                     → Public Profile
/profile/:username/backed              → Backed Projects
/profile/:username/created             → Created Projects
/profile/settings                      → Account Settings
/messages                              → Messages
/help                                  → Help Center
/help/handbook                         → Creator Handbook
/rules                                 → Project Guidelines
/charter                               → Kickstarter Charter
/about/stats                           → Platform Stats
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Discover | Project title, blurb, creator | Category, Subcategory, Location, Goal Range, % Funded, Status (live), "Projects We Love" | Magic (algorithm), Popularity, Newest, End Date, Most Funded, Most Backed |
| Creator Backers | Backer name, email | Reward Tier, Pledge Amount, Survey Status, Shipping Country | Pledge Amount, Date, Name |
| My Backed | Project title | Status (live/funded/unfunded/complete), Category | Date Backed, End Date |

## Responsive Behavior

| Breakpoint | Project Grid | Project Page | Reward Sidebar | Pledge Flow |
|------------|-------------|-------------|---------------|-------------|
| Desktop (>=1024px) | 3-4 column cards | Content + sticky reward sidebar | Right sidebar, scrollable | Centered modal/page |
| Tablet (768-1023px) | 2 column cards | Stacked, rewards inline below | Inline after content | Full page |
| Mobile (<768px) | 1 column cards | Stacked, sticky "Back this project" button | Full-screen on tap | Full-screen steps |

### Kickstarter-Specific UX
- **All-or-nothing messaging**: prominently displayed — "This project will only be funded if it reaches its goal"
- **Funding progress bar**: green fill with exact numbers — the emotional center of every project
- **Video-first**: project video is the hero element, autoplay on desktop
- **"Projects We Love" badge**: editorial curation signal (green heart)
- **Superbacker badge**: for prolific backers (backed 25+ projects in past year)
- **Stretch goals**: not a platform feature — communicated through Updates (creative use of updates)
- **Social proof**: "X backed in the last 24 hours" creates urgency
- **Limited rewards**: "X of Y remaining" creates scarcity
- **Creator track record**: past projects shown with funding success/failure history
- **Community-first**: comments section often very active, creator engagement expected
- **Minimal advertising**: Kickstarter doesn't show ads — discovery is organic + editorial
- **Charter / B-Corp**: Kickstarter emphasizes its public benefit corporation status

## Access Control

| Role | Browse | Back | Create | Comment | Manage |
|------|--------|------|--------|---------|--------|
| Guest | ✅ | — | — | — | — |
| Registered | ✅ | ✅ | ✅ (after verification) | ✅ (on backed projects) | Own pledges |
| Creator (verified) | ✅ | ✅ | ✅ | ✅ | Own projects |
| Superbacker | ✅ | ✅ (badge visible) | ✅ | ✅ (badge visible) | Own pledges |

### Kickstarter Review Process
- All projects must be submitted for review before launch
- Review takes 1-3 business days
- Projects must meet guidelines (creative, not charity/equity)
- Prohibited: reselling, charity, "fund my life," illegal items
- Rejected projects receive feedback and can revise and resubmit
