---
brand: Midjourney
tagline: An independent research lab exploring new mediums of thought.
category: AI & ML
website: https://midjourney.com
---

# Midjourney — Information Architecture

## Overview

Midjourney is an AI image generation platform known for its distinctive aesthetic and artistic quality. Originally operating exclusively through Discord, the product has expanded to a dedicated web application at midjourney.com. The IA reflects this unique evolution: a **gallery-centric creation workspace** where the primary interaction loop is prompt → generation → variation → upscale → organize. The web app centers on a visual grid of generated images, with a persistent prompt bar at the bottom. Key features include the prompt editor, image editor (inpainting/outpainting), style references, character references, and organizational features like folders and image ratings. The Discord-native `/imagine` command remains a parallel interface.

## Site Map

```
midjourney.com
├── / (Home / image feed)
├── /explore (Community showcase)
├── /create (Generation workspace)
├── /imagine (Prompt editor with advanced params)
├── /archive
│   ├── / (All generated images)
│   ├── /likes (Liked images)
│   ├── /folders (Organized folders)
│   └── /folders/{folder_id}
├── /image/{image_id} (Individual image detail)
├── /editor/{task_id} (Image editor — inpaint/outpaint)
├── /profile/{username} (Public profile gallery)
├── /account
│   ├── /billing
│   └── /settings
├── /docs (Documentation)
└── /auth
```

## Navigation Model

- **Primary navigation**: Top bar with tabs — Home, Explore, Create, Archive
- **Persistent element**: Bottom prompt bar (always visible in Create mode)
- **Secondary navigation**: Archive sub-tabs — All, Likes, Folders, Smart Folders
- **Image navigation**: Click any image → full-screen lightbox with action buttons (Vary, Upscale, Remix, Edit)
- **Utility navigation**: Top-right profile avatar → Account, Billing, Settings, Log out
- **Filter navigation**: Explore page has style/tag filters; Archive has date/model/aspect ratio filters
- **Mobile**: Bottom tab bar replaces top nav; prompt bar adapts to keyboard

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Image Generation (Job) | 4-image grid from a single prompt, with model version, parameters, seed | User-owned |
| Individual Image | High-res image with metadata: prompt, params (--ar, --v, --s, --c), seed, model | Part of job |
| Variation | New generation derived from a parent image with modified prompt/params | User-owned, linked to parent |
| Upscale | Enhanced resolution version of a selected image | User-owned |
| Folder | Named container for organizing images | User-owned |
| Style Reference | Image used as visual style input for new generations | Linked to job |
| Prompt | Text description + parameters (aspect ratio, stylize, chaos, weird, model version) | Part of job |

## User Flows

### Basic Image Generation
```
Navigates to Create → focus on prompt bar at bottom → Types descriptive prompt (e.g., "a cyberpunk cat in neon rain, cinematic lighting") → Adjusts parameters: aspect ratio, model version (v6, niji), stylize, chaos → Submits → 4-image grid generates (30-60 seconds) → Selects favorite → Upscale (U1-U4) or Vary (V1-V4, Subtle/Strong) → Final image saved to Archive
```

### Image Editing (Inpaint/Outpaint)
```
Selects an image → clicks Edit → Editor opens with brush tools for masking regions → Masks area to change → types replacement prompt → Midjourney regenerates masked area while preserving the rest → Can also extend canvas (outpaint) in any direction
```

### Style/Character References
```
Attaches an image URL as `--sref` (style reference) or `--cref` (character reference) → Midjourney extracts visual style or character features → New generation applies the referenced style/character to the new prompt → Enables consistent character design across multiple images
```

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home feed |
| `/explore` | Community gallery |
| `/create` | Generation workspace |
| `/archive` | User's image archive |
| `/archive/folders/{uuid}` | Specific folder |
| `/image/{uuid}` | Image detail page |
| `/editor/{uuid}` | Image editor |
| `/profile/{username}` | Public user profile |
| `/account/*` | Account management |
| `/docs/*` | Documentation |

Image IDs are UUIDs. Public profiles use usernames. No SEO slugs on images (visual content, not text).

## Search & Filter

- **Prompt search**: Search own Archive by prompt text
- **Explore search**: Search community images by keyword/prompt
- **Filters**: Model version (v5, v6, niji), aspect ratio, date range, favorites
- **Smart Folders**: Auto-organized by AI-detected content categories
- **Rating system**: Users can rate own images (1-5 stars) to train personal style preferences
- **No tag system**: Organization relies on prompt text matching and folders

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full grid view (4-6 columns), persistent prompt bar, side panels for image detail |
| Desktop (1024-1280px) | 3-4 column grid, prompt bar at bottom |
| Tablet (768-1024px) | 2-3 column grid, prompt bar at bottom, image detail as overlay |
| Mobile (<768px) | 1-2 column grid, prompt bar fixed at bottom above keyboard, image detail full-screen |

- Image grids use masonry layout adapting to viewport width
- Prompt bar is always fixed to bottom, expands on focus to show parameter controls
- Lightbox view is full-screen on mobile with swipe-to-navigate
- Touch: pinch-to-zoom on images, swipe between images in lightbox

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Browse Explore gallery only; no generation |
| Free Trial | ~25 free generations to try the service |
| Basic ($10/mo) | ~200 generations/mo, standard queue, community gallery |
| Standard ($30/mo) | ~900 generations/mo, fast hours, unlimited relaxed, stealth mode option |
| Pro ($60/mo) | ~1800 generations/mo, more fast hours, stealth mode, concurrent jobs |
| Mega ($120/mo) | ~3600 generations/mo, maximum fast hours, 12 concurrent jobs |

- Authentication: Discord OAuth (primary), email/password (web app)
- Image visibility: Public by default; Stealth mode (Pro+) makes images private
- Commercial usage: All paid plans include commercial license
- Content moderation: NSFW content blocked; prompts filtered by content policy
- Discord integration: All web generations also appear in Discord DMs (if linked)

## Prompt Parameters

| Parameter | Syntax | Description |
|-----------|--------|-------------|
| Aspect Ratio | `--ar 16:9` | Output dimensions (1:1, 4:3, 16:9, 9:16, etc.) |
| Model Version | `--v 6` | Generation model (v5, v5.2, v6, niji 6) |
| Stylize | `--s 250` | How strongly Midjourney applies its aesthetic (0-1000) |
| Chaos | `--c 50` | Variation in initial grid results (0-100) |
| Weird | `--w 500` | Experimental/unconventional aesthetics (0-3000) |
| Quality | `--q 1` | Rendering time vs quality tradeoff (0.25, 0.5, 1, 2) |
| Tile | `--tile` | Generate seamless repeating patterns |
| No | `--no trees` | Negative prompt — exclude elements |
| Style Reference | `--sref URL` | Apply visual style from reference image |
| Character Reference | `--cref URL` | Maintain character consistency across images |
| Seed | `--seed 12345` | Reproduce similar results with same seed |
| Stop | `--stop 80` | Stop generation partway for abstract/incomplete look |

## Generation Pipeline

```
Prompt Input → Text Encoding → Diffusion Model Processing → 4-Image Grid Output → Select Image → Upscale (2x/4x) or Vary (Subtle/Strong) → Final High-Res Image → Save to Archive
```

## Image Actions

- **Upscale:** Increase resolution (Subtle: preserve detail, Creative: add detail)
- **Vary (Subtle):** Minor variations keeping core composition
- **Vary (Strong):** Significant reinterpretation of the image
- **Vary (Region):** Inpaint — regenerate a selected area with new prompt
- **Zoom Out:** Extend canvas outward with AI-generated surroundings
- **Pan:** Extend canvas in a specific direction (left/right/up/down)
- **Remix:** Re-run with a modified prompt while keeping composition

## Model Comparison

| Model | Strengths | Release |
|-------|-----------|---------|
| v5 | Photorealism, hands, text accuracy | Mar 2023 |
| v5.2 | Better aesthetics, higher variation | Jun 2023 |
| v6 | Improved prompt understanding, text in images, coherent scenes | Dec 2023 |
| Niji 6 | Anime/manga style, character consistency | Dec 2023 |

## Discord Integration

- **`/imagine`** — Generate from prompt in any channel or DM
- **`/describe`** — Upload image, get prompt suggestions
- **`/blend`** — Combine 2-5 images into one
- **`/shorten`** — Analyze prompt and suggest shorter version
- **`/settings`** — Configure default model, quality, style
- **Reactions:** Click U1-U4 to upscale, V1-V4 to vary (on grid images)
- **Direct Messages:** Private generation (all plans)
- **Community channels:** See others' generations in real-time for inspiration

## Community & Discovery

- **Explore feed:** Curated community gallery sorted by hot/top/new
- **Profile pages:** Public gallery of user's generations (unless Stealth mode)
- **Trending styles:** Discover popular aesthetic movements and techniques
- **Image details:** Click any public image to see its prompt and parameters
- **Reuse prompt:** Copy another user's prompt as starting point
- **Rate images:** Star system for personal organization and style training
- **Daily theme:** Community prompt challenges

## Content Policy

- **Banned content:** Gore, NSFW, hateful imagery, real person deepfakes
- **Prompt filtering:** Automated word/phrase blocking with manual review
- **Content moderation:** Community reporting + automated detection
- **Terms of Service:** All paid users get commercial license for generated images
- **Stealth mode:** Pro+ users can make generations private (not on Explore feed)

## Pricing Deep Dive

| Feature | Basic $10 | Standard $30 | Pro $60 | Mega $120 |
|---------|----------|-------------|--------|----------|
| Fast GPU min/mo | 3.3 hrs | 15 hrs | 30 hrs | 60 hrs |
| Relaxed mode | — | Unlimited | Unlimited | Unlimited |
| Concurrent jobs | 3 | 3 | 12 | 12 |
| Stealth mode | — | — | ✅ | ✅ |
| Max upscale | 2x | 2x | 4x | 4x |

## Web vs Discord

| Feature | Web App | Discord |
|---------|---------|--------|
| Image generation | ✅ | ✅ |
| Image editing | ✅ | — |
| Archive management | ✅ | — |
| Folders | ✅ | — |
| Style reference | ✅ | ✅ |
| Describe | — | ✅ |
| Blend | — | ✅ |
| Community gallery | ✅ | — |
