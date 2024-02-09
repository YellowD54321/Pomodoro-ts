import StyledFavoriteButton from './FavoriteWordButton.styles';

interface Props {
  text: string;
  onClick: (param: string) => void;
}

const FavoriteWordButton = ({ text, onClick }: Props) => {
  const handleClick = () => {
    onClick(text);
  };

  return (
    <StyledFavoriteButton onClick={handleClick}>{text}</StyledFavoriteButton>
  );
};

export default FavoriteWordButton;
