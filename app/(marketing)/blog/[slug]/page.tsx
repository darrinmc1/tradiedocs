import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import posts from "@/lib/blog"
import HumorBreak from "@/components/humor-break"
import { siteConfig } from "@/config/site.config"

type Section = { heading: string; paragraphs: string[] }

const content: Record<string, Section[]> = {
  "swms-explained-when-you-actually-need-one": [
    {
      heading: "What a SWMS actually is",
      paragraphs: [
        "A Safe Work Method Statement is a document that sets out how you'll do a job safely: the high-risk tasks, the hazards they carry, and the controls you'll put in place. That's the whole brief. It is not a business plan, a novel, or an entry in a longest-sentence competition. If it reads like a legal textbook, you've missed the point.",
        "The operative word is 'safe' — and 'specific'. A SWMS has to be developed for the actual site and the actual work, in consultation with the people doing it. A generic one you downloaded from a mate's hard drive in 2019 and have been re-printing ever since isn't a SWMS; it's a liability with a letterhead. Inspectors can tell the difference from across the site, and so can a court, if it ever comes to that.",
      ],
    },
    {
      heading: "When you actually need one",
      paragraphs: [
        "Under the model WHS Regulations — adopted by every state and territory with minor local variations — you need a SWMS for high-risk construction work. That's a defined list, not a vibe: working at height where a person could fall two metres or more, demolition, asbestos removal, confined spaces, trenches deeper than 1.5 metres, work near energised electrical services, and a dozen or so other categories. Your state's regulator publishes the full list, usually as Schedule 3 of the regulations.",
        "Here's the bit that catches tradies out: it's not about the size of the job. A two-hour fix on a live switchboard can trigger it; a week of flat-ground concreting might not. If the work fits a high-risk category, the SWMS has to exist before anyone picks up a tool — and it has to be on site and actually followed. A SWMS folded into a sandwich in the ute is a sandwich, not a compliance document.",
      ],
    },
    {
      heading: "What happens if you skip it",
      paragraphs: [
        "Worst case, someone gets hurt and the absence of a SWMS becomes a very loud part of the investigation. Best case, an inspector asks to see your SWMS for the roof work, you can't produce one, and you get a prohibition notice that stops the job on the spot. Either way the job stops — and stopping costs more than the twenty minutes the document would have taken.",
        "Penalties under WHS laws run to hundreds of thousands of dollars for companies and five figures for individuals, before you get anywhere near civil claims. Your insurer also gets deeply interested in whether a compliant SWMS existed when something goes wrong. Denied claims have been built on thinner gaps than that.",
      ],
    },
    {
      heading: "How to write one your crew will actually use",
      paragraphs: [
        "Keep it site-specific and short. A SWMS that reads like a phone book gets ignored; one page of the actual risks on this actual job gets followed. The law requires you to consult the workers doing the job, and they'll point out hazards you've stopped seeing because you've done this task four hundred times.",
        "Write controls as actions, not vibes. 'Be careful at height' is not a control; 'guardrail and harness with the anchor point inspected before work starts' is. If a control can't be checked, it can't be enforced — and if it can't be enforced, it's just a paragraph with delusions of grandeur.",
        "Review the thing whenever something changes: new task, new plant, new crew, new weather. A SWMS written in 2021 for a different site is a historical document, and nobody at the inquiry will be impressed by its archival value.",
      ],
    },
  ],
  "how-to-write-a-quote-that-gets-accepted": [
    {
      heading: "Quote vs estimate: know which one you're sending",
      paragraphs: [
        "A quote is a fixed price for doing the work. An estimate is a considered guess. The difference matters because the law treats them differently: quote the job at $4,500 and the materials come in at $5,800, and you generally wear the difference. Estimate it, and the customer knows the number can move. Letting a customer believe an estimate is a quote is exactly the kind of thing the Australian Consumer Law takes a dim view of.",
        "For residential building work, most states require a written contract once the job crosses certain value thresholds, often with cooling-off periods attached. That's not the regulator being petty; it's protection for both of you. A signed quote that clearly sets out the price and the scope is the cheapest contract you'll ever buy, and it beats a handshake and a hope in every tribunal in the country.",
      ],
    },
    {
      heading: "Itemise like your invoice depends on it",
      paragraphs: [
        "Customers don't read quotes the way you write them. They read the total, then they scan for anything that looks like a trap. Line items — 'supply and install 12 LED downlights: $480' — disarm most of that suspicion before it starts. It also means that when a customer asks what a line is for, you have an answer that isn't 'stuff'.",
        "Itemising protects you too. When the job balloons because the ceiling was worse than it looked, your original line items are the evidence that the extra work was genuinely extra, and genuinely extra costs genuinely more. Quotes that win are quotes that make the next conversation easy — and the next conversation is usually about paying you.",
      ],
    },
    {
      heading: "Scope, exclusions, and the 'while you're here' ambush",
      paragraphs: [
        "The most expensive phrase in trade work is 'while you're here'. Your quote needs a scope section that says what's included, and an exclusions section that says what isn't: rubbish removal, council permits, moving furniture, the mystery wiring behind the mystery wall. Written down, this looks professional. Left unsaid, it's an argument waiting for an invoice.",
        "Add a line about variations: extra work gets agreed in writing, before it starts, with a price attached. Customers respect a tradie who's clear on this, because it means the number on the quote is the number they'll actually pay. That certainty is worth more to most people than the $200 you shaved off to win the job — and then had to fight about later.",
      ],
    },
    {
      heading: "The boring details that win the job",
      paragraphs: [
        "Include the trust details: your ABN, whether the price includes GST (it should if you're registered — and if your turnover is over $75,000, registration isn't optional), how long the quote is valid (30 days is standard; materials prices move), and your payment terms. A quote that's silent on payment is a quote that quietly invites a slow payer.",
        "Finish with a plain instruction for accepting: sign and reply to this email, or pay the deposit, and we'll lock you in. Remove the friction and the yes comes faster. A quote that leaves the customer to figure out the next step is a quote that gets filed under 'later' — and later is where jobs go to die.",
      ],
    },
  ],
  "invoice-payment-terms-that-dont-piss-off-clients": [
    {
      heading: "Pick terms you can actually survive on",
      paragraphs: [
        "'Net 30' is a grand old tradition that started somewhere in the nineteenth century and has been wrecking tradie cash flow ever since. Nothing in Australian law requires you to offer 30 days. For most small trade businesses, 7 or 14 days is defensible, normal, and considerably easier to pay a supplier with.",
        "Deposits aren't a sign of distrust; they're a sign you've done this before. Ten to twenty percent to book the job, or a materials deposit on big jobs, is standard practice and it filters out the time-wasters at a very cheap price. If a customer recoils at a deposit, that's information about the customer — and it cost you nothing to learn it.",
      ],
    },
    {
      heading: "What the law actually backs you up on",
      paragraphs: [
        "If you do construction work, every state and territory has a Building and Construction Industry Security of Payment Act, and it's the closest thing a tradie has to a statutory superpower. It gives you a right to make progress claims and sets tight timeframes for the other side to respond and pay — usually around ten business days, depending on your state. Miss the paperwork deadlines, though, and the superpower expires, so treat claim dates like job dates.",
        "Beyond that, your terms are a contract matter. You can charge interest on overdue amounts if your terms say so, and you can chase unpaid invoices through the courts or a tribunal. What you can't do is sell the customer's tools on Gumtree to settle the debt. That's a different offence entirely, and the magistrate will not be charmed by your initiative.",
      ],
    },
    {
      heading: "Write terms a sleep-deprived admin can understand",
      paragraphs: [
        "Payment terms belong on the invoice, in plain words: 'Due within 14 days of the invoice date.' Not 'per our agreement'. Not 'as discussed'. Not a wistful reference to an email from March. If your terms need a decoder ring, they're not terms; they're trivia.",
        "State what happens if they're late: 'A late fee of X applies after the due date.' Keep it reasonable — if you're a small business dealing with a big one, unfair contract term protections can strike down one-sided terms — and then actually enforce it. The customer who is never chased learns, very quickly, that your terms are decorative.",
      ],
    },
    {
      heading: "The invoice details that make payment instant",
      paragraphs: [
        "The basics: your ABN, your business name, the date, a clear description of the work, the amount, the due date, and how they can pay — bank transfer details, and possibly card or PayID, which is not just for your nephew's online gaming. If you're GST-registered, show GST as a line item and issue a proper tax invoice; the customer's bookkeeper will quietly love you for it.",
        "Send the invoice the day the job finishes, not the day you remember — which is usually the day before the next job starts. Invoices sent late get paid late, full stop. A clean, boring, instantly understandable invoice is the most effective cash-flow tool you own, and it costs nothing but the two minutes it takes to send it.",
      ],
    },
  ],
  "five-paperwork-habits-for-new-tradies": [
    {
      heading: "Habit one: log the job before you knock off",
      paragraphs: [
        "At the end of every job, take sixty seconds: a photo of the finished work, a note of what you did, the hours, the materials, and anything unusual. Future-you will need all of it for the invoice, the warranty, the dispute, and the tax return. Future-you is a forgetful legend who will not thank you for leaving them to reconstruct February from a blur of similar ceilings.",
        "Do it before you pack up, not when you get home. The version of you that's still on site remembers things; the version that's had a shower and a beer remembers that there was definitely a job, probably.",
      ],
    },
    {
      heading: "Habit two: quote and invoice from templates",
      paragraphs: [
        "Every quote and every invoice should come from the same template, with your ABN, business name, and GST treatment already on it. It's faster, it looks professional, and it means you will never again send a customer a document that still says 'INSERT BUSINESS NAME HERE' — a mistake every tradie makes exactly once, usually on their biggest job of the year.",
        "On GST: if your turnover is $75,000 or more, registration is compulsory and your invoices must show GST. Under that, it's your call. If you are registered, the GST you collect is not your money — park it somewhere, because the ATO will come for it, and 'I spent it on a new socket set' is not an accepted payment method.",
      ],
    },
    {
      heading: "Habit three: receipts are your superpower",
      paragraphs: [
        "The ATO can go back five years, and in an audit the winner is whoever has the receipts. Snap every one the day you get it: fuel, materials, tools, trade registration, insurance. File them in a folder, not a shoebox — a shoebox is a system, technically, but it's a system that fails at tax time every single year.",
        "If you're a sole trader, your business expenses come off your income, and every receipt you lose is tax you pay that you didn't have to. Think of the receipt as a tiny discount voucher from the ATO. They'd hate that framing, which makes it even better.",
      ],
    },
    {
      heading: "Habit four: the Friday fifteen",
      paragraphs: [
        "Block fifteen minutes on Friday afternoon: send the invoices you've been meaning to send, file this week's receipts, check what's overdue, and note next week's jobs. Fifteen minutes a week beats the four-hour Sunday panic every time, and it keeps your cash flow from becoming a mystery novel with no satisfying ending.",
      ],
    },
    {
      heading: "Habit five: one folder per job",
      paragraphs: [
        "One folder per job: quote, contract, photos, invoices, receipts. Digital, obviously, with a cloud backup, because utes get broken into and laptops get dropped off roofs with depressing regularity. When a customer calls in six months with a warranty question, you'll find the answer in one click instead of one archaeological dig.",
        "None of these habits takes more than a minute a day. In week one they feel optional. By week fifty they're the difference between a business and a very stressful hobby — and they're a lot easier to build now, while you're keen, than later, when you're busy.",
      ],
    },
  ],
  "subcontractor-or-employee-what-changes-on-paper": [
    {
      heading: "Why the label matters (and who's watching)",
      paragraphs: [
        "Every trade business eventually needs extra hands, and the cheapest way to get them looks like hiring a subcontractor: no super, no PAYG withholding, no workers' comp headache. The ATO, Fair Work, and your insurer have all heard this plan, and they all have forms for it. The label you use matters far less than how the work actually runs day to day.",
        "Sham contracting — calling an employee a subcontractor to dodge your obligations — is illegal under the Fair Work Act, and the penalties are the kind of number that ends a small business. This is one area where it's much cheaper to get it right on purpose than by luck.",
      ],
    },
    {
      heading: "The test, minus the jargon",
      paragraphs: [
        "There's no single test, but the factors are stable: who controls how, when, and where the work is done; whether the person can work for other clients; whether they supply their own tools and materials; whether they take commercial risk, like fixing a stuff-up at their own cost; and whether they invoice you like a business rather than being paid like a wage earner.",
        "The classic tell: if the person works only for you, at your direction, on your schedule, with your tools, and gets a set amount every week regardless of the work, that's an employee wearing a subcontractor costume. The costume is not a defence. The ATO has a free online decision tool that will calmly explain all of this to you in about ten minutes.",
      ],
    },
    {
      heading: "What changes on paper for each side",
      paragraphs: [
        "For the genuine subcontractor: their own ABN, their own public liability insurance, usually their own tools. They invoice you for the work — with GST if they're registered — and they sort out their own super, tax, and leave. No leave is the trade-off: no annual leave, no sick leave, and no guarantee of work next week. That's the deal they've signed up for.",
        "For you: you don't withhold tax or pay super on their invoices, and they're not on your workers' compensation for their own business activities. But you still owe WHS duties to anyone on your site, subcontractor or not. And if you provide the tools, set the hours, and quietly redo their work at your own cost, the arrangement drifts back toward employment whether the paperwork agrees or not.",
      ],
    },
    {
      heading: "How to run it so it survives contact with the law",
      paragraphs: [
        "If you're engaging subcontractors, do it properly: a written agreement covering scope, price, payment terms, insurance requirements, and a clear statement that they're engaged as an independent contractor. Treat them like a business, because that's exactly what the law will call them if it ever looks.",
        "And remember the practical version: a good subcontractor is a business partner, not a cheaper employee. Pay them on time, give them clear scope, and don't re-litigate the price after the job's done. The bloke who does good work and gets paid properly will answer the phone at 6am when your regular crew is stuck on another site — and that's worth more than any classification loophole.",
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
            {si === 1 && <HumorBreak tag="general" />}
          </section>
        ))}

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
