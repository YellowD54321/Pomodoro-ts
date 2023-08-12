import { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
`;

const StyledStatusButtons = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledStatusButtons;
