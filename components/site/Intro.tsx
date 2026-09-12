"use client"

import { useState } from "react"
import { VSL_EMBED } from "./links"
import { Reveal, FadeUp } from "./Reveal"

export default function Intro() {
  const [play, setPlay] = useState(false)
  return (
    <section id="intro" className="rule-t px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <p className="label mb-4">00 / 82 seconds</p>
        <h2 className="mb-12 font-grotesk text-[clamp(2.1rem,4.5vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-ink">
          <Reveal>
            Watch the <em className="font-serif italic font-normal text-violet-brand">intro.</em>
          </Reveal>
        </h2>
        <FadeUp>
          <div className="relative overflow-hidden rounded-lg border border-line bg-surface">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {play ? (
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`${VSL_EMBED}?autoplay=1&rel=0&modestbranding=1`}
                  title="Usman Asad — I make AI work in production"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setPlay(true)}
                  aria-label="Play intro video"
                  className="group absolute inset-0 h-full w-full"
                >
                  <img
                    src="/vsl-thumb.jpg"
                    alt="Usman Asad — I make AI work in production"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 bg-[rgba(0,3,25,0.28)] transition-colors duration-500 group-hover:bg-[rgba(0,3,25,0.12)]" />
                  <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full violet-gradient shadow-2xl transition-transform duration-500 group-hover:scale-110">
                    <svg width="26" height="30" viewBox="0 0 26 30" aria-hidden>
                      <path d="M0 0l26 15L0 30V0z" fill="#000319" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
