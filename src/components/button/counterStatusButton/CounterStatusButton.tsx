import {
  getDisplayContent,
  getSize,
} from "../../../utils/button/counterStatusButton";
import StyledCounterStatusButton from "./CounterStatusButton.styles";
import {
  ButtonProps,
  ButtonWithStatusProps,
} from "./CounterStatusButton.types";

const CounterStatusButton = ({
  status,
  onClick,
  ...rest
}: ButtonWithStatusProps) => {
  return (
    <StyledCounterStatusButton
      status={status}
      onClick={onClick}
      size={getSize(status)}
      {...rest}
    >
      {getDisplayContent(status)}
    </StyledCounterStatusButton>
  );
};

export const StartButton = ({ onClick, ...rest }: ButtonProps) => {
  return <CounterStatusButton status="start" onClick={onClick} {...rest} />;
};

export const PauseButton = ({ onClick, ...rest }: ButtonProps) => {
  return <CounterStatusButton status="pause" onClick={onClick} {...rest} />;
};

export const StopButton = ({ onClick, ...rest }: ButtonProps) => {
  return <CounterStatusButton status="stop" onClick={onClick} {...rest} />;
};
