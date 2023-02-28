import { createContext } from "react";
const ThemeContext = createContext({
  isLightTheme: true,
  setIsLightTheme: (th) => {},
});
export default ThemeContext;
