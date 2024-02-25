import { RefObject, useContext } from 'react';
import {
  StyledContent,
  StyledCreatedTime,
  StyledSenderName,
} from './NotificationList.styles';
import NotificationContext from '../../contexts/notificationContext/NotificationContext';
import useNotification from '../../hooks/useNotification/useNotification';
import dayjs from 'dayjs';
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import { COLORS } from '../../constants';

const NotificationList = ({
  isOpen,
  onClose,
  buttonRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
}) => {
  const { notifications } = useContext(NotificationContext);
  const { readNotification } = useNotification();

  const handleNotificationItemClick = async (id: string) => {
    await readNotification(id);
  };

  return (
    <Popper
      anchorEl={buttonRef.current}
      open={isOpen}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-start' ? 'left top' : 'left bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={onClose}>
              <MenuList
                id="notification-menu"
                aria-labelledby="notification-button"
                sx={{
                  maxHeight: '50vh',
                  width: '20rem',
                }}
              >
                {notifications.map((notification) => {
                  const createdBeforeSeconds = dayjs(new Date()).diff(
                    notification.createdAt,
                    'seconds',
                  );
                  let createdTime = createdBeforeSeconds;
                  let createdTimeUnit = 'seconds';

                  if (createdBeforeSeconds >= 60) {
                    createdTime = Math.floor(createdBeforeSeconds / 60);
                    createdTimeUnit = 'minutes';
                  }

                  if (createdBeforeSeconds >= 60 * 60) {
                    createdTime = Math.floor(createdBeforeSeconds / (60 * 60));
                    createdTimeUnit = 'hours';
                  }

                  if (createdBeforeSeconds >= 60 * 60 * 24) {
                    createdTime = Math.floor(
                      createdBeforeSeconds / (60 * 60 * 24),
                    );
                    createdTimeUnit = 'days';
                  }

                  return (
                    <MenuItem
                      key={notification.id}
                      onClick={() =>
                        handleNotificationItemClick(notification.id)
                      }
                      sx={{
                        height: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        backgroundColor: notification.isRead
                          ? ''
                          : COLORS.MAIN_LIGHT,
                      }}
                    >
                      <StyledContent>
                        <StyledSenderName>
                          {notification.sender.name ||
                            notification.sender.id.slice(0, 5) ||
                            'Guest'}
                        </StyledSenderName>
                        {' likes your post!'}
                      </StyledContent>
                      <StyledCreatedTime>
                        {`${createdTime} ${createdTimeUnit} ago`}
                      </StyledCreatedTime>
                    </MenuItem>
                  );
                })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default NotificationList;
