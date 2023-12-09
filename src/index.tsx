import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app/app";
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
