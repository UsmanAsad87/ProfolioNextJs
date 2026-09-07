export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Work", link: "#work" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration, fostering open and effective communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about innovation, scalability, and problem-solving.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building ZeusLock.ai — an AI-native Data Loss Prevention platform.",
    description: "Python · FastAPI · Self-hosted LLMs · Kubernetes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's build something amazing together!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ZeusLock.ai — AI Data Loss Prevention",
    des: "AI-native DLP platform that stops sensitive-data leaks into ChatGPT, Claude & Copilot. Hybrid regex + LLM detection engine on self-hosted GPU models, multi-tenant FastAPI backend, SaaS + air-gapped on-premise.",
    img: "/projects/zeuslock.png",
    iconLists: ["/python.svg", "/fastapi.svg", "/postgresql.svg", "/kubernetes.svg", "/next.svg", "/ts.svg"],
    link: "https://zeuslock.ai",
  },
  {
    id: 2,
    title: "MMS — Machine Monitoring System",
    des: "Industrial machine monitoring platform: real-time telemetry streaming over WebSockets, predictive maintenance with multi-channel alerts, and Keycloak-secured dashboards for 1,000+ users.",
    img: "/projects/mms.png",
    iconLists: ["/python.svg", "/fastapi.svg", "/postgresql.svg", "/redis.svg", "/rabbitmq.svg", "/flutter.svg"],
    link: "https://mms-aim.netlify.app",
  },
  {
    id: 3,
    title: "Ataya",
    des: "Leisure booking & matching platform for Senegal — FastAPI + PostgreSQL backend, Next.js web, Flutter apps; Stripe, Wave & Orange Money payments; 10K+ downloads.",
    img: "/projects/ataya.png",
    iconLists: ["/python.svg", "/fastapi.svg", "/postgresql.svg", "/next.svg", "/flutter.svg", "/stripe.svg"],
    link: "https://ataya.app",
  },
  {
    id: 4,
    title: "FaceRT - FYP",
    des: "Developed an advanced facial recognition system achieving 98.6% accuracy for real-time multi-face detection using Retina Face and Arc Face. Enabled real-time tracking, logging",
    img: "/projects/fyp.png",
    iconLists: [ "/python.svg", "/tensorflow.svg","pytorch.svg", "/mongodb.svg",'flask.svg',"/re.svg", "/tail.svg","/flutter.svg"],
    link: "https://github.com/UsmanAsad87/FaceRecogFYPModel",
  },
  {
    id: 5,
    title: "NafaPay",
    des: "Buy-now-pay-later (BNPL) fintech platform for Senegal — interest-free installments, merchant onboarding, and Wave / Orange Money payments; 2,000+ downloads.",
    img: "/projects/nafapay.png",
    iconLists: ["/flutter.svg", "/postgresql.svg", "/next.svg", "/ts.svg"],
    link: "https://nafapay.shop",
  },
  {
    id: 6,
    title: "CargoControl",
    des: "A platform specialized in the efficient management of cargo unloading from ships to its delivery at company warehouses.",
    img: "/projects/cc.png",
    iconLists: ["/next.svg", "/flutter.svg","/tail.svg", "/js.svg", "/ms-sql.svg"],
    link: "https://cargocontrol.io/",
  },
];



export const testimonials = [
  {
    quote:
      "Usman played a key role in developing our CargoControl system, handling both mobile and web applications with expertise. His deep knowledge of Flutter, Node.js, Firebase, and SQL helped us create a seamless real-time tracking platform for vessel offloading and rice transportation. His ability to integrate real-time updates and ensure a smooth user experience in Spanish was impressive. A true professional who delivers results!",
    name: "Francisco López",
    img: "/testimonals/francisco.png",
    title: "Project Manager at CargoControl",
  },
  {
    quote:
      "Usman improved our Next.js and TypeScript app significantly along with mobile app of kanz ul huda. His API integration skills and optimizations reduced our load times by 40%, making our web app feel incredibly fast. Plus, he provided great documentation, which made future updates easier!",
    name: "Siam Hafeez",
    img: "/testimonals/siam.png",
    title: "CMO At Verge DM",
  },
  {
    quote:
      "Usman helped us build a feature-rich web application and Mobile app using flutter, Firebase, NextJs, and Express. His ability to implement real-time data synchronization and optimize server performance was invaluable. His solutions were not just functional but also well-documented and easy to maintain. I highly recommend working with him!",
    name: "Mohamed Rassoul Tounkara",
    img: "/testimonals/mohammed.jpeg",
    title: "Architecte Cloud & DevOps at Osiris Cloud",
  },
  {
    quote:
      "Usman expertise in Flutter and Firebase helped us create a cross-platform mobile application that exceeded our expectations. From implementing real-time database synchronization to ensuring seamless push notifications, he handled every aspect with precision. His deep knowledge of state management and UI/UX optimization made our app incredibly smooth and intuitive. His professionalism and technical skills make him a fantastic asset to any team.",
    name: "LaMario Favron Jr.",
    img: "/testimonals/mario.jpeg",
    title: "Snr System Engineer at Indigo IT LLC",
  },
  {
    quote:
      "Usman was instrumental in bringing Nanoga to life, developing the entire ecosystem from the website and admin panel to fully functional iOS and Android apps. His expertise in Flutter, Node.js, Firebase, and SQL allowed us to build a seamless platform for discovering local businesses and offers in Botswana. From deployment to performance optimization, Usman ensured a smooth experience for both users and business owners. His ability to handle the entire project lifecycle with precision and efficiency was truly remarkable!",
    name: "Onalenna Mosupiemang",
    img: "/testimonals/onalenna.png",
    title: "Founder of Nanogo BW",
  },
];

export const companies = [
  {
    id: 1,
    name: "CargoControl",
    img: "/clientProj/cc.png",
  },
  {
    id: 2,
    name: "OzzieBarber",
    img: "/clientProj/barber.png",
  },
  {
    id: 3,
    name: "ActivTips",
    img: "/clientProj/activtips.png",
  },
  {
    id: 4,
    name: "Opclo",
    img: "/clientProj/opclo.png",
  },
  {
    id: 5,
    name: "Nanoga BW",
    img: "/clientProj/nanoga.png",
  },
  {
    id: 6,
    name: "Koumpa",
    img: "/clientProj/koumpa.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Lead Developer",
    company: "ZeusLock.ai — Remote, France",
    techStack: "Python, FastAPI, PostgreSQL, Celery, Keycloak, llama.cpp, Kubernetes, Helm, ArgoCD, Next.js",
    time: "Nov 2025 - Present",
    desc: [
      "Lead development of an AI-native Data Loss Prevention platform that stops sensitive-data leaks into AI tools like ChatGPT, Claude, and Copilot.",
      "Own the multi-tenant FastAPI backend — PostgreSQL 16 with Row-Level Security, Alembic migrations, Celery workers, and Keycloak (OIDC) authentication.",
      "Built the hybrid AI detection engine: regex rules, policy-aware LLM classification, and a jailbreak classifier on a self-hosted llama.cpp GPU model — cut LLM latency ~1.9× validated by a 602-case benchmark.",
      "Run the infrastructure: Kubernetes (k3s), Helm, ArgoCD GitOps, CI/CD with image signing; ship SaaS and an air-gapped on-premise edition from one codebase."
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Co-Founder & Technical Lead",
    company: "Digifyr, Islamabad",
    techStack: "Python, FastAPI, PostgreSQL, Flutter, Next.js, Firebase, GCP, Stripe, Wave / Orange Money",
    time: "Jul 2022 - Present",
    desc: [
      "Co-founded a software studio shipping SaaS, fintech, and mobile products to 20,000+ users across finance, logistics, and tourism.",
      "Delivered Ataya (FastAPI + PostgreSQL leisure-booking platform, 10K+ downloads), NafaPay (BNPL fintech), CargoControl, and MamanTontine.",
      "Set technical direction across the studio — architecture, code review standards, release cadence — and mentor engineering consultants."
    ]
    , className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Senior .NET Developer",
    company: "Aim Digital, Islamabad",
    techStack: ".NET, ASP.NET Core, PostgreSQL, SignalR, Redis, RabbitMQ, Hangfire, Keycloak, Docker, Azure",
    time: "Jun 2025 - Oct 2025",
    desc: [
      "Designed a scalable ASP.NET Core + PostgreSQL backend for a Machine Monitoring System (MMS) using microservices and Clean Architecture.",
      "Implemented real-time machine data streaming over SignalR with Redis and RabbitMQ; predictive maintenance alerts (WhatsApp, SMS, Email) via Hangfire.",
      "Secured APIs with Keycloak (JWT / RBAC) for 1,000+ users and optimized API performance from 10s to 2s.",
      "Containerized with Docker and deployed to Azure App Service & ACR with CI/CD."
    ],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
},
  {
    id: 4,
    title: "Assistant Manager – Software Engineer",
    company: "NESCOM, Islamabad",
    techStack: "C#, .NET Core, C++, MSSQL, React, ArcGIS",
    time: "Jul 2023 - May 2025",
    desc: [
      "Developed an intelligent mission planning system with automated path planning built on classical genetic algorithms — a 33% efficiency gain.",
      "Integrated ArcGIS for real-time geospatial visualization with multi-map loading and advanced data overlays.",
      "Built a high-performance C++ navigation utility implementing TERCOM for Windows and Linux mission planning systems.",
      "Created web-based interactive manuals and support portals, accelerating onboarding by 40%."
    ], className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/UsmanAsad87",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/usmanasad87/"
  },
];
