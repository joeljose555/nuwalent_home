export interface NavItem {
  label: string
  href: string
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
  tags: string[]
}

export interface Project {
  id: string
  title: string
  industry: string
  problem: string
  solution: string
  results: string[]
  metrics: { label: string; value: string }[]
  image: string
  tags: string[]
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  rating: number
}

export interface PricingFeature {
  text: string
  included: boolean
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  description: string
  features: PricingFeature[]
  highlighted?: boolean
  cta: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface Stat {
  label: string
  value: string
  suffix?: string
}

export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
  icon: string
}
