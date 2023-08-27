import styled from "styled-components";
import ButtonSkeleton from "../buttonSkeleton/ButtonSkeleton";
import { ButtonHTMLAttributes } from "react";

const Button = styled(ButtonSkeleton)`
  background-color: orange;
`;

const StyledLoginButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledLoginButton;
