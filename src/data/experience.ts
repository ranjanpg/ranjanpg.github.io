export interface Job {
  company: string
  role: string
  location: string
  period: string
  projects: string
  metrics: string[]
  tech: string[]
  details: string[]
}

export const jobs: Job[] = [
  {
    company: 'Dream11',
    role: 'SDE-2',
    location: 'Mumbai',
    period: 'Dec 2024 — Present',
    projects: 'Real-Time Data Platform, CRIQ Platform',
    metrics: ['5M+ RPM', '2M+ Users', '100K+ Requests', '200ms p99'],
    tech: ['Java', 'Kafka', 'MySQL', 'AWS', 'Datadog', 'Temporal', 'Vertex AI'],
    details: [
      'Built and scaled the Live Feeds Service — a real-time platform powering commentary, scorecards, and ball-by-ball updates — using Apache Kafka event-driven pipeline, handling 5M+ RPM and 2M+ concurrent users at IPL match start',
      'Established Datadog-based observability across 5+ services ahead of IPL peak traffic, cutting incident detection time from ~30 to ~5 minutes and maintaining zero P0 outages',
      'Owned the backend architecture for CRIQ — Dream11\'s AI-driven product providing pre-match, live, and post-match predictions (next-over outcomes, session probabilities, win percentages, what-if scenarios)',
      'Architected data pipelines aggregating AI predictions across full match life-cycle, serving enriched data to 100K+ requests at ~200ms p99 latency',
      'Built an end-to-end LLM-based content generation engine that ingests real-time match feeds and AI predictions to auto-generate match blogs, stories, and live insights, orchestrated via Temporal workflows',
    ],
  },
  {
    company: 'Astrome Technologies',
    role: 'SDE-1',
    location: 'Bengaluru',
    period: 'Jan 2023 — Dec 2024',
    projects: 'System Controller, EMS Server, HW Automation',
    metrics: ['95% OTA Time ↓', '60x Query Speed', '80% Usability ↑', '75% Manual Work ↓'],
    tech: ['C/C++', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'JavaScript', 'WebSocket'],
    details: [
      'Architected a C++ application managing hardware peripherals (UART, I2C, SPI) with terminal and WebSocket-based web interfaces for real-time device management',
      'Designed end-to-end Over-the-Air (OTA) update feature, reducing update process time by ~95% and decreasing update-related errors by ~80%',
      'Architected microservices-based backend with RPC-over-WebSocket server for seamless, low-latency real-time communication across the system',
      'Improved database performance by diagnosing slow query execution and designing an indexing strategy, achieving a 60x improvement in query response time',
      'Built a reusable, component-based UI module using Vanilla JavaScript, Web Components, and OOD, becoming the standard component library for all subsequent features',
      'Developed full-stack Django REST app to automate hardware validation workflows, eliminating manual Excel-based tracking and automating technical report generation',
    ],
  },
  {
    company: 'Astrome Technologies',
    role: 'Software Development Intern',
    location: 'Bengaluru',
    period: 'Nov 2022 — Jan 2023',
    projects: 'Inventory Management System',
    metrics: ['Real-time Monitoring', 'Automated Reorders', 'Vendor API Integration'],
    tech: ['Python', 'Flask', 'JavaScript'],
    details: [
      'Developed a full-stack web application enabling real-time monitoring, inquiries, order placement, and vendor reviews through APIs (Texas Instruments, Mouser Electronics, etc.)',
      'Improved inventory accuracy and turnaround by centralizing vendor data and automating reorder triggers, eliminating stock-outs and delays',
    ],
  },
]
