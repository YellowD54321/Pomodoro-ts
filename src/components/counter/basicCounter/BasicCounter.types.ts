import { CounterStatusType } from "../../../types";

export interface BasicCounterProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  status: CounterStatusType;
  initialTime: number;
}
