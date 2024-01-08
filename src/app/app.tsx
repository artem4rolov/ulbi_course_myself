import { Suspense, useContext } from "react";
import { Router } from "./router/router";
import { classNames } from "shared";
import { TestAsync } from "components";
import { ThemeContext } from "./context/theme-context";

import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={classNames("app", { hovered: true, red: false, green: true }, [
        theme,
      ])}
    >
      <Router />
      <Suspense fallback="loading...">
        <TestAsync />
      </Suspense>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
};
