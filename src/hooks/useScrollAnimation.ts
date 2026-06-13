import { useEffect, useState } from 'react'

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

export function useNavbarScrolled(threshold = 20) {
  const scrollY = useScrollY()
  return scrollY > threshold
}
