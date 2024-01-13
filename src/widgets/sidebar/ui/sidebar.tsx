import { FC, useContext, useState } from 'react';
import { SideBarProps } from '../lib/sidebar.types';
import { ThemeContext } from 'app';

import styles from './sidebar.module.scss';
import { classNames } from 'shared';

export const SideBar: FC<SideBarProps> = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  return (
    <div
      className={classNames(styles.sidebar, {}, [
        open && styles['sidebar-opened'],
      ])}
    >
      <button onClick={toggleTheme}>toggle</button>
      <button onClick={() => setOpen((prev) => !prev)}>
        {open ? 'close' : 'open'}
      </button>
    </div>
  );
};
