export enum ButtonVariant {
  LINK = 'link',
  LINK_INVERTED = 'link-inverted',
  SOLID = 'solid',
  SOLID_INVERTED = 'solid-inverted',
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outline-inverted',
  GHOST = 'ghost',
  GHOST_INVERTED = 'ghost-inverted',
}

export enum ButtonSize {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  SQUARE = 'square',
}

export interface ButtonProps {
  onClick?: () => void
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  children: string | React.ReactElement
  width?: string
  type?: 'submit' | 'button'
  dataTestId?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
