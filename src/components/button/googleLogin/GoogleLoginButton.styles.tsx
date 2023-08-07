import { MouseEventHandler } from "react";
import styled from "styled-components";
import google_login_button from "../../../assets/google_login_button.png";
import { IGoogleLoginButton } from "./GoogleLoginButton.types";

const ImageButton = styled.img`
  width: 200px;
  cursor: pointer;

  &:active {
    filter: sepia(50%);
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
