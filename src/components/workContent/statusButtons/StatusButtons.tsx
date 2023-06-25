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

type Props = {
  workStatus: CounterStatusType;
  setWorkStatus: React.Dispatch<React.SetStateAction<CounterStatusType>>;
  restStatus: CounterStatusType;
  setRestStatus: React.Dispatch<React.SetStateAction<CounterStatusType>>;
};

const StatusButtons = ({
  workStatus,
  setWorkStatus,
  restStatus,
  setRestStatus,
}: Props) => {
  const handleClickBUtton = (status: CounterStatusType) => {
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
        onClick={handleClickBUtton}
        disabled={!isEnablePauseButton()}
      />
      <StartButton
        onClick={handleClickBUtton}
        disabled={!isEnableStartButton()}
      />
      <StopButton
        onClick={handleClickBUtton}
        disabled={!isEnableStopButton()}
      />
    </StyledStatusButtons>
  );
};

export default StatusButtons;
