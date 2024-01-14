import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App, ThemeContextProvider } from './app';

import './shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root')!);

if (root) {
  root.render(
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
