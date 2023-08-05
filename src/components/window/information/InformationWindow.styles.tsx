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

const TitleWrapper = styled.h4`
  font-weight: bold;
`;

export const StyledTitle = ({ children }: PropsWithChildren) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

const ContentWrapper = styled.p``;

export const StyledContent = ({ children }: PropsWithChildren) => {
  return ContentWrapper;
};

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButtons = ({ children }: PropsWithChildren) => {
  return <ButtonsWrapper>{children}</ButtonsWrapper>;
};
