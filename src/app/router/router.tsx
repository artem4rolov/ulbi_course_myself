import { Link } from 'react-router-dom';

export const Router = () => {
  return (
    <>
      <Link to="/contact-us" children={<>Контакты</>} />
      <Link to="/about-page" children={<>О нас</>} />
      <Link to="/" children={<>На главную</>} />
    </>
  );
};
