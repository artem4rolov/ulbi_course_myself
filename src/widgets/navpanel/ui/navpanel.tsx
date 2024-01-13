import { FC } from 'react';
import { Router } from 'app';
import { NavPanelProps } from '../lib/navpanel.types';

import styles from './navpanel.module.scss';

export const NavPanel: FC<NavPanelProps> = () => {
  return (
    <div className={styles.navpanel}>
      <div>logo</div>
      <div>
        <Router />
      </div>
    </div>
  );
};
