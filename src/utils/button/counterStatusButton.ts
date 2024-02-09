import { ButtonSizeType, CounterStatusType } from '../../types';

export const getSize = (value: CounterStatusType): ButtonSizeType => {
  switch (value) {
    case 'start':
      return 'md';
    case 'pause':
      return 'sm';
    case 'stop':
      return 'md';
    default:
      return 'md';
  }
};

export const getDisplayContent = (value: CounterStatusType) => {
  switch (value) {
    case 'start':
      return 'Start';
    case 'pause':
      return 'Pause';
    case 'stop':
      return 'Stop';
    default:
      return 'unknow';
  }
};
