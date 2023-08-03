import { PropsWithChildren } from "react";
import styled from "styled-components";

const WindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInformationWindow = ({ children }: PropsWithChildren) => {
  return <WindowWrapper>{children}</WindowWrapper>;
};

export default StyledInformationWindow;
