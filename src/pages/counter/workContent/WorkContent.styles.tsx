import { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.5rem;
`;

const StyledWorkContent = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledWorkContent;
