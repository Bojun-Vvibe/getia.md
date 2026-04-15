---
brand: Slack
tagline: "Where work happens. Channel-based messaging for teams and organizations."
category: Messaging
website: https://slack.com
---

# Slack — Information Architecture

## Overview

Slack is a channel-based workplace messaging platform built around the **workspace → channel → message** hierarchy. The mental model is organized conversations — instead of a single chat list, communication is structured into public/private channels by topic, team, or project, with direct messages for person-to-person communication. Slack differentiates through its integration ecosystem (2,600+ apps), threaded conversations, Slack Connect (cross-organization channels), Huddles (lightweight audio), and Workflow Builder for no-code automation.

## Site Map

```
├── Workspace Switcher (left icon rail)
│   ├── Workspace A
│   ├── Workspace B
│   └── + Add Workspace
├── Home Tab
│   ├── Catch-Up Summary (AI-generated)
│   ├── Suggested Actions
│   └── App Home Tabs (bot/app surfaces)
├── DMs (Direct Messages)
│   ├── Recent DMs
│   ├── Multi-person DMs (group)
│   └── Self DM (personal scratchpad)
├── Activity
│   ├── Mentions & Reactions
│   ├── Threads (all threads I'm in)
│   ├── Unreads (unread channels summary)
│   └── Saved Items (bookmarked messages)
├── Channels
│   ├── Starred Channels (pinned to top)
│   ├── Public Channels (joined)
│   ├── Private Channels (joined)
│   ├── Slack Connect Channels (external orgs)
│   ├── Browse Channels (discover)
│   └── Create Channel
├── Channel View
│   ├── Channel Header
│   │   ├── Channel Name + Topic
│   │   ├── Members Count
│   │   ├── Huddle (audio/video)
│   │   ├── Pin / Bookmark bar
│   │   ├── Canvas (collaborative doc)
│   │   └── Search in Channel
│   ├── Message Stream
│   │   ├── Text Messages (rich text, Markdown-like)
│   │   ├── Files (images, documents, code snippets)
│   │   ├── Code Blocks (with syntax highlighting)
│   │   ├── Reactions (emoji)
│   │   ├── Thread Indicators (reply count)
│   │   ├── Bot / App Messages (structured blocks)
│   │   ├── Workflow Messages (forms, approvals)
│   │   ├── Link Unfurls (previews)
│   │   └── System Messages (joined, topic changed)
│   ├── Message Composer
│   │   ├── Rich Text Editor (bold, italic, lists, code, quote, link)
│   │   ├── @mentions (person, channel, @here, @channel, @everyone)
│   │   ├── /slash commands
│   │   ├── Emoji Picker (custom emoji support)
│   │   ├── File Upload (drag & drop)
│   │   ├── Audio/Video Clips (record & send)
│   │   ├── Schedule Send
│   │   └── Formatting Toolbar
│   └── Channel Details Panel (right)
│       ├── About (description, topic, created)
│       ├── Members List
│       ├── Integrations (apps, webhooks)
│       ├── Canvases
│       ├── Bookmarks
│       ├── Pinned Messages
│       ├── Files Shared
│       └── Channel Settings
├── Threads Panel
│   ├── All Threads (from all channels)
│   ├── Thread Detail
│   │   ├── Parent Message
│   │   ├── Replies
│   │   └── "Also send to channel" toggle
│   └── Unread Threads (badge)
├── Huddles
│   ├── Start Huddle (lightweight audio call)
│   ├── Screen Share
│   ├── Video (optional toggle)
│   ├── Shared Notes (live during huddle)
│   ├── Invite Others
│   └── Huddle Thread (persistent chat)
├── Canvas (collaborative docs)
│   ├── Channel Canvas
│   ├── DM Canvas
│   ├── Standalone Canvas
│   └── Canvas Elements (text, checklists, media, embeds)
├── Search
│   ├── Messages
│   ├── Files
│   ├── Channels
│   ├── People
│   └── Apps
├── Automations
│   ├── Workflow Builder
│   │   ├── Triggers (emoji reaction, form submitted, schedule, webhook)
│   │   ├── Steps (send message, create channel, collect info, external service)
│   │   └── Published Workflows
│   └── Slack Apps (custom bots, slash commands)
├── Slack Connect
│   ├── External Channel Invitations
│   ├── Shared Channels (with other organizations)
│   └── DMs with External Users
├── Apps & Integrations
│   ├── App Directory
│   ├── Installed Apps
│   ├── Custom Integrations (webhooks, bots)
│   └── App Home Tabs
├── Settings & Administration
│   ├── Preferences
│   │   ├── Notifications (per-channel, schedule, keywords)
│   │   ├── Themes & Appearance (sidebar colors, dark mode)
│   │   ├── Messages & Media (names, emoji style, inline media)
│   │   ├── Accessibility
│   │   ├── Language & Region
│   │   ├── Advanced (performance, links)
│   │   └── Audio & Video (huddle settings)
│   └── Workspace Admin
│       ├── Members & Guests
│       ├── User Groups (@team-name)
│       ├── Channel Management (default channels, prefixes)
│       ├── Permissions (who can create channels, invite, etc.)
│       ├── Authentication (SSO/SAML, 2FA)
│       ├── Message Retention & Deletion Policies
│       ├── Compliance (DLP, eDiscovery, exports)
│       ├── App Management
│       ├── Billing
│       └── Slack AI Settings
└── Slack AI (paid feature)
    ├── Channel Summaries (AI recap)
    ├── Thread Summaries
    ├── Search Answers (natural language)
    └── Catch-Up (daily digest)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Workspace Rail** | Left icon column (36px) | Workspace icons stacked vertically; notifications badge per workspace |
| **Channel Sidebar** | Second column (260px) | Home, DMs, Activity, Channels (organized by sections), Apps |
| **Chat View** | Main content area (flex) | Message stream, composer at bottom |
| **Thread Panel** | Right side panel | Opens inline without leaving channel |
| **Details Panel** | Right side panel (replaces thread) | Channel info, members, files, pins |
| **Quick Switcher** | ⌘K | Jump to any channel, DM, or person |
| **Slash Commands** | Type `/` in composer | Run app commands, set status, search |
| **Message Actions** | Hover toolbar | React, reply in thread, share, pin, bookmark, more (...) |

### Sidebar Structure
```
[Workspace Switcher Rail]
│
├── 🏠 Home
├── 💬 DMs
├── 🔔 Activity
├── ⋯ More (Canvases, Files, People, Apps)
─────────────
📌 Channels
  Sections (custom groupable):
  ├── ⭐ Starred
  │   #general
  │   #engineering
  ├── Team
  │   #team-ios
  │   #team-android
  ├── Projects
  │   #proj-redesign
  │   #proj-migration
  └── Other
      #random
      #announcements
─────────────
📱 Apps
  Slackbot
  GitHub
  Jira
─────────────
[+ Add channels]
```

### Channel Sections (Unique to Slack)
Users can organize channels into custom collapsible sections in the sidebar (e.g., "Starred", "Team", "Projects", "Clients"). This is a key IA feature for managing large workspaces with 100+ channels.

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, domain, icon, plan, settings | has many Channels, Members, Apps |
| Channel | name, topic, purpose, visibility (public/private), archived, shared (Slack Connect) | has many Messages, Members, Pins, Bookmarks, Canvases |
| Message | text (mrkdwn), blocks[] (Block Kit), user, timestamp, edited, reactions[], reply_count, reply_users[], files[] | belongs to Channel; can have Thread |
| Thread | parent_message, replies[], reply_count, last_reply | extends from Message |
| Reaction | emoji, users[] | belongs to Message |
| File | name, type, size, url, thumbnail, title, initial_comment | belongs to Message and Channel |
| User | display_name, real_name, avatar, status_emoji, status_text, timezone, role | belongs to Workspace |
| User Group | handle (@team-name), members[], channels[] | belongs to Workspace |
| App / Bot | name, icon, slash_commands[], home_tab, message_shortcuts | installed in Workspace |
| Canvas | title, content (blocks), shared_with | belongs to Channel or standalone |
| Huddle | channel, participants[], screen_share, notes | belongs to Channel |
| Workflow | name, trigger, steps[], published | belongs to Workspace |
| Bookmark | title, url, icon | belongs to Channel (pinned below header) |

### Message Formatting (mrkdwn + Block Kit)
```
*bold*  _italic_  ~strikethrough~  `code`  ```code block```
> blockquote
:emoji:  @user  #channel  @here @channel @everyone
• bulleted list    1. numbered list

Block Kit (structured messages):
  section, divider, image, context, actions (buttons, menus),
  input, header, rich_text, video
```

### Presence States
```
🟢 Active | 🟡 Away (idle >10 min) | ⛔ Do Not Disturb | ⚪ Offline
+ Custom status: emoji + text + expiry (e.g., 🏖 "On vacation until Friday")
```

## User Flows

### Send Message
```
Sidebar → Click channel → Type message → @mention if needed → Enter to send → Reactions appear
```

### Reply in Thread
```
Hover message → "Reply in thread" → Thread panel opens → Type reply → Toggle "Also send to #channel" if needed → Send
```

### Start Huddle
```
Channel header → 🎧 Huddle icon → Audio starts → Others join → Toggle video/screen share → Shared notes → Leave huddle
```

### Workflow (No-Code Automation)
```
Workflow Builder → New Workflow → Trigger: "Emoji reaction (✅) added" → Action: "Send DM to reactor" + "Update Google Sheet" → Publish → Team uses it
```

### Channel Discovery
```
Sidebar → Browse Channels → Search or scroll → Preview channel (description, member count, recent messages) → Join → Channel appears in sidebar
```

### Slack Connect (External)
```
Channel Settings → Invite External → Enter partner's email → Partner accepts → Shared channel established → Cross-org messaging
```

### Search
```
⌘G or Search bar → "from:@alice in:#engineering has:link after:2024-01-01" → Results with context → Click to jump to message in channel
```

## URL / Route Structure

```
/                                          → Last active channel
/client/:teamId/:channelId                → Channel view
/client/:teamId/:channelId/thread/:ts     → Thread view
/client/:teamId/:channelId/canvas         → Channel canvas
/archives/:channelId                       → Channel (web view)
/archives/:channelId/p:timestamp           → Specific message (permalink)
/files/:teamId                             → Files browser
/huddle/:channelId                         → Active huddle
/app                                       → App Home
/customize/emoji                           → Custom emoji manager
/admin                                     → Workspace admin
/admin/settings                            → Workspace settings
/admin/members                             → Member management
/admin/analytics                           → Usage analytics
/intl/apps                                 → App Directory
```

### Deep Links
```
slack://channel?team=:teamId&id=:channelId          → Open channel in app
slack://user?team=:teamId&id=:userId                → Open DM in app
https://:workspace.slack.com/archives/:channelId/p:timestamp → Message permalink
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Global (⌘G) | Messages, files, channels, people, apps | from: (person), in: (channel), has: (link/file/reaction/pin), before:/after:/on: (date), is: (saved/thread) | Relevance, Recent |
| Channel | Messages in current channel | ⌘F or Search in Channel | Date |
| Files | All shared files | Type, From, In Channel, Date | Date, Size |
| People | Name, display name, email | Status, Role | Name |

### Search Operators
```
from:@alice                   → Messages from Alice
in:#engineering               → Messages in #engineering
has:file                      → Messages with files
has::thumbsup:                → Messages with specific reaction
before:2024-06-01             → Messages before date
after:2024-01-01              → Messages after date
"exact phrase"                → Exact text match
from:me is:saved              → My saved messages
to:me                         → DMs sent to me
```

## Responsive Behavior

| Breakpoint | Layout | Behavior |
|------------|--------|----------|
| Desktop (≥1024px) | Workspace rail + sidebar + chat + thread/details panel | All panels visible, resizable |
| Tablet (768–1023px) | Sidebar + chat (thread as overlay) | Two-panel mode |
| Mobile (<768px) | Bottom tabs: Home, DMs, Mentions, Search, You | Single-panel stack navigation |

### Mobile App
- Swipe right for sidebar navigation
- Swipe left on channel for mute/leave
- Long-press message for actions
- Voice/video clip recording (hold to record)
- Huddle participation
- Push notifications with inline reply
- Widgets: unread count, recent DMs

## Access Control

| Role | Read Public | Read Private | Post | Manage Channels | Admin |
|------|------------|-------------|------|----------------|-------|
| Single-Channel Guest | One channel only | If invited | ✅ | — | — |
| Multi-Channel Guest | Invited channels | If invited | ✅ | — | — |
| Member | ✅ | If joined | ✅ | Create, archive own | — |
| Channel Admin | ✅ | If joined | ✅ | Edit channel settings | — |
| Workspace Admin | ✅ | ✅ (audit) | ✅ | All channels | Workspace settings |
| Workspace Owner | ✅ | ✅ | ✅ | ✅ | Full control, billing |
| Org Admin (Enterprise Grid) | All workspaces | ✅ | ✅ | ✅ | Cross-workspace policies |

### Channel Types
- **Public**: Any member can find and join; messages visible to all
- **Private**: Invite-only; hidden from browse; cannot be converted to public
- **Shared (Slack Connect)**: Visible to members of multiple organizations
- **Read-only (Announcement)**: Only specific people/apps can post
- **DM**: 1:1 or group (up to 9 people)

### Enterprise Grid
- **Organization-level**: Policies cascade across all workspaces
- **Channel types**: Org-wide channels spanning workspaces
- **DLP**: Data loss prevention policies
- **eDiscovery**: Legal hold and export
- **SCIM**: Automated user provisioning
