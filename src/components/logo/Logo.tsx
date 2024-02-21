import StyledLogo, { StyledIcon, StyledTitle } from './Logo.styles';
import pomodoro_icon from '../../assets/pomodoro_icon.png';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants';
import { WEBSITE_NAME } from '../../config';

const Logo = () => {
  const naviagte = useNavigate();

  return (
    <StyledLogo onClick={() => naviagte(PATH.HOME)}>
      <StyledIcon src={pomodoro_icon} alt="pomodoro" />
      <StyledTitle>{WEBSITE_NAME}</StyledTitle>
    </StyledLogo>
  );
};

export default Logo;
