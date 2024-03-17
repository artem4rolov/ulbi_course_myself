import { ThemeMode } from 'app/context/theme-context/theme-context.types'
import { FC } from 'react'

import '../../../styles/index.scss'

interface ThemeDecoratorProps {
  theme: ThemeMode
  children: React.ReactNode
}

export const ThemeDecorator: FC<ThemeDecoratorProps> = (props) => {
  console.log(1, props.theme)

  return <div className={`app centered ${props.theme}`}>{props.children}</div>
}
