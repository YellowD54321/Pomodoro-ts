import { PropsWithChildren, createContext, useState } from "react";
import { IInformationWindowValue } from "./InformationWindowContext.typs";

export const defaultValue = {
  isOpen: false,
  title: "",
  content: "",
  buttonText: "OK",
} as IInformationWindowValue;

export const InformationWindowContext = createContext(defaultValue);

export const InformationWindowProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(defaultValue.isOpen);
  const [title, setTitle] = useState(defaultValue.title);
  const [content, setContent] = useState(defaultValue.content);
  const [buttonText, setButtonText] = useState(defaultValue.buttonText);

  return (
    <InformationWindowContext.Provider
      value={{
        isOpen,
        setIsOpen,
        title,
        setTitle,
        content,
        setContent,
        buttonText,
        setButtonText,
      }}
    >
      {children}
    </InformationWindowContext.Provider>
  );
};

export const InformationWindowConsumer = InformationWindowContext.Consumer;

export default InformationWindowContext;
