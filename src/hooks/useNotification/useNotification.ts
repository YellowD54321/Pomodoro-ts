import { useContext } from 'react';
import NotificationContext from '../../contexts/notificationContext/NotificationContext';
import { INotification } from '../../contexts/notificationContext/NotificationContext.types';
import { orderBy, uniqBy } from 'lodash';
import { readNotification as readNotificationApi } from '../../utils/api/apis';

const useNotification = () => {
  const { setNotifications } = useContext(NotificationContext);

  const addNotifications = (addedNotifications: INotification[]) => {
    setNotifications((oldNotifications) => {
      return orderBy(
        uniqBy([...oldNotifications, ...addedNotifications], 'id'),
        ['isRead', 'createdAt'],
        ['asc', 'desc'],
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

    await readNotificationApi([id]);
  };

  return {
    addNotifications,
    readNotification,
  };
};

export default useNotification;
