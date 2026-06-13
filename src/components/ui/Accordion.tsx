import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '../../utils/cn'
import type { FAQItem } from '../../types'

interface AccordionProps {
  items: FAQItem[]
  className?: string
}

interface AccordionItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className={cn(
        'border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-200',
        isOpen && 'border-[#2563EB30] shadow-sm'
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer group"
      >
        <span className="font-semibold text-[#0F172A] text-sm sm:text-base leading-snug group-hover:text-[#2563EB] transition-colors">
          {item.question}
        </span>
        <span
          className={cn(
            'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200',
            isOpen
              ? 'bg-[#2563EB] text-white'
              : 'bg-[#F1F5F9] text-[#64748B]'
          )}
        >
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5">
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  )
}
