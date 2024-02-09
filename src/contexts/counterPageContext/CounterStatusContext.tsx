import { createContext, useState } from 'react';
import { CounterStatusType } from '../../types';

interface StatusType {
  workStatus: CounterStatusType;
  restStatus: CounterStatusType;
  setWorkStatus: React.Dispatch<React.SetStateAction<CounterStatusType>>;
  setRestStatus: React.Dispatch<React.SetStateAction<CounterStatusType>>;
}

const defaultStatus = {
  workStatus: 'stop',
  restStatus: 'stop',
} as StatusType;

export const CounterStatusContext = createContext(defaultStatus);

export const CounterStatusProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [workStatus, setWorkStatus] = useState(defaultStatus.workStatus);
  const [restStatus, setRestStatus] = useState(defaultStatus.restStatus);

  return (
    <CounterStatusContext.Provider
      value={{ workStatus, restStatus, setWorkStatus, setRestStatus }}
    >
      {children}
    </CounterStatusContext.Provider>
  );
};

export const CounterStatusConsumer = CounterStatusContext.Consumer;

export default CounterStatusContext;
