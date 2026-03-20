// ============================================
// SITE DATA — Edit content here
// ============================================
// This file contains ALL text content for the site.
// Update values below when real content is provided.
// ============================================

export const personalInfo = {
  name: "Ilya Raguzov",
  title: "QA Automation Engineer",
  tagline: "Building quality into every line of code",
  description:
    "Senior QA Automation Engineer with deep expertise in test architecture, CI/CD pipelines, and modern automation frameworks. I don't just find bugs — I engineer systems that prevent them.",
  email: "hello@iraguzov.com",
  location: "Remote",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/iraguzov",
    linkedin: "https://linkedin.com/in/iraguzov",
    telegram: "https://t.me/iraguzov",
  },
};

export const aboutText = {
  paragraphs: [
    "I'm a QA Automation Engineer who treats testing as a first-class engineering discipline. With years of experience across fintech, e-commerce, and enterprise platforms, I build test infrastructure that scales.",
    "My approach combines deep technical knowledge with strategic thinking — I design frameworks that catch regressions early, integrate seamlessly into CI/CD, and give teams confidence to ship fast.",
    "Beyond automation, I'm passionate about quality culture: code reviews, testing best practices, and shifting quality left in the development lifecycle.",
  ],
  stats: [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Delivered", value: "30+" },
    { label: "Test Frameworks Built", value: "15+" },
    { label: "Bugs Prevented", value: "∞" },
  ],
};

export const skills = {
  categories: [
    {
      name: "Automation Frameworks",
      icon: "🔧",
      items: [
        { name: "Playwright", level: 95 },
        { name: "Selenium", level: 90 },
        { name: "Cypress", level: 85 },
        { name: "Appium", level: 80 },
        { name: "TestCafe", level: 75 },
      ],
    },
    {
      name: "Programming Languages",
      icon: "💻",
      items: [
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "Kotlin", level: 70 },
      ],
    },
    {
      name: "CI/CD & DevOps",
      icon: "🚀",
      items: [
        { name: "GitHub Actions", level: 90 },
        { name: "Jenkins", level: 85 },
        { name: "Docker", level: 85 },
        { name: "GitLab CI", level: 80 },
        { name: "Kubernetes", level: 70 },
      ],
    },
    {
      name: "Testing Practices",
      icon: "🎯",
      items: [
        { name: "API Testing", level: 95 },
        { name: "E2E Testing", level: 95 },
        { name: "Performance Testing", level: 80 },
        { name: "Security Testing", level: 75 },
        { name: "Mobile Testing", level: 80 },
      ],
    },
    {
      name: "Tools & Platforms",
      icon: "⚡",
      items: [
        { name: "Allure Report", level: 90 },
        { name: "Postman / Newman", level: 90 },
        { name: "Grafana / k6", level: 80 },
        { name: "Jira / TestRail", level: 90 },
        { name: "BrowserStack", level: 85 },
      ],
    },
  ],
};

export const experience = [
  {
    company: "Company Name",
    role: "Senior QA Automation Engineer",
    period: "2022 — Present",
    description:
      "Leading test automation strategy across multiple product teams. Designed and implemented a comprehensive E2E testing framework with Playwright, reducing regression testing time by 70%.",
    highlights: [
      "Built custom test reporting dashboard",
      "Implemented parallel test execution in CI/CD",
      "Mentored 5 junior QA engineers",
      "Reduced bug escape rate by 40%",
    ],
    tech: ["Playwright", "TypeScript", "GitHub Actions", "Docker", "Allure"],
  },
  {
    company: "Company Name",
    role: "QA Automation Engineer",
    period: "2019 — 2022",
    description:
      "Developed and maintained automation test suites for a high-traffic e-commerce platform. Introduced API contract testing and visual regression testing.",
    highlights: [
      "Created API testing framework from scratch",
      "Set up visual regression testing pipeline",
      "Automated 500+ test scenarios",
      "Integrated tests into deployment pipeline",
    ],
    tech: ["Selenium", "Python", "Jenkins", "REST Assured", "TestRail"],
  },
  {
    company: "Company Name",
    role: "QA Engineer",
    period: "2017 — 2019",
    description:
      "Started as manual QA and transitioned to automation. Built the first automated test suite for the company's core product.",
    highlights: [
      "Transitioned team from manual to automated testing",
      "Built first CI/CD pipeline for tests",
      "Documented testing best practices",
      "Introduced BDD approach with Cucumber",
    ],
    tech: ["Selenium", "Java", "Cucumber", "Maven", "Jira"],
  },
];

export const projects = [
  {
    title: "Test Framework Boilerplate",
    description:
      "Production-ready Playwright + TypeScript test framework with Page Object pattern, custom reporters, parallel execution, and CI/CD integration.",
    tech: ["Playwright", "TypeScript", "Allure", "GitHub Actions"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "API Testing Suite",
    description:
      "Comprehensive API testing solution with contract testing, data-driven tests, environment management, and automated Swagger validation.",
    tech: ["Python", "Pytest", "Requests", "JSON Schema"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Visual Regression Tool",
    description:
      "Custom visual regression testing tool with intelligent diff detection, baseline management, and Slack notifications for UI changes.",
    tech: ["Playwright", "Sharp", "Node.js", "Docker"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "QA Dashboard",
    description:
      "Real-time test execution dashboard aggregating results from multiple CI pipelines with trend analysis and failure categorization.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
    featured: false,
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
