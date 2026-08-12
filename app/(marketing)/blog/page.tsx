import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import posts from "@/lib/blog"
import { siteConfig } from "@/config/site.config"

export const metadata = {
  title: `Blog | ${siteConfig.name}`,
  description:
    "Straight-talking guides on quotes, compliance, and getting paid for Australian tradies.",
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${d} ${months[m - 1]} ${y}`
}

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className={`${siteConfig.theme.heroGradient} py-16`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="gradient-text-cyan">Blog</span>
          </h1>
          <p className="text-lg text-slate-400">
            Straight-talking guides on quotes, compliance, and getting paid.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-4">
          {posts.map((post) => (
            <article key={post.s} className="glass-card p-6 rounded-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Link
                    href={`/blog/${post.s}`}
                    className="text-lg font-bold text-white hover:text-orange-400 transition-colors"
                  >
                    {post.t}
                  </Link>
                  <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.d)}
                    </span>
                    <span>{post.r} read</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{post.e}</p>
                </div>
                <Link
                  href={`/blog/${post.s}`}
                  className="inline-flex items-center gap-1.5 text-sm text-orange-400 hover:text-orange-300 whitespace-nowrap shrink-0 mt-1"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
