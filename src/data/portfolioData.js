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
    reelVideoUrl: "/assets/neej_reel.mp4",
    reelPosterUrl: "/assets/project_nexus_ai.jpg",
    portraitImage: "/assets/neej_portrait.jpg",
    resumeUrl: "/assets/resume.pdf"
  },

  voiceSummary: "Hi, I'm Neej Butani, a Full Stack Developer focused on building modern web experiences, scalable backend systems, and AI-driven applications. Explore my selected projects, technical skills, and journey, and feel free to get in touch to build something extraordinary together.",

  stats: [
    { label: "Projects Completed", value: "19+", description: "Production-ready & live deployed web applications" },
    { label: "Vercel Live Apps", value: "17+", description: "Interactive deployed web endpoints" },
    { label: "GitHub Repositories", value: "20+", description: "Active open source codebases" },
    { label: "Tech Stack Mastery", value: "12+", description: "Modern web & cloud frameworks" }
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
      title: "Nexus Innovation",
      subtitle: "Central Gateway for AI, Data Science & Developer Platforms",
      category: "AI & ML",
      featured: true,
      image: "/assets/project_nexus_ai.jpg",
      description: "Central gateway web platform for AI, Data Science, and developer tools providing real-time telemetry, model deployment analytics, and interactive cloud workflows.",
      overview: "Nexus Innovation serves as an integrated central gateway connecting advanced AI tools, data science analytics, and cloud developer platforms into a unified obsidian command center.",
      problem: "Software and data science teams struggle with fragmented access to AI compute workloads, model latency telemetry, and developer tool suites.",
      solution: "Engineered a high-contrast crimson obsidian portal uniting real-time AI socket metrics, data science notebooks, and developer workflow automation.",
      techStack: ["React", "Node.js", "Tailwind CSS", "Framer Motion", "Express", "REST API"],
      liveUrl: "https://nexus-gamma-six-90.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus",
      highlights: [
        "Central gateway uniting AI model execution, dataset telemetry, and developer tools",
        "Sub-100ms API query results with optimized server route handling",
        "Custom glassmorphic red obsidian dark UI command center"
      ]
    },
    {
      id: "nexus-datascience-hub",
      title: "Nexus Data Science Hub",
      subtitle: "AI & Machine Learning Playground",
      category: "AI & ML",
      featured: true,
      image: "/assets/project_cybersecurity.jpg",
      description: "End-to-end data science platform enabling dataset exploration, model evaluation metrics, correlation heatmaps, interactive ML playground, and code execution.",
      overview: "Nexus Data Science Hub simplifies machine learning workflows. Data scientists and developers can upload raw datasets, run automated feature scaling checks, interact with machine learning models, and evaluate accuracy metrics in real time.",
      problem: "Managing machine learning experiment benchmarks and testing interactive ML algorithms usually requires fragmented Jupyter notebooks and complex local environments.",
      solution: "Created an interactive ML playground and centralized experiment dashboard featuring real-time model evaluation, ROC curve visualizers, and dataset statistical summaries.",
      techStack: ["React", "Python", "FastAPI", "Chart.js", "Tailwind CSS", "Scikit-Learn"],
      liveUrl: "https://nexus-datascience-hub.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-data-science-hub",
      highlights: [
        "Interactive AI & Machine Learning playground with real-time model evaluation",
        "Automated dataset statistical summary generator (distributions, missing values)",
        "Model accuracy comparison matrix across Random Forest, XGBoost, and Neural Nets"
      ]
    },
    {
      id: "nexus-design-pro",
      title: "Nexus Design Pro",
      subtitle: "Browser UI/UX Design Studio & Canvas Studio",
      category: "Frontend & Design",
      featured: false,
      image: "/assets/project_design_pro.jpg",
      description: "Feature-rich browser graphic and UI/UX design editor with interactive canvas element manipulation, layer hierarchy, real-time font styling, and asset export.",
      overview: "Nexus Design Pro provides creators and designers with a powerful, browser-based graphic canvas studio. It features drag-and-drop layer alignment, vector manipulation, and instant multi-format export.",
      problem: "Traditional desktop design tools are expensive and heavy, while basic online editors lack advanced layer controls and real-time element manipulation.",
      solution: "Built an intuitive React and Canvas-powered design platform featuring live element transformations, custom typography tokens, and instant SVG/PNG rendering.",
      techStack: ["React", "Tailwind CSS", "Canvas API", "Node.js", "Express", "Framer Motion"],
      liveUrl: "https://nexus-design-pro.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-design",
      highlights: [
        "Interactive canvas editor with real-time drag-and-drop layer manipulation",
        "Custom design system with rich vector asset libraries and font presets",
        "Sub-second image export and instant project state saving"
      ]
    },
    {
      id: "nexus-health-ai",
      title: "Nexus Health AI",
      subtitle: "Clinical Symptom Analysis & Medical Triage Platform",
      category: "AI & ML",
      featured: false,
      image: "/assets/project_health_ai.jpg",
      description: "Intelligent health platform enabling instant patient symptom evaluation, preliminary risk scoring, interactive 3D body maps, and appointment triage.",
      overview: "Nexus Health AI guides patients through structured symptom questionnaires using fine-tuned medical AI models to calculate urgency scores and suggest appropriate specialist care.",
      problem: "Patients often misdiagnose health symptoms or delay seeking proper medical triage when experiencing early symptoms.",
      solution: "Engineered an AI symptom intake portal with interactive body symptom selector and automated risk stratification reports.",
      techStack: ["React", "Node.js", "Express", "Gemini AI API", "Tailwind CSS"],
      liveUrl: "https://nexus-health-ai-topaz.vercel.app/",
      githubUrl: "https://github.com/Neej03/medai-healthcare",
      highlights: [
        "Interactive body region symptom selector with instant severity assessment",
        "AI-powered medical triage engine generating preliminary diagnostic guidance",
        "Secure patient health summary report export for doctor consultations"
      ]
    },
    {
      id: "nexus-cybersecurity",
      title: "Nexus Cybersecurity Operations",
      subtitle: "SIEM Threat Operations & Network Telemetry",
      category: "Cybersecurity & Tools",
      featured: false,
      image: "/assets/project_cybersecurity.jpg",
      description: "Security operations center (SOC) dashboard displaying real-time network intrusion alerts, IP threat geolocation, packet analysis, and vulnerability logs.",
      overview: "Nexus Cybersecurity Hub provides security engineers with live incident visibility. It aggregates log events, calculates risk scores, and visualizes network attack origin vectors on a dark obsidian world map.",
      problem: "Security teams are overwhelmed by raw unformatted logs and lack real-time visual threat mapping.",
      solution: "Designed a high-contrast SIEM command center featuring live websocket alert streams, threat severity filters, and automated incident logs.",
      techStack: ["React", "Node.js", "Socket.io", "Tailwind CSS", "Chart.js", "Express"],
      liveUrl: "https://nexus-cybersecurity.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-cybersecurity",
      highlights: [
        "Live simulated network intrusion event stream with severity badges",
        "Threat IP geolocation breakdown with automated risk calculation",
        "Exportable security audit report generator for compliance checks"
      ]
    },
    {
      id: "edu-ai-insight",
      title: "Edu AI Insight",
      subtitle: "AI Student Analytics & Learning Predictor",
      category: "AI & ML",
      featured: false,
      image: "/assets/project_edu_ai.jpg",
      description: "Educational intelligence platform leveraging machine learning to analyze student performance metrics, predict learning gaps, and deliver adaptive study plans.",
      overview: "Edu AI Insight bridges educational assessment with predictive AI. It analyzes quiz performance, subject retention curves, and study habits to generate individualized growth roadmaps for students.",
      problem: "Educators and students struggle to identify weak comprehension topics early before major assessments.",
      solution: "Developed an AI diagnostic engine that monitors mastery scores across topics and automatically curates target revision decks and weakness analytics.",
      techStack: ["React", "Node.js", "Tailwind CSS", "Chart.js", "Gemini API", "Express"],
      liveUrl: "https://edu-ai-insight-phi.vercel.app/",
      githubUrl: "https://github.com/Neej03/edu-ai-insight",
      highlights: [
        "Predictive learning analytics with real-time mastery heatmaps",
        "Automated AI study plan generator based on diagnostic quiz results",
        "Interactive progress monitoring with visual performance trend lines"
      ]
    },
    {
      id: "voice-of-india",
      title: "Voice of India",
      subtitle: "Multilingual Cultural Audio & Heritage Archive",
      category: "Full Stack",
      featured: false,
      image: "/assets/project_voice_of_india.jpg",
      description: "Interactive digital audio platform celebrating India's cultural diversity, regional dialects, and oral storytelling with geospatial audio mapping.",
      overview: "Voice of India preserves and showcases traditional stories, folk music, and linguistic heritage through an expressive interactive audio player and regional discovery map.",
      problem: "Indigenous stories and regional dialects are fading without dedicated digital archives that make listening accessible.",
      solution: "Created a high-fidelity web audio streaming platform featuring regional filters, synchronized transcripts, and interactive state-by-state listening maps.",
      techStack: ["React", "Web Audio API", "Tailwind CSS", "Framer Motion", "Node.js"],
      liveUrl: "https://voice-of-india-kappa.vercel.app/",
      githubUrl: "https://github.com/Neej03/voice-of-india",
      highlights: [
        "Custom Web Audio API synthesizer player with waveform visualizer",
        "Geospatial state map filter for discovering regional dialect audio stories",
        "High-performance audio streaming with responsive mobile layout"
      ]
    },
    {
      id: "nexus-particle",
      title: "Nexus Particle Engine",
      subtitle: "3D Physics Canvas & Interactive Visualizer",
      category: "Frontend & Design",
      featured: false,
      image: "/assets/project_design_pro.jpg",
      description: "High-performance 3D canvas particle simulator featuring real-time magnetic physics, cursor force fields, fluid dynamics, and custom color spectrum presets.",
      overview: "Nexus Particle Engine demonstrates mathematical particle physics rendering directly in the browser using HTML5 Canvas and WebGL shaders for fluid cursor interaction.",
      problem: "Standard web graphics lack dynamic particle physics and responsive cursor interaction without sacrificing frame rates.",
      solution: "Engineered an ultra-fast particle simulation rendering 5,000+ interactive nodes at 60 FPS with custom attraction and velocity math.",
      techStack: ["HTML5 Canvas", "JavaScript (ES6+)", "WebGL", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://nexus-particle.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-particle",
      highlights: [
        "Renders 5,000+ interactive particles smoothly at 60 FPS",
        "Dynamic cursor gravity field with spring attraction physics",
        "Configurable particle parameters (speed, radius, color spectrum, connection radius)"
      ]
    },
    {
      id: "nexus-study-hub",
      title: "Nexus Study Hub",
      subtitle: "Collaborative Student Workspace & Resource Platform",
      category: "Full Stack",
      featured: false,
      image: "/assets/project_edu_ai.jpg",
      description: "All-in-one study platform for students featuring shared note libraries, pomodoro focus timers, live study rooms, and interactive flashcard decks.",
      overview: "Nexus Study Hub organizes student productivity into a unified workspace. Users can collaborate on lecture notes, run timed focus sessions, and quiz themselves with interactive flashcards.",
      problem: "Students switch between multiple disjointed apps for timers, notes, and study groups, disrupting focus.",
      solution: "Consolidated study productivity into a clean single-page app with integrated focus tools and peer note sharing.",
      techStack: ["React", "Firebase", "Node.js", "Tailwind CSS", "Express"],
      liveUrl: "https://nexus-study-hub.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-study-hub",
      highlights: [
        "Integrated Pomodoro timer with customizable focus & break intervals",
        "Collaborative note sharing with category tagging and search",
        "Interactive flashcard review system with mastery tracking"
      ]
    },
    {
      id: "nexus-weather",
      title: "Nexus Weather Studio",
      subtitle: "Geospatial Weather Forecast & Interactive Radar",
      category: "Frontend & Design",
      featured: false,
      image: "/assets/project_weather.jpg",
      description: "Sleek geospatial weather visualizer providing live atmospheric metrics, 7-day trend forecasts, air quality indices, and dynamic weather animations.",
      overview: "Nexus Weather Studio delivers beautiful, instant meteorological data. It translates complex API metrics into intuitive visual graphs, satellite map overlays, and hourly temperature curves.",
      problem: "Weather sites are bloated with ads and cluttered layouts that delay finding quick forecasts.",
      solution: "Built an ad-free, high-contrast dark dashboard with instant geolocation lookup, animated weather state themes, and precise hourly trends.",
      techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "Leaflet Maps"],
      liveUrl: "https://nexus-weather-two.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-weather",
      highlights: [
        "Instant geolocation weather lookup with auto-detected coordinates",
        "Interactive hourly temperature & precipitation graphs",
        "Air quality index (AQI) radar breakdown and UV index warnings"
      ]
    },
    {
      id: "nexus-virtual-lab",
      title: "Nexus Virtual Lab",
      subtitle: "Interactive STEM Science Experiment Simulator",
      category: "Cybersecurity & Tools",
      featured: false,
      image: "/assets/project_blueprint_ai.jpg",
      description: "Interactive virtual science laboratory enabling students to simulate physics pendulum motion, chemical titration reactions, and electronic circuit building.",
      overview: "Nexus Virtual Lab turns science concepts into hands-on virtual experiments. Students can tweak resistance, voltage, and chemical concentrations and observe real-time simulated outcomes.",
      problem: "Students often lack access to physical laboratory equipment for conducting science experiments.",
      solution: "Designed interactive canvas laboratory modules with accurate physical parameter simulation and real-time data plotting.",
      techStack: ["React", "HTML5 Canvas", "Tailwind CSS", "Framer Motion", "Web Audio API"],
      liveUrl: "https://nexus-vitrtua-lab.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-virtual-lab",
      highlights: [
        "Real-time physics circuit simulator with Ohm's Law calculations",
        "Interactive chemical titration reaction visualizer with color change indicators",
        "Data logging graphs recording voltage, current, and reaction time"
      ]
    },
    {
      id: "nexus-viz",
      title: "Nexus Viz Studio",
      subtitle: "Business Intelligence & Dynamic Data Visualization",
      category: "Data Science & AI",
      featured: false,
      image: "/assets/project_hyperflow.jpg",
      description: "Enterprise data analytics dashboard supporting custom CSV dataset uploads, interactive heatmap matrices, dynamic bar charts, and exportable BI reports.",
      overview: "Nexus Viz Studio turns raw tabular data into compelling visual charts. Users can drag and drop CSV files to immediately inspect correlation heatmaps, revenue charts, and statistical distributions.",
      problem: "Data analysts need fast, zero-setup chart generation without configuring bulky BI enterprise software.",
      solution: "Created a client-side data parsing and visualization tool supporting automatic column type detection and instant SVG export.",
      techStack: ["React", "D3.js", "Chart.js", "Recharts", "Tailwind CSS", "PapaParse"],
      liveUrl: "https://nexus-viz-six.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-viz-studio",
      highlights: [
        "Instant client-side CSV parsing with automatic schema inference",
        "Interactive multi-dimensional charts (heatmaps, bar, area, scatter)",
        "High-resolution SVG & PNG chart export for presentation reports"
      ]
    },
    {
      id: "nexus-exam-pro",
      title: "Nexus Exam Pro",
      subtitle: "Online Assessment & Examination Engine",
      category: "Full Stack",
      featured: false,
      image: "/assets/project_edu_ai.jpg",
      description: "Secure online test engine featuring automated timed exams, anti-cheat tab focus monitoring, instant score calculation, and detailed topic diagnostics.",
      overview: "Nexus Exam Pro provides educational institutions with a reliable testing platform. It automates question randomization, timer synchronization, and detailed score breakdown analytics.",
      problem: "Online testing platforms often lack proper anti-cheat detection and detailed post-exam diagnostic feedback.",
      solution: "Built a secure assessment dashboard with live focus loss detection, auto-submission timers, and instant skill radar charts.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "https://nexus-exam-pro.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-exam-pro",
      highlights: [
        "Anti-cheat focus monitor flagging window blur and tab switching",
        "Auto-evaluating quiz engine with instant score calculation",
        "Comprehensive skill mastery diagnostic reports with category radar charts"
      ]
    },
    {
      id: "nexus-ecommerce",
      title: "Nexus E-Commerce Engine",
      subtitle: "Next-Gen High-Performance Shopping Marketplace",
      category: "Full Stack",
      featured: false,
      image: "/assets/project_ecommerce.jpg",
      description: "Modern e-commerce web app featuring real-time product filtering, sliding cart drawer, checkout flow, wishlist tracking, and high-contrast dark aesthetic.",
      overview: "Nexus E-Commerce Engine delivers a smooth shopping experience. It features instant multi-attribute product search, animated add-to-cart feedback, and state persistent cart management.",
      problem: "E-commerce applications frequently suffer from slow page reloads and sluggish cart interactions.",
      solution: "Developed a lightweight, highly animated React e-commerce frontend with optimistic UI updates and instant client filtering.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://nexus-ecommerce-jet.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-ecommerce",
      highlights: [
        "Instant category & price range filtering with zero reload latency",
        "Slide-out cart drawer with live subtotal calculation & quantity controls",
        "Optimistic wishlist saved state with persistent local storage"
      ]
    },
    {
      id: "nexus-health-portal",
      title: "Nexus Health Care Portal",
      subtitle: "Patient Records & Electronic Health Management",
      category: "Full Stack",
      featured: false,
      image: "/assets/project_health_ai.jpg",
      description: "Digital healthcare management suite for tracking patient vitals, prescription histories, lab test results, and telemedicine appointment schedules.",
      overview: "Nexus Health Care Portal streamlines clinical patient records for doctors and care providers. It organizes medical history, vital signs telemetry, and prescription logs into a clean, searchable interface.",
      problem: "Cluttered clinical EHR systems waste provider time and obscure critical patient lab trends.",
      solution: "Built an ergonomic patient dashboard featuring vital sign trend charts, instant prescription lookups, and appointment scheduling.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://nexus-health-liard.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-health",
      highlights: [
        "Patient vital sign timeline charts (heart rate, blood pressure, glucose)",
        "Searchable digital prescription log with dosage details",
        "Streamlined appointment booking schedule for hospital visits"
      ]
    },
    {
      id: "nexus-datascience-hub-grid",
      title: "Nexus Data Science Hub",
      subtitle: "AI & Machine Learning Playground",
      category: "AI & ML",
      featured: false,
      image: "/assets/project_cybersecurity.jpg",
      description: "End-to-end data science platform enabling dataset exploration, model evaluation metrics, correlation heatmaps, interactive ML playground, and code execution.",
      overview: "Nexus Data Science Hub simplifies machine learning workflows. Data scientists and developers can upload raw datasets, run automated feature scaling checks, interact with machine learning models, and evaluate accuracy metrics in real time.",
      problem: "Managing machine learning experiment benchmarks and testing interactive ML algorithms usually requires fragmented Jupyter notebooks and complex local environments.",
      solution: "Created an interactive ML playground and centralized experiment dashboard featuring real-time model evaluation, ROC curve visualizers, and dataset statistical summaries.",
      techStack: ["React", "Python", "FastAPI", "Chart.js", "Tailwind CSS", "Scikit-Learn"],
      liveUrl: "https://nexus-datascience-hub.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-data-science-hub",
      highlights: [
        "Interactive AI & Machine Learning playground with real-time model evaluation",
        "Automated dataset statistical summary generator (distributions, missing values)",
        "Model accuracy comparison matrix across Random Forest, XGBoost, and Neural Nets"
      ]
    },
    {
      id: "nexus-converter",
      title: "Nexus Universal Converter",
      subtitle: "Unit, Currency & Engineering Measurement Suite",
      category: "Cybersecurity & Tools",
      featured: false,
      image: "/assets/project_design_pro.jpg",
      description: "Fast, zero-latency unit conversion utility supporting real-time currency exchange rates, physics & engineering units, and offline calculator support.",
      overview: "Nexus Universal Converter provides instant multi-category conversions. It supports length, mass, temperature, digital storage, energy, and live foreign exchange currencies.",
      problem: "Online converters are plagued by ads, slow page loads, and inaccurate exchange rates.",
      solution: "Built an ad-free, instant web utility with auto-updating currency rates, recent conversion history, and keyboard shortcuts.",
      techStack: ["React", "JavaScript (ES6+)", "ExchangeRate API", "Tailwind CSS"],
      liveUrl: "https://nexus-converter-dusky.vercel.app/",
      githubUrl: "https://github.com/Neej03/nexus-converter",
      highlights: [
        "Instant zero-latency unit conversion across 10+ measurement categories",
        "Live foreign exchange currency converter with daily rate sync",
        "Quick copy result button and conversion history memory"
      ]
    },
    {
      id: "nexus-blueprint",
      title: "Nexus Blueprint AI",
      subtitle: "Generative Cloud Architecture & Diagram Synthesizer",
      category: "AI & ML",
      featured: false,
      image: "/assets/project_blueprint_ai.jpg",
      description: "Generative AI system architecture design tool that transforms natural language system prompts into interactive cloud infrastructure topology diagrams.",
      overview: "Nexus Blueprint AI accelerates system architecture planning. Engineers can describe workload requirements (e.g. 'high availability microservices on AWS') and receive complete node graphs, service specs, and cost estimates.",
      problem: "Drawing cloud architecture diagrams manually takes hours of effort in design tools.",
      solution: "Engineered an AI diagram engine that parses prompt requirements into connected node visualizers with infrastructure specs.",
      techStack: ["React", "Tailwind CSS", "Node.js", "Framer Motion", "Gemini API"],
      liveUrl: "https://nexus-blueprint-lime.vercel.app/",
      githubUrl: "https://github.com/Neej03/blueprint-ai",
      highlights: [
        "Natural language prompt to cloud architecture node graph synthesis",
        "Interactive node inspection showing instance specs, database tiers, and load balancers",
        "Estimated monthly cloud infrastructure cost breakdown calculator"
      ]
    },
    {
      id: "yatra-setu",
      title: "Yatra Setu",
      subtitle: "Smart Public Transit & Route Navigation Platform",
      category: "Full Stack",
      featured: false,
      image: "/assets/project_yatra_setu.jpg",
      description: "Intelligent travel assistance platform connecting regional transit schedules, train routes, live fare calculators, and interactive route mapping.",
      overview: "Yatra Setu simplifies multi-modal public commuting. It brings together bus timings, rail schedules, station maps, and transit fare comparison in an accessible, mobile-optimized UI.",
      problem: "Commuters struggle to navigate fragmented public transit schedules and calculate multi-modal travel costs.",
      solution: "Developed an intuitive route search engine with interactive station maps, real-time fare estimates, and transit timetables.",
      techStack: ["React", "Leaflet Maps", "Node.js", "Express", "Tailwind CSS"],
      liveUrl: "https://yatra-setu-iota.vercel.app/",
      githubUrl: "https://github.com/Neej03/yatra-setu",
      highlights: [
        "Interactive map-based route selection with station markers",
        "Multi-modal fare comparison across buses, trains, and local shuttles",
        "Saved offline route timetables and step-by-step travel directions"
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
    reposCount: 20,
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
      keywords: ["project", "work", "build", "portfolio", "nexus", "hyperflow", "vercel", "live"],
      answer: "Neej has built 19+ production applications including Nexus Innovation, HyperFlow Cloud, Nexus Design Pro, Nexus Health AI, Nexus Cybersecurity, Edu AI Insight, Yatra Setu, and more! 18+ of them are live deployed on Vercel."
    },
    {
      keywords: ["github", "code", "repo", "repository", "source"],
      answer: "You can find all of Neej's open-source projects and code on GitHub at https://github.com/Neej03. He has 20+ public repositories and active contribution activity."
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
