import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'
import { useVisibleOnScroll } from 'shared/hooks/useVisibleOnScroll'
import { useMediaBreakpoints } from 'shared/hooks/useMediaBreakpoints'

import UtilitySVG from 'assets/utility.svg'

import s from './Utility.module.scss'

export const Utility = () => {
  const { isMobile, isTablet } = useMediaBreakpoints()
  const { ref: stakersRef, isVisible: isStakersVisible } = useVisibleOnScroll({
    threshold: isMobile ? 0.3 : 0.5,
  })
  const { ref: incentiveRef, isVisible: isIncentiveVisible } =
    useVisibleOnScroll({
      threshold: isMobile ? 0.3 : 0.7,
    })
  const { ref: votingRef, isVisible: isVotingVisible } = useVisibleOnScroll({
    threshold: isMobile ? 0.3 : 0.4,
  })

  return (
    <div className={s.wrapper} id="utility">
      <Text size={24} weight={700} className={s.sectionTitle}>
        Utility
      </Text>
      <div className={s.title}>
        <Text size={isMobile ? 20 : 32} weight={700} isUppercased>
          Tutti is a governance minimized,
          <br />
          cross-chain liquidity primitive.
        </Text>
        <Text size={18} color="secondary">
          The native token, $TUTTI, is an incentive, staking, and voting asset.
        </Text>
      </div>
      <div className={s.content}>
        <UtilitySVG className={s.image} />
        <div
          ref={stakersRef}
          className={cns(s.card, s['card--stakers'], {
            [s['card-visible']]: isStakersVisible,
          })}
        >
          <Text size={24} weight={700}>
            Stakers
          </Text>
          <Text size={18} color="secondary">
            All revenue goes to stakers of TUTTI based on amount and time lock
            (optional).
          </Text>
        </div>
        <div
          ref={incentiveRef}
          className={cns(s.card, s['card--incentive'], {
            [s['card-visible']]: isIncentiveVisible,
          })}
        >
          <Text size={24} weight={700}>
            Incentive
          </Text>
          <Text size={18} color="secondary">
            Lending pool depositors will receive rewards based on amount and
            time lock (optional)
          </Text>
        </div>
        <div
          ref={votingRef}
          className={cns(s.card, s['card--voting'], {
            [s['card-visible']]: isVotingVisible,
          })}
        >
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
