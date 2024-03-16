import { useContext, Suspense, useState, useEffect } from 'react'

import { classNames } from 'shared'
import { ThemeContext } from './context'
import { NavPanel, PageContent, SideBar } from 'widgets'

import './styles/index.scss'
import { Loader } from 'shared/components/loader'

export const App = () => {
  const [isDomLoading, setIsDomLoading] = useState(true)

  useEffect(() => {
    setIsDomLoading(false)
  }, [])

  return !isDomLoading ? (
    <div
      className={classNames(
        'app',
        { hovered: true, red: false, green: true },
        [],
      )}
    >
      <NavPanel />
      <div className={'app-content'}>
        <SideBar />
        <PageContent />
      </div>
    </div>
  ) : (
    <Loader />
  )
}
