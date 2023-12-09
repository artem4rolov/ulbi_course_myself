import { RouteProps } from "react-router";
import { AboutPage, ContactUs, Main } from "../../pages";

enum PageNames {
  MAIN = "main",
  ABOUT_PAGE = "about-page",
  CONTACT_US = "contact-us",
}

const RouterPaths: Record<PageNames, string> = {
  [PageNames.MAIN]: "/",
  [PageNames.CONTACT_US]: "/contact-us",
  [PageNames.ABOUT_PAGE]: "/about-page",
};

export const routerConfig: Record<PageNames, RouteProps> = {
  [PageNames.MAIN]: {
    path: RouterPaths.main,
    element: <Main />,
  },
  [PageNames.CONTACT_US]: {
    path: RouterPaths["contact-us"],
    element: <ContactUs />,
  },
  [PageNames.ABOUT_PAGE]: {
    path: RouterPaths["about-page"],
    element: <AboutPage />,
  },
};
