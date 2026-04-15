---
brand: Square
tagline: "Everything you need to run and grow your business. Payments, POS, banking, and more."
category: POS / Payment
website: https://squareup.com
---

# Square — Information Architecture

## Overview

Square (now part of Block, Inc.) started as a mobile card reader and evolved into a full business operating system. The mental model is **your store's command center** — combining point-of-sale (POS), payment processing, inventory management, team management, and business banking into one ecosystem. Unlike Stripe's developer-first API approach, Square leads with **ready-to-use products** that a coffee shop owner can set up in minutes, with APIs available for customization. The product spans hardware (Square Reader, Stand, Terminal, Register) and software (Square POS, Online, Invoices, Appointments).

## Site Map

### Square POS (In-Store)

```
├── Home (POS Dashboard)
│   ├── Today's Sales Summary
│   ├── Quick Actions (Take Payment, Send Invoice, View Reports)
│   ├── Recent Transactions
│   ├── Open Checks / Tabs
│   └── Alerts (low inventory, pending payouts)
├── Checkout (POS Screen)
│   ├── Item Grid / Catalog
│   │   ├── Categories (Drinks, Food, Retail, Custom)
│   │   ├── Item Tiles (photo, name, price)
│   │   ├── Modifiers (size, add-ons, options)
│   │   └── Search Items
│   ├── Cart / Current Sale
│   │   ├── Line Items
│   │   ├── Quantity Adjust
│   │   ├── Discounts (% or $)
│   │   ├── Tax Calculation (auto)
│   │   ├── Tips (percentage presets)
│   │   └── Total
│   ├── Payment Methods
│   │   ├── Tap / Insert / Swipe (hardware reader)
│   │   ├── Apple Pay / Google Pay
│   │   ├── Cash
│   │   ├── Gift Card
│   │   ├── Split Payment
│   │   ├── Afterpay (BNPL)
│   │   └── Manual Card Entry
│   └── Receipt
│       ├── Email Receipt
│       ├── Text Receipt
│       ├── Print Receipt
│       └── No Receipt
├── Items / Catalog
│   ├── Item Library
│   ├── Create / Edit Item
│   │   ├── Name, Description, Photo
│   │   ├── Price (fixed or variable)
│   │   ├── SKU / Barcode
│   │   ├── Variations (size, color)
│   │   ├── Modifiers (add-ons)
│   │   ├── Tax Assignment
│   │   └── Inventory Tracking
│   ├── Categories
│   ├── Modifiers
│   ├── Discounts
│   └── Import / Export (CSV)
├── Orders
│   ├── Open Orders
│   ├── Completed Orders
│   ├── Order Detail
│   │   ├── Items, Amounts, Payment
│   │   ├── Refund (full/partial)
│   │   └── Receipt Resend
│   ├── Online Orders (from Square Online)
│   └── Kitchen Display (for restaurants)
├── Customers
│   ├── Customer Directory
│   ├── Customer Profile
│   │   ├── Contact Info
│   │   ├── Purchase History
│   │   ├── Loyalty Points
│   │   ├── Notes
│   │   └── Groups / Segments
│   ├── Add Customer
│   └── Import Customers
├── Invoices
│   ├── Create Invoice
│   │   ├── Customer Info
│   │   ├── Line Items
│   │   ├── Payment Schedule (deposits, milestones)
│   │   ├── Attachments
│   │   └── Send (email or payment link)
│   ├── Outstanding Invoices
│   ├── Paid Invoices
│   └── Invoice Templates
├── Reports / Analytics
│   ├── Sales Summary (daily/weekly/monthly)
│   ├── Gross Sales, Net Sales, Refunds, Tips
│   ├── Sales by Category / Item
│   ├── Sales by Employee
│   ├── Sales by Time (hourly heatmap)
│   ├── Discounts Report
│   ├── Tax Report
│   ├── Inventory Report (low stock alerts)
│   └── Export (CSV, accounting integration)
├── Team
│   ├── Employee List
│   ├── Add Employee
│   ├── Roles & Permissions (owner, manager, cashier)
│   ├── Time Clock (clock in/out)
│   ├── Timecards
│   ├── Labor Cost Report
│   └── Tips Distribution
├── Square Banking
│   ├── Square Checking
│   ├── Square Savings (auto-save from sales)
│   ├── Square Loans (pre-qualified offers)
│   ├── Instant Transfers (to bank, fee applies)
│   └── Payroll (Square Payroll add-on)
├── Square Online (E-Commerce)
│   ├── Online Store Builder
│   ├── Website Editor (drag and drop)
│   ├── Online Menu (restaurants)
│   ├── Pickup / Delivery Settings
│   ├── Shipping
│   └── SEO Settings
├── Hardware
│   ├── Square Reader (contactless + chip)
│   ├── Square Stand (iPad mount)
│   ├── Square Terminal (standalone)
│   ├── Square Register (all-in-one)
│   └── Accessories (receipt printer, cash drawer)
├── Integrations
│   ├── Accounting (QuickBooks, Xero)
│   ├── E-Commerce (WooCommerce, BigCommerce)
│   ├── Delivery (DoorDash, Postmates)
│   └── Custom (APIs & SDKs)
├── Settings
│   ├── Business Info
│   ├── Locations (multi-location)
│   ├── Payment Settings
│   ├── Receipt Customization
│   ├── Tax Rates
│   ├── Tip Settings
│   ├── Devices (paired hardware)
│   ├── Bank Account (for payouts)
│   └── Account & Security
└── Help
    ├── Seller Community
    ├── Support Center
    └── Contact Support
```

## Navigation Model

| Layer | Pattern | Behavior |
|-------|---------|----------|
| **POS Bottom Bar** | Fixed bottom | Checkout, Orders, Items, More |
| **Dashboard Sidebar** | Left nav (web/tablet) | Home, Transactions, Items, Customers, Reports, Team, Banking, Online, Settings |
| **Checkout Grid** | Full-screen item grid | Tap item → add to cart → payment |
| **Customer-Facing Display** | Second screen (optional) | Shows cart, total, tip selection to customer |
| **Quick Pay** | Charge button on home | Skip item catalog, enter custom amount |

### POS Checkout Flow
```
[ Item Grid (left 60%) ] [ Cart / Order (right 40%) ]
                              ↓ Charge
                     [ Payment Screen ]
                              ↓
                       [ Receipt ]
```

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Item | name, description, price, sku, barcode, variations[], modifiers[], category, tax_ids[], image, track_inventory | belongs to Catalog |
| Order | items[], subtotal, tax, tip, discount, total, payment_method, status, customer, location | belongs to Location |
| Payment | amount, method (card/cash/wallet/gift_card), card_brand, last4, status, fee_amount | belongs to Order |
| Customer | name, email, phone, notes, visit_count, total_spend, loyalty_points, groups[] | has many Orders |
| Invoice | customer, line_items[], due_date, status (draft/sent/paid/overdue), payment_schedule[] | belongs to Customer |
| Employee | name, email, role, pin, hours_worked, tips_earned | belongs to Location |
| Location | name, address, phone, hours, timezone, devices[] | belongs to Account |
| Discount | name, type (percentage/fixed), amount, applies_to | belongs to Catalog |
| TaxRate | name, percentage, applies_to (all/category), jurisdiction | belongs to Location |
| Payout | amount, status, arrival_date, transactions[] | belongs to Account |

### Order Status
`open → completed → refunded (full/partial)`
`open → voided`

### Payment Processing
`authorized → captured → settled → paid_out`

## User Flows

### Ring Up a Sale (POS)
```
Open POS → Tap Items → Adjust Quantity/Modifiers → Apply Discount (optional) → [Charge] → Customer Taps/Inserts Card → Approved → Tip Screen (customer-facing) → Receipt → Done
```

### Send Invoice
```
Invoices → [+] → Add Customer → Add Line Items → Set Due Date → Add Payment Schedule → Preview → Send → Customer Receives Link → Pays Online → Notification
```

### View Daily Reports
```
Reports → Sales Summary → Today → Gross Sales, Net, Fees, Tips → Drill Down by Category → Compare to Yesterday/Last Week
```

### Set Up Online Ordering
```
Online → Enable Pickup/Delivery → Sync Catalog → Set Hours → Customize Menu → Publish → Share Link / QR Code → Receive Orders on POS
```

## URL / Route Structure

```
/                              → Dashboard
/checkout                      → POS Checkout
/orders                        → Order History
/orders/:id                    → Order Detail
/items                         → Item Catalog
/items/new                     → Create Item
/items/:id                     → Item Detail
/customers                     → Customer Directory
/customers/:id                 → Customer Profile
/invoices                      → Invoice List
/invoices/new                  → Create Invoice
/invoices/:id                  → Invoice Detail
/reports                       → Reports Dashboard
/reports/sales                 → Sales Report
/reports/items                 → Item Sales
/reports/team                  → Team Report
/team                          → Employee Management
/team/:id                      → Employee Detail
/team/timecards                → Timecards
/banking                       → Square Banking
/banking/checking              → Checking Account
/banking/loans                 → Square Loans
/online                        → Square Online
/online/editor                 → Website Editor
/hardware                      → Hardware Shop
/settings                      → Settings
/settings/locations            → Locations
/settings/payments             → Payment Settings
/settings/taxes                → Tax Rates
```

## Search & Filter

| Context | Search Scope | Filters | Sort |
|---------|-------------|---------|------|
| Items | Name, SKU, barcode | Category, In Stock / Out of Stock, Price Range | Name, Price, Created |
| Orders | Order #, customer, amount | Status, Date Range, Payment Method, Location | Date, Amount |
| Customers | Name, email, phone | Visit Count, Total Spend, Last Visit, Group | Name, Spend, Recent |
| Invoices | Customer, invoice # | Status (draft/sent/paid/overdue), Date Range | Due Date, Amount, Status |
| Reports | — | Date Range, Location, Employee, Category | — |

## Responsive Behavior

| Breakpoint | POS | Dashboard | Reports |
|------------|-----|-----------|---------|
| iPad (primary POS) | Full item grid + cart split | Sidebar + content | Charts + tables |
| iPhone | Simplified checkout | Bottom tab bar | Card-based summaries |
| Desktop (web) | Not typical (management) | Full sidebar + dashboard | Full analytics |
| Square Register | Dual-screen (seller + buyer) | N/A (POS only) | N/A |

### POS-Specific UX
- Works offline (queues transactions, syncs when reconnected)
- Tap-to-pay on iPhone (no hardware needed)
- Kitchen display system integration (for restaurants)
- Customer-facing display for transparency
- Barcode scanner support
- Receipt customization (logo, message)
- End-of-day cash drawer reconciliation
- Multi-location inventory sync

## Access Control

| Role | POS / Checkout | Reports | Customers | Items | Settings | Banking |
|------|---------------|---------|-----------|-------|----------|---------|
| Owner | ✅ | Full | Full | Full | Full | Full |
| Manager | ✅ | Full | Full | CRUD | Limited | View |
| Cashier | ✅ | — | View | View | — | — |
| Custom | Configurable | Configurable | Configurable | Configurable | Configurable | — |

### Security
- Employee PIN for POS access
- Role-based feature visibility
- Passcode-protected settings
- PCI DSS Level 1 compliant
- End-to-end encryption for card data
- Chargeback protection program
- Instant fraud alerts
