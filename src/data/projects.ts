export interface Project {
  title: string
  desc: string
  tech: string[]
  metrics: string
  org: string
  /** Optional external link to a demo or repo */
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Real-Time Data Platform',
    desc: 'Live Feeds Service powering commentary, scorecards, and ball-by-ball updates with Apache Kafka event-driven pipeline for IPL-scale traffic.',
    tech: ['Java', 'Kafka', 'AWS', 'MySQL', 'Datadog'],
    metrics: '5M+ RPM · 2M+ Concurrent Users',
    org: 'Dream11',
  },
  {
    title: 'CRIQ Platform',
    desc: 'AI-driven product providing pre-match, live, and post-match predictions — next-over outcomes, session probabilities, win percentages, and what-if scenarios.',
    tech: ['Java', 'Kafka', 'Temporal', 'Vertex AI', 'LLM'],
    metrics: '100K+ Requests · 200ms p99',
    org: 'Dream11',
  },
  {
    title: 'System Controller',
    desc: 'C++ application for managing hardware peripherals via UART, I2C, SPI with terminal and WebSocket interfaces, plus end-to-end OTA updates.',
    tech: ['C++', 'C', 'WebSocket', 'Linux'],
    metrics: '95% OTA Time Reduction',
    org: 'Astrome',
  },
  {
    title: 'EMS Server',
    desc: 'Microservices backend with RPC-over-WebSocket, Pub-Sub architecture, and reusable Vanilla JS component library.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'WebSocket', 'JavaScript'],
    metrics: '60x Query Speed',
    org: 'Astrome',
  },
  {
    title: 'HW Automation Tool',
    desc: 'Full-stack Django REST app automating hardware validation workflows and technical report generation, replacing manual Excel tracking.',
    tech: ['Python', 'Django', 'DRF', 'MAKO'],
    metrics: '75% Manual Work Eliminated',
    org: 'Astrome',
  },
  {
    title: 'Inventory Management System',
    desc: 'Full-stack web app for real-time inventory monitoring, vendor API integration (TI, Mouser), and automated reorder triggers.',
    tech: ['Python', 'Flask', 'JavaScript'],
    metrics: 'Vendor API Integration',
    org: 'Astrome',
  },
  {
    title: 'Rainfall Analysis',
    desc: 'ML-based spatio-temporal trend analysis of rainfall patterns using advanced statistical methods.',
    tech: ['Python', 'ML', 'NumPy'],
    metrics: 'Final Year Project',
    org: 'IIT Guwahati',
  },
]
