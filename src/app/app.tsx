import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { Suspense, useContext } from "react";

import "./styles/index.scss";
import { classNames } from "../utils";
import { TestAsync } from "../components";
import { ThemeContext } from "./context/theme-context";
import { routerConfig } from "../config/router-config/router-config";

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={classNames("app", { hovered: true, red: false, green: true }, [
        theme,
      ])}
    >
      <Link to="/contact-us" children={<>Контакты</>} />
      <Link to="/about-page" children={<>О нас</>} />
      <Link to="/" children={<>На главную</>} />
      <Routes>
        {Object.values(routerConfig).map((config) => (
          <Route path={config.path} element={config.element} />
        ))}
      </Routes>
      <Suspense fallback="loading...">
        <TestAsync />
      </Suspense>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
};
