import { PropsWithChildren } from "react";
import styled from "styled-components";
import { ILogo } from "./Logo.types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  column-gap: 0.2rem;
  cursor: pointer;
`;

const StyledLogo = ({ children, ...props }: ILogo) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default StyledLogo;

const Icon = styled.img`
  width: 2rem;
`;

export const StyledIcon = ({ ...props }) => {
  return <Icon {...props} />;
};

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

export const StyledTitle = ({ children, ...props }: PropsWithChildren) => {
  return <Title {...props}>{children}</Title>;
};
