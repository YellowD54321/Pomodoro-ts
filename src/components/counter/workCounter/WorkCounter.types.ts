import { BasicCounterProps } from '../basicCounter/BasicCounter.types';

export type WorkCounterProps = Omit<BasicCounterProps, 'status'>;
