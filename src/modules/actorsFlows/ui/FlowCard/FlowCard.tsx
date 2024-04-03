import { memo } from 'react'
import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'
import { useMediaBreakpoints } from 'shared/hooks/useMediaBreakpoints'

import s from './FlowCard.module.scss'

type Props = {
  tag: string
  label: string
  title: string
  description: string
  iconId: 'bitcoin' | 'evm' | 'gearbox'
}

export const FlowCard = ({ tag, label, title, description, iconId }: Props) => {
  const { isMobile } = useMediaBreakpoints()

  const CardContent = memo(() => (
    <>
      <Text size={24} weight={700} className={s.cardTitle}>
        {title}
      </Text>
      <Text size={18} color="secondary" className={s.cardDescription}>
        {description}
      </Text>
    </>
  ))

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Text size={isMobile ? 16 : 20} weight={700} className={s.tag}>
          {tag}
        </Text>
        <Text size={isMobile ? 20 : 24} weight={700} isUppercased>
          {label}
        </Text>
      </div>
      {isMobile && <CardContent />}
      <div className={cns(s.card, s[`card--${iconId}`])}>
        {!isMobile && <CardContent />}
      </div>
    </div>
  )
}
