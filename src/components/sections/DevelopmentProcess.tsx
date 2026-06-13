import { motion } from 'framer-motion'
import { Search, PenTool, Code2, Rocket } from 'lucide-react'
import { staggerContainer, staggerItem, viewportConfig } from '../../lib/animations'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import { processSteps } from '../../data/process'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Search,
  Figma: PenTool,
  Code2,
  Rocket,
}

export default function DevelopmentProcess() {
  return (
    <section
      id="process"
      className="py-20 sm:py-28 bg-[#F8FAFC]"
      aria-label="Development Process"
    >
      <Container>
        <SectionHeader
          eyebrow="How We Work"
          title="From idea to launch in weeks, not months"
          subtitle="A clear, proven process that keeps you informed at every step and eliminates the guesswork from software development."
          className="mb-16"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="relative"
        >
          {/* Desktop connector line */}
          <div className="absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px bg-[#E2E8F0] hidden lg:block" />
          <div className="absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px hidden lg:block overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2563EB] to-[#10B981]"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => {
              const Icon = iconMap[step.icon] ?? Search
              return (
                <motion.div
                  key={step.id}
                  variants={staggerItem}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  {/* Step indicator */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#E2E8F0] flex items-center justify-center shadow-sm group-hover:border-[#2563EB] transition-colors relative z-10">
                      <Icon size={22} className="text-[#2563EB]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2563EB] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-1.5">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
