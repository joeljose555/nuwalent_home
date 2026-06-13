import { motion } from 'framer-motion'
import {
  Zap, Shield, Layers, Code2, BarChart3, Puzzle, Headphones, Globe,
} from 'lucide-react'
import { staggerContainer, staggerItem, viewportConfig } from '../../lib/animations'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import { features } from '../../data/features'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Zap, Shield, Layers, Code2, BarChart3, Puzzle, Headphones, Globe,
}

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28" aria-label="Features">
      <Container>
        <SectionHeader
          eyebrow="Why Nuwalent"
          title="Everything you need to ship with confidence"
          subtitle="We bring architecture discipline, design quality, and engineering rigour to every engagement — so your product is built to last."
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.id}
                variants={staggerItem}
                className="group relative bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#BFDBFE] hover:shadow-lg transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors duration-300">
                    {Icon && (
                      <Icon
                        size={18}
                        className="text-[#2563EB] group-hover:text-white transition-colors duration-300"
                      />
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-[#0F172A] mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
