import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledNavigation = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledNavigation;

export const CustomNavLink = styled(NavLink)`
  padding: 0.5rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  border-radius: 4px;

  &.active {
    background-color: ${COLORS.SUB_LIGHT};
  }

  &:hover:not(.active) {
    background-color: ${COLORS.SHADOW_LIGHT};
  }
`;
