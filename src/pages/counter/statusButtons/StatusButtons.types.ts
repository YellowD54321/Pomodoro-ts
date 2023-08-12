import { CounterStatusType } from "./../../../types";
export interface IStatusButtons {
  onClickButton: (
    nextWorkStatus: CounterStatusType,
    nextRestStatus: CounterStatusType
  ) => void;
}
