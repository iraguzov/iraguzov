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
  title: l("Senior QA Automation Engineer | SDET", "Senior QA Automation Engineer | SDET"),
  tagline: l(
    "Встраиваю качество в каждую строку кода",
    "Building quality into every line of code"
  ),
  description: l(
    "Senior QA Automation Engineer с 7+ годами опыта. Строю фреймворки автоматизации тестирования, интегрирую в CI/CD, внедряю shift-left подход. Python, Playwright, Appium, Selenium.",
    "Senior QA Automation Engineer with 7+ years of experience. I build test automation frameworks, integrate them into CI/CD pipelines, and implement shift-left testing. Python, Playwright, Appium, Selenium."
  ),
  email: "raguzov.i.a@gmail.com",
  location: l("Москва, Россия", "Moscow, Russia"),
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/iraguzov",
    linkedin: "https://www.linkedin.com/in/raguzov-ilya",
    telegram: "https://t.me/WhiteJoint",
  },
};

// ---- About ----

export const aboutText = {
  paragraphs: [
    l(
      "Senior QA Automation Engineer с 7+ годами опыта в построении фреймворков автоматизации тестирования для веб- и мобильных приложений. Специализируюсь на E2E, API и мобильном тестировании с фокусом на измеримые результаты.",
      "Senior QA Automation Engineer with 7+ years of experience building test automation frameworks for web and mobile applications. I specialize in E2E, API, and mobile testing with a focus on measurable results."
    ),
    l(
      "Создаю фреймворки автоматизации с нуля на Python (Playwright, Appium, Selenium), интегрирую их в CI/CD пайплайны и внедряю shift-left подход для раннего обнаружения дефектов. Владею полным циклом QA — от стратегии тестирования до метрик качества.",
      "I build automation frameworks from scratch using Python (Playwright, Appium, Selenium), integrate them into CI/CD pipelines, and implement shift-left testing for early defect prevention. I own the full QA cycle — from test strategy to quality metrics."
    ),
    l(
      "Ключевые компетенции: Test Automation Frameworks · CI/CD Integration · API & E2E Testing · Mobile Testing (iOS/Android) · Performance Testing · Cross-browser Testing · Defect Prevention · AI-assisted Testing · Quality Metrics & Reporting",
      "Core competencies: Test Automation Frameworks · CI/CD Integration · API & E2E Testing · Mobile Testing (iOS/Android) · Performance Testing · Cross-browser Testing · Defect Prevention · AI-assisted Testing · Quality Metrics & Reporting"
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
        { name: "Python", level: 95 },
        { name: "Playwright", level: 90 },
        { name: "Appium", level: 90 },
        { name: "Selenium", level: 85 },
        { name: "Pytest", level: 90 },
        { name: "Requests", level: 85 },
        { name: "Locust", level: 75 },
        { name: "SQL", level: 80 },
        { name: "Bash", level: 80 },
        { name: "REST API", level: 90 },
      ],
    },
    {
      name: l("AI и агенты", "AI & Agents"),
      icon: "🤖",
      items: [
        { name: "Claude Code", level: 90 },
        { name: "MCP Servers", level: 85 },
        { name: "Playwright MCP", level: 90 },
        { name: "GitHub MCP", level: 85 },
        { name: "Jira MCP", level: 80 },
        { name: "AI Agents", level: 85 },
        { name: "Prompt Engineering", level: 85 },
        { name: "Cursor / Copilot", level: 80 },
        { name: "LLM Integration", level: 75 },
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
      "Построение и развитие фреймворка автоматизации тестирования для веб- и мобильных приложений (iOS, Android). Интеграция автотестов в CI/CD пайплайн, обеспечение стабильного тестового покрытия ключевых сценариев.",
      "Building and scaling a test automation framework for web and mobile applications (iOS, Android). Integrating automated tests into CI/CD pipelines, ensuring stable test coverage of critical user flows."
    ),
    highlights: [
      l("Сократил время прогона тестов на 40%, внедрив MCP Playwright сервер для автоматизации", "Reduced test execution time by 40% by implementing MCP Playwright server for automation"),
      l("Ускорил написание API-автотестов в 3 раза с помощью AI-агентов, покрыв 50+ эндпоинтов", "Accelerated API autotest development 3x using AI agents, covering 50+ endpoints"),
      l("Выявил 5 критических узких мест производительности через нагрузочное тестирование в Locust", "Identified 5 critical performance bottlenecks through load testing with Locust"),
      l("Настроил CI/CD пайплайн в GitLab с автозапуском тестов и отчётами в ReportPortal", "Set up CI/CD pipeline in GitLab with automated test runs and ReportPortal dashboards"),
      l("Сократил время отладки на 30% используя Charles Proxy для анализа сетевого трафика", "Reduced debugging time by 30% using Charles Proxy for network traffic analysis"),
      l("Систематизировал управление 200+ тест-сценариями в Test IT и дефектами в Jira", "Systematized management of 200+ test scenarios in Test IT and defect tracking in Jira"),
    ],
    tech: ["Python", "Pytest", "Appium", "Selenium", "Locust", "GitLab CI/CD", "ReportPortal", "Charles Proxy"],
  },
  {
    company: "Holistiplan",
    role: l("QA Automation Engineer", "QA Automation Engineer"),
    period: l("Окт 2024 — Июн 2025", "Oct 2024 — Jun 2025"),
    description: l(
      "Построил фреймворки автоматизации API и UI тестирования с нуля. Внедрил shift-left подход, интегрировав автотесты в CI/CD пайплайн на ранних этапах разработки.",
      "Built API and UI test automation frameworks from scratch. Implemented shift-left testing approach by integrating automated tests into CI/CD pipelines early in the development cycle."
    ),
    highlights: [
      l("Разработал API тест-сьют на 80+ тестов с валидацией REST-схем, сократив ручную проверку на 60%", "Developed API test suite of 80+ tests with REST schema validation, reducing manual verification by 60%"),
      l("Создал UI-фреймворк на Playwright с нуля, покрыв 200+ E2E-сценариев за 4 месяца", "Built UI automation framework with Playwright from scratch, covering 200+ E2E scenarios in 4 months"),
      l("Докеризировал тестовые среды, сократив время настройки окружения с часов до минут", "Dockerized test environments, reducing setup time from hours to minutes"),
      l("Интегрировал тесты в CI/CD (GitHub Actions + Jenkins), обеспечив автозапуск на каждый PR", "Integrated tests into CI/CD (GitHub Actions + Jenkins), enabling automated runs on every PR"),
      l("Обеспечил кросс-браузерную совместимость на 5 браузерах и 10+ устройствах", "Ensured cross-browser compatibility across 5 browsers and 10+ devices"),
      l("Внедрил Allure Reports, повысив прозрачность результатов тестирования для всей команды", "Implemented Allure Reports, improving test result transparency for the entire team"),
      l("Провёл 15+ сессий анализа первопричин с разработчиками, снизив количество регрессий на 25%", "Led 15+ root cause analysis sessions with developers, reducing regressions by 25%"),
    ],
    tech: ["Python", "Playwright", "Postman", "Docker", "GitHub Actions", "Jenkins", "Allure", "Jira"],
  },
  {
    company: "The CW Streaming Platform",
    role: l("QA Engineer", "QA Engineer"),
    period: l("Ноя 2023 — Сен 2024", "Nov 2023 — Sep 2024"),
    description: l(
      "Обеспечение качества мобильных стриминговых приложений на iOS и Android. Разработка regression test suite на Appium, кросс-функциональное взаимодействие с DevOps и Backend командами.",
      "Quality assurance of mobile streaming applications on iOS and Android. Developed a regression test suite with Appium, cross-functional collaboration with DevOps and Backend teams."
    ),
    highlights: [
      l("Разработал 100+ автотестов на Appium (Python) для iOS и Android, сократив цикл регрессии на 50%", "Developed 100+ Appium (Python) automated tests for iOS and Android, reducing regression cycle by 50%"),
      l("Спроектировал мок-среду через Charles Proxy, обеспечив тестирование 20+ стриминговых edge-кейсов", "Designed mock environment with Charles Proxy, enabling testing of 20+ streaming edge cases"),
      l("Организовал кросс-командную валидацию API с DevOps и Backend, предотвратив 3 критических бага до продакшена", "Organized cross-team API validation with DevOps and Backend, preventing 3 critical bugs before production"),
      l("Покрыл тестами 15+ реальных устройств через BrowserStack, обеспечив 99% совместимость релизов", "Covered 15+ real devices via BrowserStack, ensuring 99% release compatibility"),
    ],
    tech: ["Appium", "Python", "BrowserStack", "Charles Proxy", "TestFlight", "Firebase", "Jira"],
  },
  {
    company: "Kinship",
    role: l("QA Engineer", "QA Engineer"),
    period: l("Янв 2018 — Окт 2023", "Jan 2018 — Oct 2023"),
    description: l(
      "Обеспечение качества веб- и мобильных приложений на протяжении 5+ лет. Выстроил процессы тестирования, управления дефектами и релизного цикла в Agile-команде.",
      "Quality assurance of web and mobile applications over 5+ years. Established testing processes, defect management, and release cycle workflows in an Agile team."
    ),
    highlights: [
      l("Создал и поддерживал 500+ тест-кейсов и матрицы трассируемости в Zephyr Scale", "Created and maintained 500+ test cases and traceability matrices in Zephyr Scale"),
      l("Управлял жизненным циклом 1000+ дефектов в Jira, обеспечив SLA по исправлению критических багов", "Managed lifecycle of 1000+ defects in Jira, ensuring SLA compliance for critical bug fixes"),
      l("Покрыл тестированием 20+ реальных устройств и эмуляторов через BrowserStack", "Covered testing across 20+ real devices and emulators via BrowserStack"),
      l("Руководил регрессионными циклами для 30+ релизов, снизив количество post-release дефектов на 35%", "Led regression cycles for 30+ releases, reducing post-release defects by 35%"),
      l("Обеспечил безопасность через валидацию RBAC и сценариев обработки конфиденциальных данных", "Ensured security through RBAC validation and sensitive data handling scenarios"),
      l("Внедрил smoke/sanity тестирование на 3 окружениях (staging, dev, production), сократив time-to-detect", "Implemented smoke/sanity testing across 3 environments (staging, dev, production), reducing time-to-detect"),
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

// ---- Recommendations ----

export const recommendations = [
  {
    name: "Доступно по запросу",
    nameEn: "Available upon request",
    role: l("Коллега / Руководитель", "Colleague / Manager"),
    company: "",
    text: l(
      "Рекомендации от коллег и руководителей доступны по запросу. Свяжитесь со мной через форму ниже или Telegram.",
      "References from colleagues and managers are available upon request. Contact me via the form below or Telegram."
    ),
    linkedinUrl: "",
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
  recommendations: {
    title: l("Рекомендации", "Recommendations"),
    subtitle: l("Отзывы коллег и руководителей", "Feedback from colleagues and managers"),
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
  available: l("Open to work", "Open to work"),
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
