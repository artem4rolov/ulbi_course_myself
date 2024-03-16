import { FC } from 'react'

interface StyleDecoratorProps {
  children: React.ReactNode
}

export const StyleDecorator: FC<StyleDecoratorProps> = (props) => {
  return <div className={'app'}>{props.children}</div>
}
