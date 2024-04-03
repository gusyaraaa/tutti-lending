import { useEffect, useRef, useState } from 'react'

import { useMediaBreakpoints } from './useMediaBreakpoints'

type Params = {
  threshold?: number
}

export const useVisibleOnScroll = ({ threshold = 0.5 }: Params = {}) => {
  const { isMobile } = useMediaBreakpoints()
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: isMobile ? '80px 0px 0px' : '110px 0px 0px',
      threshold,
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting)
      })
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref])

  return { ref, isVisible }
}
