---
brand: Gusto
tagline: "People platform for small business. Payroll, benefits, HR, and time — all in one."
category: HR / Payroll
website: https://gusto.com
---

# Gusto — Information Architecture

## Overview

Gusto is the payroll and HR platform built for small businesses, known for making payroll simple enough that a founder can run it in minutes. The mental model is **payroll as the backbone** — everything (benefits, compliance, tax filing, onboarding) revolves around paying people correctly and on time. Unlike BambooHR's HR-first approach, Gusto leads with payroll and wraps HR around it. Key differentiator: Gusto handles payroll tax filing, workers' comp, and compliance automatically, so small business owners never think about it.

## Site Map

```
├── Home / Dashboard
│   ├── Next Payroll (date, estimated total, action)
│   ├── Action Items (tasks needing attention)
│   │   ├── Missing info for new hire
│   │   ├── Tax notice needs response
│   │   ├── Benefits enrollment pending
│   │   └── Timesheet approval needed
│   ├── Company Summary (headcount, payroll cost)
│   ├── Recent Payrolls
│   └── News / Product Updates
├── Payroll
│   ├── Run Payroll
│   │   ├── Pay Period Selection
│   │   ├── Employee List
│   │   │   ├── Hours (if hourly)
│   │   │   ├── Salary (auto-populated)
│   │   │   ├── Bonus / Commission
│   │   │   ├── Reimbursements
│   │   │   ├── PTO Used (auto-deducted)
│   │   │   └── Deductions Preview
│   │   ├── Contractor Payments
│   │   ├── Review Payroll Summary
│   │   │   ├── Gross Pay
│   │   │   ├── Taxes (federal, state, local — calculated)
│   │   │   ├── Benefits Deductions
│   │   │   ├── Net Pay
│   │   │   ├── Employer Taxes & Contributions
│   │   │   └── Total Cost
│   │   └── Submit Payroll
│   ├── Payroll History
│   │   ├── Past Payrolls (list)
│   │   ├── Payroll Detail (per-employee breakdown)
│   │   └── Download Pay Stubs
│   ├── Payroll Schedule (biweekly, semimonthly, monthly)
│   ├── Off-Cycle Payroll (bonus, correction)
│   ├── Year-End
│   │   ├── W-2s (generated automatically)
│   │   ├── 1099s (contractors)
│   │   └── Year-End Checklist
│   └── Tax Center
│       ├── Tax Filings (federal, state, local — auto-filed)
│       ├── Tax Payments (auto-deposited)
│       ├── Tax Forms
│       └── Tax Notices / Credits (R&D, WOTC)
├── People
│   ├── Team Directory
│   ├── Employee Profile
│   │   ├── Personal Info
│   │   ├── Job & Pay (title, salary, pay schedule, FLSA status)
│   │   ├── Tax Info (W-4, state withholding)
│   │   ├── Benefits Enrollment
│   │   ├── Time Off Balances
│   │   ├── Documents (I-9, W-4, offer letter)
│   │   └── Employment History
│   ├── Add Employee (hire)
│   │   ├── Personal Details
│   │   ├── Job Details & Pay
│   │   ├── Self-Onboarding Invite (employee fills out W-4, direct deposit, I-9)
│   │   └── Assign to Benefits
│   ├── Contractor Profiles
│   │   ├── W-9
│   │   ├── Payment History
│   │   └── 1099 Generation
│   ├── Org Chart
│   └── Offboarding
│       ├── Terminate Employee
│       ├── Final Paycheck (calculated per state law)
│       ├── COBRA Notification
│       └── Offboarding Checklist
├── Benefits
│   ├── Health Insurance
│   │   ├── Available Plans (medical, dental, vision)
│   │   ├── Plan Comparison
│   │   ├── Employer Contribution Setup
│   │   └── Employee Enrollment
│   ├── 401(k) Retirement
│   │   ├── Plan Setup
│   │   ├── Employer Match
│   │   └── Employee Contributions
│   ├── Workers' Compensation
│   │   ├── Pay-As-You-Go (integrated with payroll)
│   │   └── Classification Codes
│   ├── Commuter Benefits
│   ├── HSA / FSA
│   ├── Life & Disability
│   └── Open Enrollment (annual)
├── Time & Attendance
│   ├── Time Tracking (clock in/out)
│   ├── Timesheets (weekly)
│   ├── Approve Hours (manager)
│   ├── Overtime Alerts
│   └── Sync with Payroll
├── Time Off
│   ├── Policies (PTO, Sick, Holiday)
│   ├── Request Time Off (employee)
│   ├── Approve Requests (manager)
│   ├── Calendar
│   └── Balances
├── Hiring & Onboarding
│   ├── Offer Letters (templates, e-sign)
│   ├── Self-Onboarding (employee completes remotely)
│   │   ├── W-4
│   │   ├── Direct Deposit
│   │   ├── I-9
│   │   ├── Benefits Selection
│   │   └── Company Policies Acknowledgment
│   ├── Onboarding Checklist
│   └── Custom Documents (e-sign)
├── Reports
│   ├── Payroll Summary
│   ├── Tax Liability
│   ├── Benefits Enrollment
│   ├── Time Off
│   ├── Contractor Payments
│   ├── Total Compensation
│   └── Custom Reports
├── Company Settings
│   ├── Company Info
│   ├── Locations (multi-state support)
│   ├── Pay Schedules
│   ├── Bank Account (for payroll funding)
│   ├── Departments
│   ├── Admins & Permissions
│   ├── Document Templates
│   ├── Integrations (QuickBooks, Xero, Slack, etc.)
│   └── Billing / Plan
└── Employee Self-Service
    ├── My Paystubs
    ├── My W-2s
    ├── My Tax Info (edit W-4)
    ├── My Benefits
    ├── My Time Off
    ├── My Documents
    ├── Direct Deposit (edit bank info)
    └── My Profile
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Left Sidebar** | Fixed, collapsible | Home, Payroll, People, Benefits, Time, Reports, Settings |
| **Action Items** | Dashboard badges | Numbered badge on nav items needing attention |
| **Payroll Flow** | Step-by-step wizard | Review employees → Adjustments → Summary → Submit |
| **Employee Profile** | Tabs within page | Personal / Pay / Tax / Benefits / Time Off / Docs |
| **Role Switch** | Different sidebar per role | Admin sees everything, employee sees self-service |

### Signature UX: Run Payroll
```
[Run Payroll] → Review Employee Hours → Add Bonuses → Review Summary → Total: $45,230 → [Submit Payroll] → "Payroll for Dec 1-15 submitted! Employees will be paid on Dec 20." → Taxes Auto-Filed
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Employee | name, email, title, department, salary/hourly_rate, pay_schedule, flsa_status, start_date, status | has Paystubs, BenefitEnrollments, W4, TimeOffBalance |
| Contractor | name, email, w9, payment_method, total_paid_ytd | has Payments, 1099 |
| PayrollRun | period_start, period_end, pay_date, status, gross_total, tax_total, net_total, employee_count | has many Paystubs |
| Paystub | employee, gross_pay, taxes{federal, state, local, fica}, deductions{health, dental, 401k}, net_pay, pay_method | belongs to PayrollRun |
| TaxFiling | type (940/941/W-2/state), period, amount, status (filed/pending), filed_date | auto-generated |
| BenefitPlan | type (medical/dental/vision/401k/life), carrier, tiers[], employer_contribution | has Enrollments |
| BenefitEnrollment | employee, plan, tier (employee_only/family/etc), employee_contribution, dependents[] | belongs to Employee |
| TimeOffPolicy | name, type (PTO/sick/holiday), accrual_rate, max_balance, carryover | has many Balances |
| TimeEntry | employee, date, hours, project, status (pending/approved) | belongs to Employee |
| OfferLetter | candidate_name, title, salary, start_date, template, e_signed | belongs to Hire |
| W4 | filing_status, allowances, additional_withholding, effective_date | belongs to Employee |

### Payroll Status
```
draft → reviewing → submitted → processing → completed → paid
                                              ↘ error (needs correction)
```

### Tax Filing (Automatic)
```
payroll_completed → tax_calculated → filed → acknowledged
```

## User Flows

### Run Payroll (3-Minute Payroll)
```
Dashboard → [Run Payroll] → Review Employee List (hours auto-synced) → Add Bonus for Sarah → Review Summary → Employer Cost: $52,300 → [Submit] → "Payroll Submitted!" → Taxes Auto-Filed → Employees Paid on Schedule
```

### Hire & Onboard
```
People → Add Employee → Enter Name + Email + Start Date + Salary → [Send Invite] → Employee Gets Self-Onboarding Email → Completes W-4, Direct Deposit, I-9, Benefits → First Payroll Includes New Hire Automatically
```

### Employee: View Paystub
```
Self-Service → My Paystubs → Select Pay Date → View Breakdown (gross, taxes, deductions, net) → Download PDF
```

### Set Up Benefits
```
Benefits → Health Insurance → Browse Plans → Select Plan → Set Employer Contribution (50%) → Open Enrollment → Employees Select → Deductions Auto-Apply to Payroll
```

## URL / Route Structure

```
/                              → Dashboard
/payroll                       → Payroll Home
/payroll/run                   → Run Payroll
/payroll/history               → Payroll History
/payroll/history/:id           → Payroll Detail
/payroll/tax-center            → Tax Center
/payroll/year-end              → Year-End
/people                        → Team Directory
/people/:id                    → Employee Profile
/people/:id/pay                → Pay Tab
/people/:id/taxes              → Tax Info
/people/:id/benefits           → Benefits Tab
/people/new                    → Add Employee
/people/contractors            → Contractors
/people/offboarding/:id        → Offboarding
/benefits                      → Benefits Admin
/benefits/health               → Health Plans
/benefits/401k                 → Retirement
/benefits/enrollment           → Open Enrollment
/time                          → Time Tracking
/time/timesheets               → Timesheets
/time/time-off                 → Time Off
/time/time-off/calendar        → Calendar
/hiring                        → Offer Letters
/reports                       → Reports
/reports/:type                 → Specific Report
/settings                      → Company Settings
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| People | Name, email, title | Department, Location, Status, Type (employee/contractor) | Name, Start Date |
| Payroll History | Pay period, employee | Date Range, Pay Schedule | Date |
| Time Off | Employee | Type, Status, Date Range | Date |
| Reports | — | Date Range, Department | — |

## Responsive Behavior

| Breakpoint | Dashboard | Payroll | People |
|------------|-----------|---------|--------|
| Desktop | Full sidebar + dashboard | Payroll review table | Full profile tabs |
| Tablet | Collapsible sidebar | Simplified table | Stacked tabs |
| Mobile | Bottom nav (limited) | Card-based review | Accordion profile |

### Gusto-Specific UX
- **3-minute payroll**: Pre-populated from timesheets, salary, and PTO
- **Auto-pilot payroll**: Set it and forget it (auto-runs on schedule)
- **Self-onboarding**: New hires complete paperwork before Day 1
- **Tax auto-filing**: Federal, state, local — Gusto handles everything
- **Workers' comp pay-as-you-go**: Integrated into payroll (no annual audit)
- **Friendly language**: "Let's run payroll" not "Process payroll batch"
- **Action items**: Dashboard prominently shows what needs your attention
- **Green brand**: Fresh, approachable, trustworthy

## Access Control

| Role | Dashboard | Payroll | People | Benefits | Reports | Settings |
|------|-----------|---------|--------|----------|---------|----------|
| Admin (Owner) | ✅ | Run + view | All CRUD | Configure | All | ✅ |
| Payroll Admin | ✅ | Run + view | View | View | Payroll reports | Limited |
| HR Admin | ✅ | View | All CRUD | Configure | HR reports | Limited |
| Manager | Team view | — | Team view | — | Team | — |
| Employee | Self-service | Own paystubs | Own profile | Own enrollment | — | — |
| Contractor | Self-service | Own payments | Own profile | — | — | — |

### Compliance
- All payroll taxes auto-calculated and auto-filed
- State new hire reporting (automatic)
- ACA compliance (1095-C generation)
- Workers' comp (integrated, pay-as-you-go)
- I-9 compliance (electronic)
- SOC 2 Type II
- Encryption at rest and in transit
