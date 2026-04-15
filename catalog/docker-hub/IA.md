---
brand: Docker Hub
tagline: The world's largest container registry.
category: Developer Tools
website: https://hub.docker.com
---

# Docker Hub — Information Architecture

## Overview

Docker Hub is the default public container image registry for the Docker ecosystem, hosting millions of container images including official images (maintained by Docker), verified publisher images, and community-contributed images. The IA is structured as a **registry-centric discovery and distribution platform** — the primary objects are Repositories (containing tagged images), and the user experience revolves around searching, pulling, and pushing container images. The platform serves two distinct user types: consumers (who search and pull images) and publishers (who build, push, and manage images). Docker Hub also provides automated builds, webhooks, and organization management.

## Site Map

```
hub.docker.com
├── / (Home — explore, search, featured images)
├── /search (Search results)
├── /_/{image_name} (Official image page)
│   ├── /tags (Image tags list)
│   └── /builds (Automated builds — legacy)
├── /r/{namespace}/{image_name} (Community/publisher image)
│   └── /tags
├── /u/{username} (User profile — repositories list)
├── /orgs/{org_name} (Organization page)
│   ├── /members
│   ├── /teams
│   ├── /repositories
│   └── /settings
├── /repositories (My repositories)
├── /settings
│   ├── /general
│   ├── /security (Password, 2FA)
│   ├── /notifications
│   └── /billing
├── /billing (Subscription management)
├── /explore (Curated collections)
│   └── /{category_slug}
└── /auth
```

## Navigation Model

- **Primary navigation**: Top bar — Explore, Repositories (my repos), Organizations, search bar (prominent)
- **Search**: Global search bar is the dominant navigation element — most users arrive via search
- **Image page navigation**: Tabs on image page — Overview (README), Tags, Builds (if configured)
- **Organization navigation**: Sub-tabs — Repositories, Members, Teams, Activity, Settings, Billing
- **User profile navigation**: Repository list with sort/filter
- **Utility navigation**: Top-right — avatar → Account Settings, Billing, Sign out
- **Tag navigation**: Tag list with platform/architecture filter (linux/amd64, linux/arm64, etc.)
- **Mobile**: Responsive; search and image pages work well on mobile

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Repository | Name, description, README, tags (image versions), pull count, star count, visibility | User/Org-owned |
| Image Tag | Tag name (latest, 1.0, alpine), digest, OS/architecture, compressed size, pushed date | Part of repository |
| Official Image | Docker-maintained, security-scanned, documented, follows best practices | Docker-maintained |
| Verified Publisher | Organization-verified images with publisher badge | Publisher-owned |
| Organization | Name, members, teams, repositories, billing plan | Org-owned |
| Team | Group within org, with repository access permissions | Part of org |
| Automated Build | Git repo link, build rules, build history, triggers | Part of repository (legacy) |
| Webhook | URL endpoint, events (push), target repositories | Part of repository |


### Build/Pipeline Lifecycle
```
triggered → queued → running → success → deployed
                              ↘ failed → retried → success
triggered → cancelled (by user or timeout)
running → timed_out → failed
```
## User Flows

### Finding and Pulling an Image
```
User searches for an image (e.g., "nginx" or "postgres") → Results show Official Images first, then Verified Publishers, then community images → Clicks image → reads Overview (README with usage instructions) → Checks Tags tab → finds desired version and architecture → Copies pull command: `docker pull nginx:1.25-alpine` → Runs in terminal → image downloaded from Docker Hub
```

### Publishing an Image
```
User creates repository on Docker Hub (name, description, visibility) → Builds image locally: `docker build -t username/myapp:1.0 .` → Logs in: `docker login` → Pushes: `docker push username/myapp:1.0` → Image appears in repository → writes README with usage instructions → Community can search, discover, and pull the image
```

### Organization Management
```
Admin creates organization → invites members → Creates teams with specific repository access (read, write, admin) → Assigns repositories to teams → Sets up automated scanning and vulnerability alerts → Manages billing and seat count
```

### Image Vulnerability Scanning
```
Docker Scout scans images on push (or on-demand) → Vulnerability report shows CVEs by severity (Critical, High, Medium, Low) → Recommendations for base image updates to fix vulnerabilities → Policy compliance tracking (no critical CVEs, etc.)
```

### Manage Notifications
```
Settings → Notifications → Toggle email/push/in-app per category → Set frequency (instant/daily digest/weekly) → Save preferences
```
## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home |
| `/search?q={query}` | Search results |
| `/_/{image_name}` | Official image (underscore prefix) |
| `/_/{image_name}/tags` | Official image tags |
| `/r/{namespace}/{image_name}` | Community/publisher image |
| `/r/{namespace}/{image_name}/tags` | Image tags |
| `/u/{username}` | User profile |
| `/orgs/{org_name}` | Organization |
| `/orgs/{org_name}/members` | Org members |
| `/repositories` | My repositories |
| `/settings/*` | Account settings |
| `/explore/{category}` | Curated category |

Notable: Official images use `/_/` prefix (no namespace). Community images use `/r/{namespace}/`. User profiles use `/u/`.

### Additional Routes

```
billing  → Billing & subscription
notifications  → Notification preferences
help  → Help center
help/{topic}  → Help article
api  → API documentation
integrations  → Integrations
admin  → Admin console
/r/{namespace}/{repo}                → Repository detail
/r/{namespace}/{repo}/tags            → Image tags
/r/{namespace}/{repo}/builds          → Automated builds
/r/{namespace}/{repo}/collaborators   → Collaborators
/r/{namespace}/{repo}/webhooks        → Webhooks
/r/{namespace}/{repo}/scans           → Vulnerability scans
/orgs/{org}                           → Organization
/orgs/{org}/members                   → Organization members
/orgs/{org}/teams                     → Teams
/orgs/{org}/billing                   → Billing
/settings                             → Account settings
/settings/security                    → Security settings
/explore                              → Explore images
```

## Search & Filter

- **Image search**: Full-text search across image names, descriptions, README content
- **Search filters**: Type (Official, Verified Publisher, Sponsored OSS, Community), Categories, Operating Systems, Architectures
- **Sort**: Best Match, Most Popular (pulls), Recently Updated, Most Stars
- **Tag filtering**: Within a repository — filter tags by OS/architecture (linux/amd64, windows/amd64, arm/v7, etc.)
- **Explore categories**: Databases, Web Servers, Languages, DevOps, Security, etc.
- **Organization repo search**: Search repositories within an organization by name

- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Full nav + search + content area with image cards or tag table |
| Tablet (768-1024px) | Nav adapts, search remains prominent, content single-column |
| Mobile (<768px) | Hamburger menu, full-width search, cards stack vertically, tag table scrolls horizontally |

- Search bar remains prominent and accessible at all breakpoints
- Image cards (name, description, pull count, stars) stack vertically on mobile
- Tag table (multi-column with OS/arch, size, digest) has horizontal scroll on mobile
- README content uses responsive markdown rendering (images scale, code blocks scroll)
- Pull command copy button remains accessible


### Docker Hub-Specific UX Patterns
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


### API & Integration Patterns
- RESTful API with JSON request/response format
- Webhook support for real-time event notifications
- OAuth 2.0 for third-party application authorization
- Rate limiting with clear headers (X-RateLimit-Remaining)
- Pagination via cursor-based or offset-based parameters
- Versioned API endpoints for backward compatibility
- Comprehensive API documentation with interactive examples
- SDKs available for popular languages (JavaScript, Python, Ruby, Go)


### Automated Build Pipeline
```
Connect GitHub/GitLab repository → Configure automated builds → Set build rules (branch/tag patterns) → Push code → Docker Hub builds image automatically → Image tagged and pushed to repository → Webhook notifications sent
                                                                                                                                                             ↘ Build fails → View build logs → Fix Dockerfile → Push again
```

### Vulnerability Scanning
```
Push image to Docker Hub → Docker Scout automatically scans for vulnerabilities → View CVE report with severity ratings → Recommended base image updates → Apply fixes → Rebuild → Re-scan confirms remediation
```

### Organization Management
```
Create organization → Invite team members → Create teams → Assign repository permissions per team → Set up SSO (Business plan) → Configure image access policies → Audit access logs
```

### Container Registry Workflow
```
Developer runs `docker push` → Image layers uploaded → Manifest created → Available for `docker pull` worldwide → Rate limits applied per plan tier → Content trust (signing) optional for verified publishers
```

### Docker Scout Integration
```
Enable Docker Scout → Continuous monitoring of all repository images → Policy evaluation against security baselines → Supply chain attestation tracking → SBOM generation → Compliance reporting
```

### Repository Webhook Configuration
```
Repository → Webhooks → Add webhook URL → Select events (push, build, scan) → Test webhook → Receive POST payload on events → Integrate with CI/CD pipelines or Slack notifications
```

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Search, view public repos, pull public images (rate-limited: 100 pulls/6hrs per IP) |
| Free (signed in) | 200 pulls/6hrs, unlimited public repos, 1 private repo, 1 parallel build |
| Pro ($5/mo) | 5000 pulls/6hrs, unlimited private repos, 5 parallel builds, Docker Scout |
| Team ($9/user/mo) | Pro features + organizations, team management, audit logs, RBAC |
| Business ($24/user/mo) | Team + SSO/SAML, SCIM, hardened security, image access management |

- Authentication: Docker ID (email/password), SSO/SAML (Business)
- Pull rate limits: Key differentiator between tiers; anonymous users are most restricted
- Repository visibility: Public (anyone can pull) or Private (only authorized users)
- Organization roles: Owner, Member, with team-based repository permissions (Read, Write, Admin)
- Image signing: Docker Content Trust for verified image provenance
- Access tokens: Personal access tokens replace password for CLI authentication
