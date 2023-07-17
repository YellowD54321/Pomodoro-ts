import { useContext } from "react";
import { CounterStatusType } from "../../../types";
import {
  getNextStatus,
  isCounting,
  isPausing,
} from "../../../utils/status/counterStatus";
import {
  PauseButton,
  StartButton,
  StopButton,
} from "../../button/counterStatusButton/CounterStatusButton";
import StyledStatusButtons from "./StatusButtons.styles";
import CounterStatusContext from "../../../contexts/counterPageContext/CounterStatusContext";

const StatusButtons = () => {
  const { workStatus, restStatus, setWorkStatus, setRestStatus } =
    useContext(CounterStatusContext);

  const handleClickButton = (status: CounterStatusType) => {
    const { workStatus: nextWorkStatus, restStatus: nextRestStatus } =
      getNextStatus(workStatus, restStatus, status);

    setWorkStatus(nextWorkStatus);
    setRestStatus(nextRestStatus);
  };

  const isEnablePauseButton = () => {
    return isCounting(workStatus) || isCounting(restStatus);
  };

  const isEnableStartButton = () => {
    return !isCounting(workStatus) && !isCounting(restStatus);
  };

  const isEnableStopButton = () => {
    return (
      isCounting(workStatus) ||
      isPausing(workStatus) ||
      isCounting(restStatus) ||
      isPausing(restStatus)
    );
  };

  return (
    <StyledStatusButtons>
      <PauseButton
        onClick={handleClickButton}
        disabled={!isEnablePauseButton()}
      />
      <StartButton
        onClick={handleClickButton}
        disabled={!isEnableStartButton()}
      />
      <StopButton
        onClick={handleClickButton}
        disabled={!isEnableStopButton()}
      />
    </StyledStatusButtons>
  );
};

export default StatusButtons;
