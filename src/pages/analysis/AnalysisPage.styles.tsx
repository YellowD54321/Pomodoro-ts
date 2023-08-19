import { PropsWithChildren } from "react";
import styled from "styled-components";

const AnalysisPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledAnalysisPage = ({ children }: PropsWithChildren) => {
  return <AnalysisPageWrapper>{children}</AnalysisPageWrapper>;
};
