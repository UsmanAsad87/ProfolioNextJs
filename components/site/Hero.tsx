"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Reveal, FadeUp } from "./Reveal"
import { UPWORK, RESUME, DIGIFYR } from "./links"

const stats = [
  { v: "40+", l: "apps shipped" },
  { v: "3", l: "AI agents live in prod" },
  { v: "100%", l: "Job Success · Top Rated" },
  { v: "8+", l: "years engineering" },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-14 pt-24 md:px-10">
      <div aria-hidden className="grid-field absolute inset-0" />
      <div
        aria-hidden
        className="absolute -right-32 top-[-10%] h-[75vh] w-[75vh] rounded-full opacity-30 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,.5), transparent 65%)" }}
      />

      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <FadeUp>
            <p className="label mb-7">
              Usman Asad — Senior AI Integration Engineer · Co-Founder & Technical Lead @{" "}
              <a href={DIGIFYR} target="_blank" rel="noopener noreferrer" className="text-violet-brand hover:underline">
                DigifyR
              </a>
            </p>
          </FadeUp>

          <h1 className="font-grotesk font-bold leading-[0.98] tracking-[-0.03em] text-ink text-[clamp(2.9rem,7vw,6.2rem)]">
            <Reveal>I make AI work</Reveal>
            <Reveal delay={0.08}>
              <em className="font-serif italic font-normal violet-text-gradient pr-3">in production.</em>
            </Reveal>
          </h1>

          <FadeUp delay={0.15} className="mt-8 max-w-xl">
            <p className="text-[16.5px] leading-relaxed text-sub">
              AI tools will build 80% of your app in a weekend — the other 20% is my job. I put
              agents, self-hosted LLMs and vision into real products, and I finish what AI tools
              started: real auth, real backends, through App Store and Play review.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={UPWORK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-md px-6 py-3.5 font-grotesk text-sm font-semibold text-ground"
              >
                <span className="absolute inset-0 violet-gradient transition-transform duration-500 group-hover:scale-[1.05]" />
                <span className="relative">Hire me on Upwork</span>
              </a>
              <a
                href="#work"
                className="rounded-md border border-line px-6 py-3.5 font-grotesk text-sm font-semibold text-ink transition-colors duration-300 hover:border-[rgba(203,172,249,.5)]"
              >
                See the work
              </a>
              <a
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-line px-6 py-3.5 font-grotesk text-sm font-semibold text-ink transition-colors duration-300 hover:border-[rgba(203,172,249,.5)]"
              >
                Résumé ↓
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-x-10 gap-y-5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l}>
                  <dt className="font-grotesk text-2xl font-bold text-ink">{s.v}</dt>
                  <dd className="label mt-1 normal-case tracking-normal">{s.l}</dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto hidden w-full max-w-[420px] lg:block"
        >
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-0 top-16 rounded-[28px] border border-line"
            style={{ background: "linear-gradient(180deg, rgba(139,92,246,.16), rgba(11,16,40,.9))" }}
          />
          <div
            aria-hidden
            className="absolute inset-x-8 bottom-0 top-16 rounded-[28px] opacity-40 blur-2xl"
            style={{ background: "radial-gradient(60% 50% at 50% 20%, rgba(203,172,249,.35), transparent)" }}
          />
          <Image
            src="/usman.png"
            alt="Usman Asad"
            width={1200}
            height={1524}
            priority
            className="relative z-10 w-full drop-shadow-[0_24px_60px_rgba(0,0,0,.55)]"
          />
          <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-[rgba(0,3,25,.8)] px-4 py-2 font-grotesk text-xs font-semibold tracking-wide text-sub backdrop-blur-sm">
            Islamabad, PK · working worldwide · UTC+5
          </div>
        </motion.div>
      </div>
    </section>
  )
}
