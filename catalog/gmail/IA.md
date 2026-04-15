---
brand: Gmail
tagline: "Google's email. Fast search, smart categories, and deep Google Workspace integration."
category: Email
website: https://mail.google.com
---

# Gmail — Information Architecture

## Overview

Gmail is Google's web-based email client serving over 1.8 billion users. The mental model is **label-based organization with powerful search** — unlike traditional folder systems, Gmail uses labels (tags) that allow a single email to exist in multiple categories. Messages are automatically grouped into conversation threads. Gmail differentiates through Google-grade search, smart inbox categories (Primary, Social, Promotions, Updates), AI-powered features (Smart Reply, Smart Compose, email summaries), and deep integration with Google Workspace (Calendar, Meet, Drive, Docs, Chat, Tasks).

## Site Map

```
├── Inbox
│   ├── Tabbed Categories (optional)
│   │   ├── Primary (person-to-person)
│   │   ├── Social (social network notifications)
│   │   ├── Promotions (marketing emails)
│   │   ├── Updates (receipts, bills, automated)
│   │   └── Forums (mailing lists, group emails)
│   ├── Focused View (AI-prioritized)
│   └── Unread First / Starred First / Priority Inbox (customizable sections)
├── Compose
│   ├── Floating Compose Window (bottom-right, multiple)
│   │   ├── To / CC / BCC (autocomplete from Contacts)
│   │   ├── Subject Line
│   │   ├── Rich Text Body (formatting toolbar)
│   │   ├── Smart Compose (AI inline suggestions)
│   │   ├── Attachments (local files)
│   │   ├── Google Drive Insert (link or attach)
│   │   ├── Emoji
│   │   ├── Confidential Mode (expiry, passcode)
│   │   ├── Schedule Send
│   │   ├── Signature (per account)
│   │   └── Send / Undo Send (configurable delay)
│   ├── Reply / Reply All / Forward (inline in thread)
│   └── Full-Screen Compose (expand)
├── Conversation Thread View
│   ├── Thread Header (subject, labels)
│   ├── Collapsed Messages (sender + snippet)
│   ├── Expanded Message
│   │   ├── Sender (name, email, profile pic)
│   │   ├── To / CC (expandable)
│   │   ├── Timestamp
│   │   ├── Body (HTML rendered)
│   │   ├── Attachments (inline preview + download)
│   │   ├── Smart Reply (3 quick-reply chips)
│   │   ├── AI Summary (Gemini)
│   │   └── Reply / Reply All / Forward buttons
│   └── Actions (Archive, Delete, Snooze, Move to, Label, More)
├── System Labels / Folders
│   ├── Inbox
│   ├── Starred ⭐
│   ├── Snoozed 💤
│   ├── Important (Priority markers)
│   ├── Sent
│   ├── Scheduled
│   ├── Drafts
│   ├── All Mail
│   ├── Spam
│   ├── Trash (auto-delete after 30 days)
│   └── Categories (Social, Updates, Promotions, Forums)
├── User-Created Labels
│   ├── Label A (color-coded)
│   │   └── Sub-label A1 (nested)
│   ├── Label B
│   └── Create New Label
├── Google Chat (integrated panel)
│   ├── Chat (1:1 + group)
│   ├── Spaces (channels-like)
│   └── Meet (video call shortcuts)
├── Google Meet (integrated)
│   ├── New Meeting
│   ├── Join Meeting
│   └── Scheduled Meetings
├── Search
│   ├── Search Bar (top, always visible)
│   ├── Search Chips (quick filters below search)
│   │   ├── From, To, Is:unread, Has:attachment
│   │   ├── Date range
│   │   └── Exclude calendar/promotions
│   ├── Advanced Search (expand with ▾)
│   └── Search Operators
├── Google Tasks (integrated)
│   ├── My Tasks
│   ├── Add from Email (turn email into task)
│   └── Task Lists
├── Google Calendar (side panel)
│   ├── Mini calendar
│   ├── Today's agenda
│   └── Create Event
├── Google Keep (side panel)
│   ├── Quick notes
│   └── Pin to email
├── Contacts (Google Contacts)
│   ├── Integrated address book
│   └── Contact groups
├── Settings
│   ├── General
│   │   ├── Language, Page Size, Undo Send Delay
│   │   ├── Default Reply Behavior
│   │   ├── Conversation View (on/off)
│   │   ├── Nudges (reply/follow-up reminders)
│   │   ├── Smart Features (Compose, Reply, categorization)
│   │   └── Desktop Notifications
│   ├── Labels (show/hide/manage)
│   ├── Inbox (type: Default/Important First/Unread First/Starred First/Priority Inbox, categories)
│   ├── Accounts and Import (send mail as, POP/IMAP, delegates)
│   ├── Filters and Blocked Addresses (rules)
│   ├── Forwarding and POP/IMAP
│   ├── Add-ons
│   ├── Chat and Meet (enable/disable)
│   ├── Advanced (templates, auto-advance, custom keyboard shortcuts)
│   ├── Offline
│   └── Themes
└── Gemini AI Panel (right side)
    ├── Summarize emails
    ├── Draft reply with AI
    ├── Ask questions about email
    └── Contextual suggestions
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible to icons | Compose button, Inbox, Starred, Snoozed, Sent, Drafts, labels tree, Chat, Spaces, Meet |
| **Message List** | Center column | Checkbox, Star, Sender, Subject+Snippet, Labels, Attachment icon, Date |
| **Reading Pane** | Right column (optional) or click-to-open | Conversation thread; inline reply |
| **Top Bar** | Fixed header | Search bar (prominent), Support, Settings gear, Grid menu (Google apps), Profile |
| **Action Bar** | Above message list (contextual) | Archive, Report spam, Delete, Mark read/unread, Snooze, Move to, Label as |
| **Compose Window** | Floating bottom-right (multiple) | Pop-out windows; can minimize, maximize, open multiple drafts |
| **Side Panel** | Right edge (collapsible) | Calendar, Keep, Tasks, Contacts, Add-ons, Gemini |
| **Chat Panel** | Left sidebar (below labels) | Google Chat and Spaces integrated into Gmail |

### Layout Modes
```
Default:          [Sidebar 68px] | [Message List 350px] | [Reading Pane (flex)]
No Reading Pane:  [Sidebar 68px] | [Message List (full, click to open thread)]
Below Reading:    [Sidebar 68px] | [Message List (top)] / [Reading Pane (bottom)]
```

### Sidebar Structure
```
[✏️ Compose]
─────────────
📥 Inbox (1,234)
⭐ Starred
💤 Snoozed
📨 Sent
📝 Drafts (3)
─────────────
📁 Categories ▾
  Social
  Updates
  Forums
  Promotions
─────────────
🏷 Labels ▾
  Work (blue)
    Client A
    Client B
  Personal (green)
  Travel (yellow)
  [+ Create new label]
─────────────
📧 All Mail
⚠ Spam (12)
🗑 Trash
─────────────
💾 Storage: 8.2 GB / 15 GB
─────────────
💬 Chat ▾
  Recent conversations
🏢 Spaces ▾
  Team workspace
📹 Meet
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Message | from, to[], cc[], bcc[], subject, body_html, body_text, date, snippet, size_estimate, internal_date | belongs to Thread; has Attachments, Labels |
| Thread | id, messages[], history_id, snippet | contains Messages; has Labels |
| Label | id, name, type (system/user), visibility (labelShow/labelHide), color, unread_count, total_count | many-to-many with Threads |
| Attachment | filename, mime_type, size, attachment_id, thumbnail | belongs to Message |
| Draft | message (partial), last_saved | special Message state |
| Filter | criteria (from, to, subject, has_words, size, has_attachment), actions (label, archive, delete, star, forward, categorize, mark_important) | applies to incoming Messages |
| Signature | name, content_html, is_default | per send-as address |
| Contact | name, email[], phone[], organization, photo | linked to Messages via address |
| Delegate | email, status (pending/active), permission (read/send) | access to another user's mailbox |

### Message States
```
unread → read → replied (↩) → forwarded (→)
inbox → archived (remove inbox label) → trashed → permanently deleted (30 days)
snoozed (returns to inbox at specified time/place)
important (AI-predicted or manual ⚡)
starred (⭐ with optional star colors/types)
```

### Label System (vs. Folders)
- A message can have **multiple labels** simultaneously (unlike folders)
- System labels: INBOX, SENT, DRAFT, SPAM, TRASH, STARRED, IMPORTANT
- Categories: CATEGORY_SOCIAL, CATEGORY_UPDATES, CATEGORY_PROMOTIONS, CATEGORY_FORUMS
- User labels: unlimited, nested, color-coded
- **Archive = remove INBOX label** (message still in All Mail)

## User Flows

### Read & Triage (Inbox Zero)
```
Open Gmail → Inbox → Scan list → Open thread → Read → Reply (Smart Reply / full) → Archive (e or swipe) → Next thread → Repeat
```

### Compose & Send
```
[Compose] button → Floating window → Type To (autocomplete) → Subject → Body (Smart Compose AI suggestions) → Attach (local / Drive) → Send → Undo Send (5/10/20/30 sec window)
```

### Label & Organize
```
Select messages (checkbox) → Label As → Choose label → Apply → Messages tagged → View label in sidebar
```

### Snooze
```
Open email → Snooze (🕐) → Pick time (Tomorrow, Next Week, Pick date/time) → Email disappears → Reappears at chosen time in inbox
```

### Filter Creation
```
Open email → More (⋮) → "Filter messages like this" → Customize criteria → Choose actions (skip inbox, label, star, forward) → Create Filter → Optionally apply to existing matches
```

### Bulk Actions
```
Select All on page → "Select all X conversations matching this search" → Archive All / Delete / Label → Process entire category at once
```

### Search Power User
```
Search bar → "from:boss@company.com has:attachment after:2024/01/01 subject:quarterly" → Results → Click to open → ← Back to results
```

## URL / Route Structure

```
/                              → Inbox (redirect)
/mail/u/0/#inbox               → Inbox
/mail/u/0/#inbox/:category     → Category tab (social, promotions, updates, forums)
/mail/u/0/#starred             → Starred
/mail/u/0/#snoozed             → Snoozed
/mail/u/0/#sent                → Sent
/mail/u/0/#drafts              → Drafts
/mail/u/0/#scheduled           → Scheduled
/mail/u/0/#all                 → All Mail
/mail/u/0/#spam                → Spam
/mail/u/0/#trash               → Trash
/mail/u/0/#label/:labelName    → User label
/mail/u/0/#label/:parent/:child → Nested label
/mail/u/0/:threadId            → Thread view
/mail/u/0/#search/:query       → Search results
/mail/u/0/?compose=new         → New compose
/mail/u/0/?compose=:draftId    → Open draft
/mail/u/0/#settings/general    → Settings (hash-based tabs)
/mail/u/0/#settings/filters    → Filters
/mail/u/0/#settings/labels     → Label management
```

Note: `/u/0/` = first account; `/u/1/` = second account (multi-account support).

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Global (top bar) | Subject, body, sender, recipient, attachment names, labels | From, To, Subject, Has Words, Doesn't Have, Size, Date Within, Has Attachment, Is (read/unread/starred/snoozed/important) | Date (newest), Relevance |
| Search Chips (below bar) | Quick filter refinement | From (dropdown), To, Is:unread, Has:attachment, Date range | — |
| Contacts | Name, email | Groups | Name, Recent |

### Search Operators (Gmail-specific)
```
from:alice@example.com          to:bob@example.com
subject:"project update"        "exact phrase in body"
has:attachment                  has:drive (Google Drive links)
filename:pdf                    filename:report.xlsx
larger:5M                       smaller:1M
after:2024/01/01                before:2024/06/01
in:inbox                        in:sent                in:trash
is:unread                       is:starred             is:important
is:snoozed                      label:work             -label:spam
category:primary                category:social
newer_than:2d                   older_than:1y
has:userlabels                  has:nouserlabels
deliveredto:alias@gmail.com     list:info@listname.com
AROUND 5 (word1 AROUND 5 word2) → proximity search
```

## Responsive Behavior

| Breakpoint | Layout | Compose |
|------------|--------|---------|
| Desktop (≥1280px) | Sidebar + message list + reading pane (3-column) | Floating modal (bottom-right) |
| Tablet (768–1279px) | Sidebar collapses to icons, list + reading pane | Full-screen overlay |
| Mobile (<768px) | Bottom nav (Mail, Chat, Spaces, Meet), single-column list | Full-screen compose |

### Mobile App (Gmail for iOS/Android)
- Swipe right to archive, swipe left to delete (configurable)
- Pull-to-refresh
- Floating Compose FAB button
- Bottom sheet for message actions
- Unified inbox (multiple accounts)
- Smart Reply chips at bottom of thread
- Widget: unread count, message preview
- Notification actions: Archive, Reply

### Tablet App
- Split view (list + reading pane)
- Multi-select with checkboxes
- Drag-and-drop to labels

## Access Control

| Role | Read | Send | Manage Filters | Delegate | Admin |
|------|------|------|---------------|----------|-------|
| User | Own mail | ✅ | ✅ | Grant delegation | — |
| Delegate | Delegated mailbox | Send "on behalf of" | — | — | — |
| Google Workspace Admin | Audit logs, compliance | ✅ | Organization-wide rules | Grant | User management, DLP, retention |

### Privacy & Security Features
- **Confidential Mode**: Set expiry date; require SMS passcode; disable forwarding/copy/print/download
- **Undo Send**: Configurable 5/10/20/30 second delay
- **2FA / Advanced Protection Program** (security keys)
- **External sender warning** (banner on first-time senders)
- **Phishing/malware detection** (Google Safe Browsing)
- **S/MIME encryption** (Workspace Enterprise)
- **Client-side encryption** (CSE, Workspace Enterprise Plus)
- **Information Rights Management** via Google Vault
