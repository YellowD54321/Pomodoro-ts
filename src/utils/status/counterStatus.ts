import { CounterStatusType, CounterStatusesType } from "../../types";

export const isCounting = (status: CounterStatusType) => {
  return status === "start";
};

export const isPausing = (status: CounterStatusType) => {
  return status === "pause";
};

export const isStopping = (status: CounterStatusType) => {
  return status === "stop";
};

export const getNextStatus = (
  workStatus: CounterStatusType,
  restStatus: CounterStatusType,
  buttonStatus: CounterStatusType
): CounterStatusesType => {
  const isWorkCounting = isCounting(workStatus);
  const isWorkPausing = isPausing(workStatus);
  const isWorkStopping = isStopping(workStatus);
  const isRestCounting = isCounting(restStatus);
  const isRestPausing = isPausing(restStatus);
  const isRestStopping = isStopping(restStatus);

  const nextStatus = {
    workStatus,
    restStatus,
  } as CounterStatusesType;

  switch (buttonStatus) {
    case "start":
      if (isWorkPausing) {
        nextStatus.workStatus = "start";
      } else if (isRestPausing) {
        nextStatus.restStatus = "start";
      } else if (isWorkStopping && isRestStopping) {
        nextStatus.workStatus = "start";
      }
      break;
    case "pause":
      if (isWorkCounting) {
        nextStatus.workStatus = "pause";
      } else if (isRestCounting) {
        nextStatus.restStatus = "pause";
      }
      break;
    case "stop":
    default:
      if (isWorkCounting || isWorkPausing) {
        nextStatus.workStatus = "stop";
        nextStatus.restStatus = "start";
      } else if (isRestCounting || isRestPausing) {
        nextStatus.workStatus = "stop";
        nextStatus.restStatus = "stop";
      }
      break;
  }

  return nextStatus;
};
