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

export type IDurationType = "work" | "rest";

export interface IDuration {
  id: number;
  user_id: number;
  start_time: Date;
  end_time?: Date;
  interrupt_times: number;
  focus_seconds: number;
  pause_seconds: number;
  type: IDurationType;
  description: string;
}

export interface IPostDurationBody {
  start_time: IDuration["start_time"];
  end_time?: IDuration["end_time"];
  interrupt_times?: IDuration["interrupt_times"];
  pause_seconds?: IDuration["pause_seconds"];
  type: IDuration["type"];
  description?: IDuration["description"];
}
