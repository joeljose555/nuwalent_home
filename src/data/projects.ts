import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'FinFlow — B2B Payments Platform',
    industry: 'FinTech',
    problem: 'Manual invoice reconciliation was costing 40+ hours per week and causing payment delays across their 3,000+ client network.',
    solution: 'Built an automated payment orchestration platform with real-time reconciliation, smart routing, and a self-serve merchant dashboard.',
    results: [
      '94% reduction in manual reconciliation time',
      '$2.4M saved in operational costs annually',
      'On-boarded 800 new merchants in first quarter',
    ],
    metrics: [
      { label: 'Time Saved', value: '94%' },
      { label: 'Cost Reduction', value: '$2.4M' },
      { label: 'Merchants', value: '800+' },
    ],
    image: '/images/project-finflow.jpg',
    tags: ['FinTech', 'SaaS', 'Payments'],
  },
  {
    id: 'p2',
    title: 'MedLink — Healthcare Coordination SaaS',
    industry: 'HealthTech',
    problem: 'Disconnected care teams and fragmented patient records were leading to care delays and compliance risks at a regional hospital network.',
    solution: 'Developed a HIPAA-compliant care coordination platform with real-time messaging, shared care plans, and EMR integrations.',
    results: [
      '60% faster patient handoff time',
      'HIPAA & SOC 2 Type II certified',
      'Deployed across 12 hospital sites',
    ],
    metrics: [
      { label: 'Faster Handoffs', value: '60%' },
      { label: 'Compliance', value: 'SOC 2' },
      { label: 'Hospital Sites', value: '12' },
    ],
    image: '/images/project-medlink.jpg',
    tags: ['HealthTech', 'HIPAA', 'Enterprise'],
  },
  {
    id: 'p3',
    title: 'Lumi — AI-Powered Learning Platform',
    industry: 'EdTech',
    problem: 'Generic online courses had low completion rates (under 8%). Students needed personalized pacing and adaptive content.',
    solution: 'Built an adaptive learning engine with AI-driven personalization, spaced repetition, and real-time progress analytics for instructors.',
    results: [
      'Completion rate increased from 8% to 67%',
      '4.9/5 learner satisfaction score',
      '120,000 active monthly learners',
    ],
    metrics: [
      { label: 'Completion Rate', value: '67%' },
      { label: 'Satisfaction', value: '4.9/5' },
      { label: 'Monthly Learners', value: '120K' },
    ],
    image: '/images/project-lumi.jpg',
    tags: ['EdTech', 'AI', 'Consumer'],
  },
]
