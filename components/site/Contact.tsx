"use client"

import { Reveal, FadeUp } from "./Reveal"
import { EMAIL, WHATSAPP, UPWORK, DIGIFYR } from "./links"

export default function Contact() {
  return (
    <section id="contact" className="rule-t px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1320px] text-center">
        <p className="label mb-6">05 / Contact</p>
        <h2 className="mx-auto max-w-4xl font-grotesk text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.98] tracking-[-0.03em] text-ink">
          <Reveal>Tell me what you're</Reveal>
          <Reveal delay={0.08}>
            <em className="font-serif italic font-normal violet-text-gradient">trying to ship.</em>
          </Reveal>
        </h2>
        <FadeUp delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-sub">
            Send the idea, the repo, or the job post — within 24 hours you'll have a one-page plan
            and a price, free. Prefer escrow? Hire me through Upwork. Need a full team? That's{" "}
            <a href={DIGIFYR} target="_blank" rel="noopener noreferrer" className="text-violet-brand hover:underline">
              DigifyR
            </a>
            .
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={UPWORK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-md px-8 py-4 font-grotesk text-sm font-semibold text-ground"
            >
              <span className="absolute inset-0 violet-gradient transition-transform duration-500 group-hover:scale-[1.05]" />
              <span className="relative">Hire me on Upwork</span>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line px-8 py-4 font-grotesk text-sm font-semibold text-ink transition-colors duration-300 hover:border-[rgba(203,172,249,.5)]"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent("Project inquiry — Usman")}`}
              className="rounded-md border border-line px-8 py-4 font-grotesk text-sm font-semibold text-ink transition-colors duration-300 hover:border-[rgba(203,172,249,.5)]"
            >
              {EMAIL}
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
