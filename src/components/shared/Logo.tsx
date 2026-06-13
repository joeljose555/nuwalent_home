import { cn } from '../../utils/cn'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'white'
}

const sizeMap = {
  sm: { icon: 20, text: 'text-base' },
  md: { icon: 26, text: 'text-xl' },
  lg: { icon: 32, text: 'text-2xl' },
}

export default function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  const { icon, text } = sizeMap[size]

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div
        className="rounded-lg bg-[#2563EB] flex items-center justify-center flex-shrink-0"
        style={{ width: icon, height: icon }}
      >
        <svg
          width={icon * 0.6}
          height={icon * 0.6}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 12L8 4L13 12H9.5L8 9.5L6.5 12H3Z"
            fill="white"
            fillOpacity="0.95"
          />
          <circle cx="8" cy="4" r="1.5" fill="#10B981" />
        </svg>
      </div>
      <span
        className={cn(
          text,
          'font-bold tracking-tight',
          variant === 'white' ? 'text-white' : 'text-[#0F172A]'
        )}
      >
        nuw<span className="text-[#2563EB]">a</span>lent
      </span>
    </div>
  )
}
