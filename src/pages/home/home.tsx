import { useTranslation } from 'react-i18next'
import styles from './home.module.scss'

export const Home = () => {
	const { t, i18n } = useTranslation('home')

	return <div className={styles.home}>{t('title')}</div>
}
