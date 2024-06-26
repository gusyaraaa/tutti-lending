import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'
import { Tab, Tabs } from 'shared/ui/common/Tabs'
import { useMediaBreakpoints } from 'shared/hooks/useMediaBreakpoints'
import { useVisibleOnScroll } from 'shared/hooks/useVisibleOnScroll'
import { PropositionCard } from './ui/PropositionCard/PropositionCard'

import s from './Tutti.module.scss'

export const Tutti = () => {
  const { isMobile, isTablet } = useMediaBreakpoints()
  const { ref: propositionRef, isVisible } = useVisibleOnScroll({
    threshold: 0.4,
  })

  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <Text
          size={isMobile ? 28 : isTablet ? 48 : 64}
          weight={700}
          isUppercased
          className={s.title}
        >
          TUTTI IS A CROSS-CHAIN{' '}
          <span className={s['title--bitcoin']}>BITCOIN</span> LIQUIDITY MARKET
        </Text>
        <Text
          size={isMobile ? 18 : isTablet ? 24 : 32}
          weight={600}
          color="secondary"
        >
          Native bitcoin to EVM chains without a bridge
        </Text>
      </div>
      <div
        ref={propositionRef}
        className={cns(s.proposition, {
          [s['proposition--visible']]: isVisible,
        })}
      >
        {!isMobile && (
          <Text
            size={32}
            weight={700}
            isCentered
            className={s.propositionTitle}
          >
            What does Tutti do?
          </Text>
        )}
        <Tabs>
          <Tab title="Unlock">
            <PropositionCard
              title="Unlock cross-chain liquidity without bridges"
              description="Deposit bitcoin and borrow USDC on EVM chains"
              iconId="unlock"
            />
          </Tab>
          <Tab title="Enable">
            <PropositionCard
              title="Enable yield for bitcoin"
              description="Deposit bitcoin and borrow liquid (re)staking tokens; earning yield without selling"
              iconId="enable"
            />
          </Tab>
          <Tab title="Leverage">
            <PropositionCard
              title="Leverage strategies like reflexive looping"
              description="Deposit bitcoin, borrow ETH, stake ETH, restake ETH, repeat"
              iconId="leverage"
            />
          </Tab>
          <Tab title="Auto Degen">
            <PropositionCard
              title="Auto Degen strategy"
              description="Deposit bitcoin, borrow ETH, deposit onto Gearbox to margin trade or leverage liquidity provisioning via one-click"
              iconId="auto-degen"
            />
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}
