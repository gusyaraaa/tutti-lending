import { useMediaQuery } from './useMediaQuery'

export function useMediaBreakpoints() {
  const isMobile = useMediaQuery('(max-width: 800px)')
  const isTablet = useMediaQuery('(max-width: 1024px)')
  const isLaptop = useMediaQuery('(max-width: 1280px)')
  const isDesktopSmall = useMediaQuery('(max-width: 1512px)')
  return { isMobile, isTablet, isLaptop, isDesktopSmall }
}
