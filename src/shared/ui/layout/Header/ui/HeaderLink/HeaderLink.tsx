import { PropsWithChildren } from 'react'

import { Text } from 'shared/ui/common/Text'
import { useMediaBreakpoints } from 'shared/hooks/useMediaBreakpoints'

import s from './HeaderLink.module.scss'

type Props = {
  href: string
  onClick: () => void
}

export const HeaderLink: React.FC<PropsWithChildren<Props>> = ({
  href,
  onClick,
  children,
}) => {
  const { isMobile } = useMediaBreakpoints()

  return (
    <a href={href}>
      <Text size={isMobile ? 20 : 16} className={s.link} onClick={onClick}>
        {children}
      </Text>
    </a>
  )
}
