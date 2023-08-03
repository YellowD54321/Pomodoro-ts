export interface ILoginToken {
  access_token: string;
  refresh_token: string;
}

export interface IUser {
  id: number;
  exp: number;
}

export type IGoogleAccessToken = string;

export interface IRegisterWithGoogleBody {
  access_token: IGoogleAccessToken;
}

export interface ILoginWithGoogleBody {
  access_token: IGoogleAccessToken;
}
