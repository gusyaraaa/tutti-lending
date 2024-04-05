import { AppLayout } from 'shared/ui/layout/AppLayout'

import { Tutti } from 'modules/tutti'
import { Utility } from 'modules/utility'
import { Flows } from 'modules/flows'

import 'styles/fonts.scss'
import 'styles/global.scss'
import 'styles/variables.scss'

export const AppRoot = () => {
  return (
    <AppLayout>
      <Tutti />
      <Flows />
      <Utility />
    </AppLayout>
  )
}
