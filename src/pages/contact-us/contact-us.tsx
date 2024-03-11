import styles from './contact-us.module.scss'
import { useTranslation } from 'react-i18next'

export const ContactUs = () => {
  const { t } = useTranslation('contact-us')

  return <div className={styles['contact-us']}>{t('title')}</div>
}
