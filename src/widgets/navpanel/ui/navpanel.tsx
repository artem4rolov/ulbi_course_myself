import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { TranslationKeys } from 'shared/constants'
import { NavPanelProps } from '../lib/navpanel.types'
import { ButtonVariant } from 'shared/components/button/lib/button.types'

import { Button, Modal } from 'shared'
import { Logo } from 'shared/assets'

import styles from './navpanel.module.scss'

export const NavPanel: FC<NavPanelProps> = () => {
  const { t } = useTranslation(TranslationKeys.NAVPANEL)

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className={styles.navpanel}>
        <div className={styles.logo}>
          <Link to={'/'}>
            <Logo
              style={{ width: '30px', height: '30px', fill: 'var(--bg-color)' }}
            />
          </Link>
        </div>
        <div className={styles.navlinks}>
          <Button
            onClick={() => setIsModalOpen(true)}
            variant={ButtonVariant.LINK_INVERTED}
          >
            {t('loginButton')}
          </Button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  )
}
