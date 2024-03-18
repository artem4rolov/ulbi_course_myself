import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App, ErrorBoundary, ThemeContextProvider } from './app'
import { StoreProvider } from './app/providers/store-provider/ui/store-provider'
import { i18n } from './shared/config/i18n'
import { I18nextProvider } from 'react-i18next'
import { Loader } from './shared/components/loader'

const root = createRoot(document.getElementById('root')!)

if (root) {
  root.render(
    <ErrorBoundary fallback={<Loader />}>
      <StoreProvider>
        <ThemeContextProvider>
          <I18nextProvider i18n={i18n}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </I18nextProvider>
        </ThemeContextProvider>
      </StoreProvider>
    </ErrorBoundary>,
  )
}
