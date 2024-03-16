import { LoaderAnimation } from 'shared/assets'

import styles from './loader.module.scss'

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div>
        <LoaderAnimation />
      </div>
    </div>
  )
}
