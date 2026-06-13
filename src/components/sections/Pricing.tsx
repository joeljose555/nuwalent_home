import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Sparkles } from 'lucide-react'
import { staggerContainer, staggerItem, viewportConfig } from '../../lib/animations'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { pricingPlans } from '../../data/pricing'

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 bg-[#F8FAFC]"
      aria-label="Pricing"
    >
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title="Transparent pricing, no surprises"
          subtitle="Choose the engagement model that fits your stage. Every plan includes full source code ownership and post-launch support."
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'border-2 border-[#2563EB] bg-white shadow-[0_0_0_1px_#2563EB20,0_20px_50px_#2563EB18] scale-[1.02]'
                  : 'border border-[#E2E8F0] bg-white hover:shadow-xl hover:border-[#CBD5E1]'
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[10px] font-semibold px-4 py-1 rounded-b-lg flex items-center gap-1.5">
                  <Sparkles size={10} />
                  Most Popular
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Header */}
                <div className="mb-7">
                  <h3 className="text-base font-semibold text-[#0F172A] mb-1">{plan.name}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-5">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-bold ${plan.highlighted ? 'text-[#2563EB]' : 'text-[#0F172A]'}`}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-[#94A3B8]">{plan.period}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  fullWidth
                  icon={<ArrowRight size={14} />}
                  className="mb-7"
                >
                  {plan.cta}
                </Button>

                {/* Divider */}
                <div className="h-px bg-[#F1F5F9] mb-6" />

                {/* Features */}
                <ul className="space-y-3 flex-1" role="list">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className={`flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
                          feature.included
                            ? 'bg-[#ECFDF5] text-[#10B981]'
                            : 'bg-[#F8FAFC] text-[#CBD5E1]'
                        }`}
                      >
                        {feature.included ? (
                          <Check size={9} strokeWidth={3} />
                        ) : (
                          <X size={9} strokeWidth={3} />
                        )}
                      </span>
                      <span
                        className={`text-sm leading-snug ${
                          feature.included ? 'text-[#334155]' : 'text-[#94A3B8]'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          className="text-center text-sm text-[#94A3B8] mt-8"
        >
          All prices are project-based estimates. Final pricing is confirmed after discovery.{' '}
          <a href="#faq" className="text-[#2563EB] hover:underline">
            See FAQ
          </a>{' '}
          for payment structure details.
        </motion.p>
      </Container>
    </section>
  )
}
