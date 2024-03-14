import { FC } from 'react'
import { ButtonProps, ButtonSize, ButtonVariant } from '../lib/button.types'

import styles from './button.module.scss'
import { classNames } from 'shared/utils'

export const Button: FC<ButtonProps> = ({
  className,
  variant = ButtonVariant.SOLID,
  type = 'button',
  children,
  onClick,
  dataTestId = '',
  width = '',
  leftIcon,
  rightIcon,
  size = ButtonSize.MD,
}) => {
  return (
    <button
      style={{ width: width }}
      data-testid={dataTestId}
      type={type}
      className={classNames(styles['button'], {}, [
        className,
        styles[variant],
        styles[size],
      ])}
      onClick={onClick}
    >
      {leftIcon ? leftIcon : null}
      {children}
      {rightIcon ? rightIcon : null}
    </button>
  )
}
