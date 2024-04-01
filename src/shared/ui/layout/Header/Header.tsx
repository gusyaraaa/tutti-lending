import { memo } from 'react'

import LogoSVG from 'assets/logo.svg'

import s from './Header.module.scss'

const AppHeader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.logo}>
        <LogoSVG />
      </div>
      <div className={s.pageLinks}>
        <p>$Tutti</p>
        <p>Actors</p>
        <p>Flows</p>
        <p>Use cases</p>
        <p>Lightpaper</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export const Header = memo(AppHeader)
