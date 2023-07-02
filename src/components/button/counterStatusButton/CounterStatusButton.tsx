import React from "react";
import { CounterStatusType } from "../../../types";
import {
  getDisplayContent,
  getSize,
} from "../../../utils/button/counterStatusButton";
import StyledCounterStatusButton from "./CounterStatusButton.styles";

interface ButtonProps {
  onClick: Function;
  [rest: string]: any;
}

interface ButtonWithValueProps extends ButtonProps {
  status: CounterStatusType;
}

const CounterStatusButton = ({
  status,
  onClick,
  ...rest
}: ButtonWithValueProps) => {
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
