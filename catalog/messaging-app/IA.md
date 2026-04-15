# Messaging App — Information Architecture

## Overview

A real-time messaging platform (Slack, WhatsApp, Telegram, Discord style). The mental model is **conversations** — a list of chats on the left, active conversation on the right. Speed, reliability, and presence are essential.

## Site Map

```
├── Conversations List
│   ├── Direct Messages
│   ├── Group Chats
│   ├── Channels (public/private)
│   ├── Pinned Conversations
│   ├── Archived Conversations
│   └── Search Conversations
├── Conversation View
│   ├── Header (name, avatar, status, actions)
│   ├── Message Stream (infinite scroll up for history)
│   │   ├── Text Messages
│   │   ├── Media (images, videos, files)
│   │   ├── Voice Messages
│   │   ├── Reactions (emoji)
│   │   ├── Replies / Threads
│   │   ├── System Messages (joined, left, pinned)
│   │   └── Link Previews
│   ├── Message Input
│   │   ├── Text Composer
│   │   ├── Emoji Picker
│   │   ├── Attachments (file, image, video)
│   │   ├── Mentions (@user)
│   │   ├── Slash Commands
│   │   └── Voice Recording
│   └── Conversation Info Panel
│       ├── Members List
│       ├── Shared Media
│       ├── Shared Files
│       ├── Shared Links
│       ├── Pinned Messages
│       ├── Search in Conversation
│       └── Settings (mute, leave, delete)
├── Threads Panel
│   ├── Thread List
│   └── Thread Detail (reply chain)
├── Contacts / People
│   ├── Contact List
│   ├── Online / Offline Status
│   ├── Add Contact
│   └── Contact Profile
├── Calls
│   ├── Voice Call
│   ├── Video Call
│   ├── Screen Share
│   └── Call History
├── Search
│   ├── Messages
│   ├── Files
│   ├── People
│   └── Channels
├── Notifications
│   ├── Unread Messages
│   ├── Mentions
│   └── Missed Calls
├── Settings
│   ├── Profile (name, avatar, status message)
│   ├── Notifications (per-channel, DnD schedule)
│   ├── Appearance (theme, font size, density)
│   ├── Chat (media auto-download, backup)
│   ├── Privacy (read receipts, last seen, blocked)
│   ├── Storage & Data
│   ├── Keyboard Shortcuts
│   ├── Language
│   └── Devices / Sessions
└── Create
    ├── New Message
    ├── New Group
    └── New Channel
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Master-Detail** | Split view (list + conversation) | Conversations list left, active chat right |
| **Workspace Switcher** | Left icon rail (Slack/Discord style) | Switch between teams/servers |
| **Conversation List** | Sortable, filterable | Filter: All, Unread, DMs, Channels, Groups |
| **Message Actions** | Hover toolbar or long-press | Reply, React, Pin, Forward, Delete, Thread |
| **Info Panel** | Right slide-over | Conversation details, members, shared media |
| **Threads** | Side panel or separate view | Threaded replies without cluttering main chat |

### Desktop Layout
```
[Workspace Rail] | [Conversation List (280px)] | [Chat View (flex)] | [Info Panel (300px, optional)]
```

### Mobile Layout
```
Screen 1: Conversation List → Tap → Screen 2: Chat View → Tap header → Screen 3: Info
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Conversation | type (dm/group/channel), name, avatar, last_message, unread_count, pinned, muted | has many Messages, Members |
| Message | body, type (text/media/system/voice), sender, timestamp, edited, reactions[], reply_to | belongs to Conversation and User |
| Thread | root_message, reply_count, last_reply_at | extends from Message |
| Reaction | emoji, users[] | belongs to Message |
| Attachment | type (image/video/file/audio), url, size, filename | belongs to Message |
| User | username, display_name, avatar, status, last_seen, online | has many Conversations |
| Channel | name, topic, description, visibility (public/private), archived | type of Conversation |
| Call | type (voice/video), participants[], duration, started_at | belongs to Conversation |

### Message Types
`text | image | video | file | voice | location | contact | poll | system`

### Presence States
`online | idle (away) | do_not_disturb | offline`

## User Flows

### Send Message
```
Conversation List → Select Chat → Type Message → Send (Enter) → Delivered → Read Receipt
```

### Start Group Chat
```
[+ New] → New Group → Select Members → Set Name/Avatar → Create → Send First Message
```

### Reply in Thread
```
Hover Message → Reply in Thread → Thread Panel Opens → Type Reply → Send
```

### File Sharing
```
Chat → Attach (📎) → Select File → Preview → Send → Recipient Downloads
```

### Voice/Video Call
```
Chat Header → Call Icon (📞/📹) → Ringing → Connected → End Call
```

## URL / Route Structure

```
/                              → Conversations List (or last active)
/conversations/:id             → Conversation View
/conversations/:id/info        → Conversation Info
/conversations/:id/thread/:mid → Thread View
/channels                      → Browse Channels
/channels/:name                → Channel
/contacts                      → Contacts List
/contacts/:id                  → Contact Profile
/calls                         → Call History
/search?q=:query               → Search Results
/settings                      → Settings
/settings/profile              → Profile Settings
/settings/notifications        → Notification Settings
/new                           → New Conversation
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Messages, files, people, channels | From (user), In (channel), Date Range, Has (file/link/image) | Relevance, Date |
| Conversation | Messages in current chat | From, Date, Has attachment | Date |
| People | Name, username | Online status | Name, Last Active |
| Files | Filename, type | File type, Sender, Date | Date, Size |

### Search Syntax (power users)
```
from:@alice in:#general has:file before:2024-01-01 "exact phrase"
```

## Responsive Behavior

| Breakpoint | Layout | Behavior |
|------------|--------|----------|
| Desktop (≥1024px) | Three-panel (list + chat + info) | All visible, resizable panels |
| Tablet (768–1023px) | Two-panel (list + chat) | Info as overlay |
| Mobile (<768px) | Single panel, stack navigation | List → Chat → Info (push navigation) |

### Mobile Adaptations
- Swipe right on message to reply
- Swipe left on conversation to mute/archive
- Long-press for message actions
- Voice message: hold to record, release to send
- Floating "scroll to bottom" button with new message count
- Push notifications with inline reply

## Access Control

| Role | Read | Send | Manage | Calls | Admin |
|------|------|------|--------|-------|-------|
| Guest | Invited channels only | ✅ | — | — | — |
| Member | All public + joined | ✅ | Own messages | ✅ | — |
| Channel Admin | ✅ | ✅ | Channel settings, members | ✅ | — |
| Workspace Admin | ✅ | ✅ | All channels, members | ✅ | ✅ |
| Owner | ✅ | ✅ | Full control | ✅ | ✅ |

### Channel Permissions
- Public: anyone can join and read
- Private: invite-only, hidden from browse
- Read-only: only admins can post (announcements)
