import { memo } from 'react'

import { Text } from 'shared/ui/common/Text'

import LogoSVG from 'assets/logo.svg'

import s from './Footer.module.scss'

const AppFooter = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
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
      <div className={s.additional}>
        <Text size={16} color="dark">
          ©2024 tutti
        </Text>
        <div className={s.agreements}>
          <Text size={16} color="dark">
            Privacy Policy
          </Text>
          <Text size={16} color="dark">
            Legal notice
          </Text>
        </div>
      </div>
    </div>
  )
}

export const Footer = memo(AppFooter)
