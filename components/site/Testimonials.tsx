"use client"

import Image from "next/image"
import { testimonials } from "@/data"
import { Reveal, FadeUp } from "./Reveal"

export default function Testimonials() {
  return (
    <section id="testimonials" className="rule-t px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <p className="label mb-4">04 / Testimonials</p>
        <h2 className="mb-14 font-grotesk text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
          <Reveal>Clients say it</Reveal>
          <Reveal delay={0.08}>
            <em className="font-serif italic font-normal text-violet-brand">better than I can.</em>
          </Reveal>
        </h2>

        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={(i % 3) * 0.06}>
              <figure className="break-inside-avoid rounded-lg border border-line bg-surface p-7">
                <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden className="mb-4 opacity-70">
                  <path d="M0 20V10.6C0 4.2 3.8.6 10.2 0l1 2.8C6.8 3.8 5 6 5 9h6v11H0Zm15 0V10.6C15 4.2 18.8.6 25.2 0l.8 2.8C21.8 3.8 20 6 20 9h6v11H15Z" fill="#CBACF9" />
                </svg>
                <blockquote className="text-[14.5px] leading-relaxed text-sub">{t.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <Image src={t.img || "/placeholder.svg"} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="font-grotesk text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-sub">{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
