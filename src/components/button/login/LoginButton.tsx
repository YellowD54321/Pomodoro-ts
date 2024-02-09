import { useNavigate } from 'react-router-dom';
import StyledLoginButton from './LoginButton.styles';
import { PATH } from '../../../constants';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('123');

    navigate(PATH.LOGIN);
  };

  return <StyledLoginButton onClick={handleClick}>Login</StyledLoginButton>;
};

export default LoginButton;
