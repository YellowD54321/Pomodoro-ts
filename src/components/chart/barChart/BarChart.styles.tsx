import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const StyledBarChart = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledBarChart;
