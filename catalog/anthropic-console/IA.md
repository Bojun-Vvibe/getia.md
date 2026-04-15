---
brand: Anthropic Console
tagline: Build with Claude. API playground, workbench, and developer tools.
category: AI & ML
website: https://console.anthropic.com
---

# Anthropic Console — Information Architecture

## Overview

The Anthropic Console is the developer-facing portal for building with Claude's API. The IA is structured as a **developer console** modeled after cloud platform dashboards (GCP Console, Stripe Dashboard) — it combines an interactive API playground (Workbench), API key management, usage monitoring, billing, and prompt optimization tools. Unlike claude.ai (the consumer product), the Console targets developers and organizations integrating Claude into their applications. The Workbench is the centerpiece: an interactive prompt engineering environment where developers can test prompts, adjust parameters, compare models, and generate API code snippets.

## Site Map

```
console.anthropic.com
├── / (Dashboard — usage overview, quick actions)
├── /workbench (API Playground / Prompt Workbench)
│   └── /{workbench_id} (Saved workbench session)
├── /prompts (Prompt library — saved prompt templates)
│   └── /{prompt_id}
├── /api-keys (API key management)
├── /usage (Usage analytics — tokens, costs, rate limits)
├── /billing
│   ├── /plans
│   ├── /invoices
│   └── /payment-methods
├── /settings
│   ├── /organization
│   ├── /members
│   ├── /limits (Rate limits & spend limits)
│   └── /profile
├── /logs (API request logs)
├── /docs (→ redirects to docs.anthropic.com)
└── /auth
├── Evaluations
│   ├── Eval Sets
│   ├── Run Evaluation
│   └── Results & Comparison
├── Batch Processing
│   ├── Create Batch
│   ├── Batch Status
│   └── Batch Results
```

## Navigation Model

- **Primary navigation**: Left sidebar — Dashboard, Workbench, Prompts, API Keys, Logs, Usage, Billing, Settings
- **Workbench navigation**: Top bar with model selector, temperature/max-tokens sliders, system prompt panel, user/assistant message pairs
- **Settings navigation**: Sub-tabs within Settings — Organization, Members, Limits, Profile
- **Utility navigation**: Top-right — organization switcher (for multi-org users), avatar → Profile, Sign out
- **Contextual navigation**: Workbench has "Get Code" button that generates Python/TypeScript/curl code from current config
- **Documentation links**: Contextual links throughout the UI pointing to docs.anthropic.com

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workbench Session | Model, system prompt, message pairs, parameters (temperature, max_tokens, top_p), response | User-owned, saveable |
| Saved Prompt | Named prompt template with variables, model config, system prompt | User/Org-owned |
| API Key | Key string, name, permissions, created date, last used | Org-scoped |
| Usage Record | Timestamp, model, input/output tokens, cost, endpoint | Org-scoped |
| Organization | Name, members, billing info, API keys, rate limits | Org |
| Invoice | Billing period, usage breakdown by model, total cost | Org billing |
| Log Entry | API request details — model, tokens, latency, status code, truncated prompt | Org-scoped |
| Prompt Version | version_number, system_prompt, parameters, created_at, author | belongs to Saved Prompt |
| Rate Limit | tier, requests_per_minute, tokens_per_minute, model | belongs to Organization |
| Batch Job | id, status, input_file, output_file, model, created_at | belongs to Organization |
| Evaluation | name, eval_set, model, results, scores | belongs to Organization |


### Entity Lifecycle
```
created → active → updated → archived
                  ↘ suspended → reactivated → active
created → deleted (soft delete with recovery period)
```
## User Flows

### Prompt Engineering in Workbench
```
Developer opens Workbench → selects model (Claude Sonnet 4, Opus 4, Haiku) → Writes system prompt in dedicated panel → Adds user message → clicks "Run" or Cmd+Enter → Response streams in the assistant panel → Adjusts parameters (temperature, max tokens) → re-runs → Clicks "Get Code" → copies Python/TypeScript/curl snippet → Saves as named prompt for later use or sharing with team
```

### API Key Management
```
Developer navigates to API Keys → Clicks "Create Key" → names the key, sets permissions → Key displayed once → copy and store securely → Key appears in list with usage stats and last-used date → Can revoke/delete keys; set rate limits per key
```

### Monitoring Usage & Costs
```
Developer navigates to Usage → Views dashboard: tokens consumed (input/output), costs by model, request volume → Filters by date range, model, API key → Charts show trends over time → Billing page shows invoices and payment methods
```

### Organization Management
```
Admin navigates to Settings → Members → Invites team members by email → Assigns roles (Admin, Developer, Billing) → Sets spend limits and rate limits for the organization → Manages multiple API keys with different permission scopes
```

### Prompt Versioning
```
Prompts → Select prompt → Edit system prompt or parameters → Save as new version → Compare versions side-by-side → Roll back to earlier version if needed
                                                                                                                                              ↘ Share prompt with team members
```

### Cost Monitoring & Alerts
```
Usage → View daily token consumption chart → Filter by model (Opus/Sonnet/Haiku) → Identify cost spike → Check per-key breakdown → Settings → Limits → Set monthly spend cap → Receive alert at 80% threshold
```
## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Dashboard |
| `/workbench` | New workbench session |
| `/workbench/{uuid}` | Saved workbench session |
| `/prompts` | Prompt library |
| `/prompts/{uuid}` | Individual saved prompt |
| `/api-keys` | API key management |
| `/usage` | Usage analytics |
| `/billing` | Billing management |
| `/billing/invoices` | Invoice history |
| `/settings/organization` | Org settings |
| `/settings/members` | Team management |
| `/settings/limits` | Rate/spend limits |
| `/logs` | API logs |

Standard SPA routing. UUIDs for saved prompts and workbench sessions.


### Additional Routes

```
/workbench                    → New workbench session
/workbench/{uuid}             → Saved workbench session
/prompts                      → Prompt library
/prompts/{uuid}               → Individual saved prompt
/prompts/{uuid}/versions      → Prompt version history
/api-keys                     → API key management
/api-keys/create              → Create new API key
/usage                        → Usage analytics
/usage/breakdown              → Usage breakdown by model
/billing                      → Billing overview
/billing/invoices             → Invoice history
/billing/invoices/{id}        → Invoice detail
/billing/payment-methods      → Payment methods
/billing/plans                → Plan selection
/settings/organization        → Org settings
/settings/members             → Team management
/settings/members/invite      → Invite member
/settings/limits              → Rate/spend limits
/settings/profile             → User profile
/logs                         → API request logs
/logs/{request_id}            → Log entry detail
/docs                         → Redirect to docs.anthropic.com
```

## Search & Filter

- **Prompt search**: Search saved prompts by name
- **Usage filters**: Filter by date range, model (Sonnet, Opus, Haiku), API key
- **Log filters**: Filter API logs by model, status code, date range, latency threshold
- **No global search**: No unified search across the entire console
- **API key search**: Filter keys by name
- **Log search**: Search API logs by request ID, filter by model, status code, date range
- **Member search**: Search team members by name or email

- **Sort options**: By relevance, date created, date modified, alphabetical, popularity
- **Autocomplete**: Type-ahead suggestions with recent searches and popular results
- **Advanced search**: Boolean operators (AND, OR, NOT), field-specific filters, date ranges
- **Recent searches**: Quick access to previous search queries
## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + Workbench with side-by-side system/user/assistant panels |
| Desktop (1024-1280px) | Collapsible sidebar + full Workbench |
| Tablet (768-1024px) | Minimal sidebar (icons) + Workbench panels stack vertically |
| Mobile (<768px) | Functional but not optimized — Workbench is a desktop tool |

- Workbench panels (system prompt, messages, parameters) stack vertically on narrow screens
- Usage charts resize responsively
- API key table adapts to narrower widths (truncated key previews)
- Code generation modal is full-screen on mobile


### Anthropic Console-Specific UX Patterns
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

| Role | Permissions |
|---|---|
| Anonymous | No access (authentication required) |
| Developer | Use Workbench, manage own API keys, view usage |
| Admin | Full access — manage members, billing, org settings, all API keys |
| Billing | View/manage billing, invoices, payment methods |

- Authentication: Email/password, Google OAuth, GitHub OAuth
- Organization model: Users belong to one or more organizations; API keys are org-scoped
- API key permissions: Keys can be scoped to specific capabilities
- Rate limits: Configurable per-org and per-key; different tiers have different defaults
- Spend limits: Admins can set monthly spend caps to prevent cost overruns
- SOC 2 Type II compliant; data not used for training by default
