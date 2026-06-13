import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 's1',
    icon: 'Monitor',
    title: 'Web Development',
    description: 'Full-stack web applications built with modern frameworks. From marketing sites to complex portals, we craft experiences that convert.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    id: 's2',
    icon: 'Cloud',
    title: 'SaaS Development',
    description: 'End-to-end SaaS product development — from architecture design to multi-tenant infrastructure, billing, and analytics.',
    tags: ['Multi-tenant', 'Billing', 'Auth', 'Analytics'],
  },
  {
    id: 's3',
    icon: 'Bot',
    title: 'AI Integration',
    description: 'Embed intelligent automation into your product with LLMs, computer vision, and ML pipelines that create real competitive advantage.',
    tags: ['OpenAI', 'LangChain', 'RAG', 'ML Pipelines'],
  },
  {
    id: 's4',
    icon: 'Server',
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure design, migration, and optimization. We manage DevOps so your team can focus on product.',
    tags: ['AWS', 'GCP', 'Terraform', 'Kubernetes'],
  },
  {
    id: 's5',
    icon: 'Palette',
    title: 'Product Design',
    description: 'User research, UX strategy, and pixel-perfect UI design that delights users and drives retention metrics.',
    tags: ['Figma', 'Design Systems', 'UX Research', 'Prototyping'],
  },
]
