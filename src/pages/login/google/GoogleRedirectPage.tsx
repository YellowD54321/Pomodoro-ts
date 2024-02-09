import { useEffect, useState } from 'react';
import ConfirmWindow from '../../../components/window/confirm/ConfirmWindow';
import { WEBSITE_NAME } from '../../../config';
import StyledGoogleRedirectPage from './GoogleRedirectPage.styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginWithGoogle, registerWithGoogle } from '../../../utils/api/apis';
import { PATH } from '../../../constants';
import { AxiosError } from 'axios';
import { IGoogleAccessToken } from '../../../utils/api/apis.types';
import useInformationWindow from '../../../hooks/useInformationWindow/useInformationWindow';
import { ACCOUNT_MESSAGE } from '../../../message';
import useConfirmWindow from '../../../hooks/useConfirmWindow/useConfirmWindow';
import { saveLoginToken } from '../../../utils/token/loginToken';

const getParamsFromHash = (
  hash: string,
): { [index: string]: string } | Record<string, never> => {
  return hash
    .substring(1)
    .split('&')
    .reduce((sumMap, param) => {
      const key = param.split('=')[0];
      const value = param.split('=')[1];
      return {
        ...sumMap,
        [key]: value,
      };
    }, {});
};

const getAcceTokenFromHash = (hash: string): IGoogleAccessToken => {
  const params = getParamsFromHash(hash);
  let accessToken = '';
  if ('access_token' in params) {
    accessToken = params['access_token'] || '';
  }
  return accessToken;
};

const GoogleRedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { openInformationWindow } = useInformationWindow();
  const { openConfirmWindow } = useConfirmWindow();
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
      saveLoginToken(loginToken);
      return navigate(PATH.COUNTER);
    } catch (error) {
      const err = error as AxiosError;
      console.error(err);
      // not registered yet
      if (err.response?.status === 406) {
        handleOpenConfirmWindow();
        return;
      }
      openInformationWindow(ACCOUNT_MESSAGE.LOGIN_FAIL);
      return navigate(PATH.HOME);
    }
  };

  const register = async () => {
    const postBody = {
      access_token: accessToken,
    };
    try {
      const loginToken = await registerWithGoogle(postBody);
      saveLoginToken(loginToken);
      return navigate(PATH.COUNTER);
    } catch (error) {
      console.error(error);
      return navigate(PATH.HOME);
    }
  };

  const handleClickCancel = () => {
    navigate(PATH.HOME);
  };

  const handleClickConfirm = () => {
    register();
  };

  const handleOpenConfirmWindow = () => {
    openConfirmWindow(
      ACCOUNT_MESSAGE.GOOGLE_ACCOUNT_NOT_REGISTERED_CONTENT,
      handleClickConfirm,
      {
        title: ACCOUNT_MESSAGE.GOOGLE_ACCOUNT_NOT_REGISTERED_TITLE,
        onCancel: handleClickCancel,
      },
    );
  };

  return <StyledGoogleRedirectPage>Google Signing...</StyledGoogleRedirectPage>;
};

export default GoogleRedirectPage;
