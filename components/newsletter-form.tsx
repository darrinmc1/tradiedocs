"use client"

import { useState } from "react"

export function NewsletterForm({ className = "", variant = "default" }: { className?: string; variant?: "default" | "sticky" | "hero" }) {
  const [email, setEmail] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (honeypot) return // bot trap
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Subscription failed")
      }
      setStatus("success")
      setEmail("")
    } catch (err: unknown) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (variant === "hero") {
    return (
      <div className={`bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-2xl p-8 shadow-lg ${className}`}>
        <div className="flex items-start gap-3 mb-4">
          <span className="text-3xl">🎁</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">Get 3 Free SWMS Templates + Compliance Checklist</h3>
            <p className="text-gray-600 mt-1 text-sm">Join 2,400+ Australian tradies and safety managers who get our weekly compliance tips.</p>
          </div>
        </div>
        <ul className="mb-5 space-y-1">
          {[
            "✅ 3 ready-to-use SWMS templates (excavation, electrical, working at heights)",
            "✅ SafeWork Australia compliance checklist",
            "✅ Weekly WHS updates & practical tips",
          ].map((item) => (
            <li key={item} className="text-sm text-gray-700">{item}</li>
          ))}
        </ul>
        {status === "success" ? (
          <div className="bg-green-100 border border-green-400 text-green-800 rounded-lg px-4 py-3 text-sm font-medium">
            🎉 Check your inbox! Your free templates are on their way.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            {/* honeypot */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-gray-900 font-bold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
            >
              {status === "loading" ? "Sending…" : "Send Me the Templates"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-2 text-red-600 text-xs">{errorMsg}</p>
        )}
        <p className="mt-3 text-xs text-gray-400">No spam. Unsubscribe anytime. We respect your privacy.</p>
      </div>
    )
  }

  if (variant === "sticky") {
    return (
      <div className={`bg-gray-900 text-white ${className}`}>
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm sm:text-base">🎁 Free SWMS Templates + Compliance Checklist</p>
            <p className="text-gray-400 text-xs hidden sm:block">Join 2,400+ safety professionals — get 3 templates free when you subscribe.</p>
          </div>
          {status === "success" ? (
            <p className="text-green-400 text-sm font-medium whitespace-nowrap">✅ Check your inbox!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 sm:w-52 rounded border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-gray-900 font-bold px-4 py-2 rounded text-sm transition-colors whitespace-nowrap"
              >
                {status === "loading" ? "…" : "Get Free Templates"}
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }

  // default variant
  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm ${className}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-1">🎁 Get 3 Free SWMS Templates</h3>
      <p className="text-gray-600 text-sm mb-4">Plus a SafeWork Australia compliance checklist — free when you subscribe to our weekly WHS tips.</p>
      {status === "success" ? (
        <div className="bg-green-50 border border-green-300 text-green-800 rounded-lg px-4 py-3 text-sm">
          🎉 Templates sent! Check your inbox.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-gray-900 font-bold px-4 py-2.5 rounded-lg text-sm transition-colors"
          >
            {status === "loading" ? "Sending…" : "Send Me the Free Templates"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-2 text-red-600 text-xs">{errorMsg}</p>
      )}
      <p className="mt-3 text-xs text-gray-400">No spam. Unsubscribe anytime.</p>
    </div>
  )
}
