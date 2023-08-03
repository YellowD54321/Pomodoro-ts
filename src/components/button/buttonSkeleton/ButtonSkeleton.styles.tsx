import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
`;

const StyledButtonSkeleton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledButtonSkeleton;
