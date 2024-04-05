import cns from 'classnames'

import s from './Text.module.scss'
import { PropsWithChildren } from 'react'

type TextSize =
  | 12
  | 13
  | 14
  | 15
  | 16
  | 18
  | 20
  | 22
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 64
type TextWeight = 400 | 500 | 600 | 700
type TextColor = 'default' | 'secondary' | 'dark' | 'gold'

type TextParams = {
  size?: TextSize
  weight?: TextWeight
  color?: TextColor
  isUppercased?: boolean
}

export type TextProps = TextParams & {
  tag?: 'div' | 'span'
  truncateLines?: number
  isCentered?: boolean
  isInLine?: boolean
  onClick?: React.MouseEventHandler
  className?: string
}

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
  tag = 'div',
  size,
  color = 'default',
  weight = 500,
  truncateLines,
  isCentered,
  isUppercased,
  isInLine,
  children,
  onClick,
  className,
}) => {
  const Tag = tag
  const isTruncateOne = truncateLines && truncateLines === 1
  const isTruncateMany = truncateLines && truncateLines > 1

  return (
    <Tag
      onClick={onClick}
      style={{
        ...(isTruncateMany ? { WebkitLineClamp: truncateLines } : {}),
      }}
      className={cns(
        s.text,
        className,
        s[`size--${size}`],
        s[`color--${color}`],
        s[`weight--${weight}`],
        {
          [s.isCentered]: isCentered,
          [s.isUppercased]: isUppercased,
          [s.truncateOne]: isTruncateOne,
          [s.truncateMany]: isTruncateMany,
          [s.isInLine]: isInLine,
        },
      )}
    >
      {children}
    </Tag>
  )
}
