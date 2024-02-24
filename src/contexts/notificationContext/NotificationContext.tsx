import { createContext, useState } from 'react';
import { IDefaultValue, INotification } from './NotificationContext.types';

export const defaultValue = {
  notifications: [],
} as IDefaultValue;

export const NotificationContext = createContext(defaultValue);

export const NotificationProvider = ({ children }: React.PropsWithChildren) => {
  const [notifications, setNotifications] = useState<INotification[]>(
    defaultValue.notifications,
  );

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const NotificationConsumer = NotificationContext.Consumer;

export default NotificationContext;
