import { useTranslation } from 'react-i18next'
import styles from './home.module.scss'

export const Home = () => {
  const { t } = useTranslation('home')

  return <div className={styles.home}>{t('title')}</div>
}
