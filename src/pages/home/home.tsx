import { useTranslation } from 'react-i18next'
import styles from './home.module.scss'
import { TranslationKeys } from 'shared/constants'

export const Home = () => {
  const { t } = useTranslation(TranslationKeys.HOME_PAGE)

  return <div className={styles.home}>{t('title')}</div>
}
