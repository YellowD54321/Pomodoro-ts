import LoginPageWrapper from './LoginPage.styles';
import GoogleLoginButton from '../../components/button/googleLogin/GoogleLoginButton';
import LoginTestAccountButton from '../../components/button/loginTestAccount/LoginTestAccountButton';

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <GoogleLoginButton />
      <LoginTestAccountButton />
    </LoginPageWrapper>
  );
};

export default LoginPage;
