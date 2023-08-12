import { MouseEventHandler } from "react";
import styled from "styled-components";
import google_login_button from "../../../assets/google_login_button.png";
import { IGoogleLoginButton } from "./GoogleLoginButton.types";

const ImageButton = styled.img`
  width: 200px;
  cursor: pointer;
  box-shadow: 0 3px 1px lightgray;

  &:active {
    box-shadow: 0 0 0;
    transform: translateY(2px);
  }
`;

const StyledGoogleLoginButton = ({ onClick }: IGoogleLoginButton) => {
  const handleClick: MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <ImageButton
      src={google_login_button}
      alt="google button"
      onClick={handleClick}
      draggable={false}
    />
  );
};

export default StyledGoogleLoginButton;
