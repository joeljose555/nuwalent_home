import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'
import { staggerContainer, staggerItem, heroEntrance } from '../../lib/animations'
import Container from '../layout/Container'
import Button from '../ui/Button'
import HeroDashboard from './HeroDashboard'

const trustPoints = [
  '80+ products shipped',
  'Trusted by 50+ companies',
  'SOC 2 & HIPAA experience',
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-white to-[#ECFDF5] opacity-70" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#2563EB] opacity-[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#10B981] opacity-[0.05] rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            {/* Eyebrow badge */}
            <motion.div variants={staggerItem} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                Now taking new clients for Q3 2026
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={heroEntrance}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6"
            >
              We Build Software{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#2563EB] to-[#10B981] bg-clip-text text-transparent">
                  That Scales
                </span>
              </span>{' '}
              Your Business
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Nuwalent is a premium software development partner for startups, SMEs,
              and enterprises. We design, build, and ship production-ready SaaS products,
              AI integrations, and cloud infrastructure.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <Button size="lg" icon={<ArrowRight size={16} />}>
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                icon={<Play size={14} className="fill-current" />}
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust points */}
            <motion.ul
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-5 justify-center lg:justify-start"
              role="list"
            >
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-1.5 text-sm text-[#64748B]"
                >
                  <CheckCircle2 size={14} className="text-[#10B981] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
