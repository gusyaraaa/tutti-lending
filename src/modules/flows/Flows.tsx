import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'
import { useVisibleOnScroll } from 'shared/hooks/useVisibleOnScroll'
import { FlowCard } from './ui/FlowCard'

import s from './Flows.module.scss'

export const Flows = () => {
  const { ref: flowsRef, isVisible: isFlowsVisible } = useVisibleOnScroll({
    threshold: 0.15,
  })

  return (
    <div className={s.wrapper} id="flows">
      <Text size={24} weight={700} className={s.sectionTitle}>
        Flows
      </Text>
      <div
        ref={flowsRef}
        className={cns(s.flows, {
          [s['flows-visible']]: isFlowsVisible,
        })}
      >
        <FlowCard
          tag="With Bitcoin"
          label="lvl1: Multichain"
          title="User deposits native BTC"
          description="Deposits as collateral via Quantum Portal, borrows LRTs on Ethereum."
          iconId="bitcoin"
        />
        <FlowCard
          tag="Gearbox"
          label="lvl2: Gearbox or similar"
          title="User deposits bitcoin"
          description="Borrows ETH on Tutti, and leverages on Gearbox to margin trade or leverage liquidity provision."
          iconId="gearbox"
        />
      </div>
    </div>
  )
}
