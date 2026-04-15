# Email Client — Information Architecture

## Overview

A web/desktop email client (Gmail, Outlook, Hey style). The mental model is an **inbox** — messages arrive, get triaged (read, reply, archive, delete), and are organized into folders/labels. Speed of triage and search are the primary UX drivers.

## Site Map

```
├── Inbox
│   ├── Primary / Focused
│   ├── Social
│   ├── Promotions
│   ├── Updates
│   └── Spam
├── Compose (modal / full-page)
│   ├── To / CC / BCC
│   ├── Subject
│   ├── Rich Text Body
│   ├── Attachments
│   ├── Formatting Toolbar
│   ├── Schedule Send
│   └── Send / Save Draft
├── Message View
│   ├── Header (from, to, date, subject)
│   ├── Body (HTML rendered)
│   ├── Attachments List
│   ├── Reply / Reply All / Forward
│   ├── Thread (collapsed conversation)
│   └── Actions (archive, delete, snooze, label, move, mark)
├── Folders / Labels
│   ├── Inbox
│   ├── Starred / Flagged
│   ├── Sent
│   ├── Drafts
│   ├── Scheduled
│   ├── Snoozed
│   ├── All Mail
│   ├── Spam
│   ├── Trash
│   └── Custom Labels / Folders
├── Search
│   ├── Full-text Search
│   ├── Advanced Search (from, to, date, has:attachment, label)
│   └── Search Results
├── Contacts
│   ├── Contact List
│   ├── Contact Detail
│   ├── Groups
│   └── Import / Export
├── Calendar (integrated, optional)
│   └── Quick View / Link to Calendar App
├── Settings
│   ├── General (language, density, theme)
│   ├── Accounts (connected accounts, aliases)
│   ├── Filters & Rules
│   ├── Labels / Folders Management
│   ├── Signatures
│   ├── Vacation Responder
│   ├── Forwarding & POP/IMAP
│   ├── Notifications
│   ├── Keyboard Shortcuts
│   └── Privacy & Security
└── Help
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible | Compose button, folder/label tree, storage indicator |
| **Message List** | Center column | Sender, subject, snippet, date, star, checkbox |
| **Reading Pane** | Right column or below list | Message content, reply inline |
| **Top Bar** | Fixed header | Search bar, settings gear, account switcher, help |
| **Action Bar** | Above message list / reading pane | Archive, Delete, Move, Label, Mark Read/Unread, Snooze |
| **Compose** | Floating modal (bottom-right) or full-screen | Multi-compose (multiple drafts open) |

### Layout Modes
```
[Sidebar (200px)] | [Message List (350px)] | [Reading Pane (flex)]   ← 3-column (default)
[Sidebar (200px)] | [Message List (full)]                           ← List-only (click opens full message)
[Sidebar (200px)] | [Message List (full)] / [Reading Pane (below)]  ← Horizontal split
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Message | from, to[], cc[], bcc[], subject, body_html, body_text, date, read, starred, labels[], snippet | belongs to Thread |
| Thread | subject, messages[], participants[], last_message_date, unread_count | contains Messages |
| Label / Folder | name, color, type (system/user), unread_count, parent_id | many-to-many with Threads |
| Attachment | filename, size, mime_type, url, thumbnail | belongs to Message |
| Contact | name, email, avatar, company, phone | linked to Messages |
| Draft | to, subject, body, attachments[], last_saved | special Message state |
| Filter / Rule | conditions[], actions[] (label, archive, forward, delete) | applies to incoming Messages |
| Signature | name, content_html, default | belongs to Account |

### Message States
`unread → read → replied → forwarded`
`inbox → archived → trashed → permanently deleted`
`snoozed (returns to inbox at specified time)`

## User Flows

### Read & Triage
```
Open App → Inbox → Scan List → Click Message → Read → Reply / Archive / Delete → Next Message
```

### Compose & Send
```
[Compose] → Add Recipients → Subject → Write Body → Attach Files → Send (or Schedule)
```

### Search
```
Search Bar → Type Query → Results (with highlights) → Open Message → Return to Results
```

### Bulk Triage
```
Inbox → Select Multiple (checkbox) → Action Bar → Archive All / Label / Delete
```

### Filter Setup
```
Settings → Filters → Create Filter → Define Conditions (from, subject contains) → Set Actions (label, skip inbox) → Save
```

## URL / Route Structure

```
/                          → Inbox
/inbox                     → Inbox
/inbox/:category           → Category (social, promotions, updates)
/starred                   → Starred
/sent                      → Sent
/drafts                    → Drafts
/scheduled                 → Scheduled
/snoozed                   → Snoozed
/all                       → All Mail
/spam                      → Spam
/trash                     → Trash
/label/:name               → Custom Label
/thread/:id                → Thread View
/compose                   → New Compose
/compose?to=:email         → Pre-filled Compose
/search?q=:query           → Search Results
/contacts                  → Contacts
/settings                  → Settings
/settings/filters          → Filters & Rules
/settings/labels           → Label Management
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort |
|---------|-------------|-------------------|------|
| Global | Subject, body, sender, recipient, attachment names | From, To, Has Attachment, Date Range, Label, Read/Unread, Starred | Date (newest), Relevance |
| Contacts | Name, email | Group | Name, Recent |

### Search Operators
```
from:alice@example.com to:me subject:"project update"
has:attachment larger:5mb after:2024/01/01 before:2024/06/01
is:unread label:work -in:trash
```

## Responsive Behavior

| Breakpoint | Layout | Compose |
|------------|--------|---------|
| Desktop (≥1280px) | 3-column (sidebar + list + reading pane) | Floating modal |
| Tablet (768–1279px) | 2-column (sidebar collapses, list + reading pane) | Full-screen overlay |
| Mobile (<768px) | Single column (list → message → back) | Full-screen |

### Mobile Adaptations
- Swipe right to archive, swipe left to delete
- Pull-to-refresh inbox
- Floating compose FAB
- Bottom sheet for message actions
- Compact message list (avatar + sender + subject + time)

## Access Control

| Role | Read | Send | Manage Filters | Admin | Delegation |
|------|------|------|---------------|-------|------------|
| User | Own mail | ✅ | ✅ | — | — |
| Delegate | Delegated mailbox | On behalf of | — | — | Limited |
| Admin (org) | Audit logs | ✅ | Organization rules | ✅ | Grant |

### Privacy & Security
- End-to-end encryption (optional)
- Confidential mode (expire, no forward)
- 2FA required
- External sender warnings
- Phishing/spam detection indicators
