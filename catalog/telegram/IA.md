---
brand: Telegram
tagline: "Fast. Secure. Powerful. Cloud-native messenger with channels, bots, and unlimited file sharing."
category: Messaging
website: https://telegram.org
---

# Telegram — Information Architecture

## Overview

A cloud-based messaging platform emphasizing speed, security, and power-user features. Telegram's mental model is a **Swiss Army knife of messaging** — it combines personal chats, group chats (up to 200K members), channels (one-to-many broadcast), bots (programmable automation), file sharing (up to 2GB per file), and a full bot API platform. Key differentiators: cloud-native sync (all messages on server, not just phone), Secret Chats (end-to-end encrypted), Telegram Channels (broadcast to unlimited subscribers), inline bots, custom sticker packs, Telegram Premium (extra features), Topics in groups (forum-style threading), no file size limit (up to 2GB), and Telegram Mini Apps (web apps inside Telegram).

## Site Map

```
├── Chat List (Main Screen)
│   ├── All Chats (sorted by recent)
│   ├── Chat Folders (user-created tabs)
│   │   ├── Default Folders: All Chats, Personal, Channels, Groups, Bots
│   │   ├── Custom Folders (filter by type, include/exclude chats)
│   │   └── Folder Tabs (horizontal, swipeable)
│   ├── Pinned Chats (per folder)
│   ├── Archived Chats
│   ├── Saved Messages (self-chat, cloud clipboard)
│   ├── Search (messages, chats, global)
│   └── Filter: Unread, Mentions
├── Chat View (1:1 / Group)
│   ├── Header
│   │   ├── Name, Avatar, Online/Last Seen
│   │   ├── Members Count (group)
│   │   ├── Voice/Video Call Button
│   │   ├── Search in Chat
│   │   └── More (⋮) Menu
│   ├── Message Stream
│   │   ├── Text Messages (Markdown formatting supported)
│   │   ├── Media (photos, videos, GIFs, stickers, animations)
│   │   ├── Files (any type, up to 2GB each)
│   │   ├── Voice Messages (waveform)
│   │   ├── Video Messages (round video bubbles)
│   │   ├── Polls (regular, quiz mode)
│   │   ├── Location (static + live)
│   │   ├── Contact Cards
│   │   ├── Forwarded Messages (with source attribution)
│   │   ├── Reactions (emoji, customizable per group)
│   │   ├── Reply (swipe right to quote)
│   │   ├── Pinned Messages (multiple, scroll through)
│   │   ├── Threads (reply to specific message, opens thread)
│   │   ├── Bot Messages (inline keyboards, buttons)
│   │   ├── Mini App Buttons (open web app)
│   │   ├── Spoiler Text (tap to reveal)
│   │   ├── Custom Emoji (animated, Telegram Premium)
│   │   ├── Translations (inline, tap to translate)
│   │   ├── Scheduled Messages
│   │   ├── Silent Messages (no notification)
│   │   └── Slow Mode Indicator (group setting)
│   ├── Message Input
│   │   ├── Text Composer (Markdown support)
│   │   ├── Emoji / Sticker / GIF Picker (tabs)
│   │   │   ├── Emoji (custom emoji packs for Premium)
│   │   │   ├── Stickers (searchable, animated, video stickers)
│   │   │   └── GIFs (inline search via @gif bot)
│   │   ├── Attach: Photo, File, Location, Contact, Poll, Voice/Video Note
│   │   ├── Bot Commands (/ slash commands)
│   │   ├── Inline Bots (@botname query)
│   │   ├── Schedule Send
│   │   ├── Send Without Sound
│   │   └── Send When Online
│   └── Message Actions (long-press)
│       ├── Reply, Forward, Copy, Edit, Delete, Pin, Translate
│       ├── Select Multiple
│       ├── Save to Saved Messages
│       ├── Set Reminder
│       └── Report
├── Group Features
│   ├── Group Info
│   │   ├── Name, Avatar, Description
│   │   ├── Members List (admin/member/restricted/banned)
│   │   ├── Shared Media / Files / Links / Audio / Voice
│   │   ├── Notifications (mute options: 1h, 8h, 2d, forever, custom)
│   │   ├── Permissions (per member + default)
│   │   ├── Invite Link (with member limit, expiry, approval)
│   │   └── Event Log (admin actions history)
│   ├── Topics (Forum Mode)
│   │   ├── General Topic (default)
│   │   ├── Custom Topics (icon, name)
│   │   ├── Topic List View (like a forum)
│   │   └── Per-topic Message Thread
│   ├── Admin Rights (granular)
│   │   ├── Change Info, Delete Messages, Ban Users
│   │   ├── Invite via Link, Pin Messages
│   │   ├── Manage Video Chats, Manage Topics
│   │   ├── Add Admins, Remain Anonymous
│   │   └── Custom Admin Title
│   └── Slow Mode (limit: 30s to 1h between messages per user)
├── Channel
│   ├── Channel Page
│   │   ├── Name, Avatar, Description, Subscriber Count
│   │   ├── Join / Leave Button
│   │   ├── Post Feed (admin broadcasts)
│   │   ├── Comments (linked discussion group)
│   │   ├── Reactions (emoji)
│   │   ├── Views Count (per post)
│   │   ├── Share Post (forward)
│   │   └── Post Scheduling
│   ├── Channel Admin
│   │   ├── Post (text, media, files, polls, silent)
│   │   ├── Edit / Delete Posts
│   │   ├── Pin Post
│   │   ├── Statistics (subscriber growth, views, shares, engagement)
│   │   ├── Discussion Group (link group for comments)
│   │   └── Manage Admins
│   └── Channel Types: Public (@username) / Private (invite link)
├── Calls
│   ├── 1:1 Voice/Video Call
│   ├── Group Voice Chat (unlimited participants)
│   ├── Video Conference (screen share, up to 1000 viewers)
│   ├── Screen Share
│   ├── Picture-in-Picture
│   └── Schedule Call
├── Bots
│   ├── Bot Chat (interact via commands or buttons)
│   ├── Inline Bots (@bot query → inline results in any chat)
│   ├── Bot Keyboards (custom reply keyboards)
│   ├── Inline Keyboards (buttons under bot messages)
│   ├── Bot Payments (in-chat payment processing)
│   ├── Bot Games (HTML5 games within Telegram)
│   ├── Mini Apps (WebApp) — full web apps in Telegram
│   │   ├── Launched from bot button or attachment menu
│   │   ├── Access to Telegram user data (with permission)
│   │   └── Payment integration
│   └── Bot API (for developers: create bots)
├── Saved Messages
│   ├── Bookmark any message from any chat
│   ├── Self-notes (type to yourself)
│   ├── Tags (organize saved messages)
│   ├── Forward here as personal clipboard
│   └── Cross-device sync
├── People Nearby (optional, location-based)
│   ├── Users Nearby
│   ├── Groups Nearby
│   └── Create Local Group
├── Stories
│   ├── Post Story (photo, video, text)
│   ├── Story Viewer (contacts' stories)
│   ├── Privacy (close friends, contacts, everyone)
│   ├── Reactions / Replies
│   └── Stealth Mode (view without being seen — Premium)
├── Search
│   ├── In-Chat Search (messages in current chat)
│   ├── Global Search
│   │   ├── Chats & Contacts
│   │   ├── Public Channels / Groups
│   │   ├── Messages (across all chats)
│   │   └── By Date Navigator (calendar)
│   └── Inline Search Filters (from:, in:, by date)
├── Telegram Premium
│   ├── 4GB File Upload (vs 2GB)
│   ├── Faster Downloads
│   ├── Double Limits (groups, pins, saved GIFs, etc.)
│   ├── Custom Emoji
│   ├── Animated Profile Photo
│   ├── Premium Stickers
│   ├── Chat Management (folders, pinned chats)
│   ├── Voice-to-Text (transcribe voice messages)
│   ├── Translation (real-time message translation)
│   ├── Story Stealth Mode
│   ├── No Ads in Channels
│   ├── Custom App Icons
│   └── Premium Badge
├── Settings
│   ├── Edit Profile (name, bio, username, photo)
│   ├── My Account
│   │   ├── Phone Number (change)
│   │   ├── Username (@handle)
│   │   ├── Bio
│   │   └── Premium
│   ├── Privacy & Security
│   │   ├── Phone Number (who can see)
│   │   ├── Last Seen & Online
│   │   ├── Profile Photo (who can see)
│   │   ├── Forwarded Messages (link to account or not)
│   │   ├── Calls (who can call)
│   │   ├── Groups (who can add you)
│   │   ├── Voice Messages (who can send — Premium)
│   │   ├── Blocked Users
│   │   ├── Passcode Lock (app-level)
│   │   ├── Two-Step Verification (cloud password)
│   │   ├── Active Sessions (see all logged-in devices)
│   │   ├── Auto-Delete Messages (default timer)
│   │   └── Account Self-Destruct (1/3/6/12 months of inactivity)
│   ├── Data and Storage
│   │   ├── Storage Usage (per chat breakdown)
│   │   ├── Auto-Download (Wi-Fi / Mobile / Roaming per type)
│   │   ├── Data Saving (call quality, preview)
│   │   ├── Proxy Settings (SOCKS5, MTProto)
│   │   └── Reduce Data Usage
│   ├── Chat Settings
│   │   ├── Chat Folders (manage)
│   │   ├── Theme (light/dark/custom)
│   │   ├── Chat Wallpaper (per chat or global)
│   │   ├── Chat Background (animated)
│   │   ├── Font Size
│   │   ├── Bubble Style
│   │   ├── Animation Playback
│   │   └── Raise to Speak (voice messages)
│   ├── Notification Settings
│   │   ├── Private Chats / Groups / Channels (separate)
│   │   ├── Sound, Vibration, Priority
│   │   ├── Badge Counter
│   │   └── In-App Notifications
│   ├── Devices (active sessions, terminate others)
│   ├── Language
│   ├── Power Saving
│   └── Telegram Tips / FAQ
├── Secret Chats (E2E Encrypted)
│   ├── Not stored on cloud (device-only)
│   ├── Self-destruct timer
│   ├── No forwarding
│   ├── No screenshots (or notify)
│   └── Encryption indicator
└── Telegram Desktop / Web
    ├── Multi-platform (Windows, macOS, Linux, Web)
    ├── Fully synced with mobile
    └── Simultaneous sessions (no "primary device" concept)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Chat List** | Main screen, scrollable | All chats sorted by recency, swipeable folder tabs at top |
| **Folder Tabs** | Horizontal tabs above chat list | All Chats, Personal, Groups, Channels, Bots, Custom |
| **Chat Header** | Fixed top in conversation | Name, avatar, online status, call buttons, search, menu |
| **Input Bar** | Fixed bottom in conversation | Text, emoji/sticker/GIF tabs, attach, voice/video note |
| **Hamburger Menu** | Left drawer (mobile) | Saved Messages, Contacts, Settings, Calls, People Nearby, New Group/Channel |
| **Message Actions** | Long-press on message | Reply, Edit, Forward, Delete, Pin, React, Copy, Select, Translate |
| **Desktop Layout** | Three-panel | Chat list (left) + Chat view (center) + Info panel (right, toggleable) |

### Desktop Layout
```
[Chat List (320px)]  |  [Chat View (flex)]  |  [Info Panel (optional, 320px)]
─────────────────────────────────────────────────────────────
🔍 Search            |  Chat Name          |  Profile Photo
─────────────        |  ───────────────    |  Phone: +1...
📌 Pinned Chat       |  [Messages...]      |  Username: @...
Chat 1               |                     |  Bio: ...
Chat 2               |                     |  ──────────
Channel 1            |                     |  Shared Media
Bot 1                |                     |  [📷][📷][📷]
...                  |  [Input Bar]        |  Members (1234)
─────────────        |                     |
[☰ Menu]             |                     |
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Chat | type (private/group/supergroup/channel/bot/secret/saved), name, avatar, last_message, unread_count, pinned (bool), muted_until, folder_ids[], archived (bool) | has many Messages, Members |
| Message | body (Markdown), type (text/photo/video/animation/sticker/voice/video_note/document/audio/location/poll/contact/game/invoice), sender, timestamp, edited (bool), views (channels), forward_from, reply_to, reactions[], pinned (bool), scheduled (bool), silent (bool), spoiler (bool) | belongs to Chat and User |
| User | id, first_name, last_name, username, phone, bio, photo, last_seen, is_premium, is_bot | has many Chats |
| Group | title, photo, description, members_count (up to 200K), permissions[], invite_link, slow_mode, topics_enabled, linked_channel | type of Chat |
| Topic | name, icon (emoji), message_thread_id, pinned (bool), closed (bool) | belongs to Group (forum mode) |
| Channel | title, photo, description, subscriber_count, username (@public), linked_group, sign_posts (show author) | type of Chat, has many Posts |
| Bot | username, description, commands[], inline_mode (bool), webapp_url | type of User |
| Sticker | emoji, set_name, file_id, type (static/animated/video), is_premium | belongs to StickerSet |
| StickerSet | name, title, stickers[], creator | many-to-many with Users (installed) |
| Poll | question, options[], type (regular/quiz), allows_multiple, correct_option (quiz), anonymous (bool), votes[] | belongs to Message |
| File | file_name, mime_type, file_size (up to 2GB/4GB Premium), file_id, thumbnail | belongs to Message |
| Reaction | emoji, custom_emoji_id, user | belongs to Message |
| SecretChat | encryption_key, ttl (self-destruct timer), layer | 1:1 only, device-specific |
| MiniApp | name, url, description, photo | launched by Bot |
| Story | media, caption, created_at, expires_at (24/48h), privacy, viewers[] | belongs to User |
| Folder | name, icon, include_chats[], exclude_chats[], filters (groups/channels/bots/contacts/non_contacts) | belongs to User |
| Session | device, ip, location, app_version, created_at, last_active | belongs to User |

### Message Formatting (Markdown-like)
```
**bold** | *italic* | __underline__ | ~~strikethrough~~ | `code` | ```pre``` | ||spoiler||
[text](url) — inline link | > quote
```

### Group Types
```
Basic Group: up to 200 members, limited admin control
Supergroup: up to 200K members, full admin control, topics, slow mode
Broadcast Channel: unlimited subscribers, admins post only
```

## User Flows

### Send Message
```
Chat List → Select Chat → Type Message → Send → ✓ (sent to server) → ✓✓ (delivered, 1:1 only)
```

### Share File
```
Chat → Attach (📎) → File → Browse → Select (up to 2GB) → Send → Recipient Downloads
```

### Create Channel
```
Hamburger → New Channel → Name + Description → Type (Public @username / Private link) → Publish First Post
```

### Bot Interaction
```
Search → Find Bot → Start → Bot Sends Welcome + Commands → Use Inline Keyboard → Bot Processes → Response
```

### Forum Topics (Group)
```
Open Group → Topics View → Select Topic → Read Thread → Reply in Topic → Create New Topic
```

### Scheduled Message
```
Chat → Write Message → Long-press Send → Schedule Message → Pick Date/Time → Scheduled (clock icon)
```

### Secret Chat
```
Contact → More → Start Secret Chat → Device-to-Device Encryption → Set Timer → Messages Self-Destruct
```

### Use Mini App
```
Bot Chat → Tap "Open App" Button → Mini App Loads (WebView) → Interact → Complete Action → Return to Chat
```

## URL / Route Structure

```
# Telegram Deep Links
t.me/:username                    → User/Bot/Channel Profile
t.me/:username?start=:param       → Bot Start with Parameter
t.me/joinchat/:hash               → Group/Channel Invite Link
t.me/+:hash                       → Invite Link (new format)
t.me/:channel/:postId             → Channel Post
t.me/addstickers/:setName         → Add Sticker Set
t.me/addemoji/:setName            → Add Custom Emoji Set
t.me/setlanguage/:langCode        → Set Language
t.me/addtheme/:themeName          → Add Theme
t.me/proxy?server=:s&port=:p      → Add Proxy
t.me/socks?server=:s&port=:p      → Add SOCKS5 Proxy

# Telegram Web
web.telegram.org                  → Telegram Web App (K)
webk.telegram.org                 → Telegram Web K (newer)
webz.telegram.org                 → Telegram Web Z

# Bot API
api.telegram.org/bot:token/:method → Bot API Endpoint
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Chats, Contacts, Public Channels/Groups/Bots, Messages | Chat type, Date, From | Relevance, Date |
| In-Chat | Messages in current chat | From (person), Date (calendar picker), Type (media/file/link/voice) | Chronological (jump to result) |
| Channels | Public channels | Category, Language | Subscribers, Activity |
| Stickers | Sticker sets | Trending, Installed, Search by Emoji | Relevance |
| Bots | Bot discovery | Category | Popularity |

### Search Syntax
```
in:chat_name         → search within specific chat
from:username        → messages from specific person
by date              → calendar navigator to jump to date
```

## Responsive Behavior

| Breakpoint | Layout | Behavior |
|------------|--------|----------|
| Desktop (≥1024px) | Three-panel: chat list + chat + info | All panels visible, resizable |
| Tablet (768–1023px) | Two-panel: chat list + chat | Info as overlay |
| Mobile (<768px) | Single panel, stack navigation | Chat List → Chat → Info (push) |

### Multi-Platform
- Native apps: iOS, Android, macOS, Windows, Linux
- Web apps: WebK, WebZ (feature-complete browser versions)
- All sessions fully synchronized (cloud-native)
- No "primary device" — any device can work independently
- Active sessions visible and manageable from any client

### Mobile Adaptations
- Swipe right to reply
- Swipe left to archive
- Long-press for message actions
- Voice message: hold to record, release to send
- Video message (round bubble): tap and hold video note button
- Double-tap to react
- Raise to speak (proximity sensor activates voice recording)
- Notification inline reply
- Widget (Android): chat shortcuts

## Access Control

| Role | Read | Send | Call | Manage | Bot/Mini App |
|------|------|------|------|--------|-------------|
| User | ✅ (joined chats + public channels) | ✅ | ✅ (1:1 + group voice) | Own chats | ✅ (interact) |
| Premium User | ✅ + no channel ads, voice-to-text, translation | ✅ + custom emoji, 4GB files | ✅ | ✅ + more folders, pins | ✅ |
| Group Admin | ✅ | ✅ | ✅ | Granular: edit info, delete, ban, pin, invite, manage topics | ✅ |
| Channel Admin | ✅ | ✅ (broadcast to subscribers) | — | Post, edit, delete, pin, manage admins, view stats | ✅ |
| Bot | Read messages sent to bot | Send messages, inline results, keyboards | — | Manage via Bot API | Is the app |
| Anonymous Admin | ✅ | ✅ (posts as "Admin" or channel name) | ✅ | Full admin without showing identity | ✅ |

### Privacy Features
- Cloud chats: encrypted client-server (TLS + MTProto)
- Secret chats: end-to-end encrypted (MTProto 2.0)
- Self-destructing messages (secret chats + any chat with timer)
- Account self-destruct (auto-delete after inactivity)
- Phone number hidden by default (share via username @)
- Active sessions management (terminate remotely)
- Proxy support (SOCKS5, MTProto proxy) for censorship circumvention
- No ads in private chats (channel ads with Premium removal)
