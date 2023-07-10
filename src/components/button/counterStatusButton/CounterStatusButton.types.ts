import { ButtonHTMLAttributes } from "react";
import { ButtonSizeType, CounterStatusType } from "../../../types";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  onClick: (param: CounterStatusType) => void;
}

export interface ButtonWithStatusProps extends ButtonProps {
  status: CounterStatusType;
}

export interface CounterStatusButtonProps extends ButtonWithStatusProps {
  size?: ButtonSizeType;
}
