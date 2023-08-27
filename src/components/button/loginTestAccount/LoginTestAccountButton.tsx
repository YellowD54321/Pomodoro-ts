import { MouseEventHandler } from "react";
import { StyledLoginTestAccountButton } from "./LoginTestAccountButton.styled";
import { loginTestAccount } from "../../../utils/api/apis";
import { saveLoginToken } from "../../../utils/token/loginToken";
import { AxiosError } from "axios";
import useInformationWindow from "../../../hooks/useInformationWindow/useInformationWindow";
import { ACCOUNT_MESSAGE } from "../../../message";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constants";

const LoginTestAccountButton = () => {
  const navigate = useNavigate();
  const { openInformationWindow } = useInformationWindow();
  const handleClick: MouseEventHandler = async () => {
    try {
      const loginToken = await loginTestAccount();
      saveLoginToken(loginToken);
      return navigate(PATH.COUNTER);
    } catch (error) {
      const err = error as AxiosError;
      console.error(err);
      openInformationWindow(ACCOUNT_MESSAGE.LOGIN_FAIL);
      return navigate(PATH.HOME);
    }
  };

  return (
    <StyledLoginTestAccountButton onClick={handleClick}>
      Login With Test Account
    </StyledLoginTestAccountButton>
  );
};

export default LoginTestAccountButton;
