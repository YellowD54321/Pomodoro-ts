import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0.3rem 0.3rem ${COLORS.SHADOW_LIGHT};
  width: 20rem;
  padding: 1rem;
  background-color: ${COLORS.MAIN_LIGHT};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.h3``;

export const Focus = styled.h4`
  white-space: nowrap;
`;

export const Description = styled.p``;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FinishTime = styled.div``;

export const LikeArea = styled.div`
  position: relative;
`;

export const EmojiButtonArea = styled.div`
  height: 2.5rem;
  position: absolute;
  top: -3rem;
  left: 0;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  border: 1px solid ${COLORS.SUB_LIGHT};
  border-radius: 0.5rem;
  background-color: white;
  padding: 0 0.5rem;
`;

export const EmojiButton = styled.button`
  border: 1px solid white;
  background-color: ${COLORS.SUB_LIGHT};
  cursor: pointer;
  font-weight: bold;
  height: 2rem;
`;
