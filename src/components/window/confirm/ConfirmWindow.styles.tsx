import { PropsWithChildren } from "react";
import styled from "styled-components";

const WindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StyledConfirmWindow = ({ children }: PropsWithChildren) => {
  return <WindowWrapper>{children}</WindowWrapper>;
};

export default StyledConfirmWindow;

const TitleWrapper = styled.h4`
  font-weight: bold;
`;

export const StyledTitle = ({ children }: PropsWithChildren) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

const ContentWrapper = styled.p``;

export const StyledContent = ({ children }: PropsWithChildren) => {
  return <ContentWrapper>{children}</ContentWrapper>;
};

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 2rem 0;
`;

export const StyledButtons = ({ children }: PropsWithChildren) => {
  return <ButtonsWrapper>{children}</ButtonsWrapper>;
};
