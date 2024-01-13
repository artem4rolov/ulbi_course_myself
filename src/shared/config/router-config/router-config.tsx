import { RouteProps } from 'react-router';
import { AboutPage, ContactUs, Home } from 'pages';

enum PageNames {
  HOME = 'home',
  ABOUT_PAGE = 'about-page',
  CONTACT_US = 'contact-us',
}

const RouterPaths: Record<PageNames, string> = {
  [PageNames.HOME]: '/',
  [PageNames.CONTACT_US]: '/contact-us',
  [PageNames.ABOUT_PAGE]: '/about-page',
};

export const routerConfig: Record<PageNames, RouteProps> = {
  [PageNames.HOME]: {
    path: RouterPaths.home,
    element: <Home />,
  },
  [PageNames.CONTACT_US]: {
    path: RouterPaths['contact-us'],
    element: <ContactUs />,
  },
  [PageNames.ABOUT_PAGE]: {
    path: RouterPaths['about-page'],
    element: <AboutPage />,
  },
};
