---
brand: 1Password
tagline: "Password manager. Vaults, Watchtower security alerts, passkey support, family/team sharing."
category: Security
website: https://1password.com
---

# 1Password — Information Architecture

## Overview

1Password is a password manager built around **vaults** — encrypted containers that organize credentials, documents, and secrets. The mental model is a **secure digital wallet** — users store logins, credit cards, notes, and identities, then autofill them in browsers/apps. Key differentiators: Watchtower (security monitoring), Travel Mode (hide vaults at borders), Secret Key (defense-in-depth beyond master password), passkey support, and developer tools (SSH keys, CLI secrets).

## Site Map

```
├── All Items
│   ├── Favorites
│   ├── Recently Used
│   ├── Login Items
│   ├── Credit Cards
│   ├── Secure Notes
│   ├── Identities
│   ├── Passwords
│   ├── Documents
│   ├── Software Licenses
│   ├── SSH Keys
│   ├── API Credentials
│   ├── Passkeys
│   └── Custom Categories
├── Vaults
│   ├── Personal Vault
│   ├── Shared Vault (family/team)
│   ├── Travel Vault (Travel Mode)
│   └── + Create Vault
├── Watchtower
│   ├── Security Score (overall)
│   ├── Compromised Passwords (Have I Been Pwned)
│   ├── Weak Passwords
│   ├── Reused Passwords
│   ├── Two-Factor Available (sites that support 2FA but you haven't enabled)
│   ├── Expiring Items
│   ├── Unsecured Websites (HTTP)
│   └── Vulnerable Passwords (known breaches)
├── Item Detail
│   ├── Username
│   ├── Password (masked, reveal toggle, copy)
│   ├── TOTP (one-time code, auto-copies)
│   ├── Website URL(s)
│   ├── Notes
│   ├── Tags
│   ├── Custom Fields
│   ├── Password History
│   ├── Vault Assignment
│   ├── Sharing Status
│   └── Created / Modified Dates
├── Password Generator
│   ├── Type (random, memorable, PIN)
│   ├── Length
│   ├── Options (numbers, symbols, uppercase)
│   └── History
├── Browser Extension (1Password in the browser)
│   ├── Inline Autofill Suggestions
│   ├── Save New Login Prompt
│   ├── Password Generator
│   ├── Quick Access (⌘+⇧+X)
│   └── Passkey Creation/Authentication
├── Quick Access (Desktop)
│   ├── ⌘+⇧+Space → Search all items
│   ├── Quick Copy (password, username, TOTP)
│   └── Open in Browser
├── Sharing
│   ├── Share Item (via link, expiring)
│   ├── Shared Vaults
│   └── Guest Access (time-limited)
├── Family / Team
│   ├── Members
│   ├── Groups
│   ├── Vault Permissions
│   ├── Recovery (account recovery for family members)
│   └── Activity Log
├── Developer Tools
│   ├── SSH Agent (use SSH keys from 1Password)
│   ├── CLI (op commands)
│   ├── Connect Server (secrets injection for infra)
│   └── Service Accounts
├── Settings
│   ├── General (language, appearance, default vault)
│   ├── Security (auto-lock timeout, biometrics, 2FA)
│   ├── Vaults (create, manage, delete)
│   ├── Browsers & Apps (extension settings)
│   ├── Notifications (Watchtower alerts)
│   ├── Import / Export
│   ├── Emergency Kit
│   ├── Travel Mode
│   └── Billing / Subscription
└── Apps
    ├── macOS (native)
    ├── iOS (autofill system-wide)
    ├── Windows (Windows Hello)
    ├── Android (autofill system-wide)
    ├── Linux
    ├── Browser Extensions (Chrome, Firefox, Safari, Edge)
    ├── CLI (op)
    └── Web App
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed | All Items, Favorites, Categories (expandable), Vaults, Tags, Watchtower |
| **Top Bar** | Fixed | Search (⌘+F), New Item (+), account avatar, lock |
| **Item List** | Center column | Filtered by sidebar selection, sortable |
| **Item Detail** | Right panel | All fields, edit, share, move, archive, delete |
| **Quick Access** | Global shortcut (⌘+⇧+Space) | Floating search → instant item access |
| **Browser Extension** | Popup or inline | Autofill suggestions below form fields |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Item | title, type, fields[], tags[], vault_id, favorite, created, modified | belongs to Vault |
| Vault | name, icon, type (personal/shared/travel), members[] | has many Items |
| Field | label, value (encrypted), type (concealed/text/url/totp/date), section | belongs to Item |
| Tag | name | many-to-many with Items |
| User | name, email, role, status, recovery_group | belongs to Family/Team |
| WatchtowerAlert | type, severity, item_id, description | references Item |
| ShareLink | item_id, expires_at, view_count, max_views | belongs to Item |
| ServiceAccount | name, token, vault_access[] | belongs to Team |

### Item Types
```
login | credit_card | secure_note | identity | password | document | software_license |
ssh_key | api_credential | passkey | database | server | wireless_router |
medical_record | bank_account | driver_license | passport | membership | reward_program
```

## User Flows

### Save & Autofill
```
Visit website → Login form → 1Password suggests save → Save to vault → Next visit → 1Password autofill → Done
```

### Security Audit
```
Watchtower → Review weak passwords → Click item → Generate new password → Update on website → Security score improves
```

### Share Credential
```
Item Detail → Share → Create link (set expiry + view limit) → Copy link → Send to colleague → They view once → Link expires
```

### Travel Mode
```
Settings → Travel Mode → Enable → Only "safe for travel" vaults visible → Cross border → Disable Travel Mode → All vaults return
```

## URL / Route Structure

```
/                          → All Items
/vaults/:id                → Vault
/items/:id                 → Item Detail
/categories/:type          → Category filter
/favorites                 → Favorites
/tags/:tag                 → Tag filter
/watchtower                → Security dashboard
/watchtower/:alertType     → Alert category
/generator                 → Password generator
/settings                  → Settings
/family                    → Family/Team management
/developer                 → Developer tools
/import                    → Import
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| Global (⌘F) | Vault, Category, Tag, Favorite | Name, Date Modified, Date Created |
| Quick Access | All items, instant | Relevance, Recent |
| Watchtower | Alert type, severity | Severity, Date |

## Responsive Behavior

| Platform | Layout |
|----------|--------|
| Desktop | 3-column: sidebar + item list + item detail |
| Tablet | 2-column: sidebar + list (detail as overlay) |
| Mobile | Single column: list → detail (push navigation) |
| Browser Extension | Compact popup (280px wide) |

## Access Control

| Role | View Own Vault | Shared Vaults | Watchtower | Admin |
|------|---------------|---------------|------------|-------|
| Individual | ✅ | — | Own items | — |
| Family Member | ✅ | Shared family | ✅ | — |
| Family Organizer | ✅ | ✅ | ✅ | Manage members, recovery |
| Team Member | ✅ | Assigned vaults | ✅ | — |
| Team Admin | ✅ | All | ✅ | ✅ (policies, audit log, provisioning) |
