import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { ThemeContextProvider } from "./app/context";

const root = createRoot(document.getElementById("root")!);

if (root) {
  root.render(
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
