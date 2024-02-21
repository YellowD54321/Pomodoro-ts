import styled from 'styled-components';
import { PageWrapper } from '../common/Common.styles';

export const StyledUserInfoPage = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  top: 3rem;
`;

export const UserInfoRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.2rem;
`;

export const UserInfoLabel = styled.h4``;

export const UserInfoContentText = styled.h4``;
