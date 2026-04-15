# File Storage — Information Architecture

## Overview

A cloud file storage and sharing platform (Dropbox, Google Drive, OneDrive, Box style). The mental model is a **file system in the cloud** — folders and files organized hierarchically, with sharing, sync, and collaboration features layered on top.

## Site Map

```
├── Home / Dashboard
│   ├── Quick Access / Suggested Files
│   ├── Recent Files
│   ├── Starred / Favorites
│   ├── Notifications (shared with you, comments)
│   └── Storage Usage
├── My Files
│   ├── Folder Browser (tree / grid / list)
│   │   ├── Folders (nested)
│   │   └── Files
│   └── File / Folder Actions
│       ├── Open / Preview
│       ├── Download
│       ├── Share (link / people)
│       ├── Move / Copy
│       ├── Rename
│       ├── Star / Favorite
│       ├── Version History
│       ├── Details / Info Panel
│       └── Delete (move to trash)
├── Shared with Me
│   ├── Files shared by others
│   └── Shared Folders
├── Shared Drives / Team Folders
│   ├── Team Drive A
│   ├── Team Drive B
│   └── (Organization-managed shared storage)
├── Starred / Favorites
├── Recent
├── File Preview / Viewer
│   ├── Document Viewer (PDF, Office docs)
│   ├── Image Viewer
│   ├── Video Player
│   ├── Code Viewer (syntax highlighted)
│   └── Comment Panel
├── Search
│   ├── File name search
│   ├── Full-text search (inside documents)
│   ├── Image search (OCR / visual)
│   └── Advanced search with filters
├── Trash
│   ├── Deleted items
│   ├── Restore
│   └── Delete permanently
├── Offline Files (mobile/desktop)
├── Activity / History
│   ├── My Activity
│   └── File Activity (per file)
├── Settings
│   ├── General (language, display density)
│   ├── Notifications
│   ├── Storage & Quota
│   ├── Connected Apps
│   ├── Sync Settings (desktop)
│   ├── Security (2FA, sessions)
│   └── Plan & Billing
└── Desktop / Mobile Sync
    ├── Sync Status
    ├── Selective Sync (choose folders)
    └── Smart Sync (on-demand files)
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed | Home, My Files, Shared, Starred, Recent, Trash |
| **Breadcrumb Bar** | Top of content area | My Files > Folder A > Subfolder B |
| **View Switcher** | Top-right toolbar | Grid (thumbnails) / List (details) |
| **Info Panel** | Right sidebar (toggle) | File details, activity, sharing info |
| **Context Menu** | Right-click on file/folder | Share, Download, Rename, Move, Delete, etc. |
| **Drag & Drop** | Files and folders | Move between folders, upload from desktop |
| **Upload** | Top-left button + drag to window | Upload files / folders |

### Sidebar Structure
```
🏠 Home
📁 My Files
👥 Shared with Me
🏢 Team Drives
⭐ Starred
🕐 Recent
🗑 Trash
─────────────
💾 Storage: 12 GB / 15 GB used
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| File | name, type, size, mime_type, thumbnail, created_at, modified_at, owner, path | belongs to Folder; has Versions, Comments, Shares |
| Folder | name, color, created_at, owner, path | contains Files and child Folders |
| SharedLink | url, permissions (view/edit), password, expiry, allow_download | belongs to File/Folder |
| Share | file/folder, shared_with (user/group), permission_level | belongs to File/Folder |
| Version | version_number, size, modified_by, modified_at | belongs to File |
| Comment | body, author, created_at, resolved, anchor (page/region) | belongs to File |
| Activity | action (created/edited/shared/moved/deleted), actor, timestamp | belongs to File/Folder |
| TeamDrive | name, members[], storage_used | has many Folders, Files |

### File Types (with preview support)
```
Documents: pdf, doc/docx, txt, md, rtf
Spreadsheets: xls/xlsx, csv
Presentations: ppt/pptx
Images: jpg, png, gif, svg, webp, raw
Video: mp4, mov, avi, webm
Audio: mp3, wav, flac
Code: js, py, java, html, css, json, yaml
Archives: zip, tar.gz, rar
```

## User Flows

### Upload Files
```
[Upload Button] or Drag to Browser → Select Files → Upload Progress → Files Appear in Current Folder
```

### Share File
```
Right-click File → Share → Enter Email / Create Link → Set Permissions → Copy Link / Send Invite
```

### Collaborate on Document
```
Open File → Preview → [Open in Editor] → Edit (real-time collab) → Auto-save → Version Created
```

### Find Old File
```
Search → Type filename or content → Filter by type/date → Open → Preview or Download
```

### Restore Deleted
```
Trash → Find File → [Restore] → File Returns to Original Location
```

## URL / Route Structure

```
/                          → Home / Dashboard
/files                     → My Files (root)
/files/:folderId           → Folder view
/file/:fileId              → File preview
/file/:fileId/versions     → Version history
/shared                    → Shared with Me
/shared/:driveId           → Team Drive
/starred                   → Starred
/recent                    → Recent
/trash                     → Trash
/search?q=:query           → Search results
/activity                  → Activity log
/settings                  → Settings
/settings/storage          → Storage & quota
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Global | File name, content (full-text), OCR text in images | File Type, Owner, Modified Date, Location (folder), Shared Status, Size | Relevance, Name, Modified, Size |
| Folder | Files in current folder + subfolders | Type, Modified Date | Name, Modified, Size, Type |
| Shared | Shared files | Shared By, Date Shared | Shared Date, Name |

## Responsive Behavior

| Breakpoint | Layout | View | Actions |
|------------|--------|------|---------|
| Desktop (≥1280px) | Sidebar + content + info panel | Grid or list | Right-click context menu |
| Tablet (768–1279px) | Sidebar collapses, content + info toggle | Grid or list | Long-press menu |
| Mobile (<768px) | Bottom tabs (Home, Files, Shared, Search) | List only | Bottom sheet actions |

### Mobile Adaptations
- Camera upload (auto-backup photos)
- Offline files marking (pin for offline)
- Share sheet integration
- Document scanner (camera → PDF)
- Widget (recent files, storage)

### Desktop App
- Finder / Explorer integration
- Selective sync
- Smart sync (cloud-only files with on-demand download)
- Status overlay icons (synced ✓, syncing ⟳, error ✗)
- System tray menu

## Access Control

| Role | View | Upload | Share | Delete | Admin |
|------|------|--------|-------|--------|-------|
| Viewer | ✅ (shared) | — | — | — | — |
| Commenter | ✅ | — | — | — | — |
| Editor | ✅ | ✅ (shared folders) | ✅ | Own files | — |
| Owner | ✅ | ✅ | ✅ | ✅ | Own files |
| Team Admin | ✅ | ✅ | ✅ | ✅ | Team Drive settings |
| Org Admin | ✅ | ✅ | ✅ | ✅ | All settings, audit |

### Sharing Permissions
- **Viewer**: Can view and download
- **Commenter**: Can view and add comments
- **Editor**: Can edit, organize, delete
- **Owner**: Full control including sharing management
- **Link settings**: Anyone with link / Organization only / Specific people
