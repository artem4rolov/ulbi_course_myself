import { FC, useState } from 'react'
import { ThemeContext, ThemeMode } from './theme-context'

interface ThemeContextProviderProps {
  children: React.ReactNode
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState(ThemeMode.LIGHT)

  const toggleTheme = () => {
    theme === ThemeMode.LIGHT
      ? setTheme(ThemeMode.DARK)
      : setTheme(ThemeMode.LIGHT)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
