import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../../lib/animations'
import Container from '../layout/Container'
import SectionHeader from '../ui/SectionHeader'
import Accordion from '../ui/Accordion'
import { faqItems } from '../../data/faq'

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28" aria-label="Frequently Asked Questions">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Questions we hear often"
          subtitle="Everything you need to know before starting a project with us."
          className="mb-12"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <Accordion items={faqItems} />
        </motion.div>
      </Container>
    </section>
  )
}
