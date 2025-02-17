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
    title: "Currently working on AI-powered and cloud-based applications.",
    description: "Building intelligent and scalable solutions.",
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
    title: "ActivTips",
    des: "A platform that simplifies discovering and booking leisure and adventure activities in Senegal.",
    img: "/projects/activtips.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/flutter.svg", "/node-js.svg","firebase.svg"],
    link: "https://activtips.vercel.app/",
  },
  {
    id: 2,
    title: "Opclo",
    des: "Developed a travel assistance app with Foursquare API. Features include real-time safety alerts, exclusive coupons and much more.",
    img: "/projects/opclo.png",
    iconLists: ["/flutter.svg", "/dotnet.svg","firebase.svg","/re.svg", "/tail.svg", "/ts.svg", "/ms-sql.svg"],
    link: "https://opclo.app/",
  },
  {
    id: 3,
    title: "InvoiceHub",
    des: "Built a mobile app for efficient invoice management. Features include tax calculations, customizable product/service additions, etc.",
    img: "/projects/invoice.png",
    iconLists: ["/flutter.svg", "/firebase.svg","/stripe.svg","/js.svg","/node-js.svg"],
    link: "https://github.com/UsmanAsad87/InvoiceHubApp",
  },
  {
    id: 4,
    title: "CargoControl",
    des: "A platform specialized in the efficient management of cargo unloading from ships to its delivery at company warehouses.",
    img: "/projects/cc.png",
    iconLists: ["/next.svg", "/flutter.svg","/tail.svg", "/js.svg","/dotnet.svg", "/ms-sql.svg"],
    link: "https://cargocontrol.io/",
  },
  {
    id: 5,
    title: "FaceRT - FYP",
    des: "Developed an advanced facial recognition system achieving 98.6% accuracy for real-time multi-face detection using Retina Face and Arc Face. Enabled real-time tracking, logging",
    img: "/projects/fyp.png",
    iconLists: [ "/python.svg", "/tensorflow.svg","pytorch.svg", "/mongodb.svg",'flask.svg',"/re.svg", "/tail.svg","/flutter.svg"],
    link: "https://github.com/UsmanAsad87/FaceRecogFYPModel",
  },
  {
    id: 6,
    title: "Nanoga BW",
    des: "Discover local businesses in Botswana and their amazing offers with Nanoga BW",
    img: "/projects/nanoga.png",
    iconLists: ["/flutter.svg", "/dotnet.svg","/next.svg", "/tail.svg", "/ts.svg", "/ms-sql.svg"],
    link: "https://nanoga.org/",
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
    img: "/clientProj/Nanoga.png",
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
    title: "Assistant Manager",
    company: "Nescom, Islamabad",
    techStack: "C#, .NET Core, MySQL, Vue.js, Dot Net Core MVC, Unity, Node.js, React, ArcGIS",
    time: "Sep 2023 - Feb 2024",
    desc: [
      "Enhanced mission execution accuracy by developing a VR-based GCS, providing immersive training and real-time interaction.",
      "Improved computational efficiency by 33% by optimizing path planning algorithm, reducing processing time. ",
      "Increased system reliability and enhanced geospatial analysis by integrating ArcGIS, enabling seamless multi-map loading, and ensuring smooth interoperability with other systems.",
      "Accelerated system onboarding by 40% by creating web-based user manuals, reducing training time and minimizingsupport queries",
      "Minimized downtime and boosted readiness by leading end-user training and deployment for seamless adoption"
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "DigifyR, Rawalpind",
    techStack: "Flutter, React, Next.js, Vue.js Node.js, .NET Core, Firebase, PostgreSQL, AWS",
    time: "Jan 2022 - Sep 2023",
    desc: [
      "Built and launched mobile and web applications on Play Store, App Store, and Web, reaching thousands of users.",
      "Developed and optimized backend systems using Node.js, .NET Core, Firebase, and PostgreSQL for better scalability.",
      "Designed and implemented REST APIs and WebSockets, ensuring seamless real-time communication across platforms.",
      "Deployed, monitored, and managed applications on Firebase and Google Cloud, reducing downtime by 40%.",
      "Led and executed $80K+ worth of projects, including ActivTips, Nanoga BW, and Kanz Ul Huda, driving business growth."
    ]
    , className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Treasurer",
    company: "PIEAS Artificial Intelligence Society",
    techStack:"Google Sheets, Google Workspace, Eventbrite, Trello, Budgeting, Communication Skills.",
    time: "Jun 2022 - Feb 2023",
    desc: [
      "Managed financial operations and secured resources for AI-related workshops and events.",
      "Organized and led 'Orient AI' sessions, positively impacting student engagement in AI.",
      "Expanded society outreach by fostering collaborations and inviting industry experts."
    ],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
},
  {
    id: 4,
    title: "Co-Lead ML",
    company: "GDSC PIEAS",
    techStack: "Python, TensorFlow, PyTorch, Scikit-Learn, Pandas, Google Cloud AI, Docker.",
    time: "Jun 2021 - May 2022",
    desc: [
      "Led ML workshops and mentorship sessions, guiding students in hands-on AI projects.",
      "Developed and deployed ML models using Python, TensorFlow, and Scikit-Learn.",
      "Organized hackathons and technical sessions on AI, deep learning, and Google Cloud AI."
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
