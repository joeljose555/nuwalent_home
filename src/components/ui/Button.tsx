import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  className?: string
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[#2563EB] text-white shadow-md hover:bg-[#1D4ED8] active:bg-[#1E40AF] shadow-[0_1px_3px_rgba(37,99,235,0.3)]',
  secondary:
    'bg-[#10B981] text-white shadow-md hover:bg-[#059669] active:bg-[#047857]',
  outline:
    'border border-[#E2E8F0] text-[#0F172A] bg-white hover:bg-[#F8FAFC] hover:border-[#CBD5E1]',
  ghost:
    'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      fullWidth = false,
      className,
      children,
      onClick,
      type = 'button',
      disabled,
      'aria-label': ariaLabel,
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel}
        onClick={onClick}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 cursor-pointer select-none whitespace-nowrap',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
