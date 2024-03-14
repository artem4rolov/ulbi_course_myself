import { SetStateAction } from 'react'

export interface ModalProps {
  children?: React.ReactElement
  className?: string
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}
