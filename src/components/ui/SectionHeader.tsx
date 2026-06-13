import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../../lib/animations'
import { cn } from '../../utils/cn'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeUp}
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#2563EB] mb-3">
          <span className="w-4 h-px bg-[#2563EB] inline-block" />
          {eyebrow}
          <span className="w-4 h-px bg-[#2563EB] inline-block" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
