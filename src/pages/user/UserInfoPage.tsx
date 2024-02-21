import LogoutButton from '../../components/button/logout/LogoutButton';
import { getUserName } from '../../utils/token/loginToken';
import {
  StyledUserInfoPage,
  UserInfoContentText,
  UserInfoLabel,
  UserInfoRow,
} from './UserInfoPage.styles';

const UserInfoPage = () => {
  return (
    <StyledUserInfoPage>
      <UserInfoRow>
        <UserInfoLabel>User Name:</UserInfoLabel>
        <UserInfoContentText>{getUserName()}</UserInfoContentText>
      </UserInfoRow>

      <LogoutButton />
    </StyledUserInfoPage>
  );
};

export default UserInfoPage;
