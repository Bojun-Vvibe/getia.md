---
brand: Runway
tagline: Advancing creativity with artificial intelligence.
category: AI & ML
website: https://runwayml.com
---

# Runway — Information Architecture

## Overview

Runway is an AI-powered creative suite focused on video generation and editing. The IA is structured as a **creative tools dashboard** where each AI capability (Gen-3 Alpha video generation, motion brush, image-to-video, text-to-video, inpainting, style transfer, background removal, etc.) lives as a distinct tool within a unified workspace. The platform bridges the gap between professional video editing and generative AI, targeting filmmakers, content creators, and creative teams. The workspace model borrows from professional creative tools (think Adobe Creative Cloud) with project-based organization, asset libraries, and collaborative features.

## Site Map

```
runwayml.com
├── / (Marketing home)
├── /app (Dashboard — all tools)
├── /app/video (Gen-3 Alpha video generation)
├── /app/image (Image generation)
├── /app/tools
│   ├── /text-to-video
│   ├── /image-to-video
│   ├── /motion-brush
│   ├── /camera-motion
│   ├── /inpainting
│   ├── /expand-image
│   ├── /remove-background
│   ├── /frame-interpolation
│   ├── /color-grade
│   ├── /super-slow-motion
│   ├── /erase-replace
│   └── /3d-capture
├── /app/projects
│   └── /{project_id}
├── /app/assets (Asset library)
├── /app/team (Team management)
├── /app/settings
│   ├── /account
│   ├── /billing
│   └── /api
├── /research (Research papers)
├── /studios (Runway Studios — creative collaborations)
├── /pricing
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Home (dashboard), Generate (video/image), Tools (individual AI tools), Projects, Assets, Team
- **Tools grid**: Dashboard shows all available tools as icon cards — click to open individual tool
- **Project navigation**: Within a project — asset list, generation history, shared members
- **Utility navigation**: Bottom-left sidebar — Settings, Billing, Credits balance, Help
- **Contextual navigation**: Within a tool — input panel (left/top), preview/output (center/right), parameters (right panel)
- **Top bar**: Credits remaining indicator, upgrade CTA, account avatar
- **Mobile**: Not optimized for mobile — desktop/tablet-first creative tool

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Generation | Video/image output + input prompt/image + parameters + seed | User-owned |
| Project | Named folder containing generations, assets, and settings | User/Team-owned |
| Asset | Uploaded image, video, or audio file for use in tools | User-owned |
| Tool Preset | Saved parameter configuration for a specific tool | User-owned |
| Video Composition | Multi-clip timeline for combining generated clips | User-owned |
| Team Workspace | Shared environment with shared projects, assets, and credits | Team-owned |

## User Flows

### Gen-3 Alpha Video Generation
```
Navigates to Generate → Video → Chooses mode: Text-to-Video, Image-to-Video, or Video-to-Video → Enters text prompt and/or uploads reference image → Adjusts parameters: duration (5s/10s), aspect ratio, motion intensity, camera movement → Clicks Generate → video renders (1-5 minutes depending on duration) → Preview plays in-browser → download, extend, or iterate with variations
```

### Motion Brush Workflow
```
Uploads or selects a still image → Opens Motion Brush tool → paints brush strokes on areas to animate → Direction and intensity of strokes define the motion vector → Generates short video clip with localized motion → Can combine with camera motion controls for cinematic effect
```

### Project-Based Workflow
```
Creates a Project (e.g., "Music Video Concept") → Generates multiple video clips using various tools → All outputs automatically organized in the Project → Team members invited to collaborate — can view, generate, download → Assets (reference images, style guides) uploaded to Project asset library
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/app` | Main dashboard |
| `/app/video` | Video generation |
| `/app/image` | Image generation |
| `/app/tools/{tool_slug}` | Individual tool page |
| `/app/projects/{uuid}` | Project workspace |
| `/app/assets` | Asset library |
| `/app/generation/{uuid}` | Individual generation detail |
| `/app/team` | Team management |
| `/app/settings/*` | Account settings |

All app routes are behind `/app` prefix. UUIDs for projects and generations. Tool routes use slugified names.

## Search & Filter

- **Asset search**: Search uploaded assets by filename
- **Generation history**: Filter by tool used, date range, project
- **Tool discovery**: Tools displayed as categorized grid — no search needed (limited number of tools)
- **No public marketplace**: Unlike Midjourney, no community gallery or public model sharing
- **Project filtering**: List projects by name, date, team membership
- **No prompt search**: Generations are browseable but not searchable by prompt text

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + tool workspace with input/output panels + parameter sidebar |
| Desktop (1024-1280px) | Collapsible sidebar + tool workspace, parameters in dropdown |
| Tablet (768-1024px) | Minimal sidebar (icons only) + simplified tool UI |
| Mobile (<768px) | Not officially supported — tool UIs require desktop-scale interaction |

- Video preview scales to available width while maintaining aspect ratio
- Tool input panels stack vertically on narrower viewports
- Motion Brush and painting tools require pointer precision (not touch-optimized)
- Dashboard tool grid reflows from 4-column to 2-column

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing pages only; no tool access |
| Free | 125 credits (one-time), watermarked outputs, limited tools |
| Standard ($15/mo) | 625 credits/mo, Gen-3, no watermark, 3 projects |
| Pro ($35/mo) | 2250 credits/mo, all tools, unlimited projects, higher resolution |
| Unlimited ($95/mo) | Unlimited generations (relaxed mode), priority GPU |
| Enterprise | Custom credits, team management, API access, SSO, dedicated support |
| Team roles | Admin (manage members, billing) → Editor (generate, manage projects) → Viewer (view only) |

- Authentication: Email/password, Google OAuth
- Credits system: Different tools consume different credit amounts (Gen-3 video costs more than image generation)
- API: Separate API access for programmatic generation (Enterprise/custom plans)
- Outputs: Users own generated content; commercial use allowed on paid plans
- Watermark: Free tier adds Runway watermark to all outputs

## AI Tools

| Tool | Input | Output | Description |
|------|-------|--------|-------------|
| Gen-3 Alpha | Text prompt | Video (10s) | State-of-the-art text-to-video generation |
| Gen-2 | Text or image | Video (4s) | Previous gen text/image-to-video |
| Text to Image | Text prompt | Image | High-quality image generation |
| Image to Image | Image + prompt | Image | Style transfer and modification |
| Inpainting | Image + mask | Image | Remove or replace objects |
| Expand Image | Image | Larger image | Extend canvas with AI-generated content |
| Remove Background | Image | Image (no BG) | Automatic background removal |
| Motion Brush | Video + brush | Video | Apply motion to specific regions |
| Lip Sync | Video + audio | Video | Sync lip movement to audio |
| Super Resolution | Low-res media | High-res media | Upscale images and video |
| Green Screen | Video | Video (no BG) | AI-powered chroma keying |
| Depth Map | Image | Depth map | Extract depth information |
| Scene Detection | Video | Timestamps | Detect scene transitions |
| Transcription | Audio/video | Text | Speech-to-text transcription |

## Video Generation Parameters

| Parameter | Options |
|-----------|---------|
| Duration | 4s, 10s, 16s (Gen-3 Alpha) |
| Aspect ratio | 16:9, 9:16, 1:1 |
| Motion amount | Low, Medium, High |
| Camera movement | Pan, Zoom, Orbit, Dolly (text-described) |
| Seed | Reproducible results |
| Resolution | 720p, 1080p (Gen-3 Alpha) |

## Pricing

| Plan | Credits/mo | Price | Features |
|------|-----------|-------|----------|
| Free | 125 | $0 | 3 projects, Gen-2 access |
| Standard | 625 | $12/mo | Unlimited projects, Gen-3 Alpha |
| Pro | 2250 | $28/mo | Higher resolution, priority queue |
| Unlimited | Unlimited | $76/mo | No credit limits, all features |
| Enterprise | Custom | Custom | API access, dedicated support |

## Asset Management

- **Projects:** Organize generations into project folders
- **Favorites:** Star best outputs for quick access
- **History:** Full generation history with prompts and parameters
- **Download:** Export in MP4 (video), PNG/JPG (image)
- **Sharing:** Public link sharing for generated content
- **Team workspace:** Shared asset library for team collaboration

## Creative Workflows

### Text-to-Video Pipeline
```
Write Prompt → Select Duration (4s/10s) → Choose Aspect Ratio → Set Motion Amount → Generate → Review → Extend (add more seconds) → Download MP4
```

### Image-to-Video
```
Upload Reference Image → Write Motion Prompt → Select Camera Movement → Generate Video from Still → Apply Motion Brush for Selective Animation → Export
```

### Multi-Tool Composition
```
Generate Image (Text-to-Image) → Edit with Inpainting → Remove Background → Animate with Image-to-Video → Add Motion Brush Effects → Composite in Video Editor
```

## Industry Applications

| Industry | Use Case |
|----------|----------|
| Film/TV | Pre-visualization, concept art, VFX prototyping |
| Advertising | Rapid ad creative generation and iteration |
| Social Media | Short-form video content creation |
| Gaming | Concept art, texture generation, cutscene prototyping |
| E-commerce | Product video generation from still photos |
| Education | Visual content for courses and presentations |

## Gen-3 Alpha Capabilities

- **Temporal coherence:** Consistent characters and objects across video frames
- **Camera control:** Pan, tilt, zoom, dolly, orbit via text description
- **Motion quality:** Realistic physics simulation for movement
- **Style consistency:** Maintains visual style throughout generated clip
