import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600"] })
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", weight: ["400", "500", "700"] })
const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://usman.digifyr.com"),
  title: {
    default: "Usman Asad — I make AI work in production.",
    template: "%s — Usman Asad",
  },
  description:
    "Senior AI Integration Engineer & Co-Founder of DigifyR. AI agents, self-hosted LLMs and vision models live in shipped products — Flutter, FastAPI, .NET, AWS/Azure/Kubernetes. Top Rated on Upwork, 100% Job Success.",
  keywords: [
    "Usman Asad",
    "AI Integration Engineer",
    "AI agents",
    "RAG",
    "LLM engineer",
    "Flutter developer",
    "FastAPI",
    ".NET",
    "DigifyR",
  ],
  authors: [{ name: "Usman Asad" }],
  openGraph: {
    title: "Usman Asad — I make AI work in production.",
    description:
      "AI agents, self-hosted LLMs and vision models live in shipped products. Co-Founder & Technical Lead @ DigifyR.",
    url: "https://usman.digifyr.com",
    siteName: "Usman Asad",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Usman Asad",
  jobTitle: "Senior AI Integration Engineer · Co-Founder & Technical Lead",
  worksFor: { "@type": "Organization", name: "DigifyR", url: "https://digifyr.com" },
  url: "https://usman.digifyr.com",
  sameAs: [
    "https://www.linkedin.com/in/usmanasad87/",
    "https://github.com/UsmanAsad87",
    "https://www.upwork.com/freelancers/~01e2a4364d06d4c2ba",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${grotesk.variable} ${instrument.variable} font-sans antialiased grain`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  )
}
