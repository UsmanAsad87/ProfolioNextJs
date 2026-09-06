"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { UPWORK } from "./links"

const links = [
  { href: "#work", label: "Work" },
  { href: "#how", label: "How I help" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener("scroll", on, { passive: true })
    return () => window.removeEventListener("scroll", on)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-[rgba(0,3,25,0.72)] border-b border-line" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 md:px-10">
        <Link href="/" className="flex items-center gap-2" aria-label="Usman Asad">
          <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden>
            <rect width="64" height="64" rx="14" fill="#0B1028" />
            <path
              d="M18 14v22c0 7.7 6.3 14 14 14s14-6.3 14-14V14h-9v22a5 5 0 0 1-10 0V14h-9Z"
              fill="#CBACF9"
            />
          </svg>
          <span className="font-grotesk text-[16px] font-bold tracking-tight text-ink">
            usman<span className="text-violet-brand">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] font-medium text-sub transition-colors duration-300 hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={UPWORK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-md px-4 py-2 font-grotesk text-[13px] font-semibold text-ground"
          >
            <span className="absolute inset-0 violet-gradient transition-transform duration-500 group-hover:scale-[1.06]" />
            <span className="relative">Hire me on Upwork</span>
          </a>
        </div>

        <button className="md:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ground px-5 py-6 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 font-grotesk text-2xl text-ink">
              {l.label}
            </a>
          ))}
          <a href={UPWORK} target="_blank" rel="noopener noreferrer" className="mt-3 block py-3 font-grotesk text-2xl text-violet-brand">
            Hire me on Upwork ↗
          </a>
        </div>
      )}
    </header>
  )
}
