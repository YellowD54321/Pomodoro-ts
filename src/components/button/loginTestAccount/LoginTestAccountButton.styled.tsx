import styled from 'styled-components';
import ButtonSkeleton from '../buttonSkeleton/ButtonSkeleton';
import { ButtonHTMLAttributes } from 'react';

const Button = styled(ButtonSkeleton)`
  background-color: #b67600;
  color: black;
  border: 1px solid #b67600;
  box-shadow: 0 3px 1px lightgray;

  &:active {
    box-shadow: 0 0 0;
    transform: translateY(2px);
  }
`;

export const StyledLoginTestAccountButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};
