import React from "react";
import styled from "styled-components";
import google_login_button from "../../../assets/google_login_button.png";
import { IGoogleLoginButton } from "./GoogleLoginButton.types";

const ImageButton = styled.img`
  width: 200px;
`;

const StyledGoogleLoginButton = ({ onClick }: IGoogleLoginButton) => {
  return (
    <ImageButton
      src={google_login_button}
      alt="google button"
      onClick={onClick}
    />
  );
};

export default StyledGoogleLoginButton;
