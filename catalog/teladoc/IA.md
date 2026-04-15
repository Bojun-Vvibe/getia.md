---
brand: Teladoc
tagline: "Virtual care for the whole you. See a doctor online, anytime, anywhere."
category: Telemedicine
website: https://teladoc.com
---

# Teladoc — Information Architecture

## Overview

Teladoc is the largest telehealth platform in the US, offering virtual doctor visits across primary care, mental health, dermatology, nutrition, and chronic condition management. The mental model is **feel unwell, see a doctor now** — the platform prioritizes speed to care. Key differentiators: 24/7 availability (see a doctor in minutes, not days), multi-specialty coverage, integration with employer/health plan benefits, and chronic care programs (for diabetes, hypertension, weight management). Teladoc also operates BetterHelp for mental health and Livongo for chronic condition monitoring.

## Site Map

### Patient App

```
├── Home
│   ├── Quick Actions
│   │   ├── "See a Doctor Now" (urgent, General Medical)
│   │   ├── "Schedule a Visit" (planned)
│   │   ├── "Talk to a Therapist" (Mental Health)
│   │   └── "Send a Photo" (Dermatology)
│   ├── Upcoming Appointments
│   ├── My Care Team (assigned providers)
│   ├── Health Reminders (prescription refills, follow-ups)
│   ├── Programs (Diabetes, Hypertension, Weight)
│   └── Recent Visit Summaries
├── Care Services
│   ├── General Medical (24/7, <10 min wait)
│   │   ├── Cold & Flu
│   │   ├── Allergies
│   │   ├── Infections (UTI, sinus, ear)
│   │   ├── Skin Issues (rash, redness)
│   │   ├── Digestive Issues
│   │   └── Prescription Refills
│   ├── Mental Health
│   │   ├── Therapy (licensed therapists)
│   │   ├── Psychiatry (medication management)
│   │   ├── Teen Therapy (13+)
│   │   └── Couples Therapy
│   ├── Dermatology
│   │   ├── Upload Photos (3 angles)
│   │   ├── Describe Condition
│   │   └── Dermatologist Review (async, <24h)
│   ├── Nutrition
│   │   ├── Dietitian Consultations
│   │   └── Meal Plans
│   ├── Back & Joint Care
│   ├── Primary Care (Primary360)
│   │   ├── Assigned PCP
│   │   ├── Longitudinal Care
│   │   ├── Health Screenings
│   │   └── Care Coordination
│   └── Chronic Care Programs
│       ├── Diabetes Management (Livongo)
│       │   ├── Connected Glucose Meter
│       │   ├── Blood Sugar Logs
│       │   ├── Coaching
│       │   └── Alerts & Insights
│       ├── Hypertension Management
│       │   ├── Connected Blood Pressure Cuff
│       │   ├── BP Logs
│       │   └── Coaching
│       └── Weight Management
│           ├── Coach Sessions
│           ├── Meal Tracking
│           └── Activity Goals
├── Book / See a Doctor
│   ├── Select Service
│   ├── Symptoms Questionnaire (guided triage)
│   ├── Visit Type
│   │   ├── Video Visit
│   │   ├── Phone Visit
│   │   └── Async (messaging / photo-based)
│   ├── Provider Selection
│   │   ├── Next Available (fastest)
│   │   ├── Choose Provider (by specialty, language, gender)
│   │   └── My Provider (if assigned)
│   ├── Insurance / Copay Display
│   ├── Pre-Visit Questionnaire
│   └── Confirm
├── Waiting Room
│   ├── Position / Wait Time
│   ├── Device Check (camera, mic)
│   ├── Upload Documents / Photos
│   └── [Join Call]
├── Video Visit
│   ├── Video / Audio Stream
│   ├── Chat Sidebar
│   ├── Screen Share
│   ├── End Call
│   └── Connection Status
├── Visit Summary (Post-Visit)
│   ├── Diagnosis
│   ├── Treatment Plan
│   ├── Prescriptions (sent to pharmacy)
│   ├── Lab Orders
│   ├── Follow-Up Recommendations
│   ├── Doctor's Notes
│   ├── Download / Print
│   └── Rate Visit
├── My Appointments
│   ├── Upcoming
│   ├── Past Visits
│   ├── Cancelled
│   └── Reschedule / Cancel
├── Health Records
│   ├── Medical History
│   ├── Conditions
│   ├── Allergies
│   ├── Current Medications
│   ├── Lab Results
│   ├── Visit Notes
│   └── Documents
├── Prescriptions
│   ├── Active Prescriptions
│   ├── Request Refill
│   ├── Pharmacy Selection (CVS, Walgreens, etc.)
│   └── Prescription History
├── Messages
│   ├── Provider Messages
│   ├── Care Team Updates
│   └── Attach Files
├── Account
│   ├── Profile
│   ├── Insurance / Benefits Info
│   ├── Dependent Profiles (family members)
│   ├── Pharmacy Preferences
│   ├── Payment Methods
│   ├── Notifications
│   └── Settings
└── Help
    ├── FAQ
    ├── Technical Support
    ├── Billing Questions
    └── Emergency Disclaimer ("If this is an emergency, call 911")
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Bottom Tab Bar** | 4 tabs | Home, Visits, Records, Account |
| **Primary CTA** | Prominent on Home | "See a Doctor Now" (urgent) — one-tap to fastest care |
| **Care Grid** | Service cards on Home | General Medical, Mental Health, Dermatology, etc. |
| **Video Controls** | Floating overlay during visit | Mute, camera toggle, chat, end call |
| **Wait Time Banner** | Top of Home when active | "Your provider will be ready in ~5 minutes" |
| **Program Dashboard** | Dedicated section for chronic care | Glucose/BP charts, coaching, connected device status |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Patient | name, dob, gender, email, phone, insurance, pharmacy, allergies[], conditions[], medications[], dependents[] | has Appointments, Records, Prescriptions |
| Provider | name, photo, specialty, credentials, languages[], rating, availability | has Appointments |
| Appointment | type (video/phone/async), service, datetime, duration, status, copay, provider, patient | has VisitSummary |
| VisitSummary | diagnosis, treatment_plan, notes, prescriptions[], lab_orders[], follow_up | belongs to Appointment |
| Prescription | medication, dosage, frequency, duration, refills, pharmacy, status | belongs to Patient, written by Provider |
| ChronicProgram | type (diabetes/hypertension/weight), patient, coach, devices[], readings[], goals | belongs to Patient |
| DeviceReading | type (glucose/bp/weight), value, timestamp, out_of_range | belongs to ChronicProgram |
| Insurance | plan_name, member_id, group, copay_amount | belongs to Patient |

### Appointment Status
```
scheduled → waiting_room → in_progress → completed → summary_available
             ↘ cancelled / rescheduled / no_show
```

### Async Visit Flow
```
submitted → provider_reviewing → response_ready → completed
```

## User Flows

### See a Doctor Now (Urgent)
```
Home → [See a Doctor Now] → Symptom Questionnaire (3-5 questions) → Insurance Confirmed → Copay Shown → [Request Visit] → Waiting Room (avg 10 min) → Video Call → Visit Summary → Prescription Sent to Pharmacy
```

### Schedule Mental Health Therapy
```
Care → Mental Health → Therapy → Browse Therapists → Filter (specialty, language) → Select Provider → Pick Time Slot → Confirm → Reminder → Video Session
```

### Dermatology (Async)
```
Care → Dermatology → Upload 3 Photos → Describe Symptoms → Submit → Dermatologist Reviews (<24h) → Diagnosis + Treatment in App → Prescription if Needed
```

### Monitor Diabetes (Livongo)
```
Check Blood Sugar (connected meter auto-syncs) → Reading Appears in App → AI Insight ("Higher than usual after lunch") → Coach Reaches Out if Concerning → Adjust Plan
```

## URL / Route Structure

```
/                              → Home
/care                          → Care Services
/care/general-medical          → General Medical
/care/mental-health            → Mental Health
/care/dermatology              → Dermatology
/care/primary360               → Primary Care
/care/chronic                  → Chronic Programs
/book                          → Book Visit
/book/symptoms                 → Symptom Questionnaire
/book/providers                → Provider Selection
/waiting-room/:id              → Waiting Room
/visit/:id                     → Video Visit
/visit/:id/summary             → Visit Summary
/appointments                  → My Appointments
/appointments/:id              → Appointment Detail
/records                       → Health Records
/records/medications           → Medications
/records/labs                  → Lab Results
/prescriptions                 → Prescriptions
/prescriptions/:id             → Prescription Detail
/messages                      → Messages
/programs/diabetes             → Diabetes Dashboard
/programs/hypertension         → Hypertension Dashboard
/programs/weight               → Weight Management
/account                       → Account
/account/insurance             → Insurance Info
/account/dependents            → Family Members
/help                          → Help
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Providers | Name, specialty | Specialty, Language, Gender, Availability, Insurance | Soonest Available, Rating |
| Prescriptions | Medication name | Status (active/expired), Provider | Date, name |
| Health Records | Condition, medication | Type, Date | Date |
| Visit History | Provider name, diagnosis | Service Type, Date Range | Date |

## Responsive Behavior

| Breakpoint | Home | Book Visit | Video Visit |
|------------|------|-----------|-------------|
| Mobile (primary) | Card grid, bottom tabs | Step-by-step wizard | Full-screen video |
| Tablet | Larger cards, sidebar | Single-page form | Video + sidebar chat |
| Desktop (web) | Dashboard layout | Multi-column | Large video + sidebar |

### Telemedicine-Specific UX
- One-tap "See a Doctor Now" for urgent care
- Camera/microphone permission check before visit
- Picture-in-picture video during chat
- Push notifications: appointment reminders, prescription ready
- Pharmacy locator with preferred pharmacy saved
- Dependent switching: manage family members' health from one account
- Connected device integration (glucose meter, BP cuff, smart scale)
- Emergency disclaimer visible everywhere
- HIPAA-compliant messaging

## Access Control

### Patient
| Role | Browse | Book | Consult | Records | Prescriptions |
|------|--------|------|---------|---------|--------------|
| Guest | ✅ | — | — | — | — |
| Registered | ✅ | ✅ | ✅ | Own | Own |
| Dependent | Via guardian | Via guardian | Via guardian | Guardian view | Guardian view |

### Compliance
- HIPAA-compliant data storage and transmission
- End-to-end encrypted video calls
- Audit logging for all record access
- Consent forms before first visit
- DEA-compliant prescribing
- State medical licensing compliance
- BAA with all technology vendors
- SOC 2 Type II certified
