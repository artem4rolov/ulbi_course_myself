import { useContext, Suspense } from 'react'

import { classNames } from 'shared'
import { ThemeContext } from './context'
import { NavPanel, PageContent, SideBar } from 'widgets'

import './styles/index.scss'

export const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Suspense fallback={<>loading</>}>
      <div
        className={classNames(
          'app',
          { hovered: true, red: false, green: true },
          [theme],
        )}
      >
        <NavPanel />
        <div className={'app-content'}>
          <SideBar />
          <PageContent />
        </div>
      </div>
    </Suspense>
  )
}
