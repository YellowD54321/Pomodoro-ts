import styled from 'styled-components';
import { COLORS } from '../../constants';

export const StyledNotificationWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledNotificationButton = styled.button`
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  background-color: ${COLORS.SUB_LIGHT};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledUnReadCount = styled.div`
  background-color: red;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
