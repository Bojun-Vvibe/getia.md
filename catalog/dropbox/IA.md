---
brand: Dropbox
tagline: "Cloud storage simplified. Sync, share, Paper docs, Sign, Replay."
category: Productivity
website: https://dropbox.com
---

# Dropbox — Information Architecture

## Overview

Dropbox is a cloud file storage pioneer focused on simplicity. The mental model is **a magic folder** — files saved to Dropbox sync everywhere automatically. Key differentiators: Smart Sync (on-demand files), Dropbox Paper (collaborative docs), Dropbox Sign (e-signatures), Replay (video review), Capture (screenshots/recordings), and deep OS-level integration (Finder/Explorer overlay icons).

## Site Map

```
├── Home
│   ├── Suggested Files (AI-recommended)
│   ├── Starred
│   ├── Recent Activity
│   └── Welcome / Getting Started
├── All Files
│   ├── Folder Browser (tree)
│   ├── File Preview
│   ├── Upload
│   └── Actions (share, move, copy, rename, delete, version history)
├── Shared
│   ├── Shared by You
│   ├── Shared with You
│   ├── Links (shared link management)
│   └── Shared Folders
├── File Requests
│   ├── Create Request (others upload to your Dropbox)
│   └── Manage Requests
├── Deleted Files (trash, 30/180 day recovery)
├── Paper (Collaborative Docs)
│   ├── All Docs
│   ├── Created by Me
│   ├── Shared with Me
│   ├── Doc Editor (rich text + media + task lists)
│   └── Templates
├── Replay (Video Review)
│   ├── Projects
│   ├── Video Player (frame-accurate comments)
│   └── Version Comparison
├── Sign (E-Signatures)
│   ├── Send for Signature
│   ├── Templates
│   ├── Completed Documents
│   └── Waiting for Others
├── Capture (Screenshots)
│   ├── Screenshots
│   ├── Screen Recordings
│   └── GIFs
├── Transfer (Large File Sending)
│   ├── Create Transfer (up to 100GB)
│   ├── Sent Transfers
│   └── Received
├── Admin Console (Business)
│   ├── Members
│   ├── Groups
│   ├── Storage Usage
│   ├── Activity Log
│   ├── Security (2FA, SSO, device approvals)
│   └── Settings
├── Settings
│   ├── General (name, email, photo)
│   ├── Plan & Billing
│   ├── Security (2FA, sessions, devices)
│   ├── Notifications
│   ├── Connected Apps
│   ├── Preferences (language, date format)
│   └── Refer a Friend
└── Desktop App
    ├── System Tray Menu
    ├── Selective Sync
    ├── Smart Sync (online-only files)
    └── Sync Status
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed | Home, All Files, Shared, File Requests, Deleted, Paper, Replay, Sign, Capture |
| **Top Bar** | Fixed | Search, notifications, create/upload, profile |
| **Breadcrumbs** | Above file list | Home > Folder > Subfolder |
| **View Toggle** | Top right | Grid / List |
| **Right Panel** | Slide-out | File details, activity, sharing info |
| **Context Menu** | Right-click | Share, Download, Move, Rename, etc. |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| File | name, path, size, type, modified_at, shared_links[], versions[] | in Folder |
| Folder | name, path, shared_with[], color | contains Files and Folders |
| SharedLink | url, permissions, password, expiry, downloads_count | belongs to File/Folder |
| Version | number, modified_by, modified_at, size | belongs to File |
| PaperDoc | title, body, collaborators[], comments[] | standalone |
| FileRequest | title, destination_folder, deadline, description | belongs to User |
| Transfer | files[], recipients[], expires_at, downloaded | belongs to User |
| SignRequest | document, signers[], status, completed_at | belongs to User |

## User Flows

### Upload & Share
```
All Files → Upload → Select file → File syncs → Right-click → Share → Create link → Copy → Send to colleague
```

### File Request
```
File Requests → Create → Name + destination folder → Generate link → Send to external people → They upload → Files appear in your Dropbox
```

### Paper Doc
```
Paper → Create Doc → Write with rich text → @mention teammate → Add task list → Share → Collaborate in real-time
```

### New User Onboarding
```
Visit Dropbox → Sign Up (email/Google/SSO) → Complete profile → Guided setup wizard → Configure preferences → Explore key features → Start using the product
                                                                                                                         ↘ Skip wizard → Land on dashboard
```
### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
## URL / Route Structure

```
/home                      → Home
/all-files                 → All Files
/all-files/:path           → Folder
/preview/:fileId           → File preview
/shared                    → Shared files
/file-requests             → File requests
/deleted-files             → Trash
/paper                     → Paper docs
/paper/:docId              → Paper doc
/replay                    → Replay projects
/sign                      → Sign dashboard
/capture                   → Captures
/transfer                  → Transfers
/settings                  → Settings
/admin                     → Admin console
account  → Account settings
account/security  → Security settings
billing  → Billing & subscription
notifications  → Notification preferences
help  → Help center
/sharing                          → Shared links & folders
/events                           → Activity feed
/deleted-files                    → Deleted files
/account                          → Account settings
/account/plan                     → Plan & billing
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Global | File type, modified date, shared status, owner, location | Relevance, Name, Modified, Size |
| Folder | Type, Date | Name, Modified, Size, Type |
| Paper | Created by, Date | Modified, Name |

- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop | Sidebar + file grid/list + detail panel |
| Tablet | Collapsed sidebar, file grid |
| Mobile | Bottom tabs (Home, Files, Shared, Search), list view only |


### Platform-Specific Patterns
- Touch targets: minimum 44x44pt on mobile for accessibility
- Swipe gestures: swipe to delete, archive, or perform quick actions
- Pull-to-refresh: standard refresh pattern on feeds and lists
- Keyboard shortcuts: comprehensive shortcuts on desktop for power users
- Dark mode: system-preference detection with manual override
- Offline support: cached data available without network connectivity
- Progressive loading: skeleton screens while content loads

### Dropbox-Specific UX Patterns
- **Progressive disclosure**: Complex features hidden behind expandable sections
- **Contextual actions**: Right-click menus and hover-revealed action buttons
- **Inline editing**: Click-to-edit fields without navigating to a separate page
- **Batch operations**: Multi-select with bulk actions (delete, move, archive, tag)
- **Undo support**: Non-destructive actions with undo toast notifications
- **Loading states**: Skeleton screens and progress indicators during async operations
- **Empty states**: Helpful illustrations and CTAs when sections have no content
- **Onboarding tooltips**: First-time user guidance highlighting key features

### Accessibility
- WCAG 2.1 AA compliance across all interactive elements
- Semantic HTML with proper ARIA labels and landmarks
- Keyboard navigation support for all core workflows
- Screen reader compatibility tested with VoiceOver, NVDA, and JAWS
- Color contrast ratios meeting minimum 4.5:1 for body text
- Focus indicators visible on all interactive elements
- Reduced motion option respecting `prefers-reduced-motion`
- Resizable text up to 200% without content loss

## Access Control

| Role | View | Upload | Share | Delete | Admin |
|------|------|--------|-------|--------|-------|
| Viewer | ✅ | — | — | — | — |
| Editor | ✅ | ✅ | ✅ | Own | — |
| Owner | ✅ | ✅ | ✅ | ✅ | — |
| Team Admin | ✅ | ✅ | ✅ | ✅ | ✅ |


### Security Features
- Single Sign-On (SSO) support via SAML 2.0 and OIDC (Team/Enterprise)
- Two-factor authentication (TOTP, SMS, hardware keys)
- API token management with scoped permissions
- Session management: configurable timeout, forced logout
- Audit logging for security-sensitive actions
- Data encryption at rest (AES-256) and in transit (TLS 1.3)
- SOC 2 Type II compliance