import Navigation from '../../components/navigation/Navigation';
import LoginPageWrapper from './LoginPage.styles';
import GoogleLoginButton from '../../components/button/googleLogin/GoogleLoginButton';
import LoginTestAccountButton from '../../components/button/loginTestAccount/LoginTestAccountButton';

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Navigation />
      <GoogleLoginButton />
      <LoginTestAccountButton />
    </LoginPageWrapper>
  );
};

export default LoginPage;
