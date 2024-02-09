import { BasicCounterProps } from '../basicCounter/BasicCounter.types';

export type RestCounterProps = Omit<BasicCounterProps, 'status'>;
