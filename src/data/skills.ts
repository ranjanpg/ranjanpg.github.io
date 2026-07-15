export interface SkillCategory {
  name: string
  items: string[]
}

export const categories: SkillCategory[] = [
  { name: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'JavaScript (ES6+)'] },
  { name: 'Web & Frameworks', items: ['Django', 'DRF', 'Flask', 'FastAPI', 'Spring Boot', 'Vert.x', 'React', 'Vanilla JS', 'HTML/CSS'] },
  { name: 'Infrastructure', items: ['AWS (EC2, S3, CloudFront, Lambda, RDS)', 'Docker', 'Apache Kafka', 'Git', 'CI/CD', 'Datadog', 'Linux'] },
  { name: 'Databases', items: ['MySQL', 'PostgreSQL', 'Aerospike'] },
  { name: 'Interests', items: ['Full Stack Dev', 'DSA', 'Machine Learning', 'AI & Math'] },
]
