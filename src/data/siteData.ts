// ============================================
// SITE DATA — Bilingual (RU / EN)
// ============================================

import type { Locale } from "@/lib/i18n";

// Helper type for bilingual strings
type L = { ru: string; en: string };

function l(ru: string, en: string): L {
  return { ru, en };
}

// ---- Personal Info (shared across languages) ----

export const personalInfo = {
  name: "Ilya Raguzov",
  nameRu: "Илья Рагузов",
  title: l("SDET | Инженер по автоматизации тестирования", "SDET | QA Automation Engineer"),
  tagline: l(
    "Встраиваю качество в каждую строку кода",
    "Building quality into every line of code"
  ),
  description: l(
    "QA-инженер с более чем 7-летним опытом ручного и автоматизированного тестирования мобильных и веб-приложений. Разрабатываю комплексные стратегии тестирования, сочетающие тщательные ручные методики с эффективными автоматизированными решениями.",
    "QA Engineer with 7+ years of experience in manual and automated testing of mobile and web applications. I build comprehensive test strategies combining thorough manual techniques with efficient automated solutions."
  ),
  email: "raguzov.i.a@gmail.com",
  location: l("Москва, Россия", "Moscow, Russia"),
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/iraguzov",
    linkedin: "https://www.linkedin.com/in/raguzov-ilya",
    telegram: "https://t.me/iraguzov",
  },
};

// ---- About ----

export const aboutText = {
  paragraphs: [
    l(
      "QA Automation Engineer с более чем 7-летним практическим опытом ручного и автоматизированного тестирования веб- и мобильных приложений. Специализируюсь на функциональном, UI/UX и кросс-браузерном тестировании на различных платформах.",
      "I'm a QA Automation Engineer with 7+ years of hands-on experience in both manual and automated testing of web and mobile applications. I specialize in functional, UI/UX, and cross-browser testing across diverse platforms."
    ),
    l(
      "Разрабатываю тест-кейсы, тест-планы и процессы отслеживания дефектов. Имею глубокий опыт автоматизации тестирования с использованием Appium, Playwright и Selenium для регрессионного, API, веб- и мобильного тестирования.",
      "I design test cases, test plans, and defect tracking workflows, with deep experience in test automation using Appium, Playwright, and Selenium for regression, API, web, and mobile app testing."
    ),
    l(
      "Моя цель — обеспечить высочайшее качество ПО через комплексные стратегии тестирования, сочетающие тщательные ручные методики с эффективными автоматизированными решениями, интегрированными в CI/CD пайплайны.",
      "My goal is to ensure the highest software quality through comprehensive testing strategies — combining thorough manual methodologies with efficient automated solutions that integrate seamlessly into CI/CD pipelines."
    ),
  ],
  stats: [
    { label: l("Лет опыта", "Years Experience"), value: "7+" },
    { label: l("Компании", "Companies"), value: "4" },
    { label: l("Платформы", "Platforms Tested"), value: "Web & Mobile" },
    { label: l("Багов предотвращено", "Bugs Prevented"), value: "∞" },
  ],
};

// ---- Skills (tech names stay in English, category names bilingual) ----

export const skills = {
  categories: [
    {
      name: l("Фреймворки автоматизации", "Automation Frameworks"),
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
      name: l("Языки и скрипты", "Languages & Scripting"),
      icon: "💻",
      items: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 80 },
        { name: "Bash", level: 80 },
        { name: "REST API", level: 90 },
      ],
    },
    {
      name: l("CI/CD и DevOps", "CI/CD & DevOps"),
      icon: "🚀",
      items: [
        { name: "GitLab CI/CD", level: 85 },
        { name: "GitHub Actions", level: 85 },
        { name: "Jenkins", level: 85 },
        { name: "Docker", level: 80 },
      ],
    },
    {
      name: l("Практики тестирования", "Testing Practices"),
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
      name: l("Инструменты и платформы", "Tools & Platforms"),
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
      name: l("Методологии", "Methodologies"),
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

// ---- Experience ----

export const experience = [
  {
    company: "Data-Driven Lab",
    role: l("QA Automation Engineer", "QA Automation Engineer"),
    period: l("Июн 2025 — н.в.", "Jun 2025 — Present"),
    description: l(
      "Разработка и поддержка автоматизированных тестов для веб- и мобильных приложений (iOS, Android) с использованием Python, Pytest и Appium. Реализация UI- и API-тестов, покрывающих ключевые пользовательские сценарии.",
      "Developing and maintaining automated tests for web and mobile applications (iOS, Android) using Python, Pytest, and Appium. Implementing UI and API tests covering key user scenarios."
    ),
    highlights: [
      l("Настройка MCP Playwright сервера для ускорения автоматизированного тестирования", "Set up MCP Playwright server to accelerate automated testing"),
      l("Использование агентов ИИ для ускорения API-тестирования и написания автотестов", "Used AI agents to speed up API testing and autotest writing"),
      l("Проведение нагрузочного тестирования в Locust для анализа производительности", "Conducted load testing with Locust for performance analysis"),
      l("Интеграция автотестов с GitLab CI/CD и ReportPortal", "Integrated autotests with GitLab CI/CD and ReportPortal"),
      l("Анализ сетевого трафика с помощью Charles Proxy для отладки", "Analyzed network traffic with Charles Proxy for debugging"),
      l("Управление тест-сценариями в Test IT, дефектами в Jira и Confluence", "Managed test scenarios in Test IT, defects in Jira & Confluence"),
    ],
    tech: ["Python", "Pytest", "Appium", "Selenium", "Locust", "GitLab CI/CD", "ReportPortal", "Charles Proxy"],
  },
  {
    company: "Holistiplan",
    role: l("QA Automation Engineer", "QA Automation Engineer"),
    period: l("Окт 2024 — Июн 2025", "Oct 2024 — Jun 2025"),
    description: l(
      "Ручное и автоматизированное тестирование на различных платформах — функциональное, регрессионное, интеграционное, UI/UX, исследовательское. Создание API и UI автотестов с нуля.",
      "Manual and automated testing across multiple platforms — functional, regression, integration, UI/UX, and exploratory. Built automated API and UI test suites from scratch."
    ),
    highlights: [
      l("Разработка API тест-сьютов на Python и Postman (валидация REST, проверка схем)", "Developed API test suites with Python and Postman (REST validation, schema checks)"),
      l("Создание UI-фреймворка автоматизации на Playwright (Python)", "Built UI automation framework with Playwright (Python)"),
      l("Докеризация тестовых сред для кросс-платформенной стабильности", "Dockerized test environments for cross-platform stability"),
      l("Интеграция тестов в CI/CD через GitHub Actions и Jenkins", "Integrated tests into CI/CD with GitHub Actions and Jenkins"),
      l("Кросс-браузерное и кросс-девайсное тестирование UI", "Conducted cross-browser/cross-device testing for UI responsiveness"),
      l("Использование Allure Reports для визуализации результатов", "Used Allure Reports for test result visualization"),
      l("Проведение анализа первопричин с разработчиками и PO", "Led root cause analysis sessions with developers and POs"),
    ],
    tech: ["Python", "Playwright", "Postman", "Docker", "GitHub Actions", "Jenkins", "Allure", "Jira"],
  },
  {
    company: "The CW Streaming Platform",
    role: l("QA Engineer", "QA Engineer"),
    period: l("Ноя 2023 — Сен 2024", "Nov 2023 — Sep 2024"),
    description: l(
      "End-to-end тестирование мобильных стриминговых приложений на iOS и Android. Разработка автоматизированных тестов на Appium для проверки воспроизведения и UI-сценариев.",
      "End-to-end testing of mobile streaming apps on iOS and Android. Developed automated tests with Appium for playback verification and UI scenarios."
    ),
    highlights: [
      l("Создание автотестов на Appium (Python) для iOS и Android", "Built Appium (Python) automated tests for iOS and Android"),
      l("Создание мок-данных и использование Charles Proxy для сложных стриминговых сценариев", "Created mock data and used Charles Proxy for complex streaming scenarios"),
      l("Взаимодействие с командами DevOps и Backend для валидации API", "Collaborated with DevOps and Backend teams for API layer validation"),
      l("Тестирование на реальных устройствах через BrowserStack и TestFlight", "Tested on real devices via BrowserStack and TestFlight"),
    ],
    tech: ["Appium", "Python", "BrowserStack", "Charles Proxy", "TestFlight", "Firebase", "Jira"],
  },
  {
    company: "Kinship",
    role: l("QA Engineer", "QA Engineer"),
    period: l("Янв 2018 — Окт 2023", "Jan 2018 — Oct 2023"),
    description: l(
      "Комплексное ручное и исследовательское тестирование веб- и мобильных приложений. Разработка структурированных тест-кейсов и управление регрессионными циклами.",
      "Comprehensive manual and exploratory testing of web and mobile applications. Developed structured test cases and managed regression cycles across releases."
    ),
    highlights: [
      l("Создание и поддержка тест-кейсов и матриц трассируемости в Zephyr Scale", "Created and maintained test cases and traceability matrices in Zephyr Scale"),
      l("Отслеживание и управление багами в Jira в рамках спринтов", "Tracked and managed bugs in Jira across sprint cycles"),
      l("Тестирование на реальных устройствах и эмуляторах через BrowserStack", "Tested on real devices and emulators via BrowserStack and TestFlight"),
      l("Руководство регрессионными циклами до и после релизов", "Led regression testing cycles before and after releases"),
      l("Проверка ролевой модели доступа (RBAC) и сценариев с конфиденциальными данными", "Validated RBAC and sensitive data handling scenarios"),
      l("Смоук- и санити-тестирование на staging, dev и production", "Performed smoke and sanity testing on staging, dev, and production"),
    ],
    tech: ["Zephyr Scale", "Jira", "BrowserStack", "TestRail", "Android Studio", "Xcode", "REST API"],
  },
];

// ---- Projects ----

export const projects = [
  {
    title: l("Фреймворк мобильной автоматизации", "Mobile Test Automation Framework"),
    description: l(
      "Готовый к продакшену фреймворк Appium + Python для тестирования iOS и Android с Page Object паттерном, параллельным запуском на BrowserStack и CI/CD интеграцией.",
      "Production-ready Appium + Python framework for iOS and Android testing with Page Object pattern, parallel execution on BrowserStack, and CI/CD integration."
    ),
    tech: ["Appium", "Python", "Pytest", "BrowserStack"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: l("Сьют API-тестирования", "API Testing Suite"),
    description: l(
      "Комплексное решение для API-тестирования с data-driven тестами, валидацией схем, управлением окружениями и автоматической проверкой REST-эндпоинтов.",
      "Comprehensive API testing solution with data-driven tests, schema validation, environment management, and automated REST endpoint verification."
    ),
    tech: ["Python", "Pytest", "Requests", "Postman"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: l("Playwright веб-автоматизация", "Playwright Web Automation"),
    description: l(
      "E2E фреймворк веб-тестирования на Playwright и Python — кросс-браузерное тестирование, визуальная регрессия и Allure-отчёты, интегрированные в CI/CD.",
      "End-to-end web testing framework with Playwright and Python — cross-browser testing, visual regression, and Allure reporting integrated into CI/CD pipelines."
    ),
    tech: ["Playwright", "Python", "Allure", "Docker"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: l("Нагрузочное тестирование с Locust", "Load Testing with Locust"),
    description: l(
      "Настройка нагрузочного тестирования с Locust для анализа стабильности системы под высокой нагрузкой с дашбордами мониторинга и отчётами.",
      "Performance and load testing setup using Locust for analyzing system stability under high traffic, with real-time monitoring dashboards and reports."
    ),
    tech: ["Locust", "Python", "Docker", "Grafana"],
    link: "#",
    github: "#",
    featured: false,
  },
];

// ---- Education ----

export const education = {
  university: l("Астраханский государственный университет", "Astrakhan State University"),
  degree: l("Диплом инженера, Бакалавриат", "Engineer's Diploma, Bachelor's"),
  field: l("Машины и аппараты пищевых производств", "Machines and Apparatus for Food Production"),
  period: l("Сен 2008 — Июл 2012", "Sep 2008 — Jul 2012"),
};

// ---- Navigation ----

export const navItems = [
  { label: l("Обо мне", "About"), href: "#about" },
  { label: l("Навыки", "Skills"), href: "#skills" },
  { label: l("Опыт", "Experience"), href: "#experience" },
  { label: l("Проекты", "Projects"), href: "#projects" },
  { label: l("Контакты", "Contact"), href: "#contact" },
];

// ---- Section headings ----

export const sectionHeadings = {
  about: {
    title: l("Обо мне", "About Me"),
    subtitle: l("Качество — это не действие, а привычка", "Quality is not an act, it's a habit"),
  },
  skills: {
    title: l("Навыки и инструменты", "Skills & Tools"),
    subtitle: l("Технологии, которые я использую для надёжной автоматизации", "The technologies I use to build reliable automation"),
  },
  experience: {
    title: l("Опыт работы", "Experience"),
    subtitle: l("Мой профессиональный путь в обеспечении качества", "My professional journey in quality engineering"),
  },
  projects: {
    title: l("Проекты", "Projects"),
    subtitle: l("Инструменты и фреймворки, которые я разработал", "Open-source tools and frameworks I've built"),
  },
  contact: {
    title: l("Связаться", "Get in Touch"),
    subtitle: l("Интересно поработать вместе? Давайте обсудим", "Interested in working together? Let's connect"),
  },
};

// ---- UI strings ----

export const ui = {
  available: l("Открыт к предложениям", "Available for opportunities"),
  getInTouch: l("Связаться", "Get in Touch"),
  viewProjects: l("Проекты", "View Projects"),
  resume: l("Резюме", "Resume"),
  featured: l("Избранное", "Featured"),
  code: l("Код", "Code"),
  liveDemo: l("Демо", "Live Demo"),
  sendMessage: l("Отправить", "Send Message"),
  name: l("Имя", "Name"),
  emailLabel: l("Email", "Email"),
  message: l("Сообщение", "Message"),
  contactText: l(
    "Всегда открыт к обсуждению новых проектов, креативных идей и возможностей для сотрудничества.",
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team."
  ),
};

// ---- Helper to resolve bilingual value ----

export function t(value: L, locale: Locale): string {
  return value[locale];
}
