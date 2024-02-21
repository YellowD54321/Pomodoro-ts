import CancelButton from '../../button/cancel/CancelButton';
import ConfirmButton from '../../button/confirm/ConfirmButton';
import StyledConfirmWindow, {
  StyledButtons,
  StyledContent,
  StyledTitle,
} from './ConfirmWindow.styles';
import useConfirmWindow from '../../../hooks/useConfirmWindow/useConfirmWindow';
import { useContext } from 'react';
import ConfirmWindowContext from '../../../contexts/confirmWindowContext/ConfrimWindowContext';
import { Dialog } from '@mui/material';

const ConfirmWindow = () => {
  const { isOpen, title, content, confirmButtonText, cancelButtonText } =
    useContext(ConfirmWindowContext);
  const { onConfirmConfirmWindow, onCancelConfirmWindow } = useConfirmWindow();

  return (
    <Dialog open={isOpen} onClose={onCancelConfirmWindow}>
      <StyledConfirmWindow>
        {title ? <StyledTitle>{title}</StyledTitle> : null}
        {content ? <StyledContent>{content}</StyledContent> : null}
        <StyledButtons>
          <CancelButton onClick={onCancelConfirmWindow}>
            {cancelButtonText}
          </CancelButton>
          <ConfirmButton onClick={onConfirmConfirmWindow}>
            {confirmButtonText}
          </ConfirmButton>
        </StyledButtons>
      </StyledConfirmWindow>
    </Dialog>
  );
};

export default ConfirmWindow;
