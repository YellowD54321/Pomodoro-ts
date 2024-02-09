import { useContext } from 'react';
import CounterStatusContext from '../../../contexts/counterPageContext/CounterStatusContext';
import BasicCounter from '../basicCounter/BasicCounter';
import { WorkCounterProps } from './WorkCounter.types';

const WorkCounter = ({ time, setTime, initialTime }: WorkCounterProps) => {
  const { workStatus } = useContext(CounterStatusContext);
  return (
    <BasicCounter
      time={time}
      setTime={setTime}
      status={workStatus}
      initialTime={initialTime}
    />
  );
};

export default WorkCounter;
