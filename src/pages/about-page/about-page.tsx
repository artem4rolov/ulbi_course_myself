import { useTranslation } from 'react-i18next'
import styles from './about-page.module.scss'

export const AboutPage = () => {
  const { t } = useTranslation('about-page')

  return <div className={styles['about-page']}>{t('title')}</div>
}
