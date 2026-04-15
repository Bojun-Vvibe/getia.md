---
brand: Loom
tagline: Say it with video — async video messaging for work
category: Productivity
website: https://loom.com
---

# Information Architecture — Loom

## Overview

Loom is an async video messaging platform that lets users record screen, camera, or both, and instantly share a link. The IA is deliberately simple — the core loop is Record → Share → Watch → React. The library organizes recordings into folders, while viewer analytics (who watched, watch %, CTA clicks) turn passive video into a measurable communication tool. Loom AI adds automatic summaries, chapters, and action items to every recording, transforming video into structured knowledge.

## Site Map

```
loom.com
├── My Library
│   ├── My Videos
│   ├── Shared with Me
│   ├── Starred
│   ├── Archive
│   └── Trash
├── Workspace Library
│   ├── Folders
│   │   └── [Folder] → Videos
│   ├── All Videos
│   └── Tags
├── Video Player Page
│   ├── Video Player
│   ├── AI Summary
│   ├── Transcript (auto-generated)
│   ├── Chapters (auto or manual)
│   ├── Comments (timestamped)
│   ├── Emoji Reactions
│   ├── CTA Button
│   ├── Tasks / Action Items
│   └── Viewer Insights
├── Recorder
│   ├── Screen + Camera
│   ├── Screen Only
│   ├── Camera Only
│   ├── Recording Controls (pause, restart, drawing tools)
│   ├── Annotation Tools (arrows, shapes, text)
│   └── Blur / Redact (privacy)
├── Loom AI
│   ├── Auto-generated Summary
│   ├── Auto Chapters
│   ├── Action Items Extraction
│   ├── Title Suggestions
│   └── Filler Word Removal
├── Settings
│   ├── Account
│   ├── Workspace
│   ├── Recording Defaults
│   ├── Notifications
│   ├── Integrations
│   ├── Custom Branding
│   └── Security (SSO, password policies)
└── Marketing Site
    ├── Use Cases (Sales, Engineering, Product, Support, HR)
    ├── Enterprise
    ├── Pricing
    ├── Resources (Blog, Guides, Webinars)
    └── Customers
```

## Navigation Model

- **Left sidebar:** My Library, Workspace Library, Folders tree, Shared with Me, Starred, Archive
- **Top bar:** Search, Record button (primary CTA), Notifications, Account menu, Workspace switcher
- **Video page:** Player with transcript sidebar, AI summary above comments, viewer insights in analytics tab
- **Recorder:** Desktop app or Chrome extension; floating recording controls overlay with annotation tools
- **Mobile:** View-only with comment and reaction; recording via dedicated mobile app
- **Keyboard shortcuts:** R to record, L to open library, / to search

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, members, plan, branding, SSO config | → Folders, Videos, Members |
| Folder | name, privacy (workspace/private), color | → Videos, Sub-folders, Workspace |
| Video (Loom) | title, thumbnail, duration, recording type, created date, views count, password | → Transcript, Comments, Viewer Analytics, CTA, AI Summary |
| Transcript | auto-generated text, editable, timestamps, language | → Video |
| Chapter | title, start time, auto-generated flag | → Video |
| Comment | text, timestamp, author, emoji reactions, resolved flag | → Video |
| CTA | type (link/button), text, URL, click count | → Video |
| Viewer Insight | viewer identity, watch %, watch date, CTA clicked, location | → Video |
| AI Summary | generated text, action items[], key topics[] | → Video |
| Tag | name, color | → Videos (many-to-many) |
| Integration | type (Slack/Notion/Jira/etc.), config, status | → Workspace |

## User Flows

### Record and Share
```
Click Record → Choose screen+camera → Record → Stop → Auto-upload → Loom AI generates summary → Copy link → Paste in Slack/email
```

### Review a Loom
```
Open link → Read AI summary → Watch video → Read transcript → Add timestamped comment or emoji reaction → Click CTA if present
```

### Analyze Engagement
```
My Library → Select video → Analytics tab → View total views, unique viewers, avg watch %, completion rate → Check CTA click rate → Export report
```

### Organize Workspace
```
Workspace Library → Create Folder → Drag videos into folder → Set folder privacy → Tag videos → Share folder link with team
```

### Edit and Trim
```
My Library → Select video → Edit → Trim start/end → Remove filler words (AI) → Add CTA → Update thumbnail → Save → Link stays the same
```

## URL / Route Structure

```
loom.com/                                    # Marketing homepage
loom.com/looms/videos                        # My Videos library
loom.com/looms/shared                        # Shared with Me
loom.com/looms/starred                       # Starred videos
loom.com/looms/archive                       # Archived videos
loom.com/looms/folders/{folder_id}           # Folder view
loom.com/share/{video_id}                    # Public/shared video player
loom.com/share/{video_id}?t={seconds}        # Video at specific timestamp
loom.com/looms/{video_id}/analytics          # Video analytics
loom.com/looms/{video_id}/edit               # Video editor
loom.com/looms/{video_id}/transcript         # Transcript view
loom.com/spaces/{workspace_id}               # Workspace library
loom.com/spaces/{workspace_id}/members       # Workspace members
loom.com/settings                            # Account settings
loom.com/settings/workspace                  # Workspace settings
loom.com/settings/integrations               # Integration settings
loom.com/settings/recording                  # Recording defaults
loom.com/settings/notifications              # Notification preferences
loom.com/pricing                             # Pricing page
loom.com/enterprise                          # Enterprise info
loom.com/use-cases/{slug}                    # Use case pages
loom.com/blog                                # Blog
loom.com/blog/{slug}                         # Blog article
loom.com/resources                           # Resources hub
loom.com/customers                           # Customer stories
loom.com/download                            # Download desktop/mobile apps
loom.com/developers                          # API documentation
loom.com/security                            # Security & compliance info
loom.com/help                                # Help center
```

## Search & Filter

- **Global search:** Search videos by title, transcript content, AI summary, and folder name
- **Library filters:** Filter by recording type (screen, camera, both), date range, duration, creator
- **Sort:** By date created, last viewed, title, duration, views
- **Transcript search:** Within a video, search transcript text to jump to a timestamp
- **Workspace search:** Admins can search across all workspace videos
- **Tag filtering:** Filter by assigned tags in library view
- **Viewer search:** In analytics, search viewers by name or email

## Loom AI Features

- **Auto Summary:** AI generates a written summary of every recording, displayed above the video
- **Auto Chapters:** Segments video into logical chapters with timestamps for quick navigation
- **Action Items:** Extracts tasks and follow-ups mentioned in the recording
- **Title Suggestion:** Proposes a title based on video content
- **Filler Word Removal:** Silences "um," "uh," and pauses for a polished recording
- **Auto CTA:** Suggests relevant call-to-action based on video content
- **Multi-language Transcription:** Supports 50+ languages for automatic transcription
- **Closed Captions:** Always-on captions generated from transcript

## Video Player Experience

- **Playback speed:** 0.5x, 1x, 1.25x, 1.5x, 2x
- **Picture-in-Picture:** Pop-out player while browsing other tabs
- **Keyboard shortcuts:** Space (play/pause), ← → (seek), F (fullscreen)
- **Transcript sync:** Highlighted text follows playback; click any line to seek
- **Chapter navigation:** Click chapter markers on timeline or sidebar list
- **Reactions timeline:** Emoji reactions appear at the timestamp where they were added
- **Viewer engagement graph:** Heatmap showing which parts of the video got rewatched or skipped
- **Download:** MP4 download for offline viewing (if enabled by creator)
- **Embed:** Responsive iframe embed for external sites, wikis, LMS

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full library + video player with transcript sidebar |
| Tablet (768–1023px) | Single-column library, transcript below video |
| Mobile (< 768px) | View-only (watch, comment, react); recording via mobile app; bottom nav (Library, Record, Notifications) |
| Chrome Extension | Quick record popup; recent recordings list; copy link |
| Desktop App | System tray access; global shortcut to record; notification on view |

## Access Control

| Role | Capabilities |
|------|-------------|
| Workspace Admin | Manage members, billing, workspace settings, all content, SSO configuration |
| Creator (member) | Record, upload, edit own videos, organize into folders, view analytics |
| Creator Lite | Record and share, limited editing features, basic analytics |
| Viewer (workspace) | View videos in workspace library, comment, react |
| External Viewer | Access via shared link, can comment if enabled, no library access |
| Password-protected | Requires password to view (per-video setting) |
| API Access | Programmatic video management, webhook integrations |

## Integrations

| Integration | Behavior |
|-------------|----------|
| Slack | Auto-unfurl Loom links with thumbnail + transcript preview; record from Slack |
| Notion | Embed Loom videos inline; auto-expand with player |
| GitHub | Attach Loom to PRs and issues for visual context |
| Jira | Link Loom to tickets; embed in descriptions |
| Google Workspace | Insert Loom in Docs, Slides; Gmail compose integration |
| Salesforce | Embed in records; track engagement per prospect |
| HubSpot | Embed in emails; track viewer engagement in CRM |
| Zapier / API | Automate workflows; webhook on new recording, view, comment |
