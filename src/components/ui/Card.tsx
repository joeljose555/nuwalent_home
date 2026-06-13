import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  as?: 'div' | 'article' | 'li'
}

export default function Card({
  children,
  className,
  hover = false,
  glow = false,
  as: Tag = 'div',
}: CardProps) {
  const base = cn(
    'rounded-xl border border-[#E2E8F0] bg-white p-6',
    hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:border-[#CBD5E1]',
    glow && 'hover:shadow-[0_0_0_1px_#2563EB20,0_8px_32px_#2563EB12]',
    className
  )

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    )
  }

  return <Tag className={base}>{children}</Tag>
}
