import { FC } from 'react'
import { Router } from 'app'
import { NavPanelProps } from '../lib/navpanel.types'

import styles from './navpanel.module.scss'
import { Logo } from 'shared/assets'
import { Link } from 'react-router-dom'

export const NavPanel: FC<NavPanelProps> = () => {
	return (
		<div className={styles.navpanel}>
			<div className={styles.logo}>
				<Link to={'/'}>
					<Logo
						style={{ width: '30px', height: '30px', fill: 'var(--bg-color)' }}
					/>
				</Link>
			</div>
			<div className={styles.navlinks}>
				<Router />
			</div>
		</div>
	)
}
