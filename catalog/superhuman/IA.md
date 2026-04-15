---
brand: Superhuman
tagline: "The fastest email experience. Keyboard-driven, AI triage, split inbox, 100ms UI."
category: Productivity
website: https://superhuman.com
---

# Superhuman — Information Architecture

## Overview

Superhuman is a premium email client built for speed. The mental model is **keyboard-first triage** — every action is a keystroke, the UI responds in under 100ms, and AI handles categorization. Unlike Gmail's tab-based approach, Superhuman uses a **split inbox** (Important vs Other) with an opinionated workflow: process every email to inbox zero. Key differentiators: Superhuman AI (auto-drafts, summaries), Read Statuses (know when emails are opened), Snippets (text expansion), Scheduled Send, Undo Send, and a desktop-app feel with Cmd+K command palette.

## Site Map

```
├── Inbox
│   ├── Important (AI-sorted)
│   ├── Other (newsletters, notifications)
│   ├── Starred
│   └── Done (archived)
├── Split Inbox Sections
│   ├── Team Updates
│   ├── News & Social
│   ├── Marketing
│   ├── Finance
│   └── Custom Splits
├── Compose
│   ├── To / CC / BCC (autocomplete)
│   ├── Subject
│   ├── Body (markdown-style)
│   ├── Snippets (;trigger expansion)
│   ├── AI Write / Shorten / Lengthen
│   ├── Schedule Send
│   ├── Attachments
│   └── Send (⌘+Enter)
├── Message View
│   ├── Conversation Thread
│   ├── Read Status Indicators (eye icon)
│   ├── Quick Actions (e / archive, r / reply, f / forward)
│   ├── Remind Me (snooze)
│   ├── AI Summary
│   └── Social Sidebar (LinkedIn, Twitter, location, timezone)
├── Search
│   ├── Instant Search (⌘+K or /)
│   ├── Advanced Filters (from:, to:, has:, date:)
│   └── Recent Searches
├── Superhuman AI
│   ├── Auto-Triage (split inbox sorting)
│   ├── Write (compose from prompt)
│   ├── Summarize Thread
│   ├── Jot Down (rough notes → polished email)
│   └── Instant Reply Suggestions
├── Reminders
│   ├── Snoozed Messages
│   ├── Follow-up Reminders
│   └── Read Receipt Alerts
├── Snippets
│   ├── Personal Snippets
│   ├── Team Snippets
│   └── Create / Edit Snippet
├── Contacts
│   ├── Social Sidebar (auto-enriched)
│   └── Contact Detail (company, role, timezone)
├── Calendaring (built-in)
│   ├── Availability Sharing
│   └── Calendar Event Preview
├── Settings
│   ├── Account & Signatures
│   ├── Split Inbox Configuration
│   ├── Shortcuts Reference
│   ├── Notification Preferences
│   ├── AI Preferences
│   ├── Read Status Privacy
│   ├── Theme (light/dark/auto)
│   └── Team Management
└── Onboarding
    ├── Concierge Setup (1:1 call)
    ├── Keyboard Shortcuts Tutorial
    └── Import & Migration
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **No sidebar** | Full-screen single pane | Message list fills the viewport — no chrome, maximum focus |
| **Cmd+K** | Command palette | Primary navigation: search, navigate, execute any action |
| **Keyboard shortcuts** | Vim-inspired single keys | j/k = up/down, e = archive, r = reply, f = forward, h = remind, # = delete |
| **Split Inbox Tabs** | Top horizontal tabs | Important / Other / custom splits |
| **Social Sidebar** | Right panel (auto) | Shows sender's info (LinkedIn, photo, timezone) on hover/select |
| **Compose** | Overlays current view | Slides in from bottom, maintains inbox context |

### Key Shortcuts
```
j/k = navigate messages     e = archive (done)      r = reply
f = forward                 ⌘+K = command palette   / = search
h = remind me               # = trash               s = star
⌘+⇧+, = snippets           tab = next split        ⌘+Enter = send
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Message | from, to[], cc[], subject, body, date, read, starred, split_category, read_by[] | belongs to Thread |
| Thread | subject, messages[], last_date, unread_count, split | in Split Inbox category |
| Split | name, rules[], auto (AI) or manual | categorizes Threads |
| ReadStatus | recipient, opened_at, device, location | belongs to sent Message |
| Snippet | trigger (;shortcode), body, variables[], shared | belongs to User or Team |
| Reminder | thread, remind_at, type (snooze/follow-up) | belongs to Thread |
| Contact | name, email, avatar, company, title, timezone, social_links | auto-enriched from email |
| AIAction | type (write/summarize/triage), input, output | triggered on Thread/Message |

## User Flows

### Inbox Zero Workflow
```
Open App → Important tab → Read top message → Reply (r) or Archive (e) → Next message (j) → Repeat → Inbox Zero 🎉
```

### AI Compose
```
Cmd+K → "Write" → Enter prompt ("decline meeting politely") → AI generates draft → Edit → Send
```

### Snippet Usage
```
Compose → Type ";intro" → Snippet expands to full introduction paragraph → Customize variables → Send
```

### Read Status Check
```
Sent folder → Open sent message → See read indicators (who opened, when, how many times)
```

## URL / Route Structure

```
/                          → Inbox (Important split)
/inbox/other               → Other split
/inbox/:splitName          → Custom split
/starred                   → Starred
/sent                      → Sent
/drafts                    → Drafts
/reminders                 → Snoozed + Follow-ups
/done                      → Archived
/thread/:id                → Thread view
/search?q=:query           → Search results
/snippets                  → Snippets manager
/settings                  → Settings
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Global (⌘K) | from:, to:, subject:, has:attachment, date range, in:split | Date, Relevance |
| Inbox | Split (Important/Other/custom), Unread, Starred | Date (newest) |
| Snippets | Personal/Team, keyword | Name, Usage frequency |

## Responsive Behavior

| Context | Layout |
|---------|--------|
| Desktop (primary) | Full-screen single pane, no sidebar, keyboard-driven |
| Mobile (iOS) | Swipe gestures (right=archive, left=remind), bottom compose button |

Superhuman is desktop-first. Mobile is a companion, not the primary experience.

## Access Control

| Role | Inbox | AI Features | Read Status | Snippets | Team Admin |
|------|-------|-------------|-------------|----------|------------|
| Individual | ✅ | ✅ | ✅ | Personal | — |
| Team Member | ✅ | ✅ | ✅ | Personal + Team | — |
| Team Admin | ✅ | ✅ | ✅ | Manage Team Snippets | ✅ |
