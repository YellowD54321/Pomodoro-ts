import { PATH } from "../../constants";
import { CustomNavLink } from "./Navigation.styles";

const Navigation = () => {
  return (
    <nav>
      <CustomNavLink to={PATH.COUNTER} end>
        COUNTER
      </CustomNavLink>
      <CustomNavLink to={PATH.ANALYSIS} end>
        ANALYSIS
      </CustomNavLink>
      <CustomNavLink to={PATH.SETTING} end>
        SETTING
      </CustomNavLink>
      <CustomNavLink to={PATH.LOGIN} end>
        LOGIN
      </CustomNavLink>
    </nav>
  );
};

export default Navigation;
