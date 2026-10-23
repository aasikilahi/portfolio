/**
 * Portfolio content. Edit this file to change what the site says.
 *
 * Facts come from the resume and from docs/source/refex-work.md.
 * Leave URL and screenshot fields empty ("") until you have a real file or link.
 * Do not paste a guessed URL.
 */

export const profile = {
  name: "Mohamed Aasikilahi M",
  title: "Senior Mobile Application Developer",
  focus: "Flutter & Native Android",
  subtitle: "Flutter | Native Android | Kotlin | Java",
  location: "Chennai, Tamil Nadu",
  currentLocation: "Chennai, Tamil Nadu",
  nativeLocation: "Tiruchirappalli, Tamil Nadu",
  email: "mdaasikilahi@gmail.com",
  phone: "+91 7402085201",
  phoneTel: "+917402085201",
  linkedinUrl: "https://www.linkedin.com/in/mohamed-aasik-ilahi-m-491862144/",
  /** Set a real profile URL. Empty shows an "add your URL" placeholder. */
  githubUrl: "",
  resumeDocx: "/Mohamed-Aasikilahi-M-Resume.docx",
  resumeDocxFilename: "Mohamed-Aasikilahi-M-Resume.docx",
  resumePdfFilename: "Mohamed-Aasikilahi-M-Resume.pdf",
};

export const seo = {
  title: "Mohamed Aasikilahi M | Senior Mobile Application Developer",
  description:
    "Senior Mobile Application Developer with 7+ years in IT and 4+ years in Android and Flutter. Offline-first apps, API integration, and automotive and enterprise work. Based in Chennai. Native of Tiruchirappalli.",
};

export const nav = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/#contact", label: "Contact" },
] as const;

export const hero = {
  intro:
    "I build production mobile applications and the integrations around them: offline-first architecture, API integration, and automotive and enterprise software. Seven-plus years in IT, with 4+ years specializing in Android and Flutter.",
};

export const highlights = [
  "7+ years of IT experience",
  "4+ years specializing in Android and Flutter",
  "Automotive, Salesforce, and enterprise domains",
  "Offline-first mobile architecture",
  "Bank API integration on RSA Pay",
  "Vahan vehicle-data API on Fit Valuation",
  "OBDII CarPM integration on the DearO overhaul",
  "Mentor and team leader",
  "AI-assisted development with ChatGPT, GitHub Copilot, Gemini, Cursor, and Claude",
  "Enterprise applications: expense, travel, P2P, and tech help desk",
];

export const about = {
  paragraphs: [
    "Mohamed Aasikilahi M is a senior mobile application developer with 7+ years of IT experience and 4+ years specializing in Android and Flutter. The path runs from junior Android work and system administration into enterprise software, then into Android and Flutter products for automotive and field teams.",
    "He started at Intelligent Software Solutions in Tiruchirappalli as a trainee and junior Android developer, building internal applications. At Mizan Almajd Balance Co Ltd. in Saudi Arabia the role was network and system administration, and he also developed a Java car-maintenance workflow. From 2022 the work returned to product engineering: Android at App Xperts, Salesforce-integrated mobile apps at Saneforce, and senior Android and Flutter work on automotive products at TVS Mobility Solution.",
    "The technical interest is practical: architecture, offline behavior, performance, API integration, and code a team can keep maintaining. The aim is software people can use on the job, not a demo that only works on a desk. At TVS Mobility Solution he worked as a mentor and team leader. With ChatGPT, GitHub Copilot, Gemini, Cursor, and Claude he can create an application in any language, and he uses those tools for debugging and updates as well. He now works at Refex Group, engaged via OmegaHires, on enterprise applications and integrations, plus the Android and iOS support those products require.",
  ],
};

export const education = {
  degree: "Bachelor of Engineering – Computer Science",
  school: "TRP Engineering College, Tiruchirappalli",
  dates: "2014 – 2017",
};

export type SkillGroup = {
  title: string;
  items: string[];
  note?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["Java", "Kotlin", "Dart", "SQL"],
  },
  {
    title: "Mobile Development",
    items: ["Android SDK", "Jetpack Components", "Flutter SDK", "Android"],
  },
  {
    title: "State Management",
    items: ["Provider", "Riverpod", "BLoC"],
  },
  {
    title: "Networking and APIs",
    items: [
      "REST APIs",
      "Retrofit",
      "Dio",
      "OAuth",
      "JSON",
      "Kissflow APIs",
      "Webhooks",
      "API-based workflow integration",
      "API security",
    ],
  },
  {
    title: "Local Storage and Offline Data",
    items: ["SQLite", "Room", "Hive", "SharedPreferences", "Offline-first architecture"],
  },
  {
    title: "Backend and Cloud",
    items: [
      "Firebase (Authentication, Crashlytics, Push Notifications)",
      "Google Cloud Storage",
      "PostgreSQL",
      "Database integration",
      "Caching and incremental synchronization",
    ],
  },
  {
    title: "Enterprise Platforms",
    items: [
      "Kissflow",
      "ITSM",
      "Workflow automation",
      "MIS dashboards",
      "Expense management",
      "Travel management",
      "P2P",
      "Tech Help Desk",
      "Google Cloud Console",
      "Google Cloud services",
    ],
  },
  {
    title: "Architecture",
    items: ["MVVM", "Clean Architecture", "Modular applications", "Modular design"],
  },
  {
    title: "Performance",
    items: [
      "App size reduction",
      "API optimization",
      "Offline synchronization strategies",
      "Performance tuning",
      "Cache-first and incremental data fetching",
    ],
  },
  {
    title: "UI and Reporting",
    items: [
      "UI/UX optimization",
      "KPI dashboards",
      "HTML email templates",
      "Responsive layouts",
      "Filters and scheduled reports",
    ],
  },
  {
    title: "Development Tools",
    items: [
      "Git",
      "GitHub",
      "CI/CD pipelines",
      "Android Studio",
      "VS Code",
      "ProGuard/R8",
      "Application packaging",
      "Environment configuration",
      "Deployment support",
    ],
  },
  {
    title: "AI-Assisted Development",
    items: ["ChatGPT", "GitHub Copilot", "Gemini", "Cursor", "Claude"],
    note: "Uses these tools to create applications in any language, and to debug and update them.",
  },
  {
    title: "Leadership",
    items: [
      "Mentor and team leader",
      "Sprint planning",
      "Code review",
      "Technical leadership",
      "Problem-solving",
      "Communication",
    ],
  },
];

export type Role = {
  id: string;
  company: string;
  /** Plain statement of how the engagement works, when it is not a direct hire. */
  engagement: string;
  location: string;
  title: string;
  dates: string;
  current: boolean;
  context: string;
  responsibilities: string[];
  technologies: string[];
  technologyNote: string;
  projectSlugs: string[];
};

export const roles: Role[] = [
  {
    id: "refex",
    company: "Refex Group",
    engagement: "Working at Refex Group, engaged via OmegaHires.",
    location: "Refex Towers, Nungambakkam, Chennai",
    title: "Software Developer – Flutter / Android & Enterprise Application Development",
    dates: "May 2026 – Present",
    current: true,
    context:
      "Enterprise application development and integration, plus Android and iOS support. ITSM dashboards and the Notification Engine are not described as Flutter apps.",
    responsibilities: [
      "Developed and enhanced enterprise applications and IT Service Management (ITSM) solutions, integrating RefexOne, Kissflow workflows, and internal business platforms.",
      "Implemented IT Help Desk features for ticket creation, assignment, status tracking, reopening, SLA monitoring, comments, attachments, and employee support workflows.",
      "Developed two-way communication between employees and IT agents, including Internal/User comment separation, reopen workflows, comment notifications, and attachment support.",
      "Integrated REST APIs and Kissflow APIs for ticket creation, workflow updates, task management, user data synchronization, and application integrations.",
      "Worked on the existing unified WhatsApp BOT and Email BOT tool the same way as on Kissflow, including WhatsApp integrations for employee support, application issue reporting, interactive menus, employee contact validation, and NDA document delivery.",
      "Worked on enterprise applications for expense management, travel management, procure-to-pay (P2P), and the tech help desk.",
      "Worked in Google Cloud Console and Google Cloud services for those enterprise applications.",
      "Built and maintained dynamic dashboards and MIS reports with KPI cards, filters, ticket status/stage mapping, role-based views, and entity-specific access.",
      "Developed cloud-based attachment handling using Google Cloud Storage (GCS), including upload integration, public URL generation, ticket attachments, and mobile image upload support.",
      "Enhanced notification and reporting platforms with HTML email templates, scheduled reports, expense/travel dashboards, incremental data processing, and scheduler reliability improvements.",
      "Optimized dashboard loading through cache-first and incremental data-fetching approaches, reducing unnecessary full data synchronization during dashboard access.",
      "Implemented user and role configuration, environment-specific integration settings, and deployment updates across development and live environments.",
      "Supported Android/iOS application functionality, including camera and microphone permissions, responsive UI enhancements, and mobile ticket conversation improvements.",
      "Managed Git-based source control, code merges, build/package updates, and deployment coordination for application and backend changes.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Android",
      "Kotlin",
      "Java",
      "REST APIs",
      "Kissflow APIs",
      "Webhooks",
      "Kissflow",
      "ITSM",
      "Google Cloud Storage",
      "Google Cloud Console",
      "Google Cloud services",
      "PostgreSQL",
      "Expense management",
      "Travel management",
      "P2P",
      "Tech Help Desk",
      "Git",
      "GitHub",
    ],
    technologyNote:
      "Flutter, Dart, Android, Kotlin, and Java stay part of the professional stack, and this role includes Android/iOS support. They are not a claim that the ITSM dashboards or the Notification Engine were built in Flutter.",
    projectSlugs: [
      "refexone-it-help-desk",
      "kissflow-itsm",
      "notification-engine",
      "whatsapp-bot",
    ],
  },
  {
    id: "tvs",
    company: "TVS Mobility Solution",
    engagement: "",
    location: "Chennai",
    title: "Senior Android & Flutter Developer",
    dates: "Mar 2024 – May 2026",
    current: false,
    context:
      "Developed high-performance automotive mobile applications with optimized UI/UX, workflow automation, and scalable architecture.",
    responsibilities: [
      "Built RSA Pay, a Flutter-based payment platform integrating bank APIs with role-based admin and user modules, reducing manual transaction handling by ~60%.",
      "Developed RSA Buddy, a Roadside Assistance case management system enabling real-time case handling for authorized partners.",
      "Led a full UI/UX overhaul of DearO Garage Management App, integrating OBDII CarPM diagnostic devices to improve service efficiency and vehicle health monitoring by ~35%.",
      "Contributed to TVS Fit, a Java-based garage inspection and spare parts inventory system, improving repair workflow accuracy.",
      "Built Fit Valuation, an offline-first vehicle valuation app with image/video capture, automated loan reporting, and Vahan API integration for used car financing.",
      "Worked as a mentor and team leader, improving delivery timelines, code quality, and modular architecture adoption.",
    ],
    technologies: [
      "Android",
      "Flutter",
      "Java",
      "Bank APIs",
      "OBDII",
      "CarPM",
      "Vahan API",
      "Offline-first",
    ],
    technologyNote:
      "Flutter is named on RSA Pay. Java is named on TVS Fit. RSA Buddy, DearO, and Fit Valuation do not name a language on the resume.",
    projectSlugs: ["rsa-buddy", "dearo", "fit-valuation", "rsa-pay", "tvs-fit"],
  },
  {
    id: "saneforce",
    company: "Saneforce Pvt Ltd.",
    engagement: "",
    location: "Chennai",
    title: "Software Engineer",
    dates: "Jan 2023 – Feb 2024",
    current: false,
    context:
      "Specialized in offline-first mobile applications and Salesforce-integrated platforms for field users.",
    responsibilities: [
      "Developed San CLM, a Java-based offline Salesforce tablet app, increasing remote productivity by ~40%.",
      "Built SanZen, a Flutter Salesforce application with improved performance and modern UI/UX.",
      "Developed San SFE, a Kotlin-based mobile Salesforce management system enabling real-time sales insights.",
      "Created Go Diary, a Kotlin delivery management app optimizing routing, orders, and customer experience.",
    ],
    technologies: ["Java", "Flutter", "Kotlin", "Salesforce", "Offline-first"],
    technologyNote: "",
    projectSlugs: ["san-clm", "sanzen", "san-sfe", "go-diary"],
  },
  {
    id: "app-xperts",
    company: "App Xperts",
    engagement: "",
    location: "Chennai",
    title: "Android Developer",
    dates: "Apr 2022 – Sept 2022",
    current: false,
    context: "Built modular Android applications emphasizing scalability and maintainability.",
    responsibilities: [
      "Developed Tipper, a Java-based restaurant tipping and payment workflow app (work in progress).",
      "Created an in-house payroll and attendance system in Kotlin, automating salary processing.",
      "Built Brand Bazaar, a real-time marketplace app connecting brands with buyers.",
      "Maintained and stabilized a legacy ERP PRO Java application by resolving critical bugs.",
    ],
    technologies: ["Java", "Kotlin"],
    technologyNote:
      "Brand Bazaar does not name a language on the resume. ERP PRO is maintenance of a legacy Java application, not a new build.",
    projectSlugs: ["tipper", "in-house-payroll-and-attendance", "brand-bazaar", "erp-pro"],
  },
  {
    id: "mizan",
    company: "Mizan Almajd Balance Co Ltd.",
    engagement: "",
    location: "Saudi Arabia",
    title: "Network & System Administrator",
    dates: "Jan 2019 – Feb 2022",
    current: false,
    context:
      "Managed enterprise networks, internal applications, system troubleshooting, and attendance platforms.",
    responsibilities: [
      "Supported SMACC accounting software, improving financial workflow efficiency for users across the Middle East.",
      "Developed a Java-based car maintenance workflow system for task assignment and progress tracking.",
    ],
    technologies: ["Java"],
    technologyNote:
      "The title on the resume is Network & System Administrator. SMACC is software he supported, not a product credited as his build. No network-vendor tools are named.",
    projectSlugs: ["car-maintenance-workflow"],
  },
  {
    id: "iss",
    company: "Intelligent Software Solutions",
    engagement: "",
    location: "Tiruchirappalli",
    title: "Trainee & Junior Android Developer",
    dates: "Jan 2018 – Nov 2018",
    current: false,
    context: "Built internal mobile applications for enterprise operations.",
    responsibilities: [
      "Developed a Geo-Fencing app with location-based automation features in Java.",
      "Implemented Excel upload and advanced search modules for efficient data management.",
      "Built an attendance management system in Java for internal operations.",
    ],
    technologies: ["Java"],
    technologyNote:
      "The Excel upload and advanced search modules do not name a language on the resume.",
    projectSlugs: ["geo-fencing", "excel-upload-and-advanced-search", "attendance-management-system"],
  },
];

export type ProjectBand = "current" | "featured" | "earlier";

export type Project = {
  slug: string;
  name: string;
  band: ProjectBand;
  employerId: string;
  label: string;
  summary: string;
  overview: string;
  problem: string;
  role: string;
  stack: string[];
  stackNote: string;
  challenges: string[];
  implementation: string[];
  outcome: string;
  /** Real Play Store URL, or "" if none / ambiguous. */
  playStoreUrl: string;
  /** Live product or admin URL, when it is not a store listing. */
  productUrl?: string;
  productUrlLabel?: string;
  /** Leave "" until there is a real repository. */
  githubUrl: string;
  /** Public path such as "/projects/rsa-buddy.png". Leave "" until a real screenshot exists. */
  screenshot: string;
  screenshotAlt: string;
  visual: "mobile" | "enterprise" | "workflow";
};

const estimate =
  "This percentage is the approximate figure written on the resume (~). It is not presented here as an audited measurement.";

export const projects: Project[] = [
  {
    slug: "rsa-buddy",
    name: "RSA Buddy",
    band: "featured",
    employerId: "tvs",
    label: "Published mobile",
    summary:
      "Roadside Assistance case management for real-time case handling by authorized partners.",
    overview:
      "RSA Buddy is a Roadside Assistance case management system. The resume credits Mohamed with developing it so authorized partners can handle cases in real time. A Play Store listing is linked from the resume.",
    problem:
      "Authorized partners needed to handle roadside assistance cases in real time. That is the need the resume states. No further operational brief is on the resume.",
    role: "Developed the case management system. The resume uses “Developed,” which is his contribution during the TVS Mobility Solution role, while he was also a mentor and team leader. It does not describe a solo company or name the rest of the delivery team on this app.",
    stack: [],
    stackNote:
      "The resume does not name a language or framework on the RSA Buddy line. The role was Senior Android & Flutter Developer. Flutter is not assumed for this app.",
    challenges: [
      "Real-time case handling for authorized partners.",
    ],
    implementation: [
      "Developed a Roadside Assistance case management system.",
      "Enabled real-time case handling for authorized partners.",
    ],
    outcome:
      "The stated outcome is real-time case handling for authorized partners. The resume gives no usage, uptime, or volume figures.",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.tvs.rsa_case_mgmt&hl=en_IN",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "dearo",
    name: "DearO Garage Management",
    band: "featured",
    employerId: "tvs",
    label: "Published mobile",
    summary:
      "Led the UI/UX overhaul and integrated OBDII CarPM diagnostic devices for garage service.",
    overview:
      "DearO is a garage management app. Mohamed led a full UI/UX overhaul and integrated OBDII CarPM diagnostic devices. The resume links a Play Store listing. It does not say he created the original DearO product.",
    problem:
      "The overhaul and device integration were done to improve service efficiency and vehicle health monitoring. That purpose is stated on the resume. A separate problem statement is not.",
    role: "Led the UI/UX overhaul and the OBDII CarPM integration described on the resume. This is leadership of that overhaul, not a claim that he authored the original DearO app. The same employer period includes his work as a mentor and team leader.",
    stack: ["OBDII", "CarPM"],
    stackNote:
      "The resume does not name Java, Kotlin, or Flutter on the DearO line. Only the OBDII CarPM diagnostic integration is named.",
    challenges: [
      "A full UI/UX overhaul of an existing garage management app.",
      "Integrating OBDII CarPM diagnostic devices into the service workflow.",
    ],
    implementation: [
      "Led the UI/UX overhaul of DearO Garage Management App.",
      "Integrated OBDII CarPM diagnostic devices for vehicle health monitoring.",
    ],
    outcome: `The resume states an approximate improvement of ~35% in service efficiency and vehicle health monitoring, as one combined claim. ${estimate}`,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.carworkz.dearo&hl=en_IN",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "fit-valuation",
    name: "Fit Valuation",
    band: "featured",
    employerId: "tvs",
    label: "Mobile · listing not confirmed",
    summary:
      "Offline-first vehicle valuation with image and video capture, loan reporting, and the Vahan API.",
    overview:
      "Fit Valuation is an offline-first vehicle valuation app for used car financing. It includes image and video capture, automated loan reporting, and Vahan API integration. The resume says he built it.",
    problem:
      "Used car financing needed vehicle valuation that could run offline, capture image and video, produce loan reports, and pull vehicle data from the Vahan API. Those are the capabilities the resume names.",
    role: "Built the app, as credited on the resume, during the TVS Mobility Solution role. The resume does not split the work between him and the team he was leading as a mentor and team leader.",
    stack: ["Offline-first", "Image and video capture", "Vahan API", "Loan reporting"],
    stackNote:
      "The resume does not name Flutter, Kotlin, or Java on the Fit Valuation line. The resume’s Play Store link on this bullet points at a different package name (com.tvsfit.inspection) and is not used here. See the accuracy log.",
    challenges: [
      "Offline-first valuation. The resume names the approach and does not describe the sync design.",
      "Image and video capture as part of the valuation record.",
      "Vahan API integration for vehicle data.",
      "Automated loan reporting.",
    ],
    implementation: [
      "Built an offline-first vehicle valuation app.",
      "Added image and video capture.",
      "Automated loan reporting.",
      "Integrated the Vahan API for used car financing.",
    ],
    outcome:
      "The resume describes the app as supporting used car financing through offline valuation, media capture, loan reporting, and Vahan data. It gives no volume or accuracy figure.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "rsa-pay",
    name: "RSA Pay",
    band: "featured",
    employerId: "tvs",
    label: "Mobile · no public listing on the resume",
    summary:
      "Flutter payment platform with bank APIs and role-based admin and user modules.",
    overview:
      "RSA Pay is a Flutter-based payment platform. It integrates bank APIs and separates role-based admin and user modules. The resume says he built it. No store listing is attached to this project.",
    problem:
      "The resume presents RSA Pay as the way manual transaction handling was reduced, through a payment platform with bank API integration and distinct admin and user modules.",
    role: "Built the Flutter payment platform, as credited on the resume. Bank names are not stated. Do not treat the app as a public store listing; the resume does not link one.",
    stack: ["Flutter", "Bank APIs", "Role-based admin and user modules"],
    stackNote: "Dart is the Flutter language and is part of the core profile. The RSA Pay line names Flutter and bank APIs specifically.",
    challenges: [
      "Integrating bank APIs into the payment platform.",
      "Separating role-based admin and user modules.",
    ],
    implementation: [
      "Built the payment platform in Flutter.",
      "Integrated bank APIs.",
      "Implemented role-based admin and user modules.",
    ],
    outcome: `The resume says this reduced manual transaction handling by ~60%. ${estimate} No bank, transaction count, or store listing is named.`,
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "refexone-it-help-desk",
    name: "RefexOne Super App – IT Help Desk",
    band: "current",
    employerId: "refex",
    label: "Enterprise / integration · mobile support",
    summary:
      "IT Help Desk on RefexOne: tickets, Kissflow, attachments, and stated Android/iOS support.",
    overview:
      "Enterprise application work on the RefexOne Super App IT Help Desk. Scope is ticket handling, Kissflow workflow integration, two-way employee and agent communication, Google Cloud Storage attachments, and specific Android/iOS support. It is current work at Refex Group.",
    problem:
      "Employees and IT agents needed ticket creation, reopening, assignment, comments, attachments, and status management, with Kissflow workflows and a way to move images from mobile into the ticket.",
    role: "He developed the IT Help Desk behavior listed here and supported Android/iOS functionality: camera and microphone permissions, responsive UI, mobile ticket conversations, mobile image upload, launcher navigation, and authentication checks. The Play Store link is the RefexOne Super App listing. He is not described as the author of the entire RefexOne mobile app, and this Help Desk work is not described as a Flutter build.",
    stack: [
      "Kissflow",
      "REST APIs",
      "Google Cloud Storage",
      "Android/iOS permissions",
      "Authentication",
    ],
    stackNote:
      "Mobile claims are limited to the support list above. Flutter is not listed as the implementation stack for this Help Desk.",
    challenges: [
      "Ticket creation, reopening, assignment, comments, attachments, and status management.",
      "Kissflow workflows with IT agent dashboards and two-way employee communication.",
      "GCS-based attachments, including mobile image uploads.",
      "Launcher navigation, authentication checks, and Android/iOS permissions.",
    ],
    implementation: [
      "Developed ticket creation, reopening, assignment, comments, attachments, and status management.",
      "Integrated Kissflow workflows, IT agent dashboards, and two-way employee communication.",
      "Implemented GCS-based ticket attachments, including mobile image uploads.",
      "Enhanced launcher navigation, authentication checks, and Android/iOS permissions.",
    ],
    outcome:
      "The notes describe a working IT Help Desk integrated with Kissflow and GCS, including mobile image upload and the Android/iOS support above. The RefexOne Super App is listed on the Play Store. No volume, SLA, or time-saved figure is stated.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.refex.refexone&hl=en_IN",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "enterprise",
  },
  {
    slug: "kissflow-itsm",
    name: "Kissflow ITSM – Refex & Extrovis",
    band: "current",
    employerId: "refex",
    label: "Enterprise / integration",
    summary:
      "Service-ticket workflows, dashboards, and MIS for Refex and Extrovis.",
    overview:
      "Workflow automation, dashboard development, and MIS on Kissflow ITSM for Refex and Extrovis. This is enterprise work, not a Flutter mobile app.",
    problem:
      "Service tickets needed entity-based assignment, reopen handling, approval stages, and dashboards for tasks, team queues, employee tickets, SLA, and KPIs, with separate internal and user comments.",
    role: "He configured the workflows and developed the dashboard and comment behavior described below. The notes do not define what Extrovis is beyond the name on these dashboards, and they do not describe this work as Flutter.",
    stack: ["Kissflow", "ITSM", "MIS dashboards", "Email notifications"],
    stackNote: "Not a Flutter or native Android build.",
    challenges: [
      "Entity-based assignment, reopen handling, and approval stages.",
      "Dashboards for My Tasks, My Team, employee tickets, SLA tracking, and KPI reporting.",
      "Internal/User comment controls, email notifications, and attachment workflows.",
      "Status and stage mapping, role-based access, and filtering across Refex and Extrovis dashboards.",
    ],
    implementation: [
      "Configured service ticket workflows, entity-based assignment, reopen handling, and approval stages.",
      "Developed dashboard features for My Tasks, My Team, employee tickets, SLA tracking, and KPI reporting.",
      "Implemented Internal/User comment controls, email notifications, and attachment workflows.",
      "Improved status/stage mapping, role-based access, and filtering across Refex and Extrovis dashboards.",
    ],
    outcome:
      "The notes describe configured workflows and dashboard views for Refex and Extrovis, including SLA and KPI reporting. No adoption or timing figure is stated.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "enterprise",
  },
  {
    slug: "notification-engine",
    name: "Notification Engine – Reporting & Automation Platform",
    band: "current",
    employerId: "refex",
    label: "Enterprise / integration",
    summary:
      "KPI dashboards, scheduled HTML email reports, and incremental data processing.",
    overview:
      "A reporting and automation platform: KPI dashboards, HTML email reports, MIS filters, expense and travel reporting, and scheduled delivery. The admin login is a live Google Cloud Run app. Cloud integration here is about data processing and release workflow, not a mobile client. This is not a Flutter application.",
    problem:
      "Reports and dashboards needed reliable schedules, less repeated full-data fetching, and admin tools for viewing data and managing platform users. Duplicate and overlapping scheduler jobs were a stated defect.",
    role: "He enhanced the reporting platform, scheduling, data loading, and admin features listed below, and supported backend and admin UI deployments. The notes do not describe this engine as a mobile or Flutter project.",
    stack: [
      "KPI dashboards",
      "HTML email",
      "Scheduled reports",
      "Cache-first loading",
      "Incremental data processing",
      "Git",
    ],
    stackNote:
      "PostgreSQL is a skill he can explain for this role. The Notification Engine notes say “database viewing” and do not name PostgreSQL as this product’s database, so it is not listed as a project fact.",
    challenges: [
      "Duplicate jobs and simultaneous execution in the scheduler.",
      "Dashboard loads that were repeating full data fetches.",
      "Scheduled HTML email delivery for KPI, MIS, expense, and travel reports.",
    ],
    implementation: [
      "Enhanced KPI dashboards, HTML email reports, MIS filters, and expense/travel reporting.",
      "Improved scheduled report delivery and resolved duplicate jobs and simultaneous execution issues.",
      "Implemented cache-first and incremental data processing to reduce repeated full data fetches.",
      "Developed database viewing, pagination, column selection, and platform user-management features.",
      "Supported backend and admin UI deployments and Git-based release workflows.",
    ],
    outcome:
      "Scheduled delivery and scheduler collisions were improved, and dashboard access no longer depends on a full data synchronization every time. The notes do not quantify the reduction.",
    playStoreUrl: "",
    productUrl: "https://refex-admin-ui-dhwffeu7pq-el.a.run.app/login",
    productUrlLabel: "Notification Engine admin",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "workflow",
  },
  {
    slug: "whatsapp-bot",
    name: "WhatsApp BOT, Email BOT & Business Integrations",
    band: "current",
    employerId: "refex",
    label: "Enterprise / integration",
    summary:
      "Work on an existing unified WhatsApp and Email BOT tool, in the same way as the Kissflow work.",
    overview:
      "The WhatsApp BOT and Email BOT were already one unified tool. He works on that tool the same way as on Kissflow: integration, workflow, and support configuration. The WhatsApp side includes Kissflow flows for employee support and application issue reporting, plus NDA document delivery through Google Cloud Storage. This is not a mobile app he built, and he is not described as the original author of the bot product.",
    problem:
      "Employees needed a WhatsApp path to reach support, check that a mobile number belongs to an employee, open a ticket, and receive an NDA document. The Email BOT sits in the same existing tool.",
    role: "He works on the existing unified bot tool the same way as on Kissflow. The WhatsApp integrations he has described are menus, employee validation, ticket creation, and NDA delivery. The notes do not say he built the WhatsApp client, the original bot product, or a Flutter app for this.",
    stack: ["WhatsApp BOT", "Email BOT", "Kissflow APIs", "REST APIs", "Google Cloud Storage"],
    stackNote:
      "The bot tool already existed as one unified WhatsApp and Email BOT. His work is the same kind of enterprise configuration and integration as Kissflow, not a Flutter or native Android build.",
    challenges: [
      "Connecting WhatsApp BOT flows to Kissflow APIs for support and issue reporting.",
      "Dynamic menus and employee mobile-number validation before ticket creation.",
      "NDA document delivery through Google Cloud Storage.",
    ],
    implementation: [
      "Integrated WhatsApp BOT flows with Kissflow APIs for employee support and application issue reporting.",
      "Implemented dynamic menus, employee mobile-number validation, and ticket creation.",
      "Integrated NDA document delivery using Google Cloud Storage.",
      "Configured BOT-driven support flows and associated workflow conditions.",
    ],
    outcome:
      "The notes describe BOT-driven support flows that can validate an employee number, create a ticket, and deliver an NDA from Google Cloud Storage. No message-volume figure is stated.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "workflow",
  },
  {
    slug: "tvs-fit",
    name: "TVS Fit",
    band: "earlier",
    employerId: "tvs",
    label: "Mobile · contribution",
    summary: "Java garage inspection and spare parts inventory. He contributed; he did not claim sole authorship.",
    overview:
      "TVS Fit is a Java-based garage inspection and spare parts inventory system. The resume says he contributed to it, with the aim of improving repair workflow accuracy.",
    problem:
      "Garage inspection and spare parts inventory needed a clearer repair workflow. The resume states the contribution in those terms and does not expand the brief.",
    role: "Contributed. The resume does not say he designed or solely built TVS Fit. Treat this as participation in an existing Java system.",
    stack: ["Java"],
    stackNote:
      "The Play Store URL attached to the TVS Fit line in the resume file is the same DearO package (com.carworkz.dearo). A different URL, com.tvsfit.inspection, is attached to the Fit Valuation line. Neither link is shown on this page, because the mapping is ambiguous.",
    challenges: [
      "Garage inspection and spare parts inventory in a Java system.",
      "Repair workflow accuracy, which is the outcome the resume names, not a measured defect list.",
    ],
    implementation: [
      "Contributed to the Java garage inspection and spare parts inventory system.",
    ],
    outcome:
      "The resume says the contribution improved repair workflow accuracy. It gives no error-rate or time figure.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "san-clm",
    name: "San CLM",
    band: "earlier",
    employerId: "saneforce",
    label: "Published mobile",
    summary: "Java offline Salesforce tablet app for field users.",
    overview:
      "San CLM is a Java-based offline Salesforce tablet app. The resume says he developed it for field users and links a Play Store listing.",
    problem:
      "Field users needed a Salesforce tablet app that still works offline. The resume states that purpose through the app description and does not add a separate client brief.",
    role: "Developed the app, as credited on the resume. Salesforce is the platform it integrates with. No customer account is named.",
    stack: ["Java", "Salesforce", "Offline-first", "Tablet"],
    stackNote: "",
    challenges: [
      "Offline use on a tablet while staying tied to Salesforce.",
    ],
    implementation: [
      "Developed a Java-based offline Salesforce tablet app.",
    ],
    outcome: `The resume says this increased remote productivity by ~40%. ${estimate}`,
    playStoreUrl: "https://play.google.com/store/apps/details?id=saneforce.sanclm&hl=en_IN",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "sanzen",
    name: "SanZen",
    band: "earlier",
    employerId: "saneforce",
    label: "Published mobile",
    summary: "Flutter Salesforce application with a stated performance and UI/UX improvement.",
    overview:
      "SanZen is a Flutter application integrated with Salesforce. The resume says he built it, with improved performance and a modern UI/UX, and links a Play Store listing.",
    problem:
      "The resume frames SanZen as a Flutter Salesforce application whose performance and UI/UX needed to improve. It does not describe the previous version.",
    role: "Built the Flutter application, as credited on the resume.",
    stack: ["Flutter", "Salesforce"],
    stackNote: "",
    challenges: [
      "Performance of the Salesforce mobile application.",
      "A more modern UI/UX.",
    ],
    implementation: [
      "Built a Flutter Salesforce application.",
      "Improved performance and UI/UX, as stated on the resume, without a listed technique.",
    ],
    outcome:
      "The resume reports improved performance and a modern UI/UX. It does not give a timing, size, or crash figure.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=saneforce.sanzen&hl=en_IN",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "san-sfe",
    name: "San SFE",
    band: "earlier",
    employerId: "saneforce",
    label: "Published mobile",
    summary: "Kotlin Salesforce management app for real-time sales insights.",
    overview:
      "San SFE is a Kotlin-based mobile Salesforce management system. The resume says he developed it to provide real-time sales insights, and links a Play Store listing.",
    problem:
      "Sales teams needed real-time insights in a mobile Salesforce management system. That is the need named on the resume.",
    role: "Developed the Kotlin application, as credited on the resume.",
    stack: ["Kotlin", "Salesforce"],
    stackNote: "",
    challenges: ["Real-time sales insights on a mobile Salesforce management system."],
    implementation: [
      "Developed a Kotlin-based mobile Salesforce management system.",
      "Enabled real-time sales insights.",
    ],
    outcome:
      "The stated outcome is real-time sales insights. The resume gives no revenue or adoption figure.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.saneforce.sansfe&hl=en_IN",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "go-diary",
    name: "Go Diary",
    band: "earlier",
    employerId: "saneforce",
    label: "Published mobile",
    summary: "Kotlin delivery management for routing, orders, and customer experience.",
    overview:
      "Go Diary is a Kotlin delivery management app. The resume says he created it to optimize routing, orders, and customer experience, and links a Play Store listing. The package id on that link is com.saneforce.godairy.",
    problem:
      "Delivery work needed a mobile app covering routing, orders, and customer experience. The resume does not break those into separate requirements.",
    role: "Created the app, as credited on the resume.",
    stack: ["Kotlin"],
    stackNote:
      "The Play Store package id on the resume link is com.saneforce.godairy. It is the hyperlink attached to the Go Diary bullet, so it is shown here.",
    challenges: ["Routing, orders, and customer experience in one delivery workflow."],
    implementation: [
      "Created a Kotlin delivery management app.",
      "Aimed at optimizing routing, orders, and customer experience.",
    ],
    outcome:
      "The resume says the app optimizes routing, orders, and customer experience. It gives no on-time or order-volume figure.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.saneforce.godairy&hl=en_IN",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "tipper",
    name: "Tipper",
    band: "earlier",
    employerId: "app-xperts",
    label: "Work in progress",
    summary: "Java restaurant tipping and payment workflow. The resume marks it as work in progress.",
    overview:
      "Tipper is a Java-based restaurant tipping and payment workflow app. The resume lists it as work in progress. It is not described as a released or public app.",
    problem:
      "A restaurant tipping and payment workflow. The resume does not describe a customer, a launch, or which parts were finished.",
    role: "Developed the app while it was still in progress. Do not describe Tipper as shipped.",
    stack: ["Java"],
    stackNote: "",
    challenges: ["A tipping and payment workflow for a restaurant context."],
    implementation: [
      "Developed a Java-based restaurant tipping and payment workflow app.",
      "The resume marks the work as in progress and does not list finished modules.",
    ],
    outcome: "No release or result is stated. The resume’s own status is work in progress.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "in-house-payroll-and-attendance",
    name: "In-House Payroll and Attendance",
    band: "earlier",
    employerId: "app-xperts",
    label: "Internal",
    summary: "Kotlin payroll and attendance system that automated salary processing.",
    overview:
      "An in-house payroll and attendance system built in Kotlin at App Xperts. The resume says it automated salary processing. It is internal, with no public listing. It is a different system from the 2018 Java attendance app at Intelligent Software Solutions.",
    problem:
      "Salary processing and attendance needed to be handled in an internal system rather than manually. The resume states the automation and does not describe the payroll rules.",
    role: "Created the system, as credited on the resume.",
    stack: ["Kotlin"],
    stackNote: "",
    challenges: ["Automating salary processing together with attendance."],
    implementation: [
      "Created an in-house payroll and attendance system in Kotlin.",
      "Automated salary processing.",
    ],
    outcome:
      "The stated result is automated salary processing. No headcount, cycle time, or accuracy figure is given.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "workflow",
  },
  {
    slug: "brand-bazaar",
    name: "Brand Bazaar",
    band: "earlier",
    employerId: "app-xperts",
    label: "Mobile · no public listing on the resume",
    summary: "Real-time marketplace connecting brands with buyers.",
    overview:
      "Brand Bazaar is a real-time marketplace app connecting brands with buyers. The resume says he built it. No store listing or language is named, so it is not presented as a public app.",
    problem:
      "Brands and buyers needed a real-time marketplace. The resume does not name a category, city, or transaction type.",
    role: "Built the app, as credited on the resume.",
    stack: [],
    stackNote: "The resume does not name the language or a backend.",
    challenges: ["Real-time connection between brands and buyers."],
    implementation: ["Built a real-time marketplace app connecting brands with buyers."],
    outcome: "No launch, download, or sales figure is on the resume.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "erp-pro",
    name: "ERP PRO",
    band: "earlier",
    employerId: "app-xperts",
    label: "Maintenance",
    summary: "Stabilized a legacy Java ERP by fixing critical bugs. Not a greenfield build.",
    overview:
      "ERP PRO is a legacy Java application. The resume says Mohamed maintained and stabilized it by resolving critical bugs. It does not say he built the original system.",
    problem:
      "Critical bugs in a legacy Java ERP. The resume does not list the defects.",
    role: "Maintenance and stabilization. Resolving critical bugs is the contribution. Authorship of ERP PRO is not claimed.",
    stack: ["Java"],
    stackNote: "",
    challenges: ["Critical bugs in a legacy Java codebase."],
    implementation: [
      "Maintained the legacy ERP PRO Java application.",
      "Resolved critical bugs. The individual defects are not listed on the resume.",
    ],
    outcome:
      "The resume says the application was stabilized. It does not define a crash rate or ticket count.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "workflow",
  },
  {
    slug: "car-maintenance-workflow",
    name: "Java-based Car Maintenance Workflow System",
    band: "earlier",
    employerId: "mizan",
    label: "Internal",
    summary: "Java workflow for assigning car-maintenance tasks and tracking progress.",
    overview:
      "A Java-based car maintenance workflow system for task assignment and progress tracking, developed while Mohamed was Network & System Administrator at Mizan Almajd Balance Co Ltd. in Saudi Arabia. It is internal. SMACC, the accounting package he supported in the same role, is a separate product and not this system.",
    problem:
      "Car-maintenance work needed task assignment and progress tracking. The resume does not describe a client brand or a mobile client.",
    role: "Developed the workflow system. The job title on the resume for this period is Network & System Administrator, not a mobile-developer title.",
    stack: ["Java"],
    stackNote: "",
    challenges: ["Task assignment and progress tracking for car maintenance."],
    implementation: [
      "Developed a Java-based car maintenance workflow system.",
      "Covered task assignment and progress tracking.",
    ],
    outcome: "No throughput or adoption figure is stated.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "workflow",
  },
  {
    slug: "geo-fencing",
    name: "Geo-Fencing",
    band: "earlier",
    employerId: "iss",
    label: "Internal",
    summary: "Java geo-fencing app with location-based automation, built for internal operations.",
    overview:
      "A geo-fencing app with location-based automation, written in Java. It was one of the internal mobile applications at Intelligent Software Solutions. The resume does not describe it as a public app.",
    problem:
      "Internal operations needed location-based automation. The resume does not name the business rule that the fence enforced.",
    role: "Developed the app as a trainee and junior Android developer.",
    stack: ["Java", "Location"],
    stackNote: "“Location-based automation” is the resume’s phrase. No maps SDK is named.",
    challenges: ["Location-based automation around a geo-fence."],
    implementation: [
      "Developed a geo-fencing app in Java.",
      "Added location-based automation features.",
    ],
    outcome: "No pilot size or accuracy figure is stated.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "mobile",
  },
  {
    slug: "excel-upload-and-advanced-search",
    name: "Excel Upload and Advanced Search",
    band: "earlier",
    employerId: "iss",
    label: "Internal",
    summary: "Excel upload and advanced search modules for internal data management.",
    overview:
      "Modules for Excel upload and advanced search, implemented for efficient data management while Mohamed was a trainee and junior Android developer. The resume calls them modules, not a standalone public app, and does not name the language.",
    problem:
      "Internal data needed to be loaded from Excel and searched with something more than a basic query. The resume does not describe the data set.",
    role: "Implemented the modules. They sit with the other internal enterprise apps from this role. A language is not stated on this bullet, so none is assigned.",
    stack: ["Excel upload", "Advanced search"],
    stackNote: "Language is not named on the resume for these modules.",
    challenges: ["Getting Excel data into the system and making it searchable."],
    implementation: [
      "Implemented Excel upload and advanced search modules for data management.",
    ],
    outcome: "The resume says the modules were for efficient data management. It gives no timing figure.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "workflow",
  },
  {
    slug: "attendance-management-system",
    name: "Attendance Management System",
    band: "earlier",
    employerId: "iss",
    label: "Internal",
    summary: "Java attendance system for internal operations in 2018.",
    overview:
      "An attendance management system built in Java for internal operations at Intelligent Software Solutions. It is separate from the later Kotlin payroll and attendance system at App Xperts.",
    problem:
      "Internal operations needed attendance tracking. The resume does not describe devices, shifts, or leave rules.",
    role: "Built the system as a trainee and junior Android developer.",
    stack: ["Java"],
    stackNote: "",
    challenges: ["Attendance tracking for internal operations."],
    implementation: ["Built an attendance management system in Java for internal operations."],
    outcome: "No headcount or accuracy figure is stated.",
    playStoreUrl: "",
    githubUrl: "",
    screenshot: "",
    screenshotAlt: "",
    visual: "workflow",
  },
];

export const leadership = {
  intro:
    "At TVS Mobility Solution, from Mar 2024 to May 2026, he worked as a mentor and team leader. The resume credits that work with better delivery timelines, code quality, and adoption of modular architecture.",
  boundary:
    "The same resume lists technical leadership, sprint planning, code review, problem-solving, and communication. That is the leadership it supports: mentor and team leader. It does not describe hiring authority, a larger department, or a people-management role at Refex Group.",
  points: [
    {
      title: "Mentor and team leader",
      body: "Worked as a mentor and team leader during the TVS Mobility Solution role, alongside his own Android and Flutter delivery.",
    },
    {
      title: "Delivery and code quality",
      body: "The stated result of that leadership is better delivery timelines and code quality. No separate velocity metric is given.",
    },
    {
      title: "Modular design",
      body: "He pushed modular architecture adoption. Modular applications and modular design are also named in his architecture skills.",
    },
    {
      title: "Sprint planning and code review",
      body: "Sprint planning and code review are listed among his skills, with technical leadership, problem-solving, and communication.",
    },
  ],
};

export const contactCopy = {
  lede: "Hiring for mobile engineering, or for enterprise work that still needs Android and iOS support? Use the email, the phone, or the resume.",
  note: "He lives in Chennai, Tamil Nadu. Tiruchirappalli is his native place. He currently works at Refex Group, engaged via OmegaHires. The resume file matches this site: TVS Mobility Solution through May 2026, Refex Group from May 2026, and AI-assisted development with ChatGPT, GitHub Copilot, Gemini, Cursor, and Claude.",
};

export function getRole(id: string) {
  const role = roles.find((item) => item.id === id);
  if (!role) {
    throw new Error(`Unknown employer id: ${id}`);
  }
  return role;
}

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export function projectsInBand(band: ProjectBand) {
  return projects.filter((item) => item.band === band);
}
