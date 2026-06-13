import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Shield, Clock } from 'lucide-react'
import { staggerContainer, staggerItem, viewportConfig } from '../../lib/animations'
import Container from '../layout/Container'
import Button from '../ui/Button'

const trustPoints = [
  { icon: Calendar, text: 'Free 30-min discovery call' },
  { icon: Clock, text: 'Proposal in 48 hours' },
  { icon: Shield, text: 'No commitment required' },
]

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 relative overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#0F172A]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10B981] rounded-full blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            Accepting new projects for Q3 2026
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="text-3xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Ready to build something{' '}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
              remarkable?
            </span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Book a free discovery call. We'll listen to your goals, ask the right questions,
            and tell you exactly how we'd approach your project.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          >
            <Button
              size="lg"
              icon={<ArrowRight size={16} />}
              className="bg-white text-[#0F172A] hover:bg-white/90 shadow-xl"
            >
              Book a Free Discovery Call
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              hello@nuwalent.com
            </Button>
          </motion.div>

          <motion.ul
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
            role="list"
          >
            {trustPoints.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm text-white/50">
                <Icon size={14} className="text-[#10B981]" />
                {text}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  )
}
