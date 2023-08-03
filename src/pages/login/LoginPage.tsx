import Navigation from "../../components/navigation/Navigation";
import LoginPageWrapper from "./LoginPage.styles";
import GoogleLoginButton from "../../components/button/googleLogin/GoogleLoginButton";

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Navigation />
      <GoogleLoginButton />
    </LoginPageWrapper>
  );
};

export default LoginPage;
