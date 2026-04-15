---
brand: Signal
tagline: Say hello to privacy
category: Social & Communication
website: https://signal.org
---

# Information Architecture — Signal

## Overview

Signal is a privacy-first encrypted messaging platform built on the open-source Signal Protocol. The IA prioritizes simplicity, minimal data collection, and direct access to conversations. Unlike mainstream messengers, Signal deliberately omits engagement-driven features (stories algorithms, ads, suggested contacts) to keep the focus on secure, distraction-free communication.

## Site Map

```
Signal
├── Home (Download CTA)
├── Features
│   ├── End-to-End Encryption
│   ├── Group Chats
│   ├── Disappearing Messages
│   ├── Sealed Sender
│   ├── Voice & Video Calls
│   ├── Stories
│   └── Username & Phone Number Privacy
├── Download
│   ├── iOS
│   ├── Android
│   └── Desktop (Windows / macOS / Linux)
├── Blog
│   └── [Article Detail]
├── Donate
├── Careers
├── Help / Support
│   ├── Getting Started
│   ├── Account & Settings
│   ├── Messaging
│   ├── Calling
│   ├── Troubleshooting
│   └── Security
├── Community (GitHub / Community Forum)
└── Legal
    ├── Terms of Service
    ├── Privacy Policy
    └── Open Source Licenses
```

## Navigation Model

- **Type**: Minimal top bar with logo + text links
- **Primary Nav**: Features, Support, Blog, Donate, Download (CTA button)
- **Mobile**: Hamburger menu collapsing all primary links
- **In-App Nav (mobile)**: Bottom tab bar — Chats, Calls, Stories, Settings
- **In-App Nav (desktop)**: Left sidebar — conversation list, top toolbar for search and compose

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Conversation | participants, last message, timestamp, pinned, muted, archived | → Messages, → Contact(s) |
| Message | body (encrypted), sender, timestamp, delivery status, reactions, reply-to | → Conversation, → Attachments |
| Disappearing Message | inherits Message + expiration timer | → Conversation |
| Group | name, avatar, members, admin list, group link, disappearing timer | → Conversations, → Members |
| Story | media, caption, timestamp, viewers list, expiry (24h) | → Contact |
| Contact | name, phone number, username, verified safety number, blocked flag | → Conversations |
| Blog Post | title, date, author, body (markdown), cover image | standalone |

## User Flows

### Registration
```
Download app → Enter phone number → Receive SMS verification → Create PIN (for Signal registration lock) → Set profile name / avatar → Optionally set a username → Grant contacts permission or skip → Land on empty conversation list
```

### Sending a Disappearing Message
```
Open conversation → Tap timer icon in header → Select duration (30s → 4 weeks) → Confirm → All subsequent messages in thread auto-delete after the set interval → Timer badge appears on conversation header
```

### Verifying Safety Numbers
```
Open conversation → Tap contact name → "View Safety Number" → Compare 60-digit number or scan QR code in person → Mark as "Verified" → Verified badge appears on conversation
```

## URL / Route Structure

```
signal.org/                          # Landing / download CTA
signal.org/download/                 # Platform-specific download links
signal.org/features/                 # Feature overview
signal.org/blog/                     # Blog listing
signal.org/blog/{slug}/              # Blog post detail
signal.org/donate/                   # Donation page
signal.org/docs/                     # Technical documentation
support.signal.org/                  # Help center (subdomain)
support.signal.org/hc/en/articles/{id}  # Help article detail
signal.org/android/                         # Android download
signal.org/ios/                             # iOS download
signal.org/desktop/                         # Desktop download (all platforms)
signal.org/signal-server/                   # Open source server
signal.org/docs/specifications/             # Protocol specifications
signal.org/docs/specifications/xeddsa/      # XEdDSA spec
signal.org/docs/specifications/x3dh/        # X3DH key exchange spec
signal.org/docs/specifications/doubleratchet/ # Double Ratchet spec
signal.org/docs/specifications/sesame/      # Sesame session management
signal.org/workspaces/                      # Signal for organizations
support.signal.org/hc/en/categories/        # Help categories
```

## Search & Filter

- **In-App Message Search**: Full-text search across all conversations (decrypted locally on device)
- **Conversation Filter**: All / Unread toggle in chat list
- **Help Center**: Keyword search across support articles
- **No server-side indexing**: All search is performed client-side due to end-to-end encryption; Signal servers cannot read message content

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | Single-pane: conversation list or message thread (back arrow to return) |
| Tablet (768–1024px) | Split view: narrow conversation list + message pane |
| Desktop App (> 1024px) | Persistent left sidebar (conversation list) + main message area + optional right panel (contact details) |
| Website | Simple single-column layout; download CTA hero scales down; hamburger nav on mobile |

## Access Control

| Role | Capabilities |
|---|---|
| Registered User | Send/receive messages, create groups, post stories, voice/video calls |
| Group Admin | Add/remove members, edit group info, manage join link, set disappearing timer |
| Group Member | Send messages, react, reply; cannot modify group settings unless permitted |
| Non-registered Visitor | View website, download app, read blog and support articles |
| Blocked Contact | Cannot send messages or call the blocking user; no notification sent |
| Linked Device | Access synced messages; can be revoked from primary device at any time |

## Encryption Architecture

| Layer | Protocol | Purpose |
|-------|----------|---------|
| Key Exchange | X3DH (Extended Triple Diffie-Hellman) | Initial session key establishment |
| Message Encryption | Double Ratchet | Forward secrecy and break-in recovery |
| Group Messaging | Sender Keys | Efficient encrypted group message distribution |
| Sealed Sender | Certificate-based | Hide sender identity from Signal servers |
| Key Verification | Safety Numbers | Out-of-band identity verification (QR/60 digits) |

## Message Types

| Type | Features |
|------|----------|
| Text | Encrypted text, emoji, mentions (@user) |
| Media | Encrypted photos, videos, GIFs, voice notes, stickers |
| File | Encrypted file attachments (any type) |
| Voice Call | End-to-end encrypted 1:1 and group voice calls |
| Video Call | End-to-end encrypted 1:1 and group video calls |
| Story | 24-hour ephemeral photos/videos (like Instagram Stories) |
| Note to Self | Messages to yourself (synced across devices) |

## Privacy Features

| Feature | Description |
|---------|-------------|
| Disappearing messages | Auto-delete after configurable timer (5s to 4 weeks) |
| View-once media | Photo/video that disappears after first view |
| Screen security | Prevent screenshots in app (Android) |
| Registration lock | PIN required to re-register phone number |
| Relay calls | Route calls through Signal servers to hide IP address |
| Sealed Sender | Sender identity hidden from Signal servers |
| No metadata | Signal stores minimal metadata (registration date, last connection) |
| Username | Share username instead of phone number (privacy-preserving) |
| Phone number privacy | Hide phone number from non-contacts |

## Signal vs Other Messengers

| Feature | Signal | WhatsApp | Telegram | iMessage |
|---------|--------|----------|----------|----------|
| E2E encryption (default) | ✅ All | ✅ All | ❌ Opt-in (Secret Chats) | ✅ iMessage only |
| Open source (client + server) | ✅ Both | ❌ | Client only | ❌ |
| Metadata collection | Minimal | Extensive | Moderate | Moderate |
| Group E2E encryption | ✅ | ✅ | ❌ (regular groups) | ✅ |
| Self-destructing messages | ✅ | ✅ | ✅ | ❌ |
| Independent funding | ✅ (nonprofit) | ❌ (Meta) | ❌ (VC/ads) | ❌ (Apple) |
| Phone number required | ✅ (username optional) | ✅ | ✅ | Apple ID |

## Platform Support

| Platform | Features |
|----------|----------|
| Android | Full features, SMS fallback option, system share integration |
| iOS | Full features, CallKit integration, Share extension |
| Desktop (macOS) | Synced messages, calls, linked device |
| Desktop (Windows) | Synced messages, calls, linked device |
| Desktop (Linux) | Synced messages, calls, linked device |
| iPad | iOS app (not optimized but functional) |
| Web | No web client (by design — security) |

## Group Features

| Feature | Description |
|---------|-------------|
| Group size | Up to 1,000 members |
| Group admin | Multiple admins; manage members, permissions |
| Group link | Invite link with optional admin approval |
| Group call | Voice and video calls with all members |
| Disappearing messages | Per-group timer setting |
| Mentions | @name mentions with notification |
| Reply | Quote-reply to specific messages in thread |
| Admin permissions | Send messages, add members, edit info (configurable) |

## Note to Self

- **Personal storage:** Messages, photos, files synced across your devices
- **Use cases:** Bookmarks, reminders, quick notes, file transfer between devices
- **Same encryption:** E2E encrypted like all other Signal messages

## Recent Features

- **Usernames:** Share a username instead of phone number
- **Phone number privacy:** Hide number from non-contacts
- **Stories:** 24-hour ephemeral photo/video sharing with privacy controls
- **Call links:** Shareable links for group calls (no account required to join)
- **Editable messages:** Edit sent messages within a time window
