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
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Global | File type, modified date, shared status, owner, location | Relevance, Name, Modified, Size |
| Folder | Type, Date | Name, Modified, Size, Type |
| Paper | Created by, Date | Modified, Name |

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop | Sidebar + file grid/list + detail panel |
| Tablet | Collapsed sidebar, file grid |
| Mobile | Bottom tabs (Home, Files, Shared, Search), list view only |

## Access Control

| Role | View | Upload | Share | Delete | Admin |
|------|------|--------|-------|--------|-------|
| Viewer | ✅ | — | — | — | — |
| Editor | ✅ | ✅ | ✅ | Own | — |
| Owner | ✅ | ✅ | ✅ | ✅ | — |
| Team Admin | ✅ | ✅ | ✅ | ✅ | ✅ |
