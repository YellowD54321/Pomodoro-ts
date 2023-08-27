import LoginButton from "../button/login/LoginButton";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import StyledHeader, {
  StyledCenterHeader,
  StyledLeftSideHeader,
  StyledRightSideHeader,
} from "./Header.styles";

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
        <LoginButton />
      </StyledRightSideHeader>
    </StyledHeader>
  );
};

export default Header;
