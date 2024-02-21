import { ILoginToken, IUser } from '../api/apis.types';
import jwt_decode from 'jwt-decode';

export const saveLoginToken = (loginToken: ILoginToken) => {
  localStorage.setItem('loginToken', JSON.stringify(loginToken));
};

export const clearLoginToken = () => {
  localStorage.setItem('loginToken', '');
};

export const getLoginToken = () => {
  return localStorage.getItem('loginToken');
};

export const getUser = (): IUser | null => {
  const loginTokenInLocalStorage = getLoginToken();

  if (!loginTokenInLocalStorage) return null;

  const loginToken = JSON.parse(loginTokenInLocalStorage);
  const user: IUser = jwt_decode(loginToken.access_token);

  return user;
};

export const getUserId = (): string | null => {
  const user = getUser();

  if (!user) return null;

  return user.id;
};

export const getUserName = (): string | null => {
  const user = getUser();

  if (!user) return null;

  return user.id || 'Guest';
};

export const isLogin = (): boolean => {
  return !!getUser();
};

export const logout = async (): Promise<null> => {
  clearLoginToken();

  return new Promise((resolve) => resolve(null));
};
