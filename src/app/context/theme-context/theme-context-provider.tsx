import { FC, useEffect, useState } from 'react'
import { ThemeContext, ThemeMode } from './theme-context.types'

interface ThemeContextProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeMode
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children,
  defaultTheme = ThemeMode.LIGHT,
}) => {
  const [theme, setTheme] = useState(defaultTheme)

  const toggleTheme = () => {
    theme === ThemeMode.LIGHT
      ? setTheme(ThemeMode.DARK)
      : setTheme(ThemeMode.LIGHT)
  }

  useEffect(() => {
    // устанавливаем тему сразу в body для корректной работы компонентов за пределами блока #root
    document.body.className = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
