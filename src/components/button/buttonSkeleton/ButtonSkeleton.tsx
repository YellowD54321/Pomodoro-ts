import { ButtonHTMLAttributes } from 'react';
import StyledButtonSkeleton from './ButtonSkeleton.styles';

const ButtonSkeleton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButtonSkeleton {...props}>{children}</StyledButtonSkeleton>;
};

export default ButtonSkeleton;
