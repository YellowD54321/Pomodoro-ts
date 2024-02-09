import { useContext } from 'react';
import InformationWindowContext, {
  defaultValue,
} from '../../contexts/informationWindowContext/InformationWindowContext';
import {
  IOpenInformationWindowContent,
  IOpenInformationWindowOptions,
} from './useInformationWindow.types';

const useInformationWindow = () => {
  const {
    setIsOpen,
    setTitle,
    setContent,
    setButtonText,
    onClose,
    setOnClose,
  } = useContext(InformationWindowContext);

  const openInformationWindow = (
    content: IOpenInformationWindowContent,
    options?: IOpenInformationWindowOptions,
  ) => {
    const title = options?.title || defaultValue.title;
    const buttonText = options?.buttonText || defaultValue.buttonText;
    const onClose = options?.onClose;
    setIsOpen(true);
    setTitle(title);
    setContent(content);
    setButtonText(buttonText);
    if (onClose) {
      setOnClose(onClose);
    } else {
      setOnClose(null);
    }
  };

  const closeInformationWindow = () => {
    if (onClose) {
      onClose();
    }
    setIsOpen(false);
    setTitle(defaultValue.title);
    setContent(defaultValue.content);
    setButtonText(defaultValue.buttonText);
  };

  return { openInformationWindow, closeInformationWindow };
};

export default useInformationWindow;
