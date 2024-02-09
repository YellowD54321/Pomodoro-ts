import { MouseEventHandler, ReactNode } from 'react';

export interface IConfirmWindow {
  title?: string;
  content?: ReactNode;
  confirmButtonText?: string;
  cancelButtonText?: string;
  isOpen: boolean;
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onConfirm: MouseEventHandler<HTMLButtonElement>;
}
