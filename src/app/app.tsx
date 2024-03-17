import { useState, useEffect } from 'react'

import { classNames } from 'shared'
import { Loader } from 'shared/components/loader'
import { NavPanel, PageContent, SideBar } from 'widgets'

import './styles/index.scss'

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
