import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../common/Common.styles';

const PostsPageWrapper = styled(PageWrapper)`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const StyledPostsPage = ({ children }: PropsWithChildren) => {
  return <PostsPageWrapper>{children}</PostsPageWrapper>;
};
