import { useContext, useEffect, useRef, useState } from 'react';
import {
  StyledNotificationButton,
  StyledNotificationWrapper,
  StyledUnReadCount,
} from './Notification.styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { WEB_SOCKET_URL } from '../../config';
import NotificationContext from '../../contexts/notificationContext/NotificationContext';
import { getLoginToken } from '../../utils/token/loginToken';
import useNotification from '../../hooks/useNotification/useNotification';
import { getNotifications } from '../../utils/api/apis';
import NotificationList from './NotificationList';
import { orderBy } from 'lodash';

const Notification = () => {
  const { notifications, setNotifications } = useContext(NotificationContext);
  const { addNotifications } = useNotification();
  const [isNotificationListOpen, setIsNotificationListOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const accessToken = getLoginToken();
  const unreadNotificationCount = notifications.filter(
    (notification) => notification.isRead === false,
  ).length;

  useEffect(() => {
    if (!accessToken) return;

    try {
      let url = WEB_SOCKET_URL;
      url += '?';
      url += `access_token=${accessToken}`;

      const ws = new WebSocket(url);

      if (!ws) return;

      ws.addEventListener('message', (event) => {
        const data = event.data;
        const { notifications: unreadNotifications } = JSON.parse(data) || {};

        return addNotifications(unreadNotifications);
      });
    } catch (error) {
      console.error('web socket connect failed');
    }
  }, []);

  useEffect(() => {
    const initialNotifications = async () => {
      const { notifications } = await getNotifications();

      setNotifications(
        orderBy(notifications, ['isRead', 'createdAt'], ['asc', 'desc']),
      );
    };

    initialNotifications();
  }, []);

  return (
    <StyledNotificationWrapper>
      {unreadNotificationCount > 0 && (
        <StyledUnReadCount>{unreadNotificationCount}</StyledUnReadCount>
      )}
      <StyledNotificationButton
        ref={buttonRef}
        id="notification-button"
        aria-controls={isNotificationListOpen ? 'notification-menu' : undefined}
        aria-expanded={isNotificationListOpen ? 'true' : undefined}
        aria-haspopup="true"
        onClick={() => setIsNotificationListOpen((isOpened) => !isOpened)}
      >
        <NotificationsIcon />
      </StyledNotificationButton>
      <NotificationList
        isOpen={isNotificationListOpen}
        onClose={() => setIsNotificationListOpen(false)}
        buttonRef={buttonRef}
      />
    </StyledNotificationWrapper>
  );
};

export default Notification;
