export type WorkItem = {
  slug: string
  name: string
  tag: string
  headline: string
  blurb: string
  img: string
  href: string
  external?: boolean
  ai?: boolean
  featured?: boolean
  stack: string[]
}

const d = (slug: string) => `/work/${slug}`

export const work: WorkItem[] = [
  {
    slug: "zeuslock",
    name: "ZeusLock",
    tag: "AI Security · DLP",
    headline: "AI data-loss prevention with a self-hosted LLM at its core",
    blurb:
      "Browser extension + desktop agent feed a FastAPI engine where a jailbreak classifier, regex layer and a self-hosted multimodal LLM decide allow / alert / block in real time. K8s + GitOps; SaaS and air-gapped on-prem.",
    img: "/work/zeuslock/1.png",
    href: d("zeuslock"),
    ai: true,
    featured: true,
    stack: ["FastAPI", "llama.cpp", "Kubernetes", "PostgreSQL RLS"],
  },
  {
    slug: "ai-care-platform",
    name: "AI Care Platform",
    tag: "AI Agents · Healthcare",
    headline: "Three AI agents live in production on a HIPAA healthcare platform",
    blurb:
      "Scheduling, HR and Compliance agents work inside every module on the AWS backend — the Scheduling Agent cut overtime 23% at full coverage. 31 organizations, 913 clinicians.",
    img: "/work/ai-care-platform/1.png",
    href: d("ai-care-platform"),
    ai: true,
    featured: true,
    stack: ["AI Agents", "AWS", "HIPAA", "Next.js"],
  },
  {
    slug: "mobileriz",
    name: "Mobileriz",
    tag: "AI · Marketplace Ops",
    headline: "Marketplace ops platform for Turkish e-commerce, with AI listing creation",
    blurb:
      "Flutter client + Next.js admin over FastAPI/PostgreSQL/Redis; connectors for Trendyol, Hepsiburada, ÇiçekSepeti; e-invoice SOAP; AI product creation on the Anthropic SDK. A 568-hour engagement.",
    img: "/work/mobileriz/1.png",
    href: d("mobileriz"),
    ai: true,
    featured: true,
    stack: ["FastAPI", "Flutter", "PostgreSQL", "Anthropic SDK"],
  },
  {
    slug: "mechanic-connect",
    name: "Mechanic Connect",
    tag: "AI Vision · Marketplace",
    headline: "Three apps, one marketplace — with live AI photo triage",
    blurb:
      "Customer, garage and mechanic Flutter apps on one .NET API; photograph a car problem and a vision LLM suggests the diagnosis and routes the request. Six live store listings.",
    img: "/work/mechanic-connect/1.png",
    href: d("mechanic-connect"),
    ai: true,
    featured: true,
    stack: ["Flutter ×3", ".NET", "Vision LLM"],
  },
  {
    slug: "mms",
    name: "MMS — Machine Monitoring",
    tag: "Industrial IoT · Backend",
    headline: "Real-time machine telemetry for 1,000+ users — API latency cut 20s → 4s",
    blurb:
      "FastAPI + PostgreSQL microservices with WebSocket streaming over Redis/RabbitMQ, predictive-maintenance alerts via Celery (WhatsApp/SMS/email), Keycloak RBAC; Docker on Azure.",
    img: "/projects/mms.png",
    href: d("mms"),
    featured: true,
    stack: ["FastAPI", "Redis", "RabbitMQ", "Keycloak", "Azure"],
  },
  {
    slug: "nafapay",
    name: "NafaPay",
    tag: "Fintech · West Africa",
    headline: "Mobile-money commerce on a .NET 9 hexagonal backend — 1,400+ users",
    blurb:
      "Wave, Orange Money (MAXIT) and PI-SPI rails with HMAC webhooks and idempotent confirms; Flutter apps; Azure Container Apps CI/CD.",
    img: "/work/nafapay/1.png",
    href: d("nafapay"),
    featured: true,
    stack: [".NET 9", "Flutter", "Azure"],
  },
  {
    slug: "cargocontrol",
    name: "CargoControl",
    tag: "Logistics · Maritime",
    headline: "48,427 tonnes on one vessel, reconciled bag by bag",
    blurb:
      "Maritime discharge control for South American ports — Flutter field apps, .NET/PostgreSQL API, Next.js portal, per-trip port↔industry reconciliation.",
    img: "/work/cargocontrol/1.png",
    href: d("cargocontrol"),
    featured: true,
    stack: ["Flutter", ".NET", "PostgreSQL"],
  },
  {
    slug: "facert",
    name: "FaceRT",
    tag: "Computer Vision",
    headline: "Real-time multi-face recognition at 98.6% accuracy",
    blurb:
      "RetinaFace + ArcFace pipeline with real-time tracking and logging — Python, TensorFlow/PyTorch, Flask API, React and Flutter clients.",
    img: "/projects/fyp.png",
    href: d("facert"),
    ai: true,
    stack: ["PyTorch", "TensorFlow", "Flask"],
  },
  {
    slug: "maman-tontine",
    name: "Maman Tontine",
    tag: "Fintech · Savings",
    headline: "Digitised savings circles with mobile-money payouts",
    blurb: "Rotation engine, real-time group ledgers, WhatsApp/QR invites, Wave & Orange Money payouts.",
    img: "/work/maman-tontine/1.png",
    href: d("maman-tontine"),
    stack: ["Flutter", "Mobile Money"],
  },
  {
    slug: "ataya",
    name: "ATAYA",
    tag: "Marketplace · Matching",
    headline: "Senegal's leisure marketplace with a Partner API built for AI assistants",
    blurb: "Mutual-accept matching that opens a chat; XOF payments; Firebase backend; AI matching on the roadmap.",
    img: "/work/ataya/1.png",
    href: d("ataya"),
    stack: ["Flutter", "Firebase", "Next.js"],
  },
  {
    slug: "koumpa",
    name: "Koumpa",
    tag: "Ride-sharing",
    headline: "Ride-sharing shipped to both stores — first build for a three-venture client",
    blurb: "The founder came back for ATAYA, then ZeusLock.",
    img: "/work/koumpa/1.png",
    href: d("koumpa"),
    stack: ["Flutter", "Firebase"],
  },
  {
    slug: "extra-miles",
    name: "Extra Miles",
    tag: "Travel · Rewards",
    headline: "Travel rewards in long-run production for a UAE network",
    blurb: "Earn and redeem miles across partners — Flutter + .NET.",
    img: "/work/extra-miles/1.png",
    href: d("extra-miles"),
    stack: ["Flutter", ".NET"],
  },
  {
    slug: "nanoga",
    name: "Nanoga BW",
    tag: "Marketplace",
    headline: "Botswana's local-business marketplace",
    blurb: "Orders, tracking and analytics — Flutter + Firebase.",
    img: "/work/nanoga/1.png",
    href: d("nanoga"),
    stack: ["Flutter", "Firebase"],
  },
  {
    slug: "kanz-ul-huda",
    name: "Kanz ul Huda",
    tag: "Education",
    headline: "Education platform for a UK organisation — load times cut 40%",
    blurb: "Next.js/TypeScript web + Flutter app; API integration and optimisation.",
    img: "/work/kanz-ul-huda/1.png",
    href: d("kanz-ul-huda"),
    stack: ["Next.js", "Flutter"],
  },
  {
    slug: "homat-alwatan",
    name: "Homat Alwatan",
    tag: "Services · UAE",
    headline: "Maintained through 14 major versions",
    blurb: "A UAE services app in continuous production for years — currently v14.4.5.",
    img: "/work/homat-alwatan/1.png",
    href: d("homat-alwatan"),
    stack: ["Flutter"],
  },
  {
    slug: "barber-lounge",
    name: "The Barber Lounge",
    tag: "Booking · White-label",
    headline: "White-label booking product, sold and live in the UK",
    blurb: "Services, barbers and slots booked in a few taps — App Store (UK), v1.5.5.",
    img: "/work/barber-lounge/1.png",
    href: d("barber-lounge"),
    stack: ["Flutter", "Firebase"],
  },
  {
    slug: "opclo",
    name: "Opclo",
    tag: "Travel Assistance",
    headline: "Foursquare-powered discovery, safety alerts and coupons",
    blurb: "Flutter + .NET + Firebase, shipped to both app stores with a web admin.",
    img: "/work/opclo/1.png",
    href: d("opclo"),
    stack: ["Flutter", ".NET", "Firebase"],
  },
  {
    slug: "ascension",
    name: "The Ascension App",
    tag: "Wellness · Community",
    headline: "A men's self-development community, live on the App Store",
    blurb: "Habit-building, community and coaching — maintained through v1.4.0.",
    img: "/work/ascension/1.png",
    href: d("ascension"),
    stack: ["Flutter"],
  },
]

export const featuredWork = work.filter((w) => w.featured)
export const moreWork = work.filter((w) => !w.featured)
