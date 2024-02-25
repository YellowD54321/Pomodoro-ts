import LoginButton from '../button/login/LoginButton';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import StyledHeader, {
  StyledCenterHeader,
  StyledLeftSideHeader,
  StyledRightSideHeader,
} from './Header.styles';
import { isLogin } from '../../utils/token/loginToken';
import UserInfoButton from '../button/user/UserInfoButton';
import Notification from '../notification/Notification';

const Header = () => {
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
        {isLogin() && <Notification />}
        {isLogin() ? <UserInfoButton /> : <LoginButton />}
      </StyledRightSideHeader>
    </StyledHeader>
  );
};

export default Header;
