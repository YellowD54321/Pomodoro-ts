import { ILoginToken } from '../api/apis.types';

export const saveLoginToken = (loginToken: ILoginToken) => {
  localStorage.setItem('loginToken', JSON.stringify(loginToken));
};

export const clearLoginToken = () => {
  localStorage.setItem('loginToken', '');
};

export const getLoginToken = () => {
  return localStorage.getItem('loginToken');
};
