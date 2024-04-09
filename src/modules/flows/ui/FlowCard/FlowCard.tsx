import { Fragment, memo } from 'react'
import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'
import { useMediaBreakpoints } from 'shared/hooks/useMediaBreakpoints'

import s from './FlowCard.module.scss'

type Props = {
  tag: string
  label: string
  title: string
  description: string
  iconId: 'bitcoin' | 'gearbox'
}

export const FlowCard = ({ tag, label, title, description, iconId }: Props) => {
  const { isMobile } = useMediaBreakpoints()

  const CardContent = memo(() => (
    <div className={s.content}>
      <Text size={24} weight={700} className={s.contentTitle}>
        {title}
      </Text>
      <Text size={18} color="secondary" className={s.contentDescription}>
        {description.split('\\n').map((part, index) => (
          <Fragment key={index}>
            {index !== 0 ? <br /> : <></>}
            {part}
          </Fragment>
        ))}
      </Text>
    </div>
  ))

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Text
          size={isMobile ? 16 : 20}
          weight={700}
          color="gold"
          className={s.tag}
        >
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
