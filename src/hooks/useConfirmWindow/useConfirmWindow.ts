import { useContext } from "react";
import ConfirmWindowContext, {
  defaultValue,
} from "../../contexts/confirmWindowContext/ConfrimWindowContext";
import {
  IOpenConfirmWindowContent,
  IOpenConfirmWindowOnConfirm,
  IOpenConfirmWindowOptions,
} from "./useConfirmWindow.types";

const useConfirmWindow = () => {
  const {
    setIsOpen,
    setTitle,
    setContent,
    setConfirmButtonText,
    setCancelButtonText,
    onConfirm,
    setOnConfirm,
    onCancel,
    setOnCancel,
  } = useContext(ConfirmWindowContext);

  const openConfirmWindow = (
    content: IOpenConfirmWindowContent,
    onConfirm: IOpenConfirmWindowOnConfirm,
    options?: IOpenConfirmWindowOptions
  ) => {
    const title = options?.title || defaultValue.title;
    const confirmButtonText =
      options?.confirmButtonText || defaultValue.confirmButtonText;
    const cancelButtonText =
      options?.cancelButtonText || defaultValue.cancelButtonText;
    const onCancel = options?.onCancel;
    setIsOpen(true);
    setTitle(title);
    setContent(content);
    setConfirmButtonText(confirmButtonText);
    setCancelButtonText(cancelButtonText);
    setOnConfirm(onConfirm);
    if (onCancel) {
      setOnCancel(onCancel);
    } else {
      setOnCancel(null);
    }
  };

  const onConfirmConfirmWindow = () => {
    if (onConfirm) {
      onConfirm();
    }
    setIsOpen(false);
    setTitle(defaultValue.title);
    setContent(defaultValue.content);
    setConfirmButtonText(defaultValue.confirmButtonText);
    setCancelButtonText(defaultValue.cancelButtonText);
    setOnConfirm(defaultValue.onConfirm);
    setOnCancel(defaultValue.onCancel);
  };

  const onCancelConfirmWindow = () => {
    if (onCancel) {
      onCancel();
    }
    setIsOpen(false);
    setTitle(defaultValue.title);
    setContent(defaultValue.content);
    setConfirmButtonText(defaultValue.confirmButtonText);
    setCancelButtonText(defaultValue.cancelButtonText);
    setOnConfirm(defaultValue.onConfirm);
    setOnCancel(defaultValue.onCancel);
  };

  return { openConfirmWindow, onCancelConfirmWindow, onConfirmConfirmWindow };
};

export default useConfirmWindow;
