import { FC, useContext, useState } from 'react';
import { SideBarProps } from '../lib/sidebar.types';
import { ThemeContext } from 'app';

import styles from './sidebar.module.scss';
import { Button, classNames } from 'shared';

export const SideBar: FC<SideBarProps> = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  return (
    <div
      className={classNames(styles.sidebar, {}, [
        open && styles['sidebar-opened'],
      ])}
    >
      <Button variant="outline-inverted" onClick={toggleTheme}>
        toggle
      </Button>
      <Button variant="solid" onClick={() => setOpen((prev) => !prev)}>
        {open ? 'close' : 'open'}
      </Button>
    </div>
  );
};
