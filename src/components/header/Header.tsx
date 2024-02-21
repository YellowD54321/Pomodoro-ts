import { useEffect } from 'react';
import LoginButton from '../button/login/LoginButton';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import StyledHeader, {
  StyledCenterHeader,
  StyledLeftSideHeader,
  StyledRightSideHeader,
} from './Header.styles';
import { WEB_SOCKET_URL } from '../../config';
import { isLogin } from '../../utils/token/loginToken';
import UserInfoButton from '../button/user/UserInfoButton';

const Header = () => {
  useEffect(() => {
    try {
      const url = WEB_SOCKET_URL;

      if (!url) return;

      const ws = new WebSocket(url);

      console.log('ws', ws);

      if (!ws) return;

      ws.addEventListener('open', () => {
        console.log('Connect to server');
      });

      ws.addEventListener('message', (event) => {
        const data = event.data;

        console.log(`Received message from server: ${data}`);
      });

      ws.addEventListener('close', () => {
        console.log('Disconnected from server');
      });
    } catch (error) {
      console.error('web socket connect failed');
    }
  }, []);

  return (
    <StyledHeader>
      <StyledLeftSideHeader>
        {/* <Navigation /> */}
        <Logo />
      </StyledLeftSideHeader>

      <StyledCenterHeader>
        <Navigation />
      </StyledCenterHeader>

      <StyledRightSideHeader>
        {isLogin() ? <UserInfoButton /> : <LoginButton />}
      </StyledRightSideHeader>
    </StyledHeader>
  );
};

export default Header;
