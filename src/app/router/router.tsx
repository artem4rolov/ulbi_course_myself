import { Link } from 'react-router-dom';
import { Button } from 'shared';

export const Router = () => {
  return (
    <>
      <Link
        to="/"
        children={<Button variant="link-inverted">На главную</Button>}
      />
      <Link
        to="/contact-us"
        children={<Button variant="ghost-inverted">Контакты</Button>}
      />
      <Link
        to="/about-page"
        children={<Button variant="ghost-inverted">О нас</Button>}
      />
    </>
  );
};
