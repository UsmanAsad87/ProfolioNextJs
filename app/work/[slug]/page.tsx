import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects, bySlug } from "@/lib/projects"
import Nav from "@/components/site/Nav"
import Footer from "@/components/site/Footer"
import { Reveal, FadeUp } from "@/components/site/Reveal"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = bySlug(slug)
  if (!p) return {}
  return {
    title: `${p.name} — ${p.tag}`,
    description: p.summary,
    openGraph: { title: `${p.name} — Usman Asad`, description: p.headline, images: p.images[0] ? [p.images[0]] : [] },
  }
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = bySlug(slug)
  if (!p) notFound()

  const idx = projects.findIndex((x) => x.slug === p.slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <Nav />
      <main className="px-5 pt-28 md:px-10 md:pt-36">
        <article className="mx-auto max-w-[1200px]">
          <div className="mb-10">
            <FadeUp>
              <p className="label mb-5">
                <Link href="/#work" className="transition-colors hover:text-ink">
                  ← Work
                </Link>
                <span className="mx-3 text-violet-brand">/</span>
                {p.tag} · {p.year}
              </p>
            </FadeUp>
            <h1 className="font-grotesk text-[clamp(2.4rem,5.5vw,4.6rem)] font-bold leading-none tracking-[-0.03em] text-ink">
              <Reveal>{p.name}</Reveal>
            </h1>
            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-3xl font-grotesk text-xl font-medium leading-snug text-ink md:text-2xl">
                {p.headline}
              </p>
              <p className="mt-4 max-w-3xl text-[15.5px] leading-relaxed text-sub">{p.summary}</p>
            </FadeUp>
          </div>

          <FadeUp>
            <div className="mb-12 grid gap-px overflow-hidden rounded-lg border border-line bg-[var(--line)] sm:grid-cols-3">
              {p.facts.map((f) => (
                <div key={f.label} className="bg-ground p-6">
                  <p className="font-grotesk text-2xl font-bold text-violet-brand">{f.value}</p>
                  <p className="label mt-1 normal-case tracking-normal">{f.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          {p.ai && (
            <FadeUp>
              <div className="mb-12 rounded-lg border border-[rgba(203,172,249,.35)] bg-[rgba(139,92,246,.08)] p-6">
                <p className="label mb-2 text-violet-brand">AI in this product</p>
                <p className="text-[15px] leading-relaxed text-ink">{p.ai}</p>
              </div>
            </FadeUp>
          )}

          <FadeUp>
            <div className="overflow-hidden rounded-lg border border-line">
              <Image
                src={p.images[0] || "/placeholder.svg"}
                alt={p.captions?.[0] ?? p.name}
                width={2000}
                height={1500}
                className="w-full"
                priority
              />
            </div>
            {p.captions?.[0] && <p className="label mt-3 normal-case tracking-normal">{p.captions[0]}</p>}
          </FadeUp>

          {(p.problem || p.solution) && (
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {p.problem && (
                <FadeUp>
                  <h2 className="label mb-4">The problem</h2>
                  <p className="text-[15.5px] leading-relaxed text-sub">{p.problem}</p>
                  {p.outcome && (
                    <>
                      <h2 className="label mb-4 mt-10">The outcome</h2>
                      <p className="text-[15.5px] leading-relaxed text-ink">{p.outcome}</p>
                    </>
                  )}
                </FadeUp>
              )}
              {p.solution && (
                <FadeUp delay={0.08}>
                  <h2 className="label mb-4">What I built</h2>
                  <ul className="space-y-4">
                    {p.solution.map((s) => (
                      <li key={s} className="flex gap-3 text-[15px] leading-relaxed text-sub">
                        <span aria-hidden className="mt-[9px] h-1 w-4 shrink-0 rounded-full bg-[rgba(203,172,249,.6)]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  {!p.problem && p.outcome && (
                    <>
                      <h2 className="label mb-4 mt-10">The outcome</h2>
                      <p className="text-[15.5px] leading-relaxed text-ink">{p.outcome}</p>
                    </>
                  )}
                </FadeUp>
              )}
            </div>
          )}

          {p.images.length > 1 && (
            <div className="mt-16 space-y-10">
              {p.images.slice(1).map((img, i) => (
                <FadeUp key={img}>
                  <div className="overflow-hidden rounded-lg border border-line">
                    <Image src={img || "/placeholder.svg"} alt={p.captions?.[i + 1] ?? p.name} width={2000} height={1500} className="w-full" />
                  </div>
                  {p.captions?.[i + 1] && <p className="label mt-3 normal-case tracking-normal">{p.captions[i + 1]}</p>}
                </FadeUp>
              ))}
            </div>
          )}

          <FadeUp>
            <div className="mt-16 flex flex-col gap-10 border-t border-line pt-10 md:flex-row md:justify-between">
              <div>
                <h2 className="label mb-4">Stack</h2>
                <div className="flex max-w-md flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md border border-line px-3 py-1.5 font-grotesk text-xs font-medium text-sub">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {p.links.length > 0 && (
                <div>
                  <h2 className="label mb-4">Live</h2>
                  <div className="flex flex-col gap-2.5">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-grotesk text-sm font-semibold text-ink transition-colors hover:text-violet-brand"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeUp>

          <Link href={`/work/${next.slug}`} className="group mt-20 block border-t border-line py-14">
            <p className="label mb-3">Next project</p>
            <p className="font-grotesk text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold tracking-[-0.03em] text-ink transition-colors duration-300 group-hover:text-violet-brand">
              {next.name} →
            </p>
          </Link>
        </article>
      </main>
      <Footer />
    </>
  )
}
