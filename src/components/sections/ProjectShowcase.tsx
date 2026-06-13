import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { staggerContainer, staggerItem, viewportConfig } from '../../lib/animations'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

const projectGradients = [
  'from-[#EFF6FF] via-[#DBEAFE] to-[#BFDBFE]',
  'from-[#ECFDF5] via-[#D1FAE5] to-[#A7F3D0]',
  'from-[#FFF7ED] via-[#FED7AA] to-[#FDBA74]',
]

const accentColors = ['#2563EB', '#10B981', '#F59E0B']

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 sm:py-28" aria-label="Project Showcase">
      <Container>
        <SectionHeader
          eyebrow="Our Work"
          title="Case studies that speak for themselves"
          subtitle="Real problems. Real solutions. Measurable results. Here's what we've built with our clients."
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="space-y-8"
        >
          {projects.map((project, idx) => {
            const accent = accentColors[idx % accentColors.length]
            const gradient = projectGradients[idx % projectGradients.length]

            return (
              <motion.article
                key={project.id}
                variants={staggerItem}
                className="group bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-2xl hover:border-[#CBD5E1] transition-all duration-500"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Visual panel */}
                  <div
                    className={`lg:col-span-2 relative min-h-48 lg:min-h-0 bg-gradient-to-br ${gradient} flex items-center justify-center p-8 overflow-hidden ${
                      idx % 2 === 1 ? 'lg:col-start-4' : ''
                    }`}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, ${accent} 1px, transparent 0)`,
                          backgroundSize: '24px 24px',
                        }}
                      />
                    </div>
                    <div className="relative text-center">
                      <div
                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                        style={{ backgroundColor: accent }}
                      >
                        {project.title[0]}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: accent }}>
                        {project.industry}
                      </div>
                      <div className="text-sm font-semibold text-[#0F172A]">
                        {project.title.split('—')[0].trim()}
                      </div>
                    </div>
                  </div>

                  {/* Content panel */}
                  <div className={`lg:col-span-3 p-7 sm:p-8 flex flex-col ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <Badge variant="primary">{project.industry}</Badge>
                      {project.tags.slice(1).map((tag) => (
                        <Badge key={tag} variant="muted">{tag}</Badge>
                      ))}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-4 leading-tight group-hover:text-[#2563EB] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#94A3B8] block mb-1.5">
                          The Problem
                        </span>
                        <p className="text-sm text-[#64748B] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#94A3B8] block mb-1.5">
                          Our Solution
                        </span>
                        <p className="text-sm text-[#64748B] leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9]"
                        >
                          <TrendingUp size={13} className="text-[#10B981]" />
                          <div>
                            <div className="text-base font-bold text-[#0F172A] leading-none">
                              {metric.value}
                            </div>
                            <div className="text-[10px] text-[#94A3B8] mt-0.5">
                              {metric.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      icon={<ArrowRight size={14} />}
                      className="self-start text-[#2563EB] hover:bg-[#EFF6FF]"
                    >
                      Read Full Case Study
                    </Button>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
