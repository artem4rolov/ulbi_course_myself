import { FC, Suspense } from 'react'
import { PageContentProps } from '../lib/page-content.types'
import { Route, Routes } from 'react-router'
import { routerConfig } from 'shared'

import styles from './page-content.module.scss'
import { Loader } from 'shared/components/loader'

export const PageContent: FC<PageContentProps> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className={styles['page-content']}>
        <Routes>
          {Object.values(routerConfig).map((config) => (
            <Route
              key={config.id}
              path={config.path}
              element={config.element}
            />
          ))}
        </Routes>
      </div>
    </Suspense>
  )
}
