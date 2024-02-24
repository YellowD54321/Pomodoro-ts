import { PropsWithChildren } from 'react';
import { CounterStatusProvider } from './contexts/counterPageContext/CounterStatusContext';
import { InformationWindowProvider } from './contexts/informationWindowContext/InformationWindowContext';
import { CustomThemeProvider } from './contexts/themeContext/ThemeContext';
import { ConfirmWindowProvider } from './contexts/confirmWindowContext/ConfrimWindowContext';
import { NotificationProvider } from './contexts/notificationContext/NotificationContext';

const CustomProviders = ({ children }: PropsWithChildren) => {
  return (
    <CustomThemeProvider>
      <NotificationProvider>
        <CounterStatusProvider>
          <ConfirmWindowProvider>
            <InformationWindowProvider>{children}</InformationWindowProvider>
          </ConfirmWindowProvider>
        </CounterStatusProvider>
      </NotificationProvider>
    </CustomThemeProvider>
  );
};

export default CustomProviders;
