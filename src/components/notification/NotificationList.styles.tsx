import styled from 'styled-components';
import { COLORS } from '../../constants';
import { MenuItem, MenuList } from '@mui/material';

export const StyledListWrapper = styled(MenuList)`
  position: absolute;
  top: 3rem;
  left: 0;
  border: 1px solid gray;
  border-radius: 4px;
  box-shadow: 3px 3px 1px gray;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  max-height: 50vh;
  width: 20rem;
  background-color: white;
`;

export const StyledListItem = styled(MenuItem)<{ $isRead: boolean }>`
  position: relative;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.2rem 0.5rem;
  background-color: ${(props) =>
    props.$isRead === true ? 'white' : COLORS.MAIN_LIGHT};
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px gray solid;
  }
`;

export const StyledContent = styled.p`
  margin: 0;
`;

export const StyledSenderName = styled.span`
  font-weight: bold;
  text-decoration: underline;
`;

export const StyledCreatedTime = styled.p`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  margin: 0;
  color: gray;
`;
