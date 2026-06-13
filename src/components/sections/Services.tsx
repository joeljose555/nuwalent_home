import { motion } from 'framer-motion'
import { Monitor, Cloud, Bot, Server, Palette, ArrowRight } from 'lucide-react'
import { staggerContainer, staggerItem, viewportConfig } from '../../lib/animations'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import { services } from '../../data/services'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor,
  Cloud,
  Bot,
  Server,
  Palette,
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-[#F8FAFC]"
      aria-label="Services"
    >
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          title="Services built for modern product teams"
          subtitle="From early-stage MVPs to enterprise-scale platforms, we deliver across the full technology stack."
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] ?? Monitor
            const isLast = idx === services.length - 1

            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className={`group bg-white rounded-2xl border border-[#E2E8F0] p-7 hover:shadow-xl hover:border-[#BFDBFE] transition-all duration-300 flex flex-col ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] flex items-center justify-center group-hover:from-[#2563EB] group-hover:to-[#1D4ED8] transition-all duration-300">
                    <Icon
                      size={22}
                      className="text-[#2563EB] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#CBD5E1] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>

                <h3 className="text-base font-semibold text-[#0F172A] mb-2.5 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
