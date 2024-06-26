import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'
import { useMediaBreakpoints } from 'shared/hooks/useMediaBreakpoints'

import s from './PropositionCard.module.scss'

type Props = {
  title: string
  description: string
  iconId: 'unlock' | 'enable' | 'leverage' | 'auto-degen'
}

export const PropositionCard = ({ title, description, iconId }: Props) => {
  const { isMobile } = useMediaBreakpoints()

  return (
    <div className={cns(s.wrapper, s[`wrapper--${iconId}`])}>
      <Text size={isMobile ? 24 : 32} weight={700} className={s.title}>
        {title}
      </Text>
      <Text
        size={isMobile ? 16 : 24}
        color="secondary"
        className={s.description}
      >
        {description}
      </Text>
    </div>
  )
}
