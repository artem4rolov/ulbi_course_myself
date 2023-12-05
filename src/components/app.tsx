import { Route, Routes } from "react-router";
import { AboutPage, ContactUs, Main } from "../pages";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Link to="/contact-us" children={<>Контакты</>} />
      <Link to="/about-page" children={<>О нас</>} />
      <Link to="/" children={<>На главную</>} />
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};
