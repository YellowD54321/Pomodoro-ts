export type CounterStatusType = 'start' | 'pause' | 'stop';

export type ButtonSizeType = 'lg' | 'md' | 'sm';

export interface CounterStatusesType {
  workStatus: CounterStatusType;
  restStatus: CounterStatusType;
}

export type Nullable<T> = null | T;

export enum INTERACTION_EMOJI {
  LIKE = 'LIKE',
  WOW = 'WOW',
  HEART = 'HEART',
}
