import { useEffect, useState } from "react";
import ConfirmWindow from "../../../components/window/confirm/ConfirmWindow";
import { WEBSITE_NAME } from "../../../config";
import StyledGoogleRedirectPage from "./GoogleRedirectPage.styles";
import { useLocation, useNavigate } from "react-router-dom";
import { loginWithGoogle, registerWithGoogle } from "../../../utils/api/apis";
import { PATH } from "../../../constants";
import { AxiosError } from "axios";
import { IGoogleAccessToken } from "../../../utils/api/apis.types";

const getParamsFromHash = (hash: string): { [index: string]: string } | {} => {
  return hash
    .substring(1)
    .split("&")
    .reduce((sumMap, param) => {
      const key = param.split("=")[0];
      const value = param.split("=")[1];
      return {
        ...sumMap,
        [key]: value,
      };
    }, {});
};

const getAcceTokenFromHash = (hash: string): IGoogleAccessToken => {
  const params = getParamsFromHash(hash);
  let accessToken = "";
  if ("access_token" in params) {
    accessToken = params["access_token"] || "";
  }
  return accessToken;
};

const GoogleRedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isConfirmWindowOpen, setIsConfirmWindowOpen] = useState(false);
  const hash = location.hash;
  const accessToken = getAcceTokenFromHash(hash);

  useEffect(() => {
    login();
  }, []);

  const login = async () => {
    const postBody = {
      access_token: accessToken,
    };
    try {
      const loginToken = await loginWithGoogle(postBody);
      localStorage.setItem("loginToken", JSON.stringify(loginToken));
      return navigate(PATH.COUNTER);
    } catch (error) {
      const err = error as AxiosError;
      console.error(err);
      // not registered yet
      if (err.response?.status === 406) {
        setIsConfirmWindowOpen(true);
      }
      // show login fail on information window
      return navigate(PATH.HOME);
    }
  };

  const register = async () => {
    const postBody = {
      access_token: accessToken,
    };
    try {
      const loginToken = await registerWithGoogle(postBody);
      localStorage.setItem("loginToken", JSON.stringify(loginToken));
      return navigate(PATH.COUNTER);
    } catch (error) {
      console.error(error);
      return navigate(PATH.HOME);
    }
  };

  const handleClickCancel = () => {
    setIsConfirmWindowOpen(false);
    return navigate(PATH.HOME);
  };

  const handleClickConfirm = () => {
    setIsConfirmWindowOpen(false);
    register();
  };

  return (
    <StyledGoogleRedirectPage>
      Google Signing...
      <ConfirmWindow
        title={`This Google account didn't register on ${WEBSITE_NAME}.`}
        content="Would you like to register an account with this Google Account?"
        isOpen={isConfirmWindowOpen}
        onCancel={handleClickCancel}
        onConfirm={handleClickConfirm}
      />
    </StyledGoogleRedirectPage>
  );
};

export default GoogleRedirectPage;
