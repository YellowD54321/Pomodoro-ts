import { ButtonHTMLAttributes } from 'react';
import StyledCancelButton from './CancelButton.styles';

const CancelButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledCancelButton {...props}>{children}</StyledCancelButton>;
};

export default CancelButton;
