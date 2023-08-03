import styled from "styled-components";
import ButtonSkeleton from "../buttonSkeleton/ButtonSkeleton";
import { ButtonHTMLAttributes } from "react";

const Button = styled(ButtonSkeleton)`
  background-color: white;
  border: 1px black solid;
`;

const StyledCancelButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledCancelButton;
