import { Dialog } from "@mui/material";
import StyledInformationWindow, {
  StyledButtons,
  StyledContent,
  StyledTitle,
} from "./InformationWindow.styles";
import { useContext } from "react";
import useInformationWindow from "../../../hooks/useInformationWindow/useInformationWindow";
import InformationWindowContext from "../../../contexts/informationWindowContext/InformationWindowContext";
import ConfirmButton from "../../button/confirm/ConfirmButton";

const InformationWindow = () => {
  const { isOpen, title, content, buttonText } = useContext(
    InformationWindowContext
  );
  const { closeInformationWindow } = useInformationWindow();

  return (
    <Dialog open={isOpen} onClose={closeInformationWindow}>
      <StyledInformationWindow>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>{content}</StyledContent>
        <StyledButtons>
          <ConfirmButton onClick={closeInformationWindow}>
            {buttonText}
          </ConfirmButton>
        </StyledButtons>
      </StyledInformationWindow>
    </Dialog>
  );
};

export default InformationWindow;
