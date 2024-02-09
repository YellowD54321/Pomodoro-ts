import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants';

const Button = styled.button`
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  background-color: ${COLORS.SUB_LIGHT};
  border: none;
  border-radius: 4px;
  box-shadow: 0 3px 1px ${COLORS.SHADOW_LIGHT};
  cursor: pointer;

  &:active {
    filter: brightness(95%);
    box-shadow: 0 0 0;
    transform: translateY(2px);
  }
`;

const StyledButtonSkeleton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props}>{children}</Button>;
};

export default StyledButtonSkeleton;
