"use client"

import { Reveal, FadeUp } from "./Reveal"

const lanes = [
  {
    n: "01",
    title: "AI into your product",
    body: "Chat, RAG, agents, vision — added to software you already ship, with evals, cost caps and fallbacks so it survives real users, not just the demo.",
    proof: "3 agents live on a healthcare platform · vision triage on Mechanic Connect",
  },
  {
    n: "02",
    title: "Finish what AI tools started",
    body: "Your Lovable, Bolt, Cursor or FlutterFlow build is 80% done and stuck. I audit auth and security, build the real backend, and get it through store review.",
    proof: "40+ store releases · audits in 3–5 days",
  },
  {
    n: "03",
    title: "AI-first MVPs",
    body: "New products with AI at the core — architecture before pixels, shipped to the stores or the web, then maintained for years.",
    proof: "NafaPay: 1,400+ users · Homat: 14 major versions",
  },
  {
    n: "04",
    title: "Backends & cloud for AI",
    body: "FastAPI and .NET APIs, self-hosted LLMs, Kubernetes, GitOps — plus the security discipline of building an AI-DLP product.",
    proof: "ZeusLock: self-hosted LLM on K8s, SaaS + air-gapped",
  },
]

export default function Lanes() {
  return (
    <section id="how" className="rule-t px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <p className="label mb-4">02 / How I help</p>
        <h2 className="mb-14 font-grotesk text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-ink">
          <Reveal>
            Four lanes, <em className="font-serif italic font-normal text-violet-brand">one engineer.</em>
          </Reveal>
        </h2>

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-[var(--line)] md:grid-cols-2">
          {lanes.map((l, i) => (
            <FadeUp key={l.n} delay={i * 0.06}>
              <div className="h-full bg-ground p-8 transition-colors duration-500 hover:bg-surface md:p-10">
                <span className="font-grotesk text-sm font-medium text-violet-brand">{l.n}</span>
                <h3 className="mb-4 mt-5 font-grotesk text-2xl font-bold tracking-tight text-ink">{l.title}</h3>
                <p className="text-[15px] leading-relaxed text-sub">{l.body}</p>
                <p className="mt-6 border-t border-line pt-4 font-grotesk text-xs font-medium uppercase tracking-[0.12em] text-sub">
                  <span className="text-violet-brand">Receipts:</span> {l.proof}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
