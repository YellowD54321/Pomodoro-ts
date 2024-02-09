import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledGoogleRedirectPage = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledGoogleRedirectPage;
