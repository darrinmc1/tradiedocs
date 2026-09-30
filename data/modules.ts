// =============================================================================
// TRADIEDOCS — LESSONS
// Written workplace-docs education for Australian tradies.
// General information only — not legal, tax, or WHS advice.
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
    id: "about",
    title: "What Paperwork a Trade Business Usually Needs",
    description:
      "A practical map of the documents most Australian sole traders and small crews are asked for — and which of those topics this site covers in writing today.",
    category: "business",
    level: "beginner",
    content: `## What Paperwork a Trade Business Usually Needs

This lesson is a map, not a shopping list. The documents you need depend on the work, the site, whether you employ anyone, and the state or territory you are in. Treat it as a starting inventory. Confirm current rules with your state Work Health and Safety (WHS) regulator, your licensing body, and the [Australian Taxation Office](https://www.ato.gov.au).

TradieDocs publishes **written lessons** on these topics. Downloadable template packs are **Coming Soon** — there is no file to download and checkout is not live. This page does not sell anything and is not legal advice.

### The usual document groups

Most trade businesses are asked for documents in four groups:

1. **Safety** — Safe Work Method Statements (SWMS) for high-risk construction work, risk assessments, toolbox talk records, inductions, and incident reports.
2. **Commercial** — quotes, contracts or work orders, variation notices, invoices, and payment follow-up.
3. **Authority to work** — the correct trade licence or registration, and any high-risk work licence the task requires.
4. **Insurance and tax** — public liability certificate of currency, workers compensation if you have workers, ABN details, and GST treatment on invoices if you are registered.

You will not need every item on every job. A one-person electrical call-out and a multi-trade commercial fit-out have different paperwork loads. The point is to know which group a request belongs to, so you can answer it with a real document instead of a verbal promise.

### Safety documents

A SWMS is required when the work is **high-risk construction work** as defined in the WHS regulations that apply to your site. It is not a general safety slogan sheet. It names the high-risk activity, the hazards, the controls, and who will apply those controls. It must be prepared before that work starts, be understandable, and be available where the work is done.

A general risk assessment is still useful on jobs that are not high-risk construction work. A Job Safety Analysis (JSA) breaks one task into steps. Toolbox talks and inductions are how you show that people on site were told about the hazards that day. Incident and near-miss records are how you show you responded when something went wrong.

For the legal trigger, read [Do You Need a Safe Work Method Statement (SWMS)?](/lessons/do-you-need-a-swms). For how the documents differ, read [SWMS vs JSA vs Risk Assessment](/lessons/swms-vs-jsa-vs-risk-assessment).

### Commercial documents

A quote that wins work and still protects your margin states who you are, what is included, what is excluded, how GST is treated, how long the price holds, and how the client accepts. An invoice that gets paid states the same identity details, a clear description of what was supplied, the amount, the due date, and how to pay. A variation notice is how extra work stays extra — in writing, priced, and approved before you start it.

These are not optional extras on most residential and commercial jobs. They are how scope disputes are avoided. See the quoting, pricing, invoicing, and variations lessons on this site.

### Licences, insurance, and tax

Licensing is state-based. Electrical and plumbing work is licensed in every jurisdiction. Building and carpentry licensing often depends on the value and type of work. Insurance is a mix of what the law requires and what a principal contractor will not let you on site without. Tax setup (ABN, GST, BAS) is an ATO matter.

Do not treat a website lesson as a substitute for the regulator page. Use the licensing and compliance lessons here to know **what to ask**, then confirm the current form, fee, and threshold with the body that issues the licence or collects the tax.

### What is live on TradieDocs today

**Live now:** written lessons on SWMS, quoting, invoicing, variations, licensing, insurance, tax basics, toolbox talks, and inspections. You can read them without an account.

**Coming Soon:** the SWMS Template Pack, Quote + Invoice Pack, and Full Compliance Bundle. Those packs are priced for when checkout opens. There is no downloadable zip or Word file on this site yet. If a page offers a Notify me form, that is a waitlist — not a purchase.

### How to use these lessons

- Read the lesson that matches the document you have been asked for.
- Write your own site-specific version. Copy-pasting a generic document onto a different site is a common reason inspections go badly.
- Confirm figures, licence classes, and high-risk definitions with the official source before you rely on them.
- Do not treat anything on this site as legal, financial, tax, or WHS advice.

If you only do one thing after this page, list the documents you were asked for on your last three jobs. That list is your real paperwork curriculum.`,
    duration: "10 min",
    durationMinutes: 10,
    learningOutcomes: [
      "Name the four document groups most trade businesses are asked for",
      "Tell the difference between a live written lesson and a Coming Soon template pack",
      "Know where to confirm WHS, licensing, and tax rules before relying on a lesson",
    ],
    tags: ["paperwork", "swms", "quoting", "compliance", "orientation"],
    dateAdded: "2026-08-20",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "products",
    title: "Describing Your Work Accurately",
    description:
      "How to write quotes, warranties, and job descriptions that stay specific and supportable — without superlatives you cannot prove.",
    category: "business",
    level: "intermediate",
    content: `## Describing Your Work Accurately

Clients, builders, and insurers read what you write. Vague praise ("best in the area", "guaranteed forever") is weaker than a specific, supportable statement. This lesson is about describing work and materials in language you can stand behind. It is not marketing advice and it is not legal advice. Consumer law and warranty rules vary — confirm current obligations with [ACCC guidance](https://www.accc.gov.au) and your state consumer agency.

### Why wording on a quote matters

A quote is a commercial document. If you write "lifetime guarantee" or "will never leak", a later dispute will quote those words back to you. If you write "12-month workmanship warranty on the installation described in this quote", both sides know the boundary.

The same applies to materials. "Premium fittings" means little. "Brass isolation valves, brand and model as listed, installed to the manufacturer's instructions" can be checked.

### Superlatives that do not help

Words that usually need evidence you do not have:

- Best, number one, industry-leading, revolutionary
- Guaranteed, never fails, always, forever
- Fastest, cheapest, only approved installer (unless you can show the approval)

Replace them with a fact:

- Instead of "fastest install", write the time you actually plan: "One day on site after materials arrive, weather permitting."
- Instead of "guaranteed dry", write the warranty term and what it covers.
- Instead of "highest quality", name the product, standard, or finish.

### Statistics need a source

Percentages and counts look precise. Without a source they are just numbers. If you did not measure it, do not publish it.

- "Trusted by 10,000 customers" — only if you can show how that was counted.
- "Saves 40 hours a week" — only if that figure comes from a named study or your own recorded jobs.
- "Meets Australian Standards" — name the standard and the part of the work it applies to.

If you cannot cite a source, drop the number and describe the work.

### Warranties versus consumer guarantees

Many tradies offer a workmanship warranty for a stated period. That is a contractual promise you choose to make. Separate from that, the Australian Consumer Law provides consumer guarantees on many goods and services. You cannot contract out of those guarantees with a footnote. You also should not imply that a short workmanship warranty is the client's only remedy if the law provides more.

Practical approach:

- State your workmanship warranty period and what it covers (labour, specified defects).
- State what it does not cover (client damage, lack of maintenance, work by others).
- Do not write "no refunds" or "as is" on consumer work as if that ends the matter.
- If a product has a manufacturer warranty, say so and keep the paperwork.

Confirm current consumer guarantee rules before you print terms.

### Product and material claims on site

If you specify a product, you are responsible for installing it as specified or recording a substitution. If the client supplies the product, write that down. If a finish depends on substrate condition you have not opened up yet, write an allowance or an exclusion.

Examples of clear language:

- "Existing waterproofing not tested. If the membrane fails a flood test, a variation will be issued before tiling proceeds."
- "Quote assumes timber joists at the centres shown on the supplied drawing. Different centres may change labour and materials."
- "Paint system: two coats of the listed interior acrylic over the listed sealer. Colour as selected from the listed range."

### A short review before you send a document

1. Can a stranger on site tell what is included and what is not?
2. Would you be willing to show this sentence to an inspector, a tribunal, or an insurer?
3. Is every number sourced or measured?
4. Is every promise time-bounded and scoped?
5. Have you named your ABN, licence number (if required), and GST treatment?

If a sentence fails those checks, rewrite it. Clear documents reduce arguments. They do not replace professional advice on a live dispute.

Template packs that would hold this wording for you are **Coming Soon**. Until those files exist, use this lesson as a writing standard for the quotes and invoices you already produce.`,
    duration: "11 min",
    durationMinutes: 11,
    learningOutcomes: [
      "Replace unsupportable superlatives with specific, checkable statements",
      "Separate a workmanship warranty from consumer guarantees",
      "Review a quote for claims you would be willing to defend",
    ],
    tags: ["quoting", "warranties", "consumer-law", "communication", "claims"],
    dateAdded: "2026-08-20",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "updates",
    title: "Keeping Compliance Documents Current",
    description:
      "When to review a SWMS, licence, insurance certificate, or induction record so the folder on site matches the work being done.",
    category: "compliance",
    level: "intermediate",
    content: `## Keeping Compliance Documents Current

A document that was correct last year can be wrong this morning. Crews change, plant changes, weather changes, and regulators update guidance. This lesson covers when to review the paperwork you already have. It is general information, not a compliance audit.

### What "current" means on a job site

Current does not mean "we printed it once." It means the document still describes:

- The work that is actually happening
- The people who are actually doing it
- The plant and access method in use today
- The controls that are actually in place
- Licences and insurance that have not expired

If any of those have moved and the paper has not, the paper is out of date.

### SWMS review triggers

Review a SWMS when:

- The high-risk activity changes (different method, different location, different plant)
- A control is not working or cannot be used
- A new hazard appears (services found, weather, other trades)
- Workers who were not consulted on the original document join the task
- There is an incident or a near miss related to the work
- You move to a new site and reuse a document written for a different one

Reusing a SWMS from another site without a site-specific review is one of the most common inspection findings. Change the site address and the work steps, then walk it with the people doing the job.

### Licences and tickets

Put renewal dates where you will see them — not only in an email inbox. Typical items that expire or need refresh:

- Trade licence or contractor registration
- High-risk work licences (for example scaffolding, dogging, forklift) where the work requires them
- White Card / construction induction (rules on recognition differ; confirm with the host site)
- First aid and emergency warden training if you rely on named people
- Electrical testing and tagging intervals for your own plant, where applicable

Do not start licensed work on the hope that a renewal will land. Apply before the expiry. Interstate work may require a separate application even when mutual recognition exists — apply in the receiving jurisdiction before you start.

### Insurance certificates of currency

Principal contractors usually ask for a certificate that is valid **on the dates you will be on site**, not a certificate that was valid when you quoted. Check:

- Public liability — limit the builder asked for, and the period of cover
- Workers compensation — if you have workers
- Any higher cover a contract specifies

If a policy renews mid-job, send the new certificate without being asked. An expired certificate is enough for a site manager to stop you at the gate.

### Inductions and toolbox records

Induction records should match the people on site today. If a labour-hire worker or a new apprentice arrives, induct them before they start. Toolbox talk attendance sheets are evidence that a briefing happened. Keep the date, topic, presenter, and names. A talk that was never recorded is hard to prove.

### A monthly document check (15 minutes)

Once a month, or at the start of each new project:

1. List active jobs and the high-risk work on each.
2. Confirm a current, signed SWMS exists for that work.
3. Check licence and insurance end dates that fall in the next 60 days.
4. Confirm induction and toolbox records exist for the current crew.
5. Archive superseded versions. Do not leave two conflicting SWMS in the same folder.

### What TradieDocs will add later

Printed packs (incident forms, toolbox talk sheets, induction checklists) are **Coming Soon**. They are not available as downloads today. Until they are, keep your own dated records. The written lessons on this site stay available so you can rebuild a document when a review trigger fires.

When a regulator publishes a rule change, use the official page — not a memory of last year's toolbox talk. [Safe Work Australia](https://www.safeworkaustralia.gov.au) maintains model WHS material. Your state or territory regulator publishes the rules that apply on your site.`,
    duration: "10 min",
    durationMinutes: 10,
    learningOutcomes: [
      "List the events that should trigger a SWMS review",
      "Keep licence and insurance dates visible before they expire",
      "Run a short monthly check so site folders match the live work",
    ],
    tags: ["compliance", "swms", "licences", "insurance", "document-control"],
    dateAdded: "2026-08-20",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "blog",
    title: "Writing Clear Client-Facing Documents",
    description:
      "How to write quotes, variations, and site notes in plain professional language that a client, builder, or insurer can act on.",
    category: "business",
    level: "intermediate",
    content: `## Writing Clear Client-Facing Documents

Most payment and scope arguments start as unclear writing. This lesson covers tone and structure for documents a client or builder will read. It is not brand strategy and it is not legal advice.

### What "clear" means here

A clear document lets the other person answer four questions without calling you:

1. Who is sending this?
2. What work does it cover?
3. What will it cost, and when is money due?
4. What happens if the scope changes?

If any answer is only in a phone call, write it down.

### Tone: direct, not casual

Professional does not mean stiff. It means specific.

- Prefer "Please confirm the variation before we start the extra work" over slang or jokes.
- Prefer "The quote excludes asbestos removal and council applications" over "we'll sort the extras later".
- Prefer "Due 14 days from the invoice date" over "pay when you can".

Avoid language that sounds like a personal favour. You are describing a commercial agreement. Humour on a quote or a notice of variation is easy to misread later.

### Structure that works on a phone screen

Many clients open your email on a phone. Use short headings and short paragraphs.

**Recommended order for a quote email**

1. Job address and a one-sentence scope
2. Attached quote (or the itemised list)
3. Price, GST treatment, and validity period
4. What is excluded
5. How to accept (reply, signature, or deposit)
6. Your name, licence number if required, and phone number

**Recommended order for a variation notice**

1. Reference to the original quote or order
2. What changed and why
3. Cost and time effect
4. Request for written approval
5. Statement that work will not start until approved (unless a documented emergency)

### Claims still need evidence

If you state a performance figure, a standard, or a warranty, say where it comes from. "Installed to AS/NZS [number] as applicable to this work" is only useful if that standard actually applies and you are competent to work to it. If you are not sure, describe the work you will do instead of naming a standard.

### Records that sit beside the document

Keep the email or message that accepted the quote. Keep photos of the area before you start hidden work. Keep the signed variation. When a client says "I never agreed to that", the record is the answer — not a reconstructed conversation.

### Words to remove before you send

- Filler: "just touching base", "as per our chat" with no date or summary
- Absolutes you cannot prove: always, never, guaranteed, forever
- Blame: "as you failed to tell us"
- Open-ended extras: "and anything else that comes up"

Replace blame with a fact: "The wall cavity was not accessible at the quoting inspection on [date]. Opening it showed [condition]. Additional labour and materials are listed below."

### A 60-second send checklist

- Business name, ABN, and contact details are on the document
- Site address is correct
- Inclusions and exclusions are both present
- GST is shown correctly for your registration status
- Dates: quote validity or invoice due date
- Next step for the client is one action
- You would be comfortable reading this aloud in a meeting

Written template files for quotes and variations are **Coming Soon**. Until they are available, this checklist is the standard to apply to whatever document you already use.`,
    duration: "10 min",
    durationMinutes: 10,
    learningOutcomes: [
      "Structure a quote or variation so a client can act without a follow-up call",
      "Use direct professional language instead of casual or absolute claims",
      "Run a short checklist before sending a client-facing document",
    ],
    tags: ["communication", "quoting", "variations", "writing", "clients"],
    dateAdded: "2026-08-20",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "do-you-need-a-swms",
    title: "Do You Need a Safe Work Method Statement (SWMS)?",
    description:
      "When a SWMS is required for construction work in Australia, how high-risk construction work is defined, and what to do if you are unsure.",
    category: "safety",
    level: "beginner",
    content: `## When is a Safe Work Method Statement (SWMS) required?

A Safe Work Method Statement is a document for **high-risk construction work**. It describes the work, the hazards, and the control measures. It is prepared before that work starts. This lesson explains the usual trigger. Always confirm the definition that applies on your site with the WHS (or OHS) regulator in that state or territory. [Safe Work Australia](https://www.safeworkaustralia.gov.au) publishes model WHS material; Victoria operates under the Occupational Health and Safety framework, which is similar in purpose but not identical in wording.

This is general information. It is not a determination for your job and it is not legal advice.

### What a SWMS is — and is not

A SWMS is a job-specific plan for a listed high-risk activity. It is not:

- A generic safety poster
- A SWMS written for a different site and reprinted without review
- A substitute for licences, training, or plant that the work still requires
- Legal advice or a guarantee that an incident cannot occur

Workers who will do the work should be involved in developing it. The document should be written so those workers can understand it.

### The usual legal trigger: high-risk construction work

In jurisdictions that use the model WHS Regulations, a SWMS is required for **high-risk construction work (HRCW)**. The list is defined in the regulations, not by job value or by how routine the task feels. A short job can still be high-risk construction work. A long job on the ground may not be.

Common categories that appear on the model list include (confirm the current list and any local wording before you rely on this):

- Construction work where a person could fall more than two metres
- Work on or near chemical, fuel, or refrigerant lines
- Work on or near energised electrical installations or services
- Work in or near a confined space
- Work in or adjacent to a shaft, trench, or tunnel
- Work involving demolition
- Work involving the disturbance or removal of asbestos
- Structural alterations that require temporary support to prevent collapse
- Work on or near pressurised gas pipes or mains
- Work on a telecommunications tower
- Work in an area that may have a contaminated or flammable atmosphere
- Tilt-up or precast concrete work
- Work on or adjacent to a road or railway in use by traffic
- Work at a workplace where there is any movement of powered mobile plant
- Work in an area with artificial extremes of temperature
- Work in, over, or adjacent to water or other liquid where there is a risk of drowning
- Diving work
- Work involving explosives
- Excavation of a trench or shaft deeper than 1.5 metres (confirm the exact threshold in your regulations)

Your site may use different numbering or extra local categories. **Read the regulation that applies to the site, not a memory of a previous job.**

### Other reasons you may still be asked for a SWMS

Even when you believe the work is not HRCW, you may still be asked for a SWMS because:

- The principal contractor or client requires one for all trades
- The contract or site rules say so
- The work sits near another trade's high-risk activity
- An insurer or head contractor uses SWMS as their standard onboarding document

In those cases the document is a site or contract requirement. Treat it as mandatory for access, and still make it site-specific.

### Who prepares it

The duty sits with the person who has management or control of the high-risk construction work — often the contractor doing that work. In practice it should be written by people who understand the task, then checked by the person responsible for the work. Office-only templates that never meet the crew are a common failure.

### What a usable SWMS contains

At a minimum, a useful SWMS states:

- The high-risk construction work it covers
- The hazards and risks from that work
- The control measures, in an order that prefers elimination and engineering over PPE alone
- Who is responsible for putting each control in place
- How controls will be monitored
- The date it was prepared and when it was last reviewed
- Names or roles of people who developed it, and evidence that workers were consulted

Everyone doing the work should understand it before they start. Keep a copy available at the workplace.

### If you are not sure

1. Read your state or territory regulator's page on high-risk construction work and SWMS.
2. If the task is close to a listed category, prepare a SWMS before work starts.
3. Do not start the high-risk activity while you "write it later".
4. If the site has a principal contractor, ask how they want SWMS submitted and displayed.

A missing SWMS for high-risk construction work can lead to notices that stop the job. Writing one after an incident is not a substitute for having one before the work.

Related lessons: [SWMS vs JSA vs Risk Assessment](/lessons/swms-vs-jsa-vs-risk-assessment) and [How to Fill Out a SWMS](/lessons/how-to-fill-out-a-swms). Editable SWMS files for specific trades are **Coming Soon**.`,
    duration: "12 min",
    durationMinutes: 12,
    learningOutcomes: [
      "Identify the usual legal trigger for a SWMS: high-risk construction work",
      "Recognise common high-risk categories and the need to confirm the local list",
      "Know what a usable SWMS contains and when to prepare it",
    ],
    tags: ["swms", "high-risk construction work", "whs", "construction safety"],
    dateAdded: "2026-08-20",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "swms-vs-jsa-vs-risk-assessment",
    title: "SWMS vs JSA vs Risk Assessment: Understanding the Differences",
    description:
      "How Safe Work Method Statements, job safety analyses, and general risk assessments differ — and when each is typically used on an Australian site.",
    category: "safety",
    level: "beginner",
    content: `## SWMS vs JSA vs Risk Assessment

These three names are used interchangeably on some sites and strictly on others. Mixing them up causes two problems: you produce the wrong document, or you produce none because you thought a toolbox talk was enough. This lesson separates them in practical terms. Confirm what your site or regulator requires. This is not legal advice.

### Risk assessment — the foundation

A risk assessment is the process of identifying hazards, considering who could be harmed and how badly, and deciding on control measures. It applies to work generally, not only construction and not only high-risk construction work.

Typical questions:

- What could cause harm?
- Who might be harmed, including other trades and the public?
- What are we already doing?
- What else is reasonably practicable?
- Who will check that the controls stay in place?

You can record a risk assessment as a matrix, a form, or notes in a safe work procedure. The record should be enough for someone else to see what you decided and why.

### Job Safety Analysis (JSA)

A JSA (sometimes called a Job Hazard Analysis) breaks **one job** into steps. For each step you list hazards and controls. It is more detailed than a one-line risk rating and less formal than many SWMS templates.

Typical use:

- A non-routine task
- A task with several steps and mixed hazards
- A crew briefing before a specific activity that is not high-risk construction work
- Input that later becomes part of a SWMS

Example steps for a short roof-sheet replacement (illustrative only): set exclusion zone; inspect access; cut sheets at ground level where practicable; fix sheets using the agreed access system. Each step gets its own hazards (cuts, falls, falling objects) and controls (cut-resistant gloves, edge protection, tool lanyards).

A JSA that is never discussed with the people doing the steps is only a form.

### Safe Work Method Statement (SWMS)

A SWMS is the document the WHS regulations require for **high-risk construction work**. It is more than a JSA with a different title. It must cover the high-risk activity, the hazards from that activity, and the measures to control the risks, and it must be in place before that work starts.

A SWMS should be site-specific. Changing the letterhead on a document written for another address is not developing a SWMS for this work.

In many businesses a good SWMS includes the step-by-step thinking of a JSA plus the formal fields a regulator or principal contractor expects (consultation, monitoring, review, sign-on).

### How they sit together

- **Risk assessment:** always relevant. It is how you decide what the hazards are.
- **JSA:** useful for breaking a task into steps. Often used for work that is not HRCW, or as working notes.
- **SWMS:** required for high-risk construction work in jurisdictions that use that framework. Use the local definition.

Do not assume a signed JSA meets a SWMS duty. Do not assume a SWMS removes the need to think about other risks on the same site (housekeeping, other trades, public interface).

### Victoria and other local differences

Victoria uses the Occupational Health and Safety Act and Regulations. Duties to control risk still apply. Document names and construction-project duties can differ from the model WHS wording. If the site is in Victoria, use [WorkSafe Victoria](https://www.worksafe.vic.gov.au) guidance for the documents they expect. Other jurisdictions publish their own codes and fact sheets.

### A practical decision path

1. Describe the actual task and location.
2. Check whether it is construction work and whether it is high-risk construction work under the local regulations.
3. If it is HRCW, prepare a SWMS before that work starts.
4. If it is not HRCW, still assess the risks. Use a JSA or procedure if the task is complex or the client asks for one.
5. Brief the crew. Record who was present.
6. Review if the method, plant, or conditions change.

Related: [Do You Need a SWMS?](/lessons/do-you-need-a-swms) and [How to Fill Out a SWMS](/lessons/how-to-fill-out-a-swms).

Trade-specific SWMS files are **Coming Soon**. Until those downloads exist, use the structure in these lessons and the official regulator pages.`,
    duration: "11 min",
    durationMinutes: 11,
    learningOutcomes: [
      "Distinguish a general risk assessment, a JSA, and a SWMS",
      "Choose a document type based on whether the work is high-risk construction work",
      "Allow for local regulator differences, including Victoria's OHS framework",
    ],
    tags: ["swms", "jsa", "risk assessment", "workplace safety", "australia"],
    dateAdded: "2026-08-20",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "how-to-fill-out-a-swms",
    title: "How to Fill Out a SWMS",
    description:
      "A section-by-section method for completing a Safe Work Method Statement so it matches the site, the crew, and the high-risk work.",
    category: "safety",
    level: "beginner",
    content: `## How to Fill Out a SWMS

A SWMS is only useful if it describes the job in front of you. This lesson is a sequence for completing one. Use it with the high-risk definition that applies on your site. It is not a completed SWMS and it is not legal advice.

Editable SWMS files are **Coming Soon**. There is no pack to download on this page. You can still apply this sequence to any blank form your site accepts.

### Before you write

- Confirm the work is (or may be) high-risk construction work.
- Walk the area. Note access, other trades, services, public interface, and plant paths.
- Talk to the people who will do the work. Consultation is part of developing the document, not a signature at the end.
- Have licence and competency records available for tasks that require them.

### Section 1: Job and document control

Fill in fields that let someone else identify the document six months later:

- Business name, ABN, and contact
- Site address and, if relevant, the area or level
- Description of the high-risk construction work (not only the trade name)
- Principal contractor, if any
- Date prepared, version number, and review date
- Names or roles of people who developed it

If you reuse a previous SWMS, create a new version. Change the site, the date, and every step that does not match.

### Section 2: Work steps

List the work in the order it will happen. Each step should be specific enough that a competent person can picture it.

Too vague: "Do electrical work."
Usable: "Isolate and prove de-energised the circuit feeding bedroom 2, then pull new TPS from the switchboard through the ceiling space to the new point."

Include setup and pack-down when those steps carry the hazard (establishing exclusion zones, erecting edge protection, restoring power, removing waste).

### Section 3: Hazards

For each step, write what could harm someone — including other trades and the public. Common construction hazards include falls, falling objects, electricity, plant movement, hazardous chemicals, silica dust, noise, manual handling, and engulfment in excavations. Only list hazards that apply to this method. A long copied list that includes asbestos when there is no asbestos work makes the real hazards harder to see.

### Section 4: Risk rating (if your form uses one)

Many forms use likelihood times consequence. Use the matrix your business or principal contractor specifies. Rating is a way to prioritise controls. It does not replace putting the controls in place. If you do not understand the matrix, ask the person responsible for the WHS system before you invent scores.

### Section 5: Control measures

Write controls as actions that can be checked on site.

Weak: "Be careful." / "Use PPE."
Usable: "Install guardrails before work within two metres of the open edge." / "Prove isolation with a tested two-pole tester. Lock and tag the isolator. PPE: cut-rated gloves and eye protection during cutting."

Apply the hierarchy of controls in order: eliminate the hazard if reasonably practicable, then substitute, then engineering, then administration, then PPE. PPE can be part of the system. It should not be the only control for a high-risk activity if something higher on the hierarchy is reasonably practicable.

Name who is responsible for each control (role is enough: leading hand, licensed electrician, dogman).

### Section 6: Monitoring and review

State how you will check that controls stay in place (supervisor checks at start of shift, permit on isolation, exclusion zone inspected after breaks). State when the SWMS will be reviewed (change of method, new plant, incident, new workers on the task).

### Section 7: Sign-on

Workers who will follow the SWMS should confirm they have been briefed and understand it **before** the high-risk work starts. Keep the signed copy available on site. If someone joins mid-job, brief and sign them on before they start that work.

### Common mistakes

- Copying another site's SWMS and only changing the address
- Listing "PPE" as the sole control for work at height or live electrical work
- Writing steps the crew does not actually use
- Signing after the work has started
- Leaving the document in a vehicle that is not at the work area
- Not reviewing when the method changes

### After you finish the form

Brief the crew on the actual steps. Point out the controls that must be in place before starting. If a control cannot be used that day, stop and revise the SWMS — do not "make do" in contradiction of the document.

Related: [Do You Need a SWMS?](/lessons/do-you-need-a-swms).`,
    duration: "12 min",
    durationMinutes: 12,
    learningOutcomes: [
      "Complete each SWMS section with site-specific information",
      "Write work steps, hazards, and controls that can be checked on site",
      "Avoid the usual copy-paste and PPE-only mistakes",
    ],
    tags: ["swms", "safety", "how-to", "whs"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "licensing-electrical",
    title: "Electrical Licensing Requirements Across States",
    description:
      "How electrical licensing works across Australian jurisdictions, what mutual recognition usually requires, and why you apply before you start work.",
    category: "licensing",
    level: "intermediate",
    content: `## Electrical licensing across Australian jurisdictions

Electrical work is licensed work. The licence class you need depends on the work (for example installing, fault-finding, or contracting) and on the state or territory. This lesson explains the usual pattern. It is not a licence application and it is not legal advice. Confirm classes, fees, and mutual recognition with the electrical regulator in the place you will work.

### Why interstate work is not automatic

Holding a current licence in one jurisdiction does not by itself authorise you to start electrical work in another. Some jurisdictions participate in mutual recognition or automatic mutual recognition arrangements. Those arrangements still involve an application or a notice to the receiving regulator, and some occupations or licence classes can be excluded. **Apply or notify before you start work.**

Do not rely on a verbal "you'll be right" from a builder. The person who performs unlicensed electrical work can face enforcement action. The principal contractor can also refuse site access.

### Typical licence layers (names vary)

Most jurisdictions separate at least:

- **A tradesperson / worker licence** — you may perform electrical work of the class stated, often as an employee or under a contracting structure the law allows
- **A contractor licence** — your business may contract electrical work to clients
- **Restricted or specialised classes** — for example restricted electrical work for another trade, or work on particular systems

Apprentices work under supervision rules set by that jurisdiction. Do not treat an apprentice as an unsupervised licensed electrician.

Read the class on the card or digital licence. "Electrician" in conversation is not a substitute for the class that covers the work.

### Illustrative regulators (confirm before you apply)

Names and portfolios change. Use the official site on the day you apply.

- **NSW** — NSW Fair Trading (electrical contractor and tradesperson licensing)
- **Victoria** — Energy Safe Victoria / Victorian licensing arrangements for electrical workers and contractors
- **Queensland** — Electrical Safety Office (within the Queensland framework)
- **South Australia** — Consumer and Business Services / Office of the Technical Regulator as applicable
- **Western Australia** — Building and Energy
- **Tasmania** — Consumer, Building and Occupational Services (CBOS)
- **Northern Territory** — the NT electrical licensing authority listed on the NT government site
- **ACT** — Access Canberra

If a page has moved, search from the state or territory government homepage rather than an old bookmark.

### Mutual recognition — a working method

1. Confirm your current licence is current and covers the same kind of work.
2. Open the receiving regulator's page for interstate or mutual recognition applications.
3. Check whether your class is eligible, excluded, or needs extra conditions.
4. Lodge the application or notice and pay the fee.
5. Wait for confirmation before you book work that requires that licence.
6. Carry evidence of the receiving licence or recognised registration on site.

Automatic Mutual Recognition (Commonwealth framework) may apply to some licences. States can still impose requirements or exclusions. Read the receiving regulator's AMR page, not a summary from a forum.

### Extra checks beyond the licence card

- The work may also require a **high-risk work licence** (for example if you are operating certain plant), which is separate from an electrical licence.
- Testing, commissioning, and certificates of electrical safety have local rules. Use the form the jurisdiction requires.
- Insurance and contractor licensing are separate from holding a tradesperson licence.

### If you employ or engage others

If you contract electrical work, confirm the people doing the work hold the correct class. Supervision arrangements for apprentices and restricted workers are set by the local electrical safety law. Misdescribing an employee as a contractor does not remove licensing duties — see [Subcontractor vs Employee](/lessons/subcontractor-vs-employee).

### Before you accept an interstate job

- Time the licence application into the programme. Approval is not same-day in every case.
- Confirm the scope: extra-low voltage, high voltage, or restricted work may sit in different classes.
- Ask the site which evidence they want at induction (licence number, photo ID, insurance).

This site does not issue licences and does not lodge applications for you. Use the regulator. Written lessons here are for orientation only.`,
    duration: "14 min",
    durationMinutes: 14,
    learningOutcomes: [
      "Understand that electrical licensing is jurisdiction-specific",
      "Apply or notify in the receiving state or territory before starting work",
      "Separate tradesperson, contractor, and high-risk plant licences",
    ],
    tags: ["electrical license", "mutual recognition", "interstate licensing", "electrician"],
    dateAdded: "2026-08-20",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "licensing-plumbing",
    title: "Licensing by State: Plumbing",
    description:
      "How plumbing, drainage, and gas-fitting credentials are typically structured in Australia, and how to check the class you need before you start.",
    category: "compliance",
    level: "intermediate",
    content: `## Licensing by State: Plumbing

Plumbing work is licensed or registered in every Australian state and territory. The class names differ. Gas fitting is usually a separate endorsement or licence. This lesson is a map of what to look up. It is not a list of current fees, and it is not permission to perform work.

### Typical licence layers

You will usually see some combination of:

- **Apprentice or trainee** — work only as allowed under supervision
- **Tradesperson / journeyman / registered plumber** — may perform plumbing work of the stated class
- **Contractor / licensed plumber (contracting)** — may contract plumbing work to clients; some places require a separate contractor registration or a qualified supervisor
- **Specialist endorsements** — commonly gas fitting, roof plumbing, mechanical services, fire protection, backflow prevention, or drainage, depending on the jurisdiction

Read the class. "I have a plumbing licence" is not enough if the job is gas, backflow, or roof plumbing and your class does not include it.

### Illustrative regulators

Confirm the current body and application form on the official site. Portfolios move.

- **NSW** — NSW Fair Trading. Contracting often requires the appropriate contractor licence or qualified supervisor certificate.
- **Victoria** — Victorian Building Authority (VBA) for plumbing registration and licensing. Gas work needs the correct plumbing registration class or endorsement.
- **Queensland** — Queensland Building and Construction Commission (QBCC) plumbing licence classes by scope.
- **South Australia** — Consumer and Business Services for plumbing contractor and worker licensing.
- **Western Australia** — Building and Energy plumber licensing (tradesperson and contractor pathways).
- **Tasmania** — CBOS plumber and contractor licensing.
- **Northern Territory** — Plumbers and Drainers licensing as listed by the NT government.
- **ACT** — Access Canberra plumber licence classes.

If you cannot find the page, start from the state or territory government homepage and search "plumber licence".

### Gas fitting

Gas fitting is not a casual extra on a plumbing job. In every jurisdiction it requires the credential that covers gas work. Penalties for unlicensed gas work are serious because the harm is serious. If the quote includes gas, confirm the class before you accept the job.

### Work that is easy to mis-classify

- **Roof plumbing** versus general plumbing
- **Sanitary drainage** versus stormwater
- **Backflow prevention** testable devices
- **Thermostatic mixing valves** and heated water work
- **Fire hydrant or sprinkler** work (often a separate fire class)
- **Medical gas** (specialised; do not assume a general plumbing licence covers it)

If the drawing names a system you have not been licensed for, stop and check.

### Interstate plumbing work

Mutual recognition or automatic mutual recognition may be available for some plumbing licences. You still apply or notify in the receiving jurisdiction before you start. Exclusions exist. Do not book a fly-in job on the assumption that your home-state card is enough.

### Contractor versus worker

Doing the work and contracting the work are different permissions in several states. If you invoice the client directly, you may need the contractor pathway, a qualified supervisor, or both. If you only work as an employee for a licensed contractor, the contractor's licensing still has to cover the work.

### A short check before you quote

1. What systems are on the drawing or in the client's request?
2. Which licence class in this jurisdiction covers each system?
3. Do you (or the licensed person who will do the work) hold that class, current today?
4. Is gas involved? If yes, who holds the gas credential?
5. If the site is in another state or territory, has recognition been granted?

This site does not assess licence applications. Printed plumbing SWMS or form packs are **Coming Soon** and are not a substitute for a licence.`,
    duration: "11 min",
    durationMinutes: 11,
    learningOutcomes: [
      "Identify the usual plumbing licence layers and specialist endorsements",
      "Treat gas fitting as a separate credential check",
      "Confirm class and interstate recognition before quoting or starting",
    ],
    tags: ["licensing", "plumbing", "gas-fitting", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "licensing-building-carpentry",
    title: "Licensing by State: Building & Carpentry",
    description:
      "When building or carpentry work requires a licence in Australia, why dollar thresholds change, and how owner-builder rules differ from contracting.",
    category: "compliance",
    level: "intermediate",
    content: `## Licensing by State: Building and Carpentry

Unlike electrical and plumbing work, building and carpentry licensing often depends on **what** you are doing, **for whom**, and **the value of the work**. Thresholds and class names change. This lesson tells you what to check. It does not state a current dollar threshold as if it were fixed.

### When a licence is commonly required

Ask all three questions:

1. **Value** — many jurisdictions set a dollar amount above which residential building work must be done by a licensed contractor. That amount is updated. Look it up; do not use a number you remember from a few years ago.
2. **Type of work** — structural work, waterproofing, kitchen and bathroom renovations, and complete dwellings are treated more strictly than minor non-structural carpentry in some places.
3. **Who you contract to** — working as a trade contractor to a licensed builder is different from contracting directly to a homeowner.

If you advertise to the public and take deposits for renovations, assume you need to check contractor licensing even if the job "feels small".

### Illustrative regulators

- **NSW** — NSW Fair Trading (contractor licensing; thresholds published by the regulator)
- **Victoria** — Victorian Building Authority (registered building practitioners; carpentry and builder classes)
- **Queensland** — QBCC licence classes and financial requirements
- **South Australia** — Consumer and Business Services building work contractor licensing
- **Western Australia** — Building and Energy registration
- **Tasmania** — CBOS builder and building services licensing
- **Northern Territory** — Building Practitioners Board
- **ACT** — Access Canberra construction occupations

Open the current "do I need a licence" page for that jurisdiction before you quote.

### Common class families (names vary)

- **Builder — unlimited / open** — typically any value within the class
- **Medium rise / low rise** — storey or building-type limits
- **Trade contractor — carpentry** — carpentry work, not necessarily the whole dwelling as head contractor
- **Specialist building work** — for example waterproofing, where separately licensed

Do not take on head-contractor duties (calling other trades, holding the homeowner contract) on a trade-only licence unless the local law allows it.

### Owner-builder

Most jurisdictions allow a homeowner to obtain an owner-builder permit or equivalent for their own home, with conditions. Those conditions often include education, value limits, and restrictions on selling the property within a stated period. An owner-builder permit does **not** automatically let you contract building work to other people's homes. If a client says "we'll go owner-builder and you invoice me", check whether that structure is lawful for the work and who holds the duties.

### Carpentry that still triggers other licences

Carpentry on a site does not replace:

- Electrical or plumbing licences for those services
- High-risk work licences for scaffolding or certain plant
- A builder licence when you are the contracting builder above the local threshold

### Insurance and contracts sit beside the licence

Several jurisdictions require home warranty or similar insurance for residential building work above a threshold, and require a written contract in a stated form. Those rules are separate from holding a licence card. Confirm both.

### A working method

1. Write down the scope and an estimated contract value including GST if applicable.
2. Look up the current threshold and class list for the site's jurisdiction.
3. If you are over the threshold or the work type is restricted, stop quoting as an unlicensed head contractor.
4. If you are a trade to a licensed builder, confirm what the builder needs from you (licence copy, insurance, SWMS).
5. Recheck thresholds when they are updated — do not laminate last year's number.

Related: [Public Liability vs Income Protection](/lessons/public-liability-vs-income-protection). Template contracts are **Coming Soon**; they will not replace a required builder licence.`,
    duration: "11 min",
    durationMinutes: 11,
    learningOutcomes: [
      "Check value, work type, and contracting role before deciding a licence is unnecessary",
      "Use the current regulator threshold instead of a remembered dollar figure",
      "Separate owner-builder permits from contracting to the public",
    ],
    tags: ["licensing", "building", "carpentry", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "anatomy-of-a-winning-quote",
    title: "The Anatomy of a Quote That Wins Jobs",
    description:
      "What to include in a trade quote so the client can accept it, the scope is clear, and extras are handled as variations.",
    category: "business",
    level: "beginner",
    content: `## The Anatomy of a Quote That Wins Jobs

A useful quote does two jobs: it helps the client say yes, and it still matches the work you intend to do. Price matters. Ambiguity loses more money than a slightly higher number. This is general business practice, not legal advice. Some residential building work requires a contract in a form set by state law once a value threshold is crossed — check that separately.

Quote layouts as downloadable files are **Coming Soon**. Use this structure in whatever document you already send.

### Identity and site

Include:

- Business name, ABN, and contact details
- Licence or registration number when the work requires it
- Client name and site address
- Quote number and date
- Validity period (many businesses use 14–30 days; materials prices move)

If GST is included or excluded, say so in words, not only in a column the client might miss.

### Scope of work

Write what you will do in the order the job will happen, in plain language. Name rooms, quantities, and products where you already know them.

Example: "Supply and install 12 listed LED downlights in the existing plasterboard ceiling of the living room, including cutting openings and connecting to the existing lighting circuit after isolation by a licensed electrician" — only if that is actually the arrangement. Do not describe electrical work you are not licensed to do.

### Inclusions and exclusions

Exclusions prevent the "while you are here" argument. Common exclusions (use only those that apply):

- Asbestos or other hazardous-material removal
- Council applications, development consent, or certification
- Making good paint or surfaces beyond the stated patch
- Furniture moving, storage, or after-hours work
- Hidden services or structural repairs not visible at inspection
- Temporary power or amenities

If something is unknown until you open a wall, write an allowance or a clear exclusion and a variation path.

### Price presentation

Itemise enough that the client can see labour, materials, and any provisional sums. A single lump sum with no breakdown invites suspicion and makes variations harder to explain.

State:

- Each item or trade
- Provisional sums or prime-cost items, and how they will be reconciled
- GST treatment
- Total

### Commercial terms on the quote

- How the client accepts (signed return, email confirmation, deposit)
- Deposit and progress payments, if any
- When work can be scheduled after acceptance
- A variations sentence: work outside this scope will be quoted and approved in writing before it starts

For residential building work above your state's contract threshold, a quote alone may not meet the contract-form rules. Confirm with the licensing or consumer agency.

### Quote versus estimate

A **quote** is usually understood as a fixed price for the described scope. An **estimate** is a considered indication that can move. Do not let a client treat an estimate as a cap if you meant it as an estimate — label the document. Australian Consumer Law cares about misleading representations. If you are not sure which you are sending, get advice.

### Follow-up without pressure tactics

Send the quote promptly after the inspection — the same day or the next business day is a common standard. If you have not heard back, one polite follow-up after a few days is reasonable. Record what you sent and when.

### Before you hit send

- Does the scope match the site visit notes and photos?
- Can a licensed person actually do every line you wrote?
- Is the validity period long enough for the client and short enough for your suppliers?
- Would you be willing to do the job for this number if every exclusion is enforced?

Related: [How to Price Jobs So You Actually Make Money](/lessons/pricing-jobs-to-make-money) and [Variations](/lessons/variations-scope-creep).`,
    duration: "11 min",
    durationMinutes: 11,
    learningOutcomes: [
      "Include identity, scope, exclusions, GST, and acceptance on every quote",
      "Label quotes and estimates so the client knows which they received",
      "Leave a written path for variations instead of verbal extras",
    ],
    tags: ["quoting", "business", "pricing", "scope"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "pricing-jobs-to-make-money",
    title: "How to Price Jobs So You Actually Make Money",
    description:
      "How to build a charge-out rate from labour, overheads, and downtime, then apply it to fixed-price and charge-up work.",
    category: "business",
    level: "intermediate",
    content: `## How to Price Jobs So You Actually Make Money

Underquoting is usually a costing problem, not a market problem. This lesson is a costing method. It is not financial advice and it is not a guarantee of profit. Tax, superannuation, and award rates change — confirm current figures with the [ATO](https://www.ato.gov.au), your accountant, and Fair Work sources.

### Separate three numbers

1. **What you want to take home** (or pay yourself) for an hour of productive work
2. **What an hour of the business actually costs** once overheads and unpaid time are included
3. **What you charge the client** for an hour, or the fixed price derived from that

If you only use number 1, you fund the business from your own pay.

### Costs people forget

Build an annual or monthly list, then divide by **billable hours**, not clock hours.

Include:

- Your labour (or the wage you would pay someone competent to do the work)
- Superannuation at the current Super Guarantee rate on eligible wages — check the rate; do not use a remembered percentage
- Public liability, income protection if you carry it, tools, and vehicle (fuel, registration, insurance, servicing, depreciation)
- Phones, software, accounting, bank fees
- Consumables that never appear as a materials line
- Non-billable time: quoting, invoicing, supplier runs, wet weather, gaps between jobs, training, and leave
- Defects and callbacks you do not recharge

A common pattern is that only a portion of the week is billable. If you ignore that, every job is cheaper on paper than in the bank.

### A simple rate method

1. Add annual business costs (including the pay you need).
2. Estimate realistic billable hours for the year (be conservative).
3. Divide. That is a break-even charge-out before profit.
4. Add a profit margin you can explain (materials handling, risk, and growth).

A rough multiplier (for example 2.5 to 3 times a target hourly wage) is only a sense-check. If your overheads or downtime are high, the multiplier is higher. If you have low overheads and high utilisation, it may be lower. Do the division.

### Job estimates

For a fixed-price job:

- Hours for each trade or stage
- Materials with current supplier prices, not last year's docket
- Hire plant
- Statutory fees if you are paying them
- Contingency for uncertainty you have already disclosed (or a variation path for uncertainty you have excluded)
- Your charge-out on the hours, plus margin on materials if that is your method

After the job, compare estimated hours and materials to actual. Adjust the next estimate. Pricing improves from records, not from optimism.

### Charge-up and cost-plus

Charge-up (hourly) and cost-plus (costs plus an agreed margin) shift risk toward the client. They still need a written rate, a definition of recoverable costs, and a reporting habit. Clients accept these methods when the scope is genuinely uncertain — not when the method is used to hide a vague quote.

### Traps

- Travel time that is never charged and never built into the rate
- "I'll beat their price" without seeing their exclusions
- Using employee wage rates as if they were charge-out rates
- Forgetting GST treatment when comparing to a competitor who is not registered
- No contingency and no variation clause on a renovation with hidden work

### When the cheapest quote wins

Sometimes a client will only take the lowest number. You can decline. A job that pays less than break-even is a donation. If you take it for strategic reasons (fill a gap, a follow-on stage), write down why, and do not use that price as your new standard.

Related: [The Anatomy of a Quote That Wins Jobs](/lessons/anatomy-of-a-winning-quote). Pricing spreadsheets are **Coming Soon**; they are not required to run this method on paper.`,
    duration: "11 min",
    durationMinutes: 11,
    learningOutcomes: [
      "Build a charge-out rate from real overheads and billable hours",
      "Estimate a fixed-price job with materials, labour, and a stated uncertainty path",
      "Recognise common underquoting traps",
    ],
    tags: ["pricing", "business", "margins", "charge-out"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "getting-paid-invoice-terms",
    title: "Getting Paid: Invoice Terms",
    description:
      "What a tax invoice usually needs, how to set payment terms you can operate on, and a calm sequence when an invoice is overdue.",
    category: "business",
    level: "beginner",
    content: `## Getting Paid: Invoice Terms

Work that is finished but not invoiced is an unpaid loan. This lesson covers tax-invoice basics, payment terms, and a measured follow-up sequence. It is not debt-collection advice and it is not tax advice. Confirm invoice rules with the [ATO](https://www.ato.gov.au). Construction payment claims may also sit under your state's security of payment legislation — those timeframes are strict if you use them.

Invoice templates are **Coming Soon**. There is no file download on this page.

### Tax invoice contents (GST-registered)

If you are registered for GST, the ATO specifies what a tax invoice must include. Typical required elements include the words "Tax Invoice", your identity and ABN, the date of issue, a description of what was supplied, the price, and the GST amount or a statement that the total includes GST. Thresholds and rules for amounts and recipient-created tax invoices are on the ATO site. Check them if the invoice is large or unusual.

If you are **not** registered for GST, do not add GST. You can still issue a professional invoice with your ABN (if you have one), description, date, and payment details.

### Payment terms you can live with

Nothing requires you to offer 30 days. Many small trade businesses use 7 or 14 days for residential clients and longer terms only where a head contractor's process requires it. Write the term on the quote and repeat it on the invoice: "Due within 14 days of the invoice date."

Deposits and progress payments reduce exposure on longer jobs. State them before you start. A deposit is a commercial term, not a moral judgement about the client.

If you want interest or a stated late fee, put it in the terms **before** the work is accepted, keep it reasonable, and get advice if you deal with standard-form contracts — unfair contract term rules can apply.

### Send the invoice when the work is billable

Invoice when the agreed milestone is met — often the day the stage is complete — not when you next sit down on a Sunday. Late invoices are paid late. Include:

- How to pay (BSB and account, PayID if you use it)
- Invoice number and the quote or order it relates to
- Any retention or progress-claim reference the contract uses

### When payment is late — a sequence

Stay factual. Keep copies.

1. **Friendly reminder** shortly after the due date — the invoice number, amount, due date, and payment details again.
2. **Phone call plus written follow-up** if there is no response — ask whether anything on the invoice is disputed.
3. **Final notice** stating that you may start recovery action if there is no payment or written dispute by a stated date.
4. **Recovery options** — your state's small claims or civil claims process, a licensed collection agency, or (for construction work) a security of payment claim if you are still inside the statutory time limits.

Do not take a client's goods, change locks, or "recover" materials in a way that could be unlawful. If the debt is large or contested, get advice.

### Security of payment (construction)

Each state and territory has security of payment legislation for certain construction work. It can provide a structured way to claim progress payments. The forms, service rules, and deadlines are easy to miss. If you intend to use that path, read the current guide for your jurisdiction before you need it — not on the afternoon a payment is late.

### Habits that reduce overdue invoices

- Quote terms match invoice terms
- Variations approved before you invoice them
- Bank details correct and easy to copy
- One person (you or a bookkeeper) reviews unpaid invoices weekly

Related: [ABN, GST, and BAS](/lessons/abn-gst-bas-tradie-tax-basics).`,
    duration: "11 min",
    durationMinutes: 11,
    learningOutcomes: [
      "List the usual contents of a GST tax invoice and where to confirm them",
      "Set payment terms that match how the business actually operates",
      "Follow a written sequence when an invoice is overdue",
    ],
    tags: ["invoicing", "payments", "business", "tax-invoice"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "variations-scope-creep",
    title: "Variations: How to Charge for Scope Creep",
    description:
      "How to recognise a variation, write it down, get approval, and invoice it so extra work does not disappear into the original price.",
    category: "business",
    level: "intermediate",
    content: `## Variations: How to Charge for Scope Creep

A variation is a change to the agreed scope: extra work, a different product, a different method, or a site condition that was not reasonably visible when you quoted. Verbal extras are the usual source of unpaid work. This lesson is a process. Some building contracts set a mandatory variation form — use that form when the contract requires it.

Variation templates are **Coming Soon**. You can still write a short notice in an email today.

### Recognise the moment

Examples:

- The client asks for an additional point, fitting, or room
- The specified product is unavailable and a substitute costs more
- Opening up reveals rotten timber, illegal wiring, or no noggings
- Another trade is late and you are asked to demobilise and return
- The client changes a finish after materials are ordered

If the cost or time will change, stop long enough to write it down. Continuing "to keep things moving" is how extras become arguments.

### Write a variation notice

Include:

- Reference to the original quote, order, or contract number
- Date and site address
- Description of the change in plain language
- Reason (client request, hidden condition, substitute product)
- Effect on price (labour, materials, other)
- Effect on programme, if any
- A line for written approval (email reply is enough if the contract allows it)
- A statement that the extra work will not start until approved, except where a documented safety issue requires immediate make-safe

Send it to the person who can approve money — not only to a tenant or a leading hand who cannot.

### Make-safe versus extra scope

If you uncover a hazard (unsafe wiring, unsupported structure), make the area safe as required by WHS duties. Then separate:

- Immediate make-safe (record what you did and why)
- The additional repair or upgrade, which is a variation

Do not use "safety" as a way to expand the commercial scope without approval. Do not ignore a real hazard because a variation is unsigned. If you are in that bind, pause the non-essential work and communicate in writing.

### After approval

- Do the extra work as described
- Photograph the condition that justified a hidden-work variation
- Invoice with the variation number and the original job reference
- Do not bury extras inside a round-number final invoice with no explanation

### When the client refuses the variation

You can:

- Leave the original scope as quoted
- Agree a smaller extra in a new written notice
- Decline further extras and complete only the original scope
- If the original work cannot proceed without the extra (for example a wet area that failed a flood test), explain that in writing and wait. Do not install finishes over a known failure.

Standing your ground is a commercial conversation. Stay polite and specific. The original price was for the original scope.

### Contract-required processes

Many commercial and residential building contracts say that variations must be in a particular format, approved by a named superintendent, or claimed within a time bar. If you are on that kind of job, the email method still helps as a record, but the **contract method** is what gets paid. Read the clause before the first extra.

### Habits

- Train everyone on site to call you before starting extras
- Keep a running variation register on larger jobs (number, date, status, amount)
- Do not start a habit of "we'll sort it at the end"

Related: [Writing Clear Client-Facing Documents](/lessons/blog) and [Getting Paid: Invoice Terms](/lessons/getting-paid-invoice-terms).`,
    duration: "10 min",
    durationMinutes: 10,
    learningOutcomes: [
      "Recognise a variation before the extra work starts",
      "Write a notice that covers scope, reason, cost, and approval",
      "Separate make-safe duties from commercial extras",
    ],
    tags: ["variations", "contracts", "business", "scope"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "abn-gst-bas-tradie-tax-basics",
    title: "ABN, GST, and BAS: Tradie Tax Basics",
    description:
      "When a trade business typically needs an ABN, how GST registration is decided, and what a BAS is for — with pointers to current ATO rules.",
    category: "compliance",
    level: "beginner",
    content: `## ABN, GST, and BAS: Tradie Tax Basics

Tax setup is easier to do once, correctly, than to unwind later. This lesson is an orientation. Thresholds and rates change. Confirm everything on the [ATO website](https://www.ato.gov.au) or with a registered tax agent. This is not tax advice.

### ABN

An Australian Business Number identifies the business to the ATO and to clients. If you are carrying on an enterprise — quoting, invoicing, supplying your own tools and deciding how the work is done — you generally need an ABN.

Clients and builders will ask for it. Some will withhold tax from payments if you do not quote an ABN when one is required. Apply through the official ABR / ATO process. Do not buy an ABN from a random website.

Using an ABN does not, by itself, make a worker a contractor. See [Subcontractor vs Employee](/lessons/subcontractor-vs-employee).

### GST registration

GST registration is **mandatory** once your GST turnover reaches the ATO's current registration threshold. It is **optional** below that threshold. The dollar figure is published by the ATO and is updated from time to time — look it up; do not rely on a remembered number from a course years ago.

If you register:

- You generally charge GST on taxable supplies
- You can usually claim GST credits on creditable purchases used in the business, if you hold the right records
- You lodge activity statements on the cycle the ATO assigns (often quarterly for small businesses)

If you are registered, GST collected is not extra profit. Set it aside. "I spent it on tools" is not a payment method the ATO accepts.

### BAS (Business Activity Statement)

A BAS is how you report GST and, if relevant, PAYG withholding and other obligations the ATO includes on that form. Lodge on time. Late lodgement and late payment attract penalties and interest.

Keep:

- Tax invoices for sales
- Tax invoices for purchases you claim credits on
- A simple record of what you have set aside for GST and income tax

No receipt or valid tax invoice usually means no GST credit. Photograph dockets the day you get them.

### Income tax is separate

GST is not income tax. Sole traders still declare business income on an individual return. Companies have their own returns. Superannuation, PAYG instalments, and payroll obligations depend on your structure and whether you have workers. Get a tax agent involved when you hire, buy a vehicle through the business, or change structure.

### Common mistakes

- Mixing personal and business spending in one account with no records
- Charging GST when not registered, or forgetting to charge it when registered
- Treating the GST component as spending money
- Missing BAS due dates
- Assuming an ABN means you have no PAYG or super duties for people who work like employees

### A practical starting setup

1. Decide whether you are operating a business. If yes, apply for an ABN through official channels.
2. Check the current GST threshold and register if you must, or if you have chosen to.
3. Open a dedicated bank account for the business.
4. Decide who will lodge BAS (you, a bookkeeper, or a tax agent) and put the due dates in a calendar.
5. Set aside a percentage of each receipt for GST and income tax — your agent can help you choose a working percentage. A figure such as "about 30 percent" is only a starting conversation, not a rule.

Related: [Getting Paid: Invoice Terms](/lessons/getting-paid-invoice-terms).`,
    duration: "11 min",
    durationMinutes: 11,
    learningOutcomes: [
      "Know when an ABN is typically required and where to apply",
      "Check the current ATO GST threshold instead of using a remembered figure",
      "Understand what a BAS reports and why records matter",
    ],
    tags: ["abn", "gst", "bas", "tax", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "public-liability-vs-income-protection",
    title: "Public Liability vs Income Protection",
    description:
      "What public liability and income protection usually cover, what builders ask to see, and why the two policies are not substitutes for each other.",
    category: "compliance",
    level: "beginner",
    content: `## Public Liability vs Income Protection

These policies protect different things. One responds when someone claims you caused injury or property damage. The other may replace part of your income if you cannot work. This lesson is general information. It is not insurance advice. Policy wordings differ. Read the Product Disclosure Statement and ask a licensed adviser about your situation.

### Public liability

**Typical purpose:** claims by third parties for personal injury or property damage arising from your business activities, subject to exclusions.

**Illustrative situations** (whether a policy responds depends on the wording and the facts):

- A person trips on a lead you ran across a public access way
- You damage a water service while excavating
- Material falls from a work area and damages a vehicle

**On sites:** public liability is often not optional in practice. Many principal contractors specify a minimum limit (commonly expressed as $5 million, $10 million, or $20 million — the contract wins). They will ask for a **certificate of currency** that covers the dates on site.

Cost varies by trade, claims history, limit, and excess. Treat any dollar range you hear on a site as rumour until you have a quote.

### Income protection

**Typical purpose:** a portion of your income for a time if illness or injury stops you working, after a waiting period, subject to exclusions (including how the injury happened and whether you can do other work).

It does not replace public liability. It does not pay the client for their damaged ceiling. It may help you meet personal bills if you cannot trade.

Premiums depend on age, occupation class, benefit period, waiting period, and medical history. Compare waiting periods to the cash buffer you actually have.

### Related covers people confuse with these two

- **Workers compensation** — compulsory if you have workers (and in some cases for deemed workers). It is not optional "if you are careful". Confirm with your state scheme.
- **Tools and equipment** — first-party cover for your kit, not for claims against you.
- **Contract works / construction all risks** — often arranged by the builder for the project; do not assume it covers your tools or your liability.
- **Professional indemnity** — more relevant if you provide design or certified advice. Many hands-on trade policies exclude pure design.

### What to hand over at induction

Typically:

- Certificate of currency for public liability, showing the limit and period
- Workers compensation certificate if you have workers
- Licence details
- Any higher or extra policy the subcontract asks for

Send a new certificate when you renew mid-project. An expired certificate is a gate problem, not a paperwork nicety.

### Buying decisions (questions for an adviser)

- What activities are excluded (hot works, height, demolition, asbestos, work around live services)?
- Are labour-hire or subcontracted workers covered, and on what basis?
- Is the limit any-one-occurrence, and is there an aggregate?
- For income protection: own-occupation versus any-occupation definitions; waiting period; how pre-existing conditions are treated

Do not sign a subcontract that requires covers you do not have. Either buy the cover, renegotiate the clause, or decline the job.

Related: [Keeping Compliance Documents Current](/lessons/updates). This site does not sell insurance. Pack files that include a checklist of certificates to take to site are **Coming Soon**.`,
    duration: "11 min",
    durationMinutes: 11,
    learningOutcomes: [
      "Explain what public liability and income protection each address",
      "Prepare the certificates a principal contractor typically asks for",
      "Know which related policies are not substitutes",
    ],
    tags: ["insurance", "public-liability", "income-protection", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "subcontractor-vs-employee",
    title: "Subcontractor vs Employee",
    description:
      "How the ATO and workplace agencies look at the whole working relationship — and why the label on an invoice is not enough.",
    category: "compliance",
    level: "intermediate",
    content: `## Subcontractor vs Employee

Calling someone a subcontractor does not make them one. If the relationship operates like employment, you can owe superannuation, PAYG withholding, workers compensation, leave, and penalties. This lesson summarises the usual factors. It is not a determination and it is not legal advice. Use the [ATO employee/contractor guidance](https://www.ato.gov.au) and get advice on borderline arrangements.

Sham contracting — presenting an employee as a contractor to avoid entitlements — is unlawful under workplace laws. The cost of getting this wrong is often larger than the labour you thought you saved.

### Why the distinction matters

If a worker is an employee (or a deemed worker under a state scheme), you may have to:

- Pay superannuation at the current Super Guarantee rate on eligible earnings — check the rate
- Withhold PAYG
- Hold workers compensation insurance
- Meet award or agreement conditions, including leave
- Consider payroll tax if you are over the state threshold

Interest and penalties can apply on top. A written "contractor agreement" that does not match the facts will not save the arrangement.

### Factors the ATO commonly considers

There is no single tick-box. The whole relationship matters.

**More like a contractor**

- Has an ABN and invoices per job or milestone
- Provides their own specialised tools and equipment
- Controls how the work is done (you specify the outcome)
- Can delegate or subcontract
- Bears commercial risk (rectifies defects at their own cost)
- Advertises to others and works for multiple clients
- Quotes a job price rather than a weekly wage

**More like an employee**

- You control hours, place, and method in detail
- You supply the tools and materials as a matter of course
- They work only or mainly for you
- They are paid by the hour or day with no genuine job price
- They cannot send someone else in their place
- They wear your uniform and are presented as your staff
- You pay them regularly like wages regardless of output

A person can have an ABN and still be an employee on the facts.

### Superannuation for some contractors

Even when someone is a contractor for some purposes, superannuation may still be payable if they are paid wholly or principally for their labour. That rule catches arrangements people thought were "safe". Read the current ATO page on super for contractors.

### Workers compensation and WHS

State workers compensation schemes sometimes treat certain contractors as workers. WHS duties to workers and others on site exist regardless of the invoice layout. You cannot contract out of providing a safe workplace.

### A safer operating pattern (still get advice)

- Use a written agreement that matches how you will actually work
- Engage businesses that have their own ABN, relevant licence, and public liability
- Pay for a defined scope or milestone
- Do not roster them as if they were on your award
- Do not prohibit other clients unless you have advice that the arrangement is still a genuine contract
- Keep their invoices, licences, and insurance certificates

If you need someone on your hours, in your van, with your tools, every week, they are probably an employee. Hire them as one.

### Fair Work and awards

Awards may apply to employees in your trade. Misclassification can mean underpayment claims as well as tax claims. If you are unsure, use the official tools and then speak to an adviser or employer association.

Related: [ABN, GST, and BAS](/lessons/abn-gst-bas-tradie-tax-basics). A subcontractor agreement file is **Coming Soon** and will not, by itself, convert an employee into a contractor.`,
    duration: "12 min",
    durationMinutes: 12,
    learningOutcomes: [
      "Apply whole-of-relationship factors instead of relying on an ABN",
      "Recognise that superannuation can still apply to some contractors",
      "Structure genuine contracting — or employ the person — with advice on edge cases",
    ],
    tags: ["subcontractor", "employee", "ato", "superannuation", "compliance"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "toolbox-talks-5-minute-templates",
    title: "Toolbox Talks: 5-Minute Templates",
    description:
      "How to run a short, job-specific safety briefing, what to record, and topic starters you can adapt — without treating a talk as a SWMS.",
    category: "safety",
    level: "beginner",
    content: `## Toolbox Talks: 5-Minute Templates

A toolbox talk is a short briefing before work or at the start of a shift. It is not a SWMS. It does not replace high-risk work licences or isolation procedures. It is how you point the crew at today's hazards and confirm they heard them. This is general practice, not a required script under every regulation.

Printed toolbox-talk sheets are **Coming Soon**. Until those files exist, use a dated attendance list and the structure below.

### When to hold one

- Daily on higher-risk or multi-crew sites
- When the task, plant, weather, or crew changes
- When a new person arrives (together with a proper induction)
- After an incident or near miss, focused on what will change

A weekly talk on a quiet, low-risk site is better than no talk. A daily talk that only repeats "work safe" is worse than a two-minute talk about the actual crane lift at 10:00.

### How to run five minutes

1. **One topic** tied to today's work.
2. **Where it is** — point at the edge, the excavation, the live board, the access path.
3. **What we will do** — the control, not a slogan.
4. **Two questions** — "Where is the exclusion zone?" "Who has the isolation permit?"
5. **Names on a sheet** — date, topic, presenter, printed names, signatures or site-accepted equivalent.

Stand where people can hear you. Do not hold the only briefing in a radio-up machine cabin while others start work.

### Topic starters (adapt to the site)

Use one per talk. Delete anything that does not apply.

- **Manual handling** — what is being lifted, team lift or mechanical aid, path clear
- **Work at height** — access system today, edge protection, tool lanyards, weather
- **Electrical** — isolation authority, proving dead, exclusion around switchboards
- **Heat and UV** — shade, water, work-rest pattern, signs of heat illness
- **PPE for today's tasks** — eye, hearing, respiratory, gloves matched to the chemical or cut risk
- **Housekeeping** — leads, offcuts, access for emergency services
- **Hazardous chemicals** — SDS location, decanting, silica dust controls
- **Mobile plant** — spotter, slew radius, reversing, exclusion zones
- **Excavation** — services search, batter or shoring, spoil placement, access/egress
- **Fatigue** — travel hours, second jobs, who to tell if they cannot work safely
- **Other trades** — overhead work, shared scaffolds, changes to access
- **Public interface** — hoarding, debris, after-hours security

If the day's work is high-risk construction work, the SWMS is the document you work to. The toolbox talk can walk the relevant steps of that SWMS. It does not replace it.

### Making it stick

- Ask the crew to name a hazard you have not mentioned
- Use a photo from this site, not a generic poster
- Stop the talk if plant is about to move through the group
- Repeat the talk when the afternoon crew starts

### What to keep

Keep records for the period your WHS system or principal contractor requires. An inspector will often ask for recent talks and inductions together. A stack of unsigned photocopies from last year is weaker than last week's signed sheet that matches the work on site.

### What a talk is not

- A substitute for training someone who cannot do the task
- A way to "cover" missing edge protection with a warning
- A meeting about timesheets or who is on the weekend roster (hold that separately)

Related: [How to Fill Out a SWMS](/lessons/how-to-fill-out-a-swms) and [What Happens When WorkSafe Shows Up](/lessons/what-happens-when-worksafe-shows-up).`,
    duration: "10 min",
    durationMinutes: 10,
    learningOutcomes: [
      "Run a short briefing tied to today's hazards and controls",
      "Record date, topic, presenter, and attendance",
      "Use a talk to support a SWMS, not to replace one",
    ],
    tags: ["toolbox-talks", "safety", "consultation", "records"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
    status: "published",
  },
  {
    id: "what-happens-when-worksafe-shows-up",
    title: "What Happens When WorkSafe Shows Up",
    description:
      "What a WHS inspector can typically ask for, what notices they can issue, and how to keep documents available without treating this as legal representation.",
    category: "compliance",
    level: "advanced",
    content: `## What Happens When WorkSafe Shows Up

Inspectors from the WHS (or OHS) regulator can visit workplaces. Names differ: SafeWork NSW, WorkSafe Victoria, Workplace Health and Safety Queensland, and equivalent bodies in other jurisdictions. This lesson describes a typical visit. Powers, notice types, and review rights are set by the local Act. This is not legal advice and it is not a script for resisting a lawful inspection.

### Why they attend

- Planned inspection programmes (for example a falls or silica campaign)
- A complaint
- A notifiable incident follow-up
- A visit related to a nearby workplace or a principal contractor

You may get little or no notice.

### What to do in the first minutes

- Stay calm. Stop work in the immediate area if they ask, or if it is unsafe to continue around the inspection.
- Ask to see identification.
- Ask what the visit is about, so you can fetch the right people and documents.
- You may have a representative present (health and safety representative, or another person), subject to local rules.
- Do not invent answers. If you do not know, say you will get the person who does.
- Do not hide documents or move people off site to avoid questions. That tends to make the visit worse.

### Documents commonly requested

Have these findable — on site or immediately reachable — when the work they relate to is happening:

- SWMS for any high-risk construction work underway
- Risk assessments or procedures for the tasks in progress
- Induction records for people on site
- Licences and high-risk work licences for the work being done
- Insurance certificates if the site requires them (inspectors may still ask)
- Plant records (logbooks, maintenance, hire dockets)
- Incident and near-miss records
- Training or competency records for the tasks underway
- Asbestos or services information if that work is in progress

If a document is at the office, say so and retrieve it. Do not guess its contents.

### What they can typically do

Subject to the local Act, inspectors may:

- Enter workplaces and inspect work, plant, and documents
- Interview people and take photographs or samples
- Issue an **improvement notice** — fix a stated issue within a stated time
- Issue a **prohibition notice** — stop specified work until a risk is remedied
- Issue infringement notices (on-the-spot penalties) where that scheme exists
- Recommend prosecution for alleged offences

You should receive a copy of notices that are issued. Read the notice: what must change, by when, and how to seek a review. Review rights and time limits are on the notice and the regulator's website.

### Notifiable incidents

If someone is killed, or suffers a serious injury or illness, or a dangerous incident as defined in the local law occurs, there is usually a duty to notify the regulator immediately and not disturb the site except as allowed (to help an injured person, to avoid further harm, or as directed). Confirm the current notifiable list before you need it. Do not wait for this lesson in an emergency — call emergency services first, then notify as required.

### Your rights (typical)

- See the inspector's identification
- Understand the purpose of the visit
- Have a representative present where the law allows
- Receive copies of notices
- Seek an internal or external review of a notice within the stated time
- Get advice from a lawyer or employer association if a notice or investigation is serious

Cooperation is not the same as agreeing that a breach occurred. Answer factually. If you are asked to sign a statement, read it. You can ask for time to get advice on a formal interview.

### How to be prepared without theatre

Keep a site folder (physical or digital) that matches today's work:

- Current signed SWMS
- Today's induction and toolbox records
- Licence copies for people on site
- Current insurance certificates
- Plant and isolation permits in use

The best time to organise that folder is before anyone asks. Related: [Keeping Compliance Documents Current](/lessons/updates) and [Toolbox Talks](/lessons/toolbox-talks-5-minute-templates).

Regulator pages: [Safe Work Australia](https://www.safeworkaustralia.gov.au) for model material, then your state or territory inspectorate for the rules that apply on the site.

Checklist packs for inspections are **Coming Soon**. They will not replace legal advice on a notice or a prosecution.`,
    duration: "12 min",
    durationMinutes: 12,
    learningOutcomes: [
      "Know what documents an inspector commonly asks to see",
      "Recognise improvement and prohibition notices and the need to read review rights",
      "Keep a current site folder instead of reconstructing paperwork during a visit",
    ],
    tags: ["worksafe", "inspection", "compliance", "notices"],
    dateAdded: "2026-07-01",
    lastUpdated: "2026-09-04",
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

export const PUBLISHED_MODULES: Module[] = ALL_MODULES.filter(
  (m) => m.status === "published"
)

export const PUBLISHED_LESSON_COUNT = PUBLISHED_MODULES.length
