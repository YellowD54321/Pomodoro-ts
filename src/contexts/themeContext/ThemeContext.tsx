import React, { SetStateAction, createContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

export const lightTheme = {
  color: "black",
  backgroundColor: "white",
} as DefaultTheme;

export const darkTheme = {
  color: "white",
  backgroundColor: "black",
} as DefaultTheme;

interface ThemeTypes {
  theme: DefaultTheme;
  setTheme: React.Dispatch<SetStateAction<DefaultTheme>>;
}

const defaultValue = { theme: lightTheme } as ThemeTypes;

export const ThemeContext = createContext(defaultValue);

export const CustomThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState(defaultValue.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
