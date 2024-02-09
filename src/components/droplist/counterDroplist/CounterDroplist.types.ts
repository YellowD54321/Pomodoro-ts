import { SelectHTMLAttributes } from 'react';

export interface CounterDroplistProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  initialValue: string;
}
