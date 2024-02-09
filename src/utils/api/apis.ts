import { API_URL } from '../../config';
import { API_PATH } from '../../constants';
import {
  IAnalysis,
  IGetAnalysisParams,
  IGetDurationParams,
  ILoginWithGoogleBody,
  IPostDurationBody,
  IRegisterWithGoogleBody,
} from './apis.types';
import authAxios from './authAxios';
import unauthAxios from './unauthAxios';

export const registerWithGoogle = async (body: IRegisterWithGoogleBody) => {
  const unauthApi = unauthAxios();
  const { data } = await unauthApi.post(
    API_URL + API_PATH.REGISTER_WITH_GOOGLE,
    body,
  );
  return data;
};

export const loginWithGoogle = async (body: ILoginWithGoogleBody) => {
  const unauthApi = unauthAxios();
  const { data } = await unauthApi.post(
    API_URL + API_PATH.LOGIN_WITH_GOOGLE,
    body,
  );
  return data;
};

export const getDurations = async (options?: IGetDurationParams) => {
  const authApi = authAxios();
  const headers = {
    params: options,
  };
  const { data } = await authApi.get(API_URL + API_PATH.DURATION, headers);
  return data;
};

export const postDuration = async (body: IPostDurationBody) => {
  const authApi = authAxios();
  const { data } = await authApi.post(API_URL + API_PATH.DURATION, body);
  return data;
};

export const loginTestAccount = async () => {
  const unauthApi = unauthAxios();
  const { data } = await unauthApi.get(API_URL + API_PATH.LOGIN_TEST_ACCOUNT);
  return data;
};

export const createTestData = async () => {
  const authApi = authAxios();
  const { data } = await authApi.post(API_URL + API_PATH.CREATE_TEST_DATA);
  return data;
};

export const getAnalysisesWithDay = async (options?: IGetAnalysisParams) => {
  const authApi = authAxios();
  const headers = {
    params: options,
  };
  const { data } = await authApi.get(API_URL + API_PATH.ANALYSIS_DAY, headers);
  return data;
};

export const getAnalysisesWithMonth = async (options?: IGetAnalysisParams) => {
  const authApi = authAxios();
  const headers = {
    params: options,
  };
  const { data } = await authApi.get(
    API_URL + API_PATH.ANALYSIS_MONTH,
    headers,
  );
  return data;
};
