import { PropsWithChildren, createContext, useState } from "react";
import { IConfirmWindowValue } from "./ConfrimWindowContext.types";

export const defaultValue = {
  isOpen: false,
  title: "",
  content: "",
  confirmButtonText: "Confirm",
  cancelButtonText: "Cancel",
  onConfirm: null,
  onCancel: null,
} as IConfirmWindowValue;

export const ConfirmWindowContext = createContext(defaultValue);

export const ConfirmWindowProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(defaultValue.isOpen);
  const [title, setTitle] = useState(defaultValue.title);
  const [content, setContent] = useState(defaultValue.content);
  const [confirmButtonText, setConfirmButtonText] = useState(
    defaultValue.confirmButtonText
  );
  const [cancelButtonText, setCancelButtonText] = useState(
    defaultValue.cancelButtonText
  );
  const [onConfirm, setOnConfirm] = useState(defaultValue.onConfirm);
  const [onCancel, setOnCancel] = useState(defaultValue.onCancel);

  return (
    <ConfirmWindowContext.Provider
      value={{
        isOpen,
        setIsOpen,
        title,
        setTitle,
        content,
        setContent,
        confirmButtonText,
        setConfirmButtonText,
        cancelButtonText,
        setCancelButtonText,
        onConfirm,
        setOnConfirm,
        onCancel,
        setOnCancel,
      }}
    >
      {children}
    </ConfirmWindowContext.Provider>
  );
};

export const ConfirmWindowConsumer = ConfirmWindowContext.Consumer;

export default ConfirmWindowContext;
