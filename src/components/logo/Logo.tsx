import StyledLogo, { StyledIcon, StyledTitle } from './Logo.styles';
import pomodoro_icon from '../../assets/pomodoro_icon.png';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants';

const Logo = () => {
  const naviagte = useNavigate();

  return (
    <StyledLogo onClick={() => naviagte(PATH.HOME)}>
      <StyledIcon src={pomodoro_icon} alt="pomodoro" />
      <StyledTitle>Pomodoro</StyledTitle>
    </StyledLogo>
  );
};

export default Logo;
