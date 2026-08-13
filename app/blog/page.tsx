import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import posts from "@/lib/blog"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <section className="border-b border-white/10"><div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-300 mb-3">Blog</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Tradie business tips &amp; updates</h1>
        <p className="text-xl text-slate-400 max-w-2xl mt-4">Practical advice for Australian tradies — compliance, paperwork, and growing your business.</p>
      </div></section>
      <section className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        {posts.length === 0 ? (
          <p className="text-slate-500 text-center py-12">New articles are on the way. Check back soon.</p>
        ) : (
          <div className="space-y-8">{posts.map((p) => (<article key={p.s} className="rounded-xl border border-white/10 bg-slate-900 p-6 hover:border-orange-400/50 transition-all">
            <div className="flex items-center gap-3 text-xs text-slate-400 mb-3"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(p.d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span><span>{p.r}</span></div>
            <h2 className="text-xl font-bold mb-2"><Link href={`/blog/${p.s}`} className="hover:text-orange-300">{p.t}</Link></h2>
            <p className="text-sm text-slate-400 mb-3">{p.e}</p>
            <div className="flex items-center justify-between"><div className="flex gap-2">{p.tg.map((t) => (<span key={t} className="text-xs bg-white/5 text-slate-300 px-2 py-1 rounded">{t}</span>))}</div><Link href={`/blog/${p.s}`} className="text-sm font-semibold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1">Read More <ArrowRight className="h-3 w-3" /></Link></div>
          </article>))}</div>
        )}
      </section>
    </div>
  )
}
