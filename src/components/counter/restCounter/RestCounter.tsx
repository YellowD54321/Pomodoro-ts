import { useContext } from 'react';
import CounterStatusContext from '../../../contexts/counterPageContext/CounterStatusContext';
import BasicCounter from '../basicCounter/BasicCounter';
import { RestCounterProps } from './RestCounter.types';

const RestCounter = ({ time, setTime, initialTime }: RestCounterProps) => {
  const { restStatus } = useContext(CounterStatusContext);
  return (
    <BasicCounter
      time={time}
      setTime={setTime}
      status={restStatus}
      initialTime={initialTime}
    />
  );
};

export default RestCounter;
