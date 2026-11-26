/* =========================================================
   EDIT THIS FILE: all of the portfolio's content lives here.
   You shouldn't need to touch index.html or script.js.
   ========================================================= */

const PORTFOLIO = {
  name: "Muhammad Usama Shoaib",
  shortName: "usama",               // shown in the logo as <usama />
  roles: [                           // typed out one by one in the hero
    "MERN Stack Engineer",
    "Node.js & API Developer",
    "React / Next.js Developer",
    "E-commerce Integration Specialist",
  ],
  tagline:
    "4+ years building scalable web apps for e-commerce, SaaS and healthcare with Node.js, React, Next.js, MongoDB and TypeScript, plus Stripe, Shopify and Etsy integrations that just work.",
  available: true,
  availabilityText: "Open to freelance projects & new roles",
  location: "Lahore, Pakistan",
  email: "usamashoaib2233@gmail.com",
  resume: "resume.pdf",

  // Leave empty "" to fall back to opening the visitor's email app.
  // Free option: create a form at https://formspree.io and paste its URL here.
  formEndpoint: "",

  socials: {
    github: "https://github.com/m-usamashoaib",
    linkedin: "https://www.linkedin.com/in/m-usamashoaib",
    twitter: "",
    upwork: "",                      // add your Upwork / Fiverr profile when ready
  },

  stats: [
    { value: "4+", label: "Years experience" },
    { value: "9", label: "Production projects" },
    { value: "7", label: "LinkedIn recommendations" },
  ],

  about: [
    "I'm a <strong>Software Engineer at PureLogics</strong> in Lahore, where I've grown from intern to engineer over the past four years. I build full-stack products with the <strong>MERN stack</strong>, from REST APIs and data models to responsive React and Next.js front-ends.",
    "Much of my work is about <strong>connecting systems</strong>: Stripe payments, Shopify checkouts, Etsy and Printify listings, NetSuite ERP and other third-party APIs. I make them work together securely and reliably, and I've cut API response times by up to <strong>30%</strong> through query and endpoint optimisation.",
    "I hold a <strong>BS in Computer Science from GC University Lahore</strong>. My team leads and colleagues describe me as a quick learner, a clear communicator and someone who gets tricky problems solved.",
  ],

  skills: {
    Frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "Material UI", "Konva.js", "Three.js", "WordPress"],
    Backend: ["Node.js", "Express.js", "REST APIs", "Socket.io", "OAuth2", "MVC", "Firebase"],
    Database: ["MongoDB", "MySQL"],
    "Integrations & Cloud": ["Stripe / Stripe Connect", "Shopify", "Etsy", "Printify", "NetSuite", "AWS (S3)", "CI/CD", "Git"],
  },

  services: [
    { icon: "🚀", title: "SaaS & full-stack apps", text: "End-to-end MERN / Next.js applications with auth, dashboards, admin panels and subscriptions.", price: "" },
    { icon: "🛒", title: "E-commerce development", text: "Custom Shopify apps, product configurators, checkout flows and storefronts that convert.", price: "" },
    { icon: "🔌", title: "API & third-party integrations", text: "Stripe, Shopify, Etsy, Printify, ERP and OAuth2 integrations built to be secure and reliable.", price: "" },
    { icon: "⚡", title: "Performance & maintenance", text: "Speed up slow APIs and queries, fix bugs, and modernise existing React/Node codebases.", price: "" },
  ],

  // Own open-source projects first, then client projects built at PureLogics.
  projects: [
    {
      title: "LaunchKit: SaaS Starter with Stripe",
      emoji: "🚀",
      image: "images/launchkit.jpg",
      category: "Open source",
      featured: true,
      problem: "Every SaaS needs the same hard parts (auth, subscriptions, plan limits, an admin view) before any real product work can start.",
      solution: "Built an open-source starter with Next.js 16 and TypeScript: Auth.js login, Stripe Checkout and billing portal, signature-verified webhooks, server-side Pro gating and an admin dashboard with MRR.",
      result: "Live demo with real Stripe test-mode payments; a new SaaS can go from clone to taking payments in an afternoon.",
      tech: ["Next.js 16", "TypeScript", "MongoDB", "Auth.js", "Stripe", "Tailwind CSS"],
      links: [
        { label: "Live demo", url: "https://launchkit-ten-delta.vercel.app/" },
        { label: "Source code", url: "https://github.com/m-usamashoaib/launchkit" },
      ],
    },
    {
      title: "Highland Cabinetry",
      emoji: "🏠",
      image: "images/highland-cabinetry.jpg",
      category: "E-commerce",
      featured: true,
      problem: "A cabinetry and home-products business needed a large B2C store with product visualisation and enterprise system integration.",
      solution: "Built responsive custom WordPress theme features and front-end integration points for an interactive React + Three.js 3D kitchen planner, alongside NetSuite ERP, Stripe, financing and analytics integrations.",
      result: "Launched a scalable B2C platform on AWS that serves multiple user roles, with 3D/AR visualisation to boost customer engagement.",
      tech: ["WordPress", "Three.js", "React", "NetSuite", "Stripe", "AWS", "MySQL"],
      links: [{ label: "Visit live site", url: "https://kitchencabinetswholesale.com/" }],
      code: "",
    },
    {
      title: "Simply Listed",
      emoji: "🏷️",
      image: "images/simply-listed.jpg",
      category: "Backend & APIs",
      featured: true,
      problem: "Print-on-demand sellers spent hours manually creating products and Etsy listings.",
      solution: "Built a Node.js/Express REST backend from scratch that connects users to Printify, applies Design Huddle listing templates, and publishes straight to Etsy.",
      result: "Automated listing creation, inventory sync and variant management, taking sellers from design to marketplace in one flow.",
      tech: ["Node.js", "Express.js", "Etsy API", "Printify API", "Amazon S3"],
      links: [{ label: "Visit live site", url: "https://simplylisted.io" }, { label: "Web app", url: "https://app.simplylisted.io/auth/login" }],
      code: "",
    },
    {
      title: "Name GLO: Custom Neon Designer",
      emoji: "💡",
      image: "images/name-glo.jpg",
      category: "E-commerce",
      problem: "Customers couldn't picture or order fully custom neon signs online.",
      solution: "Built a React live editor for fonts, colours, backings, sizes and accessories, with real-time previews, plus deep Shopify integration for cart, checkout and orders.",
      result: "Shoppers design and buy custom neon signs in one place; special requests go straight to the shop team for review.",
      tech: ["React", "Redux", "Shopify API", "Node.js"],
      links: [{ label: "Try the neon designer", url: "https://glostudio.design/" }, { label: "Store", url: "https://glo-studio.com/" }],
      code: "",
    },
    {
      title: "iHateReceipts",
      emoji: "🧾",
      image: "",
      category: "Backend & APIs",
      problem: "Merchants on Ecwid and Ingenico needed digital receipts and a way to manage merchant accounts.",
      solution: "Built a multi-tenant backend that integrates Ecwid and Firebase for real-time transaction data and connects to Java APIs for legacy POS systems, plus a back-office for merchant management.",
      result: "Merchants install it from the Ecwid marketplace and generate receipts automatically.",
      tech: ["Node.js", "Firebase", "Ecwid API", "AWS"],
      live: "",
      code: "",
    },
    {
      title: "UE Comix: AI Manga Creator",
      emoji: "🎨",
      image: "images/ue-comix.jpg",
      category: "AI",
      problem: "Creators wanted to turn text ideas into manga panels without drawing skills.",
      solution: "Built the React + Konva.js canvas front-end that turns text prompts into comic panels, placing AI-generated images into page templates, with Stripe payments.",
      result: "An engaging, easy-to-use editor for creators and artists to produce AI-assisted comics.",
      tech: ["React.js", "Konva.js", "Stripe", "AI image generation"],
      links: [{ label: "Visit live site", url: "https://uecomix.ai/" }],
      code: "",
    },
    {
      title: "AIOAPP: Health & Fitness Platform",
      emoji: "❤️",
      image: "images/aiomd.jpg",
      category: "Full-stack",
      problem: "Users needed one place to track biometrics, progress and health goals.",
      solution: "Developed Node.js endpoints for health-device data sync, analytics for metric visualisation, and Stripe for in-app subscriptions.",
      result: "Users track heart rate, blood pressure, sleep and activity, with personalised insights and goal reminders.",
      tech: ["Node.js", "Express.js", "MongoDB", "Stripe Connect"],
      links: [{ label: "Visit live site", url: "https://aiomd.com/" }],
      code: "",
    },
    {
      title: "Audio Transcription & Insights",
      emoji: "🎙️",
      image: "",
      category: "AI",
      problem: "Teams spent hours manually transcribing and summarising recordings.",
      solution: "Built the React/Redux front-end for secure login, audio upload and transcript editing, on top of a Python backend using OpenAI Whisper.",
      result: "Uploads become transcripts automatically, with topics, insights and questions pulled out.",
      tech: ["React.js", "Redux", "OpenAI Whisper", "Python API"],
      live: "",
      code: "",
    },
    {
      title: "Ride-hailing App (MERN)",
      emoji: "🚗",
      image: "",
      category: "Full-stack",
      problem: "Internship challenge: build a working ride-hailing app end to end.",
      solution: "Built a full MERN app with ride booking, live driver tracking, ride history and email notifications, using Google Maps APIs for locations and routes.",
      result: "A fully functional ride-sharing web app covering the core booking-to-drop-off flow.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Google Maps API", "Socket.io"],
      live: "",
      code: "",
    },
  ],

  experience: [
    {
      when: "Dec 2023 — Present",
      role: "Software Engineer",
      company: "PureLogics, Lahore",
      points: [
        "Build scalable Node.js, Express and MongoDB (TypeScript) back-ends and REST APIs for e-commerce and healthcare products.",
        "Integrate Stripe, Shopify, Printify, Etsy and other APIs over OAuth2 with secure, PCI-compliant payment flows.",
        "Optimised endpoints and database queries, improving response times and stability under load by up to 30%.",
        "Set up CI/CD pipelines, automated testing and code review practices to speed up releases.",
      ],
    },
    {
      when: "Dec 2022 — Nov 2023",
      role: "Associate Software Engineer",
      company: "PureLogics, Lahore",
      points: [
        "Built responsive React front-ends with Redux, Tailwind CSS and Material UI for client products.",
        "Delivered features for a Shopify neon-sign configurator, a health & fitness app, and a Whisper-powered transcription tool.",
      ],
    },
    {
      when: "Sep 2022 — Dec 2022",
      role: "Software Engineer Intern",
      company: "PureLogics, Lahore",
      points: ["Built a full MERN ride-hailing app with Google Maps APIs; joined the team full-time afterwards."],
    },
    {
      when: "2019 — 2023",
      role: "BS Computer Science",
      company: "GC University Lahore",
      points: ["CGPA 3.3 / 4.0. Active member of GDSC GCU, the GCU-ACM Student Chapter and CBS GCU."],
    },
  ],

  // Excerpts from LinkedIn recommendations
  testimonials: [
    { quote: "He consistently delivered high-quality code, often exceeding project expectations and contributing innovative solutions.", name: "Imran Hassan", title: "Team Lead · managed Usama directly" },
    { quote: "He's a good problem solver, he thinks things through, isn't afraid to tackle tricky issues, and gets the job done well.", name: "Aswad Ali", title: "Senior Software Engineer, PureLogics" },
    { quote: "His ability to seamlessly navigate between frontend and backend development makes him a versatile and valuable asset to any engineering team.", name: "Muzna Farooq", title: "Senior QA Engineer · same team" },
    { quote: "I'm amazed by how well he handles pressure. He always goes above and beyond.", name: "Muhammad Uzair", title: "Technical Team Lead · same team" },
  ],
};
