import { ReactElement, ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { ThemeContextProvider } from 'app/context'
import { i18nForTests } from 'shared/config/i18n/is18nForTests'

// export interface RenderWithProvidersProps {
//   element: React.ReactNode | string | ReactElement
// }

export function renderWithProviders(component: ReactNode) {
  return render(
    <ThemeContextProvider>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </ThemeContextProvider>,
  )
}
