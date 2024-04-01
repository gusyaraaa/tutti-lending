import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'

import s from './ActorCard.module.scss'

type Props = {
  title: string
  description: string
  iconId: 'protocol-bg' | 'quantium-bg' | 'gearbox-bg' | 'evm-bg'
}

export const ActorCard = ({ title, description, iconId }: Props) => {
  return (
    <div className={cns(s.wrapper, s[`wrapper--${iconId}`])}>
      <Text size={20} weight={700} isUppercased className={s.title}>
        {title}
      </Text>
      <Text size={18} color="secondary">
        {description}
      </Text>
    </div>
  )
}
