import { useTranslation } from 'react-i18next'
import styles from './about-page.module.scss'
import { TranslationKeys } from 'shared/constants'
import { Counter } from 'entities/counter/ui/counter'

export const AboutPage = () => {
  const { t } = useTranslation(TranslationKeys.ABOUT_PAGE)

  return (
    <div className={styles['about-page']}>
      {t('title')} <Counter />
    </div>
  )
}
