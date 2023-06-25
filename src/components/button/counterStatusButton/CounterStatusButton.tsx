import React from "react";
import { CounterStatusType } from "../../../types";
import {
  getDisplayContent,
  getSize,
} from "../../../utils/button/counterStatusButton";
import StyledCounterStatusButton from "./CounterStatusButton.styles";

// React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>> &

type ButtonProps = {
  onClick: Function;
  [rest: string]: any;
};

type ButtonWithValueProps = ButtonProps & {
  value: CounterStatusType;
};

const CounterStatusButton = ({
  value,
  onClick,
  ...rest
}: ButtonWithValueProps) => {
  return (
    <StyledCounterStatusButton
      value={value}
      onClick={onClick}
      size={getSize(value)}
      {...rest}
    >
      {getDisplayContent(value)}
    </StyledCounterStatusButton>
  );
};

export const StartButton = ({ onClick, ...rest }: ButtonProps) => {
  return <CounterStatusButton value="start" onClick={onClick} {...rest} />;
};

export const PauseButton = ({ onClick, ...rest }: ButtonProps) => {
  return <CounterStatusButton value="pause" onClick={onClick} {...rest} />;
};

export const StopButton = ({ onClick, ...rest }: ButtonProps) => {
  return <CounterStatusButton value="stop" onClick={onClick} {...rest} />;
};
