import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'

import UtilitySVG from 'assets/utility.svg'

import s from './Utility.module.scss'

export const Utility = () => {
  return (
    <div className={s.wrapper}>
      <Text size={16} weight={700} className={s.sectionTitle}>
        Utility
      </Text>
      <div className={s.title}>
        <Text size={32} weight={700} isUppercased>
          Tutti is a governance minimized,
          <br />
          cross-chain liquidity primitive.
        </Text>
        <Text size={18} color="secondary">
          The native token, $TUTTI, is an incentive, staking, and voting asset.
        </Text>
      </div>
      <div className={s.content}>
        <Text size={64} weight={700} isUppercased>
          UTILITY
        </Text>
        <UtilitySVG className={s.image} />
        <div className={cns(s.card, s['card--stakers'])}>
          <Text size={24} weight={700}>
            Stakers
          </Text>
          <Text size={18} color="secondary">
            All revenue goes to stakers of TUTTI based on amount and time lock
            (optional).
          </Text>
        </div>
        <div className={cns(s.card, s['card--incentive'])}>
          <Text size={24} weight={700}>
            Incentive
          </Text>
          <Text size={18} color="secondary">
            Lending pool depositors will receive rewards based on amount and
            time lock (optional)
          </Text>
        </div>
        <div className={cns(s.card, s['card--voting'])}>
          <Text size={24} weight={700}>
            Voting
          </Text>
          <Text size={18} color="secondary">
            Tutti is designed to be a governance-lite protocol with minimal
            voting matters. Select items can be voted on stakers of $TUTTI only.
          </Text>
        </div>
      </div>
    </div>
  )
}
