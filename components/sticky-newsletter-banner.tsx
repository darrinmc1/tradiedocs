"use client"

import { useState, useEffect } from "react"
import { NewsletterForm } from "@/components/newsletter-form"

export function StickyNewsletterBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Show sticky banner after user scrolls past 400px
    const stored = sessionStorage.getItem("newsletter_dismissed")
    if (stored) {
      setDismissed(true)
      return
    }
    const onScroll = () => {
      if (window.scrollY > 400) setVisible(true)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function dismiss() {
    setDismissed(true)
    sessionStorage.setItem("newsletter_dismissed", "1")
  }

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl">
      <div className="relative">
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl leading-none"
        >
          &times;
        </button>
        <NewsletterForm variant="sticky" />
      </div>
    </div>
  )
}
