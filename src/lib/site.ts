/**
 * Canonical production origin. All canonical + og:url values derive from this.
 */
export const SITE_URL = "https://www.ansonixit.site";

/**
 * Official Ansonix IT profiles used for schema.org `sameAs`.
 * Add verified profile URLs here (LinkedIn, X, etc.) — the Organization
 * structured data picks them up automatically. Never add placeholders.
 */
export const SOCIAL_PROFILES: string[] = [];

/** Build an absolute production URL from a site-relative path. */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
}

export const SITE = {
  name: "Ansonix IT",
  url: SITE_URL,
  ogImage: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/favicon.png`,
  slogan: "Money buys code. Trust builds partnerships.",
  tagline: "Technology Built Around Your Business.",
  emails: {
    hello: "hello@ansonixit.site",
    business: "business@ansonixit.site",
  },
  location: "Ahmedabad, Gujarat, India",
  leadership: [
    { name: "Hiral Jain", role: "CEO" },
    { name: "Anilkumar Jain", role: "Founder" },
  ],
} as const;

export type ServiceKey =
  | "website-development"
  | "software-development"
  | "cloud-devops"
  | "ai-ml"
  | "cybersecurity"
  | "data-bi"
  | "ui-ux-design"
  | "it-consulting";

export interface ServiceDef {
  slug: ServiceKey;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  capabilities: string[];
  stack: string[];
  outcomes: { title: string; body: string }[];
}

export const SERVICES: ServiceDef[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short: "Corporate sites, ecommerce, portals and web apps — designed, built, deployed and maintained.",
    metaTitle: "Website Development Company | Ansonix IT",
    metaDescription:
      "Corporate websites, ecommerce, landing pages, customer portals and custom web applications — designed, developed, deployed, optimised and maintained by Ansonix IT.",
    headline: "Websites engineered to perform, not just to look good.",
    intro:
      "We design, develop, deploy, optimise and maintain websites for startups, small and medium businesses, professional services and technology companies. Every build is fast, accessible, SEO-ready and easy for your team to run.",
    capabilities: [
      "Corporate and business websites",
      "Landing pages and campaign sites",
      "Ecommerce platforms",
      "Custom web applications",
      "Booking and scheduling systems",
      "Customer portals",
      "Admin dashboards",
      "CMS-powered websites",
      "SEO-friendly architecture",
      "Ongoing maintenance and support",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PHP", "WordPress", "Shopify", "Tailwind CSS"],
    outcomes: [
      { title: "Design", body: "Brand-led interfaces built around conversion and clarity." },
      { title: "Develop", body: "Componentised, maintainable front-ends with real back-end depth." },
      { title: "Deploy", body: "Reliable hosting, CI/CD pipelines and monitored releases." },
      { title: "Optimise & maintain", body: "Core Web Vitals, SEO, accessibility and continuous improvement." },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom software, SaaS platforms, enterprise applications, APIs and mobile products.",
    metaTitle: "Custom Software Development Services | Ansonix IT",
    metaDescription:
      "Custom software development for SaaS, enterprise applications, APIs, microservices and mobile products across React, Node.js, Java, Python, .NET and more.",
    headline: "Software products built to be extended, not rewritten.",
    intro:
      "From a first MVP to an enterprise platform, our engineers work across multiple technology stacks and choose the one that fits your product, team and roadmap — never the one that fits a single framework habit.",
    capabilities: [
      "Full-stack development",
      "Frontend engineering",
      "Backend engineering",
      "Web applications",
      "Mobile applications",
      "SaaS product development",
      "Enterprise applications",
      "API development",
      "Microservices architecture",
      "Ecommerce and marketplace systems",
    ],
    stack: ["React", "Next.js", "Node.js", "TypeScript", "Java", "Python", ".NET", "PHP", "React Native", "GraphQL"],
    outcomes: [
      { title: "Architecture first", body: "Scope, domain modelling and architecture before a line of product code." },
      { title: "Engineering practice", body: "Code review, testing, CI and documentation as standard." },
      { title: "Release discipline", body: "Incremental delivery you can validate with real users." },
      { title: "Long-term ownership", body: "Handover, support and iteration built into the engagement." },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Cloud architecture, migration, CI/CD, Kubernetes, IaC, monitoring and reliability engineering.",
    metaTitle: "Cloud & DevOps Consulting Services | Ansonix IT",
    metaDescription:
      "AWS cloud architecture, cloud migration, DevOps, CI/CD, Kubernetes, Docker, Infrastructure as Code, monitoring and reliability engineering from Ansonix IT.",
    headline: "Build → Deploy → Automate → Monitor → Scale.",
    intro:
      "We help teams move to the cloud, automate everything that should be automated, and run infrastructure that stays predictable as traffic, data and headcount grow.",
    capabilities: [
      "Cloud architecture and AWS engineering",
      "Cloud migration",
      "DevOps engineering",
      "CI/CD pipelines",
      "Kubernetes and Docker",
      "Infrastructure as Code",
      "Infrastructure automation",
      "Monitoring and observability",
      "Reliability engineering",
      "Cloud cost optimisation",
    ],
    stack: ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "GitLab CI", "Prometheus", "Grafana"],
    outcomes: [
      { title: "Build", body: "Environments defined as code and reproducible from day one." },
      { title: "Deploy", body: "Automated, reviewable pipelines with safe rollbacks." },
      { title: "Monitor", body: "Metrics, logs, traces and alerting that surface issues early." },
      { title: "Scale", body: "Capacity, resilience and cost tuned as the platform grows." },
    ],
  },
  {
    slug: "ai-ml",
    title: "AI / ML",
    short: "Generative AI, LLM integration, machine learning systems, data science and MLOps.",
    metaTitle: "AI Development & Machine Learning Services | Ansonix IT",
    metaDescription:
      "AI development, generative AI and LLM integration, machine learning systems, data science, MLOps and AI automation delivered by Ansonix IT engineers.",
    headline: "AI applied to real business problems — carefully.",
    intro:
      "We build AI features that are grounded in your data and measurable in your business. That starts with an honest assessment of what machine learning can and cannot do for the problem in front of you.",
    capabilities: [
      "Generative AI solutions",
      "LLM integration",
      "AI-powered applications",
      "AI automation and workflows",
      "Machine learning systems",
      "Model evaluation and tuning",
      "Data science",
      "MLOps and deployment",
      "Intelligent business solutions",
    ],
    stack: ["Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI APIs", "Vector databases", "AWS SageMaker"],
    outcomes: [
      { title: "Assess", body: "Feasibility, data readiness and expected business value up front." },
      { title: "Prototype", body: "A working proof of concept before large-scale investment." },
      { title: "Productionise", body: "Evaluation, guardrails, monitoring and cost control." },
      { title: "Iterate", body: "Continuous improvement against measurable outcomes." },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    short: "Application, cloud and infrastructure security, IAM, assessments and secure engineering.",
    metaTitle: "Cybersecurity Services & Security Engineering | Ansonix IT",
    metaDescription:
      "Application security, cloud security, infrastructure security, identity and access management, security assessments and secure development practices from Ansonix IT.",
    headline: "Security engineered into the build, not bolted on after it.",
    intro:
      "Our security specialists work alongside development and infrastructure teams so that threat modelling, hardening and monitoring are part of delivery rather than an afterthought.",
    capabilities: [
      "Application security",
      "Cloud security",
      "Infrastructure security",
      "Identity and access management",
      "Security engineering",
      "Security assessments and reviews",
      "Secure development practices",
      "Security monitoring",
    ],
    stack: ["AWS security services", "OWASP practices", "SAST / DAST tooling", "IAM", "Secrets management", "SIEM"],
    outcomes: [
      { title: "Review", body: "Assess the current state of applications, cloud and access." },
      { title: "Harden", body: "Close gaps across code, configuration and identity." },
      { title: "Automate", body: "Security checks embedded into CI/CD pipelines." },
      { title: "Monitor", body: "Ongoing visibility and response readiness." },
    ],
  },
  {
    slug: "data-bi",
    title: "Data & BI",
    short: "Data engineering, pipelines, analytics, dashboards and business intelligence.",
    metaTitle: "Data Analytics & Business Intelligence Services | Ansonix IT",
    metaDescription:
      "Data engineering, data pipelines, analytics, BI dashboards, reporting and data visualisation that turn business data into decisions — Ansonix IT.",
    headline: "Turn scattered data into decisions people actually make.",
    intro:
      "We build the pipelines, models and dashboards that give leadership teams a single, trustworthy view of the business — and give operational teams the numbers they need daily.",
    capabilities: [
      "Data engineering",
      "Data pipelines and ETL/ELT",
      "Data warehousing",
      "Data analytics",
      "Business intelligence",
      "BI dashboards",
      "Reporting automation",
      "Data visualisation",
      "Business insight workshops",
    ],
    stack: ["Python", "SQL", "dbt", "Airflow", "Snowflake", "BigQuery", "Power BI", "Looker Studio"],
    outcomes: [
      { title: "Collect", body: "Reliable ingestion from the systems you already run." },
      { title: "Model", body: "Clean, documented data models everyone can trust." },
      { title: "Visualise", body: "Dashboards designed for the decision, not the chart." },
      { title: "Operate", body: "Monitoring, quality checks and ongoing evolution." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Product design, design systems, user research and conversion-focused interfaces.",
    metaTitle: "UI UX Design Services & Product Design | Ansonix IT",
    metaDescription:
      "UI design, UX design, product design, design systems, user research and conversion-focused responsive interfaces for web and mobile — Ansonix IT.",
    headline: "Interfaces that feel obvious and convert quietly.",
    intro:
      "Design at Ansonix is an engineering discipline. We work in systems — tokens, components, states and accessibility — so the interface stays coherent long after launch.",
    capabilities: [
      "UI design",
      "UX design",
      "Product design",
      "Web design",
      "Mobile design",
      "Design systems",
      "User research",
      "Conversion-focused interfaces",
      "Responsive design",
      "Accessibility reviews",
    ],
    stack: ["Figma", "Design tokens", "Storybook", "Tailwind CSS", "Prototyping", "Usability testing"],
    outcomes: [
      { title: "Research", body: "Understand users, jobs to be done and current friction." },
      { title: "Structure", body: "Information architecture and flows before visual polish." },
      { title: "System", body: "Reusable components, tokens and documented patterns." },
      { title: "Validate", body: "Prototype, test and refine against real behaviour." },
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    short: "Architecture, cloud, security, AI and digital transformation strategy.",
    metaTitle: "Technology & IT Consulting Services | Ansonix IT",
    metaDescription:
      "Technology consulting, cloud consulting, DevOps consulting, software architecture, infrastructure assessment, AI strategy and digital transformation guidance.",
    headline: "Decisions before code. Strategy you can execute.",
    intro:
      "Sometimes the most valuable engagement is a short one. Our consultants help leadership and engineering teams choose architecture, platforms and sequencing they will not regret in eighteen months.",
    capabilities: [
      "Technology consulting",
      "Cloud consulting",
      "DevOps consulting",
      "Software architecture",
      "Architecture reviews",
      "Infrastructure assessment",
      "Digital transformation",
      "Technology strategy",
      "AI strategy",
      "Security consulting",
    ],
    stack: ["Architecture reviews", "Cloud assessments", "Roadmapping", "Technology due diligence"],
    outcomes: [
      { title: "Assess", body: "A clear picture of the current architecture and constraints." },
      { title: "Recommend", body: "Options with trade-offs, cost and risk made explicit." },
      { title: "Sequence", body: "A roadmap your team can actually deliver." },
      { title: "Support", body: "Optional hands-on delivery once the direction is set." },
    ],
  },
];

export const SERVICE_MAP: Record<string, ServiceDef> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
);

export const ENGAGEMENTS = [
  {
    id: "01",
    title: "Build Your Product",
    body: "You need a website, application, SaaS platform, ecommerce system or custom software. We take it from idea to live product.",
  },
  {
    id: "02",
    title: "Dedicated Engineers",
    body: "Experienced technical professionals who work as a direct extension of your existing team, in your process and your tools.",
  },
  {
    id: "03",
    title: "Dedicated Development Teams",
    body: "A complete team — developers, DevOps, design, QA, analysts and specialists — assembled around your roadmap.",
  },
  {
    id: "04",
    title: "Project-Based Development",
    body: "Full responsibility for designing, developing, deploying and maintaining a defined technology project.",
  },
  {
    id: "05",
    title: "Managed IT & Cloud Services",
    body: "Ongoing infrastructure management, DevOps, cloud, monitoring, maintenance, security and technical support.",
  },
  {
    id: "06",
    title: "Technology Consulting",
    body: "Guidance on architecture, cloud, software, security, AI, DevOps and technology strategy before you commit budget.",
  },
] as const;

export const PROCESS = [
  { step: "01", title: "Understand", body: "Understand the business, requirements, challenges and goals." },
  { step: "02", title: "Strategize", body: "Define architecture, technology, scope and execution strategy." },
  { step: "03", title: "Design", body: "Create the user experience and the technical foundation." },
  { step: "04", title: "Build", body: "Develop using appropriate technologies and engineering practices." },
  { step: "05", title: "Test", body: "Validate quality, security, performance and reliability." },
  { step: "06", title: "Deploy", body: "Launch the solution using reliable infrastructure." },
  { step: "07", title: "Scale", body: "Maintain, optimise, automate and continuously improve." },
] as const;

export const ROLES = [
  "Software Developers",
  "Full-Stack Developers",
  "Frontend Developers",
  "Backend Developers",
  "Mobile Developers",
  "DevOps Engineers",
  "Cloud Engineers",
  "AI Engineers",
  "ML Engineers",
  "Data Engineers",
  "Data Analysts",
  "BI Developers",
  "UI/UX Designers",
  "QA Engineers",
  "Cybersecurity Specialists",
  "Solution Architects",
  "Technical Consultants",
] as const;

export const INDUSTRIES = [
  { title: "Technology", body: "Product engineering capacity for technology companies scaling delivery." },
  { title: "Ecommerce", body: "Storefronts, integrations, performance and data for online retail." },
  { title: "Healthcare", body: "Secure portals, workflow tooling and data platforms for care providers." },
  { title: "Finance", body: "Security-first applications, reporting and analytics for financial services." },
  { title: "Education", body: "Learning platforms, portals and administrative systems." },
  { title: "Professional Services", body: "Client portals, automation and internal systems for advisory firms." },
  { title: "SaaS", body: "From MVP to multi-tenant platform, plus the cloud that runs it." },
  { title: "Startups", body: "Lean teams that ship, with architecture that survives growth." },
  { title: "Small & Medium Businesses", body: "Websites, ecommerce, automation and dependable IT support." },
  { title: "IT Companies", body: "Engineering extension for agencies and IT firms with more work than capacity." },
] as const;

export const SCALE_LADDER = [
  { title: "Business Website", body: "A fast, credible presence with the SEO and analytics to match." },
  { title: "Web Application", body: "Custom workflows, portals and internal tools." },
  { title: "SaaS Product", body: "Multi-tenant products with billing, roles and telemetry." },
  { title: "Enterprise Platform", body: "Integrated systems across departments and legacy estates." },
  { title: "Cloud Infrastructure", body: "Automated, monitored, cost-aware environments." },
  { title: "AI / Data Platform", body: "Pipelines, models and intelligence layered over the business." },
] as const;

export const TRUST_PILLARS = [
  { title: "Trust", body: "We tell you what is realistic, including when the answer is not what you hoped." },
  { title: "Transparency", body: "Clear scope, clear pricing, clear progress. No surprises at invoice time." },
  { title: "Accountability", body: "Named owners for every workstream and honest status reporting." },
  { title: "Security", body: "Secure practices across code, cloud, access and data by default." },
  { title: "Communication", body: "Overlapping working hours, written updates and direct access to engineers." },
  { title: "Engineering Quality", body: "Review, testing and documentation are part of the work, not extras." },
  { title: "Long-Term Partnership", body: "We optimise for the second project, not the first invoice." },
] as const;

export interface RegionDef {
  slug: string;
  market: string;
  demonym: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  overlap: string;
  areaServed: string;
}

export const REGIONS: RegionDef[] = [
  {
    slug: "usa",
    market: "United States",
    demonym: "US",
    metaTitle: "IT Services Company for US Businesses | Ansonix IT",
    metaDescription:
      "Software development, cloud, DevOps, AI/ML, data and dedicated engineering teams for US businesses. Ahmedabad-based delivery with US working-hour overlap.",
    headline: "IT services and engineering teams for US businesses.",
    intro:
      "We work with companies across the United States as their long-term technology partner — product engineering, cloud infrastructure, AI and data work, and dedicated engineers who join your existing team.",
    overlap: "Our working day overlaps the US morning, with a written handover for every day we do not.",
    areaServed: "US",
  },
  {
    slug: "uk",
    market: "United Kingdom",
    demonym: "UK",
    metaTitle: "IT Services Company for UK Businesses | Ansonix IT",
    metaDescription:
      "Custom software development, cloud consulting, DevOps, AI and dedicated development teams for UK businesses, delivered from Ahmedabad with UK-hours overlap.",
    headline: "IT services and engineering teams for UK businesses.",
    intro:
      "From websites and web applications to cloud platforms and dedicated engineering teams, we support UK companies that need serious engineering capacity without building it in-house.",
    overlap: "We share most of the UK working day, so reviews and stand-ups happen live.",
    areaServed: "GB",
  },
  {
    slug: "europe",
    market: "Europe",
    demonym: "European",
    metaTitle: "IT Services & Software Development for Europe | Ansonix IT",
    metaDescription:
      "Software engineering, cloud and DevOps, AI/ML, data and BI, cybersecurity and dedicated teams for European businesses. International delivery from Ahmedabad, India.",
    headline: "IT services and engineering teams for European businesses.",
    intro:
      "We partner with businesses across Europe on product engineering, platform modernisation, cloud operations and dedicated engineering capacity, with clear written communication throughout.",
    overlap: "Our hours cover the European working day almost end to end.",
    areaServed: "EU",
  },
  {
    slug: "canada",
    market: "Canada",
    demonym: "Canadian",
    metaTitle: "IT Services Company for Canadian Businesses | Ansonix IT",
    metaDescription:
      "Web and software development, cloud, DevOps, AI and dedicated engineers for Canadian businesses. Flexible engagement models and transparent communication.",
    headline: "IT services and engineering teams for Canadian businesses.",
    intro:
      "Canadian companies work with us for product builds, cloud and DevOps, data platforms and dedicated engineers who plug straight into their delivery process.",
    overlap: "We overlap the Canadian morning and leave a written summary for every night shift.",
    areaServed: "CA",
  },
  {
    slug: "australia",
    market: "Australia",
    demonym: "Australian",
    metaTitle: "IT Services Company for Australian Businesses | Ansonix IT",
    metaDescription:
      "Software development, cloud and DevOps, AI/ML and dedicated development teams for Australian businesses, with strong working-hour overlap from Ahmedabad, India.",
    headline: "IT services and engineering teams for Australian businesses.",
    intro:
      "We support Australian businesses across websites, custom software, cloud infrastructure, data and AI, and long-running dedicated engineering teams.",
    overlap: "Australian and Indian hours overlap strongly, so most of the day is genuinely shared.",
    areaServed: "AU",
  },
];

export const REGION_MAP: Record<string, RegionDef> = Object.fromEntries(
  REGIONS.map((r) => [r.slug, r]),
);
