import { ButtonHTMLAttributes } from "react";
import ButtonSkeleton from "../buttonSkeleton/ButtonSkeleton";
import styled from "styled-components";

const Button = styled(ButtonSkeleton)`
  background-color: #6969cc;
  border: 0px;
`;

const StyledConfirmButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledConfirmButton;
