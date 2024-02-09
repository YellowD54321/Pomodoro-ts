import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../common/Common.styles';

const Wrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CounterPageWrapper = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CounterPageWrapper;

const Container = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  background-color: lightblue;
  padding: 3rem;
`;
export const CounterContainer = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

const Counters = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`;

export const StyledCounters = ({ children }: PropsWithChildren) => {
  return <Counters>{children}</Counters>;
};

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > *:not(select) {
    margin: 0;
  }

  & > select {
    margin-top: 1rem;
    align-self: center;
  }
`;

export const StyledCounter = ({ children }: PropsWithChildren) => {
  return <Counter>{children}</Counter>;
};
