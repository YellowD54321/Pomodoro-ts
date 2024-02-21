import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  padding: 1rem;
  background-color: lightblue;
  box-shadow: 0 0 10px 0 darkgray;
`;

const StyledHeader = ({ children }: PropsWithChildren) => {
  return <HeaderWrapper>{children}</HeaderWrapper>;
};

export default StyledHeader;

const LeftSideWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledLeftSideHeader = ({ children }: PropsWithChildren) => {
  return <LeftSideWrapper>{children}</LeftSideWrapper>;
};

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledCenterHeader = ({ children }: PropsWithChildren) => {
  return <CenterWrapper>{children}</CenterWrapper>;
};

export const StyledRightSideHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
