import { API_URL } from "../../config";
import { API_PATH } from "../../constants";
import {
  ILoginWithGoogleBody,
  IPostDurationBody,
  IRegisterWithGoogleBody,
} from "./apis.types";
import authAxios from "./authAxios";
import unauthAxios from "./unauthAxios";

export const registerWithGoogle = async (body: IRegisterWithGoogleBody) => {
  const unauthApi = unauthAxios();
  const { data } = await unauthApi.post(
    API_URL + API_PATH.REGISTER_WITH_GOOGLE,
    body
  );
  return data;
};

export const loginWithGoogle = async (body: ILoginWithGoogleBody) => {
  const unauthApi = unauthAxios();
  const { data } = await unauthApi.post(
    API_URL + API_PATH.LOGIN_WITH_GOOGLE,
    body
  );
  return data;
};

export const postDuration = async (body: IPostDurationBody) => {
  const authApi = authAxios();
  const { data } = await authApi.post(API_URL + API_PATH.DURATION, body);
  return data;
};
