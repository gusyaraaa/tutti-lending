import { AppLayout } from 'shared/ui/layout/AppLayout'

import { Tutti } from 'modules/tutti'
import { Utility } from 'modules/utility'
import { ActorsFlows } from 'modules/actorsFlows'

import 'styles/fonts.scss'
import 'styles/global.scss'
import 'styles/variables.scss'

export const AppRoot = () => {
  return (
    <AppLayout>
      <Tutti />
      <Utility />
      <ActorsFlows />
    </AppLayout>
  )
}
