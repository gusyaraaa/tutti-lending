import { PropsWithChildren } from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'

import s from './AppLayout.module.scss'

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <Header />
        <div className={s.content}>{children}</div>
        <Footer />
      </div>
    </div>
  )
}
