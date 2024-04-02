import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'
import { Tab, Tabs } from 'shared/ui/common/Tabs'
import { useVisibleOnScroll } from 'shared/hooks/useVisibleOnScroll'
import { PropositionCard } from './ui/PropositionCard/PropositionCard'

import s from './Tutti.module.scss'

export const Tutti = () => {
  const { ref: propositionRef, isVisible } = useVisibleOnScroll({
    threshold: 0.4,
  })

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Text size={64} weight={700} isUppercased>
          Tutti Is a cross-chain liquidity market
        </Text>
        <Text size={32} color="secondary">
          For native bitcoin to EVM chains without a bridge.
        </Text>
      </div>
      <div
        ref={propositionRef}
        className={cns(s.proposition, {
          [s['proposition--visible']]: isVisible,
        })}
      >
        <Text
          size={32}
          weight={700}
          isUppercased
          isCentered
          className={s.propositionTitle}
        >
          Value Proposition
        </Text>
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
