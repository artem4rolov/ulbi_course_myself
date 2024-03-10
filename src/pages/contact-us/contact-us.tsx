import { Suspense } from 'react'
import { TestAsync } from 'shared'

import styles from './contact-us.module.scss'
import { useTranslation } from 'react-i18next'

export const ContactUs = () => {
  const { t } = useTranslation('contact-us')

  return (
    <div className={styles['contact-us']}>
      {t('title')}

      <Suspense fallback="loading...">
        <TestAsync />
      </Suspense>
    </div>
  )
}
