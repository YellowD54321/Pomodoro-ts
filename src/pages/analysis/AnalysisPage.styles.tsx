import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../common/Common.styles';

const AnalysisPageWrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledAnalysisPage = ({ children }: PropsWithChildren) => {
  return <AnalysisPageWrapper>{children}</AnalysisPageWrapper>;
};

const FilterButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FilterButtons = ({ children }: PropsWithChildren) => {
  return <FilterButtonsWrapper>{children}</FilterButtonsWrapper>;
};

const ChartWrapper = styled.div`
  width: 95%;
  height: 60vh;
  margin-top: 3rem;
`;

export const AnalysisChart = ({ children }: PropsWithChildren) => {
  return <ChartWrapper>{children}</ChartWrapper>;
};
