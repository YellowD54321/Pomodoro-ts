import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { API_URL } from "../../config";
import { API_PATH } from "../../constants";
import { ILoginToken, IUser } from "./apis.types";

const authAxios = () => {
  const loginTokenInLocalStorage = localStorage.getItem("loginToken");

  let loginToken: ILoginToken = {
    access_token: "",
    refresh_token: "",
  };

  if (loginTokenInLocalStorage) {
    loginToken = JSON.parse(loginTokenInLocalStorage);
  }

  const config = {
    headers: {
      "x-access-token": `Bearer ${loginToken.access_token}`,
    },
  };
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.request.use(
    async (req) => {
      if (!loginToken || !loginToken.access_token) {
        localStorage.setItem("loginToken", "");
        delete req.headers["x-access-token"];
        throw new Error("登入已過期，請重新登入。");
      }

      const decodedAccessToken: IUser = jwt_decode(loginToken.access_token);

      console.log("decodedAccessToken", decodedAccessToken);

      const now = dayjs();
      const isAccessTokenExpired =
        dayjs.unix(decodedAccessToken.exp).diff(now) < 1;

      if (!isAccessTokenExpired) {
        return req;
      }

      if (!loginToken.refresh_token) {
        localStorage.setItem("loginToken", "");
        delete req.headers["x-access-token"];
        throw new Error("登入已過期，請重新登入。");
      }

      const decodedRefreshToken: IUser = jwt_decode(loginToken.refresh_token);
      const isRefreshTokenExpired =
        dayjs.unix(decodedRefreshToken.exp).diff(now) < 1;
      if (isRefreshTokenExpired) {
        localStorage.setItem("loginToken", "");
        delete req.headers["x-access-token"];
        throw new Error("登入已過期，請重新登入。");
      }

      const res = await axios.post(`${API_URL}${API_PATH.REFRESH_LOGIN_OKEN}`, {
        refresh: loginToken.refresh_token,
      });
      const newToken: ILoginToken = res.data;
      localStorage.setItem("loginToken", JSON.stringify(newToken));

      req.headers["x-access-token"] = `Bearer ${newToken.access_token}`;
      return req;
    },
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default authAxios;
