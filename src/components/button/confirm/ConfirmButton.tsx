import { ButtonHTMLAttributes } from "react";
import StyledConfirmButton from "./ConfirmButton.styles";

const ConfirmButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledConfirmButton {...props}>{children}</StyledConfirmButton>;
};

export default ConfirmButton;
