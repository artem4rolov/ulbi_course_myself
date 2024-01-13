import { FC } from 'react';
import { PageContentProps } from '../lib/page-content.types';
import { Route, Routes } from 'react-router';
import { routerConfig } from 'shared';

import styles from './page-content.module.scss';

export const PageContent: FC<PageContentProps> = () => {
  return (
    <div className={styles['page-content']}>
      <Routes>
        {Object.values(routerConfig).map((config) => (
          <Route path={config.path} element={config.element} />
        ))}
      </Routes>
    </div>
  );
};
