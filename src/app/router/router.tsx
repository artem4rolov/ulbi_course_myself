import { Link, Route, Routes } from "react-router-dom";
import { routerConfig } from "shared";

export const Router = () => {
  return (
    <>
      <Link to="/contact-us" children={<>Контакты</>} />
      <Link to="/about-page" children={<>О нас</>} />
      <Link to="/" children={<>На главную</>} />
      <Routes>
        {Object.values(routerConfig).map((config) => (
          <Route path={config.path} element={config.element} />
        ))}
      </Routes>
    </>
  );
};
