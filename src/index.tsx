import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App, ThemeContextProvider } from './app';

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
