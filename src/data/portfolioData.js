export const portfolioData = {
  personal: {
    name: "Neej Butani",
    role: "Full Stack Developer",
    roles: [
      "Full Stack Developer",
      "AI Platform Builder",
      "Creative Technologist",
      "Problem Solver"
    ],
    tagline: "Building fast, scalable and visually engaging digital experiences with modern technologies.",
    bio: "Passionate Full Stack Developer based in India, dedicated to designing high-impact web applications, AI tools, and sleek modern interfaces. I love transforming complex ideas into intuitive, high-performance software solutions.",
    location: "India",
    email: "neej.butani1603@gmail.com",
    github: "https://github.com/Neej03",
    linkedin: "https://www.linkedin.com/in/neej-butani-085b6a286/",
    reelVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    reelPosterUrl: "/assets/project_nexus_ai.jpg",
    portraitImage: "/assets/neej_portrait.jpg",
    resumeUrl: "/assets/resume.pdf"
  },

  voiceSummary: "Hi, I'm Neej Butani, a Full Stack Developer focused on building modern web experiences, scalable backend systems, and AI-driven applications. Explore my selected projects, technical skills, and journey, and feel free to get in touch to build something extraordinary together.",

  stats: [
    { label: "Projects Completed", value: "15+", description: "Production-ready & open source applications" },
    { label: "GitHub Repositories", value: "20+", description: "Active open source codebases" },
    { label: "Tech Stack Mastery", value: "12+", description: "Modern web & cloud frameworks" },
    { label: "Hackathons & Events", value: "5+", description: "Product building competitions" }
  ],

  skills: {
    Frontend: [
      { name: "React.js", level: 90, icon: "Code2", color: "#61DAFB", desc: "Hooks, Context API, Redux Toolkit, Framer Motion" },
      { name: "JavaScript (ES6+)", level: 92, icon: "FileCode", color: "#F7DF1E", desc: "Async/Await, DOM, Event Loop, Closures" },
      { name: "Tailwind CSS", level: 95, icon: "Palette", color: "#38BDF8", desc: "Custom design systems, Responsive UI, Glassmorphism" },
      { name: "HTML5 & CSS3", level: 95, icon: "Layout", color: "#E34F26", desc: "Semantic layout, Flexbox, CSS Grid, Keyframe animations" }
    ],
    Backend: [
      { name: "Node.js", level: 88, icon: "Server", color: "#339933", desc: "RESTful APIs, Express.js server architecture, Middleware" },
      { name: "Express.js", level: 85, icon: "Cpu", color: "#FFFFFF", desc: "Routing, Authentication, API Security, Error handling" },
      { name: "REST APIs", level: 90, icon: "Network", color: "#FF1E1E", desc: "JSON web tokens, Rate limiting, CORS, Integration" }
    ],
    Programming: [
      { name: "C++", level: 85, icon: "Terminal", color: "#00599C", desc: "Data Structures, Algorithms, OOP, Competitive Programming" },
      { name: "JavaScript", level: 92, icon: "Code", color: "#F7DF1E", desc: "Frontend & Backend fullstack script logic" },
      { name: "Python", level: 80, icon: "TerminalSquare", color: "#3776AB", desc: "Scripting, Automation, AI Integration, Web scraping" }
    ],
    Database: [
      { name: "MySQL", level: 82, icon: "Database", color: "#4479A1", desc: "Relational modeling, SQL queries, Indexes, Joins" },
      { name: "MongoDB", level: 85, icon: "Layers", color: "#47A248", desc: "NoSQL document store, Aggregation, Mongoose ORM" },
      { name: "Firebase", level: 80, icon: "Flame", color: "#FFCA28", desc: "Firestore DB, Realtime Auth, Hosting, Storage" }
    ],
    Tools: [
      { name: "Git & GitHub", level: 90, icon: "GitBranch", color: "#F05032", desc: "Version control, PRs, Actions, Collaboration" },
      { name: "VS Code", level: 95, icon: "Wrench", color: "#007ACC", desc: "Custom extension environment, Debugging" },
      { name: "Figma", level: 80, icon: "Figma", color: "#F24E1E", desc: "UI Wireframing, Component prototyping, Design handoff" },
      { name: "Postman", level: 88, icon: "Send", color: "#FF6C37", desc: "API Endpoint testing, Environment variables, Collections" }
    ]
  },

  projects: [
    {
      id: "nexus-ai",
      title: "Nexus AI Studio",
      subtitle: "AI Developer Analytics & Code Generation Platform",
      category: "Full Stack & AI",
      featured: true,
      image: "/assets/project_nexus_ai.jpg",
      description: "A state-of-the-art developer platform featuring real-time AI code generation, compute usage telemetry, and model execution analytics built with a high-contrast crimson obsidian UI.",
      overview: "Nexus AI Studio empowers software teams to monitor AI compute workloads, analyze API request health, and interact with fine-tuned code generation models in real time.",
      problem: "Developers frequently lack unified real-time visibility into AI compute usage, model latency spikes, and automated error diagnostics across multi-cloud deployments.",
      solution: "Engineered an intuitive, high-contrast dashboard with live socket metrics, visual node graph pipelines, and instant AI code snippet compilation.",
      techStack: ["React", "Node.js", "Tailwind CSS", "Framer Motion", "Express", "REST API"],
      liveUrl: "https://github.com/Neej03",
      githubUrl: "https://github.com/Neej03",
      highlights: [
        "Real-time telemetry chart visualizations with zero layout shift",
        "Sub-100ms API query results with optimized server route handling",
        "Custom glassmorphic red obsidian dark UI system"
      ]
    },
    {
      id: "hyperflow-cloud",
      title: "HyperFlow Cloud Dashboard",
      subtitle: "High-Performance Cloud Database Management Engine",
      category: "Full Stack",
      featured: true,
      image: "/assets/project_hyperflow.jpg",
      description: "Cloud database orchestration console providing SQL query editor tools, live node cluster status, automated backup pipeline graphs, and CPU resource allocation visualizers.",
      overview: "HyperFlow Cloud provides database administrators and engineers with an expressive command center to run SQL queries, monitor cluster health, and sequence multi-stage automated backups.",
      problem: "Managing distributed database clusters and scheduling backup pipelines across servers often involves clunky legacy UIs with high latency.",
      solution: "Created a fluid web dashboard featuring an integrated code syntax editor, visual workflow state indicators, and active node status monitors.",
      techStack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "MySQL"],
      liveUrl: "https://github.com/Neej03",
      githubUrl: "https://github.com/Neej03",
      highlights: [
        "Interactive node cluster topology with live state tracking",
        "Integrated SQL query runner with syntax highlighting",
        "Automated backup workflow pipeline visualization"
      ]
    },
    {
      id: "aether-ui",
      title: "Aether Editorial UI Kit",
      subtitle: "Modern Editorial Design System & Component Library",
      category: "Frontend",
      featured: false,
      image: "/assets/project_nexus_ai.jpg",
      description: "A luxury high-contrast design system featuring bold typography tokens, glassmorphic card primitives, magnetic button micro-interactions, and accessible red accent palettes.",
      overview: "Designed and engineered specifically for high-end SaaS applications, developer portfolios, and digital agency web apps looking for a distinct creative aesthetic.",
      problem: "Generic component libraries often look templated and lack editorial punch or distinct high-contrast visual identity.",
      solution: "Built a curated set of accessible, highly animated React components utilizing Space Grotesk typography and Framer Motion spring physics.",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Figma"],
      liveUrl: "https://github.com/Neej03",
      githubUrl: "https://github.com/Neej03",
      highlights: [
        "100% accessible contrast colors compliant with WCAG guidelines",
        "Fluid magnetic hover states and custom cursor interactions",
        "Zero-dependency component architecture for maximum portability"
      ]
    },
    {
      id: "pulse-engine",
      title: "Pulse Message Router",
      subtitle: "Scalable Event Microservice & Webhook Orchestrator",
      category: "Backend",
      featured: false,
      image: "/assets/project_hyperflow.jpg",
      description: "A lightweight, robust microservice backend built with Node.js and Express to route real-time event webhooks, handle rate-limiting, and log request pay-loads.",
      overview: "Engineered to sit between high-volume web service endpoints and consumer queues, ensuring reliable delivery and payload validation under heavy concurrent loads.",
      problem: "Unchecked webhook bursts can easily crash consumer database instances if proper queueing and rate-limiting buffers are not implemented.",
      solution: "Implemented token-bucket rate limiters, payload hashing checks, and async queue workers in Node.js.",
      techStack: ["Node.js", "Express.js", "REST APIs", "C++ Algorithms"],
      liveUrl: "https://github.com/Neej03",
      githubUrl: "https://github.com/Neej03",
      highlights: [
        "Handles 1,000+ request payloads per minute seamlessly",
        "Custom C++ optimized parsing utilities for fast payload validation",
        "Comprehensive health check endpoints and alert logging"
      ]
    }
  ],

  journey: [
    {
      year: "2024 - Present",
      title: "Full Stack & AI Innovation",
      type: "Projects & Engineering",
      institution: "Personal Engineering & Open Source",
      description: "Building production-grade web applications, exploring AI API integrations, and contributing open source codebases on GitHub.",
      skills: ["React", "Node.js", "Tailwind CSS", "REST APIs", "AI Platforms"]
    },
    {
      year: "2023 - 2024",
      title: "Computer Engineering & Web Specialization",
      type: "Education & Hackathons",
      institution: "University Engineering Curriculum",
      description: "Mastered fundamental computer science concepts including Data Structures & Algorithms in C++, Relational Databases, and Modern Web Architectures.",
      skills: ["C++", "MySQL", "JavaScript", "HTML/CSS", "Git & GitHub"]
    },
    {
      year: "2022 - 2023",
      title: "Frontend Foundations & Modern Web UI",
      type: "Milestone",
      institution: "Self-Directed Mastery & Portfolio Creation",
      description: "Deep-dived into modern JavaScript (ES6+), responsive design systems, CSS Flexbox/Grid, and component-based UI engineering.",
      skills: ["HTML5", "CSS3", "JavaScript", "UI UX Prototyping"]
    }
  ],

  githubStats: {
    username: "Neej03",
    profileUrl: "https://github.com/Neej03",
    reposCount: 18,
    contributionsCount: "250+",
    topLanguages: ["JavaScript", "HTML/CSS", "C++", "Python"],
    repos: [
      {
        name: "Neej03/developer-portfolio",
        description: "Premium high-contrast creative developer portfolio with AI Assistant, Voice player, and 3D card tilt.",
        language: "JavaScript",
        stars: 12,
        forks: 4,
        url: "https://github.com/Neej03"
      },
      {
        name: "Neej03/nexus-ai-studio",
        description: "AI developer workflow suite with real-time compute telemetry and model dashboard UI.",
        language: "React",
        stars: 19,
        forks: 6,
        url: "https://github.com/Neej03"
      },
      {
        name: "Neej03/cpp-dsa-toolkit",
        description: "Comprehensive C++ Data Structures and Algorithms repository with clean benchmarks and comments.",
        language: "C++",
        stars: 15,
        forks: 5,
        url: "https://github.com/Neej03"
      }
    ]
  },

  aiAssistantKnowledge: [
    {
      keywords: ["who", "neej", "about", "bio", "introduction", "background"],
      answer: "Neej Butani is a Full Stack Developer and Creative Technologist based in India. He specializes in React, Node.js, C++, Tailwind CSS, and building high-performance web applications with stunning visual UI design."
    },
    {
      keywords: ["skill", "stack", "tech", "technology", "language", "framework"],
      answer: "Neej's primary tech stack includes Frontend (React, JavaScript, Tailwind CSS, HTML5/CSS3), Backend (Node.js, Express.js, REST APIs), Programming (C++, JavaScript, Python), Databases (MySQL, MongoDB, Firebase), and Developer Tools (Git, GitHub, VS Code, Figma)."
    },
    {
      keywords: ["project", "work", "build", "portfolio", "nexus", "hyperflow"],
      answer: "Neej has built several impressive projects including 'Nexus AI Studio' (an AI developer telemetry dashboard), 'HyperFlow Cloud' (database cluster management UI), 'Aether Editorial UI Kit', and 'Pulse Message Router'. You can explore them in the Projects section!"
    },
    {
      keywords: ["github", "code", "repo", "repository", "source"],
      answer: "You can find all of Neej's open-source projects and code on GitHub at https://github.com/Neej03. He has 18+ public repositories and active contribution activity."
    },
    {
      keywords: ["contact", "email", "reach", "hire", "linkedin", "message"],
      answer: "You can reach out to Neej via email at neej.butani1603@gmail.com or connect directly on LinkedIn at https://www.linkedin.com/in/neej-butani-085b6a286/. You can also submit the Contact Form on this site!"
    },
    {
      keywords: ["experience", "journey", "education", "degree", "c++"],
      answer: "Neej has a strong foundation in Computer Engineering, Data Structures & Algorithms in C++, relational database design, and modern full-stack web development."
    }
  ]
};
