import { memo, useState } from 'react'
import cns from 'classnames'

import { useMediaBreakpoints } from 'shared/hooks/useMediaBreakpoints'
import { HeaderLink } from './ui/HeaderLink'

import LogoSVG from 'assets/logo.svg'

import s from './Header.module.scss'

const AppHeader = () => {
  const { isMobile } = useMediaBreakpoints()
  const [isVisibleMenu, setIsVisibleMenu] = useState(false)

  const handleLinkClick = () => {
    setIsVisibleMenu(false)
  }

  return (
    <div className={cns(s.wrapper, { [s['wrapper-active']]: isVisibleMenu })}>
      <div className={s.content}>
        <div className={s.logo}>
          <LogoSVG
            onClick={() => {
              setIsVisibleMenu(false)
              window.scrollTo({ top: 0 })
            }}
          />
        </div>
        <div className={cns(s.menu, { [s['menu-active']]: isVisibleMenu })}>
          {isMobile && (
            <div
              className={s.hamburger}
              onClick={() => setIsVisibleMenu(!isVisibleMenu)}
            />
          )}

          <div className={s.pageLinks}>
            <HeaderLink href="#" onClick={handleLinkClick}>
              $Tutti
            </HeaderLink>
            <HeaderLink href="#actors" onClick={handleLinkClick}>
              Actors
            </HeaderLink>
            <HeaderLink href="#flows" onClick={handleLinkClick}>
              Flows
            </HeaderLink>
            <HeaderLink href="#use-cases" onClick={handleLinkClick}>
              Use cases
            </HeaderLink>
            <HeaderLink href="#lightpaper" onClick={handleLinkClick}>
              Lightpaper
            </HeaderLink>
            <HeaderLink href="#contact" onClick={handleLinkClick}>
              Contact
            </HeaderLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Header = memo(AppHeader)
