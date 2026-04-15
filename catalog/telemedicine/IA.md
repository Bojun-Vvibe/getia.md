# Telemedicine — Information Architecture

## Overview

A virtual healthcare platform (Teladoc, Amwell, Doctor On Demand style). The mental model is **feel unwell → find provider → consult → follow up** — patients search for doctors, book appointments (video, phone, or chat), have virtual consultations, receive prescriptions, and manage their health records. Trust, privacy, and speed to care are paramount.

## Site Map

### Patient-Facing

```
├── Home
│   ├── Quick Actions (See a Doctor Now, Schedule Visit)
│   ├── Upcoming Appointments
│   ├── Recent Visits Summary
│   ├── Health Reminders (prescriptions, follow-ups)
│   ├── Symptoms Checker (guided triage)
│   └── Care Categories (Primary Care, Mental Health, Dermatology, Urgent Care)
├── Find a Provider
│   ├── Search (specialty, name, condition)
│   ├── Provider List (photo, specialty, rating, availability)
│   ├── Filters (specialty, language, gender, insurance, availability)
│   └── Provider Profile
│       ├── Photo & Bio
│       ├── Specialties & Credentials
│       ├── Languages
│       ├── Accepted Insurance
│       ├── Ratings & Reviews
│       ├── Available Slots
│       └── Book Appointment CTA
├── Book Appointment
│   ├── Visit Type (video, phone, chat, in-person)
│   ├── Reason for Visit
│   ├── Select Date & Time
│   ├── Insurance / Payment
│   ├── Pre-Visit Questionnaire
│   └── Confirm Booking
├── Waiting Room
│   ├── Appointment Countdown
│   ├── Pre-visit Checklist (camera, mic test)
│   ├── Upload Documents / Photos
│   └── Join Call Button
├── Video Consultation
│   ├── Video / Audio Stream
│   ├── Chat Sidebar
│   ├── Screen Share (for showing results)
│   ├── End Call
│   └── Connection Status
├── Visit Summary (Post-Visit)
│   ├── Diagnosis
│   ├── Treatment Plan
│   ├── Prescriptions
│   ├── Lab Orders
│   ├── Follow-Up Recommendations
│   ├── Doctor's Notes
│   └── Download / Print
├── My Appointments
│   ├── Upcoming
│   ├── Past Visits
│   ├── Canceled
│   └── Appointment Detail
│       ├── Join / Reschedule / Cancel
│       └── Visit Summary (post-visit)
├── Health Records
│   ├── Medical History
│   ├── Conditions
│   ├── Allergies
│   ├── Medications (current)
│   ├── Lab Results
│   ├── Immunizations
│   ├── Visit History
│   └── Documents / Uploads
├── Prescriptions
│   ├── Active Prescriptions
│   ├── Prescription Detail
│   ├── Refill Request
│   ├── Pharmacy Selection
│   └── Prescription History
├── Messages
│   ├── Conversations with Providers
│   ├── Message Thread
│   └── Attach File / Image
├── Account
│   ├── Profile (demographics, emergency contact)
│   ├── Insurance Info
│   ├── Payment Methods
│   ├── Dependent Profiles (family members)
│   ├── Notifications
│   ├── Privacy Settings
│   └── Settings
├── Help
│   ├── FAQ
│   ├── Technical Support (camera, mic issues)
│   ├── Billing Questions
│   └── Contact
└── Footer
    ├── About
    ├── For Providers
    ├── Privacy (HIPAA)
    ├── Terms
    └── Emergency Disclaimer
```

### Provider Portal

```
├── Dashboard
│   ├── Today's Schedule
│   ├── Pending Appointments
│   ├── Patient Messages (unread)
│   ├── Tasks (lab reviews, prescription refills)
│   └── Alerts
├── Schedule
│   ├── Calendar View (day/week/month)
│   ├── Appointment Detail
│   ├── Availability Settings
│   └── Time-Off / Blocked Slots
├── Patients
│   ├── Patient List
│   ├── Patient Chart
│   │   ├── Demographics
│   │   ├── Medical History
│   │   ├── Conditions & Allergies
│   │   ├── Medications
│   │   ├── Visit Notes (SOAP format)
│   │   ├── Lab Results
│   │   ├── Documents
│   │   └── Communication Log
│   └── Search Patients
├── Consultation
│   ├── Pre-Visit Review (patient history, questionnaire)
│   ├── Video Call Interface
│   ├── Visit Note Editor (SOAP)
│   ├── Prescribe Medication
│   ├── Order Labs
│   ├── Referral
│   └── Complete Visit → Generate Summary
├── Messages
│   ├── Patient Messages
│   └── Internal (provider-to-provider)
├── Prescriptions
│   ├── Pending Refills
│   ├── Prescribe New
│   └── Prescription History
├── Analytics
│   ├── Appointments (completed, no-show, cancelled)
│   ├── Patient Satisfaction
│   ├── Revenue
│   └── Time Metrics
├── Profile
│   ├── Public Profile Editor
│   ├── Credentials
│   └── Availability
└── Settings
    ├── Notification Preferences
    ├── EHR Integration
    └── Billing
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **Header** | Sticky top bar | Logo, Find Provider, My Appointments, Messages (badge), Account |
| **Quick Actions** | Prominent CTAs on home | "See a Doctor Now" (urgent), "Schedule Visit" (planned) |
| **Category Cards** | Grid on home | Primary Care, Mental Health, Dermatology, Pediatrics, etc. |
| **Patient Bottom Nav** | Mobile tabs | Home, Appointments, Records, Messages, Account |
| **Provider Sidebar** | Fixed left nav | Dashboard, Schedule, Patients, Messages, Prescriptions, Analytics |
| **Video Controls** | Overlay during consultation | Mute, Camera toggle, Chat, Screen share, End call |

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Patient | name, dob, gender, email, phone, insurance, emergency_contact, allergies[], conditions[] | has many Appointments, HealthRecords, Prescriptions |
| Provider | name, photo, specialties[], credentials, bio, languages[], accepted_insurance[], rating, license_state[] | has many Appointments, Availability |
| Appointment | type (video/phone/chat), date, time, duration, status, reason, provider, patient | has one VisitSummary |
| VisitSummary | diagnosis, treatment_plan, notes (SOAP), follow_up_date | belongs to Appointment |
| Prescription | medication, dosage, frequency, duration, refills, pharmacy, status | belongs to Patient and Provider |
| LabOrder | test_name, status, results, ordered_by, date | belongs to Patient |
| HealthRecord | type (condition/allergy/immunization/document), data, date | belongs to Patient |
| Message | sender, recipient, body, attachments[], read, created_at | between Patient and Provider |
| Insurance | provider_name, member_id, group_number, plan_type | belongs to Patient |
| Availability | provider, day_of_week, start_time, end_time, slot_duration | belongs to Provider |

### Appointment Status Flow
```
requested → confirmed → waiting_room → in_progress → completed
              ↘ rescheduled
              ↘ cancelled
              ↘ no_show
```

## User Flows

### Urgent Visit
```
Home → [See a Doctor Now] → Select Category → Symptom Questionnaire → Match with Available Provider → Waiting Room → Video Call → Visit Summary → Prescription (if needed)
```

### Scheduled Visit
```
Find Provider → Search/Filter → Provider Profile → Select Slot → Enter Reason → Insurance/Payment → Confirm → Reminder → Waiting Room → Consultation
```

### Prescription Refill
```
Prescriptions → Active → Request Refill → Select Pharmacy → Submit → Provider Approves → Pharmacy Notification
```

### Provider: Conduct Visit
```
Dashboard → Next Appointment → Review Chart → Join Call → Examine → Write SOAP Note → Prescribe → Order Labs → Complete Visit → Summary Sent to Patient
```

## URL / Route Structure

### Patient
```
/                              → Home
/providers                     → Find a Provider
/providers/:id                 → Provider Profile
/book                          → Start Booking
/book/:providerId              → Book with Specific Provider
/waiting-room/:appointmentId   → Waiting Room
/visit/:appointmentId          → Video Consultation
/visit/:appointmentId/summary  → Visit Summary
/appointments                  → My Appointments
/appointments/:id              → Appointment Detail
/records                       → Health Records
/records/conditions            → Conditions
/records/medications           → Medications
/records/labs                  → Lab Results
/records/documents             → Documents
/prescriptions                 → Prescriptions
/prescriptions/:id             → Prescription Detail
/messages                      → Messages
/messages/:threadId            → Message Thread
/account                       → Account
/account/insurance             → Insurance Info
/account/dependents            → Dependent Profiles
/help                          → Help
```

### Provider Portal
```
/portal                        → Dashboard
/portal/schedule               → Schedule
/portal/patients               → Patient List
/portal/patients/:id           → Patient Chart
/portal/consultation/:id       → Consultation View
/portal/prescriptions          → Prescriptions
/portal/messages               → Messages
/portal/analytics              → Analytics
/portal/profile                → Profile
/portal/settings               → Settings
```

## Search & Filter

| Context | Search Scope | Filter Dimensions | Sort Options |
|---------|-------------|-------------------|--------------|
| Providers | Name, specialty, condition | Specialty, Insurance Accepted, Language, Gender, Availability (today, this week), Rating | Relevance, Rating, Soonest Available, Distance |
| Prescriptions | Medication name | Status (active/expired), Provider | Date, Name |
| Lab Results | Test name | Date Range, Status (pending/completed) | Date |
| Patient Search (provider) | Name, DOB, phone, member ID | Last Visit, Condition | Name, Last Visit |

## Responsive Behavior

| Breakpoint | Home | Provider Search | Consultation | Records |
|------------|------|----------------|-------------|---------|
| Desktop (≥1024px) | Dashboard grid | List + filters sidebar | Large video + sidebar (chat, notes) | Table view |
| Tablet (768–1023px) | 2-column | List, filters toggle | Full-width video, below chat | Card list |
| Mobile (<768px) | Stacked cards, bottom nav | Vertical cards, filter sheet | Full-screen video, swipe for chat | Accordion sections |

### Mobile Adaptations
- One-tap "See a Doctor Now" from home
- Camera/microphone permission prompts before call
- Picture-in-picture video during chat
- Push notifications for appointment reminders (15 min, 5 min)
- Offline access to health records and visit summaries
- Touch ID / Face ID for sensitive health data
- Prescription barcode for pharmacy pickup

## Access Control

### Patient
| Role | Browse Providers | Book | Consult | Records | Prescriptions |
|------|-----------------|------|---------|---------|--------------|
| Guest | ✅ | — | — | — | — |
| Patient | ✅ | ✅ | ✅ | Own | Own |
| Dependent (minor) | — | Via guardian | Via guardian | Guardian access | Guardian access |

### Provider Portal
| Role | Dashboard | Patients | Consult | Prescribe | Analytics |
|------|-----------|---------|---------|-----------|-----------|
| Provider | Own | Assigned | ✅ | ✅ | Own |
| Supervising MD | Team | Team | Review | Co-sign | Team |
| Admin | All | All | — | — | All |

### Compliance Notes
- HIPAA-compliant data storage and transmission
- End-to-end encryption for video calls
- Audit logging for all record access
- Consent forms before first visit
- Session timeout for inactive users
- BAA (Business Associate Agreement) with all vendors
