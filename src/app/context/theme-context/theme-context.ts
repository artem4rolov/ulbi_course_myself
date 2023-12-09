import { Dispatch, SetStateAction, createContext } from "react";

export enum ThemeMode {
  DARK = "dark",
  LIGHT = "light",
}

interface defaultValueTypes {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const defaultValue: defaultValueTypes = {
  theme: ThemeMode.LIGHT,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultValue);
