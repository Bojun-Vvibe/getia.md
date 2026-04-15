---
brand: Discord
tagline: "Your place to talk. Community-first voice, video, and text chat for gaming and beyond."
category: Messaging
website: https://discord.com
---

# Discord — Information Architecture

## Overview

Discord is a community-centric communication platform originally built for gamers, now used broadly for communities, DAOs, study groups, and creator spaces. The mental model is **servers (communities) with categorized channels** — each server is an independent community space containing text channels, voice channels, forum channels, and stage channels organized into categories. Discord differentiates through always-on voice channels (join/leave instead of call/hang-up), rich role-based permissions, bots/app ecosystem, and a social layer with user profiles, friends, and status.

## Site Map

```
├── Server List (left rail)
│   ├── Home (DMs + Friends)
│   ├── Server A (community)
│   ├── Server B
│   ├── + Create / Join Server
│   └── Discover Public Servers
├── Home (DM Hub)
│   ├── Friends
│   │   ├── Online
│   │   ├── All Friends
│   │   ├── Pending (incoming/outgoing)
│   │   ├── Blocked
│   │   └── Add Friend (username)
│   ├── Direct Messages
│   │   ├── 1:1 DMs
│   │   └── Group DMs (up to 10)
│   ├── Nitro (subscription)
│   ├── Shop (avatar decorations, profile effects)
│   └── Active Now (friends' activity)
├── Server View
│   ├── Server Header
│   │   ├── Server Name + Dropdown Menu
│   │   │   ├── Server Settings
│   │   │   ├── Create Channel / Category
│   │   │   ├── Create Event
│   │   │   ├── Notification Settings
│   │   │   ├── Privacy Settings
│   │   │   ├── Invite People
│   │   │   └── Leave Server
│   │   └── Server Banner (Nitro-boosted)
│   ├── Channel Sidebar
│   │   ├── Category 1 (collapsible group)
│   │   │   ├── #text-channel
│   │   │   ├── #text-channel-2
│   │   │   ├── 🔊 voice-channel (shows connected users)
│   │   │   └── 📋 forum-channel
│   │   ├── Category 2
│   │   │   ├── #announcements (read-only)
│   │   │   ├── 🔊 music-lounge
│   │   │   └── 🎙 stage-channel
│   │   └── (uncategorized channels)
│   ├── Text Channel View
│   │   ├── Channel Header (name, topic, pins, threads, search, members)
│   │   ├── Message Stream
│   │   │   ├── Text Messages (Markdown-formatted)
│   │   │   ├── Embeds (rich link previews, bot embeds)
│   │   │   ├── Attachments (images, videos, files — up to 8MB/25MB/500MB by plan)
│   │   │   ├── Reactions (emoji + custom server emoji)
│   │   │   ├── Stickers
│   │   │   ├── Replies (quote-style)
│   │   │   ├── Thread Indicators
│   │   │   ├── Bot Messages (embeds, buttons, select menus, modals)
│   │   │   └── System Messages (join, boost, pin)
│   │   ├── Message Composer
│   │   │   ├── Rich text (Markdown: **bold**, *italic*, ~~strike~~, `code`, > quote)
│   │   │   ├── @mentions (user, role, @everyone, @here)
│   │   │   ├── #channel links
│   │   │   ├── Emoji picker (Unicode + custom + animated Nitro)
│   │   │   ├── Sticker picker
│   │   │   ├── GIF picker (Tenor)
│   │   │   ├── File upload (drag & drop or button)
│   │   │   ├── Apps (slash commands from bots)
│   │   │   └── Voice message (record & send)
│   │   └── Pinned Messages (right panel)
│   ├── Voice Channel
│   │   ├── Join Voice (click to join, always-on)
│   │   ├── Connected Users (avatars, speaking indicator)
│   │   ├── Screenshare (individual streams)
│   │   ├── Video (camera toggle)
│   │   ├── Voice Controls (mute, deafen, disconnect)
│   │   └── Text Chat (in-voice text channel)
│   ├── Forum Channel
│   │   ├── Post List (title, tags, reply count)
│   │   ├── Create Post (title + body + tags)
│   │   ├── Post Detail (threaded discussion)
│   │   ├── Tags (filterable)
│   │   └── Sort (latest activity, date created)
│   ├── Stage Channel
│   │   ├── Speakers (on stage)
│   │   ├── Audience
│   │   ├── Raise Hand (request to speak)
│   │   └── Stage Event Schedule
│   ├── Threads
│   │   ├── Active Threads list
│   │   ├── Thread Detail
│   │   │   ├── Thread name
│   │   │   ├── Messages
│   │   │   └── Auto-archive (1h/24h/3d/7d)
│   │   └── Create Thread (from message or standalone)
│   ├── Events
│   │   ├── Scheduled Events
│   │   ├── Event Detail (location: voice/stage/external)
│   │   ├── Interested / Attending
│   │   └── Create Event
│   ├── Members List (right panel)
│   │   ├── By Role (color-coded)
│   │   ├── Online / Offline
│   │   └── Member Profile (click → popup)
│   └── Server Settings (admin)
│       ├── Overview (name, icon, banner)
│       ├── Roles (permissions matrix per role)
│       ├── Emoji (custom server emoji)
│       ├── Stickers (custom stickers)
│       ├── Soundboard (custom sounds)
│       ├── Moderation (AutoMod, verification level)
│       ├── Audit Log (all admin actions)
│       ├── Integrations (bots, webhooks)
│       ├── Community (enable community features)
│       ├── Onboarding (welcome screens, default channels)
│       ├── Server Insights (analytics)
│       └── Bans, Invites, Vanity URL
├── User Settings
│   ├── My Account (username, email, password, 2FA)
│   ├── Profiles (display name, avatar, banner, bio, connections)
│   ├── Privacy & Safety
│   ├── Authorized Apps
│   ├── Devices
│   ├── Connections (Spotify, Steam, GitHub, Xbox, PlayStation...)
│   ├── Friend Requests Settings
│   ├── Notifications
│   ├── Appearance (dark/light, compact/cozy, font scaling)
│   ├── Accessibility
│   ├── Voice & Video (input/output, noise suppression)
│   ├── Text & Images (emoji, stickers, link previews)
│   ├── Keybinds (push-to-talk, mute, etc.)
│   ├── Language
│   ├── Streamer Mode (hide sensitive info)
│   └── Activity Privacy
├── Discover
│   ├── Public Servers (by category: Gaming, Education, Music, Science...)
│   ├── Featured Servers
│   └── Server search
└── Nitro (Subscription)
    ├── Animated avatars & banners
    ├── Custom emoji everywhere
    ├── Higher upload limits
    ├── Server boosts
    ├── HD video streaming
    └── Custom profiles
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Server Rail** | Left icon column (72px) | Server icons stacked; Home (DMs) at top; unread/mention badges; drag to reorder; folders for grouping servers |
| **Channel Sidebar** | Second column (240px) | Categories → channels; voice channels show connected users; muted channels dimmed |
| **Chat/Voice View** | Main content area | Text channel messages or voice channel UI |
| **Members Panel** | Right sidebar (240px, toggle) | Role-sorted member list with presence |
| **Thread Panel** | Right sidebar (replaces members) | Thread messages |
| **Quick Switcher** | ⌘K | Jump to channel, DM, or server |
| **User Area** | Bottom of channel sidebar | Username, status, mic/headphone/settings buttons |
| **Context Menu** | Right-click | Message actions, channel actions, user actions |

### Server Rail Organization
```
[Home DM Button]
[Separator]
Server Folder: "Gaming" ▾
  ├── 🎮 Server A
  └── 🎮 Server B
Server Folder: "Work" ▾
  ├── 💼 Server C
  └── 💼 Server D
Standalone Server E
Standalone Server F
[Separator]
[+ Add Server]
[🔍 Discover]
```

### Voice/User Controls (Bottom Bar)
```
┌─────────────────────────────────┐
│ 🔊 Connected: voice-channel    │
│    (Server Name)    🔇 📱 ☎ ⚙   │
├─────────────────────────────────┤
│ 👤 Username#1234   🎤 🎧 ⚙      │
└─────────────────────────────────┘
Mic Mute | Deafen | User Settings
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Server (Guild) | name, icon, banner, boost_level, member_count, verification_level, features[] | has many Channels, Roles, Members, Emoji, Events |
| Category | name, position | groups Channels within Server |
| Channel | name, type, topic, position, slowmode, nsfw, permissions_overwrites[] | belongs to Category and Server |
| Message | content (Markdown), author, timestamp, edited, embeds[], attachments[], reactions[], referenced_message (reply) | belongs to Channel |
| Thread | name, parent_channel, auto_archive_duration, message_count, locked | child of Channel; has Messages |
| Forum Post | title, tags[], applied_tags[] | special Thread in Forum Channel |
| Role | name, color, permissions (bitfield), hoist (show separately), mentionable, icon | many-to-many with Members |
| Member | user_ref, nickname, roles[], joined_at, boosting_since | belongs to Server |
| Emoji | name, animated, managed (bot-owned) | belongs to Server |
| Event | name, description, start_time, end_time, entity_type (stage/voice/external), location | belongs to Server |
| Webhook | name, avatar, channel, url | belongs to Channel |
| Bot/Application | name, commands[], interactions | installed in Server |

### Channel Types
```
GUILD_TEXT (0)          → Standard text channel
DM (1)                  → Direct message
GUILD_VOICE (2)         → Voice channel (always-on)
GROUP_DM (3)            → Group DM (up to 10)
GUILD_CATEGORY (4)      → Channel category
GUILD_ANNOUNCEMENT (5)  → Announcement channel (follow in other servers)
GUILD_STAGE_VOICE (13)  → Stage channel (speaker/audience model)
GUILD_FORUM (15)        → Forum channel (structured posts)
GUILD_MEDIA (16)        → Media channel (gallery-focused)
```

### Permission System (Unique Complexity)
```
Server-level defaults → Role permissions → Category overwrites → Channel overwrites → Per-user overwrites
(Each layer can ALLOW, DENY, or INHERIT each permission)
```

## User Flows

### Join Voice Channel
```
Click voice channel → Instantly connected → Others see you joined → Talk freely → Click "Disconnect" when done
(No ringing, no calling — just join/leave)
```

### Start a Thread
```
Hover message → "Create Thread" → Name the thread → Discuss in side panel → Thread auto-archives after inactivity
```

### Forum Post
```
Forum channel → "New Post" → Title + Body + Select Tags → Post → Community replies in thread → Tags for filtering
```

### Stage Event
```
Schedule Event → Set date, description → Start Stage → Invite speakers → Audience raises hand → Moderate speakers → End stage
```

### Server Onboarding
```
New member joins → Onboarding wizard (select interests) → Auto-assigned roles → Default channels shown → Welcome message → Community guidelines acknowledged
```

### Bot Interaction
```
Type /command → Autocomplete shows bot commands → Select → Fill parameters → Submit → Bot responds with embed/buttons → Click buttons for actions
```

## URL / Route Structure

```
/                                          → Home (Friends + DMs)
/channels/@me                              → DM list
/channels/@me/:dmId                        → DM conversation
/channels/:serverId/:channelId             → Server channel
/channels/:serverId/:channelId/threads/:id → Thread
/channels/:serverId/:channelId?message_id=:id → Jump to specific message
/guild-discovery                           → Discover servers
/store                                     → Nitro / Shop
/settings                                  → User Settings
/invite/:code                              → Server invite link
/events/:serverId/:eventId                 → Scheduled event
```

### Invite Links
```
https://discord.gg/:code              → Server invite (short)
https://discord.com/invite/:code      → Server invite (full)
https://discord.gg/:vanityUrl         → Vanity invite (boosted servers)
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Server Search | Messages in current server | from: (user), in: (channel), has: (link/embed/file/image/video/sound/sticker), before:/after:/on: (date), mentions: (user), pinned: true | Relevance, Newest, Oldest |
| Global | Messages across all servers + DMs | Same operators | Relevance, Date |
| Channel | Current channel only | ⌘F local filter | Position |
| Forum | Post titles and tags | Tag filter, Sort: latest/date created | Activity, Date |
| Members | Username, display name, role | Role filter | Name, Join Date |

### Search Operators
```
from:username               → Messages from specific user
in:channel-name             → Messages in specific channel
has:link                    → Messages containing links
has:image                   → Messages with images
before:2024-01-01           → Messages before date
mentions:username            → Messages mentioning user
pinned:true                 → Pinned messages
```

## Responsive Behavior

| Breakpoint | Layout | Voice |
|------------|--------|-------|
| Desktop (≥1024px) | Server rail + channel sidebar + chat + members panel | Full voice UI with screen share |
| Tablet (768–1023px) | Server rail + chat (sidebar as overlay) | Voice with video/screenshare |
| Mobile (<768px) | Bottom tabs: Servers, DMs, Notifications, Profile | Voice overlay, minimal controls |

### Mobile App
- Swipe right for server/channel list
- Swipe left for member list
- Long-press message for actions
- Voice channel: floating overlay while browsing
- Video/screenshare in voice
- Push-to-talk option
- Widget: voice channel status, unread count

## Access Control

Discord's permission system is one of the most granular among consumer apps:

| Role Level | Permissions |
|------------|------------|
| @everyone (default) | Base permissions for all server members |
| Custom Roles | Stackable permissions (additive); channel overwrites (allow/deny) |
| Moderator | Kick, ban, manage messages, timeout, manage threads |
| Admin | All permissions except owner-only actions |
| Server Owner | Full control including delete server, transfer ownership |

### Key Permissions (50+ granular)
```
General: View Channels, Manage Channels, Manage Roles, Manage Server, Create Invite
Membership: Kick Members, Ban Members, Timeout Members
Text: Send Messages, Embed Links, Attach Files, Mention Everyone, Manage Messages, Use External Emoji
Voice: Connect, Speak, Video, Mute Members, Deafen Members, Move Members, Use Voice Activity, Priority Speaker
Stage: Request to Speak
Events: Create Events, Manage Events
```

### Channel Permission Overwrites
Each channel can override role permissions with per-role or per-user overrides:
- **Allow**: Grants permission regardless of role settings
- **Deny**: Revokes permission regardless of role settings
- **Inherit**: Falls back to role and server settings

### Moderation Tools
- **AutoMod**: Regex/keyword filters, mention spam, flagged messages for review
- **Verification Levels**: None, Low (email), Medium (5 min registered), High (10 min member), Highest (phone verified)
- **Timeout**: Temporarily restrict member from sending messages/reacting/joining voice
- **Slow Mode**: Rate-limit messages per user per channel (5s to 6h)
