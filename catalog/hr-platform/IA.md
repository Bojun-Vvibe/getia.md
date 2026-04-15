# HR Platform — Information Architecture

## Overview

An employee management platform for HR teams (BambooHR, Workday, Gusto style). The mental model is **people-centric management** — employees are the core entity, with workflows for hiring, onboarding, time-off, payroll, and performance reviews.

## Site Map

```
├── Dashboard
│   ├── Headcount Summary
│   ├── Time Off Calendar
│   ├── Pending Approvals
│   ├── Upcoming Events (birthdays, anniversaries)
│   ├── Open Positions
│   └── Announcements
├── People
│   ├── Employee Directory
│   ├── Org Chart
│   ├── Employee Profile
│   │   ├── Personal Info
│   │   ├── Job Details (title, department, manager)
│   │   ├── Compensation
│   │   ├── Time Off Balances
│   │   ├── Documents
│   │   ├── Performance Reviews
│   │   ├── Training / Certifications
│   │   └── Activity Timeline
│   └── Add Employee
├── Recruiting
│   ├── Job Postings
│   ├── Applicant Tracking (pipeline)
│   ├── Candidate Profile
│   ├── Interview Scheduling
│   └── Offer Letters
├── Time Off
│   ├── Request Time Off
│   ├── My Requests
│   ├── Team Calendar
│   ├── Pending Approvals (manager)
│   └── Policies
├── Payroll
│   ├── Run Payroll
│   ├── Payroll History
│   ├── Pay Stubs
│   ├── Tax Documents
│   └── Benefits
├── Performance
│   ├── Review Cycles
│   ├── Goals / OKRs
│   ├── 1:1 Notes
│   └── Feedback / 360 Reviews
├── Reports
│   ├── Headcount
│   ├── Turnover
│   ├── Compensation
│   ├── Time Off Usage
│   └── Custom Reports
├── Settings
│   ├── Company Info
│   ├── Departments & Locations
│   ├── Roles & Permissions
│   ├── Time Off Policies
│   ├── Payroll Config
│   ├── Custom Fields
│   └── Integrations
└── Self-Service (Employee View)
    ├── My Profile
    ├── My Time Off
    ├── My Pay Stubs
    ├── My Benefits
    ├── My Goals
    └── Company Directory
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Global Nav** | Left sidebar | Dashboard, People, Recruiting, Time Off, Payroll, Performance, Reports |
| **Employee Nav** | Tabs on profile | Personal / Job / Compensation / Time Off / Documents / Performance |
| **Role-Based View** | Sidebar adapts per role | HR sees all; Managers see team; Employees see self-service |
| **Quick Actions** | Top bar | Add Employee, Request Time Off, Run Payroll |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Employee | name, email, title, department, location, manager, start_date, status | has Compensation, TimeOffBalances, Documents, Reviews |
| Department | name, head, parent_department | has many Employees |
| TimeOffRequest | type, start_date, end_date, status, approver | belongs to Employee |
| PayrollRun | period, status, total_amount, employees_count | has many PayStubs |
| PerformanceReview | cycle, reviewer, reviewee, rating, feedback | belongs to Employee |
| JobPosting | title, department, location, status, applicants_count | has many Candidates |
| Candidate | name, email, resume, stage, rating | belongs to JobPosting |

## User Flows

### Hire to Onboard
```
Create Job Posting → Receive Applicants → Screen → Interview → Offer → Accept → Create Employee → Onboarding Checklist
```

### Time Off Request
```
Employee: Request Time Off → Select Dates → Submit
Manager: Notification → Review → Approve/Deny → Employee Notified
```

### Payroll Cycle
```
HR: Run Payroll → Review Summary → Approve → Process → Pay Stubs Generated → Employees Notified
```

## URL / Route Structure

```
/                          → Dashboard
/people                    → Employee Directory
/people/org-chart          → Org Chart
/people/:id                → Employee Profile
/people/new                → Add Employee
/recruiting                → Job Postings
/recruiting/:id            → Job Detail + Pipeline
/recruiting/:id/candidates/:cid → Candidate Profile
/time-off                  → Time Off Overview
/time-off/request          → Request Form
/time-off/calendar         → Team Calendar
/payroll                   → Payroll Dashboard
/payroll/run               → Run Payroll
/payroll/history           → Payroll History
/performance               → Review Cycles
/performance/goals         → Goals / OKRs
/reports                   → Reports
/settings                  → Company Settings
```

## Search & Filter

| Context | Filters | Sort |
|---------|---------|------|
| People | Department, Location, Status, Manager, Title | Name, Start Date, Department |
| Time Off | Type, Status, Date Range, Department | Date, Employee |
| Candidates | Stage, Job, Rating, Source | Applied Date, Rating |
| Reports | Date Range, Department, Location | — |

## Responsive Behavior

| Breakpoint | Layout |
|------------|--------|
| Desktop | Sidebar + content, data tables |
| Tablet | Collapsed sidebar, responsive tables |
| Mobile | Bottom nav (limited: Home, Directory, Time Off, Profile), card layouts |

## Access Control

| Role | Dashboard | People | Payroll | Performance | Settings |
|------|-----------|--------|---------|-------------|----------|
| Admin/HR | ✅ Full | All CRUD | Full | All | ✅ |
| Manager | Team view | Team view | — | Team reviews | — |
| Employee | Self only | Directory (read) | Own pay stubs | Own goals/reviews | — |
