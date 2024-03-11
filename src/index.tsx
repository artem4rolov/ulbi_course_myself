import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App, ThemeContextProvider } from './app'
import { i18n } from './shared/config/i18n'
import { I18nextProvider } from 'react-i18next'

// import './shared/config/i18n/i18n'

const root = createRoot(document.getElementById('root')!)

if (root) {
  root.render(
    <ThemeContextProvider>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </ThemeContextProvider>,
  )
}
