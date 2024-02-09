import React, { ReactNode } from 'react';

type Nullable<T> = T | null;

export interface IConfirmWindowValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: ReactNode;
  setContent: React.Dispatch<React.SetStateAction<ReactNode>>;
  confirmButtonText: string;
  setConfirmButtonText: React.Dispatch<React.SetStateAction<string>>;
  cancelButtonText: string;
  setCancelButtonText: React.Dispatch<React.SetStateAction<string>>;
  onConfirm: Nullable<() => any>;
  setOnConfirm: React.Dispatch<React.SetStateAction<Nullable<() => any>>>;
  onCancel: Nullable<() => any>;
  setOnCancel: React.Dispatch<React.SetStateAction<Nullable<() => any>>>;
}
