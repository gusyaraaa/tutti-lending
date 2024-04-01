import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'

import s from './PropositionCard.module.scss'

type Props = {
  title: string
  description: string
  iconId: 'unlock' | 'enable' | 'leverage' | 'auto-degen'
}

export const PropositionCard = ({ title, description, iconId }: Props) => {
  return (
    <div className={cns(s.wrapper, s[`wrapper--${iconId}`])}>
      <Text size={32} weight={700} className={s.title}>
        {title}
      </Text>
      <Text size={24} color="secondary" className={s.description}>
        {description}
      </Text>
    </div>
  )
}
