export type Fact = { label: string; value: string }
export type Link = { label: string; href: string }

export type Project = {
  slug: string
  name: string
  tag: string
  year: string
  headline: string
  summary: string
  ai?: string
  problem?: string
  solution?: string[]
  outcome?: string
  stack: string[]
  facts: Fact[]
  links: Link[]
  images: string[]
  captions?: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "mobileriz",
    name: "Mobileriz",
    tag: "AI · Marketplace Ops",
    year: "2024–2026",
    headline: "One dashboard that runs a seller's business across Turkey's biggest marketplaces.",
    summary:
      "Multi-vendor marketplace management for Trendyol, Hepsiburada and ÇiçekSepeti: a Flutter client, Next.js admin and a FastAPI platform that syncs products, orders and invoices — with AI product creation in development on the Anthropic SDK.",
    ai: "AI product-listing generation (Anthropic Claude SDK) — in development on a live platform.",
    problem:
      "Turkish e-commerce sellers juggle three marketplace panels, manual product entry and e-invoice bureaucracy. Every hour spent copy-pasting listings is an hour not selling.",
    solution: [
      "Flutter app + Next.js admin (TR/EN) over one FastAPI + PostgreSQL + Redis platform.",
      "Marketplace connectors for Trendyol, Hepsiburada and ÇiçekSepeti with scheduled sync (APScheduler) and a Databricks-backed data pipeline.",
      "e-Invoice integration over SOAP (e-Logo/Sovos) — invoices generated where sellers actually file them.",
      "AI product creation with the Anthropic Claude SDK: describe a product, get marketplace-ready listings.",
    ],
    outcome: "A 568-hour engagement and counting — shipped through TestFlight CI, monitored with Prometheus.",
    stack: ["Flutter", "FastAPI", "PostgreSQL", "Redis", "Next.js 14", "AWS", "Anthropic SDK", "Databricks"],
    facts: [
      { label: "Engagement", value: "568 h+" },
      { label: "Marketplaces", value: "3 live" },
      { label: "Apps", value: "client + admin + landing" },
    ],
    links: [{ label: "mobileriz.com", href: "https://mobileriz.com" }],
    images: ["/work/mobileriz/1.png", "/work/mobileriz/2.png", "/work/mobileriz/3.png"],
    captions: ["Platform overview", "Seller dashboard, products & AI Q&A", "Architecture — AI-assisted listing pipeline"],
    featured: true,
  },
  {
    slug: "ai-care-platform",
    name: "AI Care Platform",
    tag: "AI Agents · Healthcare",
    year: "2025–2026",
    headline: "Three AI agents, live in production, running a healthcare staffing platform.",
    summary:
      "An AI-native healthcare SaaS connecting organizations, clinicians and patients — HIPAA-compliant, on AWS. A Scheduling Agent, HR & Employee Assistant and Compliance agent work inside every module; the Scheduling Agent cut overtime 23% at full coverage.",
    ai: "3 AI agents LIVE: scheduling optimization, HR Q&A, compliance document intelligence. Digital Nurse & Recruitment Agent next.",
    problem:
      "Home-health agencies place nurses with spreadsheets and phone calls while credentials expire unnoticed and clinicians juggle every employer separately.",
    solution: [
      "Three portals — organizations (staffing, compliance, referrals, analytics), clinicians (one profile across employers), patients (appointments, meds, rides).",
      "AI agent layer on the AWS backend: certification-aware rosters, instant sourced answers over HR files, expiring-certification flags.",
      "Longevity module: 100+ biomarkers, biological age, trends with AI-powered insights.",
      "Built-in public careers marketplace across all member organizations.",
    ],
    outcome: "31 organizations · 913 clinicians on board · scheduling agent cut overtime 23% while keeping full coverage.",
    stack: ["AI Agents", "AWS", "LLM Integration", "Next.js", "HIPAA", "Multi-tenant SaaS"],
    facts: [
      { label: "AI agents live", value: "3" },
      { label: "Overtime cut", value: "−23%" },
      { label: "Clinicians", value: "913" },
    ],
    links: [{ label: "Live platform", href: "https://homehealth.ai" }],
    images: ["/work/ai-care-platform/1.png", "/work/ai-care-platform/2.png", "/work/ai-care-platform/3.png"],
    captions: ["One platform, three portals", "Real agent output in production", "Architecture — agent layer on AWS"],
    featured: true,
  },
  {
    slug: "zeuslock",
    name: "ZeusLock",
    tag: "AI Security · DLP Platform",
    year: "2025–2026",
    headline: "The security layer for the AI era — DLP that stops data leaking into ChatGPT & Co.",
    summary:
      "Enterprise data-loss prevention built for AI usage: a browser extension and desktop agent feed a FastAPI engine where a jailbreak classifier, regex layer and a self-hosted multimodal LLM decide allow / alert / block in real time. Ships as SaaS and licensed air-gapped on-prem.",
    ai: "Self-hosted multimodal LLM (llama.cpp on GPU) at the core of the detection pipeline — the AI never leaves the platform.",
    problem:
      "Employees paste customer PII, credentials and financial data into AI tools every day. Classic DLP never sees it — the data leaves through chat apps, desktop tools and MCP agents.",
    solution: [
      "Browser extension (Manifest v3) intercepting prompts and uploads inside LLM web apps; Electron desktop agent covering 14+ AI providers system-wide, with MCP monitoring and Shadow-AI discovery.",
      "FastAPI DLP engine: jailbreak classifier ‖ regex layer ‖ self-hosted LLM → allow / alert / block, with format-preserving anonymization.",
      "Multi-tenant PostgreSQL with row-level security, Keycloak OIDC, SIEM export (OCSF) to Splunk/Sentinel/Elastic.",
      "Kubernetes + GitOps delivery; one universal Helm chart drives SaaS and Ed25519-licensed on-prem installs.",
    ],
    outcome: "EU-sovereign AI security in production — detection runs on our own GPU with open weights.",
    stack: ["FastAPI", "llama.cpp", "Kubernetes", "PostgreSQL RLS", "Electron", "Chrome Extension", "ArgoCD"],
    facts: [
      { label: "AI providers covered", value: "14+" },
      { label: "Editions", value: "SaaS + air-gap" },
      { label: "Detection", value: "self-hosted LLM" },
    ],
    links: [
      { label: "zeuslock.ai", href: "https://zeuslock.ai/en/" },
      { label: "Docs", href: "https://zeuslock.ai/en/docs" },
    ],
    images: ["/work/zeuslock/1.png", "/work/zeuslock/2.png", "/work/zeuslock/3.png"],
    captions: ["AI data-loss prevention", "A credit card caught before send", "Architecture — three-layer detection"],
    featured: true,
  },
  {
    slug: "mechanic-connect",
    name: "Mechanic Connect",
    tag: "AI Vision · Marketplace",
    year: "2025–2026",
    headline: "Photograph the problem — a vision model diagnoses it. Three apps, one marketplace.",
    summary:
      "A three-sided auto-service marketplace for Jamaica: customers book services, request roadside help and order parts; garages send offers and run a J$ wallet; mechanics work jobs from their own app. Six live store listings on one .NET API — with AI photo triage live.",
    ai: "AI photo triage LIVE: a vision LLM reads the photo, suggests the likely diagnosis and routes the request to the right garage service.",
    problem:
      "Finding a trustworthy garage — or roadside help when the car dies — meant phone calls and word of mouth. Garages had no digital channel for requests, quotes or dispatch.",
    solution: [
      "Three Flutter apps (customer / garage / mechanic) on one .NET REST API — role-based auth, request lifecycle, geolocation matching, chat, push.",
      "Garage offers & J$ wallet with earnings and withdrawals; mechanics get maps to every callout.",
      "AI photo triage: photo → vision-LLM diagnosis → routed to the right service.",
    ],
    outcome: "All six listings live on the App Store and Google Play (v1.10.x). Third product for the same client.",
    stack: ["Flutter ×3", ".NET", "Vision LLM", "Geolocation", "Push notifications"],
    facts: [
      { label: "Store listings", value: "6 live" },
      { label: "Apps", value: "3" },
      { label: "AI triage", value: "LIVE" },
    ],
    links: [
      { label: "Customer — App Store", href: "https://apps.apple.com/us/app/mechanic-connect/id6754509101" },
      { label: "Customer — Google Play", href: "https://play.google.com/store/apps/details?id=com.mechanic.mechanicconnect" },
      { label: "Garage — App Store", href: "https://apps.apple.com/us/app/mechanic-connect-garage/id6754509103" },
      { label: "Mechanics — App Store", href: "https://apps.apple.com/us/app/mechanic-connect-mechanics/id6754508075" },
    ],
    images: ["/work/mechanic-connect/1.png", "/work/mechanic-connect/2.png", "/work/mechanic-connect/3.png"],
    captions: ["Three apps, one marketplace", "The customer app", "Architecture — AI photo triage live"],
    featured: true,
  },
  {
    slug: "nafapay",
    name: "NafaPay",
    tag: "Fintech · West Africa",
    year: "2024–2026",
    headline: "Mobile-money commerce for francophone West Africa — 1,400+ users and growing.",
    summary:
      "A C2C marketplace where buyers pay outright or on tontine-style instalments through Wave, Orange Money (MAXIT) and PI-SPI. Flutter apps over a .NET 9 hexagonal backend with HMAC-verified webhooks, deployed on Azure.",
    problem:
      "Card rails don't fit West African commerce — buyers save and pay in instalments through mobile money, and sellers need stores, not listings.",
    solution: [
      ".NET 9 API (hexagonal architecture) with Wave, Orange Money and PI-SPI providers — HMAC webhooks, idempotent confirms.",
      "Flutter customer app + Flutter admin; vendor stores with product catalogs.",
      "Azure Container Apps with CI/CD and App Insights; Supabase Postgres via EF Core.",
    ],
    outcome: "1,400+ users, 415 products, 25 vendor stores — running in production.",
    stack: [".NET 9", "Flutter", "Azure", "Supabase Postgres", "Mobile Money APIs"],
    facts: [
      { label: "Users", value: "1,400+" },
      { label: "Vendor stores", value: "25" },
      { label: "Payment rails", value: "3" },
    ],
    links: [
      { label: "nafapay.shop", href: "https://nafapay.shop" },
      { label: "App Store", href: "https://apps.apple.com/app/id6773523297" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=digital.imco.nafapay" },
    ],
    images: ["/work/nafapay/1.png", "/work/nafapay/2.png", "/work/nafapay/3.png"],
    captions: ["NafaPay", "Admin — live marketplace ops", "Architecture — payment rails"],
    featured: true,
  },
  {
    slug: "cargocontrol",
    name: "CargoControl",
    tag: "Logistics · Maritime",
    year: "2023–2026",
    headline: "48,427 tonnes on one vessel — reconciled bag by bag between port and industry.",
    summary:
      "Maritime discharge control for South American ports: registration → monitoring → validation → reports, with per-trip reconciliation between what leaves the port and what reaches the plant. Flutter apps + .NET/PostgreSQL API + Next.js portal.",
    problem:
      "Bulk cargo discharge was tracked on paper and radio calls; discrepancies between port and industry surfaced weeks late, if ever.",
    solution: [
      "Flutter field apps (single-vessel and multi-vessel) with offline-tolerant capture, Google Maps and FCM.",
      ".NET + PostgreSQL API and a Next.js portal for history and reporting.",
      "Per-trip port↔industry reconciliation with validation workflows.",
    ],
    outcome: "Used on real discharges — largest single shipment tracked: 48,427 t (MV JAY).",
    stack: ["Flutter", ".NET", "PostgreSQL", "Next.js", "Firebase", "Google Maps"],
    facts: [
      { label: "Largest shipment", value: "48,427 t" },
      { label: "Apps", value: "2 field + portal" },
    ],
    links: [
      { label: "cargocontrol.io", href: "https://cargocontrol.io" },
      { label: "App Store", href: "https://apps.apple.com/app/id6514324128" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=io.control.cargocontrol" },
    ],
    images: ["/work/cargocontrol/1.png", "/work/cargocontrol/2.png", "/work/cargocontrol/3.png"],
    captions: ["CargoControl", "Live dashboards", "Architecture"],
    featured: true,
  },
  {
    slug: "maman-tontine",
    name: "Maman Tontine",
    tag: "Fintech · Community Savings",
    year: "2024–2026",
    headline: "Centuries-old savings circles, digitised — with mobile-money payouts.",
    summary:
      "Tontines with real-time group ledgers, automatic reminders, WhatsApp/QR invites and Wave/Orange Money payouts, plus a solo-savings vault. Flutter app + admin + Next.js site.",
    solution: [
      "Rotation engine handling contribution schedules, turn order and payouts.",
      "Wave and Orange Money integration for collections and payouts (1% fee model).",
      "Group invites via WhatsApp links and QR; real-time ledgers everyone trusts.",
    ],
    stack: ["Flutter", "Mobile Money", "Next.js", "Real-time ledgers"],
    facts: [
      { label: "Fee model", value: "1%" },
      { label: "Rails", value: "Wave · Orange Money" },
    ],
    links: [
      { label: "mamantontine.com", href: "https://mamantontine.com" },
      { label: "App Store", href: "https://apps.apple.com/app/id6741247993" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=imco.digital.mamantontine" },
    ],
    images: ["/work/maman-tontine/1.png", "/work/maman-tontine/2.png", "/work/maman-tontine/3.png"],
    captions: ["Maman Tontine", "Wallet & flows", "Architecture — rotation engine"],
  },
  {
    slug: "ataya",
    name: "ATAYA",
    tag: "Marketplace · Matching",
    year: "2023–2026",
    headline: "A matching marketplace for Senegal's leisure scene — with a Partner API built for AI.",
    summary:
      "Activities and events booking with mutual-accept matching that opens a chat, XOF payments, agenda and guides — Flutter app, Flutter admin and Next.js web on Firebase, plus a Partner API designed to serve an AI assistant.",
    ai: "Partner API built to power an AI assistant (AWA); embeddings-based matching and semantic search in discussion.",
    solution: [
      "Mutual-accept matching: both sides accept → a chat opens. Discovery, agenda, bookings.",
      "Firebase backend (Cloud Functions) with XOF payments.",
      "Partner API spec for AI-agent access — the marketplace as a tool for assistants.",
    ],
    stack: ["Flutter", "Firebase", "Next.js", "Partner API"],
    facts: [
      { label: "Platforms", value: "iOS · Android · Web" },
      { label: "Market", value: "Senegal (XOF)" },
    ],
    links: [
      { label: "ataya.app", href: "https://ataya.app" },
      { label: "App Store", href: "https://apps.apple.com/app/id6633447641" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.activtips.activtip" },
    ],
    images: ["/work/ataya/1.png", "/work/ataya/2.png", "/work/ataya/3.png"],
    captions: ["ATAYA", "Web experience", "Architecture"],
  },
  {
    slug: "extra-miles",
    name: "Extra Miles",
    tag: "Travel · Rewards",
    year: "2022–2026",
    headline: "A travel-rewards app in long-run production for a UAE partner network.",
    summary:
      "Earn and redeem miles across a partner network — Flutter + .NET, maintained in production alongside partner app Homat Alwatan.",
    stack: ["Flutter", ".NET"],
    facts: [{ label: "Stores", value: "iOS + Android" }],
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id899249120" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.earnextramiles.app" },
    ],
    images: ["/work/extra-miles/1.png", "/work/extra-miles/2.png"],
    captions: ["Extra Miles", "Architecture"],
  },
  {
    slug: "koumpa",
    name: "Koumpa",
    tag: "Ride-sharing",
    year: "2022–2024",
    headline: "Ride-sharing, shipped — the first product of a three-venture client relationship.",
    summary:
      "A ride-sharing app shipped to both stores — the first build for a serial founder who came back for ATAYA and then ZeusLock.",
    stack: ["Flutter", "Firebase"],
    facts: [{ label: "Client products since", value: "3" }],
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6479527695" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.koumpa.koumpa" },
    ],
    images: ["/work/koumpa/1.png", "/work/koumpa/2.png"],
    captions: ["Koumpa", "In the app"],
  },
  {
    slug: "nanoga",
    name: "Nanoga BW",
    tag: "Marketplace · Botswana",
    year: "2023–2025",
    headline: "Botswana's local-business marketplace.",
    summary:
      "A marketplace for Botswana's local businesses — orders, tracking and performance analytics. Flutter + Firebase, live on the App Store.",
    stack: ["Flutter", "Firebase"],
    facts: [{ label: "Live", value: "App Store" }],
    links: [
      { label: "nanoga.org", href: "https://nanoga.org" },
      { label: "App Store", href: "https://apps.apple.com/app/id6532563615" },
    ],
    images: ["/work/nanoga/1.png", "/work/nanoga/2.png"],
    captions: ["Nanoga BW", "In the app"],
  },
  {
    slug: "opclo",
    name: "Opclo",
    tag: "Travel Assistance",
    year: "2022–2024",
    headline: "Travel assistance with safety alerts and local discovery.",
    summary:
      "Foursquare-powered discovery, safety alerts and coupons — Flutter + .NET + Firebase, shipped to both app stores with a Flutter web admin.",
    stack: ["Flutter", ".NET", "Firebase", "Foursquare API"],
    facts: [{ label: "Web", value: "opclo.app" }],
    links: [{ label: "opclo.app", href: "https://opclo.app" }],
    images: ["/work/opclo/1.png"],
    captions: ["Opclo"],
  },
  {
    slug: "kanz-ul-huda",
    name: "Kanz ul Huda",
    tag: "Education · Community",
    year: "2023–2026",
    headline: "An Islamic education platform for a UK organisation established in 2003.",
    summary:
      "Next.js/TypeScript web + Flutter app for Kanz ul Huda — API integration and optimisation work cut load times by 40%.",
    stack: ["Next.js", "TypeScript", "Flutter"],
    facts: [{ label: "Load time", value: "−40%" }],
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6462510078" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.verge.kuhz_ul_huda" },
    ],
    images: ["/work/kanz-ul-huda/1.png", "/work/kanz-ul-huda/2.png"],
    captions: ["Kanz ul Huda", "Architecture"],
  },
  {
    slug: "ascension",
    name: "The Ascension App",
    tag: "Wellness · Community",
    year: "2023–2026",
    headline: "A men's self-development community, live on the App Store.",
    summary: "Habit-building, community and coaching — Flutter, maintained through v1.4.0.",
    stack: ["Flutter"],
    facts: [{ label: "Maintained to", value: "v1.4.0" }],
    links: [{ label: "App Store", href: "https://apps.apple.com/app/id6474487259" }],
    images: ["/work/ascension/1.png"],
    captions: ["The Ascension App"],
  },
  {
    slug: "homat-alwatan",
    name: "Homat Alwatan",
    tag: "Services · UAE",
    year: "2019–2026",
    headline: "Maintained through 14 major versions — the definition of a long-term client.",
    summary:
      "A UAE services app in continuous production for years — currently at v14.4.5, paired with the Extra Miles rewards partner app.",
    stack: ["Flutter"],
    facts: [{ label: "Major versions", value: "14" }],
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id1644613210" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.dhaen.homatalwatan" },
    ],
    images: ["/work/homat-alwatan/1.png"],
    captions: ["Homat Alwatan"],
  },
  {
    slug: "barber-lounge",
    name: "The Barber Lounge",
    tag: "Booking · White-label",
    year: "2023–2026",
    headline: "A white-label booking product — sold to a UK barbershop and live on the App Store.",
    summary:
      "Services, barbers and time slots booked in a few taps. Built as a white-label product; The Barber Lounge Ipswich runs it in production (v1.5.5).",
    stack: ["Flutter", "Firebase"],
    facts: [{ label: "Live", value: "App Store (UK)" }],
    links: [{ label: "App Store (UK)", href: "https://apps.apple.com/gb/app/the-barber-lounge-ipswich/id6473742151" }],
    images: ["/work/barber-lounge/1.png"],
    captions: ["The Barber Lounge"],
  },
  {
    slug: "mms",
    name: "MMS — Machine Monitoring",
    tag: "Industrial IoT · Backend",
    year: "2025",
    headline: "Real-time machine telemetry for 1,000+ users — API latency cut 20s to 4s.",
    summary:
      "An industrial Machine Monitoring System: FastAPI + PostgreSQL microservices streaming live telemetry over WebSockets, predictive-maintenance alerts across WhatsApp, SMS and email, and Keycloak-secured dashboards.",
    solution: [
      "Microservices on FastAPI + PostgreSQL with Clean Architecture, delivered via Agile sprints.",
      "Real-time data streaming over WebSockets with Redis and RabbitMQ brokering to Flutter clients.",
      "Predictive-maintenance module with scheduled Celery jobs and multi-channel alerts (WhatsApp, SMS, email).",
      "Keycloak (JWT/RBAC) for 1,000+ users; API performance optimized from 20s to 4s; Docker + Azure CI/CD.",
    ],
    outcome: "Analytics dashboards, reports and billing cut manual reporting effort by 40%.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "Celery", "Keycloak", "Flutter", "Azure"],
    facts: [
      { label: "Users", value: "1,000+" },
      { label: "API latency", value: "20s → 4s" },
      { label: "Reporting effort", value: "−40%" },
    ],
    links: [{ label: "Live demo", href: "https://mms-aim.netlify.app" }],
    images: ["/projects/mms.png"],
    captions: ["MMS dashboards"],
  },
  {
    slug: "facert",
    name: "FaceRT",
    tag: "Computer Vision",
    year: "2022–2023",
    headline: "Real-time multi-face recognition at 98.6% accuracy.",
    summary:
      "A facial recognition system for real-time multi-face detection, tracking and entry logging — RetinaFace + ArcFace models served through a Flask REST API with MongoDB, plus React web and Flutter mobile clients.",
    stack: ["PyTorch", "TensorFlow", "Flask", "MongoDB", "React", "Flutter"],
    facts: [
      { label: "Accuracy", value: "98.6%" },
      { label: "Mode", value: "real-time · multi-face" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/UsmanAsad87/FaceRecogFYPModel" }],
    images: ["/projects/fyp.png"],
    captions: ["FaceRT"],
  },
]

export const featured = projects.filter((p) => p.featured)
export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)
