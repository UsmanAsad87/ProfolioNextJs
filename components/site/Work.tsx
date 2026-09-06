"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { featuredWork, moreWork } from "@/lib/work"
import { Reveal, FadeUp } from "./Reveal"
import { DIGIFYR } from "./links"

const ease = [0.22, 1, 0.36, 1] as const

export default function Work() {
  return (
    <section id="work" className="rule-t px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="label mb-4">01 / Selected work</p>
            <h2 className="font-grotesk text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-ink">
              <Reveal>Proof, not promises.</Reveal>
            </h2>
          </div>
          <a
            href={DIGIFYR}
            target="_blank"
            rel="noopener noreferrer"
            className="label hidden shrink-0 transition-colors hover:text-ink md:block"
          >
            full case studies on digifyr.com ↗
          </a>
        </div>

        <div className="grid gap-x-7 gap-y-14 md:grid-cols-2">
          {featuredWork.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.85, ease, delay: (i % 2) * 0.08 }}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative overflow-hidden rounded-lg border border-line bg-surface">
                  <Image
                    src={p.img || "/placeholder.svg"}
                    alt={p.name}
                    width={1600}
                    height={1200}
                    className={`work-img w-full object-cover ${i === 0 ? "aspect-[21/10]" : "aspect-[4/3]"}`}
                    sizes={i === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,3,25,0.55)] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {p.ai && (
                    <span className="absolute left-4 top-4 rounded-md border border-[rgba(203,172,249,.45)] bg-[rgba(0,3,25,.75)] px-2.5 py-1 font-grotesk text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-brand backdrop-blur-sm">
                      AI in production
                    </span>
                  )}
                  <span className="absolute bottom-4 right-4 translate-y-2 rounded-md bg-ink px-3.5 py-2 font-grotesk text-xs font-semibold text-ground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    View case ↗
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-grotesk text-xl font-bold text-ink transition-colors duration-300 group-hover:text-violet-brand">
                    {p.name}
                  </h3>
                  <span className="label shrink-0">{p.tag}</span>
                </div>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-sub">{p.headline}</p>
              </a>
            </motion.div>
          ))}
        </div>

        <FadeUp className="mt-16">
          <p className="label mb-5">More shipped products</p>
          <div className="border-t border-line">
            {moreWork.map((p) => (
              <a
                key={p.slug}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line py-4 transition-colors duration-300 hover:bg-surface md:grid-cols-[220px_1fr_auto] md:px-4"
              >
                <span className="font-grotesk text-base font-semibold text-ink transition-colors duration-300 group-hover:text-violet-brand">
                  {p.name}
                </span>
                <span className="hidden truncate text-sm text-sub md:block">{p.headline}</span>
                <span className="label">{p.tag}</span>
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
