import { FC } from 'react'

import styles from './error-page.module.scss'

export const ErrorPage: FC = () => {
  return (
    <div className={styles['error-page']}>
      <div className={styles['error-page-content']}>
        <span>
          Ведутся технические работы, попробуйте повторить попытку позднее
        </span>
        <button onClick={() => window.location.reload()}>Перезагрузить</button>
      </div>
    </div>
  )
}
