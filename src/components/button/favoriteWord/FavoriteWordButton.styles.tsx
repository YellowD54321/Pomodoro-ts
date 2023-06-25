import styled from "styled-components";

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

type Props = {
  children: string;
  onClick: React.MouseEventHandler;
};

const StyledFavoriteButton = ({ children, onClick }: Props) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default StyledFavoriteButton;
