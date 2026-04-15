---
brand: Stack Overflow
tagline: "Where developers learn, share, and build careers. The world's largest Q&A platform for programmers."
category: Q&A
website: https://stackoverflow.com
---

# Stack Overflow — Information Architecture

## Overview

The world's largest Q&A platform for software developers. Stack Overflow's mental model is a **structured knowledge base built from questions and answers** — not a discussion forum. Every question seeks a definitive answer, and the best answer is community-voted to the top and officially "accepted" by the asker. Key differentiators: strict Q&A format (no discussion threads), reputation system (earned through helpful contributions), badges and privileges (gamified progression), community moderation (elected moderators + privilege-based), duplicate detection, code formatting, the Stack Exchange network (200+ Q&A sites), Stack Overflow for Teams (private), and Stack Overflow Jobs (deprecated, now talent platform).

## Site Map

```
├── Home
│   ├── Interesting (personalized based on tags you follow)
│   ├── Hot (trending across Stack Overflow)
│   ├── Week / Month (top questions by period)
│   └── Custom Filters (saved searches)
├── Questions
│   ├── All Questions
│   │   ├── Sort: Newest / Active / Bounties / Unanswered / Score
│   │   ├── Filter: No Answers / No Accepted Answer
│   │   ├── Tag Filter
│   │   └── Pagination
│   ├── Tagged Questions (filtered by tag)
│   ├── Unanswered Questions
│   │   ├── My Tags (questions in your favorite tags)
│   │   ├── Newest
│   │   └── No Answers / No Upvoted Answers
│   └── Bounties (questions with bounty rewards)
├── Question Detail
│   ├── Question
│   │   ├── Title
│   │   ├── Body (Markdown: text, code blocks, images, links, LaTeX)
│   │   ├── Tags (e.g., javascript, python, react)
│   │   ├── Vote Score (↑ net upvotes - downvotes ↓)
│   │   ├── Views Count
│   │   ├── Asked Date, Modified Date
│   │   ├── Author Card (name, reputation, badges, avatar)
│   │   ├── Bounty Indicator (if active, amount, deadline)
│   │   ├── Favorite / Bookmark (★)
│   │   ├── Share Link
│   │   ├── Edit (suggest edit or direct edit)
│   │   ├── Close / Flag / Delete (privileged users)
│   │   ├── Follow (get notified of changes)
│   │   └── Activity Timeline (edits, comments, answers)
│   ├── Answers
│   │   ├── Sort: Votes (default) / Active / Oldest / Modified
│   │   ├── Accepted Answer (✅ green checkmark, pinned top)
│   │   ├── Answer Body (Markdown: code, explanation)
│   │   ├── Vote (↑↓)
│   │   ├── Author Card
│   │   ├── Edit
│   │   ├── Share Link to Specific Answer
│   │   ├── Flag
│   │   ├── Comments (on answer)
│   │   └── "Was this answer useful?" (for anonymous users)
│   ├── Comments (on question)
│   │   ├── Comment Text (limited length, inline code)
│   │   ├── Upvote Comment
│   │   ├── Flag Comment
│   │   └── "Add a Comment" (50+ reputation required)
│   ├── Linked Questions (sidebar)
│   ├── Related Questions (sidebar)
│   └── "Know someone who can answer? Share a link" CTA
├── Ask Question
│   ├── Title (auto-suggest similar questions while typing)
│   ├── Body (Markdown editor)
│   │   ├── Text Formatting (bold, italic, headers, lists)
│   │   ├── Code Block (``` with syntax highlighting)
│   │   ├── Image Upload
│   │   ├── Tables
│   │   ├── Links
│   │   └── Stack Snippets (runnable HTML/CSS/JS in-browser)
│   ├── Tags (required, up to 5)
│   ├── Duplicate Check ("Does this answer your question?" suggestions)
│   ├── Writing Tips / Guidelines Sidebar
│   ├── Preview
│   └── Post Your Question
├── Tags
│   ├── All Tags (alphabetical or popular)
│   ├── Tag Page
│   │   ├── Tag Name, Description, Wiki
│   │   ├── Questions Count, Questions/Day
│   │   ├── Related Tags
│   │   ├── Top Askers / Top Answerers (all time, month, week)
│   │   ├── Questions List (sorted, filtered)
│   │   └── Tag Synonyms
│   ├── Tag Wiki (community-maintained tag documentation)
│   └── Watch / Ignore Tags (affects home feed)
├── Users
│   ├── Users Directory
│   │   ├── Sort: Reputation / New Users / Voters / Editors / Moderators
│   │   ├── Period: Week / Month / Quarter / Year / All
│   │   └── Search Users
│   ├── User Profile
│   │   ├── Display Name, Avatar, Location, Website, About Me, Member Since
│   │   ├── Reputation Score
│   │   ├── Badges (Gold / Silver / Bronze counts + specific badges)
│   │   ├── Tabs: Profile / Activity / Saves / Settings
│   │   ├── Activity
│   │   │   ├── Summary (posts, score, people reached)
│   │   │   ├── Answers
│   │   │   ├── Questions
│   │   │   ├── Tags (top tags by score)
│   │   │   ├── Badges (earned)
│   │   │   ├── Bounties (offered/earned)
│   │   │   ├── Reputation Graph (over time)
│   │   │   └── All Actions (timeline)
│   │   ├── Saves (bookmarked questions)
│   │   └── Developer Story (if created)
│   └── Your Profile (with edit access)
├── Search
│   ├── Search Results (questions, answers, tags, users)
│   ├── Advanced Search Operators
│   │   ├── [tag] — filter by tag
│   │   ├── user:me — your posts
│   │   ├── score:N — minimum score
│   │   ├── answers:N — answer count
│   │   ├── isaccepted:yes — has accepted answer
│   │   ├── is:question / is:answer
│   │   ├── closed:yes / duplicate:yes
│   │   ├── created:YYYY-MM-DD — date filter
│   │   ├── body:"code snippet" — search in body
│   │   └── title:"exact phrase" — search in title
│   └── Sort: Relevance / Newest / Active / Votes
├── Reputation & Privileges
│   ├── Reputation Page (how it works)
│   ├── Privilege Levels
│   │   ├── 1: Create Posts
│   │   ├── 15: Vote Up
│   │   ├── 50: Comment Everywhere
│   │   ├── 125: Vote Down (costs 1 rep)
│   │   ├── 250: View Close Votes
│   │   ├── 500: Retag Questions
│   │   ├── 1000: Show Total Votes (split up/down)
│   │   ├── 2000: Edit Any Post (no peer review)
│   │   ├── 3000: Close / Reopen Questions
│   │   ├── 5000: Approve Tag Wiki Edits
│   │   ├── 10,000: Access Moderator Tools (delete votes, view analytics)
│   │   ├── 15,000: Protect Questions
│   │   ├── 20,000: Trusted User (vote to delete)
│   │   └── 25,000: Access to Site Analytics
│   └── Badges
│       ├── Gold (rare, major achievements)
│       ├── Silver (notable contributions)
│       ├── Bronze (participation milestones)
│       └── Tag Badges (expertise in specific tags)
├── Review Queues (500+ reputation)
│   ├── Suggested Edits (approve/reject)
│   ├── Close Votes (agree/disagree)
│   ├── Reopen Votes
│   ├── Low Quality Posts
│   ├── First Questions (from new users)
│   ├── First Answers (from new users)
│   ├── Late Answers (old questions, new answers)
│   └── Triage (sort new questions)
├── Stack Overflow for Teams (Enterprise)
│   ├── Private Q&A (team-only)
│   ├── Knowledge Base (Articles)
│   ├── Collections
│   ├── Team Members
│   └── Integrations (Slack, Jira, GitHub)
├── Collectives (sponsored tag communities)
│   ├── Collective Page (e.g., Google Cloud, AWS, GitLab)
│   ├── Recommended Content
│   ├── Recognized Members
│   ├── Articles (long-form by collective)
│   └── Bulletins
├── Community
│   ├── Meta Stack Overflow (community governance)
│   ├── Chat (real-time chat rooms)
│   ├── Blog (official Stack Overflow blog)
│   ├── Code of Conduct
│   ├── Help Center (How to Ask, How to Answer, What's on-topic)
│   └── Elections (community moderator elections)
├── Header Tools
│   ├── Inbox (notifications: answers, comments, badges, edits)
│   ├── Achievements (recent reputation changes)
│   ├── Review Queues (badge with count)
│   └── Site Switcher (Stack Exchange network)
└── Footer
    ├── Stack Overflow (main)
    ├── Stack Exchange Network (200+ sites)
    ├── Advertising, Talent, Teams
    └── Legal, Privacy, Terms
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Bar** | Fixed, full width | Logo, Products dropdown, search bar (prominent), user avatar + rep + badges, inbox, achievements, review, site switcher |
| **Left Sidebar** | Collapsible (desktop) | Home, Questions, Tags, Users, Companies, Collectives, Explore Collectives, Teams |
| **Question Tabs** | Horizontal tabs on question list | Interesting / Bounties / Hot / Week / Month |
| **Sort/Filter** | Below tabs on question list | Newest / Active / Bounties / Unanswered + tag filter |
| **Post Actions** | Inline on question/answer | Vote (↑↓), Accept (✅), Edit, Close, Flag, Share, Bookmark |
| **Right Sidebar** | On question detail (desktop) | Linked Questions, Related Questions, Hot Network Questions, tag info |
| **Comment Thread** | Below question/answer | Flat list (not threaded), expandable |

### Desktop Layout
```
[Left Sidebar (164px)]  |  [Content (727px)]     |  [Right Sidebar (300px)]
──────────────────────────────────────────────────────────────────
🏠 Home                 |  Question Title         | Linked
📋 Questions            |  [Vote ↑] [Score] [↓]  |  • Related Q1
🏷 Tags                 |  [Body text...]         |  • Related Q2
👥 Users                |  Tags: [js][react]      | ──────────────
🏢 Companies            |  ──────────────         | Related
   Collectives          |  2 Answers              |  • Similar Q1
                        |  [✅ Accepted Answer]   |  • Similar Q2
                        |  [Vote ↑] [Score] [↓]  | ──────────────
                        |  [Answer body...]       | Hot Network Qs
                        |  ──────────────         |  • Q from physics
                        |  [Other Answer]         |  • Q from math
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Question | title, body (Markdown/HTML), tags[] (max 5), score, view_count, answer_count, accepted_answer_id, bounty (amount, deadline), closed_reason, duplicate_of, protected (bool), community_wiki (bool), created_at, modified_at, locked (bool), migration_info | belongs to User; has many Answers, Comments, Tags, Votes, Revisions |
| Answer | body, score, accepted (bool), community_wiki (bool), created_at, modified_at | belongs to Question and User; has Comments, Votes, Revisions |
| Comment | body (600 chars, limited markdown), score, created_at | belongs to Question/Answer and User |
| Vote | value (+1/-1), type (question/answer/comment) | belongs to User and Post |
| Tag | name, excerpt, wiki, question_count, questions_per_day | many-to-many with Questions; has Synonyms |
| User | display_name, avatar, location, website, about_me, reputation, badges (gold/silver/bronze counts), member_since, last_seen, is_moderator | has many Questions, Answers, Comments, Votes, Badges |
| Badge | name, description, type (gold/silver/bronze), category (question/answer/participation/moderation/tag), awarded_count | awarded to Users |
| Revision | body, title, tags, edit_comment, created_at, editor | belongs to Question/Answer |
| Bounty | amount (50-500 rep), message, deadline, auto_award (bool) | belongs to Question, offered by User |
| CloseVote | reason (duplicate/off-topic/unclear/too broad/opinion-based), voter | belongs to Question |
| Flag | type (spam/rude/not_an_answer/low_quality/moderator_attention), message | belongs to Post, raised by User |
| Review | task (suggested_edit/close/reopen/low_quality/first_posts), reviewer, action (approve/reject/skip), created_at | belongs to Post |
| TagBadge | tag, user, type (gold/silver/bronze) | awarded for score in specific tag |
| Collective | name, slug, description, members[], articles[] | groups Tags and Users |
| Article | title, body, author, collective, created_at | belongs to Collective |

### Question States
```
open → closed (duplicate / off-topic / needs details / opinion-based) → deleted
open → protected (only established users can answer)
open → locked (no votes, edits, or comments — mod action)
open → community wiki (rep-free collaborative editing)
```

### Reputation Events
```
Question upvoted: +10 rep
Answer upvoted: +10 rep
Answer accepted: +15 rep (answerer) + 2 rep (asker)
Question downvoted: -2 rep
Answer downvoted: -2 rep (voter loses -1)
Suggested edit approved: +2 rep
Bounty awarded: +N rep (bounty amount)
Spam/offensive flags validated: -100 rep
```

## User Flows

### Ask a Question
```
[Ask Question] → Type Title → Review Similar Questions → Write Body (code + explanation) → Add Tags → Preview → Post
```

### Answer a Question
```
Home → Find Question (tag filter or search) → Read → Write Answer (code + explanation) → Post → Asker Accepts (✅) → Earn +15 Rep
```

### Search for Solution
```
Google → Stack Overflow Question → Read Question → Scroll to Accepted Answer → Copy Code → Solve Problem
```

### Earn Reputation
```
Answer Questions → Get Upvotes (+10 each) → Unlock Privileges → Edit Others' Posts → Review Queue → Close Votes → Community Moderator
```

### Edit a Post
```
Question/Answer → [Edit] → Suggest Edit (< 2000 rep) or Direct Edit (≥ 2000) → Reviewed by Peers → Applied
```

### Offer Bounty
```
Question (no good answer) → [Start Bounty] → Set Amount (50-500 rep) → Write Bounty Message → 7 Day Period → Award Best Answer
```

### Review Queue
```
Top Bar → Review Icon (3) → Suggested Edits Queue → Review Edit → Approve / Reject / Improve → Next Review
```

### Close as Duplicate
```
Question → [Close] → "Duplicate of..." → Search for Original → Link Original → Others Vote → Closed → Redirects
```

## URL / Route Structure

```
/                                  → Home (Interesting Questions)
/questions                         → All Questions
/questions/ask                     → Ask a Question
/questions/:id/:slug               → Question Detail
/questions/:id/:slug/:answerId     → Link to Specific Answer
/questions/tagged/:tag             → Questions with Tag
/questions/tagged/:tag1+:tag2      → Questions with Multiple Tags
/search?q=:query                   → Search Results
/tags                              → All Tags
/tags/:tagName                     → Tag Page
/tags/:tagName/info                → Tag Wiki
/users                             → Users Directory
/users/:id/:slug                   → User Profile
/users/:id/:slug?tab=answers       → User Answers
/users/:id/:slug?tab=questions     → User Questions
/users/:id/:slug?tab=tags          → User Top Tags
/users/:id/:slug?tab=badges        → User Badges
/users/:id/:slug?tab=reputation    → User Reputation History
/review                            → Review Queues
/review/suggested-edits            → Suggested Edits Queue
/review/close                      → Close Votes Queue
/collectives/:slug                 → Collective Page
/collectives/:slug/articles        → Collective Articles
/help                              → Help Center
/help/how-to-ask                   → How to Ask Guide
/help/privileges                   → Privileges
/conduct                           → Code of Conduct
/election                          → Moderator Elections
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Questions (title + body), Answers, Tags, Users | Tags ([tag]), User (user:id), Score (score:N), Answers (answers:N), Accepted (isaccepted:yes/no), Closed (closed:yes/no), Date (created:YYYY-MM-DD), Body/Title (body:"text"/title:"text") | Relevance, Votes, Activity, Newest, Oldest |
| Questions List | All questions | Tags, No Answers, No Accepted Answer | Newest, Active, Bounties, Unanswered, Score |
| Tag Page | Questions with specific tag | — | Newest, Active, Votes, Unanswered |
| User Activity | User's posts | Type (questions/answers/tags/badges) | Score, Activity, Newest |
| Review Queues | Items needing review | Queue type | — (system-determined order) |

### Advanced Search Operators
```
[javascript]           → tagged with javascript
[javascript] [react]   → tagged with both
user:12345             → by specific user
user:me                → by yourself
score:10               → minimum score 10
answers:0              → no answers
isaccepted:yes         → has accepted answer
is:question            → questions only
is:answer              → answers only
closed:yes             → closed questions
duplicate:yes          → closed as duplicate
views:1000             → minimum views
created:2024-01-01..   → created after date
body:"function()"      → search in body
title:"how to"         → search in title
wiki:yes               → community wiki
hasaccepted:no         → no accepted answer
inquestion:12345       → answers to specific question
```

## Responsive Behavior

| Breakpoint | Left Sidebar | Content | Right Sidebar |
|------------|-------------|---------|---------------|
| Desktop (≥1264px) | Fixed (164px) | Center (max 727px) | Fixed (300px) |
| Tablet (980–1263px) | Collapsed (icons) | Wider content | Reduced right sidebar |
| Mobile (<980px) | Hamburger drawer | Full width | Hidden (info in expandable sections) |

### Code Display
- Syntax highlighting (language-aware)
- Copy button on code blocks
- Horizontal scroll for long lines
- Stack Snippets: runnable HTML/CSS/JS in-browser
- Mobile: code blocks horizontally scrollable

### Mobile Adaptations
- Simplified header (hamburger + search + inbox)
- Vote buttons prominent (large tap targets)
- Code blocks scrollable
- Comments collapsed by default
- Question list in compact card view
- Pull-to-refresh

## Access Control

| Reputation | Capabilities |
|-----------|-------------|
| 1 | Ask, answer, flag, suggest edits |
| 15 | Upvote |
| 50 | Comment everywhere |
| 125 | Downvote |
| 250 | View close/reopen votes |
| 500 | Retag questions |
| 1,000 | Established user (view vote splits) |
| 2,000 | Edit questions and answers (no review needed) |
| 3,000 | Vote to close/reopen |
| 5,000 | Approve tag wiki edits |
| 10,000 | Access moderator tools, delete answers |
| 15,000 | Protect questions |
| 20,000 | Trusted user (vote to delete) |
| 25,000 | Access site analytics |

| Role | Ask | Answer | Comment | Vote | Edit | Close | Moderate |
|------|-----|--------|---------|------|------|-------|----------|
| Anonymous | — | — | — | — | — | — | — |
| New User (1 rep) | ✅ (rate limited) | ✅ | Own posts only | — | Suggest edits | — | — |
| Established (1000+) | ✅ | ✅ | ✅ | ✅ | ✅ (suggested) | — | — |
| Trusted (2000+) | ✅ | ✅ | ✅ | ✅ | ✅ (direct) | — | — |
| Close Voter (3000+) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | — |
| Moderator (elected) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (binding) | ✅ (binding close, delete, suspend, migrate) |
| Stack Overflow Staff | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (all) |

### Content Quality Controls
- Duplicate detection (suggest before asking)
- Review queues (community-driven quality gatekeeping)
- Question bans (auto-ban for consistently downvoted questions)
- Rate limiting for new users
- Protected questions (prevent answers from very new users)
- Community wiki (shared ownership, no rep from votes)
