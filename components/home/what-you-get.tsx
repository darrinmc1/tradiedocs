"use client"

import Link from "next/link"
import { Reveal } from "@/components/home/reveal"

const CARDS = [
  {
    kicker: "01",
    title: "SWMS Template Pack — 20 trades.",
    body: "Pre-filled Safe Work Method Statements for electrical, plumbing, carpentry, roofing, concreting, and 15 more. Editable Word. Starting-point templates — confirm current WHS rules with your state regulator.",
    href: "/products/swms-pack",
    cta: "Open the SWMS pack",
  },
  {
    kicker: "02",
    title: "Quote and invoice pack when you need it.",
    body: "Professional quote layout, ATO-oriented tax invoice, variation template, and payment-reminder scripts. Priced on the products page. Checkout is not live — join the notify list there if you want an email.",
    href: "/products/quote-invoice-pack",
    cta: "See the quote pack",
  },
  {
    kicker: "03",
    title: "Published written guides.",
    body: "SWMS basics, quoting, invoicing, licensing, and site paperwork. Open them without an account.",
    href: "/lessons",
    cta: "Read the free guides",
  },
] as const

export function WhatYouGet() {
  return (
    <section className="border-b border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <p className="text-sm font-medium text-orange-300">What you get</p>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-bold tracking-tight text-white">
            SWMS pack, quote pack, and the written guides.
          </h2>
        </Reveal>
      </div>

      <div className="stack-pin pb-8 md:pb-16">
        {CARDS.map((card, index) => (
          <div key={card.kicker} className="stack-slot">
            <article
              className="stack-card mx-auto w-full max-w-3xl px-6"
              style={{ top: `calc(5.5rem + ${index * 0.75}rem)`, zIndex: index + 1 }}
            >
              <div className="rounded-xl border border-white/10 bg-[#12141A] p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] md:p-8">
                <p className="text-xs tabular-nums text-orange-300">{card.kicker}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-400 md:text-base">
                  {card.body}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex text-sm font-medium text-orange-400 hover:text-orange-300"
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
