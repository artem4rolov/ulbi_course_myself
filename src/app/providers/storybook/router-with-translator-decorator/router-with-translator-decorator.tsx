import { ThemeContextProvider } from 'app/context'
import { FC } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router'
import { i18nForTests } from 'shared'

interface RouterWithTranslatorDecoratorProps {
  children: string | React.ReactNode
}

export const RouterWithTranslatorDecorator: FC<
  RouterWithTranslatorDecoratorProps
> = ({ children }) => (
  <MemoryRouter initialEntries={['/']}>
    <ThemeContextProvider>
      <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
    </ThemeContextProvider>
  </MemoryRouter>
)
