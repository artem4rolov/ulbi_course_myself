import { FC, useContext, useState } from 'react';
import { SideBarProps } from '../lib/sidebar.types';
import { ThemeContext } from 'app';

import styles from './sidebar.module.scss';
import { Button, classNames } from 'shared';
import { useTranslation } from 'react-i18next';

export const SideBar: FC<SideBarProps> = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation('sidebar');

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  const [open, setOpen] = useState(false);

  return (
    <div
      className={classNames(styles.sidebar, {}, [
        open && styles['sidebar-opened'],
      ])}
    >
      <Button variant="outline-inverted" onClick={toggleTheme}>
        theme
      </Button>
      <Button variant="outline-inverted" onClick={changeLanguage}>
        {t('translateButton')}
      </Button>
      <Button variant="solid" onClick={() => setOpen((prev) => !prev)}>
        {open ? 'close' : 'open'}
      </Button>
    </div>
  );
};
