import { useContext } from "react";
import InformationWindowContext, {
  defaultValue,
} from "../../contexts/informationWindowContext/InformationWindowContext";
import { IInformationWindowValue } from "../../contexts/informationWindowContext/InformationWindowContext.typs";

const useInformationWindow = () => {
  const { setIsOpen, setTitle, setContent, setButtonText } = useContext(
    InformationWindowContext
  );

  const openInformationWindow = (
    content: IInformationWindowValue["content"],
    { title = "", buttonText = "" }: IInformationWindowValue
  ) => {
    setIsOpen(true);
    setTitle(title);
    setContent(content);
    setButtonText(buttonText);
  };

  const closeInformationWindow = () => {
    setIsOpen(false);
    setTitle(defaultValue.title);
    setContent(defaultValue.content);
    setButtonText(defaultValue.buttonText);
  };

  return { openInformationWindow, closeInformationWindow };
};

export default useInformationWindow;
