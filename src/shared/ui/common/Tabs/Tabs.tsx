import {
  useCallback,
  useState,
  Children,
  PropsWithChildren,
  useEffect,
} from 'react'
import cns from 'classnames'

import s from './Tabs.module.scss'

type TabProps = {
  isActive?: boolean
  className?: string
  activeClassName?: string
  title?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Tab: React.FC<PropsWithChildren<TabProps>> = ({ children }) => (
  <>{children}</>
)

type TabsProps = {
  initialTab?: number
  currentTab?: number
  className?: string
  tabsClassName?: string
  onChange?: (tabIndex: number) => void
}

export const Tabs: React.FC<PropsWithChildren<TabsProps>> = ({
  initialTab,
  currentTab: currentTabProp,
  children,
  className,
  tabsClassName,
  onChange,
}) => {
  const isControlled = currentTabProp !== undefined
  const [currentTabState, setCurrentTabState] = useState(initialTab || 0)
  const currentTab = isControlled ? currentTabProp : currentTabState
  const [prevTab, setPrevTab] = useState<number>(currentTab)
  const [isContentAnimating, setIsContentAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [isContentAnimating])

  const childrenArray = Children.toArray(
    children,
  ) as React.ReactElement<TabProps>[]

  const handleClickTab = useCallback(
    (idx: number) => {
      onChange?.(idx)
      if (!isControlled) setCurrentTabState(idx)
    },
    [isControlled, onChange],
  )

  return (
    <div className={className}>
      <div className={cns(s.tabs, tabsClassName)}>
        {childrenArray.map((tab, i) => (
          <div
            key={i}
            onClick={() => {
              setPrevTab(currentTab)
              setIsContentAnimating(true)
              handleClickTab(i)
            }}
            className={cns(s.tab, tab.props.className, {
              [s.isActive]: i === currentTab,
              [`${tab.props.activeClassName}`]: i === currentTab,
            })}
          >
            {tab.props.title}
          </div>
        ))}
      </div>
      <div
        className={cns(s.content, {
          [s.contentIsActive]: isContentAnimating,
          [s.contentSlideIn]: prevTab > currentTab,
          [s.contentSlideOut]: prevTab < currentTab,
        })}
      >
        {childrenArray[currentTab]}
      </div>
    </div>
  )
}
