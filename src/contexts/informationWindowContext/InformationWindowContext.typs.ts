import React, { ReactNode } from "react";

export interface IInformationWindowValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: ReactNode;
  setContent: React.Dispatch<React.SetStateAction<ReactNode>>;
  buttonText: string;
  setButtonText: React.Dispatch<React.SetStateAction<string>>;
}
