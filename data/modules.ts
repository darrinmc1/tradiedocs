// =============================================================================
// TRADIEDOCS — SEED LESSONS
// =============================================================================

export type ModuleLevel = "beginner" | "intermediate" | "advanced"

export interface Module {
  id: string
  title: string
  description: string
  category: string
  level: ModuleLevel
  content: string
  duration: string
  durationMinutes: number
  learningOutcomes: string[]
  tags: string[]
  dateAdded: string
  lastUpdated: string
  status: "published" | "draft"
}

const modules: Module[] = [
  {
    id: "do-you-need-a-swms",
    title: "Do You Actually Need a SWMS?",
    description: "When a SWMS is legally required, who prepares it, and what happens if you don't have one on-site.",
    category: "safety",
    level: "beginner",
    content: `## Do You Actually Need a SWMS?

A Safe Work Method Statement (SWMS) is a document that describes the high-risk construction work to be carried out, the hazards involved, and the control measures you'll put in place.

### When Is a SWMS Legally Required?

Under the WHS Regulations, a SWMS is required before any **high-risk construction work** begins. The regulations list 18 categories of high-risk work, including:

- Working at heights (2 metres or more)
- Working near live electrical installations
- Demolition
- Excavation to a depth of 1.5 metres or more
- Work in or near confined spaces

### Who Prepares It?

The person conducting a business or undertaking (PCBU) doing the high-risk construction work must prepare the SWMS — or have it prepared — before work starts.

### What If You Don't Have One?

A principal contractor can direct you to stop work. WorkSafe inspectors can issue improvement or prohibition notices. Fines can run into tens of thousands of dollars.

### The Short Answer

If you're doing any of the 18 high-risk construction activities listed in the WHS Regulations, yes — you need a SWMS. No exceptions.`,
    duration: "4 min",
    durationMinutes: 4,
    learningOutcomes: [
      "Know when a SWMS is legally required",
      "Understand who is responsible for preparing it",
      "Know the consequences of not having one",
    ],
    tags: ["swms", "safety", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "swms-vs-jsa-vs-risk-assessment",
    title: "SWMS vs JSA vs Risk Assessment",
    description: "The differences between a SWMS, a Job Safety Analysis, and a risk assessment — and when to use each one.",
    category: "safety",
    level: "beginner",
    content: `## SWMS vs JSA vs Risk Assessment

These three documents overlap but serve different purposes. Here's when you use each.

### SWMS (Safe Work Method Statement)

- **When:** Before any high-risk construction work
- **Legal status:** Mandatory under WHS Regulations for the 18 listed high-risk activities
- **What it covers:** Specific steps of the work, hazards at each step, and controls
- **Who prepares it:** The PCBU doing the high-risk work

### JSA (Job Safety Analysis)

- **When:** Before any task — not limited to high-risk construction
- **Legal status:** Not specifically mandated, but demonstrates due diligence
- **What it covers:** Breaks the job into steps, identifies hazards at each step, lists controls
- **Who prepares it:** Usually the supervisor or team leader, with input from workers

### Risk Assessment

- **When:** At any stage — planning, design, before starting work, or when conditions change
- **Legal status:** Required as part of your general WHS duty of care
- **What it covers:** Broad identification of hazards, assessment of likelihood and severity, hierarchy of controls
- **Who prepares it:** The PCBU, with consultation from workers

### Which Do You Need?

If you're doing high-risk construction work, you need a SWMS — no debate. A JSA and risk assessment are best practice for everything else. Many builders require all three.`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Distinguish between SWMS, JSA, and risk assessment",
      "Know which document is legally required",
      "Understand when each is used in practice",
    ],
    tags: ["swms", "jsa", "risk-assessment", "safety"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "how-to-fill-out-a-swms",
    title: "How to Fill Out a SWMS",
    description: "Step-by-step guide to completing a SWMS properly — work steps, hazards, controls, and sign-off.",
    category: "safety",
    level: "beginner",
    content: `## How to Fill Out a SWMS

A SWMS isn't complicated — but it does need to be done properly. Here's the step-by-step.

### Section 1: Job Details

Fill in the basics: your business name, ABN, site address, date, and a description of the high-risk work you'll be doing.

### Section 2: Work Steps

Break the job into individual steps, in order. Be specific — "install cables" is too vague; "pull new cable through ceiling cavity from switchboard to bedroom 2" tells someone what's actually happening.

### Section 3: Hazards

For each step, identify what could go wrong. Common hazards:
- Falls from height
- Electrical contact
- Falling objects
- Manual handling injuries
- Exposure to dust, fumes, or chemicals

### Section 4: Risk Rating

Rate each hazard using a risk matrix (likelihood × consequence). This helps you prioritise which controls to focus on.

### Section 5: Control Measures

For each hazard, list what you'll do to eliminate or reduce the risk. Use the hierarchy of controls: eliminate → substitute → engineer → admin → PPE.

### Section 6: Sign-Off

Everyone doing the work must read and sign the SWMS before starting. Keep the signed copy on-site.

### Common Mistakes

- Copying a generic SWMS without adjusting for the actual job
- Listing "use PPE" as the only control
- Not getting workers to sign before work starts
- Not reviewing when conditions change`,
    duration: "6 min",
    durationMinutes: 6,
    learningOutcomes: [
      "Complete each section of a SWMS correctly",
      "Write site-specific hazards and controls",
      "Avoid the most common SWMS mistakes",
    ],
    tags: ["swms", "safety", "how-to"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "licensing-electrical",
    title: "Licensing by State: Electrical",
    description: "Electrical trade licensing requirements across all Australian states and territories.",
    category: "compliance",
    level: "intermediate",
    content: `## Licensing by State: Electrical

Electrical work is licensed in every Australian state and territory. Here's what you need to know.

### Licence Types

Most states have a tiered structure:
- **Electrical apprentice/trainee** — can work under direct supervision only
- **Restricted electrical licence** — specific tasks (e.g., disconnect/reconnect)
- **Electrical worker/tradesperson licence** — full trade work under a contractor
- **Electrical contractor licence** — can contract electrical work to clients

### State-by-State

| State | Regulator | Key Licence |
|-------|-----------|-------------|
| NSW | NSW Fair Trading | Qualified Supervisor Certificate + Contractor Licence |
| VIC | Energy Safe Victoria | Licensed Electrician (LEI) + Registered Electrical Contractor (REC) |
| QLD | Electrical Safety Office (QBCC for contracting) | Electrical Work Licence + Contractor Licence |
| SA | Office of the Technical Regulator | Licensed Electrical Worker + Registered Electrical Contractor |
| WA | Building and Energy | Electrician's Licence + Electrical Contractor's Licence |
| TAS | CBOS | Licensed Electrician + Electrical Contractor |
| NT | NT WorkSafe | Licensed Electrical Worker + Electrical Contractor |
| ACT | Access Canberra | Electrician Licence + Electrical Contractor Licence |

### Working Across State Lines

Your licence from one state is not automatically valid in another. Most states have mutual recognition, but you must apply before working.

### Penalties for Unlicensed Work

- Fines up to $50,000+ for individuals
- You can't enforce contracts for unlicensed work
- Insurance won't cover you`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Know which electrical licences exist in your state",
      "Understand mutual recognition across states",
      "Know the penalties for unlicensed electrical work",
    ],
    tags: ["licensing", "electrical", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "licensing-plumbing",
    title: "Licensing by State: Plumbing",
    description: "Plumbing trade licensing requirements across all Australian states and territories.",
    category: "compliance",
    level: "intermediate",
    content: `## Licensing by State: Plumbing

Plumbing is licensed in every state. Here's the breakdown.

### Licence Types

- **Plumbing apprentice/trainee** — supervised work only
- **Licensed/registered plumber** — can perform plumbing work
- **Plumbing contractor** — can contract plumbing work to clients
- **Specialist endorsements** — gas fitting, roof plumbing, mechanical services, fire protection, backflow prevention

### State-by-State

| State | Regulator | Notes |
|-------|-----------|-------|
| NSW | NSW Fair Trading | Requires Qualified Supervisor Certificate for contracting |
| VIC | Victorian Building Authority (VBA) | Registered/Licensed Plumber, separate gas endorsement |
| QLD | QBCC | Plumbing licence classes 1–4 based on scope |
| SA | Consumer and Business Services (CBS) | Licensed Plumber + Contractor Registration |
| WA | Building and Energy | Plumber's Licence (tradesperson or contractor) |
| TAS | CBOS | Licensed Plumber + Contractor Licence |
| NT | Plumbers and Drainers Licensing Board | Licensed Plumber |
| ACT | Access Canberra | Plumber Licence (journeyman or contractor) |

### Gas Fitting

Gas fitting requires a separate endorsement or licence in all states. Never do gas work without the correct credential — the penalties are severe and the safety risks are real.

### Cross-State Work

Mutual recognition applies but you must apply to the receiving state before starting work.`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Know which plumbing licences exist in your state",
      "Understand gas fitting endorsement requirements",
      "Know the process for cross-state recognition",
    ],
    tags: ["licensing", "plumbing", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "licensing-building-carpentry",
    title: "Licensing by State: Building & Carpentry",
    description: "Building and carpentry licensing requirements — when you need a licence, monetary thresholds, and state variations.",
    category: "compliance",
    level: "intermediate",
    content: `## Licensing by State: Building & Carpentry

Building and carpentry licensing is more complex than electrical or plumbing because the requirements vary significantly by state and by the value of work.

### When Do You Need a Licence?

Unlike electrical and plumbing (which are always licensed), building/carpentry licensing often depends on:
- **The value of the work** — many states set a dollar threshold
- **The type of work** — structural vs. non-structural
- **Whether you're contracting** — doing work for a builder vs. contracting directly to homeowners

### State-by-State

| State | Regulator | Threshold |
|-------|-----------|-----------|
| NSW | NSW Fair Trading | $5,000+ (including labour and materials) |
| VIC | Victorian Building Authority | Any domestic building work over $10,000 |
| QLD | QBCC | $3,300+ (including GST) |
| SA | Consumer and Business Services | $12,000+ |
| WA | Building and Energy | $20,000+ for residential |
| TAS | CBOS | All building work requires registration |
| NT | Building Practitioners Board | All building work |
| ACT | Access Canberra | All building work over $12,000 |

### Licence Classes

Most states have tiered builder licences:
- **Unlimited** — any value of work
- **Medium rise** — up to 3 storeys
- **Low rise** — houses and small commercial
- **Trade contractor** — specific trade work only

### Owner-Builder

Most states allow homeowners to do their own work under an owner-builder permit, but there are restrictions on selling within a set period (usually 5–7 years).`,
    duration: "6 min",
    durationMinutes: 6,
    learningOutcomes: [
      "Know the licensing threshold in your state",
      "Understand the difference between licence classes",
      "Know when owner-builder rules apply",
    ],
    tags: ["licensing", "building", "carpentry", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "anatomy-of-a-winning-quote",
    title: "The Anatomy of a Quote That Wins Jobs",
    description: "What to include in a tradie quote, how to present it professionally, and what separates winners from the pile.",
    category: "business",
    level: "beginner",
    content: `## The Anatomy of a Quote That Wins Jobs

A good quote wins the job AND protects your margin.

### What Every Quote Needs

- **Your business details** — name, ABN, licence number, contact info
- **Client details** — name, site address
- **Scope of work** — exactly what's included and what's not
- **Itemised pricing** — materials, labour, and any allowances
- **GST** — shown separately if you're registered
- **Validity period** — 14–30 days is standard
- **Acceptance method** — signature block or written confirmation
- **Variations clause** — "any work outside this scope will be quoted separately"

### What Separates Winners

1. **Professional presentation** — typed, with your logo. Not handwritten on the back of a receipt
2. **Clear exclusions** — "does not include asbestos removal, council approvals, or painting"
3. **Payment terms** — deposit, progress payments, final payment on completion
4. **A brief scope description in plain English** — so the client knows exactly what they're getting

### Pricing Strategies

- **Fixed price** — most common for residential. You carry the risk
- **Cost-plus** — actual costs plus a margin. Better for uncertain scopes
- **Day rate** — simple but clients may question how long you take

### The Follow-Up

Send the quote within 24 hours of the site visit. Follow up 3 days later if you haven't heard back. Most tradies lose jobs by being slow, not expensive.`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Include all essential elements in your quotes",
      "Present quotes that look professional",
      "Choose the right pricing strategy for each job",
    ],
    tags: ["quoting", "business", "pricing"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "pricing-jobs-to-make-money",
    title: "How to Price Jobs So You Actually Make Money",
    description: "Calculating your real hourly rate, accounting for overheads, and avoiding the trap of underquoting.",
    category: "business",
    level: "intermediate",
    content: `## How to Price Jobs So You Actually Make Money

Most tradies undercharge. Here's how to fix that.

### Know Your Real Hourly Rate

Your charge-out rate isn't your take-home. You need to cover:
- **Your wage** — what you'd pay yourself as an employee
- **Super** — 11.5% on top
- **Insurance** — public liability, income protection, tool cover
- **Vehicle costs** — fuel, rego, insurance, depreciation, servicing
- **Tools and equipment** — replacement, maintenance, calibration
- **Admin time** — quoting, invoicing, bookkeeping, emails (usually 20–30% of your week)
- **Downtime** — rain days, cancellations, gaps between jobs

### The Formula

A rough guide: take the hourly wage you want to earn, then multiply by 2.5 to 3x. That's your minimum charge-out rate.

If you want to take home $50/hour, you need to charge $125–150/hour.

### Common Traps

- **Not accounting for travel time** — you're not earning while driving
- **Underestimating job duration** — add 20% to your time estimate
- **Forgetting small costs** — consumables, tips, connectors, tape
- **Competing on price alone** — the cheapest quote often loses money

### Fixed-Price Jobs

For fixed-price quotes, estimate hours × your rate + materials + 15–20% contingency. Review your estimates after every job to improve your accuracy.`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Calculate your true hourly cost including overheads",
      "Set a charge-out rate that covers all costs plus profit",
      "Avoid the most common pricing traps",
    ],
    tags: ["pricing", "business", "margins"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "getting-paid-invoice-terms",
    title: "Getting Paid: Invoice Terms",
    description: "ATO tax invoice requirements, payment terms for tradies, and what to do when clients don't pay.",
    category: "business",
    level: "beginner",
    content: `## Getting Paid: Invoice Terms

You've done the work — now make sure you get paid.

### ATO Tax Invoice Requirements

If you're registered for GST, your invoice must include:
- The words "Tax Invoice"
- Your business name and ABN
- Date of issue
- Description of what was supplied
- GST amount (or a statement that the total includes GST)
- Total amount payable

### Payment Terms

Standard terms in the trades:
- **7 days** — aggressive but common for small jobs
- **14 days** — the sweet spot for most tradies
- **30 days** — standard for commercial work and builders

### When They Don't Pay

1. **Friendly reminder** at 7 days overdue — email or text
2. **Firm follow-up** at 14 days — phone call + written notice
3. **Final notice** at 30 days — letter of demand, mention debt collection
4. **Small claims** — for amounts under the threshold (varies by state)

### Tips

- Invoice on the day you finish, not a week later
- Include bank details and consider card payments
- Keep records of all communication about payment
- For large jobs, use progress payments — don't wait until completion`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Create ATO-compliant tax invoices",
      "Set appropriate payment terms",
      "Follow a process when clients don't pay",
    ],
    tags: ["invoicing", "payments", "business"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "variations-scope-creep",
    title: "Variations: How to Charge for Scope Creep",
    description: "Handling scope changes professionally — documenting variations, getting sign-off, and avoiding payment disputes.",
    category: "business",
    level: "intermediate",
    content: `## Variations: How to Charge for Scope Creep

"While you're here, can you just..." — the five most expensive words in the trades.

### What's a Variation?

Any change to the original scope: additional work, changed specs, or unforeseen site conditions.

### Why Document Them?

Verbal agreements about changes are the number one cause of payment disputes. If it's not in writing, it didn't happen.

### How to Handle Variations

1. **Stop and document** — don't start extra work until it's agreed in writing
2. **Write a variation notice** — describe the change, the reason, and the cost impact
3. **Get sign-off** — the client or builder must approve before you proceed
4. **Adjust your invoice** — reference the variation number on your final invoice

### What to Include

- Reference to the original quote/contract
- Description of the change
- Reason for the change
- Cost impact (additional materials + labour)
- Time impact (if any)
- Signature/approval block

### The Hard Conversation

Some clients push back on variation costs. Stand your ground — politely. The original quote covered the original scope. Changes cost money. If they want it done, they need to approve the cost first.`,
    duration: "4 min",
    durationMinutes: 4,
    learningOutcomes: [
      "Document variations properly before starting extra work",
      "Write a variation notice that protects you",
      "Handle pushback on variation costs",
    ],
    tags: ["variations", "contracts", "business"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "abn-gst-bas-tradie-tax-basics",
    title: "ABN, GST, and BAS: Tradie Tax Basics",
    description: "When you need an ABN, when to register for GST, BAS obligations, and common tax mistakes tradies make.",
    category: "compliance",
    level: "beginner",
    content: `## ABN, GST, and BAS: Tradie Tax Basics

Getting your tax set-up right from the start saves headaches later.

### Do You Need an ABN?

If you're operating a business — quoting for jobs, providing your own tools, controlling how the work is done — you need an ABN.

### GST Registration

- **Mandatory** if annual turnover is $75,000 or more
- **Voluntary** below that — useful if you want to claim GST credits on tools and materials

### BAS Obligations

Once registered for GST, lodge a Business Activity Statement:
- **Quarterly** — most common for small businesses
- Report GST collected, GST paid, and PAYG withholding (if applicable)

### Common Mistakes

- **Not separating business and personal money** — open a dedicated business account
- **Forgetting to charge GST** — if registered, it's not optional
- **Not keeping receipts** — no receipt, no GST credit
- **Lodging BAS late** — penalties and interest add up fast
- **Not putting aside money for GST/tax** — set aside 30% of every invoice into a separate savings account`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Know when ABN and GST registration are required",
      "Understand your BAS obligations",
      "Avoid the most common tradie tax mistakes",
    ],
    tags: ["abn", "gst", "bas", "tax", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "public-liability-vs-income-protection",
    title: "Public Liability vs Income Protection",
    description: "What each insurance covers, which is mandatory, and what builders require before you step on-site.",
    category: "compliance",
    level: "beginner",
    content: `## Public Liability vs Income Protection

Two different insurances that protect two different things. Both matter.

### Public Liability Insurance

**What it covers:** Claims against you if someone is injured or their property is damaged because of your work.

**Examples:**
- A client trips over your tools and breaks their wrist
- You accidentally damage a water main while excavating
- A piece of material falls from a scaffold and hits a car

**Is it mandatory?** Not by law in most states, but most builders and principal contractors require $10–20 million coverage before you step on-site. In practice, you can't work without it.

**Cost:** ~$500–$2,000/year depending on trade and coverage level.

### Income Protection Insurance

**What it covers:** Pays a portion of your income (usually 75%) if you can't work due to injury or illness.

**Examples:**
- You tear your rotator cuff and can't work for 3 months
- You're diagnosed with a condition requiring extended treatment
- You break your leg on a weekend and miss 8 weeks of work

**Is it mandatory?** No. But tradies' bodies take a beating, and this is the insurance that keeps your mortgage paid.

**Cost:** Varies based on age, trade, and benefit period. Typically $100–$300/month.

### What Builders Require

Before you start on most sites, you'll need:
- Certificate of Currency for Public Liability ($10M or $20M)
- Workers' Comp certificate (if you have employees)
- Your trade licence details`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Understand what public liability and income protection each cover",
      "Know what documentation builders require",
      "Make an informed decision about which insurances to carry",
    ],
    tags: ["insurance", "public-liability", "income-protection", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "subcontractor-vs-employee",
    title: "Subcontractor vs Employee",
    description: "The ATO's criteria for distinguishing contractors from employees, and the consequences of getting it wrong.",
    category: "compliance",
    level: "intermediate",
    content: `## Subcontractor vs Employee

Getting this wrong can cost you tens of thousands in back-taxes, super, and penalties.

### Why It Matters

If the ATO decides your "subcontractor" is actually an employee, **you** owe:
- Superannuation (currently 11.5%)
- PAYG withholding
- Workers' compensation premiums
- Payroll tax (if over threshold)
- Leave entitlements
- Plus interest and penalties

### ATO Criteria

The ATO looks at the **whole relationship**:

**Points toward contractor:**
- Has their own ABN and invoices for work
- Provides their own tools and equipment
- Controls how and when the work is done
- Can delegate or subcontract
- Bears commercial risk (fixes defects at own cost)
- Works for multiple clients

**Points toward employee:**
- You direct how, when, and where they work
- You provide tools, materials, and equipment
- They work exclusively or mainly for you
- You pay them by the hour/day (not per job)
- They can't subcontract or delegate

### The Safest Approach

- Use a written subcontractor agreement
- Ensure the subbie has their own ABN, insurance, and licence
- Let them control how they do the work
- Pay per job or milestone, not by the hour
- Don't require exclusivity`,
    duration: "5 min",
    durationMinutes: 5,
    learningOutcomes: [
      "Apply the ATO criteria to determine contractor vs employee",
      "Structure subcontractor relationships to minimise risk",
      "Know the financial consequences of misclassification",
    ],
    tags: ["subcontractor", "employee", "ato", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "toolbox-talks-5-minute-templates",
    title: "Toolbox Talks: 5-Minute Templates",
    description: "Running effective toolbox talks — what to cover, how to keep them engaging, and how to document them.",
    category: "safety",
    level: "beginner",
    content: `## Toolbox Talks: 5-Minute Templates

A toolbox talk is a short safety briefing held on-site before work starts or at the beginning of a shift.

### How Often?

- **Daily** on high-risk sites
- **Weekly** on lower-risk sites
- **Every time** conditions change (new task, new workers, weather)

### What to Cover

Pick one topic per talk:
- Manual handling and lifting
- Working at heights
- Electrical safety
- Heat stress and hydration
- PPE requirements for the day's tasks
- Housekeeping and trip hazards
- Hazardous substances on-site
- Mobile plant and traffic management
- Fatigue management
- Trenching and excavation safety

### How to Make Them Stick

- Keep it under 5 minutes
- Ask questions — "who can spot the hazard?" — don't just read a sheet
- Use real examples from the site or recent incidents
- Get workers to sign an attendance sheet

### Documentation

Record the date, topic, who presented, and who attended. Keep the records — they're evidence of your safety management system and will be the first thing an inspector asks for.`,
    duration: "4 min",
    durationMinutes: 4,
    learningOutcomes: [
      "Run an effective 5-minute toolbox talk",
      "Choose relevant topics for your site",
      "Document talks for compliance purposes",
    ],
    tags: ["toolbox-talks", "safety", "templates"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
  {
    id: "what-happens-when-worksafe-shows-up",
    title: "What Happens When WorkSafe Shows Up",
    description: "What to expect during a WorkSafe inspection, your rights, and how to prepare so it's not a disaster.",
    category: "compliance",
    level: "advanced",
    content: `## What Happens When WorkSafe Shows Up

A WorkSafe inspector can enter your site at any time without notice. Here's what to expect.

### Why They Visit

- **Proactive inspections** — random or targeted campaigns (e.g., "falls from heights" blitz)
- **Complaint-driven** — someone reported a concern
- **Incident follow-up** — after a notifiable incident

### What They'll Ask For

1. **Your SWMS** — for any high-risk work happening on-site
2. **Risk assessments** — evidence you've assessed hazards
3. **Induction records** — proof workers were inducted
4. **Licences** — for licensed trades (electrical, plumbing, high-risk work)
5. **Insurance certificates** — public liability, workers' comp
6. **Incident records** — your incident register
7. **Training records** — evidence of safety training

### Your Rights

- You can ask to see the inspector's ID
- You can have a representative present
- You can ask what the inspection is about
- You must be given a copy of any notice issued
- You can request a review of any notice

### What They Can Do

- Issue an **improvement notice** — fix the issue within a set timeframe
- Issue a **prohibition notice** — stop work immediately until the issue is resolved
- Issue **on-the-spot fines**
- Refer matters for prosecution

### How to Prepare

Keep your documentation current and accessible on-site:
- SWMS signed and dated
- Induction records
- Toolbox talk records
- Licence copies
- Insurance certificates of currency

The best time to get your paperwork in order is before the inspector arrives. The second-best time is right now.`,
    duration: "6 min",
    durationMinutes: 6,
    learningOutcomes: [
      "Know what to expect during a WorkSafe inspection",
      "Understand your rights during an inspection",
      "Keep the right documentation on-site and accessible",
    ],
    tags: ["worksafe", "inspection", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-07-01",
    status: "published",
  },
]

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const ALL_MODULES: Module[] = modules

export const MODULE_MAP = Object.fromEntries(
  ALL_MODULES.map((m) => [m.id, m])
) as Record<string, Module>

export function getModuleById(id: string): Module | undefined {
  return MODULE_MAP[id]
}
