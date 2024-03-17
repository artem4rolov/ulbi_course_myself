import { TranslationKeys } from 'shared/constants'
import styles from './contact-us.module.scss'
import { useTranslation } from 'react-i18next'

export const ContactUs = () => {
  const { t } = useTranslation(TranslationKeys.CONTACT_US_PAGE)

  return <div className={styles['contact-us']}>{t('title')}</div>
}
