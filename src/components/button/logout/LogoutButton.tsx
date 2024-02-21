import { useNavigate } from 'react-router-dom';
import { logout } from '../../../utils/token/loginToken';
import { StyledLogoutButton } from './LogoutButton.styles';
import { PATH } from '../../../constants';

const LogoutButton = () => {
  const navigate = useNavigate();

  const onClick = async () => {
    await logout();

    return navigate(PATH.COUNTER);
  };

  return <StyledLogoutButton onClick={onClick}>Log Out</StyledLogoutButton>;
};

export default LogoutButton;
