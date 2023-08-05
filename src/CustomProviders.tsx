import { PropsWithChildren } from "react";
import { CounterStatusProvider } from "./contexts/counterPageContext/CounterStatusContext";
import { InformationWindowProvider } from "./contexts/informationWindowContext/InformationWindowContext";
import { CustomThemeProvider } from "./contexts/themeContext/ThemeContext";

const CustomProviders = ({ children }: PropsWithChildren) => {
  return (
    <CustomThemeProvider>
      <CounterStatusProvider>
        <InformationWindowProvider>{children}</InformationWindowProvider>
      </CounterStatusProvider>
    </CustomThemeProvider>
  );
};

export default CustomProviders;
