import styled from "styled-components";
import ButtonSkeleton from "../buttonSkeleton/ButtonSkeleton";
import { ButtonHTMLAttributes } from "react";

const Button = styled(ButtonSkeleton)`
  background-color: #8484f8;
  color: black;
`;

const StyledFilterButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledFilterButton;
