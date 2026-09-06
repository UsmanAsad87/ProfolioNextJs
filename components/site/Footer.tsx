import { EMAIL, GITHUB, LINKEDIN, UPWORK, DIGIFYR } from "./links"

export default function Footer() {
  return (
    <footer className="rule-t px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="font-grotesk text-sm font-bold text-ink">
          usman<span className="text-violet-brand">.</span>{" "}
          <span className="ml-2 font-sans text-xs font-normal text-sub">I make AI work in production.</span>
        </p>
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-[13px] text-sub">
          <a href={UPWORK} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">Upwork</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">GitHub</a>
          <a href={DIGIFYR} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">DigifyR</a>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-ink">{EMAIL}</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-[1320px] border-t border-line pt-5 text-[12px] text-sub opacity-70">
        © {new Date().getFullYear()} Usman Asad · usman.digifyr.com
      </p>
    </footer>
  )
}
