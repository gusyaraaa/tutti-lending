import { memo } from 'react'

import { Text } from 'shared/ui/common/Text'
import { useMediaBreakpoints } from 'shared/hooks/useMediaBreakpoints'

import LogoSVG from 'assets/logo.svg'
import XSVG from 'assets/x.svg'
import TelegramSVG from 'assets/telegram.svg'
import DiscordSVG from 'assets/discord.svg'

import s from './Footer.module.scss'

const AppFooter = () => {
  const { isMobile } = useMediaBreakpoints()

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.logo}>
          <LogoSVG
            onClick={() => {
              window.scrollTo({ top: 0 })
            }}
          />
        </div>
        {!isMobile && (
          <div className={s.pageLinks}>
            <a href="#">
              <Text size={16} className={s.link}>
                $Tutti
              </Text>
            </a>
            <a href="#flows">
              <Text size={16} className={s.link}>
                Flows
              </Text>
            </a>
            <a href="#utility">
              <Text size={16} className={s.link}>
                Utility
              </Text>
            </a>
            <a href="#lightpaper">
              <Text size={16} className={s.link}>
                Lightpaper
              </Text>
            </a>
            <a href="#contact">
              <Text size={16} className={s.link}>
                Contact
              </Text>
            </a>
          </div>
        )}
      </div>
      <div className={s.additional}>
        <div className={s.socials}>
          <a href="https://twitter.com/TuttiLabs" target="_blank">
            <XSVG />
          </a>
          <a href="https://t.me/tutti_official" target="_blank">
            <TelegramSVG />
          </a>
          <a href="https://discord.gg/zxs6hVvP" target="_blank">
            <DiscordSVG />
          </a>
        </div>
        <div className={s.agreements}>
          <Text size={16} color="dark">
            Privacy Policy
          </Text>
          <Text size={16} color="dark">
            Legal notice
          </Text>
          {!isMobile && (
            <Text size={16} color="dark" className={s.stamp}>
              ©2024 tutti
            </Text>
          )}
        </div>
        {isMobile && (
          <Text size={16} color="dark" className={s.stamp}>
            ©2024 tutti
          </Text>
        )}
      </div>
    </div>
  )
}

export const Footer = memo(AppFooter)
