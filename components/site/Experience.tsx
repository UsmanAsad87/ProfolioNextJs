"use client"

import { workExperience } from "@/data"
import { Reveal, FadeUp } from "./Reveal"

export default function Experience() {
  return (
    <section id="experience" className="rule-t px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <p className="label mb-4">03 / Experience</p>
        <h2 className="mb-14 font-grotesk text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-ink">
          <Reveal>Where the miles come from.</Reveal>
        </h2>

        <div className="space-y-px overflow-hidden rounded-lg border border-line bg-[var(--line)]">
          {workExperience.map((job, i) => (
            <FadeUp key={job.id} delay={i * 0.05}>
              <article className="grid gap-6 bg-ground p-8 transition-colors duration-500 hover:bg-surface md:grid-cols-[280px_1fr] md:p-10">
                <div>
                  <h3 className="font-grotesk text-xl font-bold text-ink">{job.title}</h3>
                  <p className="mt-1 text-sm font-medium text-violet-brand">{job.company}</p>
                  <p className="label mt-2 normal-case tracking-normal">{job.time}</p>
                  <p className="mt-4 text-xs leading-relaxed text-sub opacity-80">{job.techStack}</p>
                </div>
                <ul className="space-y-3">
                  {job.desc.map((d) => (
                    <li key={d} className="flex gap-3 text-[14.5px] leading-relaxed text-sub">
                      <span aria-hidden className="mt-[9px] h-1 w-4 shrink-0 rounded-full bg-[rgba(203,172,249,.6)]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
