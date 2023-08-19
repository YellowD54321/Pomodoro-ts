import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:active {
    filter: brightness(95%);
  }
`;

const StyledButtonSkeleton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledButtonSkeleton;
