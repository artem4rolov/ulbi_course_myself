import { FC, useState } from 'react'
import { ModalProps } from '../lib/modal.types'
import { createPortal } from 'react-dom'

import styles from './modal.module.scss'
import { classNames } from 'shared/utils'

export const Modal: FC<ModalProps> = (props) => {
  const [closing, setClosing] = useState(false)
  const { isOpen, setIsOpen, children, className } = props

  const handleClick = () => {
    if (isOpen) {
      setClosing(true)

      setTimeout(() => {
        setIsOpen(false)
        setClosing(false)
      }, 150)
    }
  }

  return isOpen
    ? createPortal(
        <div
          className={classNames(styles['modal-overflow'], {}, [className])}
          onClick={handleClick}
        >
          <div
            className={classNames(styles['modal-content'], {}, [
              closing && styles['modal-content-closing'],
            ])}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>,
        document.body,
      )
    : null
}
