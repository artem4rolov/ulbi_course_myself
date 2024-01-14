import { FC } from 'react'
import { ButtonProps } from '../lib/button.types'

import styles from './button.module.scss'
import { classNames } from 'shared/utils'

export const Button: FC<ButtonProps> = ({
	className,
	variant,
	type = 'button',
	children,
	onClick,
}) => {
	return (
		<button
			type={type}
			className={classNames(styles['button'], {}, [styles[variant], className])}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
