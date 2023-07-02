import { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  border: 1px red solid;
`;

const CounterPageWrapper = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CounterPageWrapper;
