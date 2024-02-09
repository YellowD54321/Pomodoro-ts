import React from 'react';
import StyledFavoriteWordButtons from './FavoriteWordButtons.styles';
import FavoriteWordButton from '../../../components/button/favoriteWord/FavoriteWordButton';

const testData = ['work', 'study', 'read', 'algorithm', 'reactjs'];

interface Props {
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const FavoriteWordButtons = ({ setText }: Props) => {
  const handleClickFavoriteButton = (buttonText: string) => {
    setText(buttonText);
  };

  return (
    <StyledFavoriteWordButtons>
      {testData.map((text, index) => {
        return (
          <React.Fragment key={index}>
            <FavoriteWordButton
              text={text}
              onClick={handleClickFavoriteButton}
            />
          </React.Fragment>
        );
      })}
    </StyledFavoriteWordButtons>
  );
};

export default FavoriteWordButtons;
