import type { ProcessStep } from '../types'

export const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Discover',
    icon: 'Search',
    description: 'We dive deep into your business goals, user needs, and technical landscape. A thorough discovery prevents expensive pivots later.',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Design',
    icon: 'Figma',
    description: 'UX flows, wireframes, and high-fidelity designs are crafted and validated before a single line of code is written.',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Develop',
    icon: 'Code2',
    description: 'Agile sprints with weekly demos. Clean, documented code with CI/CD pipelines and automated testing from day one.',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Launch',
    icon: 'Rocket',
    description: 'Production deployment, monitoring setup, and a thorough handoff. We stay with you through launch and beyond.',
  },
]
