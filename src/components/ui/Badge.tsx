import { cn } from '../../utils/cn'

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'muted' | 'outline'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[#F1F5F9] text-[#475569]',
  primary: 'bg-[#EFF6FF] text-[#2563EB]',
  secondary: 'bg-[#ECFDF5] text-[#059669]',
  muted: 'bg-[#F8FAFC] text-[#64748B]',
  outline: 'border border-[#E2E8F0] text-[#64748B] bg-white',
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium leading-none',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
