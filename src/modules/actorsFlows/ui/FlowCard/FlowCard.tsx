import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'

import s from './FlowCard.module.scss'

type Props = {
  tag: string
  label: string
  title: string
  description: string
  iconId: 'bitcoin' | 'evm' | 'gearbox'
}

export const FlowCard = ({ tag, label, title, description, iconId }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Text size={20} weight={700} className={s.tag}>
          {tag}
        </Text>
        <Text size={24} weight={700} isUppercased>
          {label}
        </Text>
      </div>
      <div className={cns(s.card, s[`card--${iconId}`])}>
        <Text size={24} weight={700}>
          {title}
        </Text>
        <Text size={18}>{description}</Text>
      </div>
    </div>
  )
}
