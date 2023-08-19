import styled from "styled-components";
import ButtonSkeleton from "../buttonSkeleton/ButtonSkeleton";
import { ButtonHTMLAttributes } from "react";

const Button = styled(ButtonSkeleton)`
  background-color: #b67600;
  color: black;
`;

export const StyledCreateTestDataButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};
