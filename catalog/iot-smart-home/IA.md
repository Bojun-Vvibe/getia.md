# IoT / Smart Home Dashboard — Information Architecture

## Overview

A smart home management platform for controlling IoT devices, monitoring sensors, and automating routines (Apple Home, Google Home, Home Assistant, SmartThings style). The mental model is a **digital floor plan** — users think in terms of rooms and scenes, not individual devices. Quick control is the priority: lights, thermostat, locks, and cameras should be adjustable in one or two taps.

## Site Map

```
├── Home (Dashboard)
│   ├── Home Status Summary
│   │   ├── Away / Home / Night / Custom Mode
│   │   ├── Active Alerts (door open, motion detected, leak)
│   │   ├── Energy Usage (today)
│   │   └── Weather / Outdoor Conditions
│   ├── Favorites (pinned device controls)
│   ├── Scenes / Quick Actions
│   │   ├── Good Morning
│   │   ├── Leaving Home
│   │   ├── Movie Night
│   │   └── Bedtime
│   ├── Rooms Overview (visual grid or list)
│   └── Camera Previews (live thumbnails)
├── Rooms
│   ├── Room List (with status indicators)
│   └── Room Detail
│       ├── Devices in Room (controllable tiles)
│       ├── Room Temperature / Humidity
│       ├── Room Scene Shortcuts
│       └── Room Settings (name, icon, wallpaper)
├── Devices
│   ├── All Devices (grouped by type or room)
│   ├── Device Detail
│   │   ├── Current State & Controls
│   │   │   ├── Lights: on/off, brightness, color, color temp
│   │   │   ├── Thermostat: target temp, mode, schedule
│   │   │   ├── Lock: lock/unlock, access log
│   │   │   ├── Camera: live feed, recording, motion zones
│   │   │   ├── Sensor: current reading, history chart
│   │   │   ├── Speaker: playback, volume, grouping
│   │   │   ├── Blinds / Shades: open/close, tilt
│   │   │   └── Plug / Switch: on/off, power usage
│   │   ├── Schedule / Timer
│   │   ├── Automations Using This Device
│   │   ├── Activity Log
│   │   ├── Device Info (model, firmware, signal strength)
│   │   └── Device Settings (name, room, icon)
│   ├── Add Device
│   │   ├── Scan / Discover
│   │   ├── Brand / Type Selection
│   │   ├── Pairing Flow
│   │   └── Assign to Room
│   └── Offline / Unresponsive Devices
├── Automations
│   ├── My Automations (list)
│   ├── Create Automation
│   │   ├── Trigger (time, device state, location, sensor, sunrise/sunset)
│   │   ├── Conditions (if temperature > X, if home mode is Y)
│   │   ├── Actions (control device, send notification, run scene, delay)
│   │   └── Name & Enable/Disable
│   ├── Automation Detail (edit, test, logs)
│   ├── Suggested Automations
│   └── Automation History / Logs
├── Scenes
│   ├── Scene List
│   ├── Create Scene
│   │   ├── Select Devices
│   │   ├── Set Target States (lights 50%, thermostat 72°, blinds closed)
│   │   └── Name & Icon
│   └── Scene Detail (edit, activate)
├── Cameras & Security
│   ├── Camera Grid (2x2 or 3x3 live feeds)
│   ├── Camera Detail
│   │   ├── Live Stream (with PTZ controls if supported)
│   │   ├── Timeline (motion events, recordings)
│   │   ├── Motion Zones
│   │   ├── Notifications Settings
│   │   └── Recording Storage
│   ├── Security System
│   │   ├── Arm / Disarm
│   │   ├── Sensor Status (doors, windows, motion)
│   │   └── Alert History
│   └── Door Locks
│       ├── Lock Status
│       ├── Access Log
│       ├── Access Codes / Guest Keys
│       └── Auto-Lock Settings
├── Energy
│   ├── Usage Dashboard (charts)
│   │   ├── Today / Week / Month
│   │   ├── By Device
│   │   ├── By Room
│   │   └── Cost Estimate
│   ├── Solar / Battery (if applicable)
│   ├── Usage Alerts (threshold notifications)
│   └── Energy Saving Tips
├── Activity / History
│   ├── Event Timeline (all device events)
│   ├── Filter by Device / Room / Type
│   └── Export
├── Members / Access
│   ├── Household Members
│   ├── Invite Member
│   ├── Guest Access (temporary)
│   ├── Per-Device Permissions
│   └── Access History
├── Integrations
│   ├── Connected Platforms (Alexa, Google, HomeKit)
│   ├── Hubs / Bridges (Zigbee, Z-Wave, Matter)
│   ├── Third-Party Services (IFTTT)
│   └── Add Integration
├── Settings
│   ├── Home Settings (name, address, timezone)
│   ├── Rooms Management
│   ├── Notification Preferences
│   ├── Network / Wi-Fi
│   ├── Backup & Restore
│   ├── Privacy (data sharing, voice recording)
│   └── Account
└── Help
    ├── Setup Guides
    ├── Troubleshooting
    ├── Device Compatibility
    └── Support
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 4 tabs (mobile) | Home, Devices, Automations, Settings |
| **Room Tabs** | Horizontal scrollable tabs at top | All, Living Room, Bedroom, Kitchen... |
| **Device Tiles** | Tappable cards in a grid | Tap = toggle on/off, long-press = open detail/slider |
| **Scene Buttons** | Horizontal scroll row or grid | Tap = activate scene (single action) |
| **Quick Control** | Long-press / 3D Touch on device tile | Brightness slider, temperature dial without opening detail |
| **Voice** | Microphone button or wake word | "Turn off living room lights", "Set thermostat to 72" |
| **Control Center Widget** | OS-level widget | Quick toggles outside the app |

### Bottom Tab Bar
```
[ 🏠 Home ] [ 📱 Devices ] [ ⚡ Automations ] [ ⚙️ Settings ]
```

### Room-Based View (Home Tab)
```
[ All ] [ Living Room ] [ Bedroom ] [ Kitchen ] [ Garage ] [ Outdoor ]
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ 💡 Lights   │ │ 🌡 Thermo   │ │ 🔒 Lock     │
│   On (3/5)  │ │   72°F      │ │   Locked    │
│   [●━━━○]   │ │   [▼] [▲]   │ │   [Unlock]  │
├─────────────┤ ├─────────────┤ ├─────────────┤
│ 📷 Camera   │ │ 🔌 Plug     │ │ 🎵 Speaker  │
│   Live ●    │ │   Off       │ │   Playing   │
└─────────────┘ └─────────────┘ └─────────────┘
```

## Content Model

### Core Entities

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Home | name, address, timezone, mode (home/away/night), coordinates | has many Rooms, Members, Automations, Scenes |
| Room | name, icon, floor, temperature, humidity | belongs to Home, has many Devices |
| Device | type, name, manufacturer, model, firmware, protocol (wifi/zigbee/zwave/matter/bluetooth), state{}, online, battery_level, signal_strength | belongs to Room |
| DeviceState | varies by type: {on, brightness, color, temperature, locked, open, playing, power_watts, ...} | belongs to Device |
| Scene | name, icon, device_states[] | belongs to Home |
| Automation | name, enabled, triggers[], conditions[], actions[], last_run, run_count | belongs to Home |
| Trigger | type (time/device_state/location/sensor/sunrise_sunset), config{} | belongs to Automation |
| Event | device_id, event_type, old_state, new_state, timestamp, source (user/automation/schedule) | belongs to Device |
| Member | user_id, role, permissions{}, presence (home/away) | belongs to Home |
| Integration | platform, status, config{}, devices_count | belongs to Home |

### Device Types & Controls
| Type | Primary Control | Data |
|------|----------------|------|
| Light | on/off, brightness (0–100), color, color_temp | power_usage |
| Thermostat | target_temp, mode (heat/cool/auto/off), fan | current_temp, humidity, schedule |
| Lock | lock/unlock | access_log[], battery |
| Camera | stream, record, arm/disarm | motion_events[], recordings[] |
| Sensor | — (read-only) | temperature, humidity, motion, contact, leak, smoke, CO |
| Speaker | play/pause, volume, source | now_playing, grouped_with[] |
| Blinds | open/close, position (0–100), tilt | — |
| Plug/Switch | on/off | power_watts, energy_kwh |
| Garage Door | open/close | status, last_opened |
| Sprinkler | on/off, zone | schedule, moisture |

### Device Status
```
Operational States: off → on (with parameters)
Connectivity: online → offline → unresponsive
Pairing: discovered → pairing → paired → failed
```

## User Flows

### Control a Device (Quick)
```
Home Tab → Room Tab → Tap Device Tile (toggle) or Long-Press (slider/detail)
```

### Set Up New Device
```
Devices → [+ Add] → Scan / Select Brand → Follow Pairing Steps → Name Device → Assign to Room → Done → Control
```

### Create Automation
```
Automations → [+ Create] → Select Trigger (e.g., "When front door unlocks") → Add Condition (optional) → Set Actions (e.g., "Turn on hallway lights") → Name → Save → Enable
```

### Activate Scene
```
Home → Scenes Row → Tap "Movie Night" → All devices adjust (lights dim, blinds close, TV on) → Confirmation Toast
```

### Check Security Camera
```
Home → Camera Preview → Tap → Live Stream → Scrub Timeline → View Motion Event → Download Clip → Share
```

### Respond to Alert
```
Push Notification ("Motion detected: Front Door") → Tap → Camera Live Feed → Verify → [Dismiss] or [Call Emergency]
```

## URL / Route Structure

```
/                              → Home Dashboard
/rooms                         → All Rooms
/rooms/:id                     → Room Detail
/devices                       → All Devices
/devices/:id                   → Device Detail
/devices/:id/schedule          → Device Schedule
/devices/:id/history           → Device Event Log
/devices/add                   → Add Device Flow
/automations                   → Automation List
/automations/new               → Create Automation
/automations/:id               → Automation Detail
/automations/:id/logs          → Automation Run History
/scenes                        → Scenes List
/scenes/new                    → Create Scene
/scenes/:id                    → Scene Detail
/cameras                       → Camera Grid
/cameras/:id                   → Camera Live View
/cameras/:id/timeline          → Camera Timeline
/security                      → Security System
/security/locks                → Door Locks
/security/history              → Security Event History
/energy                        → Energy Dashboard
/energy/devices                → Per-Device Energy
/activity                      → Event Timeline
/members                       → Household Members
/members/invite                → Invite Member
/integrations                  → Integrations
/settings                      → Settings
/settings/home                 → Home Settings
/settings/rooms                → Manage Rooms
/settings/network              → Network
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Global | Devices, rooms, scenes, automations | — | Relevance |
| Devices | Device name, type, manufacturer | Room, Type, Status (online/offline), Protocol | Name, Room, Type, Status |
| Activity | Event description, device name | Device, Room, Event Type, Source (user/auto), Date Range | Timestamp (newest) |
| Camera Timeline | — | Date, Motion Type (person/vehicle/animal/package) | Timestamp |
| Energy | Device name | Room, Device Type, Date Range | Usage (highest), Name |

## Responsive Behavior

| Breakpoint | Layout | Device Controls |
|------------|--------|----------------|
| Mobile (primary) | Single column, tile grid, bottom tabs | Tap to toggle, long-press for slider |
| Tablet | Room floor plan or larger grid, sidebar | Direct sliders on tiles |
| Desktop / Wall Panel | Multi-room dashboard, camera grid | Full controls inline |
| Watch / Wearable | Complication + glance | Tap to toggle favorites |

### Mobile-First Design
- Tap-to-toggle with haptic feedback
- Long-press for detailed controls (brightness slider, color picker)
- Pull-to-refresh device states
- Background location for presence detection (home/away auto-switch)
- Push notifications for alerts (motion, leak, smoke, door left open)
- Widget support (favorite device toggles, camera snapshot)
- Siri / Google Assistant / Alexa voice control integration
- Offline control for local-protocol devices (Zigbee, Z-Wave, Matter)
- Dark mode (default for night use, auto-switch with time)

## Access Control

| Role | View | Control | Automations | Security | Members | Settings |
|------|------|---------|-------------|----------|---------|----------|
| Owner | ✅ | All devices | CRUD | Arm/disarm, codes | Manage | ✅ |
| Adult | ✅ | All devices | CRUD | Arm/disarm | View | Limited |
| Child | ✅ | Assigned devices | View | — | — | — |
| Guest | Assigned rooms | Assigned devices | — | — | — | — |
| Installer | ✅ | All (temporary) | CRUD | Configure | — | Device setup |

### Security Requirements
- Home owner authentication for adding/removing members
- PIN or biometric for lock/security system control
- Guest access with time-limited tokens
- Audit log for all lock and security events
- Local control fallback when internet is down
- Camera footage access requires home member authentication
- Sensitive automations (locks, security) require confirmation
