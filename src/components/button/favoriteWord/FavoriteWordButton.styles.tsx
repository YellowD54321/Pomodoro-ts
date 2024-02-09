import styled from 'styled-components';
import ButtonSkeleton from '../buttonSkeleton/ButtonSkeleton';
import { COLORS } from '../../../constants';

const Button = styled(ButtonSkeleton)`
  background-color: ${COLORS.MAIN_LIGHT};
  border: 1px solid ${COLORS.SUB_LIGHT};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

interface Props {
  children: string;
  onClick: React.MouseEventHandler;
}

const StyledFavoriteButton = ({ children, onClick }: Props) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default StyledFavoriteButton;
