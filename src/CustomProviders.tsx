import { PropsWithChildren } from 'react';
import { CounterStatusProvider } from './contexts/counterPageContext/CounterStatusContext';
import { InformationWindowProvider } from './contexts/informationWindowContext/InformationWindowContext';
import { CustomThemeProvider } from './contexts/themeContext/ThemeContext';
import { ConfirmWindowProvider } from './contexts/confirmWindowContext/ConfrimWindowContext';

const CustomProviders = ({ children }: PropsWithChildren) => {
  return (
    <CustomThemeProvider>
      <CounterStatusProvider>
        <ConfirmWindowProvider>
          <InformationWindowProvider>{children}</InformationWindowProvider>
        </ConfirmWindowProvider>
      </CounterStatusProvider>
    </CustomThemeProvider>
  );
};

export default CustomProviders;
