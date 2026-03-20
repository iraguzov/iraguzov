// ============================================
// SITE DATA — Edit content here
// ============================================

export const personalInfo = {
  name: "Ilya Raguzov",
  title: "SDET | QA Automation Engineer",
  tagline: "Building quality into every line of code",
  description:
    "QA Engineer with 7+ years of experience in manual and automated testing of mobile and web applications. I build comprehensive test strategies combining thorough manual techniques with efficient automated solutions.",
  email: "raguzov.i.a@gmail.com",
  location: "Moscow, Russia",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/iraguzov",
    linkedin: "https://www.linkedin.com/in/raguzov-ilya",
    telegram: "https://t.me/iraguzov",
  },
};

export const aboutText = {
  paragraphs: [
    "I'm a QA Automation Engineer with 7+ years of hands-on experience in both manual and automated testing of web and mobile applications. I specialize in functional, UI/UX, and cross-browser testing across diverse platforms.",
    "I design test cases, test plans, and defect tracking workflows, with deep experience in test automation using Appium, Playwright, and Selenium for regression, API, web, and mobile app testing.",
    "My goal is to ensure the highest software quality through comprehensive testing strategies — combining thorough manual methodologies with efficient automated solutions that integrate seamlessly into CI/CD pipelines.",
  ],
  stats: [
    { label: "Years Experience", value: "7+" },
    { label: "Companies", value: "4" },
    { label: "Platforms Tested", value: "Web & Mobile" },
    { label: "Bugs Prevented", value: "∞" },
  ],
};

export const skills = {
  categories: [
    {
      name: "Automation Frameworks",
      icon: "🔧",
      items: [
        { name: "Playwright", level: 90 },
        { name: "Appium", level: 90 },
        { name: "Selenium", level: 85 },
        { name: "Pytest", level: 90 },
        { name: "Locust", level: 75 },
      ],
    },
    {
      name: "Languages & Scripting",
      icon: "💻",
      items: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 80 },
        { name: "Bash", level: 80 },
        { name: "REST API", level: 90 },
      ],
    },
    {
      name: "CI/CD & DevOps",
      icon: "🚀",
      items: [
        { name: "GitLab CI/CD", level: 85 },
        { name: "GitHub Actions", level: 85 },
        { name: "Jenkins", level: 85 },
        { name: "Docker", level: 80 },
      ],
    },
    {
      name: "Testing Practices",
      icon: "🎯",
      items: [
        { name: "E2E Testing", level: 95 },
        { name: "API Testing", level: 95 },
        { name: "Mobile Testing (iOS/Android)", level: 90 },
        { name: "Performance / Load Testing", level: 80 },
        { name: "Visual Regression Testing", level: 80 },
      ],
    },
    {
      name: "Tools & Platforms",
      icon: "⚡",
      items: [
        { name: "Jira / Confluence", level: 95 },
        { name: "Charles Proxy", level: 85 },
        { name: "BrowserStack", level: 85 },
        { name: "Allure / ReportPortal", level: 90 },
        { name: "Postman", level: 90 },
      ],
    },
    {
      name: "Methodologies",
      icon: "📋",
      items: [
        { name: "Agile / Scrum", level: 95 },
        { name: "Kanban", level: 85 },
        { name: "SDLC / Waterfall", level: 80 },
        { name: "Test Plans & Strategies", level: 90 },
        { name: "White-box Testing", level: 75 },
      ],
    },
  ],
};

export const experience = [
  {
    company: "Data-Driven Lab",
    role: "QA Automation Engineer",
    period: "Jun 2025 — Present",
    description:
      "Developing and maintaining automated tests for web and mobile applications (iOS, Android) using Python, Pytest, and Appium. Implementing UI and API tests covering key user scenarios.",
    highlights: [
      "Set up MCP Playwright server to accelerate automated testing",
      "Used AI agents to speed up API testing and autotest writing",
      "Conducted load testing with Locust for performance analysis",
      "Integrated autotests with GitLab CI/CD and ReportPortal",
      "Analyzed network traffic with Charles Proxy for debugging",
      "Managed test scenarios in Test IT, defects in Jira & Confluence",
    ],
    tech: [
      "Python",
      "Pytest",
      "Appium",
      "Selenium",
      "Locust",
      "GitLab CI/CD",
      "ReportPortal",
      "Charles Proxy",
    ],
  },
  {
    company: "Holistiplan",
    role: "QA Automation Engineer",
    period: "Oct 2024 — Jun 2025",
    description:
      "Manual and automated testing across multiple platforms — functional, regression, integration, UI/UX, and exploratory. Built automated API and UI test suites from scratch.",
    highlights: [
      "Developed API test suites with Python and Postman (REST validation, schema checks)",
      "Built UI automation framework with Playwright (Python)",
      "Dockerized test environments for cross-platform stability",
      "Integrated tests into CI/CD with GitHub Actions and Jenkins",
      "Conducted cross-browser/cross-device testing for UI responsiveness",
      "Used Allure Reports for test result visualization",
      "Led root cause analysis sessions with developers and POs",
    ],
    tech: [
      "Python",
      "Playwright",
      "Postman",
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "Allure",
      "Jira",
    ],
  },
  {
    company: "The CW Streaming Platform",
    role: "QA Engineer",
    period: "Nov 2023 — Sep 2024",
    description:
      "End-to-end testing of mobile streaming apps on iOS and Android. Developed automated tests with Appium for playback verification and UI scenarios.",
    highlights: [
      "Built Appium (Python) automated tests for iOS and Android",
      "Created mock data and used Charles Proxy for complex streaming scenarios",
      "Collaborated with DevOps and Backend teams for API layer validation",
      "Tested on real devices via BrowserStack and TestFlight",
    ],
    tech: [
      "Appium",
      "Python",
      "BrowserStack",
      "Charles Proxy",
      "TestFlight",
      "Firebase",
      "Jira",
    ],
  },
  {
    company: "Kinship",
    role: "QA Engineer",
    period: "Jan 2018 — Oct 2023",
    description:
      "Comprehensive manual and exploratory testing of web and mobile applications. Developed structured test cases and managed regression cycles across releases.",
    highlights: [
      "Created and maintained test cases and traceability matrices in Zephyr Scale",
      "Tracked and managed bugs in Jira across sprint cycles",
      "Tested on real devices and emulators via BrowserStack and TestFlight",
      "Led regression testing cycles before and after releases",
      "Validated RBAC and sensitive data handling scenarios",
      "Performed smoke and sanity testing on staging, dev, and production",
    ],
    tech: [
      "Zephyr Scale",
      "Jira",
      "BrowserStack",
      "TestRail",
      "Android Studio",
      "Xcode",
      "REST API",
    ],
  },
];

export const projects = [
  {
    title: "Mobile Test Automation Framework",
    description:
      "Production-ready Appium + Python framework for iOS and Android testing with Page Object pattern, parallel execution on BrowserStack, and CI/CD integration.",
    tech: ["Appium", "Python", "Pytest", "BrowserStack"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "API Testing Suite",
    description:
      "Comprehensive API testing solution with data-driven tests, schema validation, environment management, and automated REST endpoint verification.",
    tech: ["Python", "Pytest", "Requests", "Postman"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Playwright Web Automation",
    description:
      "End-to-end web testing framework with Playwright and Python — cross-browser testing, visual regression, and Allure reporting integrated into CI/CD pipelines.",
    tech: ["Playwright", "Python", "Allure", "Docker"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Load Testing with Locust",
    description:
      "Performance and load testing setup using Locust for analyzing system stability under high traffic, with real-time monitoring dashboards and reports.",
    tech: ["Locust", "Python", "Docker", "Grafana"],
    link: "#",
    github: "#",
    featured: false,
  },
];

export const education = {
  university: "Astrakhan State University",
  degree: "Engineer's Diploma, Bachelor's",
  field: "Machines and Apparatus for Food Production",
  period: "Sep 2008 — Jul 2012",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
