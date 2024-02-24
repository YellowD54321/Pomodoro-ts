import { useContext, useEffect } from 'react';
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

const Notification = () => {
  const { notifications } = useContext(NotificationContext);
  const { addNotifications } = useNotification();
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

      if (!url) return;

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

  return (
    <StyledNotificationWrapper>
      {unreadNotificationCount > 0 && (
        <StyledUnReadCount>{unreadNotificationCount}</StyledUnReadCount>
      )}
      <StyledNotificationButton>
        <NotificationsIcon />
      </StyledNotificationButton>
    </StyledNotificationWrapper>
  );
};

export default Notification;
