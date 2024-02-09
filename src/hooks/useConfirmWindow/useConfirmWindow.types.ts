import { IConfirmWindowValue } from '../../contexts/confirmWindowContext/ConfrimWindowContext.types';

export interface IOpenConfirmWindowOptions {
  title?: IConfirmWindowValue['title'];
  confirmButtonText?: IConfirmWindowValue['confirmButtonText'];
  cancelButtonText?: IConfirmWindowValue['cancelButtonText'];
  onCancel?: IConfirmWindowValue['onCancel'];
}

export type IOpenConfirmWindowContent = IConfirmWindowValue['content'];
export type IOpenConfirmWindowOnConfirm = IConfirmWindowValue['onConfirm'];
