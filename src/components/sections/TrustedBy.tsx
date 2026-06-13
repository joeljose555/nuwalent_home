import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeUp, viewportConfig } from '../../lib/animations'
import Container from '../layout/Container'
import { stats, trustedByLogos } from '../../data/stats'

export default function TrustedBy() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-[#E2E8F0]" aria-label="Trusted By">
      <Container>
        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-none mb-1">
                {stat.value}
                {stat.suffix && (
                  <span className="text-[#2563EB]">{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm text-[#64748B] font-medium mt-1.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider with label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px bg-[#E2E8F0]" />
          <span className="text-xs text-[#94A3B8] font-medium tracking-widest uppercase whitespace-nowrap">
            Trusted by innovative teams
          </span>
          <div className="flex-1 h-px bg-[#E2E8F0]" />
        </motion.div>

        {/* Logo grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {trustedByLogos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={staggerItem}
              className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-sm transition-all duration-200 cursor-default"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {logo.letter}
              </div>
              <span className="text-sm font-semibold text-[#334155]">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
