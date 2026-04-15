---
brand: WhatsApp
tagline: "Simple. Reliable. Private. End-to-end encrypted messaging for billions worldwide."
category: Messaging
website: https://whatsapp.com
---

# WhatsApp — Information Architecture

## Overview

The world's most popular messaging app (2B+ users), owned by Meta. WhatsApp's mental model is a **phone-number-based conversation list** — it mirrors your phone contacts and organizes all communication into a simple chat list. Key differentiators: end-to-end encryption by default (Signal Protocol), phone-number identity (no username required), WhatsApp Status (Stories), voice/video calls (including group calls up to 32), WhatsApp Business (for merchants), WhatsApp Channels (broadcast feeds), Communities (group of groups), and multi-device support. WhatsApp prioritizes simplicity, reliability, and privacy over feature density.

## Site Map

```
├── Chats (Main Screen)
│   ├── Chat List (sorted by most recent)
│   │   ├── Individual Chats
│   │   ├── Group Chats
│   │   ├── Pinned Chats (up to 3)
│   │   ├── Archived Chats
│   │   ├── Unread Badge (count)
│   │   └── Chat Preview (name, last message, time, read receipts ✓✓)
│   ├── Filter Chips: All, Unread, Favorites, Groups
│   ├── Search (messages, contacts, media)
│   └── New Chat / New Group / New Community
├── Chat View (Conversation)
│   ├── Header
│   │   ├── Contact/Group Name, Avatar
│   │   ├── Online/Last Seen/Typing Indicator
│   │   ├── Voice Call Button
│   │   ├── Video Call Button
│   │   └── More (⋮) Menu
│   ├── Message Stream
│   │   ├── Text Messages
│   │   ├── Media (photos, videos, GIFs, stickers)
│   │   ├── Voice Messages (waveform, play inline)
│   │   ├── Documents (PDF, DOC, etc.)
│   │   ├── Location (live or static map)
│   │   ├── Contacts (share contact card)
│   │   ├── Polls
│   │   ├── Forwarded Label ("Forwarded" / "Forwarded many times")
│   │   ├── Reactions (emoji, long-press message)
│   │   ├── Reply (swipe right to quote)
│   │   ├── Starred Messages (★)
│   │   ├── Disappearing Messages Indicator (🕐)
│   │   ├── Read Receipts (✓ sent, ✓✓ delivered, blue ✓✓ read)
│   │   ├── Edited Indicator ("Edited")
│   │   ├── System Messages (created group, added member, encryption notice)
│   │   └── Date Separators
│   ├── Message Input
│   │   ├── Text Composer
│   │   ├── Emoji / Sticker / GIF Picker
│   │   ├── Attach (📎): Document, Camera, Gallery, Contact, Location, Poll
│   │   ├── Voice Message (hold mic button)
│   │   └── Payment (in supported countries)
│   └── Message Actions (long-press)
│       ├── Reply, Forward, Star, React, Copy, Edit, Delete
│       ├── Delete for Everyone (within time limit)
│       ├── Pin Message (in group)
│       └── Info (delivery/read timestamps per recipient)
├── Status (WhatsApp Stories)
│   ├── My Status (create: text, photo, video, voice note)
│   ├── Recent Updates (from contacts)
│   ├── Muted Updates
│   ├── Status Viewer (full-screen, tap to advance)
│   ├── Status Privacy (My Contacts / Except / Only Share With)
│   └── Status Reactions (emoji reply)
├── Channels (Broadcast Feeds)
│   ├── Updates Tab (Channel posts from followed channels)
│   ├── Discover Channels
│   │   ├── Most Active, New, Popular
│   │   ├── Categories (News, Entertainment, Sports, etc.)
│   │   └── Search Channels
│   ├── Channel View
│   │   ├── Channel Name, Avatar, Description, Follower Count
│   │   ├── Follow / Unfollow
│   │   ├── Post Feed (text, images, polls, links)
│   │   ├── React to Posts (emoji)
│   │   └── Share Channel
│   └── Create Channel (for eligible users)
├── Communities
│   ├── Community Home
│   │   ├── Announcement Group (admin-only broadcasts)
│   │   ├── Sub-groups (related group chats under one umbrella)
│   │   ├── Members
│   │   └── Community Info (name, description, admin)
│   ├── Create Community
│   │   ├── Name, Description, Icon
│   │   ├── Add Existing Groups
│   │   └── Create New Groups within Community
│   └── Community Settings (admin)
├── Calls
│   ├── Call History (recent calls)
│   │   ├── Voice Calls
│   │   ├── Video Calls
│   │   ├── Missed Calls (red)
│   │   └── Call Info (time, duration, type)
│   ├── New Call
│   │   ├── Select Contact
│   │   ├── Voice or Video
│   │   └── Group Call (select multiple)
│   ├── Call Link (shareable join link)
│   └── In-Call UI
│       ├── Audio/Video Controls
│       ├── Screen Share
│       ├── Mute / Speaker / Flip Camera
│       ├── Add Participant
│       └── End Call
├── New Chat
│   ├── Contact List (phone contacts with WhatsApp)
│   ├── New Group
│   │   ├── Select Members
│   │   ├── Group Name, Icon
│   │   └── Create
│   ├── New Community
│   ├── Invite via Link
│   └── QR Code (scan to add contact)
├── Group Chat Features
│   ├── Group Info
│   │   ├── Name, Icon, Description
│   │   ├── Members List (admin/member roles)
│   │   ├── Shared Media / Links / Docs
│   │   ├── Starred Messages
│   │   ├── Search in Chat
│   │   ├── Mute Notifications
│   │   ├── Disappearing Messages (24h / 7d / 90d)
│   │   ├── Group Invite Link
│   │   └── Exit Group / Report
│   ├── Admin Controls
│   │   ├── Group Settings (who can send messages, edit info)
│   │   ├── Approve New Members
│   │   ├── Remove Members
│   │   ├── Make Admin
│   │   └── Restrict Group (only admins can send)
│   └── Polls (create in group)
├── Settings
│   ├── Account
│   │   ├── Privacy
│   │   │   ├── Last Seen (Everyone / Contacts / Nobody)
│   │   │   ├── Profile Photo (visibility)
│   │   │   ├── About (visibility)
│   │   │   ├── Status (visibility)
│   │   │   ├── Groups (who can add you)
│   │   │   ├── Live Location
│   │   │   ├── Calls (silence unknown callers)
│   │   │   ├── Blocked Contacts
│   │   │   ├── Read Receipts (on/off)
│   │   │   └── App Lock (biometric)
│   │   ├── Security (encryption, security notifications)
│   │   ├── Two-Step Verification (PIN)
│   │   ├── Change Number
│   │   ├── Request Account Info
│   │   └── Delete My Account
│   ├── Chats
│   │   ├── Theme (light/dark/system)
│   │   ├── Wallpaper
│   │   ├── Chat Font Size
│   │   ├── Chat Backup (Google Drive / iCloud)
│   │   ├── Chat History (export, transfer)
│   │   ├── Archived Chats
│   │   └── Default Disappearing Messages
│   ├── Notifications
│   │   ├── Message Notifications (sound, vibrate, popup, light)
│   │   ├── Group Notifications
│   │   ├── Call Notifications
│   │   └── Notification Tone
│   ├── Storage and Data
│   │   ├── Manage Storage (by chat, by file size)
│   │   ├── Media Auto-Download (Wi-Fi / Mobile / Roaming)
│   │   ├── Network Usage
│   │   └── Proxy Settings
│   ├── Linked Devices (multi-device: Web, Desktop, Portal)
│   ├── App Language
│   └── Help (FAQ, contact, app info)
├── WhatsApp Web / Desktop
│   ├── QR Code Linking (scan from phone)
│   ├── Same chat list + conversation view
│   ├── Multi-device (works without phone online)
│   └── File sharing from computer
└── WhatsApp Business (separate app)
    ├── Business Profile (address, hours, website, catalog)
    ├── Catalog (products/services with photos, prices)
    ├── Quick Replies (saved message templates)
    ├── Labels (organize chats: New Customer, Pending Payment, etc.)
    ├── Away Messages (auto-reply)
    ├── Greeting Messages (first-time contacts)
    ├── Short Link (wa.me link for website)
    └── WhatsApp Business API (for larger businesses)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Top Tab Bar** | Android: swipe tabs; iOS: bottom tabs | Chats, Updates (Status + Channels), Communities, Calls |
| **Chat List** | Scrollable list, pull-to-search | Last message preview, time, read receipts, badges |
| **FAB** | Floating Action Button (bottom-right on Android) | New chat (chat list), New Status (updates), New call (calls) |
| **Chat Header** | Fixed top in conversation | Contact name/avatar, call buttons, more menu |
| **Input Bar** | Fixed bottom in conversation | Text input, emoji, attach, voice message (mic), send |
| **Message Actions** | Long-press any message | Reply, Forward, Star, React, Copy, Delete, Info |
| **Tab/Swipe** | Swipe between main sections | Chats ↔ Updates ↔ Communities ↔ Calls |

### Android Layout (Main)
```
┌──────────────────────────────┐
│  WhatsApp  [📷] [🔍] [⋮]   │  ← top bar
│  Chats | Updates | Commun.. | Calls │  ← tabs
├──────────────────────────────┤
│  All | Unread | Favorites | Groups  │  ← filter chips
│  ────────────────────────────│
│  📌 Mom                  9:41│
│     Photo 📷        ✓✓(blue)│
│  ────────────────────────────│
│  Work Group             9:30│
│     Alice: Meeting at... ✓✓ │
│  ────────────────────────────│
│  Bob                   Yest.│
│     You: See you!        ✓✓ │
│  ...                        │
│                         [✉️]│  ← FAB: new chat
└──────────────────────────────┘
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Conversation | type (individual/group/community_announcement), name, avatar, last_message, unread_count, pinned (bool), muted (bool), archived (bool), disappearing_messages (off/24h/7d/90d), encrypted (always true) | has many Messages, Members |
| Message | body, type (text/image/video/audio/document/location/contact/poll/sticker/gif/voice_note), sender, timestamp, status (sent/delivered/read), edited (bool), forwarded (bool), forward_count, reply_to, starred (bool), reactions[] | belongs to Conversation and User |
| User | phone_number, name (from contacts), about (bio), avatar, last_seen, online (bool) | has many Conversations |
| Group | name, avatar, description, created_by, created_at, members[], admins[], invite_link, settings (who_can_send, who_can_edit_info, approve_new_members) | type of Conversation |
| Community | name, icon, description, announcement_group, sub_groups[] | has many Groups |
| Status | media (photo/video/text), caption, created_at, expires_at (24h), viewers[], privacy (contacts/except/only) | belongs to User |
| Channel | name, avatar, description, follower_count, admin, posts[], category | has many ChannelPosts |
| ChannelPost | body, media, poll, created_at, reactions_count | belongs to Channel |
| Call | type (voice/video), participants[], duration, started_at, missed (bool) | connects Users |
| Attachment | type (image/video/document/audio/contact/location), url, filename, size, mime_type, thumbnail | belongs to Message |
| Poll | question, options[], allows_multiple (bool), votes[] | belongs to Message (in group) |
| Reaction | emoji, user | belongs to Message |
| Label (Business) | name, color | belongs to Conversation (WhatsApp Business only) |
| CatalogItem (Business) | name, price, description, images[], link | belongs to Business Account |

### Message Types
`text | image | video | voice_note | audio | document | location | live_location | contact | poll | sticker | gif | payment`

### Read Receipt States
```
✓     → Sent (reached WhatsApp server)
✓✓    → Delivered (reached recipient's device)
✓✓    → Read (blue ticks, if receipts enabled)
🕐    → Pending (no connection)
```

### Encryption
- All messages end-to-end encrypted (Signal Protocol)
- Group messages: sender keys protocol
- Media: encrypted in transit and at rest
- Backups: optional end-to-end encrypted backup (Google Drive / iCloud)

## User Flows

### Send Message
```
Chats → Select Contact → Type Message → Send (↑) → ✓ Sent → ✓✓ Delivered → ✓✓ Read (blue)
```

### Voice Call
```
Chat → Voice Call Button (📞) → Ringing → Connected → Speaking → End Call
```

### Create Group
```
Chats → New Group → Select Members → Next → Group Name + Icon → Create → Send First Message
```

### Share Media
```
Chat → Attach (📎) → Gallery → Select Photos → Add Caption → Send → Recipient Views/Downloads
```

### Voice Message
```
Chat → Hold Mic Button → Record → Release to Send (or swipe up to lock, swipe left to cancel)
```

### Status Updates
```
Updates Tab → My Status → Camera/Text → Capture → Add Caption → Post → Contacts See in Updates → 24h expiry
```

### Follow Channel
```
Updates → Channels → Discover → Browse → Follow → Channel Posts Appear in Updates
```

### WhatsApp Web Setup
```
Phone → Settings → Linked Devices → Link Device → Scan QR Code on computer → Web/Desktop Connected
```

## URL / Route Structure

```
# WhatsApp Web (web.whatsapp.com)
/                              → QR Code Login / Chat List

# WhatsApp Deep Links
wa.me/:phoneNumber              → Open Chat with Phone Number
wa.me/:phoneNumber?text=:msg    → Pre-filled Message
chat.whatsapp.com/invite/:code  → Group Invite Link
whatsapp.com/channel/:channelId → Channel Page

# WhatsApp Business
wa.me/c/:businessId             → Business Catalog Link
api.whatsapp.com                → Business API Endpoint
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Chat List | Contact names, group names, message content | Filter chips: All, Unread, Favorites, Groups | Recent (default, only option) |
| In-Chat Search | Messages in current conversation | From (specific person in group), Date, Media type | Chronological (jump to match) |
| Contacts | Phone contacts with WhatsApp | — | Alphabetical |
| Channels | Channel names, descriptions | Category | Followers, Activity |
| Media | Photos, videos, documents in chat | File type, Date | Chronological |

## Responsive Behavior

| Breakpoint | Layout | Behavior |
|------------|--------|----------|
| Mobile (primary) | Single screen, stack navigation | Chat List → Chat → Info (push navigation) |
| WhatsApp Web / Desktop (≥1024px) | Two-panel: Chat List (left 420px) + Chat View (right fluid) | Master-detail, always visible |
| Tablet | Two-panel (like desktop) | Chat list + active chat side by side |

### Mobile Adaptations
- Swipe right on message to reply (iOS)
- Long-press for message actions
- Voice message: hold to record, release to send, swipe up to lock (hands-free), swipe left to cancel
- Double-tap to react (emoji)
- Quick media: camera button in chat for instant photo
- Notification inline reply (reply without opening app)
- WhatsApp widget (Android) for quick access
- Biometric lock (Face ID / Touch ID / Fingerprint)
- Data saver mode (reduce auto-download)

## Access Control

| Role | Read | Send | Call | Group Admin | Business |
|------|------|------|------|-------------|----------|
| Standard User | ✅ | ✅ | ✅ (voice + video) | If assigned | — |
| Group Admin | ✅ | ✅ | ✅ | ✅ (add/remove members, settings, approve) | — |
| Community Admin | ✅ | ✅ | ✅ | ✅ + manage sub-groups, announcement group | — |
| Business Account | ✅ | ✅ + quick replies, away messages, labels | ✅ | ✅ | ✅ (catalog, profile, short link) |
| Business API | ✅ | ✅ + templates, bots, CRM integration | — | — | ✅ (enterprise features) |
| Channel Admin | ✅ | ✅ (broadcast to followers) | — | — | — |

### Privacy Defaults
- End-to-end encryption: always on, cannot be disabled
- Read receipts: on by default, user can turn off (groups always on)
- Last seen: contacts by default
- Profile photo: contacts by default
- About: contacts by default
- Groups: everyone can add you (configurable)
- Status: my contacts (configurable)
