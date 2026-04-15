---
brand: Home Assistant
tagline: "Open-source home automation. Local control, privacy-first, and endlessly customizable."
category: IoT / Smart Home
website: https://home-assistant.io
---

# Home Assistant — Information Architecture

## Overview

Home Assistant is the leading open-source smart home platform, running locally on a Raspberry Pi, mini PC, or NAS to control all IoT devices from a single dashboard. The mental model is **your home, your rules** — unlike cloud-dependent systems (Google Home, Amazon Alexa), Home Assistant runs locally with full privacy, supports 2,000+ integrations, and allows deep customization through YAML configuration, automations, and a visual dashboard editor. Key differentiator: no vendor lock-in, works with everything (Zigbee, Z-Wave, WiFi, Matter, Bluetooth), and all data stays on your hardware.

## Site Map

```
├── Overview (Default Dashboard)
│   ├── Home Status
│   │   ├── People (home/away, presence detection)
│   │   ├── Active Alerts (sensors triggered)
│   │   ├── Weather (current conditions, forecast)
│   │   └── Energy Usage (today)
│   ├── Room Cards (organized by area)
│   │   ├── Living Room
│   │   │   ├── Lights (on/off, brightness, color)
│   │   │   ├── Thermostat (temperature, mode)
│   │   │   ├── Media Player (now playing, volume)
│   │   │   ├── Blinds (position)
│   │   │   └── Motion Sensor (status)
│   │   ├── Kitchen
│   │   ├── Bedroom
│   │   ├── Office
│   │   └── Outdoor
│   ├── Scene Buttons (Good Morning, Movie Night, Away, Sleep)
│   ├── Camera Feeds (live thumbnails)
│   └── Custom Cards (community-developed visualizations)
├── Dashboards (Customizable)
│   ├── Default Dashboard (auto-generated from devices)
│   ├── Custom Dashboards (user-built)
│   │   ├── Dashboard Editor (visual drag-and-drop)
│   │   │   ├── Add Card (entity, area, button, gauge, graph, map, etc.)
│   │   │   ├── Card Types (70+ built-in, community customs)
│   │   │   │   ├── Entities Card (list of entities)
│   │   │   │   ├── Glance Card (grid of icons)
│   │   │   │   ├── Gauge Card (circular progress)
│   │   │   │   ├── History Graph Card (time series)
│   │   │   │   ├── Thermostat Card (circular dial)
│   │   │   │   ├── Media Control Card
│   │   │   │   ├── Map Card
│   │   │   │   ├── Camera Card (live feed)
│   │   │   │   ├── Button Card (tap to trigger)
│   │   │   │   ├── Mushroom Cards (community, popular)
│   │   │   │   └── ... (endless customization)
│   │   │   ├── Layout (masonry, horizontal, vertical, sidebar)
│   │   │   └── Theme (colors, fonts, backgrounds)
│   │   └── YAML Mode (raw YAML editing for power users)
│   ├── Wall Panel Dashboard (tablet/kiosk)
│   └── Mobile Dashboard (auto-adapted)
├── Devices & Services
│   ├── Integrations
│   │   ├── Configured Integrations (active)
│   │   │   ├── Zigbee (via ZHA or Zigbee2MQTT)
│   │   │   ├── Z-Wave
│   │   │   ├── Matter
│   │   │   ├── MQTT
│   │   │   ├── Hue
│   │   │   ├── Sonos
│   │   │   ├── Google Cast
│   │   │   ├── Weather
│   │   │   ├── ... (2,000+ available)
│   │   │   └── Each: config, devices discovered, entities
│   │   ├── Add Integration (search 2,000+)
│   │   └── Integration Detail
│   │       ├── Devices Discovered
│   │       ├── Entities Provided
│   │       ├── Options / Config
│   │       └── Logs
│   ├── Devices
│   │   ├── All Devices (table: name, manufacturer, area, integration)
│   │   ├── Device Detail
│   │   │   ├── Entities (all sensors, controls on this device)
│   │   │   ├── Area Assignment
│   │   │   ├── Diagnostics
│   │   │   ├── Firmware Version
│   │   │   ├── Automations Using This Device
│   │   │   └── Configuration
│   │   └── Add Device
│   ├── Entities
│   │   ├── All Entities (table: entity_id, state, area, integration)
│   │   ├── Entity Detail (state, attributes, history)
│   │   └── Entity Registry (rename, hide, change device class)
│   └── Areas
│       ├── Area List (Living Room, Kitchen, Bedroom, etc.)
│       ├── Create / Edit Area (name, icon, picture)
│       └── Area Detail (devices + entities in this area)
├── Automations
│   ├── Automation List
│   ├── Create Automation
│   │   ├── Visual Editor
│   │   │   ├── Triggers
│   │   │   │   ├── State Change (device turns on/off)
│   │   │   │   ├── Time (at 7:00 AM, sunrise, sunset)
│   │   │   │   ├── Device Trigger (motion detected, door opened)
│   │   │   │   ├── Zone (person enters/leaves zone)
│   │   │   │   ├── Sun (sunrise/sunset with offset)
│   │   │   │   ├── Webhook
│   │   │   │   ├── MQTT
│   │   │   │   └── Template (custom condition)
│   │   │   ├── Conditions (optional)
│   │   │   │   ├── State Condition
│   │   │   │   ├── Time Condition (only between 6 PM - 11 PM)
│   │   │   │   ├── Zone Condition
│   │   │   │   ├── Sun Condition
│   │   │   │   └── Template Condition
│   │   │   ├── Actions
│   │   │   │   ├── Call Service (turn_on, turn_off, set_temperature)
│   │   │   │   ├── Delay / Wait
│   │   │   │   ├── Choose (if/else)
│   │   │   │   ├── Repeat (loop)
│   │   │   │   ├── Notify (push, TTS, email)
│   │   │   │   ├── Scene (activate scene)
│   │   │   │   └── Script (run script)
│   │   │   └── Mode (single, restart, queued, parallel)
│   │   └── YAML Editor
│   ├── Automation Detail (edit, test, trace, logs)
│   ├── Automation Trace (step-by-step execution log)
│   ├── Scripts (reusable action sequences)
│   │   ├── Script List
│   │   ├── Create Script
│   │   └── Script Detail
│   └── Scenes
│       ├── Scene List
│       ├── Create Scene (set target states for devices)
│       └── Scene Detail
├── Energy
│   ├── Energy Dashboard
│   │   ├── Grid Consumption (kWh, today/week/month/year)
│   │   ├── Solar Production (if applicable)
│   │   ├── Battery (if applicable)
│   │   ├── Gas Usage
│   │   ├── Water Usage
│   │   ├── Cost Calculation (based on utility rate)
│   │   ├── Per-Device Breakdown
│   │   └── Self-Sufficiency %
│   └── Energy Configuration
│       ├── Grid (consumption sensors, cost entity)
│       ├── Solar Panels (production sensor)
│       ├── Battery (charge/discharge sensors)
│       └── Individual Devices (map power sensors)
├── Map
│   ├── Person Locations (family members, live)
│   ├── Zones (Home, Work, School, custom)
│   ├── Device Trackers
│   └── History (where everyone's been)
├── Logbook
│   ├── Event Timeline (all state changes)
│   ├── Filter by Entity / Area / Person
│   └── Date Range
├── History
│   ├── History Graphs (per entity, time series)
│   ├── Date Range Selector
│   └── Compare Entities
├── Add-Ons (Supervisor)
│   ├── Installed Add-Ons
│   │   ├── Zigbee2MQTT
│   │   ├── MQTT Broker (Mosquitto)
│   │   ├── Node-RED (visual automation)
│   │   ├── File Editor
│   │   ├── Samba Share
│   │   ├── Let's Encrypt (SSL)
│   │   ├── VS Code Server
│   │   └── ... (200+ add-ons)
│   ├── Add-On Store
│   │   ├── Official Add-Ons
│   │   ├── Community Add-Ons
│   │   └── Custom Repositories
│   └── Add-On Detail (start, stop, logs, config)
├── HACS (Home Assistant Community Store)
│   ├── Custom Integrations (community-built)
│   ├── Custom Dashboard Cards (Lovelace)
│   ├── Themes
│   └── Install / Update / Remove
├── Settings
│   ├── System
│   │   ├── General (name, location, timezone, units)
│   │   ├── Network
│   │   ├── Storage
│   │   ├── Backups (create, restore, download)
│   │   ├── Logs (system log, real-time)
│   │   ├── Repairs (detected issues)
│   │   └── Updates (core, OS, add-ons)
│   ├── People & Zones
│   │   ├── People (household members)
│   │   ├── Zones (geofences)
│   │   └── Presence Detection
│   ├── Companions
│   │   ├── Mobile App (connected phones)
│   │   └── Home Assistant Cloud (Nabu Casa: remote access, Google/Alexa integration)
│   ├── Automations & Scenes
│   ├── Devices & Services
│   ├── Areas & Zones
│   ├── Dashboards (manage custom dashboards)
│   └── About (version, system info)
├── Developer Tools
│   ├── States (view/set entity states manually)
│   ├── Services (call services directly)
│   ├── Templates (test Jinja2 templates)
│   ├── Events (fire/listen to events)
│   └── Statistics (fix broken statistics)
└── Companion App (Mobile)
    ├── Same Dashboard (WebView)
    ├── Sensors (phone sensors sent to HA)
    │   ├── Battery Level
    │   ├── Location
    │   ├── Steps
    │   ├── WiFi SSID
    │   └── Activity
    ├── Notifications (actionable push)
    ├── Widgets (device toggles, scenes)
    └── Apple Watch / Wear OS Complications
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible | Overview, Dashboards, Energy, Map, Logbook, History, Dev Tools, Settings |
| **Room/Area Tabs** | Horizontal scroll on dashboard | All, Living Room, Kitchen, Bedroom, etc. |
| **Device Tiles** | Tappable cards in dashboard grid | Tap = toggle, long-press = detail/slider |
| **Scene Buttons** | Row or grid on dashboard | Tap = instant activate |
| **YAML/Visual Toggle** | In automation and dashboard editors | Switch between visual editor and raw YAML |
| **Mobile App** | WebView wrapper + native features | Same dashboard + phone sensors + notifications |

### Tile Interaction
```
Tap → Toggle on/off
Long-press → Open detail dialog (brightness slider, color picker, temperature dial)
Hold tile edge → Drag to reorder (in edit mode)
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Entity | entity_id (e.g., light.living_room), state, attributes{}, area, device, integration, platform | core data model — everything is an entity |
| Device | name, manufacturer, model, firmware, via_device, area, identifiers | groups multiple Entities |
| Area | name, icon, picture | groups Devices |
| Integration | domain, config_entries[], devices[], entities[] | connects external services |
| Automation | alias, trigger[], condition[], action[], mode, last_triggered | uses Entities |
| Script | alias, sequence[], mode | uses Entities |
| Scene | name, entities{entity_id: target_state} | snapshots of Entity states |
| Person | name, device_trackers[], picture, presence | has presence state |
| Zone | name, latitude, longitude, radius, icon | geofence |
| AddOn | name, version, state (started/stopped), config, logs | Supervisor managed |
| Dashboard | title, views[], theme | user-customized |
| Card | type, config{}, entities[] | belongs to Dashboard View |

### Entity ID Convention
```
{domain}.{object_id}
light.living_room_ceiling
sensor.outdoor_temperature
switch.coffee_maker
binary_sensor.front_door
climate.thermostat
lock.front_door
camera.backyard
person.john
automation.motion_lights
```

### Entity State Machine
```
on ↔ off (lights, switches)
locked ↔ unlocked (locks)
home ↔ away ↔ not_home (presence)
heat ↔ cool ↔ auto ↔ off (climate)
```

## User Flows

### Control a Light (Quick)
```
Dashboard → Living Room Tab → Tap "Ceiling Light" Tile → Light Toggles On → Long-Press → Brightness Slider + Color Picker → Adjust → Close
```

### Create Automation (Visual)
```
Settings → Automations → [Create] → Trigger: "Motion Sensor detects motion" → Condition: "After sunset" → Action: "Turn on hallway light, brightness 50%" → Name: "Hallway Motion Light" → Save
```

### Add a New Device
```
Settings → Devices & Services → [Add Integration] → Search "Zigbee" → Configure ZHA → Scan for Devices → "IKEA Bulb" Discovered → Assign to Living Room → Appears on Dashboard
```

### Build Custom Dashboard
```
Dashboard → Edit Mode → [Add Card] → Select "Thermostat Card" → Choose Entity: climate.living_room → Configure Style → Place on Dashboard → Save → Use Daily
```

### Set Up Energy Monitoring
```
Settings → Energy → Grid Consumption: Select Power Sensor → Cost: Enter Utility Rate → Solar: Select Production Sensor → Save → Energy Dashboard Shows Real-Time Usage + Cost
```

## URL / Route Structure

```
/                              → Default Dashboard (Overview)
/dashboard-custom              → Custom Dashboard
/energy                        → Energy Dashboard
/map                           → Map (person locations)
/logbook                       → Event Timeline
/history                       → History Graphs
/config                        → Settings
/config/integrations           → Integrations
/config/devices                → Devices
/config/entities               → Entities
/config/areas                  → Areas
/config/automation             → Automations
/config/automation/edit/:id    → Automation Editor
/config/script                 → Scripts
/config/scene                  → Scenes
/config/person                 → People
/config/zone                   → Zones
/config/core                   → System Settings
/config/backup                 → Backups
/config/updates                → Updates
/config/repairs                → Repairs
/developer-tools               → Developer Tools
/developer-tools/state         → States
/developer-tools/service       → Services
/developer-tools/template      → Template Editor
/developer-tools/event         → Events
/hassio                        → Supervisor (Add-Ons)
/hassio/store                  → Add-On Store
/hassio/addon/:slug            → Add-On Detail
/hacs                          → HACS (Community Store)
/profile                       → User Profile
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Integrations | Integration name | — | Alphabetical, installed first |
| Devices | Device name, manufacturer | Area, Integration, Type | Name, Area |
| Entities | Entity ID, name | Domain (light/sensor/switch), Area, Integration, Status | Name, Domain |
| Automations | Name, entity used | Enabled/Disabled | Name, Last Triggered |
| Logbook | Entity name, event | Entity, Area, Date Range | Time (newest) |
| HACS | Component name | Type (integration/card/theme), Category | Stars, Downloads |

## Responsive Behavior

| Breakpoint | Dashboard | Settings | Automation Editor |
|------------|-----------|----------|-------------------|
| Desktop / Tablet (wall panel) | Multi-column card grid, sidebar | Full sidebar + content | Visual editor, side-by-side |
| Mobile (primary for control) | Single column, bottom nav (companion app) | Simplified, back-button nav | Stacked, scrollable |
| Watch / Wearable | Complications (favorites toggle) | N/A | N/A |
| Wall Panel (kiosk) | Custom dashboard, full-screen | N/A | N/A |

### Home Assistant-Specific UX
- **Local-first**: Everything runs on your hardware, no cloud required
- **Privacy**: No data leaves your home unless you choose
- **Entity-centric**: Everything is an entity with a state — universal data model
- **YAML + Visual**: Power users write YAML; beginners use visual editors
- **Automation traces**: Step-by-step debugging of automation execution
- **2,000+ integrations**: If it's smart, Home Assistant probably supports it
- **Community-driven**: HACS provides thousands of community add-ons and cards
- **Dashboard customization**: Build pixel-perfect dashboards with custom cards
- **Local control**: Works even if internet goes down (Zigbee, Z-Wave, Matter)
- **Voice assistants**: Assist (built-in), or integrate with Google/Alexa via cloud

## Access Control

| Role | Dashboard | Control | Automations | Settings | Developer Tools |
|------|-----------|---------|-------------|----------|----------------|
| Owner (Admin) | ✅ | All | CRUD | Full | ✅ |
| Admin | ✅ | All | CRUD | Most | ✅ |
| User | ✅ | Assigned | — | — | — |
| Guest (via link) | View only | — | — | — | — |

### Security
- Local authentication (username/password)
- Multi-factor authentication (TOTP)
- Nabu Casa cloud for secure remote access (no port forwarding)
- HTTPS via Let's Encrypt or custom certificate
- IP banning after failed login attempts
- Trusted networks (auto-login on home WiFi)
- Per-user dashboard assignments
- Full audit log of all state changes and who triggered them
