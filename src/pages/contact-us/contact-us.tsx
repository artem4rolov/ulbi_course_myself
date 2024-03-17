import { TranslationKeys } from 'shared/constants'
import styles from './contact-us.module.scss'
import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/counter/ui/counter'

export const ContactUs = () => {
  const { t } = useTranslation(TranslationKeys.CONTACT_US_PAGE)

  return (
    <div className={styles['contact-us']}>
      {t('title')} <Counter />
    </div>
  )
}
