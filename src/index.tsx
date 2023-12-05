import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/app";

const root = createRoot(document.getElementById("root")!);

if (root) {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
