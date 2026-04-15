---
brand: Quora
tagline: A place to share knowledge and better understand the world
category: Social & Communication
website: https://quora.com
---

# Information Architecture — Quora

## Overview

Quora is a knowledge-sharing Q&A platform where questions are answered by a community of experts, enthusiasts, and everyday users. The IA is organized around Questions, Answers, Topics, and Spaces (community groups). Content is evergreen — answers accumulate upvotes over years — making Quora both a real-time discussion forum and a durable knowledge base. Quora also hosts Poe, its AI chatbot aggregator platform.

## Site Map

```
Quora
├── Home Feed (personalized)
│   ├── Answers from followed topics/people
│   ├── Suggested questions
│   └── Space posts
├── Search
│   ├── Questions
│   ├── Answers
│   ├── People
│   ├── Spaces
│   └── Topics
├── Answer (write)
│   ├── Answer Requests
│   ├── Questions for You
│   └── Drafts
├── Spaces
│   ├── Space Feed
│   ├── Members
│   ├── About / Rules
│   ├── Submissions
│   └── Space Settings (admins)
├── Notifications
│   ├── Upvotes
│   ├── Answers to your questions
│   ├── Comments
│   ├── Follow activity
│   └── Space updates
├── Profile
│   ├── Answers
│   ├── Questions
│   ├── Posts
│   ├── Followers / Following
│   ├── Topics / Spaces
│   ├── Credentials
│   └── Stats (views, upvotes)
├── Quora+ (subscription)
│   └── Paywalled answers / premium content
├── Monetization
│   ├── Quora Partner Program
│   └── Space subscriptions
├── Poe (AI platform)
│   ├── Chat with AI bots
│   ├── Bot creation
│   └── API access
├── Topic Pages
│   ├── Related Questions
│   ├── Top Answers
│   ├── Topic FAQ
│   └── Related Topics
└── Settings
    ├── Account
    ├── Privacy
    ├── Email & Notifications
    ├── Languages
    └── Content Preferences
```

## Navigation Model

- **Type**: Top nav bar with left sidebar (desktop), bottom tab bar (mobile)
- **Desktop Top Bar**: Quora logo (home), Search bar, Add Question, Notifications, Profile avatar
- **Desktop Left Sidebar**: Home, Following, Answer, Spaces, Notifications, Poe
- **Mobile Bottom Tabs**: Home, Search, Add (+), Notifications, Profile
- **Question Page**: Answer list sorted by upvotes; "Related Questions" sidebar
- **Topic Navigation**: Topic page → related topics tree → questions within topic

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Question | title, details, topics, asker (can be anonymous), answer count, followers, merged questions | → Answers, → Topics |
| Answer | body (rich text), author, upvotes, downvotes, comments, views, timestamp, Quora+ flag | → Question, → Author |
| Post | body, author, Space (if applicable), upvotes, comments | → Space, → Profile |
| Space | name, description, icon, rules, member count, admin list, subscription price (optional) | → Posts, → Members |
| Topic | name, description, related topics, follower count, image | → Questions, → Answers |
| Comment | text, author, timestamp, upvotes | → Answer, → Post |
| Credential | text (e.g., "PhD in Physics"), user-added, displayed on relevant answers | → User, → Topic |
| User Profile | name, bio, credentials, follower count, answer views, spaces | → Answers, → Questions, → Spaces |

## User Flows

### Asking a Question
```
Click "Add Question" → Type question → Autocomplete suggests existing similar questions → If duplicate found → Redirect to existing question → If new → Add topic tags → Submit → Optionally request answers from specific users or topic experts → Question appears in topic feeds and followers' home feeds
```

### Answering a Question
```
Home feed shows "Questions for You" based on expertise/interests → Or browse "Answer" tab → Curated answer requests → Click question → Write answer with rich text editor (formatting, images, links) → Submit → Answer ranked by upvotes among other answers
```

### Exploring Spaces
```
Discover Spaces via home feed, search, or sidebar → Join Space → See posts from Space members → Contribute posts → Admins may moderate submissions → Paid Spaces require subscription to view premium content
```

## URL / Route Structure

```
quora.com/                                  # Home feed
quora.com/search?q={query}                  # Search results
quora.com/{question-slug}                   # Question page
quora.com/{question-slug}/answer/{answerId} # Specific answer
quora.com/profile/{username}                # User profile
quora.com/profile/{username}/answers        # User's answers
quora.com/topic/{topic-slug}                # Topic page
quora.com/spaces/{spaceSlug}                # Space page
quora.com/q/{spaceSlug}/{postId}            # Space post
quora.com/about                             # About Quora
poe.com/                                    # Poe AI platform (separate domain)
quora.com/topic/{topic}                       # Topic page
quora.com/search?q={query}                    # Search results
quora.com/profile/{username}                  # User profile
quora.com/profile/{username}/answers          # User's answers
quora.com/spaces/{space}                      # Space (community)
quora.com/create                              # Create question
quora.com/create_space                        # Create space
quora.com/messages                            # Direct messages
quora.com/notifications                       # Notifications
quora.com/stats                               # Creator stats
quora.com/monetization                        # Quora Partner Program
quora.com/settings                            # Account settings
quora.com/settings/privacy                    # Privacy settings
```

## Search & Filter

- **Global Search**: Full-text search across questions, answers, people, topics, Spaces
- **Autocomplete**: Question deduplication — suggests existing questions matching typed query
- **Answer Sorting**: By upvotes (default), recency, or "Related answers"
- **Topic Browse**: Hierarchical topic tree; related topics sidebar
- **Language Filter**: Content available in 20+ languages; filter by language preference
- **Feed Tuning**: Upvote/downvote and "Not interested" signals to tune home feed
- **Space Content**: Searchable within specific Spaces

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | Single-column feed; bottom tab bar; full-screen question/answer view; simplified editor |
| Tablet (768–1024px) | Single-column with wider margins; sidebar collapses |
| Desktop (> 1024px) | Left sidebar (nav) + center feed + right sidebar (related questions, trending, ads) |
| SEO Pages | Questions and top answers rendered server-side for search engine indexing |

## Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | View questions and answers (with signup prompt after scroll); search; SEO landing pages |
| Registered User | Ask questions, answer, upvote/downvote, comment, follow topics/people/Spaces, create Spaces |
| Quora+ Subscriber | Access paywalled answers, ad-free experience |
| Space Admin | Create/manage Space, set rules, moderate submissions, set subscription pricing |
| Space Member | Post in Space, comment, view member-only content |
| Quora Partner | Earn revenue from questions that generate ad views |
| Top Writer | Badge recognition, invited to Quora events, content prioritized |
| Moderator (platform) | Edit questions, merge duplicates, enforce BNBR (Be Nice Be Respectful) policy |
| Blocked / Banned | Cannot interact with blocking user; banned users lose write access platform-wide |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Question | title, details, topics[], anonymous flag, followers count, answer count | → Answers, Topics, Asker |
| Answer | body (rich text), upvotes, downvotes, views, shares, author, date, position | → Question, Author, Comments |
| Topic | name, description, followers count, related topics | → Questions (many-to-many) |
| Space | name, description, icon, rules, moderators, followers, posts | → Questions, Answers, Members |
| User | name, bio, credentials[], topics followed, answer count, follower count | → Answers, Questions, Spaces |
| Comment | text, author, upvotes, replies | → Answer (thread) |
| Blog Post | title, body, author, publish date | → User, Topics |
| Credential | text (e.g., "Software Engineer at Google"), topic | → User |

## Quora Spaces

- **Community hubs:** Topic-specific communities (like subreddits but on Quora)
- **Moderation:** Space admins approve posts, set rules, manage members
- **Content types:** Questions, answers, posts (article-style), shared links
- **Monetization:** Space admins can earn from Quora+ subscriptions
- **Discovery:** Spaces appear in topic feeds and search results

## Monetization

| Program | Who | How |
|---------|-----|-----|
| Quora Partner Program | Question askers | Earn money when questions generate ad revenue |
| Quora+ | Writers | Subscribers pay; writers earn based on engagement |
| Spaces Monetization | Space admins | Earn from Quora+ subscribers in their space |
| Poe (AI platform) | Developers | Build and monetize AI bots on Quora's Poe platform |

## Feed Algorithm

- **Personalization:** Based on followed topics, followed users, reading history, upvote patterns
- **Answer ranking:** Combination of upvotes, author credentials, recency, engagement rate
- **No chronological option:** Feed is purely algorithmic
- **Digest email:** Weekly email with top answers from followed topics

## Answer Quality Signals

- **Credentials:** Author's relevant expertise displayed under answer
- **Upvote ratio:** Ratio of upvotes to views indicates quality
- **Request-to-answer:** Questions can be directed to specific experts
- **Moderation:** Community reporting + algorithmic content quality scoring
- **Collapsed answers:** Low-quality or off-topic answers auto-collapsed

## Content Guidelines

- **Be Nice, Be Respectful (BNBR):** Core policy — civil discourse required
- **Credential system:** Authors add topic-specific credentials for credibility
- **Duplicate detection:** AI identifies duplicate questions; answers merged
