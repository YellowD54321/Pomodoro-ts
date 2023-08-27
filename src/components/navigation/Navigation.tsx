import { PATH } from "../../constants";
import StyledNavigation, { CustomNavLink } from "./Navigation.styles";

const Navigation = () => {
  return (
    <StyledNavigation>
      <CustomNavLink to={PATH.COUNTER} end>
        COUNTER
      </CustomNavLink>
      <CustomNavLink to={PATH.ANALYSIS} end>
        ANALYSIS
      </CustomNavLink>
      <CustomNavLink to={PATH.SETTING} end>
        SETTING
      </CustomNavLink>
    </StyledNavigation>
  );
};

export default Navigation;
