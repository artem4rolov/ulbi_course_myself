import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { ThemeContextProvider } from 'app/context'
import { i18nForTests } from 'shared/config/i18n/is18nForTests'

export function renderWithProviders(component: ReactNode) {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <ThemeContextProvider>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </ThemeContextProvider>
    </MemoryRouter>,
  )
}
