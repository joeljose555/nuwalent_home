import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'
import { useNavbarScrolled } from '../../hooks/useScrollAnimation'
import Container from '../layout/Container'
import Logo from '../shared/Logo'
import Button from '../ui/Button'
import { navItems } from '../../data/navigation'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useNavbarScrolled(20)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <Container>
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3.5 py-2 text-sm font-medium text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] rounded-md transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              Contact
            </a>
            <Button
              size="sm"
              icon={<ArrowRight size={14} />}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white border-t border-[#E2E8F0] overflow-hidden"
          >
            <Container>
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-[#334155] hover:text-[#0F172A] hover:bg-[#F8FAFC] rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-3 border-t border-[#F1F5F9]">
                  <Button
                    fullWidth
                    icon={<ArrowRight size={14} />}
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a Call
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
