import { PropsWithChildren } from "react";
import styled from "styled-components";

const PagePaper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  border: 1px red solid;
`;

const CounterPagePaper = ({ children }: PropsWithChildren) => {
  return <PagePaper>{children}</PagePaper>;
};

export default CounterPagePaper;
