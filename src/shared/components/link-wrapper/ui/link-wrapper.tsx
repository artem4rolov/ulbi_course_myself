import { FC } from 'react'
import { LinkWrapperProps } from '../lib/link-wrapper.types'

import styles from './link-wrapper.module.scss'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/utils'

export const LinkWrapper: FC<LinkWrapperProps> = ({
  children,
  className,
  href,
}) => {
  return (
    <Link
      to={href}
      className={classNames(styles['link-wrapper'], {}, [className])}
    >
      {children}
    </Link>
  )
}
