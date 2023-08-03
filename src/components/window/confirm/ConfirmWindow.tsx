import { Dialog } from "@mui/material";
import CancelButton from "../../button/cancelButton/CancelButton";
import ConfirmButton from "../../button/confirm/ConfirmButton";
import StyledConfirmWindow, {
  StyledButtons,
  StyledContent,
  StyledTitle,
} from "./ConfirmWindow.styles";
import { IConfirmWindow } from "./ConfirmWindow.types";

const ConfirmWindow = ({
  title = "",
  content = "",
  confirmButtonText = "",
  cancelButtonText = "",
  isOpen = false,
  onCancel,
  onConfirm,
}: IConfirmWindow) => {
  const confirmText = confirmButtonText || "Confirm";
  const cancelText = cancelButtonText || "Cancel";

  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <StyledConfirmWindow>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>{content}</StyledContent>
        <StyledButtons>
          <CancelButton onClick={onCancel}>{cancelText}</CancelButton>
          <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
        </StyledButtons>
      </StyledConfirmWindow>
    </Dialog>
  );
};

export default ConfirmWindow;
