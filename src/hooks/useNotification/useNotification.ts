import { useContext } from 'react';
import NotificationContext from '../../contexts/notificationContext/NotificationContext';
import { INotification } from '../../contexts/notificationContext/NotificationContext.types';
import { sortBy, uniqBy } from 'lodash';

const useNotification = () => {
  const { setNotifications } = useContext(NotificationContext);

  const addNotifications = (addedNotifications: INotification[]) => {
    setNotifications((oldNotifications) => {
      return sortBy(
        uniqBy([...oldNotifications, ...addedNotifications], 'id'),
        [(notification) => !!notification.isRead, 'id'],
      );
    });
  };

  const readNotification = async (id: string) => {
    setNotifications((oldNotifications) => {
      const notificationIndex = oldNotifications.findIndex(
        (notification) => notification.id === id,
      );
      const newNotifications = [...oldNotifications];

      newNotifications[notificationIndex].isRead = true;

      return newNotifications;
    });
  };

  return {
    addNotifications,
    readNotification,
  };
};

export default useNotification;
