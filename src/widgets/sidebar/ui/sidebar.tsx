import { FC, useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Logo } from 'shared/assets'

import { SideBarProps } from '../lib/sidebar.types'
import {
  ButtonSize,
  ButtonVariant,
} from 'shared/components/button/lib/button.types'
import {
  LINK_ABOUT_PAGE,
  LINK_CONTACT_PAGE,
  LINK_MAIN_PAGE,
} from 'shared/constants'

import { ThemeContext } from 'app'
import { Button, LinkWrapper, classNames } from 'shared'

import styles from './sidebar.module.scss'

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const { toggleTheme } = useContext(ThemeContext)
  const navigate = useNavigate()
  const { t, i18n } = useTranslation('sidebar')

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }

  const [collapsed, setcollapsed] = useState(false)

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, {}, [
        className,
        collapsed ? styles.collapsed : styles.opened,
      ])}
    >
      <div className={styles['sidebar-links']}>
        <Button
          width="100%"
          variant={ButtonVariant.SOLID_INVERTED}
          leftIcon={<Logo />}
          onClick={() => navigate(LINK_MAIN_PAGE)}
        >
          {collapsed ? t('ToHomePageLink') : null}
        </Button>
        <Button
          width="100%"
          variant={ButtonVariant.SOLID_INVERTED}
          leftIcon={<Logo />}
          onClick={() => navigate(LINK_CONTACT_PAGE)}
        >
          {collapsed ? t('ToContactUsPage') : null}
        </Button>
        <Button
          width="100%"
          variant={ButtonVariant.SOLID_INVERTED}
          leftIcon={<Logo />}
          onClick={() => navigate(LINK_ABOUT_PAGE)}
        >
          {collapsed ? t('ToAboutUsPage') : null}
        </Button>
      </div>
      <div className={styles['sidebar-settings']}>
        <Button
          width="100%"
          variant={ButtonVariant.OUTLINE_INVERTED}
          onClick={toggleTheme}
        >
          theme
        </Button>
        <Button
          dataTestId="collapseBtn"
          variant={ButtonVariant.OUTLINE_INVERTED}
          width="100%"
          onClick={changeLanguage}
        >
          {t(collapsed ? 'translateButton' : 'shortTranslateButton')}
        </Button>
      </div>
      <Button
        className={styles['collapse-button']}
        variant={ButtonVariant.SOLID_INVERTED}
        onClick={() => setcollapsed((prev) => !prev)}
        size={ButtonSize.SQUARE}
      >
        {collapsed ? '<' : '>'}
      </Button>
    </div>
  )
}
