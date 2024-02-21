import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../utils/token/loginToken';
import {
  ButtonContentWrapper,
  StyledUserInfoButton,
} from './UserInfoButton.styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { PATH } from '../../../constants';

const UserInfoButton = () => {
  const navigate = useNavigate();
  const user = getUser();
  const userName = user?.id || 'Guest';

  const onClick = () => {
    navigate(PATH.USER);
  };

  return (
    <StyledUserInfoButton onClick={onClick}>
      <ButtonContentWrapper>
        <AccountCircleIcon />
        {userName}
      </ButtonContentWrapper>
    </StyledUserInfoButton>
  );
};

export default UserInfoButton;
