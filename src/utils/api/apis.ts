import { API_URL } from '../../config';
import { API_PATH } from '../../constants';
import {
  IGetAnalysisParams,
  IGetDurationParams,
  IGetPostsParams,
  ILikePostBody,
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

export const getPosts = async (options?: IGetPostsParams) => {
  const unauthApi = unauthAxios();
  const headers = {
    params: options,
  };
  const { data } = await unauthApi.get(API_URL + API_PATH.POSTS, headers);

  return data;
};

export const likePost = async ({ emoji, post_id }: ILikePostBody) => {
  const authApi = authAxios();
  const body = {
    emoji,
  };

  const { data } = await authApi.post(
    API_URL + API_PATH.LIKE_POST + post_id,
    body,
  );

  return data;
};

export const getNotifications = async () => {
  const authApi = authAxios();
  const { data } = await authApi.get(API_URL + API_PATH.NOTIFICATION);

  return data;
};

export const readNotification = async (ids: string[]) => {
  const authApi = authAxios();
  const body = {
    ids,
  };

  const { data } = await authApi.post(
    API_URL + API_PATH.READ_NOTIFICATIONS,
    body,
  );

  return data;
};
