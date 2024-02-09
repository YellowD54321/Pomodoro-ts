import { IInformationWindowValue } from '../../contexts/informationWindowContext/InformationWindowContext.typs';

export interface IOpenInformationWindowOptions {
  title?: IInformationWindowValue['title'];
  buttonText?: IInformationWindowValue['buttonText'];
  onClose: IInformationWindowValue['onClose'];
}

export type IOpenInformationWindowContent = IInformationWindowValue['content'];
