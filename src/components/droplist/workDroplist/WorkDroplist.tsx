import CounterDroplist from '../counterDroplist/CounterDroplist';
import { WorkDroplistProps } from './WorkDroplist.types';

const WorkDroplist = ({ onChange }: WorkDroplistProps) => {
  const initialValue = '50';

  const handleChangeValue = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <CounterDroplist onChange={handleChangeValue} initialValue={initialValue}>
      <option value="50">50</option>
      <option value="45">45</option>
      <option value="40">40</option>
      <option value="35">35</option>
      <option value="30">30</option>
      <option value="25">25</option>
      <option value="20">20</option>
      <option value="15">15</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </CounterDroplist>
  );
};
export default WorkDroplist;
