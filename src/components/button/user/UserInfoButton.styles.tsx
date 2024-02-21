import styled from 'styled-components';
import ButtonSkeleton from '../buttonSkeleton/ButtonSkeleton';
import { COLORS } from '../../../constants';

export const StyledUserInfoButton = styled(ButtonSkeleton)`
  background-color: ${COLORS.SUB_LIGHT};
`;

export const ButtonContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
