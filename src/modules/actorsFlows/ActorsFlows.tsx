import { Text } from 'shared/ui/common/Text'

import LogoSmallSVG from 'assets/logo-small.svg'
import { ActorCard } from './ui/ActorCard'
import { FlowCard } from './ui/FlowCard'

import s from './ActorsFlows.module.scss'

export const ActorsFlows = () => {
  return (
    <div className={s.wrapper}>
      <Text size={16} weight={700} className={s.sectionTitle}>
        Actors and Flows
      </Text>
      <div className={s.title}>
        <LogoSmallSVG />
      </div>
      <div className={s.actors}>
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
        <Text size={16} weight={700} className={s.subsectionTitle}>
          Flows
        </Text>
      </div>
      <div className={s.flows}>
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
