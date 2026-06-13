import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { staggerContainer, staggerItem, viewportConfig } from '../../lib/animations'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import { testimonials } from '../../data/testimonials'

const avatarColors = [
  'from-[#2563EB] to-[#1D4ED8]',
  'from-[#10B981] to-[#059669]',
  'from-[#8B5CF6] to-[#7C3AED]',
  'from-[#F59E0B] to-[#D97706]',
  'from-[#EC4899] to-[#DB2777]',
  'from-[#06B6D4] to-[#0891B2]',
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28" aria-label="Testimonials">
      <Container>
        <SectionHeader
          eyebrow="Client Stories"
          title="Don't take our word for it"
          subtitle="Hear from the founders, CTOs, and product leaders who've shipped with Nuwalent."
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              key={t.id}
              variants={staggerItem}
              className="group bg-white rounded-2xl border border-[#E2E8F0] p-7 hover:shadow-xl hover:border-[#BFDBFE] transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="text-[#F59E0B] fill-[#F59E0B]"
                    />
                  ))}
                </div>
                <Quote size={18} className="text-[#E2E8F0] group-hover:text-[#BFDBFE] transition-colors" />
              </div>

              {/* Quote text */}
              <blockquote className="text-sm text-[#334155] leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#F1F5F9]">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0F172A] leading-none mb-0.5">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#64748B]">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
