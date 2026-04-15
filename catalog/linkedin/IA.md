---
brand: LinkedIn
tagline: "The world's largest professional network. Connect, learn, and find opportunities."
category: Job / Professional
website: https://linkedin.com
---

# LinkedIn — Information Architecture

## Overview

LinkedIn is the world's largest professional networking platform with 900M+ members. The mental model combines **social network + job board + professional identity**. Unlike pure job boards (Indeed), LinkedIn is your living professional resume that also serves as a news feed, networking tool, learning platform, and recruitment engine. The IA must serve three distinct user modes: **networking** (connect, share, engage), **job seeking** (search, apply, track), and **recruiting/hiring** (post jobs, source candidates, manage pipeline).

## Site Map

```
├── Home / Feed
│   ├── Status Update Box ("Start a post")
│   ├── Feed (algorithm-curated)
│   │   ├── Post Types
│   │   │   ├── Text Posts
│   │   │   ├── Articles
│   │   │   ├── Images / Carousels
│   │   │   ├── Videos
│   │   │   ├── Polls
│   │   │   ├── Documents (PDFs, slides)
│   │   │   ├── Event Shares
│   │   │   ├── Job Change Celebrations
│   │   │   └── Newsletters
│   │   ├── Reactions (Like, Celebrate, Support, Funny, Love, Insightful)
│   │   ├── Comments (threaded)
│   │   ├── Reposts
│   │   └── Share
│   ├── Sidebar (left): Profile Card (photo, headline, connections)
│   ├── Sidebar (right): News, Trending, Events, Ads
│   └── People You May Know
├── My Network
│   ├── Invitations (pending connection requests)
│   ├── Connections (list, searchable)
│   ├── People You May Know (suggestions)
│   ├── Groups
│   ├── Events
│   ├── Pages (companies) Followed
│   ├── Newsletters Subscribed
│   └── Manage My Network
├── Jobs
│   ├── Job Search
│   │   ├── Search Bar (title, keyword, company)
│   │   ├── Location
│   │   ├── Filters
│   │   │   ├── Date Posted
│   │   │   ├── Experience Level (Intern, Entry, Associate, Mid, Senior, Director, Executive)
│   │   │   ├── Company
│   │   │   ├── Job Type (Full-time, Part-time, Contract, Internship)
│   │   │   ├── Remote (On-site, Remote, Hybrid)
│   │   │   ├── Salary Range
│   │   │   ├── Industry
│   │   │   ├── Job Function
│   │   │   └── Easy Apply (LinkedIn apply)
│   │   └── Sort (Most Relevant, Most Recent)
│   ├── Job Detail (split-pane: list + detail)
│   │   ├── Title, Company, Location
│   │   ├── Match Score ("How you match")
│   │   ├── Job Description
│   │   ├── Company Info (size, industry, followers)
│   │   ├── Who's Hiring (recruiter profile)
│   │   ├── Similar Jobs
│   │   ├── [Easy Apply] or [Apply on Company Site]
│   │   └── Save / Share
│   ├── Easy Apply Flow
│   │   ├── Resume (pre-populated from profile)
│   │   ├── Contact Info (pre-filled)
│   │   ├── Screening Questions
│   │   ├── Cover Letter (optional)
│   │   └── Submit
│   ├── My Jobs
│   │   ├── Applied
│   │   ├── Saved
│   │   ├── Interview Prep
│   │   ├── Job Alerts
│   │   └── Salary Insights
│   ├── Career Interests (signal to recruiters)
│   │   ├── Open to Work (banner)
│   │   ├── Desired Titles
│   │   ├── Location Preferences
│   │   └── Visibility (recruiters only, all members)
│   └── Post a Job (for employers)
├── Messaging
│   ├── Conversation List
│   ├── Chat View
│   │   ├── Text Messages
│   │   ├── Files / Images
│   │   ├── GIFs
│   │   ├── Voice Messages
│   │   ├── Video Call
│   │   └── InMail (for non-connections, premium)
│   ├── Connection Requests with Messages
│   ├── Sponsored InMail (from recruiters)
│   └── Focused / Other (inbox tabs)
├── Notifications
│   ├── Reactions / Comments on Posts
│   ├── Connection Requests
│   ├── Job Recommendations
│   ├── Profile Views
│   ├── Work Anniversaries / Birthdays
│   ├── News / Trending
│   └── Recruiter Messages
├── Profile
│   ├── Cover Photo + Profile Photo
│   ├── Headline (title + company)
│   ├── About (summary)
│   ├── Open to Work / Hiring / Providing Services (badges)
│   ├── Featured (pinned posts, articles, links)
│   ├── Activity (recent posts, comments)
│   ├── Experience (jobs with dates, descriptions)
│   ├── Education
│   ├── Licenses & Certifications
│   ├── Skills (endorsements)
│   ├── Recommendations (given/received)
│   ├── Accomplishments (publications, patents, honors)
│   ├── Interests (following companies, influencers)
│   └── Analytics (profile views, post impressions, search appearances)
├── Company Pages
│   ├── Overview (about, specialties, size, headquarters)
│   ├── Posts
│   ├── Jobs (open positions)
│   ├── People (employees at company)
│   ├── Life (culture, employee stories)
│   └── Follow
├── LinkedIn Learning
│   ├── Course Catalog
│   ├── My Learning
│   ├── Skill Assessments
│   ├── Certificates
│   └── Learning Paths
├── Creator Tools
│   ├── Newsletter (create + subscribers)
│   ├── LinkedIn Live (streaming)
│   ├── Events (create + host)
│   ├── Analytics (post performance, audience)
│   └── Creator Mode (reorders profile)
├── Sales Navigator (Premium)
│   ├── Lead Search (advanced filters)
│   ├── Account Lists
│   ├── InMail Credits
│   └── Relationship Intelligence
├── Recruiter (Premium)
│   ├── Talent Search (boolean + filters)
│   ├── InMail
│   ├── Talent Pipeline (Kanban)
│   ├── Job Posts
│   └── Analytics
├── Settings & Privacy
│   ├── Account (email, password, 2FA)
│   ├── Visibility (profile, connections, activity)
│   ├── Communications (frequency, types)
│   ├── Data Privacy
│   ├── Advertising Preferences
│   └── Subscription (Premium, Learning, Sales Nav, Recruiter)
└── Premium Plans
    ├── Career (job insights, InMail)
    ├── Business (unlimited search, company insights)
    ├── Sales Navigator
    ├── Recruiter Lite
    └── LinkedIn Learning
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Nav** | Fixed header | Logo, Search, Home, Network, Jobs, Messaging (badge), Notifications (badge), Me, Work Grid |
| **Work Grid** | Dropdown from "Work" | Quick links to all LinkedIn products (Learning, Sales Nav, Post a Job, etc.) |
| **Search** | Universal top bar | Search people, jobs, companies, posts, groups |
| **Jobs Split Pane** | List + detail (desktop) | Click job in list → detail loads right |
| **Profile Sections** | Vertical scroll with section anchors | Experience, Education, Skills, etc. |
| **Messaging** | Right-side panel (desktop) | Persistent chat panel, overlays on any page |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Member | name, headline, photo, location, industry, connections_count, summary, experience[], education[], skills[], recommendations[] | has Posts, Connections, Applications |
| Post | author, type (text/image/video/article/poll/document), content, reactions{}, comments[], shares, impressions, created_at | belongs to Member or Company |
| Job | title, company, location, remote_policy, type, salary_range, description, requirements[], posted_at, applicants_count, easy_apply | belongs to Company |
| Application | job, member, resume, cover_letter, answers[], status, applied_at | connects Member and Job |
| Company | name, logo, industry, size, headquarters, description, followers, employees[] | has Jobs, Posts |
| Connection | member_a, member_b, connected_at | between Members |
| Message | sender, recipient, body, attachments[], read, type (standard/inmail) | between Members |
| Group | name, description, members_count, rules | has Posts, Members |
| Event | title, organizer, date, location, type (online/in-person), attendees | has RSVPs |
| Skill | name, endorsements_count, assessments_passed | belongs to Member |
| Recommendation | recommender, recommendee, relationship, text | between Members |

### Connection Degree
```
1st degree: direct connections
2nd degree: connections of connections
3rd degree: connections of 2nd-degree connections
Out of network: no connection path
```

## User Flows

### Job Search & Easy Apply
```
Jobs → Search "Product Manager, San Francisco" → Filter (Remote, Senior, $150K+) → Browse Results → Click Job → Review Match Score → [Easy Apply] → Resume Pre-filled → Answer 3 Questions → Submit → Track in "Applied"
```

### Network & Engage
```
Feed → See Post from Connection → Like (Insightful) → Comment → View Their Profile → [Connect] → Add Note → Sent → They Accept → Now 1st Degree
```

### Open to Work
```
Profile → [Open to Work] → Set Titles (Product Manager, Head of Product) → Location (SF Bay Area, Remote) → Visibility: Recruiters Only → Save → "#OpenToWork" Badge on Photo (optional) → Recruiter InMails Start Coming
```

### Post Content
```
Feed → [Start a Post] → Write Insight → Add Image → Add Hashtags → [Post] → Track Impressions → Respond to Comments → Check Analytics
```

## URL / Route Structure

```
/feed                          → Home Feed
/mynetwork                     → My Network
/jobs                          → Jobs Home
/jobs/search/?keywords=:q      → Job Search Results
/jobs/view/:id                 → Job Detail
/jobs/tracker                  → Applied Jobs
/messaging                     → Messaging
/notifications                 → Notifications
/in/:slug                      → Member Profile
/company/:slug                 → Company Page
/company/:slug/jobs            → Company Jobs
/company/:slug/people          → Company Employees
/groups/:id                    → Group
/events/:id                    → Event
/learning                      → LinkedIn Learning
/learning/courses/:slug        → Course
/pulse/:slug                   → Article
/sales                         → Sales Navigator
/talent                        → Recruiter
/settings                      → Settings & Privacy
/premium                       → Premium Plans
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| People | Name, title, company, school, keyword | Connection Degree, Location, Current Company, Industry, School | Relevance |
| Jobs | Title, keyword, company | Location, Remote, Date Posted, Experience, Type, Salary, Easy Apply, Company Size | Most Relevant, Most Recent |
| Companies | Name, industry | Size, Location, Industry | Followers, Name |
| Content | Post text, hashtag | Date, Author, Type | Relevance, Recent |
| Groups | Group name, topic | Size, Activity | Relevance |

## Responsive Behavior

| Breakpoint | Feed | Jobs | Profile | Messaging |
|------------|------|------|---------|-----------|
| Desktop (≥1024px) | Feed + left/right sidebar | Split pane (list + detail) | Full sections | Overlay panel + full page |
| Tablet (768–1023px) | Feed + minimal sidebar | List, detail on click | Full page | Full page |
| Mobile (<768px) | Feed only, bottom nav | Card list | Scrollable sections | Full page chat |

### LinkedIn-Specific UX
- Profile completeness meter (drives profile enrichment)
- "Who viewed your profile" (premium insight)
- Easy Apply: 1-click application from profile data
- Connection degree badges (1st, 2nd, 3rd)
- Endorsement skill badges with assessment verification
- Content creator mode (reorders profile for audience building)
- InMail for reaching non-connections
- "Open to Work" badge visible to recruiters or everyone
- Real-time notification for profile views, job matches

## Access Control

| Feature | Basic (Free) | Premium Career | Premium Business | Sales Navigator | Recruiter |
|---------|-------------|---------------|-----------------|----------------|-----------|
| Feed & Post | ✅ | ✅ | ✅ | ✅ | ✅ |
| Job Search | ✅ | ✅ + insights | ✅ | ✅ | ✅ |
| Easy Apply | ✅ | ✅ + featured | ✅ | ✅ | ✅ |
| Profile Views | 5 recent | Full list | Full list | Advanced | Advanced |
| InMail | — | 5/mo | 15/mo | 50/mo | 150/mo |
| Search Filters | Basic | Advanced | Advanced | Advanced boolean | Advanced boolean |
| Learning | Limited | ✅ | ✅ | ✅ | ✅ |
| Applicant Insights | — | ✅ | ✅ | — | ✅ |
| Lead Lists | — | — | — | ✅ | — |
| Talent Pipeline | — | — | — | — | ✅ |
