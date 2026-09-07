import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import posts from "@/lib/blog"
import { siteConfig } from "@/config/site.config"
import { Disclaimer } from "@/components/disclaimer"

type Section = { heading: string; paragraphs: string[] }

const content: Record<string, Section[]> = {
  "swms-explained-when-you-actually-need-one": [
    {
      heading: "What a SWMS is",
      paragraphs: [
        "A Safe Work Method Statement sets out high-risk construction work, the hazards from that work, and the control measures. It is prepared before that work starts, in consultation with the people who will do it. It is not a general safety poster and it is not legal advice.",
        "The document has to match the site and the method in use. A form written for another address and reprinted without review is not a SWMS for this job. Confirm the current definition with the WHS (or OHS) regulator that covers the site. Safe Work Australia publishes model material; Victoria uses the Occupational Health and Safety framework, which is similar in purpose but not identical in wording.",
      ],
    },
    {
      heading: "When you typically need one",
      paragraphs: [
        "Under the model WHS Regulations, a SWMS is required for high-risk construction work — a defined list, not a judgement about how large the job feels. Categories commonly include a risk of falling more than two metres, demolition, asbestos work, confined spaces, excavations deeper than 1.5 metres, work on or near energised electrical services, and other listed activities. Your regulator publishes the current list.",
        "Job duration is not the test. A short task on a live board can be high-risk construction work. A longer task on level ground may not be. If the work fits a listed category, the SWMS must exist before that work starts and must be available where the work is done. A document left off site is not available.",
      ],
    },
    {
      heading: "If you do not have one",
      paragraphs: [
        "If someone is harmed, the absence of a required SWMS will matter in the investigation. Separately, an inspector who cannot be shown a SWMS for high-risk work underway can issue a notice that stops that work. Either outcome costs more than preparing the document before you start.",
        "WHS laws provide for significant penalties for duty holders. Insurers also look at whether a suitable SWMS existed. This article does not state a current penalty figure — those amounts change and differ by jurisdiction. Read the regulator's enforcement page if you need numbers.",
      ],
    },
    {
      heading: "How to write one the crew can follow",
      paragraphs: [
        "Keep it site-specific and short enough to use. Consult the workers doing the task; they will name hazards a distant author misses. Write controls as actions that can be checked: 'Install guardrails before work within two metres of the open edge,' not 'be careful at height.'",
        "Review the SWMS when the method, plant, crew, or conditions change. A document written for a different site or a previous year is a record of that other job, not a plan for this one.",
        "TradieDocs publishes a longer written lesson on this topic. Template SWMS files are Coming Soon — there is no download on this page.",
      ],
    },
  ],
  "how-to-write-a-quote-that-gets-accepted": [
    {
      heading: "Quote versus estimate",
      paragraphs: [
        "A quote is usually understood as a fixed price for the described scope. An estimate is a considered indication that can change. If materials cost more than a quoted figure, you generally wear the difference unless a variation was agreed. If a client treats an estimate as a cap, and you meant it as an estimate, that mismatch is a dispute. Australian Consumer Law addresses misleading representations — label the document accurately.",
        "Residential building work often requires a written contract in a stated form once a value threshold is crossed. Thresholds and cooling-off rules are set by each state or territory and they change. Confirm them before you rely on a quote alone as the whole contract.",
      ],
    },
    {
      heading: "Itemise the work",
      paragraphs: [
        "Clients typically read the total first, then scan for uncertainty. Line items such as 'supply and install 12 listed LED downlights: $480' answer what the money is for. They also make later variations easier to explain: the original lines show what was included.",
        "A single lump sum with no breakdown invites questions and makes extras harder to separate. Itemise enough that a stranger can see labour, materials, and any provisional sums.",
      ],
    },
    {
      heading: "Scope, exclusions, and extras",
      paragraphs: [
        "State what is included and what is not. Typical exclusions (use only those that apply) include hazardous-material removal, council applications, making good beyond a stated patch, furniture moving, and hidden work not visible at inspection.",
        "Add a variations sentence: extra work is described, priced, and approved in writing before it starts. Certainty about the number is often more useful to a client than a small discount that later becomes an argument.",
      ],
    },
    {
      heading: "Identity, GST, and acceptance",
      paragraphs: [
        "Include your ABN, licence number if required, GST treatment, a validity period, and payment terms. GST registration is mandatory once turnover reaches the ATO's current threshold — look up that figure; do not rely on a remembered number. A quote that is silent on payment leaves the due date to later negotiation.",
        "End with one acceptance action: signed return, email confirmation, or deposit. Quote templates as downloadable files are Coming Soon. The written lesson on this site uses the same structure.",
      ],
    },
  ],
  "invoice-payment-terms-that-dont-piss-off-clients": [
    {
      heading: "Choose terms you can operate on",
      paragraphs: [
        "Australian law does not require you to offer 30-day terms. Many small trade businesses use 7 or 14 days for residential clients, and longer terms only where a head contractor's process requires it. Write the same term on the quote and the invoice.",
        "Deposits and progress payments reduce exposure on longer jobs. State them before work starts. A deposit is a commercial term. If a client will not pay a deposit that was in the quote, that is information to weigh before you order materials.",
      ],
    },
    {
      heading: "Construction payment laws",
      paragraphs: [
        "Each state and territory has security of payment legislation for certain construction work. It can provide a structured way to make progress claims and sets short timeframes for responses. Miss a service or timing rule and that path may not be available. Read the current guide for your jurisdiction before you need it.",
        "Apart from that scheme, terms are a contract matter. Interest or a stated late fee should appear in the terms before acceptance, and should be reasonable. Unfair contract term rules can apply to standard-form contracts. Do not take a client's goods or otherwise 'self-help' in a way that may be unlawful. If a debt is large or contested, get advice.",
      ],
    },
    {
      heading: "Write terms in one sentence",
      paragraphs: [
        "Use a date the other person can apply: 'Due within 14 days of the invoice date.' Avoid 'as discussed' or 'per our agreement' with no date. If you intend a late fee, state it clearly and then apply it consistently.",
        "A client who is never followed up will treat the due date as optional. Keep copies of reminders.",
      ],
    },
    {
      heading: "Invoice contents that get paid",
      paragraphs: [
        "Include business name, ABN, date, a clear description, amount, due date, and payment details. If you are GST-registered, issue a tax invoice that meets current ATO rules. Send it when the milestone is met, not days later. Late invoices are paid late.",
        "Invoice templates are Coming Soon. There is no file download on this page. See the written invoicing lesson for a longer checklist.",
      ],
    },
  ],
  "five-paperwork-habits-for-new-tradies": [
    {
      heading: "Habit one: record the job before you leave",
      paragraphs: [
        "Before you pack up, take a photo of the finished work and note what you did, the hours, the materials, and anything unusual. You will need that record for the invoice, a warranty question, a dispute, or a tax return. Memory of similar rooms fades quickly.",
        "Do it on site. The notes you write at the doorway are more accurate than notes written later from memory.",
      ],
    },
    {
      heading: "Habit two: quote and invoice from one master",
      paragraphs: [
        "Use one quote layout and one invoice layout with your ABN, business name, and GST treatment already filled in. That reduces missing identity details and inconsistent terms.",
        "GST registration is compulsory once turnover reaches the ATO's current threshold — confirm the figure on ato.gov.au. If you are registered, GST collected is not extra profit. Set it aside.",
      ],
    },
    {
      heading: "Habit three: keep receipts the day you get them",
      paragraphs: [
        "The ATO can review prior years. Photograph fuel, materials, tools, registration, and insurance receipts when you receive them and file them digitally. A box of paper that is never sorted is not a reliable system.",
        "For a sole trader, missing records usually mean missing deductions or missing GST credits. This is not tax advice; ask a registered tax agent how to keep records for your situation.",
      ],
    },
    {
      heading: "Habit four: a weekly fifteen-minute review",
      paragraphs: [
        "Once a week, send outstanding invoices, file that week's receipts, list what is overdue, and note the next week's jobs. A short weekly review is easier than reconstructing a month on a Sunday.",
      ],
    },
    {
      heading: "Habit five: one folder per job",
      paragraphs: [
        "Keep the quote, any contract, photos, invoices, and receipts for that job in one folder, with a backup that is not only on a device that lives in a vehicle. When a client asks a warranty question months later, you should be able to open that folder rather than search a camera roll.",
        "These habits are small. They are easier to start in week one than after the first busy quarter. Downloadable form packs are Coming Soon; you do not need them to start a folder and a weekly review.",
      ],
    },
  ],
  "subcontractor-or-employee-what-changes-on-paper": [
    {
      heading: "Why the label is not enough",
      paragraphs: [
        "Extra labour is often engaged as a 'subcontractor' to avoid superannuation, PAYG withholding, and workers compensation. The ATO, Fair Work, and insurers look at how the work actually runs. The word on the invoice is not decisive.",
        "Sham contracting — presenting an employee as a contractor to avoid entitlements — is unlawful. Penalties and back-payments can be severe. This article is general information, not a determination for your arrangement.",
      ],
    },
    {
      heading: "Factors that are usually considered",
      paragraphs: [
        "There is no single test. Typical factors include who controls how, when, and where the work is done; whether the person can work for other clients; who supplies tools and materials; who bears commercial risk (including fixing defects at their own cost); and whether they invoice for a job or are paid like a wage earner.",
        "If a person works only for you, at your direction, on your hours, with your tools, for a regular amount regardless of output, the relationship looks like employment. The ATO publishes an employee/contractor decision tool — use it, then get advice on borderline cases.",
      ],
    },
    {
      heading: "What usually changes on paper",
      paragraphs: [
        "A genuine contractor typically has an ABN, their own public liability insurance, and their own tools. They invoice for a scope or milestone and manage their own tax and leave. There is no guaranteed work next week.",
        "You generally do not withhold tax or pay super on a genuine contractor invoice — but superannuation can still apply if they are paid wholly or principally for their labour. Confirm the current ATO rule. WHS duties to people on your site exist regardless of the invoice. Workers compensation schemes may also treat some contractors as workers.",
      ],
    },
    {
      heading: "How to operate more safely",
      paragraphs: [
        "Use a written agreement that matches the facts: scope, price, payment terms, insurance, and an independent-contractor statement that you actually follow. Pay on time. Do not roster someone as staff while calling them a contractor.",
        "If you need someone on your hours, in your vehicle, with your tools, every week, they are probably an employee. Engage them as one. A subcontractor agreement file is Coming Soon and will not, by itself, convert an employee into a contractor. See the longer written lesson on this site.",
      ],
    },
  ],
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${d} ${months[m - 1]} ${y}`
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.s === slug)
  if (!post) return { title: `Blog | ${siteConfig.name}` }
  return {
    title: `${post.t} | ${siteConfig.name}`,
    description: post.e,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.s === slug)
  if (!post) notFound()

  const body = content[slug] ?? []
  const related = posts.filter((p) => p.s !== slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.d)}
          </span>
          <span>{post.r} read</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
          {post.t}
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed mb-8">{post.e}</p>

        {body.map((section, si) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold mt-10 mb-4 text-white">{section.heading}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-base text-slate-300 leading-relaxed mb-6">
                {p}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-10">
          <Disclaimer variant="full" />
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 mt-10">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Keep reading
          </h2>
          <div className="flex flex-wrap gap-3">
            {related.map((p) => (
              <Link
                key={p.s}
                href={`/blog/${p.s}`}
                className="inline-block rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm text-slate-300 hover:border-orange-500 hover:text-white transition-colors"
              >
                {p.t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
