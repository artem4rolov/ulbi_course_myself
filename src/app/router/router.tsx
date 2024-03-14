import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from 'shared'

export const Router = () => {
  const { t } = useTranslation('navpanel')

  return (
    <>
      {/* <Link
        to="/"
        children={
          <Button variant="ghost-inverted">{t('ToHomePageLink')}</Button>
        }
      />
      <Link
        to="/contact-us"
        children={
          <Button variant="ghost-inverted">{t('ToContactUsPage')}</Button>
        }
      />
      <Link
        to="/about-page"
        children={
          <Button variant="ghost-inverted">{t('ToAboutUsPage')}</Button>
        }
      /> */}
    </>
  )
}
