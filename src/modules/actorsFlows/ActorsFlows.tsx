import cns from 'classnames'

import { Text } from 'shared/ui/common/Text'
import { useVisibleOnScroll } from 'shared/hooks/useVisibleOnScroll'
import { ActorCard } from './ui/ActorCard'
import { FlowCard } from './ui/FlowCard'

import LogoSmallSVG from 'assets/logo-small.svg'

import s from './ActorsFlows.module.scss'

export const ActorsFlows = () => {
  const { ref: actorsRef, isVisible: isActorsVisible } = useVisibleOnScroll({
    threshold: 0.1,
  })
  const { ref: flowsRef, isVisible: isFlowsVisible } = useVisibleOnScroll({
    threshold: 0.1,
  })

  return (
    <div className={s.wrapper} id="actors">
      <Text size={16} weight={700} className={s.sectionTitle}>
        Actors and Flows
      </Text>
      <div className={s.title}>
        <LogoSmallSVG />
      </div>
      <div
        className={cns(s.actors, {
          [s['actors-visible']]: isActorsVisible,
        })}
      >
        <ActorCard
          title="lending protocol, i.e. set of smart contracts, compatible with the Compound V2."
          description="Can be deployed on several EVM-compatible chains."
          iconId="protocol-bg"
        />
        <ActorCard
          title="Quantum portal smart contract framework"
          description="That enables interoperability and communication between different blockchains."
          iconId="quantium-bg"
        />
        <ActorCard
          title="Bitcoin L2:EVM-compatible smart contracts platform interoperable with Bitcoin blockchain"
          description="Can be deployed on several EVM-compatible chains."
          iconId="evm-bg"
        />
        <ActorCard
          title="Gearbox: composable leveraging protocol"
          description="Which allows users to borrow from liquidity pools and use these assets to create spot leverage positions via an abstraction layer called Credit Account."
          iconId="gearbox-bg"
        />
        <div ref={actorsRef} className={s.actorsRef} />
        <Text size={16} weight={700} className={s.subsectionTitle}>
          Flows
        </Text>
      </div>
      <div
        ref={flowsRef}
        className={cns(s.flows, {
          [s['flows-visible']]: isFlowsVisible,
        })}
        id="flows"
      >
        <FlowCard
          tag="With Bitcoin"
          label="lvl1: Multichain"
          title="User deposits native BTC"
          description="Deposits as collateral via Quantum Portal, borrows LRTs on Ethereum."
          iconId="bitcoin"
        />
        <FlowCard
          tag="EVM Chains"
          label="lvl1: Multichain"
          title="User deposits stEth on Tutti on Ethereum "
          description="User deposits stEth on Tutti on Ethereum and borrows USDC on Arbitrum. Tutti checks collateral state via Quantum Portal and allows borrowing if collateral health allows."
          iconId="evm"
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
